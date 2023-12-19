import{al as L,am as N,an as y,ao as D,j as e,a as h,r as j,ap as C,aq as A,as as w,ah as S}from"./index-c6cd2f1f.js";import{C as b,i as f}from"./Views-992fbea4.js";import{e as E}from"./CrmService-a103153a.js";import{A as I}from"./AdaptableCard-4dcc119d.js";import"./Badge-968b10fa.js";import"./chart.constant-3800d1b2.js";import"./chart.config-9c3a5ba5.js";import"./index-1e47d26e.js";import{B as P}from"./Button-6fab1b0a.js";import"./Dialog-356e415b.js";import"./DataTable-95078a43.js";import{D as T}from"./DoubleSidedImage-7e75fdf8.js";import"./Input-6c0ef453.js";import"./GrowShrinkTag-e8aee2f7.js";import"./Skeleton-eaea8848.js";import"./react-tooltip.min-9387fc72.js";import"./RichTextEditor-7b4b86bc.js";import"./SegmentItemOption-084e6771.js";import"./SvgIcon-5ad74fa1.js";import"./Tooltip-72e1f60a.js";import{C as _}from"./Card-03716fe8.js";import{t as k,N as v}from"./toast-0cbca45a.js";import{C as B}from"./ConfirmDialog-91c6533e.js";import{P as M}from"./index.esm-49d30af8.js";import{d as G}from"./index-6fc71728.js";import"./useMergeRef-788c4cb0.js";import"./index-d8ab7d59.js";import"./CloseButton-44d73194.js";import"./index-eb606d8f.js";import"./index.esm-99e22812.js";import"./Pagination-5c5893fe.js";import"./Select-37a7ed4a.js";import"./slicedToArray-b94aca29.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6967a90f.js";import"./floating-ui.dom-bef9cea3.js";import"./get-18fc4c0e.js";import"./toString-6bf941ba.js";import"./_MapCache-30a78bfb.js";import"./index-bfed9162.js";import"./cloneDeep-d7dc419b.js";import"./_getPrototype-d1c09d00.js";import"./_baseIsEqual-d4fafef7.js";import"./index-c8b58d8a.js";import"./isNil-24fefb90.js";import"./Tag-0a427cd3.js";import"./useThemeClass-98e32100.js";import"./usePopper-a5bd9612.js";import"./index.esm-560e89f9.js";import"./index-358db617.js";import"./useTimeout-3d3d6c88.js";import"./StatusIcon-f4e52d54.js";import"./chainedFunction-070f832c.js";const g="crmLeadDetails",H={loading:!0,lead:{}},p=L(`${g}/getLeadById`,async t=>{var s,i;try{return await E(t)}catch(r){throw new Error((i=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:i.message)}}),O=N({name:`${g}/state`,initialState:H,reducers:{},extraReducers:t=>{t.addCase(p.fulfilled,(s,i)=>{s.loading=!1,s.lead=i==null?void 0:i.payload.data}).addCase(p.pending,s=>{s.loading=!0})}}),R=O.reducer,X=y({data:R}),u=D,n=({title:t,value:s})=>e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:`text-gray-700 dark:text-gray-200 font-semibold ${(s==null?void 0:s.length)>50?"overflow-y-auto max-h-20":""}`,children:(s==null?void 0:s.length)>50?`${s==null?void 0:s.substring(0,50)}...`:s})]}),Y=t=>{const s=h(),[i,r]=j.useState(!1),o=C(),a=()=>{r(!1)},d=()=>{r(!0)},c=()=>{r(!1),t.id&&s(G(t.id)),o("/app/crm/leads"),k.push(e.jsx(v,{title:"Successfuly Deleted",type:"success",children:"Lead successfuly deleted"}))};return e.jsxs(e.Fragment,{children:[e.jsx(P,{block:!0,icon:e.jsx(M,{}),variant:"solid",onClick:d,children:"Delete"}),e.jsx(B,{isOpen:i,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:a,onRequestClose:a,onCancel:a,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this Lead will be deleted as well. This action cannot be undone."})})]})},$=({data:t={}})=>e.jsx(_,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[e.jsx(n,{title:"Email",value:t.email}),e.jsx(n,{title:"Name",value:t.firstName}),e.jsx(n,{title:"Location",value:t.address}),e.jsx(n,{title:"Phone",value:t==null?void 0:t.contactNumber}),e.jsx(n,{title:"Title",value:t==null?void 0:t.title})]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(Y,{data:t})})]})});A("crmLeadDetails",X);const $e=()=>{const t=h(),s=w(),{id:i}=s,r=u(l=>{var m,x;return(x=(m=l==null?void 0:l.crmLeadDetails)==null?void 0:m.data)==null?void 0:x.lead}),o=r==null?void 0:r.data,a=u(l=>l.crmLeadDetails.data.loading);j.useEffect(()=>{d()},[]);const d=()=>{i&&t(p(i))},c=({title:l,value:m})=>e.jsxs("div",{children:[e.jsx("span",{children:l}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:m})]});return e.jsxs(b,{className:"h-full",children:[e.jsx(S,{loading:a,children:!f(o)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx($,{data:o})}),e.jsx("div",{className:"w-full",children:e.jsx(I,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(c,{title:"Title",value:o==null?void 0:o.title}),e.jsx("br",{}),e.jsx(c,{title:"Description",value:o==null?void 0:o.description})]})})})]})}),!a&&f(o)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(T,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})};export{$e as default};
