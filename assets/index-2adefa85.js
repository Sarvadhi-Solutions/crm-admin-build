import{aa as h,r as m,F as j,j as t}from"./index-de229e0f.js";import{A as y}from"./AdaptableCard-73970f77.js";import{M as d}from"./index-a531e03b.js";import{D as f}from"./Views-e5666688.js";import{O as C}from"./Organization-55042925.js";import{T as S}from"./TagCategories-f9719261.js";import g from"./UsersRoles-ddb70bf3.js";import{I as k}from"./Inventory-c85d2e79.js";import{S as w}from"./StateCity-42430d79.js";import"./Card-a97e4c2f.js";import"./index-6be331b1.js";import"./index.esm-aee8ac7d.js";import"./useUniqueId-c7e0bf5f.js";import"./toString-99f06a6f.js";import"./StickyFooter-c8c685d1.js";import"./Alert-6c1fb93d.js";import"./useTimeout-73ec5f9b.js";import"./CloseButton-a4aa9973.js";import"./StatusIcon-6f48f0ae.js";import"./index-014db2f3.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-f07ebc4b.js";import"./usePopper-beea1819.js";import"./index.esm-9e33621c.js";import"./index-95f7d6b8.js";import"./Badge-1c9640f8.js";import"./Button-b15cd132.js";import"./RangeCalendar-a7904a79.js";import"./useControllableState-c13b1cb7.js";import"./index-5d48ec0d.js";import"./cloneDeep-e3592be4.js";import"./_MapCache-af06afb7.js";import"./_getPrototype-3735b5b3.js";import"./_baseIsEqual-e27983a5.js";import"./get-9c32eaa8.js";import"./index-c1fa956a.js";import"./Input-0edbc257.js";import"./isNil-8888295d.js";import"./useRootClose-2530cd3e.js";import"./TimeInput-d14a467e.js";import"./useDidUpdate-be9907f8.js";import"./Dialog-8e46cfc1.js";import"./index-ea6d121c.js";import"./Drawer-f0faeb9e.js";import"./index-3edcad3a.js";import"./useUncertainRef-4abf232b.js";import"./chainedFunction-070f832c.js";import"./FormItem-babd9538.js";import"./index-5c089da4.js";import"./toast-2a495ac5.js";import"./Pagination-eeb66415.js";import"./Progress-3fcd9e67.js";import"./index-8cb693c7.js";import"./ScrollBar-19fef748.js";import"./index-da4e4b17.js";import"./Select-7b8d032a.js";import"./slicedToArray-dce459c5.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-ccf7c0d4.js";import"./floating-ui.dom-bef9cea3.js";import"./Skeleton-fe9c87f9.js";import"./index-2cc6f2e5.js";import"./mapCloneElement-03a07d0b.js";import"./Switcher-a81d65e1.js";import"./index-a5a888d3.js";import"./index.esm-181c8c38.js";import"./index-c847ee3d.js";import"./Tag-416f4bd5.js";import"./index-f77eb852.js";import"./index-3ec890d7.js";import"./Upload-bc5be741.js";import"./index.esm-7525e498.js";import"./FormDesription-4c1c908a.js";import"./FormRow-d25c0467.js";import"./formik.esm-db3e081d.js";import"./index.esm-2164e7d1.js";import"./index.esm-863c1a13.js";import"./CrmService-3972df40.js";/* empty css              */import"./index.esm-392fcbac.js";import"./chart.constant-14f0e72f.js";import"./chart.config-882b5369.js";import"./DataTable-fb614c2b.js";import"./index-bcf5a82e.js";import"./GrowShrinkTag-09430f1f.js";import"./react-tooltip.min-fe1d294b.js";import"./RichTextEditor-010ff880.js";import"./SegmentItemOption-dd1ea792.js";import"./useThemeClass-d77d5188.js";import"./SvgIcon-8a149743.js";import"./index.esm-03c1ae2a.js";import"./index.esm-b2a3e018.js";import"./isLastChild-83eb4c23.js";import"./ConfirmDialog-3591d1f6.js";import"./checkEditUpdate-2235bd5d.js";import"./debounce-3198f06d.js";import"./index.esm-079ccece.js";import"./TextTruncate-b6fa38c4.js";const N=()=>{var c;const n=h(),[p,u]=m.useState({}),[i,a]=m.useState(null);m.useEffect(()=>{const o=n.pathname.trim().split("/").pop(),r=j.find(s=>s.title.toLowerCase()===(o==null?void 0:o.toLowerCase())),e={key:r==null?void 0:r.key,title:r==null?void 0:r.title,menu:r==null?void 0:r.subMenu,translateKey:r==null?void 0:r.translateKey};u(e)},[n.pathname]),m.useEffect(()=>{var o;(o=p.menu)!=null&&o.length&&a(f.find(r=>r.key==="appsCrm.organization"))},[p.menu]);const x=async(o,r)=>{const e=f.find(s=>s.key===o);a(e)};m.useEffect(()=>{l()},[i==null?void 0:i.key]);const l=()=>{switch(i==null?void 0:i.key){case"appsCrm.organization":return t.jsx(C,{});case"appsCrm.usersrole":return t.jsx(g,{});case"appsCrm.tagCategories":return t.jsx(S,{});case"appsCrm.inventory":return t.jsx(k,{});case"appsCrm.statecity":return t.jsx(w,{})}return t.jsx(t.Fragment,{children:"Bapu"})};return t.jsx(y,{children:t.jsxs("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:[t.jsx("h5",{className:"font-bold",children:"Settings"}),t.jsxs("div",{className:"flex flex-auto min-w-0 gap-2",children:[t.jsx("div",{className:"rounded-md w-[20%] ",children:t.jsx(d,{onSelect:x,children:(c=p.menu)==null?void 0:c.map((o,r)=>t.jsx(d.MenuItem,{eventKey:o.key,children:o.title},r))})}),t.jsx("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:t.jsx("div",{className:"h-full flex flex-auto flex-col",children:t.jsx(m.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:l()})})})]})]})})},xr=N;export{xr as default};
