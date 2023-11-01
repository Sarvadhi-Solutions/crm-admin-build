import{w as S,r as a,u as N,J as P,j as o}from"./index-01836369.js";import{A as z}from"./AdaptableCard-567f2842.js";import{M as C}from"./index-035dac1c.js";import{D as g}from"./Views-e7196e20.js";import{C as V}from"./CustomFields-f7d8d3c0.js";import{I as v}from"./Inventory-1028f1bf.js";import{O as E}from"./Organization-319e852c.js";import{S as b}from"./Source-d338b386.js";import{S as A}from"./StateCity-c9a3d42d.js";import{T as F}from"./TagCategories-1430b1d9.js";import R from"./UsersRoles-1ef2fd12.js";import"./Card-2dc07d7d.js";import"./index-0ef1a83d.js";import"./index.esm-64f3e5ec.js";import"./useUniqueId-99a7922f.js";import"./toString-dfdb4974.js";import"./index-bf1aff49.js";import"./useControllableState-1186edc6.js";import"./CrmService-5df22f1e.js";import"./Button-a46452f7.js";import"./Input-de9bab6e.js";import"./isNil-558c9391.js";import"./get-a00c8c4f.js";import"./_MapCache-cb5691fa.js";import"./debounce-706ad38e.js";import"./cloneDeep-2911bc06.js";import"./_getPrototype-66b22aa1.js";import"./DataTable-a7013519.js";import"./index-9a90023d.js";import"./index.esm-a7f707ee.js";import"./Pagination-c8e6fde5.js";import"./Select-c320d599.js";import"./slicedToArray-5d2142ab.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-bc2226dd.js";import"./floating-ui.dom-4bc0055b.js";import"./index-d8fc78ac.js";import"./_baseIsEqual-f710d97d.js";import"./Skeleton-743f8ad2.js";import"./index-cf0b9425.js";import"./checkEditUpdate-a0ee37f3.js";import"./moment-fbc5633a.js";import"./useThemeClass-ce525309.js";import"./TextTruncate-88153955.js";import"./Alert-d402928e.js";import"./useTimeout-4c6d789e.js";import"./CloseButton-d0908078.js";import"./StatusIcon-3d3af75a.js";import"./index-a2edb971.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-2ee5bf6e.js";import"./usePopper-7484d105.js";import"./index.esm-336981ff.js";import"./index-7edeacc6.js";import"./Badge-a322da11.js";import"./RangeCalendar-90d0a69e.js";import"./index-61590567.js";import"./useRootClose-4147e0bc.js";import"./TimeInput-cd11d823.js";import"./useDidUpdate-24f30fc5.js";import"./Dialog-4fd81af0.js";import"./index-683fb0e7.js";import"./Drawer-b1603852.js";import"./index-3b5b12e0.js";import"./useUncertainRef-f37cb99b.js";import"./chainedFunction-070f832c.js";import"./FormItem-8bd92bc5.js";import"./index-d1a1662d.js";import"./toast-923c10a7.js";import"./Progress-5c62251c.js";import"./index-4a72f1ca.js";import"./ScrollBar-cc8c4864.js";import"./index-5c080796.js";import"./index-d83ef631.js";import"./mapCloneElement-8b2c829b.js";import"./Switcher-3a0c2c62.js";import"./Tag-b2e6ee28.js";import"./index-c396e082.js";import"./index-9bafd396.js";import"./Upload-f2b9b624.js";import"./index.esm-f919373e.js";import"./chart.constant-d16ea559.js";import"./GrowShrinkTag-c64d92ad.js";import"./react-tooltip.min-9096483d.js";import"./RichTextEditor-6ee29ff1.js";import"./SegmentItemOption-a5df08eb.js";import"./StickyFooter-18ccdafd.js";import"./SvgIcon-fb1c74f5.js";import"./formik.esm-0b8089c1.js";import"./index.esm-4c0a85b7.js";import"./index.esm-e4a4a14e.js";import"./helper-64c17a1c.js";import"./index.esm-6569b1d4.js";import"./ConfirmDialog-bbf84914.js";import"./index.esm-170824bf.js";import"./index.esm-60bbf07c.js";import"./isLastChild-83eb4c23.js";import"./FormDesription-36fc2b54.js";import"./FormRow-4b090125.js";import"./index.esm-4a85cb8c.js";/* empty css              */import"./index.esm-c6586751.js";import"./index.esm-8bd9161a.js";import"./TagCategoryDetailsForm-0451c5d1.js";const I=()=>{var d;const l=S(),[m,h]=a.useState({}),[n,u]=a.useState(null),c=N(r=>{var t,e;return((e=(t=r.auth.user)==null?void 0:t.role)==null?void 0:e.rolePermissions)||[]});a.useEffect(()=>{var x;const r=l.pathname.trim().split("/").pop(),t=P.find(s=>s.title.toLowerCase()===(r==null?void 0:r.toLowerCase())),e=c.filter(s=>s.canView),i=(x=t==null?void 0:t.subMenu)==null?void 0:x.filter(s=>!!e.find(O=>s.title.toLowerCase()==="inventory"||s.title.toLowerCase()==="state/city"||s.title.toLowerCase()==="sources"||L(s,e)||j(s,e)||w(s)||y(s,e))),p={key:t==null?void 0:t.key,title:t==null?void 0:t.title,menu:i,translateKey:t==null?void 0:t.translateKey};h(p)},[l.pathname,c]);const w=(r,t)=>{const e=c.every(i=>i.canManage);return r.title.toLowerCase()==="custom fields"?!!e:!1},j=(r,t)=>r.title.toLowerCase()==="tag categories"?!!t.find(i=>i.master.moduleName.toLowerCase()==="tags"&&i.canView===!0):!1,y=(r,t)=>r.title.toLowerCase()==="organization"?!!t.find(i=>i.master.moduleName.toLowerCase()==="organizations"&&i.canView===!0):!1,L=(r,t)=>{if(r.title.toLowerCase()==="users & roles"){const e=t.find(p=>p.master.moduleName.toLowerCase()==="users"&&p.canView===!0),i=t.find(p=>p.master.moduleName.toLowerCase()==="roles"&&p.canView===!0);return!!e&&!!i}return!1};a.useEffect(()=>{var r;(r=m.menu)!=null&&r.length&&u(g.find(t=>{var e;return t.key===((e=m==null?void 0:m.menu[0])==null?void 0:e.key)||""}))},[m==null?void 0:m.menu]);const k=async(r,t)=>{const e=g.find(i=>i.key===r);u(e)};a.useEffect(()=>{f()},[n==null?void 0:n.key]);const f=()=>{switch(n==null?void 0:n.key){case"appsCrm.organization":return o.jsx(E,{});case"appsCrm.usersrole":return o.jsx(R,{});case"appsCrm.tagCategories":return o.jsx(F,{});case"appsCrm.inventory":return o.jsx(v,{});case"appsCrm.statecity":return o.jsx(A,{});case"appsCrm.customFields":return o.jsx(V,{});case"appsCrm.sources":return o.jsx(b,{})}return o.jsx(o.Fragment,{children:"Bapu"})};return o.jsx(z,{children:o.jsxs("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:[o.jsx("h5",{className:"font-bold",children:"Settings"}),o.jsxs("div",{className:"flex flex-auto min-w-0 gap-2",children:[o.jsx("div",{className:"rounded-md w-[20%] ",children:o.jsx(C,{onSelect:k,children:(d=m.menu)==null?void 0:d.map((r,t)=>o.jsx(C.MenuItem,{eventKey:r.key,children:r.title},t))})}),o.jsx("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:o.jsx("div",{className:"h-full flex flex-auto flex-col",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:f()})})})]})]})})},Rr=I;export{Rr as default};
