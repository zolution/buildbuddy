package remotebazel

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io"
	"net/url"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"regexp"
	"runtime"
	"strconv"
	"strings"
	"syscall"
	"time"

	"github.com/AlecAivazis/survey/v2"
	"github.com/buildbuddy-io/buildbuddy/cli/arg"
	"github.com/buildbuddy-io/buildbuddy/cli/log"
	"github.com/buildbuddy-io/buildbuddy/cli/login"
	"github.com/buildbuddy-io/buildbuddy/cli/parser"
	"github.com/buildbuddy-io/buildbuddy/cli/storage"
	"github.com/buildbuddy-io/buildbuddy/cli/terminal"
	"github.com/buildbuddy-io/buildbuddy/server/cache/dirtools"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/real_environment"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/cachetools"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/digest"
	"github.com/buildbuddy-io/buildbuddy/server/util/bazel"
	"github.com/buildbuddy-io/buildbuddy/server/util/grpc_client"
	"github.com/buildbuddy-io/buildbuddy/server/util/rexec"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"golang.org/x/sync/errgroup"
	"golang.org/x/sys/unix"
	"google.golang.org/grpc/metadata"

	cmnpb "github.com/buildbuddy-io/buildbuddy/proto/api/v1/common"
	bespb "github.com/buildbuddy-io/buildbuddy/proto/build_event_stream"
	bbspb "github.com/buildbuddy-io/buildbuddy/proto/buildbuddy_service"
	elpb "github.com/buildbuddy-io/buildbuddy/proto/eventlog"
	espb "github.com/buildbuddy-io/buildbuddy/proto/execution_stats"
	gitpb "github.com/buildbuddy-io/buildbuddy/proto/git"
	inpb "github.com/buildbuddy-io/buildbuddy/proto/invocation"
	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
	rnpb "github.com/buildbuddy-io/buildbuddy/proto/runner"
	bbflag "github.com/buildbuddy-io/buildbuddy/server/util/flag"
	bspb "google.golang.org/genproto/googleapis/bytestream"
)

const (
	BuildBuddyArtifactDir = "bb-out"

	escapeSeq                  = "\u001B["
	gitConfigSection           = "buildbuddy"
	gitConfigRemoteBazelRemote = "remote-bazel-remote-name"
	defaultRemoteExecutionURL  = "remote.buildbuddy.io"

	// Name of the dir where the remote runner should write bazel run scripts
	// (used to facilitate building a target remotely and running it locally).
	runScriptDirName = "bazel-run-scripts"
)

var (
	RemoteFlagset = flag.NewFlagSet("remote", flag.ContinueOnError)

	execOs                  = RemoteFlagset.String("os", "", "If set, requests execution on a specific OS.")
	execArch                = RemoteFlagset.String("arch", "", "If set, requests execution on a specific CPU architecture.")
	containerImage          = RemoteFlagset.String("container_image", "", "If set, requests execution on a specific runner image. Otherwise uses the default hosted runner version. A `docker://` prefix is required.")
	envInput                = bbflag.New(RemoteFlagset, "env", []string{}, "Environment variables to set in the runner environment. Key-value pairs can either be separated by '=' (Ex. --env=k1=val1), or if only a key is specified, the value will be taken from the invocation environment (Ex. --env=k2). To apply multiple env vars, pass the env flag multiple times (Ex. --env=k1=v1 --env=k2). If the same key is given twice, the latest will apply.")
	remoteRunner            = RemoteFlagset.String("remote_runner", defaultRemoteExecutionURL, "The Buildbuddy grpc target the remote runner should run on.")
	timeout                 = RemoteFlagset.Duration("timeout", 0, "If set, requests that have exceeded this timeout will be canceled automatically. (Ex. --timeout=15m; --timeout=2h)")
	execPropsFlag           = bbflag.New(RemoteFlagset, "runner_exec_properties", []string{}, "Exec properties that will apply to the *ci runner execution*. Key-value pairs should be separated by '=' (Ex. --runner_exec_properties=NAME=VALUE). Can be specified more than once. NOTE: If you want to apply an exec property to the bazel command that's run on the runner, just pass at the end of the command (Ex. bb remote build //... --remote_default_exec_properties=OSFamily=linux).")
	remoteHeaders           = bbflag.New(RemoteFlagset, "remote_run_header", []string{}, "Remote headers to be applied to the execution request for the remote run. Can be used to set platform properties containing secrets (Ex. --remote_run_header=x-buildbuddy-platform.SECRET_NAME=SECRET_VALUE). Can be specified more than once.")
	runRemotely             = RemoteFlagset.Bool("run_remotely", true, "For `run` commands, whether the target should be run remotely. If false, the target will be built remotely, and then fetched and run locally.")
	useSystemGitCredentials = RemoteFlagset.Bool("use_system_git_credentials", false, "Whether to use github auth pre-configured on the remote runner. If false, require https and an access token for git access.")
	runFromBranch           = RemoteFlagset.String("run_from_branch", "", "A GitHub branch to base the remote run off. If unset, the remote workspace will mirror your local workspace.")
	runFromCommit           = RemoteFlagset.String("run_from_commit", "", "A GitHub commit SHA to base the remote run off. If unset, the remote workspace will mirror your local workspace.")

	defaultBranchRefs = []string{"refs/heads/main", "refs/heads/master"}
)

