"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1195],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=c(n),d=o,m=k["".concat(s,".").concat(d)]||k[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return k}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Build a Go Task Worker",c={unversionedId:"how-tos/build-a-golang-task-worker",id:"how-tos/build-a-golang-task-worker",isDocsHomePage:!1,title:"Build a Go Task Worker",description:"Install",source:"@site/docs/how-tos/build-a-golang-task-worker.md",sourceDirName:"how-tos",slug:"/how-tos/build-a-golang-task-worker",permalink:"/content/docs/how-tos/build-a-golang-task-worker",editUrl:"https://github.com/orkes-io/docs/edit/main/docs/how-tos/build-a-golang-task-worker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"howtoSideBar",previous:{title:"Build a Python Task Worker",permalink:"/content/docs/how-tos/build-a-python-task-worker"},next:{title:"Conductor Configurations",permalink:"/content/docs/how-tos/conductor-configurations"}},u=[{value:"Install",id:"install",children:[]},{value:"Implementing a Task a Worker",id:"implementing-a-task-a-worker",children:[]},{value:"Worker Polling",id:"worker-polling",children:[{value:"<code>NewConductorWoker</code> parameters",id:"newconductorwoker-parameters",children:[]}]}],p={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-a-go-task-worker"},"Build a Go Task Worker"),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"go get github.com/netflix/conductor/client/go\n")),(0,a.kt)("p",null,"This will create a Go project under $GOPATH/src and download any dependencies."),(0,a.kt)("h2",{id:"implementing-a-task-a-worker"},"Implementing a Task a Worker"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"task"),"package provies the types used to implement the worker.  Here is a reference worker implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package task\n\nimport (\n    "fmt"\n)\n\n// Implementation for "task_1"\nfunc Task_1_Execution_Function(t *task.Task) (taskResult *task.TaskResult, err error) {\n    log.Println("Executing Task_1_Execution_Function for", t.TaskType)\n\n    //Do some logic\n    taskResult = task.NewTaskResult(t)\n    \n    output := map[string]interface{}{"task":"task_1", "key2":"value2", "key3":3, "key4":false}\n    taskResult.OutputData = output\n    taskResult.Status = "COMPLETED"\n    err = nil\n\n    return taskResult, err\n}\n')),(0,a.kt)("h2",{id:"worker-polling"},"Worker Polling"),(0,a.kt)("p",null,"Here is an example that shows how to start polling for tasks after defining the tasks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/netflix/conductor/client/go"\n    "github.com/netflix/conductor/client/go/task/sample"\n)\n\nfunc main() {\n    c := conductor.NewConductorWorker("http://localhost:8080", 1, 10000)\n\n    c.Start("task_1", "", sample.Task_1_Execution_Function, false)\n    c.Start("task_2", "mydomain", sample.Task_2_Execution_Function, true)\n}\n')),(0,a.kt)("h3",{id:"newconductorwoker-parameters"},(0,a.kt)("inlineCode",{parentName:"h3"},"NewConductorWoker")," parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"baseUrl: Server address.  "),(0,a.kt)("li",{parentName:"ol"},"threadCount: No. of threads.  Number of threads should be at-least same as the number of workers"),(0,a.kt)("li",{parentName:"ol"},"pollingInterval: Time in millisecond between subsequent polls")))}k.isMDXComponent=!0}}]);