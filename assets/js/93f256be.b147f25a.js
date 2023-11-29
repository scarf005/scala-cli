"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4602],{1831:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=i(5893),s=i(1151);const o={title:"Default File \u26a1\ufe0f",sidebar_position:2},l=void 0,c={id:"commands/misc/default-file",title:"Default File \u26a1\ufe0f",description:"The Default File is restricted and requires setting the --power option to be used.",source:"@site/docs/commands/misc/default-file.md",sourceDirName:"commands/misc",slug:"/commands/misc/default-file",permalink:"/docs/commands/misc/default-file",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/misc/default-file.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Default File \u26a1\ufe0f",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Publish Local \u26a1\ufe0f",permalink:"/docs/commands/publishing/publish-local"},next:{title:"PGP \u26a1\ufe0f",permalink:"/docs/commands/misc/pgp"}},r={},a=[];function d(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["The Default File is restricted and requires setting the ",(0,n.jsx)(t.code,{children:"--power"})," option to be used.\nYou can pass it explicitly or set it globally by running:"]}),(0,n.jsx)(t.p,{children:"scala-cli config power true"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"default-file"})," sub-command provides sensible default content for files\nsuch as ",(0,n.jsx)(t.code,{children:".gitignore"})," or for GitHub actions workflows, for Scala CLI projects."]}),"\n",(0,n.jsxs)(t.p,{children:["To list the available files, pass it ",(0,n.jsx)(t.code,{children:"--list"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"$ scala-cli default-file --list\n.gitignore\n.github/workflows/ci.yml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Get the content of a default file with"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"$ scala-cli default-file .gitignore\n/.bsp/\n/.scala-build/\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Optionally, write the content of one or more default files by passing ",(0,n.jsx)(t.code,{children:"--write"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"$ scala-cli default-file --write .gitignore .github/workflows/ci.yml\nWrote .gitignore\nWrote .github/workflows/ci.yml\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>l});var n=i(7294);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);