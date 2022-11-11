/*! For license information please see f4b3a261.9484669b.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4870],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var u,l,a=o(e),s=1;s<arguments.length;s++){for(var c in u=Object(arguments[s]))r.call(u,c)&&(a[c]=u[c]);if(t){l=t(u);for(var d=0;d<l.length;d++)n.call(u,l[d])&&(a[l[d]]=u[l[d]])}}return a}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||g}function w(){}function O(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var j=O.prototype=new w;j.constructor=O,n(j,v.prototype),j.isPureReactComponent=!0;var B={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},u=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:B.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var N=/\/+/g,C=[];function R(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case u:l=!0}}if(l)return r(n,e,""===t?"."+q(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=t+q(o=e[a],a);l+=T(o,s,r,n)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=b&&e[b]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),a=0;!(o=e.next()).done;)l+=T(o=o.value,s=t+q(o,a++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function M(e,t,r){return null==e?0:T(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?G(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+r)),n.push(e))}function G(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(N,"$&/")+"/"),M(e,U,t=R(t,i,n,o)),_(t)}var $={current:null};function F(){var e=$.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,u(u({ref:t},c),{},{components:r})):n.createElement(y,u({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7378),r(4137)),u=["components"],l={id:"enterprise-rbe",title:"Enterprise RBE Setup",sidebar_label:"Enterprise RBE Setup"},a=void 0,s={unversionedId:"enterprise-rbe",id:"enterprise-rbe",title:"Enterprise RBE Setup",description:"To deploy BuildBuddy Remote Build Execution on-prem, we recommend using the BuildBuddy Enterprise Helm charts.",source:"@site/../docs/enterprise-rbe.md",sourceDirName:".",slug:"/enterprise-rbe",permalink:"/docs/enterprise-rbe",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-rbe.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1668204222,formattedLastUpdatedAt:"11/11/2022",frontMatter:{id:"enterprise-rbe",title:"Enterprise RBE Setup",sidebar_label:"Enterprise RBE Setup"},sidebar:"someSidebar",previous:{title:"Enterprise Helm Charts",permalink:"/docs/enterprise-helm"},next:{title:"Enterprise Mac RBE Setup",permalink:"/docs/enterprise-mac-rbe"}},c=[{value:"Installing the chart",id:"installing-the-chart",children:[],level:2},{value:"Configuring your install",id:"configuring-your-install",children:[],level:2},{value:"Configuring resources",id:"configuring-resources",children:[],level:2},{value:"More configuration",id:"more-configuration",children:[],level:2},{value:"Writing deployment to a file",id:"writing-deployment-to-a-file",children:[],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To deploy BuildBuddy Remote Build Execution on-prem, we recommend using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise Helm charts"),"."),(0,i.kt)("h2",{id:"installing-the-chart"},"Installing the chart"),(0,i.kt)("p",null,"First add the BuildBuddy Helm repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,i.kt)("p",null,"Then you'll need to make sure kubectl is configured with access to your Kubernetes cluster. Here are instructions for ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"},"Google Cloud"),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"},"AWS"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough#connect-to-the-cluster"},"Azure"),"."),(0,i.kt)("p",null,"Finally install BuildBuddy enterprise to your Kubernetes cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install buildbuddy buildbuddy/buildbuddy-enterprise\n")),(0,i.kt)("p",null,"This will deploy a minimal BuildBuddy enterprise install to your Kubernetes cluster."),(0,i.kt)("p",null,"You can verify your install by waiting a minute or two for your deployment to complete, then running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo `kubectl get --namespace default service buildbuddy-enterprise -o jsonpath='{.status.loadBalancer.ingress[0].*}'`\n")),(0,i.kt)("p",null,"This will return an IP address that you can visit in a browser and verify that you install was successful. The basic deployment doesn't configure RBE, so you'll only see options for BES and Cache endpoints."),(0,i.kt)("h2",{id:"configuring-your-install"},"Configuring your install"),(0,i.kt)("p",null,"Now that you have a basic BuildBuddy Enterprise install deployed. Let's configure it to enable Remote Build Execution."),(0,i.kt)("p",null,"You can do so this by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to Helm that enables RBE. Here's a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file with RBE enabled. This will deploy RBE with 3 executors and Redis enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"executor:\n  enabled: true\n  replicas: 3\nredis:\n  enabled: true\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n")),(0,i.kt)("p",null,"This configuration with 1 app instance, 3 executors, and a Redis instance will fit on a machine/cluster with at least 5 vCPUs and 24 GB of RAM."),(0,i.kt)("p",null,"GCP's ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/machine-types#n2_standard_machine_types"},"n2-standard-8 machines")," or similar are a good place to start. For information on scaling up and down your deployments, see the ",(0,i.kt)("strong",{parentName:"p"},"Configuring resource")," section."),(0,i.kt)("p",null,"You can now upgrade your install with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm upgrade buildbuddy buildbuddy/buildbuddy-enterprise --values values.yaml\n")),(0,i.kt)("p",null,"Once your upgrade has completed (and the rollout has finished), you can reload the IP address you obtained from the kubectl command above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo `kubectl get --namespace default service buildbuddy-enterprise -o jsonpath='{.status.loadBalancer.ingress[0].*}'`\n")),(0,i.kt)("p",null,"You should now see a remote build execution checkbox and can try your first remote build execution. Make sure your RBE ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"toolchains and platforms")," are correctly configured."),(0,i.kt)("h2",{id:"configuring-resources"},"Configuring resources"),(0,i.kt)("p",null,"Now that you've got a working RBE deployment, you can configure resources requested by BuildBuddy app instances and executors to scale up and down your cluster."),(0,i.kt)("p",null,"By default BuildBuddy app instances request 1 CPU and 4 GB of RAM, executors request 1 CPU and 5 GB of RAM per instance, and Redis requests 1 CPU and 5GB of RAM."),(0,i.kt)("p",null,"Here's a values.yaml file that specifies the replica and resource settings you can use to scale your cluster up and down:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'replicas: 1\nresources:\n  limits:\n    cpu: "2"\n    memory: "8Gi"\n  requests:\n    cpu: "1"\n    memory: "4Gi"\nexecutor:\n  enabled: true\n  replicas: 3\n  resources:\n    limits:\n      cpu: "2"\n      memory: "10Gi"\n    requests:\n      cpu: "1"\n      memory: "5Gi"\nredis:\n  enabled: true\n  resources:\n    limits:\n      cpu: "1"\n      memory: "6Gi"\n    requests:\n      cpu: "1"\n      memory: "5Gi"\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n')),(0,i.kt)("p",null,"Note: if you scale beyond one app replica, make sure you're using MySQL instead of SQLite, and GCS/S3 instead of disk storage. For information on how to configure these, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-config"},"enterprise configuration guide"),". Scaling the number of executor replicas does not have these requirements."),(0,i.kt)("p",null,"The default values support both memory hungry Java tests and CPU-intensive Tensorflow builds. Fine tuning these parameters for peak performance depends a lot on your workload, and we're happy to help."),(0,i.kt)("p",null,"For a full overview of what can be configured via our enterprise Helm charts, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-enterprise/values.yaml"},"buildbuddy-enterprise values.yaml file"),", and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-executor/values.yaml"},"buildbuddy-executor values.yaml file"),". Values for the executor deployment are nested in the ",(0,i.kt)("inlineCode",{parentName:"p"},"executor:")," block of the buildbuddy-enterprise yaml file."),(0,i.kt)("h2",{id:"more-configuration"},"More configuration"),(0,i.kt)("p",null,"For more configuration options beyond RBE, like authentication and storage options, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/config"},"configuration docs")," and our ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-config"},"enterprise configuration guide"),"."),(0,i.kt)("h2",{id:"writing-deployment-to-a-file"},"Writing deployment to a file"),(0,i.kt)("p",null,"If you don't want to use Helm, you can write your Kubernetes deployment configuration to a file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ helm template buildbuddy buildbuddy/buildbuddy-enterprise > buildbuddy-deploy.yaml\n")),(0,i.kt)("p",null,"You can then check this configuration in to your source repository, or manually apply it to your cluster with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl apply -f buildbuddy-deploy.yaml\n")))}p.isMDXComponent=!0}}]);