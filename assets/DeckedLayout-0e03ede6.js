import{u as o,j as e,c as s,N as x}from"./index-deb31e10.js";import{H as u,M as h,U as j}from"./AuthorityCheck-267d7e70.js";import{H as f,a as v,S as N}from"./Setting-7810f981.js";import{u as y}from"./useResponsive-5607c4db.js";import{V as H}from"./Views-5dd9e85c.js";import"./slicedToArray-8d2f732a.js";import"./index.esm-7e071777.js";import"./Drawer-d475ebcd.js";import"./index-43dec7b5.js";import"./CloseButton-359f8e10.js";import"./withHeaderItem-2abf8e95.js";import"./index-c67702c1.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-97f81a61.js";import"./usePopper-0c8aa062.js";import"./index.esm-ca652311.js";import"./index-a5be5469.js";import"./index-23d0fcae.js";import"./useUncertainRef-2aa5b3de.js";import"./isNil-6cac775c.js";import"./useUniqueId-675d2864.js";import"./toString-e34703ad.js";import"./chainedFunction-070f832c.js";import"./index-700f33d8.js";import"./useRootClose-2dd50c51.js";import"./Logo-62dcef1d.js";const g=a=>{const{className:n,contained:i}=a,t=o(r=>r.theme.navMode),m=o(r=>r.theme.themeColor),l=o(r=>r.theme.primaryColorLevel),c=o(r=>r.auth.user.authority),{larger:d}=y(),p=()=>t===x?`bg-${m}-${l} secondary-header-${t}`:`secondary-header-${t}`;return e.jsx(e.Fragment,{children:d.md&&e.jsx("div",{className:s("h-16 flex items-center",p(),n),children:e.jsx("div",{className:s("flex items-center px-4",i&&"container mx-auto"),children:e.jsx(f,{manuVariant:t,userAuthority:c})})})})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(h,{})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(j,{hoverable:!1})]}),X=()=>e.jsx("div",{className:"app-layout-simple flex flex-auto flex-col min-h-screen",children:e.jsx("div",{className:"flex flex-auto min-w-0",children:e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(u,{container:!0,className:"shadow dark:shadow-2xl",headerStart:e.jsx(w,{}),headerEnd:e.jsx(C,{})}),e.jsx(g,{contained:!0}),e.jsx(H,{pageContainerType:"contained"})]})})});export{X as default};
