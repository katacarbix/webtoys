if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>i(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/next/static/9KrqV_7Zl6A6JmFemNiwI/buildManifest.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/9KrqV_7Zl6A6JmFemNiwI/middlewareManifest.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/9KrqV_7Zl6A6JmFemNiwI/ssgManifest.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/0f86a987.ab2f67cc48d2f508.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/214.fdda193b17059e27.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/3380-ff6520bf9d7f40dc.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/3454.6059a9a7044f2840.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/3534-f1fc830e82112d4f.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/37bf9728-420f925857e1f8c2.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/4c8073aa.86913f10fa05ef37.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/5006-64cc46b160fe417c.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/58917679.614f1db50556b2e3.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/6291.0f8adafd000de315.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/6492-d3677886e99318ea.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/64f69659.b3f5f30a821d5a5a.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/7278-5f1333d29ab1a45e.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/8222-e45cdb42ce6464c2.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/82c1d43a.6f0257c755f5aa44.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/8495-beb09eca405d83a6.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/893.a75b079f0cf5e5c9.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/9228.0ad47c15bbf7d2bb.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/9295-f99aa2c2f4428fc5.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/9922-eec8694598d3a6e9.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/b2e984c5-94ba0e916fe81393.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/d67bd397.a2015bf4f76e5038.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/fc6701f7.44863ab9202f9e8e.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/framework-a070cbfff3c750c5.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/main-dc0c9200404a3198.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/404-99573103d4c448ba.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/500-443f7701aaf2281a.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/app-50b1f0737f422936.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/error-25839e52160ad85d.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/about-6846c821abf1f751.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/coders/base64-e9863e2d9156c5d5.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/coders/html-6717bbd5a0bd45a7.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/coders/jwt-b555fe813ce17d8c.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/coders/url-a9e0a5eb0a042074.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/converters/base-007d5ab662b3849d.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/converters/json2yaml-4791f47238a7ef78.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/formatters/pretty-5d5f243fe7a42b44.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/generators/checksum-c633e8da92918428.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/generators/hash-253c736b010f95be.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/generators/lipsum-c83349335534af81.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/generators/uuid-0d6010deb23dae14.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/graphic/colorblind-75df6c9b8cb49695.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/graphic/convert-cb905d3352e61471.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/index-63a942446023891f.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/settings-e72b9cfb3db2c040.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/text/case-f07919ac93588bb2.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/text/diff-a4330acd814257da.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/text/markdown-c8fc678cd88b3f91.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/pages/text/regex-f2f9ff3855f761db.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/chunks/webpack-b93912a8ba4ab053.js",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/next/static/css/9ae8a48077010dd2.css",revision:"9KrqV_7Zl6A6JmFemNiwI"},{url:"/browserconfig.xml",revision:"3935b8fb3aece130bb577a6a553c0152"},{url:"/images/android-chrome-192x192.png",revision:"256c91cbecd86e4b809176499f51184e"},{url:"/images/android-chrome-512x512.png",revision:"681eaa290679fe0a61dba1a05d62718b"},{url:"/images/apple-touch-icon-120x120-precomposed.png",revision:"133215fba4ac81352ca9de430feefeeb"},{url:"/images/apple-touch-icon-120x120.png",revision:"afb0d0b64ffec9314a94ab932ce8d2e0"},{url:"/images/apple-touch-icon-152x152-precomposed.png",revision:"299de9a06bed3e8056ee0dd94ad7f4c5"},{url:"/images/apple-touch-icon-152x152.png",revision:"c3bb102389990b17fd51389046ea4b70"},{url:"/images/apple-touch-icon-180x180-precomposed.png",revision:"aea408f8feab86c68a0839a820bb0939"},{url:"/images/apple-touch-icon-180x180.png",revision:"c780f7f13265699d8a7c62fe6d72fc85"},{url:"/images/apple-touch-icon-60x60-precomposed.png",revision:"a8b5b19a087e060dd815c7a5b8fc9aa8"},{url:"/images/apple-touch-icon-60x60.png",revision:"b65074b8bd7cb5ba5476a9ba47e1ab2f"},{url:"/images/apple-touch-icon-76x76-precomposed.png",revision:"02859c29b4f26187a6149413a79b8375"},{url:"/images/apple-touch-icon-76x76.png",revision:"547940ac88cb3233d32dc8f2a0ebd1a8"},{url:"/images/apple-touch-icon-precomposed.png",revision:"aea408f8feab86c68a0839a820bb0939"},{url:"/images/apple-touch-icon.png",revision:"c780f7f13265699d8a7c62fe6d72fc85"},{url:"/images/favicon-16x16.png",revision:"e2fd2d787e8c67d816d50aea9685d0e3"},{url:"/images/favicon-32x32.png",revision:"a93f075a9dd2d761d46d839f73b8c86e"},{url:"/images/favicon.ico",revision:"45f39871508171c7c1e037f908ee246c"},{url:"/images/icon-192.png",revision:"8c6d79e918b1bbc4f6d0763ce3b56f96"},{url:"/images/icon-512.png",revision:"7e894e4a42fe44953befc12e7543c42b"},{url:"/images/icon-maskable-192.png",revision:"a93f9c0860e81874f6cb51846a025220"},{url:"/images/icon-maskable-512.png",revision:"aca79ff829f1f862c29008a6ecd438b7"},{url:"/images/logo-circular.svg",revision:"6f40a0ac6890ae816f9fbb437af0d71e"},{url:"/images/mstile-144x144.png",revision:"11a45626c9e62380d001843faf7015a5"},{url:"/images/mstile-150x150.png",revision:"e715eea57a23c1faeafb786d7fb200be"},{url:"/images/mstile-310x150.png",revision:"bc17bd9384c496b2fe3d666231352fd7"},{url:"/images/mstile-310x310.png",revision:"df81fa65e93b2203d0009f02b60bf774"},{url:"/images/mstile-70x70.png",revision:"811f25f9a0e0e0891c8844d848b9f6cc"},{url:"/images/safari-pinned-tab.svg",revision:"473402faa0f1b8798179750671060a51"},{url:"/manifest.json",revision:"6b19055ce6cac52b5f4123e578b81600"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
