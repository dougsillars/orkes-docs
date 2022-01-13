"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4276],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:11},l="Inline Task",u={unversionedId:"reference-docs/system-tasks/inline-task",id:"reference-docs/system-tasks/inline-task",isDocsHomePage:!1,title:"Inline Task",description:"`json",source:"@site/docs/reference-docs/system-tasks/inline-task.md",sourceDirName:"reference-docs/system-tasks",slug:"/reference-docs/system-tasks/inline-task",permalink:"/content/docs/reference-docs/system-tasks/inline-task",editUrl:"https://github.com/orkes-io/docs/edit/main/docs/reference-docs/system-tasks/inline-task.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"referenceDocsSideBar",previous:{title:"HTTP Task",permalink:"/content/docs/reference-docs/system-tasks/http-task"},next:{title:"JSON JQ Transform Task",permalink:"/content/docs/reference-docs/system-tasks/json-jq-transform-task"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Use Cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inline-task"},"Inline Task"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"type": "INLINE"\n')),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Inline Task helps execute necessary logic at Workflow run-time,\nusing an evaluator. There are two supported evaluators as of now:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value-param"),(0,o.kt)("td",{parentName:"tr",align:null},"Use a parameter directly as the value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"javascript"),(0,o.kt)("td",{parentName:"tr",align:null},"Evaluate Javascript expressions and compute value")))),(0,o.kt)("h3",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"Consider a scenario, we have to run simple evaluations in\nConductor server while creating Workers. Inline task can be used to run these\nevaluations using an evaluator engine."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "inline_task_example",\n  "taskReferenceName": "inline_task_example",\n  "type": "INLINE",\n  "inputParameters": {\n      "value": "${workflow.input.value}",\n      "evaluatorType": "javascript",\n      "expression": "function e() { if ($.value == 1){return {\\"result\\": true}} else { return {\\"result\\": false}}} e();"\n  }\n}\n')),(0,o.kt)("p",null,"Following are the parameters in the above example :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"evaluatorType"')," - Type of the evaluator.\nSupported evaluators: value-param, javascript which evaluates\njavascript expression.\t")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"expression"')," - Expression associated with the type of evaluator.\nFor javascript evaluator, Javascript evaluation engine is used to\nevaluate expression defined as a string. Must return a value.\t"))),(0,o.kt)("p",null,"Besides expression, any of the properties in the input values is accessible as ",(0,o.kt)("inlineCode",{parentName:"p"},"$.value")," for the expression\nto evaluate. "),(0,o.kt)("p",null,"The task output can then be referenced in downstream tasks\nlike: ",(0,o.kt)("inlineCode",{parentName:"p"},'"${inline_test.output.result}"')))}d.isMDXComponent=!0}}]);