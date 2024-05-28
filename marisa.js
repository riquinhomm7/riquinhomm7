marisa.html

<!DOCTYPE html>
<html lang="pt">
<head>
	
<script type="text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]},distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"1091008967",accountID:"359579",trustKey:"359579",xpid:"VwMOVFFaGwIAXFhRBgcOUlc=",licenseKey:"1ffad51641",applicationID:"1089316943"};;/*! For license information please see nr-loader-spa-1.260.1.min.js.LICENSE.txt */
(()=>{var e,t,r={234:(e,t,r)=>{"use strict";r.d(t,{P_:()=>m,Mt:()=>b,C5:()=>s,DL:()=>w,OP:()=>O,lF:()=>D,Yu:()=>_,Dg:()=>v,CX:()=>c,GE:()=>E,sU:()=>I});var n=r(8632),i=r(9567);const o={beacon:n.ce.beacon,errorBeacon:n.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},a={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");a[e]=(0,i.D)(t,o);const r=(0,n.ek)(e);r&&(r.info=a[e])}const u=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=r(7056),l=r(50);const f="[data-nr-mask]",h=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{expiresMs:d.oD,inactiveMs:d.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,preload:!1,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},soft_navigations:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},g="All configuration objects require an agent identifier!";function m(e){if(!e)throw new Error(g);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function v(e,t){if(!e)throw new Error(g);p[e]=(0,i.D)(t,h());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(g);var r=m(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},A={};function w(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!A[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return A[e]}function E(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");A[e]=(0,i.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=A[e])}const _=(0,n.mF)().o;var x=r(385),R=r(6818);const S={buildEnv:R.Re,distMethod:R.gF,version:R.q4,originTime:x.sK},T={customTransaction:void 0,disabled:!1,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,onerror:void 0,origin:""+x._A.location,ptid:void 0,releaseIds:{},appMetadata:{},session:void 0,denyList:void 0,harvestCount:0,timeKeeper:void 0},N={};function O(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!N[e])throw new Error("Runtime for ".concat(e," was never set"));return N[e]}function I(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");N[e]={...(0,i.D)(t,T),...S};const r=(0,n.ek)(e);r&&(r.runtime=N[e])}function D(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{if(null===e[a]){r[a]=null;continue}Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>o,lF:()=>a,q4:()=>n});const n="1.260.1",i="PROD",o="CDN",a="2.0.0-alpha.12"},385:(e,t,r)=>{"use strict";r.d(t,{FN:()=>u,IF:()=>f,LW:()=>s,Nk:()=>p,Tt:()=>d,_A:()=>a,iS:()=>c,il:()=>i,sK:()=>g,ux:()=>l,v6:()=>o,w1:()=>h});var n=r(7894);const i="undefined"!=typeof window&&!!window.document,o="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),a=i?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),s="complete"===a?.document?.readyState,c=Boolean("hidden"===a?.document?.visibilityState),u=""+a?.location,d=/iPad|iPhone|iPod/.test(a.navigator?.userAgent),l=d&&"undefined"==typeof SharedWorker,f=(()=>{const e=a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),h=Boolean(i&&window.document.documentMode),p=!!a.navigator?.sendBeacon,g=Date.now()-(0,n.z)()},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var n=r(50);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occurred while setting SharedContext",e)}}}},1199:(e,t,r)=>{"use strict";r.d(t,{R2:()=>a,zR:()=>i,zh:()=>o});var n=[];function i(e){if(o(e))return!1;if(0===n.length)return!0;for(var t=0;t<n.length;t++){var r=n[t];if("*"===r.hostname)return!1;if(s(r.hostname,e.hostname)&&c(r.pathname,e.pathname))return!1}return!0}function o(e){return void 0===e.hostname}function a(e){if(n=[],e&&e.length)for(var t=0;t<e.length;t++){let r=e[t];if(!r)continue;0===r.indexOf("http://")?r=r.substring(7):0===r.indexOf("https://")&&(r=r.substring(8));const i=r.indexOf("/");let o,a;i>0?(o=r.substring(0,i),a=r.substring(i)):(o=r,a="");let[s]=o.split(":");n.push({hostname:s,pathname:a})}}function s(e,t){return!(e.length>t.length)&&t.indexOf(e)===t.length-e.length}function c(e,t){return 0===e.indexOf("/")&&(e=e.substring(1)),0===t.indexOf("/")&&(t=t.substring(1)),""===e||e===t}},8e3:(e,t,r)=>{"use strict";r.d(t,{LP:()=>l,RP:()=>c,o5:()=>u});var n=r(8325),i=r(1284),o=r(4322),a=r(3325);const s={};function c(e,t){const r={staged:!1,priority:a.p[t]||0};d(e),s[e].get(t)||s[e].set(t,r)}function u(e,t){d(e),s[e].get(t)&&s[e].delete(t),s[e].size&&f(e)}function d(e){if(!e)throw new Error("agentIdentifier required");s[e]||(s[e]=new Map)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(d(e),!e||!s[e].get(t)||r)return h(e,t);s[e].get(t).staged=!0,f(e)}function f(e){const t=Array.from(s[e]);t.every((e=>{let[t,r]=e;return r.staged}))&&(t.sort(((e,t)=>e[1].priority-t[1].priority)),t.forEach((t=>{let[r]=t;s[e].delete(r),h(e,r)})))}function h(e,t){const r=e?n.ee.get(e):n.ee,a=o.X.handlers;if(r.backlog&&a){var s=r.backlog[t],c=a[t];if(c){for(var u=0;s&&u<s.length;++u)p(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}r.isolatedBacklog||delete a[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}function p(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],o=e[3],a=e[2];i.apply(o,a)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),o=r(234);class a{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},l=!1;try{l=16===r.length&&(0,o.OP)(r).isolatedBacklog}catch(e){}var f={on:p,addEventListener:p,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=h(n),c=g(e),d=c.length,l=0;l<d;l++)c[l].apply(a,r);var p=v()[s[e]];p&&p.push([f,e,r,a]);return a},get:m,listeners:g,context:h,buffer:function(e,t){const r=v();if(t=t||"feature",f.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:function(){f._aborted=!0,Object.keys(f.backlog).forEach((e=>{delete f.backlog[e]}))},isBuffering:function(e){return!!v()[s[e]]},debugId:r,backlog:l?{}:t&&"object"==typeof t.backlog?t.backlog:{},isolatedBacklog:l};return Object.defineProperty(f,"aborted",{get:()=>{let e=f._aborted||!1;return e||(t&&(e=t.aborted),e)}}),f;function h(e){return e&&e instanceof a?e:e?(0,i.X)(e,c,(()=>new a(c))):new a(c)}function p(e,t){n[e]=g(e).concat(t)}function g(e){return n[e]||[]}function m(t){return d[t]=d[t]||e(f,t)}function v(){return f.backlog}}(void 0,"globalEE"),d=(0,n.fP)();d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=r(5546);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.E,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.E);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>a});var n=r(385);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>u,M:()=>c,Rl:()=>a,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}function c(){return s(16)}function u(){return s(32)}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>a,IK:()=>u,K4:()=>i,oD:()=>o,uT:()=>c,wO:()=>s});const n="NRBA",i="SESSION",o=144e5,a=18e5,s={STARTED:"session-started",PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},c={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},u={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{z:()=>n})},7243:(e,t,r)=>{"use strict";r.d(t,{e:()=>i});var n=r(385);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n._A?.location?.protocol&&t.host===n._A?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>c,T:()=>s});var n=r(8325),i=r(385);const o="newrelic";const a=new Set,s={};function c(e,t){const r=n.ee.get(t);s[t]??={},e&&"object"==typeof e&&(a.has(t)||(r.emit("rumresp",[e]),s[t]=e,a.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{i._A.dispatchEvent(new CustomEvent(o,{detail:e}))}catch(e){}}({loaded:!0})))}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},7872:(e,t,r)=>{"use strict";function n(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=n?.leading||!1;let o;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];i&&void 0===o&&(e.apply(t,a),o=setTimeout((()=>{o=clearTimeout(o)}),r)),i||(clearTimeout(o),o=setTimeout((()=>{e.apply(t,a)}),r))}}function i(e){var t=this;let r=!1;return function(){if(!r){r=!0;for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];e.apply(t,i)}}}r.d(t,{D:()=>n,Z:()=>i})},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>o});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>a,b2:()=>o});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.bP)("load",e,t)}function a(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>o,ek:()=>u,fP:()=>a,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(385),i=r(7894);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return n._A.NREUM||(n._A.NREUM={}),void 0===n._A.newrelic&&(n._A.newrelic=n._A.NREUM),n._A.NREUM}function s(){let e=a();return e.o||(e.o={ST:n._A.setTimeout,SI:n._A.setImmediate,CT:n._A.clearTimeout,XHR:n._A.XMLHttpRequest,REQ:n._A.Request,EV:n._A.Event,PR:n._A.Promise,MO:n._A.MutationObserver,FETCH:n._A.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,i.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function d(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},7806:(e,t,r)=>{"use strict";r.d(t,{em:()=>b,u5:()=>T,QU:()=>I,_L:()=>j,Gm:()=>L,Lg:()=>M,BV:()=>V,Kf:()=>Y});var n=r(8325),i=r(3117);const o="nr@original:".concat(i.a);var a=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,o){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],u=e[c];d(u)||(e[c]=r(u,a?c+n:n,i,c,o))}},r.flag=o,r;function r(t,r,n,s,c){return d(t)?t:(r||(r=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){u([e],r)}for(var n in e)a.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,a,d,l;try{a=this,o=[...arguments],d="function"==typeof n?n(o,a):n||{}}catch(t){u([t,"",[o,a,s],d],e)}i(r+"start",[o,a,s],d,c);try{return l=t.apply(a,o)}catch(e){throw i(r+"err",[o,a,e],d,c),e}finally{i(r+"end",[o,a,l],d,c)}}}function i(r,n,i,o){if(!s||t){var a=s;s=!0;try{e.emit(r,n,i,t,o)}catch(t){u([t,r,n,i],e)}s=a}}}function u(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function d(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}var l=r(2210),f=r(385);const h={},p=f._A.XMLHttpRequest,g="addEventListener",m="removeEventListener",v="nr@wrapped:".concat(n.A);function b(e){var t=function(e){return(e||n.ee).get("events")}(e);if(h[t.debugId]++)return t;h[t.debugId]=1;var r=c(t,!0);function i(e){r.inPlace(e,[g,m],"-",o)}function o(e,t){return e[1]}return"getPrototypeOf"in Object&&(f.il&&y(document,i),y(f._A,i),y(p.prototype,i)),t.on(g+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,l.X)(n,v,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(m+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function y(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,g);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}var A="fetch-",w=A+"body-",E=["arrayBuffer","blob","json","text","formData"],_=f._A.Request,x=f._A.Response,R="prototype";const S={};function T(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(_&&x&&f._A.fetch))return t;if(S[t.debugId]++)return t;function r(e,r,i){var o=e[r];"function"==typeof o&&(e[r]=function(){var e,r=[...arguments],a={};t.emit(i+"before-start",[r],a),a[n.A]&&a[n.A].dt&&(e=a[n.A].dt);var s=o.apply(this,r);return t.emit(i+"start",[r,e],s),s.then((function(e){return t.emit(i+"end",[null,e],s),e}),(function(e){throw t.emit(i+"end",[e],s),e}))})}return S[t.debugId]=1,E.forEach((e=>{r(_[R],e,w),r(x[R],e,w)})),r(f._A,"fetch",A),t.on(A+"end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit(A+"done",[null,r],n)}else t.emit(A+"done",[e],n)})),t}const N={},O=["pushState","replaceState"];function I(e){const t=function(e){return(e||n.ee).get("history")}(e);return!f.il||N[t.debugId]++||(N[t.debugId]=1,c(t).inPlace(window.history,O,"-")),t}var D=r(3239);const P={},C=["appendChild","insertBefore","replaceChild"];function j(e){const t=function(e){return(e||n.ee).get("jsonp")}(e);if(!f.il||P[t.debugId])return t;P[t.debugId]=!0;var r=c(t),i=/[?&](?:callback|cb)=([^&#]+)/,o=/(.*)\.([^.]+)/,a=/^(\w+)(\.|$)(.*)$/;function s(e,t){if(!e)return t;const r=e.match(a),n=r[1];return s(r[3],t[n])}return r.inPlace(Node.prototype,C,"dom-"),t.on("dom-start",(function(e){!function(e){if(!e||"string"!=typeof e.nodeName||"script"!==e.nodeName.toLowerCase())return;if("function"!=typeof e.addEventListener)return;var n=(a=e.src,c=a.match(i),c?c[1]:null);var a,c;if(!n)return;var u=function(e){var t=e.match(o);if(t&&t.length>=3)return{key:t[2],parent:s(t[1],window)};return{key:e,parent:window}}(n);if("function"!=typeof u.parent[u.key])return;var d={};function l(){t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,D.m$)(!1)),e.removeEventListener("error",f,(0,D.m$)(!1))}function f(){t.emit("jsonp-error",[],d),t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,D.m$)(!1)),e.removeEventListener("error",f,(0,D.m$)(!1))}r.inPlace(u.parent,[u.key],"cb-",d),e.addEventListener("load",l,(0,D.m$)(!1)),e.addEventListener("error",f,(0,D.m$)(!1)),t.emit("new-jsonp",[e.src],d)}(e[0])})),t}const k={};function L(e){const t=function(e){return(e||n.ee).get("mutation")}(e);if(!f.il||k[t.debugId])return t;k[t.debugId]=!0;var r=c(t),i=f._A.MutationObserver;return i&&(window.MutationObserver=function(e){return this instanceof i?new i(r(e,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype),t}const H={};function M(e){const t=function(e){return(e||n.ee).get("promise")}(e);if(H[t.debugId])return t;H[t.debugId]=!0;var r=t.context,i=c(t),a=f._A.Promise;return a&&function(){function e(r){var n=t.context(),o=i(r,"executor-",n,null,!1);const s=Reflect.construct(a,[o],e);return t.context(s).getCtx=function(){return n},s}f._A.Promise=e,Object.defineProperty(e,"name",{value:"Promise"}),e.toString=function(){return a.toString()},Object.setPrototypeOf(e,a),["all","race"].forEach((function(r){const n=a[r];e[r]=function(e){let i=!1;[...e||[]].forEach((e=>{this.resolve(e).then(a("all"===r),a(!1))}));const o=n.apply(this,arguments);return o;function a(e){return function(){t.emit("propagate",[null,!i],o,!1,!1),i=i||!e}}}})),["resolve","reject"].forEach((function(r){const n=a[r];e[r]=function(e){const r=n.apply(this,arguments);return e!==r&&t.emit("propagate",[e,!0],r,!1,!1),r}})),e.prototype=a.prototype;const n=a.prototype.then;a.prototype.then=function(){var e=this,o=r(e);o.promise=e;for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];s[0]=i(s[0],"cb-",o,null,!1),s[1]=i(s[1],"cb-",o,null,!1);const u=n.apply(this,s);return o.nextPromise=u,t.emit("propagate",[e,!0],u,!1,!1),u},a.prototype.then[o]=n,t.on("executor-start",(function(e){e[0]=i(e[0],"resolve-",this,null,!1),e[1]=i(e[1],"resolve-",this,null,!1)})),t.on("executor-err",(function(e,t,r){e[1](r)})),t.on("cb-end",(function(e,r,n){t.emit("propagate",[n,!0],this.nextPromise,!1,!1)})),t.on("propagate",(function(e,r,n){this.getCtx&&!r||(this.getCtx=function(){if(e instanceof Promise)var r=t.context(e);return r&&r.getCtx?r.getCtx():this})}))}(),t}const U={},z="setTimeout",F="setInterval",B="clearTimeout",G="-start",q="-",K=[z,"setImmediate",F,B,"clearImmediate"];function V(e){const t=function(e){return(e||n.ee).get("timer")}(e);if(U[t.debugId]++)return t;U[t.debugId]=1;var r=c(t);return r.inPlace(f._A,K.slice(0,2),z+q),r.inPlace(f._A,K.slice(2,3),F+q),r.inPlace(f._A,K.slice(3),B+q),t.on(F+G,(function(e,t,n){e[0]=r(e[0],"fn-",null,n)})),t.on(z+G,(function(e,t,n){this.method=n,this.timerDuration=isNaN(e[1])?0:+e[1],e[0]=r(e[0],"fn-",this,n)})),t}var Z=r(50);const W={},X=["open","send"];function Y(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(W[r.debugId]++)return r;W[r.debugId]=1,b(t);var i=c(r),o=f._A.XMLHttpRequest,a=f._A.MutationObserver,s=f._A.Promise,u=f._A.setInterval,d="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],h=[],p=f._A.XMLHttpRequest=function(e){const t=new o(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(d,(a=n,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,r.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",w)}),(0,D.m$)(!1))}catch(e){(0,Z.Z)("An error occurred while intercepting XHR",e);try{r.emit("internal-error",[e])}catch(e){}}var a;return t};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",w)}if(function(e,t){for(var r in e)t[r]=e[r]}(o,p),p.prototype=o.prototype,i.inPlace(p.prototype,X,"-xhr-",w),r.on("send-xhr-start",(function(e,t){g(e,t),function(e){h.push(e),a&&(m?m.then(A):u?u(A):(v=-v,y.data=v))}(t)})),r.on("open-xhr-start",g),a){var m=s&&s.resolve();if(!u&&!s){var v=1,y=document.createTextNode(v);new a(A).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===d||A()}));function A(){for(var e=0;e<h.length;e++)g(0,h[e]);h.length&&(h=[])}function w(e,t){return t}return r}},7825:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.ajax},6660:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.jserrors},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>o,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>a});const n=r(3325).D.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},4649:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageAction},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{"use strict";r.d(t,{Ef:()=>o,J0:()=>f,Mi:()=>l,Vb:()=>a,Ye:()=>c,fm:()=>u,i9:()=>s,pB:()=>h,t9:()=>i,u0:()=>d});var n=r(7056);const i=r(3325).D.sessionReplay,o={RECORD:"recordReplay",PAUSE:"pauseReplay",REPLAY_RUNNING:"replayRunning",ERROR_DURING_REPLAY:"errorDuringReplay"},a=.12,s={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},c=1e6,u=64e3,d={[n.IK.ERROR]:15e3,[n.IK.FULL]:3e5,[n.IK.OFF]:0},l={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},f=5e3,h={API:"api"}},3112:(e,t,r)=>{"use strict";r.d(t,{HM:()=>c,Rc:()=>a,rU:()=>s,wi:()=>u});var n=r(234),i=r(8488),o=r(385);function a(e){return!!n.Yu.MO&&(0,i.H)(e)&&!0===(0,n.Mt)(e,"session_trace.enabled")}function s(e){return!0===(0,n.Mt)(e,"session_replay.preload")&&a(e)}function c(e,t){return!!a(e)&&(!!t?.isNew||!!t?.state.sessionReplayMode)}function u(e,t){const r=t.correctAbsoluteTimestamp(e);return{originalTimestamp:e,correctedTimestamp:r,timestampDiff:e-r,originTime:o.sK,correctedOriginTime:t.correctedOriginTime,originTimeDiff:Math.floor(o.sK-t.correctedOriginTime)}}},3614:(e,t,r)=>{"use strict";r.d(t,{BST_RESOURCE:()=>i,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>u,FN_START:()=>c,PUSH_STATE:()=>d,RESOURCE:()=>o,START:()=>a,c:()=>l});const n=r(3325).D.sessionTrace,i="bstResource",o="resource",a="-start",s="-end",c="fn"+a,u="fn"+s,d="pushState",l=1e3},6216:(e,t,r)=>{"use strict";r.d(t,{K8:()=>s,QZ:()=>c,cS:()=>o,sE:()=>i,t9:()=>a,vh:()=>u});var n=r(3325);const i=["click","keydown","submit"],o="api",a=n.D.softNav,s={INITIAL_PAGE_LOAD:"",ROUTE_CHANGE:1,UNSPECIFIED:2},c={INTERACTION:1,AJAX:2,CUSTOM_END:3,CUSTOM_TRACER:4},u={IP:"in progress",FIN:"finished",CAN:"cancelled"}},7836:(e,t,r)=>{"use strict";r.d(t,{BODY:()=>E,CB_END:()=>_,CB_START:()=>u,END:()=>w,FEATURE_NAME:()=>i,FETCH:()=>R,FETCH_BODY:()=>v,FETCH_DONE:()=>m,FETCH_START:()=>g,FN_END:()=>c,FN_START:()=>s,INTERACTION:()=>f,INTERACTION_API:()=>d,INTERACTION_EVENTS:()=>o,JSONP_END:()=>b,JSONP_NODE:()=>p,JS_TIME:()=>x,MAX_TIMER_BUDGET:()=>a,REMAINING:()=>l,SPA_NODE:()=>h,START:()=>A,originalSetTimeout:()=>y});var n=r(234);const i=r(3325).D.spa,o=["click","submit","keypress","keydown","keyup","change"],a=999,s="fn-start",c="fn-end",u="cb-start",d="api-ixn-",l="remaining",f="interaction",h="spaNode",p="jsonpNode",g="fetch-start",m="fetch-done",v="fetch-body-",b="jsonp-end",y=n.Yu.ST,A="-start",w="-end",E="-body",_="cb"+w,x="jsTime",R="fetch"},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},8488:(e,t,r)=>{"use strict";r.d(t,{H:()=>o});var n=r(234),i=r(385);const o=e=>i.il&&!0===(0,n.Mt)(e,"privacy.cookies_enabled")},2758:(e,t,r)=>{"use strict";r.d(t,{j:()=>_});var n=r(3325),i=r(234),o=r(5546),a=r(8325),s=r(8e3),c=r(3960),u=r(385),d=r(50),l=r(3081),f=r(8632),h=r(7144);const p=["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start",h.Ef.RECORD,h.Ef.PAUSE],g=["setErrorHandler","finished","addToTrace","addRelease"];var m=r(7894),v=r(7056);function b(){const e=(0,f.gG)();p.forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&o.push(e.api[t](...n))})),o.length>1?o:o[0]}(t,...n)}}))}const y={};var A=r(2825);const w=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let E=!1;function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=arguments.length>2?arguments[2]:void 0,_=arguments.length>3?arguments[3]:void 0,{init:x,info:R,loader_config:S,runtime:T={loaderType:p},exposed:N=!0}=t;const O=(0,f.gG)();R||(x=O.init,R=O.info,S=O.loader_config),(0,i.Dg)(e.agentIdentifier,x||{}),(0,i.GE)(e.agentIdentifier,S||{}),R.jsAttributes??={},u.v6&&(R.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,R);const I=(0,i.P_)(e.agentIdentifier),D=[R.beacon,R.errorBeacon];E||(I.proxy.assets&&(w(I.proxy.assets),D.push(I.proxy.assets)),I.proxy.beacon&&D.push(I.proxy.beacon),b(),(0,f.EZ)("activatedFeatures",A.T),e.runSoftNavOverSpa&&=!0===I.soft_navigations.enabled&&I.feature_flags.includes("soft_nav")),T.denyList=[...I.ajax.deny_list||[],...I.ajax.block_internal?D:[]],T.ptid=e.agentIdentifier,(0,i.sU)(e.agentIdentifier,T),void 0===e.api&&(e.api=function(e,t){let f=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t||(0,s.RP)(e,"api");const p={};var b=a.ee.get(e),A=b.get("tracer");y[e]=v.IK.OFF,b.on(h.Ef.REPLAY_RUNNING,(t=>{y[e]=t}));var w="api-",E=w+"ixn-";function _(t,r,n,o){const a=(0,i.C5)(e);return null===r?delete a.jsAttributes[t]:(0,i.CX)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),S(w,n,!0,o||null===r?"session":void 0)(t,r)}function x(){}g.forEach((e=>{p[e]=S(w,e,!0,"api")})),p.addPageAction=S(w,"addPageAction",!0,n.D.pageAction),p.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,S(w,"setPageViewName",!0)()},p.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return _(e,t,"setCustomAttribute",r);(0,d.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,d.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},p.setUserId=function(e){if("string"==typeof e||null===e)return _("enduser.id",e,"setUserId",!0);(0,d.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},p.setApplicationVersion=function(e){if("string"==typeof e||null===e)return _("application.version",e,"setApplicationVersion",!1);(0,d.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},p.start=()=>{try{(0,o.p)(l.xS,["API/start/called"],void 0,n.D.metrics,b),b.emit("manual-start-all")}catch(e){(0,d.Z)("An unexpected issue occurred",e)}},p[h.Ef.RECORD]=function(){(0,o.p)(l.xS,["API/recordReplay/called"],void 0,n.D.metrics,b),(0,o.p)(h.Ef.RECORD,[],void 0,n.D.sessionReplay,b)},p[h.Ef.PAUSE]=function(){(0,o.p)(l.xS,["API/pauseReplay/called"],void 0,n.D.metrics,b),(0,o.p)(h.Ef.PAUSE,[],void 0,n.D.sessionReplay,b)},p.interaction=function(e){return(new x).get("object"==typeof e?e:{})};const R=x.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(l.xS,["API/createTracer/called"],void 0,n.D.metrics,b),f||(0,o.p)(E+"tracer",[(0,m.z)(),e,r],i,n.D.spa,b),function(){if(A.emit((a?"":"no-")+"fn-start",[(0,m.z)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){const t="string"==typeof e?new Error(e):e;throw A.emit("fn-err",[arguments,this,t],r),t}finally{A.emit("fn-end",[(0,m.z)()],r)}}}};function S(e,t,r,i){return function(){return(0,o.p)(l.xS,["API/"+t+"/called"],void 0,n.D.metrics,b),i&&(0,o.p)(e+t,[(0,m.z)(),...arguments],r?null:this,i,b),r?void 0:this}}function T(){r.e(111).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,s.LP)(e,"api")})).catch((e=>{(0,d.Z)("Downloading runtime APIs failed...",e),b.abort()}))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{R[e]=S(E,e,void 0,f?n.D.softNav:n.D.spa)})),p.setCurrentRouteName=f?S(E,"routeName",void 0,n.D.softNav):S(w,"routeName",!0,n.D.spa),p.noticeError=function(t,r){"string"==typeof t&&(t=new Error(t)),(0,o.p)(l.xS,["API/noticeError/called"],void 0,n.D.metrics,b),(0,o.p)("err",[t,(0,m.z)(),!1,r,!!y[e]],void 0,n.D.jserrors,b)},u.il?(0,c.b2)((()=>T()),!0):T(),p}(e.agentIdentifier,_,e.runSoftNavOverSpa)),void 0===e.exposed&&(e.exposed=N),E=!0}},8993:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",softNav:"soft_navigations",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.softNav]:9,[n.sessionReplay]:10}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({111:"nr-spa",164:"nr-spa-compressor",433:"nr-spa-recorder"}[e]+"-1.260.1.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.260.1.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={111:"sha512-1vbJLadsUx7r3ct9dcZ8xWYWRwjt1ZgNM7ZGewgLIexOrwwEwfm93GALuGB8Z5SoqqsLLjmx45VxQ6hbq5d4tA==",433:"sha512-GiLzIBj56lJ8WJ2NzkmQbbP5bDfqc0PbS30+FFrYgYBhzMOWg3PDNb2OYCaGiWyvQagVT9CeRMBrrFe45RBNVA==",164:"sha512-89TYqrPxRo9GwsbxmRSsCdyC5BH41uIPaW0FFv5w92e97EnshpUozEOnd12Dqnl7LGF+GS5XJY3LfGAh5DzLyA=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={801:0,92:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.260.1.PROD"]=self["webpackChunk:NRBA-1.260.1.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(8993);var e=i(50),t=i(7144),r=i(4402),n=i(8325);class o{agentIdentifier;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.ky)(16);this.agentIdentifier=e,this.ee=n.ee.get(e)}#e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.Z)("Call to agent api ".concat(t," failed. The API is not currently initialized."))}addPageAction(e,t){return this.#e("addPageAction",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}finished(e){return this.#e("finished",e)}addRelease(e,t){return this.#e("addRelease",e,t)}start(e){return this.#e("start",e)}recordReplay(){return this.#e(t.Ef.RECORD)}pauseReplay(){return this.#e(t.Ef.PAUSE)}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}}var a=i(3325),s=i(234);const c=Object.values(a.D);function u(e){const t={};return c.forEach((r=>{t[r]=function(e,t){return!0===(0,s.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var d=i(2758);var l=i(8e3),f=i(5938),h=i(3960),p=i(385),g=i(3112),m=i(8488),v=i(7872);class b extends f.W{constructor(e,t,r){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=n,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,s.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto?(0,l.RP)(e,r):this.ee.on("manual-start-all",(0,v.Z)((()=>{(0,l.RP)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()})))}importAggregator(){let t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate||!this.auto)return;this.onAggregateImported=new Promise((e=>{t=e}));const n=async()=>{let n;try{if((0,m.H)(this.agentIdentifier)){const{setupAgentSession:e}=await i.e(111).then(i.bind(i,9446));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t),this.featureName===a.D.sessionReplay&&this.abortHandler?.()}try{if(!this.#t(this.featureName,n))return(0,l.LP)(this.agentIdentifier,this.featureName),void t(!1);const{lazyFeatureLoader:e}=await i.e(111).then(i.bind(i,8582)),{Aggregate:o}=await e(this.featureName,"aggregate");this.featAggregate=new o(this.agentIdentifier,this.aggregator,r),t(!0)}catch(r){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),r),this.abortHandler?.(),(0,l.LP)(this.agentIdentifier,this.featureName,!0),t(!1),this.ee&&this.ee.abort()}};p.il?(0,h.b2)((()=>n()),!0):n()}#t(e,t){return e!==a.D.sessionReplay||(0,g.HM)(this.agentIdentifier,t)}}var y=i(7633);class A extends b{static featureName=y.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,y.t,r),this.importAggregator()}}var w=i(1117),E=i(1284);class _ extends w.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,E.D)(e,(function(e,r){t[e]=x(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,E.D)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=x(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=R(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=x(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=Object.values(this.aggregatedData[r]||{}),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function x(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=R(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function R(e){return{t:e,min:e,max:e,sos:e*e,c:1}}var S=i(8632),T=i(4351);var N=i(5546),O=i(7956),I=i(3239),D=i(9251),P=i(7894);class C extends b{static featureName=D.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,D.t,r),p.il&&((0,O.N)((()=>(0,N.p)("docHidden",[(0,P.z)()],void 0,D.t,this.ee)),!0),(0,I.bP)("pagehide",(()=>(0,N.p)("winPagehide",[(0,P.z)()],void 0,D.t,this.ee))),this.importAggregator())}}var j=i(3081);class k extends b{static featureName=j.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,j.t9,r),this.importAggregator()}}var L=i(6660);class H{constructor(e,t,r,n,i){this.name="UncaughtError",this.message="string"==typeof e?e:(0,T.P)(e),this.sourceURL=t,this.line=r,this.column=n,this.__newrelic=i}}function M(e){return F(e)?e:new H(void 0!==e?.message?e.message:e,e?.filename||e?.sourceURL,e?.lineno||e?.line,e?.colno||e?.col,e?.__newrelic)}function U(e){let t="Unhandled Promise Rejection";if(F(e?.reason))try{return e.reason.message=t+": "+e.reason.message,M(e.reason)}catch(t){return M(e.reason)}if(void 0===e.reason)return M(t);const r=M(e.reason);return r.message=t+": "+r?.message,r}function z(e){if(e.error instanceof SyntaxError&&!/:\d+$/.test(e.error.stack?.trim())){const t=new H(e.message,e.filename,e.lineno,e.colno,e.error.__newrelic);return t.name=SyntaxError.name,t}return F(e.error)?e.error:M(e)}function F(e){return e instanceof Error&&!!e.stack}class B extends b{static featureName=L.t;#r=!1;constructor(e,r){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,r,L.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("internal-error",(e=>{this.abortHandler&&(0,N.p)("ierr",[M(e),(0,P.z)(),!0,{},this.#r],void 0,this.featureName,this.ee)})),this.ee.on(t.Ef.REPLAY_RUNNING,(e=>{this.#r=e})),p._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,N.p)("err",[U(e),(0,P.z)(),!1,{unhandledPromiseRejection:1},this.#r],void 0,this.featureName,this.ee)}),(0,I.m$)(!1,this.removeOnAbort?.signal)),p._A.addEventListener("error",(e=>{this.abortHandler&&(0,N.p)("err",[z(e),(0,P.z)(),!1,{},this.#r],void 0,this.featureName,this.ee)}),(0,I.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#n,this.importAggregator()}#n(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}var G=i(2210);let q=1;const K="nr@id";function V(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===p._A?0:(0,G.X)(e,K,(function(){return q++}))}function Z(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,T.P)(e).length}catch(e){return}}}var W=i(7806),X=i(7243);class Y{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,s.DL)(this.agentIdentifier);if(!t)return null;var n=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,o=(t.trustKey||"").toString()||null;if(!n||!i)return null;var a=(0,r.M)(),c=(0,r.Ht)(),u=Date.now(),d={spanId:a,traceId:c,timestamp:u};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(d.traceContextParentHeader=this.generateTraceContextParentHeader(a,c),d.traceContextStateHeader=this.generateTraceContextStateHeader(a,u,n,i,o)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(d.newrelicHeader=this.generateTraceHeader(a,c,u,n,i,o)),d}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,o){if(!("function"==typeof p._A?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa((0,T.P)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,s.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,s.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var n=0;n<r.allowed_origins.length;n++){var i=(0,X.e)(r.allowed_origins[n]);if(e.hostname===i.hostname&&e.protocol===i.protocol&&e.port===i.port){t=!0;break}}return t}isDtEnabled(){var e=(0,s.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,s.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,s.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,s.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var J=i(7825),Q=i(1199),ee=["load","error","abort","timeout"],te=ee.length,re=s.Yu.REQ,ne=s.Yu.XHR;class ie extends b{static featureName=J.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,J.t,r),this.dt=new Y(e),this.handler=(e,t,r,n)=>(0,N.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};p._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const r={status:t.responseStatus},n={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};oe(r,t.name),this.handler("xhr",[r,n,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,a.D.ajax)}}))}catch(e){}(0,W.u5)(this.ee),(0,W.Kf)(this.ee),function(e,t,r,n){function i(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=E,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){_(t,e)}),(0,I.m$)(!1)),p.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,I.m$)(!1))}function o(e){this.params={method:e[0]},oe(this,e[1]),this.metrics={}}function c(t,r){var i=(0,s.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var o=n.generateTracePayload(this.parsedOrigin);if(o){var a=!1;o.newrelicHeader&&(r.setRequestHeader("newrelic",o.newrelicHeader),a=!0),o.traceContextParentHeader&&(r.setRequestHeader("traceparent",o.traceContextParentHeader),o.traceContextStateHeader&&r.setRequestHeader("tracestate",o.traceContextStateHeader),a=!0),a&&(this.dt=o)}}function u(e,r){var n=this.metrics,i=e[0],o=this;if(n&&i){var a=Z(i);a&&(n.txSize=a)}this.startTime=(0,P.z)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==e.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof o.end)&&o.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<te;s++)r.addEventListener(ee[s],this.listener,(0,I.m$)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function l(e,t){var r=""+V(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function f(e,t){var r=""+V(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function h(){this.endTime=(0,P.z)()}function g(e,r){r instanceof ne&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof ne&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof ne&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,P.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,P.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&p.il&&(t=""+p._A.location.href):e[0]&&e[0].url?t=e[0].url:p._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,X.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var i=n.generateTracePayload(this.parsedOrigin);if(i&&(i.newrelicHeader||i.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,i)&&(this.dt=i);else{var o={};for(var a in r)o[a]=r[a];o.headers=new Headers(r.headers||{}),s(o.headers,i)&&(this.dt=i),e.length>1?e[1]=o:e.push(o)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function A(e,t){this.params={},this.metrics={},this.startTime=(0,P.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof re?r=i.url:p._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),oe(this,r);var o=(""+(i&&i instanceof re&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.body=n.body,this.txSize=Z(n.body)||0}function w(e,t){if(this.endTime=(0,P.z)(),this.params||(this.params={}),(0,Q.zh)(this.params))return;let n;this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);const i={txSize:this.txSize,rxSize:n,duration:(0,P.z)()-this.startTime};r("xhr",[this.params,i,this.startTime,this.endTime,"fetch"],this,a.D.ajax)}function E(e){const t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(let t=0;t<te;t++)e.removeEventListener(ee[t],this.listener,!1);t.aborted||(0,Q.zh)(t)||(n.duration=(0,P.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):_(this,e),n.cbTime=this.cbTime,r("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,a.D.ajax))}}function _(e,r){e.params.status=r.status;var n=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?Z(e.response):"text"===r||""===r||void 0===r?Z(e.responseText):void 0}(r,e.lastSize);if(n&&(e.metrics.rxSize=n),e.sameOrigin){var i=r.getResponseHeader("X-NewRelic-App-Data");i&&((0,N.p)(j.mY,["Ajax/CrossApplicationTracing/Header/Seen"],void 0,a.D.metrics,t),e.params.cat=i.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",i),t.on("open-xhr-start",o),t.on("open-xhr-end",c),t.on("send-xhr-start",u),t.on("xhr-cb-time",d),t.on("xhr-load-added",l),t.on("xhr-load-removed",f),t.on("xhr-resolved",h),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",A),t.on("fn-start",v),t.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}function oe(e,t){var r=(0,X.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var ae=i(3614);const{BST_RESOURCE:se,RESOURCE:ce,START:ue,END:de,FEATURE_NAME:le,FN_END:fe,FN_START:he,PUSH_STATE:pe}=ae;var ge=i(7056);class me extends b{static featureName=t.t9;#i;constructor(e,r){let n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,r,t.t9,i),this.replayRunning=!1;try{n=JSON.parse(localStorage.getItem("".concat(ge.Bq,"_").concat(ge.K4)))}catch(e){}(0,g.Rc)(e)&&this.ee.on("recordReplay",(()=>this.#o())),this.#a(n)?(this.#i=n?.sessionReplayMode,this.#s()):this.importAggregator(),this.ee.on("err",(e=>{this.replayRunning&&(this.errorNoticed=!0,(0,N.p)(t.Ef.ERROR_DURING_REPLAY,[e],void 0,this.featureName,this.ee))})),this.ee.on(t.Ef.REPLAY_RUNNING,(e=>{this.replayRunning=e}))}#a(e){return e&&(e.sessionReplayMode===ge.IK.FULL||e.sessionReplayMode===ge.IK.ERROR)||(0,g.rU)(this.agentIdentifier)}#c=!1;async#s(e){if(!this.#c){this.#c=!0;try{const{Recorder:t}=await Promise.all([i.e(111),i.e(433)]).then(i.bind(i,4345));this.recorder??=new t({mode:this.#i,agentIdentifier:this.agentIdentifier,trigger:e,ee:this.ee}),this.recorder.startRecording(),this.abortHandler=this.recorder.stopRecording}catch(e){}this.importAggregator({recorder:this.recorder,errorNoticed:this.errorNoticed})}}#o(){this.featAggregate?this.featAggregate.mode!==ge.IK.FULL&&this.featAggregate.initializeRecording(ge.IK.FULL,!0):(this.#i=ge.IK.FULL,this.#s(t.pB.API),this.recorder&&this.recorder.parent.mode!==ge.IK.FULL&&(this.recorder.parent.mode=ge.IK.FULL,this.recorder.stopRecording(),this.recorder.startRecording(),this.abortHandler=this.recorder.stopRecording))}}var ve=i(6216);class be extends b{static featureName=ve.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,ve.t9,r),!p.il||!s.Yu.MO)return;const n=(0,W.QU)(this.ee),i=(0,W.em)(this.ee),o=()=>(0,N.p)("newURL",[(0,P.z)(),""+window.location],void 0,this.featureName,this.ee);n.on("pushState-end",o),n.on("replaceState-end",o);try{this.removeOnAbort=new AbortController}catch(e){}(0,I.bP)("popstate",(e=>(0,N.p)("newURL",[e.timeStamp,""+window.location],void 0,this.featureName,this.ee)),!0,this.removeOnAbort?.signal);let a=!1;const c=new s.Yu.MO(((e,t)=>{a||(a=!0,requestAnimationFrame((()=>{(0,N.p)("newDom",[(0,P.z)()],void 0,this.featureName,this.ee),a=!1})))})),u=(0,v.D)((e=>{(0,N.p)("newUIEvent",[e],void 0,this.featureName,this.ee),c.observe(document.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),100,{leading:!0});i.on("fn-start",(e=>{let[t]=e;ve.sE.includes(t?.type)&&u(t)}));for(let e of ve.sE)document.addEventListener(e,(()=>{}));this.abortHandler=function(){this.removeOnAbort?.abort(),c.disconnect(),this.abortHandler=void 0},this.importAggregator({domObserver:c})}}var ye=i(7836);const{FEATURE_NAME:Ae,START:we,END:Ee,BODY:_e,CB_END:xe,JS_TIME:Re,FETCH:Se,FN_START:Te,CB_START:Ne,FN_END:Oe}=ye;var Ie=i(4649);class De extends b{static featureName=Ie.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,Ie.t,r),this.importAggregator()}}new class extends o{constructor(t,r){super(r),p._A?(this.sharedAggregator=new _({agentIdentifier:this.agentIdentifier}),this.features={},(0,S.h5)(this.agentIdentifier,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(A),this.runSoftNavOverSpa=[...this.desiredFeatures].some((e=>e.featureName===a.D.softNav)),(0,d.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initialize the agent. Could not determine the runtime environment.")}get config(){return{info:this.info,init:this.init,loader_config:this.loader_config,runtime:this.runtime}}run(){try{const t=u(this.agentIdentifier),r=[...this.desiredFeatures];r.sort(((e,t)=>a.p[e.featureName]-a.p[t.featureName])),r.forEach((r=>{if(!t[r.featureName]&&r.featureName!==a.D.pageViewEvent)return;if(this.runSoftNavOverSpa&&r.featureName===a.D.spa)return;if(!this.runSoftNavOverSpa&&r.featureName===a.D.softNav)return;const n=function(e){switch(e){case a.D.ajax:return[a.D.jserrors];case a.D.sessionTrace:return[a.D.ajax,a.D.pageViewEvent];case a.D.sessionReplay:return[a.D.sessionTrace];case a.D.pageViewTiming:return[a.D.pageViewEvent];default:return[]}}(r.featureName);n.every((e=>e in this.features))||(0,e.Z)("".concat(r.featureName," is enabled but one or more dependent features has not been initialized (").concat((0,T.P)(n),"). This may cause unintended consequences or missing data...")),this.features[r.featureName]=new r(this.agentIdentifier,this.sharedAggregator)}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,S.fP)();delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator;return r.ee.get(this.agentIdentifier).abort(),!1}}}({features:[ie,A,C,class extends b{static featureName=le;constructor(e,t){super(e,t,le,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]);if(!(0,m.H)(this.agentIdentifier))return void(0,l.o5)(this.agentIdentifier,this.featureName);const r=this.ee;let n;(0,W.QU)(r),this.eventsEE=(0,W.em)(r),this.eventsEE.on(he,(function(e,t){this.bstStart=(0,P.z)()})),this.eventsEE.on(fe,(function(e,t){(0,N.p)("bst",[e[0],t,this.bstStart,(0,P.z)()],void 0,a.D.sessionTrace,r)})),r.on(pe+ue,(function(e){this.time=(0,P.z)(),this.startPath=location.pathname+location.hash})),r.on(pe+de,(function(e){(0,N.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,a.D.sessionTrace,r)}));try{n=new PerformanceObserver((e=>{const t=e.getEntries();(0,N.p)(se,[t],void 0,a.D.sessionTrace,r)})),n.observe({type:ce,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:n})}},me,k,De,B,be,class extends b{static featureName=Ae;constructor(e,t){var r;if(super(e,t,Ae,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),r=this,!p.il)return;try{this.removeOnAbort=new AbortController}catch(e){}let n,i=0;const o=this.ee.get("tracer"),a=(0,W._L)(this.ee),s=(0,W.Lg)(this.ee),c=(0,W.BV)(this.ee),u=(0,W.Kf)(this.ee),d=this.ee.get("events"),l=(0,W.u5)(this.ee),f=(0,W.QU)(this.ee),h=(0,W.Gm)(this.ee);function g(e,t){f.emit("newURL",[""+window.location,t])}function m(){i++,n=window.location.hash,this[Te]=(0,P.z)()}function v(){i--,window.location.hash!==n&&g(0,!0);var e=(0,P.z)();this[Re]=~~this[Re]+e-this[Te],this[Oe]=e}function b(e,t){e.on(t,(function(){this[t]=(0,P.z)()}))}this.ee.on(Te,m),s.on(Ne,m),a.on(Ne,m),this.ee.on(Oe,v),s.on(xe,v),a.on(xe,v),this.ee.on("fn-err",(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n[2]?.__newrelic?.[e]||(0,N.p)("function-err",[...n],void 0,r.featureName,r.ee)})),this.ee.buffer([Te,Oe,"xhr-resolved"],this.featureName),d.buffer([Te],this.featureName),c.buffer(["setTimeout"+Ee,"clearTimeout"+we,Te],this.featureName),u.buffer([Te,"new-xhr","send-xhr"+we],this.featureName),l.buffer([Se+we,Se+"-done",Se+_e+we,Se+_e+Ee],this.featureName),f.buffer(["newURL"],this.featureName),h.buffer([Te],this.featureName),s.buffer(["propagate",Ne,xe,"executor-err","resolve"+we],this.featureName),o.buffer([Te,"no-"+Te],this.featureName),a.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"],this.featureName),b(l,Se+we),b(l,Se+"-done"),b(a,"new-jsonp"),b(a,"jsonp-end"),b(a,"cb-start"),f.on("pushState-end",g),f.on("replaceState-end",g),window.addEventListener("hashchange",g,(0,I.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("load",g,(0,I.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("popstate",(function(){g(0,i>1)}),(0,I.m$)(!0,this.removeOnAbort?.signal)),this.abortHandler=this.#n,this.importAggregator()}#n(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}],loaderType:"spa"})})()})();</script><script src="https://consent.cookiefirst.com/sites/marisa.com.br-fc86e1c0-d754-46a4-81dd-bfd0f4be72cb/consent.js"></script>

    <script>
        (function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PHC34QS');
    </script>

	<!-- tag favoritos -->
	<script src="https://wishlist.konfidency.com.br/marisa/loader.js"></script>

	<title>
		Login | Marisa</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="keywords">
<meta name="description">
<meta name="robots" content="index,follow">
<link rel="shortcut icon" type="image/x-icon" media="all" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/img/favicon.ico" />

	<script>
		var urlLocal = window.location.pathname;
		const urls = [
			"/c/masculino",
			"/blusa-infantil-feminina-kyly-moletinho-preto/p/70152405497?siteName=Marisa",
			"/conjunto-infantil-masculino-camiseta-e-bermuda-kyly-azul/p/72626654068?siteName=Marisa",
			"/pijama-infantil-masculino-camiseta-e-calÃ§a-kyly-cinza/p/78120042819?siteName=Marisa",
			"/conjunto-infantil-feminino-blusa-e-short-kyly-cinza/p/73637545219?siteName=Marisa",
			"/bermuda-pijama-infantil-masculina-kyly-meia-malha-azul/p/70911400508?siteName=Marisa",
			"/vestido-infantil-nanai-cetim-preto/p/77187345140?siteName=Marisa",
			"/conjunto-infantil-feminino-blusa-e-short-nanai-branco/p/78005439848?siteName=Marisa",
			"/roupas-m/masculino/c/casacos-jaquetas-m?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=",
			"/Ãculos-de-sol-feminino-gateado-marisa-marrom/p/10049164558?siteName=Marisa",
			"/feminino/c/calcados?sort=topSold&q=%3AnewOnStore",
			"/feminino/c/plus-size?sort=topDiscount&q=%3AnewOnStore&show=Page",
			"/conjunto-infantil-feminino-casaco-e-calÃ§a-kyly-preto/p/72558528618?siteName=Marisa",
			"/vestido-infantil-kyly-meia-malha-azul/p/78162321178?siteName=Marisa",
			"/regata-teen-masculina-lemon-meia-malha-cinza/p/70553473516?siteName=Marisa",
			"/caderneta-anotaÃ§Ãµes-estampa-herÃ³is-marvel--preto/p/10053007810?siteName=Marisa",
			"/Ãculos-de-sol-feminino-redondo-marisa-preto/p/10038466977?siteName=Marisa",
			"/blusa-infantil-feminina-kyly-meia-malha-preto/p/77299418607?siteName=Marisa",
			"/regata-feminina-cropped-bolso-marisa-amarelo/p/10028603191?siteName=Marisa",
			"/calÃ§a-infantil-legging-glitter-marisa--rosa/p/10034548479?siteName=Marisa",
			"/conjunto-infantil-masculino-camiseta-e-bermuda-kyly-preto/p/77744841017?siteName=Marisa",
			"/c/masculino?q=%3AnewOnStore%3Abrand%3Atopper&text=",
			"/camiseta-teia---spider-man-cinza/p/78046183515?siteName=Marisa",
			"/calÃ§a-teen-masculina-lemon-moletom-moving-preto/p/77973130652?siteName=Marisa"
		];

		urls.forEach(element => {
			if (urlLocal === element) {
			document.querySelector('meta[name="robots"]').setAttribute("content", "noindex");
		}
		});

	</script>

	<link rel="preload" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/glyphicons-halflings-regular.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/ionicons//ionicons.ttf?v=2.0.1" as="font" type="font/woff2" crossorigin>		
		
		<link rel="preload" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/plutos/sans/PlutoSansBold.otf" as="font" type="font/otf" crossorigin>
		<link rel="preload" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/plutos/sans/PlutoSansBold.woff" as="font" type="font/woff" crossorigin>
		<link rel="preload" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/plutos/sans/PlutoSansBold.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/plutos/sans/PlutoSansBold.ttf" as="font" type="font/ttf" crossorigin>		
		
		<link async rel="stylesheet" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/fonts/instal_fonts.css">
		<link async rel="stylesheet" type="text/css" media="all" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/css/third-party.0e95aa0b.css"/>
		<link async rel="stylesheet" type="text/css" media="all" href="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/css/custom.a30b9981.css"/>

		<link rel="stylesheet" type="text/css" media="all" href="https://scripts2.marisa.com.br/_ui/addons/liveeditaddon/responsive/common/css/liveeditaddon.css"/>
		<link rel="stylesheet" type="text/css" media="all" href="https://scripts2.marisa.com.br/_ui/addons/assistedservicestorefront/responsive/common/css/assistedservicestorefront.css"/>
		<script type="text/javascript" data-cookiefirst-category="performance"  src="https://scripts2.marisa.com.br/_ui/shared/js/analyticsmediator.js"></script>






  







<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.marisa.com.br",
            "logo": "https://images2.marisa.com.br/medias/sys_master/images/images/h51/hb8/10800131768350/logo-nova-marisa.svg",
            "name":"Marisa",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pesquisa.marisa.com.br/busca?q={search_term_string}",
              "query-input":"required name=search_term_string"
            }
        }
    </script>

    








