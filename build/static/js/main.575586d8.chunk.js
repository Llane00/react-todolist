/*! For license information please see main.575586d8.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],[,,,,,,,function(t,e,n){var c;!function(){"use strict";function i(t,e){var n;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!i.notNeeded(t)){for(var c=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,a=0,s=c.length;a<s;a++)o[c[a]]=l(o[c[a]],o);r&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,c){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,c):i.call(t,e,n,c)},t.addEventListener=function(e,n,c){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),c):i.call(t,e,n,c)}),"function"===typeof t.onclick&&(n=t.onclick,t.addEventListener("click",(function(t){n(t)}),!1),t.onclick=null)}function l(t,e){return function(){return t.apply(e,arguments)}}}var o=navigator.userAgent.indexOf("Windows Phone")>=0,r=navigator.userAgent.indexOf("Android")>0&&!o,a=/iP(ad|hone|od)/.test(navigator.userAgent)&&!o,s=a&&/OS 4_\d(_\d)?/.test(navigator.userAgent),l=a&&/OS [6-7]_\d/.test(navigator.userAgent),u=navigator.userAgent.indexOf("BB10")>0;i.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(a&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},i.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!r;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},i.prototype.sendClick=function(t,e){var n,c;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),c=e.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},i.prototype.determineEventType=function(t){return r&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},i.prototype.focus=function(t){var e;a&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type&&"email"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},i.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},i.prototype.onTouchStart=function(t){var e,n,c;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],a){if((c=window.getSelection()).rangeCount&&!c.isCollapsed)return!0;if(!s){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},i.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},i.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},i.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(t){var e,n,c,i,o,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,l&&(o=t.changedTouches[0],(u=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||u).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(c=u.tagName.toLowerCase())){if(e=this.findControl(u)){if(this.focus(u),r)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-n>100||a&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),a&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return!(!a||s||!(i=u.fastClickScrollParent)||i.fastClickLastScrollTop===i.scrollTop)||(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},i.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},i.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},i.prototype.destroy=function(){var t=this.layer;r&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(t){var e,n,c;if("undefined"===typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!r)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(u&&(c=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&c[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},i.attach=function(t,e){return new i(t,e)},void 0===(c=function(){return i}.call(e,n,e,t))||(t.exports=c)}()},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(6),o=n.n(i),r=n(8),a=n(2),s=(n(13),n(14),n(0)),l=function(t){var e=t.inputVisible,n=t.addItem,i=Object(c.useRef)();return Object(s.jsx)(s.Fragment,{children:e&&Object(s.jsxs)("div",{className:"input-wrapper",children:[Object(s.jsx)("input",{ref:i,type:"text",placeholder:"\u8bf7\u8f93\u5165\u5f85\u529e\u4e8b\u9879"}),Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=i.current.value.trim();0!==t.length&&(n(t),i.current.value="")},children:"\u589e\u52a0"})]})})},u=(n(16),function(t){var e=t.switchInputVisible;return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"\u5f85\u529e\u4e8b\u9879"}),Object(s.jsx)("span",{className:"icon",onClick:e,children:"+"})]})}),d=(n(17),function(t){var e=t.data,n=t.openCheckModal,c=t.openEditModal,i=t.completeItem,o=t.removeItem;return Object(s.jsxs)("li",{className:"todo-item",children:[Object(s.jsx)("div",{className:"check-box",children:Object(s.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return i(e.id)}})}),Object(s.jsx)("span",{className:"content",style:{textDecoration:e.completed?"line-through":"none"},children:e.content}),Object(s.jsxs)("div",{className:"btn-group",children:[Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){return n(e.id)},children:"\u67e5\u770b"}),Object(s.jsx)("button",{className:"btn btn-warning",onClick:function(){return c(e.id)},children:"\u7f16\u8f91"}),Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){return o(e.id)},children:"\u5220\u9664"})]})]})}),h=(n(18),function(t){var e=t.modalVisible,n=t.modalTitle,c=t.children;return Object(s.jsx)(s.Fragment,{children:e?Object(s.jsx)("div",{className:"modal",children:Object(s.jsxs)("div",{className:"inner",children:[Object(s.jsx)("div",{className:"m-header",children:n}),Object(s.jsx)("div",{className:"content-wrap",children:c})]})}):""})});function m(t){return t<10?"0"+t:t}function p(t){var e=new Date(t),n=e.getFullYear(),c=e.getMonth()+1,i=e.getDay(),o=m(e.getHours()),r=m(e.getMinutes()),a=m(e.getSeconds());return"".concat(n,"\u5e74").concat(c,"\u6708").concat(i,"\u65e5 ").concat(o,":").concat(r,":").concat(a)}n(19);var f=function(t){var e=t.checkModalVisible,n=t.data,c=t.closeCheckModal;return Object(s.jsxs)(h,{modalVisible:e,modalTitle:"\u67e5\u770b\u4e8b\u4ef6",children:[Object(s.jsxs)("p",{className:"topic",children:["\u65f6\u95f4\uff1a",p(n.id)]}),Object(s.jsxs)("p",{className:"topic",children:["\u5185\u5bb9\uff1a",n.content]}),Object(s.jsxs)("p",{className:"topic",children:["\u72b6\u6001\uff1a",n.completed?"\u5b8c\u6210":"\u672a\u5b8c\u6210"]}),Object(s.jsx)("button",{className:"btn btn-primary confirm-btn",onClick:c,children:"\u786e\u5b9a"})]})},b=(n(20),function(t){var e=t.editModalVisible,n=t.data,i=t.submitData,o=Object(c.useRef)(),r=Object(c.useRef)();return Object(s.jsxs)(h,{modalVisible:e,modalTitle:"\u7f16\u8f91\u4e8b\u4ef6",children:[Object(s.jsxs)("p",{className:"topic",children:["\u65f6\u95f4\uff1a",p(n.id)]}),Object(s.jsx)("textarea",{ref:o,defaultValue:n.content,className:"text-area"}),Object(s.jsxs)("p",{className:"topic",children:["\u72b6\u6001\uff1a",Object(s.jsx)("input",{ref:r,type:"checkbox",defaultChecked:!!n.completed})]}),Object(s.jsx)("button",{className:"btn btn-primary confirm-btn",onClick:function(){var t=o.current.value.trim();if(0!==t.len){var e={id:(new Date).getTime(),content:t,completed:r.current.checked};i(e,n.id)}else o.current.value=n.content},children:"\u63d0\u4ea4"})]})}),v=(n(21),function(){return Object(s.jsx)("div",{className:"nodatatip-wrapper",children:Object(s.jsx)("span",{children:"\u8bf7\u6dfb\u52a0\u5f85\u529e\u4e8b\u9879"})})});var g=function(){var t=Object(c.useState)(!1),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([]),h=Object(a.a)(o,2),m=h[0],p=h[1],g=Object(c.useState)(!1),j=Object(a.a)(g,2),k=j[0],O=j[1],E=Object(c.useState)(!1),C=Object(a.a)(E,2),x=C[0],y=C[1],T=Object(c.useState)({}),S=Object(a.a)(T,2),w=S[0],N=S[1];Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todoData")||"[]");return p(t),function(){}}),[]),Object(c.useEffect)((function(){localStorage.setItem("todoData",JSON.stringify(m))}),[m]);var M=Object(c.useCallback)((function(t){var e={id:(new Date).getTime(),content:t,completed:!1};p((function(t){return[].concat(Object(r.a)(t),[e])})),i(!1)}),[]),L=Object(c.useCallback)((function(t){N(m.filter((function(e){return e.id===t}))[0]),O(!0)}),[m]),D=Object(c.useCallback)((function(){O(!1)}),[]),I=Object(c.useCallback)((function(t){N(m.filter((function(e){return e.id===t}))[0]),y(!0)}),[m]),A=Object(c.useCallback)((function(t,e){p((function(n){return n.map((function(n){return n.id===e&&(n=t),n}))})),y(!1)}),[]),P=Object(c.useCallback)((function(t){p((function(e){return e.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))}))}),[]),V=Object(c.useCallback)((function(t){p((function(e){return e.filter((function(e){return e.id!==t}))}))}),[]);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(f,{checkModalVisible:k,data:w,closeCheckModal:D}),Object(s.jsx)(b,{editModalVisible:x,data:w,submitData:A}),Object(s.jsx)(u,{switchInputVisible:function(){return i(!n)}}),Object(s.jsx)(l,{inputVisible:n,addItem:M}),m&&0!==m.length?Object(s.jsx)("ul",{className:"todo-list",children:m&&m.map((function(t){return Object(s.jsx)(d,{data:t,openCheckModal:L,openEditModal:I,completeItem:P,removeItem:V},t.id)}))}):Object(s.jsx)(v,{})]})},j=(n(22),n(23),n(24),n(7)),k=n.n(j);document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px",window.addEventListener("load",(function(){k.a.attach(document.body)}),!1),document.documentElement.addEventListener("touchmove",(function(t){t.target.length>1&&t.preventDefault()})),o.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.575586d8.chunk.js.map