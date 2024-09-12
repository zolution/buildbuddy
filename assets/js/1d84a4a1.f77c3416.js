"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6289],{28491:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var s=i(74848),o=i(28453);const n={slug:"buildbuddy-v1-5-0-release-notes",title:"BuildBuddy v1.5.0 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2021-01-08:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},r=void 0,d={permalink:"/blog/buildbuddy-v1-5-0-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-5-0-release-notes.md",source:"@site/blog/buildbuddy-v1-5-0-release-notes.md",title:"BuildBuddy v1.5.0 Release Notes",description:"We're excited to share that v1.5.0 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open-source via Github, Docker, and our Helm Charts!",date:"2021-01-08T12:00:00.000Z",tags:[{inline:!0,label:"product",permalink:"/blog/tags/product"},{inline:!0,label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:2.79,hasTruncateMarker:!0,authors:[{name:"Siggi Simonarson",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/siggisim/",imageURL:"https://avatars.githubusercontent.com/u/1704556?v=4",key:null,page:null}],frontMatter:{slug:"buildbuddy-v1-5-0-release-notes",title:"BuildBuddy v1.5.0 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2021-01-08:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},unlisted:!1,prevItem:{title:"BuildBuddy v1.8.0 Release Notes",permalink:"/blog/buildbuddy-v1-8-0-release-notes"},nextItem:{title:"BuildBuddy v1.4.0 Release Notes",permalink:"/blog/buildbuddy-v1-4-0-release-notes"}},a={authorsImageUrls:[void 0]},l=[{value:"New in v1.5.0",id:"new-in-v150",level:2}];function u(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["We're excited to share that v1.5.0 of BuildBuddy is live on both ",(0,s.jsx)(t.a,{href:"https://app.buildbuddy.io/",children:"Cloud Hosted BuildBuddy"})," and open-source via ",(0,s.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy",children:"Github"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/docs/on-prem.md#docker-image",children:"Docker"}),", and ",(0,s.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"our Helm Charts"}),"!"]}),"\n",(0,s.jsx)(t.p,{children:"Thanks to everyone using open source, cloud-hosted, and enterprise BuildBuddy. We've made lots of improvements in this release based on your feedback."}),"\n",(0,s.jsx)(t.p,{children:"A special thank you to our new open-source contributor:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/restingbull",children:(0,s.jsx)(t.strong,{children:"Corbin McNeely-Smith"})})," who contributed to making our auth flow more resilient to error cases, and made our health-check handlers more flexible to support different load-balancers."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Our focus for this release was on giving users more visibility into test flakiness, monitoring & scaling improvements, and security hardening."}),"\n",(0,s.jsx)(t.h2,{id:"new-in-v150",children:"New in v1.5.0"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Test flakiness dashboard"})," - one of the feature requests we get most frequently from BuildBuddy users is the ability to collect target-level data and analyze it across invocations. Today we're taking the first step in the direction with our new test dashboard. The test dashboard allows you to monitor per-target test statuses by commit - so you can quickly identify and fix flaky test targets that slow down developer velocity. It also has a timing view that gives you a heat-map to quickly identify slow targets. This is just the first step we're taking in exposing more target-level data and are excited to build additional features based on your feedback!"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(58745).A+"",width:"3014",height:"1808"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Prometheus metrics"})," - we've added a ton of new Prometheus metrics to BuildBuddy that allow open-source and Enterprise users to monitor not only BuildBuddy's performance, but the overall health of their developer productivity efforts. This allows you to hook into existing monitoring and alerting tools like Grafana to analyze and get notified when your developers are experiencing issues. Metrics include build duration, cache hit & miss rates, remote execution queue length, and more. For a full list of the new metrics we now expose, see our ",(0,s.jsx)(t.a,{href:"https://www.buildbuddy.io/docs/prometheus-metrics",children:"Prometheus metric documentation"}),". Interested in some metrics that aren't on this list? Let us know!"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(47138).A+"",width:"3090",height:"1902"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Auto-scaling"})," - with the addition of our new Prometheus metrics, we've also made improvements to the autoscaling capabilities of BuildBuddy executors. Now in addition to scaling off of raw compute metrics like CPU\xa0and RAM, BuildBuddy executors can also be configured to scale based on executor queue length and other custom metrics. This allows you to achieve better performance under heavy load while also managing your compute resources more efficiently and cost-effectively."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(63603).A+"",width:"3090",height:"1902"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Security hardening"})," - as part of our SOC 2 compliance controls, BuildBuddy undergoes regularly scheduled penetration tests by paid security professionals. This release contains fixes for all three non-critical findings from our January 2021 pen-test."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Memory leak fixes"})," - we found and fixed 2 memory leaks in our BuildBuddy app (using our new Prometheus metrics!) that would occasionally cause BuildBuddy app servers to restart due to memory pressure."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Mac executor bug fix"})," - we fixed a tricky bug caused by quirks in the way macOS handles hard-linking that significantly improves the reliability of our Mac RBE executors."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"More bug fixes"})," - there are lots of other bug fixes in this release including improved deadline and timeout handling, executor task scheduling improvements, and more!"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"That's it for this release. Stay tuned for more updates coming soon!"}),"\n",(0,s.jsxs)(t.p,{children:["As always, we love your feedback - join our ",(0,s.jsx)(t.a,{href:"https://community.buildbuddy.io",children:"Slack channel"})," or email us at ",(0,s.jsx)(t.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"})," with any questions, comments, or thoughts."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},63603:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/autoscaling-prometheus-f1b89a0b2571afaca6d7d7dc8efc7a85.png"},47138:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/prometheus-f52d7632e8d52f53b3d3911540771682.png"},58745:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/test-grid-346ce65f57f45a6df6c17a3455231078.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var s=i(96540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);