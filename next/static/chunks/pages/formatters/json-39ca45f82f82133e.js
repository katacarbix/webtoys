(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{6962:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formatters/json",function(){return n(1685)}])},1685:function(t,e,n){"use strict";n.r(e);var r=n(5893),a=n(7294),l=n(2688),o=n(1132),s=n(9216),i=n(4361),u=n(5317),c=n(5006),f=n.n(c);function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,l=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);o=!0);}catch(i){s=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return l}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(){var t=p((0,l._)("json-indent","tab"),2),e=t[0],n=t[1],c=(0,a.useState)(""),y=c[0],g=c[1],b="";try{if(0===y.length)b="";else switch(e){case"2":b=JSON.stringify(f().parse(y),null,2);break;case"4":b=JSON.stringify(f().parse(y),null,4);break;case"tab":b=JSON.stringify(f().parse(y),null,"\t")}}catch(d){console.error(d)}return(0,r.jsxs)(o.Z,{title:"JSON Formatter",children:[(0,r.jsx)(s.Z,{type:"config",items:[{icon:u.GyR,name:"Indentation",description:"",control:(0,r.jsx)(i.Ph,{value:e,options:[{key:"2",value:"2 spaces"},{key:"4",value:"4 spaces"},{key:"tab",value:"Tab"}],onChange:function(t){return n(t.target.value)}})}]}),(0,r.jsxs)("div",{className:"\n\t\t\t\t\tgrow\n\t\t\t\t\tflex\n\t\t\t\t\tflex-col\n\t\t\t\t\tmd:flex-row\n\t\t\t\t\tlg:flex-col\n\t\t\t\t\txl:flex-row\n\n\t\t\t\t\titems-stretch\n\t\t\t\t\tgap-6\n\t\t\t\t",children:[(0,r.jsx)(s.Z,{title:"Input",controls:[{type:"file",callback:function(t){return g(t)}},{type:"clear",onClick:function(){return g("")}}],body:(0,r.jsx)(i.EK,{value:y,language:"json",editable:!0,onChange:function(t){return g(t.target.value)},className:"grow"}),className:"grow flex flex-col basis-1/2 !m-0"}),(0,r.jsx)(s.Z,{title:"Output",controls:[{type:"copy",data:b}],body:(0,r.jsx)(i.EK,{value:b,language:"json",editable:!1,className:"grow"}),className:"grow flex flex-col basis-1/2 !m-0"})]})]})}}},function(t){t.O(0,[702,534,922,6,278,774,888,179],(function(){return e=6962,t(t.s=e);var e}));var e=t.O();_N_E=e}]);