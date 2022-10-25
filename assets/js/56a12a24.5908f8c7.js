/*! For license information please see 56a12a24.5908f8c7.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4979],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var u,l,a=o(e),c=1;c<arguments.length;c++){for(var p in u=Object(arguments[c]))r.call(u,p)&&(a[p]=u[p]);if(t){l=t(u);for(var s=0;s<l.length;s++)n.call(u,l[s])&&(a[l[s]]=u[l[s]])}}return a}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||k}function w(){}function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||k}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var B=O.prototype=new w;B.constructor=O,n(B,v.prototype),B.isPureReactComponent=!0;var j={current:null},N=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},u=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)N.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var c=Array(a),p=0;p<a;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,_=[];function C(e,t,r,n){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function D(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case u:l=!0}}if(l)return r(n,e,""===t?"."+q(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=t+q(o=e[a],a);l+=D(o,c,r,n)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),a=0;!(o=e.next()).done;)l+=D(o=o.value,c=t+q(o,a++),r,n);else if("object"===o)throw r=""+e,Error(b(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function I(e,t,r){return null==e?0:D(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function K(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(P,"$&/")+"/"),I(e,R,t=C(t,i,n,o)),T(t)}var $={current:null};function F(){var e=$.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5615:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7378),r(4137)),u=["components"],l={id:"enterprise-setup",title:"Enterprise Setup",sidebar_label:"Enterprise On-prem Setup"},a=void 0,c={unversionedId:"enterprise-setup",id:"enterprise-setup",title:"Enterprise Setup",description:"There are three ways to run BuildBuddy Enterprise On-prem:",source:"@site/../docs/enterprise-setup.md",sourceDirName:".",slug:"/enterprise-setup",permalink:"/docs/enterprise-setup",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-setup.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1666733263,formattedLastUpdatedAt:"10/25/2022",frontMatter:{id:"enterprise-setup",title:"Enterprise Setup",sidebar_label:"Enterprise On-prem Setup"},sidebar:"someSidebar",previous:{title:"BuildBuddy Enterprise",permalink:"/docs/enterprise"},next:{title:"Enterprise Configuration",permalink:"/docs/enterprise-config"}},p=[{value:"Helm",id:"helm",children:[],level:2},{value:"Docker Image",id:"docker-image",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[],level:2},{value:"Configuring BuildBuddy",id:"configuring-buildbuddy",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are three ways to run BuildBuddy Enterprise On-prem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#helm"},"Helm"),": deploy BuildBuddy to your Kubernetes cluster with the official BuildBuddy helm charts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#docker-image"},"Docker Image"),": pre-built Docker images running the latest version of BuildBuddy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#kubernetes"},"Kubernetes"),": deploy BuildBuddy to your Kubernetes cluster with a one-line deploy script.")),(0,i.kt)("p",null,"We recommend using Helm as it includes all of the bells and whistles like nginx, remote build executors, etc. If you're not a fan of using Helm for deployment - we recommend using Helm to generate your Kubernetes deployment yaml file with ",(0,i.kt)("inlineCode",{parentName:"p"},"helm template"),", and then running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply")," with that file."),(0,i.kt)("p",null,"For more instructions on deploying RBE, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-rbe"},"enterprise on-prem RBE docs"),"."),(0,i.kt)("h2",{id:"helm"},"Helm"),(0,i.kt)("p",null,"If you run or have access to a Kubernetes cluster and are comfortable with ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."),(0,i.kt)("p",null,"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, and more."),(0,i.kt)("p",null,"The official BuildBuddy charts live in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"buildbuddy-helm repo")," and can be added to helm with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,i.kt)("p",null,"You can the deploy BuildBuddy Enterprise with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install buildbuddy buildbuddy/buildbuddy-enterprise \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n")),(0,i.kt)("p",null,"For more information on configuring your BuildBuddy Helm deploy, check out the chart itself:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise"))),(0,i.kt)("h2",{id:"docker-image"},"Docker Image"),(0,i.kt)("p",null,"We publish a ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image with every release that contains a pre-configured BuildBuddy Enterprise."),(0,i.kt)("p",null,"To run it, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-app-enterprise:latest && docker run -p 1985:1985 -p 8080:8080 gcr.io/flame-public/buildbuddy-app-enterprise:latest\n")),(0,i.kt)("p",null,"If you'd like to pass a custom configuration file to BuildBuddy running in a Docker image - see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/config"},"configuration docs")," on using Docker's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag"),"."),(0,i.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,i.kt)("p",null,"We also publish a docker image containing our RBE executor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-executor-enterprise:latest && docker run -p 1987:1987 gcr.io/flame-public/buildbuddy-executor-enterprise:latest\n")),(0,i.kt)("p",null,"For configuration options, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/config-rbe"},"RBE config documentation"),"."),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("p",null,'If you run or have access to a Kubernetes cluster, and you have the "kubectl" command configured, we provide a shell script that will deploy BuildBuddy to your cluster, namespaced under the "buildbuddy" namespace.'),(0,i.kt)("p",null,"This script uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/deployment/buildbuddy-app.enterprise.yaml"},"this deployment file"),", if you want to see the details of what is being configured."),(0,i.kt)("p",null,"To kick of the Kubernetes deploy, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -enterprise\n")),(0,i.kt)("p",null,"To make this easier, the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script can optionally push a config file to your cluster in a Kubernetes ConfigMap that contains the contents of a custom config file. To do this, just specify the -config flag with an argument that is the path to your custom configuration file. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./k8s_on_prem.sh -enterprise -config foo/bar/buildbuddy.custom.yaml\n")),(0,i.kt)("p",null,"For more details on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/on-prem#kubernetes"},"Kubernetes section")," of the on-prem deployment documentation."),(0,i.kt)("h2",{id:"configuring-buildbuddy"},"Configuring BuildBuddy"),(0,i.kt)("p",null,"For documentation on BuildBuddy enterprise configuration options, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise-config"},"enterprise configuration documentation"),"."))}d.isMDXComponent=!0}}]);