if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const d=e=>r(e,n),c={module:{uri:n},exports:o,require:d};i[n]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"494f8d54d43ec1c5fe66b14a419724e2"},{url:"main.js",revision:"fa7e4d18855b0aa99c40d3d0d023223b"},{url:"readme",revision:"b09cb043b1f3554c866575e30f141398"}],{})}));