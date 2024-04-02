"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2026],{57097:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(85893),s=n(11151);const l={id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},r=void 0,d={id:"config",title:"Configuring BuildBuddy",description:"BuildBuddy on-prem is configured using a yaml formatted configuration file.",source:"@site/../docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1712081105,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Life of a Self Hosted Executor",permalink:"/docs/architecture-self-hosted-executor"},next:{title:"Samples",permalink:"/docs/config-samples"}},t={},c=[{value:"Command line flag",id:"command-line-flag",level:2},{value:"Docker",id:"docker",level:2},{value:"Option types",id:"option-types",level:2},{value:"Sample configuration files",id:"sample-configuration-files",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Flags",id:"flags",level:2},{value:"Environment variables",id:"environment-variables",level:2}];function a(e){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"/docs/on-prem",children:"BuildBuddy on-prem"})," is configured using a ",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/YAML",children:"yaml"})," formatted configuration file."]}),"\n",(0,o.jsx)(i.h2,{id:"command-line-flag",children:"Command line flag"}),"\n",(0,o.jsxs)(i.p,{children:["On startup, BuildBuddy reads this config file which is specified using the ",(0,o.jsx)(i.code,{children:"--config_file"})," flag. The config file is periodically re-read, although some options like enabling or disabling a cache require a restart to take effect."]}),"\n",(0,o.jsx)(i.h2,{id:"docker",children:"Docker"}),"\n",(0,o.jsxs)(i.p,{children:["If you're running BuildBuddy in a Docker image - you can use Docker's ",(0,o.jsx)(i.a,{href:"https://docs.docker.com/storage/volumes/",children:"-v flag"})," to map a custom local config file to ",(0,o.jsx)(i.code,{children:"/config.yaml"})," in the Docker image."]}),"\n",(0,o.jsxs)(i.p,{children:["Be sure to replace ",(0,o.jsx)(i.code,{children:"PATH_TO_YOUR_LOCAL_CONFIG "})," with the path to your custom config file:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 -v /PATH_TO_YOUR_LOCAL_CONFIG/config.yaml:/config.yaml gcr.io/flame-public/buildbuddy-app-onprem:latest\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,o.jsx)(i.code,{children:"--network=host"})," ",(0,o.jsx)(i.a,{href:"https://docs.docker.com/network/host/",children:"flag"})," to your ",(0,o.jsx)(i.code,{children:"docker run"})," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."]}),"\n",(0,o.jsx)(i.h2,{id:"option-types",children:"Option types"}),"\n",(0,o.jsxs)(i.p,{children:["There are two types of config options: ",(0,o.jsx)(i.em,{children:"Required"}),", and ",(0,o.jsx)(i.em,{children:"Optional"}),"."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Required"})," - BuildBuddy will not run without these."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Optional"})," - They configure optional functionality. BuildBuddy will happily run without them."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"sample-configuration-files",children:"Sample configuration files"}),"\n",(0,o.jsxs)(i.p,{children:["We maintain a list of ",(0,o.jsx)(i.a,{href:"/docs/config-samples",children:"sample configuration files"})," that you can copy and paste to get up and running quickly."]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/docs/config-samples#running-locally-disk-only",children:"Running locally (disk only)"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/docs/config-samples#running-with-mysql-and-in-memory-cache",children:"Running with MySQL and in-memory cache"})}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,o.jsx)(i.p,{children:"Here's a full list of BuildBuddy's configuration sections:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Required"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-app",children:"App"})," - basic app-level configuration options."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-storage",children:"Storage"})," - options that determine where BuildBuddy stores build results."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-database",children:"Database"})," - options that determine where BuildBuddy stores build metadata."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Optional"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-cache",children:"Cache"})," - configuration options for BuildBuddy's built-in Remote Build Cache."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-integrations",children:"Integrations"})," - configure integrations with other services."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-ssl",children:"SSL"})," - configure SSL/TLS certificates and setup."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-github",children:"Github"})," - configure your Github integration."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-misc",children:"Misc"})," - miscellaneous configuration options."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Enterprise only"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-auth",children:"Auth"})," - configure authentication providers."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-api",children:"API"})," - configure BuildBuddy API."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/docs/config-org",children:"Org"})," - configure BuildBuddy Organization."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"flags",children:"Flags"}),"\n",(0,o.jsx)(i.p,{children:"In addition to the config file, some BuildBuddy options (like port number) can only be configured via command line flags."}),"\n",(0,o.jsxs)(i.p,{children:["More information on these flags, see our ",(0,o.jsx)(i.a,{href:"/docs/config-flags",children:"flags documentation"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,o.jsxs)(i.p,{children:["Environment variables in the config file are expanded at runtime.\nYou only need to reference your environment variables like this ",(0,o.jsx)(i.code,{children:"${ENV_VARIABLE}"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>r});var o=n(67294);const s={},l=o.createContext(s);function r(e){const i=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:i},e.children)}}}]);