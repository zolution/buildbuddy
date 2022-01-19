"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2395],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(n),y=o,b=s["".concat(l,".").concat(y)]||s[y]||p[y]||r;return n?i.createElement(b,a(a({ref:t},c),{},{components:n})):i.createElement(b,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var i=n(7462),o=n(3366),r=(n(7294),n(4137)),a=["components"],u={id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},l=void 0,d={unversionedId:"guide-auth",id:"guide-auth",title:"Authentication Guide",description:"You have two choices for authenticating your BuildBuddy requests:",source:"@site/../docs/guide-auth.md",sourceDirName:".",slug:"/guide-auth",permalink:"/docs/guide-auth",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-auth.md",tags:[],version:"current",lastUpdatedBy:"Siggi",lastUpdatedAt:1615320644,formattedLastUpdatedAt:"3/9/2021",frontMatter:{id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},sidebar:"someSidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Build Metadata Guide",permalink:"/docs/guide-metadata"}},c=[{value:"API key",id:"api-key",children:[{value:"Separate auth file",id:"separate-auth-file",children:[],level:3},{value:"Command line",id:"command-line",children:[],level:3}],level:2},{value:"Certificate",id:"certificate",children:[],level:2}],p={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You have two choices for authenticating your BuildBuddy requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API key"),(0,r.kt)("li",{parentName:"ul"},"certificate based mTLS auth")),(0,r.kt)("p",null,"Both of these choices require you to ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"create a BuildBuddy account"),"."),(0,r.kt)("h2",{id:"api-key"},"API key"),(0,r.kt)("p",null,"This the simpler of the two methods. It passes an API key along with all grpcs requests that is associated with your BuildBuddy organization. This key can be used by anyone in your organization, as it ties builds to your org - not your individual user."),(0,r.kt)("p",null,"You can find API key authenticated URLs on your ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/docs/setup/"},"setup instructions")," once you've ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"created an account")," and logged in."),(0,r.kt)("p",null,"These URLs can be added directly to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," as long as no one outside of your organization has access to your source code."),(0,r.kt)("p",null,"If people outside of your organization have access to your source code (open source projects, etc) - you'll want to pull your credentials into a separate file that is only accessible by members of your organization and/or your CI machines. Alternatively, you can store your API key in an environment variable / secret and pass these flags in manually or with a wrapper script."),(0,r.kt)("h3",{id:"separate-auth-file"},"Separate auth file"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"try-import")," directive in your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," - you can direct bazel to pull in additional bazel configuration flags from a different file if the file exists (if the file does not exist, this directive will be ignored)."),(0,r.kt)("p",null,"You can then place a second ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.bazelrc")," file in a location that's only accessible to members of your organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build --bes_backend=grpcs://YOUR_API_KEY@cloud.buildbuddy.io\nbuild --remote_cache=grpcs://YOUR_API_KEY@cloud.buildbuddy.io\nbuild --remote_executor=grpcs://YOUR_API_KEY@cloud.buildbuddy.io\n")),(0,r.kt)("p",null,"And add a ",(0,r.kt)("inlineCode",{parentName:"p"},"try-import")," to your main ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," file at the root of your ",(0,r.kt)("inlineCode",{parentName:"p"},"WORKSPACE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"try-import /path/to/your/auth.bazelrc\n")),(0,r.kt)("h3",{id:"command-line"},"Command line"),(0,r.kt)("p",null,"The command line method allows you to store your API key in an environment variable or Github secret, and then pass authenticated flags in either manually or with a wrapper script."),(0,r.kt)("p",null,"If using Github secrets - you can create a secret called ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILDBUDDY_API_KEY")," containing your API key, then use that in your workflows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bazel build --config=remote --bes_backend=${BUILDBUDDY_API_KEY}@cloud.buildbuddy.io --remote_cache=${BUILDBUDDY_API_KEY}@cloud.buildbuddy.io --remote_executor=${BUILDBUDDY_API_KEY}@cloud.buildbuddy.io\n")),(0,r.kt)("h2",{id:"certificate"},"Certificate"),(0,r.kt)("p",null,"The other option for authenticating your BuildBuddy requests is with certificates. Your BuildBuddy certificates can be used by anyone in your organization, as it ties builds to your org - not your individual user."),(0,r.kt)("p",null,"You can download these certificates in your ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/docs/setup/"},"setup instructions")," once you've ",(0,r.kt)("a",{parentName:"p",href:"http://app.buildbuddy.io/"},"created an account")," and logged in. You'll first need to select ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," as your auth option, then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Download buildbuddy-cert.pem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Download buildbuddy-key.pem"),"."),(0,r.kt)("p",null,"Once you've downloaded your cert and key files - you can place them in a location that's only accessible to members of your organization and/or your CI machines."),(0,r.kt)("p",null,"You can then add the following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build --tls_client_certificate=/path/to/your/buildbuddy-cert.pem\nbuild --tls_client_key=/path/to/your/buildbuddy-key.pem\n")),(0,r.kt)("p",null,"Make sure to update the paths to point to the location in which you've placed the files. If placing them in your workspace root, you can simply do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build --tls_client_certificate=buildbuddy-cert.pem\nbuild --tls_client_key=buildbuddy-key.pem\n")))}s.isMDXComponent=!0}}]);