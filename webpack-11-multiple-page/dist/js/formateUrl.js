!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Maic_utils=t():e.Maic_utils=t()}(self,(()=>(()=>{"use strict";var e={699:(e,t,r)=>{r.d(t,{isType:()=>o});var o=function(e){return function(t){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{formateUrl:()=>t});var e=r(699),t=function(t){if((0,e.isType)(t)("String")){if(/^http(s)?/.test(t)){var r=new URL(t);return Object.fromEntries(r.searchParams.entries())}return Object.fromEntries(new URLSearchParams(t).entries())}}})(),o})()));