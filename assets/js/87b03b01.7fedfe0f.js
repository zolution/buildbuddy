"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9691],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],l={id:"config-rbe",title:"RBE Configuration",sidebar_label:"RBE"},c=void 0,s={unversionedId:"config-rbe",id:"config-rbe",title:"RBE Configuration",description:"Remote Build Execution is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-rbe.md",sourceDirName:".",slug:"/config-rbe",permalink:"/docs/config-rbe",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-rbe.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1669140409,formattedLastUpdatedAt:"11/22/2022",frontMatter:{id:"config-rbe",title:"RBE Configuration",sidebar_label:"RBE"},sidebar:"someSidebar",previous:{title:"Org",permalink:"/docs/config-org"},next:{title:"Misc",permalink:"/docs/config-misc"}},u=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2},{value:"Executor config",id:"executor-config",children:[{value:"Container registry authentication",id:"container-registry-authentication",children:[],level:3}],level:2},{value:"Executor environment variables",id:"executor-environment-variables",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Remote Build Execution is only configurable in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy."),(0,i.kt)("p",null,"RBE configuration must be enabled in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file, but most configuration is done via ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"toolchains"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-platforms"},"platforms"),", or the ",(0,i.kt)("a",{parentName:"p",href:"enterprise-helm"},"enterprise Helm chart"),"."),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"remote_execution:")," The remote_execution section allows you to configure BuildBuddy's remote build execution. ",(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable_remote_exec:")," True if remote execution should be enabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_pool_name:")," The default executor pool to use if one is not specified.")),(0,i.kt)("h2",{id:"example-section"},"Example section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"remote_execution:\n  enable_remote_exec: true\n")),(0,i.kt)("h2",{id:"executor-config"},"Executor config"),(0,i.kt)("p",null,"BuildBuddy RBE executors take their own configuration file that is pulled from ",(0,i.kt)("inlineCode",{parentName:"p"},"/config.yaml")," on the executor docker image. Using BuildBuddy's ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-helm"},"Enterprise Helm chart")," will take care of most of this configuration for you."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'executor:\n  app_target: "grpcs://your.buildbuddy.install:443"\n  root_directory: "/buildbuddy/remotebuilds/"\n  local_cache_directory: "/buildbuddy/filecache/"\n  local_cache_size_bytes: 5000000000 # 5GB\n  docker_socket: /var/run/docker.sock\n')),(0,i.kt)("h3",{id:"container-registry-authentication"},"Container registry authentication"),(0,i.kt)("p",null,"By default, executors will respect the container registry configuration in\n",(0,i.kt)("inlineCode",{parentName:"p"},"~/.docker/config.json"),". The format of this file is described ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/login/"},"here"),".\nAny credential helpers configured there will be respected."),(0,i.kt)("p",null,"For convenience, per-registry credentials can also be statically configured\nin the executor config YAML. These credentials will take priority over the\nconfiguration in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.docker/config.json"),"."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'executor:\n  container_registries:\n    - hostnames:\n        - "my-private-registry.io"\n        - "subdomain.my-private-registry.io"\n      username: "registry-username"\n      password: "registry-password-or-long-lived-token"\n')),(0,i.kt)("p",null,"This is especially useful for registries that allow using static tokens\nfor authentication, which avoids the need to set up credential helpers."),(0,i.kt)("p",null,'For example, Google Container Registry allows setting a username of\n"',"_",'json_key" and then passing the service account key directly:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'executor:\n  container_registries:\n    - hostnames:\n        - "gcr.io"\n        - "marketplace.gcr.io"\n      username: "_json_key"\n      # Note: the YAML multiline string syntax ">" is used to embed the\n      # key JSON as a raw string. Be sure to indent as shown below:\n      password: >\n        {\n          "type": "service_account",\n          "project_id": my-project-id",\n          "private_key_id": "...",\n          "private_key": "...",\n          // More fields omitted\n          ...\n        }\n')),(0,i.kt)("h2",{id:"executor-environment-variables"},"Executor environment variables"),(0,i.kt)("p",null,"In addition to the config.yaml, there are also environment variables that executors consume. To get more information about their environment. All of these are optional, but can be useful for more complex configurations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYS_MEMORY_BYTES"),": The amount of memory (in bytes) that this executor is allowed to consume. Defaults to free system memory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYS_MILLICPU"),": The amount of CPU (in millicpus) that this executor is allowed to consume. Defaults to system CPU."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_NODENAME"),": The name of the machine/node that the executor is running on. Defaults to empty string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_HOSTNAME"),": The hostname by which the app can communicate to this executor. Defaults to machine hostname."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_PORT"),": The port over which the app can communicate with this executor. Defaults to the executor's gRPC port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MY_POOL"),": The executor pool that this executor should be placed in. Defaults to empty string.")),(0,i.kt)("p",null,"Many of these environment variables are typically set based on Kubernetes FieldRefs like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"env:\n  - name: SYS_MEMORY_BYTES\n    valueFrom:\n      resourceFieldRef:\n        resource: limits.memory\n  - name: SYS_MILLICPU\n    valueFrom:\n      resourceFieldRef:\n        resource: limits.cpu\n  - name: MY_HOSTNAME\n    valueFrom:\n      fieldRef:\n        fieldPath: status.podIP\n  - name: MY_NODENAME\n    valueFrom:\n      fieldRef:\n        fieldPath: spec.nodeName\n")))}d.isMDXComponent=!0}}]);