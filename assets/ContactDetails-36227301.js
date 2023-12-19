import{al as b,am as k,an as v,ao as L,j as t,a as w,r as I,ap as T,aq as E,at as _,ah as P}from"./index-63e2e8ff.js";import{C as B,i as j}from"./Views-003281bd.js";import{e as M}from"./CrmService-5cf7bda2.js";import{C as $}from"./Card-7fb7e828.js";import{A as G}from"./index-5d246f90.js";import{B as C}from"./Button-a97ffbe7.js";import{t as y,N}from"./toast-48646e27.js";import{C as H}from"./ConfirmDialog-85686491.js";import{P as W}from"./index.esm-efc46191.js";import{u as X,d as Y,g as D,s as F}from"./index-622138d6.js";import{I as O}from"./index.esm-bf97ef38.js";import{A as R}from"./AdaptableCard-65dd0b5a.js";import"./Badge-de40248e.js";import"./chart.constant-00b2142c.js";import"./chart.config-fae70cd3.js";import"./Dialog-90630d0c.js";import"./DataTable-8bbaa7db.js";import{D as V}from"./DoubleSidedImage-4bfb1378.js";import"./Input-dfd69504.js";import"./GrowShrinkTag-d41201f8.js";import"./Skeleton-2b11309e.js";import"./react-tooltip.min-65e07196.js";import"./RichTextEditor-d1fdb2b6.js";import"./SegmentItemOption-d01d574f.js";import"./SvgIcon-86e7b073.js";import"./Tooltip-c31d4795.js";import{T as z}from"./TagsList-6b503295.js";import"./useMergeRef-788c4cb0.js";import"./useTimeout-00dc7814.js";import"./CloseButton-6c8026ae.js";import"./StatusIcon-496b8ef9.js";import"./chainedFunction-070f832c.js";import"./index-dc0ea509.js";import"./index-fc16ff84.js";import"./index.esm-afe8a978.js";import"./Pagination-71030a82.js";import"./Select-694ed63b.js";import"./slicedToArray-242864f8.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-f67a5c65.js";import"./floating-ui.dom-bef9cea3.js";import"./get-493353e0.js";import"./toString-5c4cd996.js";import"./_MapCache-dd2b8df3.js";import"./index-ec94574b.js";import"./cloneDeep-1c41923d.js";import"./_getPrototype-98c5f3ae.js";import"./_baseIsEqual-29b249d3.js";import"./index-771912a2.js";import"./isNil-f6fc7ccb.js";import"./Tag-9f31dd76.js";import"./useThemeClass-efe3e673.js";import"./usePopper-bf13ca3c.js";import"./index.esm-bc87981d.js";import"./index-cdfb36ad.js";import"./Alert-47e0529e.js";import"./RangeCalendar-c01929fd.js";import"./useControllableState-92071fcc.js";import"./index-71c2614d.js";import"./useRootClose-4a0ada14.js";import"./TimeInput-fe7c7f1c.js";import"./useUniqueId-dc180cd8.js";import"./useDidUpdate-5e426114.js";import"./Drawer-0661c241.js";import"./index-8e59a616.js";import"./useUncertainRef-35321eb8.js";import"./index-a7f7d486.js";import"./FormItem-c438ca28.js";import"./index-00f543c1.js";import"./index-5f225953.js";import"./Progress-0c57823e.js";import"./index-8b2c7272.js";import"./ScrollBar-1cd8f673.js";import"./index-112a1f58.js";import"./index-ffea5472.js";import"./mapCloneElement-78a18daf.js";import"./Switcher-cc5c1dad.js";import"./index-d9139b01.js";import"./index-e7933672.js";import"./index-2d299461.js";import"./Upload-b29b86af.js";import"./index.esm-c2fbb27e.js";const S="crmContactDetails",q={loading:!0,contact:{}},g=b(`${S}/getContactById`,async e=>{var s,r;try{return await M(e)}catch(i){throw new Error((r=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:r.message)}}),U=k({name:`${S}/state`,initialState:q,reducers:{},extraReducers:e=>{e.addCase(g.fulfilled,(s,r)=>{s.loading=!1,s.contact=r==null?void 0:r.payload.data}).addCase(g.pending,s=>{s.loading=!0})}}),J=U.reducer,K=v({data:J}),A=L,h=({title:e,value:s})=>{const i=(n,l)=>n.length>l?`${n.slice(0,l)}
${i(n.slice(l),l)}`:n,o=s.length>80?i(s,80):s;return t.jsxs("div",{children:[t.jsx("span",{children:e}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:o})]})},Q=e=>{const s=w(),[r,i]=I.useState(!1),o=X(a=>a.crmContact.data.selectedContact),n=T(),l=()=>{i(!1)},p=()=>{i(!0)},c=async()=>{var x,u,d;i(!1);const a=await s(Y(o.id));await s(D()),(x=a==null?void 0:a.payload)!=null&&x.success?(y.push(t.jsx(N,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=a==null?void 0:a.payload)==null?void 0:u.message}),{placement:"top-end"}),n("/app/crm/contacts"),s(F({}))):y.push(t.jsx(N,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(d=a==null?void 0:a.error)==null?void 0:d.message}),{placement:"top-end"}),await s(D())},m=()=>{n("/app/crm/Contacts")};return t.jsxs(t.Fragment,{children:[t.jsx(C,{block:!0,icon:t.jsx(W,{}),variant:"solid",onClick:p,children:"Delete"}),t.jsx(C,{block:!0,icon:t.jsx(O,{}),onClick:m,children:"Back"}),t.jsx(H,{isOpen:r,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:c,children:t.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},Z=e=>{var r,i;const s=[e.address,(r=e.cityData)==null?void 0:r.cityName,(i=e.stateData)==null?void 0:i.stateName,e.zipcode].filter(Boolean).join(", ");return s.length>0?s:"Location not provided"},tt=({data:e={}})=>{const r=((i,o)=>{const n=i.charAt(0).toUpperCase(),l=o.charAt(0).toUpperCase();return`${n}${l}`})(e.firstName||"",e.lastName||"");return t.jsx($,{children:t.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[t.jsxs("div",{className:"flex xl:flex-col items-center gap-4",children:[t.jsx(G,{style:{width:"90px",height:"90px"},shape:"circle",children:t.jsx("span",{style:{fontSize:"30px",marginTop:"50px"},children:r})}),t.jsx("h4",{className:"font-bold",children:e.name})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[t.jsx(h,{title:"First Name",value:e.firstName}),t.jsx(h,{title:"Last Name",value:e.lastName}),e.address||e.cityData||e.stateData||e.zipcode?t.jsx(h,{title:"Location",value:Z(e)}):null,e.title?t.jsx(h,{title:"Title",value:e==null?void 0:e.title}):null]}),t.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:t.jsx(Q,{data:e})})]})})};E("crmContactDetails",K);const ve=()=>{const e=w(),s=_(),{id:r}=s,i=A(c=>{var m,a;return(a=(m=c==null?void 0:c.crmContactDetails)==null?void 0:m.data)==null?void 0:a.contact}),o=i==null?void 0:i.data,n=A(c=>c.crmContactDetails.data.loading);I.useEffect(()=>{l()},[]);const l=()=>{r&&e(g(r))},p=({title:c,value:m})=>{const x=(d,f)=>d.length>f?`${d.slice(0,f)}
${x(d.slice(f),f)}`:d,u=m.length>250?x(m,250):m;return t.jsxs("div",{children:[t.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:c}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-base",style:{maxWidth:"750px",wordWrap:"break-word"},children:u})]})};return t.jsxs(B,{className:"h-full",children:[t.jsx(P,{loading:n,children:!j(o)&&t.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[t.jsx("div",{children:t.jsx(tt,{data:o})}),t.jsx("div",{className:"w-full",children:t.jsx(R,{children:t.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[t.jsx(p,{title:"Email",value:o.email}),o.title?t.jsx(p,{title:"Title",value:o==null?void 0:o.title}):null,t.jsx("br",{}),t.jsx(p,{title:"Phone",value:o==null?void 0:o.contactNumber}),o.description?t.jsx(p,{title:"Description",value:o==null?void 0:o.description}):null,t.jsx("br",{}),o.tags.length>0?t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Tags",value:""}),t.jsx(z,{fullDisplay:!0,tags:o==null?void 0:o.tags})]}):null]})})})]})}),!n&&j(o)&&t.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[t.jsx(V,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),t.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})};export{ve as default};
