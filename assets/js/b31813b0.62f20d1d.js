"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8702],{9705:function(e,a,t){t.d(a,{m:function(){return s},v:function(){return i}});var n=t(7294),l=t(2004);function i(e){var a=e.children;return n.createElement("div",{className:"runnable-command"},a)}function s(e){var a=e.url;return n.createElement(l.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:a})}},1939:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n,l=t(3117),i=t(102),s=(t(7294),t(3905)),o=t(9705),r=["components"],p={title:"Basics",sidebar_position:3},c=void 0,m={unversionedId:"commands/basics",id:"commands/basics",title:"Basics",description:"Scala CLI is a command line tool that executes a given sub-command on the inputs it\u2019s provided with, using a",source:"@site/docs/commands/basics.md",sourceDirName:"commands",slug:"/commands/basics",permalink:"/docs/commands/basics",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/basics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Basics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/getting_started"},next:{title:"Compile",permalink:"/docs/commands/compile"}},u={},d=[{value:"Input formats",id:"input-formats",level:2},{value:"Source files",id:"source-files",level:2},{value:"Directories",id:"directories",level:2},{value:"URLs",id:"urls",level:2},{value:"GitHub Gist",id:"github-gist",level:3},{value:"Zip archive",id:"zip-archive",level:3},{value:"Piping",id:"piping",level:2},{value:"Scala CLI version",id:"scala-cli-version",level:2},{value:"Process substitution",id:"process-substitution",level:2}],k=(n="ChainedSnippet",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),h={toc:d};function g(e){var a=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,l.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Scala CLI is a command line tool that executes a given sub-command on the inputs it\u2019s provided with, using a\ngiven ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/configuration"},"configuration")," to produce a result."),(0,s.kt)("p",null,"The most important sub-commands are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/compile"},"compile")," compiles your code (excluding tests)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/run"},"run")," runs your code using the provided arguments (it\u2019s also used when no other command is provided)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/test"},"test")," compiles and runs the tests defined in your code"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/package"},"package")," packages your code into a jar or other format"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/repl"},"repl")," / ",(0,s.kt)("a",{parentName:"li",href:"/docs/commands/repl"},"console")," runs the interactive Scala shell"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/commands/fmt"},"fmt")," formats your code")),(0,s.kt)("p",null,"Scala CLI can also be run without passing any explicit sub-command,\nin which case it defaults to one of the sub-commands based on context:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"if the ",(0,s.kt)("inlineCode",{parentName:"li"},"--version")," option is passed, it prints the ",(0,s.kt)("inlineCode",{parentName:"li"},"version")," command output (unmodified by any other options)"),(0,s.kt)("li",{parentName:"ul"},"if any inputs were passed, it defaults to the ",(0,s.kt)("inlineCode",{parentName:"li"},"run")," sub-command",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"and so, ",(0,s.kt)("inlineCode",{parentName:"li"},"scala-cli a.scala")," runs your ",(0,s.kt)("inlineCode",{parentName:"li"},"a.scala")," file"))),(0,s.kt)("li",{parentName:"ul"},"additionally, when no inputs were passed, it defaults to the ",(0,s.kt)("inlineCode",{parentName:"li"},"run")," sub-command in the following scenarios:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"if a snippet was passed with ",(0,s.kt)("inlineCode",{parentName:"li"},"-e"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"--execute-script"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"--execute-scala"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"--execute-java")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"--execute-markdown")),(0,s.kt)("li",{parentName:"ul"},"if a main class was passed with the ",(0,s.kt)("inlineCode",{parentName:"li"},"--main-class")," option alongside an extra ",(0,s.kt)("inlineCode",{parentName:"li"},"--classpath")))),(0,s.kt)("li",{parentName:"ul"},"otherwise if no inputs were passed, it defaults to the ",(0,s.kt)("inlineCode",{parentName:"li"},"repl")," sub-command")),(0,s.kt)("h2",{id:"input-formats"},"Input formats"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," CLI commands accept input in a number of ways, most notably:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"as source files"),(0,s.kt)("li",{parentName:"ul"},"as one or several directories that contain source files"),(0,s.kt)("li",{parentName:"ul"},"as URLs pointing to sources"),(0,s.kt)("li",{parentName:"ul"},"by processing source code via piping or process substitution")),(0,s.kt)("p",null,"Note that all of these input formats can be used alongside each other."),(0,s.kt)("h2",{id:"source-files"},"Source files"),(0,s.kt)("p",null,"Scala CLI accepts the following types of source code:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".scala")," files, containing Scala code"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".sc")," files, containing Scala scripts (see more in the ",(0,s.kt)("a",{parentName:"li",href:"/docs/guides/scripts"},"Scripts guide"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".java")," files, containing Java code"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".md")," files, containing Markdown code (experimental, see more in the ",(0,s.kt)("a",{parentName:"li",href:"/docs/guides/scripts"},"Markdown guide"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".c")," and ",(0,s.kt)("inlineCode",{parentName:"li"},".h")," files, containing C code (only as resources for Scala Native, see more in\nthe ",(0,s.kt)("a",{parentName:"li",href:"/docs/guides/scala-native"},"Scala Native guide"),")")),(0,s.kt)("p",null,"The following example shows the simplest input format.\nFirst, create a source file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello from Scala")\n}\n')),(0,s.kt)("p",null,"Then run it by passing it to ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli"),":"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Scala\n"))),(0,s.kt)("p",null,"You can also split your code into multiple files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Messages.scala",title:"Messages.scala"},'object Messages {\n  def hello = "Hello from Scala"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},"object Hello {\n  def main(args: Array[String]): Unit =\n    println(Messages.hello)\n}\n")),(0,s.kt)("p",null,"and the run them with ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli"),":"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala Messages.scala\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Scala\n"))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Scala CLI compiles only the provided inputs.\nFor example, if we provide only one of the files above:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"fail",fail:!0},"scala-cli Hello.scala\n")),(0,s.kt)("p",{parentName:"admonition"},"compilation will fail. ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," compiles only the files it\u2019s given.")),(0,s.kt)("p",null,"While this is ",(0,s.kt)("em",{parentName:"p"},"very")," convenient for projects with just a few files, passing many files this way can be cumbersome and\nerror-prone.\nIn the case of larger projects, passing whole directories can help."),(0,s.kt)("h2",{id:"directories"},"Directories"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts whole directories as input."),(0,s.kt)("p",null,"This is convenient when you have many ",(0,s.kt)("inlineCode",{parentName:"p"},".scala")," files, and passing them all one-by-one on the command line isn't\npractical:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/Messages.scala",title:"my-app/Messages.scala"},'object Messages {\n  def hello = "Hello from Scala"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/Hello.scala",title:"my-app/Hello.scala"},"object Hello {\n  def main(args: Array[String]): Unit =\n    println(Messages.hello)\n}\n")),(0,s.kt)("p",null,"In this case, you can run all the source code files in ",(0,s.kt)("inlineCode",{parentName:"p"},"my-app")," by supplying the directory name:"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-app\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Scala\n"))),(0,s.kt)("p",null,"In our experience, ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli .")," is the most used command; it compiles and runs all sources in the current directory."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Scala CLI process all files within the specified directories and all of its subdirectories."),(0,s.kt)("p",{parentName:"admonition"},"Scala CLI ignores all subdirectories that start with ",(0,s.kt)("inlineCode",{parentName:"p"},".")," like ",(0,s.kt)("inlineCode",{parentName:"p"},".scala-build")," or ",(0,s.kt)("inlineCode",{parentName:"p"},".vscode"),".\nSuch directories needs to be explicitly provided as inputs.")),(0,s.kt)("h2",{id:"urls"},"URLs"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Running unverified code from the internet can be very handy for ",(0,s.kt)("em",{parentName:"p"},"trusted")," sources, but it can also be really dangerous,\nsince Scala CLI does not provide any sandboxing at this moment."),(0,s.kt)("p",{parentName:"admonition"},"Make sure that you trust the code that you are about to run.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts input via URLs pointing at ",(0,s.kt)("inlineCode",{parentName:"p"},".scala")," files.\nIt downloads their content, and runs them:"),(0,s.kt)(k,{mdxType:"ChainedSnippet"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/alexarchambault/f972d941bc4a502d70267cfbbc4d6343/raw/2691c01984c9249936a625a42e29a822a357b0f6/Test.scala\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Scala GitHub Gist\n"))),(0,s.kt)("h3",{id:"github-gist"},"GitHub Gist"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts input via Github Gist\u2019s urls.\nIt downloads the gist zip archive and runs it:"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/alexarchambault/7b4ec20c4033690dd750ffd601e540ec\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("p",null,"More details in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/cookbooks/gists"},"GitHub gists cookbook"),"."),(0,s.kt)("h3",{id:"zip-archive"},"Zip archive"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts inputs via a ",(0,s.kt)("inlineCode",{parentName:"p"},"zip")," archive path.\nIt unpacks the archive and runs it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"titleHello.scala","titleHello.scala":!0},'object Hello extends App {\n  println("Hello")\n}\n')),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"unzip -l hello.zip\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Archive:  hello.zip\n  Length      Date    Time    Name\n---------  ---------- -----   ----\n       49  12-07-2021 00:06   Hello.scala\n---------                     -------\n       49                     1 file\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli hello.zip\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,s.kt)("h2",{id:"piping"},"Piping"),(0,s.kt)("p",null,"You can also pipe code to ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," for execution:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"scripts"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'println(\"Hello\")' | scala-cli _.sc\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Scala code"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"echo '@main def hello() = println(\"Hello\")' | scala-cli _.scala\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Java code"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'class Hello { public static void main(String args[]) { System.out.println(\"Hello\"); } }' | scala-cli _.java\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Markdown code (experimental)"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"echo '# Example Snippet\n```scala\nprintln(\"Hello\")\n```' | scala-cli _.md\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))))),(0,s.kt)("p",null,"More details in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/piping"},"Piping guide"),"."),(0,s.kt)("h2",{id:"scala-cli-version"},"Scala CLI version"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," can also run another Scala CLI version, which can be helpful to test unreleased Scala CLI functionalities."),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Running another Scala CLI version might be slower because it uses JVM-based Scala CLI launcher.")),(0,s.kt)("p",null,"To run another Scala CLI version, specify it with ",(0,s.kt)("inlineCode",{parentName:"p"},"--cli-version")," before any other argument:"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --cli-version 0.1.17-62-g21e1cf44-SNAPSHOT about\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Scala CLI version: 0.1.17-62-g21e1cf44-SNAPSHOT\nScala version (default): 3.2.1\n"))),(0,s.kt)("p",null,"To use the latest Scala CLI nightly build, pass ",(0,s.kt)("inlineCode",{parentName:"p"},"nightly")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"--cli-version")," parameter:"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --cli-version nightly about\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Fetching Scala CLI 0.1.17-62-g21e1cf44-SNAPSHOT\nScala CLI version: 0.1.17-62-g21e1cf44-SNAPSHOT\nScala version (default): 3.2.1\n"))),(0,s.kt)("h2",{id:"process-substitution"},"Process substitution"),(0,s.kt)("p",null,"Lastly, ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli")," also accepts input via shell process substitution:"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli <(echo 'println(\"Hello\")')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))))}g.isMDXComponent=!0}}]);