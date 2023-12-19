import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u,k as E,l as O}from"./index-a9c93031.js";import{n as g,a as _,u as P,H as F,M as B,U}from"./UserDropdown-cf66f5e3.js";import{S as G}from"./SidePanel-806d8a31.js";import{S as W,L as Y,N as z}from"./Notification-76ee21d9.js";import{L as q}from"./Logo-5f8f0899.js";import{M as k}from"./index-9de29f90.js";import{S as I}from"./ScrollBar-ad1c4e83.js";import{A as J}from"./AuthorityCheck-9577d0b5.js";import{u as Q,V as X}from"./VerticalMenuContent-8dce785c.js";import{i as A,V as Z}from"./Views-0c5423a6.js";import{B as ee}from"./Button-47bf58f7.js";import{H as te,a as se}from"./index.esm-37c3564c.js";import{u as re}from"./useResponsive-429e39cc.js";import"./slicedToArray-be8619ee.js";import"./Drawer-0a33fe5a.js";import"./index-0569d7d3.js";import"./CloseButton-ef1c868b.js";import"./withHeaderItem-8699baf5.js";import"./NavToggle-2a5ce8f0.js";import"./index-7cf9b27e.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-4f11c588.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./index-0b68a97f.js";import"./index-137f6e4f.js";import"./useUncertainRef-762e062e.js";import"./isNil-f7d4f3b6.js";import"./useUniqueId-b18fc966.js";import"./toString-60f65c59.js";import"./chainedFunction-070f832c.js";import"./index-4104c7c5.js";import"./useRootClose-6d54f280.js";import"./index.esm-7a86c1b2.js";import"./Switcher-631d0666.js";import"./index-34112b0a.js";import"./useControllableState-0bc3ffd1.js";import"./context-6d5d8fe5.js";import"./SegmentItemOption-667248da.js";import"./useThemeClass-297687ff.js";import"./DoubleSidedImage-f4b852fe.js";import"./Select-90b6020d.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-ccb51e40.js";import"./floating-ui.dom-bef9cea3.js";import"./get-0157bd52.js";import"./_MapCache-83d2f18f.js";import"./Badge-c9ada007.js";import"./index-34c577ad.js";import"./index-803b614c.js";import"./toast-53c71514.js";import"./useTimeout-3babeb43.js";import"./StatusIcon-b453f46b.js";import"./Dialog-5ef978d2.js";import"./debounce-da8ee35d.js";import"./isLastChild-83eb4c23.js";import"./acronym-b2505150.js";import"./_getPrototype-71e29649.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:m,onSetActiveKey:c,userAuthority:n,mode:l,direction:d,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),c([s])},f=({key:s})=>{o({}),c([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(q,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:d,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:m||[r.key],children:g.map(s=>e.jsx(J,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:m,onCollapse:c,direction:n,userAuthority:l,navMode:d,...a}=p,r=()=>{c()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:m,navigationTree:h,userAuthority:l,navMode:d})})]})},ae={width:O},ne=()=>{const{t:p}=P(),[i,o]=M.useState({}),[h,m]=M.useState([]),c=u(t=>t.theme.themeColor),n=u(t=>t.theme.primaryColorLevel),l=u(t=>t.theme.navMode),d=u(t=>t.theme.mode),a=u(t=>t.theme.direction),r=u(t=>t.base.common.currentRouteKey),y=["admin","user"],{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${c}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),m([])},N=t=>{m(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:d,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",d,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx(W,{})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(z,{}),e.jsx(G,{}),e.jsx(U,{hoverable:!1})]}),yt=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(F,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(me,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{yt as default};
