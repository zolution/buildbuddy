/*! For license information please see efb01d48.80ee7186.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3366],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var c,a,l=o(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))n.call(c,s)&&(l[s]=c[s]);if(t){a=t(c);for(var d=0;d<a.length;d++)r.call(c,a[d])&&(l[a[d]]=c[a[d]])}}return l}},1535:function(e,t,n){var r=n(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||_}function k(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||_}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=v.prototype;var O=w.prototype=new k;O.constructor=w,r(O,v.prototype),O.isPureReactComponent=!0;var j={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:c,ref:a,props:o,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,C=[];function R(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case c:a=!0}}if(a)return n(r,e,""===t?"."+U(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+U(o=e[l],l);a+=A(o,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=m&&e[m]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)a+=A(o=o.value,u=t+U(o,l++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function T(e,t,n){return null==e?0:A(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function N(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(M,"$&/")+"/"),T(e,D,t=R(t,i,r,o)),q(t)}var B={current:null};function z(){var e=B.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5787:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7378),n(4137)),c=["components"],a={id:"config-samples",title:"Sample Configuration Files",sidebar_label:"Samples"},l=void 0,u={unversionedId:"config-samples",id:"config-samples",title:"Sample Configuration Files",description:"Running locally (disk only)",source:"@site/../docs/config-samples.md",sourceDirName:".",slug:"/config-samples",permalink:"/docs/config-samples",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-samples.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1666990621,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"config-samples",title:"Sample Configuration Files",sidebar_label:"Samples"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/config"},next:{title:"App",permalink:"/docs/config-app"}},s=[{value:"Running locally (disk only)",id:"running-locally-disk-only",children:[],level:3},{value:"Running with MySQL and in-memory cache",id:"running-with-mysql-and-in-memory-cache",children:[],level:3},{value:"Enterprise",id:"enterprise",children:[{value:"Running with your own auth provider",id:"running-with-your-own-auth-provider",children:[],level:3},{value:"Fully loaded",id:"fully-loaded",children:[],level:3}],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"running-locally-disk-only"},"Running locally (disk only)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://localhost:8080"\ndatabase:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\nstorage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /tmp/buildbuddy\ncache:\n  max_size_bytes: 10000000000  # 10 GB\n  disk:\n    root_directory: /tmp/buildbuddy-cache\n')),(0,i.kt)("h3",{id:"running-with-mysql-and-in-memory-cache"},"Running with MySQL and in-memory cache"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://acme.corp"\ndatabase:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\nstorage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /data/buildbuddy\ncache:\n  max_size_bytes: 10000000000  # 10 GB\n  in_memory: true\n')),(0,i.kt)("h2",{id:"enterprise"},"Enterprise"),(0,i.kt)("h3",{id:"running-with-your-own-auth-provider"},"Running with your own auth provider"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://acme.corp"\ndatabase:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\nstorage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /data/buildbuddy\ncache:\n  max_size_bytes: 10000000000  # 10 GB\n  in_memory: true\nauth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "12345678911-f1r0phjnhbabcdefm32etnia21keeg31.apps.googleusercontent.com"\n      client_secret: "sEcRetKeYgOeShErE"\n')),(0,i.kt)("h3",{id:"fully-loaded"},"Fully loaded"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain"\n  events_api_url: "grpcs://events.buildbuddy.mydomain:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\nstorage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n    redis_target: "12.34.56.79:6379"\n    gcs:\n      bucket: "buildbuddy_cache"\n      project_id: "your_gcs_project_id"\n      credentials_file: "/path/to/your/credential/file.json"\n      ttl_days: 30\nauth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc7sx0kUW123x6"\n      client_secret: "P8fRAYxWMmGhdA9040GV2_q9MZ6esTJif1n4BubxU"\nssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\nremote_execution:\n  enable_remote_exec: true\n')))}p.isMDXComponent=!0}}]);