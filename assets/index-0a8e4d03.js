import{a as T,j as e,r as x,ap as pe,aq as ue}from"./index-7b0349c6.js";import{A as xe}from"./AdaptableCard-d9b587b8.js";import{F as B}from"./FormDesription-67fe72b2.js";import{D as ge}from"./DataTable-e83a4ee2.js";import{D as he,t as fe,c as Ce,T as je}from"./tagAndCategory-2992959b.js";import{T as E}from"./TextTruncate-3a55f54a.js";import{u as P}from"./checkEditUpdate-d3cb05ce.js";import{u as Ne}from"./useThemeClass-3c06ce00.js";import{c as V}from"./cloneDeep-43c01ed5.js";import{U as ye,O as be,P as ve,b as we}from"./index.esm-70dc7df8.js";import{u as C,t as _,d as De,g as Z,a as ae,b as Ie,f as Se,c as Te,e as Fe,h as se,i as Ae,j as Me,s as oe,k as J,l as W,m as re,r as Le}from"./index-e86caf15.js";import{t as Q,N as X}from"./toast-184c7e0a.js";import{C as ke}from"./ConfirmDialog-916d697a.js";import{B as Y}from"./Button-9fa3d2fc.js";import{D as Ee}from"./Drawer-464b2899.js";import{T as ne}from"./index-77e8bdc2.js";import{a as y,F as Oe}from"./FormItem-26ad5e8d.js";import{u as ze,b as v,F as Re,a as qe}from"./formik.esm-1e90a8e9.js";import{c as $e,a as b,e as Ke}from"./index.esm-3fef8ee5.js";import{I as w}from"./Input-5106ef66.js";/* empty css              */import{b as Be,d as Pe,a as Ve}from"./index.esm-1ab6dd83.js";import"./Alert-ebb58074.js";import"./index-2cc854d3.js";import"./Badge-50330686.js";import"./RangeCalendar-8f0006dc.js";import"./Card-a848a8eb.js";import"./index-f606ec14.js";import"./index-e01b641f.js";import"./Dialog-9d79d85c.js";import"./index-d98edc99.js";import"./toString-a66e4ffc.js";import"./index-10cbcf37.js";import"./index-89cb79e5.js";import"./index-24734fba.js";import"./Pagination-2aca965e.js";import"./Progress-10ad9a7b.js";import"./index-9b4971f3.js";import"./ScrollBar-e6e4e948.js";import"./index-c97a424b.js";import{S as ee}from"./Select-1f2320ab.js";import"./Skeleton-8e99ae89.js";import"./index-2cd79135.js";import"./Switcher-e923ff00.js";import"./index-0df82d35.js";import"./Tag-a0bc44e6.js";import"./index-aa85e3d4.js";import"./index-df8f9f26.js";import{T as U}from"./Tooltip-a61fe545.js";import"./Upload-4b7aa6b8.js";import{a as te}from"./index.esm-a82f7567.js";import{M as We}from"./index.esm-b66fd867.js";import{a as Ze}from"./index.esm-8b94bd99.js";import{I as He,G as Ge,a as Ue}from"./index.esm-43a793de.js";import{F as _e}from"./index.esm-b503a71c.js";import{C as Je}from"./react-select-creatable.esm-069d8c4f.js";import{A as Qe}from"./index.esm-14571ecb.js";import{d as Xe}from"./debounce-11c7fdc6.js";import"./index-cec25fe7.js";import"./_MapCache-a209650f.js";import"./Views-c6671a9d.js";import"./_getPrototype-57ad14e0.js";import"./CrmService-d23a3034.js";import"./useTimeout-187593ce.js";import"./CloseButton-68e6949e.js";import"./StatusIcon-11c7c844.js";import"./chainedFunction-070f832c.js";import"./index-39084392.js";import"./useControllableState-ca2883fa.js";import"./index-ba238736.js";import"./isNil-2a409f2e.js";import"./get-3f8daa47.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-0ec018e0.js";import"./useRootClose-f96499f9.js";import"./usePopper-ea1a26c2.js";import"./TimeInput-0d554281.js";import"./useUniqueId-ab09df2f.js";import"./useDidUpdate-eb06a65d.js";import"./useUncertainRef-81a90e74.js";import"./slicedToArray-a6cb1158.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-0f96c84d.js";import"./index.esm-c96a5b5f.js";const Ye=()=>{const s=T(),o=C(r=>r.crmContact.data.deleteConfirmation),t=C(r=>r.crmContact.data.selectedContact),d=()=>{s(_(!1))},m=async()=>{var u,c,g;s(_(!1));const r=await s(De(t==null?void 0:t.id));(u=r==null?void 0:r.payload)!=null&&u.success?Q.push(e.jsx(X,{title:"Successfuly Deleted",type:"success",duration:2500,children:(c=r==null?void 0:r.payload)==null?void 0:c.message}),{placement:"top-end"}):Q.push(e.jsx(X,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(g=r==null?void 0:r.error)==null?void 0:g.message}),{placement:"top-end"}),await s(Z()),await s(ae())};return e.jsx(ke,{isOpen:o,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:d,onRequestClose:d,onCancel:d,onConfirm:m,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this contact will be deleted as well. This action cannot be undone."})})},K=[],et=s=>{const{touched:o,errors:t,values:d,setFieldValue:m}=s,r=T(),[u,c]=x.useState(!1),[g,I]=x.useState(!1),[F,h]=x.useState([]),[D,N]=x.useState([]),S=()=>{c(!u),I(!1)},M=C(i=>i.crmContact.data.companyList),A=C(i=>i.crmContact.data.sources);K.length=0,M.forEach(i=>{K.push({value:i.id,label:i.companyName})});const L=x.useMemo(()=>A.map(j=>({label:j.sources,value:j.id})),[A]),[O,p]=x.useState("");x.useEffect(()=>{(async()=>{var j,$;try{const{payload:R}=await r(Se()),q=(j=R==null?void 0:R.data)==null?void 0:j.find(k=>(k==null?void 0:k.moduleName)==="contacts");if(p(q.id),q){const{payload:k}=await r(Te({id:($=q==null?void 0:q.id)==null?void 0:$.toString()})),de=fe(k.data),me=Ce(k.data);N(me),h(de)}}catch(R){console.error("Error fetching module data:",R)}})(),r(Ie())},[r]);const a=C(i=>i.crmContact.data.selectedContact),[n,f]=x.useState(a?a.tags||[]:[]),l=ze(),z=i=>{f(i);const j=[i.value];l.setFieldValue("tagId",j)},H=async(i,j)=>{const $={sources:i==null?void 0:i.label};switch(j.action){case"create-option":await r(Fe($)),await r(se());break;case"select-option":m("sourceId",i);break}console.group("Value Changed"),console.log(i),console.log(`action: ${j.action}`),console.groupEnd()},G=(i,j)=>{console.group("Input Changed"),console.log(i),console.log(`action: ${j.action}`),console.groupEnd()};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Contact Basic Information",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"First Name *",invalid:t.firstName&&o.firstName,errorMessage:t.firstName,children:e.jsx(v,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:w,prefix:e.jsx(te,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Last Name *",invalid:t.lastName&&o.lastName,errorMessage:t.lastName,children:e.jsx(v,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:w,prefix:e.jsx(te,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Email *",invalid:t.email&&o.email,errorMessage:t.email,children:e.jsx(v,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:w,prefix:e.jsx(ye,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Contact Number *",invalid:t.contactNumber&&o.contactNumber,errorMessage:t.contactNumber,children:e.jsx(v,{type:"text",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:w,prefix:e.jsx(Ze,{className:"text-xl"})})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Title",invalid:t.title&&o.title,errorMessage:t.title,children:e.jsx(v,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:w,prefix:e.jsx(We,{className:"text-xl"})})})})}),e.jsx(y,{label:"Notes",invalid:t.description&&o.description,errorMessage:t.description,children:e.jsx(v,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:w,prefix:e.jsx(Be,{className:"text-xl"})})}),e.jsx(B,{title:"Address",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Address",invalid:t.address&&o.address,errorMessage:t.address,children:e.jsx(v,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:w,prefix:e.jsx(_e,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"State",invalid:t.state&&o.state,errorMessage:t.state,children:e.jsx(v,{type:"text",autoComplete:"off",name:"state",placeholder:"State",component:w,prefix:e.jsx(He,{className:"text-xl"})})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"City",invalid:t.city&&o.city,errorMessage:t.city,children:e.jsx(v,{type:"text",autoComplete:"off",name:"city",placeholder:"City",component:w,prefix:e.jsx(Ge,{className:"text-xl"})})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{style:{position:"relative"},children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"ZipCode",invalid:t.zipcode&&o.zipcode,errorMessage:t.zipcode,children:e.jsx(v,{type:"text",autoComplete:"off",name:"zipcode",placeholder:"ZipCode",component:w,prefix:e.jsx(Pe,{className:"text-xl"})})})})})})]}),e.jsx(B,{title:"Contact Others Details",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Company Name",invalid:t.companiesId&&o.companiesId,errorMessage:t.companiesId,children:e.jsx(ee,{name:"companiesId",placeholder:"Company Name",options:K,id:"companiesId",value:K.find(i=>(i==null?void 0:i.value)==(d==null?void 0:d.companiesId)),onChange:i=>{const j=i.value;m("companiesId",j||"")}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Source",invalid:t.source&&o.source,errorMessage:t.source,children:e.jsx(v,{isClearable:!0,type:"text",autoComplete:"off",name:"sourceId",placeholder:"Source",component:ee,componentAs:Je,options:L,prefix:e.jsx(Ue,{className:"text-xl"}),onChange:H,onInputChange:G})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx("div",{style:{position:"relative"},children:e.jsx(y,{label:"Tag",children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(v,{name:"tagId",component:he,options:F,placeholder:"Select a Tag",value:l.initialValues.tagName,onChange:z}),e.jsx(Ve,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{S(),I(!0)}})]})})})})})]})},tt=$e().shape({firstName:b().required("First Name is required"),lastName:b().required("Last Name is required"),title:b(),contactNumber:b().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",s=>!isNaN(s)).test("is-ten-digits"," Contact must be exactly 10 digits",s=>{if(s){const o=Number(s);return/^\d{10}$/.test(o.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",s=>s?Number(s).toString().length<=10:!0),email:b().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),address:b(),state:b(),city:b(),zipcode:b(),companiesId:b().nullable(),companyName:b(),source:b().nullable(),description:b(),tagId:Ke()}),{TabNav:at,TabList:st,TabContent:ot}=ne,ie=x.forwardRef((s,o)=>{var c,g,I,F;const t=C(h=>h.crmContact.data.selectedContact),d=C(h=>h.crmContact.data.sources),m=x.useMemo(()=>d.map(D=>({label:D.sources,value:D.id})),[d]),r=!!t.id,u=T();return console.log({contact:t}),e.jsx(Re,{innerRef:o,initialValues:{firstName:(t==null?void 0:t.firstName)||"",lastName:(t==null?void 0:t.lastName)||"",title:(t==null?void 0:t.title)||"",email:(t==null?void 0:t.email)||"",contactNumber:(t==null?void 0:t.contactNumber)||"",description:(t==null?void 0:t.description)||"",companyName:((c=t==null?void 0:t.company)==null?void 0:c.companyName)||"",sourceId:t!=null&&t.sourceId?m.find(h=>h.value===(t==null?void 0:t.sourceId)):"",address:(t==null?void 0:t.address)||"",state:(t==null?void 0:t.state)||"",city:(t==null?void 0:t.city)||"",zipcode:(t==null?void 0:t.zipcode)||"",tagName:((I=(g=t==null?void 0:t.tags)==null?void 0:g[0])==null?void 0:I.tagName)||"",tagId:((F=t==null?void 0:t.tags)==null?void 0:F.map(h=>h.id))||[],companiesId:(t==null?void 0:t.companiesId)||""},validationSchema:tt,onSubmit:async(h,{setSubmitting:D})=>{var N,S,M,A,L,O;try{const{colorName:p,tagName:a,...n}=h,f={...n,sourceId:(N=n==null?void 0:n.sourceId)==null?void 0:N.value};console.log(f);const l=r?await u(Ae({contactId:(t==null?void 0:t.id)||"",updatedData:f})):await u(Me(f)),z=(S=l==null?void 0:l.payload)!=null&&S.success?"Successfully Added":"Something went wrong !!!",H=(M=l==null?void 0:l.payload)!=null&&M.success?"success":"danger",G=(A=l==null?void 0:l.payload)!=null&&A.success?(L=l==null?void 0:l.payload)==null?void 0:L.message:(O=l==null?void 0:l.error)==null?void 0:O.message;Q.push(e.jsx(X,{title:z,type:H,duration:2500,children:G}),{placement:"top-end"}),u(oe()),await u(Z()),await u(ae())}catch(p){console.error(p)}finally{D(!1)}},children:({touched:h,errors:D,values:N,setFieldValue:S})=>e.jsx(qe,{children:e.jsx(Oe,{children:e.jsxs(ne,{defaultValue:"personalInfo",children:[e.jsx(st,{children:e.jsx(at,{value:"personalInfo",children:"Contact Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(ot,{value:"personalInfo",children:e.jsx(et,{touched:h,errors:D,values:N,setFieldValue:S})})})]})})})})});ie.displayName="ContactForm";const ce=x.forwardRef((s,o)=>{T();const t=C(m=>m.crmContact.data.selectedContact);C(m=>m.crmContact.data.contactList);const d=async m=>{};return e.jsx(ie,{ref:o,contact:t,onFormSubmit:d})});ce.displayName="ContactEditContent";const rt=({onSaveClick:s,onCancel:o})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(Y,{size:"sm",className:"mr-2",onClick:o,children:"Cancel"}),e.jsx(Y,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),nt=()=>{const s=T(),[o,t]=x.useState(window.innerWidth/2),d=C(c=>c.crmContact.data.drawerOpen),m=()=>{s(oe()),s(J({}))},r=x.useRef(null),u=()=>{var c,g;console.log("formSubmit function called",(c=r.current)==null?void 0:c.values),(g=r.current)==null||g.submitForm()};return e.jsx(Ee,{isOpen:d,closable:!1,bodyClass:"p-0",width:o,footer:e.jsx(rt,{onCancel:m,onSaveClick:u}),onClose:m,onRequestClose:m,children:e.jsx(ce,{ref:r})})},it=()=>{const s=T(),o=C(p=>p.crmContact.data.displayedContactList),t=P("contacts","canModify"),d=P("contacts","canDelete"),m=P("contacts","canView"),r=C(p=>p.crmContact.data.loading),u=pe(),{pageIndex:c,pageSize:g,sort:I,query:F,total:h}=C(p=>p.crmContact.data.tableData),D=x.useCallback(()=>{s(Z()),s(se())},[s]);x.useEffect(()=>{D()},[D]);const N=x.useMemo(()=>({pageIndex:c,pageSize:g,sort:I,query:F,total:h}),[c,g,I,F,h]),S=({row:p})=>{const a=T();Ne();const n=()=>{a(re()),a(J(p))},f=async()=>{a(J(p)),a(_(!0))},l=()=>{const z=`/app/crm/contact-details/${p.id}`;u(z)};return e.jsxs("div",{className:"flex text-base items-center",children:[t&&e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 circle items-center",onClick:n,children:e.jsx(be,{})}),m&&e.jsx("span",{className:"cursor-pointer  hover:text-green-500 circle mx-1 items-center text-lg",onClick:l,children:e.jsx(Qe,{})}),d&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle items-center",onClick:f,children:e.jsx(ve,{})})]})},M=x.useMemo(()=>[{header:"Action",id:"action",cell:a=>e.jsx(S,{row:a.row.original})},{header:"Name",accessorKey:"firstName",cell:a=>{const{firstName:n,lastName:f}=a.row.original,l=`${n} ${f}`;return e.jsx(E,{text:l,maxLength:20})}},{header:"email",accessorKey:"email",cell:a=>a.row.original.email},{header:"Number",accessorKey:"contactNumber",cell:a=>a.row.original.contactNumber},{header:"source",accessorKey:"sourceId",cell:a=>{var f,l;const n=(l=(f=a.row.original)==null?void 0:f.source)==null?void 0:l.sources;return e.jsx(E,{text:n,maxLength:15})}},{header:"Tags",accessorKey:"tagName",cell:a=>{const n=a.row.original.tags||[];return e.jsx(je,{tags:n})}},{header:"Title",accessorKey:"title",cell:a=>{const n=a.row.original.title;return e.jsx(U,{title:n,children:e.jsx(E,{text:n,maxLength:15})},n)}},{header:"Company",accessorKey:"companyName",cell:a=>{const n=a.row.original.company?a.row.original.company.companyName:"";return e.jsx(E,{text:n,maxLength:15})}},{header:"address",accessorKey:"address",cell:a=>{const n=[a.row.original.address,a.row.original.city,a.row.original.state,a.row.original.pincode].filter(f=>f!=null).join(" ");return e.jsx(U,{title:n,children:e.jsx(E,{text:n,maxLength:20})},n)}},{header:"Notes",accessorKey:"description",cell:a=>{const n=a.row.original.description;return e.jsx(U,{title:n,children:e.jsx(E,{text:n,maxLength:20})},n)}}],[t,d]),A=p=>{const a=V(N);a.pageIndex=p,s(W(a))},L=p=>{const a=V(N);a.pageSize=Number(p),a.pageIndex=1,s(W(a))},O=p=>{const a=V(N);a.sort=p,s(W(a))};return e.jsxs("div",{children:[e.jsx(ge,{columns:M,data:o,loading:r,pagingData:{total:N.total,pageIndex:N.pageIndex,pageSize:N.pageSize},onPaginationChange:A,onSelectChange:L,onSort:O}),e.jsx(nt,{}),e.jsx(Ye,{})]})},le=x.forwardRef((s,o)=>{const{onInputChange:t}=s,d=Xe(m,500);function m(u){t==null||t(u)}const r=u=>{d(u.target.value)};return e.jsx(w,{ref:o,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(we,{className:"text-lg"}),onChange:r})});le.displayName="ContactTableSearch";const ct=()=>{const s=T(),o=x.useRef(null),t=C(c=>c.crmContact.data.tableData),d=P("contacts","canCreate"),m=c=>{const g=V(t);g.query=c,g.pageIndex=1,typeof c=="string"&&c.length>1&&r(g),typeof c=="string"&&c.length===0&&r(g)},r=c=>{s(c?W(c):Z())},u=()=>{s(re())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(le,{ref:o,onInputChange:m})}),e.jsx("div",{className:"mb-4",children:d&&e.jsx(Y,{size:"sm",onClick:u,children:"Add New"})})]})};ue("crmContact",Le);const lt=()=>{const s=C(o=>o.crmContact.data.tableData);return e.jsx(e.Fragment,{children:e.jsxs(xe,{bodyClass:"h-full",children:[e.jsx(B,{title:`Contacts (${s==null?void 0:s.total})`,desc:"",className:"mb-2"}),e.jsx(ct,{}),e.jsx(it,{})]})})},Pa=lt;export{Pa as default};
