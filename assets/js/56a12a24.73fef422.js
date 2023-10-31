"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4979],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),d=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(r),m=o,f=s["".concat(a,".").concat(m)]||s[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[s]="string"==typeof e?e:o,l[1]=u;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87726:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return s}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),l=["components"],u={id:"enterprise-setup",title:"Enterprise Setup",sidebar_label:"Enterprise On-prem Setup"},a=void 0,d={unversionedId:"enterprise-setup",id:"enterprise-setup",title:"Enterprise Setup",description:"There are three ways to run BuildBuddy Enterprise On-prem:",source:"@site/../docs/enterprise-setup.md",sourceDirName:".",slug:"/enterprise-setup",permalink:"/docs/enterprise-setup",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-setup.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1698774854,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{id:"enterprise-setup",title:"Enterprise Setup",sidebar_label:"Enterprise On-prem Setup"},sidebar:"someSidebar",previous:{title:"BuildBuddy Enterprise",permalink:"/docs/enterprise"},next:{title:"Enterprise Configuration",permalink:"/docs/enterprise-config"}},p={},s=[{value:"Helm",id:"helm",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Configuring BuildBuddy",id:"configuring-buildbuddy",level:2}],c={toc:s},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are three ways to run BuildBuddy Enterprise On-prem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#helm"},"Helm"),": deploy BuildBuddy to your Kubernetes cluster with the official BuildBuddy helm charts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#docker-image"},"Docker Image"),": pre-built Docker images running the latest version of BuildBuddy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#kubernetes"},"Kubernetes"),": deploy BuildBuddy to your Kubernetes cluster with a one-line deploy script.")),(0,i.kt)("p",null,"We recommend using Helm as it includes all of the bells and whistles like nginx, remote build executors, etc. If you're not a fan of using Helm for deployment - we recommend using Helm to generate your Kubernetes deployment yaml file with ",(0,i.kt)("inlineCode",{parentName:"p"},"helm template"),", and then running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply")," with that file."),(0,i.kt)("p",null,"For more instructions on deploying RBE, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-rbe"},"enterprise on-prem RBE docs"),"."),(0,i.kt)("h2",{id:"helm"},"Helm"),(0,i.kt)("p",null,"If you run or have access to a Kubernetes cluster and are comfortable with ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."),(0,i.kt)("p",null,"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, and more."),(0,i.kt)("p",null,"The official BuildBuddy charts live in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"buildbuddy-helm repo")," and can be added to helm with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,i.kt)("p",null,"You can the deploy BuildBuddy Enterprise with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install buildbuddy buildbuddy/buildbuddy-enterprise \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n")),(0,i.kt)("p",null,"For more information on configuring your BuildBuddy Helm deploy, check out the chart itself:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise"))),(0,i.kt)("h2",{id:"docker-image"},"Docker Image"),(0,i.kt)("p",null,"We publish a ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image with every release that contains a pre-configured BuildBuddy Enterprise."),(0,i.kt)("p",null,"To run it, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-app-enterprise:latest && docker run -p 1985:1985 -p 8080:8080 gcr.io/flame-public/buildbuddy-app-enterprise:latest\n")),(0,i.kt)("p",null,"If you'd like to pass a custom configuration file to BuildBuddy running in a Docker image - see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/config"},"configuration docs")," on using Docker's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag"),"."),(0,i.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,i.kt)("p",null,"We also publish a docker image containing our RBE executor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-executor-enterprise:latest && docker run -p 1987:1987 gcr.io/flame-public/buildbuddy-executor-enterprise:latest\n")),(0,i.kt)("p",null,"For configuration options, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/config-rbe"},"RBE config documentation"),"."),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("p",null,'If you run or have access to a Kubernetes cluster, and you have the "kubectl" command configured, we provide a shell script that will deploy BuildBuddy to your cluster, namespaced under the "buildbuddy" namespace.'),(0,i.kt)("p",null,"This script uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/deployment/buildbuddy-app.enterprise.yaml"},"this deployment file"),", if you want to see the details of what is being configured."),(0,i.kt)("p",null,"To kick of the Kubernetes deploy, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -enterprise\n")),(0,i.kt)("p",null,"To make this easier, the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script can optionally push a config file to your cluster in a Kubernetes ConfigMap that contains the contents of a custom config file. To do this, just specify the -config flag with an argument that is the path to your custom configuration file. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./k8s_on_prem.sh -enterprise -config foo/bar/buildbuddy.custom.yaml\n")),(0,i.kt)("p",null,"For more details on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/on-prem#kubernetes"},"Kubernetes section")," of the on-prem deployment documentation."),(0,i.kt)("h2",{id:"configuring-buildbuddy"},"Configuring BuildBuddy"),(0,i.kt)("p",null,"For documentation on BuildBuddy enterprise configuration options, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-config"},"enterprise configuration documentation"),"."))}f.isMDXComponent=!0}}]);