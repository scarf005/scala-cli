"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9945],{5017:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var n=i(5893),r=i(1151),t=i(9705);const c={title:"Publish \u26a1\ufe0f",sidebar_position:20},d=void 0,l={id:"commands/publishing/publish",title:"Publish \u26a1\ufe0f",description:"The Publish command is restricted and requires setting the --power option to be used.",source:"@site/docs/commands/publishing/publish.md",sourceDirName:"commands/publishing",slug:"/commands/publishing/publish",permalink:"/docs/commands/publishing/publish",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/publishing/publish.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Publish \u26a1\ufe0f",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Publish Setup \u26a1\ufe0f",permalink:"/docs/commands/publishing/publish-setup"},next:{title:"Publish Local \u26a1\ufe0f",permalink:"/docs/commands/publishing/publish-local"}},o={},h=[{value:"Required settings",id:"required-settings",level:2},{value:"Organization",id:"organization",level:3},{value:"Name",id:"name",level:3},{value:"Version",id:"version",level:3},{value:"Repository settings",id:"repository-settings",level:2},{value:"Other settings",id:"other-settings",level:2},{value:"Signing",id:"signing",level:3},{value:"Bouncy Castle",id:"bouncy-castle",level:4},{value:"GPG",id:"gpg",level:4},{value:"Checksums",id:"checksums",level:3},{value:"CI overrides",id:"ci-overrides",level:3},{value:"Repositories",id:"repositories",level:2},{value:"Maven Central",id:"maven-central",level:3},{value:"GitHub Packages",id:"github-packages",level:3},{value:"Ivy2 Local",id:"ivy2-local",level:3},{value:"Other pre-defined repositories",id:"other-pre-defined-repositories",level:3},{value:"Generic Maven repositories",id:"generic-maven-repositories",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Publishing",id:"publishing",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.admonition,{type:"caution",children:[(0,n.jsxs)(s.p,{children:["The Publish command is restricted and requires setting the ",(0,n.jsx)(s.code,{children:"--power"})," option to be used.\nYou can pass it explicitly or set it globally by running:"]}),(0,n.jsx)(s.p,{children:"scala-cli config power true"})]}),"\n",(0,n.jsxs)(s.admonition,{type:"caution",children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"publish"})," sub-command is an experimental feature."]}),(0,n.jsxs)(s.p,{children:["Please bear in mind that non-ideal user experience should be expected.\nIf you encounter any bugs or have feedback to share, make sure to reach out to the maintenance team\non ",(0,n.jsx)(s.a,{href:"https://github.com/VirtusLab/scala-cli",children:"GitHub"}),"."]})]}),"\n","\n","\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"publish"})," sub-command allows to publish Scala CLI projects to Maven repositories."]}),"\n",(0,n.jsxs)(s.p,{children:["We recommend running ",(0,n.jsxs)(s.a,{href:"/docs/commands/publishing/publish-setup",children:["the ",(0,n.jsx)(s.code,{children:"publish setup"})," sub-command"]})," once prior to\nrunning ",(0,n.jsx)(s.code,{children:"publish"}),", in order to set missing ",(0,n.jsx)(s.code,{children:"using"})," directives for publishing, but this is not\nmandatory."]}),"\n",(0,n.jsx)(s.h2,{id:"required-settings",children:"Required settings"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"scala-cli publish"})," and ",(0,n.jsx)(s.code,{children:"scala-cli publish local"})," might complain about missing settings.\nAn organization, a name (or a module name), and (a way to compute) a version are needed, but Scala CLI may\nbe able to compute sensible defaults for them."]}),"\n",(0,n.jsxs)(s.p,{children:["We recommend setting the settings below via using directives rather than on the command-line,\nso that commands such as ",(0,n.jsx)(s.code,{children:"scala publish ."})," or ",(0,n.jsx)(s.code,{children:"scala publish local ."})," work fine for your\nproject. Command-line options for those settings take over the using directive values, and are\nprovided as a convenience."]}),"\n",(0,n.jsx)(s.p,{children:"This table lists settings allowing to specify those. See the sub-sections right after for more details."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.code,{children:"using"})," directive"]}),(0,n.jsx)(s.th,{children:"Command-line option"}),(0,n.jsx)(s.th,{children:"Example values"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Organization"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.organization"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--organization"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"org.virtuslab.scala-cli"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Name"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.name"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--name"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"scala-cli"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Module Name"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.moduleName"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--module-name"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"scala-cli_3"})}),(0,n.jsxs)(s.td,{children:["Module Name includes the Scala prefix, such as ",(0,n.jsx)(s.code,{children:"_2.13"})," or ",(0,n.jsx)(s.code,{children:"_3"}),". Specifying Name should be favored over Module Name"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Compute Version"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.computeVersion"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--compute-version"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"git:tag"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Version"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.version"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--version"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"0.1.0"}),", ",(0,n.jsx)(s.code,{children:"0.1.1-SNAPSHOT"})]}),(0,n.jsx)(s.td,{children:"As much as possible, Compute Version (describing how to compute the version) should be favored over Version"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"organization",children:"Organization"}),"\n",(0,n.jsxs)(s.p,{children:["If your Scala CLI project lives in a git repository having a GitHub remote, Scala CLI\nwill infer an organization from it: if your project lives in GitHub organization ",(0,n.jsx)(s.code,{children:"foo"}),"\n(that is, lives somewhere under ",(0,n.jsx)(s.code,{children:"https://github.com/foo/"}),"), Scala CLI will use\n",(0,n.jsx)(s.code,{children:"io.github.foo"})," as default Maven organization."]}),"\n",(0,n.jsxs)(s.p,{children:["To override this default value, set the ",(0,n.jsx)(s.code,{children:"publish.organization"})," directive, like"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"//> using publish.organization io.github.foo\n"})}),"\n",(0,n.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,n.jsxs)(s.p,{children:["Scala CLI will use the project directory name as default Maven name. That is, if your\nScala CLI project lives in a directory named ",(0,n.jsx)(s.code,{children:"something"}),", it will be published as\n",(0,n.jsx)(s.code,{children:"something"})," (pure Java project) or ",(0,n.jsx)(s.code,{children:"something_3"})," (Scala 3 project) for example."]}),"\n",(0,n.jsxs)(s.p,{children:["To override this default value, set the ",(0,n.jsx)(s.code,{children:"publish.name"})," directive, like"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"//> using publish.name something\n"})}),"\n",(0,n.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,n.jsxs)(s.p,{children:["If your Scala CLI project lives in a git repository, Scala CLI will infer a way to compute\nversions from it: if the current commit has a tag ",(0,n.jsx)(s.code,{children:"v1.2.3"}),", version ",(0,n.jsx)(s.code,{children:"1.2.3"})," is assumed.\nElse, if it has such a tag earlier in the git history, version ",(0,n.jsx)(s.code,{children:"1.2.4-SNAPSHOT"})," is assumed."]}),"\n",(0,n.jsxs)(s.p,{children:["To override this default value, set the ",(0,n.jsx)(s.code,{children:"publish.computeVersion"})," directive, like"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"//> using publish.computeVersion git:tag\n"})}),"\n",(0,n.jsx)(s.p,{children:"Please note that only tags that follow the semantic versioning are taken into consideration."}),"\n",(0,n.jsx)(s.p,{children:"Values available for project version configuration are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"git:tag"})," or ",(0,n.jsx)(s.code,{children:"git"}),": use the latest stable git tag, if it is older than HEAD then try to increment it\nand add a suffix ",(0,n.jsx)(s.code,{children:"-SNAPSHOT"}),", if no tag is available then use ",(0,n.jsx)(s.code,{children:"0.1.0-SNAPSHOT"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"git:dynver"}),": use the latest (stable or unstable) git tag, if it is older than HEAD then use the output of\n",(0,n.jsx)(s.code,{children:"-{distance from last tag}-g{shortened version of HEAD commit hash}-SNAPSHOT"}),", if no tag is available then use ",(0,n.jsx)(s.code,{children:"0.1.0-SNAPSHOT"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The difference between stable and unstable tags are, that the latter can contain letters, e.g. ",(0,n.jsx)(s.code,{children:"v0.1.0-RC1"}),".\nIt is also possible to specify the path to the repository, e.g. ",(0,n.jsx)(s.code,{children:"git:tag:../my-repo"}),", ",(0,n.jsx)(s.code,{children:"git:dynver:../my-repo"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"repository-settings",children:"Repository settings"}),"\n",(0,n.jsxs)(s.p,{children:["A repository is required for the ",(0,n.jsx)(s.code,{children:"publish"})," command, and might need other settings to work fine\n(to pass credentials for example). See ",(0,n.jsx)(s.a,{href:"#repositories",children:"Repositories"})," for more information."]}),"\n",(0,n.jsxs)(s.p,{children:["When publishing from you CI, we recommend letting ",(0,n.jsx)(s.code,{children:"scala-cli publish setup"}),"\nsetting those settings via using directives. When publishing from your local machine to Maven Central,\nwe recommend setting the repository via a ",(0,n.jsx)(s.code,{children:"publish.repository"})," directive, and keeping your\nSonatype credentials in the Scala CLI settings, via commands such as"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"ignore",children:"scala-cli config publish.credentials s01.oss.sonatype.org env:SONATYPE_USER env:SONATYPE_PASSWORD\n"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.code,{children:"using"})," directive"]}),(0,n.jsx)(s.th,{children:"Command-line option"}),(0,n.jsx)(s.th,{children:"Example values"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Repository"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.repository"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--publish-repository"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"central"}),", ",(0,n.jsx)(s.code,{children:"central-s01"}),", ",(0,n.jsx)(s.code,{children:"github"}),", ",(0,n.jsx)(s.code,{children:"https://artifacts.company.com/maven"})]}),(0,n.jsx)(s.td,{})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"other-settings",children:"Other settings"}),"\n",(0,n.jsxs)(s.p,{children:["A number of metadata can be set either by ",(0,n.jsx)(s.code,{children:"using"})," directives, or from the command-line. These\nmetadata are optional in the ",(0,n.jsx)(s.code,{children:"publish local"})," command, but might be mandatory for some repositories\nin the ",(0,n.jsx)(s.code,{children:"publish"})," command, like Maven Central for non-snapshot versions."]}),"\n",(0,n.jsxs)(s.p,{children:["We recommend setting the settings below via using directives rather than on the command-line,\nso that these don't have to be recalled for each ",(0,n.jsx)(s.code,{children:"scala-cli publish"})," or ",(0,n.jsx)(s.code,{children:"scala-cli publish local"}),"\ninvocation. Command-line options for those settings take over the using directive values, and are\nprovided as a convenience."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsxs)(s.th,{children:[(0,n.jsx)(s.code,{children:"using"})," directive"]}),(0,n.jsx)(s.th,{children:"Command-line option"}),(0,n.jsx)(s.th,{children:"Example values"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"License"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.license"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--license"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"Apache-2.0"}),", ",(0,n.jsx)(s.code,{children:"MIT"}),", ",(0,n.jsx)(s.code,{children:"Foo:https://foo.com/license.txt"}),", \u2026"]}),(0,n.jsxs)(s.td,{children:["Run ",(0,n.jsx)(s.code,{children:"scala-cli publish --license list"})," to list pre-defined licenses"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"URL"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.url"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--url"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"VCS"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.vcs"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--vcs"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"github:VirtusLab/scala-cli"}),", ",(0,n.jsx)(s.code,{children:"https://github.com/VirtusLab/scala-cli.git"})]}),(0,n.jsxs)(s.td,{children:["scm:git",":github",".com/VirtusLab/scala-cli.git"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Developers"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.developer"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--developer"})}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("code",{children:["alexme|Alex Me|",(0,n.jsx)(s.a,{href:"https://alex.me",children:"https://alex.me"})]})}),(0,n.jsx)(s.td,{children:"Can be specified multiple times, using directives and CLI values add up"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Docs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.doc"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--doc"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"--doc=false"}),", ",(0,n.jsx)(s.code,{children:"//> using doc false"})]}),(0,n.jsx)(s.td,{children:"Use to disable publishing docs jar."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"signing",children:"Signing"}),"\n",(0,n.jsx)(s.p,{children:"Scala CLI can sign the artifacts it publishes with PGP signatures. Signing in Scala CLI can be\nhandled by either"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"https://www.bouncycastle.org",children:"Bouncy Castle library"})," (default, recommended)"]}),"\n",(0,n.jsxs)(s.li,{children:["the local ",(0,n.jsx)(s.code,{children:"gpg"})," binary on your machine"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["A signing mechanism will be chosen based on options and directives specified,\nit can also be overriden with ",(0,n.jsx)(s.code,{children:"--signer"})," with one of the values:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"bc"})," - Bouncy Castle library will be used for signing, PGP secret key is required"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"gpg"})," - a local ",(0,n.jsx)(s.code,{children:"gpg"})," binary will be used for signing, GPG key ID is required"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"none"})," - NO signing will take place"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"bouncy-castle",children:"Bouncy Castle"}),"\n",(0,n.jsx)(s.p,{children:"Bouncy Castle library is the quickest way of signing artifacts with Scala CLI.\nA benefit of using it is that it has no external dependencies,\nScala CLI is able to sign things with Bouncy Castle without further setup on your side.\nHowever, it does not provide a complex PGP handling functionality as e.g. GPG does."}),"\n",(0,n.jsxs)(s.p,{children:["When the ",(0,n.jsx)(s.code,{children:"--signer"})," option is not specified Bouncy Castle library will be used for signing\nif one of these conditions occur:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.code,{children:"--secret-key"})," option has been passed"]}),"\n",(0,n.jsxs)(s.li,{children:["target repository requires signing (e.g. ",(0,n.jsx)(s.code,{children:"central"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To succesfully use PGP signing with Bouncy Castle a PGP key pair is required.\nScala CLI can generate and keep PGP keys for you by using:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"ignore",children:"scala-cli --power config --create-pgp-key --pgp-password MY_CHOSEN_PASSWORD\n"})}),"\n",(0,n.jsxs)(s.p,{children:["It's not mandatory, although recomended, to use a password to encrypt your keychains.\nTo store the private keychain in an unencrypted form use ",(0,n.jsx)(s.code,{children:"--pgp-password none"}),".\nTo randomly generate a pasword, use ",(0,n.jsx)(s.code,{children:"--pgp-password random"})," instead."]}),"\n",(0,n.jsxs)(s.p,{children:["The generated values are kept in the ",(0,n.jsx)(s.code,{children:"config"})," and will be used by default unless specified otherwise:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"with directives:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"//> using publish.secretKey env:PGP_SECRET\n//> using publish.secretKeyPassword command:get_my_password\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"with options:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"ignore",children:"scala-cli --power publish \\\n  --secret-key env:PGP_SECRET \\\n  --secret-key-password file:pgp_password.txt \\\n  \u2026\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Since these values should be kept secret, the options and directives accept the format documented ",(0,n.jsx)(s.a,{href:"/docs/reference/password-options",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"gpg",children:"GPG"}),"\n",(0,n.jsxs)(s.p,{children:["Using GPG to sign artifacts requires the ",(0,n.jsx)(s.code,{children:"gpg"})," binary to be installed on your system.\nA benefit of using ",(0,n.jsx)(s.code,{children:"gpg"})," to sign artifacts over Bouncy Castle is: you can use keys from\nyour GPG key ring, or from external devices that GPG may support."]}),"\n",(0,n.jsxs)(s.p,{children:["To get started, consult the ",(0,n.jsx)(s.a,{href:"https://gnupg.org/documentation/guides.html",children:"documentation on the library's website"})," and be sure to read about\n",(0,n.jsx)(s.a,{href:"https://github.com/lfit/itpol/blob/master/protecting-code-integrity.md#target-audience",children:"Protecting code integrity with PGP guide from the Linux Foundation"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["To enable signing with GPG, pass ",(0,n.jsx)(s.code,{children:"--gpg-key *key_id*"})," on the command line\nor specify it with a ",(0,n.jsx)(s.code,{children:"using"})," directive: ",(0,n.jsx)(s.code,{children:"//>using publish.gpgKey key_id"}),".\nIf needed, you can specify arguments meant to be passed to ",(0,n.jsx)(s.code,{children:"gpg"}),",\nwith ",(0,n.jsx)(s.code,{children:"--gpg-option"})," or ",(0,n.jsx)(s.code,{children:"//>using publish.gpgOptions --opt1 --opt2"}),", like"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"--gpg-key 1234567890ABCDEF --gpg-option --foo --gpg-option --bar\n"})}),"\n",(0,n.jsx)(s.h3,{id:"checksums",children:"Checksums"}),"\n",(0,n.jsx)(s.p,{children:"Scala CLI can generate checksums of the artifacts it publishes."}),"\n",(0,n.jsxs)(s.p,{children:["By default, Scala CLI generates SHA-1 and MD5 checksums. To disable checksums,\npass ",(0,n.jsx)(s.code,{children:"--checksum none"}),". To generate checksum formats to generate, pass them via\n",(0,n.jsx)(s.code,{children:"--checksum"}),", separating the checksum values with ",(0,n.jsx)(s.code,{children:","})," or using ",(0,n.jsx)(s.code,{children:"--checksum"})," multiple\ntimes:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"--checksum sha1,md5\n--checksum sha1 --checksum md5\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To list supported checksum types, pass ",(0,n.jsx)(s.code,{children:"--checksum list"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"ci-overrides",children:"CI overrides"}),"\n",(0,n.jsx)(s.p,{children:"Scala CLI allows some publishing-related settings to have different values on your local machine and\non CIs. In particular, this can be convenient to handle credentials and signing parameters, as these can\nbe read from different locations on developers' machines and on CIs."}),"\n",(0,n.jsxs)(s.p,{children:["On CIs (when ",(0,n.jsx)(s.code,{children:"CI"})," is set in the environment, whatever its value), the CI override is\nused if it's there. Else the main directive is used."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Settings"}),(0,n.jsx)(s.th,{children:"Directive"}),(0,n.jsx)(s.th,{children:"CI override directive"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Compute Version"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.computeVersion"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.computeVersion"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Repository"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.repository"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.repository"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Repository User"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.user"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.user"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Repository Password"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.password"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.password"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Repository Realm"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.realm"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.realm"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Secret Key"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.secretKey"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.secretKey"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Secret Key Password"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.secretKeyPassword"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.secretKeyPassword"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GPG key"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.gpgKey"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.gpgKey"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GPG options"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.gpgOptions"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"publish.ci.gpgOptions"})})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"repositories",children:"Repositories"}),"\n",(0,n.jsx)(s.h3,{id:"maven-central",children:"Maven Central"}),"\n",(0,n.jsxs)(s.p,{children:["Right now the easiest way to publish to Maven Central Repository is to use\nSonatype repositories - ",(0,n.jsx)(s.code,{children:"s01.oss.sonatype.org"})," or ",(0,n.jsx)(s.code,{children:"oss.sonatype.org"}),"\nSince 25.02.2021 ",(0,n.jsx)(s.code,{children:"s01"})," is the default server for new users, if your account is older than that\nyou probably need to use the legacy ",(0,n.jsx)(s.code,{children:"oss.sonatype.org"}),". More about this ",(0,n.jsx)(s.a,{href:"https://central.sonatype.org/news/20210223_new-users-on-s01/#question",children:"here"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"central"})," as repository to push artifacts to Maven Central via ",(0,n.jsx)(s.code,{children:"oss.sonatype.org"}),".\nTo push to it via ",(0,n.jsx)(s.code,{children:"s01.oss.sonatype.org"}),", use ",(0,n.jsx)(s.code,{children:"central-s01"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["When using ",(0,n.jsx)(s.code,{children:"central"})," or ",(0,n.jsx)(s.code,{children:"central-s01"})," as repository, artifacts are pushed\neither to ",(0,n.jsx)(s.code,{children:"https://oss.sonatype.org/content/repositories/snapshots"})," (versions\nending in ",(0,n.jsx)(s.code,{children:"SNAPSHOT"}),") or to ",(0,n.jsx)(s.code,{children:"https://oss.sonatype.org/staging/deploy/maven2"}),'\n(in that case, Sonatype API endpoints are called to "close" and "release"\nartifacts, which later syncs them to ',(0,n.jsx)(s.code,{children:"https://repo1.maven.org/maven2"}),")."]}),"\n",(0,n.jsx)(s.h3,{id:"github-packages",children:"GitHub Packages"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"github"})," (GitHub organization and name computed from the git remotes)\nor ",(0,n.jsx)(s.code,{children:"github:org/name"})," (replace ",(0,n.jsx)(s.code,{children:"org"})," and ",(0,n.jsx)(s.code,{children:"name"})," by the GitHub organization and name\nof your repository, like ",(0,n.jsx)(s.code,{children:"github:VirtusLab/scala-cli"}),")\nto push artifacts to GitHub Packages."]}),"\n",(0,n.jsx)(s.p,{children:"Note that, as of writing this, this disables parallel uploading of artifacts,\nchecksums, and signing (all not supported by GitHub Packages as of writing this)."}),"\n",(0,n.jsx)(s.h3,{id:"ivy2-local",children:"Ivy2 Local"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"ivy2Local"})," to put artifacts in the local Ivy2 repository, just like how\n",(0,n.jsx)(s.a,{href:"/docs/commands/publishing/publish-local",children:(0,n.jsx)(s.code,{children:"publish local"})})," does."]}),"\n",(0,n.jsx)(s.h3,{id:"other-pre-defined-repositories",children:"Other pre-defined repositories"}),"\n",(0,n.jsxs)(s.p,{children:["All pre-defined repositories accepted by coursier, such as ",(0,n.jsx)(s.code,{children:"jitpack"})," or ",(0,n.jsx)(s.code,{children:"sonatype:snapshots"}),", are accepted as repositories for publishing."]}),"\n",(0,n.jsx)(s.h3,{id:"generic-maven-repositories",children:"Generic Maven repositories"}),"\n",(0,n.jsxs)(s.p,{children:["Pass a URL (beginning with ",(0,n.jsx)(s.code,{children:"http://"})," or ",(0,n.jsx)(s.code,{children:"https://"}),") to push to custom\nHTTP servers. Pushing to such repositories relies on HTTP PUT requests\n(just like for the pre-defined repositories above)."]}),"\n",(0,n.jsx)(s.p,{children:"You can also pass a path to a local directory, absolute (recommended)\nor relative (beware of name clashes with pre-defined repositories above)."}),"\n",(0,n.jsx)(s.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(s.p,{children:["Specify publish repository authentication either on the command-line or via\nusing directives. See user / password / realm in the ",(0,n.jsx)(s.a,{href:"#settings",children:"settings table"}),"\nand the ",(0,n.jsx)(s.a,{href:"#ci-overrides",children:"CI overrides"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"publishing",children:"Publishing"}),"\n",(0,n.jsx)(s.p,{children:"Once all the necessary settings are set, publish a Scala CLI project with a command\nsuch as this one:"}),"\n",(0,n.jsxs)(t.v,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"ignore",children:"scala-cli --power publish .\n"})}),(0,n.jsxs)(s.p,{children:["(",(0,n.jsx)(s.code,{children:"."})," is for the Scala CLI project in the current directory)"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"Publishing io.github.scala-cli:hello-scala-cli_3:0.1.0-SNAPSHOT\n \u2714 Computed 8 checksums\n \ud83d\ude9a Wrote 12 files\n\n \ud83d\udc40 Check results at\n  https://s01.oss.sonatype.org/content/repositories/snapshots/io/github/scala-cli/hello-scala-cli_3/0.1.0-SNAPSHOT\n"})})]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},9705:(e,s,i)=>{i.d(s,{m:()=>c,v:()=>t});i(7294);var n=i(2004),r=i(5893);function t(e){let{children:s}=e;return(0,r.jsx)("div",{className:"runnable-command",children:s})}function c(e){let{url:s}=e;return(0,r.jsx)(n.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:s})}}}]);