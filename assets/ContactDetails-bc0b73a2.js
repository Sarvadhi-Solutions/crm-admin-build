import{am as M,an as R,ao as _,ap as q,j as e,a as A,r as f,al as K,aq as B,at as O,ah as G}from"./index-814886c9.js";import{C as H,i as I}from"./Views-fed2ee34.js";import{f as W}from"./CrmService-9aed65a4.js";import{A as X}from"./AdaptableCard-0deeb77e.js";import"./Badge-6740e82e.js";import"./chart.constant-2e14b09f.js";import"./GrowShrinkTag-7335a295.js";import{A as Y}from"./index-44a5db3e.js";import{B as U}from"./Button-3b704f3e.js";import"./Dialog-7b46051f.js";import{D as V}from"./DataTable-3c3dbcc0.js";import"./Input-2049b051.js";import"./Skeleton-f103a7cb.js";import"./react-tooltip.min-6c3ed628.js";import"./RichTextEditor-ad8e3931.js";import"./SegmentItemOption-a23af702.js";import"./SvgIcon-19ec43ce.js";import{T as N}from"./Tooltip-07e1f3da.js";import{I as J}from"./index.esm-8e20adb7.js";import{u as z,d as Q,g as v,s as Z}from"./index-0f86756f.js";import{C as tt}from"./ConfirmDialog-dbb97547.js";import{C as et}from"./Card-dd06927c.js";import{t as L,N as k}from"./toast-208340c6.js";import{T as st}from"./TagsList-4a7f7a99.js";import{P as ot}from"./index.esm-d47a8d30.js";import{S as rt}from"./StatusCapsule-93dae17d.js";import{T as D}from"./TextTruncate-22baaaa6.js";import{c as b}from"./cloneDeep-3031fb0b.js";import"./Alert-b0f262ad.js";import"./RangeCalendar-dfea7372.js";import"./index-b7e31a2e.js";import"./index-48f4e996.js";import"./Drawer-11d68f58.js";import"./index-247a4da4.js";import"./FormItem-718faadb.js";import"./toString-dfebe446.js";import"./index-ef1708cf.js";import"./index-b0a87e1b.js";import"./index-d04fa1a2.js";import"./Pagination-9fd494c1.js";import"./Progress-e2f778d5.js";import"./index-0b2c26a4.js";import"./ScrollBar-86fa4e32.js";import"./index-1a150266.js";import"./Select-b3f832ed.js";import"./index-40caa853.js";import"./Switcher-e40ff6b0.js";import"./index-d9751af2.js";import"./index-f1114e94.js";import"./Tag-d328000b.js";import"./index-fd153dc3.js";import"./index-45d98e78.js";import"./Upload-befa0358.js";import{r as it,u as y,a as nt,m as w}from"./index-2d4bee71.js";import"./useMergeRef-788c4cb0.js";import"./index-3d4ae666.js";import"./CloseButton-2b27a694.js";import"./index-e8e6816d.js";import"./isNil-ff170caf.js";import"./get-f86e464d.js";import"./_MapCache-89d7c2b4.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-74b76620.js";import"./useThemeClass-4e25280b.js";import"./usePopper-6c0a6ae3.js";import"./index.esm-cc12ad2c.js";import"./index-d9b10e52.js";import"./useTimeout-519d5bf5.js";import"./StatusIcon-9abc8a45.js";import"./chainedFunction-070f832c.js";import"./_getPrototype-4fad6a22.js";import"./useControllableState-b8736341.js";import"./useRootClose-a805a36e.js";import"./TimeInput-327d74d8.js";import"./useUniqueId-1ba47d20.js";import"./useDidUpdate-45c585a8.js";import"./useUncertainRef-f508bcbc.js";import"./slicedToArray-cb35d4e4.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c5dbfc98.js";import"./mapCloneElement-b325cf62.js";import"./index.esm-6517337b.js";import"./index.esm-423bf4e4.js";const P="crmContactDetails",lt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ct={loading:!0,contact:{},tableData:lt},S=M(`${P}/getContactById`,async t=>{var s,l;try{return await W(t)}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),at=R({name:`${P}/state`,initialState:ct,reducers:{},extraReducers:t=>{t.addCase(S.fulfilled,(s,l)=>{var n,p,c,m;s.loading=!1,s.contact=l==null?void 0:l.payload.data,s.tableData.total=(m=(c=(p=(n=l.payload)==null?void 0:n.data)==null?void 0:p.data)==null?void 0:c.leadModels)==null?void 0:m.length}).addCase(S.pending,s=>{s.loading=!0})}}),mt=at.reducer,pt=_({data:mt}),E=q,h=({title:t,value:s})=>{const n=(c,m)=>(c==null?void 0:c.length)>m?`${c.slice(0,m)}
${n(c.slice(m),m)}`:c,p=(s==null?void 0:s.length)>80?n(s,80):s;return e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{wordWrap:"break-word"},children:p})]})},ut=t=>{const s=z(r=>{var a,g;return(g=(a=r.crmContact)==null?void 0:a.data)==null?void 0:g.selectedContact}),l=A(),[n,p]=f.useState(!1),c=K(),m=()=>{p(!1)},x=()=>{p(!0)},u=async()=>{var a,g,C;p(!1);const r=await l(Q(s.id));await l(v()),(a=r==null?void 0:r.payload)!=null&&a.success?(L.push(e.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=r==null?void 0:r.payload)==null?void 0:g.message}),{placement:"top-end"}),c("/app/crm/contacts"),l(Z({}))):L.push(e.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(C=r==null?void 0:r.error)==null?void 0:C.message}),{placement:"top-end"}),await l(v())};return e.jsxs(e.Fragment,{children:[e.jsx(U,{size:"xs",onClick:x,block:!0,variant:"solid",children:e.jsx(ot,{className:"text-sm"})}),e.jsx(tt,{isOpen:n,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:m,onRequestClose:m,onCancel:m,onConfirm:u,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},xt=t=>{var l,n;const s=[t==null?void 0:t.address,(l=t==null?void 0:t.cityData)==null?void 0:l.cityName,(n=t==null?void 0:t.stateData)==null?void 0:n.stateName,t==null?void 0:t.zipcode].filter(Boolean).join(", ");return s.length>0?s:"Location not provided"},dt=({data:t={}})=>{var p,c,m;const s=z(x=>{var u,r;return(r=(u=x.crmContact)==null?void 0:u.data)==null?void 0:r.selectedContact}),n=((x,u)=>{const r=x.charAt(0).toUpperCase(),a=u.charAt(0).toUpperCase();return`${r}${a}`})(t.firstName||"",t.lastName||"");return e.jsxs(et,{className:"h-full",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col xl:flex-row wrap-data w-full gap-4",children:[e.jsxs("div",{className:"flex xl:flex-col items-center gap-2 col-span-1",children:[e.jsx(Y,{style:{width:"60px",height:"60px",alignItems:"center",justifyContent:"center"},shape:"circle",children:e.jsx("span",{style:{fontSize:"24px",marginTop:20},children:n})}),e.jsx("h4",{className:"font-bold",children:t.name})]}),e.jsxs("div",{className:"grid grid-cols-4 w-full gap-2",children:[e.jsx("div",{children:e.jsx(h,{title:"First Name",value:t.firstName})}),e.jsx("div",{children:e.jsx(h,{title:"Last Name",value:t.lastName})}),t.title&&e.jsx("div",{children:e.jsx(h,{title:"Title",value:t.title})}),t.email&&e.jsx(h,{title:"Email",value:t.email}),t!=null&&t.address||t!=null&&t.cityData||t!=null&&t.stateData||t!=null&&t.zipcode?e.jsx("div",{children:e.jsx(h,{title:"Location",value:xt(t)})}):null,(t==null?void 0:t.contactNumber)&&e.jsx(h,{title:"Phone",value:t==null?void 0:t.contactNumber}),(s==null?void 0:s.cityData)&&e.jsx("div",{children:e.jsx(h,{title:"City",value:s==null?void 0:s.cityData.cityName})}),(s==null?void 0:s.stateData)&&e.jsx("div",{children:e.jsx(h,{title:"State",value:(p=s==null?void 0:s.stateData)==null?void 0:p.stateName})}),(t==null?void 0:t.tags.length)>0?e.jsxs("div",{children:[e.jsx(h,{title:"Tags",value:""}),e.jsx(st,{fullDisplay:!0,tags:(t==null?void 0:t.tags)||[]})]}):null,((c=t==null?void 0:t.contactFields)==null?void 0:c.length)>0?e.jsx(e.Fragment,{children:(m=t==null?void 0:t.contactFields)==null?void 0:m.map((x,u)=>{var r;return e.jsxs("div",{children:[x.value&&e.jsx(h,{title:(r=x.customKey)==null?void 0:r.label,value:x.value}),u<t.contactFields.length-1&&x.value&&e.jsx("br",{})]})})}):null]}),e.jsx("div",{className:"w-10",children:e.jsx(ut,{data:t})})]})}),(t==null?void 0:t.description)&&e.jsx("div",{className:"w-full",children:e.jsx(h,{title:"Description",value:t==null?void 0:t.description})})]})};B("crmLeads",it);const ht=()=>{const t=A(),s=y(d=>{var o,i,j,T;return(T=(j=(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.contact)==null?void 0:j.data)==null?void 0:T.leadModels}),l=y(d=>{var o,i;return(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.loading}),n=y(d=>{var o,i;return(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.tableData}),{pageIndex:p,pageSize:c,sort:m,query:x,total:u}=y(d=>{var o,i;return(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.tableData}),r=f.useCallback(()=>{t(nt())},[t]);f.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||t(w({...n,query:""}))}),[r]);const a=f.useMemo(()=>({pageIndex:p,pageSize:c,sort:m,query:x,total:u}),[p,c,m,x,u]),g=f.useMemo(()=>[{header:"Title",accessorKey:"title",cell:o=>{const i=o.row.original.title;return e.jsx(N,{title:i,children:e.jsx(D,{text:i,maxLength:20})},i)}},{header:"Budget",accessorKey:"budget",cell:o=>{const i=o.row.original;return e.jsx(D,{text:i.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:o=>{const i=o.row.original;return e.jsx(rt,{status:i.status})}},{header:"Reason",accessorKey:"reason",cell:o=>{var j;const i=(j=o.row.original)==null?void 0:j.reason;return i?e.jsx(N,{title:i,children:e.jsx(D,{text:i,maxLength:20})},i):e.jsx(N,{title:i,children:e.jsx(D,{text:"NA",maxLength:20})},i)}}],[]),C=d=>{const o=b(a);o.pageIndex=d,t(w(o))},$=d=>{const o=b(a);o.pageSize=Number(d),o.pageIndex=1,t(w(o))},F=d=>{const o=b(a);o.sort=d,t(w(o))};return e.jsx("div",{children:e.jsx(V,{columns:g,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,pagingData:{total:a.total,pageIndex:a.pageIndex,pageSize:a.pageSize},onPaginationChange:C,onSelectChange:$,onSort:F})})};B("crmContactDetails",pt);const He=()=>{const t=A(),s=O(),{id:l}=s,n=E(u=>{var r,a;return(a=(r=u==null?void 0:u.crmContactDetails)==null?void 0:r.data)==null?void 0:a.contact}),p=n==null?void 0:n.data,c=E(u=>{var r,a;return(a=(r=u.crmContactDetails)==null?void 0:r.data)==null?void 0:a.loading});f.useEffect(()=>{m()},[]);const m=()=>{l&&t(S(l)),t(v())},x=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:x,children:e.jsx(J,{})}),e.jsx("h3",{children:"Contact Details"})]}),e.jsxs(H,{className:"h-full",children:[e.jsx(G,{loading:c,children:!I(p)&&e.jsxs("div",{children:[e.jsx(dt,{data:p}),e.jsx("div",{className:"w-full mt-2",children:e.jsxs(X,{children:[e.jsx("h4",{className:"mb-3",children:"Connected Leads"}),e.jsx(ht,{})]})})]})}),!c&&I(p)&&e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsx("h3",{className:"mt-8",children:"No user found!"})})]})]})};export{He as default};