</head>

<body itemscope="" itemtype="https://schema.org/ClothingStore" class="page-login pageType-ContentPage template-pages-LoginPageTemplate pageLabel-login language-pt" data-device="desktop" data-page-uid="login" data-intima="false">
    










<noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHC34QS" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>

	<main data-currency-iso-code="BRL">
            <a href="#skip-to-content" class="skiptocontent" data-role="none">Skip to content</a>
            <a href="#skiptonavigation" class="skiptonavigation" data-role="none">Skip to navigation</a>

           <!-- Component LGPD -->
           <!-- RemoÃ§Ã£o modal LGPD (PLATF-379)
            
            components:lgpd /
        
            -->
           <!-- Component LGPD /-->

            <header id="js-geolocalization-header" class="main-header js-mainHeader">
	<div class="yCmsContentSlot">
<script id="mimo-short-videos-sdk" defer src="https://shorts.mimo.com.br/v1/index.js" data-customerid="9f77b96b-ade6-49b3-b0ed-0190aa21edac"></script><style type="text/css">
  .bgfaixa-topo {background: rgb(236,0,140); background: linear-gradient(90deg, rgba(236,0,140,1) 0%, rgba(236,0,140,1) 47%, rgba(198,3,110,1) 80%); width: 100%; height: auto; padding: 0; max-width: 100%}
</style>


<!-- ######## DESKTOP ######### -->
<div class="container_fluid bgfaixa-topo hidden-xs hidden-sm">
  <div class="container_marisa">
    <div class="js-container-preload container-preload text-center">

      <a href="https://www.marisa.com.br/baixe-app-marisa" target="_blank"><img class="m-w-100 h-auto" src="https://www.marisa.com.br/medias/sys_master/images/images/hb4/h7d/15459994927134/Faixa-20240202-APP10-5offPIX-Desktop.gif" alt="Ganhe 10% OFF*  na 1ª compra NO APP com o CUPOM APP10. baixe AGORA!" width="1300" height="62"></a>

    </div>
  </div>
</div>
<!-- ########## DESKTOP ##########  -->


<!-- ########## MOBILE ######### -->
<div class="container_fluid bgfaixa-topo visible-xs visible-sm hidden-md hidden-lg">
  <div class="container">
    <div class="js-container-preload container-preload text-center">
  
      <a href="https://www.marisa.com.br/baixe-app-marisa" target="_blank"><img class="m-w-100 h-auto" src="https://www.marisa.com.br/medias/sys_master/images/images/ha0/ha9/15459995811870/Faixa-20240202-APP10-5offPIX-Mobile.gif" alt="Ganhe 10% OFF*  na 1ª compra NO APP com o CUPOM APP10. baixe AGORA!" width="566" height="81"></a>      
    </div>
  </div>
</div>
<!-- ######## MOBILE ######### --><nav class="navbar navbar-static-top navbar-inverse header-top-menubar hidden-md hidden-lg " data-uid="marisaCustomerLinks">
			<div class="container-lg">
				<div class="d-flex flex-center justify-center" id="header-top-menubar">
					<ul class="nav navbar-nav navbar-left intima-logos">
						<li  class="active" >
							<a href="/">
								<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/logo-marisa.svg" height="15" width="70" alt="Marisa" title="Marisa">
									</a>
						</li>

						<li >
							<a href="/l">
								<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/logo-marisa-underwear-white.png" height="15" alt="Marisa Íntima" title="Marisa Íntima">
									</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<nav class="navbar navbar-static-top navbar-inverse header-top-menubar hidden-sm hidden-xs " data-uid="marisaCustomerLinks">
			<div class="container">
				<div class="navbar-header text-center">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-top-menubar" aria-expanded="false">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>

					<div class="navbar-brand mobile-logo-component hidden-md hidden-lg">
						<div class="yCmsComponent yComponentWrapper visible-xs-inline-block visible-sm-inline-block">
<div class="banner__component banner" data-uid="MarisaLogoComponent">
	<a href="/" itemprop="url">
				<img class="lazy d-block" src="https://images2.marisa.com.br/medias/sys_master/images/images/h51/hb8/10800131768350/logo-nova-marisa.svg" title="Marisa" alt="Marisa" width="600" height="131"/></a>
		<meta itemprop="name" content="Marisa | Roupas e Calçados Femininos - Moda Plus Size e muito mais"/>
</div>


</div></div>

					<button type="button" class="navbar-toggle pull-right">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>

				<div class="collapse navbar-collapse" id="header-top-menubar">

					<ul class="nav navbar-nav navbar-left intima-logos" >
						<li  class="active" >
							<a href="/">
								<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/logo-marisa.svg" height="15" width="70" alt="Marisa" title="Marisa">
									</a>
						</li>

						<li >
							<a href="/l">
								<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/logo-marisa-underwear-white.png" height="15" alt="Marisa Íntima" title="Marisa Íntima">
									</a>
						</li>
					</ul>

					<ul class="nav navbar-nav menu-top f-f-pluto-sans">

						<!-- <li class="new rounded">
							<a href="/universo-m/" title="Universo M" class="bg-link-primary m-l-12">
								Universo M
							</a>
						</li> -->

						<li class="yCmsComponent">
<a href="/my-account/orders"  title="Meus Pedidos" >Meus Pedidos</a></li><li class="yCmsComponent">
<a href="/store-finder"  title="Nossas Lojas" >Nossas Lojas</a></li><li class="dropdown">
							<a href="/faq" class="dropdown-toggle">
								Atendimento<i class="ion-chevron-down hide"></i>
							</a>

							<ul class="dropdown-menu hide">
								<li class="yCmsComponent">
<a href="/como-comprar-marisa"  title="Como comprar" >Como comprar</a></li><li class="yCmsComponent">
<a href="/faq"  title="Fale conosco" >Fale conosco</a></li></ul>
						</li>


						<!-- <li class="dropdown">
							<a href="/cartao-marisa-psf" class="dropdown-toggle">
								2° via da fatura</a>
						</li> -->


						<li class="new rounded">
							<a href="/cartaomarisa" class="bg-link-primary m-l-12">
								<span class="">
									Cartões e Serviços</span>
							</a>
						</li>

					</ul>

					<div class="col-md-12 w-per-120 bg-white box-shadow-01 position-relative r-56 p-tb-10 text-center fs-15 p-lr-0 hidden js-hidden-container-msg-geo-active">
						<div class="col-md-10">
							<span>
								As ofertas de</span>

							<span class="f-w-bold">
								Entrega rápida</span>

							<span>
								estão personalizados para a região de</span>

							<span class="f-w-bold"></span>

							<a class="text-decoration-underline c-05 fs-13 cursor-pointer" data-toggle="modal" data-target="#modal-geolocation-header">
								<span>
									ALTERAR</span>
							</a>

							<button class="btn btn-primary fs-15 p-lr-40 position-relative l-200 text-transform-none" data-toggle="modal" data-target="#modal-geolocation-header">
								<span>
									Ativar</span>
							</button>

							<button type="button" class="f-w-300 c-07 fs-40 position-relative b-16 p-0 modal__geolocation--close-popup pull-right js-close-msg-active-geo-header" aria-label="Close">
								<span class="position-absolute">&times;</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div><section
		class="header-middle-menubar p-b-0 container">
		<nav class="navigation navigation--top ">
			<div class="row">
				<div
					class="col-xs-2 hidden-md hidden-lg  ">
					<a href="#" class="js-open-header--menubar">
						<i class="ion-navicon-round"></i>
						</a>
				</div>

				<div
							class="col-xs-8 col-md-3 main-logo-component">
							<div class="yCmsComponent yComponentWrapper">
<div class="banner__component banner" data-uid="MarisaLogoComponent">
	<a href="/" itemprop="url">
				<img class="lazy d-block" src="https://images2.marisa.com.br/medias/sys_master/images/images/h51/hb8/10800131768350/logo-nova-marisa.svg" title="Marisa" alt="Marisa" width="600" height="131"/></a>
		<meta itemprop="name" content="Marisa | Roupas e Calçados Femininos - Moda Plus Size e muito mais"/>
</div>


</div></div>
					<div class="col-md-4 hidden-sm hidden-xs">
						<div class="yCmsComponent header-search-component">
<div class="ui-front" data-position="2">
			<form name="search_form_MarisaIntimaSearchBox" method="get" action="//pesquisa.marisa.com.br/busca">
				<div class="input-group">

					<input type="hidden" value="" id="marisaUserId"/>
						<input type="text" id="js-site-search-input" class="form-control js-site-search-input f-f-pluto-sans" name="q" value="" maxlength="255" placeholder="O que você procura?" data-options='{"autocompleteUrl" : "/search/autocomplete/MarisaIntimaSearchBox","minCharactersBeforeRequest" : "3","waitTimeBeforeRequest" : "500","displayProductImages" : true}' >
					<span class="input-group-btn">
						<button class="btn btn-primary" type="submit">
								<span class="glyphicon glyphicon-search hidden-xs hidden-sm"></span>
								<span class="hidden-md hidden-lg">
									











<svg width="14" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11835 14C11.6474 14 14.5082 11.0899 14.5082 7.5C14.5082 3.91015 11.6474 1 8.11835 1C4.58934 1 1.72852 3.91015 1.72852 7.5C1.72852 11.0899 4.58934 14 8.11835 14Z" class="c-gray-light-svg-stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.4573 17L13.5251 13" class="c-gray-light-svg-stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
							</button>
						</span>
				</div>
			</form>
		</div>
	</div></div>

				<div class="js-load-users-menu load-users-menu   col-md-3 hidden-sm hidden-xs"
							style="min-height: 59px;">
							<i class="loading-icon"></i>
						</div>

						<div class="">
							<div id="whishList" class="whishList">
	<a href="/lista-de-desejos">
				<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/wishList.png" class="iconWishList" alt="Ícone de Coração representando a Lista de Desejos">
			</a>
		</div>
</div>

						<div
							class="js-load-mini-cart-menu load-mini-cart-menu  col-xs-2 col-md-2">
							<i class="loading-icon"></i>
						</div>

					</div>
		</nav>
		<section class="search-bar hidden-lg hidden-md ">
				<div class="container">
					<div class="yCmsComponent header-search-component">
