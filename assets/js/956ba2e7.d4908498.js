"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9557],{9705:function(e,n,t){t.d(n,{m:function(){return s},v:function(){return l}});var a=t(7294),i=t(2004);function l(e){var n=e.children;return a.createElement("div",{className:"runnable-command"},n)}function s(e){var n=e.url;return a.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:n})}},3820:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=t(3117),i=t(102),l=(t(7294),t(3905)),s=t(9705),o=["components"],r={title:"Configuration",sidebar_position:7},c=void 0,p={unversionedId:"guides/configuration",id:"guides/configuration",title:"Configuration",description:"scala-cli can be configured in two ways:",source:"@site/docs/guides/configuration.md",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/docs/guides/configuration",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/configuration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Configuration",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/guides/intro"},next:{title:"Proxies",permalink:"/docs/guides/proxies"}},d={},u=[{value:"Command-line",id:"command-line",level:2},{value:"In .scala and .sc files",id:"in-scala-and-sc-files",level:2},{value:"Using directives",id:"using-directives",level:3},{value:"Special imports",id:"special-imports",level:3}],m={toc:u};function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," can be configured in two ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on the command-line"),(0,l.kt)("li",{parentName:"ul"},"directly in ",(0,l.kt)("inlineCode",{parentName:"li"},".scala")," and ",(0,l.kt)("inlineCode",{parentName:"li"},".sc")," files")),(0,l.kt)("p",null,"Parameters on the command line take precedence over parameters in sources.\nThat way, you can quickly override parameters from the command line."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The configuration options and syntax in ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," (and ",(0,l.kt)("inlineCode",{parentName:"p"},".sc"),") files is likely to evolve in the future.")),(0,l.kt)("h2",{id:"command-line"},"Command-line"),(0,l.kt)("p",null,"Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," to any sub-command of ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," to list its options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --help\nscala-cli package --help\n")),(0,l.kt)("p",null,"As an example of command line configuration, one thing you can do with ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," command line options is to specify the Scala version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Test.scala",title:"Test.scala"},'@main def test = println("test")\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --scala 3.0.0 Test.scala\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"test\n"))),(0,l.kt)("p",null,"Another thing you can do is to specify dependencies:"),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --dependency org.typelevel::cats-core:2.9.0 Test.scala\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"test\n"))),(0,l.kt)("p",null,"The reference documentation lists ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/cli-options"},"all of the available options"),"."),(0,l.kt)("h2",{id:"in-scala-and-sc-files"},"In .scala and .sc files"),(0,l.kt)("p",null,"Configuration information can also be put in ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," files using special imports, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"using")," directive."),(0,l.kt)("h3",{id:"using-directives"},"Using directives"),(0,l.kt)("p",null,"Scala CLI can be configured inside ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," files.\nThis is achieved by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"using")," directives inside comments at the top of a ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," file, before any ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," statement:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'//> using scala "2.13"\n//> using platform "scala-js"\n//> using options "-Xasync"\n\n// package and import statements follow here ...\n')),(0,l.kt)("p",null,"The reference documentation lists ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/directives#using-directives"},"all available using directives"),"."),(0,l.kt)("h3",{id:"special-imports"},"Special imports"),(0,l.kt)("p",null,"Dependencies can be added right from ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," files, using the same\nsyntax as Ammonite and Metals worksheets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"import $dep.`com.lihaoyi::upickle:1.4.0`\nimport $ivy.`com.lihaoyi::pprint:0.6.6`\nimport ujson._\n")),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"import $ivy")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"import $dep")," are accepted, and are equivalent. Note that this syntax\nmight be deprecated - and then removed - in the future. It's recommended to add dependencies\nwith ",(0,l.kt)("a",{parentName:"p",href:"#using-directives"},(0,l.kt)("inlineCode",{parentName:"a"},"using")," directives"),"."))}k.isMDXComponent=!0}}]);