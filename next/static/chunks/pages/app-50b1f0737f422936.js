(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{6363:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(413)}])},413:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return E}});var n=r(5893),o=r(4298),i=r(7294),s=r(1876).Buffer;const a=["light","dark"],f="(prefers-color-scheme: dark)",u="undefined"==typeof window,h=(0,i.createContext)({setTheme:t=>{},themes:[]}),c=({forcedTheme:t,disableTransitionOnChange:e=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:o="theme",themes:s=["light","dark"],defaultTheme:u=(r?"system":"light"),attribute:c="data-theme",value:m,children:d,nonce:w})=>{const[v,b]=(0,i.useState)((()=>p(o,u))),[E,A]=(0,i.useState)((()=>p(o))),x=m?Object.values(m):s,B=(0,i.useCallback)((t=>{let o=t;"system"===t&&r&&(o=g());const i=m?m[o]:o,s=e?y():null,f=document.documentElement;if("class"===c?(f.classList.remove(...x),i&&f.classList.add(i)):i?f.setAttribute(c,i):f.removeAttribute(c),n){const t=a.includes(u)?u:null,e=a.includes(o)?o:t;f.style.colorScheme=e}null==s||s()}),[]),T=(0,i.useCallback)((t=>{b(t);try{localStorage.setItem(o,t)}catch(t){}}),[t]),S=(0,i.useCallback)((e=>{const n=g(e);A(n),"system"===v&&r&&!t&&B("system")}),[v,t]);return(0,i.useEffect)((()=>{const t=window.matchMedia(f);return t.addListener(S),S(t),()=>t.removeListener(S)}),[S]),(0,i.useEffect)((()=>{const t=t=>{t.key===o&&T(t.newValue||u)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)}),[T]),(0,i.useEffect)((()=>{B(null!=t?t:v)}),[t,v]),i.createElement(h.Provider,{value:{theme:v,setTheme:T,forcedTheme:t,resolvedTheme:"system"===v?E:v,themes:r?[...s,"system"]:s,systemTheme:r?E:void 0}},i.createElement(l,{forcedTheme:t,disableTransitionOnChange:e,enableSystem:r,enableColorScheme:n,storageKey:o,themes:s,defaultTheme:u,attribute:c,value:m,children:d,attrs:x,nonce:w}),d)},l=(0,i.memo)((({forcedTheme:t,storageKey:e,attribute:r,enableSystem:n,enableColorScheme:s,defaultTheme:u,value:h,attrs:c,nonce:l})=>{const p="system"===u,y="class"===r?`var d=document.documentElement.classList;d.remove(${c.map((t=>`'${t}'`)).join(",")});`:`var d=document.documentElement;var n='${r}';var s = 'setAttribute';`,g=s?a.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",d=(t,e=!1,n=!0)=>{const o=h?h[t]:t,i=e?t+"|| ''":`'${o}'`;let f="";return s&&n&&!e&&a.includes(t)&&(f+=`d.style.colorScheme = '${t}';`),"class"===r?f+=e||o?`d.add(${i})`:"null":o&&(f+=`d[s](n, ${i})`),f},w=t?`!function(){${y}${d(t)}}()`:n?`!function(){try {${y}var e=localStorage.getItem('${e}');if("system"===e||(!e&&${p})){var t="${f}",m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${h?`var x=${JSON.stringify(h)};`:""}${d(h?"x[e]":"e",!0)}}${p?"":"else{"+d(u,!1,!1)+"}"}${g}}catch(e){}}()`:`!function(){try{${y}var e=localStorage.getItem("${e}");if(e){${h?`var x=${JSON.stringify(h)};`:""}${d(h?"x[e]":"e",!0)}}else{${d(u,!1,!1)};}${g}}catch(t){}}();`,v="data:text/javascript;base64,"+m(w);return i.createElement(o.default,{id:"next-themes-script",strategy:"beforeInteractive",src:v,nonce:l})}),(()=>!0)),p=(t,e)=>{if(u)return;let r;try{r=localStorage.getItem(t)||void 0}catch(t){}return r||e},y=()=>{const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(t)}),1)}},g=t=>(t||(t=window.matchMedia(f)),t.matches?"dark":"light"),m=t=>u?s.from(t).toString("base64"):btoa(t);var d=r(9008),w=function(){return(0,n.jsxs)(d.default,{children:[(0,n.jsx)("title",{children:"WebToys"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-title",content:"WebToys"}),(0,n.jsx)("meta",{name:"application-name",content:"WebToys"}),(0,n.jsx)("meta",{name:"description",content:"A Swiss Army knife for developers."}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/images/apple-touch-icon-60x60.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/images/apple-touch-icon-76x76.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/images/apple-touch-icon-120x120.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/apple-touch-icon-152x152.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/apple-touch-icon-180x180.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/images/safari-pinned-tab.svg",color:"#475569"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#1e293b"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#475569"}),(0,n.jsx)("link",{rel:"manifest",href:"/manifest.json"})]})};r(906);function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){v(t,e,r[e])}))}return t}var E=function(t){var e=t.Component,r=t.pageProps;return(0,n.jsxs)(c,{attribute:"class",defaultTheme:"system",disableTransitionOnChange:!0,children:[(0,n.jsx)(w,{}),(0,n.jsx)(e,b({},r))]})}},1876:function(t){!function(){var e={991:function(t,e){"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=f(t),s=i[0],a=i[1],u=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,a)),h=0,c=a>0?s-4:s;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],u[h++]=e>>16&255,u[h++]=e>>8&255,u[h++]=255&e;2===a&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,u[h++]=255&e);1===a&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,u[h++]=e>>8&255,u[h++]=255&e);return u},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=16383,a=0,f=n-o;a<f;a+=s)i.push(h(t,a,a+s>f?f:a+s));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=i.length;s<a;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function u(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function h(t,e,r){for(var n,o=[],i=e;i<r;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(u(n));return o.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},293:function(t,e,r){"use strict";var n=r(991),o=r(759),i="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50;var s=2147483647;function a(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"===typeof t){if("string"===typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return u(t,e,r)}function u(t,e,r){if("string"===typeof t)return function(t,e){"string"===typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|g(t,e),n=a(r),o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(F(t,ArrayBuffer)||t&&F(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!==typeof SharedArrayBuffer&&(F(t,SharedArrayBuffer)||t&&F(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);var o=function(t){if(f.isBuffer(t)){var e=0|y(t.length),r=a(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!==typeof t.length||Y(t.length)?a(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(o)return o;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return h(t),a(t<0?0:0|y(t))}function l(t){for(var e=t.length<0?0:0|y(t.length),r=a(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,f.prototype),n}function y(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function g(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||F(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return z(t).length;default:if(o)return n?-1:N(t).length;e=(""+e).toLowerCase(),o=!0}}function m(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,r);case"utf8":case"utf-8":return C(this,e,r);case"ascii":return k(this,e,r);case"latin1":case"binary":return O(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function d(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,o){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"===typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,o);if("number"===typeof e)return e&=255,"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function v(t,e,r,n,o){var i,s=1,a=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,f/=2,r/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var h=-1;for(i=r;i<a;i++)if(u(t,i)===u(e,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===f)return h*s}else-1!==h&&(i-=i-h),h=-1}else for(r+f>a&&(r=a-f),i=r;i>=0;i--){for(var c=!0,l=0;l<f;l++)if(u(t,i+l)!==u(e,l)){c=!1;break}if(c)return i}return-1}function b(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(Y(a))return s;t[r+s]=a}return s}function E(t,e,r,n){return D(N(e,t.length-r),t,r,n)}function A(t,e,r,n){return D(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function x(t,e,r,n){return A(t,e,r,n)}function B(t,e,r,n){return D(z(e),t,r,n)}function T(t,e,r,n){return D(function(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=(r=t.charCodeAt(s))>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function S(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function C(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,a,f,u=t[o],h=null,c=u>239?4:u>223?3:u>191?2:1;if(o+c<=r)switch(c){case 1:u<128&&(h=u);break;case 2:128===(192&(i=t[o+1]))&&(f=(31&u)<<6|63&i)>127&&(h=f);break;case 3:i=t[o+1],s=t[o+2],128===(192&i)&&128===(192&s)&&(f=(15&u)<<12|(63&i)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],128===(192&i)&&128===(192&s)&&128===(192&a)&&(f=(15&u)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=c}return j(n)}e.kMaxLength=s,f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return u(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return function(t,e,r){return h(t),t<=0?a(t):void 0!==e?"string"===typeof r?a(t).fill(e,r):a(t).fill(e):a(t)}(t,e,r)},f.allocUnsafe=function(t){return c(t)},f.allocUnsafeSlow=function(t){return c(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(F(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),F(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(F(i,Uint8Array)&&(i=f.from(i)),!f.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)d(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},f.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?C(this,0,t):m.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(f.prototype[i]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,o){if(F(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),a=Math.min(i,s),u=this.slice(n,o),h=t.slice(e,r),c=0;c<a;++c)if(u[c]!==h[c]){i=u[c],s=h[c];break}return i<s?-1:s<i?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":return A(this,t,e,r);case"latin1":case"binary":return x(this,t,e,r);case"base64":return B(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function j(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}function k(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function U(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=W[t[i]];return o}function I(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function L(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,r,n,o,i){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function P(t,e,r,n,i){return e=+e,r>>>=0,i||M(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function $(t,e,r,n,i){return e=+e,r>>>=0,i||M(t,0,r,8),o.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||L(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||L(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},f.prototype.readUInt8=function(t,e){return t>>>=0,e||L(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||L(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||L(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||L(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||L(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},f.prototype.readInt8=function(t,e){return t>>>=0,e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||L(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||L(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return t>>>=0,e||L(t,4,this.length),o.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||L(t,4,this.length),o.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||L(t,8,this.length),o.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||L(t,8,this.length),o.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||R(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||R(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);R(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);R(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeFloatLE=function(t,e,r){return P(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return P(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return $(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return $(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var i=o-1;i>=0;--i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return o},f.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(i=e;i<r;++i)this[i]=t;else{var s=f.isBuffer(t)?t:f.from(t,n),a=s.length;if(0===a)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=s[i%a]}return this};var _=/[^+/0-9A-Za-z-_]/g;function N(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function z(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(_,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function D(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function F(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Y(t){return t!==t}var W=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}()},759:function(t,e){e.read=function(t,e,r,n,o){var i,s,a=8*o-n-1,f=(1<<a)-1,u=f>>1,h=-7,c=r?o-1:0,l=r?-1:1,p=t[e+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=a;h>0;i=256*i+t[e+c],c+=l,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=n;h>0;s=256*s+t[e+c],c+=l,h-=8);if(0===i)i=1-u;else{if(i===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=u}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,a,f,u=8*i-o-1,h=(1<<u)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=h?(a=0,s=h):s+c>=1?(a=(e*f-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=y,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[r+p]=255&s,p+=y,s/=256,u-=8);t[r+p-y]|=128*g}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},s=!0;try{e[t](i,i.exports,n),s=!1}finally{s&&delete r[t]}return i.exports}n.ab="//";var o=n(293);t.exports=o}()},906:function(){},9008:function(t,e,r){t.exports=r(5443)},4298:function(t,e,r){t.exports=r(699)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[9774,179],(function(){return e(6363),e(387)}));var r=t.O();_N_E=r}]);