func consoleCursorMoveUp(y int) {
	fmt.Print(escapeSeq + strconv.Itoa(y) + "A")
}

func consoleCursorMoveBeginningLine() {
	fmt.Print(escapeSeq + "1G")
}

func consoleDeleteLines(n int) {
	fmt.Print(escapeSeq + strconv.Itoa(n) + "M")
}

type RunOpts struct {
	Server            string
	APIKey            string
	Args              []string
	WorkspaceFilePath string
}

type RepoConfig struct {
	Root          string
	URL           string
	Ref           string
	CommitSHA     string
	Patches       [][]byte
	DefaultBranch string
}

func determineRemote(repo *git.Repository) (*git.Remote, error) {
	remotes, err := repo.Remotes()
	if err != nil {
		return nil, err
	}

	if len(remotes) == 0 {
		return nil, status.FailedPreconditionError("the git repository must have a remote configured to use remote Bazel")
	}

	if len(remotes) == 1 {
		return remotes[0], nil
	}

	conf, err := repo.Config()
	if err != nil {
		return nil, err
	}
	confRemote := conf.Raw.Section(gitConfigSection).Option(gitConfigRemoteBazelRemote)
	if confRemote != "" {
		r, err := repo.Remote(confRemote)
		if err == nil {
			return r, nil
		}
		log.Debugf("Could not find remote %q saved in config, ignoring", confRemote)
	}

	var remoteNames []string
	for _, r := range remotes {
		if len(r.Config().URLs) > 0 && r.Config().Name != "" {
			remoteNames = append(remoteNames, fmt.Sprintf("%s (%s)", r.Config().Name, r.Config().URLs[0]))
		}
	}

	if len(remoteNames) == 0 {
		return nil, status.InvalidArgumentErrorf("invalid .git/config - no remote URLs")
	}

	selectedRemoteAndURL := ""
	if len(remoteNames) == 1 {
		selectedRemoteAndURL = remoteNames[0]
	} else {
		prompt := &survey.Select{
			Message: "Select the git remote that will be used by the remote Bazel instance to fetch your repo:",
			Options: remoteNames,
		}
		if err := survey.AskOne(prompt, &selectedRemoteAndURL); err != nil {
			return nil, err
		}
	}

	selectedRemote := strings.Split(selectedRemoteAndURL, " (")[0]
	remote, err := repo.Remote(selectedRemote)
	if err != nil {
		return nil, err
	}

	conf.Raw.Section(gitConfigSection).SetOption(gitConfigRemoteBazelRemote, selectedRemote)
	if err := repo.SetConfig(conf); err != nil {
		return nil, status.WrapError(err, "invalid .git/config")
	}

	return remote, nil
}

func determineDefaultBranch(repo *git.Repository) (string, error) {
	branches, err := repo.Branches()
	if err != nil {
		return "", status.UnknownErrorf("could not list branches: %s", err)
	}

	allBranches := make(map[string]struct{})
	err = branches.ForEach(func(branch *plumbing.Reference) error {
		allBranches[string(branch.Name())] = struct{}{}
		return nil
	})
	if err != nil {
		return "", status.UnknownErrorf("could not iterate over branches: %s", err)
	}

	for _, defaultBranch := range defaultBranchRefs {
		if _, ok := allBranches[defaultBranch]; ok {
			return defaultBranch, nil
		}
	}

	return "", status.NotFoundErrorf("could not determine default branch")
}

func runGit(args ...string) (string, error) {
	return runCommand("git", args...)
}

func runCommand(name string, args ...string) (string, error) {
	stdout := bytes.Buffer{}
	stderr := bytes.Buffer{}
	cmd := exec.Command(name, args...)
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	if err := cmd.Run(); err != nil {
		if _, ok := err.(*exec.ExitError); ok {
			return stdout.String(), err
		}
		return stdout.String(), status.UnknownErrorf("error running %s %s: %s\n%s", name, args, err, stderr.String())
	}
	return stdout.String(), nil
}

func isBinaryFile(path string) (bool, error) {
	fileDetails, err := runCommand("file", "--mime", path)
	if err != nil {
		return false, err
	}
	isBinary := strings.Contains(fileDetails, "charset=binary")
	return isBinary, nil
}

func diffUntrackedFile(path string) (string, error) {
	isBinary, err := isBinaryFile(path)
	if err != nil {
		return "", err
	}

	args := []string{"diff", "--no-index", "/dev/null", path}
	if isBinary {
		args = append(args, "--binary")
	}
	patch, err := runGit(args...)
	if err != nil {
		if _, ok := err.(*exec.ExitError); ok {
			return patch, nil
		}
		return "", err
	}

	return patch, nil
}

