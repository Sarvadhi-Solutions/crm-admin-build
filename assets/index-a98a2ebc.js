import{r as g,a as h,j as e,ai as P,ar as U}from"./index-a9c93031.js";import{A as W}from"./AdaptableCard-cf701c87.js";import{D as G}from"./DataTable-a2373ee3.js";import{u as p,s as V,a as N,t as v,d as _,g as S,b as I,c as w,e as E,f as F,r as J}from"./AdditionalTag-3601d97f.js";import{u as L}from"./useThemeClass-297687ff.js";import{B as y}from"./Button-47bf58f7.js";import{D as Q}from"./Drawer-0a33fe5a.js";import{C as X}from"./CustomerForm-adbc9ac5.js";import{c as b}from"./cloneDeep-fd7929db.js";import{T as Y}from"./TagsList-fa5ab452.js";import{u as D}from"./checkEditUpdate-5e081b43.js";import{t as A,N as k}from"./toast-53c71514.js";import{C as Z}from"./ConfirmDialog-9363383a.js";import{T as j}from"./TextTruncate-5e1b0616.js";import{I as ee}from"./Input-b2bc5b3e.js";import{b as te,d as se,m as oe,A as re}from"./index.esm-37c3564c.js";import{d as ae}from"./debounce-da8ee35d.js";import{S as ne,c as ie}from"./Select-90b6020d.js";import{B as O}from"./Badge-c9ada007.js";import{C as le}from"./Card-6b8166bd.js";import{A as ce}from"./index-7cf9b27e.js";import{M as me}from"./MediaSkeleton-d0490e4a.js";import{N as de}from"./react-number-format.es-59b8879d.js";import"./index-10dbbba6.js";import"./index.esm-556fe943.js";import"./Pagination-acf3b7e4.js";import"./index-f4f34168.js";import"./_Uint8Array-64cf78a6.js";import"./_MapCache-83d2f18f.js";import"./Views-0c5423a6.js";import"./_baseIsEqual-5cfefaa3.js";import"./get-0157bd52.js";import"./toString-60f65c59.js";import"./TableRowSkeleton-dd368555.js";import"./Skeleton-772a6f71.js";import"./index-b8d32cfc.js";import"./formik.esm-4acf00de.js";import"./Alert-5526c2c4.js";import"./useTimeout-3babeb43.js";import"./CloseButton-ef1c868b.js";import"./StatusIcon-b453f46b.js";import"./Calendar-163be9bf.js";import"./useControllableState-0bc3ffd1.js";import"./index-998e4641.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-6d54f280.js";import"./usePopper-0066ca78.js";import"./RangeCalendar-6b212005.js";import"./TimeInput-e8071d5e.js";import"./useUniqueId-b18fc966.js";import"./useDidUpdate-578d5c1c.js";import"./Dialog-5ef978d2.js";import"./index-0569d7d3.js";import"./index-137f6e4f.js";import"./useUncertainRef-762e062e.js";import"./isNil-f7d4f3b6.js";import"./index-0b68a97f.js";import"./chainedFunction-070f832c.js";import"./index-4104c7c5.js";import"./FormItem-493c2060.js";import"./context-6d5d8fe5.js";import"./index-34c577ad.js";import"./index-9de29f90.js";import"./Progress-065bbc0b.js";import"./index-803b614c.js";import"./ScrollBar-ad1c4e83.js";import"./index-34112b0a.js";import"./index-cfb9e54d.js";import"./mapCloneElement-d91bf257.js";import"./Switcher-631d0666.js";import"./index-cbfb4a92.js";import"./Tag-624637b7.js";import"./index-2600a77d.js";import"./index-4aad4bac.js";import"./Tooltip-4f11c588.js";import"./index.esm-2eb9a221.js";import"./Upload-1dc8ae7e.js";import"./index.esm-c8841de1.js";import"./index.esm-6aa89ade.js";import"./CrmService-dbb90e89.js";import"./index.esm-e5cd3259.js";import"./index.esm-a6162b89.js";import"./tagAndCategory-5a004efc.js";/* empty css              */import"./_getPrototype-71e29649.js";import"./slicedToArray-be8619ee.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-ccb51e40.js";import"./floating-ui.dom-bef9cea3.js";const B=g.forwardRef((s,t)=>{h();const r=p(i=>i.crmCustomers.data.selectedCustomer);p(i=>i.crmCustomers.data.customerList);const o=async i=>{};return e.jsx(X,{ref:t,customer:r,onFormSubmit:o})});B.displayName="CustomerEditContent";const ue=({onSaveClick:s,onCancel:t})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(y,{size:"sm",className:"mr-2",onClick:t,children:"Cancel"}),e.jsx(y,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),pe=()=>{const s=h(),t=p(a=>a.crmCustomers.data.drawerOpen),r=()=>{s(V()),s(N({}))},o=g.useRef(null),i=()=>{var a,l;console.log("formSubmit function called",(a=o.current)==null?void 0:a.values),(l=o.current)==null||l.submitForm()};return e.jsx(Q,{isOpen:t,closable:!1,bodyClass:"p-0",footer:e.jsx(ue,{onCancel:r,onSaveClick:i}),onClose:r,onRequestClose:r,children:e.jsx(B,{ref:o})})},Ce=()=>{const s=h(),t=p(a=>a.crmCustomers.data.deleteConfirmation),r=p(a=>a.crmCustomers.data.selectedCustomer),o=()=>{s(v(!1))},i=async()=>{var l,u,c;s(v(!1));const a=await s(_(r.id));(l=a==null?void 0:a.payload)!=null&&l.success?A.push(e.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=a==null?void 0:a.payload)==null?void 0:u.message}),{placement:"top-end"}):A.push(e.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(c=a==null?void 0:a.error)==null?void 0:c.message}),{placement:"top-end"}),await s(S()),await s(I())};return e.jsx(Z,{isOpen:t,type:"danger",title:"Delete Client",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this client? All record related to this client will be deleted as well. This action cannot be undone."})})},ge=({row:s})=>{const{textTheme:t}=L(),r=h(),o=()=>{r(E()),r(N(s))};return e.jsx("div",{className:`${t} cursor-pointer select-none font-semibold`,onClick:o,children:"Edit"})},he=({row:s})=>{const{textTheme:t}=L(),r=h(),o=async()=>{await r(N(s)),r(v(!0))};return e.jsx("div",{className:`${t} cursor-pointer select-none font-semibold text-red-500`,onClick:o,children:"Delete"})},xe=()=>{const s=h(),t=p(m=>m.crmCustomers.data.displayedCustomersList),r=p(m=>m.crmCustomers.data.loading),o=D("clients","canModify"),i=D("clients","canDelete");p(m=>m.crmCustomers.data.filterData);const{pageIndex:a,pageSize:l,sort:u,query:c,total:x}=p(m=>m.crmCustomers.data.tableData),T=g.useCallback(()=>{s(S())},[s]);g.useEffect(()=>{T()},[T]);const f=g.useMemo(()=>({pageIndex:a,pageSize:l,sort:u,query:c,total:x}),[a,l,u,c,x]),M=g.useMemo(()=>{const m=[{header:"Clients Name",accessorKey:"clientName",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.clientName;return e.jsx(j,{text:C,maxLength:20})}},{header:"Clients Number",accessorKey:"contactInfo",cell:n=>n.row.original.contactInfo},{header:"Address",accessorKey:"address",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.address;return e.jsx(j,{text:C,maxLength:20})}},{header:"Billing Details",accessorKey:"billingDetails",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.billingDetails;return e.jsx(j,{text:C,maxLength:20})}},{header:"History",accessorKey:"history",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.history;return e.jsx(j,{text:C,maxLength:20})}},{header:"Notes",accessorKey:"notes",cell:n=>{var d;const C=(d=n.row.original)==null?void 0:d.notes;return e.jsx(j,{text:C,maxLength:20})}},{header:"Tag Name",accessorKey:"tagName",cell:n=>{var d;const C=((d=n.row.original)==null?void 0:d.tags)||[];return e.jsx(Y,{tags:C})}}];return i&&m.unshift({header:"Delete",id:"action",cell:n=>e.jsx(he,{row:n.row.original})}),o&&m.unshift({header:"Edit",id:"action",cell:n=>e.jsx(ge,{row:n.row.original})}),m},[o,i]),q=m=>{const n=b(f);n.pageIndex=m,s(w(n))},H=m=>{const n=b(f);n.pageSize=Number(m),n.pageIndex=1,s(w(n))},$=m=>{const n=b(f);n.sort=m,s(w(n))};return e.jsxs("div",{children:[e.jsx(G,{columns:M,data:t,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:r,pagingData:{total:f.total,pageIndex:f.pageIndex,pageSize:f.pageSize},onPaginationChange:q,onSelectChange:H,onSort:$}),e.jsx(pe,{}),e.jsx(Ce,{})]})},K=g.forwardRef((s,t)=>{const{onInputChange:r}=s,o=ae(i,500);function i(l){r==null||r(l)}const a=l=>{o(l.target.value)};return e.jsx(ee,{ref:t,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(te,{className:"text-lg"}),onChange:a})});K.displayName="CustomerTableSearch";const{Control:fe}=ie,R=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],je=({innerProps:s,label:t,data:r,isSelected:o})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${o?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...s,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{innerClass:r.color}),e.jsx("span",{children:t})]}),o&&e.jsx(se,{className:"text-emerald-500 text-xl"})]}),be=({children:s,...t})=>{const r=t.getValue()[0];return e.jsxs(fe,{...t,children:[r&&e.jsx(O,{className:"ltr:ml-4 rtl:mr-4",innerClass:r.color}),s]})},we=()=>{const s=h(),{status:t}=p(o=>o.crmCustomers.data.filterData),r=o=>{s(F({status:o==null?void 0:o.value}))};return e.jsx(ne,{options:R,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:je,Control:be},value:R.filter(o=>o.value===t),onChange:r})},ye=()=>{const s=h(),t=g.useRef(null),r=p(c=>c.crmCustomers.data.tableData),o=D("clients","canCreate"),i=c=>{const x=b(r);x.query=c,x.pageIndex=1,typeof c=="string"&&c.length>1&&a(x),typeof c=="string"&&c.length===0&&a(x)},a=c=>{s(w(c)),s(S())},l=()=>{const c=b(r);c.query="",t.current&&(t.current.value=""),s(F({status:""})),a(c)},u=()=>{s(E())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(K,{ref:t,onInputChange:i}),e.jsx(we,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(y,{size:"sm",className:"me-2",onClick:l,children:"Clear All"}),o&&e.jsx(y,{size:"sm",onClick:u,children:"Add New"})]})]})},z=s=>{const{icon:t,avatarClass:r,label:o,value:i,growthRate:a,loading:l}=s,u=55;return e.jsx(le,{bordered:!0,children:e.jsx(P,{loading:l,customLoader:e.jsx(me,{avatarProps:{className:"rounded",width:u,height:u}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(ce,{className:r,size:u,icon:t}),e.jsxs("div",{children:[e.jsx("span",{children:o}),e.jsx("h3",{children:e.jsx(de,{thousandSeparator:!0,displayType:"text",value:i})})]})]})})})})},ve=()=>{var o,i,a,l;const s=h(),t=p(u=>u.crmCustomers.data.statisticData);console.log(t,"statisticData");const r=p(u=>u.crmCustomers.data.statisticLoading);return g.useEffect(()=>{s(I())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(z,{icon:e.jsx(oe,{}),avatarClass:"!bg-indigo-600",label:"Total Clients",value:(o=t==null?void 0:t.totalCustomers)==null?void 0:o.value,growthRate:(i=t==null?void 0:t.totalCustomers)==null?void 0:i.growShrink,loading:r}),e.jsx(z,{icon:e.jsx(re,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Clients",value:(a=t==null?void 0:t.newCustomers)==null?void 0:a.value,growthRate:(l=t==null?void 0:t.newCustomers)==null?void 0:l.growShrink,loading:r})]})};U("crmCustomers",J);const De=()=>e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsxs(W,{bodyClass:"h-full",children:[e.jsx(ye,{}),e.jsx(xe,{})]})]}),ls=De;export{ls as default};
