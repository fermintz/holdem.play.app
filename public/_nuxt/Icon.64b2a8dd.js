import{u as Qt,b as Vt,a as Ut}from"./entry.4fe93dad.js";import{u as Gt}from"./config.7cf7b7c2.js";import{j as Ct,k as it,a as Kt,h as j,b as Jt,Y as Wt,u as m,m as A,F as ct,V as _,q as lt,Z as Yt,N as Zt,G as Xt}from"./swiper-vue.a7e98229.js";import"./app.config.28417b8e.js";const jt=Object.freeze({left:0,top:0,width:16,height:16}),Tt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Z=Object.freeze({...jt,...Tt});Object.freeze({...Z,body:"",hidden:!1});({...jt});const Pt=Object.freeze({width:null,height:null}),Ot=Object.freeze({...Pt,...Tt});function te(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in Pt?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const ee=/[\s,]+/;function ne(t,e){e.split(ee).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function oe(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}const re=/(-?[0-9.]*[0-9]+[0-9.]*)/g,se=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function at(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(re);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=se.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const ie=t=>t==="unset"||t==="undefined"||t==="none";function ce(t,e){const n={...Z,...t},r={...Ot,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(w=>{const f=[],p=w.hFlip,v=w.vFlip;let b=w.rotate;p?v?b+=2:(f.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),f.push("scale(-1 1)"),o.top=o.left=0):v&&(f.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),f.push("scale(1 -1)"),o.top=o.left=0);let x;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:x=o.height/2+o.top,f.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:f.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,f.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}b%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),f.length&&(s='<g transform="'+f.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?a:c,u=at(d,l/a)):(u=i==="auto"?l:i,d=c===null?at(u,a/l):c==="auto"?a:c);const h={},y=(w,f)=>{ie(f)||(h[w]=f.toString())};return y("width",u),y("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:h,body:s}}const le=/\sid="(\S+)"/g,ae="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ue=0;function fe(t,e=ae){const n=[];let r;for(;r=le.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(ue++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}function de(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function pe(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function he(t){return"data:image/svg+xml,"+pe(t)}function ge(t){return'url("'+he(t)+'")'}const ut={...Ot,inline:!1},me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ye={display:"inline-block"},V={backgroundColor:"currentColor"},Ft={backgroundColor:"transparent"},ft={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},dt={webkitMask:V,mask:V,background:Ft};for(const t in dt){const e=dt[t];for(const n in ft)e[t+n]=ft[n]}const z={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";z[t+"-flip"]=e,z[t.slice(0,1)+"-flip"]=e,z[t+"Flip"]=e});function pt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const be=(t,e)=>{const n=te(ut,e),r={...me},o=e.mode||"svg",s={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let f in e){const p=e[f];if(p!==void 0)switch(f){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[f]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&ne(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[f]=oe(p):typeof p=="number"&&(n[f]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete r["aria-hidden"];break;default:{const v=z[f];v?(p===!0||p==="true"||p===1)&&(n[v]=!0):ut[f]===void 0&&(r[f]=p)}}}const l=ce(t,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let f=0,p=e.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),r.innerHTML=fe(l.body,p?()=>p+"ID"+f++:"iconifyVue"),it("svg",r)}const{body:u,width:d,height:h}=t,y=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),w=de(u,{...a,width:d+"",height:h+""});return r.style={...s,"--svg":ge(w),width:pt(a.width),height:pt(a.height),...ye,...y?V:Ft,...c},it("span",r)},we=Object.create(null),xe=Ct({inheritAttrs:!1,render(){const t=this.$attrs,e=t.icon,n=typeof e=="string"?we[e]:typeof e=="object"?e:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:be({...Z,...n},t)}}),P=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!L(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!L(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!L(c,n)?null:c}return null},L=(t,e)=>t?!!((t.provider===""||t.provider.match(P))&&(e&&t.prefix===""||t.prefix.match(P))&&t.name.match(P)):!1,Et=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...Et,...N}),U=Object.freeze({...X,body:"",hidden:!1});function Ie(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function ht(t,e){const n=Ie(t,e);for(const r in U)r in N?r in t&&!(r in n)&&(n[r]=N[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function ve(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function Se(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=ht(r[c]||o[c],s)}return i(e),n.forEach(i),ht(t,s)}function At(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=ve(t);for(const o in r){const s=r[o];s&&(e(o,Se(t,o,s)),n.push(o))}return n}const ke={provider:"",aliases:{},not_found:{},...Et};function q(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function _t(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!q(t,ke))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(P)||typeof s.body!="string"||!q(s,U))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(P)||typeof i!="string"||!n[i]&&!r[i]||!q(s,U))return null}return e}const gt=Object.create(null);function Ce(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function k(t,e){const n=gt[t]||(gt[t]=Object.create(null));return n[e]||(n[e]=Ce(t,e))}function tt(t,e){return _t(e)?At(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function je(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let O=!1;function Mt(t){return typeof t=="boolean"&&(O=t),O}function Te(t){const e=typeof t=="string"?D(t,!0,O):t;if(e){const n=k(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Pe(t,e){const n=D(t,!0,O);if(!n)return!1;const r=k(n.provider,n.prefix);return je(r,n.name,e)}function Oe(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),O&&!e&&!t.prefix){let o=!1;return _t(t)&&(t.prefix="",At(t,(s,i)=>{i&&Pe(s,i)&&(o=!0)})),o}const n=t.prefix;if(!L({provider:e,prefix:n,name:"a"}))return!1;const r=k(e,n);return!!tt(r,t)}const Fe=Object.freeze({width:null,height:null}),Ee=Object.freeze({...Fe,...N});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const G=Object.create(null);function Ae(t,e){G[t]=e}function K(t){return G[t]||G[""]}function et(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const nt=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],$=[];for(;T.length>0;)T.length===1||Math.random()>.5?$.push(T.shift()):$.push(T.pop());nt[""]=et({resources:["https://api.iconify.design"].concat($)});function _e(t,e){const n=et(e);return n===null?!1:(nt[t]=n,!0)}function ot(t){return nt[t]}const Me=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let mt=Me();function ze(t,e){const n=ot(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Le(t){return t===404}const $e=(t,e,n)=>{const r=[],o=ze(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Ne(t){if(typeof t=="string"){const e=ot(t);if(e)return e.path}return"/"}const De=(t,e,n)=>{if(!mt){n("abort",424);return}let r=Ne(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;mt(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Le(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Re={prepare:$e,send:De};function Be(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=k(s,i));let u;c in a.icons?u=e.loaded:i===""||a.missing.has(c)?u=e.missing:u=e.pending;const d={provider:s,prefix:i,name:c};u.push(d)}),e}function zt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function qe(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(t.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(t.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||zt([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let He=0;function Qe(t,e,n){const r=He++,o=zt.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Ve(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?D(o,e,n):o;s&&r.push(s)}),r}var Ue={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ge(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let g=t.resources.slice(0);for(i=[];g.length>1;){const I=Math.floor(Math.random()*g.length);i.push(g[I]),g=g.slice(0,I).concat(g.slice(I+1))}i=i.concat(g)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,d=null,h=[],y=[];typeof r=="function"&&y.push(r);function w(){d&&(clearTimeout(d),d=null)}function f(){l==="pending"&&(l="aborted"),w(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function p(g,I){I&&(y=[]),typeof g=="function"&&y.push(g)}function v(){return{startTime:c,payload:e,status:l,queriesSent:a,queriesPending:h.length,subscribe:p,abort:f}}function b(){l="failed",y.forEach(g=>{g(void 0,u)})}function x(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function Ht(g,I,C){const E=I!=="success";switch(h=h.filter(S=>S!==g),l){case"pending":break;case"failed":if(E||!t.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=C,b();return}if(E){u=C,h.length||(i.length?B():b());return}if(w(),x(),!t.random){const S=t.resources.indexOf(g.resource);S!==-1&&S!==t.index&&(t.index=S)}l="completed",y.forEach(S=>{S(C)})}function B(){if(l!=="pending")return;w();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{w(),l==="pending"&&(x(),b())},t.timeout);return}b();return}const I={status:"pending",resource:g,callback:(C,E)=>{Ht(I,C,E)}};h.push(I),a++,d=setTimeout(B,t.rotate),n(g,e,I.callback)}return setTimeout(B),v}function Lt(t){const e={...Ue,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Ge(e,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function yt(){}const H=Object.create(null);function Ke(t){if(!H[t]){const e=ot(t);if(!e)return;const n=Lt(e),r={config:e,redundancy:n};H[t]=r}return H[t]}function Je(t,e,n){let r,o;if(typeof t=="string"){const s=K(t);if(!s)return n(void 0,424),yt;o=s.send;const i=Ke(t);i&&(r=i.redundancy)}else{const s=et(t);if(s){r=Lt(s);const i=t.resources?t.resources[0]:"",c=K(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),yt):r.query(e,o,n)().abort}const bt="iconify2",F="iconify",$t=F+"-count",wt=F+"-version",Nt=36e5,We=168;function J(t,e){try{return t.getItem(e)}catch{}}function rt(t,e,n){try{return t.setItem(e,n),!0}catch{}}function xt(t,e){try{t.removeItem(e)}catch{}}function W(t,e){return rt(t,$t,e.toString())}function Y(t){return parseInt(J(t,$t))||0}const R={local:!0,session:!0},Dt={local:new Set,session:new Set};let st=!1;function Ye(t){st=t}let M=typeof window>"u"?{}:window;function Rt(t){const e=t+"Storage";try{if(M&&M[e]&&typeof M[e].length=="number")return M[e]}catch{}R[t]=!1}function Bt(t,e){const n=Rt(t);if(!n)return;const r=J(n,wt);if(r!==bt){if(r){const c=Y(n);for(let l=0;l<c;l++)xt(n,F+l.toString())}rt(n,wt,bt),W(n,0);return}const o=Math.floor(Date.now()/Nt)-We,s=c=>{const l=F+c.toString(),a=J(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}xt(n,l)}};let i=Y(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,W(n,i)):Dt[t].add(c))}function qt(){if(!st){Ye(!0);for(const t in R)Bt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=k(r,o);if(!tt(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Ze(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in R)Bt(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Xe(t,e){st||qt();function n(r){let o;if(!R[r]||!(o=Rt(r)))return;const s=Dt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Y(o),!W(o,i+1))return;const c={cached:Math.floor(Date.now()/Nt),provider:t.provider,data:e};return rt(o,F+i.toString(),JSON.stringify(c))}e.lastModified&&!Ze(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function It(){}function tn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,qe(t)}))}function en(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=K(n)))return;s.prepare(n,r,o).forEach(c=>{Je(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=tt(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),Xe(t,l)}catch(a){console.error(a)}tn(t)})})}))}const nn=(t,e)=>{const n=Ve(t,!0,Mt()),r=Be(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,It)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(k(a,u));const d=o[a]||(o[a]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,h=k(a,u),y=h.pendingIcons||(h.pendingIcons=new Set);y.has(d)||(y.add(d),o[a][u].push(d))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&en(l,o[a][u])}),e?Qe(e,r,s):It},on=t=>new Promise((e,n)=>{const r=typeof t=="string"?D(t,!0):t;if(!r){n(t);return}nn([r||t],o=>{if(o.length&&r){const s=Te(r);if(s){e({...X,...s});return}}n(t)})});({...Ee});const vt={backgroundColor:"currentColor"},rn={backgroundColor:"transparent"},St={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},kt={webkitMask:vt,mask:vt,background:rn};for(const t in kt){const e=kt[t];for(const n in St)e[t+n]=St[n]}const Q={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Q[t+"-flip"]=e,Q[t.slice(0,1)+"-flip"]=e,Q[t+"Flip"]=e});Mt(!0);Ae("",Re);if(typeof document<"u"&&typeof window<"u"){qt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Oe(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;_e(n,o)||console.error(r)}catch{console.error(r)}}}}({...X});const sn=["width","height"],cn=Ct({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){var w;let e,n;const r=t,o=Qt(),s=Gt();(w=s==null?void 0:s.nuxtIcon)!=null&&w.aliases;const i=Vt("icons",()=>({})),c=Kt(!1),l=j(()=>{var f;return(((f=s.nuxtIcon)==null?void 0:f.aliases)||{})[r.name]||r.name}),a=j(()=>{var f;return(f=i.value)==null?void 0:f[l.value]}),u=j(()=>o.vueApp.component(l.value)),d=j(()=>{var p,v,b;if(!r.size&&typeof((p=s.nuxtIcon)==null?void 0:p.size)=="boolean"&&!((v=s.nuxtIcon)!=null&&v.size))return;const f=r.size||((b=s.nuxtIcon)==null?void 0:b.size)||"1em";return String(Number(f))===f?`${f}px`:f}),h=j(()=>{var f;return((f=s==null?void 0:s.nuxtIcon)==null?void 0:f.class)??"icon"});async function y(){var f;u.value||(f=i.value)!=null&&f[l.value]||(c.value=!0,i.value[l.value]=await on(l.value).catch(()=>{}),c.value=!1)}return Jt(()=>l.value,y),!u.value&&([e,n]=Wt(()=>y()),e=await e,n()),(f,p)=>m(c)?(A(),ct("span",{key:0,class:_(m(h)),width:m(d),height:m(d)},null,10,sn)):m(a)?(A(),lt(m(xe),{key:1,icon:m(a),class:_(m(h)),width:m(d),height:m(d)},null,8,["icon","class","width","height"])):m(u)?(A(),lt(Yt(m(u)),{key:2,class:_(m(h)),width:m(d),height:m(d)},null,8,["class","width","height"])):(A(),ct("span",{key:3,class:_(m(h)),style:Xt({fontSize:m(d),lineHeight:m(d),width:m(d),height:m(d)})},Zt(t.name),7))}});const dn=Ut(cn,[["__scopeId","data-v-cf1ec82f"]]);export{dn as default};