func Config(path string) (*RepoConfig, error) {
	repo, err := git.PlainOpenWithOptions(path, &git.PlainOpenOptions{DetectDotGit: true})
	if err != nil {
		return nil, status.WrapError(err, "open git repo")
	}

	remote, err := determineRemote(repo)
	if err != nil {
		return nil, status.WrapError(err, "determine remote")
	}
	if len(remote.Config().URLs) == 0 {
		return nil, status.FailedPreconditionErrorf("remote %q does not have a fetch URL", remote.Config().Name)
	}
	fetchURL := remote.Config().URLs[0]
	log.Debugf("Using fetch URL: %s", fetchURL)

	branch, commit, err := getBaseBranchAndCommit(repo)
	if err != nil {
		return nil, status.WrapError(err, "get base branch and commit")
	}

	defaultBranch, err := determineDefaultBranch(repo)
	if err != nil {
		log.Warnf("Failed to fetch default branch: %s", err)
	}

	wt, err := repo.Worktree()
	if err != nil {
		return nil, status.UnknownErrorf("could not determine git repo root")
	}

	repoConfig := &RepoConfig{
		Root:          wt.Filesystem.Root(),
		URL:           fetchURL,
		CommitSHA:     commit,
		Ref:           branch,
		DefaultBranch: defaultBranch,
	}

	if *runFromBranch == "" && *runFromCommit == "" {
		patches, err := generatePatches(commit)
		if err != nil {
			return nil, status.WrapError(err, "generate patches")
		}
		repoConfig.Patches = patches
	}

	return repoConfig, nil
}

// getBaseBranchAndCommit returns the git branch and commit that the remote run
// should be based off
func getBaseBranchAndCommit(repo *git.Repository) (branch string, commit string, err error) {
	branch = *runFromBranch
	commit = *runFromCommit
	if branch != "" || commit != "" {
		return branch, commit, nil
	}

	head, err := repo.Head()
	if err != nil {
		return "", "", status.WrapError(err, "get repo head")
	}

	currentBranch := head.Name().Short()
	if !head.Name().IsBranch() {
		// Handle detached head state
		detachedHeadOutput, _ := runGit("branch")
		regex := regexp.MustCompile(".*detached at ([^)]+).*")
		matches := regex.FindStringSubmatch(detachedHeadOutput)
		if len(matches) != 2 {
			return "", "", status.UnknownErrorf("unexpected branch state %s", detachedHeadOutput)
		}
		currentBranch = matches[1]
	}

	remoteBranchOutput, err := runGit("ls-remote", "origin", currentBranch)
	if err != nil {
		return "", "", status.WrapError(err, fmt.Sprintf("check if branch %s exists remotely", currentBranch))
	}
	currentBranchExistsRemotely := remoteBranchOutput != ""

	if currentBranchExistsRemotely {
		branch = currentBranch

		currentCommitHash, err := runGit("rev-parse", "HEAD")
		if err != nil {
			return "", "", status.WrapError(err, "get current commit hash")
		}
		currentCommitHash = strings.TrimSuffix(currentCommitHash, "\n")

		remoteCommitOutput, err := runGit("branch", "-r", "--contains", currentCommitHash)
		if err != nil {
			return "", "", status.WrapError(err, fmt.Sprintf("check if commit %s exists remotely", currentCommitHash))
		}
		currentCommitExistsRemotely := strings.Contains(remoteCommitOutput, fmt.Sprintf("origin/%s", branch))
		if currentCommitExistsRemotely {
			commit = currentCommitHash
		} else {
			// Get the head commit of the remote branch
			remoteHeadOutput, err := runGit("ls-remote", "--heads", "origin", branch)
			if err != nil {
				return "", "", status.WrapError(err, fmt.Sprintf("get remote head of %s", branch))
			}
			remoteHeadParsed := strings.Fields(remoteHeadOutput)
			if len(remoteHeadParsed) < 1 {
				return "", "", errors.New("unexpected remote head output: " + remoteHeadOutput)
			}
			commit = remoteHeadParsed[0]
		}
	} else {
		// If the current branch does not exist remotely, the remote runner will
		// not be able to fetch it. In this case, use the default branch for the repo
		defaultBranch, err := determineDefaultBranch(repo)
		if err != nil {
			return "", "", status.WrapError(err, "get default branch")
		}
		branch = defaultBranch

		defaultBranchCommitHash, err := repo.ResolveRevision(plumbing.Revision(defaultBranch))
		if err != nil {
			return "", "", status.WrapError(err, "get default branch commit hash")
		}
		commit = defaultBranchCommitHash.String()
	}

	log.Debugf("Using base branch: %s", branch)
	log.Debugf("Using base commit hash: %s", commit)

	return branch, commit, nil
}

