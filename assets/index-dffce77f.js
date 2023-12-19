import{w as S,r as a,u as N,J as P,j as o}from"./index-82a4cdcd.js";import{A as z}from"./AdaptableCard-f3359e05.js";import{M as C}from"./index-d64ec43f.js";import{D as g}from"./Views-5e6cd1d6.js";import{C as V}from"./CustomFields-38fd29dd.js";import{I as v}from"./Inventory-2a3c51a4.js";import{O as E}from"./Organization-88d94406.js";import{S as b}from"./Source-4dfa2785.js";import{S as A}from"./StateCity-ff42dc49.js";import{T as F}from"./TagCategories-34fc8f22.js";import R from"./UsersRoles-e510c109.js";import"./Card-6707ff6e.js";import"./index-971eae45.js";import"./index.esm-9eb3698a.js";import"./useUniqueId-cc8af61f.js";import"./toString-b2e07e9a.js";import"./index-b111a719.js";import"./useControllableState-3caf27a6.js";import"./CrmService-a7ee7c84.js";import"./Button-0e96ba54.js";import"./Input-8b535fd4.js";import"./isNil-ad4b9ef6.js";import"./get-71f6a308.js";import"./_MapCache-54b9aafe.js";import"./debounce-2ded1513.js";import"./cloneDeep-914ca532.js";import"./_getPrototype-b764c861.js";import"./DataTable-a2b72651.js";import"./index-4baab89c.js";import"./index.esm-4533a1af.js";import"./Pagination-7722c7db.js";import"./Select-eb8671ae.js";import"./slicedToArray-d75d4238.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-26dffdfb.js";import"./floating-ui.dom-4bc0055b.js";import"./index-c91d029f.js";import"./_baseIsEqual-2b2683ef.js";import"./Skeleton-d36fd097.js";import"./index-6801b2e9.js";import"./checkEditUpdate-b8787a18.js";import"./moment-fbc5633a.js";import"./useThemeClass-38f80a2c.js";import"./TextTruncate-c40fceb4.js";import"./Alert-62262f10.js";import"./useTimeout-da6ce9b0.js";import"./CloseButton-d6bfe260.js";import"./StatusIcon-5a72f149.js";import"./index-c281b544.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-5f04ccef.js";import"./usePopper-150e7e1f.js";import"./index.esm-e60cf8ff.js";import"./index-dff75ec8.js";import"./Badge-df87bdc2.js";import"./RangeCalendar-823e8aaa.js";import"./index-320abfaa.js";import"./useRootClose-ca0d0d80.js";import"./TimeInput-10fd264b.js";import"./useDidUpdate-f06e2487.js";import"./Dialog-992e1d56.js";import"./index-5ca2f98c.js";import"./Drawer-4bb376d7.js";import"./index-0428064e.js";import"./useUncertainRef-0553f5d8.js";import"./chainedFunction-070f832c.js";import"./FormItem-f5087afb.js";import"./index-c11d92d4.js";import"./toast-4eea8663.js";import"./Progress-7d1211e0.js";import"./index-7a0e0b9f.js";import"./ScrollBar-b2904e17.js";import"./index-7b9d9e5f.js";import"./index-04da13bb.js";import"./mapCloneElement-c79fb68e.js";import"./Switcher-a7e522ef.js";import"./Tag-d5568307.js";import"./index-c63c62bb.js";import"./index-30e041a1.js";import"./Upload-341a9a0e.js";import"./index.esm-bb858611.js";import"./chart.constant-af606830.js";import"./GrowShrinkTag-eea444bd.js";import"./react-tooltip.min-b828bcbe.js";import"./RichTextEditor-ac808d95.js";import"./SegmentItemOption-4c0660d9.js";import"./StickyFooter-3b624d91.js";import"./SvgIcon-d14f51e5.js";import"./formik.esm-fbd7cbeb.js";import"./index.esm-c1a3c0a2.js";import"./index.esm-f6409e84.js";import"./helper-64c17a1c.js";import"./index.esm-325e1aa4.js";import"./ConfirmDialog-4e779e5f.js";import"./index.esm-f3449157.js";import"./index.esm-ca8acdf3.js";import"./FormDesription-b818f051.js";import"./FormRow-2363f447.js";import"./index.esm-c35e6e6d.js";import"./index-27de0572.js";/* empty css              */import"./TagCategoryDetailsForm-ba09ea3c.js";const I=()=>{var d;const l=S(),[m,h]=a.useState({}),[p,u]=a.useState(null),c=N(r=>{var t,e;return((e=(t=r.auth.user)==null?void 0:t.role)==null?void 0:e.rolePermissions)||[]});a.useEffect(()=>{var x;const r=l.pathname.trim().split("/").pop(),t=P.find(s=>s.title.toLowerCase()===(r==null?void 0:r.toLowerCase())),e=c.filter(s=>s.canView),i=(x=t==null?void 0:t.subMenu)==null?void 0:x.filter(s=>!!e.find(O=>s.title.toLowerCase()==="inventory"||s.title.toLowerCase()==="state/city"||s.title.toLowerCase()==="sources"||L(s,e)||j(s,e)||w(s)||y(s,e))),n={key:t==null?void 0:t.key,title:t==null?void 0:t.title,menu:i,translateKey:t==null?void 0:t.translateKey};h(n)},[l.pathname,c]);const w=(r,t)=>{const e=c.every(i=>i.canManage);return r.title.toLowerCase()==="custom fields"?!!e:!1},j=(r,t)=>r.title.toLowerCase()==="tag categories"?!!t.find(i=>i.master.moduleName.toLowerCase()==="tags"&&i.canView===!0):!1,y=(r,t)=>r.title.toLowerCase()==="organization"?!!t.find(i=>i.master.moduleName.toLowerCase()==="organizations"&&i.canView===!0):!1,L=(r,t)=>{if(r.title.toLowerCase()==="users & roles"){const e=t.find(n=>n.master.moduleName.toLowerCase()==="users"&&n.canView===!0),i=t.find(n=>n.master.moduleName.toLowerCase()==="roles"&&n.canView===!0);return!!e&&!!i}return!1};a.useEffect(()=>{var r;(r=m.menu)!=null&&r.length&&u(g.find(t=>{var e;return t.key===((e=m==null?void 0:m.menu[0])==null?void 0:e.key)||""}))},[m==null?void 0:m.menu]);const k=async(r,t)=>{const e=g.find(i=>i.key===r);u(e)};a.useEffect(()=>{f()},[p==null?void 0:p.key]);const f=()=>{switch(p==null?void 0:p.key){case"appsCrm.organization":return o.jsx(E,{});case"appsCrm.usersrole":return o.jsx(R,{});case"appsCrm.tagCategories":return o.jsx(F,{});case"appsCrm.inventory":return o.jsx(v,{});case"appsCrm.statecity":return o.jsx(A,{});case"appsCrm.customFields":return o.jsx(V,{});case"appsCrm.sources":return o.jsx(b,{})}return o.jsx(o.Fragment,{children:"Bapu"})};return o.jsx(z,{children:o.jsxs("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:[o.jsx("h5",{className:"font-bold",children:"Settings"}),o.jsxs("div",{className:"flex flex-auto min-w-0 gap-2",children:[o.jsx("div",{className:"rounded-md w-[20%] ",children:o.jsx(C,{onSelect:k,children:(d=m.menu)==null?void 0:d.map((r,t)=>o.jsx(C.MenuItem,{eventKey:r.key,children:r.title},t))})}),o.jsx("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:o.jsx("div",{className:"h-full flex flex-auto flex-col",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:f()})})})]})]})})},Ar=I;export{Ar as default};
