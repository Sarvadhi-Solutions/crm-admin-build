import{am as I,an as k,ao as T,ap as E,j as e,a as A,r as b,al as _,aq as L,at as B,ah as M}from"./index-54ca42fc.js";import{C as P,i as D}from"./Views-af87b139.js";import{g as G}from"./CrmService-8ac215cb.js";import{C as H}from"./Card-a23c20fb.js";import{B as W}from"./Button-acf424a5.js";import{t as j,N as y}from"./toast-1afc7125.js";import{C as $}from"./ConfirmDialog-f773c53f.js";import{P as F}from"./index.esm-7dd42512.js";import{u as C,d as R,g as X,s as Y}from"./index-c43757e6.js";import{A as O}from"./AdaptableCard-e97ca17a.js";import"./Badge-7ea1afdb.js";import"./chart.constant-84220a07.js";import"./GrowShrinkTag-5a5f87d0.js";import"./index-08c9f209.js";import"./Dialog-72a815cb.js";import"./DataTable-141d6e94.js";import{D as V}from"./DoubleSidedImage-9d154f8e.js";import"./Input-6f6282ca.js";import"./Skeleton-55912bfd.js";import"./react-tooltip.min-98a8b674.js";import"./RichTextEditor-185e9ccc.js";import"./SegmentItemOption-e0dc151d.js";import"./SvgIcon-8abb18ba.js";import"./Tooltip-a3ba2e51.js";import{T as q}from"./TagsList-bb5a8021.js";import{I as z}from"./index.esm-9f3122c2.js";import"./useTimeout-d4fb46a2.js";import"./CloseButton-56ccab87.js";import"./StatusIcon-eb02e210.js";import"./chainedFunction-070f832c.js";import"./Tag-d6f79b22.js";import"./useMergeRef-788c4cb0.js";import"./index-230d55bf.js";import"./index-d0d30922.js";import"./index.esm-b6692532.js";import"./Pagination-88f4b10a.js";import"./Select-dcced844.js";import"./slicedToArray-2fd1756e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-ed9860a8.js";import"./floating-ui.dom-4bc0055b.js";import"./get-a4d4cc1a.js";import"./toString-f912f267.js";import"./_MapCache-b329896e.js";import"./index-a7ae3561.js";import"./cloneDeep-46668e83.js";import"./_getPrototype-54304e5c.js";import"./_baseIsEqual-eb499731.js";import"./index-9ad1eb7e.js";import"./isNil-0746ee1a.js";import"./useThemeClass-b78ac37a.js";import"./usePopper-312a6569.js";import"./index.esm-7e7c8219.js";import"./index-ad0ca857.js";import"./Alert-f71ef527.js";import"./RangeCalendar-c9c9eebc.js";import"./useControllableState-55e860e9.js";import"./index-7ffe65fc.js";import"./useRootClose-1059bf09.js";import"./TimeInput-f25f9402.js";import"./useUniqueId-30ecd952.js";import"./useDidUpdate-d97fe6c3.js";import"./Drawer-5c784020.js";import"./index-77f8daa6.js";import"./useUncertainRef-ba5f1b2f.js";import"./index-39cde6be.js";import"./FormItem-01929b19.js";import"./index-1c856de8.js";import"./index-59d863f4.js";import"./Progress-757dfe5e.js";import"./index-3396de21.js";import"./ScrollBar-bdc4d5a9.js";import"./index-2299d96e.js";import"./index-fa71559d.js";import"./mapCloneElement-cf9acdd6.js";import"./Switcher-d1660486.js";import"./index-65de947e.js";import"./index-bc1b91de.js";import"./index-3c2d94f0.js";import"./Upload-928853bc.js";import"./index.esm-4302db3a.js";const S="crmDealDetails",J={loading:!0,deal:{}},h=I(`${S}/getDealById`,async r=>{var s,o;try{return await G(r)}catch(l){throw new Error((o=(s=l==null?void 0:l.response)==null?void 0:s.data)==null?void 0:o.message)}}),K=k({name:`${S}/state`,initialState:J,reducers:{},extraReducers:r=>{r.addCase(h.fulfilled,(s,o)=>{s.loading=!1,s.deal=o==null?void 0:o.payload.data}).addCase(h.pending,s=>{s.loading=!0})}}),Q=K.reducer,U=T({data:Q}),N=E,w=({title:r,value:s})=>{const l=(a,c)=>(a==null?void 0:a.length)>c?`${a.slice(0,c)}
${l(a.slice(c),c)}`:a,t=(s==null?void 0:s.length)>80?l(s,80):s;return e.jsxs("div",{children:[e.jsx("span",{children:r}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:t})]})},Z=r=>{const s=C(i=>{var n,m;return(m=(n=i.crmDeals)==null?void 0:n.data)==null?void 0:m.selectedDeals}),o=A(),[l,t]=b.useState(!1),a=_(),c=()=>{t(!1)},d=()=>{t(!0)},u=async()=>{var n,m,x,f,p;t(!1);const i=await o(R(s.id));await o(X()),(m=(n=i==null?void 0:i.payload)==null?void 0:n.data)!=null&&m.success?(j.push(e.jsx(y,{title:"Successfuly Deleted",type:"success",duration:2500,children:(f=(x=i==null?void 0:i.payload)==null?void 0:x.data)==null?void 0:f.message}),{placement:"top-end"}),a("/app/crm/deals"),o(Y({}))):j.push(e.jsx(y,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(p=i==null?void 0:i.error)==null?void 0:p.message}),{placement:"top-end"}),await o(getDeal())};return e.jsxs(e.Fragment,{children:[e.jsx(W,{block:!0,icon:e.jsx(F,{}),variant:"solid",onClick:d,children:"Delete"}),e.jsx($,{isOpen:l,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:u,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})]})},v=({data:r={}})=>{var s;return C(o=>{var l,t;return(t=(l=o.crmDeals)==null?void 0:l.data)==null?void 0:t.selectedDeals}),e.jsx(H,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 ",children:[r!=null&&r.title?e.jsx(w,{title:"Title",value:r==null?void 0:r.title}):null,r!=null&&r.leadModel?e.jsx(w,{title:"Connected Lead",value:(s=r==null?void 0:r.leadModel)==null?void 0:s.title}):null]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(Z,{data:r})})]})})};L("crmDealDetails",U);const It=()=>{const r=A(),s=B(),{id:o}=s,l=N(i=>{var n,m;return(m=(n=i==null?void 0:i.crmDealDetails)==null?void 0:n.data)==null?void 0:m.deal}),t=l==null?void 0:l.data,a=N(i=>i.crmDealDetails.data.loading);b.useEffect(()=>{c()},[]);const c=()=>{o&&r(h(o))},d=({title:i,value:n})=>{const x=(p,g)=>p.length>g?`${p.slice(0,g)}
${x(p.slice(g),g)}`:p,f=(n==null?void 0:n.length)>250?x(n,250):n;return e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:i}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-base",style:{maxWidth:"750px",wordWrap:"break-word"},children:f})]})},u=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:u,children:e.jsx(z,{})}),e.jsx("h3",{children:"Deal Details"})]}),e.jsxs(P,{className:"h-full",children:[e.jsx(M,{loading:a,children:!D(t)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(v,{data:t})}),e.jsx("div",{className:"w-full",children:e.jsx(O,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(d,{title:"Budget",value:t.budget}),e.jsx("br",{}),t!=null&&t.title?e.jsx(d,{title:"Title",value:t==null?void 0:t.title}):null,e.jsx("br",{}),t!=null&&t.description?e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Description",value:t==null?void 0:t.description}),e.jsx("br",{})]}):null,(t==null?void 0:t.tags.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tags",value:""}),e.jsx(q,{fullDisplay:!0,tags:t==null?void 0:t.tags})]}):null]})})})]})}),!a&&D(t)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(V,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{It as default};
