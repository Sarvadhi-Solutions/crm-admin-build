import{r as c,c as t,j as n}from"./index-4bd6b7b3.js";import{M as z}from"./index-8b930c29.js";import{C as S}from"./CloseButton-6e2e0ec5.js";import{m as j}from"./Views-d9a5bf10.js";function D(){const[a,o]=c.useState({width:void 0,height:void 0});return c.useEffect(()=>{function e(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),a}const E=a=>{const o=D(),{bodyOpenClassName:e,children:m,className:f,closable:p=!0,closeTimeoutMS:h=150,contentClassName:u,height:l,isOpen:r,onClose:i,overlayClassName:g,portalClassName:w,style:C,width:d=520,...v}=a,N=x=>{i==null||i(x)},y=n.jsx(S,{absolute:!0,className:"ltr:right-6 rtl:left-6",onClick:N}),s={content:{inset:"unset"},...C};d!==void 0&&(s.content.width=d,typeof o.width<"u"&&o.width<=parseInt("640px".split(/ /)[0].replace(/[^\d]/g,""))&&(s.content.width="auto")),l!==void 0&&(s.content.height=l);const b=t("dialog-content",u);return n.jsx(z,{className:{base:t("dialog",f),afterOpen:"dialog-after-open",beforeClose:"dialog-before-close"},overlayClassName:{base:t("dialog-overlay",g),afterOpen:"dialog-overlay-after-open",beforeClose:"dialog-overlay-before-close"},portalClassName:t("dialog-portal",w),bodyOpenClassName:t("dialog-open",e),ariaHideApp:!1,isOpen:r,style:{...s},closeTimeoutMS:h,...v,children:n.jsxs(j.div,{className:b,initial:{transform:"scale(0.9)"},animate:{transform:r?"scale(1)":"scale(0.9)"},children:[p&&y,m]})})};E.displayName="Dialog";export{E as D,D as u};