<div class="ui-front" data-position="2">
			<form name="search_form_MarisaIntimaSearchBox" method="get" action="//pesquisa.marisa.com.br/busca">
				<div class="input-group">

					<input type="hidden" value="" id="marisaUserId"/>
						<input type="text" id="js-site-search-input" class="form-control js-site-search-input f-f-pluto-sans" name="q" value="" maxlength="255" placeholder="O que você procura?" data-options='{"autocompleteUrl" : "/search/autocomplete/MarisaIntimaSearchBox","minCharactersBeforeRequest" : "3","waitTimeBeforeRequest" : "500","displayProductImages" : true}' >
					<span class="input-group-btn">
						<button class="btn btn-primary" type="submit">
								<span class="glyphicon glyphicon-search hidden-xs hidden-sm"></span>
								<span class="hidden-md hidden-lg">
									











<svg width="14" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11835 14C11.6474 14 14.5082 11.0899 14.5082 7.5C14.5082 3.91015 11.6474 1 8.11835 1C4.58934 1 1.72852 3.91015 1.72852 7.5C1.72852 11.0899 4.58934 14 8.11835 14Z" class="c-gray-light-svg-stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.4573 17L13.5251 13" class="c-gray-light-svg-stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
							</button>
						</span>
				</div>
			</form>
		</div>
	</div></div>
			</section>
		</section>

	<div class="hidden-xs hidden-sm js-secondaryNavAccount collapse" id="accNavComponentDesktopOne">
		<ul class="nav__links"></ul>
	</div>

	<div class="hidden-xs hidden-sm js-secondaryNavCompany collapse" id="accNavComponentDesktopTwo">
		<ul class="nav__links js-nav__links">

		</ul>
	</div>

	<nav class="navigation navigation--middle js-navigation--middle hidden">
		<div class="container">
			<div class="row">
				<div class="mobile__nav__row mobile__nav__row--table">
					<div class="mobile__nav__row--table-group">
						<div class="mobile__nav__row--table-row">
							<div class="mobile__nav__row--table-cell visible-xs hidden-sm">
								<button
									class="mobile__nav__row--btn btn mobile__nav__row--btn-menu js-toggle-sm-navigation"
									type="button">
									<span class="glyphicon glyphicon-align-justify"></span>
								</button>
							</div>

							<div class="mobile__nav__row--table-cell visible-xs mobile__nav__row--seperator">
								<button
										class="mobile__nav__row--btn btn mobile__nav__row--btn-search js-toggle-xs-search hidden-sm hidden-md hidden-lg"
										type="button">
										<span class="glyphicon glyphicon-search"></span>
									</button>
								</div>

							<div
										class="mobile__nav__row--table-cell hidden-sm hidden-md hidden-lg mobile__nav__row--seperator">
										<a href="/store-finder"
											class="mobile__nav__row--btn mobile__nav__row--btn-location btn">
											<span class="glyphicon glyphicon-map-marker"></span>
										</a>
									</div>
								<div class="yCmsContentSlot miniCartSlot componentContainer mobile__nav__row--table hidden-sm hidden-md hidden-lg">
<div class="yCmsComponent mobile__nav__row--table-cell">
<section class="minicart-component-wrapper text-center   ">
	<div class="minicart-component clearfix">
		<div class="shopping-bag pull-left">
			<a href="/cart">
				<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/shopping-bag-icon.png" alt="ícone de Sacola representando Minhas Compras">
		        <span class="mini-badge">0</span>
	        </a>
		</div>

		<div class="minicart-content pull-left text-muted hidden-sm hidden-xs">
			<a href="/cart">
				<h5 class="f-f-pluto-sans f-w-400 fs-12">Minhas compras</h5>
				<span class="minicart-total f-f-pluto-sans f-w-400">
					<span class="price">R$ 0,00</span>
					<span class="total-display">(Subtotal)</span>
				</span>
			</a>
		</div>

        <section class="minicart--floating-cart text-left hidden-sm hidden-xs">
	<header class="floating-cart--main-header hidden">
		        <h5>Últimos produtos adicionados:</h5>
		    </header>
			<main class="floating-cart--main-content f-f-pluto-sans" data-empty-message="Sua sacola está vazia."></main>
			<footer class="floating-cart--main-footer hidden">
				<div class="floating-cart--promotions">
					<p class="text-center"></p>
			    </div>

			    <div class="floating-cart--totals row">
			        <div class="col-md-5" data-match-height="floating-cart--totals">
			            <div class="floating-cart--cart-quantity">
			                <span>0 item</span> na sacola:</div>

			            <div class="floating-cart--subtotal">
			                Subtotal:
			            </div>
			        </div>

			        <div class="col-md-7 text-right" data-match-height="floating-cart--totals">
			            <div class="floating-cart--cart-total">
			                R$ 0,00</div>

			            <div class="floating-cart--cart-installments">
			                <p></p>
			            </div>
			        </div>
			    </div>

			    <div class="floating-cart--confirm">
			        <a class="btn btn-success btn-block btn-square" href="/cart">Ir para a sacola</a>
			    </div>
			</footer>
		</section>

<section class="floating-cart--clone-nodes hidden">
    <div class="floating-cart--item row">
        <div class="floating-cart--product-image col-md-2">
            <img src="" class="img-responsive">
        </div>

        <div class="col-md-10">
            <h5 class="floating-cart--product-name">
                <i class="floating-cart--remove-product marisa--close-icon pull-right"></i>
                <span></span>
            </h5>

            <div class="floating-cart-item--main clearfix">
                <span class="floating-cart-item--quantity text-muted pull-left">
                    Quantidade: 0</span>

                <span class="floating-cart--product-price pull-right">
                    <strong></strong>
                </span>
            </div>
        </div>
    </div>
</section>

<section class="floating-cart--remove-form hidden">
    <form id="floating-cart--remove-form" action="/cart/removeProduct/MarisaMiniCart" method="post"><div>
<input type="hidden" name="CSRFToken" value="21a12d65-b684-47ff-b754-798cf539f0d1" />
</div></form></section>

<script>
	document.cookie = "MarisaMiniCart=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
</script>

</div>
</section>
</div></div></div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<div id="loader" class="bgLoader hidden">
		<div class="loader"></div>
	</div>

	<a id="skiptonavigation"></a>

	<div class="js-bg-menu-mobile js-close-header--menubar bg-menu-mobile hidden-md hidden-lg"></div>

<nav class="js-header--menubar header--menubar">
	<div class="js-menu--container menu--container" data-uid="NavBarComponent">
		<ul class="hidden-md hidden-lg">
					<li class="load-users-menu header--menubar--myaccount hidden-md hidden-lg">
						<div class="box-user-info">
							<div class="row-i hidden-md hidden-lg hidden-xs">
										<div class="col-sm-6 p-l-0">
											<a href="/login" class="btn btn-default btn-sm btn-rounded-10">
												Fazer login
											</a>
										</div>

										<div class="col-sm-6">
											<a href="/register" class="btn btn-default btn-sm btn-rounded-10">
												Criar conta
											</a>
										</div>
									</div>

									<div class="row-i hidden-md hidden-lg hidden-sm">
										<div class="col-xs-6 p-l-0">
											<a href="/login" class="btn btn-default btn-xs btn-rounded-8 p-4">
												Fazer login
											</a>
										</div>

										<div class="col-xs-6">
											<a href="/register" class="btn btn-default btn-xs btn-rounded-8 p-4">
												Criar conta
											</a>
										</div>
									</div>
								<span class="js-close-header--menubar close-header--menubar">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>
					</li>

					<li class="js-load-users-menu load-users-menu  header--menubar--myaccount hidden-xs hidden-sm">
						<i class="loading-icon"></i>
					</li>

					<li class="header--menubar--search js-header--menubar--search">
						<div class="yCmsComponent header-search-component">
<div class="ui-front" data-position="2">
			<form name="search_form_SearchBox" method="get" action="//pesquisa.marisa.com.br/busca">
				<div class="input-group">

					<input type="hidden" value="" id="marisaUserId"/>
						<input type="text" id="js-site-search-input" class="form-control js-site-search-input f-f-pluto-sans" name="q" value="" maxlength="255" placeholder="O que você procura?" data-options='{"autocompleteUrl" : "/search/autocomplete/SearchBox","minCharactersBeforeRequest" : "3","waitTimeBeforeRequest" : "500","displayProductImages" : true}' >
					<span class="input-group-btn">
						<button class="btn btn-primary" type="submit">
								<span class="glyphicon glyphicon-search hidden-xs hidden-sm"></span>
								<span class="hidden-md hidden-lg">
									











