"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[285],{1467:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var a=s(5893),i=s(1151),l=s(9705);const c={title:"Markdown \u26a1\ufe0f",sidebar_position:60},d=void 0,r={id:"guides/markdown",title:"Markdown \u26a1\ufe0f",description:"Markdown support is an experimental feature.",source:"@site/docs/guides/markdown.md",sourceDirName:"guides",slug:"/guides/markdown",permalink:"/docs/guides/markdown",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/markdown.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Markdown \u26a1\ufe0f",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Repositories and HTTP Proxies \u26a1\ufe0f",permalink:"/docs/guides/repositories"},next:{title:"Introduction",permalink:"/docs/cookbooks/intro"}},o={},t=[{value:"Markdown inputs",id:"markdown-inputs",level:2},{value:"On-disk markdown sources",id:"on-disk-markdown-sources",level:3},{value:"Zipped archives",id:"zipped-archives",level:3},{value:"Remote inputs",id:"remote-inputs",level:3},{value:"URLs",id:"urls",level:4},{value:"Github Gist",id:"github-gist",level:4},{value:"Piped Markdown code",id:"piped-markdown-code",level:3},{value:"Markdown code as a command line snippet",id:"markdown-code-as-a-command-line-snippet",level:3},{value:"Markdown code blocks",id:"markdown-code-blocks",level:2},{value:"Plain <code>scala</code> snippets",id:"plain-scala-snippets",level:3},{value:"<code>scala raw</code> snippets",id:"scala-raw-snippets",level:3},{value:"<code>scala test</code> snippets",id:"scala-test-snippets",level:3},{value:"<code>reset</code> scope for <code>scala</code> snippets",id:"reset-scope-for-scala-snippets",level:3},{value:"<code>shebang</code> header and Markdown code blocks",id:"shebang-header-and-markdown-code-blocks",level:2},{value:"<code>using</code> directives and Markdown code blocks",id:"using-directives-and-markdown-code-blocks",level:2},{value:"Referring to code from Markdown",id:"referring-to-code-from-markdown",level:2},{value:"Plain <code>scala</code> code blocks",id:"plain-scala-code-blocks",level:3},{value:"<code>scala raw</code> and <code>scala test</code> code blocks",id:"scala-raw-and-scala-test-code-blocks",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"Markdown support is an experimental feature."}),(0,a.jsxs)(n.p,{children:["Please bear in mind that non-ideal user experience should be expected.\nIf you encounter any bugs or have feedback to share, make sure to reach out to the maintenance team\non ",(0,a.jsx)(n.a,{href:"https://github.com/VirtusLab/scala-cli",children:"GitHub"}),"."]})]}),"\n","\n","\n",(0,a.jsxs)(n.p,{children:["Scala CLI can compile, run, test, and package markdown (",(0,a.jsx)(n.code,{children:".md"}),") sources."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This feature is a work in progress and should currently be treated as experimental.\nMarkdown sources are ignored by default unless passed explicitly as inputs.\nYou can enable including non-explicit ",(0,a.jsx)(n.code,{children:".md"})," inputs by passing the ",(0,a.jsx)(n.code,{children:"--enable-markdown"})," option."]})}),"\n",(0,a.jsx)(n.h2,{id:"markdown-inputs",children:"Markdown inputs"}),"\n",(0,a.jsx)(n.h3,{id:"on-disk-markdown-sources",children:"On-disk markdown sources"}),"\n",(0,a.jsxs)(n.p,{children:["You can pass local ",(0,a.jsx)(n.code,{children:".md"})," inputs by passing their path to Scala CLI (as you would for any other kind of input)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=dir/hello.md",children:'# Simple snippet\n```scala\nprintln("Hello")\n```\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power dir/hello.md\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:".md"})," sources inside of directories are ignored by default, unless the ",(0,a.jsx)(n.code,{children:"--enable-markdown"})," option is passed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power dir --enable-markdown\n"})}),"\n",(0,a.jsx)(n.h3,{id:"zipped-archives",children:"Zipped archives"}),"\n",(0,a.jsxs)(n.p,{children:["Scala CLI can run ",(0,a.jsx)(n.code,{children:".md"})," sources inside a ",(0,a.jsx)(n.code,{children:".zip"})," archive.\nSame as with directories,  ",(0,a.jsx)(n.code,{children:".md"})," sources inside zipped archives are ignored by default, unless\nthe ",(0,a.jsx)(n.code,{children:"--enable-markdown"})," option is passed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"ignore",children:"scala-cli --power archive-with-markdown.zip --enable-markdown\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remote-inputs",children:"Remote inputs"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.p,{children:["Running unverified code from the Internet can be very handy for ",(0,a.jsx)(n.em,{children:"trusted"})," sources, but it can also be really dangerous,\nsince Scala CLI does not provide any sandboxing at this moment."]}),(0,a.jsx)(n.p,{children:"Make sure that you trust the code that you are about to run."})]}),"\n",(0,a.jsx)(n.h4,{id:"urls",children:"URLs"}),"\n",(0,a.jsxs)(n.p,{children:["You can also pass a URL pointing to a ",(0,a.jsx)(n.code,{children:".md"})," file to run it with Scala CLI."]}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power https://gist.githubusercontent.com/Gedochao/6415211eeb8ca4d8d6db123f83f0f839/raw/4c5ce7593e19f1390555221e0d076f4b02f4b4fd/example.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello\n"})})]}),"\n",(0,a.jsx)(n.h4,{id:"github-gist",children:"Github Gist"}),"\n",(0,a.jsxs)(n.p,{children:["Scala CLI accepts GitHub Gist URLs.\nThe gist is technically treated as a zipped archive (which it is downloaded as), so it is necessary to pass\nthe ",(0,a.jsx)(n.code,{children:"--enable-markdown"})," option alongside the gist URL to run any contained Markdown sources."]}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power https://gist.github.com/Gedochao/6415211eeb8ca4d8d6db123f83f0f839 --enable-markdown\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can find more information on running GitHub Gists in the ",(0,a.jsx)(n.a,{href:"/docs/cookbooks/gists",children:"gists cookbook"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"piped-markdown-code",children:"Piped Markdown code"}),"\n",(0,a.jsx)(n.p,{children:"Instead of passing paths to your Markdown sources, you can also pipe your code via standard input:"}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo '# Example Snippet\n```scala\nprintln(\"Hello\")\n```' | scala-cli --power _.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can find more information on piped sources in the ",(0,a.jsx)(n.a,{href:"/docs/guides/piping",children:"piping guide"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"markdown-code-as-a-command-line-snippet",children:"Markdown code as a command line snippet"}),"\n",(0,a.jsx)(n.p,{children:"It is also possible to pass Markdown code as a snippet directly from the command line."}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power run --markdown-snippet '# Markdown snippet\nwith a code block\n```scala\nprintln(\"Hello\")\n```'\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can find more information on command line snippets in the ",(0,a.jsx)(n.a,{href:"/docs/guides/snippets",children:"snippets guide"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"markdown-code-blocks",children:"Markdown code blocks"}),"\n",(0,a.jsxs)(n.h3,{id:"plain-scala-snippets",children:["Plain ",(0,a.jsx)(n.code,{children:"scala"})," snippets"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=Example.md",children:'# Example\n\nThis is a simple example of an `.md` file with a Scala snippet.\n\n```scala\nval message = "Hello from Markdown"\nprintln(message)\n```\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Plain ",(0,a.jsx)(n.code,{children:"scala"})," snippets are treated similarly to ",(0,a.jsx)(n.code,{children:".sc"})," scripts in that any kind of statement is accepted at the\ntop-level."]}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power run Example.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello from Markdown\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Similarly to ",(0,a.jsx)(n.code,{children:".sc"})," scripts, when multiple ",(0,a.jsx)(n.code,{children:".md"})," files with plain ",(0,a.jsx)(n.code,{children:"scala"})," snippets are being run, each of them will have\nits own main class, that can be run."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=Main1.md",children:'# Main class 1\n```scala\nprintln("1")\n```\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=Main2.md",children:'# Main class 2\n```scala\nprintln("2")\n```\n'})}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"fail",children:"scala-cli --power Main1.md Main2.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"[error]  Found several main classes: Main1_md, Main2_md\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["When multiple such sources are passed as inputs, the main class has to be passed explicitly with the ",(0,a.jsx)(n.code,{children:"--main-class"}),"\noption."]}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power Main1.md Main2.md --main-class Main1_md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"1\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can always check what main classes are available in the context with the ",(0,a.jsx)(n.code,{children:"--list-main-classes"})," option."]}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power Main1.md Main2.md --list-main-classes\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Main1_md Main2_md\n"})})]}),"\n",(0,a.jsxs)(n.h3,{id:"scala-raw-snippets",children:[(0,a.jsx)(n.code,{children:"scala raw"})," snippets"]}),"\n",(0,a.jsxs)(n.p,{children:["You can mark a ",(0,a.jsx)(n.code,{children:"scala"})," code block with the ",(0,a.jsx)(n.code,{children:"raw"})," keyword, indicating that this snippet should not be wrapped as a script\nand should instead be treated as is. This is the equivalent of code in a ",(0,a.jsx)(n.code,{children:".scala"})," file. For a ",(0,a.jsx)(n.code,{children:"raw"})," snippet to be\nrunnable a main class has to be included."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=RawExample.md",children:'# `raw` example\n\nThis is a simple example of an `.md` file with a raw Scala snippet.\n\n```scala raw\nobject Main extends App {\n  val message = "Hello from Markdown"\n  println(message) \n}\n```\n'})}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power RawExample.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello from Markdown\n"})})]}),"\n",(0,a.jsxs)(n.h3,{id:"scala-test-snippets",children:[(0,a.jsx)(n.code,{children:"scala test"})," snippets"]}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to run tests from ",(0,a.jsx)(n.code,{children:"scala"})," code blocks marked as ",(0,a.jsx)(n.code,{children:"test"}),". This is similar to ",(0,a.jsx)(n.code,{children:"raw"})," snippets in that the\ncode is not wrapped and is treated as is."]}),"\n",(0,a.jsxs)(n.p,{children:["You can run ",(0,a.jsx)(n.code,{children:"scala test"})," code blocks with the ",(0,a.jsx)(n.code,{children:"test"})," sub-command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=TestExample.md",children:'# `test` example\nThis is a simple example of an `.md` file with a test Scala snippet.\n\n```scala test\n//> using dep org.scalameta::munit:0.7.29\nclass Test extends munit.FunSuite {\n  test("example test") {\n    assert(true)\n  }\n}\n```\n'})}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power test TestExample.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Test:\n  + example test\n"})})]}),"\n",(0,a.jsxs)(n.h3,{id:"reset-scope-for-scala-snippets",children:[(0,a.jsx)(n.code,{children:"reset"})," scope for ",(0,a.jsx)(n.code,{children:"scala"})," snippets"]}),"\n",(0,a.jsxs)(n.p,{children:["When multiple plain ",(0,a.jsx)(n.code,{children:"scala"})," snippets are used in a single ",(0,a.jsx)(n.code,{children:".md"})," file, by default they are actually treated as a single\nscript. They share context and when run, are executed one after another, as if they were all in a single ",(0,a.jsx)(n.code,{children:".sc"})," file."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want a snippet to use a fresh context instead, you can rely on the ",(0,a.jsx)(n.code,{children:"reset"})," keyword. This allows you to start a\nfresh scope for the marked snippet (and any coming after it)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=ResetExample.md",children:'# `reset` scope\nThis is an example of an `.md` file with multiple `scala` snippets with separate scopes\n\n## Scope 1\n```scala\nval message = "Hello"\n```\n\n## Still scope 1, since `reset` wasn\'t used yet\n```scala\nprintln(message)\n```\n\n## Scope 2\n```scala reset\nval message = "world"\nprintln(message)\n```\n\n## Scope 3\n```scala reset\nval message = "!"\nprintln(message)\n```\n'})}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power ResetExample.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello\nworld\n!\n"})})]}),"\n",(0,a.jsxs)(n.h2,{id:"shebang-header-and-markdown-code-blocks",children:[(0,a.jsx)(n.code,{children:"shebang"})," header and Markdown code blocks"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"shebang"})," line in ",(0,a.jsx)(n.code,{children:"scala"})," code blocks inside a markdown input are always ignored.\nYou can use them (i.e. to give an example of their usage), but they do not change how the code is handled."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:'## Self executable Scala script\n```scala\n#!/usr/bin/env -S scala-cli shebang\nprintln("Hello world")\n```\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"using-directives-and-markdown-code-blocks",children:[(0,a.jsx)(n.code,{children:"using"})," directives and Markdown code blocks"]}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to define ",(0,a.jsx)(n.code,{children:"using"})," directives at the beginning of a ",(0,a.jsx)(n.code,{children:"scala"})," code block inside a markdown input.\nThis is supported for all ",(0,a.jsx)(n.code,{children:"scala"})," code block flavours."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"compile title=UsingDirectives.md",children:'# Using directives in `.md` inputs\n\n## `scala raw` example\n```scala raw\n//> using dep com.lihaoyi::pprint:0.8.0\nobject Printer {\n  def printHello(): Unit = pprint.pprintln("Hello")\n}\n```\n\n## Plain `scala` example\n```scala\n//> using dep com.lihaoyi::os-lib:0.8.1\nprintln(os.pwd)\n```\n\n## `scala test` example\n```scala test\n//> using dep org.scalameta::munit:1.0.0-M7\n\nclass Test extends munit.FunSuite {\n  test("foo") {\n    assert(true)\n    println("Hello from tests")\n  }\n}\n```\n## Relying on directives from other snippets\nDirectives from other snippets apply to the whole context.\nAs a result, nothing really stops you from using a dependency\nfrom an earlier code block.\n```scala\nPrinter.printHello()\npprint.pprintln("world")\n```\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"scala"})," snippets inside of a Markdown input are not isolated. Each ",(0,a.jsx)(n.code,{children:"using"})," directive applies to the whole project's\ncontext. A directive defined in a later snippet within the same source may override another defined in an earlier one."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=OverriddenDirective.md",children:"## 1\n\n```scala\n//> using scala 2.12.17\nprintln(util.Properties.versionNumberString)\n```\n\n## 2\n\n```scala\n//> using scala 2.13.10\nprintln(util.Properties.versionNumberString)\n```\n"})}),(0,a.jsxs)(n.p,{children:["In this example, the directive from the second ",(0,a.jsx)(n.code,{children:"scala"})," snippet will override the previous one and Scala ",(0,a.jsx)(n.code,{children:"2.13.10"})," will\nbe used for both."]}),(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power OverriddenDirective.md\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Compiling project (Scala 2.13.10, JVM)\nCompiled project (Scala 2.13.10, JVM)\n2.13.10\n2.13.10\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"referring-to-code-from-markdown",children:"Referring to code from Markdown"}),"\n",(0,a.jsxs)(n.h3,{id:"plain-scala-code-blocks",children:["Plain ",(0,a.jsx)(n.code,{children:"scala"})," code blocks"]}),"\n",(0,a.jsxs)(n.p,{children:["Referring to code from plain ",(0,a.jsx)(n.code,{children:"scala"})," snippets in markdown requires using their package name.\nSimilarly to scripts, the package is inferred based on the relative path to the source file in your project."]}),"\n",(0,a.jsxs)(n.p,{children:["You also have to point to the Scope under which the code is located.\nScopes are numbered according to their order in a given ",(0,a.jsx)(n.code,{children:".md"})," file (starting from 0 for the first plain ",(0,a.jsx)(n.code,{children:"scala"}),"\nsnippet): ",(0,a.jsx)(n.code,{children:"Scope{scopeNumber}"}),". The ",(0,a.jsx)(n.code,{children:"snippetNumber"})," is omitted for the first script code block (0). In other words,\nthe first scope is just ",(0,a.jsx)(n.code,{children:"Scope"}),", the second is ",(0,a.jsx)(n.code,{children:"Scope1"}),", then ",(0,a.jsx)(n.code,{children:"Scope2"})," and so on."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=src/markdown/Example.md",children:'## Scope 0\n```scala\ndef hello: String = "Hello"\n```\n\n## Still scope 0, since `reset` wasn\'t used yet\n```scala\ndef space: String = " "\n```\n\n## Scope 1\n```scala reset\ndef world: String = "world"\n```\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",metastring:"title=Main.scala",children:'object Main extends App {\n  val hello = markdown.Example_md.Scope.hello\n  val space = markdown.Example_md.Scope.space\n  val world = markdown.Example_md.Scope1.world\n  println(s"$hello$space$world")\n}\n'})}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power src Main.scala --enable-markdown --main-class Main\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello world\n"})})]}),"\n",(0,a.jsxs)(n.h3,{id:"scala-raw-and-scala-test-code-blocks",children:[(0,a.jsx)(n.code,{children:"scala raw"})," and ",(0,a.jsx)(n.code,{children:"scala test"})," code blocks"]}),"\n",(0,a.jsxs)(n.p,{children:["You can refer to code from ",(0,a.jsx)(n.code,{children:"scala raw"})," and ",(0,a.jsx)(n.code,{children:"scala test"})," snippets as if they were the contents of a ",(0,a.jsx)(n.code,{children:".scala"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",metastring:"title=RawSnippetToReferTo.md",children:'# `raw` snippet\n```scala raw\nobject Something {\n  def message: String = "Hello"\n}\n```\n'})}),"\n",(0,a.jsxs)(l.v,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scala-cli --power RawSnippetToReferTo.md -e 'println(Something.message)'\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Hello\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9705:(e,n,s)=>{s.d(n,{m:()=>c,v:()=>l});s(7294);var a=s(2004),i=s(5893);function l(e){let{children:n}=e;return(0,i.jsx)("div",{className:"runnable-command",children:n})}function c(e){let{url:n}=e;return(0,i.jsx)(a.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:n})}}}]);