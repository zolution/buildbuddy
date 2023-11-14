"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4339],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},29158:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=o(83117),r=o(80102),l=(o(67294),o(3905)),a=["components"],i={id:"rbe-pools",title:"RBE Executor Pools",sidebar_label:"RBE Executor Pools"},u=void 0,p={unversionedId:"rbe-pools",id:"rbe-pools",title:"RBE Executor Pools",description:"By default, all BuildBuddy executors are placed in a single pool - and any task can run on any executor (running the same operating system and cpu architecture).",source:"@site/../docs/rbe-pools.md",sourceDirName:".",slug:"/rbe-pools",permalink:"/docs/rbe-pools",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-pools.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1699997253,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{id:"rbe-pools",title:"RBE Executor Pools",sidebar_label:"RBE Executor Pools"},sidebar:"someSidebar",previous:{title:"RBE with GitHub Actions",permalink:"/docs/rbe-github-actions"},next:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"}},s={},c=[{value:"Deploying executors in a pool",id:"deploying-executors-in-a-pool",level:2},{value:"Setting the app&#39;s default pool name",id:"setting-the-apps-default-pool-name",level:2},{value:"Selecting a pool to run your builds on",id:"selecting-a-pool-to-run-your-builds-on",level:2},{value:"Platform level",id:"platform-level",level:3},{value:"Target level",id:"target-level",level:3}],d={toc:c},m="wrapper";function f(e){var t=e.components,o=(0,r.Z)(e,a);return(0,l.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By default, all BuildBuddy executors are placed in a single pool - and any task can run on any executor (running the same operating system and cpu architecture)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/rbe-platforms"},"Platforms")," can be used to specify custom Docker images in which to run your actions, but sometimes you want control over more properties of the executor machine - like available memory, access to GPUs, or physical location."),(0,l.kt)("p",null,"To support these use cases, BuildBuddy allows executors to be registered in different pools - and for Bazel to select from these pools at either the Platform level or the target level, depending on your needs."),(0,l.kt)("h2",{id:"deploying-executors-in-a-pool"},"Deploying executors in a pool"),(0,l.kt)("p",null,"When creating an executor deployment, you can specify the name of the pool its executors should be registered to with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MY_POOL")," environment variable. This can be set to any string value."),(0,l.kt)("p",null,"If using the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildbuddy/buildbuddy-executor")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-executor"},"Helm charts"),", you can set this using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-executor/values.yaml#L15"},"poolName value"),"."),(0,l.kt)("h2",{id:"setting-the-apps-default-pool-name"},"Setting the app's default pool name"),(0,l.kt)("p",null,"By default, both executors and the BuildBuddy app do not set a pool name and any RBE request that comes in without a ",(0,l.kt)("inlineCode",{parentName:"p"},"Pool")," property set will be sent to the default pool. If you'd like requests without a ",(0,l.kt)("inlineCode",{parentName:"p"},"Pool")," property to be sent to a different default pool, you can set the app's ",(0,l.kt)("inlineCode",{parentName:"p"},"default_pool_name")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_execution")," block of its ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"remote_execution:\n    enable_remote_exec: true\n    default_pool_name: my-default-pool\n")),(0,l.kt)("h2",{id:"selecting-a-pool-to-run-your-builds-on"},"Selecting a pool to run your builds on"),(0,l.kt)("p",null,"Now that you've deployed multiple executor pools, you can select which pool you'd like your builds to run on - either at the platform level or the target level."),(0,l.kt)("h3",{id:"platform-level"},"Platform level"),(0,l.kt)("p",null,"You can configure BuildBuddy RBE to use a custom executor pool at the platform level, by adding the following rule to a BUILD file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'platform(\n    name = "gpu_platform",\n    exec_properties = {\n        "OSFamily": "Linux",\n        "Pool": "my-gpu-pool",\n    },\n)\n')),(0,l.kt)("p",null,"Make sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"my-gpu-pool")," with your docker image url."),(0,l.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--host_platform=//:gpu_platform\n")),(0,l.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,l.kt)("h3",{id:"target-level"},"Target level"),(0,l.kt)("p",null,"If you want different targets to run in different RBE environments, you can specify ",(0,l.kt)("inlineCode",{parentName:"p"},"exec_properties")," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n')))}f.isMDXComponent=!0}}]);