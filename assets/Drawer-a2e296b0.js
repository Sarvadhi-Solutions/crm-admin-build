import{j as r,c as a}from"./index-04de45f1.js";import{M as D}from"./index-ce7a2c9a.js";import{C as M}from"./CloseButton-c81f3a7a.js";import{m as z}from"./Views-9d427d6f.js";const A=m=>{const{bodyOpenClassName:p,bodyClass:f,children:y,className:C,closable:n=!0,closeTimeoutMS:h=300,footer:i,footerClass:w,headerClass:b,height:o=400,isOpen:d,lockScroll:u=!0,onClose:t,overlayClassName:N,placement:e="right",portalClassName:x,showBackdrop:j=!0,title:s,width:l=400,...v}=m,S=B=>{t==null||t(B)},g=r.jsx(M,{onClick:S}),k=()=>e==="left"||e==="right"?{dimensionClass:"vertical",contentStyle:{width:l},motionStyle:{[e]:`-${l}${typeof l=="number"&&"px"}`}}:e==="top"||e==="bottom"?{dimensionClass:"horizontal",contentStyle:{height:o},motionStyle:{[e]:`-${o}${typeof o=="number"&&"px"}`}}:{motionStyle:{}},{dimensionClass:O,contentStyle:$,motionStyle:c}=k();return r.jsx(D,{className:{base:a("drawer",C),afterOpen:"drawer-after-open",beforeClose:"drawer-before-close"},overlayClassName:{base:a("drawer-overlay",N,!j&&"bg-transparent"),afterOpen:"drawer-overlay-after-open",beforeClose:"drawer-overlay-before-close"},portalClassName:a("drawer-portal",x),bodyOpenClassName:a("drawer-open",u&&"drawer-lock-scroll",p),ariaHideApp:!1,isOpen:d,closeTimeoutMS:h,...v,children:r.jsxs(z.div,{className:a("drawer-content",O),style:$,initial:c,animate:{[e]:d?0:c[e]},children:[s||n?r.jsxs("div",{className:a("drawer-header",b),children:[typeof s=="string"?r.jsx("h4",{children:s}):r.jsx("span",{children:s}),n&&g]}):null,r.jsx("div",{className:a("drawer-body",f),children:y}),i&&r.jsx("div",{className:a("drawer-footer",w),children:i})]})})};A.displayName="Drawer";export{A as D};
