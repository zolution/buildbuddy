"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5840],{71567:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>u});var s=n(74848),t=n(28453);const d={slug:"buildbuddy-v1-1-0-release-notes",title:"BuildBuddy v1.1.0 Release Notes",authors:"siggi",date:"2020-07-15:12:00:00",tags:["product","release-notes"]},o=void 0,r={permalink:"/blog/buildbuddy-v1-1-0-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-1-0-release-notes.md",source:"@site/blog/buildbuddy-v1-1-0-release-notes.md",title:"BuildBuddy v1.1.0 Release Notes",description:"Excited to share that v1.1.0 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open source via Github and Docker!",date:"2020-07-15T12:00:00.000Z",tags:[{inline:!0,label:"product",permalink:"/blog/tags/product"},{inline:!0,label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:3.67,hasTruncateMarker:!0,authors:[{name:"Siggi Simonarson",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/siggisim/",imageURL:"https://avatars.githubusercontent.com/u/1704556?v=4",key:"siggi",page:null}],frontMatter:{slug:"buildbuddy-v1-1-0-release-notes",title:"BuildBuddy v1.1.0 Release Notes",authors:"siggi",date:"2020-07-15:12:00:00",tags:["product","release-notes"]},unlisted:!1,prevItem:{title:"BuildBuddy v1.2.1 Release Notes",permalink:"/blog/buildbuddy-v1-2-1-release-notes"},nextItem:{title:"BuildBuddy v1.0.6 Release Notes",permalink:"/blog/buildbuddy-v1-0-6-release-notes"}},l={authorsImageUrls:[void 0]},u=[{value:"<strong>New to Open Source BuildBuddy</strong>",id:"new-to-open-source-buildbuddy",level:2},{value:"New to Cloud &amp; Enterprise BuildBuddy",id:"new-to-cloud--enterprise-buildbuddy",level:2}];function a(e){const i={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Excited to share that v1.1.0 of BuildBuddy is live on both ",(0,s.jsx)(i.a,{href:"https://app.buildbuddy.io/",children:"Cloud Hosted BuildBuddy"})," and open source via ",(0,s.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy",children:"Github"})," and ",(0,s.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/SETUP.md#docker-image",children:"Docker"}),"!"]}),"\n",(0,s.jsx)(i.p,{children:"Thanks to everyone that has tested open source and cloud-hosted BuildBuddy. We've made lots of improvements in this release based on your feedback."}),"\n",(0,s.jsx)(i.p,{children:"A special thank you to our new contributors:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/SrodriguezO",children:"Sergio Rodriguez Orellana"})," who contributed support for making dense mode the default view mode."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://twitter.com/timgl?lang=en",children:"Tim Glaser"})," who made some major improvements to our documentation."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Our focus for this release was on our new Remote Build Execution platform. This release marks a huge step in fulfilling our mission of making developers more productive by supporting the Bazel ecosystem."}),"\n",(0,s.jsx)(i.p,{children:"BuildBuddy's Remote Build Execution platform supports executing your Bazel build and tests in parallel across thousands of machines with automatic scaling, support for custom Docker images, and more.\xa0We've been iterating on and testing BuildBuddy RBE\xa0for months with companies of different sizes, and are excited to now make it available to everyone."}),"\n",(0,s.jsx)(i.p,{children:"While BuildBuddy RBE is not yet fully open source, we're offering Cloud RBE for free to individuals and open source projects to show our appreciation to the open source community."}),"\n",(0,s.jsxs)(i.p,{children:["We'll be adding more documentation on getting started with BuildBuddy RBE\xa0in the coming weeks, but in the meantime feel free to email us at ",(0,s.jsx)(i.a,{href:"mailto:rbe@buildbuddy.io",children:"rbe@buildbuddy.io"})," or ping us in the ",(0,s.jsx)(i.a,{href:"https://join.slack.com/t/buildbuddy/shared_invite/zt-e0cugoo1-GiHaFuzzOYBPQzl9rkUR_g",children:"BuildBuddy Slack"})," and we'll be happy to help you get started."]}),"\n",(0,s.jsx)(i.h2,{id:"new-to-open-source-buildbuddy",children:(0,s.jsx)(i.strong,{children:"New to Open Source BuildBuddy"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"**Cache & remote execution badges -\xa0**BuildBuddy invocations pages now show badges that indicate whether or not caching and remote execution are enabled. Clicking on these badges takes you to instructions on how to configure these if they're enabled for your BuildBuddy instance."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(85396).A+"",width:"2734",height:"2110"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Remote build execution configuration options"})," - the BuildBuddy configuration widget has now been updated to enable configuring of remote build execution if it's enabled for your BuildBuddy instance."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(72173).A+"",width:"2804",height:"2046"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Better build status support"})," - BuildBuddy now better distinguishes between in-progress, failed, passed, and cancelled builds with new colorful status indicators, favicons, and more."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(62588).A+"",width:"1224",height:"974"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Improved documentation and new website"})," - we've completely revamped the BuildBuddy documentation, and it's now sync'd between GitHub and ",(0,s.jsx)(i.a,{href:"https://buildbuddy.io/docs/",children:"buildbuddy.io/docs/"}),", so your docs will be fresh regardless of where you're reading them.\xa0We'll be adding new sections on configuring RBE\xa0in the coming weeks. We've also completely revamped the BuildBuddy website to make it easier to navigate and perform actions like requesting a quote, or subscribing to our ",(0,s.jsx)(i.a,{href:"#wf-form-Newsletter-Form",children:"newsletter"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(80415).A+"",width:"2804",height:"2046"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Test run grid"})," - BuildBuddy will now automatically display test runs as a grid when a single test target is run more than 10 times. This supports the use case of finding and fixing flaky tests by running them with ",(0,s.jsx)(i.strong,{children:"--runs_per_test=100"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(30503).A+"",width:"2804",height:"2046"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Performance and reliability improvements"})," - we put a lot of work into improving performance and reliability in this release. This includes changes like better event flushing (no more getting stuck on 15 build events), better shutdown behavior, speed improvements and optimizations in build artifact uploading and downloading, and more."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"new-to-cloud--enterprise-buildbuddy",children:"New to Cloud & Enterprise BuildBuddy"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Remote Build Execution"})," - BuildBuddy Cloud and enterprise on-prem now support Remote Build Execution. Features include custom Docker image support, automatic scaling, multiple caching layers, and more. Additional features like Mac support, viewing of remote build actions in BuildBuddy, and more are coming soon."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(84029).A+"",width:"1786",height:"1290"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Invocation grouping"})," - BuildBuddy invocations can now be grouped by commit and by repo.\xa0These can be populated in one of three ways:"]}),"\n"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"automatically by common CI\xa0environments like CircleCI and GitHub actions"}),"\n",(0,s.jsxs)(i.li,{children:["manually by using build flags ",(0,s.jsx)(i.strong,{children:"--build_metadata=REPO_URL="})," and **--build_metadata=COMMIT_SHA=**\u200d"]}),"\n",(0,s.jsxs)(i.li,{children:["by using a ",(0,s.jsx)(i.strong,{children:"--workspace_status_command"})," script like ",(0,s.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh",children:"this one"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(50202).A+"",width:"2804",height:"2046"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"New cloud endpoint"})," - BuildBuddy now exposes a L7 load balanced gRPCS cloud endpoint at ",(0,s.jsx)(i.strong,{children:"cloud.buildbuddy.io"})," which can be used for BES, cache, and remote execution (see our ",(0,s.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelrc#L25",children:".bazelrc"})," for an example).\xa0We'll gradually be migrating users to this from the old events.buildbuddy.io, and cache.buildbuddy.io endpoints with port numbers."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Easier enterprise deployment"})," - deploying enterprise BuildBuddy is now just as easy as deploying open source BuildBuddy, with a one line install script that deploys to your Kubernetes cluster.\xa0It takes your ",(0,s.jsx)(i.a,{href:"https://www.buildbuddy.io/docs/config",children:"BuildBuddy configuration file"})," as a parameter so you can easily configure things to your needs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"That's it for this release. Stay tuned for more updates coming soon!"}),"\n",(0,s.jsxs)(i.p,{children:["As always, we love your feedback - email us at ",(0,s.jsx)(i.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"})," with any questions, comments, or thoughts."]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},85396:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/cache-badge-2c38a521bbb47b4240f5016ae47e7a42.png"},50202:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/commits-67300a39792504155c47b2449cb56778.png"},72173:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/config-options-f6eddae01c7327f660d86cc302e51096.png"},80415:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/docs-333e2f9bf7a699f717bae58b936b06d0.png"},62588:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/favicon-37b6e558a8c93c2773a11d1051f95231.png"},84029:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/rbe-63771a45e6865e1125e29a41c7d9bc6e.png"},30503:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/test-runs-035a2816fbde63e269214936ef4a7a14.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var s=n(96540);const t={},d=s.createContext(t);function o(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);