// generates diffs between the current state of the repo and `baseCommit`
func generatePatches(baseCommit string) ([][]byte, error) {
	modifiedFiles, err := runGit("diff", baseCommit, "--name-only")
	if err != nil {
		return nil, status.WrapError(err, "get modified files")
	}
	modifiedFiles = strings.Trim(modifiedFiles, "\n")

	binaryFilesToExclude := make([]string, 0)
	binaryFiles := make([]string, 0)
	if modifiedFiles != "" {
		for _, mf := range strings.Split(modifiedFiles, "\n") {
			isBinary, err := isBinaryFile(mf)
			if err != nil {
				return nil, status.WrapError(err, "check binary file")
			}
			if isBinary {
				binaryFilesToExclude = append(binaryFilesToExclude, fmt.Sprintf(":!%s", mf))
				binaryFiles = append(binaryFiles, mf)
			}
		}
	}

	patches := make([][]byte, 0)

	// Generate patches for non-binary files
	args := []string{"diff", baseCommit}
	if len(binaryFilesToExclude) > 0 {
		args = append(args, binaryFilesToExclude...)
	}
	patch, err := runGit(args...)
	if err != nil {
		return nil, status.WrapError(err, "git diff")
	}
	if patch != "" {
		patches = append(patches, []byte(patch))
	}

	// Generate patches for binary files
	if len(binaryFiles) > 0 {
		binaryArgs := append([]string{"diff", baseCommit, "--binary", "--"}, binaryFiles...)
		binaryPatch, err := runGit(binaryArgs...)
		if err != nil {
			return nil, status.WrapError(err, "git diff --binary")
		}
		if binaryPatch != "" {
			patches = append(patches, []byte(binaryPatch))
		}
	}

	// Generate patches for non-tracked files
	untrackedFiles, err := runGit("ls-files", "--others", "--exclude-standard")
	if err != nil {
		return nil, status.WrapError(err, "get untracked files")
	}
	untrackedFiles = strings.Trim(untrackedFiles, "\n")
	if untrackedFiles != "" {
		for _, uf := range strings.Split(untrackedFiles, "\n") {
			if strings.HasPrefix(uf, BuildBuddyArtifactDir+"/") {
				continue
			}
			patch, err := diffUntrackedFile(uf)
			if err != nil {
				return nil, status.WrapError(err, "diff untracked file")
			}
			patches = append(patches, []byte(patch))
		}
	}

	return patches, nil
}

func getTermWidth() int {
	size, err := unix.IoctlGetWinsize(int(os.Stdout.Fd()), unix.TIOCGWINSZ)
	if err != nil {
		return 80
	}
	return int(size.Col)
}

func splitLogBuffer(buf []byte) []string {
	var lines []string

	termWidth := getTermWidth()
	for _, line := range strings.Split(string(buf), "\n") {
		for len(line) > termWidth {
			lines = append(lines, line[0:termWidth])
			line = line[termWidth:]
		}
		lines = append(lines, line)
	}
	return lines
}

// streamLogs streams the logs with real-time progress updates. It uses ANSI
// escape sequences to delete and rewrite outdated progress messages
func streamLogs(ctx context.Context, bbClient bbspb.BuildBuddyServiceClient, invocationID string) error {
	chunkID := ""
	moveBack := 0

	drawChunk := func(chunk *elpb.GetEventLogChunkResponse) {
		// Are we redrawing the current chunk?
		if moveBack > 0 {
			consoleCursorMoveUp(moveBack)
			consoleCursorMoveBeginningLine()
			consoleDeleteLines(moveBack)
		}

		logLines := splitLogBuffer(chunk.GetBuffer())
		if !chunk.GetLive() {
			moveBack = 0
		} else {
			moveBack = len(logLines)
		}

		for _, l := range logLines {
			_, _ = os.Stdout.Write([]byte(l))
			_, _ = os.Stdout.Write([]byte("\n"))
		}
	}

	var chunks []*elpb.GetEventLogChunkResponse
	wasLive := false
	for {
		l, err := bbClient.GetEventLogChunk(ctx, &elpb.GetEventLogChunkRequest{
			InvocationId: invocationID,
			ChunkId:      chunkID,
			MinLines:     100,
		})
		if err != nil {
			return err
		}

		chunks = append(chunks, l)
		// If the current chunk was live but is no longer then delay redraw
		// until the next chunk is retrieved. The "volatile" part of the
		// chunk moves to the next chunk when a chunk is finalized. Without
		// the delay, we would print the chunk without the volatile portion
		// which will look like a "flicker" once the volatile portion is
		// printed again.
		if !wasLive || l.GetLive() {
			for _, chunk := range chunks {
				drawChunk(chunk)
			}
			chunks = nil
		}
		wasLive = l.GetLive()

		if l.GetNextChunkId() == "" {
			break
		}

		if l.GetNextChunkId() == chunkID {
			time.Sleep(1 * time.Second)
		}
		chunkID = l.GetNextChunkId()
	}
	return nil
}

// printLogs prints the logs with real-time streaming updates disabled
func printLogs(ctx context.Context, bbClient bbspb.BuildBuddyServiceClient, invocationID string) error {
	chunkID := ""

	for {
		l, err := bbClient.GetEventLogChunk(ctx, &elpb.GetEventLogChunkRequest{
			InvocationId: invocationID,
			ChunkId:      chunkID,
			MinLines:     100,
		})
		if err != nil {
			return err
		}

		if l.GetLive() {
			time.Sleep(1 * time.Second)
			continue
		}
		os.Stdout.Write(l.GetBuffer())

		if l.GetNextChunkId() == "" {
			break
		}
		chunkID = l.GetNextChunkId()
	}
	return nil
}

func downloadFile(ctx context.Context, bsClient bspb.ByteStreamClient, resourceName *digest.ResourceName, outFile string) error {
	if err := os.MkdirAll(filepath.Dir(outFile), 0755); err != nil {
		return err
	}
	out, err := os.Create(outFile)
	if err != nil {
		return err
	}
	defer out.Close()
	if err := cachetools.GetBlob(ctx, bsClient, resourceName, out); err != nil {
		return err
	}
	return nil
}

