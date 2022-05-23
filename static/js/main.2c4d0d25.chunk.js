(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(9),r=c.n(n),s=c(2),a=c(1),o=(c(15),c(16),c(10)),i=(c(17),c(7)),u=c.n(i),l=c(0),d=function(e){var t=e.todos,c=e.selectUser,n=e.selectedUserId,r=Object(a.useState)(""),i=Object(s.a)(r,2),d=i[0],j=i[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),O=h[0],p=h[1],f=Object(a.useState)("All"),m=Object(s.a)(f,2),x=m[0],_=m[1],v=Object(a.useState)(!1),y=Object(s.a)(v,2),N=y[0],C=y[1],T=Object(a.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];c=setTimeout.apply(void 0,[e,t].concat(r))}}(p,1e3),[]),U=function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(O.toLowerCase())}));switch(x){case"Active":return e.filter((function(e){return!e.completed}));case"Completed":return e.filter((function(e){return e.completed}));default:return e}}(),L=N?function(e){for(var t=Object(o.a)(e),c=t.length-1;c>0;c-=1){var n=Math.floor(Math.random()*(c+1)),r=[t[n],t[c]];t[c]=r[0],t[n]=r[1]}return t}(U):U;return Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsx)("p",{children:"Search by title"}),Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"text",value:d,onChange:function(e){var t=e.target.value;j(t),T(t)}})}),Object(l.jsxs)("select",{value:x,onChange:function(e){var t=e.target.value;_(t)},className:"TodoList__select",children:[Object(l.jsx)("option",{children:"All"}),Object(l.jsx)("option",{children:"Active"}),Object(l.jsx)("option",{children:"Completed"})]}),Object(l.jsx)("button",{type:"button",onClick:function(){return C((function(e){return!e}))},className:"TodoList__random",children:"Randomize"}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:L.map((function(e){var t=e.userId,r=e.completed,s=e.title,a=e.id;return Object(l.jsxs)("li",{className:u()("TodoList__item",{"TodoList__item--checked":r},{"TodoList__item--unchecked":!r}),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",readOnly:!0}),Object(l.jsx)("p",{children:s})]}),Object(l.jsx)("button",{"data-cy":"userButton",className:u()("TodoList__user-button button",{"TodoList__user-button--selected":t===n}),type:"button",onClick:function(){return c(t)},children:"User ".concat(t)})]},a)}))})})]})},j=(c(19),c(8)),b=c(4),h=c.n(b),O="https://mate.academy/students-api";function p(){return(p=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(j.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/users/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(e){var t=e.userId,c=e.selectUser,n=Object(a.useState)(null),r=Object(s.a)(n,2),o=r[0],i=r[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){(function(e){return f.apply(this,arguments)})(t).then((function(e){i(e)})).catch((function(){b("Can not load user")}))}),[t]),Object(l.jsx)(l.Fragment,{children:o?Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected user: ".concat(o.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:o.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:o.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:o.phone}),Object(l.jsx)("button",{type:"button",onClick:function(){return c(0)},className:"CurrentUser__clear",children:"Clear"})]}):Object(l.jsx)("p",{children:j})})},x=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),o=Object(s.a)(r,2),i=o[0],u=o[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),h=b[0],O=b[1];Object(a.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){u(e)})).catch((function(){O("Can not load todos")}))}),[]);var f=function(e){n(e)};return Object(l.jsx)("div",{className:"App",children:0===h.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(d,{todos:i,selectUser:f,selectedUserId:c})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(m,{userId:c,selectUser:f}):"No user selected"})})]}):Object(l.jsx)("p",{className:"App__error",children:h})})};r.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2c4d0d25.chunk.js.map