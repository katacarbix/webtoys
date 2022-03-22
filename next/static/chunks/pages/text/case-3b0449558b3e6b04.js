(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{2943:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/text/case",function(){return e(9157)}])},9157:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7294),i=e(1132),a=e(9216),s=e(4361),l=e(956),c=["a","about","above","across","after","against","ago","along","alongside","amid","among","amongst","an","and","anti","around","as","aside","at","atop","away","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","despite","down","during","except","for","from","hence","in","including","into","like","nor","notwithstanding","of","onto","or","over","per","regarding","respecting","since","than","the","through","to","toward","towards","under","underneath","unless","unlike","until","unto","upon","versus","via","what","when","where","who","whom","with","within","without"],u=function(n){return n.substr(0,1).toUpperCase()+n.substr(1).toLowerCase()},d=function(n){if(n){if(n.toString().length>3){for(var t=[],e=n.toString().length;e>0;e-=3)t.unshift(n.toString().slice(e-3>=0?e-3:0,e));return t.join(",")}return n.toString()}return null};t.default=function(){var n,t,e=(0,o.useState)(""),h=e[0],p=e[1],f={};null===(n=h.match(/\b\w+\b/g))||void 0===n||n.forEach((function(n){f.hasOwnProperty(n.toLowerCase())?f[n.toLowerCase()]+=1:f[n.toLowerCase()]=1}));var x=Object.keys(f).map((function(n){return{word:n,count:f[n]}})).sort((function(n,t){return n.count<t.count?1:n.count===t.count?n.word.localeCompare(t.word):-1})).map((function(n){return n.word+": "+n.count.toString()})).join("\n"),C={};h.split("").forEach((function(n){C.hasOwnProperty(n.toLowerCase())?C[n.toLowerCase()]+=1:C[n.toLowerCase()]=1}));var w=Object.keys(C).map((function(n){return{char:n,count:C[n]}})).sort((function(n,t){return n.count<t.count?1:n.count===t.count?n.char.localeCompare(t.char):-1})).map((function(n){return n.char+": "+n.count.toString()})).join("\n");return(0,r.jsxs)(i.Z,{title:"Text Inspector and Case Converter",children:[(0,r.jsx)(a.Z,{title:"Convert",body:(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(s.zx,{label:"lowercase",onClick:function(){return p(h.toLowerCase())}}),(0,r.jsx)(s.zx,{label:"UPPERCASE",onClick:function(){return p(h.toUpperCase())}}),(0,r.jsx)(s.zx,{label:"Sentence case",onClick:function(){return p(h.split(". ").map((function(n){return n.split(" ").map((function(n,t){return 0===t||"i"===n.toLowerCase()?u(n):n.toLowerCase()})).join(" ")})).join(". "))}}),(0,r.jsx)(s.zx,{label:"Title Case",onClick:function(){return p(h.split(". ").map((function(n){return n.split(" ").map((function(n,t){return 0!==t&&c.includes(n.toLowerCase())?n.toLowerCase():u(n)})).join(" ")})).join(". "))}}),(0,r.jsx)(s.zx,{label:"camelCase",onClick:function(){return p(h.split(" ").map((function(n,t){return 0===t?n.toLowerCase():u(n)})).join(""))}}),(0,r.jsx)(s.zx,{label:"PascalCase",onClick:function(){return p(h.split(" ").map(u).join(""))}}),(0,r.jsx)(s.zx,{label:"snake_case",onClick:function(){return p(h.toLowerCase().replaceAll(" ","_"))}}),(0,r.jsx)(s.zx,{label:"CONSTANT_CASE",onClick:function(){return p(h.toUpperCase().replaceAll(" ","_"))}}),(0,r.jsx)(s.zx,{label:"kebab-case",onClick:function(){return p(h.toLowerCase().replaceAll(" ","-"))}}),(0,r.jsx)(s.zx,{label:"COBOL-CASE",onClick:function(){return p(h.toUpperCase().replaceAll(" ","-"))}}),(0,r.jsx)(s.zx,{label:"Train-Case",onClick:function(){return p(h.split(" ").map(u).join("-"))}}),(0,r.jsx)(s.zx,{label:"aLtErNaTiNg cAsE",onClick:function(){return p(h.split("").map((function(n,t){return t%2==0?n.toLowerCase():n.toUpperCase()})).join(""))}}),(0,r.jsx)(s.zx,{label:"iNVERSE cASE",onClick:function(){return p(h.split("").map((function(n){return n.charCodeAt(0)<97?n.toLowerCase():n.toUpperCase()})).join(""))}})]})}),(0,r.jsxs)("div",{className:"\n\t\t\t\tgrow\n\t\t\t\tflex\n\t\t\t\tflex-col\n\t\t\t\tmd:flex-row\n\n\t\t\t\titems-stretch\n\t\t\t\tgap-4\n\t\t\t",children:[(0,r.jsx)(a.Z,{title:"Input",controls:[{type:"copy",data:h},{type:"file",callback:function(n){return p(n)}},{type:"clear",onClick:function(){return p("")}}],body:(0,r.jsx)(s.Kx,{value:h,onChange:function(n){return p(n.target.value)},className:"md:grow h-96 md:h-auto"}),className:" grow md:basis-2/3 flex flex-col !md:m-0 "}),(0,r.jsxs)("div",{className:"grow md:basis-1/3",children:[(0,r.jsx)(l.H2,{children:"Statistics"}),(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("div",{children:"Characters:"})," ",(0,r.jsx)("div",{children:d(h.length)}),(0,r.jsx)("div",{children:"Words:"}),"      ",(0,r.jsx)("div",{children:d(h.trim().split(/\s+/).filter((function(n){return n.length>0})).length)}),(0,r.jsx)("div",{children:"Sentences:"}),"  ",(0,r.jsx)("div",{children:d(null===(t=h.match(/\w[.?!](\s|$)/g))||void 0===t?void 0:t.length)}),(0,r.jsx)("div",{children:"Lines:"}),"      ",(0,r.jsx)("div",{children:d(h.split(/\n/).length)}),(0,r.jsx)("div",{children:"Paragraphs:"})," ",(0,r.jsx)("div",{children:d(h.split(/\n/).filter((function(n){return n.trim().length>0})).length)})]}),(0,r.jsx)(l.H2,{className:"mt-3",children:"Word distribution"}),(0,r.jsx)(s.Kx,{value:x,disabled:!0,rows:10}),(0,r.jsx)(l.H2,{className:"mt-3",children:"Character distribution"}),(0,r.jsx)(s.Kx,{value:w,disabled:!0,rows:10})]})]})]})}}},function(n){n.O(0,[702,534,922,278,774,888,179],(function(){return t=2943,n(n.s=t);var t}));var t=n.O();_N_E=t}]);