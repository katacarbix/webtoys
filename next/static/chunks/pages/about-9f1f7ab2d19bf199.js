(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4228)}])},1132:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(5893),s=n(9008),r=n(1163),o=n(1664),i=n(7294),c=n(8849),l=n.n(c),d=n(5317),m=n(7526),h=function(e){var t=e.name,n=e.icon,s=e.url,i=void 0===s?"":s,c=e.onClick,m=e.caret,h=void 0!==m&&m,u=e.collapsed,p=e.className,g=void 0===p?"":p,x=(0,r.useRouter)(),f=(0,a.jsxs)("div",{onClick:c,className:"\n\t\t\t\t".concat(g,"\n\t\t\t\tflex\n\t\t\t\tjustify-between\n\t\t\t\titems-center\n\t\t\t\tgap-4\n\n\t\t\t\tpy-2\n\t\t\t\tpx-3\n\t\t\t\tmy-0.5\n\n\t\t\t\trounded-md\n\n\t\t\t\ttext-slate-800\n\t\t\t\tdark:text-slate-100\n\n\t\t\t\t").concat(x.pathname===i?"bg-slate-200 dark:bg-slate-700":"","\n\n\t\t\t\tcursor-pointer\n\t\t\t\thover:text-slate-900\n\t\t\t\thover:dark:text-slate-90\n\t\t\t\thover:bg-slate-200\n\t\t\t\thover:dark:bg-slate-700\n\t\t\t\ttransition-colors\n\t\t\t\tduration-100\n\t\t\t"),children:[(0,a.jsx)(l(),{path:n,size:.75,className:"shrink-0"}),(0,a.jsx)("div",{className:"grow whitespace-normal",children:t}),h?(0,a.jsx)(l(),{path:d.CW,size:.75,className:"shrink-0 transition-transform ".concat(u?"":"rotate-180")}):null]});return i&&i.length>0?(0,a.jsx)(o.default,{href:i,children:f}):f},u=function(e){var t=e.name,n=e.icon,s=e.id,o=e.children,c=(0,r.useRouter)(),l=(0,i.useState)(c.pathname.split("/")[1]!==s),d=l[0],m=l[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{name:t,icon:n,caret:!0,collapsed:d,onClick:function(){return m(!d)}}),(0,a.jsx)("div",{className:"pl-8 overflow-y-hidden ".concat(Array.isArray(o)&&!d?"h-max":"h-0"),children:o})]})},p=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:"drawer-toggle",className:" z-20 fixed top-0 left-0 right-0 bottom-0 bg-slate-900 opacity-0 peer-checked:opacity-60 invisible peer-checked:visible transition-all duration-300 cursor-pointer lg:hidden "}),(0,a.jsx)("div",{className:" h-full w-10/12 max-w-md z-30 fixed top-0 left-0 -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 peer-checked:shadow-2xl lg:w-auto lg:max-w-none lg:shrink-0 lg:basis-96 lg:transition-none lg:relative lg:translate-x-0 lg:!shadow-none 2xl:basis-1/3 overflow-y-auto bg-slate-100 dark:bg-slate-800 ",children:(0,a.jsxs)("nav",{className:" p-6 sm:p-12 2xl:max-w-sm 2xl:ml-auto ",children:[(0,a.jsx)(h,{name:"Home",icon:d.C1V,url:"/",className:"mb-8"}),m.b.map((function(e){return(0,a.jsx)(u,{id:e.id,name:e.name,icon:e.icon,children:m.r.filter((function(t){return t.category===e.id})).map((function(t){return(0,a.jsx)(h,{name:t.name,icon:t.icon,url:"/".concat(e.id,"/").concat(t.id)},t.id)}))},e.id)})),(0,a.jsx)(h,{name:"Settings",icon:d.eYM,url:"/settings",className:"mt-8"}),(0,a.jsx)(h,{name:"About",icon:d.gCD,url:"/about"})]})})]})},g=n(956),x=function(e){var t=e.title,n=e.children,o=e.className,i=void 0===o?"":o,c=(0,r.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[t&&"/"!==c.pathname?(0,a.jsx)(s.default,{children:(0,a.jsxs)("title",{children:[t," - WebToys"]})}):null,(0,a.jsxs)("div",{className:" h-screen w-full md:flex md:items-stretch ",children:[(0,a.jsx)("input",{id:"drawer-toggle",type:"checkbox",className:"hidden peer"}),(0,a.jsx)(p,{}),(0,a.jsx)("section",{className:" h-full overflow-y-auto grow z-10 bg-white dark:bg-slate-900 ",children:(0,a.jsxs)("div",{className:"\n\t\t\t\t\t\t\t".concat(i,"\n\t\t\t\t\t\t\tmin-h-full\n\t\t\t\t\t\t\t2xl:max-w-5xl\n\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\tflex-col\n\n\t\t\t\t\t\t\tp-6\n\t\t\t\t\t\t\tsm:p-12\n\t\t\t\t\t\t"),children:[(0,a.jsx)("label",{htmlFor:"drawer-toggle",className:" block mt-2 mb-6 lg:hidden ",children:(0,a.jsx)(l(),{path:d.$Qi,size:1,className:"cursor-pointer"})}),(0,a.jsx)(g.H1,{className:"mb-6",children:t}),n]})})]})]})}},956:function(e,t,n){"use strict";n.d(t,{H1:function(){return r},H2:function(){return o},P:function(){return i},A:function(){return c}});var a=n(5893),s="\n\ttext-slate-800\n\tdark:text-slate-200\n",r=function(e){var t=e.className,n=e.children;return(0,a.jsx)("h1",{className:"".concat(t," ").concat(s," text-3xl font-semibold"),children:n})},o=function(e){var t=e.className,n=e.children;return(0,a.jsx)("h2",{className:"".concat(t," ").concat(s," text-xl"),children:n})},i=function(e){var t=e.className,n=e.children;return(0,a.jsx)("p",{className:"\n\t\t\t".concat(t,"\n\t\t\tmax-w-prose\n\t\t\tmx-auto\n\n\t\t\ttext-base\n\t\t\tleading-relaxed\n\t\t"),children:n})},c=function(e){var t=e.href,n=e.className,s=e.children;return(0,a.jsx)("a",{href:t,className:"\n\t\t\t".concat(n,"\n\t\t\tcursor-pointer\n\n\t\t\ttext-sky-600\n\t\t\thover:text-sky-500\n\t\t\tdark:text-sky-400\n\t\t\thover:dark:text-sky-300\n\t\t"),children:s})}},4228:function(e,t,n){"use strict";n.r(t);var a=n(5893),s=n(1132),r=n(956),o=n(8849),i=n.n(o),c=n(5317);t.default=function(){return(0,a.jsx)(s.Z,{className:"h-full",children:(0,a.jsxs)("div",{className:"h-full flex flex-col justify-center items-center gap-10",children:[(0,a.jsx)("img",{src:"/images/logo-circular.svg",alt:"WebToys logo",width:128,height:128}),(0,a.jsxs)(r.P,{className:"text-center",children:["WebToys is made with"," ",(0,a.jsx)(i(),{path:c.sMo,"aria-label":"love",size:1,className:"inline-block text-pink-500"})," ","by ",(0,a.jsx)(r.A,{href:"https://github.com/reeseovine",children:"Reese Sapphire"})]}),(0,a.jsx)("a",{href:"https://github.com/reeseovine/webtoys",className:"mb-20",children:(0,a.jsx)(i(),{path:c.LcO,"aria-label":"github",size:1.5,className:"inline-block text-slate-400 dark:text-slate-500"})})]})})}},7526:function(e,t,n){"use strict";n.d(t,{b:function(){return s},r:function(){return r}});var a=n(5317),s=[{name:"Converters",id:"converters",icon:a.ifN},{name:"Encoders & Decoders",id:"coders",icon:a.flD},{name:"Formatters",id:"formatters",icon:a.GyR},{name:"Generators",id:"generators",icon:a.WWn},{name:"Text",id:"text",icon:a.i9n},{name:"Graphic",id:"graphic",icon:a.oGL}],r=[{name:"JSON to YAML",id:"json2yaml",category:"converters",icon:a.YG,description:"Convert JSON data to YAML and vice versa",keywords:"javascript object notation yml"},{name:"Number Base",id:"base",category:"converters",icon:a.CxY,description:"Convert numbers from one base to another",keywords:"binary octal decimal hexadecimal"},{name:"HTML Entities",id:"html",category:"coders",icon:a.i_r,description:"Encode or decode all the applicable characters to their corresponding HTML entities",keywords:""},{name:"URL",id:"url",category:"coders",icon:a.$jG,description:"Encode or decode all the applicable characters to their corresponding URL entities",keywords:""},{name:"Base64",id:"base64",category:"coders",icon:"m17 17h2v-10h-2v4h-2v-4h-2v6h4m-10-6a2 2 0 0 0-2 2v6c0 1.11 0.9 2 2 2h2a2 2 0 0 0 2-2v-2c0-1.11-0.9-2-2-2h-2v-2h4v-2zm0 6h2v2h-2zm-5-13c-1.108 0-2 0.892-2 2v20c0 1.108 0.892 2 2 2h20c1.108 0 2-0.892 2-2v-20c0-1.108-0.892-2-2-2zm0 2h20v20h-20z",description:"Encode and decode Base64 data",keywords:"RFC 4648"},{name:"GZip",id:"gzip",category:"coders",icon:a.aYC,description:"Compress or decompress strings",keywords:"zlib gunzip"},{name:"JWT Decoder",id:"jwt",category:"coders",icon:a.Lks,description:"Decode a JWT header and payload",keywords:"RFC 7519 json web token"},{name:"JSON",id:"json",category:"formatters",icon:a.UgG,description:"Indent or minify JSON data",keywords:"javascript object notation"},{name:"SQL",id:"sql",category:"formatters",icon:a.PIg,description:"Indent SQL queries",keywords:"Db2 MariaDB MySQL N1QL PL/SQL PostgreSQL Amazon Redshift Spark SQL Standard SQL Transact-SQL"},{name:"XML",id:"xml",category:"formatters",icon:a.SMx,description:"Indent or minify XML data",keywords:"extensible markup language"},{name:"Hash",id:"hash",category:"generators",icon:a.Dls,description:"Calculate MD5 and SHA hashes from text data",keywords:"sha1 sha256 sha512"},{name:"UUID",id:"uuid",category:"generators",icon:a.JEH,description:"Generate UUIDs of version 1, 3, 4, and 5",keywords:"GUID RFC 4122 namespace random"},{name:"Lorem Ipsum",id:"lipsum",category:"generators",icon:a.ZJy,description:"Generate words, sentences or paragraphs of Lorem Ipsum",keywords:"dolor sit amet"},{name:"Checksum",id:"checksum",category:"generators",icon:a.ebj,description:"Generate a hash with Checksum based on a file",keywords:"md5 sha1 sha256 sha512"},{name:"Inspector & Case Converter",id:"case",category:"text",icon:a.nAh,description:"Analyze text and convert it to a different case",keywords:"string capital upper lower camel snake kebab"},{name:"Regex Tester",id:"regex",category:"text",icon:a.n9O,description:"Validate and test regular expressions",keywords:"regexp grep sed awk",helpText:"Validate and test regular expressions against a body of text.\n\nThis implementation allows Javascript-flavored regexes in global matching mode. For a more featureful regex tester check out [regex101](https://regex101.com/)."},{name:"Text Difference",id:"diff",category:"text",icon:a.ZRL,description:"Compare two pieces of text",keywords:"difference changes"},{name:"Markdown Preview",id:"markdown",category:"text",icon:a.M7E,description:"Preview a Markdown document with GitHub style",keywords:"md gfm"},{name:"Color Blindness Simulator",id:"colorblind",category:"graphic",icon:a.wPp,description:"Simulate color blindness on a picture or screenshot",keywords:"protanopia deuteranopia tritanopia monochromacy",helpText:"This tool is meant to give you an idea of what something would look like to people with different types of color blindness. It's never going to be 100% accurate because everyone's vision is different.\n\nTo be sure you are using suitable colors for a user interface you should follow the [Web Contrast Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG/). There's a handy contrast checker available at [contrastchecker.online](https://contrastchecker.online/)."},{name:"PNG / JPEG Compressor",id:"compress",category:"graphic",icon:a.X$f,description:"Lossless PNG and JPEG optimizer",keywords:"JPG"},{name:"Image Converter",id:"convert",category:"graphic",icon:"M13.18 19C13.35 19.72 13.64 20.39 14.03 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V11.18C20.5 11.07 20 11 19.5 11C19.33 11 19.17 11 19 11.03V5H5V19H13.18M11.21 15.83L9.25 13.47L6.5 17H13.03C13.14 15.54 13.73 14.22 14.64 13.19L13.96 12.29L11.21 15.83M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20Z",description:"Convert images between common formats",keywords:"BMP GIF JPG PNG TIFF ICO WEBP",helpText:"Convert images between common formats.\n\nThe formats you can convert images to are whichever ones are supported by your web browser. Try a different browser if you don't see the one you want."}];r=r.filter((function(e){return["pages/_app.tsx","pages/_document.tsx","pages/404.tsx","pages/500.tsx","pages/about.tsx","pages/coders/base64.tsx","pages/coders/html.tsx","pages/coders/jwt.tsx","pages/coders/url.tsx","pages/converters/base.tsx","pages/converters/json2yaml.tsx","pages/formatters/json.tsx","pages/generators/checksum.tsx","pages/generators/hash.tsx","pages/generators/lipsum.tsx","pages/generators/uuid.tsx","pages/graphic/colorblind.tsx","pages/graphic/convert.tsx","pages/index.tsx","pages/settings.tsx","pages/text/case.tsx","pages/text/diff.tsx","pages/text/markdown.tsx","pages/text/regex.tsx"].includes("pages/".concat(e.category,"/").concat(e.id,".tsx"))}))}},function(e){e.O(0,[702,534,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);