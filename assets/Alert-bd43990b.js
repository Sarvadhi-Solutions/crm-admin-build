import{r as m,c as v,j as e}from"./index-21d7ce34.js";import{u as A}from"./useTimeout-c424fd3c.js";import{K as E,at as D,au as H,V as I}from"./index.esm-3f5f076a.js";import{C as P}from"./CloseButton-8f19e7bd.js";import{S as R}from"./StatusIcon-cb41def8.js";import{m as S}from"./Views-aa9d3067.js";const u="warning",Y={success:{backgroundColor:"bg-emerald-50 dark:bg-emerald-500",titleColor:"text-emerald-700 dark:text-emerald-50",textColor:"text-emerald-500 dark:text-emerald-50",iconColor:"text-emerald-400 dark:text-emerald-50",icon:e.jsx(E,{})},info:{backgroundColor:"bg-blue-50 dark:bg-blue-500",titleColor:"text-blue-700 dark:text-blue-100",textColor:"text-blue-500 dark:text-blue-100",iconColor:"text-blue-400 dark:text-blue-100",icon:e.jsx(D,{})},warning:{backgroundColor:"bg-yellow-50 dark:bg-yellow-500",titleColor:"text-yellow-700 dark:text-yellow-50",textColor:"text-yellow-500 dark:text-yellow-50",iconColor:"text-yellow-400 dark:text-yellow-50",icon:e.jsx(H,{})},danger:{backgroundColor:"bg-red-50 dark:bg-red-500",titleColor:"text-red-700 dark:text-red-100",textColor:"text-red-500 dark:text-red-100",iconColor:"text-red-400 dark:text-red-100",icon:e.jsx(I,{})}},_=["success","danger","info","warning"],B=m.forwardRef((s,C)=>{const{children:b,className:f,closable:a=!1,customClose:g,customIcon:p,duration:i=3e3,title:o=null,onClose:r,rounded:y=!0,showIcon:n=!1,triggerByToast:k=!1,...w}=s,c=(()=>{const{type:t=u}=s;return _.includes(t)?t:u})(),l=Y[c],[d,x]=m.useState("show"),{clear:h}=A(r,i,i>0),j=t=>{x("hiding"),r==null||r(t),h(),k||setTimeout(()=>{x("hide")},400)},T=()=>e.jsx("div",{className:"cursor-pointer",role:"presentation",onClick:t=>j(t),children:g||e.jsx(P,{defaultStyle:!1})}),N=v("alert","p-4 relative flex",l.backgroundColor,l.textColor,o?"":"font-semibold",a?"justify-between":"",a&&!o?"items-center":"",y&&"rounded-lg",f);return d==="hide"?null:e.jsxs(S.div,{ref:C,className:N,initial:{opacity:1},animate:d==="hiding"?"exit":"animate",transition:{duration:.25,type:"tween"},variants:{animate:{opacity:1},exit:{opacity:0}},...w,children:[e.jsxs("div",{className:`flex ${o?"":"items-center"}`,children:[n&&e.jsx(R,{iconColor:l.iconColor,custom:p,type:c}),e.jsxs("div",{className:n?"ltr:ml-2 rtl:mr-2":"",children:[o?e.jsx("div",{className:`font-semibold mb-1 ${l.titleColor}`,children:o}):null,b]})]}),a?T():null]})});B.displayName="Alert";export{B as A};
