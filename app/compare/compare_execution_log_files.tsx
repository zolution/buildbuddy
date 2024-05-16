import React from "react";
import Select, { Option } from "../components/select/select";
import rpcService from "../service/rpc_service";
import { OutlinedButton } from "../components/button/button";
import { build_event_stream } from "../../proto/build_event_stream_ts_proto";
import { tools } from "../../proto/spawn_ts_proto";
import format from "../format/format";
import error_service from "../errors/error_service";
import * as varint from "varint";
import { ArrowRight, File } from "lucide-react";
import DigestComponent from "../components/digest/digest";
import Link from "../components/link/link";
import InvocationModel from "../invocation/invocation_model";

interface Props {
  modelA: InvocationModel;
  modelB: InvocationModel;
  search: URLSearchParams;
  filter: string;
}

interface State {
  loading: boolean;
  sort: string;
  direction: "asc" | "desc";
  limit: number;
  logA: tools.protos.ExecLogEntry[] | undefined;
  logB: tools.protos.ExecLogEntry[] | undefined;
}

export default class CompareExecutionLogFilesComponent extends React.Component<Props, State> {
  state: State = {
    loading: true,
    sort: "none",
    direction: "desc",
    limit: 100,
    logA: undefined,
    logB: undefined,
  };

  componentDidMount() {
    this.fetchLogs();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.modelA !== prevProps.modelA || this.props.modelB !== prevProps.modelB) {
      this.fetchLogs();
    }
  }

  getExecutionLogFile(model: InvocationModel): build_event_stream.File | undefined {
    return model.buildToolLogs?.log.find(
      (log: build_event_stream.File) =>
        (log.name == "execution.log" || log.name == "execution_log.binpb.zst") &&
        log.uri &&
        Boolean(log.uri.startsWith("bytestream://"))
    );
  }

  fetchLogs() {
    if (!this.state.logA) {
      this.fetchLog(this.props.modelA)
        .then((log) => this.setState({ logA: log }))
        .catch((e) => error_service.handleError(e))
        .finally(() => this.setState({ loading: false }));
    }
    if (!this.state.logB) {
      this.fetchLog(this.props.modelB)
        .then((log) => this.setState({ logB: log }))
        .catch((e) => error_service.handleError(e))
        .finally(() => this.setState({ loading: false }));
    }
  }

  fetchLog(model?: InvocationModel) {
    if (!model) return Promise.resolve(undefined);

    if (!this.getExecutionLogFile(model)) {
      this.setState({ loading: false });
    }

    let logFile = this.getExecutionLogFile(model);
    if (!logFile?.uri) return Promise.resolve(undefined);

    const init = {
      // Set the stored encoding header to prevent the server from double-compressing.
      headers: { "X-Stored-Encoding-Hint": "zstd" },
    };

    this.setState({ loading: true });
    return rpcService
      .fetchBytestreamFile(logFile.uri, model.getInvocationId(), "arraybuffer", { init })
      .then(async (body) => {
        if (body === null) throw new Error("response body is null");
        let entries: tools.protos.ExecLogEntry[] = [];
        let byteArray = new Uint8Array(body);
        for (var offset = 0; offset < body.byteLength; ) {
          let length = varint.decode(byteArray, offset);
          let bytes = varint.decode.bytes || 0;
          offset += bytes;
          entries.push(tools.protos.ExecLogEntry.decode(byteArray.subarray(offset, offset + length)));
          offset += length;
        }
        return entries;
      });
  }

  sort(
    a: { a: tools.protos.ExecLogEntry; b: tools.protos.ExecLogEntry },
    b: { a: tools.protos.ExecLogEntry; b: tools.protos.ExecLogEntry }
  ): number {
    let first = this.state.direction == "asc" ? a : b;
    let second = this.state.direction == "asc" ? b : a;

    switch (this.state.sort) {
      case "size":
        return +(first.a.file?.digest?.sizeBytes || 0) - +(second.a.file?.digest?.sizeBytes || 0);
      case "path":
        return (first.a.file?.path || "").localeCompare(second.a.file?.path || "");
    }
    return 0;
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    } as Record<keyof State, any>);
  }

  handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      sort: event.target.value,
    });
  }

  handleMoreClicked() {
    this.setState({ limit: this.state.limit + 100 });
  }

  handleAllClicked() {
    this.setState({ limit: Number.MAX_SAFE_INTEGER });
  }

  getUrl(model: InvocationModel, digest: tools.protos.Digest, outputFilename: string): string {
    let params: Record<string, string> = {
      bytestream_url: model.getBytestreamURL(digest),
      invocation_id: model.getInvocationId(),
      filename: outputFilename,
    };
    return `/code/buildbuddy-io/buildbuddy/?${new URLSearchParams(params).toString()}`;
  }

  getCompareUrl(
    modelA: InvocationModel,
    digestA: tools.protos.Digest,
    outputFilenameA: string,
    modelB: InvocationModel,
    digestB: tools.protos.Digest,
    outputFilenameB: string
  ): string {
    let params: Record<string, string> = {
      bytestream_url: modelA.getBytestreamURL(digestA),
      invocation_id: modelA.getInvocationId(),
      filename: outputFilenameA,

      compare_bytestream_url: modelB.getBytestreamURL(digestB),
      compare_invocation_id: modelB.getInvocationId(),
      compare_filename: outputFilenameB,
    };
    return `/code/buildbuddy-io/buildbuddy/?${new URLSearchParams(params).toString()}#diff`;
  }

  render() {
    if (this.state.loading) {
      return <div className="loading" />;
    }
    if (!this.state.logA?.length) {
      return <div className="invocation-execution-empty-state">No execution log actions for this invocation.</div>;
    }

    const filesA = this.state.logA?.filter((l) => l.type == "file") || [];
    const filesB = this.state.logB?.filter((l) => l.type == "file") || [];

    let newFiles: tools.protos.ExecLogEntry[] = [];
    let unchangdFiles: tools.protos.ExecLogEntry[] = [];
    let deletedFiles: tools.protos.ExecLogEntry[] = [];
    let changedFiles: { a: tools.protos.ExecLogEntry; b: tools.protos.ExecLogEntry }[] = [];

    let fileMap = new Map<string, tools.protos.ExecLogEntry>();
    for (let a of filesA) {
      fileMap.set(a.file?.path || "", a);
    }

    for (let b of filesB) {
      let a = fileMap.get(b.file?.path || "");
      if (!a) {
        newFiles.push(b);
        continue;
      }
      if (a && a.file?.digest?.hash != b.file?.digest?.hash) {
        changedFiles.push({ a, b });
        fileMap.delete(b.file?.path || "");
        continue;
      }
      if (a && a.file?.digest?.hash == b.file?.digest?.hash) {
        unchangdFiles.push(b);
        fileMap.delete(b.file?.path || "");
        continue;
      }
    }

    for (let f of fileMap) {
      deletedFiles.push(f[1]);
    }

    return (
      <div>
        <div className={`card expanded`}>
          <div className="content">
            <div className="invocation-content-header">
              <div className="title">Changed Files ({format.formatWithCommas(changedFiles.length)}) </div>
              <div className="invocation-sort-controls">
                <span className="invocation-sort-title">Sort by</span>
                <Select onChange={this.handleSortChange.bind(this)} value={this.state.sort}>
                  <Option value="none">None</Option>
                  <Option value="size">Size</Option>
                  <Option value="path">Path</Option>
                </Select>
                <span className="group-container">
                  <div>
                    <input
                      id="direction-asc"
                      checked={this.state.direction == "asc"}
                      onChange={this.handleInputChange.bind(this)}
                      value="asc"
                      name="direction"
                      type="radio"
                    />
                    <label htmlFor="direction-asc">Asc</label>
                  </div>
                  <div>
                    <input
                      id="direction-desc"
                      checked={this.state.direction == "desc"}
                      onChange={this.handleInputChange.bind(this)}
                      value="desc"
                      name="direction"
                      type="radio"
                    />
                    <label htmlFor="direction-desc">Desc</label>
                  </div>
                </span>
              </div>
            </div>
            <div>
              <div className="invocation-execution-table">
                {changedFiles
                  .sort(this.sort.bind(this))
                  .slice(0, this.state.limit)
                  .map((diff) => (
                    <Link
                      key={diff.a.id}
                      className="invocation-execution-row invocation-execution-row-file"
                      href={this.getCompareUrl(
                        this.props.modelA,
                        diff.a.file?.digest!,
                        diff.a.file?.path!,
                        this.props.modelB,
                        diff.b.file?.digest!,
                        diff.b.file?.path!
                      )}>
                      <div className="invocation-execution-row-image">
                        <File className="icon" />
                      </div>
                      <div>
                        <div className="invocation-execution-row-header">
                          <span className="invocation-execution-row-header-status">{diff.a.file?.path}</span>
                          {diff.a.file?.digest && <DigestComponent digest={diff.a.file.digest} expanded={false} />}
                          <ArrowRight className="icon" />
                          {diff.b.file?.digest && <DigestComponent digest={diff.b.file.digest} expanded={false} />}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              {changedFiles.length > this.state.limit && (
                <div className="more-buttons">
                  <OutlinedButton onClick={this.handleMoreClicked.bind(this)}>See more files</OutlinedButton>
                  <OutlinedButton onClick={this.handleAllClicked.bind(this)}>See all files</OutlinedButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
