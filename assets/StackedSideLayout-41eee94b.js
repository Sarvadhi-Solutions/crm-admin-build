import{r as M,g as H,j as e,S as L,h as b,N as K,e as w,f as T,c as V,H as $,D as C,i as D,u as c,k as E,l as O}from"./index-7a16719d.js";import{n as g,a as _,u as P,H as F,M as B,S as U,L as G,N as W,U as Y}from"./UserDropdown-6a3d925b.js";import{S as z}from"./SidePanel-f7d208ea.js";import{L as q}from"./Logo-27684114.js";import{M as k}from"./index-2891c22c.js";import{S as I}from"./ScrollBar-c40790ee.js";import{A as J}from"./AuthorityCheck-8a6a5a2a.js";import{u as Q,V as X}from"./VerticalMenuContent-6dc542ad.js";import{i as A,V as Z}from"./Views-6f74b325.js";import{B as ee}from"./Button-796af526.js";import{H as te,a as se}from"./index.esm-a0bff864.js";import{u as re}from"./useResponsive-9ba09a18.js";import"./Select-9b097dd7.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./get-d062fc7e.js";import"./toString-8f2f6138.js";import"./_MapCache-4c25b116.js";import"./context-0b7be94f.js";import"./withHeaderItem-7f5f65ae.js";import"./Dialog-6329901c.js";import"./index-d79d31fc.js";import"./CloseButton-a0a179ae.js";import"./useThemeClass-fd0ad3b7.js";import"./debounce-581daf1a.js";import"./index-a6767bf5.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-d9375ea6.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./index-c8ec40dc.js";import"./useUncertainRef-cc932849.js";import"./isNil-e31eb1ef.js";import"./useUniqueId-8e6b0c76.js";import"./chainedFunction-070f832c.js";import"./index-8ce6c613.js";import"./useRootClose-846e7f72.js";import"./Badge-1281613d.js";import"./isLastChild-83eb4c23.js";import"./acronym-053c2778.js";import"./Drawer-8ba2eb60.js";import"./NavToggle-526792c7.js";import"./index.esm-bfb30804.js";import"./Switcher-9edb53af.js";import"./index-f369fb39.js";import"./useControllableState-a386f254.js";import"./SegmentItemOption-7241e2fb.js";import"./DoubleSidedImage-09f33866.js";import"./index-4b73696b.js";import"./index-ec94b59a.js";import"./toast-88b8cde7.js";import"./useTimeout-322537e2.js";import"./StatusIcon-d7c666ad.js";import"./_getPrototype-af9a5f7c.js";const ie=p=>{const{navMode:i,onChange:o,routeKey:h,activeKeys:m,onSetActiveKey:d,userAuthority:n,mode:l,direction:u,...a}=p,{includedRouteTree:r}=Q(g,h),y=()=>i===K?w:i===T?l:i,S=({key:s,title:j,menu:N,translateKey:v})=>{o({title:j,menu:N,translateKey:v}),d([s])},f=({key:s})=>{o({}),d([s])};return M.useEffect(()=>{r.type!==H&&!A(r)&&o({key:r.key,title:r.title,menu:r.subMenu,translateKey:r.translateKey})},[r.key]),e.jsxs("div",{...a,children:[e.jsx(q,{mode:y(),type:"streamline",className:L}),e.jsx(I,{autoHide:!0,direction:u,children:e.jsx(k,{className:"px-4 pb-4",variant:i,defaultActiveKeys:m||[r.key],children:g.map(s=>e.jsx(J,{authority:s.authority,userAuthority:n,children:s.subMenu&&s.subMenu.length>0?e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",onSelect:()=>S({key:s.key,title:s.title,menu:s.subMenu,translateKey:s.translateKey}),children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})}):e.jsx(b,{to:s.path,className:"flex items-center h-full w-full",onClick:()=>f({key:s.key}),children:e.jsx(k.MenuItem,{eventKey:s.key,className:"mb-2",children:e.jsx("div",{className:"text-2xl",children:_[s.icon]})})})},s.key))})})]})},oe=p=>{const{className:i,title:o,menu:h,routeKey:m,onCollapse:d,direction:n,userAuthority:l,navMode:u,...a}=p,r=()=>{d()};return e.jsxs("div",{className:V("h-full",i),...a,children:[e.jsxs("div",{className:`${$} flex items-center justify-between gap-4 pl-6 pr-4`,children:[e.jsx("h5",{className:"font-bold",children:o}),e.jsx(ee,{shape:"circle",variant:"plain",size:"sm",icon:e.jsxs(e.Fragment,{children:[n===C&&e.jsx(te,{}),n===D&&e.jsx(se,{})]}),onClick:r})]}),e.jsx(I,{autoHide:!0,direction:n,children:e.jsx(X,{routeKey:m,navigationTree:h,userAuthority:l,navMode:u})})]})},ae={width:O},ne=()=>{const{t:p}=P(),[i,o]=M.useState({}),[h,m]=M.useState([]),d=c(t=>t.theme.themeColor),n=c(t=>t.theme.primaryColorLevel),l=c(t=>t.theme.navMode),u=c(t=>t.theme.mode),a=c(t=>t.theme.direction),r=c(t=>t.base.common.currentRouteKey),y=c(t=>t.auth.user.authority),{larger:S}=re(),f=(t,x,R=!0)=>l===K&&R?`bg-${d}-${n} ${t}-${x}`:`${t}-${x}`,s=t=>{o(t)},j=()=>{o({}),m([])},N=t=>{m(t)},v=()=>{let t={};const x=`${-E}px`;return a===C&&(t={marginLeft:x}),a===D&&(t={marginRight:x}),t};return e.jsx(e.Fragment,{children:S.md&&e.jsxs("div",{className:"stacked-side-nav",children:[e.jsx(ie,{className:`stacked-side-nav-mini ${f("stacked-side-nav-mini",l)}`,style:ae,routeKey:r,activeKeys:h,navMode:l,userAuthority:y,mode:u,direction:a,onChange:s,onSetActiveKey:N}),e.jsx("div",{className:`stacked-side-nav-secondary ${f("stacked-side-nav-secondary",u,!1)}`,style:{width:E,...A(i)?v():{}},children:!A(i)&&e.jsx(oe,{title:p(i.translateKey,i.title),menu:i.menu,routeKey:r,navMode:T,direction:a,userAuthority:y,onCollapse:j})})]})})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsx(U,{})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(W,{}),e.jsx(z,{}),e.jsx(Y,{hoverable:!1})]}),ut=()=>e.jsx("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(ne,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(F,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(le,{}),headerEnd:e.jsx(ce,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(Z,{})})]})]})});export{ut as default};