<svg width="14" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11835 14C11.6474 14 14.5082 11.0899 14.5082 7.5C14.5082 3.91015 11.6474 1 8.11835 1C4.58934 1 1.72852 3.91015 1.72852 7.5C1.72852 11.0899 4.58934 14 8.11835 14Z" class="c-gray-light-svg-stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.4573 17L13.5251 13" class="c-gray-light-svg-stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
							</button>
						</span>
				</div>
			</form>
		</div>
	</div></li>
				</ul>

				<div class="js-scroll container-icons-category hidden-md hidden-lg">
					<div class="box-icon-sub-category" data-uid="SubCategoria - Feminino - Novidades">
								<a href="https://www.marisa.com.br/feminino/c/roupas?sort=newOnStore" title="Novidades">
									<div class="d-flex h-center v-center" style="width: 100px; margin: 20px 12px 0;">
										<img  src="/medias/sys_master/images/images/hd1/hcd/15803576254494/BMenu-SubCategoria-Feminino-20240524-Novidades.gif" height="81" width="81" alt="" />
									</div>

									<p class="text-center m-t-12 c-secondary"> Novidades</p>
								</a>
							</div>
						<div class="box-icon-sub-category" data-uid="SubCategoria - Feminino - Vestidos">
								<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos" title="Vestidos">
									<div class="d-flex h-center v-center" style="width: 100px; margin: 20px 12px 0;">
										<img  src="/medias/sys_master/images/images/h0c/hde/15803576418334/BMenu-SubCategoria-Feminino-20240524-Vestidos.gif" height="81" width="81" alt="" />
									</div>

									<p class="text-center m-t-12 c-secondary"> Vestidos</p>
								</a>
							</div>
						<div class="box-icon-sub-category" data-uid="SubCategoria - Feminino - Blusas">
								<a href="https://www.marisa.com.br/roupas/feminino/c/blusas" title="Blusas">
									<div class="d-flex h-center v-center" style="width: 100px; margin: 20px 12px 0;">
										<img  src="/medias/sys_master/images/images/he3/ha4/15803575861278/BMenu-SubCategoria-Feminino-20240524-Blusas.gif" height="81" width="81" alt="" />
									</div>

									<p class="text-center m-t-12 c-secondary"> Blusas</p>
								</a>
							</div>
						</div>

				<p class="p-t-20 p-lr-12 p-b-12 fs-18 m-0 hidden-md hidden-lg f-f-pluto-neutral f-w-300">
					Todas as <span class="text-primary">categorias</span></p>

				<ul class="container-main-categories f-f-pluto-sans" data-component-uid="NavBarComponent">
					<li class="js-first-level header-menubar-first-level-link" data-uid="FemininoCategories">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="hidden-md hidden-lg " title="Feminino" >
			<div class="first-level-link-menu">
				<span>
					Feminino</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Marisa_link_Feminino"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/feminino/c/roupas" class="hidden-sm hidden-xs " title="Feminino" >
			Feminino</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h01/h3d/15803576287262/BMenu-SubCategoria-Feminino-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hd1/hcd/15803576254494/BMenu-SubCategoria-Feminino-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h06/h6f/15803576221726/BMenu-SubCategoria-Feminino-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/blusas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/he3/ha4/15803575861278/BMenu-SubCategoria-Feminino-20240524-Blusas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Blusas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/calcas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hef/h65/15803575894046/BMenu-SubCategoria-Feminino-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h0c/hde/15803576418334/BMenu-SubCategoria-Feminino-20240524-Vestidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Vestidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/saias">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h1a/h3c/15803576385566/BMenu-SubCategoria-Feminino-20240524-Saias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Saias</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/jaquetas-casacos-jaquetas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/haf/h8b/15803576057886/BMenu-SubCategoria-Feminino-20240524-Casacos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Casacos</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="FemininoCategories">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Feminino</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/hc0/h11/15601801887774/BMenu-Feminino-20240326-Vestidos-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Femininas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/blusas"  title="Blusas e Camisetas" >Blusas e Camisetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/calcas"  title="Calças" >Calças</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/saias"  title="Saias" >Saias</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/blusas/c/body-blusas"  title="Body" >Body</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/blazer-casacos-jaquetas"  title="Blazers" >Blazers</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/camisas"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/malhas-sueteres"  title="Cardigans e Sueters" >Cardigans e Sueters</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/casaco-casacos-jaquetas"  title="Casacos" >Casacos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/coletes"  title="Coletes" >Coletes</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/jaquetas-casacos-jaquetas"  title="Jaquetas" >Jaquetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/jardineiras-macacoes"  title="Macacão" >Macacão</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/moletom-casacos-jaquetas"  title="Moletom" >Moletom</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/shorts"  title="Shorts" >Shorts</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Setores</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/modacasual"  title="Moda Casual" >Moda Casual</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/moda-fitness"  title="Moda Fitness" >Moda Fitness</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/moda-praia"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											</li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/alfaiataria"  title="Moda Social" >Moda Social</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=gestante&sort=11"  title="Moda Gestante" >Moda Gestante</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie"  title="Moda Íntima" >Moda Íntima</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/plus-size"  title="Moda Plus Size" >Moda Plus Size</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/personagens-f"  title="Personagens" >Personagens</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Tendências</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/calca-wide-leg"  title="Wide Leg" >Wide Leg</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=animal%20print"  title="Animal Print" >Animal Print</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/moda-fitness"  title="Esportivo" >Esportivo</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/jardineiras-macacoes"  title="Jardineiras e Macacões" >Jardineiras e Macacões</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=brilho"  title="Brilho" >Brilho</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Abrand%3Amarisa&text=#"  title="Marisa" >Marisa</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/biotipo"  title="Biotipo" >Biotipo</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Abrand%3Adisney&text=#"  title="Disney" >Disney</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Abrand%3Asawary"  title="Sawary" >Sawary</a></li>
									<li>
											<a href="https://www.marisa.com.br/search?q=%3AtopDiscount%3Agender%3AFEMALE%3Abrand%3Azune&text=#"  title="Zune Jeans" >Zune Jeans</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/roupas/feminino/c/vestidos">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h1d/h85/15601801560094/BMenu-Feminino-20240326-Vestidos-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="CalcadosBarComponent">
								<a href="/feminino/c/calcados" class="hidden-md hidden-lg " title="Calçados" >
			<div class="first-level-link-menu">
				<span>
					Calçados</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Calcados_link_novo"></i>
			</div>
		</a>

		<a href="/feminino/c/calcados" class="hidden-sm hidden-xs " title="Calçados" >
			Calçados</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/calcados?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h85/hfa/15803574878238/BMenu-SubCategoria-Calcados-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/calcados?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hfd/h0d/15803574845470/BMenu-SubCategoria-Calcados-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/calcados?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h25/hd1/15803574812702/BMenu-SubCategoria-Calcados-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/botas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb4/hc0/15803574583326/BMenu-SubCategoria-Calcados-20240524-Botas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Botas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/tenis">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h63/hfc/15803575205918/BMenu-SubCategoria-Calcados-20240524-Tenis.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Tênis</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/sandalias">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h7b/h9c/15803574911006/BMenu-SubCategoria-Calcados-20240524-Sandalias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Sandália</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/sapatilhas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/haa/h1e/15803575074846/BMenu-SubCategoria-Calcados-20240524-Sapatilhas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Sapatilhas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/scarpin">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/ha4/h55/15803575173150/BMenu-SubCategoria-Calcados-20240524-Scarpins.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Scarpin</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="CalcadosBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Calcados</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h9f/h5b/15601802477598/BMenu-Calcados-20240404-Botas-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/calcados" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Femininos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/calcados/feminino/c/sandalias"  title="Sandálias" >Sandálias</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/sandalias/c/anabela-sandalias"  title="Anabela" >Anabela</a></li>
									<li>
											<a href="/calcados/feminino/c/chinelos"  title="Chinelos" >Chinelos</a></li>
									<li>
											<a href="/calcados/feminino/c/tenis"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="/calcados/feminino/c/botas"  title="Botas e Coturnos" >Botas e Coturnos</a></li>
									<li>
											<a href="/calcados/feminino/c/rasteirinhas"  title="Rasteirinhas" >Rasteirinhas</a></li>
									<li>
											<a href="/calcados/feminino/c/scarpin"  title="Scarpin" >Scarpin</a></li>
									<li>
											<a href="/calcados/feminino/sapatilhas/c/mule"  title="Mule" >Mule</a></li>
									<li>
											<a href="/calcados/feminino/c/sapatilhas"  title="Sapatilhas" >Sapatilhas</a></li>
									<li>
											<a href="/calcados/feminino/c/mocassim"  title="Mocassim Loafer" >Mocassim Loafer</a></li>
									<li>
											<a href="/calcados/feminino/c/linha-comfort"  title="Conforto" >Conforto</a></li>
									<li>
											<a href="/feminino/c/calcados?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									<li>
											<a href="/feminino/c/calcados?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/calcados-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Masculinos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/calcados-m/masculino/c/botas-m"  title="Bota" >Bota</a></li>
									<li>
											<a href="/calcados-m/masculino/c/chinelos-m"  title="Chinelos" >Chinelos</a></li>
									<li>
											<a href="/c/masculino"  title="Destaques" >Destaques</a></li>
									<li>
											<a href="/calcados-m/masculino/c/sapatenis-m"  title="Sapatênis" >Sapatênis</a></li>
									<li>
											<a href="/calcados-m/masculino/c/sapato-social"  title="Sapato Social" >Sapato Social</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=slip%20on%20masculino&sort=1&common_filter%5B1%5D=591"  title="Slip On" >Slip On</a></li>
									<li>
											<a href="/calcados-m/masculino/c/tenis-m"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados-m/masculino/tenis-m/c/esportivo-tenis-m"  title="Tênis Esportivo" >Tênis Esportivo</a></li>
									<li>
											<a href="/masculino/c/calcados-m?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/calcados-m?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menina</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/botas-infantil-meninas"  title="Bota" >Bota</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/chinelos-infantil-meninas"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/sandalias-infantil-meninas"  title="Sandália" >Sandália</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/sapatilhas-infantil-meninas"  title="Sapatilha" >Sapatilha</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/tenis-infantil-meninas"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas?sort=topDiscount&q=%3Aprice-desc#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-infantil-meninos" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/botas-infantil-meninos"  title="Bota" >Bota</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/chinelos-infantil-meninos?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/papetes-infantil-meninos?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Papete" >Papete</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/sandalias-infantil-meninos?sort=topDiscount&q=%3AnewOnStore#"  title="Sandália" >Sandália</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/sapatenis-infantil-meninos?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Sapatênis" >Sapatênis</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/tenis-infantil-meninos?sort=topDiscount&q=%3AnewOnStore#"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-meninos?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-meninos?sort=topDiscount&q=%3Aprice-desc#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/nossas-marcas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/marcas/c/bebece"  title="Bebecê" >Bebecê</a></li>
									<li>
											<a href="/marcas/c/bottero"  title="Bottero" >Bottero</a></li>
									<li>
											<a href="/marcas/c/dakota"  title="Dakota" >Dakota</a></li>
									<li>
											<a href="/marcas/c/ipanema"  title="Ipanema" >Ipanema</a></li>
									<li>
											<a href="/marcas/c/mississipi"  title="Mississipi" >Mississipi</a></li>
									<li>
											<a href="/marcas/c/moleca"  title="Moleca" >Moleca</a></li>
									<li>
											<a href="/marcas/c/vizzano"  title="Vizzano" >Vizzano</a></li>
									<li>
											<a href="/marcas/c/via-uno"  title="Via Uno" >Via Uno</a></li>
									<li>
											<a href="/marcas/c/beira-rio"  title="Beira Rio" >Beira Rio</a></li>
									<li>
											<a href="/marcas/c/havaianas"  title="Havaianas" >Havaianas</a></li>
									<li>
											<a href="/marcas/c/olympikus"  title="Olympikus" >Olympikus</a></li>
									<li>
											<a href="/marcas/c/modare"  title="Modare" >Modare</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/calcados/feminino/c/botas">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hab/ha5/15601802346526/BMenu-Calcados-20240404-Botas-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="LingerieBarComponent">
								<a href="https://www.marisa.com.br/feminino/c/lingerie" class="hidden-md hidden-lg " title="Lingerie" >
			<div class="first-level-link-menu">
				<span>
					Lingerie</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Lingerie_menu"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/feminino/c/lingerie" class="hidden-sm hidden-xs " title="Lingerie" >
			Lingerie</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/lingerie?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h10/h40/15803578449950/BMenu-SubCategoria-Lingerie-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/lingerie?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hfd/h1c/15803578417182/BMenu-SubCategoria-Lingerie-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/lingerie?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/ha1/hcc/15803578384414/BMenu-SubCategoria-Lingerie-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/calcinhas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/he9/hcf/15803578220574/BMenu-SubCategoria-Lingerie-20240524-Calcinhas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calcinhas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/sutias">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h82/h46/15803578843166/BMenu-SubCategoria-Lingerie-20240524-Sutias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Sutiãs</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/pijamas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h85/h53/15803578482718/BMenu-SubCategoria-Lingerie-20240524-Pijamas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Pijamas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/camisolas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hf6/h53/15803578318878/BMenu-SubCategoria-Lingerie-20240524-Camisolas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Camisolas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/kits">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h32/h3e/15803578351646/BMenu-SubCategoria-Lingerie-20240524-Kits.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Kits</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="LingerieBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Lingerie</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h15/h56/15601802674206/BMenu-Lingerie-20240326-Sensuais-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/lingerie" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Lingerie</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/lingerie/feminino/c/body-camisete"  title="Body e Camisete" >Body e Camisete</a></li>
									<li>
											<a href="/lingerie/feminino/c/calcinhas"  title="Calcinha" >Calcinha</a></li>
									<li>
											<a href="/lingerie/feminino/c/cintas-modeladores"  title="Cintas e Modeladores" >Cintas e Modeladores</a></li>
									<li>
											<a href="/lingerie/feminino/c/kits"  title="Kits" >Kits</a></li>
									<li>
											<a href="/lingerie/feminino/meias/c/meia-calca-meias"  title="Meia Calça" >Meia Calça</a></li>
									<li>
											<a href="/lingerie/feminino/meias/c/meias-de-compressao-meias"  title="Meias de compressão" >Meias de compressão</a></li>
									<li>
											<a href="/lingerie/feminino/c/meias"  title="Meias" >Meias</a></li>
									<li>
											<a href="/lingerie/feminino/c/sutias"  title="Sutiã" >Sutiã</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="/feminino/c/lingerie?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/pijamas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Pijamas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/lingerie/feminino/c/baby-doll"  title="Baby Doll" >Baby Doll</a></li>
									<li>
											<a href="/lingerie/feminino/c/camisolas"  title="Camisolas" >Camisolas</a></li>
									<li>
											<a href="/lingerie/feminino/c/pijamas"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="/lingerie/feminino/pijamas/c/pijama-feminino-inverno"  title="Pijamas de Inverno" >Pijamas de Inverno</a></li>
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/pantufas"  title="Pantufas" >Pantufas</a></li>
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/roupao-robe"  title="Robe e Roupão" >Robe e Roupão</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/nossas-marcas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/feminino/c/lingerie?q=%3AnewOnStore%3Abrand%3Amarisa&text=#"  title="Marisa" >Marisa</a></li>
									<li>
											</li>
									<li>
											<a href="/marcas/c/demillus"  title="DeMillus" >DeMillus</a></li>
									<li>
											<a href="/marcas/c/delrio"  title="Del Rio" >Del Rio</a></li>
									<li>
											<a href="/marcas/c/trifil"  title="Trifil" >Trifil</a></li>
									<li>
											<a href="/marcas/c/love-secret"  title="Love Secret" >Love Secret</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/moderna"  title="Moderna" >Moderna</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="/marcas/c/lucitex"  title="Lucitex" >Lucitex</a></li>
									<li>
											</li>
									<li>
											<a href="/marcas/c/dilady"  title="Dilady" >Dilady</a></li>
									<li>
											<a href="/marcas/c/plie"  title="Plié" >Plié</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/feminize"  title="Feminize" >Feminize</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AnewOnStore%3Abrand%3Apan&text=#"  title="Pantys" >Pantys</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/feminino/c/lingerie" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Setores</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/lingerie-basica"  title="Básico" >Básico</a></li>
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/lingerie-personagens"  title="Geek" >Geek</a></li>
									<li>
											<a href="/lingerie/feminino/c/maternidade"  title="Maternidade" >Maternidade</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AnewOnStore%3Amaterial%3Arenda&text=#"  title="Renda" >Renda</a></li>
									<li>
											<a href="https://www.marisa.com.br/l/promocao/c/promocao-lingeriesensual"  title="Sensual" >Sensual</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/moda-praia"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/moda-fitness"  title="Moda Fitness" >Moda Fitness</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AnewOnStore%3Amaterial%3Arenda&text=#">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/ha2/h8b/15601802608670/BMenu-Lingerie-20240326-Sensuais-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="JeansBarComponent">
								<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="hidden-md hidden-lg " title="Jeans" >
			<div class="first-level-link-menu">
				<span>
					Jeans</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Jeans Menu"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="hidden-sm hidden-xs " title="Jeans" >
			Jeans</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topDiscount&q=%3AnewOnStore%3Amaterial%3Ajeans#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hd7/h63/15803577860126/BMenu-SubCategoria-Jeans-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h12/h4e/15803577827358/BMenu-SubCategoria-Jeans-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topSold&q=%3AtopDiscount%3Amaterial%3Ajeans#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hf9/ha5/15803577663518/BMenu-SubCategoria-Jeans-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?sort=newOnStore&q=%3AtopDiscount#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h8a/h62/15803577630750/BMenu-SubCategoria-Jeans-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/shorts/c/jeans-shorts">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h21/h78/15803578089502/BMenu-SubCategoria-Jeans-20240524-Shorts.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Shorts</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/saias/c/saias-jeans">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb8/h28/15803577925662/BMenu-SubCategoria-Jeans-20240524-Saias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Saias</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h3d/hf1/15803578187806/BMenu-SubCategoria-Jeans-20240524-Vestidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Vestidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/calcas-plus-size/c/calca-jeans-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h39/h79/15803577892894/BMenu-SubCategoria-Jeans-20240524-PlusSize.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Plus Size</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="JeansBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Jeans</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/hd8/h6d/15601803526174/BMenu-Jeans-20240326-AllJeans-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?sort=newOnStore&q=%3AtopDiscount#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calça Jeans</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/skinny-jeans-calcas"  title="Skinny" >Skinny</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/flare-jeans-calcas"  title="Flare" >Flare</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/destroyed-jeans-calcas"  title="Destroyed" >Destroyed</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/cigarrete-jeans-calcas"  title="Cigarrete" >Cigarrete</a></li>
									<li>
											<a href="/roupas/feminino/calcas/jeans-calcas/c/boyfriend-jeans-calcas"  title="Boyfriend" >Boyfriend</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/sarja-calcas"  title="Sarja" >Sarja</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=clochard%20jeans"  title="Clochard" >Clochard</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/calca-mom"  title="Mom Jeans" >Mom Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Categoria</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/shorts/c/jeans-shorts"  title="Shorts" >Shorts</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/bermudas/c/jeans-bermudas"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/saias/c/saias-jeans"  title="Saias" >Saias</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/camisas/c/jeans-camisas"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/jaqueta-jeans"  title="Jaquetas" >Jaquetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/jardineiras-macacoes/c/jardineiras-jardineiras-macacoes?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Jardineiras" >Jardineiras</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/jardineiras-macacoes/c/macacoes-jardineiras-macacoes?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Macacão" >Macacão</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/infantil?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Infantil" >Infantil</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/plus-size/feminino/c/roupas-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Jeans Plus Size</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/calcas-plus-size/c/calca-jeans-plus-size"  title="Calça" >Calça</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/camisas-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Camisas " >Camisas </a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/shorts-bermudas-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Shorts e Bermudas" >Shorts e Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/saias-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Saias " >Saias </a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/masculino/c/roupas-m?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Jeans Masculino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/calcas-m/c/jeans-calca-m"  title="Calça " >Calça </a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisas-m?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/bermudas/c/jeans-bermuda-m"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/casacos-jaquetas-m?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Jaquetas" >Jaquetas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/marcas/c/biotipo"  title="Biotipo" >Biotipo</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/marisa?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Marisa" >Marisa</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/razon"  title="Razon" >Razon</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/sawary"  title="Sawary" >Sawary</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/zune-jeans"  title="Zune Jeans" >Zune Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/uber-jeans"  title="Uber Jeans" >Uber Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/cambos-premium"  title="Cambos Premium" >Cambos Premium</a></li>
									<li>
											<a href="https://www.marisa.com.br/parceiros"  title="Todas as Marcas" >Todas as Marcas</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/haa/h94/15601803001886/BMenu-Jeans-20240326-AllJeans-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="PlusSizeBarComponent">
								<a href="/feminino/c/plus-size" class="hidden-md hidden-lg " title="Plus Size" >
			<div class="first-level-link-menu">
				<span>
					Plus Size</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="plus_size_menu"></i>
			</div>
		</a>

		<a href="/feminino/c/plus-size" class="hidden-sm hidden-xs " title="Plus Size" >
			Plus Size</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/plus-size?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h0c/h67/15803580612638/BMenu-SubCategoria-PlusSize-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/plus-size?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h5d/h00/15803580579870/BMenu-SubCategoria-PlusSize-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/plus-size?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/he5/h7d/15803580481566/BMenu-SubCategoria-PlusSize-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/blusas-plus-size/c/basica-blusas-plus">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h7b/hcd/15803580153886/BMenu-SubCategoria-PlusSize-20240524-Blusas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Blusas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/calcas-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb6/hdd/15803580317726/BMenu-SubCategoria-PlusSize-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/vestidos-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h20/h8e/15803580645406/BMenu-SubCategoria-PlusSize-20240524-Vestidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Vestidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/casacos-jaquetas-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h62/hf0/15803580350494/BMenu-SubCategoria-PlusSize-20240524-Casacos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Casacos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/c/lingerie-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hca/h04/15803580383262/BMenu-SubCategoria-PlusSize-20240524-Lingerie.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="PlusSizeBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Plus Size</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/ha8/h0f/15601803853854/BMenu-PlusSize-20240326-Novidades-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/roupas-plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Plus Size</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/blusas-plus-size/c/basica-blusas-plus"  title="Básicos" >Básicos</a></li>
									<li>
											<a href="/plus-size/feminino/c/moda-praia-plus-size"  title="Biquinis e Maiôs" >Biquinis e Maiôs</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/blusas-plus-size"  title="Blusas" >Blusas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/calcas-plus-size"  title="Calças" >Calças</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/camisas-plus-size"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/cardigans-sueteres-plus-size"  title="Cardigans" >Cardigans</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/casacos-jaquetas-plus-size"  title="Casacos e Jaquetas" >Casacos e Jaquetas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/jardineiras-macacoes-plus-size"  title="Macacão" >Macacão</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/casacos-jaquetas-plus-size"  title="Moleton" >Moleton</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/saias-plus-size"  title="Saias" >Saias</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/shorts-bermudas-plus-size"  title="Shorts e Bermudas" >Shorts e Bermudas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/vestidos-plus-size"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/c/roupas-plus-size?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="/feminino/c/plus-size?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/plus-size/feminino/c/lingerie-plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Lingerie Plus Size</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/plus-size/feminino/lingerie-plus-size/c/calcinhas-plus-size"  title="Calcinhas" >Calcinhas</a></li>
									<li>
											<a href="/plus-size/feminino/lingerie-plus-size/c/camisolas-plus-size"  title="Camisolas" >Camisolas</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/lingerie-plus-size/c/pijamas-plus-size"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/lingerie-plus-size/c/sutias-plus-size"  title="Sutiãs" >Sutiãs</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/c/lingerie-plus-size?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Tendências</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/blusas+vestidos+plus+size+ombros+de+fora"  title="Amarração" >Amarração</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/plus%20size%20conforto"  title="Conforto" >Conforto</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="/c/plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Setores</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/search/?sort=newOnStore&q=jeans+plus+size%3AtopDiscount&show=Page#"  title="Jeans" >Jeans</a></li>
									<li>
											<a href="/plus-size/feminino/c/moda-praia-plus-size"  title="Praia" >Praia</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/feminino/c/plus-size">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/haa/he0/15601803591710/BMenu-PlusSize-20240326-Novidades-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="AcessoriosBarComponent">
								<a href="https://www.marisa.com.br/feminino/c/acessorios?q=%3AnewOnStore%3AVendido+por%3Amarisa&text=#"  title="Acessórios" >Acessórios</a><div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/acessorios?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb5/haa/15803573567518/BMenu-SubCategoria-Acessorios-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/acessorios?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h92/hc3/15803573436446/BMenu-SubCategoria-Acessorios-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/acessorios?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h51/hc3/15803573338142/BMenu-SubCategoria-Acessorios-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/bolsas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h86/he4/15803573272606/BMenu-SubCategoria-Acessorios-20240524-Bolsas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Bolsas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/relogios">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb4/h99/15803574222878/BMenu-SubCategoria-Acessorios-20240524-Relogios.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Relógio</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/cintos">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hdb/h31/15803573305374/BMenu-SubCategoria-Acessorios-20240524-Cintos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Cintos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/oculos">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hc6/h4c/15803573534750/BMenu-SubCategoria-Acessorios-20240524-Oculos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Óculos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/diversos?q=%3AnewOnStore%3Abrand%3Adisney%3Abrand%3Anickelodeon%3Abrand%3Awarnerbros%3Abrand%3Amarvel&text=#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h62/h89/15803573600286/BMenu-SubCategoria-Acessorios-20240524-Personagens.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Personagens</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="AcessoriosBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Acessórios</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h4c/had/15601804115998/BMenu-Acessorios-20240326-Bolsas-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/acessorios" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Feminino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/acessorios/feminino/c/bolsas"  title="Bolsas" >Bolsas</a></li>
									<li>
											</li>
									<li>
											<a href="/acessorios/feminino/c/carteiras"  title="Carteiras" >Carteiras</a></li>
									<li>
											<a href="/acessorios/feminino/c/cintos"  title="Cintos" >Cintos</a></li>
									<li>
											<a href="/acessorios/feminino/c/oculos"  title="Óculos de Sol" >Óculos de Sol</a></li>
									<li>
											<a href="/acessorios/feminino/c/relogios"  title="Relógios" >Relógios</a></li>
									<li>
											<a href="/acessorios/feminino/c/bijuterias"  title="Bijuterias" >Bijuterias</a></li>
									<li>
											<a href="/acessorios/feminino/c/necessaire"  title="Necessaires" >Necessaires</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/acessorios-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Masculino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/bones-m"  title="Bonés" >Bonés</a></li>
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/cintos-m"  title="Cintos" >Cintos</a></li>
									<li>
											<a href="/acessorios-m/masculino/c/oculos-m"  title="Óculos de Sol" >Óculos de Sol</a></li>
									<li>
											<a href="/masculino/c/relogios-m"  title="Relógios" >Relógios</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/acessorios-infantil" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Infantil</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/meninas/infantil/c/acessorios-infantil-meninas"  title="Meninas" >Meninas</a></li>
									<li>
											<a href="/meninos/infantil/c/acessorios-meninos"  title="Meninos" >Meninos</a></li>
									<li>
											</li>
									<li>
											<a href="/meninas/infantil/c/de-volta-as-aulas"  title="Material Escolar" >Material Escolar</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/acessorios-infantil?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/beleza-perfume" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Beleza</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/beleza-perfume/c/cuidados-pessoais"  title="Cuidados Pessoais" >Cuidados Pessoais</a></li>
									<li>
											<a href="https://www.marisa.com.br/beleza-perfume/c/maquiagem"  title="Maquiagem" >Maquiagem</a></li>
									<li>
											<a href="https://www.marisa.com.br/cuidados-pessoais/beleza-perfume/c/linha-infantil"  title="Linha Infantil" >Linha Infantil</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=beleza%20natural&p=beleza%20n&ranking=1&typeclick=1&ac_pos=header"  title="Beleza Natural" >Beleza Natural</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/beleza-perfume?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="/c/acessorios" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Mais Vendidos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/acessorios/feminino/bolsas/c/bolsa-transversal"  title="Bolsa Transversal" >Bolsa Transversal</a></li>
									<li>
											<a href="/acessorios/feminino/bolsas/c/bolsa-mao"  title="Bolsa de Mão" >Bolsa de Mão</a></li>
									<li>
											<a href="/acessorios/feminino/bolsas/c/bolsa-ombro"  title="Bolsa de Ombro" >Bolsa de Ombro</a></li>
									<li>
											<a href="/acessorios/feminino/c/cintos"  title="Cintos" >Cintos</a></li>
									<li>
											<a href="/acessorios/feminino/c/lencos-echarpes"  title="Lenços e Echarpes" >Lenços e Echarpes</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/acessorios/feminino/c/bolsas">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hdd/h30/15601803919390/BMenu-Acessorios-20240326-Bolsas-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="InfantilBarComponent">
								<a href="https://www.marisa.com.br/c/infantil" class="hidden-md hidden-lg " title="Infantil" >
			<div class="first-level-link-menu">
				<span>
					Infantil</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Infantil_menu"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/c/infantil" class="hidden-sm hidden-xs " title="Infantil" >
			Infantil</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/c/infantil?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hea/he0/15803577565214/BMenu-SubCategoria-Infantil-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/infantil?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h6b/hea/15803577466910/BMenu-SubCategoria-Infantil-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/infantil?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h5d/h8d/15803577434142/BMenu-SubCategoria-Infantil-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=blusa%20infantil">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h47/hc8/15803576451102/BMenu-SubCategoria-Infantil-20240524-Blusas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Blusas</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=conjuntos%20infantil&p=conjuntos%20in&ranking=3&typeclick=1&ac_pos=header">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hc7/h3d/15803577106462/BMenu-SubCategoria-Infantil-20240524-Conjuntos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Conjuntos</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=pijama%20infantil&p=pijama&ranking=3&typeclick=1">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h88/hcb/15803577597982/BMenu-SubCategoria-Infantil-20240524-Pijamas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Pijamas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/infantil/c/calcado-infantil">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/ha1/h81/15803576942622/BMenu-SubCategoria-Infantil-20240524-Calcados.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calçados</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=infantil&sort=11&common_filter%5B1%5D=271%7C4137">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h75/h7d/15803577401374/BMenu-SubCategoria-Infantil-20240524-Intimo.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Meias e Moda Intima</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="InfantilBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Infantil</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/hbd/he4/15601804705822/BMenu-Infantil-20240326-Novidades-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/infantil/c/meninas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Menina</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/bebe-meninas"  title="Bebê de 0 a 24 Meses" >Bebê de 0 a 24 Meses</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/tamanho-1-a-3-menina"  title="Meninas de 1 a 3 Anos" >Meninas de 1 a 3 Anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/tamanho-4-a-10-menina"  title="Meninas de 4 a 10 anos" >Meninas de 4 a 10 anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/juvenil-meninas"  title="Garotas de 10 a 16 " >Garotas de 10 a 16 </a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/acessorios-infantil-meninas"  title="Acessórios" >Acessórios</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=calcinha%20infantil%20menina%20e%20meias&p=calcinhas%20e%20meias&ranking=2&typeclick=1&ac_pos=header"  title="Calcinhas e Meias" >Calcinhas e Meias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/fantasias-infantil-meninas"  title="Fantasias" >Fantasias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/moda-praia-infantil-meninas"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/infantil-meninas/c/pijamas-infantil-meninas"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninas"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/roupas-meninas?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/infantil/c/meninos" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Menino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/bebe-0-a-24-menino"  title="Bebê 0 a 24 meses" >Bebê 0 a 24 meses</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/tamanho-1-a-3-menino"  title="Meninos de 1 a 3 anos" >Meninos de 1 a 3 anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/tamanho-4-a-10-meninos"  title="Meninos de 4 a 10 anos" >Meninos de 4 a 10 anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/juvenil-meninos/c/tamanho-10-a-16-meninos"  title="Garotos de 10 a 16 " >Garotos de 10 a 16 </a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/acessorios-meninos"  title="Acessórios" >Acessórios</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/cuecas-meias-infantil"  title="Cuecas e meias" >Cuecas e meias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/fantasias-meninos"  title="Fantasias" >Fantasias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/moda-praia-meninos"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/infantil-meninos/c/pijamas-infantil-meninos"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninos"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninos?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menina</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/botas-infantil-meninas"  title="Botas" >Botas</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/calcados-bebe-menina"  title="Calçados Bebê" >Calçados Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/chinelos-infantil-meninas"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/sandalias-infantil-meninas"  title="Sandálias" >Sandálias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/sapatilhas-infantil-meninas"  title="Sapatilhas" >Sapatilhas</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/tenis-infantil-meninas"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=calcados%20infantil%20menina&sort=1&common_filter%5B1885%5D=2052"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-infantil-meninos" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/bebe-meninos/c/calcados-bebe-meninos"  title="Calçados Bebê" >Calçados Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/chinelos-infantil-meninos"  title="Chinelo" >Chinelo</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/papetes-infantil-meninos"  title="Papetes" >Papetes</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/tenis-infantil-meninos"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/sandalias-infantil-meninos"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="/c/personagens" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Personagens</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/personagens/c/batman-roupas-sapatos"  title="Batman" >Batman</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/frozen-roupas-sapatos"  title="Frozen" >Frozen</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/hello-kitty-roupas-sapatos"  title="Hello Kitty" >Hello Kitty</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/homem-aranha-roupas-sapatos"  title="Homem Aranha" >Homem Aranha</a></li>
									<li>
											<a href="https://www.marisa.com.br/search?q=naruto%3AnewOnStore%3Agender%3AINFANT"  title="Naruto" >Naruto</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/personagens?q=%3AnewOnStore%3Abrand%3Aligadajustica&text=#"  title="Liga da Justiça" >Liga da Justiça</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/lol"  title="LOL Surprise" >LOL Surprise</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=looney%20tunes%20infantil"  title="Looney Tunes" >Looney Tunes</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/personagens?q=%3AnewOnStore%3Abrand%3Amarvel&text=#"  title="Marvel" >Marvel</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/mickey-roupas-sapatos"  title="Mickey" >Mickey</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/minnie-roupas-sapatos"  title="Minnie" >Minnie</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/sonic"  title="Sonic" >Sonic</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=stitch%20infantil"  title="Stitch" >Stitch</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/snoopy"  title="Snoopy" >Snoopy</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/c/infantil">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hd8/h9f/15601804640286/BMenu-Infantil-20240326-Novidades-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="MasculinoBarComponent">
								<a href="/c/masculino" class="hidden-md hidden-lg " title="Masculino" >
			<div class="first-level-link-menu">
				<span>
					Masculino</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="masculino"></i>
			</div>
		</a>

		<a href="/c/masculino" class="hidden-sm hidden-xs " title="Masculino" >
			Masculino</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/c/masculino?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h02/he0/15803579924510/BMenu-SubCategoria-Masculino-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/masculino?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h0b/h7e/15803579891742/BMenu-SubCategoria-Masculino-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/masculino?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hcf/h93/15803579858974/BMenu-SubCategoria-Masculino-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hdb/hdd/15803579727902/BMenu-SubCategoria-Masculino-20240524-Camisetas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Camsietas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/calcas-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hd5/h56/15803579465758/BMenu-SubCategoria-Masculino-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/bermudas-shorts-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h8a/h16/15803578875934/BMenu-SubCategoria-Masculino-20240524-Bermudas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Bermudas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/casacos-jaquetas-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h31/ha9/15803579826206/BMenu-SubCategoria-Masculino-20240524-Casacos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Casacos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/masculino/c/calcados-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h67/h8b/15803578908702/BMenu-SubCategoria-Masculino-20240524-Calcados.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calçados</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="MasculinoBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Masculino</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h2e/h23/15601960812574/BMenu-Masculino-20240326-Camisetas-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/roupas-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Masculinas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/tal+pais+tal+filhos"  title="Tal Pai Tal Filho" >Tal Pai Tal Filho</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/personagens-m"  title="Personagens e Geek" >Personagens e Geek</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/bermudas-shorts-m"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m"  title="Camisetas" >Camisetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/calcas-m"  title="Calças" >Calças</a></li>
									<li>
											<a href="/roupas-m/masculino/c/camisas-m"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="/roupas-m/masculino/c/polos-m"  title="Polos" >Polos</a></li>
									<li>
											<a href="/roupas-m/masculino/c/casacos-jaquetas-m"  title="Casacos e Jaquetas" >Casacos e Jaquetas</a></li>
									<li>
											<a href="/roupas-m/masculino/c/moletons-sueteres-m"  title="Moletons e Suéteres" >Moletons e Suéteres</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/regatas-m"  title="Regatas" >Regatas</a></li>
									<li>
											<a href="/c/masculino?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/masculino/c/cuecas-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Moda Íntima e Praia</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/masculino/c/cuecas-m"  title="Cuecas" >Cuecas</a></li>
									<li>
											<a href="/c/meias-m"  title="Meias" >Meias</a></li>
									<li>
											<a href="/masculino/c/pijamas-m"  title="Pijamas" >Pijamas</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/masculino" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Estilos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="http://pesquisa.marisa.com.br/hotsite/moda-social-masculina"  title="Moda Social" >Moda Social</a></li>
									<li>
											</li>
									<li>
											<a href="/masculino/c/moda-fitness-m"  title="Moda Fitness" >Moda Fitness</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/roupas%20calcados%20personagens?sort=11&common_filter%5B1%5D=591"  title="Moda Geek" >Moda Geek</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/jeans+masculino"  title="Jeans" >Jeans</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/jeans+masculino"  title="Jeans" >Jeans</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/masculino/c/acessorios-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Acessórios</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/bones-m"  title="Bonés" >Bonés</a></li>
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/cintos-m"  title="Cintos" >Cintos</a></li>
									<li>
											</li>
									<li>
											<a href="/masculino/c/relogios-m"  title="Relógios" >Relógios</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?sort=topDiscount&q=%3Aprice-desc&show=Page#"  title="Ofertas" >Ofertas</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/nossas-marcas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											</li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Amr"  title="MR" >MR</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Aroso"  title="Rock & Soda" >Rock & Soda</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Atopper&text=#"  title="Topper" >Topper</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Azune"  title="Zune Jeans" >Zune Jeans</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Aolympikus"  title="Olympikus" >Olympikus</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/mormaii"  title="Mormaii" >Mormaii</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/parceiros" ></a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hdc/h8f/15601960648734/BMenu-Masculino-20240326-Camisetas-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="BMenu_20180703_Maquiagens">
								<a href="https://www.marisa.com.br/c/casa" class="hidden-md hidden-lg " title="Casa" >
			<div class="first-level-link-menu">
				<span>
					Casa</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="DiaMaesNavigationNode"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/c/casa" class="hidden-sm hidden-xs " title="Casa" >
			Casa</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/c/casa?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h8d/hd9/15803575762974/BMenu-SubCategoria-Casa-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/casa?sort=topSold&q=%3AnewOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h59/h16/15803575566366/BMenu-SubCategoria-Casa-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/cama/casa/c/jogo-de-cama">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h79/hf4/15803575533598/BMenu-SubCategoria-Casa-20240524-JogosDeCama.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Jogo de cama</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/cama">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h07/hb0/15803575336990/BMenu-SubCategoria-Casa-20240524-Cama.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Cama</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/Mesa">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h71/h60/15803575664670/BMenu-SubCategoria-Casa-20240524-Mesa.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mesa</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/banho">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h3b/h39/15803575238686/BMenu-SubCategoria-Casa-20240524-Banho.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Banho</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/decoracao">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hae/h4a/15803575500830/BMenu-SubCategoria-Casa-20240524-Decoracao.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Decoração</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="BMenu_20180703_Maquiagens">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Moda Casa</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h8e/h8d/15654372245534/BMenu-Casa-20240409-Rovitex-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/cama" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Cama</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/cama/casa/c/kit-colcha"  title="Colcha" >Colcha</a></li>
									<li>
											<a href="/cama/casa/c/edredom"  title="Edredom" >Edredom</a></li>
									<li>
											<a href="/cama/casa/c/jogo-de-cama"  title="Jogo de Cama" >Jogo de Cama</a></li>
									<li>
											<a href="/cama/casa/c/lencol"  title="Lençol" >Lençol</a></li>
									<li>
											</li>
									<li>
											<a href="/cama/casa/c/travesseiro"  title="Travesseiro" >Travesseiro</a></li>
									<li>
											<a href="https://www.marisa.com.br/casa/c/cama"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/banho" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Banho</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/banho/casa/c/roupao"  title="Roupão" >Roupão</a></li>
									<li>
											<a href="https://www.marisa.com.br/banho/casa/c/toalha-banho"  title="Toalha de Banho" >Toalha de Banho</a></li>
									<li>
											<a href="/banho/casa/c/toalha-rosto"  title="Toalha de Rosto" >Toalha de Rosto</a></li>
									<li>
											</li>
									<li>
											<a href="/banho/casa/c/toalha-praia"  title="Toalha de Praia" >Toalha de Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/casa/c/banho"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/casa/c/decoracao" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Decoração</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/decoracao/casa/c/almofada"  title="Almofada" >Almofada</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/decoracao/casa/c/cortina"  title="Cortina" >Cortina</a></li>
									<li>
											</li>
									<li>
											<a href="/decoracao/casa/c/kit-pano-copa"  title="Pano de Copa" >Pano de Copa</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/casa/c/decoracao"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="/decoracao/casa/c/toalha-de-mesa"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/c/casa?q=%3AnewOnStore%3Agender%3AINFANT" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Infantil</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/cama/casa/infantil-cama/c/cobertores-mantas-infantil-cama"  title="Cobertor Infantil" >Cobertor Infantil</a></li>
									<li>
											<a href="/cama/casa/infantil-cama/c/edredom-infantil-cama"  title="Edredom Infantil" >Edredom Infantil</a></li>
									<li>
											<a href="/cama/casa/infantil-cama/c/lencol-infantil-cama"  title="Jogo de Lençol Infantil" >Jogo de Lençol Infantil</a></li>
									<li>
											<a href="/casa/eletronicos/bebe-eletronico/banho/infantil-banho/c/roupao-infantil-banho"  title="Roupão Infantil" >Roupão Infantil</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/c/casa?q=%3AnewOnStore%3Agender%3AINFANT"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://pesquisa.marisa.com.br/hotsite/casarovitex">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h7c/hb6/15654371852318/BMenu-Casa-20240409-Rovitex-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<li class="js-first-level header-menubar-first-level-link" data-uid="OfertaCategories">
								<a href="https://www.marisa.com.br/search?q=%3AtopDiscount" class="hidden-md hidden-lg " title="Oferta" >
			<div class="first-level-link-menu">
				<span>
					Oferta</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Marisa_link_Oferta"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/search?q=%3AtopDiscount" class="hidden-sm hidden-xs " title="Oferta" >
			Oferta</a>
	<div class="js-container-sub-menu container-sub-menu">

				<ul class="js-box-sub-menu box-sub-menu" data-uid="OfertaCategories">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Oferta</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h7b/hb8/15601805754398/BMenu-Oferta-20240326-UltimasOportunidades-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Feminino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/blusas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Blusas" >Blusas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Jeans" >Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/casaco-casacos-jaquetas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Casacos" >Casacos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/shorts?q=%3AnewOnStore&text=#"  title="Saias e Shorts" >Saias e Shorts</a></li>
									<li>
											<a href="https://www.marisa.com.br/acessorios/feminino/c/bolsas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bolsas" >Bolsas</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Lingerie" >Lingerie</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/plus-size?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Plus Sizes" >Plus Sizes</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/acessorios?q=%3AnewOnStore%3AVendido+por%3Amarisa&text=#"  title="Acessórios" >Acessórios</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/c/masculino?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Masculino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/c/masculino?sort=topDiscount&q=%3AnewOnStore#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/bermudas-shorts-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m?q=%3Aprice-asc%3AVendido+por%3Amarisa&text=#"  title="Camisetas" >Camisetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/calcas-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Calças" >Calças</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisas-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/polos-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Polos" >Polos</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/calcados?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/feminino/c/calcados?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/sandalias?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Sandália" >Sandália</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/botas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bota" >Bota</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/tenis?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/scarpin?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Scarpin" >Scarpin</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/chinelos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/rasteirinhas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Rasteirinha" >Rasteirinha</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/sapatilhas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Sapatilha" >Sapatilha</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/infantil/c/meninas?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Meninas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/bebe-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bebê" >Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/infantil-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Infantil" >Infantil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/juvenil-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Juvenil" >Juvenil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Calçados" >Calçados</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/infantil/c/meninos?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Meninos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/bebe-0-a-24-menino?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bebê" >Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/infantil-meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Infantil" >Infantil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/juvenil-meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Juvenil" >Juvenil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-infantil-meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Calçados" >Calçados</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://pesquisa.marisa.com.br/hotsite/ultimas-oportunidades">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h78/hfd/15601805623326/BMenu-Oferta-20240326-UltimasOportunidades-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
						<!-- <li class="header-menubar--top-menubar--item hidden-lg hidden-md bg-link-primary bd-0-i">
					<div class="d-flex h-space-between v-center">
						<a href="/universo-m/" >
							<span class="f-f-pluto-sans c-black text-lowercase fs-20 lh-100">
								Universo</span>

							











<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="c-white-svg" d="M17.975 1.65997C16.9589 0.7521 15.5301 0.252136 13.951 0.252136C12.4048 0.252136 10.9147 0.827585 9.86271 1.83057L9.77543 1.91345L9.68827 1.83057C8.63624 0.827585 7.14629 0.252136 5.60027 0.252136C4.0214 0.252136 2.59234 0.7521 1.57621 1.65997C0.603083 2.52932 0 3.43222 0 5.24361L0.000380574 15.7715H2.8491L2.84961 5.24361C2.84961 3.85912 4.05755 2.77452 5.6004 2.77452C7.14274 2.77452 8.35119 3.85899 8.35119 5.24361L8.35145 15.7715H11.2004L11.2009 5.24361C11.2009 3.85912 12.4089 2.77452 13.9513 2.77452C15.4939 2.77452 16.7023 3.85899 16.7023 5.24361L16.7028 15.7715H19.5511L19.552 5.24361C19.5512 3.43222 18.9482 2.52932 17.975 1.65997" />
</svg>
</a>
					</div>
				</li> -->

				<li class="yCmsComponent header-menubar--top-menubar--item hidden-lg hidden-md">
<a href="/my-account/orders"  title="Meus Pedidos" >Meus Pedidos</a></li><li class="yCmsComponent header-menubar--top-menubar--item hidden-lg hidden-md">
<a href="/store-finder"  title="Nossas Lojas" >Nossas Lojas</a></li><!-- <li class="yCmsComponent header-menubar--top-menubar--item hidden-lg hidden-md">
					<a href="/cartao-marisa-psf" class="dropdown-toggle">
						2° via da fatura</a>
				</li> -->

				<li class="yCmsComponent header-menubar--top-menubar--item hidden-lg hidden-md ">
					<div class="d-flex h-start v-center" class=" m-l-12" >
						<a class="c-white bg-link-primary round-mbank " href="/cartaomarisa" title="Cartões e Serviços" >
							Cartões e Serviços</a>
					</div>
				</li>



				<li class="yCmsComponent header-menubar--top-menubar--item hidden-lg hidden-md">
<a href="/entrega"  title="Prazo de Entrega" >Prazo de Entrega</a></li><li class="dropdown header-menubar--top-menubar--item js-first-level hidden-lg hidden-md" data-uid="atendimento">
					<a href="#" class="hidden-md hidden-lg" data-action="menubar:open-submenu">
						<div class="first-level-link-menu">
							<span>
								Atendimento</span>

							<i class="js-open-sub-menu ion-chevron-right"></i>
						</div>
					</a>
				</li>

				<li class="js-first-level-menu header-menubar-first-level-link hidden js-clone-submenu-mobile" data-uid="atendimento">
					<ul class="js-box-sub-menu box-sub-menu bg-white">
						<li class="header-menubar-second-level-link hidden-md hidden-lg">
							<div class="header-sub-menu">
								<span class="js-close-sub-menu go-back">
									












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

								<span class="text-primary fs-18">
									Atendimento</span>

								<span class="js-close-header--menubar icon-close">
									











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
							</div>
						</li>

						<li class="yCmsComponent">
<a href="/como-comprar-marisa"  title="Como comprar" >Como comprar</a></li><li class="yCmsComponent">
<a href="/faq"  title="Fale conosco" >Fale conosco</a></li></ul>
				</li>
			</ul>
			</div>
</nav>

