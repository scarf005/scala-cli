"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9306],{5505:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var n=s(5893),i=s(1151);const o={title:"Filter the test suites to run",sidebar_position:5},l=void 0,a={id:"cookbooks/test-only",title:"Filter the test suites to run",description:"The --test-only option is useful for when you only want to run a specific subset of tests.",source:"@site/docs/cookbooks/test-only.md",sourceDirName:"cookbooks",slug:"/cookbooks/test-only",permalink:"/docs/cookbooks/test-only",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/test-only.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Filter the test suites to run",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Debugging with Scala CLI",permalink:"/docs/cookbooks/debugging"},next:{title:"Using Scala CLI to run Scala Scripts",permalink:"/docs/cookbooks/scala-scripts"}},c={},r=[{value:"Filter the test suites",id:"filter-the-test-suites",level:2},{value:"Running a single test case by name",id:"running-a-single-test-case-by-name",level:2},{value:"Munit",id:"munit",level:3},{value:"Utest",id:"utest",level:3}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--test-only"})," option is useful for when you only want to run a specific subset of tests."]}),"\n",(0,n.jsxs)(t.p,{children:["In this cookbook, we will walk through how to use the ",(0,n.jsx)(t.code,{children:"--test-only"})," option with the ",(0,n.jsx)(t.code,{children:"test"})," sub-command in Scala CLI,\nspecifically when using the ",(0,n.jsx)(t.code,{children:"munit"})," and ",(0,n.jsx)(t.code,{children:"utest"})," test frameworks."]}),"\n",(0,n.jsx)(t.h2,{id:"filter-the-test-suites",children:"Filter the test suites"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--test-only"})," option in Scala CLI supports using glob patterns to filter test suites to run. A glob pattern is a\nstring which contains asterisk ",(0,n.jsx)(t.code,{children:"*"})," characters to match a set of test suites."]}),"\n",(0,n.jsxs)(t.p,{children:["Here are three examples of glob patterns for how to filter test suites with ",(0,n.jsx)(t.code,{children:"--test-only"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["start with ",(0,n.jsx)(t.code,{children:"test"})," - ",(0,n.jsx)(t.code,{children:"test*"})]}),"\n",(0,n.jsxs)(t.li,{children:["end with ",(0,n.jsx)(t.code,{children:"test"})," - ",(0,n.jsx)(t.code,{children:"*test"})]}),"\n",(0,n.jsxs)(t.li,{children:["contains ",(0,n.jsx)(t.code,{children:"test"})," -  ",(0,n.jsx)(t.code,{children:"*test*"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--test-only"})," option is supported for every test framework running with Scala CLI."]})}),"\n",(0,n.jsxs)(t.p,{children:["For example, passing ",(0,n.jsx)(t.code,{children:"tests.only*"})," to the ",(0,n.jsx)(t.code,{children:"--test-only"})," option runs only the test suites which start with ",(0,n.jsx)(t.code,{children:"tests.only"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=BarTests.scala",children:'//> using dep org.scalameta::munit::0.7.29\npackage tests.only\n\nclass BarTests extends munit.FunSuite {\n  test("bar") {\n    assert(2 + 3 == 5)\n  }\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=HelloTests.scala",children:'package tests\n\nclass HelloTests extends munit.FunSuite {\n  test("hello") {\n    assert(2 + 2 == 4)\n  }\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli test . --test-only 'tests.only*' \n# tests.only.BarTests:\n#   + bar 0.045s\n"})}),"\n",(0,n.jsx)(t.h2,{id:"running-a-single-test-case-by-name",children:"Running a single test case by name"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Test frameworks may have their own specific API for specifying the test cases to run aside from the test-only input."})}),"\n",(0,n.jsx)(t.h3,{id:"munit",children:"Munit"}),"\n",(0,n.jsxs)(t.p,{children:["To run a specific test case inside a test suite pass ",(0,n.jsx)(t.code,{children:"*test-name*"})," as an argument to Scala CLI:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=MunitTests.scala",children:'//> using dep org.scalameta::munit::0.7.29\npackage tests.only\n\nclass Tests extends munit.FunSuite {\n  test("bar") {\n    assert(2 + 2 == 5)\n  }\n  test("foo") {\n    assert(2 + 3 == 5)\n  }\n  test("foo-again") {\n    assert(2 + 3 == 5)\n  }\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli test .  -- '*foo*'\n# tests.only.Tests:\n#   + foo 0.045s\n#   + foo-again 0.001s\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will only run the test which contains the name ",(0,n.jsx)(t.code,{children:"foo"}),", any other tests in your test suite will be skipped."]}),"\n",(0,n.jsx)(t.h3,{id:"utest",children:"Utest"}),"\n",(0,n.jsxs)(t.p,{children:["Unfortunately, the ",(0,n.jsx)(t.code,{children:"utest"})," test framework doesn't support using glob pattern ",(0,n.jsx)(t.code,{children:"*"})," to filter the test cases to run. In\norder to run a specific test case you will need to specify the exact name of the test you want to run."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"title=MyTests.scala",children:'//> using dep com.lihaoyi::utest::0.7.10\n\nimport utest._\n\nobject MyTests extends TestSuite {\n  val tests = Tests {\n    test("foo") {\n      assert(2 + 2 == 4)\n      println("Hello from " + "tests")\n    }\n    test("bar") {\n      assert(2 + 2 == 4)\n      println("Hello from " + "tests")\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"scala-cli test .  -- 'MyTests.foo'\n# -------------------------- Running Tests MyTests.foo --------------------------\n# Hello from tests\n# + MyTests.foo 8ms  \n# Tests: 1, Passed: 1, Failed: 0\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will run only the test case with the name ",(0,n.jsx)(t.code,{children:"MyTests.foo"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>l});var n=s(7294);const i={},o=n.createContext(i);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);