import{al as k,am as L,an as T,ao as E,j as t,a as A,r as w,ap as _,aq as v,at as B,ah as P}from"./index-c4854441.js";import{C as $,i as j}from"./Views-a7a22f5b.js";import{f as M}from"./CrmService-2767e679.js";import{C as G}from"./Card-694d2290.js";import{A as H}from"./index-7f0011a9.js";import{B as W}from"./Button-01aee70f.js";import{t as y,N as C}from"./toast-f5971c5e.js";import{C as F}from"./ConfirmDialog-2a50d9e0.js";import{Q as R}from"./index.esm-600eab3e.js";import{u as b,d as X,g as N,s as Y}from"./index-0d06fcfb.js";import{A as O}from"./AdaptableCard-c03e443e.js";import"./Badge-ab812656.js";import"./chart.constant-33f94cf9.js";import"./chart.config-3e4495ec.js";import"./Dialog-1a78eb06.js";import"./DataTable-c212c69f.js";import{D as z}from"./DoubleSidedImage-b7d8a391.js";import"./Input-6e1fc018.js";import"./GrowShrinkTag-b6ec35ba.js";import"./Skeleton-7820a1d7.js";import"./react-tooltip.min-5a60ee3f.js";import"./RichTextEditor-a1431fa0.js";import"./SegmentItemOption-e39e8725.js";import"./SvgIcon-7439607c.js";import"./Tooltip-ff9677e2.js";import{T as V}from"./TagsList-07470663.js";import{I as q}from"./index.esm-7b7148ac.js";import"./useMergeRef-788c4cb0.js";import"./useTimeout-52e2a342.js";import"./CloseButton-481ca768.js";import"./StatusIcon-9c6ff3de.js";import"./chainedFunction-070f832c.js";import"./index-12fb9f3c.js";import"./index-2a967f86.js";import"./index.esm-626783fa.js";import"./Pagination-91f29835.js";import"./Select-a3dcfbd9.js";import"./slicedToArray-5b2b8266.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./floating-ui.dom-bef9cea3.js";import"./get-1a41de3d.js";import"./toString-9f124ebf.js";import"./_MapCache-cce6ed45.js";import"./index-199241b3.js";import"./cloneDeep-57418006.js";import"./_getPrototype-37ec97c4.js";import"./_baseIsEqual-7cb4339e.js";import"./index-706b8eda.js";import"./isNil-c3c7dc62.js";import"./Tag-ca3c125e.js";import"./useThemeClass-58ccaa98.js";import"./usePopper-36d997d0.js";import"./index.esm-40a48121.js";import"./index-611f00f8.js";import"./Alert-c43b1341.js";import"./RangeCalendar-60cea8df.js";import"./useControllableState-f590672a.js";import"./index-4960ea6a.js";import"./useRootClose-7d26ea3b.js";import"./TimeInput-028532aa.js";import"./useUniqueId-ef880a97.js";import"./useDidUpdate-d042343d.js";import"./Drawer-459fd2f8.js";import"./index-516e2d91.js";import"./useUncertainRef-3dcc2864.js";import"./index-337c98e1.js";import"./FormItem-f088ddbb.js";import"./index-b9e48651.js";import"./index-69125dab.js";import"./Progress-1eb48ff9.js";import"./index-6afc7114.js";import"./ScrollBar-7a627a75.js";import"./index-fee22201.js";import"./index-1b4d8032.js";import"./mapCloneElement-7f5ffe17.js";import"./Switcher-9b266edd.js";import"./index-2020af5b.js";import"./index-954fdf33.js";import"./index-b126a36b.js";import"./Upload-1e5004d3.js";import"./index.esm-e743b778.js";const I="crmContactDetails",U={loading:!0,contact:{}},g=k(`${I}/getContactById`,async i=>{var e,r;try{return await M(i)}catch(a){throw new Error((r=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:r.message)}}),Q=L({name:`${I}/state`,initialState:U,reducers:{},extraReducers:i=>{i.addCase(g.fulfilled,(e,r)=>{e.loading=!1,e.contact=r==null?void 0:r.payload.data}).addCase(g.pending,e=>{e.loading=!0})}}),J=Q.reducer,K=T({data:J}),D=E,x=({title:i,value:e})=>{const a=(n,l)=>(n==null?void 0:n.length)>l?`${n.slice(0,l)}
${a(n.slice(l),l)}`:n,o=(e==null?void 0:e.length)>80?a(e,80):e;return t.jsxs("div",{children:[t.jsx("span",{children:i}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:o})]})},Z=i=>{const e=b(s=>{var m,p;return(p=(m=s.crmContact)==null?void 0:m.data)==null?void 0:p.selectedContact}),r=A(),[a,o]=w.useState(!1),n=_(),l=()=>{o(!1)},c=()=>{o(!0)},d=async()=>{var m,p,f;o(!1);const s=await r(X(e.id));await r(N()),(m=s==null?void 0:s.payload)!=null&&m.success?(y.push(t.jsx(C,{title:"Successfuly Deleted",type:"success",duration:2500,children:(p=s==null?void 0:s.payload)==null?void 0:p.message}),{placement:"top-end"}),n("/app/crm/contacts"),r(Y({}))):y.push(t.jsx(C,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(f=s==null?void 0:s.error)==null?void 0:f.message}),{placement:"top-end"}),await r(N())};return t.jsxs(t.Fragment,{children:[t.jsx(W,{block:!0,icon:t.jsx(R,{}),variant:"solid",onClick:c,children:"Delete"}),t.jsx(F,{isOpen:a,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:d,children:t.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},tt=i=>{var r,a;const e=[i.address,(r=i.cityData)==null?void 0:r.cityName,(a=i.stateData)==null?void 0:a.stateName,i.zipcode].filter(Boolean).join(", ");return e.length>0?e:"Location not provided"},et=({data:i={}})=>{var o,n;const e=b(l=>{var c,d;return(d=(c=l.crmContact)==null?void 0:c.data)==null?void 0:d.selectedContact}),a=((l,c)=>{const d=l.charAt(0).toUpperCase(),s=c.charAt(0).toUpperCase();return`${d}${s}`})(i.firstName||"",i.lastName||"");return t.jsx(G,{children:t.jsxs("div",{className:"flex flex-col xl:justify-between min-w-[300px] mx-auto p-4",children:[t.jsxs("div",{className:"flex xl:flex-col items-center gap-4",children:[t.jsx(H,{style:{width:"90px",height:"90px"},shape:"circle",children:t.jsx("span",{style:{fontSize:"30px",marginTop:"50px"},children:a})}),t.jsx("h4",{className:"font-bold",children:i.name})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-8",children:[t.jsx(x,{title:"First Name",value:i.firstName}),t.jsx(x,{title:"Last Name",value:i.lastName}),i.address||i.cityData||i.stateData||i.zipcode?t.jsx(x,{title:"Location",value:tt(i)}):null,e!=null&&e.stateData?t.jsx(x,{title:"State",value:(o=e==null?void 0:e.stateData)==null?void 0:o.stateName}):null,e!=null&&e.cityData?t.jsx(x,{title:"City",value:(n=e==null?void 0:e.cityData)==null?void 0:n.cityName}):null,i.title?t.jsx(x,{title:"Title",value:i==null?void 0:i.title}):null]}),t.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:t.jsx(Z,{data:i})})]})})};v("crmContactDetails",K);const Te=()=>{const i=A(),e=B(),{id:r}=e,a=D(s=>{var m,p;return(p=(m=s==null?void 0:s.crmContactDetails)==null?void 0:m.data)==null?void 0:p.contact}),o=a==null?void 0:a.data,n=D(s=>s.crmContactDetails.data.loading);w.useEffect(()=>{l()},[]);const l=()=>{r&&i(g(r))},c=({title:s,value:m})=>{const f=(u,h)=>u.length>h?`${u.slice(0,h)}
${f(u.slice(h),h)}`:u,S=m.length>250?f(m,250):m;return t.jsxs("div",{children:[t.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:s}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-base",style:{maxWidth:"750px",wordWrap:"break-word"},children:S})]})},d=()=>{window.history.back()};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[t.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:d,children:t.jsx(q,{})}),t.jsx("h3",{children:"Contact Details"})]}),t.jsxs($,{className:"h-full",children:[t.jsx(P,{loading:n,children:!j(o)&&t.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[t.jsx("div",{children:t.jsx(et,{data:o})}),t.jsx("div",{className:"w-full",children:t.jsx(O,{children:t.jsxs("div",{className:"flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto",children:[t.jsx(c,{title:"Email",value:o.email}),t.jsx("br",{}),o.title?t.jsx(c,{title:"Title",value:o==null?void 0:o.title}):null,t.jsx("br",{}),t.jsx(c,{title:"Phone",value:o==null?void 0:o.contactNumber}),t.jsx("br",{}),o.description?t.jsx(c,{title:"Description",value:o==null?void 0:o.description}):null,t.jsx("br",{}),o.tags.length>0?t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Tags",value:""}),t.jsx(V,{fullDisplay:!0,tags:o==null?void 0:o.tags})]}):null]})})})]})}),!n&&j(o)&&t.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[t.jsx(z,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No user found!"}),t.jsx("h3",{className:"mt-8",children:"No user found!"})]})]})]})};export{Te as default};
