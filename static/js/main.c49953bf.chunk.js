(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){"use strict";e.r(n);var c=e(1),s=e.n(c),l=e(7),o=e.n(l),i=(e(12),e(3)),u=e(5),a=(e(13),e(14),e(0)),r=function(t){var n=t.setResult,e=t.outputs,c=t.setOutputs,s=t.inputs,l=t.setInputs,o=t.calculator,i=function(t){isNaN(t.target.textContent)&&"."!==t.target.textContent?isNaN(t.target.textContent)&&"="!==t.target.textContent&&"."!==t.target.textContent&&"/"!==e[e.length-1]&&"*"!==e[e.length-1]&&"+"!==e[e.length-1]&&"-"!==e[e.length-1]?r(t.target.textContent):"="===t.target.textContent&&(j(),o()):u(t.target.textContent)},u=function(t){l(s+t)},r=function(t){e.push(s,t),console.log(e),l("")},j=function(){e.push(s),l("")};return Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{onClick:function(){l(""),c([]),n(null)},className:"ac",children:"AC"}),Object(a.jsx)("button",{onClick:function(){l("")},className:"c",children:"C"}),Object(a.jsx)("button",{onClick:i,children:"1"}),Object(a.jsx)("button",{onClick:i,children:"2"}),Object(a.jsx)("button",{onClick:i,children:"3"}),Object(a.jsx)("button",{onClick:i,className:"sp",children:"/"}),Object(a.jsx)("button",{onClick:i,children:"4"}),Object(a.jsx)("button",{onClick:i,children:"5"}),Object(a.jsx)("button",{onClick:i,children:"6"}),Object(a.jsx)("button",{onClick:i,className:"sp",children:"*"}),Object(a.jsx)("button",{onClick:i,children:"7"}),Object(a.jsx)("button",{onClick:i,children:"8"}),Object(a.jsx)("button",{onClick:i,children:"9"}),Object(a.jsx)("button",{onClick:i,className:"sp",children:"+"}),Object(a.jsx)("button",{onClick:i,children:"0"}),Object(a.jsx)("button",{onClick:i,children:"."}),Object(a.jsx)("button",{onClick:i,children:"="}),Object(a.jsx)("button",{onClick:i,className:"sp",children:"-"})]})},j=(e(16),function(t){var n=t.inputs,e=t.result;return Object(a.jsxs)("div",{className:"results",children:[Object(a.jsx)("div",{className:"input",children:n}),Object(a.jsx)("div",{className:"final-result",children:e})]})});var b=function(){var t=Object(c.useState)(""),n=Object(u.a)(t,2),e=n[0],s=n[1],l=Object(c.useState)([]),o=Object(u.a)(l,2),b=o[0],d=o[1],p=Object(c.useState)(null),O=Object(u.a)(p,2),h=O[0],x=O[1],f=function(t){for(;t.includes("/");){var n=t.indexOf("/"),e=parseFloat(t[n-1]),c=parseFloat(t[n+1]);t.splice(n-1,3,e/c)}return t},C=function(t){for(;t.includes("*");){var n=t.indexOf("*"),e=parseFloat(t[n-1]),c=parseFloat(t[n+1]);t.splice(n-1,3,e*c)}return t},g=function(t){for(;t.includes("+");){var n=t.indexOf("+"),e=parseFloat(t[n-1]),c=parseFloat(t[n+1]);t.splice(n-1,3,e+c)}return t},k=function(t){for(;t.includes("-");){var n=t.indexOf("-"),e=parseFloat(t[n-1]),c=parseFloat(t[n+1]);t.splice(n-1,3,e-c)}return t};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{inputs:e,result:h}),Object(a.jsx)(r,{setResult:x,calculator:function(){console.log(b),("/"===b[b.length-1]||"*"===b[b.length-1]|"+"===b[b.length-1]||"-"===b[b.length-1])&&(b.push("0"),console.log(b)),b.includes("/")&&d.apply(void 0,Object(i.a)(b).concat([f(b)])),b.includes("*")&&d.apply(void 0,Object(i.a)(b).concat([C(b)])),b.includes("-")&&d.apply(void 0,Object(i.a)(b).concat([k(b)])),b.includes("+")&&d.apply(void 0,Object(i.a)(b).concat([g(b)])),1===b.length&&(x(b[0]),s(b[0]),d([]))},outputs:b,setOutputs:d,setInputs:s,inputs:e})]})},d=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,c=n.getFID,s=n.getFCP,l=n.getLCP,o=n.getTTFB;e(t),c(t),s(t),l(t),o(t)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),d()}],[[17,1,2]]]);
//# sourceMappingURL=main.c49953bf.chunk.js.map