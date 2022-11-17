/*! For license information please see 5fca9684.e6045473.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1835],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var r,l,d=o(e),u=1;u<arguments.length;u++){for(var p in r=Object(arguments[u]))n.call(r,p)&&(d[p]=r[p]);if(t){l=t(r);for(var s=0;s<l.length;s++)a.call(r,l[s])&&(d[l[s]]=r[l[s]])}}return d}},1535:function(e,t,n){var a=n(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,d=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,c=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,k=o?Symbol.for("react.lazy"):60116,f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function C(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function w(){}function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=C.prototype;var N=g.prototype=new w;N.constructor=g,a(N,C.prototype),N.isPureReactComponent=!0;var _={current:null},I=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,n){var a,o={},r=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(r=""+t.key),t)I.call(t,a)&&!T.hasOwnProperty(a)&&(o[a]=t[a]);var d=arguments.length-2;if(1===d)o.children=n;else if(1<d){for(var u=Array(d),p=0;p<d;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(a in d=e.defaultProps)void 0===o[a]&&(o[a]=d[a]);return{$$typeof:i,type:e,key:r,ref:l,props:o,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,E=[];function S(e,t,n,a){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=a,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function U(e,t,n,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case r:l=!0}}if(l)return n(a,e,""===t?"."+H(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var d=0;d<e.length;d++){var u=t+H(o=e[d],d);l+=U(o,u,n,a)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=f&&e[f]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),d=0;!(o=e.next()).done;)l+=U(o=o.value,u=t+H(o,d++),n,a);else if("object"===o)throw n=""+e,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function L(e,t,n){return null==e?0:U(e,"",t,n)}function H(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function P(e,t){e.func.call(e.context,t,e.count++)}function j(e,t,n){var a=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?G(e,a,n,(function(e){return e})):null!=e&&(O(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),a.push(e))}function G(e,t,n,a,o){var i="";null!=n&&(i=(""+n).replace(R,"$&/")+"/"),L(e,j,t=S(t,i,a,o)),A(t)}var M={current:null};function D(){var e=M.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(d,".").concat(m)]||c[m]||s[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),o=n(3366),i=(n(7378),n(4137)),r=["components"],l={id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},d=void 0,u={unversionedId:"guide-metadata",id:"guide-metadata",title:"Build Metadata Guide",description:"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build.",source:"@site/../docs/guide-metadata.md",sourceDirName:".",slug:"/guide-metadata",permalink:"/docs/guide-metadata",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-metadata.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1668658888,formattedLastUpdatedAt:"11/17/2022",frontMatter:{id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},sidebar:"someSidebar",previous:{title:"Authentication Guide",permalink:"/docs/guide-auth"},next:{title:"Remote Build Execution",permalink:"/docs/remote-build-execution"}},p=[{value:"Repository URL",id:"repository-url",children:[{value:"Build metadata",id:"build-metadata",children:[],level:3},{value:"Workspace info",id:"workspace-info",children:[],level:3},{value:"Environment variables",id:"environment-variables",children:[],level:3}],level:2},{value:"Git Branch",id:"git-branch",children:[{value:"Build metadata",id:"build-metadata-1",children:[],level:3},{value:"Workspace info",id:"workspace-info-1",children:[],level:3},{value:"Environment variables",id:"environment-variables-1",children:[],level:3}],level:2},{value:"Commit SHA",id:"commit-sha",children:[{value:"Build metadata",id:"build-metadata-2",children:[],level:3},{value:"Workspace info",id:"workspace-info-2",children:[],level:3},{value:"Environment variables",id:"environment-variables-2",children:[],level:3}],level:2},{value:"Role",id:"role",children:[],level:2},{value:"Test groups",id:"test-groups",children:[],level:2},{value:"Visibility",id:"visibility",children:[],level:2},{value:"User",id:"user",children:[{value:"Build metadata",id:"build-metadata-3",children:[],level:3},{value:"Workspace info",id:"workspace-info-3",children:[],level:3}],level:2},{value:"Host",id:"host",children:[{value:"Build metadata",id:"build-metadata-4",children:[],level:3},{value:"Workspace info",id:"workspace-info-4",children:[],level:3}],level:2},{value:"Pattern",id:"pattern",children:[{value:"Build metadata",id:"build-metadata-5",children:[],level:3},{value:"Workspace info",id:"workspace-info-5",children:[],level:3}],level:2},{value:"Custom Links",id:"custom-links",children:[],level:2},{value:"Environment variable redacting",id:"environment-variable-redacting",children:[{value:"Examples",id:"examples",children:[],level:3}],level:2}],s={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build."),(0,i.kt)("h2",{id:"repository-url"},"Repository URL"),(0,i.kt)("p",null,"BuildBuddy allows you to group invocations by the repository on which they were run. In order to perform this grouping, BuildBuddy needs the repository's git url. There are three ways of providing this information to BuildBuddy:"),(0,i.kt)("h3",{id:"build-metadata"},"Build metadata"),(0,i.kt)("p",null,"The first method is simple - just provide the repo URL with Bazel's build_metadata flag with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"REPO_URL"),". You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --build_metadata=REPO_URL=https://github.com/buildbuddy-io/buildbuddy.git\n")),(0,i.kt)("h3",{id:"workspace-info"},"Workspace info"),(0,i.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,i.kt)("p",null,"First, you'll need to point your ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,i.kt)("p",null,"Then you'll need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."),(0,i.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"BuildBuddy will automatically pull your repo URL from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIRCLE_REPOSITORY_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRAVIS_REPO_SLUG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CI_REPOSITORY_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REPO_URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_REPO"),"."),(0,i.kt)("h2",{id:"git-branch"},"Git Branch"),(0,i.kt)("p",null,"BuildBuddy allows you to group invocations by the git branch on which they were run. In order to perform this grouping, BuildBuddy needs the branch name. There are three ways of providing this information to BuildBuddy:"),(0,i.kt)("h3",{id:"build-metadata-1"},"Build metadata"),(0,i.kt)("p",null,"You can provide the current git branch with Bazel's build_metadata flag with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"BRANCH_NAME"),". You can do this by adding the flag to your bazel invocations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--build_metadata=BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)\n")),(0,i.kt)("p",null,"Note: you cannot add this particular flag to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," file because it does not support parameter substitution. If you're looking for a solution that supports your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," file, try the Workspace info method below."),(0,i.kt)("h3",{id:"workspace-info-1"},"Workspace info"),(0,i.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,i.kt)("p",null,"First, you'll need to point your ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,i.kt)("p",null,"Then you'll need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."),(0,i.kt)("h3",{id:"environment-variables-1"},"Environment variables"),(0,i.kt)("p",null,"BuildBuddy will automatically pull your git branch from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REF"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIRCLE_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRAVIS_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_BRANCH"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_BRANCH"),". Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REF")," will be ignored when it refers to a tag, or overridden by ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF")," for pull requests."),(0,i.kt)("h2",{id:"commit-sha"},"Commit SHA"),(0,i.kt)("h3",{id:"build-metadata-2"},"Build metadata"),(0,i.kt)("p",null,"You can provide the current commit SHA with Bazel's build_metadata flag with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMIT_SHA"),". You can do this by adding the flag to your bazel invocations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--build_metadata=COMMIT_SHA=$(git rev-parse HEAD)\n")),(0,i.kt)("p",null,"Note: you cannot add this particular flag to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," file because it does not support parameter substitution. If you're looking for a solution that supports your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," file, try the Workspace info method below."),(0,i.kt)("h3",{id:"workspace-info-2"},"Workspace info"),(0,i.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,i.kt)("p",null,"First, you'll need to point your ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,i.kt)("p",null,"Then you'll need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."),(0,i.kt)("h3",{id:"environment-variables-2"},"Environment variables"),(0,i.kt)("p",null,"BuildBuddy will automatically pull your commit SHA from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIRCLE_SHA1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRAVIS_COMMIT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"VOLATILE_GIT_COMMIT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_SHA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMIT_SHA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_COMMIT"),"."),(0,i.kt)("h2",{id:"role"},"Role"),(0,i.kt)("p",null,"The role metadata field allows you to specify whether this invocation was done on behalf of a CI (continuous integration) system. If set, this enables features like Github commit status reporting (if a Github account is linked)."),(0,i.kt)("p",null,"For CI builds, you can add the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," and run your CI builds with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config=ci")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build:ci --build_metadata=ROLE=CI\n")),(0,i.kt)("p",null,"This role will automatically be populated if the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CI")," is set, which it is in most CI systems like Github Actions, CircleCI, Travis, Gitlab CI, BuildKite, and others."),(0,i.kt)("h2",{id:"test-groups"},"Test groups"),(0,i.kt)("p",null,"If using Github commit status reporting, you can use the test groups metadata field to specify how tests are grouped in your Github commit statuses. Test groups are specified as a comma separated list of test path prefixes that should be grouped together."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --build_metadata=TEST_GROUPS=//foo/bar,//foo/baz\n")),(0,i.kt)("h2",{id:"visibility"},"Visibility"),(0,i.kt)("p",null,"The visibility metadata field determines who is allowed to view your build results. By default, unauthenticated builds are publicly visible to anyone with a link, while authenticated builds are only available to members of your organization."),(0,i.kt)("p",null,"You can override these default settings and make authenticated builds visible to anyone with a link by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --build_metadata=VISIBILITY=PUBLIC\n")),(0,i.kt)("h2",{id:"user"},"User"),(0,i.kt)("p",null,"By default a build's user is determined by the system on which Bazel is run."),(0,i.kt)("p",null,"You can override this using build metadata or workspace info."),(0,i.kt)("h3",{id:"build-metadata-3"},"Build metadata"),(0,i.kt)("p",null,"You can provide your user with Bazel's build_metadata flag with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"USER"),". You can do this by adding the flag to your bazel invocations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--build_metadata=USER=yourname\n")),(0,i.kt)("h3",{id:"workspace-info-3"},"Workspace info"),(0,i.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,i.kt)("p",null,"First, you'll need to point your ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,i.kt)("p",null,"Then you'll need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",(0,i.kt)("inlineCode",{parentName:"p"},"USER yourname"),"."),(0,i.kt)("h2",{id:"host"},"Host"),(0,i.kt)("p",null,"By default a build's host is determined by the system on which Bazel is run."),(0,i.kt)("p",null,"You can override this using build metadata or workspace info."),(0,i.kt)("h3",{id:"build-metadata-4"},"Build metadata"),(0,i.kt)("p",null,"You can provide your user with Bazel's build_metadata flag with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST"),". You can do this by adding the flag to your bazel invocations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--build_metadata=HOST=yourhost\n")),(0,i.kt)("h3",{id:"workspace-info-4"},"Workspace info"),(0,i.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,i.kt)("p",null,"First, you'll need to point your ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,i.kt)("p",null,"Then you'll need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST yourhost"),"."),(0,i.kt)("h2",{id:"pattern"},"Pattern"),(0,i.kt)("p",null,"By default a build's pattern is determined by bazel command that is run."),(0,i.kt)("p",null,"If the bazel command is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bazel build //...\n")),(0,i.kt)("p",null,"The pattern would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//...\n")),(0,i.kt)("p",null,"You can override this using build metadata or workspace info."),(0,i.kt)("p",null,"This is generally only needed for advanced use cases where you want to display a more user friendly or information rich pattern in the UI than was originally used on the command line."),(0,i.kt)("h3",{id:"build-metadata-5"},"Build metadata"),(0,i.kt)("p",null,"You can provide a custom pattern with Bazel's build_metadata flag with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"PATTERN"),". You can do this by adding the flag to your bazel invocations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--build_metadata=PATTERN=yourpattern\n")),(0,i.kt)("h3",{id:"workspace-info-5"},"Workspace info"),(0,i.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,i.kt)("p",null,"First, you'll need to point your ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,i.kt)("p",null,"Then you'll need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",(0,i.kt)("inlineCode",{parentName:"p"},"PATTERN yourpattern"),"."),(0,i.kt)("h2",{id:"custom-links"},"Custom Links"),(0,i.kt)("p",null,"You can add custom links to the BuildBuddy overview page using the ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDBUDDY_LINKS")," build metadata flag. These links must be comma separated, and in the form ",(0,i.kt)("a",{parentName:"p",href:"https://linkurl.com"},"link text"),". Urls must begin with either ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--build_metadata=BUILDBUDDY_LINKS="[Search Github](https://github.com/search),[GCP Dashboard](https://console.cloud.google.com/home/dashboard)"\n')),(0,i.kt)("h2",{id:"environment-variable-redacting"},"Environment variable redacting"),(0,i.kt)("p",null,"By default, all environment variables are redacted by BuildBuddy except for ",(0,i.kt)("inlineCode",{parentName:"p"},"USER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_ACTOR")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_RUN_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_BUILD_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_JOB_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIRCLE_REPOSITORY_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_REPO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRAVIS_REPO_SLUG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_URL"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"CI_REPOSITORY_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REPO_URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIRCLE_SHA1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_COMMIT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRAVIS_COMMIT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_COMMIT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_SHA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMIT_SHA"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CI"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CI_RUNNER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CIRCLE_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILDKITE_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRAVIS_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_BRANCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REF"),", which are displayed in the BuildBuddy UI."),(0,i.kt)("p",null,"Redacted environment variables are displayed in the BuildBuddy UI as ",(0,i.kt)("inlineCode",{parentName:"p"},"<REDACTED>"),"."),(0,i.kt)("p",null,"You can optionally allow other environment variables to be displayed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALLOW_ENV")," metadata flag."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ALLOW_ENV")," metadata param accepts a comma separated list of allowed environment variables and supports trailing wildcards."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Don't redact the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=PATH\n")),(0,i.kt)("p",null,"Don't redact the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment or any environment variable beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"BAZEL_")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=PATH,BAZEL_*\n")),(0,i.kt)("p",null,"Don't redact any environment variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=*\n")))}c.isMDXComponent=!0}}]);