import{am as M,an as R,ao as _,ap as q,j as e,a as I,r as C,al as K,aq as P,as as O,ah as G}from"./index-dd430329.js";import{C as H,i as k}from"./Views-969b82ff.js";import{e as W}from"./CrmService-01e274f6.js";import{A as U}from"./AdaptableCard-aab5007a.js";import"./Badge-81ec6aad.js";import"./chart.constant-b89d4d9a.js";import"./GrowShrinkTag-7614f549.js";import{A as X}from"./index-1bec26b5.js";import{B as Y}from"./Button-477f78d2.js";import"./Dialog-4e683d85.js";import{D as V}from"./DataTable-b28d1e98.js";import"./Input-2ae5f21f.js";import"./Skeleton-0435d2db.js";import"./react-tooltip.min-90b0da4a.js";import"./RichTextEditor-ab8d719f.js";import"./SegmentItemOption-4eb9f4d2.js";import"./SvgIcon-0e5d590b.js";import{T as S}from"./Tooltip-4f6c910c.js";import{I as J}from"./index.esm-a5eb386e.js";import{u as $,d as Q,g as T,s as Z,f as tt,a as et}from"./index-5a74c47f.js";import{C as st}from"./ConfirmDialog-fcfff7a2.js";import{C as ot}from"./Card-7303f1d6.js";import{t as E,N as B}from"./toast-7520b143.js";import{T as rt}from"./TagsList-1727f43e.js";import{P as it}from"./index.esm-8a75a52d.js";import{S as nt}from"./StatusCapsule-688bd207.js";import{T as w}from"./TextTruncate-104140ac.js";import{c as v}from"./cloneDeep-7dd50aa7.js";import"./Alert-40c008c9.js";import"./RangeCalendar-c7dd44b3.js";import"./index-4953df19.js";import"./index-e8664bdc.js";import"./Drawer-851dfb0e.js";import"./index-273b73f2.js";import"./FormItem-c5d9f12d.js";import"./toString-45c45754.js";import"./index-ad4d109a.js";import"./index-1e6ea035.js";import"./index-5ad45768.js";import"./Pagination-a183170a.js";import"./Progress-65bff4d5.js";import"./index-9685374c.js";import"./ScrollBar-efe95462.js";import"./index-a7fee107.js";import"./Select-a638e837.js";import"./index-0bd5fcc8.js";import"./Switcher-46a64a8e.js";import"./index-03531cf7.js";import"./index-f4b545fd.js";import"./Tag-a01d1848.js";import"./index-c88fea13.js";import"./index-f57ef06e.js";import"./Upload-79efa750.js";import{r as at,u as N,a as ct,l as b}from"./index-9e6fb2f5.js";import"./useMergeRef-788c4cb0.js";import"./index-ab79e894.js";import"./CloseButton-be129446.js";import"./index-387d3e60.js";import"./isNil-ba5dd027.js";import"./get-f4ce3646.js";import"./_MapCache-787d0444.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-da2ece8d.js";import"./useThemeClass-c67d9527.js";import"./usePopper-ad874619.js";import"./index.esm-075cf0f7.js";import"./index-59261ffa.js";import"./useTimeout-8cc7d1d0.js";import"./StatusIcon-1c9455ce.js";import"./chainedFunction-070f832c.js";import"./_getPrototype-a234e5e0.js";import"./useControllableState-3d893585.js";import"./useRootClose-c59d452a.js";import"./TimeInput-d81057f6.js";import"./useUniqueId-abd97dae.js";import"./useDidUpdate-0f1ffc2f.js";import"./useUncertainRef-b3ab91cc.js";import"./slicedToArray-2ef3e469.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-7a029c07.js";import"./mapCloneElement-c4c40043.js";import"./index.esm-cdf5a269.js";import"./index.esm-7dc546a5.js";const F="crmContactDetails",lt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},mt={loading:!0,contact:{},tableData:lt},A=M(`${F}/getContactById`,async t=>{var a,s;try{return await W(t)}catch(p){throw new Error((s=(a=p==null?void 0:p.response)==null?void 0:a.data)==null?void 0:s.message)}}),pt=R({name:`${F}/state`,initialState:mt,reducers:{},extraReducers:t=>{t.addCase(A.fulfilled,(a,s)=>{var p,h,l,m;a.loading=!1,a.contact=s==null?void 0:s.payload.data,a.tableData.total=(m=(l=(h=(p=s.payload)==null?void 0:p.data)==null?void 0:h.data)==null?void 0:l.leadModels)==null?void 0:m.length}).addCase(A.pending,a=>{a.loading=!0})}}),dt=pt.reducer,ut=_({data:dt}),z=q,f=({title:t,value:a})=>{const p=(l,m)=>(l==null?void 0:l.length)>m?`${l.slice(0,m)}
${p(l.slice(m),m)}`:l,h=(a==null?void 0:a.length)>80?p(a,80):a;return e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{wordWrap:"break-word"},children:h})]})},xt=t=>{const a=$(r=>{var i,d;return(d=(i=r.crmContact)==null?void 0:i.data)==null?void 0:d.selectedContact}),s=I(),[p,h]=C.useState(!1),l=K(),m=()=>{h(!1)},j=()=>{h(!0)},x=async()=>{var i,d,g;h(!1);const r=await s(Q(a.id));await s(T()),(i=r==null?void 0:r.payload)!=null&&i.success?(E.push(e.jsx(B,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=r==null?void 0:r.payload)==null?void 0:d.message}),{placement:"top-end"}),l("/app/crm/contacts"),s(Z({}))):E.push(e.jsx(B,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await s(T())};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{size:"xs",onClick:j,block:!0,variant:"solid",children:e.jsx(it,{className:"text-sm"})}),e.jsx(st,{isOpen:p,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:m,onRequestClose:m,onCancel:m,onConfirm:x,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},ht=t=>{var s,p;const a=[t==null?void 0:t.address,(s=t==null?void 0:t.cityData)==null?void 0:s.cityName,(p=t==null?void 0:t.stateData)==null?void 0:p.stateName,t==null?void 0:t.zipcode].filter(Boolean).join(", ");return a.length>0?a:"Location not provided"},gt=({data:t={},tagList:a=[]})=>{var l,m,j;const s=$(x=>{var r,i;return(i=(r=x.crmContact)==null?void 0:r.data)==null?void 0:i.selectedContact}),h=((x,r)=>{const i=x.charAt(0).toUpperCase(),d=r.charAt(0).toUpperCase();return`${i}${d}`})(t.firstName||"",t.lastName||"");return e.jsxs(ot,{className:"h-full",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col xl:flex-row wrap-data w-full gap-4",children:[e.jsxs("div",{className:"flex xl:flex-col items-center gap-2 col-span-1",children:[e.jsx(X,{style:{width:"60px",height:"60px",alignItems:"center",justifyContent:"center"},shape:"circle",children:e.jsx("span",{style:{fontSize:"24px",marginTop:20},children:h})}),e.jsx("h4",{className:"font-bold",children:t.name})]}),e.jsxs("div",{className:"grid grid-cols-4 w-full gap-2",children:[e.jsx("div",{children:e.jsx(f,{title:"First Name",value:t.firstName})}),e.jsx("div",{children:e.jsx(f,{title:"Last Name",value:t.lastName})}),t.title&&e.jsx("div",{children:e.jsx(f,{title:"Designation",value:t.title})}),t.email&&e.jsx(f,{title:"Email",value:t.email}),t!=null&&t.address||t!=null&&t.cityData||t!=null&&t.stateData||t!=null&&t.zipcode?e.jsx("div",{children:e.jsx(f,{title:"Location",value:ht(t)})}):null,(t==null?void 0:t.contactNumber)&&e.jsx(f,{title:"Phone",value:t==null?void 0:t.contactNumber}),(s==null?void 0:s.cityData)&&e.jsx("div",{children:e.jsx(f,{title:"City",value:s==null?void 0:s.cityData.cityName})}),(s==null?void 0:s.stateData)&&e.jsx("div",{children:e.jsx(f,{title:"State",value:(l=s==null?void 0:s.stateData)==null?void 0:l.stateName})}),a.map((x,r)=>{var g;const i=(g=t.tags)==null?void 0:g.filter(u=>(u==null?void 0:u.tagCategoryId)===x.id),d=x.categoryName;if(i&&i.length)return e.jsxs("div",{children:[e.jsx(f,{title:d.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g,u=>u.toUpperCase()),value:""}),e.jsx(rt,{fullDisplay:!0,tags:i||[]})]},r)}),((m=t==null?void 0:t.contactFields)==null?void 0:m.length)>0?e.jsx(e.Fragment,{children:(j=t==null?void 0:t.contactFields)==null?void 0:j.map((x,r)=>{var i;return e.jsxs("div",{children:[x.value&&e.jsx(f,{title:(i=x.customKey)==null?void 0:i.label,value:x.value}),r<t.contactFields.length-1&&x.value&&e.jsx("br",{})]},r)})}):null]}),e.jsx("div",{className:"w-10",children:e.jsx(xt,{data:t})})]})}),(t==null?void 0:t.description)&&e.jsx("div",{className:"w-full",children:e.jsx(f,{title:"Description",value:t==null?void 0:t.description})})]})};P("crmLeads",at);const ft=()=>{const t=I(),a=N(c=>{var o,n,y,L;return(L=(y=(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.contact)==null?void 0:y.data)==null?void 0:L.leadModels}),s=N(c=>{var o,n;return(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.loading}),p=N(c=>{var o,n;return(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.tableData}),{pageIndex:h,pageSize:l,sort:m,query:j,total:x}=N(c=>{var o,n;return(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.tableData}),r=C.useCallback(()=>{t(ct())},[t]);C.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||t(b({...p,query:""}))}),[r]);const i=C.useMemo(()=>({pageIndex:h,pageSize:l,sort:m,query:j,total:x}),[h,l,m,j,x]),d=C.useMemo(()=>[{header:"Title",accessorKey:"title",cell:o=>{const n=o.row.original.title;return e.jsx(S,{title:n,children:e.jsx(w,{text:n,maxLength:20})},n)}},{header:"Budget",accessorKey:"budget",cell:o=>{const n=o.row.original;return e.jsx(w,{text:n.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:o=>{const n=o.row.original;return e.jsx(nt,{status:n.status})}},{header:"Reason",accessorKey:"reason",cell:o=>{var y;const n=(y=o.row.original)==null?void 0:y.reason;return n?e.jsx(S,{title:n,children:e.jsx(w,{text:n,maxLength:20})},n):e.jsx(S,{title:n,children:e.jsx(w,{text:"NA",maxLength:20})},n)}}],[]),g=c=>{const o=v(i);o.pageIndex=c,t(b(o))},u=c=>{const o=v(i);o.pageSize=Number(c),o.pageIndex=1,t(b(o))},D=c=>{const o=v(i);o.sort=c,t(b(o))};return e.jsx("div",{children:e.jsx(V,{columns:d,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:i.total,pageIndex:i.pageIndex,pageSize:i.pageSize},onPaginationChange:g,onSelectChange:u,onSort:D})})};P("crmContactDetails",ut);const Ue=()=>{const t=I(),[a,s]=C.useState([]),p=O(),{id:h}=p,l=z(d=>{var g,u;return(u=(g=d==null?void 0:d.crmContactDetails)==null?void 0:g.data)==null?void 0:u.contact}),m=l==null?void 0:l.data,j=z(d=>{var g,u;return(u=(g=d.crmContactDetails)==null?void 0:g.data)==null?void 0:u.loading});C.useEffect(()=>{r(),x()},[]);const x=async()=>{var d,g;try{const{payload:u}=await t(tt()),D=(d=u==null?void 0:u.data)==null?void 0:d.find(c=>(c==null?void 0:c.moduleName)==="contacts");if(D){const{payload:c}=await t(et({id:(g=D==null?void 0:D.id)==null?void 0:g.toString()}));s(c==null?void 0:c.data)}}catch(u){console.error("Error fetching module data:",u)}},r=()=>{h&&t(A(h)),t(T())},i=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:i,children:e.jsx(J,{})}),e.jsx("h3",{children:"Contact Details"})]}),e.jsxs(H,{className:"h-full",children:[e.jsx(G,{loading:j,children:!k(m)&&e.jsxs("div",{children:[e.jsx(gt,{data:m,tagList:a}),e.jsx("div",{className:"w-full mt-2",children:e.jsxs(U,{children:[e.jsx("h4",{className:"mb-3",children:"Connected Leads"}),e.jsx(ft,{})]})})]})}),!j&&k(m)&&e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsx("h3",{className:"mt-8",children:"No user found!"})})]})]})};export{Ue as default};
