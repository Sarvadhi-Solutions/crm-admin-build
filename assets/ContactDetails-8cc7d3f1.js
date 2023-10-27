import{al as M,am as R,an as _,ao as q,j as t,a as A,r as f,ap as K,aq as B,at as O,ah as W}from"./index-9ca3e01c.js";import{C as G,i as I}from"./Views-42612634.js";import{f as H}from"./CrmService-2dec582b.js";import{A as X}from"./AdaptableCard-058cf2b7.js";import"./Badge-85dac0e9.js";import"./chart.constant-dacdcfee.js";import"./GrowShrinkTag-ceab12e2.js";import{A as Y}from"./index-494119d6.js";import{B as U}from"./Button-da045d3b.js";import"./Dialog-cdd3831f.js";import{D as V}from"./DataTable-6d44b31f.js";import"./Input-e68710e2.js";import"./Skeleton-3bd3e76c.js";import"./react-tooltip.min-1b885ad9.js";import"./RichTextEditor-cec5da6d.js";import"./SegmentItemOption-5201e7ab.js";import"./SvgIcon-28360984.js";import{T as b}from"./Tooltip-07d43494.js";import{I as J}from"./index.esm-46248bce.js";import{u as P,d as Q,g as S,s as Z}from"./index-4dbbb138.js";import{C as ee}from"./ConfirmDialog-3ad3de30.js";import{C as te}from"./Card-c0916875.js";import{t as L,N as k}from"./toast-de05ed0a.js";import{T as se}from"./TagsList-62b7dc42.js";import{P as oe}from"./index.esm-6b1f01ae.js";import{S as ie}from"./StatusCapsule-15a95640.js";import{T as D}from"./TextTruncate-6c44105c.js";import{c as w}from"./cloneDeep-7fa59919.js";import"./Alert-f817fdbe.js";import"./RangeCalendar-8cadcee6.js";import"./index-9410771e.js";import"./index-2a568809.js";import"./Drawer-5ebdae63.js";import"./index-82b50102.js";import"./FormItem-1b070625.js";import"./toString-8635ec69.js";import"./index-c083248d.js";import"./index-774679c3.js";import"./index-bc261936.js";import"./Pagination-66996428.js";import"./Progress-fbf7b18f.js";import"./index-c6c028e4.js";import"./ScrollBar-cac6bbf2.js";import"./index-6d5fd88b.js";import"./Select-36a3bae0.js";import"./index-6cd38ffa.js";import"./Switcher-2d0cc416.js";import"./index-318debb8.js";import"./index-c1f0d4d3.js";import"./Tag-17d38476.js";import"./index-594d80e6.js";import"./index-87d3c333.js";import"./Upload-527c5521.js";import{r as re,u as y,a as ne,m as N}from"./index-748e5ecb.js";import"./useMergeRef-788c4cb0.js";import"./index-1a0b7dc8.js";import"./CloseButton-6b9b0cd5.js";import"./index-4242d6d4.js";import"./isNil-86adf5c4.js";import"./get-a0df1ab5.js";import"./_MapCache-f937324f.js";import"./floating-ui.dom-bef9cea3.js";import"./_baseIsEqual-0e3d4282.js";import"./useThemeClass-7969df0f.js";import"./usePopper-17a543ac.js";import"./index.esm-b4bc7f1b.js";import"./index-cfbd213c.js";import"./useTimeout-d0655f05.js";import"./StatusIcon-f3e19ac0.js";import"./chainedFunction-070f832c.js";import"./_getPrototype-8ba892ec.js";import"./useControllableState-b48849fb.js";import"./useRootClose-c82559b3.js";import"./TimeInput-16be473b.js";import"./useUniqueId-6324d8a0.js";import"./useDidUpdate-a2f69c3c.js";import"./useUncertainRef-9f46c49d.js";import"./slicedToArray-c0178fc0.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-11b6685e.js";import"./mapCloneElement-8ceaa9bf.js";import"./index.esm-adadbc61.js";import"./index.esm-cc380773.js";const z="crmContactDetails",le={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ce={loading:!0,contact:{},tableData:le},v=M(`${z}/getContactById`,async e=>{var s,l;try{return await H(e)}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),ae=R({name:`${z}/state`,initialState:ce,reducers:{},extraReducers:e=>{e.addCase(v.fulfilled,(s,l)=>{var n,p,c,m;s.loading=!1,s.contact=l==null?void 0:l.payload.data,s.tableData.total=(m=(c=(p=(n=l.payload)==null?void 0:n.data)==null?void 0:p.data)==null?void 0:c.leadModels)==null?void 0:m.length}).addCase(v.pending,s=>{s.loading=!0})}}),me=ae.reducer,pe=_({data:me}),E=q,h=({title:e,value:s})=>{const n=(c,m)=>(c==null?void 0:c.length)>m?`${c.slice(0,m)}
${n(c.slice(m),m)}`:c,p=(s==null?void 0:s.length)>80?n(s,80):s;return t.jsxs("div",{children:[t.jsx("span",{children:e}),t.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{maxWidth:"500px",wordWrap:"break-word"},children:p})]})},xe=e=>{const s=P(i=>{var a,g;return(g=(a=i.crmContact)==null?void 0:a.data)==null?void 0:g.selectedContact}),l=A(),[n,p]=f.useState(!1),c=K(),m=()=>{p(!1)},u=()=>{p(!0)},x=async()=>{var a,g,C;p(!1);const i=await l(Q(s.id));await l(S()),(a=i==null?void 0:i.payload)!=null&&a.success?(L.push(t.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=i==null?void 0:i.payload)==null?void 0:g.message}),{placement:"top-end"}),c("/app/crm/contacts"),l(Z({}))):L.push(t.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(C=i==null?void 0:i.error)==null?void 0:C.message}),{placement:"top-end"}),await l(S())};return t.jsxs(t.Fragment,{children:[t.jsx(U,{block:!0,icon:t.jsx(oe,{}),variant:"solid",onClick:u,children:"Delete"}),t.jsx(ee,{isOpen:n,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:m,onRequestClose:m,onCancel:m,onConfirm:x,children:t.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},ue=e=>{var l,n;const s=[e==null?void 0:e.address,(l=e==null?void 0:e.cityData)==null?void 0:l.cityName,(n=e==null?void 0:e.stateData)==null?void 0:n.stateName,e==null?void 0:e.zipcode].filter(Boolean).join(", ");return s.length>0?s:"Location not provided"},de=({data:e={}})=>{var p,c,m;const s=P(u=>{var x,i;return(i=(x=u.crmContact)==null?void 0:x.data)==null?void 0:i.selectedContact}),n=((u,x)=>{const i=u.charAt(0).toUpperCase(),a=x.charAt(0).toUpperCase();return`${i}${a}`})(e.firstName||"",e.lastName||"");return t.jsx(te,{className:"w-1/3 h-fit max-h-fit",children:t.jsxs("div",{className:"flex flex-col xl:justify-between ",children:[t.jsxs("div",{className:"flex xl:flex-col items-center gap-2",children:[t.jsx(Y,{style:{width:"60px",height:"60px",alignItems:"center",justifyContent:"center"},shape:"circle",children:t.jsx("span",{style:{fontSize:"24px",marginTop:20},children:n})}),t.jsx("h4",{className:"font-bold",children:e.name})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3",children:[t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"First Name",value:e.firstName})}),t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"Last Name",value:e.lastName})}),e.title&&t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"Title",value:e.title})}),e.email&&t.jsx(h,{title:"Email",value:e.email}),e!=null&&e.address||e!=null&&e.cityData||e!=null&&e.stateData||e!=null&&e.zipcode?t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"Location",value:ue(e)})}):null,(e==null?void 0:e.contactNumber)&&t.jsx(h,{title:"Phone",value:e==null?void 0:e.contactNumber}),(s==null?void 0:s.cityData)&&t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"City",value:s==null?void 0:s.cityData.cityName})}),(s==null?void 0:s.stateData)&&t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"State",value:(p=s==null?void 0:s.stateData)==null?void 0:p.stateName})}),(e==null?void 0:e.description)&&t.jsx("div",{className:"col-span-1",children:t.jsx(h,{title:"Description",value:e==null?void 0:e.description})}),(e==null?void 0:e.tags.length)>0?t.jsxs("div",{className:"col-span-1",children:[t.jsx(h,{title:"Tags",value:""}),t.jsx(se,{fullDisplay:!0,tags:(e==null?void 0:e.tags)||[]})]}):null,((c=e==null?void 0:e.contactFields)==null?void 0:c.length)>0?t.jsx(t.Fragment,{children:(m=e==null?void 0:e.contactFields)==null?void 0:m.map((u,x)=>{var i;return t.jsxs("div",{className:"col-span-1",children:[u.value&&t.jsx(h,{title:(i=u.customKey)==null?void 0:i.name,value:u.value}),x<e.contactFields.length-1&&u.value&&t.jsx("br",{})]})})}):null]}),t.jsx("div",{className:"mt-4 flex flex-col xl:flex-row gap-2",children:t.jsx(xe,{data:e})})]})})};B("crmLeads",re);const he=()=>{const e=A(),s=y(d=>{var o,r,j,T;return(T=(j=(r=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:r.contact)==null?void 0:j.data)==null?void 0:T.leadModels}),l=y(d=>{var o,r;return(r=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:r.loading}),n=y(d=>{var o,r;return(r=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:r.tableData}),{pageIndex:p,pageSize:c,sort:m,query:u,total:x}=y(d=>{var o,r;return(r=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:r.tableData}),i=f.useCallback(()=>{e(ne())},[e]);f.useEffect(()=>(i(),()=>{window.location.pathname.includes("lead")||e(N({...n,query:""}))}),[i]);const a=f.useMemo(()=>({pageIndex:p,pageSize:c,sort:m,query:u,total:x}),[p,c,m,u,x]),g=f.useMemo(()=>[{header:"Title",accessorKey:"title",cell:o=>{const r=o.row.original.title;return t.jsx(b,{title:r,children:t.jsx(D,{text:r,maxLength:20})},r)}},{header:"Budget",accessorKey:"budget",cell:o=>{const r=o.row.original;return t.jsx(D,{text:r.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:o=>{const r=o.row.original;return t.jsx(ie,{status:r.status})}},{header:"Reason",accessorKey:"reason",cell:o=>{var j;const r=(j=o.row.original)==null?void 0:j.reason;return r?t.jsx(b,{title:r,children:t.jsx(D,{text:r,maxLength:20})},r):t.jsx(b,{title:r,children:t.jsx(D,{text:"NA",maxLength:20})},r)}}],[]),C=d=>{const o=w(a);o.pageIndex=d,e(N(o))},$=d=>{const o=w(a);o.pageSize=Number(d),o.pageIndex=1,e(N(o))},F=d=>{const o=w(a);o.sort=d,e(N(o))};return t.jsx("div",{children:t.jsx(V,{columns:g,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,pagingData:{total:a.total,pageIndex:a.pageIndex,pageSize:a.pageSize},onPaginationChange:C,onSelectChange:$,onSort:F})})};B("crmContactDetails",pe);const Gt=()=>{const e=A(),s=O(),{id:l}=s,n=E(x=>{var i,a;return(a=(i=x==null?void 0:x.crmContactDetails)==null?void 0:i.data)==null?void 0:a.contact}),p=n==null?void 0:n.data,c=E(x=>{var i,a;return(a=(i=x.crmContactDetails)==null?void 0:i.data)==null?void 0:a.loading});f.useEffect(()=>{m()},[]);const m=()=>{l&&e(v(l)),e(S())},u=()=>{window.history.back()};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[t.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:u,children:t.jsx(J,{})}),t.jsx("h3",{children:"Contact Details"})]}),t.jsxs(G,{className:"h-full",children:[t.jsx(W,{loading:c,children:!I(p)&&t.jsxs("div",{className:"flex flex-col xl:flex-row gap-4",children:[t.jsx(de,{data:p}),t.jsx("div",{className:"w-full",children:t.jsxs(X,{children:[t.jsx("h4",{className:"mb-3",children:"Connected Leads"}),t.jsx(he,{})]})})]})}),!c&&I(p)&&t.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:t.jsx("h3",{className:"mt-8",children:"No user found!"})})]})]})};export{Gt as default};
