if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let c={};const t=e=>s(e,r),o={module:{uri:r},exports:c,require:t};a[r]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/next/static/chunks/222-0ccbbb65b25bfb2d.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/278-f28f1db1d1060ba8.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/295-fb9afdac157c2d80.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/380-e79787e3386ba016.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/492-b68ba6b534e374da.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/495-d19da5860e93cc3b.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/534-7ffe9646bd062026.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/6-e246f97c1751fece.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/922-eee91c35b3af4bce.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/b2e984c5-d5bc2e232f043b2c.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/framework-5f4595e5518b5600.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/main-f8f6b98ce0ba8865.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/404-30b4ed18cee4ccb6.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/500-9062d94add01af3a.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/app-e4985b1a828831ab.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/error-2280fa386d040b66.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/about-286e0662eb790145.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/coders/base64-57081dfb6298b95b.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/coders/html-3b2b85405e6ef890.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/coders/jwt-d1a036e9eb1596b7.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/coders/url-a7ff8b7abd21dddd.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/converters/base-3aea814515f95d6a.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/converters/json2yaml-11c10313f78aa5f2.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/formatters/json-ebe614a3f0975c4d.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/generators/checksum-a9b0cb0113647750.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/generators/hash-7ef604d19671d330.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/generators/lipsum-2815550eb9aa08bc.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/generators/uuid-2c784fb87a2ac48f.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/graphic/colorblind-49c5ec0de25678c7.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/graphic/convert-05ba2b55e38c1db8.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/index-39c095810da21e4b.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/settings-c07bbec3f084870a.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/text/case-2d92005f813f6630.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/text/diff-3c06e6d429522816.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/pages/text/markdown-49984e820533dcf1.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/chunks/webpack-434fefa8f39d8fbc.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/css/4c04b0e25ab8fc93.css",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/rGCfrL499A2SBaXvJHUWa/buildManifest.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/rGCfrL499A2SBaXvJHUWa/middlewareManifest.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/next/static/rGCfrL499A2SBaXvJHUWa/ssgManifest.js",revision:"rGCfrL499A2SBaXvJHUWa"},{url:"/browserconfig.xml",revision:"3935b8fb3aece130bb577a6a553c0152"},{url:"/images/android-chrome-192x192.png",revision:"256c91cbecd86e4b809176499f51184e"},{url:"/images/android-chrome-512x512.png",revision:"681eaa290679fe0a61dba1a05d62718b"},{url:"/images/apple-touch-icon-120x120-precomposed.png",revision:"133215fba4ac81352ca9de430feefeeb"},{url:"/images/apple-touch-icon-120x120.png",revision:"afb0d0b64ffec9314a94ab932ce8d2e0"},{url:"/images/apple-touch-icon-152x152-precomposed.png",revision:"299de9a06bed3e8056ee0dd94ad7f4c5"},{url:"/images/apple-touch-icon-152x152.png",revision:"c3bb102389990b17fd51389046ea4b70"},{url:"/images/apple-touch-icon-180x180-precomposed.png",revision:"aea408f8feab86c68a0839a820bb0939"},{url:"/images/apple-touch-icon-180x180.png",revision:"c780f7f13265699d8a7c62fe6d72fc85"},{url:"/images/apple-touch-icon-60x60-precomposed.png",revision:"a8b5b19a087e060dd815c7a5b8fc9aa8"},{url:"/images/apple-touch-icon-60x60.png",revision:"b65074b8bd7cb5ba5476a9ba47e1ab2f"},{url:"/images/apple-touch-icon-76x76-precomposed.png",revision:"02859c29b4f26187a6149413a79b8375"},{url:"/images/apple-touch-icon-76x76.png",revision:"547940ac88cb3233d32dc8f2a0ebd1a8"},{url:"/images/apple-touch-icon-precomposed.png",revision:"aea408f8feab86c68a0839a820bb0939"},{url:"/images/apple-touch-icon.png",revision:"c780f7f13265699d8a7c62fe6d72fc85"},{url:"/images/favicon-16x16.png",revision:"e2fd2d787e8c67d816d50aea9685d0e3"},{url:"/images/favicon-32x32.png",revision:"a93f075a9dd2d761d46d839f73b8c86e"},{url:"/images/favicon.ico",revision:"45f39871508171c7c1e037f908ee246c"},{url:"/images/icon-192.png",revision:"8c6d79e918b1bbc4f6d0763ce3b56f96"},{url:"/images/icon-512.png",revision:"7e894e4a42fe44953befc12e7543c42b"},{url:"/images/icon-maskable-192.png",revision:"a93f9c0860e81874f6cb51846a025220"},{url:"/images/icon-maskable-512.png",revision:"aca79ff829f1f862c29008a6ecd438b7"},{url:"/images/logo-circular.svg",revision:"6f40a0ac6890ae816f9fbb437af0d71e"},{url:"/images/mstile-144x144.png",revision:"11a45626c9e62380d001843faf7015a5"},{url:"/images/mstile-150x150.png",revision:"e715eea57a23c1faeafb786d7fb200be"},{url:"/images/mstile-310x150.png",revision:"bc17bd9384c496b2fe3d666231352fd7"},{url:"/images/mstile-310x310.png",revision:"df81fa65e93b2203d0009f02b60bf774"},{url:"/images/mstile-70x70.png",revision:"811f25f9a0e0e0891c8844d848b9f6cc"},{url:"/images/safari-pinned-tab.svg",revision:"473402faa0f1b8798179750671060a51"},{url:"/manifest.json",revision:"6b19055ce6cac52b5f4123e578b81600"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
