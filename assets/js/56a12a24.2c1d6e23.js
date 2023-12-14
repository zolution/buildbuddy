"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4979],{16775:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var i=r(85893),t=r(11151);const d={id:"enterprise-setup",title:"Enterprise Setup",sidebar_label:"Enterprise On-prem Setup"},s=void 0,o={id:"enterprise-setup",title:"Enterprise Setup",description:"There are three ways to run BuildBuddy Enterprise On-prem:",source:"@site/../docs/enterprise-setup.md",sourceDirName:".",slug:"/enterprise-setup",permalink:"/docs/enterprise-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-setup.md",tags:[],version:"current",lastUpdatedBy:"Tyler Williams",lastUpdatedAt:1702528248,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{id:"enterprise-setup",title:"Enterprise Setup",sidebar_label:"Enterprise On-prem Setup"},sidebar:"someSidebar",previous:{title:"BuildBuddy Enterprise",permalink:"/docs/enterprise"},next:{title:"Enterprise Configuration",permalink:"/docs/enterprise-config"}},l={},u=[{value:"Helm",id:"helm",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Configuring BuildBuddy",id:"configuring-buildbuddy",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are three ways to run BuildBuddy Enterprise On-prem:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#helm",children:"Helm"}),": deploy BuildBuddy to your Kubernetes cluster with the official BuildBuddy helm charts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#docker-image",children:"Docker Image"}),": pre-built Docker images running the latest version of BuildBuddy."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#kubernetes",children:"Kubernetes"}),": deploy BuildBuddy to your Kubernetes cluster with a one-line deploy script."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We recommend using Helm as it includes all of the bells and whistles like nginx, remote build executors, etc. If you're not a fan of using Helm for deployment - we recommend using Helm to generate your Kubernetes deployment yaml file with ",(0,i.jsx)(n.code,{children:"helm template"}),", and then running ",(0,i.jsx)(n.code,{children:"kubectl apply"})," with that file."]}),"\n",(0,i.jsxs)(n.p,{children:["For more instructions on deploying RBE, see our ",(0,i.jsx)(n.a,{href:"/docs/enterprise-rbe",children:"enterprise on-prem RBE docs"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"helm",children:"Helm"}),"\n",(0,i.jsxs)(n.p,{children:["If you run or have access to a Kubernetes cluster and are comfortable with ",(0,i.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."]}),"\n",(0,i.jsx)(n.p,{children:"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, and more."}),"\n",(0,i.jsxs)(n.p,{children:["The official BuildBuddy charts live in our ",(0,i.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"buildbuddy-helm repo"})," and can be added to helm with the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"helm repo add buildbuddy https://helm.buildbuddy.io\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can the deploy BuildBuddy Enterprise with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"helm install buildbuddy buildbuddy/buildbuddy-enterprise \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n"})}),"\n",(0,i.jsx)(n.p,{children:"For more information on configuring your BuildBuddy Helm deploy, check out the chart itself:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise",children:"BuildBuddy Enterprise"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"docker-image",children:"Docker Image"}),"\n",(0,i.jsxs)(n.p,{children:["We publish a ",(0,i.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," image with every release that contains a pre-configured BuildBuddy Enterprise."]}),"\n",(0,i.jsx)(n.p,{children:"To run it, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker pull gcr.io/flame-public/buildbuddy-app-enterprise:latest && docker run -p 1985:1985 -p 8080:8080 gcr.io/flame-public/buildbuddy-app-enterprise:latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to pass a custom configuration file to BuildBuddy running in a Docker image - see the ",(0,i.jsx)(n.a,{href:"/docs/config",children:"configuration docs"})," on using Docker's ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/storage/volumes/",children:"-v flag"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,i.jsx)(n.code,{children:"--network=host"})," ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/network/host/",children:"flag"})," to your ",(0,i.jsx)(n.code,{children:"docker run"})," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."]}),"\n",(0,i.jsx)(n.p,{children:"We also publish a docker image containing our RBE executor:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker pull gcr.io/flame-public/buildbuddy-executor-enterprise:latest && docker run -p 1987:1987 gcr.io/flame-public/buildbuddy-executor-enterprise:latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For configuration options, see ",(0,i.jsx)(n.a,{href:"/docs/config-rbe",children:"RBE config documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,i.jsx)(n.p,{children:'If you run or have access to a Kubernetes cluster, and you have the "kubectl" command configured, we provide a shell script that will deploy BuildBuddy to your cluster, namespaced under the "buildbuddy" namespace.'}),"\n",(0,i.jsxs)(n.p,{children:["This script uses ",(0,i.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/deployment/buildbuddy-app.enterprise.yaml",children:"this deployment file"}),", if you want to see the details of what is being configured."]}),"\n",(0,i.jsx)(n.p,{children:"To kick of the Kubernetes deploy, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"bash k8s_on_prem.sh -enterprise\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To make this easier, the ",(0,i.jsx)(n.code,{children:"k8s_on_prem.sh"})," script can optionally push a config file to your cluster in a Kubernetes ConfigMap that contains the contents of a custom config file. To do this, just specify the -config flag with an argument that is the path to your custom configuration file. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./k8s_on_prem.sh -enterprise -config foo/bar/buildbuddy.custom.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more details on using the ",(0,i.jsx)(n.code,{children:"k8s_on_prem.sh"})," script, see the ",(0,i.jsx)(n.a,{href:"/docs/on-prem#kubernetes",children:"Kubernetes section"})," of the on-prem deployment documentation."]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-buildbuddy",children:"Configuring BuildBuddy"}),"\n",(0,i.jsxs)(n.p,{children:["For documentation on BuildBuddy enterprise configuration options, check out our ",(0,i.jsx)(n.a,{href:"/docs/enterprise-config",children:"enterprise configuration documentation"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var i=r(67294);const t={},d=i.createContext(t);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);