"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3085],{7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7294),a=t(6010),c=t(6698),o=t(3905),l=t(2238),i=t(571),u=t(941),s="mdxPageWrapper_3qD3";var m=function(e){var n=e.content,t=n.frontMatter,m=n.metadata,f=t.title,d=t.description,v=t.wrapperClassName,h=t.hide_table_of_contents,p=m.permalink;return r.createElement(c.Z,{title:f,description:d,permalink:p,wrapperClassName:null!=v?v:u.kM.wrapper.mdxPages,pageClassName:u.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!h&&"col--8")},r.createElement(o.Zo,{components:l.Z},r.createElement(n,null))),!h&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:n.toc})))))}},571:function(e,n,t){t.d(n,{r:function(){return d},Z:function(){return v}});var r=t(7294),a=t(6010),c=t(941);function o(e){var n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e){var n,t=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return o(e).top>=t}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:null!=(n=r[r.indexOf(a)-1])?n:null:r[r.length-1]}function i(){var e=(0,r.useRef)(0),n=(0,c.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var u=function(e){var n=(0,r.useRef)(void 0),t=i();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=l({anchorTopOffset:t.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])},s="tableOfContents_35-E",m="table-of-contents__link",f={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function d(e){var n=e.toc,t=e.isChild;return n.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var n=e.toc;return u(f),r.createElement("div",{className:(0,a.Z)(s,"thin-scrollbar")},r.createElement(d,{toc:n}))}}}]);