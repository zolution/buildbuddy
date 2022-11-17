/*! For license information please see a9a2e533.910b4bee.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1790],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var l,a,u=o(e),s=1;s<arguments.length;s++){for(var c in l=Object(arguments[s]))n.call(l,c)&&(u[c]=l[c]);if(t){a=t(l);for(var p=0;p<a.length;p++)r.call(l,a[p])&&(u[a[p]]=l[a[p]])}}return u}},1535:function(e,t,n){var r=n(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||g}function w(){}function B(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var O=B.prototype=new w;O.constructor=B,r(O,v.prototype),O.isPureReactComponent=!0;var j={current:null},N=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r,o={},l=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)N.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:l,ref:a,props:o,_owner:j.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,x=[];function z(e,t,n,r){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case l:a=!0}}if(a)return n(r,e,""===t?"."+_(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=t+_(o=e[u],u);a+=T(o,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=h&&e[h]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),u=0;!(o=e.next()).done;)a+=T(o=o.value,s=t+_(o,u++),n,r);else if("object"===o)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function E(e,t,n){return null==e?0:T(e,"",t,n)}function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),E(e,U,t=z(t,i,r,o)),L(t)}var A={current:null};function M(){var e=A.current;if(null===e)throw Error(m(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4675:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7378),n(4137)),l=["components"],a={id:"cli",title:"BuildBuddy CLI",sidebar_label:"CLI Overview"},u=void 0,s={unversionedId:"cli",id:"cli",title:"BuildBuddy CLI",description:"The BuildBuddy CLI brings the power of BuildBuddy to the command line. It's a Bazel wrapper that's built on top of Bazelisk and brings support for plugins, authentication, flaky network conditions, and more.",source:"@site/../docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cli.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1668658888,formattedLastUpdatedAt:"11/17/2022",frontMatter:{id:"cli",title:"BuildBuddy CLI",sidebar_label:"CLI Overview"},sidebar:"someSidebar",previous:{title:"Workflows configuration",permalink:"/docs/workflows-config"},next:{title:"CLI Plugins",permalink:"/docs/cli-plugins"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Updating",id:"updating",children:[],level:2},{value:"Installing for a project",id:"installing-for-a-project",children:[],level:2},{value:"Features",id:"features",children:[{value:"Networking",id:"networking",children:[],level:3},{value:"Plugins",id:"plugins",children:[],level:3},{value:"Authentication",id:"authentication",children:[],level:3}],level:2},{value:"Contributing",id:"contributing",children:[],level:2},{value:"Reporting an issue",id:"reporting-an-issue",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/cli"},"BuildBuddy CLI")," brings the power of BuildBuddy to the command line. It's a ",(0,i.kt)("a",{parentName:"p",href:"https://bazel.build/"},"Bazel")," wrapper that's built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"Bazelisk")," and brings support for ",(0,i.kt)("a",{parentName:"p",href:"#plugins"},"plugins"),", ",(0,i.kt)("a",{parentName:"p",href:"#authentication"},"authentication"),", ",(0,i.kt)("a",{parentName:"p",href:"#networking"},"flaky network conditions"),", and more."),(0,i.kt)("p",null,"Because it's built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"Bazelisk"),", it's command line compatible with Bazel - which means you can simply ",(0,i.kt)("inlineCode",{parentName:"p"},"alias bazel=bb")," and keep using Bazel the way you normally would."),(0,i.kt)("p",null,"It's written in ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/"},"go"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli"},"fully open source"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT licensed"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The easiest way to install the BuildBuddy CLI is by running this simple bash script, which works on both MacOS and Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL install.buildbuddy.io | bash\n")),(0,i.kt)("p",null,"If you're not comfortable executing random bash scripts from the internet (we totally get it!), you can take a look at what this script is doing under the hood, by visiting ",(0,i.kt)("a",{parentName:"p",href:"https://install.buildbuddy.io"},"install.buildbuddy.io")," in your browser."),(0,i.kt)("p",null,"It's downloading the latest BuildBuddy CLI binary for your OS and architecture from our Github repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/bazel/releases"},"here")," and moving it to ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/bb"),"."),(0,i.kt)("p",null,"You can perform those steps manually yourself if you'd like!"),(0,i.kt)("h2",{id:"updating"},"Updating"),(0,i.kt)("p",null,"You can update the cli by re-running the installation script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL install.buildbuddy.io | bash\n")),(0,i.kt)("p",null,"If you installed BuildBuddy manually instead, you can repeat those installation steps to update your CLI."),(0,i.kt)("p",null,"You can check your BuildBuddy CLI version at any time by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bb version\n")),(0,i.kt)("h2",{id:"installing-for-a-project"},"Installing for a project"),(0,i.kt)("p",null,"If you're already using Bazelisk, you can easily install the BuildBuddy CLI for your entire project by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "$(echo "buildbuddy-io/0.0.15"; cat .bazelversion)" > .bazelversion\n')),(0,i.kt)("p",null,"This will simply prepend ",(0,i.kt)("inlineCode",{parentName:"p"},"buildbuddy-io/0.0.15")," on a new line above your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelversion")," file like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title=".bazelversion"'},"buildbuddy-io/0.0.15\n5.3.2\n")),(0,i.kt)("p",null,"The version 0.0.12 of the BuildBuddy CLI will now automatically be used when you type ",(0,i.kt)("inlineCode",{parentName:"p"},"bazel")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bazelisk")," and continue to use the Bazel version specified on the second line of your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," file."),(0,i.kt)("p",null,"To find the latest version of the BuildBuddy CLI, you can view our releases page ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/bazel/releases"},"here"),"."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"networking"},"Networking"),(0,i.kt)("p",null,"The BuildBuddy CLI was built to handle flaky network conditions without affecting your build. It does this by forwarding all remote cache & build event stream requests through a local proxy. This means that you'll never have to sit around waiting for outputs or build events to upload, and your build won't fail if you're not connected to the internet."),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install."),(0,i.kt)("p",null,"You can find a list of plugins that you can install in our ",(0,i.kt)("a",{parentName:"p",href:"/plugins"},"plugin library"),"."),(0,i.kt)("p",null,"For more information on how to write your own plugins, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli-plugins"},"plugin documentation"),"."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The BuildBuddy CLI makes authentication to BuildBuddy a breeze. You can simply type ",(0,i.kt)("inlineCode",{parentName:"p"},"bb login")," and follow the instructions. Once you're logged in, all of your requests to BuildBuddy will be authenticated to your organization."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"We welcome pull requests! You can find the code for the BuildBuddy CLI on Github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli"},"here"),". See our ",(0,i.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/contributing"},"contributing docs")," for more info."),(0,i.kt)("h2",{id:"reporting-an-issue"},"Reporting an issue"),(0,i.kt)("p",null,"If you run into an issue with the BuildBuddy CLI, please let us know by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/issues/new"},"filing an issue")," and including ",(0,i.kt)("strong",{parentName:"p"},"[CLI]")," in the title."))}d.isMDXComponent=!0}}]);