<ul class="js-container-submenu-mobile container-submenu-mobile ">
	<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="FemininoCategories">
						<a href="https://www.marisa.com.br/feminino/c/roupas" class="hidden-md hidden-lg " title="Feminino" >
			<div class="first-level-link-menu">
				<span>
					Feminino</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Marisa_link_Feminino"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/feminino/c/roupas" class="hidden-sm hidden-xs " title="Feminino" >
			Feminino</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h01/h3d/15803576287262/BMenu-SubCategoria-Feminino-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hd1/hcd/15803576254494/BMenu-SubCategoria-Feminino-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h06/h6f/15803576221726/BMenu-SubCategoria-Feminino-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/blusas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/he3/ha4/15803575861278/BMenu-SubCategoria-Feminino-20240524-Blusas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Blusas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/calcas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hef/h65/15803575894046/BMenu-SubCategoria-Feminino-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h0c/hde/15803576418334/BMenu-SubCategoria-Feminino-20240524-Vestidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Vestidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/saias">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h1a/h3c/15803576385566/BMenu-SubCategoria-Feminino-20240524-Saias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Saias</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/jaquetas-casacos-jaquetas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/haf/h8b/15803576057886/BMenu-SubCategoria-Feminino-20240524-Casacos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Casacos</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="FemininoCategories">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Feminino</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/hc0/h11/15601801887774/BMenu-Feminino-20240326-Vestidos-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Femininas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/blusas"  title="Blusas e Camisetas" >Blusas e Camisetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/calcas"  title="Calças" >Calças</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/saias"  title="Saias" >Saias</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/blusas/c/body-blusas"  title="Body" >Body</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/blazer-casacos-jaquetas"  title="Blazers" >Blazers</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/camisas"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/malhas-sueteres"  title="Cardigans e Sueters" >Cardigans e Sueters</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/casaco-casacos-jaquetas"  title="Casacos" >Casacos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/coletes"  title="Coletes" >Coletes</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/jaquetas-casacos-jaquetas"  title="Jaquetas" >Jaquetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/jardineiras-macacoes"  title="Macacão" >Macacão</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/moletom-casacos-jaquetas"  title="Moletom" >Moletom</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/shorts"  title="Shorts" >Shorts</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Setores</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/modacasual"  title="Moda Casual" >Moda Casual</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/moda-fitness"  title="Moda Fitness" >Moda Fitness</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/moda-praia"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											</li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/alfaiataria"  title="Moda Social" >Moda Social</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=gestante&sort=11"  title="Moda Gestante" >Moda Gestante</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie"  title="Moda Íntima" >Moda Íntima</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/plus-size"  title="Moda Plus Size" >Moda Plus Size</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/personagens-f"  title="Personagens" >Personagens</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Tendências</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/calca-wide-leg"  title="Wide Leg" >Wide Leg</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=animal%20print"  title="Animal Print" >Animal Print</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/moda-fitness"  title="Esportivo" >Esportivo</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/jardineiras-macacoes"  title="Jardineiras e Macacões" >Jardineiras e Macacões</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=brilho"  title="Brilho" >Brilho</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Abrand%3Amarisa&text=#"  title="Marisa" >Marisa</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/biotipo"  title="Biotipo" >Biotipo</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Abrand%3Adisney&text=#"  title="Disney" >Disney</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Abrand%3Asawary"  title="Sawary" >Sawary</a></li>
									<li>
											<a href="https://www.marisa.com.br/search?q=%3AtopDiscount%3Agender%3AFEMALE%3Abrand%3Azune&text=#"  title="Zune Jeans" >Zune Jeans</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/roupas/feminino/c/vestidos">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h1d/h85/15601801560094/BMenu-Feminino-20240326-Vestidos-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="CalcadosBarComponent">
						<a href="/feminino/c/calcados" class="hidden-md hidden-lg " title="Calçados" >
			<div class="first-level-link-menu">
				<span>
					Calçados</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Calcados_link_novo"></i>
			</div>
		</a>

		<a href="/feminino/c/calcados" class="hidden-sm hidden-xs " title="Calçados" >
			Calçados</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/calcados?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h85/hfa/15803574878238/BMenu-SubCategoria-Calcados-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/calcados?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hfd/h0d/15803574845470/BMenu-SubCategoria-Calcados-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/calcados?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h25/hd1/15803574812702/BMenu-SubCategoria-Calcados-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/botas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb4/hc0/15803574583326/BMenu-SubCategoria-Calcados-20240524-Botas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Botas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/tenis">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h63/hfc/15803575205918/BMenu-SubCategoria-Calcados-20240524-Tenis.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Tênis</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/sandalias">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h7b/h9c/15803574911006/BMenu-SubCategoria-Calcados-20240524-Sandalias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Sandália</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/sapatilhas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/haa/h1e/15803575074846/BMenu-SubCategoria-Calcados-20240524-Sapatilhas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Sapatilhas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/calcados/feminino/c/scarpin">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/ha4/h55/15803575173150/BMenu-SubCategoria-Calcados-20240524-Scarpins.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Scarpin</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="CalcadosBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Calcados</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h9f/h5b/15601802477598/BMenu-Calcados-20240404-Botas-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/calcados" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Femininos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/calcados/feminino/c/sandalias"  title="Sandálias" >Sandálias</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/sandalias/c/anabela-sandalias"  title="Anabela" >Anabela</a></li>
									<li>
											<a href="/calcados/feminino/c/chinelos"  title="Chinelos" >Chinelos</a></li>
									<li>
											<a href="/calcados/feminino/c/tenis"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="/calcados/feminino/c/botas"  title="Botas e Coturnos" >Botas e Coturnos</a></li>
									<li>
											<a href="/calcados/feminino/c/rasteirinhas"  title="Rasteirinhas" >Rasteirinhas</a></li>
									<li>
											<a href="/calcados/feminino/c/scarpin"  title="Scarpin" >Scarpin</a></li>
									<li>
											<a href="/calcados/feminino/sapatilhas/c/mule"  title="Mule" >Mule</a></li>
									<li>
											<a href="/calcados/feminino/c/sapatilhas"  title="Sapatilhas" >Sapatilhas</a></li>
									<li>
											<a href="/calcados/feminino/c/mocassim"  title="Mocassim Loafer" >Mocassim Loafer</a></li>
									<li>
											<a href="/calcados/feminino/c/linha-comfort"  title="Conforto" >Conforto</a></li>
									<li>
											<a href="/feminino/c/calcados?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									<li>
											<a href="/feminino/c/calcados?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/calcados-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Masculinos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/calcados-m/masculino/c/botas-m"  title="Bota" >Bota</a></li>
									<li>
											<a href="/calcados-m/masculino/c/chinelos-m"  title="Chinelos" >Chinelos</a></li>
									<li>
											<a href="/c/masculino"  title="Destaques" >Destaques</a></li>
									<li>
											<a href="/calcados-m/masculino/c/sapatenis-m"  title="Sapatênis" >Sapatênis</a></li>
									<li>
											<a href="/calcados-m/masculino/c/sapato-social"  title="Sapato Social" >Sapato Social</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=slip%20on%20masculino&sort=1&common_filter%5B1%5D=591"  title="Slip On" >Slip On</a></li>
									<li>
											<a href="/calcados-m/masculino/c/tenis-m"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados-m/masculino/tenis-m/c/esportivo-tenis-m"  title="Tênis Esportivo" >Tênis Esportivo</a></li>
									<li>
											<a href="/masculino/c/calcados-m?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/calcados-m?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menina</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/botas-infantil-meninas"  title="Bota" >Bota</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/chinelos-infantil-meninas"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/sandalias-infantil-meninas"  title="Sandália" >Sandália</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/sapatilhas-infantil-meninas"  title="Sapatilha" >Sapatilha</a></li>
									<li>
											<a href="/meninas/infantil/calcados-infantil-meninas/c/tenis-infantil-meninas"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas?sort=topDiscount&q=%3Aprice-desc#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-infantil-meninos" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/botas-infantil-meninos"  title="Bota" >Bota</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/chinelos-infantil-meninos?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/papetes-infantil-meninos?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Papete" >Papete</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/sandalias-infantil-meninos?sort=topDiscount&q=%3AnewOnStore#"  title="Sandália" >Sandália</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/sapatenis-infantil-meninos?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Sapatênis" >Sapatênis</a></li>
									<li>
											<a href="/meninos/infantil/calcados-infantil-meninos/c/tenis-infantil-meninos?sort=topDiscount&q=%3AnewOnStore#"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-meninos?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-meninos?sort=topDiscount&q=%3Aprice-desc#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/nossas-marcas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/marcas/c/bebece"  title="Bebecê" >Bebecê</a></li>
									<li>
											<a href="/marcas/c/bottero"  title="Bottero" >Bottero</a></li>
									<li>
											<a href="/marcas/c/dakota"  title="Dakota" >Dakota</a></li>
									<li>
											<a href="/marcas/c/ipanema"  title="Ipanema" >Ipanema</a></li>
									<li>
											<a href="/marcas/c/mississipi"  title="Mississipi" >Mississipi</a></li>
									<li>
											<a href="/marcas/c/moleca"  title="Moleca" >Moleca</a></li>
									<li>
											<a href="/marcas/c/vizzano"  title="Vizzano" >Vizzano</a></li>
									<li>
											<a href="/marcas/c/via-uno"  title="Via Uno" >Via Uno</a></li>
									<li>
											<a href="/marcas/c/beira-rio"  title="Beira Rio" >Beira Rio</a></li>
									<li>
											<a href="/marcas/c/havaianas"  title="Havaianas" >Havaianas</a></li>
									<li>
											<a href="/marcas/c/olympikus"  title="Olympikus" >Olympikus</a></li>
									<li>
											<a href="/marcas/c/modare"  title="Modare" >Modare</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/calcados/feminino/c/botas">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hab/ha5/15601802346526/BMenu-Calcados-20240404-Botas-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="LingerieBarComponent">
						<a href="https://www.marisa.com.br/feminino/c/lingerie" class="hidden-md hidden-lg " title="Lingerie" >
			<div class="first-level-link-menu">
				<span>
					Lingerie</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Lingerie_menu"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/feminino/c/lingerie" class="hidden-sm hidden-xs " title="Lingerie" >
			Lingerie</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/lingerie?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h10/h40/15803578449950/BMenu-SubCategoria-Lingerie-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/lingerie?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hfd/h1c/15803578417182/BMenu-SubCategoria-Lingerie-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/lingerie?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/ha1/hcc/15803578384414/BMenu-SubCategoria-Lingerie-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/calcinhas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/he9/hcf/15803578220574/BMenu-SubCategoria-Lingerie-20240524-Calcinhas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calcinhas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/sutias">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h82/h46/15803578843166/BMenu-SubCategoria-Lingerie-20240524-Sutias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Sutiãs</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/pijamas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h85/h53/15803578482718/BMenu-SubCategoria-Lingerie-20240524-Pijamas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Pijamas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/camisolas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hf6/h53/15803578318878/BMenu-SubCategoria-Lingerie-20240524-Camisolas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Camisolas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/lingerie/feminino/c/kits">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h32/h3e/15803578351646/BMenu-SubCategoria-Lingerie-20240524-Kits.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Kits</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="LingerieBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Lingerie</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h15/h56/15601802674206/BMenu-Lingerie-20240326-Sensuais-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/lingerie" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Lingerie</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/lingerie/feminino/c/body-camisete"  title="Body e Camisete" >Body e Camisete</a></li>
									<li>
											<a href="/lingerie/feminino/c/calcinhas"  title="Calcinha" >Calcinha</a></li>
									<li>
											<a href="/lingerie/feminino/c/cintas-modeladores"  title="Cintas e Modeladores" >Cintas e Modeladores</a></li>
									<li>
											<a href="/lingerie/feminino/c/kits"  title="Kits" >Kits</a></li>
									<li>
											<a href="/lingerie/feminino/meias/c/meia-calca-meias"  title="Meia Calça" >Meia Calça</a></li>
									<li>
											<a href="/lingerie/feminino/meias/c/meias-de-compressao-meias"  title="Meias de compressão" >Meias de compressão</a></li>
									<li>
											<a href="/lingerie/feminino/c/meias"  title="Meias" >Meias</a></li>
									<li>
											<a href="/lingerie/feminino/c/sutias"  title="Sutiã" >Sutiã</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="/feminino/c/lingerie?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/pijamas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Pijamas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/lingerie/feminino/c/baby-doll"  title="Baby Doll" >Baby Doll</a></li>
									<li>
											<a href="/lingerie/feminino/c/camisolas"  title="Camisolas" >Camisolas</a></li>
									<li>
											<a href="/lingerie/feminino/c/pijamas"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="/lingerie/feminino/pijamas/c/pijama-feminino-inverno"  title="Pijamas de Inverno" >Pijamas de Inverno</a></li>
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/pantufas"  title="Pantufas" >Pantufas</a></li>
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/roupao-robe"  title="Robe e Roupão" >Robe e Roupão</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/nossas-marcas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/feminino/c/lingerie?q=%3AnewOnStore%3Abrand%3Amarisa&text=#"  title="Marisa" >Marisa</a></li>
									<li>
											</li>
									<li>
											<a href="/marcas/c/demillus"  title="DeMillus" >DeMillus</a></li>
									<li>
											<a href="/marcas/c/delrio"  title="Del Rio" >Del Rio</a></li>
									<li>
											<a href="/marcas/c/trifil"  title="Trifil" >Trifil</a></li>
									<li>
											<a href="/marcas/c/love-secret"  title="Love Secret" >Love Secret</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/moderna"  title="Moderna" >Moderna</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="/marcas/c/lucitex"  title="Lucitex" >Lucitex</a></li>
									<li>
											</li>
									<li>
											<a href="/marcas/c/dilady"  title="Dilady" >Dilady</a></li>
									<li>
											<a href="/marcas/c/plie"  title="Plié" >Plié</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/feminize"  title="Feminize" >Feminize</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AnewOnStore%3Abrand%3Apan&text=#"  title="Pantys" >Pantys</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/feminino/c/lingerie" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Setores</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/lingerie-basica"  title="Básico" >Básico</a></li>
									<li>
											<a href="https://www.marisa.com.br/lingerie/feminino/c/lingerie-personagens"  title="Geek" >Geek</a></li>
									<li>
											<a href="/lingerie/feminino/c/maternidade"  title="Maternidade" >Maternidade</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AnewOnStore%3Amaterial%3Arenda&text=#"  title="Renda" >Renda</a></li>
									<li>
											<a href="https://www.marisa.com.br/l/promocao/c/promocao-lingeriesensual"  title="Sensual" >Sensual</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/moda-praia"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/moda-fitness"  title="Moda Fitness" >Moda Fitness</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AnewOnStore%3Amaterial%3Arenda&text=#">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/ha2/h8b/15601802608670/BMenu-Lingerie-20240326-Sensuais-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="JeansBarComponent">
						<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="hidden-md hidden-lg " title="Jeans" >
			<div class="first-level-link-menu">
				<span>
					Jeans</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Jeans Menu"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="hidden-sm hidden-xs " title="Jeans" >
			Jeans</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topDiscount&q=%3AnewOnStore%3Amaterial%3Ajeans#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hd7/h63/15803577860126/BMenu-SubCategoria-Jeans-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h12/h4e/15803577827358/BMenu-SubCategoria-Jeans-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topSold&q=%3AtopDiscount%3Amaterial%3Ajeans#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hf9/ha5/15803577663518/BMenu-SubCategoria-Jeans-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?sort=newOnStore&q=%3AtopDiscount#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h8a/h62/15803577630750/BMenu-SubCategoria-Jeans-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/shorts/c/jeans-shorts">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h21/h78/15803578089502/BMenu-SubCategoria-Jeans-20240524-Shorts.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Shorts</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/saias/c/saias-jeans">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb8/h28/15803577925662/BMenu-SubCategoria-Jeans-20240524-Saias.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Saias</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h3d/hf1/15803578187806/BMenu-SubCategoria-Jeans-20240524-Vestidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Vestidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/calcas-plus-size/c/calca-jeans-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h39/h79/15803577892894/BMenu-SubCategoria-Jeans-20240524-PlusSize.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Plus Size</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="JeansBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Jeans</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/hd8/h6d/15601803526174/BMenu-Jeans-20240326-AllJeans-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?sort=newOnStore&q=%3AtopDiscount#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calça Jeans</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/skinny-jeans-calcas"  title="Skinny" >Skinny</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/flare-jeans-calcas"  title="Flare" >Flare</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/destroyed-jeans-calcas"  title="Destroyed" >Destroyed</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/jeans-calcas/c/cigarrete-jeans-calcas"  title="Cigarrete" >Cigarrete</a></li>
									<li>
											<a href="/roupas/feminino/calcas/jeans-calcas/c/boyfriend-jeans-calcas"  title="Boyfriend" >Boyfriend</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/sarja-calcas"  title="Sarja" >Sarja</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=clochard%20jeans"  title="Clochard" >Clochard</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/calca-mom"  title="Mom Jeans" >Mom Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Categoria</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/shorts/c/jeans-shorts"  title="Shorts" >Shorts</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/bermudas/c/jeans-bermudas"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/saias/c/saias-jeans"  title="Saias" >Saias</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/camisas/c/jeans-camisas"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/jaqueta-jeans"  title="Jaquetas" >Jaquetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/jardineiras-macacoes/c/jardineiras-jardineiras-macacoes?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Jardineiras" >Jardineiras</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/jardineiras-macacoes/c/macacoes-jardineiras-macacoes?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Macacão" >Macacão</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/infantil?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Infantil" >Infantil</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/plus-size/feminino/c/roupas-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Jeans Plus Size</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/calcas-plus-size/c/calca-jeans-plus-size"  title="Calça" >Calça</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/camisas-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Camisas " >Camisas </a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/shorts-bermudas-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Shorts e Bermudas" >Shorts e Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/saias-plus-size?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Saias " >Saias </a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/masculino/c/roupas-m?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Jeans Masculino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/calcas-m/c/jeans-calca-m"  title="Calça " >Calça </a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisas-m?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/bermudas/c/jeans-bermuda-m"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/casacos-jaquetas-m?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Jaquetas" >Jaquetas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/marcas/c/biotipo"  title="Biotipo" >Biotipo</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/marisa?q=%3AnewOnStore%3Amaterial%3Ajeans%3Amaterial%3Asarja&text=#"  title="Marisa" >Marisa</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/razon"  title="Razon" >Razon</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/sawary"  title="Sawary" >Sawary</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/zune-jeans"  title="Zune Jeans" >Zune Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/uber-jeans"  title="Uber Jeans" >Uber Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/cambos-premium"  title="Cambos Premium" >Cambos Premium</a></li>
									<li>
											<a href="https://www.marisa.com.br/parceiros"  title="Todas as Marcas" >Todas as Marcas</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AnewOnStore%3Amaterial%3Ajeans&text=#">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/haa/h94/15601803001886/BMenu-Jeans-20240326-AllJeans-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="PlusSizeBarComponent">
						<a href="/feminino/c/plus-size" class="hidden-md hidden-lg " title="Plus Size" >
			<div class="first-level-link-menu">
				<span>
					Plus Size</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="plus_size_menu"></i>
			</div>
		</a>

		<a href="/feminino/c/plus-size" class="hidden-sm hidden-xs " title="Plus Size" >
			Plus Size</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/plus-size?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h0c/h67/15803580612638/BMenu-SubCategoria-PlusSize-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/plus-size?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h5d/h00/15803580579870/BMenu-SubCategoria-PlusSize-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/plus-size?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/he5/h7d/15803580481566/BMenu-SubCategoria-PlusSize-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/blusas-plus-size/c/basica-blusas-plus">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h7b/hcd/15803580153886/BMenu-SubCategoria-PlusSize-20240524-Blusas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Blusas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/calcas-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb6/hdd/15803580317726/BMenu-SubCategoria-PlusSize-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/vestidos-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h20/h8e/15803580645406/BMenu-SubCategoria-PlusSize-20240524-Vestidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Vestidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/casacos-jaquetas-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h62/hf0/15803580350494/BMenu-SubCategoria-PlusSize-20240524-Casacos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Casacos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/plus-size/feminino/c/lingerie-plus-size">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hca/h04/15803580383262/BMenu-SubCategoria-PlusSize-20240524-Lingerie.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="PlusSizeBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Plus Size</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/ha8/h0f/15601803853854/BMenu-PlusSize-20240326-Novidades-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/roupas-plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Plus Size</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/blusas-plus-size/c/basica-blusas-plus"  title="Básicos" >Básicos</a></li>
									<li>
											<a href="/plus-size/feminino/c/moda-praia-plus-size"  title="Biquinis e Maiôs" >Biquinis e Maiôs</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/blusas-plus-size"  title="Blusas" >Blusas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/calcas-plus-size"  title="Calças" >Calças</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/camisas-plus-size"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/cardigans-sueteres-plus-size"  title="Cardigans" >Cardigans</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/casacos-jaquetas-plus-size"  title="Casacos e Jaquetas" >Casacos e Jaquetas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/jardineiras-macacoes-plus-size"  title="Macacão" >Macacão</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/casacos-jaquetas-plus-size"  title="Moleton" >Moleton</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/saias-plus-size"  title="Saias" >Saias</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/roupas-plus-size/c/shorts-bermudas-plus-size"  title="Shorts e Bermudas" >Shorts e Bermudas</a></li>
									<li>
											<a href="/plus-size/feminino/roupas-plus-size/c/vestidos-plus-size"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/c/roupas-plus-size?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="/feminino/c/plus-size?sort=topDiscount&q=%3AnewOnStore&show=Page#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/plus-size/feminino/c/lingerie-plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Lingerie Plus Size</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/plus-size/feminino/lingerie-plus-size/c/calcinhas-plus-size"  title="Calcinhas" >Calcinhas</a></li>
									<li>
											<a href="/plus-size/feminino/lingerie-plus-size/c/camisolas-plus-size"  title="Camisolas" >Camisolas</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/lingerie-plus-size/c/pijamas-plus-size"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/lingerie-plus-size/c/sutias-plus-size"  title="Sutiãs" >Sutiãs</a></li>
									<li>
											<a href="https://www.marisa.com.br/plus-size/feminino/c/lingerie-plus-size?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Tendências</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/blusas+vestidos+plus+size+ombros+de+fora"  title="Amarração" >Amarração</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/plus%20size%20conforto"  title="Conforto" >Conforto</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="/c/plus-size" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Setores</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/search/?sort=newOnStore&q=jeans+plus+size%3AtopDiscount&show=Page#"  title="Jeans" >Jeans</a></li>
									<li>
											<a href="/plus-size/feminino/c/moda-praia-plus-size"  title="Praia" >Praia</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/feminino/c/plus-size">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/haa/he0/15601803591710/BMenu-PlusSize-20240326-Novidades-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="AcessoriosBarComponent">
						<a href="https://www.marisa.com.br/feminino/c/acessorios?q=%3AnewOnStore%3AVendido+por%3Amarisa&text=#"  title="Acessórios" >Acessórios</a><div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/feminino/c/acessorios?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb5/haa/15803573567518/BMenu-SubCategoria-Acessorios-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/acessorios?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h92/hc3/15803573436446/BMenu-SubCategoria-Acessorios-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/feminino/c/acessorios?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h51/hc3/15803573338142/BMenu-SubCategoria-Acessorios-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/bolsas">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h86/he4/15803573272606/BMenu-SubCategoria-Acessorios-20240524-Bolsas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Bolsas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/relogios">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hb4/h99/15803574222878/BMenu-SubCategoria-Acessorios-20240524-Relogios.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Relógio</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/cintos">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hdb/h31/15803573305374/BMenu-SubCategoria-Acessorios-20240524-Cintos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Cintos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/oculos">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hc6/h4c/15803573534750/BMenu-SubCategoria-Acessorios-20240524-Oculos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Óculos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/acessorios/feminino/c/diversos?q=%3AnewOnStore%3Abrand%3Adisney%3Abrand%3Anickelodeon%3Abrand%3Awarnerbros%3Abrand%3Amarvel&text=#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h62/h89/15803573600286/BMenu-SubCategoria-Acessorios-20240524-Personagens.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Personagens</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="AcessoriosBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Acessórios</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h4c/had/15601804115998/BMenu-Acessorios-20240326-Bolsas-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/acessorios" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Feminino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/acessorios/feminino/c/bolsas"  title="Bolsas" >Bolsas</a></li>
									<li>
											</li>
									<li>
											<a href="/acessorios/feminino/c/carteiras"  title="Carteiras" >Carteiras</a></li>
									<li>
											<a href="/acessorios/feminino/c/cintos"  title="Cintos" >Cintos</a></li>
									<li>
											<a href="/acessorios/feminino/c/oculos"  title="Óculos de Sol" >Óculos de Sol</a></li>
									<li>
											<a href="/acessorios/feminino/c/relogios"  title="Relógios" >Relógios</a></li>
									<li>
											<a href="/acessorios/feminino/c/bijuterias"  title="Bijuterias" >Bijuterias</a></li>
									<li>
											<a href="/acessorios/feminino/c/necessaire"  title="Necessaires" >Necessaires</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/acessorios-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Masculino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/bones-m"  title="Bonés" >Bonés</a></li>
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/cintos-m"  title="Cintos" >Cintos</a></li>
									<li>
											<a href="/acessorios-m/masculino/c/oculos-m"  title="Óculos de Sol" >Óculos de Sol</a></li>
									<li>
											<a href="/masculino/c/relogios-m"  title="Relógios" >Relógios</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/acessorios-infantil" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Infantil</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/meninas/infantil/c/acessorios-infantil-meninas"  title="Meninas" >Meninas</a></li>
									<li>
											<a href="/meninos/infantil/c/acessorios-meninos"  title="Meninos" >Meninos</a></li>
									<li>
											</li>
									<li>
											<a href="/meninas/infantil/c/de-volta-as-aulas"  title="Material Escolar" >Material Escolar</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/acessorios-infantil?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/beleza-perfume" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Beleza</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/beleza-perfume/c/cuidados-pessoais"  title="Cuidados Pessoais" >Cuidados Pessoais</a></li>
									<li>
											<a href="https://www.marisa.com.br/beleza-perfume/c/maquiagem"  title="Maquiagem" >Maquiagem</a></li>
									<li>
											<a href="https://www.marisa.com.br/cuidados-pessoais/beleza-perfume/c/linha-infantil"  title="Linha Infantil" >Linha Infantil</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=beleza%20natural&p=beleza%20n&ranking=1&typeclick=1&ac_pos=header"  title="Beleza Natural" >Beleza Natural</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/beleza-perfume?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="/c/acessorios" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Mais Vendidos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/acessorios/feminino/bolsas/c/bolsa-transversal"  title="Bolsa Transversal" >Bolsa Transversal</a></li>
									<li>
											<a href="/acessorios/feminino/bolsas/c/bolsa-mao"  title="Bolsa de Mão" >Bolsa de Mão</a></li>
									<li>
											<a href="/acessorios/feminino/bolsas/c/bolsa-ombro"  title="Bolsa de Ombro" >Bolsa de Ombro</a></li>
									<li>
											<a href="/acessorios/feminino/c/cintos"  title="Cintos" >Cintos</a></li>
									<li>
											<a href="/acessorios/feminino/c/lencos-echarpes"  title="Lenços e Echarpes" >Lenços e Echarpes</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/acessorios/feminino/c/bolsas">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hdd/h30/15601803919390/BMenu-Acessorios-20240326-Bolsas-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="InfantilBarComponent">
						<a href="https://www.marisa.com.br/c/infantil" class="hidden-md hidden-lg " title="Infantil" >
			<div class="first-level-link-menu">
				<span>
					Infantil</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Infantil_menu"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/c/infantil" class="hidden-sm hidden-xs " title="Infantil" >
			Infantil</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/c/infantil?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hea/he0/15803577565214/BMenu-SubCategoria-Infantil-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/infantil?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h6b/hea/15803577466910/BMenu-SubCategoria-Infantil-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/infantil?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h5d/h8d/15803577434142/BMenu-SubCategoria-Infantil-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=blusa%20infantil">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h47/hc8/15803576451102/BMenu-SubCategoria-Infantil-20240524-Blusas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Blusas</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=conjuntos%20infantil&p=conjuntos%20in&ranking=3&typeclick=1&ac_pos=header">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hc7/h3d/15803577106462/BMenu-SubCategoria-Infantil-20240524-Conjuntos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Conjuntos</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=pijama%20infantil&p=pijama&ranking=3&typeclick=1">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h88/hcb/15803577597982/BMenu-SubCategoria-Infantil-20240524-Pijamas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Pijamas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/infantil/c/calcado-infantil">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/ha1/h81/15803576942622/BMenu-SubCategoria-Infantil-20240524-Calcados.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calçados</p>
									</div>
								</a>
							<a href="https://pesquisa.marisa.com.br/busca?q=infantil&sort=11&common_filter%5B1%5D=271%7C4137">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h75/h7d/15803577401374/BMenu-SubCategoria-Infantil-20240524-Intimo.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Meias e Moda Intima</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="InfantilBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Infantil</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/hbd/he4/15601804705822/BMenu-Infantil-20240326-Novidades-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/infantil/c/meninas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Menina</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/bebe-meninas"  title="Bebê de 0 a 24 Meses" >Bebê de 0 a 24 Meses</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/tamanho-1-a-3-menina"  title="Meninas de 1 a 3 Anos" >Meninas de 1 a 3 Anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/tamanho-4-a-10-menina"  title="Meninas de 4 a 10 anos" >Meninas de 4 a 10 anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/juvenil-meninas"  title="Garotas de 10 a 16 " >Garotas de 10 a 16 </a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/acessorios-infantil-meninas"  title="Acessórios" >Acessórios</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=calcinha%20infantil%20menina%20e%20meias&p=calcinhas%20e%20meias&ranking=2&typeclick=1&ac_pos=header"  title="Calcinhas e Meias" >Calcinhas e Meias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/fantasias-infantil-meninas"  title="Fantasias" >Fantasias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/moda-praia-infantil-meninas"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/infantil-meninas/c/pijamas-infantil-meninas"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninas"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/roupas-meninas?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/infantil/c/meninos" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Menino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/bebe-0-a-24-menino"  title="Bebê 0 a 24 meses" >Bebê 0 a 24 meses</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/tamanho-1-a-3-menino"  title="Meninos de 1 a 3 anos" >Meninos de 1 a 3 anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/tamanho-4-a-10-meninos"  title="Meninos de 4 a 10 anos" >Meninos de 4 a 10 anos</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/juvenil-meninos/c/tamanho-10-a-16-meninos"  title="Garotos de 10 a 16 " >Garotos de 10 a 16 </a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/acessorios-meninos"  title="Acessórios" >Acessórios</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/cuecas-meias-infantil"  title="Cuecas e meias" >Cuecas e meias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/fantasias-meninos"  title="Fantasias" >Fantasias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/moda-praia-meninos"  title="Moda Praia" >Moda Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/infantil-meninos/c/pijamas-infantil-meninos"  title="Pijamas" >Pijamas</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninos"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninos?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menina</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/botas-infantil-meninas"  title="Botas" >Botas</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/calcados-bebe-menina"  title="Calçados Bebê" >Calçados Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/chinelos-infantil-meninas"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/sandalias-infantil-meninas"  title="Sandálias" >Sandálias</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/sapatilhas-infantil-meninas"  title="Sapatilhas" >Sapatilhas</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/calcados-infantil-meninas/c/tenis-infantil-meninas"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=calcados%20infantil%20menina&sort=1&common_filter%5B1885%5D=2052"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-infantil-meninos" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados Menino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/bebe-meninos/c/calcados-bebe-meninos"  title="Calçados Bebê" >Calçados Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/chinelos-infantil-meninos"  title="Chinelo" >Chinelo</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/papetes-infantil-meninos"  title="Papetes" >Papetes</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/tenis-infantil-meninos"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/calcados-meninos/c/sandalias-infantil-meninos"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="/c/personagens" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Personagens</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/personagens/c/batman-roupas-sapatos"  title="Batman" >Batman</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/frozen-roupas-sapatos"  title="Frozen" >Frozen</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/hello-kitty-roupas-sapatos"  title="Hello Kitty" >Hello Kitty</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/homem-aranha-roupas-sapatos"  title="Homem Aranha" >Homem Aranha</a></li>
									<li>
											<a href="https://www.marisa.com.br/search?q=naruto%3AnewOnStore%3Agender%3AINFANT"  title="Naruto" >Naruto</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/personagens?q=%3AnewOnStore%3Abrand%3Aligadajustica&text=#"  title="Liga da Justiça" >Liga da Justiça</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/lol"  title="LOL Surprise" >LOL Surprise</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=looney%20tunes%20infantil"  title="Looney Tunes" >Looney Tunes</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/personagens?q=%3AnewOnStore%3Abrand%3Amarvel&text=#"  title="Marvel" >Marvel</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/mickey-roupas-sapatos"  title="Mickey" >Mickey</a></li>
									<li>
											<a href="https://www.marisa.com.br/personagens/c/minnie-roupas-sapatos"  title="Minnie" >Minnie</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/sonic"  title="Sonic" >Sonic</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/busca?q=stitch%20infantil"  title="Stitch" >Stitch</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/snoopy"  title="Snoopy" >Snoopy</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/c/infantil">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hd8/h9f/15601804640286/BMenu-Infantil-20240326-Novidades-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="MasculinoBarComponent">
						<a href="/c/masculino" class="hidden-md hidden-lg " title="Masculino" >
			<div class="first-level-link-menu">
				<span>
					Masculino</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="masculino"></i>
			</div>
		</a>

		<a href="/c/masculino" class="hidden-sm hidden-xs " title="Masculino" >
			Masculino</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/c/masculino?sort=topDiscount&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h02/he0/15803579924510/BMenu-SubCategoria-Masculino-20240524-Ofertas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Ofertas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/masculino?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h0b/h7e/15803579891742/BMenu-SubCategoria-Masculino-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/masculino?sort=topSold&q=%3AnewOnStore#">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hcf/h93/15803579858974/BMenu-SubCategoria-Masculino-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais Vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hdb/hdd/15803579727902/BMenu-SubCategoria-Masculino-20240524-Camisetas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Camsietas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/calcas-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hd5/h56/15803579465758/BMenu-SubCategoria-Masculino-20240524-Calcas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calças</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/bermudas-shorts-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h8a/h16/15803578875934/BMenu-SubCategoria-Masculino-20240524-Bermudas.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Bermudas</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/roupas-m/masculino/c/casacos-jaquetas-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h31/ha9/15803579826206/BMenu-SubCategoria-Masculino-20240524-Casacos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Casacos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/masculino/c/calcados-m">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h67/h8b/15803578908702/BMenu-SubCategoria-Masculino-20240524-Calcados.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Calçados</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="MasculinoBarComponent">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Masculino</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h2e/h23/15601960812574/BMenu-Masculino-20240326-Camisetas-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/roupas-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Roupas Masculinas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/tal+pais+tal+filhos"  title="Tal Pai Tal Filho" >Tal Pai Tal Filho</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/personagens-m"  title="Personagens e Geek" >Personagens e Geek</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/bermudas-shorts-m"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m"  title="Camisetas" >Camisetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/calcas-m"  title="Calças" >Calças</a></li>
									<li>
											<a href="/roupas-m/masculino/c/camisas-m"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="/roupas-m/masculino/c/polos-m"  title="Polos" >Polos</a></li>
									<li>
											<a href="/roupas-m/masculino/c/casacos-jaquetas-m"  title="Casacos e Jaquetas" >Casacos e Jaquetas</a></li>
									<li>
											<a href="/roupas-m/masculino/c/moletons-sueteres-m"  title="Moletons e Suéteres" >Moletons e Suéteres</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/regatas-m"  title="Regatas" >Regatas</a></li>
									<li>
											<a href="/c/masculino?sort=topDiscount&q=%3AnewOnStore#"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/masculino/c/cuecas-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Moda Íntima e Praia</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/masculino/c/cuecas-m"  title="Cuecas" >Cuecas</a></li>
									<li>
											<a href="/c/meias-m"  title="Meias" >Meias</a></li>
									<li>
											<a href="/masculino/c/pijamas-m"  title="Pijamas" >Pijamas</a></li>
									<li>
											</li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/masculino" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Estilos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="http://pesquisa.marisa.com.br/hotsite/moda-social-masculina"  title="Moda Social" >Moda Social</a></li>
									<li>
											</li>
									<li>
											<a href="/masculino/c/moda-fitness-m"  title="Moda Fitness" >Moda Fitness</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/roupas%20calcados%20personagens?sort=11&common_filter%5B1%5D=591"  title="Moda Geek" >Moda Geek</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/jeans+masculino"  title="Jeans" >Jeans</a></li>
									<li>
											<a href="https://pesquisa.marisa.com.br/hotsite/jeans+masculino"  title="Jeans" >Jeans</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/masculino/c/acessorios-m" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Acessórios</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/bones-m"  title="Bonés" >Bonés</a></li>
									<li>
											</li>
									<li>
											<a href="/acessorios-m/masculino/c/cintos-m"  title="Cintos" >Cintos</a></li>
									<li>
											</li>
									<li>
											<a href="/masculino/c/relogios-m"  title="Relógios" >Relógios</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?sort=topDiscount&q=%3Aprice-desc&show=Page#"  title="Ofertas" >Ofertas</a></li>
									<li>
											<a href="https://www.marisa.com.br/masculino/c/acessorios-m?siteName=Marisa"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/nossas-marcas" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Marcas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											</li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Amr"  title="MR" >MR</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Aroso"  title="Rock & Soda" >Rock & Soda</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Atopper&text=#"  title="Topper" >Topper</a></li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Azune"  title="Zune Jeans" >Zune Jeans</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/c/masculino?q=%3AnewOnStore%3Abrand%3Aolympikus"  title="Olympikus" >Olympikus</a></li>
									<li>
											<a href="https://www.marisa.com.br/marcas/c/mormaii"  title="Mormaii" >Mormaii</a></li>
									<li>
											</li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/parceiros" ></a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/hdc/h8f/15601960648734/BMenu-Masculino-20240326-Camisetas-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="BMenu_20180703_Maquiagens">
						<a href="https://www.marisa.com.br/c/casa" class="hidden-md hidden-lg " title="Casa" >
			<div class="first-level-link-menu">
				<span>
					Casa</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="DiaMaesNavigationNode"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/c/casa" class="hidden-sm hidden-xs " title="Casa" >
			Casa</a>
	<div class="js-container-sub-menu container-sub-menu">

				<div class="js-scroll box-custom-html hidden-xs hidden-sm">
						<a href="https://www.marisa.com.br/c/casa?sort=newOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h8d/hd9/15803575762974/BMenu-SubCategoria-Casa-20240524-Novidades.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Novidades</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/c/casa?sort=topSold&q=%3AnewOnStore">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h59/h16/15803575566366/BMenu-SubCategoria-Casa-20240524-MaisVendidos.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mais vendidos</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/cama/casa/c/jogo-de-cama">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h79/hf4/15803575533598/BMenu-SubCategoria-Casa-20240524-JogosDeCama.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Jogo de cama</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/cama">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h07/hb0/15803575336990/BMenu-SubCategoria-Casa-20240524-Cama.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Cama</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/Mesa">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h71/h60/15803575664670/BMenu-SubCategoria-Casa-20240524-Mesa.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Mesa</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/banho">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/h3b/h39/15803575238686/BMenu-SubCategoria-Casa-20240524-Banho.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Banho</p>
									</div>
								</a>
							<a href="https://www.marisa.com.br/casa/c/decoracao">
									<div class="box-icon-sub-category text-center" style="margin: 20px 12px 0;">
										<div class="d-flex h-center v-center w-100">
											<img src="/medias/sys_master/images/images/hae/h4a/15803575500830/BMenu-SubCategoria-Casa-20240524-Decoracao.gif" height="100" width="100"  alt="">
										</div>
										<p class="text-center c-gray m-t-4 m-b-0 fs-14">
											Decoração</p>
									</div>
								</a>
							</div>
				<ul class="js-box-sub-menu box-sub-menu" data-uid="BMenu_20180703_Maquiagens">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Moda Casa</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h8e/h8d/15654372245534/BMenu-Casa-20240409-Rovitex-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="/c/cama" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Cama</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/cama/casa/c/kit-colcha"  title="Colcha" >Colcha</a></li>
									<li>
											<a href="/cama/casa/c/edredom"  title="Edredom" >Edredom</a></li>
									<li>
											<a href="/cama/casa/c/jogo-de-cama"  title="Jogo de Cama" >Jogo de Cama</a></li>
									<li>
											<a href="/cama/casa/c/lencol"  title="Lençol" >Lençol</a></li>
									<li>
											</li>
									<li>
											<a href="/cama/casa/c/travesseiro"  title="Travesseiro" >Travesseiro</a></li>
									<li>
											<a href="https://www.marisa.com.br/casa/c/cama"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="/c/banho" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Banho</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											</li>
									<li>
											<a href="/banho/casa/c/roupao"  title="Roupão" >Roupão</a></li>
									<li>
											<a href="https://www.marisa.com.br/banho/casa/c/toalha-banho"  title="Toalha de Banho" >Toalha de Banho</a></li>
									<li>
											<a href="/banho/casa/c/toalha-rosto"  title="Toalha de Rosto" >Toalha de Rosto</a></li>
									<li>
											</li>
									<li>
											<a href="/banho/casa/c/toalha-praia"  title="Toalha de Praia" >Toalha de Praia</a></li>
									<li>
											<a href="https://www.marisa.com.br/casa/c/banho"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/casa/c/decoracao" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Decoração</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/decoracao/casa/c/almofada"  title="Almofada" >Almofada</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/decoracao/casa/c/cortina"  title="Cortina" >Cortina</a></li>
									<li>
											</li>
									<li>
											<a href="/decoracao/casa/c/kit-pano-copa"  title="Pano de Copa" >Pano de Copa</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/casa/c/decoracao"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="/decoracao/casa/c/toalha-de-mesa"  title="Ofertas" >Ofertas</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/c/casa?q=%3AnewOnStore%3Agender%3AINFANT" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Infantil</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="/cama/casa/infantil-cama/c/cobertores-mantas-infantil-cama"  title="Cobertor Infantil" >Cobertor Infantil</a></li>
									<li>
											<a href="/cama/casa/infantil-cama/c/edredom-infantil-cama"  title="Edredom Infantil" >Edredom Infantil</a></li>
									<li>
											<a href="/cama/casa/infantil-cama/c/lencol-infantil-cama"  title="Jogo de Lençol Infantil" >Jogo de Lençol Infantil</a></li>
									<li>
											<a href="/casa/eletronicos/bebe-eletronico/banho/infantil-banho/c/roupao-infantil-banho"  title="Roupão Infantil" >Roupão Infantil</a></li>
									<li>
											</li>
									<li>
											<a href="https://www.marisa.com.br/c/casa?q=%3AnewOnStore%3Agender%3AINFANT"  title="Ver Tudo" >Ver Tudo</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://pesquisa.marisa.com.br/hotsite/casarovitex">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h7c/hb6/15654371852318/BMenu-Casa-20240409-Rovitex-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				<li class="js-first-level-menu header-menubar-first-level-link hidden" data-uid="OfertaCategories">
						<a href="https://www.marisa.com.br/search?q=%3AtopDiscount" class="hidden-md hidden-lg " title="Oferta" >
			<div class="first-level-link-menu">
				<span>
					Oferta</span>

				<i class="js-open-sub-menu ion-chevron-right" data-uid="Marisa_link_Oferta"></i>
			</div>
		</a>

		<a href="https://www.marisa.com.br/search?q=%3AtopDiscount" class="hidden-sm hidden-xs " title="Oferta" >
			Oferta</a>
	<div class="js-container-sub-menu container-sub-menu">

				<ul class="js-box-sub-menu box-sub-menu" data-uid="OfertaCategories">
					<li class="header-menubar-second-level-link hidden-md hidden-lg">
						<div class="header-sub-menu">
							<span class="js-close-sub-menu go-back">
								












