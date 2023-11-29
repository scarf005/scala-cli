"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6705],{9513:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(5893),i=o(1151);const r={title:"Proxy authentication",sidebar_position:9},s=void 0,c={id:"reference/proxy-authentication",title:"Proxy authentication",description:"Scala CLI can download dependencies via HTTP proxies. Proxies can be setup in several ways:",source:"@site/docs/reference/proxy-authentication.md",sourceDirName:"reference",slug:"/reference/proxy-authentication",permalink:"/docs/reference/proxy-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/proxy-authentication.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Proxy authentication",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Password options \u26a1\ufe0f",permalink:"/docs/reference/password-options"},next:{title:"Interaction with Bloop server",permalink:"/docs/reference/bloop"}},a={},l=[{value:"Maven configuration file",id:"maven-configuration-file",level:2},{value:"Command-line options",id:"command-line-options",level:2},{value:"Coursier or Scala CLI configuration files",id:"coursier-or-scala-cli-configuration-files",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Scala CLI can download dependencies via HTTP proxies. Proxies can be setup in several ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"via the Maven configuration file (recommended for now)"}),"\n",(0,t.jsx)(n.li,{children:"via command-line options"}),"\n",(0,t.jsx)(n.li,{children:"via Scala CLI or coursier configuration files (soon)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"maven-configuration-file",children:"Maven configuration file"}),"\n",(0,t.jsxs)(n.p,{children:["This file lives at ",(0,t.jsx)(n.code,{children:"~/.m2/settings.xml"})]}),"\n",(0,t.jsx)(n.p,{children:"Example configuration file, without authentication:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<settings>\n  <proxies>\n    <proxy>\n      <id>test-proxy</id>\n      <protocol>http</protocol>\n      <host>proxy.corp.com</host>\n      <port>8080</port>\n    </proxy>\n  </proxies>\n</settings>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example configuration file, with authentication:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<settings>\n  <proxies>\n    <proxy>\n      <id>test-proxy</id>\n      <protocol>http</protocol>\n      <host>proxy.corp.com</host>\n      <port>8080</port>\n      <username>alex</username>\n      <password>1234</password>\n    </proxy>\n  </proxies>\n</settings>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The value in ",(0,t.jsx)(n.code,{children:"<protocol>\u2026</protocol>"})," is assumed to be the protocol of the proxy itself\n(can be either ",(0,t.jsx)(n.code,{children:"http"})," or ",(0,t.jsx)(n.code,{children:"https"}),", ",(0,t.jsx)(n.code,{children:"https"})," is assumed by default not to inadvertently leak\nproxy credentials)."]}),"\n",(0,t.jsx)(n.p,{children:"Such a proxy is used for both http and https by Scala CLI."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/coursier/coursier",children:"coursier"})," command-line and library also pick those credentials, since version ",(0,t.jsx)(n.code,{children:"2.1.0-M6-26-gcec901e9a"})," (2022/05/31)."]}),"\n",(0,t.jsx)(n.h2,{id:"command-line-options",children:"Command-line options"}),"\n",(0,t.jsx)(n.p,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ scala-cli \\\n    -Dhttp.proxyProtocol=http -Dhttp.proxyHost=proxy.corp.com -Dhttp.proxyPort=8080 \\\n    -Dhttp.proxyUsername=alex -Dhttp.proxyPassword=1234 \\\n    -Dhttps.proxyProtocol=http -Dhttps.proxyHost=proxy.corp.com -Dhttps.proxyPort=8080 \\\n    -Dhttps.proxyUsername=alex -Dhttps.proxyPassword=1234 \\\n    <(echo 'println(\"Hello from Scala CLI\")')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"coursier-or-scala-cli-configuration-files",children:"Coursier or Scala CLI configuration files"}),"\n",(0,t.jsx)(n.p,{children:"Support to be added soon"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);