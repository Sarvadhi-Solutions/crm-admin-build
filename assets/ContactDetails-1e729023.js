import{al as M,am as R,an as _,ao as q,j as e,a as A,r as f,ap as K,aq as B,at as O,ah as G}from"./index-847ef4f8.js";import{C as H,i as I}from"./Views-5cd95793.js";import{f as W}from"./CrmService-c8ab1850.js";import{A as X}from"./AdaptableCard-f7b8f466.js";import"./Badge-23f456f8.js";import"./chart.constant-833dc4ed.js";import"./GrowShrinkTag-f7c2938c.js";import{A as Y}from"./index-3c06be8e.js";import{B as U}from"./Button-b74cc268.js";import"./Dialog-c1236e17.js";import{D as V}from"./DataTable-bb61d519.js";import"./Input-07dbb44b.js";import"./Skeleton-4ba1ecfc.js";import"./react-tooltip.min-58cb827d.js";import"./RichTextEditor-b314b5be.js";import"./SegmentItemOption-0ad22a42.js";import"./SvgIcon-a4dfe44e.js";import{T as N}from"./Tooltip-a237a4da.js";import{I as J}from"./index.esm-c6fedb04.js";import{u as z,d as Q,g as v,s as Z}from"./index-f8f58b88.js";import{C as tt}from"./ConfirmDialog-a1ed4092.js";import{C as et}from"./Card-7a58c886.js";import{t as L,N as k}from"./toast-f5c3f24c.js";import{T as st}from"./TagsList-a0d374e4.js";import{P as ot}from"./index.esm-487b51fd.js";import{S as rt}from"./StatusCapsule-ca49e5dd.js";import{T as D}from"./TextTruncate-0d10a3b6.js";import{c as b}from"./cloneDeep-f66e195c.js";import"./Alert-ee5a8060.js";import"./RangeCalendar-0bcee289.js";import"./index-9702d4b4.js";import"./index-260f8e0a.js";import"./Drawer-7bdb186b.js";import"./index-c7f7da88.js";import"./FormItem-6caba9dc.js";import"./toString-271e4441.js";import"./index-76b04bca.js";import"./index-4292c0e7.js";import"./index-938b8073.js";import"./Pagination-9c369e6e.js";import"./Progress-abdfc0bf.js";import"./index-629e5bc6.js";import"./ScrollBar-9a2baaea.js";import"./index-dbe4178c.js";import"./Select-ed97c876.js";import"./index-44b26318.js";import"./Switcher-71827c71.js";import"./index-c1eb621b.js";import"./index-4eb372a0.js";import"./Tag-b8e15ca0.js";import"./index-cbb9775c.js";import"./index-0ac64fa5.js";import"./Upload-1ad29e1a.js";import{r as it,u as y,a as nt,m as w}from"./index-27e7c3e2.js";import"./useMergeRef-788c4cb0.js";import"./index-93a3d3d0.js";import"./CloseButton-d22d6eb9.js";import"./index-8ad565f1.js";import"./isNil-4ae3346e.js";import"./get-263abd7f.js";import"./_MapCache-9e036a1f.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-24c667bd.js";import"./useThemeClass-606c5d8c.js";import"./usePopper-efd79584.js";import"./index.esm-9468e820.js";import"./index-5449d842.js";import"./useTimeout-7eccd8b6.js";import"./StatusIcon-5a5a985f.js";import"./chainedFunction-070f832c.js";import"./_getPrototype-c37a8692.js";import"./useControllableState-d474fa8c.js";import"./useRootClose-d8f8a4cc.js";import"./TimeInput-81e6befe.js";import"./useUniqueId-7dc066bc.js";import"./useDidUpdate-482439ac.js";import"./useUncertainRef-4977c77f.js";import"./slicedToArray-505afcc1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-621896fa.js";import"./mapCloneElement-f7b6b3e0.js";import"./index.esm-f7cc78ab.js";import"./index.esm-b4dcee25.js";const P="crmContactDetails",lt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ct={loading:!0,contact:{},tableData:lt},S=M(`${P}/getContactById`,async t=>{var s,l;try{return await W(t)}catch(n){throw new Error((l=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:l.message)}}),at=R({name:`${P}/state`,initialState:ct,reducers:{},extraReducers:t=>{t.addCase(S.fulfilled,(s,l)=>{var n,p,c,m;s.loading=!1,s.contact=l==null?void 0:l.payload.data,s.tableData.total=(m=(c=(p=(n=l.payload)==null?void 0:n.data)==null?void 0:p.data)==null?void 0:c.leadModels)==null?void 0:m.length}).addCase(S.pending,s=>{s.loading=!0})}}),mt=at.reducer,pt=_({data:mt}),E=q,h=({title:t,value:s})=>{const n=(c,m)=>(c==null?void 0:c.length)>m?`${c.slice(0,m)}
${n(c.slice(m),m)}`:c,p=(s==null?void 0:s.length)>80?n(s,80):s;return e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{wordWrap:"break-word"},children:p})]})},ut=t=>{const s=z(r=>{var a,g;return(g=(a=r.crmContact)==null?void 0:a.data)==null?void 0:g.selectedContact}),l=A(),[n,p]=f.useState(!1),c=K(),m=()=>{p(!1)},x=()=>{p(!0)},u=async()=>{var a,g,C;p(!1);const r=await l(Q(s.id));await l(v()),(a=r==null?void 0:r.payload)!=null&&a.success?(L.push(e.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(g=r==null?void 0:r.payload)==null?void 0:g.message}),{placement:"top-end"}),c("/app/crm/contacts"),l(Z({}))):L.push(e.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(C=r==null?void 0:r.error)==null?void 0:C.message}),{placement:"top-end"}),await l(v())};return e.jsxs(e.Fragment,{children:[e.jsx(U,{size:"xs",onClick:x,block:!0,variant:"solid",children:e.jsx(ot,{className:"text-sm"})}),e.jsx(tt,{isOpen:n,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:m,onRequestClose:m,onCancel:m,onConfirm:u,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},xt=t=>{var l,n;const s=[t==null?void 0:t.address,(l=t==null?void 0:t.cityData)==null?void 0:l.cityName,(n=t==null?void 0:t.stateData)==null?void 0:n.stateName,t==null?void 0:t.zipcode].filter(Boolean).join(", ");return s.length>0?s:"Location not provided"},dt=({data:t={}})=>{var p,c,m;const s=z(x=>{var u,r;return(r=(u=x.crmContact)==null?void 0:u.data)==null?void 0:r.selectedContact}),n=((x,u)=>{const r=x.charAt(0).toUpperCase(),a=u.charAt(0).toUpperCase();return`${r}${a}`})(t.firstName||"",t.lastName||"");return e.jsxs(et,{className:"h-full",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col xl:flex-row wrap-data w-full gap-4",children:[e.jsxs("div",{className:"flex xl:flex-col items-center gap-2 col-span-1",children:[e.jsx(Y,{style:{width:"60px",height:"60px",alignItems:"center",justifyContent:"center"},shape:"circle",children:e.jsx("span",{style:{fontSize:"24px",marginTop:20},children:n})}),e.jsx("h4",{className:"font-bold",children:t.name})]}),e.jsxs("div",{className:"grid grid-cols-4 w-full gap-2",children:[e.jsx("div",{children:e.jsx(h,{title:"First Name",value:t.firstName})}),e.jsx("div",{children:e.jsx(h,{title:"Last Name",value:t.lastName})}),t.title&&e.jsx("div",{children:e.jsx(h,{title:"Title",value:t.title})}),t.email&&e.jsx(h,{title:"Email",value:t.email}),t!=null&&t.address||t!=null&&t.cityData||t!=null&&t.stateData||t!=null&&t.zipcode?e.jsx("div",{children:e.jsx(h,{title:"Location",value:xt(t)})}):null,(t==null?void 0:t.contactNumber)&&e.jsx(h,{title:"Phone",value:t==null?void 0:t.contactNumber}),(s==null?void 0:s.cityData)&&e.jsx("div",{children:e.jsx(h,{title:"City",value:s==null?void 0:s.cityData.cityName})}),(s==null?void 0:s.stateData)&&e.jsx("div",{children:e.jsx(h,{title:"State",value:(p=s==null?void 0:s.stateData)==null?void 0:p.stateName})}),(t==null?void 0:t.tags.length)>0?e.jsxs("div",{children:[e.jsx(h,{title:"Tags",value:""}),e.jsx(st,{fullDisplay:!0,tags:(t==null?void 0:t.tags)||[]})]}):null,((c=t==null?void 0:t.contactFields)==null?void 0:c.length)>0?e.jsx(e.Fragment,{children:(m=t==null?void 0:t.contactFields)==null?void 0:m.map((x,u)=>{var r;return e.jsxs("div",{children:[x.value&&e.jsx(h,{title:(r=x.customKey)==null?void 0:r.name,value:x.value}),u<t.contactFields.length-1&&x.value&&e.jsx("br",{})]})})}):null]}),e.jsx("div",{className:"w-10",children:e.jsx(ut,{data:t})})]})}),(t==null?void 0:t.description)&&e.jsx("div",{className:"w-full",children:e.jsx(h,{title:"Description",value:t==null?void 0:t.description})})]})};B("crmLeads",it);const ht=()=>{const t=A(),s=y(d=>{var o,i,j,T;return(T=(j=(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.contact)==null?void 0:j.data)==null?void 0:T.leadModels}),l=y(d=>{var o,i;return(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.loading}),n=y(d=>{var o,i;return(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.tableData}),{pageIndex:p,pageSize:c,sort:m,query:x,total:u}=y(d=>{var o,i;return(i=(o=d.crmContactDetails)==null?void 0:o.data)==null?void 0:i.tableData}),r=f.useCallback(()=>{t(nt())},[t]);f.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||t(w({...n,query:""}))}),[r]);const a=f.useMemo(()=>({pageIndex:p,pageSize:c,sort:m,query:x,total:u}),[p,c,m,x,u]),g=f.useMemo(()=>[{header:"Title",accessorKey:"title",cell:o=>{const i=o.row.original.title;return e.jsx(N,{title:i,children:e.jsx(D,{text:i,maxLength:20})},i)}},{header:"Budget",accessorKey:"budget",cell:o=>{const i=o.row.original;return e.jsx(D,{text:i.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:o=>{const i=o.row.original;return e.jsx(rt,{status:i.status})}},{header:"Reason",accessorKey:"reason",cell:o=>{var j;const i=(j=o.row.original)==null?void 0:j.reason;return i?e.jsx(N,{title:i,children:e.jsx(D,{text:i,maxLength:20})},i):e.jsx(N,{title:i,children:e.jsx(D,{text:"NA",maxLength:20})},i)}}],[]),C=d=>{const o=b(a);o.pageIndex=d,t(w(o))},$=d=>{const o=b(a);o.pageSize=Number(d),o.pageIndex=1,t(w(o))},F=d=>{const o=b(a);o.sort=d,t(w(o))};return e.jsx("div",{children:e.jsx(V,{columns:g,data:s,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:l,pagingData:{total:a.total,pageIndex:a.pageIndex,pageSize:a.pageSize},onPaginationChange:C,onSelectChange:$,onSort:F})})};B("crmContactDetails",pt);const He=()=>{const t=A(),s=O(),{id:l}=s,n=E(u=>{var r,a;return(a=(r=u==null?void 0:u.crmContactDetails)==null?void 0:r.data)==null?void 0:a.contact}),p=n==null?void 0:n.data,c=E(u=>{var r,a;return(a=(r=u.crmContactDetails)==null?void 0:r.data)==null?void 0:a.loading});f.useEffect(()=>{m()},[]);const m=()=>{l&&t(S(l)),t(v())},x=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:x,children:e.jsx(J,{})}),e.jsx("h3",{children:"Contact Details"})]}),e.jsxs(H,{className:"h-full",children:[e.jsx(G,{loading:c,children:!I(p)&&e.jsxs("div",{children:[e.jsx(dt,{data:p}),e.jsx("div",{className:"w-full mt-2",children:e.jsxs(X,{children:[e.jsx("h4",{className:"mb-3",children:"Connected Leads"}),e.jsx(ht,{})]})})]})}),!c&&I(p)&&e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsx("h3",{className:"mt-8",children:"No user found!"})})]})]})};export{He as default};