<svg width="16" height="13" class="c-black-svg" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
</span>

							<span class="text-primary fs-18">Oferta</span>

							<span class="js-close-header--menubar icon-close">
								











<svg width="16" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.2663 14.2288C0.898211 14.6063 0.898211 15.2085 1.2663 15.586C1.64781 15.9773 2.27681 15.9773 2.65832 15.586L8.75053 9.33755L14.8428 15.586C15.2243 15.9773 15.8533 15.9773 16.2348 15.586C16.6029 15.2085 16.6029 14.6063 16.2348 14.2288L10.1082 7.9451L16.2348 1.66142C16.6029 1.28389 16.6029 0.681741 16.2348 0.304211C15.8533 -0.087081 15.2243 -0.0870804 14.8428 0.304211L8.75053 6.55264L2.65831 0.304211C2.2768 -0.0870808 1.64781 -0.0870808 1.2663 0.304211C0.898211 0.681741 0.898212 1.28389 1.2663 1.66142L7.39289 7.9451L1.2663 14.2288Z" />
</svg></span>
						</div>

						<div class="category-banner d-flex justify-center m-t-20" style="width: 100%; height: 200px;">
								<div class="banner-sub-category-mobile" style="background-image: url('/medias/sys_master/images/images/h7b/hb8/15601805754398/BMenu-Oferta-20240326-UltimasOportunidades-Mobile.gif');">
								</div>
							</div>
						</li>

					<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/roupas?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Feminino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/feminino/c/roupas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/blusas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Blusas" >Blusas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/vestidos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Vestidos" >Vestidos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/calcas/c/jeans-calcas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Jeans" >Jeans</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/casacos-jaquetas/c/casaco-casacos-jaquetas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Casacos" >Casacos</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas/feminino/c/shorts?q=%3AnewOnStore&text=#"  title="Saias e Shorts" >Saias e Shorts</a></li>
									<li>
											<a href="https://www.marisa.com.br/acessorios/feminino/c/bolsas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bolsas" >Bolsas</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/lingerie?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Lingerie" >Lingerie</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/plus-size?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Plus Sizes" >Plus Sizes</a></li>
									<li>
											<a href="https://www.marisa.com.br/feminino/c/acessorios?q=%3AnewOnStore%3AVendido+por%3Amarisa&text=#"  title="Acessórios" >Acessórios</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/c/masculino?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Masculino</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/c/masculino?sort=topDiscount&q=%3AnewOnStore#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/bermudas-shorts-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bermudas" >Bermudas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisetas-m?q=%3Aprice-asc%3AVendido+por%3Amarisa&text=#"  title="Camisetas" >Camisetas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/calcas-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Calças" >Calças</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/camisas-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Camisas" >Camisas</a></li>
									<li>
											<a href="https://www.marisa.com.br/roupas-m/masculino/c/polos-m?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Polos" >Polos</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/feminino/c/calcados?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Calçados</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/feminino/c/calcados?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/sandalias?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Sandália" >Sandália</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/botas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bota" >Bota</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/tenis?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Tênis" >Tênis</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/scarpin?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Scarpin" >Scarpin</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/chinelos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Chinelo" >Chinelo</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/rasteirinhas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Rasteirinha" >Rasteirinha</a></li>
									<li>
											<a href="https://www.marisa.com.br/calcados/feminino/c/sapatilhas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Sapatilha" >Sapatilha</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link ">
								<a href="https://www.marisa.com.br/infantil/c/meninas?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Meninas</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/bebe-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bebê" >Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/infantil-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Infantil" >Infantil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/juvenil-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Juvenil" >Juvenil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninas/infantil/c/calcados-infantil-meninas?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Calçados" >Calçados</a></li>
									</ul>
							</li>
						<li class="header-menubar-second-level-link last">
								<a href="https://www.marisa.com.br/infantil/c/meninos?sort=topDiscount&q=%3AnewOnStore#" class="sub-title">
									<p class="m-0 p-b-12 lh-100 fs-16">
										Meninos</p>
								</a>

								<ul class="box-links-sub-menu">
									<li>
											<a href="https://www.marisa.com.br/infantil/c/meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Ver Tudo" >Ver Tudo</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/bebe-0-a-24-menino?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Bebê" >Bebê</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/infantil-meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Infantil" >Infantil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/juvenil-meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Juvenil" >Juvenil</a></li>
									<li>
											<a href="https://www.marisa.com.br/meninos/infantil/c/calcados-infantil-meninos?q=%3AtopDiscount%3AVendido+por%3Amarisa&text=#"  title="Calçados" >Calçados</a></li>
									</ul>
							</li>
						<li class="header--menubar--image hidden-xs hidden-sm">
							<div class="marisa--banner-component">
    <a href="https://pesquisa.marisa.com.br/hotsite/ultimas-oportunidades">
                <div class="js-container-preload active">
        <img class="banner-component--image lazy h-auto w-100" data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h78/hfd/15601805623326/BMenu-Oferta-20240326-UltimasOportunidades-Desktop.gif" width="300" height="400" title="" alt=""/>
    </div></a>
        </div>
</li>
					</ul>
			</div>
		</li>
				</ul>

<input type="hidden" id="js-geolocation-enabled" value="false" />
<input type="hidden" id="js-autofreightquote-enabled" value="true" />
<input type="hidden" id="js-mylocation-enabled" value="false" />
<input type="hidden" id="js-cookie-domain" value=".marisa.com.br" />


<input type="hidden" id="TOGGLE_BROWSERGEOLOCATION" value="false" />
</header>

<div class="yCmsContentSlot container-fluid">
</div><a id="skip-to-content"></a>

            <section class="marisa--main-content js-marisa--main-content"  >
                <div class="global-alerts container">
    </div>
<div class="container">
        <div class="page-header marisa-page-header page-header-login-page">
            <h1>Faça seu login</h1>
        </div>

		<div class="login-content">
	<div class="col-md-6 login-half ">
    <div class="row">
        <div class="col-md-10 ">
            <div class="login-page__headline">
                JÁ SOU CADASTRADO</div>

        </div>
        <div class="col-md-2"></div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="row side-divider ">
                <div class="col-md-10" data-use-captche="false">
                    <form id="loginForm" action="/login.php" method="post"><div class="facebook-login hidden">
                            <a href="#">
                                <img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/btn_facebook_login.png">
                            </a>
                        </div>

                        <div class="login-divider hidden">
                            <span class="divider-wrapper">
                                <span class="divider-text">ou</span>
                            </span>
                        </div>

                        <div class="login-title hide">
                            Entrar com e-mail</div>

					<div class="login-main-form">
                           <div class="container-label-email-cpf">
                            <div class="form-group">
            <label class="control-label " for="j_username">
                E-mail ou CPF *</label>
        <input id="j_username" name="j_username" class="  form-control" data-lbKey="E-mail ou CPF" type="text" required="true" value="" maxlength="241" autocomplete="new-password"/></div>
            <div class="form-group">
            <label class="control-label " for="j_password">
			Senha
				*
				</label>

        <input id="j_password" name="j_password" class="form-control" data-lbKey="Senha" required="true" maxLength="255" type="password" value="" autocomplete="off"/><span class="showPass">
            <a style="cursor: pointer">
                <img id="changeStatus"   class="js-pwd-view-j_password"  src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/eye-slash.png">
                <img id="changeStatus2"  class="js-pwd-view-j_password-view" src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/eye-open.png" hidden>
            </a>
        </span>
    </div>
            </div>

                        <div class="forgotten-password">
                            <button type="button" class="btn btn-link btn-sm pull-right" data-toggle="modal" data-target="#password-forgotten-modal" data-content-url="/login/pw/request">
                                    Esqueci minha senha</button>
                            </div>

                        





<button type="submit" class="btn btn-default btn-block btn-login" >
                                ENTRAR</button>
                        <div>
<input type="hidden" name="CSRFToken" value="21a12d65-b684-47ff-b754-798cf539f0d1" />
</div></form></div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>

    <spa class="dadosGTM"></span>
    </div>
</div><div class="login-content">
	


<button id="errorLogin" type="button" class="btn btn-primary hidden" data-toggle="modal" data-target="#modal--login-error">
	Launch demo modal
</button>



<div class="col-md-6 login-half">
	<div class="row">
		<div class="col-md-10 col-md-offset-2">
			<div class="login-page__headline">
				QUERO ME CADASTRAR
			</div>
		</div>
		<div class="col-md-10 col-md-offset-2">
			<div class="facebook-login">
				<a id="facebook_login" class="btn btn-block btn_face">
					<!-- <img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/btn_facebook_cadastro.png"> -->
					<div class="pull-left">
						<i class="icon ion-social-facebook"></i>
						<span class="bd1"></span>
					</div>
					CADASTRAR COM FACEBOOK
				</a>

				<!-- <div id="socialid_login_container">
					<button id="facebook_login" style="">face</button>

				</div> -->
			</div>

			<div class="login-divider">
				<span class="divider-wrapper">
					<span class="divider-text">ou</span>
				</span>
			</div>
			<a id="registerWithEmail" class="btn btn-default btn-block btn-login btn-cadastro" href="registrar.html
            ">
				CADASTRAR COM EMAIL
			</a>
		</div>
	</div>
</div></div>

<style> 
.container-whats-faq { 
	background-color: #fff;   
	width: 356px;   
	height: auto;   
	padding: 1px 24px;   
	position: fixed;   
	right: 28px;   
	bottom: 75px;   
	z-index: 9999;   
	-webkit-border-radius: 15px;   
	-webkit-border-top-left-radius: 15px;   
	-moz-border-radius: 15px;   
	-moz-border-radius-topleft: 15px;   
	border-radius: 15px;   
	border-top-left-radius: 15px;   
	-webkit-box-shadow: -1px 0px 32px -2px rgba(0,0,0,0.22);   
	-moz-box-shadow: -1px 0px 32px -2px rgba(0,0,0,0.22);   
	box-shadow: -1px 0px 32px -2px rgba(0,0,0,0.22); 
}  

.title-modal-whats-faq {   
	display: block;   
	color: #ec008c;   
	margin-bottom: 28px!important;   
	padding-bottom: 5px;   
	border-bottom: 1px solid #eeeeee;   
	font-family: PlutoSans; 
}  

.title-modal-whats-faq h3 {   
	display: block;   
	font-size: 30px;   
	font-weight: bold;   
	font-family: PlutoSans; 
}  

.title-modal-whats-faq h4 {   
	display: block;   
	font-size: 17px;   
	font-family: PlutoSans; 
}

.container-info-whats-faq {     
	display: block;  
}  

.container-whatsapp-modal {     
	display: block;      
	padding-bottom: 30px; 
}  

.container-whatsapp-modal img {     
	display: inline-block;     
	vertical-align: sub;     
	padding: 0 12px 0 0; 
}  

.info-whats-faq-modal {     
	display: inline-block; 
}  

.info-whats-faq-modal span {     
	display: inline-block; 
} 

.info-whats-faq-modal .title-whatsapp-modal {   
	color: #4caf50;   
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
} 

.info-whats-faq-modal .title-whatsapp-modal2 {   
	color: #4caf50;   
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
} 

.info-whats-faq-modal .title-fatura-modal {   
	color: #ec008c;   
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
}  

.info-whats-faq-modal .call-whatsapp-modal {   
	color: #838383;   
	font-size: 14px;   
	font-family: PlutoSans; 
}  

.info-whats-faq-modal .call-whatsapp-modal {   
	color: #838383;   
	font-size: 14px;   
	font-family: PlutoSans; 
}  

.info-whats-faq-modal .call-whatsapp-modal b {   
	color: #4caf50;   
	font-size: 14px;   
	font-family: PlutoSans; 
}  

.info-whats-faq-modal .title-faq-modal {   
	color: #444444;   
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
}  

.container-faq-modal {     
	display: block;      
	padding-bottom: 30px; 
}  

.container-faq-modal img {     
	display: inline-block;     
	vertical-align: middle;  
	padding: 0 12px 0 0; 
} 



.close-modal-whats-faq {     
	font-family: PlutoSans;     
	font-size: 14px;     
	color: #f7f7f7;     
	position: absolute;     
	top: 12px;     
	right: 15px;     
	text-align: center;     
	background-color: #ec008c;     
	border-radius: 50%;     
	width: 30px;     
	height: 30px;     
	padding: 5px 0 0 0;     
	cursor: pointer; 
}

.open-modal-whats-faq {     
	position: fixed;     
	right: 28px;     
	bottom: 15px;     
	cursor: pointer;     
	z-index: 99999; 
}  


.info-comprewhats-faq-modal {     
	display: inline-block; 
}  

.info-comprewhats-faq-modal span {     
	display: inline-block; 
} 

.info-comprewhats-faq-modal .title-whatsapp-modal {   
	color: #4caf50;   
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
} 

.info-comprewhats-faq-modal .title-fatura-modal {   
	color: #4caf50;   
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
}  

.info-comprewhats-faq-modal .call-whatsapp-modal {   
	color: #838383;   
	font-size: 14px;   
	font-family: PlutoSans; 
}  

.info-comprewhats-faq-modal .call-whatsapp-modal b {   
	color: #4caf50;   
	font-size: 14px;   
	font-family: PlutoSans; 
}  

.info-comprewhats-faq-modal .title-faq-modal {   
	/*color: #4caf50;   */
	font-size: 16px;   
	font-weight: bold;   
	font-family: PlutoSans; 
}  



@media screen and (max-width: 1023px) {   
.container-whats-faq  {     
	width: 310px;     
	right: 28px;     
	right: 2%;   
}   

.open-modal-whats-faq {     
	right: 2%;    
}    

.info-whats-faq-modal .call-whatsapp-modal {    
	font-size: 12px;   
} 

.info-comprewhats-faq-modal .call-whatsapp-modal {    
	font-size: 13px;   
}
}  

  @media (max-width: 768px){
.info-whats-faq-modal .title-whatsapp-modal {   
	color: #4caf50;   
	font-size: 14px;   
	font-weight: bold;   
	font-family: PlutoSans; 
} 

.info-whats-faq-modal .title-faq-modal {   
	/*color: #ec008c;   */
	font-size: 14px;   
	font-weight: bold;   
	font-family: PlutoSans; 
}

  }


</style>  

<div id="close-modal-whats-faq" class="container-whats-faq hidden-xs" style="display: none;">
	<div onclick="clickOpenModalFaqWhats()" class="close-modal-whats-faq">x</div>

		<header class="title-modal-whats-faq">
		    <h3>Olá!</h3>         
		    	<h4 style="color: #838383">Como podemos te ajudar?</h4>
		</header>

		<section class="container-info-whats-faq">
			


			<div class="container-whatsapp-modal">
				<a target="_blank" href="https://wa.me/5511944475591?text=Ol%C3%A1"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h2d/hc3/15624978432030/flutuante-wtp-icon.gif"/>
					<div class="info-whats-faq-modal">
						<span class="title-faq-modal">Vendedores Online</span><br />
						<span class="call-whatsapp-modal">Clique aqui</span>
					</div>
				</a>
			</div>

			<div class="container-whatsapp-modal">
				<a target="_blank" href="https://api.whatsapp.com/send?phone=551140033900"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h2d/hc3/15624978432030/flutuante-wtp-icon.gif"/>
					<div class="info-whats-faq-modal">
						<span class="title-faq-modal">Cartão Marisa</span><br />
						<span class="call-whatsapp-modal">24 horas</span>
					</div>
				</a>
			</div>

			<div class="container-whatsapp-modal">
				<a target="_blank" href="https://bit.ly/AVI-marisa"><img src="https://www.marisa.com.br/downloads/images/fatura-icon.png"/>
					<div class="info-whats-faq-modal">
						<span class="title-faq-modal">Cartão Mbank</span><br />
						<span class="call-whatsapp-modal">Clique aqui</span>
					</div>
				</a>
			</div>	


			<div class="container-whatsapp-modal">
				<a target="_blank" href="https://bit.ly/AVI-marisa"><img src="https://www.marisa.com.br/downloads/images/pedido-icon.png"/>
					<div class="info-whats-faq-modal">
						<span class="title-faq-modal">Acompanhar seu Pedido</span><br />
						<span class="call-whatsapp-modal">24 horas</span>
					</div>
				</a>
			</div>


		</section>
	</div>

<!-- 	<div onclick="clickOpenModalFaqWhats()" class="open-modal-whats-faq hidden-xs">
		<img src="https://images2.marisa.com.br/medias/sys_master/images/images/he5/hc1/11530988748830/2020-botwhats-balon.png"/> 
	</div> -->

	<div onclick="clickOpenModalFaqWhats()" class="open-modal-whats-faq hidden-xs">
		<img class="hidden-xs" src="https://www.marisa.com.br/downloads/images/question-biggest-icon.png" alt="Atendimento"/> 
		<img class="visible-xs" src="https://www.marisa.com.br/downloads/images/question-icon.png" alt="Atendimento"/> 
	</div>	

	<script>
	function clickOpenModalFaqWhats() {         var x = document.getElementById("close-modal-whats-faq");         if (x.style.display === "none") {           x.style.display = "block";         } else {           x.style.display = "none";         }       }      function clickCloseModalFaqWhats() {     var element = document.getElementById("close-modal-whats-faq");       element.classList.add("hide");     } </script><style>
