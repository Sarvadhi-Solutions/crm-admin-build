import{w as N,r as a,u as P,J as z,j as o}from"./index-dd430329.js";import{A as V}from"./AdaptableCard-aab5007a.js";import{M as C}from"./index-1e6ea035.js";import{D as g}from"./Views-969b82ff.js";import{C as v}from"./CustomFields-c30846f0.js";import{I as E}from"./Inventory-330f65e2.js";import{O as b}from"./Organization-55b6fc3f.js";import{S as A}from"./Source-c083728e.js";import{S as F}from"./StateCity-f754a18b.js";import{T as M}from"./TagCategories-4a283298.js";import R from"./UsersRoles-d58c7be5.js";import{S as I}from"./Status-0f08cd5b.js";import"./Card-7303f1d6.js";import"./index-5ad45768.js";import"./index.esm-8a75a52d.js";import"./useUniqueId-abd97dae.js";import"./toString-45c45754.js";import"./index-f4b545fd.js";import"./useControllableState-3d893585.js";import"./CrmService-01e274f6.js";import"./Button-477f78d2.js";import"./Input-2ae5f21f.js";import"./isNil-ba5dd027.js";import"./get-f4ce3646.js";import"./_MapCache-787d0444.js";import"./debounce-ea0d38a8.js";import"./cloneDeep-7dd50aa7.js";import"./_getPrototype-a234e5e0.js";import"./DataTable-b28d1e98.js";import"./index-03531cf7.js";import"./index.esm-cdf5a269.js";import"./Pagination-a183170a.js";import"./Select-a638e837.js";import"./slicedToArray-2ef3e469.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-7a029c07.js";import"./floating-ui.dom-4bc0055b.js";import"./index-4953df19.js";import"./_baseIsEqual-da2ece8d.js";import"./Skeleton-0435d2db.js";import"./index-387d3e60.js";import"./checkEditUpdate-de727179.js";import"./moment-fbc5633a.js";import"./useThemeClass-c67d9527.js";import"./TextTruncate-104140ac.js";import"./Alert-40c008c9.js";import"./useTimeout-8cc7d1d0.js";import"./CloseButton-be129446.js";import"./StatusIcon-1c9455ce.js";import"./index-1bec26b5.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-4f6c910c.js";import"./usePopper-ad874619.js";import"./index.esm-075cf0f7.js";import"./index-59261ffa.js";import"./Badge-81ec6aad.js";import"./RangeCalendar-c7dd44b3.js";import"./index-e8664bdc.js";import"./useRootClose-c59d452a.js";import"./TimeInput-d81057f6.js";import"./useDidUpdate-0f1ffc2f.js";import"./Dialog-4e683d85.js";import"./index-ab79e894.js";import"./Drawer-851dfb0e.js";import"./index-273b73f2.js";import"./useUncertainRef-b3ab91cc.js";import"./chainedFunction-070f832c.js";import"./FormItem-c5d9f12d.js";import"./index-ad4d109a.js";import"./toast-7520b143.js";import"./Progress-65bff4d5.js";import"./index-9685374c.js";import"./ScrollBar-efe95462.js";import"./index-a7fee107.js";import"./index-0bd5fcc8.js";import"./mapCloneElement-c4c40043.js";import"./Switcher-46a64a8e.js";import"./Tag-a01d1848.js";import"./index-c88fea13.js";import"./index-f57ef06e.js";import"./Upload-79efa750.js";import"./index.esm-7dc546a5.js";import"./chart.constant-b89d4d9a.js";import"./GrowShrinkTag-7614f549.js";import"./react-tooltip.min-90b0da4a.js";import"./RichTextEditor-ab8d719f.js";import"./SegmentItemOption-4eb9f4d2.js";import"./StickyFooter-8f985469.js";import"./SvgIcon-0e5d590b.js";import"./formik.esm-97667c88.js";import"./index.esm-9e83db4a.js";import"./index.esm-27140c16.js";import"./helper-64c17a1c.js";import"./index.esm-2e0dcea3.js";import"./ConfirmDialog-fcfff7a2.js";import"./useGetModule-2a1cfd6d.js";import"./index-5a74c47f.js";import"./index.esm-1de3d473.js";import"./index.esm-2c41f11e.js";import"./FormDesription-400d98a5.js";import"./FormRow-cd11c86e.js";import"./index.esm-edf6f637.js";import"./index-7cf2442a.js";/* empty css              */import"./TagCategoryDetailsForm-511dd81f.js";import"./colorPicker-7696eb08.js";const O=()=>{var d;const l=N(),[m,w]=a.useState({}),[p,u]=a.useState(null),c=P(r=>{var t,e;return((e=(t=r.auth.user)==null?void 0:t.role)==null?void 0:e.rolePermissions)||[]});a.useEffect(()=>{var x;const r=l.pathname.trim().split("/").pop(),t=z.find(s=>s.title.toLowerCase()===(r==null?void 0:r.toLowerCase())),e=c.filter(s=>s.canView),i=(x=t==null?void 0:t.subMenu)==null?void 0:x.filter(s=>!!e.find(U=>s.title.toLowerCase()==="inventory"||s.title.toLowerCase()==="state/city"||s.title.toLowerCase()==="sources"||L(s,e)||y(s,e)||h(s)||j(s)||S(s,e))),n={key:t==null?void 0:t.key,title:t==null?void 0:t.title,menu:i,translateKey:t==null?void 0:t.translateKey};w(n)},[l.pathname,c]);const h=(r,t)=>{const e=c.every(i=>i.canManage);return r.title.toLowerCase()==="custom fields"?!!e:!1},j=(r,t)=>{const e=c.every(i=>i.canManage);return r.title.toLowerCase()==="status"?!!e:!1},y=(r,t)=>r.title.toLowerCase()==="tag categories"?!!t.find(i=>i.master.moduleName.toLowerCase()==="tags"&&i.canView===!0):!1,S=(r,t)=>r.title.toLowerCase()==="organization"?!!t.find(i=>i.master.moduleName.toLowerCase()==="organizations"&&i.canView===!0):!1,L=(r,t)=>{if(r.title.toLowerCase()==="users & roles"){const e=t.find(n=>n.master.moduleName.toLowerCase()==="users"&&n.canView===!0),i=t.find(n=>n.master.moduleName.toLowerCase()==="roles"&&n.canView===!0);return!!e&&!!i}return!1};a.useEffect(()=>{var r;(r=m.menu)!=null&&r.length&&u(g.find(t=>{var e;return t.key===((e=m==null?void 0:m.menu[0])==null?void 0:e.key)||""}))},[m==null?void 0:m.menu]);const k=async(r,t)=>{const e=g.find(i=>i.key===r);u(e)};a.useEffect(()=>{f()},[p==null?void 0:p.key]);const f=()=>{switch(p==null?void 0:p.key){case"appsCrm.organization":return o.jsx(b,{});case"appsCrm.usersrole":return o.jsx(R,{});case"appsCrm.tagCategories":return o.jsx(M,{});case"appsCrm.inventory":return o.jsx(E,{});case"appsCrm.statecity":return o.jsx(F,{});case"appsCrm.customFields":return o.jsx(v,{});case"appsCrm.status":return o.jsx(I,{});case"appsCrm.sources":return o.jsx(A,{})}return o.jsx(o.Fragment,{children:"Bapu"})};return o.jsx(V,{children:o.jsxs("div",{className:"app-layout-stacked-side flex flex-auto flex-col",children:[o.jsx("h5",{className:"font-bold",children:"Settings"}),o.jsxs("div",{className:"flex flex-auto min-w-0 gap-2",children:[o.jsx("div",{className:"rounded-md w-[20%] ",children:o.jsx(C,{onSelect:k,children:(d=m.menu)==null?void 0:d.map((r,t)=>o.jsx(C.MenuItem,{eventKey:r.key,children:r.title},t))})}),o.jsx("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:o.jsx("div",{className:"h-full flex flex-auto flex-col",children:o.jsx(a.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:f()})})})]})]})})},Tr=O;export{Tr as default};
