(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{236:function(e,t,r){Promise.resolve().then(r.t.bind(r,2445,23)),Promise.resolve().then(r.bind(r,9376)),Promise.resolve().then(r.bind(r,1235)),Promise.resolve().then(r.bind(r,9092)),Promise.resolve().then(r.t.bind(r,6087,23))},9376:function(e,t,r){"use strict";r.r(t),r.d(t,{ProgressBarProvider:function(){return a}});var o=r(7437),s=r(2265);function a(e){let{children:t}=e,[r,a]=(0,s.useState)(0),i=(0,s.useCallback)(()=>{a(Math.min(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100,100))},[]);return(0,s.useEffect)(()=>(window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)),[i]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"progress-bar",style:{width:"".concat(r,"%")}}),t]})}},1235:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeProvider:function(){return i},useTheme:function(){return n}});var o=r(7437),s=r(2265);let a=(0,s.createContext)({theme:"system",setTheme:()=>null});function i(e){let{children:t,defaultTheme:r="system",storageKey:i="cursor-guide-theme",...n}=e,[l,c]=(0,s.useState)(r);return(0,s.useEffect)(()=>{let e=localStorage.getItem(i);e&&c(e)},[i]),(0,s.useEffect)(()=>{let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===l){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t);return}e.classList.add(l)},[l]),(0,o.jsx)(a.Provider,{...n,value:{theme:l,setTheme:e=>{localStorage.setItem(i,e),c(e)}},children:t})}let n=()=>{let e=(0,s.useContext)(a);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},9092:function(e,t,r){"use strict";let o,s;r.r(t),r.d(t,{ToastProvider:function(){return em}});var a,i=r(7437),n=r(2265);let l={data:""},c=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,f=(e,t)=>{let r="",o="",s="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":o+="f"==a[1]?f(i,a):a+"{"+f(i,"k"==a[1]?"":t)+"}":"object"==typeof i?o+=f(i,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=f.p?f.p(a,i):a+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+o},m={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},y=(e,t,r,o,s)=>{var a;let i=h(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,o=[{}];for(;t=d.exec(e.replace(u,""));)t[4]?o.shift():t[3]?(r=t[3].replace(p," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(p," ").trim();return o[0]})(e);m[n]=f(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),a=m[n],l?t.data=t.data.replace(l,a):-1===t.data.indexOf(a)&&(t.data=o?a+t.data:t.data+a),n},g=(e,t,r)=>e.reduce((e,o,s)=>{let a=t[s];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+o+(null==a?"":a)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return y(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,c(t.target),t.g,t.o,t.k)}b.bind({g:1});let v,x,w,E=b.bind({k:1});function _(e,t){let r=this||{};return function(){let o=arguments;function s(a,i){let n=Object.assign({},a),l=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,o)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),w&&c[0]&&w(n),v(c,n)}return t?t(s):s}}var k=e=>"function"==typeof e,O=(e,t)=>k(e)?e(t):e,P=(o=0,()=>(++o).toString()),$=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},j=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return j(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},N=[],T={toasts:[],pausedAt:void 0},C=e=>{T=j(T,e),N.forEach(e=>{e(T)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,r]=(0,n.useState)(T),o=(0,n.useRef)(T);(0,n.useEffect)(()=>(o.current!==T&&r(T),N.push(r),()=>{let e=N.indexOf(r);e>-1&&N.splice(e,1)}),[]);let s=t.toasts.map(t=>{var r,o,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(o=e[t.type])?void 0:o.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||P()}),L=e=>(t,r)=>{let o=I(t,e,r);return C({type:2,toast:o}),o.id},z=(e,t)=>L("blank")(e,t);z.error=L("error"),z.success=L("success"),z.loading=L("loading"),z.custom=L("custom"),z.dismiss=e=>{C({type:3,toastId:e})},z.remove=e=>C({type:4,toastId:e}),z.promise=(e,t,r)=>{let o=z.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?O(t.success,e):void 0;return s?z.success(s,{id:o,...r,...null==r?void 0:r.success}):z.dismiss(o),e}).catch(e=>{let s=t.error?O(t.error,e):void 0;s?z.error(s,{id:o,...r,...null==r?void 0:r.error}):z.dismiss(o)}),e};var F=(e,t)=>{C({type:1,toast:{id:e,height:t}})},A=()=>{C({type:5,time:Date.now()})},M=new Map,R=1e3,H=(e,t=R)=>{if(M.has(e))return;let r=setTimeout(()=>{M.delete(e),C({type:4,toastId:e})},t);M.set(e,r)},U=e=>{let{toasts:t,pausedAt:r}=S(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&z.dismiss(t.id);return}return setTimeout(()=>z.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let o=(0,n.useCallback)(()=>{r&&C({type:6,time:Date.now()})},[r]),s=(0,n.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:s=8,defaultPosition:a}=r||{},i=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return(0,n.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)H(e.id,e.removeDelay);else{let t=M.get(e.id);t&&(clearTimeout(t),M.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:F,startPause:A,endPause:o,calculateOffset:s}}},B=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Z=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Z} 1s linear infinite;
`,J=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Q=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=_("div")`
  position: absolute;
`,X=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?n.createElement(et,null,t):t:"blank"===r?null:n.createElement(X,null,n.createElement(G,{...o}),"loading"!==r&&n.createElement(V,null,"error"===r?n.createElement(q,{...o}):n.createElement(Q,{...o})))},eo=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ea=_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[o,s]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[eo(r),es(r)];return{animation:t?`${E(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=n.memo(({toast:e,position:t,style:r,children:o})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},a=n.createElement(er,{toast:e}),i=n.createElement(ei,{...e.ariaProps},O(e.message,e));return n.createElement(ea,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof o?o({icon:a,message:i}):n.createElement(n.Fragment,null,a,i))});a=n.createElement,f.p=void 0,v=a,x=void 0,w=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:o,children:s})=>{let a=n.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return n.createElement("div",{ref:a,className:t,style:r},s)},ed=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},eu=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:s,containerStyle:a,containerClassName:i})=>{let{toasts:l,handlers:c}=U(r);return n.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let a=r.position||t,i=ed(a,c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return n.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:i},"custom"===r.type?O(r.message,r):s?s(r):n.createElement(el,{toast:r,position:a}))}))},ef=r(1235);function em(e){let{children:t}=e,{theme:r}=(0,ef.useTheme)();return(0,i.jsxs)(i.Fragment,{children:[t,(0,i.jsx)(ep,{position:"bottom-right",toastOptions:{duration:3e3,style:{background:"dark"===r?"#374151":"#ffffff",color:"dark"===r?"#f9fafb":"#111827",border:"dark"===r?"1px solid #4b5563":"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px",fontWeight:"500"},success:{iconTheme:{primary:"#10b981",secondary:"#ffffff"}},error:{iconTheme:{primary:"#ef4444",secondary:"#ffffff"}}}})]})}},2445:function(){},6087:function(e){e.exports={style:{fontFamily:"'__Inter_e8ce0c', '__Inter_Fallback_e8ce0c'",fontStyle:"normal"},className:"__className_e8ce0c"}},622:function(e,t,r){"use strict";var o=r(2265),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,a={},c=null,d=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:n.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=236)}),_N_E=e.O()}]);