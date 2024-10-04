"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8930],{9257:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var n=t(74848),d=t(28453);const o={id:"rbe-github-actions",title:"RBE with GitHub Actions",sidebar_label:"RBE with GitHub Actions"},l=void 0,s={id:"rbe-github-actions",title:"RBE with GitHub Actions",description:"Using BuildBuddy with Github Actions is an easy way to get started using BuildBuddy with a CI system. For an even easier way to get started, see the BuildBuddy Workflows Setup Guide.",source:"@site/../docs/rbe-github-actions.md",sourceDirName:".",slug:"/rbe-github-actions",permalink:"/docs/rbe-github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-github-actions.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1728079788e3,frontMatter:{id:"rbe-github-actions",title:"RBE with GitHub Actions",sidebar_label:"RBE with GitHub Actions"},sidebar:"someSidebar",previous:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"},next:{title:"RBE Executor Pools",permalink:"/docs/rbe-pools"}},u={},r=[{value:"Setup instructions",id:"setup-instructions",level:2},{value:"Workflow file",id:"workflow-file",level:3},{value:"Updating your .bazelrc",id:"updating-your-bazelrc",level:3},{value:"Github secrets",id:"github-secrets",level:3},{value:"More",id:"more",level:2},{value:"Github commit statuses",id:"github-commit-statuses",level:3},{value:"Visibility",id:"visibility",level:3},{value:"Remote build execution",id:"remote-build-execution",level:3}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Using BuildBuddy with Github Actions is an easy way to get started using BuildBuddy with a CI system. For an even easier way to get started, see the ",(0,n.jsx)(i.a,{href:"/docs/workflows-setup",children:"BuildBuddy Workflows Setup Guide"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"setup-instructions",children:"Setup instructions"}),"\n",(0,n.jsx)(i.p,{children:"There are three steps:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Create a workflow file"}),"\n",(0,n.jsxs)(i.li,{children:["Update your ",(0,n.jsx)(i.code,{children:".bazelrc"})]}),"\n",(0,n.jsx)(i.li,{children:"Set up a GitHub Secret containing your BuildBuddy API key"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"workflow-file",children:"Workflow file"}),"\n",(0,n.jsxs)(i.p,{children:["All you have to do is create a file ",(0,n.jsx)(i.code,{children:".github/workflows/main.yaml"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",metastring:'title=".github/workflows/main.yaml"',children:'name: CI\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Install bazelisk\n        run: |\n          curl -LO "https://github.com/bazelbuild/bazelisk/releases/download/v1.1.0/bazelisk-linux-amd64"\n          mkdir -p "${GITHUB_WORKSPACE}/bin/"\n          mv bazelisk-linux-amd64 "${GITHUB_WORKSPACE}/bin/bazel"\n          chmod +x "${GITHUB_WORKSPACE}/bin/bazel"\n      - name: Build\n        run: |\n          "${GITHUB_WORKSPACE}/bin/bazel" build \\\n              --config=ci \\\n              --remote_header=x-buildbuddy-api-key=${{ secrets.BUILDBUDDY_ORG_API_KEY }} \\\n              //...\n      - name: Test\n        run: |\n          "${GITHUB_WORKSPACE}/bin/bazel" test \\\n              --config=ci \\\n              --remote_header=x-buildbuddy-api-key=${{ secrets.BUILDBUDDY_ORG_API_KEY }} \\\n              //...\n'})}),"\n",(0,n.jsx)(i.h3,{id:"updating-your-bazelrc",children:"Updating your .bazelrc"}),"\n",(0,n.jsxs)(i.p,{children:["You'll then need to add the following configuration to your ",(0,n.jsx)(i.code,{children:".bazelrc"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build:ci --build_metadata=ROLE=CI\nbuild:ci --bes_results_url=https://app.buildbuddy.io/invocation/\nbuild:ci --bes_backend=grpcs://remote.buildbuddy.io\n"})}),"\n",(0,n.jsx)(i.h3,{id:"github-secrets",children:"Github secrets"}),"\n",(0,n.jsx)(i.p,{children:"Finally, you'll need to create a GitHub Secret containing your BuildBuddy API Key."}),"\n",(0,n.jsxs)(i.p,{children:["You can get your BuildBuddy API key by logging in to your ",(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io",children:"BuildBuddy account"})," and visiting your ",(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io/docs/setup/",children:"Quickstart page"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Add your BuildBuddy API Key as GitHub Secret named ",(0,n.jsx)(i.code,{children:"BUILDBUDDY_ORG_API_KEY"}),". For more information on setting up Github Secrets, ",(0,n.jsx)(i.a,{href:"https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets",children:"click here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"more",children:"More"}),"\n",(0,n.jsx)(i.h3,{id:"github-commit-statuses",children:"Github commit statuses"}),"\n",(0,n.jsxs)(i.p,{children:["If you'd like BuildBuddy to publish commit statuses to your repo, you can do so by ",(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io",children:"logging in"})," and clicking ",(0,n.jsx)(i.code,{children:"Link Github Account"})," in the user menu in the top right."]}),"\n",(0,n.jsx)(i.h3,{id:"visibility",children:"Visibility"}),"\n",(0,n.jsxs)(i.p,{children:["By default, authenticated builds are only visible to members of your BuildBuddy organization. If you'd like your BuildBuddy results pages to be visible to members outside of your organization, you can add the following line to your ",(0,n.jsx)(i.code,{children:".bazelrc"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build:ci --build_metadata=VISIBILITY=PUBLIC\n"})}),"\n",(0,n.jsx)(i.h3,{id:"remote-build-execution",children:"Remote build execution"}),"\n",(0,n.jsxs)(i.p,{children:["If you'd like to use BuildBuddy's Remote Build Execution capabilities in your CI workflow, you can add the following lines to your ",(0,n.jsx)(i.code,{children:".bazelrc"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build:remote --remote_cache=grpcs://remote.buildbuddy.io\nbuild:remote --remote_executor=grpcs://remote.buildbuddy.io\nbuild:remote --remote_upload_local_results\nbuild:remote --host_platform=@buildbuddy_toolchain//:platform\nbuild:remote --platforms=@buildbuddy_toolchain//:platform\nbuild:remote --crosstool_top=@buildbuddy_toolchain//:toolchain\nbuild:remote --jobs=100\n\nbuild:ci --config=remote\n"})}),"\n",(0,n.jsxs)(i.p,{children:["And the following lines to your ",(0,n.jsx)(i.code,{children:"WORKSPACE"})," file:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",metastring:'title="WORKSPACE"',children:'http_archive(\n    name = "io_buildbuddy_buildbuddy_toolchain",\n    sha256 = "baa9af1b9fcc96d18ac90a4dd68ebd2046c8beb76ed89aea9aabca30959ad30c",\n    strip_prefix = "buildbuddy-toolchain-287d6042ad151be92de03c83ef48747ba832c4e2",\n    urls = ["https://github.com/buildbuddy-io/buildbuddy-toolchain/archive/287d6042ad151be92de03c83ef48747ba832c4e2.tar.gz"],\n)\n\nload("@io_buildbuddy_buildbuddy_toolchain//:deps.bzl", "buildbuddy_deps")\n\nbuildbuddy_deps()\n\nload("@io_buildbuddy_buildbuddy_toolchain//:rules.bzl", "buildbuddy")\n\nbuildbuddy(name = "buildbuddy_toolchain")\n'})}),"\n",(0,n.jsxs)(i.p,{children:["If you're using Java, or have a complex project - you'll likely need to configure the toolchain flags a bit. For more information, see our ",(0,n.jsx)(i.a,{href:"/docs/rbe-setup",children:"Remote Build Execution guide"}),"."]})]})}function c(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>s});var n=t(96540);const d={},o=n.createContext(d);function l(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);