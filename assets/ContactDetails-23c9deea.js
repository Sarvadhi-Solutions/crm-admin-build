import{al as L,am as T,an as E,ao as v,j as t,a as A,r as w,ap as _,aq as F,at as B,ah as P}from"./index-4fc5ac15.js";import{C as $,i as y}from"./Views-63244708.js";import{f as M}from"./CrmService-81e45160.js";import{C as G}from"./Card-a6171fd9.js";import{A as H}from"./index-ade064c2.js";import{B as W}from"./Button-7cd7d853.js";import{t as C,N}from"./toast-b752ab56.js";import{C as R}from"./ConfirmDialog-a24226b8.js";import{Q as X}from"./index.esm-4a8db888.js";import{u as I,d as Y,g as D,s as O}from"./index-c501e7f3.js";import{A as z}from"./AdaptableCard-1a3c680d.js";import"./Badge-19df83fb.js";import"./chart.constant-abefb831.js";import"./chart.config-099ad096.js";import"./Dialog-5d93bc0a.js";import"./DataTable-814cf5c6.js";import{D as V}from"./DoubleSidedImage-d2256429.js";import"./Input-3854a622.js";import"./GrowShrinkTag-093ec060.js";import"./Skeleton-cef4628a.js";import"./react-tooltip.min-5552979b.js";import"./RichTextEditor-21962299.js";import"./SegmentItemOption-32fcaaa1.js";import"./SvgIcon-cd84e0c4.js";import"./Tooltip-56ad0384.js";import{T as q}from"./TagsList-c9bbc304.js";import{I as U}from"./index.esm-c1c52aef.js";import"./useMergeRef-788c4cb0.js";import"./useTimeout-a3a009a3.js";import"./CloseButton-f8a68d34.js";import"./StatusIcon-8eee481a.js";import"./chainedFunction-070f832c.js";import"./index-c0cd6553.js";import"./index-829995d1.js";import"./index.esm-e8eb3d5a.js";import"./Pagination-1e482b61.js";import"./Select-9180a255.js";import"./slicedToArray-a75daa7f.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-b436f755.js";import"./floating-ui.dom-bef9cea3.js";import"./get-a17bfffb.js";import"./toString-73aeebea.js";import"./_MapCache-dfc091e9.js";import"./index-2e6c9811.js";import"./cloneDeep-715f167a.js";import"./_getPrototype-20c9b4ef.js";import"./_baseIsEqual-049acdee.js";import"./index-ec319dcf.js";import"./isNil-fa9ab935.js";import"./Tag-4b3b0483.js";import"./useThemeClass-9af86e8e.js";import"./usePopper-eba58dea.js";import"./index.esm-e8f8cad7.js";import"./index-e53d26a4.js";import"./Alert-7075f24d.js";import"./RangeCalendar-5dd6ce1b.js";import"./useControllableState-74f1ae93.js";import"./index-f81c3042.js";import"./useRootClose-4eeaabec.js";import"./TimeInput-a955edd7.js";import"./useUniqueId-f42ae95b.js";import"./useDidUpdate-2beb4a11.js";import"./Drawer-8dc2fd43.js";import"./index-3903fc17.js";import"./useUncertainRef-41ed3c8c.js";import"./index-8ced4f1f.js";import"./FormItem-e8ff9726.js";import"./index-d3c2681a.js";import"./index-99b428ba.js";import"./Progress-352773c6.js";import"./index-5dc9acd3.js";import"./ScrollBar-abdf3e1e.js";import"./index-1ece77e8.js";import"./index-5597ebd0.js";import"./mapCloneElement-08e14627.js";import"./Switcher-900c0698.js";import"./index-dbee2c90.js";import"./index-e5b54797.js";import"./index-534786cf.js";import"./Upload-fe7ae2cb.js";import"./index.esm-6e8bde72.js";const S="crmContactDetails",K={loading:!0,contact:{}},g=L(`${S}/getContactById`,async i=>{var e,o;try{return await M(i)}catch(r){throw new Error((o=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:o.message)}}),Q=T({name:`${S}/state`,initialState:K,reducers:{},extraReducers:i=>{i.addCase(g.fulfilled,(e,o)=>{e.loading=!1,e.contact=o==null?void 0:o.payload.data}).addCase(g.pending,e=>{e.loading=!0})}}),J=Q.reducer,Z=E({data:J}),b=v,u=({title:i,value:e})=>{const r=(l,c)=>(l==null?void 0:l.length)>c?`${l.slice(0,c)}
${r(l.slice(c),c)}`:l,s=(e==null?void 0:e.length)>80?r(e,80):e;return t.jsxs("div",{children:[t.jsx("span",{children:i}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:s})]})},tt=i=>{const e=I(a=>{var n,m;return(m=(n=a.crmContact)==null?void 0:n.data)==null?void 0:m.selectedContact}),o=A(),[r,s]=w.useState(!1),l=_(),c=()=>{s(!1)},p=()=>{s(!0)},x=async()=>{var n,m,d;s(!1);const a=await o(Y(e.id));await o(D()),(n=a==null?void 0:a.payload)!=null&&n.success?(C.push(t.jsx(N,{title:"Successfuly Deleted",type:"success",duration:2500,children:(m=a==null?void 0:a.payload)==null?void 0:m.message}),{placement:"top-end"}),l("/app/crm/contacts"),o(O({}))):C.push(t.jsx(N,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(d=a==null?void 0:a.error)==null?void 0:d.message}),{placement:"top-end"}),await o(D())};return t.jsxs(t.Fragment,{children:[t.jsx(W,{block:!0,icon:t.jsx(X,{}),variant:"solid",onClick:p,children:"Delete"}),t.jsx(R,{isOpen:r,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:x,children:t.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},et=i=>{var o,r;const e=[i.address,(o=i.cityData)==null?void 0:o.cityName,(r=i.stateData)==null?void 0:r.stateName,i.zipcode].filter(Boolean).join(", ");return e.length>0?e:"Location not provided"},st=({data:i={}})=>{var s,l;const e=I(c=>{var p,x;return(x=(p=c.crmContact)==null?void 0:p.data)==null?void 0:x.selectedContact}),r=((c,p)=>{const x=c.charAt(0).toUpperCase(),a=p.charAt(0).toUpperCase();return`${x}${a}`})(i.firstName||"",i.lastName||"");return t.jsx(G,{children:t.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[t.jsxs("div",{className:"flex xl:flex-col items-center gap-4",children:[t.jsx(H,{style:{width:"90px",height:"90px"},shape:"circle",children:t.jsx("span",{style:{fontSize:"30px",marginTop:"50px"},children:r})}),t.jsx("h4",{className:"font-bold",children:i.name})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[t.jsx(u,{title:"First Name",value:i.firstName}),t.jsx(u,{title:"Last Name",value:i.lastName}),i.address||i.cityData||i.stateData||i.zipcode?t.jsx(u,{title:"Location",value:et(i)}):null,e!=null&&e.stateData?t.jsx(u,{title:"State",value:(s=e==null?void 0:e.stateData)==null?void 0:s.stateName}):null,e!=null&&e.cityData?t.jsx(u,{title:"City",value:(l=e==null?void 0:e.cityData)==null?void 0:l.cityName}):null,i.title?t.jsx(u,{title:"Title",value:i==null?void 0:i.title}):null]}),t.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:t.jsx(tt,{data:i})})]})})};F("crmContactDetails",Z);const Ee=()=>{var a;const i=A(),e=B(),{id:o}=e,r=b(n=>{var m,d;return(d=(m=n==null?void 0:n.crmContactDetails)==null?void 0:m.data)==null?void 0:d.contact}),s=r==null?void 0:r.data,l=b(n=>n.crmContactDetails.data.loading);w.useEffect(()=>{c()},[]);const c=()=>{o&&i(g(o))},p=({title:n,value:m})=>{const j=(f,h)=>f.length>h?`${f.slice(0,h)}
${j(f.slice(h),h)}`:f,k=m.length>250?j(m,250):m;return t.jsxs("div",{children:[t.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:n}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-base",style:{maxWidth:"750px",wordWrap:"break-word"},children:k})]})},x=()=>{window.history.back()};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[t.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:x,children:t.jsx(U,{})}),t.jsx("h3",{children:"Contact Details"})]}),t.jsxs($,{className:"h-full",children:[t.jsx(P,{loading:l,children:!y(s)&&t.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[t.jsx("div",{children:t.jsx(st,{data:s})}),t.jsx("div",{className:"w-full",children:t.jsx(z,{children:t.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[t.jsx(p,{title:"Email",value:s.email}),t.jsx("br",{}),s.title?t.jsx(p,{title:"Title",value:s==null?void 0:s.title}):null,t.jsx("br",{}),t.jsx(p,{title:"Phone",value:s==null?void 0:s.contactNumber}),t.jsx("br",{}),s.description?t.jsx(p,{title:"Description",value:s==null?void 0:s.description}):null,t.jsx("br",{}),s.tags.length>0?t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Tags",value:""}),t.jsx(q,{fullDisplay:!0,tags:s==null?void 0:s.tags})]}):null,t.jsx("br",{}),s.contactFields.length>0?t.jsx(t.Fragment,{children:(a=s.contactFields)==null?void 0:a.map((n,m)=>{var d;return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:(d=n.customKey)==null?void 0:d.name,value:n.value}),m<s.contactFields.length-1&&t.jsx("br",{})]})})}):null,t.jsx("br",{})]})})})]})}),!l&&y(s)&&t.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[t.jsx(V,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),t.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Ee as default};
