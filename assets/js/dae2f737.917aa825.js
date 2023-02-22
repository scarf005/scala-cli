"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[981],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4051:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],s={title:"Proxies \u26a1\ufe0f",sidebar_position:50},p=void 0,l={unversionedId:"guides/proxies",id:"guides/proxies",title:"Proxies \u26a1\ufe0f",description:"HTTP proxies",source:"@site/docs/guides/proxies.md",sourceDirName:"guides",slug:"/guides/proxies",permalink:"/docs/guides/proxies",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/proxies.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Proxies \u26a1\ufe0f",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Internals",permalink:"/docs/guides/internals"},next:{title:"SBT and Mill \u26a1\ufe0f",permalink:"/docs/guides/sbt-mill"}},c={},u=[{value:"HTTP proxies",id:"http-proxies",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Default repositories",id:"default-repositories",level:2},{value:"Mirrors",id:"mirrors",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"http-proxies"},"HTTP proxies"),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"If you can only download artifacts through a proxy, you need to configure it beforehand, like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"scala-cli config httpProxy.address http://proxy.company.com\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.company.com")," by the address of your proxy."),(0,i.kt)("p",null,"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," if your proxy is accessible via HTTPS."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"If your proxy requires authentication, set your user and password with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"scala-cli config httpProxy.user _encoded_user_\nscala-cli config httpProxy.password _encoded_password_\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"_encoded_user_")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_encoded_password_")," by your actual user and password, following\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/password-options"},"password option format"),". They should typically look like\n",(0,i.kt)("inlineCode",{parentName:"p"},"env:ENV_VAR_NAME"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file:/path/to/file"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"command:command to run"),"."),(0,i.kt)("h2",{id:"default-repositories"},"Default repositories"),(0,i.kt)("p",null,"If you don't rely on proxies, but rather download artifacts through different Maven repositories,\nset those repositories like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"scala-cli config repositories.default https://first-repo.company.com https://second-repo.company.com\n")),(0,i.kt)("h2",{id:"mirrors"},"Mirrors"),(0,i.kt)("p",null,"If you're fine directly downloading artifacts from the internet, but would rather have some\nrepositories requests go through a repository of yours, configure mirror repositories, like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"scala-cli config repositories.mirrors https://repo1.maven.org/maven2=https://repository.company.com/maven\n")),(0,i.kt)("p",null,"To have all requests to a Maven repository go through a repository of yours, do"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"scala-cli config repositories.mirrors maven:*=https://repository.company.com/maven\n")))}f.isMDXComponent=!0}}]);