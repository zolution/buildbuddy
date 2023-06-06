"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8349],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,m=s["".concat(d,".").concat(f)]||s[f]||p[f]||i;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[s]="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),u=["components"],a={id:"introduction",title:"BuildBuddy Docs",sidebar_label:"Introduction"},d=void 0,l={unversionedId:"introduction",id:"introduction",title:"BuildBuddy Docs",description:"BuildBuddy is an open-core Bazel build event viewer, result store, remote cache, and remote build execution platform.",source:"@site/../docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1686010342,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"introduction",title:"BuildBuddy Docs",sidebar_label:"Introduction"},sidebar:"someSidebar",next:{title:"Cloud Quickstart",permalink:"/docs/cloud"}},c={},s=[{value:"Get started",id:"get-started",level:2},{value:"Go further",id:"go-further",level:2},{value:"Start contributing",id:"start-contributing",level:2},{value:"Join the discussion",id:"join-the-discussion",level:2}],p={toc:s},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BuildBuddy is an open-core Bazel build event viewer, result store, remote cache, and remote build execution platform."),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"There are two main ways to get started with BuildBuddy:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/cloud"},"BuildBuddy Cloud"),": a fully managed cloud version of BuildBuddy that is free to use for individuals and open source projects. You can get up and running quickly by just adding a few lines to your ",(0,i.kt)("inlineCode",{parentName:"li"},".bazelrc")," file."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/on-prem"},"BuildBuddy On-Prem"),": Run your own instance of BuildBuddy on your own servers or in your own cloud environment. Features targeted at individual developers are free and open source. ",(0,i.kt)("a",{parentName:"li",href:"/docs/enterprise"},"BuildBuddy Enterprise")," is also available for companies that need advanced features like OIDC auth, API access, and more.")),(0,i.kt)("h2",{id:"go-further"},"Go further"),(0,i.kt)("p",null,"Once you've gotten started with BuildBuddy - there's lots more to check out!"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides"},"Guides"),": Helpful guides to walk you through common BuildBuddy use-cases."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/config"},"Configuration options"),": Learn how to configure BuildBuddy to conform to your needs."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/remote-build-execution"},"Remote Build Execution"),": parallelize your builds across thousands of machines."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/troubleshooting"},"Troubleshooting"),": Where to go when you're stuck.")),(0,i.kt)("h2",{id:"start-contributing"},"Start contributing"),(0,i.kt)("p",null,"Check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"contributing")," docs to find out how to get started contributing to BuildBuddy."),(0,i.kt)("h2",{id:"join-the-discussion"},"Join the discussion"),(0,i.kt)("p",null,"Join our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"BuildBuddy Slack channel")," to talk to the team, ask questions, discuss BuildBuddy, and get to know us!"))}m.isMDXComponent=!0}}]);