"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1663],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5310:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(4137)),o=["components"],l={id:"config-ssl",title:"SSL Configuration",sidebar_label:"SSL"},c=void 0,s={unversionedId:"config-ssl",id:"config-ssl",title:"SSL Configuration",description:"Section",source:"@site/../docs/config-ssl.md",sourceDirName:".",slug:"/config-ssl",permalink:"/docs/config-ssl",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-ssl.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1683059633,formattedLastUpdatedAt:"5/2/2023",frontMatter:{id:"config-ssl",title:"SSL Configuration",sidebar_label:"SSL"},sidebar:"someSidebar",previous:{title:"GitHub",permalink:"/docs/config-github"},next:{title:"Auth",permalink:"/docs/config-auth"}},p=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Generating client CA files",id:"generating-client-ca-files",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"section"},"Section"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssl:")," The SSL section enables SSL/TLS on build event protocol and remote cache gRPC connections (gRPCS). ",(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"enable_ssl:")," Whether or not to enable SSL/TLS on gRPC connections (gRPCS).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"use_acme:")," Whether or not to automatically configure SSL certs using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Automated_Certificate_Management_Environment"},"ACME"),". If ACME is enabled, cert_file and key_file should not be set.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cert_file:")," Path to a PEM encoded certificate file to use for TLS if not using ACME.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"key_file:")," Path to a PEM encoded key file to use for TLS if not using ACME.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"client_ca_cert_file:")," Path to a PEM encoded certificate authority file used to issue client certificates for mTLS auth.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"client_ca_key_file:")," Path to a PEM encoded certificate authority key file used to issue client certificates for mTLS auth."))),(0,a.kt)("h2",{id:"generating-client-ca-files"},"Generating client CA files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Change these CN\'s to match your BuildBuddy host name\nSERVER_SUBJECT=buildbuddy.io\nPASS=$(openssl rand -base64 32) # <- Save this :)\n\n# Generates ca.key\nopenssl genrsa -passout pass:${PASS} -des3 -out ca.key 4096\n\n# Generates ca.crt\nopenssl req -passin pass:${PASS} -new -x509 -days 365000 -key ca.key -out ca.crt -subj "/CN=${SERVER_SUBJECT}"\n\n# Generates ca.pem\nopenssl pkcs8 -passin pass:${PASS} -topk8 -nocrypt -in ca.key -out ca.pem\n\n')),(0,a.kt)("h2",{id:"example-section"},"Example section"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssl:\n  enable_ssl: true\n  use_acme: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\n")))}d.isMDXComponent=!0}}]);