func lookupBazelInvocationOutputs(ctx context.Context, bbClient bbspb.BuildBuddyServiceClient, invocationID string) ([]*bespb.File, error) {
	childInRsp, err := bbClient.GetInvocation(ctx, &inpb.GetInvocationRequest{Lookup: &inpb.InvocationLookup{InvocationId: invocationID}})
	if err != nil {
		return nil, fmt.Errorf("could not retrieve invocation %q: %s", invocationID, err)
	}

	if len(childInRsp.GetInvocation()) < 1 {
		return nil, fmt.Errorf("invocation %s not found", invocationID)
	}
	inv := childInRsp.GetInvocation()[0]

	var outputs []*bespb.File
	for _, g := range inv.TargetGroups {
		// The `GetTarget` API only fetches file data for the general
		// STATUS_UNSPECIFIED status. For other statuses, it only returns metadata.
		if g.Status != cmnpb.Status_STATUS_UNSPECIFIED {
			continue
		}
		for _, t := range g.Targets {
			outputs = append(outputs, t.Files...)
		}
	}

	return outputs, nil
}

func bytestreamURIToResourceName(uri string) (*digest.ResourceName, error) {
	u, err := url.Parse(uri)
	if err != nil {
		return nil, err
	}
	r := strings.TrimPrefix(u.RequestURI(), "/")
	rn, err := digest.ParseDownloadResourceName(r)
	if err != nil {
		return nil, err
	}
	return rn, nil
}

// TODO(vadim): add interactive progress bar for downloads
// TODO(vadim): parallelize downloads
func downloadOutputs(ctx context.Context, env environment.Env, mainOutputs []*bespb.File, supportingOutputs []*bespb.File, supportingDirs []*bespb.Tree, outputBaseDir string) ([]string, error) {
	bsClient := env.GetByteStreamClient()

	var mainLocalArtifacts []string
	download := func(f *bespb.File) (string, error) {
		r, err := bytestreamURIToResourceName(f.GetUri())
		if err != nil {
			return "", nil
		}
		outFile := filepath.Join(outputBaseDir, BuildBuddyArtifactDir)
		for _, p := range f.GetPathPrefix() {
			outFile = filepath.Join(outFile, p)
		}
		outFile = filepath.Join(outFile, f.GetName())
		if err := downloadFile(ctx, bsClient, r, outFile); err != nil {
			return "", err
		}
		return outFile, nil
	}
	for _, f := range mainOutputs {
		outFile, err := download(f)
		if err != nil {
			return nil, err
		}
		mainLocalArtifacts = append(mainLocalArtifacts, outFile)
	}
	// Supporting outputs (i.e. runtime files) are downloaded but not displayed to the user.
	for _, f := range supportingOutputs {
		if _, err := download(f); err != nil {
			return nil, err
		}
	}
	for _, d := range supportingDirs {
		rn, err := bytestreamURIToResourceName(d.GetUri())
		if err != nil {
			return nil, err
		}
		tree := &repb.Tree{}
		if err := cachetools.GetBlobAsProto(ctx, bsClient, rn, tree); err != nil {
			return nil, err
		}
		outDir := filepath.Join(outputBaseDir, BuildBuddyArtifactDir, d.GetName())
		if err := os.MkdirAll(outDir, 0755); err != nil {
			return nil, err
		}
		if _, err := dirtools.DownloadTree(ctx, env, rn.GetInstanceName(), rn.GetDigestFunction(), tree, outDir, &dirtools.DownloadTreeOpts{}); err != nil {
			return nil, err
		}
	}

	// Format as relative paths with indentation for human consumption.
	var relArtifacts []string
	for _, a := range mainLocalArtifacts {
		rp, err := filepath.Rel(outputBaseDir, a)
		if err != nil {
			return nil, err
		}
		relArtifacts = append(relArtifacts, "  "+rp)
	}
	fmt.Printf("Downloaded artifacts:\n%s\n", strings.Join(relArtifacts, "\n"))
	return mainLocalArtifacts, nil
}

