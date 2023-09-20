import{r as g,a as h,j as e,ai as U,ar as W}from"./index-4bd6b7b3.js";import{A as G}from"./AdaptableCard-4c3d12d7.js";import{D as V}from"./DataTable-8887d7ed.js";import{u as p,s as _,a as N,b as D,d as J,g as S,e as E,f as w,h as F,i as L,r as Q}from"./AdditionalTag-1f0b69bf.js";import{u as O}from"./useThemeClass-b8c9a717.js";import{B as y}from"./Button-39d85f08.js";import{D as X}from"./Drawer-71237173.js";import{C as Y}from"./CustomerForm-dd2141c7.js";import{c as b}from"./cloneDeep-9b3959e9.js";import{a as j,T as Z}from"./TextTruncate-9217c160.js";import{u as v}from"./checkEditUpdate-fe7a3157.js";import{t as k,N as R}from"./toast-88ff7e3e.js";import{C as ee}from"./ConfirmDialog-5a804371.js";import{I as te}from"./Input-1462fe73.js";import{b as se,d as oe,m as re,A as ae}from"./index.esm-0cdca32a.js";import{d as ne}from"./debounce-1894c673.js";import{S as ie,c as le}from"./Select-938bf375.js";import{B}from"./Badge-80e10abc.js";import{C as ce}from"./Card-526fc8df.js";import{A as me}from"./index-875ce0f2.js";import{M as de}from"./MediaSkeleton-6059d4e5.js";import{N as ue}from"./react-number-format.es-61c35378.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./Pagination-22ec60b1.js";import"./index-e9ce1b4a.js";import"./_Uint8Array-04aa9e28.js";import"./_MapCache-9c7f01dc.js";import"./Views-d9a5bf10.js";import"./_baseIsEqual-a094f75a.js";import"./get-2d6f452a.js";import"./toString-a7228545.js";import"./TableRowSkeleton-f238368d.js";import"./Skeleton-e8e73738.js";import"./index-030d990e.js";import"./formik.esm-a048d78e.js";import"./Alert-7657f3d7.js";import"./useTimeout-f676b9da.js";import"./CloseButton-6e2e0ec5.js";import"./StatusIcon-8490d43a.js";import"./Calendar-c92b9cfd.js";import"./useControllableState-259714d7.js";import"./index-20aa5a1a.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-5ed82cf8.js";import"./usePopper-ea474854.js";import"./RangeCalendar-0a16d493.js";import"./TimeInput-05c24087.js";import"./useUniqueId-a782b7b3.js";import"./useDidUpdate-f7d2ff2b.js";import"./Dialog-974a1028.js";import"./index-8b930c29.js";import"./index-10374e44.js";import"./useUncertainRef-4756ae3b.js";import"./isNil-ae028dac.js";import"./index-06706b89.js";import"./chainedFunction-070f832c.js";import"./index-5ed9ba61.js";import"./FormItem-e2a22149.js";import"./context-a8cf3940.js";import"./index-f24b5e4f.js";import"./index-6ca15321.js";import"./Progress-4167b7c4.js";import"./index-b212dc1a.js";import"./ScrollBar-c9c4e4cf.js";import"./index-5de84849.js";import"./index-6080bacd.js";import"./mapCloneElement-bf192649.js";import"./Switcher-83573e00.js";import"./index-00b89123.js";import"./Tag-bcb5cf48.js";import"./index-b945cf70.js";import"./index-f4634923.js";import"./Tooltip-0c11394e.js";import"./index.esm-07747377.js";import"./Upload-a4e0db34.js";import"./index.esm-4ed14753.js";import"./index.esm-54d5fc4e.js";import"./CrmService-6ced694a.js";import"./index.esm-3518a165.js";import"./index.esm-24d8aaa0.js";/* empty css              */import"./_getPrototype-715b1198.js";import"./slicedToArray-e2770cb7.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-3723ed4f.js";import"./floating-ui.dom-bef9cea3.js";const K=g.forwardRef((s,t)=>{h();const r=p(i=>i.crmCustomers.data.selectedCustomer);p(i=>i.crmCustomers.data.customerList);const o=async i=>{};return e.jsx(Y,{ref:t,customer:r,onFormSubmit:o})});K.displayName="CustomerEditContent";const pe=({onSaveClick:s,onCancel:t})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(y,{size:"sm",className:"mr-2",onClick:t,children:"Cancel"}),e.jsx(y,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ce=()=>{const s=h(),t=p(a=>a.crmCustomers.data.drawerOpen),r=()=>{s(_()),s(N({}))},o=g.useRef(null),i=()=>{var a,l;console.log("formSubmit function called",(a=o.current)==null?void 0:a.values),(l=o.current)==null||l.submitForm()};return e.jsx(X,{isOpen:t,closable:!1,bodyClass:"p-0",footer:e.jsx(pe,{onCancel:r,onSaveClick:i}),onClose:r,onRequestClose:r,children:e.jsx(K,{ref:o})})},ge=()=>{const s=h(),t=p(a=>a.crmCustomers.data.deleteConfirmation),r=p(a=>a.crmCustomers.data.selectedCustomer),o=()=>{s(D(!1))},i=async()=>{var l,u,c;s(D(!1));const a=await s(J(r.id));(l=a==null?void 0:a.payload)!=null&&l.success?k.push(e.jsx(R,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=a==null?void 0:a.payload)==null?void 0:u.message}),{placement:"top-center"}):k.push(e.jsx(R,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=a==null?void 0:a.payload)==null?void 0:c.message}),{placement:"top-center"}),await s(S()),await s(E())};return e.jsx(ee,{isOpen:t,type:"danger",title:"Delete Client",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this client? All record related to this client will be deleted as well. This action cannot be undone."})})},he=({row:s})=>{const{textTheme:t}=O(),r=h(),o=()=>{r(F()),r(N(s))};return e.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},xe=({row:s})=>{const{textTheme:t}=O(),r=h(),o=async()=>{await r(N(s)),r(D(!0))};return e.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},fe=()=>{const s=h(),t=p(m=>m.crmCustomers.data.customerList),r=p(m=>m.crmCustomers.data.loading),o=v("clients","canModify"),i=v("clients","canDelete"),a=p(m=>m.crmCustomers.data.filterData),{pageIndex:l,pageSize:u,sort:c,query:x,total:T}=p(m=>m.crmCustomers.data.tableData),A=g.useCallback(()=>{s(S())},[s]);g.useEffect(()=>{A()},[A,l,u,c,a]);const f=g.useMemo(()=>({pageIndex:l,pageSize:u,sort:c,query:x,total:T}),[l,u,c,x,T]),q=g.useMemo(()=>{const m=[{header:"Clients Name",accessorKey:"clientName",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.clientName;return e.jsx(j,{text:C,maxLength:20})}},{header:"Clients Number",accessorKey:"contactInfo",cell:n=>n.row.original.contactInfo},{header:"Address",accessorKey:"address",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.address;return e.jsx(j,{text:C,maxLength:20})}},{header:"Billing Details",accessorKey:"billingDetails",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.billingDetails;return e.jsx(j,{text:C,maxLength:20})}},{header:"History",accessorKey:"history",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.history;return e.jsx(j,{text:C,maxLength:20})}},{header:"Notes",accessorKey:"notes",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.notes;return e.jsx(j,{text:C,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:n=>{var d;const C=((d=n.row.original)==null?void 0:d.tags)||[];return e.jsx(Z,{tags:C})}}];return i&&m.unshift({header:"Delete",id:"action",cell:n=>e.jsx(xe,{row:n.row.original})}),o&&m.unshift({header:"Edit",id:"action",cell:n=>e.jsx(he,{row:n.row.original})}),m},[o,i]),H=m=>{const n=b(f);n.pageIndex=m,s(w(n))},$=m=>{const n=b(f);n.pageSize=Number(m),n.pageIndex=1,s(w(n))},P=m=>{const n=b(f);n.sort=m,s(w(n))};return e.jsxs("div",{children:[e.jsx(V,{columns:q,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:r,pagingData:{total:f.total,pageIndex:f.pageIndex,pageSize:f.pageSize},onPaginationChange:H,onSelectChange:$,onSort:P}),e.jsx(Ce,{}),e.jsx(ge,{})]})},M=g.forwardRef((s,t)=>{const{onInputChange:r}=s,o=ne(i,500);function i(l){r==null||r(l)}const a=l=>{o(l.target.value)};return e.jsx(te,{ref:t,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(se,{className:"text-lg"}),onChange:a})});M.displayName="CustomerTableSearch";const{Control:je}=le,z=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],be=({innerProps:s,label:t,data:r,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(B,{innerClass:r.color}),e.jsx("span",{children:t})]}),o&&e.jsx(oe,{className:"text-emerald-500 text-xl"})]}),we=({children:s,...t})=>{const r=t.getValue()[0];return e.jsxs(je,{...t,children:[r&&e.jsx(B,{className:"ltr:ml-4 rtl:mr-4",innerClass:r.color}),s]})},ye=()=>{const s=h(),{status:t}=p(o=>o.crmCustomers.data.filterData),r=o=>{s(L({status:o==null?void 0:o.value}))};return e.jsx(ie,{options:z,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:be,Control:we},value:z.filter(o=>o.value===t),onChange:r})},De=()=>{const s=h(),t=g.useRef(null),r=p(c=>c.crmCustomers.data.tableData),o=v("clients","canCreate"),i=c=>{const x=b(r);x.query=c,x.pageIndex=1,typeof c=="string"&&c.length>1&&a(x),typeof c=="string"&&c.length===0&&a(x)},a=c=>{s(w(c)),s(S())},l=()=>{const c=b(r);c.query="",t.current&&(t.current.value=""),s(L({status:""})),a(c)},u=()=>{s(F())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(M,{ref:t,onInputChange:i}),e.jsx(ye,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(y,{size:"sm",className:"me-2",onClick:l,children:"Clear All"}),o&&e.jsx(y,{size:"sm",onClick:u,children:"Add New"})]})]})},I=s=>{const{icon:t,avatarClass:r,label:o,value:i,growthRate:a,loading:l}=s,u=55;return e.jsx(ce,{bordered:!0,children:e.jsx(U,{loading:l,customLoader:e.jsx(de,{avatarProps:{className:"rounded",width:u,height:u}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(me,{className:r,size:u,icon:t}),e.jsxs("div",{children:[e.jsx("span",{children:o}),e.jsx("h3",{children:e.jsx(ue,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},ve=()=>{var o,i,a,l;const s=h(),t=p(u=>u.crmCustomers.data.statisticData);console.log(t,"statisticData");const r=p(u=>u.crmCustomers.data.statisticLoading);return g.useEffect(()=>{s(E())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(I,{icon:e.jsx(re,{}),avatarClass:"!bg-indigo-600",label:"Total Clients",value:(o=t==null?void 0:t.totalCustomers)==null?void 0:o.value,growthRate:(i=t==null?void 0:t.totalCustomers)==null?void 0:i.growShrink,loading:r}),e.jsx(I,{icon:e.jsx(ae,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Clients",value:(a=t==null?void 0:t.newCustomers)==null?void 0:a.value,growthRate:(l=t==null?void 0:t.newCustomers)==null?void 0:l.growShrink,loading:r})]})};W("crmCustomers",Q);const Ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsxs(G,{bodyClass:"h-full",children:[e.jsx(De,{}),e.jsx(fe,{})]})]}),is=Ne;export{is as default};
