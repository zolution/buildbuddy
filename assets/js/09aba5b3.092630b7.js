"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1556],{51941:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var n=t(74848),o=t(28453);const d={id:"cloud",title:"Cloud Quickstart",sidebar_label:"Cloud Quickstart"},s=void 0,r={id:"cloud",title:"Cloud Quickstart",description:"Cloud BuildBuddy is a fully managed SaaS solution for Enterprise Bazel features. It provides a results store & UI, remote build caching, remote build execution, and more.",source:"@site/../docs/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/docs/cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cloud.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1728079788e3,frontMatter:{id:"cloud",title:"Cloud Quickstart",sidebar_label:"Cloud Quickstart"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"On-prem Quickstart",permalink:"/docs/on-prem"}},u={},l=[{value:"Setup",id:"setup",level:2},{value:"Verifying your installation",id:"verifying-your-installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"More features",id:"more-features",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io/",children:"Cloud BuildBuddy"})," is a fully managed SaaS solution for Enterprise Bazel features. It provides a results store & UI, remote build caching, remote build execution, and more."]}),"\n",(0,n.jsxs)(i.p,{children:["It's easy to get set up and is free for individuals and open source projects. For companies, we offer an ",(0,n.jsx)(i.a,{href:"/docs/enterprise",children:"Enterprise"})," version of BuildBuddy that contains advanced features like OIDC Auth, API access, and more."]}),"\n",(0,n.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(i.p,{children:["To use BuildBuddy's Results UI, you just need to configure Bazel to send build events to our cloud BuildBuddy instance. The easiest way to do this is with a ",(0,n.jsx)(i.code,{children:".bazelrc"})," file in the root of your project."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --bes_results_url=https://app.buildbuddy.io/invocation/\nbuild --bes_backend=grpcs://remote.buildbuddy.io\n"})}),"\n",(0,n.jsxs)(i.p,{children:["That's it, 2 lines and you're up and running. For more advanced configurations, see the ",(0,n.jsx)(i.a,{href:"#authentication",children:"Authentication"})," and ",(0,n.jsx)(i.a,{href:"#more-features",children:"More features"})," sections below."]}),"\n",(0,n.jsx)(i.h2,{id:"verifying-your-installation",children:"Verifying your installation"}),"\n",(0,n.jsx)(i.p,{children:"Now, when you build or test with Bazel, it will print a url where you can view your build or test results. For example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shellsession",children:"tylerw@lunchbox:~/buildbuddy-io/buildbuddy$ bazel build server:all\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/24a37b8f-4cf2-4909-9522-3cc91d2ebfc4\nINFO: Analyzed 13 targets (0 packages loaded, 0 targets configured).\nINFO: Found 13 targets...\nINFO: Elapsed time: 0.212s, Critical Path: 0.01s\nINFO: 0 processes.\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/24a37b8f-4cf2-4909-9522-3cc91d2ebfc4\nINFO: Build completed successfully, 1 total action\n"})}),"\n",(0,n.jsx)(i.p,{children:"You can \u2318 + double-click on these urls to quickly view the invocation's details."}),"\n",(0,n.jsx)(i.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(i.p,{children:"BuildBuddy Cloud offers three authentication options which are easy to configure on BuildBuddy Cloud:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Unauthenticated"})," - your build logs are uploaded over an encrypted gRPCS/TLS connection and be accessible with anyone you share your BuildBuddy URL with, without credentials. They will not be associated with any BuildBuddy account or organization."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"API key based auth"})," - your build logs are uploaded over an encrypted gRPCS/TLS connection, and will be associated with your account. Only your account and members of your BuildBuddy organization will be able to view your build logs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Certificate based auth"})," - your build logs are uploaded over an encrypted ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Mutual_authentication",children:"mTLS"})," (mutual TLS) connection. Only your account and members of your BuildBuddy organization will be able to view your build logs."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"To configure one of these authentication methods:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io/",children:"Create"})," a BuildBuddy account."]}),"\n",(0,n.jsxs)(i.li,{children:["Visit the ",(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io/docs/setup",children:"Quickstart page"})," which will now contain authentication options."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["For more information see our ",(0,n.jsx)(i.a,{href:"/docs/guide-auth",children:"Authentication Guide"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"more-features",children:"More features"}),"\n",(0,n.jsx)(i.p,{children:"For instructions on how to configure additional BuildBuddy features like Remote Build Caching, Remote Build Execution, and more:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io/",children:"Create"})," a BuildBuddy account."]}),"\n",(0,n.jsxs)(i.li,{children:["Visit the ",(0,n.jsx)(i.a,{href:"https://app.buildbuddy.io/docs/setup",children:"Quickstart page"})," which has instructions on enabling Remote Build Cache, Remote Build Execution, and more."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["For more information on getting started with Remote Build Execution, see our ",(0,n.jsx)(i.a,{href:"/docs/rbe-setup",children:"RBE setup docs"}),"."]})]})}function c(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var n=t(96540);const o={},d=n.createContext(o);function s(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);