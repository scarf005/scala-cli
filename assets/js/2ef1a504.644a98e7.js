"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3289],{1531:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(5893),t=s(1151);const r={title:"Password options \u26a1\ufe0f",sidebar_position:8},o=void 0,a={id:"reference/password-options",title:"Password options \u26a1\ufe0f",description:"Using password options is restricted and requires setting the --power option to be used.",source:"@site/docs/reference/password-options.md",sourceDirName:"reference",slug:"/reference/password-options",permalink:"/docs/reference/password-options",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/password-options.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Password options \u26a1\ufe0f",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Supported scala versions",permalink:"/docs/reference/scala-versions"},next:{title:"Scala CLI as scala",permalink:"/docs/reference/scala-command/"}},c={},l=[{value:"Environment variable",id:"environment-variable",level:2},{value:"Command printing the secret",id:"command-printing-the-secret",level:2},{value:"File",id:"file",level:2},{value:"Inline",id:"inline",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["Using password options is restricted and requires setting the ",(0,i.jsx)(n.code,{children:"--power"})," option to be used.\nYou can pass it explicitly or set it globally by running:"]}),(0,i.jsx)(n.p,{children:"scala-cli config power true"})]}),"\n",(0,i.jsx)(n.p,{children:"Some Scala CLI options expect password / secret values. Passing passwords directly on the command-line\nposes security issues, so Scala CLI offers a few ways to work around that.\nPasswords / secrets can be passed: via environment variables, via a command printing the secret, via a file, or (not recommended)\ninline."}),"\n",(0,i.jsx)(n.h2,{id:"environment-variable",children:"Environment variable"}),"\n",(0,i.jsxs)(n.p,{children:["Prefix the environment variable name with ",(0,i.jsx)(n.code,{children:"env:"}),", like"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ export MY_PASSWORD=1234\n$ scala-cli publish . --repo-password env:MY_PASSWORD\n"})}),"\n",(0,i.jsx)(n.h2,{id:"command-printing-the-secret",children:"Command printing the secret"}),"\n",(0,i.jsxs)(n.p,{children:["Prefix the command printing the secret with ",(0,i.jsx)(n.code,{children:"command:"}),", like"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ get-secret sonatype-s01 # command printing the secret\n1234\n$ scala-cli publish . --repo-password "command:get-secret sonatype-s01"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, if some of the command arguments contain spaces, one can pass a JSON list:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ get-secret "sonatype s01" # command printing the secret\n1234\n$ scala-cli publish . --repo-password \'command:["get-secret", "sonatype s01"]\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"file",children:"File"}),"\n",(0,i.jsxs)(n.p,{children:["Prefix the file path with ",(0,i.jsx)(n.code,{children:"file:"}),", like"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ cat "$HOME/.passwords/sonatype-s01"\n1234\n$ scala-cli publish . --repo-password "file:$HOME/.passwords/sonatype-s01"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"inline",children:"Inline"}),"\n",(0,i.jsxs)(n.p,{children:["This is the less secure way of passing secrets to Scala CLI, and should only be used\nfor debugging purposes, with non-sensitive secrets. Prefix the password / secret value\nwith ",(0,i.jsx)(n.code,{children:"value:"}),", like"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ scala-cli publish . --repo-password value:1234\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);