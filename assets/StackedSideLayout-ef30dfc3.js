import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u as c,k as E,l as O}from"./index-21d7ce34.js";import{n as g,a as _,u as P,H as F,M as B,S as U,L as G,N as W,U as Y}from"./UserDropdown-b899a60c.js";import{S as z}from"./SidePanel-9952e8c4.js";import{L as q}from"./Logo-a45319a6.js";import{M as k}from"./index-24a2595e.js";import{S as I}from"./ScrollBar-83d9acc4.js";import{A as J}from"./AuthorityCheck-71c1032f.js";import{u as Q,V as X}from"./VerticalMenuContent-87a05237.js";import{i as A,V as Z}from"./Views-aa9d3067.js";import{B as ee}from"./Button-6c3081fd.js";import{H as te,a as se}from"./index.esm-3f5f076a.js";import{u as re}from"./useResponsive-fe0fbc39.js";import"./Select-6e523134.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./get-db5a0269.js";import"./toString-839cbc0d.js";import"./_MapCache-e6bfd31d.js";import"./context-ff20449e.js";import"./withHeaderItem-a1900008.js";import"./Dialog-fcbd4cee.js";import"./index-e63aba64.js";import"./CloseButton-8f19e7bd.js";import"./useThemeClass-103b190c.js";import"./debounce-4303ffbd.js";import"./index-60ecab9e.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index-cbaf419c.js";import"./useUncertainRef-1f87b20a.js";import"./isNil-e652d611.js";import"./useUniqueId-18384f8e.js";import"./chainedFunction-070f832c.js";import"./index-a936af3e.js";import"./useRootClose-aa5c19cb.js";import"./Badge-0547788a.js";import"./isLastChild-83eb4c23.js";import"./acronym-edf87d4f.js";import"./Drawer-08bde54d.js";import"./NavToggle-23daec28.js";import"./index.esm-640ee16f.js";import"./Switcher-25855834.js";import"./index-97d1b97f.js";import"./useControllableState-3f0dec55.js";import"./SegmentItemOption-88db8142.js";import"./DoubleSidedImage-ee1e3584.js";import"./index-5f8b7824.js";import"./index-489c77b3.js";import"./toast-60e590e4.js";import"./useTimeout-c424fd3c.js";import"./StatusIcon-cb41def8.js";import"./_getPrototype-2575ec81.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:m,onSetActiveKey:d,userAuthority:n,mode:l,direction:u,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),d([s])},f=({key:s})=>{o({}),d([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(q,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:u,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:m||[r.key],children:g.map(s=>e.jsx(J,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:m,onCollapse:d,direction:n,userAuthority:l,navMode:u,...a}=p,r=()=>{d()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:m,navigationTree:h,userAuthority:l,navMode:u})})]})},ae={width:O},ne=()=>{const{t:p}=P(),[i,o]=M.useState({}),[h,m]=M.useState([]),d=c(t=>t.theme.themeColor),n=c(t=>t.theme.primaryColorLevel),l=c(t=>t.theme.navMode),u=c(t=>t.theme.mode),a=c(t=>t.theme.direction),r=c(t=>t.base.common.currentRouteKey),y=c(t=>t.auth.user.authority),{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${d}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),m([])},N=t=>{m(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:u,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",u,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx(U,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(W,{}),e.jsx(z,{}),e.jsx(Y,{hoverable:!1})]}),ut=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(F,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{ut as default};
