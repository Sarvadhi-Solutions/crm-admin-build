import{r as g,a as h,j as e,ai as U,ar as W}from"./index-7c10d2a3.js";import{A as G}from"./AdaptableCard-d528512e.js";import{D as V}from"./DataTable-9505e436.js";import{u as p,s as _,a as N,b as D,d as J,g as S,e as E,f as w,h as F,i as L,r as Q}from"./AdditionalTag-1da179a1.js";import{u as O}from"./useThemeClass-44058c3e.js";import{B as y}from"./Button-208b5861.js";import{D as X}from"./Drawer-f62ae817.js";import{C as Y}from"./CustomerForm-00146635.js";import{c as b}from"./cloneDeep-b9fa1e05.js";import{a as j,T as Z}from"./TextTruncate-11b5f642.js";import{u as v}from"./checkEditUpdate-58567b5b.js";import{t as k,N as R}from"./toast-1b1e93c9.js";import{C as ee}from"./ConfirmDialog-cb7325f0.js";import{I as te}from"./Input-81114df0.js";import{b as se,d as oe,m as re,A as ae}from"./index.esm-d9298b40.js";import{d as ne}from"./debounce-1dc8077b.js";import{S as ie,c as le}from"./Select-013d671c.js";import{B}from"./Badge-96f53043.js";import{C as ce}from"./Card-4ce3f213.js";import{A as me}from"./index-e31e1427.js";import{M as de}from"./MediaSkeleton-0e958ed4.js";import{N as ue}from"./react-number-format.es-ddce5a63.js";import"./index-db1f8ae2.js";import"./index.esm-8bc236a5.js";import"./Pagination-16369f4c.js";import"./index-7ee2fb06.js";import"./_Uint8Array-be229bd0.js";import"./_MapCache-e75dc2ce.js";import"./Views-5cb69e9a.js";import"./_baseIsEqual-47871e7b.js";import"./get-5a481960.js";import"./toString-18e1007d.js";import"./TableRowSkeleton-9a6a577f.js";import"./Skeleton-f2ce5fc2.js";import"./index-92fee75d.js";import"./formik.esm-9efe14ff.js";import"./Alert-81c5f29e.js";import"./useTimeout-6476564d.js";import"./CloseButton-7345a4c9.js";import"./StatusIcon-8f517345.js";import"./Calendar-0d3223b7.js";import"./useControllableState-8172e3e5.js";import"./index-dbc56270.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-06442b2e.js";import"./usePopper-80f33697.js";import"./RangeCalendar-e91d83a1.js";import"./TimeInput-2304b736.js";import"./useUniqueId-ade48d2a.js";import"./useDidUpdate-048f50b6.js";import"./Dialog-ab50fc44.js";import"./index-72e63a8f.js";import"./index-ddb7b536.js";import"./useUncertainRef-4da6c90d.js";import"./isNil-d3ca72b8.js";import"./index-be56d80d.js";import"./chainedFunction-070f832c.js";import"./index-8f8a0e52.js";import"./FormItem-dcfd8ab9.js";import"./context-0e2e9d1c.js";import"./index-c64ed13c.js";import"./index-e1f31fe1.js";import"./Progress-f85f5579.js";import"./index-2a6b01a7.js";import"./ScrollBar-ab3bf32a.js";import"./index-33ad8488.js";import"./index-0e69abbd.js";import"./mapCloneElement-4b3cb8e0.js";import"./Switcher-08c2e9d8.js";import"./index-5aafa10e.js";import"./Tag-b24b6dab.js";import"./index-36a050cd.js";import"./index-a034b741.js";import"./Tooltip-6aa5489c.js";import"./index.esm-db0614cf.js";import"./Upload-bfebe208.js";import"./index.esm-3bb8beeb.js";import"./index.esm-f80d5ef4.js";import"./CrmService-d5e8e120.js";import"./index.esm-a61d5a6d.js";import"./index.esm-900894b4.js";/* empty css              */import"./_getPrototype-2f204ca7.js";import"./slicedToArray-afe06b21.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-2133173c.js";import"./floating-ui.dom-bef9cea3.js";const K=g.forwardRef((s,t)=>{h();const r=p(i=>i.crmCustomers.data.selectedCustomer);p(i=>i.crmCustomers.data.customerList);const o=async i=>{};return e.jsx(Y,{ref:t,customer:r,onFormSubmit:o})});K.displayName="CustomerEditContent";const pe=({onSaveClick:s,onCancel:t})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(y,{size:"sm",className:"mr-2",onClick:t,children:"Cancel"}),e.jsx(y,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ce=()=>{const s=h(),t=p(a=>a.crmCustomers.data.drawerOpen),r=()=>{s(_()),s(N({}))},o=g.useRef(null),i=()=>{var a,l;console.log("formSubmit function called",(a=o.current)==null?void 0:a.values),(l=o.current)==null||l.submitForm()};return e.jsx(X,{isOpen:t,closable:!1,bodyClass:"p-0",footer:e.jsx(pe,{onCancel:r,onSaveClick:i}),onClose:r,onRequestClose:r,children:e.jsx(K,{ref:o})})},ge=()=>{const s=h(),t=p(a=>a.crmCustomers.data.deleteConfirmation),r=p(a=>a.crmCustomers.data.selectedCustomer),o=()=>{s(D(!1))},i=async()=>{var l,u,c;s(D(!1));const a=await s(J(r.id));(l=a==null?void 0:a.payload)!=null&&l.success?k.push(e.jsx(R,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=a==null?void 0:a.payload)==null?void 0:u.message}),{placement:"top-center"}):k.push(e.jsx(R,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=a==null?void 0:a.payload)==null?void 0:c.message}),{placement:"top-center"}),await s(S()),await s(E())};return e.jsx(ee,{isOpen:t,type:"danger",title:"Delete Client",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this client? All record related to this client will be deleted as well. This action cannot be undone."})})},he=({row:s})=>{const{textTheme:t}=O(),r=h(),o=()=>{r(F()),r(N(s))};return e.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},xe=({row:s})=>{const{textTheme:t}=O(),r=h(),o=async()=>{await r(N(s)),r(D(!0))};return e.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},fe=()=>{const s=h(),t=p(m=>m.crmCustomers.data.customerList),r=p(m=>m.crmCustomers.data.loading),o=v("clients","canModify"),i=v("clients","canDelete"),a=p(m=>m.crmCustomers.data.filterData),{pageIndex:l,pageSize:u,sort:c,query:x,total:T}=p(m=>m.crmCustomers.data.tableData),A=g.useCallback(()=>{s(S())},[s]);g.useEffect(()=>{A()},[A,l,u,c,a]);const f=g.useMemo(()=>({pageIndex:l,pageSize:u,sort:c,query:x,total:T}),[l,u,c,x,T]),q=g.useMemo(()=>{const m=[{header:"Clients Name",accessorKey:"clientName",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.clientName;return e.jsx(j,{text:C,maxLength:20})}},{header:"Clients Number",accessorKey:"contactInfo",cell:n=>n.row.original.contactInfo},{header:"Address",accessorKey:"address",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.address;return e.jsx(j,{text:C,maxLength:20})}},{header:"Billing Details",accessorKey:"billingDetails",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.billingDetails;return e.jsx(j,{text:C,maxLength:20})}},{header:"History",accessorKey:"history",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.history;return e.jsx(j,{text:C,maxLength:20})}},{header:"Notes",accessorKey:"notes",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.notes;return e.jsx(j,{text:C,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:n=>{var d;const C=((d=n.row.original)==null?void 0:d.tags)||[];return e.jsx(Z,{tags:C})}}];return i&&m.unshift({header:"Delete",id:"action",cell:n=>e.jsx(xe,{row:n.row.original})}),o&&m.unshift({header:"Edit",id:"action",cell:n=>e.jsx(he,{row:n.row.original})}),m},[o,i]),H=m=>{const n=b(f);n.pageIndex=m,s(w(n))},$=m=>{const n=b(f);n.pageSize=Number(m),n.pageIndex=1,s(w(n))},P=m=>{const n=b(f);n.sort=m,s(w(n))};return e.jsxs("div",{children:[e.jsx(V,{columns:q,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:r,pagingData:{total:f.total,pageIndex:f.pageIndex,pageSize:f.pageSize},onPaginationChange:H,onSelectChange:$,onSort:P}),e.jsx(Ce,{}),e.jsx(ge,{})]})},M=g.forwardRef((s,t)=>{const{onInputChange:r}=s,o=ne(i,500);function i(l){r==null||r(l)}const a=l=>{o(l.target.value)};return e.jsx(te,{ref:t,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(se,{className:"text-lg"}),onChange:a})});M.displayName="CustomerTableSearch";const{Control:je}=le,z=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],be=({innerProps:s,label:t,data:r,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(B,{innerClass:r.color}),e.jsx("span",{children:t})]}),o&&e.jsx(oe,{className:"text-emerald-500 text-xl"})]}),we=({children:s,...t})=>{const r=t.getValue()[0];return e.jsxs(je,{...t,children:[r&&e.jsx(B,{className:"ltr:ml-4 rtl:mr-4",innerClass:r.color}),s]})},ye=()=>{const s=h(),{status:t}=p(o=>o.crmCustomers.data.filterData),r=o=>{s(L({status:o==null?void 0:o.value}))};return e.jsx(ie,{options:z,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:be,Control:we},value:z.filter(o=>o.value===t),onChange:r})},De=()=>{const s=h(),t=g.useRef(null),r=p(c=>c.crmCustomers.data.tableData),o=v("clients","canCreate"),i=c=>{const x=b(r);x.query=c,x.pageIndex=1,typeof c=="string"&&c.length>1&&a(x),typeof c=="string"&&c.length===0&&a(x)},a=c=>{s(w(c)),s(S())},l=()=>{const c=b(r);c.query="",t.current&&(t.current.value=""),s(L({status:""})),a(c)},u=()=>{s(F())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(M,{ref:t,onInputChange:i}),e.jsx(ye,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(y,{size:"sm",className:"me-2",onClick:l,children:"Clear All"}),o&&e.jsx(y,{size:"sm",onClick:u,children:"Add New"})]})]})},I=s=>{const{icon:t,avatarClass:r,label:o,value:i,growthRate:a,loading:l}=s,u=55;return e.jsx(ce,{bordered:!0,children:e.jsx(U,{loading:l,customLoader:e.jsx(de,{avatarProps:{className:"rounded",width:u,height:u}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(me,{className:r,size:u,icon:t}),e.jsxs("div",{children:[e.jsx("span",{children:o}),e.jsx("h3",{children:e.jsx(ue,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},ve=()=>{var o,i,a,l;const s=h(),t=p(u=>u.crmCustomers.data.statisticData);console.log(t,"statisticData");const r=p(u=>u.crmCustomers.data.statisticLoading);return g.useEffect(()=>{s(E())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(I,{icon:e.jsx(re,{}),avatarClass:"!bg-indigo-600",label:"Total Clients",value:(o=t==null?void 0:t.totalCustomers)==null?void 0:o.value,growthRate:(i=t==null?void 0:t.totalCustomers)==null?void 0:i.growShrink,loading:r}),e.jsx(I,{icon:e.jsx(ae,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Clients",value:(a=t==null?void 0:t.newCustomers)==null?void 0:a.value,growthRate:(l=t==null?void 0:t.newCustomers)==null?void 0:l.growShrink,loading:r})]})};W("crmCustomers",Q);const Ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsxs(G,{bodyClass:"h-full",children:[e.jsx(De,{}),e.jsx(fe,{})]})]}),is=Ne;export{is as default};
