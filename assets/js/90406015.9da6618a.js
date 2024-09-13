"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7240],{11800:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(74848),s=i(28453);const r={slug:"buildbuddy-v1-8-0-release-notes",title:"BuildBuddy v1.8.0 Release Notes",authors:"siggi",date:"2021-03-18:12:00:00",tags:["product","release-notes","team"]},d=void 0,o={permalink:"/blog/buildbuddy-v1-8-0-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-8-0-release-notes.md",source:"@site/blog/buildbuddy-v1-8-0-release-notes.md",title:"BuildBuddy v1.8.0 Release Notes",description:"We're excited to share that v1.8.0 of BuildBuddy is live on Cloud Hosted BuildBuddy, Enterprise, and Open Source via GitHub, Docker, and our Helm Charts!",date:"2021-03-18T12:00:00.000Z",tags:[{inline:!0,label:"product",permalink:"/blog/tags/product"},{inline:!0,label:"release-notes",permalink:"/blog/tags/release-notes"},{inline:!0,label:"team",permalink:"/blog/tags/team"}],readingTime:2.95,hasTruncateMarker:!0,authors:[{name:"Siggi Simonarson",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/siggisim/",imageURL:"https://avatars.githubusercontent.com/u/1704556?v=4",key:"siggi",page:null}],frontMatter:{slug:"buildbuddy-v1-8-0-release-notes",title:"BuildBuddy v1.8.0 Release Notes",authors:"siggi",date:"2021-03-18:12:00:00",tags:["product","release-notes","team"]},unlisted:!1,prevItem:{title:"BuildBuddy Achieves SOC 2 Certification",permalink:"/blog/buildbuddy-achieves-soc-2-certification"},nextItem:{title:"BuildBuddy v1.5.0 Release Notes",permalink:"/blog/buildbuddy-v1-5-0-release-notes"}},a={authorsImageUrls:[void 0]},l=[{value:"New in v1.8.0",id:"new-in-v180",level:2}];function u(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We're excited to share that v1.8.0 of BuildBuddy is live on ",(0,n.jsx)(t.a,{href:"https://app.buildbuddy.io/",children:"Cloud Hosted BuildBuddy"}),", Enterprise, and Open Source via ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy",children:"GitHub"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/docs/on-prem.md#docker-image",children:"Docker"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"our Helm Charts"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"Thanks to everyone using open source, cloud-hosted, and enterprise BuildBuddy. We've made lots of improvements in this release based on your feedback."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"A special thank you to our new open-source contributor:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/ashleydavies",children:(0,n.jsx)(t.strong,{children:"Ashley Davies"})})," who contributed several pull requests to our ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/",children:"Helm charts"})," in order to make them easier to use in clusters that already have an Nginx controller deployed."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"And a warm welcome to our three new team members!"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/pari-parajuli/",children:(0,n.jsx)(t.strong,{children:"Pari Parajuli"})})," who joins our engineering team as an intern who's currently studying at University of California, Berkeley."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/vadimberezniker/",children:(0,n.jsx)(t.strong,{children:"Vadim Berezniker"})})," who joins our engineering team after 7 years at Google on the Google Cloud team."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/zoey-greer/",children:(0,n.jsx)(t.strong,{children:"Zoey Greer"})})," who joins us as a software engineer from the Google Search team."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We're excited to continue growing BuildBuddy and fulfill our mission of making developers more productive!"}),"\n",(0,n.jsx)(t.p,{children:"Our focus for this release was on reliability, performance, improved documentation, and making BuildBuddy easier to release and monitor."}),"\n",(0,n.jsx)(t.h2,{id:"new-in-v180",children:"New in v1.8.0"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Read-only API keys"})," - when using Bazel remote caching, teams often need to configure which machines have write access to the cache. While Bazel has some flags to control cache writes, using these can be error prone and insecure. BuildBuddy now makes this easy by introducing the ability to create both read-only and read+write api keys on your organization settings page. You can create as many API keys (and certificates) as you'd like and distribute them to your CI machines, workstations, and other endpoints."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(63699).A+"",width:"2766",height:"1936"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Improved docs"})," - we've completely revamped ",(0,n.jsx)(t.a,{href:"https://docs.buildbuddy.io/",children:"our documentation"}),' and added support for tables of contents, syntax highlighting, better navigation, dark mode (!!), interactive widgets, and an "Edit this page" button that links directly to the correct file in our ',(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/docs",children:"GitHub docs directory"})," for submitting pull requests. With these great new features, we'll be ramping up documentation on both new and existing BuildBuddy features to make the lives of BuildBuddy users easier."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(67759).A+"",width:"2766",height:"1936"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Testing improvements"})," - we've invested heavily in our testing infrastructure, adding new integration tests and test fixtures that make testing BuildBuddy's interactions with Bazel easier. This will lead to more stable releases and faster iteration cycles going forward."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Remote execution improvements"})," - we've made more speed and reliability improvements to our remote build execution platform, including faster cache hit checking, faster auth checks, and better support for iOS builds."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Buildkite integration -"})," invocations that are kicked off from Buildkite now link back to the Buildkite job that triggered them."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(80181).A+"",width:"2766",height:"1936"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Grafana"})," - our ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"Helm charts"})," make deploying BuildBuddy to Kubernetess cluster a breeze. One thing that's been tricky for many users has been accessing the Prometheus data that BuildBuddy exports in an easily digestible format. To fix this, we made it easy to ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise#example-with-prometheus--grafana",children:"deploy Grafana and Prometheus"})," via our Helm charts with just a couple lines of configuration. It comes out of the box with a default dashboard that shows popular BuildBuddy metrics and can be easily extended to add more graphs."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(90660).A+"",width:"2766",height:"1936"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"More to come"})," - we've been laying the groundwork for two major projects that will go live in the coming weeks to make building and testing your Bazel projects even faster."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"That's it for this release. Stay tuned for more updates coming soon!"}),"\n",(0,n.jsxs)(t.p,{children:["As always, we love your feedback - join our ",(0,n.jsx)(t.a,{href:"https://community.buildbuddy.io",children:"Slack channel"})," or email us at ",(0,n.jsx)(t.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"})," with any questions, comments, or thoughts."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},80181:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/buildkite-b7eb8a773a668b357c48e9f9aa9fd35c.png"},67759:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/docsv2-543ec66beba1ff8bfbbd932bb510d0d7.png"},90660:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/grafana-ccbd1e8325f2a572401b7f6ee6919115.png"},63699:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/read-only-36e28ec9b925ca0fdb2822bb446d401e.png"},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);