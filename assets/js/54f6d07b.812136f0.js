"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[123],{67839:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var l=i(74848),s=i(28453);const t={id:"cli-plugins",title:"CLI Plugins",sidebar_label:"CLI Plugins"},a=void 0,o={id:"cli-plugins",title:"CLI Plugins",description:"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install.",source:"@site/../docs/cli-plugins.md",sourceDirName:".",slug:"/cli-plugins",permalink:"/docs/cli-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cli-plugins.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1730141354e3,frontMatter:{id:"cli-plugins",title:"CLI Plugins",sidebar_label:"CLI Plugins"},sidebar:"someSidebar",previous:{title:"CLI Overview",permalink:"/docs/cli"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},r={},d=[{value:"Installing a plugin",id:"installing-a-plugin",level:2},{value:"Example",id:"example",level:3},{value:"Syntax",id:"syntax",level:3},{value:"REPO",id:"repo",level:4},{value:"VERSION",id:"version",level:4},{value:"PATH",id:"path",level:4},{value:"User specific plugins",id:"user-specific-plugins",level:3},{value:"Manual install",id:"manual-install",level:3},{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"<code>pre_bazel.sh</code>",id:"pre_bazelsh",level:3},{value:"<code>post_bazel.sh</code>",id:"post_bazelsh",level:3},{value:"<code>handle_bazel_output.sh</code>",id:"handle_bazel_outputsh",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"$BUILD_WORKSPACE_DIRECTORY",id:"build_workspace_directory",level:4},{value:"$PLUGIN_TEMPDIR",id:"plugin_tempdir",level:4},{value:"$USER_CONFIG_DIR",id:"user_config_dir",level:4},{value:"$EXEC_ARGS_FILE",id:"exec_args_file",level:4},{value:"Examples",id:"examples",level:3},{value:"Sharing a plugin",id:"sharing-a-plugin",level:2},{value:"Uninstalling a plugin",id:"uninstalling-a-plugin",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install."}),"\n",(0,l.jsxs)(n.p,{children:["You can find a list of plugins that you can install in our ",(0,l.jsx)(n.a,{href:"/plugins",children:"plugin library"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"installing-a-plugin",children:"Installing a plugin"}),"\n",(0,l.jsxs)(n.p,{children:["Plugins can be installed using the ",(0,l.jsx)(n.code,{children:"bb install"})," command."]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.p,{children:["Here's an example of a command that installs the ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/plugins/tree/main/open-invocation#readme",children:"open-invocation plugin"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bb install buildbuddy-io/plugins:open-invocation\n"})}),"\n",(0,l.jsx)(n.p,{children:"This is shorthand for:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bb install https://github.com/buildbuddy-io/plugins@main:open-invocation\n"})}),"\n",(0,l.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:"The syntax for the install command is as follows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bb install [REPO][@VERSION][:PATH]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Notice the 3 components that define the plugin being installed: ",(0,l.jsx)(n.strong,{children:"REPO"}),", ",(0,l.jsx)(n.strong,{children:"VERSION"}),", and ",(0,l.jsx)(n.strong,{children:"PATH"})," which are all optional."]}),"\n",(0,l.jsxs)(n.p,{children:["Either a ",(0,l.jsx)(n.strong,{children:"REPO"})," or a ",(0,l.jsx)(n.strong,{children:"PATH"})," must be specified (otherwise, the CLI wouldn't know what plugin to install)."]}),"\n",(0,l.jsx)(n.p,{children:"Below is a detailed description of each of these components."}),"\n",(0,l.jsx)(n.h4,{id:"repo",children:"REPO"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"REPO"})," component defines a git repository from which to install the plugin. If ",(0,l.jsx)(n.strong,{children:"REPO"})," is omitted, the CLI will look for a plugin in the current repository based on the ",(0,l.jsx)(n.strong,{children:"PATH"})," component."]}),"\n",(0,l.jsx)(n.p,{children:"This makes it easy to write new plugins directly within your existing repo, without having to create a new repo per plugin."}),"\n",(0,l.jsxs)(n.p,{children:["You can specify the ",(0,l.jsx)(n.strong,{children:"REPO"})," component as a fully qualified git url, like ",(0,l.jsx)(n.code,{children:"github.com/buildbuddy-io/plugins"})," or using a shorthand owner/repo notation like ",(0,l.jsx)(n.code,{children:"buildbuddy-io/plugins"}),", in which case ",(0,l.jsx)(n.code,{children:"github.com/"})," will automatically be prepended."]}),"\n",(0,l.jsx)(n.h4,{id:"version",children:"VERSION"}),"\n",(0,l.jsxs)(n.p,{children:["This allows you to lock a plugin to a specific git tag, branch, or commit SHA. If ",(0,l.jsx)(n.strong,{children:"VERSION"})," is omitted, the CLI will pull the plugin from head."]}),"\n",(0,l.jsx)(n.h4,{id:"path",children:"PATH"}),"\n",(0,l.jsxs)(n.p,{children:["A BuildBuddy CLI plugin is simply a directory. The ",(0,l.jsx)(n.strong,{children:"PATH"})," component defines the directory in which the plugin is contained. If no path is specified, the BuildBuddy CLI look for a plugin in the repository's root directory."]}),"\n",(0,l.jsx)(n.h3,{id:"user-specific-plugins",children:"User specific plugins"}),"\n",(0,l.jsxs)(n.p,{children:["By default plugins are installed at the repository level. They are saved in the ",(0,l.jsx)(n.code,{children:"buildbuddy.yaml"})," file in the root of your repository."]}),"\n",(0,l.jsx)(n.p,{children:"Sometimes you may want to install a plugin for yourself (like a theme plugin for example), but don't want to force it on everyone on your project. In that case, you can install a plugin as a user-specific plugin."}),"\n",(0,l.jsxs)(n.p,{children:["Installing a plugin as user-specific is as simple as just tacking the ",(0,l.jsx)(n.code,{children:"--user"})," argument onto your ",(0,l.jsx)(n.code,{children:"bb install"})," command."]}),"\n",(0,l.jsxs)(n.p,{children:["When the ",(0,l.jsx)(n.code,{children:"--user"})," argument is present, the plugin will be added to a ",(0,l.jsx)(n.code,{children:"~/buildbuddy.yaml"})," file located in your user directory. That means those plugins will only be applied to you."]}),"\n",(0,l.jsx)(n.p,{children:"If a plugin is present in both your user-specific and workspace at differnet versions, the one in your workspace will take precedence."}),"\n",(0,l.jsx)(n.h3,{id:"manual-install",children:"Manual install"}),"\n",(0,l.jsxs)(n.p,{children:["You can manually install plugins by editing your ",(0,l.jsx)(n.code,{children:"buildbuddy.yaml"})," file with a text editor."]}),"\n",(0,l.jsxs)(n.p,{children:["They live under a ",(0,l.jsx)(n.code,{children:"plugins:"})," section, like so:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:"plugins:\n  # Local plugins\n  - path: cli/example_plugins/go-highlight\n  - path: cli/example_plugins/ping-remote\n  # Plugins in external repos\n  - path: cli/plugins/go-deps\n    repo: buildbuddy-io/plugins\n  - path: cli/plugins/open-invocation\n    repo: buildbuddy-io/plugins\n  - path: cli/plugins/notify\n    repo: buildbuddy-io/plugins\n  - path: cli/plugins/theme-modern\n    repo: buildbuddy-io/plugins\n  # Single-plugin repo\n  - repo: bduffany/go-highlight\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can check out our ",(0,l.jsx)(n.code,{children:"buildbuddy.yaml"})," file ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/buildbuddy.yaml#L55",children:"here"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,l.jsx)(n.p,{children:"Creating a plugin is simple, it's just a directory. The directory can live within your repo, or in a separate repository."}),"\n",(0,l.jsx)(n.p,{children:"There are 3 files you can place in your plugin directory, each corresponding to different a hook."}),"\n",(0,l.jsx)(n.p,{children:"The files are simply bash scripts, which gives you the flexibility to write them in any language you want."}),"\n",(0,l.jsx)(n.p,{children:"A single plugin can contain multiple hook scripts."}),"\n",(0,l.jsx)(n.p,{children:"The directory layout for a plugin looks like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"path/to/plugin/\n\u251c\u2500\u2500 pre_bazel.sh            # optional\n\u251c\u2500\u2500 post_bazel.sh           # optional\n\u2514\u2500\u2500 handle_bazel_output.sh  # optional\n"})}),"\n",(0,l.jsx)(n.h3,{id:"pre_bazelsh",children:(0,l.jsx)(n.code,{children:"pre_bazel.sh"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"pre_bazel.sh"})," script will be called before Bazel is run."]}),"\n",(0,l.jsxs)(n.p,{children:["It is called with a single argument, which is the path to a file\ncontaining all arguments that will be passed to Bazel (including the\narguments specified in your ",(0,l.jsx)(n.code,{children:".bazelrc"})," and expanded via any ",(0,l.jsx)(n.code,{children:"--config="}),"\nflags). ",(0,l.jsx)(n.strong,{children:"Each line in this file contains a single argument."})]}),"\n",(0,l.jsx)(n.p,{children:"The script will be called like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"/usr/bin/env bash /path/to/plugin/pre_bazel.sh /path/to/bazel-args\n"})}),"\n",(0,l.jsx)(n.p,{children:"Here's an example of what the Bazel args file might look like:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"--ignore_all_rc_files\nrun\n//server\n--bes_results_url=https://app.buildbuddy.io/invocation/\n--bes_backend=grpcs://remote.buildbuddy.io\n--noremote_upload_local_results\n--workspace_status_command=$(pwd)/workspace_status.sh\n--incompatible_remote_build_event_upload_respect_no_cache\n--experimental_remote_cache_async\n--incompatible_strict_action_env\n--enable_runfiles=1\n--build_tag_filters=-docker\n--bes_results_url=https://app.buildbuddy.io/invocation/\n--bes_backend=grpcs://remote.buildbuddy.io\n--remote_cache=grpcs://remote.buildbuddy.io\n--remote_upload_local_results\n--experimental_remote_cache_compression\n--noremote_upload_local_results\n--noincompatible_remote_build_event_upload_respect_no_cache\n"})}),"\n",(0,l.jsx)(n.p,{children:"Your plugin can modify this file to add, remove, or change that flags that will ultimately be passed to Bazel."}),"\n",(0,l.jsxs)(n.p,{children:["Your ",(0,l.jsx)(n.code,{children:"pre_bazel.sh"})," script can also accept user input, spawn other processes, or anything else you'd like."]}),"\n",(0,l.jsxs)(n.p,{children:["Here's an example of a simple ",(0,l.jsx)(n.code,{children:"pre_bazel.sh"})," plugin that disables remote execution if it's unable to ping ",(0,l.jsx)(n.code,{children:"remote.buildbuddy.io"})," within 500ms."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="pre_bazel.sh"',children:'if ! grep -E \'^--remote_executor=.*\\.buildbuddy\\.io$\' "$1" &>/dev/null; then\n  # BB remote execution is not enabled; do nothing.\n  exit 0\nfi\n\n# Make sure we can ping the remote execution service in 500ms.\nif ! timeout 0.5 ping -c 1 remote.buildbuddy.io &>/dev/null; then\n  # Network is spotty; disable remote execution.\n  echo "--remote_executor=" >>"$1"\nfi\n'})}),"\n",(0,l.jsx)(n.p,{children:"Because this is just a bash script, you can write your pre Bazel logic in python, js, or any other language you'd like."}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"pre_bazel.sh"})," script is also a great place for more complex plugins to make sure all of their dependencies are available / installed."]}),"\n",(0,l.jsxs)(n.p,{children:["Here's example of a ",(0,l.jsx)(n.code,{children:"pre_bazel.sh"})," script that makes sure both ",(0,l.jsx)(n.code,{children:"python3"})," and ",(0,l.jsx)(n.code,{children:"open"})," are installed, and then calls into a python script called ",(0,l.jsx)(n.code,{children:"pre_bazel.py"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="pre_bazel.py"',children:'if ! which python3 &>/dev/null; then\n  echo -e "\\x1b[33mWarning: open-invocation plugin is disabled: missing \'python3\' in \\$PATH\\x1b[m" >&2\n  exit 0\nfi\nopen_command=$( (which xdg-open open | head -n1) || true)\nif [[ ! "$open_command" ]]; then\n  echo -e "\\x1b[33mWarning: open-invocation plugin is disabled: missing \'open\' or \'xdg-open\' in \\$PATH\\x1b[m" >&2\n  exit\nfi\n\nexec python3 ./pre_bazel.py "$@"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"post_bazelsh",children:(0,l.jsx)(n.code,{children:"post_bazel.sh"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"post_bazel.sh"})," script is called after Bazel completes. It is called with a single argument, which contains the console output that was generated by Bazel. This allows you to analyze Bazel's output and perform actions based on these outputs."]}),"\n",(0,l.jsx)(n.p,{children:"The script will be called like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"/usr/bin/env bash /path/to/plugin/post_bazel.sh /path/to/bazel-outputs\n"})}),"\n",(0,l.jsx)(n.p,{children:"Here's an example of what the Bazel outputs file might look like:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shellsession",children:"INFO: Invocation ID: cd254c65-c657-4524-b084-15a20d4485d1\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/cd254c65-c657-4524-b084-15a20d4485d1\nDEBUG: /root/workspace/output-base/external/io_bazel_rules_k8s/toolchains/kubectl/kubectl_toolchain.bzl:28:14: No kubectl tool was found or built, executing run for rules_k8s targets might not work.\nINFO: Analyzed 1212 targets (345 packages loaded, 28870 targets configured).\nINFO: Found 1042 targets and 170 test targets...\nINFO: Elapsed time: 67.685s, Critical Path: 10.30s\nINFO: 5868 processes: 5866 remote cache hit, 1 internal, 1 remote.\n//app:app_typecheck_test                                        (cached) PASSED in 0.4s\n//server/util/terminal:terminal_test                            (cached) PASSED in 0.7s\n//server/util/url:url_test                                      (cached) PASSED in 0.4s\n//enterprise/server/remote_execution/containers/sandbox:sandbox_test    SKIPPED\n\nExecuted 0 out of 170 tests: 169 tests pass and 1 was skipped.\nThere were tests whose specified size is too big. Use the --test_verbose_timeout_warnings command line option to see which ones these are.\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Your ",(0,l.jsx)(n.code,{children:"post_bazel.sh"})," script can also accept user input, spawn other processes, or anything else you'd like."]}),"\n",(0,l.jsx)(n.p,{children:"Here's an example of a simple plugin that sends a desktop notification once the build completes:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="post_bazel.sh"',children:'set -eu\n\nSTATUS_LINE=$(grep "Build" "$1" | grep "complete" | tail -n1 | perl -p -e \'s@.*?(Build)@\\1@\')\nELAPSED_TIME_LINE=$(grep "Elapsed time" "$1" | tail -n1 | perl -p -e \'s@.*?(Elapsed)@\\1@\')\n\nTITLE="Bazel build finished"\nMESSAGE="${ELAPSED_TIME_LINE}\\n${STATUS_LINE}"\n\nif [[ "$OSTYPE" == darwin* ]]; then\n  SCRIPT="display notification \\"$MESSAGE\\" with title \\"$TITLE\\""\n\n  osascript -e "$SCRIPT"\n  exit 0\nfi\n\nnotify-send --expire-time 3000 "$TITLE" "$MESSAGE"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Here's another example of a more complex plugin, that simply calls a python script name ",(0,l.jsx)(n.code,{children:"post_bazel.py"})," after checking that ",(0,l.jsx)(n.code,{children:"python3"})," is installed:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="post_bazel.sh"',children:'if ! which python3 &>/dev/null; then\n  echo -e "\\x1b[33mWarning: go-deps plugin is disabled: missing \'python3\' in \\$PATH\\x1b[m" >&2\n  exit 0\nfi\nexec python3 ./post_bazel.py "$@"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"handle_bazel_outputsh",children:(0,l.jsx)(n.code,{children:"handle_bazel_output.sh"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"handle_bazel_output.sh"})," script receives on its stdin all of Bazel's\nstderr output (not stdout). This is useful because Bazel outputs warnings,\nerrors, and progress output on stderr, allowing you to transform and\nmodify the output that Bazel displays to users."]}),"\n",(0,l.jsxs)(n.p,{children:["As an example, we can write a ",(0,l.jsx)(n.code,{children:"handle_bazel_output.sh"})," plugin to take the\nplain output from a build, and add\n",(0,l.jsx)(n.a,{href:"https://wikipedia.org/wiki/ANSI_escape_code",children:"ANSI colors"})," to Go file\nnames to make them easier to spot."]}),"\n",(0,l.jsxs)(n.p,{children:["Our ",(0,l.jsx)(n.code,{children:"handle_bazel_output.sh"})," script delegates to a python script\n",(0,l.jsx)(n.code,{children:"handle_bazel_output.py"}),", gracefully falling back to running ",(0,l.jsx)(n.code,{children:"cat"})," if\nPython is missing:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="handle_bazel_output.sh"',children:'if ! which python3 &>/dev/null; then\n  echo -e "\\x1b[33mWarning: go-highlight plugin is disabled: missing \'python3\' in \\$PATH\\x1b[m" >&2\n  exec cat\nfi\nexec python3 ./handle_bazel_output.py "$@"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Here is the Python script ",(0,l.jsx)(n.code,{children:"handle_bazel_output.py"})," from the\n",(0,l.jsx)(n.code,{children:"go-highlight"})," plugin:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",metastring:'title="handle_bazel_output.py"',children:'import re\nimport sys\n\nif __name__ == "__main__":\n    for line in sys.stdin:\n        m = re.search(r"^(.*?\\.go:\\d+:\\d+:)(.*)", line)\n        if m:\n            print("\\x1b[33m" + m.group(1) + "\\x1b[0m" + m.group(2))\n        else:\n            print(line, end="")\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["As another example, here is a ",(0,l.jsx)(n.code,{children:"handle_bazel_output.py"})," script that changes\nthe colors of various Bazel outputs:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",metastring:'title="handle_bazel_output.py"',children:'import re\nimport sys\n\ndefault_green = "\\x1b[32m"\nbright_green_bold = "\\x1b[92;1m"\nbright_cyan_bold = "\\x1b[96;1m"\nbright_white_bold_underline = "\\x1b[37;1;4m"\nreset = "\\x1b[0m"\n\nif __name__ == "__main__":\n    for line in sys.stdin:\n        line = line.replace(default_green+"INFO", bright_green_bold+"INFO")\n        line = line.replace(default_green+"Loading", bright_cyan_bold+"Loading")\n        line = line.replace(default_green+"Analyzing", bright_cyan_bold+"Analyzing")\n        line = line.replace(default_green+"[", bright_cyan_bold+"[")\n        m = re.search(r"^(.*)(Streaming build results to: )(.*)$", line)\n        if m:\n            print(m.group(1) + m.group(2) + bright_white_bold_underline + m.group(3) + reset)\n        else:\n            print(line, end="")\n'})}),"\n",(0,l.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,l.jsx)(n.p,{children:"The CLI exposes certain environment variables to your plugins."}),"\n",(0,l.jsx)(n.h4,{id:"build_workspace_directory",children:"$BUILD_WORKSPACE_DIRECTORY"}),"\n",(0,l.jsxs)(n.p,{children:["This is the path to the Bazel workspace in which the CLI is run. It is the\nroot path, containing the bazel ",(0,l.jsx)(n.code,{children:"WORKSPACE"}),", ",(0,l.jsx)(n.code,{children:"WORKSPACE.bazel"}),", ",(0,l.jsx)(n.code,{children:"MODULE"}),", or ",(0,l.jsx)(n.code,{children:"MODULE.bazel"})," file."]}),"\n",(0,l.jsx)(n.h4,{id:"plugin_tempdir",children:"$PLUGIN_TEMPDIR"}),"\n",(0,l.jsx)(n.p,{children:"This is a temporary directory that can be used by your plugin to store temporary files. These files will be cleaned up after the invocation is complete."}),"\n",(0,l.jsx)(n.h4,{id:"user_config_dir",children:"$USER_CONFIG_DIR"}),"\n",(0,l.jsx)(n.p,{children:"This is a long-lived directory you can use to store user preferences, like whether or not a user always wants to automatically apply a particular fix."}),"\n",(0,l.jsxs)(n.p,{children:["Your plugin is responsible for provisioning its own directory under this\nconfig dir, if needed, using something like\n",(0,l.jsx)(n.code,{children:"mkdir -p $USER_CONFIG_DIR/my-plugin"}),". If you store user preferences here,\nyou'll need to decide how to handle differences in preferences across\ndifferent versions of your plugin."]}),"\n",(0,l.jsx)(n.h4,{id:"exec_args_file",children:"$EXEC_ARGS_FILE"}),"\n",(0,l.jsxs)(n.p,{children:["This is the path of a file that contains the args that would be passed to an\nexecutable built by bazel as a result of a ",(0,l.jsx)(n.code,{children:"bazel run"}),' command. Specifically,\nthese are any positional arguments remaining after canonicalization of any\noptions that take arguments into "--option=value" options, excepting the ',(0,l.jsx)(n.code,{children:"run"}),"\nsubcommand itself and the build target. These are generally the arguments\nfollowing a ",(0,l.jsx)(n.code,{children:"--"})," in the argument list passed to bazel, if any."]}),"\n",(0,l.jsxs)(n.p,{children:["This environment variable will only be set for the ",(0,l.jsx)(n.code,{children:"pre_bazel.sh"})," script in the\nplugin. Plugins can change this file to change the arguments\npassed to Bazel."]}),"\n",(0,l.jsx)(n.p,{children:"The file in question is formatted very similarly to the bazel args file, except\nthat the arguments will be split across lines based solely as a result of shell\nlexing, as it is not possible to parse or canonicalize options without knowing\nthe internals of the executable to be run. The following is an example exec args\nfile:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"--bool_var\ntrue\npositional_arg\n--option=value\n--option2\npositional_arg3\n--option4\n"})}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:"Here are some examples of plugins that can help you get started quickly:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"pre_bazel.sh"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["ping-remote: ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/example_plugins/ping-remote",children:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/example_plugins/ping-remote"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"post_bazel.sh"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["open-invocation: ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/open-invocation",children:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/open-invocation"})]}),"\n",(0,l.jsxs)(n.li,{children:["notify: ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/notify",children:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/notify"})]}),"\n",(0,l.jsxs)(n.li,{children:["go-deps: ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/go-deps",children:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/go-deps"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"handle_bazel_output.sh"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["go-highlight: ",(0,l.jsx)(n.a,{href:"https://github.com/bduffany/go-highlight",children:"https://github.com/bduffany/go-highlight"})]}),"\n",(0,l.jsxs)(n.li,{children:["theme-modern: ",(0,l.jsx)(n.a,{href:"https://github.com/siggisim/theme-modern",children:"https://github.com/siggisim/theme-modern"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"sharing-a-plugin",children:"Sharing a plugin"}),"\n",(0,l.jsx)(n.p,{children:"Because a plugin is just a directory in a repo, sharing plugins is super easy."}),"\n",(0,l.jsxs)(n.p,{children:["You can either a single plugin in a repo, like ",(0,l.jsx)(n.a,{href:"https://github.com/bduffany/go-highlight",children:"this"})," or host multiple plugins in a repo like ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/plugins",children:"this"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"For single plugin repos, others can install your plugin with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bb install your-username/your-repo\n"})}),"\n",(0,l.jsx)(n.p,{children:"For multi plugin repos, others can install your plugin with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bb install your-username/your-repo:path-to-repo\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to share your plugin with the wider BuildBuddy community, you can submit it to our plugin library ",(0,l.jsx)(n.a,{href:"/plugins#share",children:"here"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"uninstalling-a-plugin",children:"Uninstalling a plugin"}),"\n",(0,l.jsxs)(n.p,{children:["You can uninstall a plugin at any time by removing it from the ",(0,l.jsx)(n.code,{children:"plugins:"})," block of your ",(0,l.jsx)(n.code,{children:"buildbuddy.yaml"})," file."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var l=i(96540);const s={},t=l.createContext(s);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);