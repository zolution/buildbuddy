"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9183],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16994:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={slug:"image-streaming",title:"Lazily Pulling Container Images with Podman and SOCI Snapshotter",description:'We\u2019re excited to share how we\'re making "podman pull" ten times faster by lazily fetching container images using the SOCI Snapshotter.',author:"Iain Macdonald",author_title:"Software Engineer @ BuildBuddy",date:"2023-11-15:12:00:00",author_url:"https://www.linkedin.com/in/macdonaldi/",author_image_url:"https://avatars.githubusercontent.com/u/455246?v=4",image:"/img/blog/container-image-streaming.webp",tags:["product","engineering","performance"]},u=void 0,c={permalink:"/blog/image-streaming",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/container-image-streaming.md",source:"@site/blog/container-image-streaming.md",title:"Lazily Pulling Container Images with Podman and SOCI Snapshotter",description:'We\u2019re excited to share how we\'re making "podman pull" ten times faster by lazily fetching container images using the SOCI Snapshotter.',date:"2023-11-15T12:00:00.000Z",formattedDate:"November 15, 2023",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:8.415,hasTruncateMarker:!0,authors:[{name:"Iain Macdonald",title:"Software Engineer @ BuildBuddy",url:"https://www.linkedin.com/in/macdonaldi/",imageURL:"https://avatars.githubusercontent.com/u/455246?v=4"}],frontMatter:{slug:"image-streaming",title:"Lazily Pulling Container Images with Podman and SOCI Snapshotter",description:'We\u2019re excited to share how we\'re making "podman pull" ten times faster by lazily fetching container images using the SOCI Snapshotter.',author:"Iain Macdonald",author_title:"Software Engineer @ BuildBuddy",date:"2023-11-15:12:00:00",author_url:"https://www.linkedin.com/in/macdonaldi/",author_image_url:"https://avatars.githubusercontent.com/u/455246?v=4",image:"/img/blog/container-image-streaming.webp",tags:["product","engineering","performance"]},nextItem:{title:"Bazelcon 2023 Recap",permalink:"/blog/bazelcon-2023"}},s={authorsImageUrls:[void 0]},m=[],d={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We\u2019re excited to announce a podman performance improvement that makes pulling container images about ten times faster on BuildBuddy\u2019s hosted execution service, lowering customer build and test times and improving our ability to autoscale the BuildBuddy executor pool. Read on for the nitty-gritty details."))}g.isMDXComponent=!0}}]);