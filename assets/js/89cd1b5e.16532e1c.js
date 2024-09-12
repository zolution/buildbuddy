"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8048],{41477:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var r=o(74848),s=o(28453);const n={slug:"postgres-support",title:"PostgreSQL Support for BuildBuddy",description:"We're happy to announce PostgreSQL support for BuildBuddy.",author:"Zoey Greer",author_title:"Engineer @ BuildBuddy",date:"2023-06-21:12:00:00",author_url:"https://www.github.com/tempoz",author_image_url:"https://avatars.githubusercontent.com/u/735684?v=4",image:"/img/blog/postgres-support.png",tags:["product"]},u=void 0,a={permalink:"/blog/postgres-support",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/postgres-support.md",source:"@site/blog/postgres-support.md",title:"PostgreSQL Support for BuildBuddy",description:"We're happy to announce PostgreSQL support for BuildBuddy.",date:"2023-06-21T12:00:00.000Z",tags:[{inline:!0,label:"product",permalink:"/blog/tags/product"}],readingTime:1.035,hasTruncateMarker:!0,authors:[{name:"Zoey Greer",title:"Engineer @ BuildBuddy",url:"https://www.github.com/tempoz",imageURL:"https://avatars.githubusercontent.com/u/735684?v=4",key:null,page:null}],frontMatter:{slug:"postgres-support",title:"PostgreSQL Support for BuildBuddy",description:"We're happy to announce PostgreSQL support for BuildBuddy.",author:"Zoey Greer",author_title:"Engineer @ BuildBuddy",date:"2023-06-21:12:00:00",author_url:"https://www.github.com/tempoz",author_image_url:"https://avatars.githubusercontent.com/u/735684?v=4",image:"/img/blog/postgres-support.png",tags:["product"]},unlisted:!1,prevItem:{title:"BuildBuddy Named to Inaugural Redpoint InfraRed 100",permalink:"/blog/redpoint-infrared-100"},nextItem:{title:"Providing Control Over Cache Encryption",permalink:"/blog/customer-managed-encryption-keys"}},d={authorsImageUrls:[void 0]},i=[{value:"Try it out!",id:"try-it-out",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"By popular demand, we are introducing support for a PostgreSQL database backend for BuildBuddy! You can now use PostgreSQL as a drop-in replacement for MySQL or SQLite just by specifying a PostgreSQL endpoint to your BuildBuddy instance."}),"\n",(0,r.jsx)(t.h2,{id:"try-it-out",children:"Try it out!"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'\n# After following steps appropriate to your OS/distribution to install PostgreSQL:\n\n# Create a PostgreSQL user corresponding to the current user if one does not already exist\nsudo su postgres -c "createuser $USER --createdb --pwprompt"\n\n# Create a PostgreSQL database called "buildbuddy_test"\ncreatedb buildbuddy_test\n\n# Replace "$PGPASSWORD" with the PostgreSQL password you created for your user\nbb run //enterprise/server -- --database.data_source="postgresql://$USER:$PGPASSWORD@localhost/buildbuddy_test?sslmode=disable"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The PostgreSQL connection may also be specified via ",(0,r.jsx)(t.code,{children:"database.advanced_data_source"}),", just like our other database backends, and as always these flags can instead be specified in your BuildBuddy YAML config as opposed to on the command line. Remember that when you switch out database backends, you're starting with a fresh BuildBuddy instance, so you'll need to create users and change your API keys before you can build anything against it if you're using auth."]}),"\n",(0,r.jsxs)(t.p,{children:["Questions? Comments? Other things you'd like to see in BuildBuddy? You can find us on ",(0,r.jsx)(t.a,{href:"https://community.buildbuddy.io/",children:"Slack"})," or contact us at ",(0,r.jsx)(t.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"}),"; we'd love to hear from you!"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>u,x:()=>a});var r=o(96540);const s={},n=r.createContext(s);function u(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);