.login-half .facebook-login, .login-half .login-divider {
    display: none;
}
</style></div>
</section>

            <footer id="footerToTop" class="footer">

	<button id="gotToTop" class="gotToTop visible-xs visible-sm">
		<i class="ion-chevron-up"></i>
		<p>Topo</p>
	</button>

	<section class="newsletter" data-position="2">
				<div class="container">
					<div class="newsletter-content">
						<div class="social-networking-newsletter col-sm-12 col-xs-12"> <div class="row hidden-sm hidden-xs"> <div class="text-right social-title">Aproveite e compartilhe a Marisa nas Redes Sociais</div></div><div class="row"> <div class="text-right social-icons"> <a href="https://www.facebook.com/voudemarisa" target="_blank"><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8825 23.4309H16.2545V15.3479H18.504L18.802 12.5628H16.2545L16.258 11.1682C16.258 10.4422 16.328 10.0525 17.38 10.0525H18.786V7.26684H16.536C13.8335 7.26684 12.8825 8.6183 12.8825 10.8904V12.5628H11.198V15.3484H12.8825V23.4309ZM15 30.2056C6.716 30.2056 0 23.5537 0 15.3489C0 7.14353 6.716 0.492188 15 0.492188C23.284 0.492188 30 7.14353 30 15.3489C30 23.5537 23.284 30.2056 15 30.2056Z" fill="#494747"/></svg></a><a href="http://instagram.com/voudemarisa" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7426 17.9678C16.2109 17.9678 17.4012 16.7887 17.4012 15.3342C17.4012 13.8798 16.2109 12.7007 14.7426 12.7007C13.2743 12.7007 12.084 13.8798 12.084 15.3342C12.084 16.7887 13.2743 17.9678 14.7426 17.9678Z" fill="#494747"/><path d="M18.0659 8.87061H11.4194C10.4527 8.87061 9.60676 9.16983 9.06296 9.70843C8.51915 10.247 8.21704 11.0849 8.21704 12.0424V18.6253C8.21704 19.5828 8.51915 20.4207 9.12338 21.0191C9.7276 21.5577 10.5131 21.8569 11.4799 21.8569H18.0659C19.0327 21.8569 19.8786 21.5577 20.4224 21.0191C21.0266 20.4805 21.3287 19.6427 21.3287 18.6852V12.1022C21.3287 11.1447 21.0266 10.3667 20.4828 9.76828C19.8786 9.16983 19.0931 8.87061 18.0659 8.87061ZM14.7427 19.4033C12.4466 19.4033 10.6339 17.5481 10.6339 15.3338C10.6339 13.0597 12.507 11.2644 14.7427 11.2644C16.9783 11.2644 18.9118 13.0597 18.9118 15.3338C18.9118 17.608 17.0387 19.4033 14.7427 19.4033ZM19.0327 12.0424C18.4889 12.0424 18.0659 11.6235 18.0659 11.0849C18.0659 10.5463 18.4889 10.1273 19.0327 10.1273C19.5765 10.1273 19.9994 10.5463 19.9994 11.0849C19.9994 11.6235 19.5765 12.0424 19.0327 12.0424Z" fill="#494747"/><path d="M14.8639 0.492188C6.64648 0.492188 0 7.07516 0 15.2141C0 23.3531 6.64648 29.936 14.8639 29.936C23.0814 29.936 29.7279 23.3531 29.7279 15.2141C29.7883 7.07516 23.0814 0.492188 14.8639 0.492188ZM22.7793 18.6851C22.7793 20.0616 22.2959 21.2585 21.45 22.0963C20.6041 22.9341 19.3956 23.3531 18.0663 23.3531H11.4803C10.151 23.3531 8.94253 22.9341 8.09662 22.0963C7.19028 21.2585 6.76732 20.0616 6.76732 18.6851V12.1022C6.76732 9.34928 8.64042 7.43423 11.4803 7.43423H18.1268C19.5165 7.43423 20.6645 7.91299 21.5104 8.75083C22.3563 9.58866 22.7793 10.7257 22.7793 12.1022V18.6851Z" fill="#494747"/></svg></a> <a href="http://twitter.com/voudemarisa" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px" style="border-radius: 50%;"><g transform="translate(58.88,58.88) scale(0.54,0.54)"><g fill="#494747" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M-109.03704,365.03704v-474.07407h474.07407v474.07407z" id="bgRectangle"></path></g><g fill="#968f8f" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path></g></g></g></svg> </a> <a href="http://www.youtube.com/voudemarisa" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.7279 15.2239C29.7279 23.3546 23.0731 29.9458 14.8639 29.9458C6.65481 29.9458 0 23.3546 0 15.2239C0 7.09318 6.65481 0.501953 14.8639 0.501953C23.0731 0.501953 29.7279 7.09318 29.7279 15.2239ZM9.05874 14.6579H20.6692C22.5146 14.6579 24.0111 16.0319 24.0111 17.8487V20.9935C24.0111 22.8103 22.5146 24.2837 20.6692 24.2837H9.05874C7.21294 24.2837 5.71706 22.8101 5.71706 20.9935V17.8237C5.71706 16.0069 7.21294 14.6579 9.05874 14.6579ZM10.2161 17.236H11.3356V16.364H8.01456V17.236H9.13386V22.3602H10.2161V17.236ZM13.2433 22.5791H14.2028V18.1551H13.2428V21.5154C13.1525 21.6115 13.054 21.6906 12.9449 21.7532C12.8371 21.8152 12.7468 21.8457 12.6776 21.8457C12.5875 21.8457 12.5217 21.8237 12.4801 21.7753C12.4415 21.7293 12.4206 21.6536 12.4206 21.5491V18.1551H11.4606V21.8537C11.4606 22.1184 11.518 22.3142 11.6292 22.4465C11.743 22.5791 11.9084 22.6446 12.1313 22.6446C12.3117 22.6446 12.4974 22.5991 12.689 22.5029C12.8815 22.4104 13.065 22.2737 13.2433 22.0943V22.5791ZM18 22.2644C18.1507 22.0966 18.2258 21.8566 18.2258 21.5442H18.2255V19.0893C18.2255 18.7272 18.146 18.451 17.9852 18.2622C17.8442 18.0959 17.6474 18.0982 17.3946 18.101C17.3604 18.1014 17.3252 18.1018 17.2891 18.1018C17.1399 18.1018 16.7232 18.136 16.5764 18.2072C16.4326 18.277 16.2952 18.3802 16.1652 18.5139V16.4612H15.1945V22.5789H16.1652V22.2401C16.2905 22.3768 16.4289 22.4757 16.5757 22.5397C16.7219 22.6046 17.1586 22.6359 17.3477 22.6359C17.6318 22.6359 17.8504 22.4318 18 22.2644ZM19.881 20.4006H21.7175H21.718V19.2726C21.718 18.8533 21.6 18.5322 21.3642 18.3081C21.1281 18.0845 20.7903 17.9728 20.3505 17.9728C19.9198 17.9728 19.5714 18.0931 19.2996 18.3343C19.0273 18.5756 18.891 18.8901 18.891 19.2724V21.2596C18.891 21.6859 19.0163 22.0212 19.2621 22.2625C19.5087 22.506 19.8478 22.6269 20.2781 22.6269C20.7569 22.6269 21.1163 22.513 21.3556 22.2852C21.5983 22.0547 21.7177 21.7129 21.7177 21.2596V21.0326H20.7297V21.234C20.7297 21.4944 20.6965 21.6616 20.6342 21.7386C20.5706 21.815 20.4596 21.8533 20.3001 21.8533C20.147 21.8533 20.0388 21.8093 19.9746 21.7188C19.9116 21.6284 19.881 21.4668 19.881 21.2342V20.4006ZM19.9802 18.8689C20.0472 18.7863 20.1556 18.7464 20.3091 18.7464C20.4551 18.7464 20.5633 18.7863 20.6284 18.8689C20.6955 18.9462 20.7297 19.0796 20.7297 19.2652V19.7123H19.881V19.2652C19.881 19.0796 19.9127 18.9462 19.9802 18.8689ZM16.3634 18.8471C16.4302 18.8178 16.4987 18.8043 16.5671 18.8043C16.6962 18.8043 17.0657 18.8428 17.1356 18.919C17.2037 18.9964 17.2365 19.1091 17.2365 19.2592V21.5444C17.2365 21.6859 17.208 21.7862 17.1535 21.8488C17.0981 21.9122 16.7428 21.9435 16.6246 21.9435C16.5434 21.9435 16.4673 21.9264 16.3931 21.8959C16.3192 21.8644 16.2426 21.8095 16.1655 21.7384V18.9824C16.2308 18.9219 16.2965 18.8755 16.3634 18.8471ZM18.3771 13.3959C18.1697 13.5033 17.9684 13.559 17.7729 13.559C17.5306 13.559 17.3504 13.4815 17.2278 13.3287C17.1069 13.1782 17.0454 12.951 17.0454 12.6471V8.3852H18.0858V12.295C18.0858 12.4148 18.1097 12.5019 18.1533 12.5556C18.1957 12.6105 18.2672 12.6373 18.3648 12.6373C18.4413 12.6373 18.5386 12.6019 18.6562 12.5303C18.7725 12.4579 18.8802 12.367 18.9766 12.2561V8.3852H20.0193V13.4843H18.9766V12.9199C18.7862 13.1278 18.5861 13.287 18.3771 13.3959ZM15.8223 13.2411C15.5512 13.489 15.1796 13.6135 14.7063 13.6135C14.2502 13.6135 13.8853 13.4845 13.6118 13.2284C13.3388 12.9713 13.2021 12.6282 13.2021 12.1945V9.55116C13.2021 9.15471 13.3421 8.84125 13.6222 8.60733C13.9023 8.3734 14.2801 8.25644 14.7534 8.25644C15.1848 8.25644 15.5379 8.38012 15.8144 8.62584C16.0881 8.87217 16.2261 9.19194 16.2261 9.57984V12.2146C16.2261 12.6512 16.0912 12.9915 15.8223 13.2411ZM14.3925 9.24177C14.314 9.31175 14.2741 9.40104 14.2741 9.51211H14.2739V12.2903C14.2739 12.4305 14.3111 12.5377 14.3848 12.6143C14.4586 12.6925 14.565 12.7297 14.7025 12.7297C14.8438 12.7297 14.9556 12.6912 15.039 12.6129C15.1225 12.5346 15.1643 12.4266 15.1643 12.2903V9.51211C15.1643 9.40104 15.1219 9.31175 15.0373 9.24177C14.9523 9.17322 14.8409 9.13966 14.7027 9.13966C14.5758 9.13966 14.4729 9.17322 14.3925 9.24177ZM11.7519 13.4845H10.5789H10.5787V10.3388L9.18176 6.16455H10.3635L11.1252 8.92811H11.199L11.925 6.16455H13.1171L11.7519 10.21V13.4845Z" fill="#494747"/></svg><a href="https://br.pinterest.com/voudemarisa/" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 14.8535C30 22.783 23.2822 29.2148 15 29.2148C6.71421 29.2148 0 22.783 0 14.8535C0 6.92052 6.71421 0.492188 15 0.492188C23.2822 0.492188 30 6.92052 30 14.8535ZM16.049 4.07205C10.0585 4.07205 6.57164 8.63173 6.57164 12.0611C6.57164 14.1362 7.85819 15.9839 9.61988 16.6732C9.90866 16.7852 10.1681 16.6768 10.2522 16.3688C10.3107 16.1588 10.446 15.6234 10.5081 15.3994C10.5922 15.0985 10.5629 14.9935 10.3289 14.7275C9.82088 14.1536 9.49561 13.4118 9.49561 12.362C9.49561 9.31055 11.8787 6.57753 15.7018 6.57753C19.0899 6.57753 20.9503 8.55816 20.9503 11.2037C20.9503 14.6855 19.3421 17.625 16.9518 17.625C15.6323 17.625 14.6454 16.5787 14.9635 15.2979C15.3399 13.7687 16.0746 12.117 16.0746 11.0147C16.0746 10.0279 15.5226 9.20204 14.375 9.20204C13.0263 9.20204 11.9444 10.5388 11.9444 12.327C11.9444 13.4678 12.3464 14.2376 12.3464 14.2376C12.3464 14.2376 10.497 19.8366 10.2558 20.8164C9.77333 22.769 11.1184 26.0584 11.1549 26.2999C11.1732 26.4434 11.3669 26.4749 11.4546 26.3699C11.5789 26.2124 13.6513 23.4199 14.1958 21.5233C14.353 20.9844 14.1483 18.2024 14.1483 18.2024C14.5869 19.0037 15.8661 20.155 17.2295 20.155C21.2829 20.155 24.4992 16.1692 24.4992 11.4346C24.4993 7.85482 20.8626 4.07205 16.049 4.07205Z" fill="#494747"/></svg></a> </div></div></div></div>
				</div>
			</section>
			
		<section class="yCmsContentSlot pre-footer">
<div class="hidden" data-component="FooterComponentModel (9028984472636@25)"></div>
		<div class="container">
			<div class="container-fluid">
	<div class="footer__top">
		<div class="row">
			<div class="footer__right col-xs-12 col-md-offset-1 col-md-3" data-position="2">
						<p class="search-title c-03">N&atilde;o encontrou o que estava procurando?</p>

						<div class="search-content">
							<p>
								<a href="/faq">
									<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/ico_ajuda.png" alt="icone de ajuda">
									Podemos ajudar? Fale conosco.
								</a>
							</p>
							<p>
								<a href="/store-finder">
									<img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/ico_localizacao_cinza.png" alt="icone de localizacao">
									Encontre as lojas mais pr&oacute;ximas.
								</a>
							</p>
						</div>
					</div>

					<div class="footer__left col-xs-12 col-sm-12 col-md-8">
						<div class="row">
							<div class="footer__nav--container col-xs-12 col-sm-12 col-md-3 ">
											<div class="title hidden-sm hidden-xs">Departamentos</div>
												<a class="title visible-sm visible-xs collapsed" role="button" data-toggle="collapse" href="#collapseDepartamentosNavNode" aria-expanded="false" aria-controls="collapseDepartamentosNavNode">Departamentos</a>
											<ul class="footer__nav--links" id="collapseDepartamentosNavNode">
												<li class="footer__link ">
															<a href="https://www.marisa.com.br/feminino/c/roupas"
															   title="Feminino"> Feminino</a>
														</li>
													<li class="footer__link ">
															<a href="/feminino/c/calcados"
															   title="Calçados"> Calçados</a>
														</li>
													<li class="footer__link ">
															<a href="/feminino/c/lingerie"
															   title="Lingerie"> Lingerie</a>
														</li>
													<li class="footer__link ">
															<a href="/roupas/feminino/calcas/c/jeans-calcas"
															   title="Jeans"> Jeans</a>
														</li>
													<li class="footer__link ">
															<a href="/feminino/c/plus-size"
															   title="Plus Size"> Plus Size</a>
														</li>
													<li class="footer__link ">
															<a href="/feminino/c/acessorios"
															   title="Acessórios"> Acessórios</a>
														</li>
													<li class="footer__link ">
															<a href="/c/infantil"
															   title="Infantil"> Infantil</a>
														</li>
													<li class="footer__link ">
															<a href="/c/masculino"
															   title="Masculino"> Masculino</a>
														</li>
													<li class="footer__link ">
															<a href="/c/marcas"
															   title="Marcas"> Marcas</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/feminino/c/roupas"
															   title="Roupas Femininas"> Roupas Femininas</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/roupas/feminino/c/blusas"
															   title="Blusas"> Blusas</a>
														</li>
													</ul>
										</div>
									<div class="footer__nav--container col-xs-12 col-sm-12 col-md-3 ">
											<div class="title hidden-sm hidden-xs">Institucional</div>
												<a class="title visible-sm visible-xs collapsed" role="button" data-toggle="collapse" href="#collapseInstitucionalNavNode" aria-expanded="false" aria-controls="collapseInstitucionalNavNode">Institucional</a>
											<ul class="footer__nav--links" id="collapseInstitucionalNavNode">
												<li class="footer__link ">
															<a href="/institucional/sobre"
															   title="Sobre a Marisa"> Sobre a Marisa</a>
														</li>
													<li class="footer__link ">
															<a href="/store-finder"
															   title="Nossas Lojas"> Nossas Lojas</a>
														</li>
													<li class="footer__link ">
															<a href="https://ri.marisa.com.br/"
															   title="Investidores"> Investidores</a>
														</li>
													<li class="footer__link ">
															<a href="/institucional/termos-seguranca"
															   title="Termos de Segurança"> Termos de Segurança</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.centraldenoticiasmarisa.com.br/"
															   title="Imprensa"> Imprensa</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/cartaomarisa"
															   title="Cartão Marisa"> Cartão Marisa</a>
														</li>
													<li class="footer__link ">
															<a href="/institucional/site-map"
															   title="Mapa do Site"> Mapa do Site</a>
														</li>
													<li class="footer__link ">
															<a href="/institucional/certificados"
															   title="Certificados"> Certificados</a>
														</li>
													<li class="footer__link ">
															<a href="/institucional/politica-privacidade-geral"
															   title="Politica de Privacidade Geral"> Politica de Privacidade Geral</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/fornecedor"
															   title="Fornecedores"> Fornecedores</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/canaldedenuncia"
															   title="Canal de Denúncias"> Canal de Denúncias</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/sustentabilidade"
															   title="Sustentabilidade"> Sustentabilidade</a>
														</li>
													</ul>
										</div>
									<div class="footer__nav--container col-xs-12 col-sm-12 col-md-3 ">
											<div class="title hidden-sm hidden-xs">Atendimento ao Cliente</div>
												<a class="title visible-sm visible-xs collapsed" role="button" data-toggle="collapse" href="#collapseSuporteNavNode" aria-expanded="false" aria-controls="collapseSuporteNavNode">Atendimento ao Cliente</a>
											<ul class="footer__nav--links" id="collapseSuporteNavNode">
												<li class="footer__link ">
															<a href="https://www.marisa.com.br/faq"
															   title="Nossos canais de Atendimento"> Nossos canais de Atendimento</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/faq#anchor-contato"
															   title="Fale com a gente"> Fale com a gente</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/formas-de-pagamento"
															   title="Formas de Pagamento"> Formas de Pagamento</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/trocas-e-devolucoes"
															   title="Troca e Devoluções"> Troca e Devoluções</a>
														</li>
													<li class="footer__link ">
															<a href="/my-account/orders"
															   title="Meus Pedidos"> Meus Pedidos</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/como-comprar-marisa"
															   title="Como Comprar"> Como Comprar</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/entrega"
															   title="Prazo de Entrega"> Prazo de Entrega</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/my-account/orders"
															   title="2ª Via de Boleto"> 2ª Via de Boleto</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/faq#regras-e-promocoes"
															   title="Regras e Promoções"> Regras e Promoções</a>
														</li>
													</ul>
										</div>
									<div class="footer__nav--container col-xs-12 col-sm-12 col-md-3 ">
											<div class="title hidden-sm hidden-xs">Trabalhe Conosco</div>
												<a class="title visible-sm visible-xs collapsed" role="button" data-toggle="collapse" href="#collapseTrabalheConoscoNavNode" aria-expanded="false" aria-controls="collapseTrabalheConoscoNavNode">Trabalhe Conosco</a>
											<ul class="footer__nav--links" id="collapseTrabalheConoscoNavNode">
												<li class="footer__link ">
															<a href="https://marisa.gupy.io/"
															   title="Trabalhe Conosco"> Trabalhe Conosco</a>
														</li>
													<li class="footer__link ">
															<a href="https://www.marisa.com.br/contratacao-modelo"
															   title="Contratação de Modelos"> Contratação de Modelos</a>
														</li>
													</ul>
										</div>
									</div>
					</div>
				</div>
	</div>
</div>
</div>
	</section><section class="yCmsContentSlot bottom-footer">
<div class="hidden" data-component="CMSParagraphComponentModel (8796123497532@35)"></div>
		<style type="text/css">
	.footer .bottom-footer {padding-bottom: 2em;}
</style>
<div class="selosSegurancaFooter p-b-20 hidden-sm hidden-xs"><div class="container"><div class="d-flex v-center"><div class="imgSegurancaFooter m-r-40"><div class="d-flex v-center"><div class="js-container-preload container-preload"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h46/hf2/9762966667294/ico-seguranca.png" class="m-w-100 h-auto" alt="Selo de Segurança" width="31" height="31"></div><p class="f-f-josefin fs-16 f-w-bold m-0 p-l-20">Selos de segurança</p></div></div> <div class="allSelosFooter"><div class="d-flex v-center"><div class="js-container-preload container-preload p-r-12"><a id="seloEbit" href="http://www.ebit.com.br/898" target="_blank" data-noop="redir(this.href);"> </a><script type="text/javascript" id="getSelo" src="https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?898"> </script></div> <div class="js-container-preload container-preload p-r-12"><a href="https://br.clear.sale/lp/antifraude-ecommerce?ads_cmpid=793145905&amp;ads_adid=42883462713&amp;ads_matchtype=e&amp;ads_network=g&amp;ads_content=189988131793&amp;utm_term=clearsale&amp;ads_targetid=kwd-3762224881&amp;utm_campaign=&amp;utm_source=adwords&amp;utm_medium=ppc&amp;gclid=EAIaIQobChMIv6Xd25zW2wIVBwiRCh272AdPEAAYASAAEgLHq_D_BwE" target="_blank"><img data-src="https://images2.marisa.com.br/medias/sys_master/images/images/h60/h18/10252886835230/clearsale.png" class="m-w-100 h-auto lazy" alt="clearsale" width="122" height="30"></a></div> <div class="js-container-preload container-preload p-r-12"><a href="http://www.camara-e.net/" target="_blank"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/hc2/hbf/9762957426718/camerae-badge.png" class="m-w-100 h-auto" alt="Camara e-net" width="85" height="15"> </a></div> <div class="js-container-preload container-preload p-r-12"><a href="https://www.verisign.com.br/" target="_blank"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/hac/h14/9762959982622/verisign-badge.png" class="m-w-100 h-auto" alt="Verisign" width="90" height="40"> </a></div> <div class="js-container-preload container-preload p-r-12"><a href="http://www.internetsegura.org/" target="_blank"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h48/h8e/9762960900126/internetsegura-badge.png" class="m-w-100 h-auto" alt="Internet Segura" width="45" height="23"></a></div> <div class="js-container-preload container-preload p-r-12"><a id="seloEconfy" href="https://confi.com.vc/lojas-confiaveis/detalhes?id=110824" target="_blank" datanoop="redir(this.href);"><img data-src="https://cdn.confi.com.vc/reputation/110824.png" class="lazy"></a><script type="text/javascript" id="getData" src="https://selo.compreconfie.com.br/scripts/getData.js?sellerId=110824"></script></div></div></div></div></div></div><div class="hidden" data-component="CMSParagraphComponentModel (8796123464764@11)"></div>
		<p><style type="text/css">
	.formasPagamentoFooter p {color: #5d5d5d}
	.formasPagamentoFooter .imgPgtoFooter {width: 20%}
	.formasPagamentoFooter .allPagamentos {width: 80%}
</style></p><div class="formasPagamentoFooter hidden-sm hidden-xs m-b-20"><div class="container"><div class="d-flex v-center"><div class="imgPgtoFooter"><div class="d-flex v-center"><div class="js-container-preload container-preload"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/hef/hd3/9762965454878/ico-cartaocredito-footer.png" class="m-w-100 h-auto" alt="Formas de pagamento" width="31" height="31" /></div> 					<p class="f-f-josefin fs-16 f-w-bold m-0 p-l-20">Formas de pagamento</p></div></div> 			<div class="allPagamentos"><div class="d-flex v-center"><div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/hcc/he4/11130261798942/novocartaomarisa-icon.jpg" class="m-w-100 h-auto" alt="Cart&atilde;o Marisa" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h01/h05/11130261733406/novocartaomarisaitau-icon.jpg" class="m-w-100 h-auto" alt="Cart&atilde;o Marisa Ita&uacute;" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h77/h00/9762946908190/amex-icon.png" class="m-w-100 h-auto" alt="Amex" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/hfa/h04/9762947563550/hipercard-icon.png" class="m-w-100 h-auto" alt="hipercard" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h22/hcc/9762948612126/diners-icon.png" class="m-w-100 h-auto" alt="Dinners" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h6b/hce/9762949955614/mastercard-icon.png" class="m-w-100 h-auto" alt="Mastercard" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h9b/h15/9762951233566/visa-icon.png" class="m-w-100 h-auto" alt="Visa" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h3d/hb8/9762951659550/elo-icon.png" class="m-w-100 h-auto" alt="Elo" width="48" height="30" /></div> 					<div class="js-container-preload container-preload p-r-12"><img src="https://images2.marisa.com.br/medias/sys_master/images/images/h15/h31/9762952151070/boleto-icon.png" class="m-w-100 h-auto" alt="Boleto" width="48" height="30" /></div></div></div></div></div></div><div class="hidden" data-component="CMSParagraphComponentModel (9025371767868@6)"></div>
		<p><style type="text/css">
#copy-text{display:none;
visibility:hidden;}

#text-to-copy{display:none;
visibility:hidden;}
</style></p></section></footer>
</main>

        <section id="modals">
    <div id="password-forgotten-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                    Esqueceu sua senha? Não se preocupe.</h4>
            </div>

            <div class="modal-body">
                <div class="loading-component">
                    <h4 class="text-center c-primary">Carregando..</h4>
                    <p class="text-center">
                        <span class="loading-icon"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div><div id="modal--login-error" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div  class="modal-title ">
                    <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h3 class="title f_title" >
                        <strong></strong>
                    </h3>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-message-confirmation">
                    Não foi possível conectar com o Facebook. Pedimos desculpas pelo transtorno. Por favor, tente novamente mais tarde ou cadastre-se através da opção utilizando o e-mail.</div>
                <br>
                <div class="row ">
                    <div class="col-xs-12">
                        <a class="btn btn-default btn-block" data-dismiss="modal">
                            Ok</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div id="modalGeral" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div id="modalGeraltitle" class="modal-title pull-left"></div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div id="modalGeralmsg" class="modal-message-confirmation">

                </div>
                <br>
                <div class="modal-show-address"></div>
                <div class="row ">
                    <div class="col-xs-12">
                        <a class="btn btn-default btn-block modal-confirm-action-address" data-dismiss="modal">
                            Ok</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div id="modal--error-email-newsletter" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div  class="modal-title pull-left">
                    <h3 class="title f_title" >
                        Cadastro de Newsletter</h3>
                </div>
            </div>
            <div id="modalErrorEmailNewl" class="modal-body">

            </div>
            <div class="row p-10">
                <div class="col-xs-12">
                    <a class="btn btn-default btn-block btn-confim-sendNewLetter" data-dismiss="modal">
                        Ok</a>
                </div>
            </div>
        </div>
    </div>
</div><div class="modal fade" id="modal-geolocation-header" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content p-20 modal__geolocation">

      <div class="modal-header modal__geolocation--header row">
        <div class="col-xs-11 d-flex h-center">
          <span class="geolocation-mobile-header hidden-lg hidden-xl hidden-md"></span>
        </div>
        <div class="col-xs-1">
          <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      </div>

      <div class="modal-body">

        <div class="text-center">
          <img class="m-l-16" src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/icon-local-pink-modal.svg"
            alt="Entrega RÃ¡pida - LocalizaÃ§Ã£o">
        </div>

        <div class="text-center m-t-12">
          <span class="c-07 f-f-pluto-neutral fs-20 fw-400">
            Ofertas próximas à você</span>

        </div>

        <div class="c-13 bg-catskill-white p-15 m-t-12">
          <div class="row-i text-right p-r-12 cursor-pointer js-geolocation-info">
            




    



    


<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.15899 0.741333C3.55841 1.16216 0.796612 3.68709 0.141963 7.01359C-0.676349 11.2418 2.12637 15.3699 6.40205 16.2316C6.62708 16.2717 8.93881 16.4921 10.6777 15.931C13.6236 14.8088 15.4239 12.7448 15.9558 9.65876C15.9763 9.59864 16.2422 7.07371 15.1784 5.02971C13.7669 2.20419 10.6573 0.320511 7.15899 0.741333ZM7.87501 13.3059C7.22036 13.3059 6.72937 12.8249 6.72937 12.2037C6.72937 11.5224 7.1999 11.0415 7.87501 11.0415C8.55012 11.0214 9.06156 11.5224 9.06156 12.1837C9.06156 12.8249 8.57057 13.3059 7.87501 13.3059ZM10.4118 8.07566C10.1254 8.31613 9.83896 8.53656 9.53209 8.73696C9.08202 9.03754 8.81607 9.49844 8.81607 10.0996C8.22279 10.0996 7.5886 10.0996 6.97487 10.0996C6.89303 9.45837 6.93395 8.73696 7.52723 8.27606C7.87501 8.01555 8.24325 7.79511 8.52966 7.51457C8.79561 7.23402 9.06156 6.89335 9.18431 6.55269C9.32751 6.11183 8.97973 5.59081 8.59103 5.45053C8.01821 5.25014 7.32265 5.41046 7.07715 5.87136C6.93395 6.13187 6.85212 6.45249 6.72937 6.77312C6.15655 6.77312 5.58374 6.77312 5.01092 6.77312C4.8268 5.87136 5.33824 4.7692 6.19747 4.22815C7.38402 3.50674 9.40934 3.66705 10.4527 4.58885C11.496 5.49061 11.4756 7.1739 10.4118 8.07566Z" fill="#99ACCC"/>
</svg>
</div>

          <div class="fs-12 f-f-pluto-sans text-center ">
            Informe seu CEP e aproveite as ofertas próximas a você.</div>
        </div>

        <div class="fs-16 f-f-pluto-neutral f-w-400 c-07  m-t-20">
          Confirme sua localização</div>
      </div>

      <div class="container-cep-stock-available row-i m-0 container-cep-result">

        <div class="col-xs-12 p-tb-12  js-geolocation-zip">

          <form:form commandName="calculateDeliveryCost" data-action="" method="GET"
            class="js-input-cep-delivery-geo-hide">
            <div class="form-group m-0 js-geolocation-zip cursor-pointer">

              <div class="w-100 d-flex v-center h-between">
                <span class="p-l-12 fs-14 c-06 f-f-pluto-sans">Inserir CEP</span>
                <i class="ion-chevron-right fs-22 c-08 m-r-12"></i>
              </div>

            </div>
            <h6 class="helper hidden f-f-pluto-sans fs-10">
              <span>
                Por favor, selecione um tamanho para o produto.</span>
            </h6>
            <h6 class="cep-not-found-helper js-cep-not-found-helper hidden f-f-pluto-sans fs-10">
              <span>
                Não foi possível calcular o frete para o CEP informado.</span>
            </h6>
          </form:form>

        </div>

        <div class="  js-geolocation-zip-actions hidden">
          <div class="row p-t-16 p-lr-24 f-f-pluto-sans">
            <div class="col-xs-2">
              <span class="d-block m-t-8 c-06">
                CEP</span>
            </div>
            <div class="col-xs-10">
              <div class=" d-flex h-center h-between">
                <span class="fs-14 c-06 f-w-500 js-geolocation-zip-text"></span>
              </div>
              <div class="freight-address text-muted fs-12 f-w-400 container-freight-list js-geolocation-zip-address">
              </div>
            </div>
          </div>
          <div class="p-tb-20 text-center row js-geolocation-zipactions-div">
            <div
              class="col-xs-6 c-primary f-f-pluto-sans fs-10 f-w-500 text-uppercase cursor-pointer js-geolocation-change-zip">
              ALTERAR</div>
            <div
              class="col-xs-6 c-primary f-f-pluto-sans fs-10 f-w-500 text-uppercase cursor-pointer js-geolocation-remove">
              REMOVER</div>
          </div>

        </div>

        </div>
    </div>
  </div>
</div><div class="modal fade" id="modal-geolocation-toggle-disabled" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content p-20 modal__geolocation">

      <div class="modal-header modal__geolocation--header row">
       <div class="col-xs-11 d-flex h-center">
          <span class="geolocation-mobile-header hidden-lg hidden-xl hidden-md"></span>
        </div>
        <div class="col-xs-1">
          <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

      <div class="modal-body">

        <div class="text-center ">
          <img class="m-l-16" src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/icon-local-pink-modal.svg"
            alt="Entrega RÃ¡pida - LocalizaÃ§Ã£o">
        </div>

        <div class="text-center m-t-20">
          <span class="c-07 f-f-pluto-sans fs-14 fw-400">
            <span class="c-04">Você está desabilitando seu filtro de </span><span class="c-08">"Ofertas próximas à você"</span><span class="c-04">.</span></span>

        </div>

        <button type="button"
          class="m-t-20 w-100 btn btn-primary btn-inverse btn-rounded f-f-pluto-neutral js-geolocation-toggle-modal-close">
          OK, ENTENDI!</button>

      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="modal-geolocation-zip" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content p-20 modal__geolocation">

      <div class="modal-header modal__geolocation--header">
        <div class="row hidden-xs hidden-sm">
          <div class="col-xs-6 d-flex js-geolocation-infomodal-back cursor-pointer ">
            












<svg width="20" height="16" class="c-10 m-t-8" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
<span class="c-08 f-f-pluto-neutral fs-16 p-l-8 back-geolocation-text f-w-300">
              Voltar</span>
          </div>
          <div class="col-xs-6">
            <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        </div>

        <div class="row hidden-md hidden-lg hidden-xl">
          <div class="col-xs-11 d-flex h-center">
            <span class="geolocation-mobile-header hidden-lg hidden-xl hidden-md"></span>
          </div>
          <div class="col-xs-1">
            <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

      </div>

      <div class="modal-body">

        <div class="text-center m-t-20">
          





    






