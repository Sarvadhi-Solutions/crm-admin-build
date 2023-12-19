import{al as I,am as k,an as T,ao as E,j as e,a as A,r as b,ap as _,aq as L,at as B,ah as M}from"./index-3e8ea6f8.js";import{C as P,i as D}from"./Views-cc709248.js";import{g as G}from"./CrmService-cfe882b2.js";import{C as H}from"./Card-f647d961.js";import{B as W}from"./Button-76f1570d.js";import{t as j,N as y}from"./toast-7ff9f8c4.js";import{C as $}from"./ConfirmDialog-f6dece80.js";import{P as F}from"./index.esm-9f04789b.js";import{u as C,d as R,g as X,s as Y}from"./index-d35ebe3e.js";import{A as O}from"./AdaptableCard-188bda95.js";import"./Badge-eeedee10.js";import"./chart.constant-85777c77.js";import"./GrowShrinkTag-c04fc29b.js";import"./index-1d299906.js";import"./Dialog-52f96620.js";import"./DataTable-5e8afa6a.js";import{D as V}from"./DoubleSidedImage-a9aeb3e6.js";import"./Input-fcdfcb5e.js";import"./Skeleton-32fefde5.js";import"./react-tooltip.min-3fffe7ac.js";import"./RichTextEditor-aa042621.js";import"./SegmentItemOption-538b3009.js";import"./SvgIcon-bcf0c327.js";import"./Tooltip-cd4efb66.js";import{T as q}from"./TagsList-4c54aa9b.js";import{I as z}from"./index.esm-1a6a7bf2.js";import"./useTimeout-b972535c.js";import"./CloseButton-64a34d57.js";import"./StatusIcon-d01ba88d.js";import"./chainedFunction-070f832c.js";import"./Tag-d66306a5.js";import"./useMergeRef-788c4cb0.js";import"./index-d6f80d82.js";import"./index-6e2d0c70.js";import"./index.esm-5a90f68a.js";import"./Pagination-96c1f0d2.js";import"./Select-3f8173b3.js";import"./slicedToArray-96762860.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-078cc0f3.js";import"./floating-ui.dom-bef9cea3.js";import"./get-cefdaee1.js";import"./toString-11f799aa.js";import"./_MapCache-3ab7a0d7.js";import"./index-0e62fb49.js";import"./cloneDeep-682c094b.js";import"./_getPrototype-2d790319.js";import"./_baseIsEqual-88c079cd.js";import"./index-67b94fe2.js";import"./isNil-9b846371.js";import"./useThemeClass-dcc2d2c0.js";import"./usePopper-43e347b2.js";import"./index.esm-66cb0ca3.js";import"./index-2bce6170.js";import"./Alert-7c38cc47.js";import"./RangeCalendar-39ffd35c.js";import"./useControllableState-7991db37.js";import"./index-82e9f824.js";import"./useRootClose-c072e07a.js";import"./TimeInput-4555e543.js";import"./useUniqueId-28e40ab3.js";import"./useDidUpdate-85d8cc72.js";import"./Drawer-0605b25d.js";import"./index-644264f8.js";import"./useUncertainRef-41a44258.js";import"./index-8a954033.js";import"./FormItem-cd2f592d.js";import"./index-d5aa1b1d.js";import"./index-8027bcf5.js";import"./Progress-11481b60.js";import"./index-c8dfa8be.js";import"./ScrollBar-080eb132.js";import"./index-bf896e9f.js";import"./index-132323ef.js";import"./mapCloneElement-ddf17a05.js";import"./Switcher-0d6c2ebf.js";import"./index-6ac68218.js";import"./index-8dfb88a1.js";import"./index-195fe53b.js";import"./Upload-73ca2c13.js";import"./index.esm-7a0c39a8.js";const S="crmDealDetails",J={loading:!0,deal:{}},h=I(`${S}/getDealById`,async r=>{var s,o;try{return await G(r)}catch(l){throw new Error((o=(s=l==null?void 0:l.response)==null?void 0:s.data)==null?void 0:o.message)}}),K=k({name:`${S}/state`,initialState:J,reducers:{},extraReducers:r=>{r.addCase(h.fulfilled,(s,o)=>{s.loading=!1,s.deal=o==null?void 0:o.payload.data}).addCase(h.pending,s=>{s.loading=!0})}}),Q=K.reducer,U=T({data:Q}),N=E,w=({title:r,value:s})=>{const l=(a,c)=>(a==null?void 0:a.length)>c?`${a.slice(0,c)}
${l(a.slice(c),c)}`:a,t=(s==null?void 0:s.length)>80?l(s,80):s;return e.jsxs("div",{children:[e.jsx("span",{children:r}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:t})]})},Z=r=>{const s=C(i=>{var n,m;return(m=(n=i.crmDeals)==null?void 0:n.data)==null?void 0:m.selectedDeals}),o=A(),[l,t]=b.useState(!1),a=_(),c=()=>{t(!1)},d=()=>{t(!0)},u=async()=>{var n,m,x,f,p;t(!1);const i=await o(R(s.id));await o(X()),(m=(n=i==null?void 0:i.payload)==null?void 0:n.data)!=null&&m.success?(j.push(e.jsx(y,{title:"Successfuly Deleted",type:"success",duration:2500,children:(f=(x=i==null?void 0:i.payload)==null?void 0:x.data)==null?void 0:f.message}),{placement:"top-end"}),a("/app/crm/deals"),o(Y({}))):j.push(e.jsx(y,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(p=i==null?void 0:i.error)==null?void 0:p.message}),{placement:"top-end"}),await o(getDeal())};return e.jsxs(e.Fragment,{children:[e.jsx(W,{block:!0,icon:e.jsx(F,{}),variant:"solid",onClick:d,children:"Delete"}),e.jsx($,{isOpen:l,type:"danger",title:"Delete Deal",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:u,children:e.jsx("p",{children:"Are you sure you want to delete this Deal? All record related to this Deal will be deleted as well. This action cannot be undone."})})]})},v=({data:r={}})=>{var s;return C(o=>{var l,t;return(t=(l=o.crmDeals)==null?void 0:l.data)==null?void 0:t.selectedDeals}),e.jsx(H,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 ",children:[r!=null&&r.title?e.jsx(w,{title:"Title",value:r==null?void 0:r.title}):null,r!=null&&r.leadModel?e.jsx(w,{title:"Connected Lead",value:(s=r==null?void 0:r.leadModel)==null?void 0:s.title}):null]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(Z,{data:r})})]})})};L("crmDealDetails",U);const It=()=>{const r=A(),s=B(),{id:o}=s,l=N(i=>{var n,m;return(m=(n=i==null?void 0:i.crmDealDetails)==null?void 0:n.data)==null?void 0:m.deal}),t=l==null?void 0:l.data,a=N(i=>i.crmDealDetails.data.loading);b.useEffect(()=>{c()},[]);const c=()=>{o&&r(h(o))},d=({title:i,value:n})=>{const x=(p,g)=>p.length>g?`${p.slice(0,g)}
${x(p.slice(g),g)}`:p,f=(n==null?void 0:n.length)>250?x(n,250):n;return e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:i}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-base",style:{maxWidth:"750px",wordWrap:"break-word"},children:f})]})},u=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:u,children:e.jsx(z,{})}),e.jsx("h3",{children:"Deal Details"})]}),e.jsxs(P,{className:"h-full",children:[e.jsx(M,{loading:a,children:!D(t)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx(v,{data:t})}),e.jsx("div",{className:"w-full",children:e.jsx(O,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(d,{title:"Budget",value:t.budget}),e.jsx("br",{}),t!=null&&t.title?e.jsx(d,{title:"Title",value:t==null?void 0:t.title}):null,e.jsx("br",{}),t!=null&&t.description?e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Description",value:t==null?void 0:t.description}),e.jsx("br",{})]}):null,(t==null?void 0:t.tags.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tags",value:""}),e.jsx(q,{fullDisplay:!0,tags:t==null?void 0:t.tags})]}):null]})})})]})}),!a&&D(t)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(V,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{It as default};
