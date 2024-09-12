"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5513],{52430:(e,t,a)=>{a.d(t,{A:()=>m});a(96540);var s=a(34164),l=a(89828),n=a(65630),r=a(96745),i=a(26392),o=a(74848);function c(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,i.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function d(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function h(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:r.G.common.lastUpdated,children:[(0,o.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(c,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(d,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const u={lastUpdated:"lastUpdated_JAkA"};function m(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:r}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(l.A,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",u.lastUpdated),children:(n||r)&&(0,o.jsx)(h,{lastUpdatedAt:n,lastUpdatedBy:r})})]})}},89828:(e,t,a)=>{a.d(t,{A:()=>d});a(96540);var s=a(65630),l=a(96745),n=a(7372),r=a(34164);const i={iconEdit:"iconEdit_Z9Sw"};var o=a(74848);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.A)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(n.A,{to:t,className:l.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},56464:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(28453),l=a(87207),n=a(74848);function r(e){let{children:t}=e;return(0,n.jsx)(s.x,{components:l.A,children:t})}},24901:(e,t,a)=>{a.d(t,{A:()=>d});a(96540);var s=a(34164),l=a(65630),n=a(7372);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(74848);function o(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(l.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(o,{...e})},e.permalink)))})]})}},26392:(e,t,a)=>{a.d(t,{i:()=>l});var s=a(44740);function l(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},59971:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),l=a(7372);const n={sidebar:"sidebar_ycyQ",sidebarItemTitle:"sidebarItemTitle_uR5j",sidebarItemList:"sidebarItemList_TpH3",sidebarItem:"sidebarItem_WWBq",sidebarItemLink:"sidebarItemLink_Hhz8",sidebarItemLinkActive:"sidebarItemLinkActive_OkT7"};var r=a(74848);function i(e){let{sidebar:t}=e;return 0===t.items.length?null:(0,r.jsx)("div",{className:"blog-sidebar",children:(0,r.jsxs)("div",{className:(0,s.A)(n.sidebar,"thin-scrollbar"),children:[(0,r.jsx)("h3",{className:n.sidebarItemTitle,children:t.title}),(0,r.jsx)("ul",{className:n.sidebarItemList,children:t.items.map((e=>(0,r.jsx)("li",{className:n.sidebarItem,children:(0,r.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:n.sidebarItemLink,activeClassName:n.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}},25261:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var s=a(96540),l=a(95185),n=a(74258),r=(a(37173),a(74848));const i=s.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const n=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return(0,r.jsx)(i.Provider,{value:n,children:t})}function c(){const e=(0,s.useContext)(i);if(null===e)throw new n.dV("BlogPostProvider");return e}a(23527);var d=a(44740);var h=a(7372);var u=a(34164);function m(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}const g={title:"title_f1Hy"};function x(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=c(),{permalink:l,title:n}=a,i=s?"h1":"h2";return(0,r.jsx)(i,{className:(0,u.A)(g.title,t),children:s?n:(0,r.jsx)(h.A,{to:l,children:n})})}var p=a(65630);const j=["zero","one","two","few","many","other"];function f(e){return j.filter((t=>e.includes(t)))}const v={locale:"en",pluralForms:f(["one","other"]),select:e=>1===e?"one":"other"};function b(){const{i18n:{currentLocale:e}}=(0,d.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:f(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),v}}),[e])}function A(){const e=b();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return s[Math.min(n,s.length-1)]}(a,t,e)}}var w=a(26392);const N={container:"container_mt6G"};function k(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=A();return t=>{const a=Math.ceil(t);return e(a,(0,p.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function _(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function T(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function M(e){let{className:t}=e;const{metadata:a}=c(),{date:s,readingTime:l}=a,n=(0,w.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,u.A)(N.container,"margin-vert--md",t),children:[(0,r.jsx)(_,{date:s,formattedDate:(i=s,n.format(new Date(i)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{}),(0,r.jsx)(k,{readingTime:l})]})]});var i}const y="githubSvg_Uu4N";const P="xSvg_y3PF";const U=function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,r.jsx)("path",{d:"M3.6 9h16.8"}),(0,r.jsx)("path",{d:"M3.6 15h16.8"}),(0,r.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,r.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},L={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},I={twitter:{Icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,r.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,u.A)(e.className,y),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,r.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,r.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,r.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,r.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,r.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,u.A)(e.className,P),style:{"--dark":"#000","--light":"#fff"},children:(0,r.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function B(e){let{platform:t,link:a}=e;const{Icon:s,label:l}=I[n=t]??{Icon:U,label:n};var n;return(0,r.jsx)(h.A,{className:L.authorSocialLink,href:a,title:l,children:(0,r.jsx)(s,{className:(0,u.A)(L.authorSocialLink)})})}function C(e){let{author:t}=e;const a=Object.entries(t.socials??{});return(0,r.jsx)("div",{className:L.authorSocials,children:a.map((e=>{let[t,a]=e;return(0,r.jsx)(B,{platform:t,link:a},t)}))})}var R=a(20859);const F={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function S(e){return e.href?(0,r.jsx)(h.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function O(e){let{title:t}=e;return(0,r.jsx)("small",{className:F.authorTitle,title:t,children:t})}function Z(e){let{name:t,as:a}=e;return a?(0,r.jsx)(R.A,{as:a,className:F.authorName,children:t}):(0,r.jsx)("span",{className:F.authorName,children:t})}function D(e){let{count:t}=e;return(0,r.jsx)("span",{className:(0,u.A)(F.authorBlogPostCount),children:t})}function H(e){let{as:t,author:a,className:s,count:l}=e;const{name:n,title:i,url:o,imageURL:c,email:d,page:h}=a,m=h?.permalink||o||d&&`mailto:${d}`||void 0;return(0,r.jsxs)("div",{className:(0,u.A)("avatar margin-bottom--sm",s,F[`author-as-${t}`]),children:[c&&(0,r.jsx)(S,{href:m,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:(0,u.A)("avatar__photo",F.authorImage),src:c,alt:n})}),(n||i)&&(0,r.jsxs)("div",{className:(0,u.A)("avatar__intro",F.authorDetails),children:[(0,r.jsxs)("div",{className:"avatar__name",children:[n&&(0,r.jsx)(S,{href:m,children:(0,r.jsx)(Z,{name:n,as:t})}),l&&(0,r.jsx)(D,{count:l})]}),!!i&&(0,r.jsx)(O,{title:i}),(0,r.jsx)(C,{author:a})]})]})}const z={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function $(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=c();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),n=1===a.length;return(0,r.jsx)("div",{className:(0,u.A)("margin-top--md margin-bottom--sm",l?z.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,u.A)(!l&&(n?"col col--12":"col col--6"),l?z.imageOnlyAuthorCol:z.authorCol),children:(0,r.jsx)(H,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function G(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(x,{}),(0,r.jsx)(M,{}),(0,r.jsx)($,{})]})}var V=a(97182),E=a(56464);function W(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=c();return(0,r.jsx)("div",{id:s?V.LU:void 0,className:(0,u.A)("markdown",a),children:(0,r.jsx)(E.A,{children:t})})}var X=a(96745),q=a(52430),Y=a(24901);function J(){return(0,r.jsx)("b",{children:(0,r.jsx)(p.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function Q(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(h.A,{"aria-label":(0,p.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(J,{})})}function K(){const{metadata:e,isBlogPostPage:t}=c(),{tags:a,title:s,editUrl:l,hasTruncateMarker:n,lastUpdatedBy:i,lastUpdatedAt:o}=e,d=!t&&n,h=a.length>0;if(!(h||d||l))return null;if(t){const e=!!(l||o||i);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,u.A)("row","margin-top--sm",X.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(Y.A,{tags:a})})}),e&&(0,r.jsx)(q.A,{className:(0,u.A)("margin-top--sm",X.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:o,lastUpdatedBy:i})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,u.A)("col",{"col--9":d}),children:(0,r.jsx)(Y.A,{tags:a})}),d&&(0,r.jsx)("div",{className:(0,u.A)("col text--right",{"col--3":h}),children:(0,r.jsx)(Q,{blogPostTitle:s,to:e.permalink})})]})}function ee(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=c();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(m,{className:(0,u.A)(s,a),children:[(0,r.jsx)(G,{}),(0,r.jsx)(W,{children:t}),(0,r.jsx)(K,{})]})}var te=a(59971);function ae(e){return 1===e?(0,p.T)({id:"theme.blog.post.onePost",description:"Label to describe one blog post",message:"One post"},{count:e}):(0,p.T)({id:"theme.blog.post.nPosts",description:"Label to describe multiple blog posts",message:"{count} posts"},{count:e})}const se=function(e){const{listMetadata:t,items:a,sidebar:s,tag:n}=e,{allTagsPath:i,label:c,count:d}=n;return(0,r.jsx)(l.A,{title:`Posts tagged "${c}"`,description:`Blog | Tagged "${c}"`,wrapperClassName:"blog-wrapper",children:(0,r.jsx)("div",{className:"blog-container margin-vert--lg",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("main",{className:"col col--8",children:[(0,r.jsx)("h1",{children:(0,r.jsx)(p.A,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:ae(d),label:c},children:'{nPosts} tagged with "{label}"'})}),(0,r.jsx)(h.A,{href:i,children:(0,r.jsx)(p.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})}),(0,r.jsx)("div",{className:"margin-vert--xl",children:a.map((e=>{let{content:t}=e;return(0,r.jsx)(o,{frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,content:t,truncated:!0,children:(0,r.jsx)(ee,{truncated:!0,children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})]}),(0,r.jsx)("div",{className:"col col--1"}),(0,r.jsx)("div",{className:"col col--3",children:(0,r.jsx)(te.A,{sidebar:s})})]})})})}}}]);