<svg width="49" height="33" class="" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.10912 7.78702H0.607873C0.273543 7.78702 0 7.51747 0 7.18802C0 6.85857 0.273543 6.58902 0.607873 6.58902H6.10912C6.44345 6.58902 6.71699 6.85857 6.71699 7.18802C6.71699 7.51747 6.44345 7.78702 6.10912 7.78702ZM26.6552 14.5557C26.3209 15.0349 25.7738 15.3045 25.1659 15.3045H24.1629C24.011 16.8319 22.704 18 21.1236 18C19.5431 18 18.2362 16.802 18.0842 15.3045H11.9447C11.7927 16.8319 10.4858 18 8.90534 18C7.32487 18 6.01794 16.802 5.86597 15.3045H4.22472C3.55606 15.3045 3.03936 14.7654 3.03936 14.1364V8.92513C3.03936 8.59567 3.31291 8.32612 3.64724 8.32612C3.98157 8.32612 4.25511 8.59567 4.25511 8.92513V14.1065H6.01794C6.41306 12.8785 7.56802 12.01 8.93573 12.01C10.3034 12.01 11.4584 12.9085 11.8535 14.1065H16.5037V1.16805H4.25511V2.60566C4.25511 2.93511 3.98157 3.20466 3.64724 3.20466C3.31291 3.20466 3.03936 2.93511 3.03936 2.60566V1.16805C3.03936 0.509151 3.58645 0 4.22472 0H16.5037C17.1724 0 17.6891 0.539101 17.6891 1.16805V2.69551H24.2237C25.1659 2.69551 25.9562 3.38436 26.0473 4.31281L26.868 10.4825V12.7887L26.9288 12.9384C27.0807 13.4775 26.9896 14.0765 26.6552 14.5557ZM10.7593 15.005C10.7593 14.0166 9.93872 13.208 8.93573 13.208C7.93274 13.208 7.11211 14.0166 7.11211 15.005C7.11211 15.9933 7.93274 16.802 8.93573 16.802C9.93872 16.802 10.7593 15.9933 10.7593 15.005ZM20.4549 8.08652C20.4549 8.41597 20.7285 8.68552 21.0628 8.68552H25.4091L24.862 4.43261C24.8316 4.13311 24.5581 3.89351 24.2237 3.89351H20.4549V8.08652ZM22.9776 15.005C22.9776 14.0166 22.157 13.208 21.154 13.208C20.151 13.208 19.3304 14.0166 19.3304 15.005C19.3304 15.9933 20.151 16.802 21.154 16.802C22.157 16.802 22.9776 15.9933 22.9776 15.005ZM25.7434 13.3278L25.6522 12.9983V11.98H24.9228C24.5885 11.98 24.3149 11.7105 24.3149 11.381C24.3149 11.0516 24.5885 10.782 24.9228 10.782H25.6522V10.5125L25.5611 9.88353H21.0628C20.0598 9.88353 19.2392 9.07488 19.2392 8.08652V3.86356H17.7195V14.1065H18.2362C18.6313 12.8785 19.7863 12.01 21.154 12.01C22.5217 12.01 23.6766 12.9085 24.0718 14.1065H25.1963C25.3787 14.1065 25.5611 14.0166 25.6826 13.8669C25.7738 13.6872 25.8042 13.5075 25.7434 13.3278ZM1.82362 5.36107H7.93274C8.26707 5.36107 8.54061 5.09152 8.54061 4.76206C8.54061 4.43261 8.26707 4.16306 7.93274 4.16306H1.82362C1.48929 4.16306 1.21575 4.43261 1.21575 4.76206C1.21575 5.09152 1.48929 5.36107 1.82362 5.36107ZM21.4579 14.4958C21.4275 14.4659 21.3971 14.4659 21.3667 14.4359C21.3363 14.406 21.3059 14.406 21.2452 14.406C21.0324 14.376 20.85 14.4359 20.6981 14.5557C20.5765 14.6755 20.5157 14.8253 20.5157 14.975C20.5157 15.005 20.5157 15.0649 20.5157 15.0948C20.5157 15.1248 20.5461 15.1847 20.5461 15.2146C20.5461 15.2446 20.5765 15.2745 20.6069 15.3344C20.6373 15.3644 20.6677 15.3943 20.6677 15.4243C20.7285 15.4842 20.7892 15.5141 20.85 15.5441C20.9108 15.574 21.002 15.574 21.0932 15.574C21.1844 15.574 21.2452 15.574 21.3363 15.5441C21.3971 15.5141 21.4883 15.4842 21.5187 15.4243C21.5491 15.3943 21.5795 15.3644 21.5795 15.3344C21.6099 15.3045 21.6099 15.2745 21.6403 15.2146C21.6403 15.1847 21.6707 15.1547 21.6707 15.0948C21.6707 15.0649 21.6707 15.005 21.6707 14.975C21.6707 14.8253 21.6099 14.6755 21.4883 14.5557C21.5187 14.5557 21.4883 14.5258 21.4579 14.4958ZM8.47983 14.5857C8.35825 14.7055 8.29746 14.8552 8.29746 15.005C8.29746 15.1547 8.35825 15.3045 8.47983 15.4243C8.6014 15.5441 8.75337 15.604 8.90534 15.604C8.99652 15.604 9.0573 15.604 9.14849 15.574C9.20927 15.5441 9.30045 15.5141 9.33085 15.4542C9.45242 15.3344 9.51321 15.1847 9.51321 15.0349C9.51321 14.8852 9.45242 14.7354 9.33085 14.6156C9.11809 14.3461 8.72297 14.3461 8.47983 14.5857ZM7.50723 6.76872C7.47683 6.79867 7.44644 6.82862 7.44644 6.85857C7.41605 6.88852 7.41605 6.91847 7.38565 6.94842C7.35526 6.97837 7.35526 7.00832 7.35526 7.06822C7.35526 7.09817 7.35526 7.15807 7.35526 7.18802C7.35526 7.21797 7.35526 7.27787 7.35526 7.30782C7.35526 7.33777 7.38565 7.39767 7.38565 7.42762C7.38565 7.45757 7.41605 7.48752 7.44644 7.51747C7.47684 7.54742 7.47683 7.57737 7.50723 7.60732C7.6288 7.72712 7.78077 7.78702 7.93274 7.78702C8.08471 7.78702 8.23668 7.72712 8.35825 7.60732C8.38864 7.57737 8.41904 7.54742 8.41904 7.51747C8.44943 7.48752 8.44943 7.45757 8.47983 7.42762C8.47983 7.39767 8.51022 7.36772 8.51022 7.30782C8.51022 7.27787 8.51022 7.21797 8.51022 7.18802C8.51022 7.03827 8.44943 6.88852 8.32786 6.76872C8.1455 6.52912 7.71998 6.52912 7.50723 6.76872Z" fill="#FF18A2"/>
</svg>
</div>

        <div class="text-center m-t-20">
          <span class="c-07 f-f-pluto-sans fs-18 f-w-400">
            Digite seu CEP</span>
        </div>

        <div class="text-center m-t-12">
          <input class="geolocation-zip-rounded-input f-f-pluto-sans fs-16 p-lr-24 js-geolocation-zip-input" required
            data-component-mask="cep" />
        </div>

        <div class="text-center m-t-16 js-geolocazion-zip-findzip">
          <a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank"
            class="c-primary f-f-pluto-neutral fs-12 text-uppercase f-w-400">
            Não sei o meu CEP</a>
        </div>

        <div class="js-geolocazion-zip-error hidden row-i text-center m-t-8">
          <div class="col-xs-12 d-flex v-center h-center">
          





    



    



    


<svg version="1.2" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 17 17" width="17" height="17"><style>.s0{fill:#ff4b56}.s1{fill:#ffffff}</style><path fill-rule="evenodd" class="s0" d="m0.8 10.5c-1-4.3 1.7-8.7 6.1-9.7c4.4-1 8.7 1.7 9.7 6.1c1 4.4-1.7 8.7-6.1 9.7c-4.3 1-8.7-1.7-9.7-6.1z" /><path class="s1" d="m9.4 6.2q0 1.1 0 1.9q-0.1 0.9-0.2 1.8h-1.1q-0.1-0.9-0.2-1.8q-0.1-0.8-0.1-1.9v-2.3h1.6zm0.2 5.5q0 0.5-0.3 0.8q-0.2 0.2-0.7 0.2q-0.4 0-0.7-0.2q-0.3-0.3-0.3-0.8q0-0.4 0.3-0.7q0.3-0.3 0.7-0.3q0.5 0 0.7 0.3q0.3 0.3 0.3 0.7z" /></svg><span class="js-geolocation-zip-error-text f-f-pluto-sans fs-12 c-danger p-l-8 m-t-4">
             CEP inválido</span>
          </div>
        </div>

        <div class="text-center m-t-52">
          <button class="btn-rounded w-100 btn btn-primary f-f-pluto-neutral fs-14 f-w-400 js-geolocation-zip-ok">
            OK, CONFIRMAR</button>
        </div>

      </div>

    </div>
  </div>
</div><div class="modal fade" id="modal-geolocation-info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content p-20 modal__geolocation">

      <div class="modal-header modal__geolocation--header">
        <div class="row hidden-xs hidden-sm">
          <div class="col-xs-6 d-flex js-geolocation-infomodal-back cursor-pointer ">
            












<svg width="20" height="16" class="c-10 m-t-8" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.15968 8.34178L8.01734 14.1994C8.29852 14.4806 8.29852 14.9365 8.01734 15.2177C7.73616 15.4989 7.28028 15.4989 6.99911 15.2177L0.210883 8.42945C0.0172944 8.23587 -0.0430098 7.95947 0.0299703 7.71428C-0.0430098 7.4691 0.0172944 7.1927 0.210883 6.99911L6.99911 0.210883C7.28028 -0.0702945 7.73616 -0.0702943 8.01734 0.210883C8.29852 0.492061 8.29852 0.94794 8.01734 1.22912L2.34468 6.90178H18.6622C19.0599 6.90178 19.3822 7.22414 19.3822 7.62178C19.3822 8.01943 19.0599 8.34178 18.6622 8.34178H2.15968Z" />
</svg>
<span class="c-08 f-f-pluto-neutral fs-16 p-l-8 back-geolocation-text f-w-300">
              Voltar</span>
          </div>
          <div class="col-xs-6">
            <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

        </div>

        <div class="row hidden-md hidden-lg hidden-xl">
          <div class="col-xs-11 d-flex h-center">
            <span class="geolocation-mobile-header hidden-lg hidden-xl hidden-md"></span>
          </div>
          <div class="col-xs-1">
            <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

      </div>

      <div class="modal-body">

        <div class=" m-t-20">
          <span class="c-04 f-f-pluto-sans fs-14 f-w-400">
            Durante sua navegação no site, fique atento aos produtos incríveis que estão próximos à você.</span>
        </div>

        <div class=" m-t-40">
          <span class="f-f-pluto-sans fs-14 f-w-400">
            <span class="c-08">Dica: </span><span class="c-04">verifique as preferências do seu navegador  para que a permissão de localização esteja habilitada.</span></span>
        </div>

        <div class=" m-t-24">
          <span class="f-f-pluto-sans fs-14 f-w-400">
            <span class="c-08">Atenção: </span><span class="c-04">O custo de frete e o prazo de entrega podem variar de acordo com a região.</span></span>
        </div>

        <div class="text-center m-t-40">
          <button
            class="btn-rounded btn-inverse w-100 btn btn-primary f-f-pluto-neutral fs-14 f-w-400 geolocation-zip-ok js-geolocation-infomodal-back">
            BELEZA!</button>
        </div>

      </div>

    </div>
  </div>
</div><div class="modal fade" id="modal-geolocation-pdp-alert" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content p-20 modal__geolocation">

      <div class="modal-header modal__geolocation--header row p-0">
       <div class="col-xs-11 d-flex h-center">
          <span class="geolocation-mobile-header hidden-lg hidden-xl hidden-md"></span>
        </div>
        <div class="col-xs-1">
          <button type="button" class="close f-w-400 c-07 fs-30" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

      <div class="modal-body">

        <div class="text-center ">
          





    



    



    



<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
width="60" height="60" class=""
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 60 60"
   fill="none"
   version="1.1"
   id="svg50"
   sodipodi:docname="full.svg"
   inkscape:version="1.0.2 (1.0.2+r75+1)">
  <metadata
     id="metadata56">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs54" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1853"
     inkscape:window-height="1008"
     id="namedview52"
     showgrid="false"
     inkscape:zoom="13.3"
     inkscape:cx="30"
     inkscape:cy="30"
     inkscape:window-x="1433"
     inkscape:window-y="35"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg50" />
  <circle
     cx="30"
     cy="30"
     fill="#f2f0f4"
     id="circle48"
     style="stroke-width:0.999997"
     r="30" />
  <path
     d="m 26.068044,13.486165 -13.48944,23.43188 c -1.890516,3.2839 0.47263,7.3888 4.25366,7.3888 h 26.97878 c 3.781,0 6.1441,-4.1049 4.2536,-7.3888 l -13.4894,-23.43188 c -1.8904,-3.283935 -6.6167,-3.283935 -8.5072,0 l -13.48944,23.43188 c -1.890516,3.2839 0.47263,7.3888 4.25366,7.3888 h 26.97878 c 3.781,0 6.1441,-4.1049 4.2536,-7.3888 l -13.4894,-23.43188 c -1.8904,-3.283935 -6.6167,-3.283935 -8.5072,0 z"
     fill="#aeabab"
     id="path96" />
  <path
     d="m 30.547147,38.63203 c 1.67109,0 3.02579,-1.35469 3.02579,-3.02579 0,-1.67109 -1.3547,-3.025781 -3.02579,-3.025781 -1.6711,0 -3.025785,1.354691 -3.025785,3.025781 0,1.6711 1.354685,3.02579 3.025785,3.02579 z"
     fill="#fffcf2"
     id="path164"
     inkscape:transform-center-x="-9.0240433"
     inkscape:transform-center-y="-5.4474038" />
  <path
     d="m 30.852038,29.435438 h -1.01039 c -0.835085,0 -1.511996,-0.7129 -1.511996,-1.59238 v -5.8926 c 0,-0.879474 0.676911,-1.592374 1.511996,-1.592374 h 1.01039 c 0.83509,0 1.512,0.7129 1.512,1.592374 v 5.8926 c 0,0.87948 -0.67691,1.59238 -1.512,1.59238 z"
     fill="#fffcf2"
     id="path222" />
</svg>
</div>

        <div class="text-center m-t-20">
          <span class="c-07 f-f-pluto-sans fs-14 fw-400 js-geolocation-pdp-alert-text">

          </span>

        </div>

        <button type="button"
          class="m-t-20 w-100 btn btn-primary btn-inverse btn-rounded f-f-pluto-neutral js-geolocation-pdp-alert-action" data-action="" >
          OK, ENTENDI!</button>

      </div>
    </div>
  </div>
</div>
</section>
<form name="accessiblityForm">
		<input type="hidden" id="accesibility_refreshScreenReaderBufferField" name="accesibility_refreshScreenReaderBufferField" value=""/>
	</form>
	<div id="ariaStatusMsg" class="skip" role="status" aria-relevant="text" aria-live="polite"></div>

	<script type="text/javascript">
		/*<![CDATA[*/
		
		var ACC = { config: {} };
			ACC.config.contextPath = "https://scripts2.marisa.com.br";
			ACC.config.marisaAsyncContextPath = "";
			ACC.config.encodedContextPath = "";
			ACC.config.commonResourcePath = "https://scripts2.marisa.com.br/_ui/responsive/common";
			ACC.config.themeResourcePath = "https://scripts2.marisa.com.br/_ui/responsive/theme-marisa";
			ACC.config.mediaResourcePath = "https://images2.marisa.com.br/_ui/responsive/theme-marisa";
			ACC.config.siteResourcePath = "https://scripts2.marisa.com.br/_ui/responsive/site-marisa";
			ACC.config.rootPath = "https://scripts2.marisa.com.br/_ui/responsive";
			ACC.config.CSRFToken = "21a12d65-b684-47ff-b754-798cf539f0d1";
			ACC.pwdStrengthVeryWeak = 'Muito fraca';
			ACC.pwdStrengthWeak = 'Fraca';
			ACC.pwdStrengthMedium = 'Média';
			ACC.pwdStrengthStrong = 'Forte';
			ACC.pwdStrengthVeryStrong = 'Muito forte';
			ACC.pwdStrengthUnsafePwd = 'password.strength.unsafepwd';
			ACC.pwdStrengthTooShortPwd = 'Muito pequena';
			ACC.pwdStrengthMinCharText = 'A senha deve ter no mí­nimo %d caracteres';
			ACC.accessibilityLoading = 'Loading... Please wait...';
			ACC.accessibilityStoresLoaded = 'Stores loaded';
			ACC.config.googleApiKey="";
			ACC.config.googleApiVersion="3.7";
			ACC.config.page_uid='login';

			
			ACC.autocompleteUrl = '/search/autocompleteSecure';

			
			ACC.config.loginUrl = '/login';

			
			ACC.config.authenticationStatusUrl = '/authentication/status';

			
		/*]]>*/
	</script>
	<script type="text/javascript">
	/*<![CDATA[*/
	ACC.addons = {};	//JS holder for addons properties
			
	
		ACC.addons.storefeedaddon = [];
		
		ACC.addons.paypaladdon = [];
		
		ACC.addons.marisaintimaaddon = [];
		
		ACC.addons.liveeditaddon = [];
		
				ACC.addons.liveeditaddon['liveeditaddon.message.slot.tooltip.action.add'] = 'Add new component to content slot';
			
				ACC.addons.liveeditaddon['liveeditaddon.message.slot.tooltip.action.edit_menu'] = 'Edit menu';
			
				ACC.addons.liveeditaddon['liveeditaddon.message.slot.tooltip.action.override'] = 'Override content slot';
			
				ACC.addons.liveeditaddon['liveeditaddon.message.slot.tooltip.action.create'] = 'Create new content slot';
			
		ACC.addons.marisapaymentpix = [];
		
		ACC.addons.assistedservicestorefront = [];
		
				ACC.addons.assistedservicestorefront['asm.timer.min'] = 'min';
			
	/*]]>*/
</script>
<script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/shared/js/generatedVariables.js"></script>


<script>
    ACC.text = {};
    ACC.text.address_postcode_invalid = "CEP inválido";
</script><script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery-2.1.1.min.352ca89b.js"></script>
        <script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_lazyLoad.749c7b6a.js" ></script>
         <script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/bootstrap-3.3.7/dist/js/bootstrap.3b965a36.js"></script>
        <script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/core/_marisa.492db4de.js" ></script>

        <script>
             function getCookie(cname) {
                for (var name = cname + "=", split = document.cookie.split(";"), i = 0; split.length > i; i++) {
                    var c = split[i].trim();
                    if (c.indexOf(name) === 0) {
                        var result = c.substring(name.length, c.length);
                        result = result === '""' ? '' : result.replace(/"/g, '');
                        return result ;
                    }
                }
                return null;
            }

            var googleKeyMap = "AIzaSyDuXzoxSQGARtvGCuZ0t7qzNYZkC7ilc1s";
        </script>

        


























	
	
	
	
	
	
	
	
	
		
	





<script>
    var getValue = {
  "host": "www.marisa.com.br",
  "page": {
    "info": {"referrer": "https://www.marisa.com.br"},
    "name": "other",
    "timestamp": "2024-05-27T04:22:47Z",
    "url": "https://www.marisa.com.br"
  }
};

    var logged = false;

    var uid = $('body').attr('data-page-uid');

    if ( uid == 'multiStepCheckoutSummaryPage' || uid == 'orderConfirmationPage' ){
		getValue.info = {'referrer': window.location.href};
   	    getValue.url = window.location.href;
    }

    if ( uid == 'productDetails' ){
        // Tirando repetiÃ§Ã£o de colors
        var colors = getValue.product.specs.color;
        var uniqueColors = [];
        $(colors).each(function(index, data){
            var newElement = true;
            $(uniqueColors).each(function(index, other){
                if(other.id == data.id){
                    newElement = false;
                }
            });
            if(newElement){
                uniqueColors.push(data);
            }
        });
        getValue.product.specs.color = uniqueColors;

        // Tirando repetiÃ§Ã£o de Details colors
        var colorsDetails = getValue.product.details.colorList;
        var uniqueColorsDetails = [];
        $(colorsDetails).each(function(index, data){
            var newElement = true;
            $(uniqueColorsDetails).each(function(index, other){
                if(other.hexaColor == data.hexaColor){
                    newElement = false;
                }
            });
            if(newElement){
                uniqueColorsDetails.push(data);
            }
        });
        getValue.product.details.colorList = uniqueColorsDetails;
    };

	if(logged){
          newUser = {
            ...getValue,
            user: {
                allow_mail_marketing: getCookie('allow_mail_marketing'),
                country: "BR",
                documentId: getCookie('documentId'),
                email: getCookie('email'),
                    extraInfo: {
                            anotherInfo: "Outros"
                        },
                id: getCookie('userId'),
                language: "pt-BR",
                name: getCookie('name'),
                username: getCookie('email'),
            }
         }
	} else {
		pageinfo = {
			...getValue
		}
	}

</script>
<script>
    
        var script = document.createElement('script');
        script.src = "//suite.linximpulse.net/impulse/impulse.js";
        script.dataset.apikey = "marisa";
        document.getElementsByTagName('head')[0].appendChild(script);
        
        </script>

        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/enquire.min.4c55db0a.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.blockUI-2.66.b0fce955.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.colorbox-min.a4e05f2f.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.form.min.b54cf0d7.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.hoverIntent.28d5a362.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.pstrength.custom-1.2.0.87d69705.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.syncheight.custom.df68c9f0.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.tabs.custom.226d5476.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery-ui-1.11.2.min.77674ffa.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.tmpl-1.0.0pre.min.43c3faf0.js"></script>
        <script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.currencies.min.58e34f4a.js"></script>

        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/moment.4092eeeb.js"></script>
            <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/moment_br.fc576d8e.js"></script>
            <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/datatimepicker.min.c3aad6eb.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.matchHeight.4ef618b9.js"></script>
        <script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/responsive-bootstrap-toolkit-2.6.3/dist/bootstrap-toolkit.a0e2c9e3.js"></script>
        <script type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/slick-1.6.0/slick/slick.b11a7415.js"></script>

        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.maskMoney.b3e50e08.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/picturecaption-0.2.0/picturecaption.b4aab815.js"></script>

        <script async src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/bluebird.min.501271c5.js"></script>
        <script async src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_carousels.5952538a.js" ></script>
		<script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_geolocationHeader.1f4e6f19.js"></script>

        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.address.d275c56f.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.autocomplete.3c8725c7.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.carousel.e89ff82b.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.cart.422f61a7.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.cartitem.7daaf995.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.checkout.5096e2aa.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.checkoutaddress.3deb5015.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.checkoutsteps.53951842.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.cms.49f80d6a.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.colorbox.f1526ca2.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.common.1e3be498.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.forgottenpassword.a9681c33.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.global.ea8c2a2a.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.hopdebug.88620996.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.imagegallery.1eb9ff97.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.langcurrencyselector.ddc19d5b.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.minicart.a28e645e.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.navigation.676c7d13.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.order.8e8605c8.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.paginationsort.1e9a738c.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.payment.d4937592.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.paymentDetails.f985dbda.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.pickupinstore.3f594e37.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.product.bd3d2707.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.productDetail.4f9507e5.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.quickview.07557790.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.ratingstars.18be65bf.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.silentorderpost.bb6cd6fe.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.tabs.4d29117c.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.termsandconditions.9e96fb7b.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.track.2d4ae007.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.storefinder.a6b788b0.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.futurelink.62a1b94b.js"></script>

        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.productorderform.4182bada.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.savedcarts.c2fd13e3.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.multidgrid.8175b7c6.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.quickorder.03cfa425.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.faq.322c97c3.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/jquery.mask.min.6eb829e3.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/lib/md5.145be963.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/acc.csv-import.a67f693a.js"></script>
        <script defer type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/common/ybase-0.1.0/js/_autoload.492a8e47.js"></script>

        <script id="script-asm" async type="text/javascript" src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/assistedservicestorefront.bdff6a3c.js"></script>
                <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/core/_globals.fb7c69b8.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/core/_helpers.b5912d7f.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/core/_logs.b36df159.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/core/_cookies.11cd1851.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_global-messages.9bea293b.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_masks.8797e3fa.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_popover.b80ba17a.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_menubar.7a67e0eb.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_promotional-banner.7f9541d6.js" ></script> 
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_component--input-quantity.2382b663.js" ></script> 
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/cart/_cart--delivery-mode.de249483.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_category-search-refinements.5a61e4a2.js" ></script>       
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_modal-marisa-quick-view.66dc8a2d.js" ></script>               
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_formatValue.f8b31e90.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_geolocation.66b8a18b.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_googleApi.d610059b.js" ></script>        
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/cart/floating-cart/_floating-cart.0d796535.js" ></script>  
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/modules/breadcrumb.435e005f.js" ></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_csrf-token.d7c3d07c.js" ></script>

        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/tools.0d2c2091.js"></script>

        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/components/_modal-password-forgotten.61c0f8ca.js" ></script>
            <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/pages/page--login.78662d9f.js"></script>
        <script src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/js/master.1cf948b3.js"></script>

        <script defer>
            Marisa.setDebug( true ).init();
        </script>
    <script>
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};

	if(getUrlParameter('showBuildNumber')){
		var buidNumber = 3023;
		var buildNumber = 'buildNumber: #' + buidNumber;
		var el = document.querySelector('body'),
		elChild = document.createElement('div');
		elChild.innerHTML = buildNumber;
		el.append(elChild, el.firstChild)
	}
</script>


















<script>

	// START UTILS
	function getDeviceType () {
		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			other: function() {
				return (isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if(isMobile.iOS()) {
			return 'Apple';
		} else if (isMobile.Android()) {
			return 'Android';
		} else if (isMobile.other()) {
			return 'Dispositivo Mobile';
		} else {
			return 'Desktop';
		}
	}

	function convertGender (gender) {
		if (gender == 'MALE') {
			gender = 'M';
		} else {
			gender = 'F';
		}

		return gender;
	}

	function getCookie(cname) {
		for (var name = cname + "=", split = document.cookie.split(";"), i = 0; split.length > i; i++) {
			var c = split[i].trim();
			if (c.indexOf(name) === 0) {
				var result = c.substring(name.length, c.length);
				result = result === '""' ? '' : result.replace(/"/g, '');
				return result ;
			}
		}
		return null;
	}

	function getVisitor () {
		var userMarisa = '';

		if (userMarisa != '') {
			var visitor = {
				'id': getCookie('userId'),
				'email': getCookie('email'),
				'isLoggedIn': true,
				'birthday': getCookie('birthday'),
				'name': getCookie('name'),
				'gender': convertGender(getCookie('gender')),
				'city': getCookie('city'),
				'state': getCookie('state'),
				'device': getDeviceType(),
				'cep': getCookie('cep'),
				'register': getCookie('register'),
				'newBuyer': ''
			}
		} else {
			var visitor = {
				'isLoggedIn': false,
				'newBuyer': true
			}
		}

		return visitor;
	}

	//TODO review
	function dataLayerPush(pageType) {
		window.dataLayer.push({
			'pageType': pageType,
			'event': 'dataLayerReady',
			'previousPage': document.referrer,
			'productsList': {},
			'visitor': getVisitor()
		});
	}

	function clickBanners(banners) {
		banners.on('click', function(event) {
			event.preventDefault();
			var click = $(event.currentTarget);
			if (click.prop('tagName') !== 'A') {
				click = click.parent();
			}

			var id = click.data('id');
			var name = click.data('name');
			var position = click.data('position');
			var category = click.data('category');
			var criativo = click.data('criativo');
			var link = click.attr('href');
			var attributes = 'id=' + id + '&name=' + name + '&position=' + position + '&category=' + category + '&criativo=' + criativo;

			if (link.indexOf('?') > -1) {
				link = link + '&' + attributes;
			} else {
				link = link + '?' + attributes;
			}

			window.location.href = link;
		});
	}

	function getBanners (banners) {
		var bannersList = []

		banners.each( function (index, banner) {
			var banner = $(banner);

			var id = banner.data('id');
			var name = banner.data('name');
			var position = banner.data('position');
			var category = banner.data('category');
			var criativo = banner.data('criativo');

			bannersList.push({'id': id, 'name': name, 'position': position, 'category': category, 'criativo': criativo});
		});

		return bannersList;
	}

	// END UTILS

	window.dataLayer = window.dataLayer || [];

	// DataLayer HOMEPAGE
	if ( 'login' == 'homepage' ) {
		var banners = $('.marisa--main-content a');
		var bannersClick = this.clickBanners(banners);
		var bannersInfo = this.getBanners(banners);

		window.dataLayer.push({
			'pageType': 'home',
			'event': 'pageView',
			'productsList': {},
			'banners': bannersInfo,
			'visitor': getVisitor()
		});
	}

	// DataLayer CATEGORIA
	if ( 'login' == 'productGrid' ) {
		var products = JSON.parse('');
		var banners = $('.navegacao-liquida a');
		var bannersClick = this.clickBanners(banners);
		var bannersInfo = this.getBanners(banners);

		window.dataLayer.push({
			'pageType': 'category',
			'event': 'pageView',
			'category': '',
			'categoryId': '',
			'orderedBy': '',
			'pageNumber': '',
			'productsList': products,
			'banners': bannersInfo,
			'visitor': getVisitor()
		});
	}

	// DataLayer PDP
	if ( 'login' == 'productDetails' ) {
		var products = JSON.parse('');

		window.dataLayer.push({
			'pageType': 'product',
			'event': 'pageView',
			'products': products,
			'productsList': [],
			'banners': [],
			'visitor': getVisitor()
		});
	}

	// DataLayer CARRINHO
	if ( 'login' == 'cartPage' ) {
		var products = JSON.parse('');

		window.dataLayer.push({
			'pageType': 'cart',
			'event': 'pageView',
			'products': products,
			'productList': [],
			'visitor': getVisitor()
		});
	}

	// DataLayer CHECKOUT
	if ( 'login' == 'multiStepCheckoutSummaryPage' ) {
		var products = JSON.parse('');

		window.dataLayer.push({
			'pageType': 'checkout',
			'event': 'pageView',
			'products': products,
			'step': 1,
			'paymentOption': '',
			'visitor': getVisitor()
		});
	}

	// DataLayer PAYMENT
	if ( 'login' == 'orderConfirmationPage' ) {
		var products = JSON.parse('');

		window.dataLayer.push({
			'pageType': 'purchase',
			'event': 'pageView',
			'transactionProducts': products,
			'transactionID': '',
			'transactionShipping': '',
			'transactionTotal': '',
			'paymentOption': '',
			'visitor': getVisitor()
		});
	}

	// DataLayer LOGIN
	if ( 'login' == 'login' || 'login' == 'checkout-login') {
		window.dataLayer.push({
			'pageType': 'login',
			'event': 'pageView',
			'visitor': getVisitor()
		});
	}

	// DataLayer CADASTRO
	if ( 'login' == 'register' ) {
		window.dataLayer.push({
			'pageType': 'signup',
			'event': 'pageView',
			'visitor': getVisitor()
		});
	}

	// DataLayer OTHERS
	if ( 'login' !== 'login'
		&& 'login' !== 'checkout-login'
		&& 'login' !== 'register'
		&& 'login' !== 'orderConfirmationPage'
		&& 'login' !== 'multiStepCheckoutSummaryPage'
		&& 'login' !== 'cartPage'
		&& 'login' !== 'productDetails'
		&& 'login' !== 'productGrid'
		&& 'login' !== 'homepage'
		) {
		window.dataLayer.push({
			'pageType': 'other',
			'event': 'pageView',
			'visitor': getVisitor()
		});
	}


</script>

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"errorBeacon":"bam.nr-data.net","licenseKey":"1ffad51641","agent":"","beacon":"bam.nr-data.net","applicationTime":115,"applicationID":"1089316943","transactionName":"ZQBaZhFWXxBQWkJRXFxKa0IRXl8EclZYTEFdCVRXERh9DFZQWGhSVQB7XQ1DQwxdVVNKHFYKdF0EXl8=","queueTime":0}</script></body>

</html>