func Run(ctx context.Context, opts RunOpts, repoConfig *RepoConfig) (int, error) {
	env := real_environment.NewBatchEnv()

	ctx = metadata.AppendToOutgoingContext(ctx, "x-buildbuddy-api-key", opts.APIKey)

	// Handle interrupts to cancel the remote run.
	ctx, cancel := signal.NotifyContext(ctx, os.Interrupt, syscall.SIGTERM)
	defer cancel()

	conn, err := grpc_client.DialSimple(opts.Server)
	if err != nil {
		return 1, status.UnavailableErrorf("could not connect to BuildBuddy remote bazel service %q: %s", opts.Server, err)
	}
	bbClient := bbspb.NewBuildBuddyServiceClient(conn)

	reqOS := runtime.GOOS
	if *execOs != "" {
		reqOS = *execOs
	}
	reqArch := runtime.GOARCH
	if *execArch != "" {
		reqArch = *execArch
	}

	bazelArgs := opts.Args
	if !*runRemotely {
		// If we are running the target locally, remove the exec arguments for now,
		// and append them when we actually run it
		bazelArgs = arg.GetBazelArgs(opts.Args)

		// To support building the target on the remote runner and running it locally,
		// have Bazel write out a run script using the --script_path flag so we can
		// extract run options (i.e. args, runfile information) from the generated run script.
		bazelArgs = append(bazelArgs, fmt.Sprintf("--script_path=$BUILDBUDDY_CI_RUNNER_ROOT_DIR/%s/run.sh", runScriptDirName))
	}
	fetchOutputs := false
	runOutput := false
	bazelCmd, _ := parser.GetBazelCommandAndIndex(bazelArgs)
	if bazelCmd == "build" || (bazelCmd == "run" && !*runRemotely) {
		fetchOutputs = true
		if bazelCmd == "run" {
			runOutput = true
		}
	}

	envVars := make(map[string]string, 0)
	for _, envVar := range *envInput {
		// If a value was explicitly passed in, use that
		keyValArr := strings.SplitN(envVar, "=", 2)
		if len(keyValArr) == 2 {
			key := keyValArr[0]
			val := keyValArr[1]
			envVars[key] = val
			continue
		}

		// Otherwise pull the value from the local environment
		val := os.Getenv(envVar)
		envVars[envVar] = val
	}

	// If not explicitly set, set the build user (the user that initiated the build).
	if !contains(envVars, "BUILD_USER") {
		val := os.Getenv("BUILD_USER")
		if val == "" {
			val = os.Getenv("USER")
		}
		envVars["BUILD_USER"] = val
	}

	// If not explicitly set, try to set the default branch env var,
	// because it will allow us to fallback to snapshots for the default branch
	// if there is no snapshot for the current branch
	if !(contains(envVars, "GIT_REPO_DEFAULT_BRANCH") || contains(envVars, "GIT_BASE_BRANCH")) {
		defaultBranch := strings.TrimPrefix(repoConfig.DefaultBranch, "refs/heads/")
		envVars["GIT_REPO_DEFAULT_BRANCH"] = defaultBranch
	}

	if *useSystemGitCredentials {
		envVars["USE_SYSTEM_GIT_CREDENTIALS"] = "1"
	}

	platform, err := rexec.MakePlatform(*execPropsFlag...)
	if err != nil {
		return 1, status.InvalidArgumentErrorf("invalid exec properties - key value pairs must be separated by '=': %s", err)
	}

	req := &rnpb.RunRequest{
		GitRepo: &gitpb.GitRepo{
			RepoUrl:                 repoConfig.URL,
			UseSystemGitCredentials: *useSystemGitCredentials,
		},
		RepoState: &gitpb.RepoState{
			CommitSha: repoConfig.CommitSHA,
			Branch:    repoConfig.Ref,
		},
		Os:             reqOS,
		Arch:           reqArch,
		ContainerImage: *containerImage,
		Env:            envVars,
		ExecProperties: platform.Properties,
		RemoteHeaders:  *remoteHeaders,
		RunRemotely:    *runRemotely,
	}
	req.GetRepoState().Patch = append(req.GetRepoState().Patch, repoConfig.Patches...)

	// TODO(Maggie): Clean up after we've migrated fully to use `Steps`
	stepsMode := os.Getenv("STEPS_MODE") == "1"
	if stepsMode {
		req.Steps = []*rnpb.Step{
			{
				Run: fmt.Sprintf("bazel %s", strings.Join(bazelArgs, " ")),
			},
		}
	} else {
		req.BazelCommand = strings.Join(bazelArgs, " ")
	}

	if *timeout != 0 {
		req.Timeout = timeout.String()
	}

	encodedReq, err := json.Marshal(req)
	if err != nil {
		log.Debugf("Failed to marshall req: %s", err)
	}
	if len(encodedReq) > 0 {
		log.Debugf("Run request: %s", string(encodedReq))
	}

	log.Printf("\nWaiting for available remote runner...\n")
	rsp, err := bbClient.Run(ctx, req)
	if err != nil {
		return 1, status.UnknownErrorf("error running bazel: %s", err)
	}

	iid := rsp.GetInvocationId()
	log.Debugf("Invocation ID: %s", iid)

	// If the remote bazel process is canceled or killed, cancel the remote run
	isInvocationRunning := true
	go func() {
		<-ctx.Done()

		if !isInvocationRunning {
			return
		}

		// Use a non-cancelled context to ensure the remote executions are
		// canceled
		_, err = bbClient.CancelExecutions(context.WithoutCancel(ctx), &inpb.CancelExecutionsRequest{
			InvocationId: iid,
		})
		if err != nil {
			log.Warnf("Failed to cancel remote run: %s", err)
		}
	}()

	interactive := terminal.IsTTY(os.Stdin) && terminal.IsTTY(os.Stderr)
	if interactive {
		if err := streamLogs(ctx, bbClient, iid); err != nil {
			return 1, status.WrapError(err, "streaming logs")
		}
	} else {
		if err := printLogs(ctx, bbClient, iid); err != nil {
			return 1, status.WrapError(err, "streaming logs")
		}
	}
	isInvocationRunning = false

	eg := errgroup.Group{}
	var inRsp *inpb.GetInvocationResponse
	var exRsp *espb.GetExecutionResponse
	eg.Go(func() error {
		var err error
		inRsp, err = bbClient.GetInvocation(ctx, &inpb.GetInvocationRequest{Lookup: &inpb.InvocationLookup{InvocationId: iid}})
		if err != nil {
			return fmt.Errorf("could not retrieve invocation: %s", err)
		}
		if len(inRsp.GetInvocation()) == 0 {
			return fmt.Errorf("invocation not found")
		}
		return nil
	})
	eg.Go(func() error {
		var err error
		exRsp, err = bbClient.GetExecution(ctx, &espb.GetExecutionRequest{ExecutionLookup: &espb.ExecutionLookup{
			InvocationId: iid,
		}})
		if err != nil {
			return fmt.Errorf("could not retrieve ci_runner execution: %s", err)
		}
		if len(exRsp.GetExecution()) == 0 {
			return fmt.Errorf("ci_runner execution not found")
		}
		return nil
	})
	err = eg.Wait()
	if err != nil {
		return 1, err
	}

	childIID := ""
	runfilesRoot := ""
	var runfiles []*bespb.File
	var runfileDirectories []*bespb.Tree
	var defaultRunArgs []string
	for _, e := range inRsp.GetInvocation()[0].GetEvent() {
		if _, ok := e.GetBuildEvent().GetPayload().(*bespb.BuildEvent_ChildInvocationCompleted); ok {
			childIID = e.GetBuildEvent().GetId().GetChildInvocationCompleted().GetInvocationId()
		}
		if runOutput {
			if rta, ok := e.GetBuildEvent().GetPayload().(*bespb.BuildEvent_RunTargetAnalyzed); ok {
				runfilesRoot = rta.RunTargetAnalyzed.GetRunfilesRoot()
				runfiles = rta.RunTargetAnalyzed.GetRunfiles()
				runfileDirectories = rta.RunTargetAnalyzed.GetRunfileDirectories()
				defaultRunArgs = rta.RunTargetAnalyzed.GetArguments()
			}
		}
	}

	exitCode := int(exRsp.GetExecution()[0].ExitCode)
	if fetchOutputs && exitCode == 0 {
		if childIID != "" {
			conn, err := grpc_client.DialSimple(opts.Server)
			if err != nil {
				return 1, fmt.Errorf("could not communicate with sidecar: %s", err)
			}
			env.SetByteStreamClient(bspb.NewByteStreamClient(conn))
			env.SetContentAddressableStorageClient(repb.NewContentAddressableStorageClient(conn))
			ctx = metadata.AppendToOutgoingContext(ctx, "x-buildbuddy-api-key", opts.APIKey)

			mainOutputs, err := lookupBazelInvocationOutputs(ctx, bbClient, childIID)
			if err != nil {
				return 1, err
			}
			outputsBaseDir := filepath.Dir(opts.WorkspaceFilePath)
			outputs, err := downloadOutputs(ctx, env, mainOutputs, runfiles, runfileDirectories, outputsBaseDir)
			if err != nil {
				return 1, err
			}
			if runOutput {
				if len(outputs) > 1 {
					return 1, fmt.Errorf("run requested but target produced more than one artifact")
				}
				binPath := outputs[0]
				if err := os.Chmod(binPath, 0755); err != nil {
					return 1, fmt.Errorf("could not prepare binary %q for execution: %s", binPath, err)
				}
				execArgs := defaultRunArgs
				// Pass through extra arguments (-- --foo=bar) from the command line.
				execArgs = append(execArgs, arg.GetExecutableArgs(opts.Args)...)
				log.Debugf("Executing %q with arguments %s", binPath, execArgs)
				cmd := exec.CommandContext(ctx, binPath, execArgs...)
				cmd.Dir = filepath.Join(outputsBaseDir, BuildBuddyArtifactDir, runfilesRoot)
				cmd.Stdout = os.Stdout
				cmd.Stderr = os.Stderr
				err = cmd.Run()
				if e, ok := err.(*exec.ExitError); ok {
					return e.ExitCode(), nil
				} else if err != nil {
					return 1, err
				}
				return 0, nil
			}
		} else {
			log.Warnf("Cannot download outputs - no child invocations found")
		}
	}

	return exitCode, nil
}

