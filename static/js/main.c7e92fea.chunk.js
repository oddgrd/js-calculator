(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},35:function(t,e){},47:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c(2),r=c.n(n),l=c(17),i=c.n(l),s=(c(26),c(5));c(27);var o=function(t){var e=t.input,c=t.calculation;return Object(a.jsxs)("div",{className:"display-div",children:[Object(a.jsx)("p",{className:"cal",children:c}),Object(a.jsx)("p",{className:"inp",id:"display",children:e})]})};var u=function(t){var e=t.id,c=t.number,n=t.input,r=t.setInput,l=t.setCalculation,i=t.calculation,s=t.total,o=t.setPrev,u=t.setTotal,d=t.prev;return Object(a.jsx)("button",{id:e,className:"number",onClick:function(){return t=c,void(n.length>=24?r("     DIGIT LIMIT MET    "):("."===t&&-1!==n.indexOf(".")||("0"===n&&"."!==t?(r(t),l(t)):n===s&&"."!==t?(r(t),l(t),u("")):/[+x/-]/.test(d)&&"."===t?(r(n.concat("0.")),l(i.concat("0."))):(r(n.concat(t)),l(i.concat(t)))),o(t)));var t},style:{gridArea:"".concat(e)},children:c})};var d=function(t){var e=t.id,c=t.input,n=t.setInput,r=t.setCalculation,l=t.calculation,i=t.total,s=t.prev,o=t.setPrev,u="add"===e?"+":"subtract"===e?"-":"multiply"===e?"x":"divide"===e?"/":null;return Object(a.jsx)("button",{id:e,className:"operator",style:{gridArea:"".concat(e)},onClick:function(){return t=u,"0"===c?(n(t),r(t)):c.toString()===i.toString()?(n(t),r(i.concat(t))):/[+x/-]/.test(s)&&!/-/.test(t)?(n(t),/\d/.test(l.charAt(l.length-2))?r(l.slice(0,l.length-1).concat(t)):r(l.slice(0,l.length-2).concat(t))):(r(l.concat(t)),n(t)),void o(t);var t},children:u})},j=c(46),p=j.evaluate,v=j.round;var b=function(t){var e=t.id,c=t.setInput,n=t.setCalculation,r=t.calculation,l=t.total,i=t.setTotal,s=t.setPrev,o="equals"===e?"=":"AC";return Object(a.jsx)("button",{id:e,className:"operator",style:{gridArea:"".concat(e)},onClick:function(){return function(){if("clear"===e)c("0"),n(""),s(""),l&&i("");else if(r&&!/[/x]/.test(r.charAt(0))){var t=r.replace(/x/g,"*");if(t&&/[+*/-]/.test(t.slice(t.length-1)))t=t.slice(0,t.length-1);else if(!/=/.test(t)){var a=v(p(t),4).toString();i(a),c(a),n(r.concat("=",a)),s("")}}}()},children:o})},h=["add","subtract","multiply","divide"],O=["equals","clear"];var x=function(t){var e=t.input,c=t.setInput,n=t.setCalculation,r=t.calculation,l=t.total,i=t.setTotal,s=t.prev,o=t.setPrev;return Object(a.jsxs)(a.Fragment,{children:[h.map((function(t,i){return Object(a.jsx)(d,{id:t,input:e,setInput:c,setCalculation:n,calculation:r,total:l,prev:s,setPrev:o},i)})),O.map((function(t,e){return Object(a.jsx)(b,{id:t,setInput:c,setCalculation:n,calculation:r,total:l,setTotal:i,setPrev:o},e)}))]})},f=[["seven","7"],["eight","8"],["nine","9"],["four","4"],["five","5"],["six","6"],["one","1"],["two","2"],["three","3"],["zero","0"],["decimal","."]];var m=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),c=e[0],r=e[1],l=Object(n.useState)("0"),i=Object(s.a)(l,2),d=i[0],j=i[1],p=Object(n.useState)(""),v=Object(s.a)(p,2),b=v[0],h=v[1],O=Object(n.useState)(""),m=Object(s.a)(O,2),g=m[0],I=m[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"calc-container",children:[Object(a.jsx)(o,{input:d,calculation:c}),Object(a.jsxs)("div",{className:"grid-container",children:[f.map((function(t,e){return Object(a.jsx)(u,{id:t[0],number:t[1],input:d,setInput:j,calculation:c,setCalculation:r,setTotal:h,total:b,prev:g,setPrev:I},e)})),Object(a.jsx)(x,{input:d,setInput:j,calculation:c,setCalculation:r,total:b,setTotal:h,prev:g,setPrev:I})]}),Object(a.jsx)("h5",{className:"creator",children:Object(a.jsx)("a",{href:"https://github.com/oddgrd",target:"_blank",rel:"noreferrer",children:"by Oddgrd"})})]})})},g=c(20),I=c.n(g);i.a.render(Object(a.jsxs)(r.a.StrictMode,{children:[Object(a.jsx)(I.a,{}),Object(a.jsx)(m,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c7e92fea.chunk.js.map