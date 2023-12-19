import{a as v,r as C,j as e,ah as ye,ap as Le,as as Ne,aq as De}from"./index-ba91c0fd.js";import{A as ve}from"./AdaptableCard-3bfc48fe.js";import{F as le}from"./FormDesription-4fcee828.js";import{C as we}from"./Card-b0a5a7d6.js";import{A as Se}from"./index-e15db965.js";import{M as Te}from"./MediaSkeleton-86854a39.js";import{u as f,g as te,t as ee,d as Ie,a as O,b as Ae,c as Fe,f as Ee,e as ke,h as ae,i as Me,s as de,j as Oe,k as M,l as B,m as z,n as me,r as Re}from"./index-4afb7bb9.js";import{o as qe,M as ze,C as Ve,N as Be,O as $e,P as We,b as Pe}from"./index.esm-55e99400.js";import{N as Ke}from"./react-number-format.es-b5c5e730.js";import{D as He}from"./DataTable-e5657712.js";import{S as Ge}from"./StatusCapsule-2ed06a7d.js";import{T as Ue}from"./TagsList-93c3b92a.js";import{T as R}from"./TextTruncate-c2f805d1.js";import{u as _}from"./checkEditUpdate-c80a1265.js";import{u as _e}from"./useThemeClass-06f59d25.js";import{c as J}from"./cloneDeep-641ee2c7.js";import{t as $,N as W}from"./toast-b9105828.js";import{C as Je}from"./ConfirmDialog-22f316d7.js";import{B as P}from"./Button-4d442f63.js";import{D as Qe}from"./Drawer-f1cc950e.js";import{a as T,F as ue}from"./FormItem-01999f29.js";import{T as pe}from"./index-af9b375a.js";import{u as Xe,b as I,F as xe,a as he}from"./formik.esm-e5286689.js";import{c as ge,a as q,d as Ye,e as Ze}from"./index.esm-34e21a5e.js";import{I as A}from"./Input-529114bc.js";/* empty css              */import"./Alert-5d4fd2a9.js";import"./Badge-ff5c7dc3.js";import"./RangeCalendar-d6aa435b.js";import"./index-170572b2.js";import"./index-68178362.js";import{D as et}from"./Dialog-c161d2fe.js";import"./index-b648c4d1.js";import"./toString-727d28b4.js";import"./index-1c2b060b.js";import"./index-0bf35a02.js";import"./index-ccd97808.js";import"./Pagination-f4c26df7.js";import"./Progress-ab444eaf.js";import"./index-75ffb2be.js";import"./ScrollBar-1f3fb77b.js";import"./index-d176cad0.js";import{S as ie}from"./Select-73b9b11b.js";import"./Skeleton-83cb992f.js";import"./index-2c4fd68d.js";import"./Switcher-49168a68.js";import"./index-fe0659a6.js";import"./Tag-b9db9ffe.js";import"./index-60bed537.js";import"./index-a469d783.js";import{T as k}from"./Tooltip-d4e69970.js";import"./Upload-bbbb3749.js";import{t as tt}from"./tagAndCategory-228f57e7.js";import{B as at,a as st}from"./index.esm-5fbbd29b.js";import{G as rt}from"./index.esm-c6afaa9b.js";import{M as ot}from"./index.esm-713a6ce3.js";import{T as nt,a as it}from"./index.esm-d714fba5.js";import{B as ce}from"./index.esm-fc375313.js";import{A as ct,a as lt}from"./index.esm-7ccba11f.js";import"./Views-e9280400.js";import"./chart.constant-9aef5f29.js";import"./GrowShrinkTag-ff05a215.js";import"./react-tooltip.min-f0729f09.js";import"./RichTextEditor-49d25ea9.js";import"./SegmentItemOption-d89e5f60.js";import{S as dt}from"./StickyFooter-676aaab1.js";import"./SvgIcon-c2eb96e6.js";import{G as mt}from"./index.esm-8a83eb23.js";import{s as ut}from"./index-a42a902c.js";import{d as pt}from"./debounce-97eb29be.js";import"./useMergeRef-788c4cb0.js";import"./CrmService-46d16590.js";import"./index-31253325.js";import"./_MapCache-52b86039.js";import"./_getPrototype-17f2df3f.js";import"./useTimeout-80ea9231.js";import"./CloseButton-7e3ca34d.js";import"./StatusIcon-721e0795.js";import"./chainedFunction-070f832c.js";import"./index-9a9b01aa.js";import"./index-8ea85167.js";import"./useControllableState-f5082273.js";import"./isNil-5f65db87.js";import"./get-86e63167.js";import"./_baseIsEqual-ea007e01.js";import"./useRootClose-8f322f83.js";import"./usePopper-549b69fd.js";import"./TimeInput-6aa1e7b6.js";import"./useUniqueId-018c2565.js";import"./useDidUpdate-855f950c.js";import"./useUncertainRef-41d92c6b.js";import"./slicedToArray-558a0a0c.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5585411f.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-db46c91a.js";import"./index.esm-1fe268c9.js";import"./index.esm-e7d17c5f.js";import"./index-0b6a2ffd.js";import"./index-74a4255b.js";const Z=a=>{const{icon:n,avatarClass:t,label:x,value:h,loading:i}=a,d=55;return e.jsx(we,{bordered:!0,children:e.jsx(ye,{loading:i,customLoader:e.jsx(Te,{avatarProps:{className:"rounded",width:d,height:d}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(Se,{className:t,size:d,icon:n}),e.jsxs("div",{children:[e.jsx("span",{children:x}),e.jsx("h3",{children:e.jsx(Ke,{thousandSeparator:!0,displayType:"text",value:h})})]})]})})})})},xt=()=>{const a=v(),n=f(x=>x.crmLeads.data.statisticData),t=f(x=>x.crmLeads.data.statisticLoading);return C.useEffect(()=>{a(te())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(Z,{icon:e.jsx(qe,{}),avatarClass:"!bg-indigo-600",label:"Total Leads",value:n.totalLeads,growthRate:n==null?void 0:n.totalLeads,loading:t}),e.jsx(Z,{icon:e.jsx(ze,{}),avatarClass:"!bg-blue-500",label:"Open Leads",value:n.openLeads,growthRate:n.openLeads,loading:t}),e.jsx(Z,{icon:e.jsx(Ve,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Leads",value:n==null?void 0:n.newLeads,growthRate:n==null?void 0:n.newLeads,loading:t})]})},ht=()=>{const a=v(),n=f(i=>i.crmLeads.data.deleteConfirmation),t=f(i=>i.crmLeads.data.selectedLeads),x=()=>{a(ee(!1))},h=async()=>{var d,l,m;a(ee(!1));const i=await a(Ie(t.id));await a(O()),(d=i==null?void 0:i.payload)!=null&&d.success?$.push(e.jsx(W,{title:"Successfuly Deleted",type:"success",duration:2500,children:(l=i==null?void 0:i.payload)==null?void 0:l.message}),{placement:"top-end"}):$.push(e.jsx(W,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(m=i==null?void 0:i.error)==null?void 0:m.message}),{placement:"top-end"}),await a(O()),await a(te())};return e.jsx(Je,{isOpen:n,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:x,onRequestClose:x,onCancel:x,onConfirm:h,children:e.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this lead will be deleted as well. This action cannot be undone."})})},V=[],gt=a=>{const{touched:n,errors:t,setFieldValue:x,values:h}=a,i=v(),d=Xe(),[l,m]=C.useState(null),[D,r]=C.useState([]),g=f(s=>s.crmLeads.data.contactList);V.length=0;const b={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},u=f(s=>{var j;return(j=s.crmLeads.data.customField)==null?void 0:j.data});f(s=>s.crmLeads.data.leadsList),g==null||g.forEach(s=>{V.push({value:s==null?void 0:s.id,label:`${s==null?void 0:s.firstName} ${s==null?void 0:s.lastName}`})}),C.useEffect(()=>{const s=async()=>{var j,L;try{const{payload:N}=await i(Ee()),F=(j=N==null?void 0:N.data)==null?void 0:j.find(w=>(w==null?void 0:w.moduleName)==="leads");if(F){const{payload:w}=await i(ke({id:(L=F==null?void 0:F.id)==null?void 0:L.toString()})),o=tt(w.data);r(o)}}catch(N){console.error("Error fetching module data:",N)}};m(h.contactsDataId),s(),i(Ae()),i(Fe())},[i]),f(s=>{var j,L;return(L=(j=s.crmLeads)==null?void 0:j.data)==null?void 0:L.selectedLeads});const y=s=>{d.setFieldValue("tagId",s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(T,{label:"Contact Name",invalid:t.contactsDataId&&n.contactsDataId,errorMessage:t.contactsDataId,children:e.jsx(ie,{name:"contactsDataId",placeholder:"Contact Name",options:V,id:"contactsDataId",value:V.find(s=>(s==null?void 0:s.value)===(h==null?void 0:h.contactsDataId)),onChange:s=>{const j=s.value;x("email",""),x("contactNumber",""),m(j),x("contactsDataId",j)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(T,{label:"Title*",invalid:t.title&&n.title,errorMessage:t.title,children:e.jsx(I,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:A,prefix:e.jsx(ot,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[!l&&e.jsx("div",{className:"col-span-1",children:e.jsx(T,{label:"Email*",invalid:t.email&&n.email,errorMessage:t.email,children:e.jsx(I,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:A,prefix:e.jsx(Be,{className:"text-xl"})})})}),!l&&e.jsx("div",{className:"col-span-1",children:e.jsx(T,{label:"Contact Number*",invalid:t.contactNumber&&n.contactNumber,errorMessage:t.contactNumber,children:e.jsx(I,{type:"text",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:A,prefix:e.jsx(at,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(T,{label:"Budget",invalid:t.budget&&n.budget,errorMessage:t.budget,children:e.jsx(I,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:A,prefix:e.jsx(st,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(T,{label:"Tag",children:e.jsx(I,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:ie,options:D,prefix:e.jsx(rt,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:y})})})]}),e.jsx(T,{label:"Notes",invalid:t.notes&&n.notes,errorMessage:t.notes,children:e.jsx(I,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Notes",component:A,prefix:e.jsx(nt,{className:"text-xl"})})}),(u==null?void 0:u.length)>0?e.jsxs(e.Fragment,{children:[" ",e.jsx(le,{title:"Additional Details",desc:"",className:"mb-2"}),e.jsx("div",{style:b,children:u==null?void 0:u.map(s=>e.jsx("div",{children:e.jsx(T,{label:s==null?void 0:s.label,children:s.inputType==="textArea"?e.jsx(I,{textArea:!0,type:"text",autoComplete:"off",name:s.name,placeholder:s==null?void 0:s.label,defaultValue:s.defaultValue,component:A,prefix:e.jsx(ce,{className:"text-xl"})}):e.jsx(I,{type:s.inputType,autoComplete:"off",name:s.name,placeholder:s==null?void 0:s.label,defaultValue:s.defaultValue,component:A,prefix:e.jsx(ce,{className:"text-xl"})})})},s.id))})]}):null]})},ft=ge().shape({title:q().required("Title is required"),notes:q(),contactNumber:q().test("validateContactNumber","Invalid contact number",function(a){if(!this.parent.contactsDataId){if(!a)return this.createError({message:"Contact is required"});const t=Number(a);if(isNaN(t))return this.createError({message:"Contact must be a number"});if(a.length!==10)return this.createError({message:"Contact must have exactly 10 digits"});if(a.startsWith("0"))return this.createError({message:"Contact number cannot start with 0"})}return!0}),email:q().test("validateEmail","Invalid email",function(a){return this.parent.contactsDataId?!0:!!a||this.createError({message:"Email is required"})}),budget:Ye().test("greaterThanOne","Budget must be greater than 1",a=>a>0).required("Budget is required"),tagId:Ze(),contactsDataId:q().test("is-valid-contact","Invalid contact selected",function(a){return this.parent.contactsDataId&&this.parent.contactsDataId.length>0?!!V.find(n=>n.value===a):!0})}),{TabNav:jt,TabList:bt,TabContent:Ct}=pe,fe=C.forwardRef((a,n)=>{var m,D;const t=f(r=>r.crmLeads.data.selectedLeads),x=!!t.id,h=f(r=>{var g,b,u;return(u=(b=(g=r.crmLeads)==null?void 0:g.data)==null?void 0:b.customField)==null?void 0:u.data}),i=v(),d=async(r,g,b)=>{var s,j,L,N;const u=(s=r==null?void 0:r.payload)!=null&&s.success?g:"Something went wrong !!!",y=(j=r==null?void 0:r.payload)!=null&&j.success?(L=r==null?void 0:r.payload)==null?void 0:L.message:b;$.push(e.jsx(W,{title:u,type:(N=r==null?void 0:r.payload)!=null&&N.success?"success":"danger",duration:2500,children:y}),{placement:"top-end"})},l=async(r,{setSubmitting:g})=>{const b=h.reduce((u,y)=>(u[y.name]=r[y.name],u),{});try{const u={title:r.title,contactsDataId:r.contactsDataId,email:r.email,contactNumber:r.contactNumber,budget:r.budget.toString(),description:r.notes,tagId:r==null?void 0:r.tagId.map(w=>w.value),...b},{name:y,tagName:s,...j}=r,L=x?await i(ae({leadsId:(t==null?void 0:t.id)||"",updatedData:u})):await i(Me(u));await d(L,x?"Successfully Updated":"Successfully Added","An error occurred."),i(de()),await Promise.all([i(O()),i(te())])}catch(u){console.error("An error occurred:",u)}finally{g(!1)}};return e.jsx(xe,{innerRef:n,initialValues:{contactsDataId:t.contactsDataId||"",title:(t==null?void 0:t.title)||"",notes:(t==null?void 0:t.description)||"",tagId:((m=t==null?void 0:t.tags)==null?void 0:m.map(r=>({label:r.tagName,value:r.id})))||[],budget:(t==null?void 0:t.budget)||"",contactNumber:(t==null?void 0:t.contactNumber)||"",email:(t==null?void 0:t.email)||"",...(D=t==null?void 0:t.leadFields)==null?void 0:D.reduce((r,g)=>(r[g.customKey.name]=g.value||"",r),{})},validationSchema:ft,onSubmit:l,children:({touched:r,errors:g,values:b,setFieldValue:u})=>e.jsx(he,{children:e.jsx(ue,{children:e.jsxs(pe,{defaultValue:"leadsInfo",children:[e.jsx(bt,{children:e.jsx(jt,{value:"leadsInfo",children:"Leads Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ct,{value:"leadsInfo",children:e.jsx(gt,{touched:r,errors:g,setFieldValue:u,values:b})})})]})})})})});fe.displayName="LeadsForm";const je=C.forwardRef((a,n)=>{v();const t=f(h=>{var i,d;return(d=(i=h.crmLeads)==null?void 0:i.data)==null?void 0:d.selectedLeads});f(h=>h.crmLeads.data.leadsList);const x=async h=>{};return e.jsx(fe,{ref:n,leads:t,onFormSubmit:x})});je.displayName="LeadsEditContent";const yt=({onSaveClick:a,onCancel:n})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(P,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),e.jsx(P,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Lt=()=>{const a=v(),n=f(m=>m.crmLeads.data.drawerOpen),[t,x]=C.useState(window.innerWidth/2),h=()=>{a(de()),a(M({}))},i=C.useRef(null),d=()=>{var m;(m=i.current)==null||m.submitForm()};C.useEffect(()=>(window.addEventListener("resize",l),a(Oe()),()=>{window.removeEventListener("resize",l)}),[]);const l=()=>{x(window.innerWidth/2)};return e.jsx(Qe,{isOpen:n,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(yt,{onCancel:h,onSaveClick:d}),onClose:h,onRequestClose:h,children:e.jsx(je,{ref:i})})},Nt=ge().shape({reason:q().required("Reason is required")}),be=C.forwardRef((a,n)=>{const t=v(),x=f(d=>{var l,m;return(m=(l=d.crmLeads)==null?void 0:l.data)==null?void 0:m.selectedLeads}),h=()=>{t(B(!1))},i=async(d,l,m,D)=>{var y,s,j;const r=await m(ae({leadsId:l==null?void 0:l.id,updatedData:{reason:d.reason,status:d.status}}));let g="",b="",u="danger";(y=r==null?void 0:r.payload)!=null&&y.success?(g="Successfully Added",b=(s=r==null?void 0:r.payload)==null?void 0:s.message,u="success"):(g="Something went wrong !!!",b=(j=r==null?void 0:r.error)==null?void 0:j.message),D.push(e.jsx(W,{title:g,type:u,duration:2500,children:b}),{placement:"top-end"}),m(B(!1)),await m(O())};return e.jsx(xe,{innerRef:n,initialValues:{reason:"",status:"closed_lost"},validationSchema:Nt,onSubmit:async(d,{setSubmitting:l})=>{await i(d,x,t,$),l(!1)},children:({touched:d,errors:l,values:m,setFieldValue:D})=>e.jsxs(he,{children:[e.jsx(ue,{children:e.jsx(T,{label:"Reason",invalid:l.reason&&d.reason,errorMessage:l.reason,children:e.jsx(I,{type:"text",autoComplete:"off",name:"reason",placeholder:"Reason",component:A,prefix:e.jsx(it,{className:"text-xl"})})})}),e.jsx(dt,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(P,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:h,children:"Cancel"}),e.jsx(P,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(ct,{}),children:"Save"})]})})]})})});be.displayName="LeadForm";const Dt=()=>{const a=v(),n=f(o=>o.crmLeads.data.displayedLeadsList),t=f(o=>o.crmLeads.data.loading),x=f(o=>o.crmLeads.data.isDialogOpen),h=f(o=>o.crmLeads.data.tableData),{pageIndex:i,pageSize:d,sort:l,query:m,total:D}=f(o=>o.crmLeads.data.tableData),r=C.useCallback(()=>{a(O())},[a]);C.useEffect(()=>(r(),()=>{window.location.pathname.includes("lead")||a(z({...h,query:""}))}),[r]);const g=C.useMemo(()=>({pageIndex:i,pageSize:d,sort:l,query:m,total:D}),[i,d,l,m,D]);f(o=>o.crmLeads.data.selectedLeads);const b=_("leads","canDelete"),u=_("leads","canModify"),y=_("leads","canView"),s=Le(),j=({row:o})=>{const c=v();_e();const p=()=>{c(me()),c(M(o))},E=async()=>{await c(M(o)),c(ee(!0))},K=()=>{c(M(o));const Q=`/app/crm/lead-details/${o.id}`;s(Q)},H=()=>{c(M(o)),c(B(!0))},G=async()=>{await c(M(o)),await U(o==null?void 0:o.id)},U=async Q=>{var re,oe,ne;const S=await c(ae({leadsId:Q,updatedData:{status:"closed_won"}}));let X="",Y="",se="danger";(re=S==null?void 0:S.payload)!=null&&re.success?(X="Successfully Added",Y=(oe=S==null?void 0:S.payload)==null?void 0:oe.message,se="success"):(X="Something went wrong !!!",Y=(ne=S==null?void 0:S.error)==null?void 0:ne.message),$.push(e.jsx(W,{title:X,type:se,duration:2500,children:Y}),{placement:"top-end"}),c(B(!1)),await c(O())};return e.jsxs("div",{className:"flex text-base items-center",children:[u&&e.jsx("button",{disabled:(o==null?void 0:o.status)!=="open",className:`circle items-center mx-1 ${(o==null?void 0:o.status)!=="open"?"!cursor-not-allowed":"cursor-pointer hover:text-indigo-500"}`,onClick:p,children:e.jsx($e,{})}),b&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle items-center",onClick:E,children:e.jsx(We,{})}),y&&e.jsx("span",{className:"cursor-pointer hover:text-green-500 circle mx-1 items-center text-lg",onClick:K,children:e.jsx(lt,{})}),u&&e.jsx(k,{title:"Close To Won",children:e.jsx("button",{className:` circle items-center ${(o==null?void 0:o.status)!=="open"?"!cursor-not-allowed":"cursor-pointer hover:text-indigo-500"}`,disabled:(o==null?void 0:o.status)!=="open",onClick:G,children:e.jsx(mt,{})})},o.id+"won"),u&&e.jsx(k,{title:"Close To Lost",children:e.jsx("button",{className:`${(o==null?void 0:o.status)!=="open"?"!cursor-not-allowed":"cursor-pointer hover:text-orange-500"} mx-1 circle items-center `,disabled:(o==null?void 0:o.status)!=="open",onClick:H,children:e.jsx(Ne,{})})},o.id+"lost")]})},L=C.useMemo(()=>[{header:"Action",id:"action",cell:c=>e.jsx(j,{row:c.row.original})},{header:"Contact Name",accessorKey:"contactName",cell:c=>{var E,K,H,G,U;const p=(E=c.row.original)!=null&&E.contactData?((H=(K=c.row.original)==null?void 0:K.contactData)==null?void 0:H.firstName)+" "+((U=(G=c.row.original)==null?void 0:G.contactData)==null?void 0:U.lastName):"-";return e.jsx(k,{title:p,children:e.jsx(R,{text:p,maxLength:15})},p)}},{header:"Title",accessorKey:"title",cell:c=>{const p=c.row.original.title;return e.jsx(k,{title:p,children:e.jsx(R,{text:p,maxLength:20})},p)}},{header:"Budget",accessorKey:"budget",cell:c=>{const p=c.row.original;return e.jsx(R,{text:p.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:c=>{const p=c.row.original;return e.jsx(Ge,{status:p.status})}},{header:"Tag Name",accessorKey:"tagName",cell:c=>{const p=c.row.original.tags;return p!=null&&p.length>0?e.jsx(Ue,{tags:p}):"-"}},{header:"Notes",accessorKey:"description",cell:c=>{const p=c.row.original.description?c.row.original.description:"-";return e.jsx(k,{title:p,children:e.jsx(R,{text:p,maxLength:20})},p)}},{header:"Reason",accessorKey:"reason",cell:c=>{var E;const p=(E=c.row.original)==null?void 0:E.reason;return p?e.jsx(k,{title:p,children:e.jsx(R,{text:p,maxLength:20})},p):e.jsx(k,{title:p,children:e.jsx(R,{text:"NA",maxLength:20})},p)}}],[u,b]),N=o=>{const c=J(g);c.pageIndex=o,a(z(c))},F=o=>{const c=J(g);c.pageSize=Number(o),c.pageIndex=1,a(z(c))},w=o=>{const c=J(g);c.sort=o,a(z(c))};return e.jsxs("div",{children:[e.jsx(He,{columns:L,data:n,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:N,onSelectChange:F,onSort:w}),e.jsx(Lt,{}),e.jsx(ht,{}),e.jsxs(et,{isOpen:x,onClose:()=>a(B(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(be,{})]})]})},Ce=C.forwardRef((a,n)=>{const{onInputChange:t}=a,x=pt(h,500);function h(d){t==null||t(d)}const i=d=>{x(d.target.value)};return e.jsx(A,{ref:n,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by name or title",prefix:e.jsx(Pe,{className:"text-lg"}),onChange:i})});Ce.displayName="LeadsTableSearch";const vt=()=>{const a=v(),n=C.useRef(null),t=f(l=>l.crmLeads.data.tableData),x=_("leads","canCreate"),h=l=>{const m=J(t);m.query=l,m.pageIndex=1,typeof l=="string"&&l.length>1&&i(m),typeof l=="string"&&l.length===0&&i(m)},i=l=>{a(l?z(l):O())},d=()=>{a(me()),a(M({})),a(ut("Add"))};return C.useEffect(()=>{n.current&&(n.current.value=t.query||"",a(z(t)))},[t==null?void 0:t.query]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(Ce,{ref:n,onInputChange:h})}),e.jsx("div",{className:"mb-4",children:x&&e.jsx(P,{size:"sm",onClick:d,children:"Add New"})})]})};De("crmLeads",Re);const wt=()=>{const a=f(n=>n.crmLeads.data.tableData);return e.jsxs(e.Fragment,{children:[e.jsx(xt,{}),e.jsxs(ve,{bodyClass:"h-full",children:[e.jsx(le,{title:`Leads (${(a==null?void 0:a.total)||0})`,desc:"",className:"mb-2"}),e.jsx(vt,{}),e.jsx(Dt,{})]})]})},bs=wt;export{bs as default};
