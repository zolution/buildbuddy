"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4566],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(o),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(m,a(a({ref:t},s),{},{components:o})):n.createElement(m,a({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},81785:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=o(83117),r=o(80102),i=(o(67294),o(3905)),a=["components"],l={id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},c=void 0,u={unversionedId:"troubleshooting-rbe",id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",description:"Remote connection/protocol failed with: execution failed",source:"@site/../docs/troubleshooting-rbe.md",sourceDirName:".",slug:"/troubleshooting-rbe",permalink:"/docs/troubleshooting-rbe",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-rbe.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1698774854,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Slow Uploads",permalink:"/docs/troubleshooting-slow-upload"}},s={},d=[{value:"Remote connection/protocol failed with: execution failed",id:"remote-connectionprotocol-failed-with-execution-failed",level:2},{value:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns",id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",level:2},{value:"exec user process caused &quot;exec format error&quot;",id:"exec-user-process-caused-exec-format-error",level:2},{value:"rpc error: code = Unavailable desc = No registered executors.",id:"rpc-error-code--unavailable-desc--no-registered-executors",level:2},{value:"WARNING: Remote Cache: UNAVAILABLE: io exception",id:"warning-remote-cache-unavailable-io-exception",level:2}],p={toc:d},f="wrapper";function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"remote-connectionprotocol-failed-with-execution-failed"},"Remote connection/protocol failed with: execution failed"),(0,i.kt)("p",null,"This error is often a sign that a cache write is timing out. By default, bazel's ",(0,i.kt)("inlineCode",{parentName:"p"},"remote_timeout")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout"},"flag")," limits all remote execution calls to 60 seconds."),(0,i.kt)("p",null,"We recommend using the following flag to increase this remote timeout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--remote_timeout=600\n")),(0,i.kt)("p",null,"These expensive writes should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."),(0,i.kt)("h2",{id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns"},"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns"),(0,i.kt)("p",null,"This error is a sign that a cache write is timing out. By default, bazel's ",(0,i.kt)("inlineCode",{parentName:"p"},"remote_timeout")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout"},"flag")," limits all remote execution calls to 60 seconds."),(0,i.kt)("p",null,"We recommend using the following flag to increase this remote timeout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--remote_timeout=600\n")),(0,i.kt)("h2",{id:"exec-user-process-caused-exec-format-error"},'exec user process caused "exec format error"'),(0,i.kt)("p",null,"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."),(0,i.kt)("p",null,"If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.kt)("a",{parentName:"p",href:"/request-demo/"},"contact our sales team"),"."),(0,i.kt)("h2",{id:"rpc-error-code--unavailable-desc--no-registered-executors"},"rpc error: code = Unavailable desc = No registered executors."),(0,i.kt)("p",null,"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."),(0,i.kt)("p",null,"If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.kt)("a",{parentName:"p",href:"/request-demo/"},"contact our sales team"),"."),(0,i.kt)("h2",{id:"warning-remote-cache-unavailable-io-exception"},"WARNING: Remote Cache: UNAVAILABLE: io exception"),(0,i.kt)("p",null,"This error may occur when Bazel fails to properly maintain a long-running TCP connection to BuildBuddy."),(0,i.kt)("p",null,"To check whether this is the case, try running Bazel with ",(0,i.kt)("inlineCode",{parentName:"p"},"--remote_grpc_log=grpc.log")," to capture the gRPC traffic\nbetween Bazel and BuildBuddy. The log file will be in protobuf format. To convert it to JSON format, download the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"BuildBuddy CLI")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"bb print --grpc_log=<path-to-file>/grpc.log"),"."),(0,i.kt)("p",null,"In the log, you may see network errors such as the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "status":  {\n    "code":  14,\n    "message":  "io.netty.channel.unix.Errors$NativeIoException: readAddress(..) failed: Connection reset by peer"\n  },\n')),(0,i.kt)("p",null,"This typically happens when there is a proxy or gateway (e.g. AWS NAT Gateway) in between Bazel and BuildBuddy that is terminating idle connections too quickly."),(0,i.kt)("p",null,"When this happens, try the following Linux network settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Lowered from default value: 7200\nsudo sysctl -w net.ipv4.tcp_keepalive_time=180\n# Lowered from default value: 75\nsudo sysctl -w net.ipv4.tcp_keepalive_intvl=60\n# Lowered from default value: 9\nsudo sysctl -w net.ipv4.tcp_keepalive_probes=5\n")),(0,i.kt)("p",null,"This will cause the Linux kernel to send keepalive probes earlier and more frequently, before the proxy/gateway in the middle detects and drops the idle connection."),(0,i.kt)("p",null,"The optimal values may depend on specific network conditions, but try these values as a starting point. Please ",(0,i.kt)("a",{parentName:"p",href:"/contact/"},"contact us")," if you have any questions / concerns."))}m.isMDXComponent=!0}}]);