import{al as L,am as N,an as y,ao as D,j as e,a as h,r as j,ap as C,aq as A,as as w,ah as S}from"./index-7b0349c6.js";import{C as b,i as f}from"./Views-c6671a9d.js";import{e as E}from"./CrmService-d23a3034.js";import{A as I}from"./AdaptableCard-d9b587b8.js";import"./Badge-50330686.js";import"./chart.constant-5db83fe7.js";import"./chart.config-9269f4c8.js";import"./index-2cc854d3.js";import{B as P}from"./Button-9fa3d2fc.js";import"./Dialog-9d79d85c.js";import"./DataTable-e83a4ee2.js";import{D as T}from"./DoubleSidedImage-3b87d6b1.js";import"./Input-5106ef66.js";import"./GrowShrinkTag-b17882fa.js";import"./Skeleton-8e99ae89.js";import"./react-tooltip.min-ac98ee83.js";import"./RichTextEditor-609b88fc.js";import"./SegmentItemOption-fbddb88d.js";import"./SvgIcon-3d1d8062.js";import"./Tooltip-a61fe545.js";import{C as _}from"./Card-a848a8eb.js";import{t as k,N as v}from"./toast-184c7e0a.js";import{C as B}from"./ConfirmDialog-916d697a.js";import{P as M}from"./index.esm-70dc7df8.js";import{d as G}from"./index-db695170.js";import"./useMergeRef-788c4cb0.js";import"./index-39084392.js";import"./CloseButton-68e6949e.js";import"./index-0df82d35.js";import"./index.esm-b503a71c.js";import"./Pagination-2aca965e.js";import"./Select-1f2320ab.js";import"./slicedToArray-a6cb1158.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./floating-ui.dom-bef9cea3.js";import"./get-3f8daa47.js";import"./toString-a66e4ffc.js";import"./_MapCache-a209650f.js";import"./index-f606ec14.js";import"./cloneDeep-43c01ed5.js";import"./_getPrototype-57ad14e0.js";import"./_baseIsEqual-0ec018e0.js";import"./index-cec25fe7.js";import"./isNil-2a409f2e.js";import"./Tag-a0bc44e6.js";import"./useThemeClass-3c06ce00.js";import"./usePopper-ea1a26c2.js";import"./index.esm-8b94bd99.js";import"./index-ba238736.js";import"./useTimeout-187593ce.js";import"./StatusIcon-11c7c844.js";import"./chainedFunction-070f832c.js";const g="crmLeadDetails",H={loading:!0,lead:{}},p=L(`${g}/getLeadById`,async t=>{var s,i;try{return await E(t)}catch(r){throw new Error((i=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:i.message)}}),O=N({name:`${g}/state`,initialState:H,reducers:{},extraReducers:t=>{t.addCase(p.fulfilled,(s,i)=>{s.loading=!1,s.lead=i==null?void 0:i.payload.data}).addCase(p.pending,s=>{s.loading=!0})}}),R=O.reducer,X=y({data:R}),u=D,n=({title:t,value:s})=>e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:`text-gray-700 dark:text-gray-200 font-semibold ${(s==null?void 0:s.length)>50?"overflow-y-auto max-h-20":""}`,children:(s==null?void 0:s.length)>50?`${s==null?void 0:s.substring(0,50)}...`:s})]}),Y=t=>{const s=h(),[i,r]=j.useState(!1),o=C(),a=()=>{r(!1)},d=()=>{r(!0)},c=()=>{r(!1),t.id&&s(G(t.id)),o("/app/crm/leads"),k.push(e.jsx(v,{title:"Successfuly Deleted",type:"success",children:"Lead successfuly deleted"}))};return e.jsxs(e.Fragment,{children:[e.jsx(P,{block:!0,icon:e.jsx(M,{}),variant:"solid",onClick:d,children:"Delete"}),e.jsx(B,{isOpen:i,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:a,onRequestClose:a,onCancel:a,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this Lead will be deleted as well. This action cannot be undone."})})]})},$=({data:t={}})=>e.jsx(_,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[e.jsx(n,{title:"Email",value:t.email}),e.jsx(n,{title:"Name",value:t.firstName}),e.jsx(n,{title:"Location",value:t.address}),e.jsx(n,{title:"Phone",value:t==null?void 0:t.contactNumber}),e.jsx(n,{title:"Title",value:t==null?void 0:t.title})]}),e.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:e.jsx(Y,{data:t})})]})});A("crmLeadDetails",X);const $e=()=>{const t=h(),s=w(),{id:i}=s,r=u(l=>{var m,x;return(x=(m=l==null?void 0:l.crmLeadDetails)==null?void 0:m.data)==null?void 0:x.lead}),o=r==null?void 0:r.data,a=u(l=>l.crmLeadDetails.data.loading);j.useEffect(()=>{d()},[]);const d=()=>{i&&t(p(i))},c=({title:l,value:m})=>e.jsxs("div",{children:[e.jsx("span",{children:l}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:m})]});return e.jsxs(b,{className:"h-full",children:[e.jsx(S,{loading:a,children:!f(o)&&e.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[e.jsx("div",{children:e.jsx($,{data:o})}),e.jsx("div",{className:"w-full",children:e.jsx(I,{children:e.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[e.jsx(c,{title:"Title",value:o==null?void 0:o.title}),e.jsx("br",{}),e.jsx(c,{title:"Description",value:o==null?void 0:o.description})]})})})]})}),!a&&f(o)&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx(T,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),e.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})};export{$e as default};
