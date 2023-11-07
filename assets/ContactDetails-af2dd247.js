import{am as M,an as R,ao as _,ap as q,j as e,a as I,r as C,al as K,aq as P,at as O,ah as G}from"./index-c2c71b67.js";import{C as H,i as k}from"./Views-3e469d6a.js";import{f as W}from"./CrmService-15d11bcd.js";import{A as U}from"./AdaptableCard-6d79530e.js";import"./Badge-71fe7402.js";import"./chart.constant-d85b92fc.js";import"./GrowShrinkTag-45e3cf24.js";import{A as X}from"./index-5345338d.js";import{B as Y}from"./Button-9c5fa51c.js";import"./Dialog-8f81a119.js";import{D as V}from"./DataTable-4690dba1.js";import"./Input-a6235faa.js";import"./Skeleton-39c0e07a.js";import"./react-tooltip.min-90a97092.js";import"./RichTextEditor-7aef3904.js";import"./SegmentItemOption-841378e4.js";import"./SvgIcon-426e05f5.js";import{T as S}from"./Tooltip-008854ca.js";import{I as J}from"./index.esm-9bcee528.js";import{u as $,d as Q,g as T,s as Z,f as tt,a as et}from"./index-68c1908e.js";import{C as st}from"./ConfirmDialog-59dfb946.js";import{C as ot}from"./Card-641c7c13.js";import{t as E,N as B}from"./toast-1c7e88ac.js";import{T as rt}from"./TagsList-adcae7d4.js";import{P as it}from"./index.esm-854b309f.js";import{S as nt}from"./StatusCapsule-aa0c9105.js";import{T as w}from"./TextTruncate-489ee756.js";import{c as v}from"./cloneDeep-a5d9ba9c.js";import"./Alert-94df1fc7.js";import"./RangeCalendar-06da6a52.js";import"./index-0f7a857e.js";import"./index-bbb04099.js";import"./Drawer-0edf5e5c.js";import"./index-fda7dfb7.js";import"./FormItem-78a020e3.js";import"./toString-ac4075ef.js";import"./index-ca17498b.js";import"./index-947dfc66.js";import"./index-a0374824.js";import"./Pagination-6dddef69.js";import"./Progress-81b53781.js";import"./index-72a612d1.js";import"./ScrollBar-d6546e5a.js";import"./index-d0a572c6.js";import"./Select-dd041f61.js";import"./index-e001e4a3.js";import"./Switcher-9ef30d94.js";import"./index-e96a00fb.js";import"./index-fc3c3276.js";import"./Tag-869b174a.js";import"./index-5c6007d6.js";import"./index-7308ebe4.js";import"./Upload-0425926a.js";import{r as at,u as N,a as ct,m as b}from"./index-45ad7363.js";import"./useMergeRef-788c4cb0.js";import"./index-6f0a636b.js";import"./CloseButton-3657ddf2.js";import"./index-9c27e09f.js";import"./isNil-d22b3e6c.js";import"./get-bbcb2570.js";import"./_MapCache-2e280b6f.js";import"./floating-ui.dom-4bc0055b.js";import"./_baseIsEqual-10de66da.js";import"./useThemeClass-ae6a3c06.js";import"./usePopper-2b474c15.js";import"./index.esm-95d05b2b.js";import"./index-ccd45f27.js";import"./useTimeout-a89b02a4.js";import"./StatusIcon-5eed5f69.js";import"./chainedFunction-070f832c.js";import"./_getPrototype-6c543eab.js";import"./useControllableState-a30d7084.js";import"./useRootClose-29c37326.js";import"./TimeInput-b943a20d.js";import"./useUniqueId-63f75720.js";import"./useDidUpdate-787bd063.js";import"./useUncertainRef-be3b54b9.js";import"./slicedToArray-3c0066d1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c30e1148.js";import"./mapCloneElement-a58d49ea.js";import"./index.esm-ab028e22.js";import"./index.esm-c710ec86.js";const F="crmContactDetails",lt={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},mt={loading:!0,contact:{},tableData:lt},A=M(`${F}/getContactById`,async t=>{var a,s;try{return await W(t)}catch(p){throw new Error((s=(a=p==null?void 0:p.response)==null?void 0:a.data)==null?void 0:s.message)}}),pt=R({name:`${F}/state`,initialState:mt,reducers:{},extraReducers:t=>{t.addCase(A.fulfilled,(a,s)=>{var p,h,l,m;a.loading=!1,a.contact=s==null?void 0:s.payload.data,a.tableData.total=(m=(l=(h=(p=s.payload)==null?void 0:p.data)==null?void 0:h.data)==null?void 0:l.leadModels)==null?void 0:m.length}).addCase(A.pending,a=>{a.loading=!0})}}),dt=pt.reducer,ut=_({data:dt}),z=q,f=({title:t,value:a})=>{const p=(l,m)=>(l==null?void 0:l.length)>m?`${l.slice(0,m)}
${p(l.slice(m),m)}`:l,h=(a==null?void 0:a.length)>80?p(a,80):a;return e.jsxs("div",{children:[e.jsx("span",{children:t}),e.jsx("p",{className:"text-gray-700 dark:text-gray-200 font-semibold",style:{wordWrap:"break-word"},children:h})]})},xt=t=>{const a=$(r=>{var i,d;return(d=(i=r.crmContact)==null?void 0:i.data)==null?void 0:d.selectedContact}),s=I(),[p,h]=C.useState(!1),l=K(),m=()=>{h(!1)},j=()=>{h(!0)},x=async()=>{var i,d,g;h(!1);const r=await s(Q(a.id));await s(T()),(i=r==null?void 0:r.payload)!=null&&i.success?(E.push(e.jsx(B,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=r==null?void 0:r.payload)==null?void 0:d.message}),{placement:"top-end"}),l("/app/crm/contacts"),s(Z({}))):E.push(e.jsx(B,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await s(T())};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{size:"xs",onClick:j,block:!0,variant:"solid",children:e.jsx(it,{className:"text-sm"})}),e.jsx(st,{isOpen:p,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:m,onRequestClose:m,onCancel:m,onConfirm:x,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this Contact will be deleted as well. This action cannot be undone."})})]})},ht=t=>{var s,p;const a=[t==null?void 0:t.address,(s=t==null?void 0:t.cityData)==null?void 0:s.cityName,(p=t==null?void 0:t.stateData)==null?void 0:p.stateName,t==null?void 0:t.zipcode].filter(Boolean).join(", ");return a.length>0?a:"Location not provided"},gt=({data:t={},tagList:a=[]})=>{var l,m,j;const s=$(x=>{var r,i;return(i=(r=x.crmContact)==null?void 0:r.data)==null?void 0:i.selectedContact}),h=((x,r)=>{const i=x.charAt(0).toUpperCase(),d=r.charAt(0).toUpperCase();return`${i}${d}`})(t.firstName||"",t.lastName||"");return e.jsxs(ot,{className:"h-full",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col xl:flex-row wrap-data w-full gap-4",children:[e.jsxs("div",{className:"flex xl:flex-col items-center gap-2 col-span-1",children:[e.jsx(X,{style:{width:"60px",height:"60px",alignItems:"center",justifyContent:"center"},shape:"circle",children:e.jsx("span",{style:{fontSize:"24px",marginTop:20},children:h})}),e.jsx("h4",{className:"font-bold",children:t.name})]}),e.jsxs("div",{className:"grid grid-cols-4 w-full gap-2",children:[e.jsx("div",{children:e.jsx(f,{title:"First Name",value:t.firstName})}),e.jsx("div",{children:e.jsx(f,{title:"Last Name",value:t.lastName})}),t.title&&e.jsx("div",{children:e.jsx(f,{title:"Designation",value:t.title})}),t.email&&e.jsx(f,{title:"Email",value:t.email}),t!=null&&t.address||t!=null&&t.cityData||t!=null&&t.stateData||t!=null&&t.zipcode?e.jsx("div",{children:e.jsx(f,{title:"Location",value:ht(t)})}):null,(t==null?void 0:t.contactNumber)&&e.jsx(f,{title:"Phone",value:t==null?void 0:t.contactNumber}),(s==null?void 0:s.cityData)&&e.jsx("div",{children:e.jsx(f,{title:"City",value:s==null?void 0:s.cityData.cityName})}),(s==null?void 0:s.stateData)&&e.jsx("div",{children:e.jsx(f,{title:"State",value:(l=s==null?void 0:s.stateData)==null?void 0:l.stateName})}),a.map((x,r)=>{var g;const i=(g=t.tags)==null?void 0:g.filter(u=>(u==null?void 0:u.tagCategoryId)===x.id),d=x.categoryName;if(i&&i.length)return e.jsxs("div",{children:[e.jsx(f,{title:d.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g,u=>u.toUpperCase()),value:""}),e.jsx(rt,{fullDisplay:!0,tags:i||[]})]},r)}),((m=t==null?void 0:t.contactFields)==null?void 0:m.length)>0?e.jsx(e.Fragment,{children:(j=t==null?void 0:t.contactFields)==null?void 0:j.map((x,r)=>{var i;return e.jsxs("div",{children:[x.value&&e.jsx(f,{title:(i=x.customKey)==null?void 0:i.label,value:x.value}),r<t.contactFields.length-1&&x.value&&e.jsx("br",{})]},r)})}):null]}),e.jsx("div",{className:"w-10",children:e.jsx(xt,{data:t})})]})}),(t==null?void 0:t.description)&&e.jsx("div",{className:"w-full",children:e.jsx(f,{title:"Description",value:t==null?void 0:t.description})})]})};P("crmLeads",at);const ft=()=>{const t=I(),a=N(c=>{var o,n,y,L;return(L=(y=(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.contact)==null?void 0:y.data)==null?void 0:L.leadModels}),s=N(c=>{var o,n;return(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.loading}),p=N(c=>{var o,n;return(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.tableData}),{pageIndex:h,pageSize:l,sort:m,query:j,total:x}=N(c=>{var o,n;return(n=(o=c.crmContactDetails)==null?void 0:o.data)==null?void 0:n.tableData}),r=C.useCallback(()=>{t(ct())},[t]);C.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||t(b({...p,query:""}))}),[r]);const i=C.useMemo(()=>({pageIndex:h,pageSize:l,sort:m,query:j,total:x}),[h,l,m,j,x]),d=C.useMemo(()=>[{header:"Title",accessorKey:"title",cell:o=>{const n=o.row.original.title;return e.jsx(S,{title:n,children:e.jsx(w,{text:n,maxLength:20})},n)}},{header:"Budget",accessorKey:"budget",cell:o=>{const n=o.row.original;return e.jsx(w,{text:n.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:o=>{const n=o.row.original;return e.jsx(nt,{status:n.status})}},{header:"Reason",accessorKey:"reason",cell:o=>{var y;const n=(y=o.row.original)==null?void 0:y.reason;return n?e.jsx(S,{title:n,children:e.jsx(w,{text:n,maxLength:20})},n):e.jsx(S,{title:n,children:e.jsx(w,{text:"NA",maxLength:20})},n)}}],[]),g=c=>{const o=v(i);o.pageIndex=c,t(b(o))},u=c=>{const o=v(i);o.pageSize=Number(c),o.pageIndex=1,t(b(o))},D=c=>{const o=v(i);o.sort=c,t(b(o))};return e.jsx("div",{children:e.jsx(V,{columns:d,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:i.total,pageIndex:i.pageIndex,pageSize:i.pageSize},onPaginationChange:g,onSelectChange:u,onSort:D})})};P("crmContactDetails",ut);const Ue=()=>{const t=I(),[a,s]=C.useState([]),p=O(),{id:h}=p,l=z(d=>{var g,u;return(u=(g=d==null?void 0:d.crmContactDetails)==null?void 0:g.data)==null?void 0:u.contact}),m=l==null?void 0:l.data,j=z(d=>{var g,u;return(u=(g=d.crmContactDetails)==null?void 0:g.data)==null?void 0:u.loading});C.useEffect(()=>{r(),x()},[]);const x=async()=>{var d,g;try{const{payload:u}=await t(tt()),D=(d=u==null?void 0:u.data)==null?void 0:d.find(c=>(c==null?void 0:c.moduleName)==="contacts");if(D){const{payload:c}=await t(et({id:(g=D==null?void 0:D.id)==null?void 0:g.toString()}));s(c==null?void 0:c.data)}}catch(u){console.error("Error fetching module data:",u)}},r=()=>{h&&t(A(h)),t(T())},i=()=>{window.history.back()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"15px"},children:[e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 items-center lg mr-2 mt-0",style:{fontSize:"2.5rem",fontWeight:"bold",color:"black"},onClick:i,children:e.jsx(J,{})}),e.jsx("h3",{children:"Contact Details"})]}),e.jsxs(H,{className:"h-full",children:[e.jsx(G,{loading:j,children:!k(m)&&e.jsxs("div",{children:[e.jsx(gt,{data:m,tagList:a}),e.jsx("div",{className:"w-full mt-2",children:e.jsxs(U,{children:[e.jsx("h4",{className:"mb-3",children:"Connected Leads"}),e.jsx(ft,{})]})})]})}),!j&&k(m)&&e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsx("h3",{className:"mt-8",children:"No user found!"})})]})]})};export{Ue as default};
