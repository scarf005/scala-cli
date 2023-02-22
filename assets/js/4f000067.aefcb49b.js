"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[980],{9705:function(e,a,t){t.d(a,{m:function(){return s},v:function(){return i}});var l=t(7294),n=t(2004);function i(e){var a=e.children;return l.createElement("div",{className:"runnable-command"},a)}function s(e){var a=e.url;return l.createElement(n.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:a})}},2612:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var l=t(3117),n=t(102),i=(t(7294),t(3905)),s=t(9705),r=["components"],o={title:"Run",sidebar_position:6},p=void 0,c={unversionedId:"commands/run",id:"commands/run",title:"Run",description:"The run command runs your Scala code:",source:"@site/docs/commands/run.md",sourceDirName:"commands",slug:"/commands/run",permalink:"/docs/commands/run",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/run.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Run",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/docs/commands/compile"},next:{title:"Test",permalink:"/docs/commands/test"}},u={},d=[{value:"Passing arguments",id:"passing-arguments",level:2},{value:"Main class",id:"main-class",level:2},{value:"Custom JVM",id:"custom-jvm",level:2},{value:"JVM options",id:"jvm-options",level:3},{value:"JAR",id:"jar",level:3},{value:"Define source files in using directives",id:"define-source-files-in-using-directives",level:2},{value:"Watch mode",id:"watch-mode",level:2},{value:"Watch mode (restart)",id:"watch-mode-restart",level:3},{value:"Scala.js",id:"scalajs",level:2},{value:"Scala Native",id:"scala-native",level:2},{value:"Platform",id:"platform",level:2},{value:"Scala Scripts",id:"scala-scripts",level:2},{value:"Scala CLI from docker",id:"scala-cli-from-docker",level:2},{value:"Debugging",id:"debugging",level:2}],m={toc:d};function k(e){var a=e.components,t=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command runs your Scala code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run Hello.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,i.kt)("p",null,"This is the default command, so you don\u2019t have to specify it explicitly:"),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,i.kt)("h2",{id:"passing-arguments"},"Passing arguments"),(0,i.kt)("p",null,"You can pass arguments to the application or script you're launching after ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app.sc",title:"app.sc"},'println(args.mkString("App called with arguments: ", ", ", ""))\n')),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli app.sc -- first-arg second-arg\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"App called with arguments: first-arg, second-arg\n"))),(0,i.kt)("h2",{id:"main-class"},"Main class"),(0,i.kt)("p",null,"If your application has multiple main classes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--main-class")," option lets you explicitly specify the main class you\nwant to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hi.sc",title:"hi.sc"},'println("Hi")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala hi.sc --main-class hi_sc\n")),(0,i.kt)("h2",{id:"custom-jvm"},"Custom JVM"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--jvm")," lets you run your application with a custom JVM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --jvm adopt:14\n")),(0,i.kt)("p",null,"You can also specify custom JVM with the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using jvm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'//> using jvm "adopt:14"\n')),(0,i.kt)("p",null,"JVMs are ",(0,i.kt)("a",{parentName:"p",href:"https://get-coursier.io/docs/cli-java#managed-jvms"},"managed by coursier"),", and are read from\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/coursier/jvm-index"},"coursier JVM index"),".\n(New JVM versions are automatically checked daily, and updates for those are - manually - merged\nswiftly.)"),(0,i.kt)("h3",{id:"jvm-options"},"JVM options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--java-opt")," lets you add ",(0,i.kt)("inlineCode",{parentName:"p"},"java")," options which will be passed when running an application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --java-opt -Xmx1g --java-opt -Dfoo=bar\n")),(0,i.kt)("p",null,"You can also add java options with the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaOpt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'//> using javaOpt "-Xmx1g", "-Dfoo=bar"\n')),(0,i.kt)("p",null,"Additionally, java properties can be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"--java-prop"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -Dfoo=bar\n")),(0,i.kt)("h3",{id:"jar"},"JAR"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," lets you run JAR files just like any other input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Hello.jar\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello World\n")),(0,i.kt)("p",null,"When you provide a JAR file as input to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),", it will be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"classPath"),"."),(0,i.kt)("h2",{id:"define-source-files-in-using-directives"},"Define source files in using directives"),(0,i.kt)("p",null,"You can also add source files with the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Main.scala",title:"Main.scala"},'//> using file "Utils.scala" \n\nobject Main extends App {\n  println(Utils.message)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Utils.scala",title:"Utils.scala"},'object Utils {\n  val message = "Hello World"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," takes it into account and compiles ",(0,i.kt)("inlineCode",{parentName:"p"},"Utils.scala"),"."),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Main.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello World\n"))),(0,i.kt)("p",null,"It is also possible to pass multiple paths to source files in a single using directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Multiple.scala",title:"Multiple.scala"},'//> using files "Utils.scala", "Main.scala"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run Multiple.scala\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using file")," using directive only supports ",(0,i.kt)("inlineCode",{parentName:"p"},".java"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".scala"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".sc")," files or a directory."),(0,i.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," makes Scala CLI watch your code for changes, and re-runs it upon any change\nor when the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENTER")," key is passed from the command line:"),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Hello.scala  --watch\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello\nProgram exited with return code 0.\nWatching sources, press Ctrl+C to exit, or press Enter to re-run.\nCompiling project (Scala 3.2.2, JVM)\nCompiled project (Scala 3.2.2, JVM)\nHello World\nProgram exited with return code 0.\nWatching sources, press Ctrl+C to exit, or press Enter to re-run.\n"))),(0,i.kt)("h3",{id:"watch-mode-restart"},"Watch mode (restart)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--restart")," option works very similarly to ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch"),", but instead of waking the sleeping thread,\nit kills the process and restarts the app whenever sources change or the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENTER")," key is passed from the command line."),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Hello.scala --restart\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Watching sources while your program is running.\nHello\nProgram exited with return code 0.\nWatching sources while your program is running.\nCompiling project (Scala 3.2.2, JVM)\nCompiled project (Scala 3.2.2, JVM)\nHello World\nProgram exited with return code 0.\nWatching sources while your program is running.\n"))),(0,i.kt)("h2",{id:"scalajs"},"Scala.js"),(0,i.kt)("p",null,"Scala.js applications can also be compiled and run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--js")," option.\nNote that this requires ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," to be ",(0,i.kt)("a",{parentName:"p",href:"/install#scala-js"},"installed")," on your system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --js\n")),(0,i.kt)("p",null,"It is also possible to achieve it using ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --platform js\n")),(0,i.kt)("p",null,"See our dedicated ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/scala-js"},"Scala.js guide")," for more information."),(0,i.kt)("h2",{id:"scala-native"},"Scala Native"),(0,i.kt)("p",null,"Scala Native applications can be compiled and run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--native")," option.\nNote that\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"Scala Native requirements"),"\nneed to be ",(0,i.kt)("a",{parentName:"p",href:"/install#scala-native"},"installed")," for this to work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --native -S 2.13.6\n")),(0,i.kt)("p",null,"It is also possible to achieve it using ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --platform native\n")),(0,i.kt)("p",null,"We have a dedicated ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/scala-native"},"Scala Native guide")," as well."),(0,i.kt)("h2",{id:"platform"},"Platform"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," option can be used to choose the platform, which should be used to compile and run application.\nAvailable platforms are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JVM (",(0,i.kt)("inlineCode",{parentName:"li"},"jvm"),")"),(0,i.kt)("li",{parentName:"ul"},"Scala.js (",(0,i.kt)("inlineCode",{parentName:"li"},"scala.js")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"scala-js")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"scalajs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"js"),")"),(0,i.kt)("li",{parentName:"ul"},"Scala Native (",(0,i.kt)("inlineCode",{parentName:"li"},"scala-native")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"scalanative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"native"),")")),(0,i.kt)("p",null,"Passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," along with ",(0,i.kt)("inlineCode",{parentName:"p"},"--js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--native")," is not recommended. If two different types of platform are\npassed, Scala CLI throws an error."),(0,i.kt)("h2",{id:"scala-scripts"},"Scala Scripts"),(0,i.kt)("p",null,"Scala CLI can also compile and run Scala scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloScript.sc",title:"HelloScript.sc"},'#!/ usr / bin / env -S scala -cli shebang\n\nprintln("Hello world from scala script")\n')),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run HelloScript.sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello world from scala script\n"))),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/scripts"},"scripts guide")," provides many more details."),(0,i.kt)("h2",{id:"scala-cli-from-docker"},"Scala CLI from docker"),(0,i.kt)("p",null,"Scala applications can also be compiled and run using a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"docker")," image\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),", without needing to install Scala CLI manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run virtuslab/scala-cli:latest version\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloWorld.scala",title:"HelloWorld.scala"},'object HelloWorld extends App {\n  println("Hello world")\n}\n')),(0,i.kt)(s.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"docker run  -v $(pwd)/HelloWorld.scala:/HelloWorld.scala virtuslab/scala-cli /HelloWorld.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"It is possible to debug code by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--debug")," flag."),(0,i.kt)("p",null,"Additional debug options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--debug-mode")," (attach by default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--debug-port")," (5005 by default)")),(0,i.kt)("p",null,"Available debug modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attach (",(0,i.kt)("inlineCode",{parentName:"li"},"attach")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"att")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),")"),(0,i.kt)("li",{parentName:"ul"},"Listen (",(0,i.kt)("inlineCode",{parentName:"li"},"listen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"lis")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"l"),")")),(0,i.kt)("p",null,"Example debugging with scala-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Foo.scala --debug --debug-mode l --debug-port 5006\n")))}k.isMDXComponent=!0}}]);