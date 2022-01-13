"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1733],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6993:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Searching Workflows",u={unversionedId:"how-tos/searching-workflows",id:"how-tos/searching-workflows",isDocsHomePage:!1,title:"Searching Workflows",description:"In this article we will learn how to search through workflow executions via the UI.",source:"@site/docs/how-tos/searching-workflows.md",sourceDirName:"how-tos",slug:"/how-tos/searching-workflows",permalink:"/content/docs/how-tos/searching-workflows",editUrl:"https://github.com/orkes-io/docs/edit/main/docs/how-tos/searching-workflows.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"howtoSideBar",previous:{title:"Starting Workflow Executions",permalink:"/content/docs/how-tos/starting-workflows"},next:{title:"View Workflow Executions",permalink:"/content/docs/how-tos/view-workflow-executions"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"UI Workflows View",id:"ui-workflows-view",children:[{value:"Basic Search",id:"basic-search",children:[]},{value:"Find by Tasks",id:"find-by-tasks",children:[]}]}],p={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"searching-workflows"},"Searching Workflows"),(0,o.kt)("p",null,"In this article we will learn how to search through workflow executions via the UI."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Conductor app and UI installed and running in an environment. If required we can look at the following options to get\nan environment up and running."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/content/docs/getting-started/install/running-locally"},"Build and Run Conductor Locally")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/content/docs/getting-started/install/running-locally-docker"},"Running via Docker Compose"))))),(0,o.kt)("h2",{id:"ui-workflows-view"},"UI Workflows View"),(0,o.kt)("p",null,"Open the home page of the UI installation. It will take you to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow Executions")," view. This is where we can look\nat available workflow executions."),(0,o.kt)("h3",{id:"basic-search"},"Basic Search"),(0,o.kt)("p",null,"The following fields are available for searching for workflows."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Search Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Worflow Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter workflows by the configured name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Workflow ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter to a specific workflow by its id")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Status"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter by status - available options are presented as a multi-select option")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Start Time - From"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter workflows that started on or after the time specified")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Start Time - To"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter workflows that started on or before the time specified")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lookback (days)"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter workflows that ran in the last given number of days")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Free Text Query"),(0,o.kt)("td",{parentName:"tr",align:null},"If you have indexing enabled, you can query by values that was part of your workflow inputs and outputs")))),(0,o.kt)("p",null,"The table listing has options to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select columns for display"),(0,o.kt)("li",{parentName:"ol"},"Sort by column value")),(0,o.kt)("p",null,"At the bottom of the table, there are options to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select number of rows per page"),(0,o.kt)("li",{parentName:"ol"},"Navigating through pages")),(0,o.kt)("h3",{id:"find-by-tasks"},"Find by Tasks"),(0,o.kt)("p",null,"In addition to the options listed in ",(0,o.kt)("strong",{parentName:"p"},"Basic Search")," view, we have the following options in the ",(0,o.kt)("strong",{parentName:"p"},"Find by Tasks")," view."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Search Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Include Task ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter workflows that contains a task with this id")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Include Task Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Use this field to filter workflows that contains a task with name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Free Text in Tasks"),(0,o.kt)("td",{parentName:"tr",align:null},"If you have indexing enabled, you can query by values that was part of your workflow task inputs and outputs")))))}d.isMDXComponent=!0}}]);