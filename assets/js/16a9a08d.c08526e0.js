/*! For license information please see 16a9a08d.c08526e0.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5035],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(l){return!1}}()?Object.assign:function(e,a){for(var o,i,u=l(e),s=1;s<arguments.length;s++){for(var p in o=Object(arguments[s]))n.call(o,p)&&(u[p]=o[p]);if(t){i=t(o);for(var d=0;d<i.length;d++)r.call(o,i[d])&&(u[i[d]]=o[i[d]])}}return u}},1535:function(e,t,n){var r=n(2525),l="function"==typeof Symbol&&Symbol.for,a=l?Symbol.for("react.element"):60103,o=l?Symbol.for("react.portal"):60106,i=l?Symbol.for("react.fragment"):60107,u=l?Symbol.for("react.strict_mode"):60108,s=l?Symbol.for("react.profiler"):60114,p=l?Symbol.for("react.provider"):60109,d=l?Symbol.for("react.context"):60110,c=l?Symbol.for("react.forward_ref"):60112,m=l?Symbol.for("react.suspense"):60113,f=l?Symbol.for("react.memo"):60115,h=l?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||g}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var N=x.prototype=new w;N.constructor=x,r(N,v.prototype),N.isPureReactComponent=!0;var O={current:null},E=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,l={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&!j.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(1===u)l.children=n;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===l[r]&&(l[r]=u[r]);return{$$typeof:a,type:e,key:o,ref:i,props:l,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,S=[];function C(e,t,n,r){if(S.length){var l=S.pop();return l.result=e,l.keyPrefix=t,l.func=n,l.context=r,l.count=0,l}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function U(e,t,n,r){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return n(r,e,""===t?"."+$(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=t+$(l=e[u],u);i+=U(l,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=y&&e[y]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),u=0;!(l=e.next()).done;)i+=U(l=l.value,s=t+$(l,u++),n,r);else if("object"===l)throw n=""+e,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function B(e,t,n){return null==e?0:U(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,l=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,l+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,l){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),B(e,A,t=C(t,a,r,l)),T(t)}var D={current:null};function M(){var e=D.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9616:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),l=n(3366),a=(n(7378),n(4137)),o=["components"],i={id:"enterprise-helm",title:"Enterprise Helm Charts",sidebar_label:"Enterprise Helm Charts"},u=void 0,s={unversionedId:"enterprise-helm",id:"enterprise-helm",title:"Enterprise Helm Charts",description:"If you run or have access to a Kubernetes cluster and are comfortable with Helm, we maintain official BuildBuddy Helm charts that are easy to configure and deploy.",source:"@site/../docs/enterprise-helm.md",sourceDirName:".",slug:"/enterprise-helm",permalink:"/docs/enterprise-helm",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-helm.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1666990621,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"enterprise-helm",title:"Enterprise Helm Charts",sidebar_label:"Enterprise Helm Charts"},sidebar:"someSidebar",previous:{title:"Enterprise Configuration",permalink:"/docs/enterprise-config"},next:{title:"Enterprise RBE Setup",permalink:"/docs/enterprise-rbe"}},p=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installing the repo",id:"installing-the-repo",children:[],level:2},{value:"Installing the Chart",id:"installing-the-chart",children:[],level:2},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",children:[],level:2},{value:"Updating your release",id:"updating-your-release",children:[],level:2},{value:"Writing deployment to a file",id:"writing-deployment-to-a-file",children:[{value:"Example configurations",id:"example-configurations",children:[],level:3},{value:"Example MySQL configuration",id:"example-mysql-configuration",children:[],level:3},{value:"Example external database configuration",id:"example-external-database-configuration",children:[],level:3},{value:"Example ingress and certs configuration",id:"example-ingress-and-certs-configuration",children:[],level:3}],level:2},{value:"Example with auth (required for enterprise features)",id:"example-with-auth-required-for-enterprise-features",children:[],level:2},{value:"Example with remote build execution",id:"example-with-remote-build-execution",children:[],level:2},{value:"More examples",id:"more-examples",children:[{value:"Local development",id:"local-development",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you run or have access to a Kubernetes cluster and are comfortable with ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."),(0,a.kt)("p",null,"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, remote build execution and more."),(0,a.kt)("p",null,"The official BuildBuddy charts live in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"buildbuddy-helm repo"),"."),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\nhelm install buildbuddy buildbuddy/buildbuddy-enterprise \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes 1.15+ with Beta APIs enabled"),(0,a.kt)("li",{parentName:"ul"},"Helm v2/v3"),(0,a.kt)("li",{parentName:"ul"},"Tiller (the Helm v2 server-side component) installed on the cluster")),(0,a.kt)("h2",{id:"installing-the-repo"},"Installing the repo"),(0,a.kt)("p",null,"To install the BuildBuddy Helm repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,a.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,a.kt)("p",null,"To install the chart with the release name ",(0,a.kt)("inlineCode",{parentName:"p"},"my-release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install my-release buildbuddy/buildbuddy-enterprise\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helm v2 command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install --name my-release buildbuddy/buildbuddy-enterprise\n")),(0,a.kt)("p",null,"The command deploys BuildBuddy on the Kubernetes cluster in the default configuration. The ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"configuration"),"\nsection lists the parameters that can be configured during installation."),(0,a.kt)("h2",{id:"uninstalling-the-chart"},"Uninstalling the Chart"),(0,a.kt)("p",null,"To uninstall/delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"my-release")," deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm delete my-release\n")),(0,a.kt)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the release."),(0,a.kt)("h2",{id:"updating-your-release"},"Updating your release"),(0,a.kt)("p",null,"If you change configuration, you can update your deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm upgrade my-release -f my-values.yaml buildbuddy/buildbuddy-enterprise\n")),(0,a.kt)("h2",{id:"writing-deployment-to-a-file"},"Writing deployment to a file"),(0,a.kt)("p",null,"You can write your Kubernetes deployment configuration to a file with release name ",(0,a.kt)("inlineCode",{parentName:"p"},"my-release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm template my-release buildbuddy/buildbuddy-enterprise > buildbuddy-deploy.yaml\n")),(0,a.kt)("p",null,"You can then check this configuration in to your source repository, or manually apply it to your cluster with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f buildbuddy-deploy.yaml\n")),(0,a.kt)("h3",{id:"example-configurations"},"Example configurations"),(0,a.kt)("p",null,"Below are some examples of ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," files with values that could be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),"\ncommand with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--values")," flag to get started."),(0,a.kt)("h3",{id:"example-mysql-configuration"},"Example MySQL configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n')),(0,a.kt)("h3",{id:"example-external-database-configuration"},"Example external database configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql:\n  enabled: false\n\nconfig:\n  database:\n    ## mysql:     "mysql://<USERNAME>:<PASSWORD>@tcp(<HOST>:3306)/<DATABASE_NAME>"\n    ## sqlite:    "sqlite3:///tmp/buildbuddy-enterprise.db"\n    data_source: "" # Either set this or mysql.enabled, not both!\n')),(0,a.kt)("h3",{id:"example-ingress-and-certs-configuration"},"Example ingress and certs configuration"),(0,a.kt)("p",null,"Note: make sure to run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.16.1/cert-manager.crds.yaml")," to install CRDs before deploying this configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ingress:\n  enabled: true\n  sslEnabled: true\n  httpHost: buildbuddy.example.com\n  grpcHost: buildbuddy-grpc.example.com\n\nmysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n\ncertmanager:\n  enabled: true\n  emailAddress: your-email@gmail.com\n\nconfig:\n  app:\n    build_buddy_url: "https://buildbuddy.example.com"\n    events_api_url: "grpcs://buildbuddy-grpc.example.com"\n    cache_api_url: "grpcs://buildbuddy-grpc.example.com"\n  ssl:\n    enable_ssl: true\n')),(0,a.kt)("h2",{id:"example-with-auth-required-for-enterprise-features"},"Example with auth (required for enterprise features)"),(0,a.kt)("p",null,"Auth can be configured with any provider that supports OpenID Connect (OIDC) including Google GSuite, Okta, Auth0 and others."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ingress:\n  enabled: true\n  sslEnabled: true\n  httpHost: buildbuddy.example.com\n  grpcHost: buildbuddy-grpc.example.com\n\nmysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n\ncertmanager:\n  enabled: true\n  emailAddress: your-email@gmail.com\n\nconfig:\n  app:\n    build_buddy_url: "https://buildbuddy.example.com"\n    events_api_url: "grpcs://buildbuddy-grpc.example.com"\n    cache_api_url: "grpcs://buildbuddy-grpc.example.com"\n  auth:\n    ## To use Google auth, get client_id and client_secret here:\n    ## https://console.developers.google.com/apis/credentials\n    oauth_providers:\n      - issuer_url: "https://accounts.google.com" # OpenID Connect Discovery URL\n        client_id: "MY_CLIENT_ID"\n        client_secret: "MY_CLIENT_SECRET"\n  ssl:\n    enable_ssl: true\n')),(0,a.kt)("h2",{id:"example-with-remote-build-execution"},"Example with remote build execution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"executor:\n  enabled: true\n  replicas: 3\nredis:\n  enabled: true\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n")),(0,a.kt)("h2",{id:"more-examples"},"More examples"),(0,a.kt)("p",null,"For more example ",(0,a.kt)("inlineCode",{parentName:"p"},"config:")," blocks, see our ",(0,a.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/config#configuration-options"},"configuration docs"),"."),(0,a.kt)("h3",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"For local testing use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube"},"minikube")),(0,a.kt)("p",null,"Create local cluster using with specified Kubernetes version (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"1.15.6"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ minikube start --kubernetes-version v1.15.6\n")),(0,a.kt)("p",null,"Initialize helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm init\n")),(0,a.kt)("p",null,"Above command is not required for Helm v3"),(0,a.kt)("p",null,"Get dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm dependency update\n")),(0,a.kt)("p",null,"Perform local installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install . \\\n    --set image.tag=5.12.4 \\\n    --set mysql.mysqlUser=sampleUser \\\n    --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helm v3 command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install . \\\n    --generate-name \\\n    --set image.tag=5.12.4 \\\n    --set mysql.mysqlUser=sampleUser \\\n    --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"For more information on configuring your BuildBuddy Enterprise Helm deploy, check out the chart:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise"))),(0,a.kt)("p",null,"For more information on configuring BuildBuddy, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"Configuration docs"),". If you have questions please don\u2019t hesitate to email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:setup@buildbuddy.io"},"setup@buildbuddy.io")," or ping us on our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"Slack channel"),"."))}c.isMDXComponent=!0}}]);