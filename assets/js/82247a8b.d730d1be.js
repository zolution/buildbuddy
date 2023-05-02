"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2026],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,m=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9521:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(4137)),a=["components"],l={id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},u=void 0,c={unversionedId:"config",id:"config",title:"Configuring BuildBuddy",description:"BuildBuddy on-prem is configured using a yaml formatted configuration file.",source:"@site/../docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1683059633,formattedLastUpdatedAt:"5/2/2023",frontMatter:{id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Life of a Self Hosted Executor",permalink:"/docs/architecture-self-hosted-executor"},next:{title:"Samples",permalink:"/docs/config-samples"}},d=[{value:"Command line flag",id:"command-line-flag",children:[],level:2},{value:"Docker",id:"docker",children:[],level:2},{value:"Option types",id:"option-types",children:[],level:2},{value:"Sample configuration files",id:"sample-configuration-files",children:[],level:2},{value:"Configuration options",id:"configuration-options",children:[],level:2},{value:"Flags",id:"flags",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2}],p={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/on-prem"},"BuildBuddy on-prem")," is configured using a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"yaml")," formatted configuration file."),(0,o.kt)("h2",{id:"command-line-flag"},"Command line flag"),(0,o.kt)("p",null,"On startup, BuildBuddy reads this config file which is specified using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config_file")," flag. The config file is periodically re-read, although some options like enabling or disabling a cache require a restart to take effect."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"If you're running BuildBuddy in a Docker image - you can use Docker's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag")," to map a custom local config file to ",(0,o.kt)("inlineCode",{parentName:"p"},"/config.yaml")," in the Docker image."),(0,o.kt)("p",null,"Be sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH_TO_YOUR_LOCAL_CONFIG ")," with the path to your custom config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 -v /PATH_TO_YOUR_LOCAL_CONFIG/config.yaml:/config.yaml gcr.io/flame-public/buildbuddy-app-onprem:latest\n")),(0,o.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,o.kt)("h2",{id:"option-types"},"Option types"),(0,o.kt)("p",null,"There are two types of config options: ",(0,o.kt)("em",{parentName:"p"},"Required"),", and ",(0,o.kt)("em",{parentName:"p"},"Optional"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Required")," - BuildBuddy will not run without these."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optional")," - They configure optional functionality. BuildBuddy will happily run without them.")),(0,o.kt)("h2",{id:"sample-configuration-files"},"Sample configuration files"),(0,o.kt)("p",null,"We maintain a list of ",(0,o.kt)("a",{parentName:"p",href:"/docs/config-samples"},"sample configuration files")," that you can copy and paste to get up and running quickly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-samples#running-locally-disk-only"},"Running locally (disk only)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-samples#running-with-mysql-and-in-memory-cache"},"Running with MySQL and in-memory cache"))),(0,o.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,o.kt)("p",null,"Here's a full list of BuildBuddy's configuration sections:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-app"},"App")," - basic app-level configuration options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-storage"},"Storage")," - options that determine where BuildBuddy stores build results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-database"},"Database")," - options that determine where BuildBuddy stores build metadata.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-cache"},"Cache")," - configuration options for BuildBuddy's built-in Remote Build Cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-integrations"},"Integrations")," - configure integrations with other services."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-ssl"},"SSL")," - configure SSL/TLS certificates and setup."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-github"},"Github")," - configure your Github integration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-misc"},"Misc")," - miscellaneous configuration options.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enterprise only")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-auth"},"Auth")," - configure authentication providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-api"},"API")," - configure BuildBuddy API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/config-org"},"Org")," - configure BuildBuddy Organization.")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("p",null,"In addition to the config file, some BuildBuddy options (like port number) can only be configured via command line flags."),(0,o.kt)("p",null,"More information on these flags, see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/config-flags"},"flags documentation"),"."),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"Environment variables in the config file are expanded at runtime.\nYou only need to reference your environment variables like this ",(0,o.kt)("inlineCode",{parentName:"p"},"${ENV_VARIABLE}"),"."))}s.isMDXComponent=!0}}]);