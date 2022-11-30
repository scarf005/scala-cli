"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2585],{9705:function(e,t,n){n.d(t,{m:function(){return o},v:function(){return s}});var a=n(7294),i=n(2004);function s(e){var t=e.children;return a.createElement("div",{className:"runnable-command"},t)}function o(e){var t=e.url;return a.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}},2448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(3117),i=n(102),s=(n(7294),n(3905)),o=n(9705),l=["components"],r={title:"Sharing and testing code with GitHub gists",sidebar_position:6},c=void 0,p={unversionedId:"cookbooks/gists",id:"cookbooks/gists",title:"Sharing and testing code with GitHub gists",description:"Running code from gists",source:"@site/docs/cookbooks/gists.md",sourceDirName:"cookbooks",slug:"/cookbooks/gists",permalink:"/docs/cookbooks/gists",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/gists.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Sharing and testing code with GitHub gists",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Packaging Scala applications as Docker images",permalink:"/docs/cookbooks/scala-docker"},next:{title:"Setup multiple Scala CLI projects in IDEA IntelliJ as separate modules",permalink:"/docs/cookbooks/intellij-multi-bsp"}},d={},u=[{value:"Running code from gists",id:"running-code-from-gists",level:2},{value:"Sharing code snippets",id:"sharing-code-snippets",level:2},{value:"Resources from gists",id:"resources-from-gists",level:2},{value:"Gists and Markdown code",id:"gists-and-markdown-code",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"running-code-from-gists"},"Running code from gists"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," lets you run Scala code straight from GitHub gists, without the need to manually download them first.\nThis is done by passing the link to a gist as an argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli"),":"),(0,s.kt)("p",null,"For example, given the gist ",(0,s.kt)("inlineCode",{parentName:"p"},"https://gist.github.com/alexarchambault/7b4ec20c4033690dd750ffd601e540ec"),", which contains these two files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Messages.scala",title:"Messages.scala"},'object Messages {\n  def hello = "Hello"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=run.sc",title:"run.sc"},"println(Messages.hello)\n")),(0,s.kt)("p",null,"You can run them with ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/alexarchambault/7b4ec20c4033690dd750ffd601e540ec\n")),(0,s.kt)("p",null,"This example prints ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello")," to the standard output."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"As shown in this example, the gist isn't limited to just one file.\n",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," downloads the gist's archive and unzips it, so the gist can contain multiple files that depend on each other."),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," also caches the project sources using Coursier's cache.")),(0,s.kt)("h2",{id:"sharing-code-snippets"},"Sharing code snippets"),(0,s.kt)("p",null,"Together with the GitHub CLI (",(0,s.kt)("inlineCode",{parentName:"p"},"gh"),"), it becomes really easy to share Scala code.\nIf you want to share a code file named ",(0,s.kt)("inlineCode",{parentName:"p"},"file.scala"),", just run this command to create the gist:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"gh gist create file.scala\n")),(0,s.kt)("p",null,"Then you (and others) can run it quickly, using the ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," approach shown above."),(0,s.kt)("h2",{id:"resources-from-gists"},"Resources from gists"),(0,s.kt)("p",null,"You can also use resources from gists archive. This is done by passing ",(0,s.kt)("inlineCode",{parentName:"p"},"resourceDir")," in using directives."),(0,s.kt)("p",null,"For example, given the gist ",(0,s.kt)("inlineCode",{parentName:"p"},"https://gist.github.com/lwronski/7ee12fa4b8b8bac3211841273df82080")," which containing Scala code and text file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'//> using resourceDir "./"\nimport scala.io.Source\n\nobject Hello extends App {\n    val inputs = Source.fromResource("input").getLines.map(_.toInt).toSeq\n    println(inputs.mkString(","))\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=input",title:"input"},"1\n2\n3\n4\n")),(0,s.kt)("p",null,"and run them:"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/lwronski/7ee12fa4b8b8bac3211841273df82080\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"1,2,3,4\n"))),(0,s.kt)("p",null,"it will print ",(0,s.kt)("inlineCode",{parentName:"p"},"1,2,3,4")," to the standard output."),(0,s.kt)("h2",{id:"gists-and-markdown-code"},"Gists and Markdown code"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This feature is a work in progress and should currently be treated as experimental.\nMarkdown sources are ignored by default unless passed explicitly as inputs.\nYou can enable including non-explicit ",(0,s.kt)("inlineCode",{parentName:"p"},".md")," inputs by passing the ",(0,s.kt)("inlineCode",{parentName:"p"},"--enable-markdown")," option.")),(0,s.kt)("p",null,"It is possible to run markdown sources from a GitHub gist.\nThe gist is technically treated as a zipped archive (which it is downloaded as), so it is necessary to pass\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"--enable-markdown")," option alongside the gist URL to run any contained Markdown sources."),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/Gedochao/6415211eeb8ca4d8d6db123f83f0f839 --enable-markdown\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("p",null,"You can find more information on working with Markdown in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/markdown"},"Markdown guide"),"."))}g.isMDXComponent=!0}}]);