func HandleRemoteBazel(commandLineArgs []string) (int, error) {
	tempDir, err := os.MkdirTemp("", "buildbuddy-cli-*")
	if err != nil {
		return 1, err
	}
	defer func() {
		os.RemoveAll(tempDir)
	}()

	bazelArgs, execArgs, err := parseArgs(commandLineArgs)
	if err != nil {
		return 1, status.WrapError(err, "parse args")
	}

	ctx := context.Background()
	repoConfig, err := Config(".")
	if err != nil {
		return 1, status.WrapError(err, "remote config")
	}

	wsFilePath, err := bazel.FindWorkspaceFile(".")
	if err != nil {
		return 1, status.WrapError(err, "finding workspace")
	}

	runner := *remoteRunner
	if !strings.HasPrefix(runner, "grpc") {
		runner = "grpcs://" + runner
	}

	apiKey := arg.Get(bazelArgs, "remote_header=x-buildbuddy-api-key")
	if apiKey == "" {
		apiKey, err = storage.ReadRepoConfig("api-key")
		if err != nil {
			log.Debugf("Could not read api key from bb config: %s", err)
		} else {
			log.Debugf("API key read from `buildbuddy.api-key` in .git/config.")
		}
	}
	// If an API key is not set, prompt the user to set it in their cli config.
	if apiKey == "" {
		if _, err := login.HandleLogin([]string{}); err == nil {
			log.Warnf("Failed to enter login flow. Manually trigger with " +
				"`bb login` or add an API key to your remote bazel run with `--remote_header=x-buildbuddy-api-key=XXX`.")
			return 1, status.WrapError(err, "handle login")
		}
		apiKey, err = storage.ReadRepoConfig("api-key")
		if err != nil {
			return 1, status.WrapError(err, "read api key from bb config")
		}
	}

	exitCode, err := Run(ctx, RunOpts{
		Server:            runner,
		APIKey:            apiKey,
		Args:              arg.JoinExecutableArgs(bazelArgs, execArgs),
		WorkspaceFilePath: wsFilePath,
	}, repoConfig)
	if err != nil && strings.Contains(err.Error(), "context canceled") {
		return exitCode, nil
	}
	return exitCode, err
}

