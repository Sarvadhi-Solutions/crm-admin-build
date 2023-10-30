import{r as o,c as y,j as l,aD as I,aL as A}from"./index-0504f3e5.js";import{u as D}from"./useTimeout-70ff9997.js";import{C as W}from"./CloseButton-3bea4048.js";import{S as B}from"./StatusIcon-cfa55813.js";import{c as _}from"./chainedFunction-070f832c.js";import{m as L}from"./Views-3281299b.js";const O=o.forwardRef((e,t)=>{const{className:a,children:s,closable:u=!1,customIcon:i,duration:m=3e3,onClose:n,style:r,title:p,triggerByToast:d,type:f,width:C=350,...N}=e,[E,v]=o.useState("show"),{clear:x}=D(n,m,m>0),k=o.useCallback(T=>{v("hiding"),n==null||n(T),x(),d||setTimeout(()=>{v("hide")},400)},[n,x,d]),c=y("notification",a);return E==="hide"?null:l.jsxs("div",{ref:t,...N,className:c,style:{width:C,...r},children:[l.jsxs("div",{className:y("notification-content",!s&&"no-child"),children:[f&&!i?l.jsx("div",{className:"mr-3",children:l.jsx(B,{type:f})}):null,i&&l.jsx("div",{className:"mr-3",children:i}),l.jsxs("div",{className:"mr-4",children:[p&&l.jsx("div",{className:y("notification-title",s&&"mb-1"),children:p}),l.jsx("div",{className:"notification-description",children:s})]})]}),u&&l.jsx(W,{className:"notification-close",defaultStyle:!1,absolute:!0,onClick:k})]})});O.displayName="Notification";const z=({offsetX:e,offsetY:t,placement:a,transitionType:s})=>s==="fade"?H(e,t)[a]:F(e,t)[a],b={initial:{opacity:0,transform:"scale(0.75)"},animate:{transform:"scale(1)",opacity:1},exit:{opacity:0,transform:"scale(0.75)"}},h={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},F=(e,t)=>({"top-end":{default:{top:t,right:e},variants:{...b}},"top-start":{default:{top:t,left:e},variants:{...b}},"top-center":{default:{top:t,left:"50%",transform:"translateX(-50%)"},variants:{...b}},"bottom-end":{default:{bottom:t,right:e},variants:{...b}},"bottom-start":{default:{bottom:t,left:e},variants:{...b}},"bottom-center":{default:{bottom:t,left:"50%",transform:"translateX(-50%)"},variants:{...b}}}),H=(e,t)=>({"top-end":{default:{top:t,right:e},variants:{...h}},"top-start":{default:{top:t,left:e},variants:{...h}},"top-center":{default:{top:t,left:"50%",transform:"translateX(-50%)"},variants:{...h}},"bottom-end":{default:{bottom:t,right:e},variants:{...h}},"bottom-start":{default:{bottom:t,left:e},variants:{...h}},"bottom-center":{default:{bottom:t,left:"50%",transform:"translateX(-50%)"},variants:{...h}}}),K=e=>{const[t,a]=o.useState([]),s=o.useCallback(n=>(typeof n>"u"&&t.length&&(n=t[t.length-1].key),n),[t]),u=o.useCallback(n=>{const r=e||"_"+Math.random().toString(36).substr(2,12);return a([...t,{key:r,visible:!0,node:n}]),r},[t,e]),i=o.useCallback(()=>{a(t.map(n=>({...n,visible:!1}))),setTimeout(()=>{a([])},50)},[t]),m=o.useCallback(n=>{a(t.map(r=>(r.key===s(n)&&(r.visible=!1),r))),setTimeout(()=>{a(t.filter(r=>r.visible))},50)},[t,s]);return{messages:t,push:u,removeAll:i,remove:m}},j=o.forwardRef((e,t)=>{const a=o.useRef(null),{transitionType:s="scale",placement:u=I.TOP_END,offsetX:i=30,offsetY:m=30,messageKey:n,block:r=!1,callback:p,...d}=e,{push:f,removeAll:C,remove:N,messages:E}=K(n);o.useImperativeHandle(t,()=>({root:a.current,push:f,removeAll:C,remove:N}));const v=z({offsetX:i,offsetY:m,placement:u,transitionType:s}),x={triggerByToast:!0,...d},k=E.map(c=>{var T,P,M,R;return l.jsx(L.div,{className:"toast-wrapper",initial:v.variants.initial,variants:v.variants,animate:c.visible?"animate":"exit",transition:{duration:.15,type:"tween"},children:o.cloneElement(c.node,{...x,ref:t,onClose:_((P=(T=c.node)==null?void 0:T.props)==null?void 0:P.onClose,()=>N(c.key)),className:y((R=(M=c.node)==null?void 0:M.props)==null?void 0:R.className)})},c.key)});return l.jsx("div",{style:v.default,...d,ref:c=>{a.current=c,p==null||p(c)},className:y("toast",r&&"w-full"),children:k})});j.getInstance=e=>{const{wrapper:t,...a}=e,s=o.createRef(),u=(typeof t=="function"?t():t)||document.body;return new Promise(i=>{const m=()=>{i([s,r])};function n(p){const d=document.createElement("div");u.appendChild(d);const f=A(d);return f.render(p),f}const{unmount:r}=n(l.jsx(j,{...a,ref:s,callback:m}))})};j.displayName="ToastWrapper";const q={placement:I.TOP_END,offsetX:30,offsetY:30,transitionType:"scale",block:!1},S="default",g=new Map;function G(e){if(/\top\b/.test(e))return"top-full";if(/\bottom\b/.test(e))return"bottom-full"}async function J(e,t){const[a]=await j.getInstance(t);return g.set(e||S,a),a}function Q(e){return g.size===0?null:g.get(e||S)}const w=e=>w.push(e);w.push=(e,t=q)=>{let a=t.placement;t.block&&(a=G(t.placement));const s=Q(a);return s!=null&&s.current?s.current.push(e):J(a??"",t).then(u=>{var i;return(i=u.current)==null?void 0:i.push(e)})};w.remove=e=>{g.forEach(t=>t.current.remove(e))};w.removeAll=()=>{g.forEach(e=>e.current.removeAll())};export{O as N,w as t};
