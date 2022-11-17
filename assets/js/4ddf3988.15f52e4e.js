/*! For license information please see 4ddf3988.15f52e4e.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9404],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(u[c]=i[c]);if(t){l=t(i);for(var d=0;d<l.length;d++)r.call(i,l[d])&&(u[l[d]]=i[l[d]])}}return u}},1535:function(e,t,n){var r=n(2525),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||g}function _(){}function w(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=v.prototype;var S=w.prototype=new _;S.constructor=w,r(S,v.prototype),S.isPureReactComponent=!0;var j={current:null},O=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!B.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,P=[];function N(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function R(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return n(r,e,""===t?"."+I(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=t+I(o=e[u],u);l+=R(o,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=h&&e[h]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),u=0;!(o=e.next()).done;)l+=R(o=o.value,s=t+I(o,u++),n,r);else if("object"===o)throw n=""+e,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function A(e,t,n){return null==e?0:R(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),A(e,q,t=N(t,a,r,o)),T(t)}var U={current:null};function G(){var e=U.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7378),n(4137)),i=["components"],l={id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",sidebar_label:"Enterprise Configuration"},u=void 0,s={unversionedId:"enterprise-config",id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",description:"BuildBuddy Enterprise allows configuration of many features that are not available in the open-core version. Below you\u2019ll find examples for configuring some of these features. If you don\u2019t see what you\u2019re looking for below, please don\u2019t hesitate to ask us! For a full overview of what can be configured, see our Configuration docs.",source:"@site/../docs/enterprise-config.md",sourceDirName:".",slug:"/enterprise-config",permalink:"/docs/enterprise-config",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-config.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1668658888,formattedLastUpdatedAt:"11/17/2022",frontMatter:{id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",sidebar_label:"Enterprise Configuration"},sidebar:"someSidebar",previous:{title:"Enterprise On-prem Setup",permalink:"/docs/enterprise-setup"},next:{title:"Enterprise Helm Charts",permalink:"/docs/enterprise-helm"}},c=[{value:"MySQL Data Storage",id:"mysql-data-storage",children:[],level:3},{value:"Default Redis Target",id:"default-redis-target",children:[],level:3},{value:"GCS Based Cache / Object Storage / Redis",id:"gcs-based-cache--object-storage--redis",children:[],level:3},{value:"Authentication Provider Integration",id:"authentication-provider-integration",children:[],level:3},{value:"Certificate Based Authentication",id:"certificate-based-authentication",children:[],level:3},{value:"Remote Build Execution",id:"remote-build-execution",children:[],level:3},{value:"Putting It All Together",id:"putting-it-all-together",children:[],level:3},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BuildBuddy Enterprise allows configuration of many features that are not available in the open-core version. Below you\u2019ll find examples for configuring some of these features. If you don\u2019t see what you\u2019re looking for below, please don\u2019t hesitate to ask us! For a full overview of what can be configured, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"Configuration docs"),"."),(0,a.kt)("h3",{id:"mysql-data-storage"},"MySQL Data Storage"),(0,a.kt)("p",null,"BuildBuddy uses a SQL connection string to specify the database it will connect to. An example string is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"mysql://user:pass@tcp(12.34.56.78)/database_name"\n')),(0,a.kt)("p",null,"To connect BuildBuddy to your own MySQL server:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new database on your MySQL server"),(0,a.kt)("li",{parentName:"ol"},"Create a new user with full access to that database"),(0,a.kt)("li",{parentName:"ol"},"Put the username, password, IP address of your MySQL server, and database name into the BuildBuddy data_source connection string:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain.com"\n  events_api_url: "grpcs://events.buildbuddy.mydomain.com:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain.com:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\n')),(0,a.kt)("p",null,"If using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise Helm charts"),", MySQL can be configured for you using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql.enabled"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql.username"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql.password")," values."),(0,a.kt)("h3",{id:"default-redis-target"},"Default Redis Target"),(0,a.kt)("p",null,"For a BuildBuddy deployment running multiple apps, it is necessary to provide a default redis target for some features to work correctly. Metrics collection, usage tracking, and responsive build logs all depend on this."),(0,a.kt)("p",null,"If no default redis target is configured, we will fall back to using the cache redis target, if available, and then the remote execution target, if available. The default redis target also acts as the primary fallback if the remote execution redis target is left unspecified. The default redis target does NOT act as a fallback for the cache redis target."),(0,a.kt)("p",null,"The configuration below demostrates a default redis target:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'app:\n  default_redis_target: "my-redis.local:6379"\n')),(0,a.kt)("h3",{id:"gcs-based-cache--object-storage--redis"},"GCS Based Cache / Object Storage / Redis"),(0,a.kt)("p",null,"By default, BuildBuddy will cache objects and store uploaded build events on the local disk. If you want to store them in a shared durable location, like a Google Cloud Storage bucket, you can do that by configuring a GCS cache or storage backend."),(0,a.kt)("p",null,"If your BuildBuddy instance is running on a machine with Google Default Credentials, no credentials file will be necessary. If not, you should ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"create a service account")," with permissions to write to cloud storage, and download the credentials .json file."),(0,a.kt)("p",null,"We also recommend providing a Redis instance for improved remote build execution & small file performance. This can be configured automatically using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise Helm charts")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"redis.enabled")," value."),(0,a.kt)("p",null,"The configuration below configures Redis & GCS storage bucket to act as a storage backend and cache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'storage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n  redis_target: "my-redis.local:6379"\n  gcs:\n    bucket: "buildbuddy_cache"\n    project_id: "your_gcs_project_id"\n    credentials_file: "/path/to/your/credential/file.json"\n    ttl_days: 30\n')),(0,a.kt)("p",null,"If using Amazon S3, you can configure your storage and cache similarly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'storage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  aws_s3:\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    credentials_profile: "other-profile"\ncache:\n  redis_target: "my-redis.local:6379"\n  s3:\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    credentials_profile: "other-profile"\n    ttl_days: 30\n')),(0,a.kt)("h3",{id:"authentication-provider-integration"},"Authentication Provider Integration"),(0,a.kt)("p",null,"BuildBuddy supports OpenID Connect (OIDC) as a way of interacting with an Auth Provider like Google, Okta, or similar to authenticate your users when they log in. Configuring this is easy, below is an example of using BuildBuddy with Okta. Configuring your Auth Provider to support OIDC is outside the scope of this doc, but we\u2019ve done it for Google, Okta, and others, and are happy to lend a helping hand if you\u2019re stuck."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc0asdkUW123x6"\n      client_secret: "P8fRAYxWMmG9asd040GV2_q9MZ6esTJif1n4BubxU"\n')),(0,a.kt)("p",null,"Here\u2019s another example of Google login using credentials obtained from: ",(0,a.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com"\n      Client_secret: "YOUR_CLIENT_SECRET"\n')),(0,a.kt)("h3",{id:"certificate-based-authentication"},"Certificate Based Authentication"),(0,a.kt)("p",null,"Your users can authenticate to BuildBuddy using an API key or they can use Certificate based authentication over mTLS. To configure mTLS, you must generate a new server certificate authority and key. You can do this using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl")," command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Change these CN\'s to match your BuildBuddy host name\nSERVER_SUBJECT=buildbuddy.io\nPASS=$(openssl rand -base64 32) # <- Save this :)\n\n# Generates ca.key\nopenssl genrsa -passout pass:${PASS} -des3 -out ca.key 4096\n\n# Generates ca.crt\nopenssl req -passin pass:${PASS} -new -x509 -days 365000 -key ca.key -out ca.crt -subj "/CN=${SERVER_SUBJECT}"\n\n# Generates ca.pem\nopenssl pkcs8 -passin pass:${PASS} -topk8 -nocrypt -in ca.key -out ca.pem\n')),(0,a.kt)("p",null,"Then, you can use the generated ca.csr and ca.pem files in your BuildBuddy configuration like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\n")),(0,a.kt)("h3",{id:"remote-build-execution"},"Remote Build Execution"),(0,a.kt)("p",null,"To enable Remote Build Execution, you'll need to add the following to your config.yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"remote_execution:\n  enable_remote_exec: true\n")),(0,a.kt)("p",null,"You'll also need to deploy executors to handle remote builds. The recommended way of deploying these is using our ",(0,a.kt)("a",{parentName:"p",href:"/docs/enterprise-helm"},"Enterprise Helm Chart"),"."),(0,a.kt)("p",null,"For more information on configuring on-prem RBE, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/enterprise-rbe"},"enterprise on-prem RBE setup docs"),"."),(0,a.kt)("h3",{id:"putting-it-all-together"},"Putting It All Together"),(0,a.kt)("p",null,"Here\u2019s what a fully-featured config.yaml looks like which includes all of the features listed above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain"\n  events_api_url: "grpcs://events.buildbuddy.mydomain:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\nstorage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n    gcs:\n      bucket: "buildbuddy_cache"\n      project_id: "your_gcs_project_id"\n      credentials_file: "/path/to/your/credential/file.json"\n      ttl_days: 30\nauth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc0asdkUW123x6"\n      client_secret: "P8fRAYxWMmG9asd040GV2_q9MZ6esTJif1n4BubxU"\nssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\nremote_execution:\n  enable_remote_exec: true\n')),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"For more information on configuring BuildBuddy, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"Configuration docs"),". If you have questions please don\u2019t hesitate to email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:setup@buildbuddy.io"},"setup@buildbuddy.io")," or ping us on our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"Slack channel"),"."))}p.isMDXComponent=!0}}]);