func parseArgs(commandLineArgs []string) (bazelArgs []string, execArgs []string, err error) {
	bazelArgs, execArgs = arg.SplitExecutableArgs(commandLineArgs)

	bazelArgs, err = login.ConfigureAPIKey(bazelArgs)
	if err != nil {
		return nil, nil, err
	}
	bazelArgs, err = parser.CanonicalizeArgs(bazelArgs)
	if err != nil {
		return nil, nil, err
	}
	bazelArgs, err = parseRemoteCliFlags(bazelArgs)
	if err != nil {
		return nil, nil, status.WrapError(err, "parse remote bazel cli flags")
	}

	// Ensure all bazel remote runs use the remote cache.
	// The goal is to keep remote workloads close to our servers, so use the same
	// app backend as the remote runner.
	bazelArgs = arg.Remove(bazelArgs, "bes_backend")
	bazelArgs = arg.Remove(bazelArgs, "remote_cache")
	bazelArgs = append(bazelArgs, "--config=buildbuddy_bes_backend")
	bazelArgs = append(bazelArgs, "--config=buildbuddy_bes_results_url")
	bazelArgs = append(bazelArgs, "--config=buildbuddy_remote_cache")

	// If the CLI needs to fetch build outputs, make sure the remote runner uploads them.
	bazelCmd, _ := parser.GetBazelCommandAndIndex(bazelArgs)
	if (!*runRemotely && bazelCmd == "run") || bazelCmd == "build" {
		bazelArgs = append(bazelArgs, "--remote_upload_local_results")
	}

	return bazelArgs, execArgs, nil
}

// parseRemoteCliFlags parses flags that affect configuration of remote bazel.
// These flags are defined in `RemoteFlagset`.
//
// These flags are expected to be set between the `remote` command and the bazel
// command. Ex. bb remote <--remote_cli_flag> build //...
//
// If there are bazel startup flags set (also set before the bazel command),
// the remote cli flags and startup flags can be mixed in any order and will still
// be parsed correctly.
// Ex. bb remote <--remote_cli_flag> <--startup_flag> <--remote_cli_flag> build //...
//
// Return the list of original args with all remote cli flags removed.
func parseRemoteCliFlags(args []string) ([]string, error) {
	// Discard flag parse error logging because it's very verbose if you parse
	// a flag not in RemoteFlagset, but we might expect that if bazel startup flags
	// are set
	RemoteFlagset.SetOutput(io.Discard)

	// Stop parsing flags when we reach the bazel command
	_, bazelCmdIdx := parser.GetBazelCommandAndIndex(args)
	if bazelCmdIdx == -1 {
		return nil, status.InvalidArgumentErrorf("no bazel command passed to run remotely")
	}
	unparsedArgs := args[:bazelCmdIdx]

	for len(unparsedArgs) > 0 {
		err := RemoteFlagset.Parse(unparsedArgs)
		if err == nil {
			// flagset.Args() contains the list of any unparsed arguments
			// Keep parsing them in a loop until we process all the args
			unparsedArgs = RemoteFlagset.Args()
		} else {
			// Parsing undefined flags could happen if there are bazel startup flags set
			// Remove them from the list of unparsed arguments and keep parsing
			// remaining args.
			if strings.Contains(err.Error(), "flag provided but not defined") {
				// Remove the unrecognized flag and keep trying to parse
				unparsedArgs = unparsedArgs[1:]

				// Startup flags could be set in the format `--flag value`.
				// flagset.Parse() won't process arg lists not starting with a flag,
				// so remove any floating value arguments.
				if len(unparsedArgs) > 0 && !strings.HasPrefix(unparsedArgs[0], "-") {
					unparsedArgs = unparsedArgs[1:]
				}
			} else {
				return nil, err
			}
		}
	}

	// Remove all cli flags from the arg list
	argsRemoteFlagsRemoved := args[:bazelCmdIdx]
	RemoteFlagset.VisitAll(func(f *flag.Flag) {
		// Certain flags with slice values can be passed multiple times.
		// Remove all instances.
		flagVal := "start"
		for flagVal != "" {
			flagVal, argsRemoteFlagsRemoved = arg.Pop(argsRemoteFlagsRemoved, f.Name)
		}
	})

	// Add back in the bazel command and any subsequent flags
	argsRemoteFlagsRemoved = append(argsRemoteFlagsRemoved, args[bazelCmdIdx:]...)
	return argsRemoteFlagsRemoved, nil
}

func contains(m map[string]string, elem string) bool {
	_, ok := m[elem]
	return ok
}
