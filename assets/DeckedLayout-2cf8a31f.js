import{u as o,j as e,c as n,N as x,h as u}from"./index-a75c2214.js";import{H as h,M as j,U as f}from"./UserDropdown-187498ff.js";import{H as v,a as N}from"./HorizontalMenuContent-807bc0da.js";import{u as g}from"./useResponsive-385dc00f.js";import{V as y}from"./Views-10f1927c.js";import{j as H}from"./index.esm-ba9f59e9.js";import"./slicedToArray-fb2022e5.js";import"./Drawer-4be8ac77.js";import"./index-60763994.js";import"./CloseButton-aa3449ba.js";import"./withHeaderItem-82814ca1.js";import"./NavToggle-b254a586.js";import"./index-3aa09f20.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index-04ed9e3c.js";import"./useUncertainRef-46d98c81.js";import"./isNil-92cba2d7.js";import"./useUniqueId-88c0f361.js";import"./toString-a311c7f9.js";import"./chainedFunction-070f832c.js";import"./index-24cfecab.js";import"./useRootClose-481198be.js";import"./index.esm-0d74fc26.js";import"./Logo-39223e4e.js";import"./AuthorityCheck-163a72ff.js";const w=s=>{const{className:a,contained:i}=s,t=o(r=>r.theme.navMode),m=o(r=>r.theme.themeColor),l=o(r=>r.theme.primaryColorLevel),c=o(r=>r.auth.user.authority),{larger:p}=g(),d=()=>t===x?`bg-${m}-${l} secondary-header-${t}`:`secondary-header-${t}`;return e.jsx(e.Fragment,{children:p.md&&e.jsx("div",{className:n("h-16 flex items-center",d(),a),children:e.jsx("div",{className:n("flex items-center px-4",i&&"container mx-auto"),children:e.jsx(v,{manuVariant:t,userAuthority:c})})})})},C=s=>{o(t=>t.theme.mode);const{className:a,...i}=s;return e.jsx("div",{className:`${n("text-2xl",a)} cursor-pointer`,...i,children:e.jsx(u,{className:"flex h-full w-full px-2",to:"/app/crm/setting",children:e.jsx(H,{})})})},M=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(j,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(f,{hoverable:!1})]}),te=()=>e.jsx("div",{className:"app-layout-simple flex flex-auto flex-col min-h-screen",children:e.jsx("div",{className:"flex flex-auto min-w-0",children:e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(h,{container:!0,className:"shadow dark:shadow-2xl",headerStart:e.jsx(M,{}),headerEnd:e.jsx(E,{})}),e.jsx(w,{contained:!0}),e.jsx(y,{pageContainerType:"contained"})]})})});export{te as default};
