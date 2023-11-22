"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},s=void 0,u={unversionedId:"rbe-platforms",id:"rbe-platforms",title:"RBE Platforms",description:"BuildBuddy default",source:"@site/../docs/rbe-platforms.md",sourceDirName:".",slug:"/rbe-platforms",permalink:"/docs/rbe-platforms",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-platforms.md",tags:[],version:"current",lastUpdatedBy:"Brentley Jones",lastUpdatedAt:1700683804,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},sidebar:"someSidebar",previous:{title:"Remote Build Execution Setup",permalink:"/docs/rbe-setup"},next:{title:"RBE Secrets",permalink:"/docs/secrets"}},p={},d=[{value:"BuildBuddy default",id:"buildbuddy-default",level:2},{value:"Using a custom Docker image",id:"using-a-custom-docker-image",level:2},{value:"ENTRYPOINT and CMD",id:"entrypoint-and-cmd",level:3},{value:"Passing credentials for Docker images",id:"passing-credentials-for-docker-images",level:3},{value:"Specifying a custom executor pool",id:"specifying-a-custom-executor-pool",level:2},{value:"Target level execution properties",id:"target-level-execution-properties",level:2}],c={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"buildbuddy-default"},"BuildBuddy default"),(0,a.kt)("p",null,"BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. Building on our basic command can specify this platform with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host_platform")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=@buildbuddy_toolchain//:platform\n")),(0,a.kt)("h2",{id:"using-a-custom-docker-image"},"Using a custom Docker image"),(0,a.kt)("p",null,"You can configure BuildBuddy RBE to use a custom docker image, by adding the following rule to a BUILD file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'platform(\n    name = "docker_image_platform",\n    constraint_values = [\n        "@bazel_tools//platforms:x86_64",\n        "@bazel_tools//platforms:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "container-image": "docker://gcr.io/YOUR:IMAGE",\n    },\n)\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"gcr.io/YOUR:IMAGE")," with your docker image url."),(0,a.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=//:docker_image_platform\n")),(0,a.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,a.kt)("h3",{id:"entrypoint-and-cmd"},"ENTRYPOINT and CMD"),(0,a.kt)("p",null,"Remote build actions will be run in your container via ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD"),", so note that any ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," instructions in your Dockerfile will be ignored.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),", on the other hand, is not ignored, so make sure that the container image's ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," is either unset,\nor is a wrapper that is compatible with your build actions' commands."),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact"},"Understand how CMD and ENTRYPOINT interact"),"."),(0,a.kt)("h3",{id:"passing-credentials-for-docker-images"},"Passing credentials for Docker images"),(0,a.kt)("p",null,"You can use images from private container registries by adding the following\nflags to your ",(0,a.kt)("inlineCode",{parentName:"p"},"bazel")," command (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," with\nthe appropriate credentials for the container registry):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--remote_exec_header=x-buildbuddy-platform.container-registry-username=USERNAME\n--remote_exec_header=x-buildbuddy-platform.container-registry-password=ACCESS_TOKEN\n")),(0,a.kt)("p",null,"For the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN"),", we recommend generating a short-lived\ntoken using the command-line tool for your cloud provider."),(0,a.kt)("p",null,"To generate a short-lived token for GCR (Google Container Registry),\nthe username must be ",(0,a.kt)("inlineCode",{parentName:"p"},"_dcgcloud_token")," and the token can be generated with\n",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud auth print-access-token"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--remote_exec_header=x-buildbuddy-platform.container-registry-username=_dcgcloud_token\n--remote_exec_header=x-buildbuddy-platform.container-registry-password="$(gcloud auth print-access-token)"\n')),(0,a.kt)("p",null,"For Amazon ECR (Elastic Container Registry), the username must be ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS"),"\nand a short-lived token can be generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"aws ecr get-login-password --region REGION"),"\n(replace ",(0,a.kt)("inlineCode",{parentName:"p"},"REGION")," with the region matching the ECR image URL):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--remote_exec_header=x-buildbuddy-platform.container-registry-username=AWS\n--remote_exec_header=x-buildbuddy-platform.container-registry-password="$(aws ecr get-login-password --region REGION)"\n')),(0,a.kt)("p",null,"Some cloud providers may also allow the use of long-lived tokens, which\ncan also be used in remote headers. For example, GCR allows setting a\nusername of ",(0,a.kt)("inlineCode",{parentName:"p"},"_json_key")," and then using a service account's\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"JSON-format private key"),"\nas the password. Note that remote headers cannot have newlines;\nthe command ",(0,a.kt)("inlineCode",{parentName:"p"},"tr '\\n' ' '")," is used in this example to remove them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--remote_exec_header=x-buildbuddy-platform.container-registry-username=_json_key\n--remote_exec_header=x-buildbuddy-platform.container-registry-password=\"$(cat service-account-keyfile.json | tr '\\n' ' ')\"\n")),(0,a.kt)("h2",{id:"specifying-a-custom-executor-pool"},"Specifying a custom executor pool"),(0,a.kt)("p",null,"You can configure BuildBuddy RBE to use a custom executor pool, by adding the following rule to a BUILD file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'platform(\n    name = "gpu_platform",\n    constraint_values = [\n        "@bazel_tools//platforms:x86_64",\n        "@bazel_tools//platforms:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "Pool": "my-gpu-pool",\n    },\n)\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"my-gpu-pool")," with your pool name."),(0,a.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=//:gpu_platform\n")),(0,a.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,a.kt)("p",null,"For instructions on how to deploy custom executor pools, we the ",(0,a.kt)("a",{parentName:"p",href:"/docs/rbe-pools"},"RBE Executor Pools docs"),"."),(0,a.kt)("h2",{id:"target-level-execution-properties"},"Target level execution properties"),(0,a.kt)("p",null,"If you want different targets to run in different RBE environments, you can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"exec_properties")," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n')))}f.isMDXComponent=!0}}]);