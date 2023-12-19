import{a as M,r as b,j as e,ah as Le,al as De,aq as we}from"./index-e9e80fad.js";import{A as Se}from"./AdaptableCard-4f414664.js";import{F as ne}from"./FormDesription-437bf780.js";import{C as ve}from"./Card-14c7d5e0.js";import{A as Ie}from"./index-fdab81dd.js";import{M as Te}from"./MediaSkeleton-23326471.js";import{u as y,g as ae,t as te,d as Ae,a as q,b as Ee,c as Fe,f as ie,e as ce,h as se,i as ke,s as le,j as W,k as Z,l as P,m as Me,n as de,r as Oe}from"./index-3e446f01.js";import{o as Re,M as Ve,C as $e,N as qe,O as ze,P as Be,b as _e}from"./index.esm-0e189e80.js";import{N as We}from"./react-number-format.es-ce2dfab0.js";import{D as Pe}from"./DataTable-e88b1948.js";import{T as He}from"./TagsList-9ebff7f7.js";import{T as H}from"./TextTruncate-f41ae5af.js";import{u as X}from"./checkEditUpdate-7ffe574b.js";import{u as Ke}from"./useThemeClass-395527ab.js";import{c as Y}from"./cloneDeep-ccfbe55a.js";import{t as U,N as G}from"./toast-87b47471.js";import{C as Ue}from"./ConfirmDialog-556d0379.js";import{B as J}from"./Button-227d4871.js";import{D as Ge}from"./Drawer-6d31deda.js";import{a as V,F as me}from"./FormItem-4bb500cc.js";import{T as ue}from"./index-7f78caa8.js";import{u as Je,b as $,F as pe,a as ge}from"./formik.esm-41cf3f17.js";import{c as he,a as _,d as Qe,e as Xe}from"./index.esm-0ceb40eb.js";import{I as R}from"./Input-d4f6dd9d.js";/* empty css              */import"./Alert-4b9289a7.js";import"./Badge-c25ebbc3.js";import"./RangeCalendar-8629c316.js";import"./index-7e05bd38.js";import"./index-034f67b7.js";import{D as Ye}from"./Dialog-78dc0140.js";import"./index-713c10b4.js";import"./toString-d452c1eb.js";import"./index-5342abc4.js";import"./index-e4774632.js";import"./index-ffd743d2.js";import"./Pagination-1965e489.js";import"./Progress-d4986dc8.js";import"./index-2b35542d.js";import"./ScrollBar-21d87604.js";import"./index-ef47c85f.js";import{S as Ze}from"./Select-435e7909.js";import"./Skeleton-635ffbd7.js";import"./index-c9660479.js";import"./Switcher-c852a089.js";import"./index-a7d59cb4.js";import{T as et}from"./Tag-b2597221.js";import"./index-9428398a.js";import"./index-ae776672.js";import{T as Q}from"./Tooltip-0ed58b52.js";import"./Upload-15d917f3.js";import{B as tt,a as at}from"./index.esm-a4c1c24f.js";import{M as st}from"./index.esm-fc2e78fd.js";import{T as rt,a as ot}from"./index.esm-d8881e09.js";import{B as oe}from"./index.esm-c7848e38.js";import{u as nt}from"./useGetModule-9d753fc1.js";import{D as it}from"./DynamicDropDown-2dda3d58.js";import{A as ct,a as lt}from"./index.esm-5a58505e.js";import"./Views-6a6f19fc.js";import"./chart.constant-b273fb4d.js";import"./GrowShrinkTag-c96f06fc.js";import"./react-tooltip.min-236182d9.js";import"./RichTextEditor-a6622f10.js";import"./SegmentItemOption-c74527ef.js";import{S as dt}from"./StickyFooter-53591c8b.js";import"./SvgIcon-c423a0fc.js";import{S as mt}from"./Status-408eebe7.js";import{s as ut}from"./index-bcbc4019.js";import{d as pt}from"./debounce-5304a7ff.js";import"./useMergeRef-788c4cb0.js";import"./CrmService-dcc529f1.js";import"./index-416cf604.js";import"./moment-fbc5633a.js";import"./_MapCache-49bf6e31.js";import"./_getPrototype-64e64018.js";import"./useTimeout-0a987a2a.js";import"./CloseButton-59471e32.js";import"./StatusIcon-8798719a.js";import"./chainedFunction-070f832c.js";import"./index-fc6fab3c.js";import"./index-bfcd6c72.js";import"./useControllableState-97f974f1.js";import"./isNil-5d9d980a.js";import"./get-e7c8697a.js";import"./_baseIsEqual-934e8574.js";import"./useRootClose-50069751.js";import"./usePopper-279cd1bc.js";import"./TimeInput-3543dad0.js";import"./useUniqueId-6815521f.js";import"./useDidUpdate-b1f63e57.js";import"./useUncertainRef-07db30ec.js";import"./slicedToArray-64904844.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-0e64d439.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-b62b3eb9.js";import"./index.esm-778bb6ce.js";import"./index.esm-c9613619.js";import"./index-72cb1dee.js";import"./index.esm-34a7f8fe.js";import"./index-0ddcc06f.js";const ee=a=>{const{icon:o,avatarClass:t,label:h,value:p,loading:c}=a,d=55;return e.jsx(ve,{bordered:!0,children:e.jsx(Le,{loading:c,customLoader:e.jsx(Te,{avatarProps:{className:"rounded",width:d,height:d}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(Ie,{className:t,size:d,icon:o}),e.jsxs("div",{children:[e.jsx("span",{children:h}),e.jsx("h3",{children:e.jsx(We,{thousandSeparator:!0,displayType:"text",value:p})})]})]})})})})},gt=()=>{const a=M(),o=y(h=>h.crmLeads.data.statisticData),t=y(h=>h.crmLeads.data.statisticLoading);return b.useEffect(()=>{a(ae())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(ee,{icon:e.jsx(Re,{}),avatarClass:"!bg-indigo-600",label:"Total Leads",value:o.totalLeads,growthRate:o==null?void 0:o.totalLeads,loading:t}),e.jsx(ee,{icon:e.jsx(Ve,{}),avatarClass:"!bg-blue-500",label:"Open Leads",value:o.openLeads,growthRate:o.openLeads,loading:t}),e.jsx(ee,{icon:e.jsx($e,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Leads",value:o==null?void 0:o.newLeads,growthRate:o==null?void 0:o.newLeads,loading:t})]})},ht=()=>{const a=M(),o=y(c=>c.crmLeads.data.deleteConfirmation),t=y(c=>c.crmLeads.data.selectedLeads),h=()=>{a(te(!1))},p=async()=>{var d,u,f;a(te(!1));const c=await a(Ae(t.id));await a(q()),(d=c==null?void 0:c.payload)!=null&&d.success?U.push(e.jsx(G,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=c==null?void 0:c.payload)==null?void 0:u.message}),{placement:"top-end"}):U.push(e.jsx(G,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(f=c==null?void 0:c.error)==null?void 0:f.message}),{placement:"top-end"}),await a(q()),await a(ae())};return e.jsx(Ue,{isOpen:o,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:h,onRequestClose:h,onCancel:h,onConfirm:p,children:e.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this lead will be deleted as well. This action cannot be undone."})})},K=[],xt=a=>{const{touched:o,errors:t,setFieldValue:h,values:p}=a,c=M(),d=Je(),[u,f]=b.useState(null),[T,v]=b.useState([]),[A,F]=b.useState(!1),r=y(s=>s.crmLeads.data.contactList);K.length=0;const j={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},l=y(s=>{var C;return(C=s.crmLeads.data.customField)==null?void 0:C.data});y(s=>s.crmLeads.data.leadsList),r==null||r.forEach(s=>{K.push({value:s==null?void 0:s.id,label:`${s==null?void 0:s.firstName} ${s==null?void 0:s.lastName}`})});const{getModule:g}=nt();b.useEffect(()=>{const s=async()=>{var S,z;try{const{payload:k}=await c(ie()),B=(S=k==null?void 0:k.data)==null?void 0:S.find(O=>(O==null?void 0:O.moduleName)==="leads");if(B){const{payload:O}=await c(ce({id:(z=B==null?void 0:B.id)==null?void 0:z.toString()}));v(O==null?void 0:O.data)}}catch(k){console.error("Error fetching module data:",k)}};(async()=>{const S=await g("leads");f(p.contactsDataId),s(),await c(Ee()),await c(Fe(S))})()},[c]),y(s=>{var C,S;return(S=(C=s.crmLeads)==null?void 0:C.data)==null?void 0:S.selectedLeads});const w=async(s,C)=>{await d.setFieldValue(`tagId_${C}`,s),F(!A)},E=async()=>{const s=new Set;T==null||T.forEach(S=>{p&&p[`tagId_${S.id}`]&&p[`tagId_${S.id}`].length&&p[`tagId_${S.id}`].map(k=>k.value).forEach(k=>{s.add(k)})});const C=[...s];await d.setFieldValue("tagId",C)};return b.useMemo(()=>{E()},[A,T]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(V,{label:"Contact Name",invalid:t.contactsDataId&&o.contactsDataId,errorMessage:t.contactsDataId,children:e.jsx(Ze,{name:"contactsDataId",placeholder:"Contact Name",options:K,id:"contactsDataId",value:K.find(s=>(s==null?void 0:s.value)===(p==null?void 0:p.contactsDataId)),onChange:s=>{const C=s.value;h("email",""),h("contactNumber",""),f(C),h("contactsDataId",C)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(V,{label:"Title*",invalid:t.title&&o.title,errorMessage:t.title,children:e.jsx($,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:R,prefix:e.jsx(st,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[!u&&e.jsx("div",{className:"col-span-1",children:e.jsx(V,{label:"Email*",invalid:t.email&&o.email,errorMessage:t.email,children:e.jsx($,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:R,prefix:e.jsx(qe,{className:"text-xl"})})})}),!u&&e.jsx("div",{className:"col-span-1",children:e.jsx(V,{label:"Contact Number*",invalid:t.contactNumber&&o.contactNumber,errorMessage:t.contactNumber,children:e.jsx($,{type:"text",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:R,prefix:e.jsx(tt,{className:"text-xl"})})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(V,{label:"Budget",invalid:t.budget&&o.budget,errorMessage:t.budget,children:e.jsx($,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:R,prefix:e.jsx(at,{className:"text-xl"})})})})}),e.jsx(V,{label:"Notes",invalid:t.notes&&o.notes,errorMessage:t.notes,children:e.jsx($,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Notes",component:R,prefix:e.jsx(rt,{className:"text-xl"})})}),e.jsx(it,{data:T,handleTagChange:w}),(l==null?void 0:l.length)>0?e.jsxs(e.Fragment,{children:[" ",e.jsx(ne,{title:"Additional Details",desc:"",className:"mb-2"}),e.jsx("div",{style:j,children:l==null?void 0:l.map(s=>e.jsx("div",{children:e.jsx(V,{label:s==null?void 0:s.label,children:s.inputType==="textArea"?e.jsx($,{textArea:!0,type:"text",autoComplete:"off",name:s.name,placeholder:s==null?void 0:s.label,defaultValue:s.defaultValue,component:R,prefix:e.jsx(oe,{className:"text-xl"})}):e.jsx($,{type:s.inputType,autoComplete:"off",name:s.name,placeholder:s==null?void 0:s.label,defaultValue:s.defaultValue,component:R,prefix:e.jsx(oe,{className:"text-xl"})})})},s.id))})]}):null]})},ft=he().shape({title:_().required("Title is required"),notes:_(),contactNumber:_().test("validateContactNumber","Invalid contact number",function(a){if(!this.parent.contactsDataId){if(!a)return this.createError({message:"Contact is required"});const t=Number(a);if(isNaN(t))return this.createError({message:"Contact must be a number"});if(a.length!==10)return this.createError({message:"Contact must have exactly 10 digits"});if(a.startsWith("0"))return this.createError({message:"Contact number cannot start with 0"})}return!0}),email:_().test("validateEmail","Invalid email",function(a){return this.parent.contactsDataId?!0:!!a||this.createError({message:"Email is required"})}),budget:Qe().test("greaterThanOne","Budget must be greater than 1",a=>a>0).required("Budget is required"),tagId:Xe(),contactsDataId:_().test("is-valid-contact","Invalid contact selected",function(a){return this.parent.contactsDataId&&this.parent.contactsDataId.length>0?!!K.find(o=>o.value===a):!0})}),{TabNav:jt,TabList:bt,TabContent:yt}=ue,xe=b.forwardRef((a,o)=>{var v,A,F;const t=y(r=>r.crmLeads.data.selectedLeads);(v=t==null?void 0:t.tags)==null||v.reduce((r,j)=>(r[`tagId_${j.id}`]=[],r),{});const h=b.useMemo(()=>{var r;return(r=t==null?void 0:t.tags)==null?void 0:r.reduce((j,l)=>{const g=l.tagCategoryId;return j[`tagId_${g}`]||(j[`tagId_${g}`]=[]),j[`tagId_${g}`].push({label:l.tagName,value:l.id}),j},{})},[t.tags]),p=!!t.id,c=y(r=>{var j,l,g;return(g=(l=(j=r.crmLeads)==null?void 0:j.data)==null?void 0:l.customField)==null?void 0:g.data}),d=M(),u=async(r,j,l)=>{var E,s,C,S;const g=(E=r==null?void 0:r.payload)!=null&&E.success?j:"Something went wrong !!!",w=(s=r==null?void 0:r.payload)!=null&&s.success?(C=r==null?void 0:r.payload)==null?void 0:C.message:l;U.push(e.jsx(G,{title:g,type:(S=r==null?void 0:r.payload)!=null&&S.success?"success":"danger",duration:2500,children:w}),{placement:"top-end"})},f=async(r,{setSubmitting:j})=>{const l=c.reduce((g,w)=>(g[w.name]=r[w.name],g),{});try{const g={title:r.title,contactsDataId:r.contactsDataId,email:r.email,contactNumber:r.contactNumber,budget:r.budget.toString(),description:r.notes,tagId:r==null?void 0:r.tagId,...l,...h},{name:w,tagName:E,...s}=r,C=p?await d(se({leadsId:(t==null?void 0:t.id)||"",updatedData:g})):await d(ke(g));await u(C,p?"Successfully Updated":"Successfully Added","An error occurred."),d(le()),await Promise.all([d(q()),d(ae())])}catch(g){console.error("An error occurred:",g)}finally{j(!1)}},T=b.useMemo(()=>c==null?void 0:c.reduce((j,l)=>{var w;const g=(w=t==null?void 0:t.leadFields)==null?void 0:w.find(E=>(E==null?void 0:E.name)===(l==null?void 0:l.name));return j[l==null?void 0:l.name]=g?g==null?void 0:g.value:l!=null&&l.defaultValue?l==null?void 0:l.defaultValue:"",j},{}),[c]);return e.jsx(pe,{innerRef:o,initialValues:{contactsDataId:((A=t.contactData)==null?void 0:A.id)||"",title:(t==null?void 0:t.title)||"",notes:(t==null?void 0:t.description)||"",tagId:((F=t==null?void 0:t.tags)==null?void 0:F.map(r=>({label:r.tagName,value:r.id})))||[],budget:(t==null?void 0:t.budget)||"",contactNumber:(t==null?void 0:t.contactNumber)||"",email:(t==null?void 0:t.email)||"",...T,...h},validationSchema:ft,onSubmit:f,children:({touched:r,errors:j,values:l,setFieldValue:g})=>e.jsx(ge,{children:e.jsx(me,{children:e.jsxs(ue,{defaultValue:"leadsInfo",children:[e.jsx(bt,{children:e.jsx(jt,{value:"leadsInfo",children:"Leads Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(yt,{value:"leadsInfo",children:e.jsx(xt,{touched:r,errors:j,setFieldValue:g,values:l})})})]})})})})});xe.displayName="LeadsForm";const fe=b.forwardRef((a,o)=>{M();const t=y(p=>{var c,d;return(d=(c=p.crmLeads)==null?void 0:c.data)==null?void 0:d.selectedLeads});y(p=>p.crmLeads.data.leadsList);const h=async p=>{};return e.jsx(xe,{ref:o,leads:t,onFormSubmit:h})});fe.displayName="LeadsEditContent";const Ct=({onSaveClick:a,onCancel:o})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(J,{size:"sm",className:"mr-2",onClick:o,children:"Cancel"}),e.jsx(J,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Nt=()=>{const a=M(),o=y(f=>f.crmLeads.data.drawerOpen),[t,h]=b.useState(window.innerWidth/2),p=()=>{a(le()),a(W({}))},c=b.useRef(null),d=()=>{var f;(f=c.current)==null||f.submitForm()};b.useEffect(()=>(window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}),[]);const u=()=>{h(window.innerWidth/2)};return e.jsx(Ge,{isOpen:o,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(Ct,{onCancel:p,onSaveClick:d}),onClose:p,onRequestClose:p,children:e.jsx(fe,{ref:c})})},Lt=he().shape({reason:_().required("Reason is required")}),je=b.forwardRef((a,o)=>{const t=M(),h=y(d=>{var u,f;return(f=(u=d.crmLeads)==null?void 0:u.data)==null?void 0:f.selectedLeads}),p=()=>{t(Z(!1))},c=async(d,u,f,T)=>{var j,l,g;const v=await f(se({leadsId:u==null?void 0:u.id,updatedData:{reason:d.reason,status:a.id}}));let A="",F="",r="danger";(j=v==null?void 0:v.payload)!=null&&j.success?(A="Successfully Added",F=(l=v==null?void 0:v.payload)==null?void 0:l.message,r="success"):(A="Something went wrong !!!",F=(g=v==null?void 0:v.error)==null?void 0:g.message),T.push(e.jsx(G,{title:A,type:r,duration:2500,children:F}),{placement:"top-end"}),f(Z(!1)),await f(q())};return e.jsx(pe,{innerRef:o,initialValues:{reason:"",status:""},validationSchema:Lt,onSubmit:async(d,{setSubmitting:u})=>{await c(d,h,t,U),u(!1)},children:({touched:d,errors:u,values:f,setFieldValue:T})=>e.jsxs(ge,{children:[e.jsx(me,{children:e.jsx(V,{label:"Reason",invalid:u.reason&&d.reason,errorMessage:u.reason,children:e.jsx($,{type:"text",autoComplete:"off",name:"reason",placeholder:"Reason",component:R,prefix:e.jsx(ot,{className:"text-xl"})})})}),e.jsx(dt,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(J,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:p,children:"Cancel"}),e.jsx(J,{size:"sm",type:"submit",variant:"solid",icon:e.jsx(ct,{}),children:"Save"})]})})]})})});je.displayName="LeadForm";const Dt=()=>{const a=M(),[o,t]=b.useState([]),[h,p]=b.useState([]),[c,d]=b.useState(""),u=y(i=>i.crmLeads.data.displayedLeadsList),f=y(i=>i.crmLeads.data.loading),T=y(i=>i.crmLeads.data.isDialogOpen),v=y(i=>i.crmLeads.data.tableData),{pageIndex:A,pageSize:F,sort:r,query:j,total:l}=y(i=>i.crmLeads.data.tableData),g=b.useCallback(()=>{B(),a(q())},[a]);b.useEffect(()=>(g(),()=>{window.location.pathname.includes("lead")||a(P({...v,query:""}))}),[g]);const w=b.useMemo(()=>({pageIndex:A,pageSize:F,sort:r,query:j,total:l}),[A,F,r,j,l]);y(i=>i.crmLeads.data.selectedLeads);const E=X("leads","canDelete"),s=X("leads","canModify"),C=X("leads","canView"),S=De(),z=async(i,n)=>{var m,N,D;if((n==null?void 0:n.statusName)==="closed_lost")d(n==null?void 0:n.id),a(W(i)),a(Z(!0));else{const x=await a(se({leadsId:i==null?void 0:i.id,updatedData:{status:n==null?void 0:n.id}}));let L="",I="",re="danger";(m=x==null?void 0:x.payload)!=null&&m.success?(L="Successfully Added",I=(N=x==null?void 0:x.payload)==null?void 0:N.message,re="success"):(L="Something went wrong !!!",I=(D=x==null?void 0:x.error)==null?void 0:D.message),U.push(e.jsx(G,{title:L,type:re,duration:2500,children:I}),{placement:"top-end"})}await a(q())},k=({row:i})=>{const n=M();Ke();const m=()=>{n(de()),n(W(i))},N=async()=>{await n(W(i)),n(te(!0))},D=()=>{n(W(i));const x=`/app/crm/lead-details/${i.id}`;S(x)};return e.jsxs("div",{className:"flex text-base items-center",children:[s&&h&&e.jsx(mt,{statusList:h,module:"leads",row:i,orgStatus:i==null?void 0:i.leadStatus,handleStatusChange:z}),s&&e.jsx("button",{disabled:(i==null?void 0:i.status)!=="open",className:`circle items-center mx-1 ${(i==null?void 0:i.status)!=="open"?"!cursor-not-allowed":"cursor-pointer hover:text-indigo-500"}`,onClick:m,children:e.jsx(ze,{})}),E&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle items-center",onClick:N,children:e.jsx(Be,{})}),C&&e.jsx("span",{className:"cursor-pointer hover:text-green-500 circle mx-1 items-center text-lg",onClick:D,children:e.jsx(lt,{})})]})},B=async()=>{var i,n,m,N;try{const{payload:D}=await a(ie()),x=(i=D==null?void 0:D.data)==null?void 0:i.find(L=>(L==null?void 0:L.moduleName)==="leads");if(x){const{payload:L}=await a(ce({id:(n=x==null?void 0:x.id)==null?void 0:n.toString()})),I=await a(Me((m=x==null?void 0:x.id)==null?void 0:m.toString()));p((N=I==null?void 0:I.payload)==null?void 0:N.data),t(L==null?void 0:L.data)}}catch(D){console.error("Error fetching module data:",D)}},O=b.useMemo(()=>{const i=[{header:"Action",id:"action",cell:n=>e.jsx(k,{row:n.row.original})},{header:"Contact Name",accessorKey:"contactName",cell:n=>{var N,D,x,L,I;const m=(N=n.row.original)!=null&&N.contactData?((x=(D=n.row.original)==null?void 0:D.contactData)==null?void 0:x.firstName)+" "+((I=(L=n.row.original)==null?void 0:L.contactData)==null?void 0:I.lastName):"-";return e.jsx(Q,{title:m,children:e.jsx(H,{text:m,maxLength:15})},m)}},{header:"Title",accessorKey:"title",cell:n=>{var N;const m=(N=n.row.original)==null?void 0:N.title;return e.jsx(Q,{title:m,children:e.jsx(H,{text:m,maxLength:20})},m)}},{header:"Budget",accessorKey:"budget",cell:n=>{const m=n.row.original;return e.jsx(H,{text:m.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:n=>{var D,x,L;const m=n.row.original,N={backgroundColor:`${((D=m==null?void 0:m.leadStatus)==null?void 0:D.colorCode)||"red"}10`};return e.jsx(e.Fragment,{children:e.jsx(et,{style:N,className:"border-0 rounded",children:e.jsx("p",{style:{color:((x=m==null?void 0:m.leadStatus)==null?void 0:x.colorCode)||"red"},children:(L=m==null?void 0:m.leadStatus)==null?void 0:L.statusName})})})}},{header:"Reason",accessorKey:"reason",cell:n=>{var N;const m=(N=n.row.original)==null?void 0:N.reason;return m?e.jsx(Q,{title:m,children:e.jsx(H,{text:m,maxLength:20})},m):e.jsx(Q,{title:m,children:e.jsx(H,{text:"NA",maxLength:20})},m)}}];return o.map((n,m)=>{const N={header:n.categoryName,id:n.id,accessorKey:"tagCategory.categoryName",cell:D=>{var L;const x=(L=D.row.original.tags)==null?void 0:L.filter(I=>(I==null?void 0:I.tagCategoryId)===n.id);return x&&x.length?e.jsx(He,{tags:x}):"-"}};i.splice(m+3,0,N)}),i},[s,E,o]),ye=i=>{const n=Y(w);n.pageIndex=i,a(P(n))},Ce=i=>{const n=Y(w);n.pageSize=Number(i),n.pageIndex=1,a(P(n))},Ne=i=>{const n=Y(w);n.sort=i,a(P(n))};return e.jsxs("div",{children:[e.jsx(Pe,{columns:O,data:u,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:f,pagingData:{total:w.total,pageIndex:w.pageIndex,pageSize:w.pageSize},onPaginationChange:ye,onSelectChange:Ce,onSort:Ne}),e.jsx(Nt,{}),e.jsx(ht,{}),e.jsxs(Ye,{isOpen:T,onClose:()=>a(Z(!1)),children:[e.jsx("h5",{className:"mb-4",children:"Enter Reason"}),e.jsx(je,{id:c})]})]})},be=b.forwardRef((a,o)=>{const{onInputChange:t}=a,h=pt(p,500);function p(d){t==null||t(d)}const c=d=>{h(d.target.value)};return e.jsx(R,{ref:o,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by name or title",prefix:e.jsx(_e,{className:"text-lg"}),onChange:c})});be.displayName="LeadsTableSearch";const wt=()=>{const a=M(),o=b.useRef(null),t=y(u=>u.crmLeads.data.tableData),h=X("leads","canCreate"),p=u=>{const f=Y(t);f.query=u,f.pageIndex=1,typeof u=="string"&&u.length>1&&c(f),typeof u=="string"&&u.length===0&&c(f)},c=u=>{a(u?P(u):q())},d=()=>{a(de()),a(W({})),a(ut("Add"))};return b.useEffect(()=>{o.current&&(o.current.value=t.query||"",a(P(t)))},[t==null?void 0:t.query]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(be,{ref:o,onInputChange:p})}),e.jsx("div",{className:"mb-4",children:h&&e.jsx(J,{size:"sm",onClick:d,children:"Add New"})})]})};we("crmLeads",Oe);const St=()=>{const a=y(o=>o.crmLeads.data.tableData);return e.jsxs(e.Fragment,{children:[e.jsx(gt,{}),e.jsxs(Se,{bodyClass:"h-full",children:[e.jsx(ne,{title:`Leads (${(a==null?void 0:a.total)||0})`,desc:"",className:"mb-2"}),e.jsx(wt,{}),e.jsx(Dt,{})]})]})},ys=St;export{ys as default};
