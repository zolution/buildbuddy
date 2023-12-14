"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5436],{6924:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(85893),n=t(11151);const s={slug:"buildbuddy-v1-4-0-release-notes",title:"BuildBuddy v1.4.0 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2020-11-12:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},d=void 0,r={permalink:"/blog/buildbuddy-v1-4-0-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-4-0-release-notes.md",source:"@site/blog/buildbuddy-v1-4-0-release-notes.md",title:"BuildBuddy v1.4.0 Release Notes",description:"We're excited to share that v1.4.0 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open-source via Github and Docker!",date:"2020-11-12T12:00:00.000Z",formattedDate:"November 12, 2020",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:3.84,hasTruncateMarker:!0,authors:[{name:"Siggi Simonarson",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/siggisim/",imageURL:"https://avatars.githubusercontent.com/u/1704556?v=4"}],frontMatter:{slug:"buildbuddy-v1-4-0-release-notes",title:"BuildBuddy v1.4.0 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2020-11-12:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},unlisted:!1,prevItem:{title:"BuildBuddy v1.5.0 Release Notes",permalink:"/blog/buildbuddy-v1-5-0-release-notes"},nextItem:{title:"Welcoming George Li, Head of Sales",permalink:"/blog/welcoming-george-li-head-of-sales"}},a={authorsImageUrls:[void 0]},l=[{value:"New to Open Source BuildBuddy",id:"new-to-open-source-buildbuddy",level:2},{value:"New to Cloud &amp; Enterprise BuildBuddy",id:"new-to-cloud--enterprise-buildbuddy",level:2}];function u(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["We're excited to share that v1.4.0 of BuildBuddy is live on both ",(0,o.jsx)(i.a,{href:"https://app.buildbuddy.io/",children:"Cloud Hosted BuildBuddy"})," and open-source via ",(0,o.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy",children:"Github"})," and ",(0,o.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/docs/on-prem.md#docker-image",children:"Docker"}),"!"]}),"\n",(0,o.jsx)(i.p,{children:"Thanks to everyone using open source, cloud-hosted, and enterprise BuildBuddy. We've made lots of improvements in this release based on your feedback."}),"\n",(0,o.jsx)(i.p,{children:"A special thank you to our new contributors who we'll soon be sending BuildBuddy t-shirts and holographic BuildBuddy stickers:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/purkhusid",children:(0,o.jsx)(i.strong,{children:"Daniel Purkh\xfas"})})," who enabled environment variable expansion in BuildBuddy config files & more"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/gravypod",children:(0,o.jsx)(i.strong,{children:"Joshua Katz"})})," who added support for auto-populating build metadata from GitLab CI invocations"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Our focus for this release was on giving users new tools to share, compare, analyze, and manage BuildBuddy invocations - as well as major performance and reliability improvements to our remote build execution service."}),"\n",(0,o.jsx)(i.p,{children:"We're also excited to share that over the coming weeks and months, we'll be open sourcing much more of BuildBuddy - including our remote build execution platform. At BuildBuddy we're firmly committed to open source and believe that a transparent and open model is the only way to build truly great developer infrastructure for all."}),"\n",(0,o.jsx)(i.h2,{id:"new-to-open-source-buildbuddy",children:"New to Open Source BuildBuddy"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Invocation sharing & visibility controls"})," - while you've always been able to share BuildBuddy links with members of your organization, it's been difficult to share invocations more broadly (in GitHub issues or on StackOverflow). Now that working from home is the new norm, sharing links to your build logs or invocations details and artifacts has become more important than ever. To support this, we've added a ",(0,o.jsx)(i.strong,{children:"Share"})," button on the invocation page that allows you to control visibility of your invocations (this can be disabled at the organization level). We've also disabled the expiration of invocations and build logs for everyone on BuildBuddy Cloud - so you can share BuildBuddy links with confidence."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(78890).Z+"",width:"3104",height:"1978"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Invocation diffing"})," - we've all run into the problem where a build works on your machine, but not on your coworker's machine. To support debugging these kinds of issues, we've added the ability to diff builds straight from the invocations page. This allows you to quickly find any flags or invocation details that may have changed between builds. Stay tuned for more diffing features here, including cache hit debugging and more."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(1065).Z+"",width:"3104",height:"1978"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Suggested fixes"})," - as software engineers, we often find ourselves bumping into errors and issues that many others have bumped into before. A tool like BuildBuddy provides the perfect way to quickly surface these suggested fixes to developers quickly, without even so much as a Google search. We've started by adding suggestions for common issues that BuildBuddy users run into, but stay tuned for the ability to add your own custom fix suggestions and share them with your organization and beyond!"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(43465).Z+"",width:"3102",height:"1978"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Easy invocation deletion"}),' - you can now delete your BuildBuddy invocations directly from the invocation page "three dot" menu in case you want to share an invocation and delete it when you\'re done.']}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(2339).Z+"",width:"3102",height:"1978"})}),"\n",(0,o.jsx)(i.h2,{id:"new-to-cloud--enterprise-buildbuddy",children:"New to Cloud & Enterprise BuildBuddy"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Cache stats & filters"})," - our trends page now allows you to see trends in caching performance broken down by the Action Cache (AC) and the Content Addressable Store (CAS). The trends page is now also filterable by CI vs non-CI builds, and by user, repo, commit, or host."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(4015).Z+"",width:"3016",height:"1890"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Simplified API key header auth"})," - previously if you wanted to authenticate your BuildBuddy invocations using an API key (instead of using certificated based mTLS), you had to place your API key in each BuildBuddy flag that connected to BuildBuddy with ",(0,o.jsx)(i.code,{children:"YOUR_API_KEY@cloud.buildbuddy.io"}),". This has been greatly simplified in this release with the support for the ",(0,o.jsx)(i.code,{children:"--remote_header"})," flag, which allows you to more easily separate auth credentials into a separate ",(0,o.jsx)(i.code,{children:".bazelrc"})," file."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(21902).Z+"",width:"3102",height:"1978"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Organization creation and invitations"})," - you can now create organizations and send invitation links to others."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:t(67392).Z+"",width:"3102",height:"1978"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Remote build execution performance and reliability improvements"})," - we've made a whole host of changes to our remote build execution executors and schedulers to make them more fault tolerant, easier to scale, and faster. We've also exposed support for executor pools on BuildBuddy Enterprise which allow you to route remote execution traffic based on OS, CPU architecture, GPU requirements, CPU/memory requirements, and more. Routing can be configured at both the platform and individual target level. Finally, we've added improved documentation to help get up and running with RBE more quickly."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"That's it for this release. Stay tuned for more updates coming soon!"}),"\n",(0,o.jsxs)(i.p,{children:["As always, we love your feedback - join our ",(0,o.jsx)(i.a,{href:"https://community.buildbuddy.io",children:"Slack channel"})," or email us at ",(0,o.jsx)(i.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"})," with any questions, comments, or thoughts."]})]})}function c(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},21902:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/api-header-1c7a52a3ed4cbcd6aef72947ea0ad000.png"},1065:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/compare-832b4d5587f9f335ddd347a230a818ad.png"},2339:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/deletion-7bbd57e0e6d1f65ea8f31e1c70ebfd2d.png"},4015:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/filtered-trends-5512c0ca2f5e12f9b5b28799eb44f3dd.png"},67392:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/org-invites-6be7ae6e01fc3d88b4500ee68b52c19b.png"},78890:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/share-92e0b1cebf678eb40708c18e1b5a991b.png"},43465:(e,i,t)=>{t.d(i,{Z:()=>o});const o=t.p+"assets/images/suggested-fixes-60d4952245cffb5dbab4eff96684f905.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>d});var o=t(67294);const n={},s=o.createContext(n);function d(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);