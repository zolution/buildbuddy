"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[655],{16726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(74848),i=t(28453);const r={id:"remote-bazel-introduction",title:"Introduction to Remote Bazel",sidebar_label:"Remote bazel introduction"},s=void 0,l={id:"remote-bazel-introduction",title:"Introduction to Remote Bazel",description:"Remote Bazel is an easily configurable way to run commands on a remote runner. You",source:"@site/../docs/remote-bazel-introduction.md",sourceDirName:".",slug:"/remote-bazel-introduction",permalink:"/docs/remote-bazel-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/remote-bazel-introduction.md",tags:[],version:"current",lastUpdatedBy:"Zoey Greer",lastUpdatedAt:1730227447e3,frontMatter:{id:"remote-bazel-introduction",title:"Introduction to Remote Bazel",sidebar_label:"Remote bazel introduction"},sidebar:"someSidebar",previous:{title:"Workflows configuration",permalink:"/docs/workflows-config"},next:{title:"CLI Overview",permalink:"/docs/cli"}},a={},d=[{value:"Benefits of Remote Bazel",id:"benefits-of-remote-bazel",level:2},{value:"Uses for Remote Bazel",id:"uses-for-remote-bazel",level:2},{value:"CI",id:"ci",level:3},{value:"Developer day-to-day",id:"developer-day-to-day",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Using the CLI",id:"using-the-cli",level:3},{value:"Automatic git state mirroring",id:"automatic-git-state-mirroring",level:4},{value:"Configuring the remote runner",id:"configuring-the-remote-runner",level:4},{value:"CURL request",id:"curl-request",level:3},{value:"Private GitHub repos",id:"private-github-repos",level:3},{value:"GitHub Enterprise",id:"github-enterprise",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Remote Bazel is an easily configurable way to run commands on a remote runner. You\ncan think of it as dynamically spinning up a VM to execute a single command (or multiple\ncommands, if you'd like!)."}),"\n",(0,o.jsx)(n.p,{children:"This means you don't even need Bazel installed\non your local machine to initiate a Bazel build! Plus, our remote\nrunners support any bash commands, not just Bazel commands."}),"\n",(0,o.jsx)(n.h2,{id:"benefits-of-remote-bazel",children:"Benefits of Remote Bazel"}),"\n",(0,o.jsx)(n.p,{children:"Remote Bazel makes it easy to configure the OS, architecture, and container image\nof the remote runner. This makes it easy to run builds on a specific\nplatform."}),"\n",(0,o.jsx)(n.p,{children:"Remote Bazel also has the following performance benefits:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Colocation with BuildBuddy servers, ensuring a ",(0,o.jsx)(n.strong,{children:"fast network\nconnection between Bazel and BuildBuddy's RBE & caching servers"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Bazel workspaces are recycled between runs, allowing subsequent runs to\ntake advantage of ",(0,o.jsx)(n.strong,{children:"warm Bazel instances"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Remote Bazel uses the same backend technology as our CI product, BuildBuddy\nWorkflows. See ",(0,o.jsx)(n.a,{href:"https://www.buildbuddy.io/docs/workflows-introduction/",children:"our docs on BuildBuddy Workflows"}),"\nfor a more in-depth description of the performance optimizations and mechanism\nfor workspace recycling."]}),"\n",(0,o.jsx)(n.h2,{id:"uses-for-remote-bazel",children:"Uses for Remote Bazel"}),"\n",(0,o.jsx)(n.h3,{id:"ci",children:"CI"}),"\n",(0,o.jsx)(n.p,{children:"Remote Bazel is powered by the same backend as our\nCI product, BuildBuddy Workflows. However, Remote Bazel is a much more flexible\nentrypoint to our CI platform."}),"\n",(0,o.jsx)(n.p,{children:"Workflows must be configured with a config YAML that is checked in to GitHub.\nDespite the performance benefits of running on Workflows, many companies have\nlegacy CI workflows that would be challenging and error-prone\nto migrate to a new CI platform."}),"\n",(0,o.jsxs)(n.p,{children:["Remote Bazel is a drop-in solution that can be more easily integrated into pre-existing CI pipelines.\nIt can be triggered via CURL request or by replacing\n",(0,o.jsx)(n.code,{children:"bazel"})," commands with ",(0,o.jsx)(n.code,{children:"bb remote"})," commands (Ex. ",(0,o.jsx)(n.code,{children:"bazel test //..."})," => ",(0,o.jsx)(n.code,{children:"bb remote test //..."}),")."]}),"\n",(0,o.jsx)(n.p,{children:"As Remote Bazel commands are dynamically constructed, it is also easier to pass\nin short-lived credentials or to run a wider range of commands, because they don't\nhave to be codified in a YAML."}),"\n",(0,o.jsx)(n.h3,{id:"developer-day-to-day",children:"Developer day-to-day"}),"\n",(0,o.jsx)(n.p,{children:"Remote Bazel also has a wide range of applications in the day-to-day of developers.\nSome ideas are:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Cross-platform development"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"Sample Command",children:"bb remote --os=linux --arch=amd64 test //...\n"})}),"\n",(0,o.jsx)(n.p,{children:"Given the ease of configuring a Remote Bazel command, targeting a specific platform\nis very easy."}),"\n",(0,o.jsx)(n.p,{children:"Say you have a Mac laptop, but you need to run some tests that only run on Linux.\nRather than bravely trying to add support for cross-platform builds via Bazel, you\ncan use Remote Bazel to run the build on a remote Linux runner."}),"\n",(0,o.jsx)(n.p,{children:"Because the remote logs are streamed back to\nyour local machine, it will feel like you're directly running the build locally."}),"\n",(0,o.jsx)(n.p,{children:"Our CLI automatically syncs your local git workspace with the remote runner's, so\nthis is easy even if you are quickly iterating on code between each build. The CLI\nwill upload and apply any local diffs to the remote workspace, so any local changes\nare reflected in each new build."}),"\n",(0,o.jsx)(n.p,{children:"Given that the remote runner is only running for the exact duration of the command,\nthis is much more economical than spinning up a VM that is running 24/7. If you\nuse an IDE or have custom VIM bindings etc. the automatic git sync also lets you\nwrite code in your optimized local development setup, without having to constantly\npush and pull changes from a VM."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Accessing powerful remote machines"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"Sample Command",children:" bb remote \\\n      --runner_exec_properties=EstimatedCPU=24 \\\n      --runner_exec_properties=EstimatedFreeDiskBytes=50GB \\\n      test //...\n"})}),"\n",(0,o.jsx)(n.p,{children:"For developers with a slow network connection or limited resources (CPU, memory, disk)\non their machine, Remote Bazel is a convenient way to run faster builds."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Running multiple Bazel builds in parallel"})}),"\n",(0,o.jsx)(n.p,{children:"Remote Bazel lets you spin up multiple simultaneous builds without conflict,\nand without utilizing all the resources on your machine."}),"\n",(0,o.jsxs)(n.p,{children:["For example, when debugging a flaky test, you might run the test with ",(0,o.jsx)(n.code,{children:"--runs_per_test=100"})," to\nroot out the flake. While that slow build is running, you might want to work on\nsomething else. Remote Bazel lets you run these workloads simultaneously."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Running builds from our UI (in Alpha)"})}),"\n",(0,o.jsx)(n.p,{children:"Now that we can initiate a Bazel build via CURL request, even a web browser can\nrun builds. We've added several useful Remote Bazel backed UI features to solve common\ncustomer pain points."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Why did this seemingly unrelated target build?"})}),"\n",(0,o.jsxs)(n.p,{children:["From an invocation link, you can run a ",(0,o.jsx)(n.code,{children:"bazel query"})," to visualize the dependency\ngraph between two targets."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"What invalidated the cache between these builds?"})}),"\n",(0,o.jsx)(n.p,{children:"From an invocation link, you can initiate a Remote Bazel run that compares\nthe compact execution logs of two invocations, to determine the root cause of what\nchanged and what it invalidated."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"What is the code coverage of this test?"})}),"\n",(0,o.jsxs)(n.p,{children:["From an invocation link for a test run, you can run a ",(0,o.jsx)(n.code,{children:"bazel coverage"})," to see\nstats on code coverage and a highlighted view of which code paths are untested."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Debug a flaky test that only fails on CI, or a specific platform"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Ensure a consistent execution environment between multiple developers"})}),"\n",(0,o.jsx)(n.p,{children:"While these are some ideas we've had,\nthe magic of Remote Bazel is its flexibility! We're sure many of our customers will\ndiscover creative ways to use it."}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsx)(n.p,{children:"You can invoke Remote Bazel with the BuildBuddy CLI or by CURL request."}),"\n",(0,o.jsx)(n.h3,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Download the bb CLI: ",(0,o.jsx)(n.a,{href:"https://www.buildbuddy.io/cli/",children:"https://www.buildbuddy.io/cli/"})]}),"\n",(0,o.jsxs)(n.li,{children:["If you have already installed it, make sure it's up-to-date with ",(0,o.jsx)(n.code,{children:"bb update"})]}),"\n",(0,o.jsxs)(n.li,{children:["From a local git repo, trigger a remote run with ",(0,o.jsx)(n.code,{children:"bb remote <bazel command>"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ex. ",(0,o.jsx)(n.code,{children:"bb remote build //..."})," ",(0,o.jsx)(n.code,{children:"bb remote test //..."})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["You can configure the remote run with flags between ",(0,o.jsx)(n.code,{children:"remote"})," and the bazel command","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["See ",(0,o.jsx)(n.code,{children:"Configuring the remote runner"})," below for more details"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"automatic-git-state-mirroring",children:"Automatic git state mirroring"}),"\n",(0,o.jsx)(n.p,{children:"In order to facilitate convenient local development, the CLI will automatically\nupload any local git diffs to the remote runner. This ensures that the remote git\nworkspace matches your local one. This is helpful if you are quickly iterating on code changes, and\nwant the changes to be reflected on the remote runner without having to push and\npull changes from GitHub."}),"\n",(0,o.jsxs)(n.p,{children:["If you wish to disable git mirroring and want the remote runner to run from a specific\ngit ref, you can use ",(0,o.jsx)(n.code,{children:"--run_from_branch"})," or ",(0,o.jsx)(n.code,{children:"--run_from_commit"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bb remote --run_from_branch=my_remote_branch build //...\n"})}),"\n",(0,o.jsx)(n.h4,{id:"configuring-the-remote-runner",children:"Configuring the remote runner"}),"\n",(0,o.jsxs)(n.p,{children:["In order to configure the remote runner, you can add the following flags between\n",(0,o.jsx)(n.code,{children:"remote"})," and the bazel command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bb remote --os=linux --arch=amd64 build //...\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following configuration options are supported:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--os"}),": The operating system of the remote runner. ",(0,o.jsx)(n.code,{children:"linux"})," is supported by default.\n",(0,o.jsx)(n.code,{children:"darwin"})," is supported with self-hosted Mac executors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--arch"}),": The CPU architecture of the remote runner. ",(0,o.jsx)(n.code,{children:"amd64"})," is supported by default.\n",(0,o.jsx)(n.code,{children:"arm64"})," is supported with self-hosted executors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--container_image"}),": The Linux container image to use. Has no effect on Mac runners."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--env"}),": Environment variables to set on the remote runner.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ex. ",(0,o.jsx)(n.code,{children:"--env=K1=V1 --env=K2=V2"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--runner_exec_properties"}),": Platform properties to configure the remote runner.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ex. To run on a self-hosted executor pool, you could use\n",(0,o.jsx)(n.code,{children:"--runner_exec_properties=use-self-hosted-executors=true --runner_exec_properties=Pool=custom-pool"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--timeout"})," (Ex. '30m', '1h'): If set, remote runs that have been running for longer\nthan this duration will be canceled automatically. This only applies to a single attempt,\nand does not include multiple retry attempts."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--run_from_branch"})," ",(0,o.jsx)(n.code,{children:"--run_from_commit"}),": If either of these is set, the remote runner\nwill run off the specified GitHub ref. By default if neither is set, the remote GitHub workspace\nwill mirror the local state (including any non-committed local diffs)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In order to run the CLI with debug logs enabled, you can add ",(0,o.jsx)(n.code,{children:"--verbose=1"})," between\n",(0,o.jsx)(n.code,{children:"bb"})," and ",(0,o.jsx)(n.code,{children:"remote"}),". Note that this is a different syntax from the rest of the\nRemote Bazel flags, which go after ",(0,o.jsx)(n.code,{children:"remote"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bb --verbose=1 remote build //...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"curl-request",children:"CURL request"}),"\n",(0,o.jsxs)(n.p,{children:["See the API definition ",(0,o.jsx)(n.a,{href:"/docs/enterprise-api",children:"here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Sample CURL request:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -d \'{\n    "repo\u201d: "git@github.com:buildbuddy-io/buildbuddy.git",\n    "branch":"main",\n    "steps": [{"run": "bazel test //..."}]\n}\' \\\n-H "x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY" \\\n-H \'Content-Type: application/json\' \\\nhttps://app.buildbuddy.io/api/v1/Run\n'})}),"\n",(0,o.jsx)(n.h3,{id:"private-github-repos",children:"Private GitHub repos"}),"\n",(0,o.jsxs)(n.p,{children:["If your GitHub repo is private, you must first link it at ",(0,o.jsx)(n.a,{href:"https://app.buildbuddy.io/workflows/",children:"https://app.buildbuddy.io/workflows/"}),"\nto authorize the remote runner to access it."]}),"\n",(0,o.jsx)(n.h3,{id:"github-enterprise",children:"GitHub Enterprise"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use Remote Bazel with GitHub Enterprise, you must set ",(0,o.jsx)(n.code,{children:"--use_system_git_credentials"}),"\nand use self-hosted executors that are configured with SSH credentials to access your repo."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bb remote \\\n  --runner_exec_properties=use-self-hosted-executors=true \\\n  --runner_exec_properties=Pool=custom-pool \\\n  --use_system_git_credentials=1 \\\n  build //...\n"})}),"\n",(0,o.jsx)(n.p,{children:"As the remote runners will use this SSH configuration to access your repo,\ncontainerization is not supported."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);