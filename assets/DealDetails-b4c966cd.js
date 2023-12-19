import{al as I,am as k,an as T,ao as E,j as e,a as A,r as b,ap as _,aq as L,at as B,ah as M}from"./index-50945288.js";import{C as P,i as D}from"./Views-e48a0a66.js";import{g as G}from"./CrmService-881504ae.js";import{C as H}from"./Card-17f3ebb7.js";import{B as W}from"./Button-a4fa8688.js";import{t as j,N as y}from"./toast-0629f8e1.js";import{C as $}from"./ConfirmDialog-f8d7dfae.js";import{P as F}from"./index.esm-35c8061b.js";import{u as C,d as R,g as X,s as Y}from"./index-7d7ec6e0.js";import{A as O}from"./AdaptableCard-37b0a974.js";import"./Badge-87c37bf0.js";import"./chart.constant-6527ff35.js";import"./GrowShrinkTag-e4832176.js";import"./index-08f2a96a.js";import"./Dialog-280fa962.js";import"./DataTable-c079131a.js";import{D as V}from"./DoubleSidedImage-c7ac38f9.js";import"./Input-5d3c36c8.js";import"./Skeleton-98ed1e07.js";import"./react-tooltip.min-b2458dce.js";import"./RichTextEditor-bb6579d5.js";import"./SegmentItemOption-e0f0e697.js";import"./SvgIcon-de8a838d.js";import"./Tooltip-99e477d6.js";import{T as q}from"./TagsList-ae5ad131.js";import{I as z}from"./index.esm-fdff7325.js";import"./useTimeout-5cba84cc.js";import"./CloseButton-decff0a2.js";import"./StatusIcon-9afd30aa.js";import"./chainedFunction-070f832c.js";import"./Tag-3255b65c.js";import"./useMergeRef-788c4cb0.js";import"./index-7b5c526a.js";import"./index-9b97383d.js";import"./index.esm-3cc4021a.js";import"./Pagination-42900a32.js";import"./Select-e0a2b45a.js";import"./slicedToArray-3ae8c07d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-08fe5c41.js";import"./floating-ui.dom-4bc0055b.js";import"./get-ca844a7a.js";import"./toString-e5e109b2.js";import"./_MapCache-912d1d86.js";import"./index-95b77929.js";import"./cloneDeep-24ac0e6a.js";import"./_getPrototype-07d72d17.js";import"./_baseIsEqual-cec24c9c.js";import"./index-4a909b70.js";import"./isNil-83ca8e72.js";import"./useThemeClass-d0c07393.js";import"./usePopper-8e8e78a4.js";import"./index.esm-1eb25fdc.js";import"./index-029bd1b0.js";import"./Alert-1064718b.js";import"./RangeCalendar-2f6aee1b.js";import"./useControllableState-0304948a.js";import"./index-b29bcf89.js";import"./useRootClose-1625d8df.js";import"./TimeInput-e7cfaf12.js";import"./useUniqueId-a4f516e3.js";import"./useDidUpdate-f354fe92.js";import"./Drawer-f88f653e.js";import"./index-4454a30f.js";import"./useUncertainRef-f5473f8d.js";import"./index-88cefea0.js";import"./FormItem-9eae519c.js";import"./index-d8003bc1.js";import"./index-e8ea964c.js";import"./Progress-d351084f.js";import"./index-706126b4.js";import"./ScrollBar-f9956c02.js";import"./index-fef60a21.js";import"./index-1f1e4ab8.js";import"./mapCloneElement-0b38fc45.js";import"./Switcher-b557b818.js";import"./index-d0be26bd.js";import"./index-a09a61c9.js";import"./index-72140e3f.js";import"./Upload-1dc04c00.js";import"./index.esm-87cd19ea.js";const S="crmDealDetails",J={loading:!0,deal:{}},h=I(`${S}/getDealById`,async r=>{var s,o;try{return await G(r)}catch(l){throw new Error((o=(s=l==null?void 0:l.response)==null?void 0:s.data)==null?void 0:o.message)}}),K=k({name:`${S}/state`,initialState:J,reducers:{},extraReducers:r=>{r.addCase(h.fulfilled,(s,o)=>{s.loading=!1,s.deal=o==null?void 0:o.payload.data}).addCase(h.pending,s=>{s.loading=!0})}}),Q=K.reducer,U=T({data:Q}),N=E,w=({title:r,value:s})=>{const l=(a,c)=>(a==null?void 0:a.length)>c?`${a.slice(0,c)}
${l(a.slice(c),c)}`:a,t=(s==null?void 0:s.length)>80?l(s,80):s;return e.jsxs("div",{children:[e.jsx("span",{children:r}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:t})]})},Z=r=>{const s=C(i=>{var n,m;return(m=(n=i.crmDeals)==null?void 0:n.data)==null?void 0:m.selectedDeals}),o=A(),[l,t]=b.useState(!1),a=_(),c=()=>{t(!1)},d=()=>{t(!0)},u=async()=>{var n,m,x,f,p;t(!1);const i=await o(R(s.id));await o(X()),(m=(n=i==null?void 0:i.payload)==null?void 0:n.data)!=null&&m.success?(j.push(e.jsx(y,{title:"Successfuly Deleted",type:"success",duration:2500,children:(f=(x=i==null?void 0:i.payload)==null?void 0:x.data)==null?void 0:f.message}),{placement:"top-end"}),a("/app/crm/deals"),o(Y({}))):j.push(e.jsx(y,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(p=i==null?void 0:i.error)==null?void 0:p.message}),{placement:"top-end"}),await o(getDeal())};return e.jsxs(e.Fragment,{children:[e.jsx(W,{block:!0,icon:e.jsx(F,{}),variant:"solid",onClick:d,children:"Delete"}),e.jsx($,{isOpen:l,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:u,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})]})},v=({data:r={}})=>{var s;return C(o=>{var l,t;return(t=(l=o.crmDeals)==null?void 0:l.data)==null?void 0:t.selectedDeals}),e.jsx(H,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 ",children:[r!=null&&r.title?e.jsx(w,{title:"Title",value:r==null?void 0:r.title}):null,r!=null&&r.leadModel?e.jsx(w,{title:"Connected Lead",value:(s=r==null?void 0:r.leadModel)==null?void 0:s.title}):null]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(Z,{data:r})})]})})};L("crmDealDetails",U);const It=()=>{const r=A(),s=B(),{id:o}=s,l=N(i=>{var n,m;return(m=(n=i==null?void 0:i.crmDealDetails)==null?void 0:n.data)==null?void 0:m.deal}),t=l==null?void 0:l.data,a=N(i=>i.crmDealDetails.data.loading);b.useEffect(()=>{c()},[]);const c=()=>{o&&r(h(o))},d=({title:i,value:n})=>{const x=(p,g)=>p.length>g?`${p.slice(0,g)}
${x(p.slice(g),g)}`:p,f=(n==null?void 0:n.length)>250?x(n,250):n;return e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:i}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-base",style:{maxWidth:"750px",wordWrap:"break-word"},children:f})]})},u=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:u,children:e.jsx(z,{})}),e.jsx("h3",{children:"Deal Details"})]}),e.jsxs(P,{className:"h-full",children:[e.jsx(M,{loading:a,children:!D(t)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(v,{data:t})}),e.jsx("div",{className:"w-full",children:e.jsx(O,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(d,{title:"Budget",value:t.budget}),e.jsx("br",{}),t!=null&&t.title?e.jsx(d,{title:"Title",value:t==null?void 0:t.title}):null,e.jsx("br",{}),t!=null&&t.description?e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Description",value:t==null?void 0:t.description}),e.jsx("br",{})]}):null,(t==null?void 0:t.tags.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tags",value:""}),e.jsx(q,{fullDisplay:!0,tags:t==null?void 0:t.tags})]}):null]})})})]})}),!a&&D(t)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(V,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{It as default};
