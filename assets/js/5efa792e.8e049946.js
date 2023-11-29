"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1476],{2450:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=n(5893),a=n(1151),o=n(9705);const t={title:"Version",sidebar_position:25},c=void 0,r={id:"commands/version",title:"Version",description:"The version sub-command prints the currently used Scala CLI version and the associated Scala version.",source:"@site/docs/commands/version.md",sourceDirName:"commands",slug:"/commands/version",permalink:"/docs/commands/version",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/version.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Version",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Completions",permalink:"/docs/commands/completions"},next:{title:"Shebang",permalink:"/docs/commands/shebang"}},l={},d=[];function h(e){const s={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"version"})," sub-command prints the currently used Scala CLI version and the associated Scala version."]}),"\n",(0,i.jsxs)(o.v,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scala-cli version\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Scala CLI version: 0.1.19\nScala version (default): 3.2.1\n"})})]}),"\n",(0,i.jsxs)(s.p,{children:["It is also possible to print the same output with the ",(0,i.jsx)(s.code,{children:"-version"})," option passed to the default sub-command.\nThis way doesn't allow to use the other options relevant to ",(0,i.jsx)(s.code,{children:"version"}),", however."]}),"\n",(0,i.jsxs)(o.v,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scala-cli -version\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Scala CLI version: 0.1.19\nScala version (default): 3.2.1\n"})})]}),"\n",(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.code,{children:"version"})," is called, Scala CLI will automatically check if it's up to date.\nIf your version is outdated, you will get a warning."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"Your Scala CLI. version is outdated. The newest version is 0.1.19\nIt is recommended that you update Scala CLI through the same tool or method you used for its initial installation for avoiding the creation of outdated duplicates.\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can skip checking if Scala CLI is up to date by passing the ",(0,i.jsx)(s.code,{children:"--offline"})," option."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scala-cli version --offline\n"})}),"\n",(0,i.jsxs)(s.p,{children:["It's also possible to just print the raw Scala CLI version with the ",(0,i.jsx)(s.code,{children:"--cli-version"})," option.\nThis won't check if the app is outdated, so the ",(0,i.jsx)(s.code,{children:"--offline"})," option is unnecessary in this context."]}),"\n",(0,i.jsxs)(o.v,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scala-cli version --cli-version\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"0.1.19\n"})})]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.p,{children:["Do not confuse the ",(0,i.jsx)(s.code,{children:"version"})," sub-command's ",(0,i.jsx)(s.code,{children:"--cli-version"})," option with the launcher option under the same name, as they\ndo different things. The former prints the raw Scala CLI version, while the latter allows to change the Scala CLI\nlauncher version. In fact, both of them can be used at one time."]}),(0,i.jsxs)(o.v,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scala-cli --cli-version 0.1.18 version --cli-version\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"0.1.18\n"})})]}),(0,i.jsx)(s.p,{children:"Launcher options have to be passed before the sub-command is specified, which allows to differentiate between them."})]}),"\n",(0,i.jsxs)(s.p,{children:["Similarly, it's possible to just print the raw default Scala version.\nOnce more, this won't check if the app is outdated, so the ",(0,i.jsx)(s.code,{children:"--offline"})," option is unnecessary in this context as well."]}),"\n",(0,i.jsxs)(o.v,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scala-cli version --scala-version\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"3.2.1\n"})})]})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9705:(e,s,n)=>{n.d(s,{m:()=>t,v:()=>o});n(7294);var i=n(2004),a=n(5893);function o(e){let{children:s}=e;return(0,a.jsx)("div",{className:"runnable-command",children:s})}function t(e){let{url:s}=e;return(0,a.jsx)(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:s})}}}]);