"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9469],{71831:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(67294),r=a(18316),c=a(97095),i=a(34215),l=a(94330),s=a(56953),o=a(74515),u=(0,o.Z)("Calendar",[["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2",key:"1dtxiw"}],["line",{x1:"16",y1:"2",x2:"16",y2:"6",key:"18saeg"}],["line",{x1:"8",y1:"2",x2:"8",y2:"6",key:"1u51jw"}],["line",{x1:"3",y1:"10",x2:"21",y2:"10",key:"6sq0yj"}]]),d=(0,o.Z)("Slack",[["rect",{x:"13",y:"2",width:"3",height:"8",rx:"1.5",key:"134gbe"}],["path",{d:"M19 8.5v1.5h1.5a1.5 1.5 0 1 0-1.5-1.5",key:"1q7ebs"}],["rect",{x:"8",y:"14",width:"3",height:"8",rx:"1.5",key:"6p48jh"}],["path",{d:"M5 15.5v-1.5h-1.5a1.5 1.5 0 1 0 1.5 1.5",key:"m2q01f"}],["rect",{x:"14",y:"13",width:"8",height:"3",rx:"1.5",key:"1gabf9"}],["path",{d:"M15.5 19h-1.5v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"dysrke"}],["rect",{x:"2",y:"8",width:"8",height:"3",rx:"1.5",key:"1bingn"}],["path",{d:"M8.5 5h1.5v-1.5a1.5 1.5 0 1 0-1.5 1.5",key:"hglebz"}]]),m=a(19162),h={company:n.createRef(),email:n.createRef(),firstName:n.createRef(),lastName:n.createRef(),message:n.createRef(),button:n.createRef()};var y=function(){return n.createElement(r.Z,{title:"Contact Us"},n.createElement("div",{className:c.Z.page},n.createElement("div",{className:c.Z.section},n.createElement("div",{className:c.Z.container},n.createElement("div",{className:c.Z.centeredText},n.createElement("div",{className:c.Z.title},"Get in touch,",n.createElement("br",null),"we love to chat."),n.createElement("div",{className:c.Z.subtitle},n.createElement("br",null),"Questions, feature requests, and ideas welcome!"))),n.createElement("div",{className:c.Z.container},n.createElement("div",{className:i.Z.contactMethods},n.createElement("a",{href:"mailto:hello@buildbuddy.io"},n.createElement(s.Z,null)," Email us at hello@buildbuddy.io"),n.createElement("a",{href:"/request-demo"},n.createElement(u,null)," Schedule a demo"),n.createElement("a",{href:"https://community.buildbuddy.io",target:"_blank"},n.createElement(d,null)," Chat with us on Slack"),n.createElement("a",{href:"https://github.com/buildbuddy-io/buildbuddy/issues/new",target:"_blank"},n.createElement(m.Z,null)," Open a Github issue"))),n.createElement("div",{className:c.Z.container},n.createElement("div",{className:i.Z.form},n.createElement("input",{ref:h.company,placeholder:"Company"}),n.createElement("input",{ref:h.email,placeholder:"Work email address"}),n.createElement("input",{ref:h.firstName,placeholder:"First name"}),n.createElement("input",{ref:h.lastName,placeholder:"Last name"}),n.createElement("textarea",{ref:h.message,placeholder:"Your message",className:i.Z.span2}),n.createElement("button",{ref:h.button,onClick:function(){return(0,l.Z)("New Contact Form Message!\nName: "+h.firstName.current.value+" "+h.lastName.current.value+"\nEmail: "+h.email.current.value+"\nCompany: "+h.company.current.value+"\nMessage: "+h.message.current.value),h.firstName.current.disabled=!0,h.lastName.current.disabled=!0,h.email.current.disabled=!0,h.company.current.disabled=!0,h.message.current.disabled=!0,h.button.current.innerText="Message Sent!",void(h.button.current.disabled=!0)},className:c.Z.button+" "+c.Z.buttonPrimary+" "+i.Z.span2},"Send message"))))))}},94330:function(e,t,a){function n(e){return fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVE4zMk1ENlRVL0IwMlQ2QUo0M1JEL3dPckNRQUJTQ1BLNTlyem8xUEF5RWV1Yw"),{method:"POST",body:'{"text":"'+e.replace(/"/g,'\\"')+'"}'})}a.d(t,{Z:function(){return n}})},74515:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(45697),c=a.n(r),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=["color","size","strokeWidth"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var o=function(e,t){var a=(0,n.forwardRef)((function(a,r){var c,o=a.color,u=void 0===o?"currentColor":o,d=a.size,m=void 0===d?24:d,h=a.strokeWidth,y=void 0===h?2:h,b=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,l);return(0,n.createElement)("svg",s({ref:r},i,{width:m,height:m,stroke:u,strokeWidth:y,className:"lucide lucide-"+(c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase())},b),t.map((function(e){var t=e[0],a=e[1];return(0,n.createElement)(t,a)})))}));return a.propTypes={color:c().string,size:c().oneOfType([c().string,c().number]),strokeWidth:c().oneOfType([c().string,c().number])},a.displayName=""+e,a}},19162:function(e,t,a){var n=(0,a(74515).Z)("Github",[["path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",key:"13vz3l"}]]);t.Z=n},56953:function(e,t,a){var n=(0,a(74515).Z)("Mail",[["path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",key:"1wse7h"}],["polyline",{points:"22,6 12,13 2,6",key:"1ukqhz"}]]);t.Z=n},97095:function(e,t){t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",pillTitle:"pillTitle_HzMn",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp"}},34215:function(e,t){t.Z={form:"form_AMSB",contactMethods:"contactMethods_hl2S",span2:"span2_l9k5"}}}]);