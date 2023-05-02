"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[739],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,f=p["".concat(d,".").concat(b)]||p[b]||u[b]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9306:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],c={id:"config-database",title:"Database Configuration",sidebar_label:"Database"},d=void 0,l={unversionedId:"config-database",id:"config-database",title:"Database Configuration",description:"Section",source:"@site/../docs/config-database.md",sourceDirName:".",slug:"/config-database",permalink:"/docs/config-database",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-database.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1683059633,formattedLastUpdatedAt:"5/2/2023",frontMatter:{id:"config-database",title:"Database Configuration",sidebar_label:"Database"},sidebar:"someSidebar",previous:{title:"App",permalink:"/docs/config-app"},next:{title:"Storage",permalink:"/docs/config-storage"}},s=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example sections",id:"example-sections",children:[{value:"SQLite",id:"sqlite",children:[],level:3},{value:"MySQL",id:"mysql",children:[],level:3}],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"section"},"Section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"database:")," The database section configures the database that BuildBuddy stores metadata in. ",(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data_source")," This is a connection string used by the database driver to connect to the database. MySQL and SQLite databases are supported.")),(0,o.kt)("h2",{id:"example-sections"},"Example sections"),(0,o.kt)("h3",{id:"sqlite"},"SQLite"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'database:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\n')),(0,o.kt)("h3",{id:"mysql"},"MySQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'database:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\n')))}p.isMDXComponent=!0}}]);