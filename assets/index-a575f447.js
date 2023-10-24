import{a as E,j as e,r as f,ap as ce,aq as le}from"./index-c91233c4.js";import{A as de}from"./AdaptableCard-38907668.js";import{F as K}from"./FormDesription-2681390f.js";import{D as me}from"./DataTable-2296ca1a.js";import{T as pe}from"./TagsList-656620fd.js";import{T as R}from"./TextTruncate-472ca5dc.js";import{u as Z}from"./checkEditUpdate-ac8ef005.js";import{u as ue}from"./useThemeClass-90ce08ab.js";import{c as P}from"./cloneDeep-3478dfeb.js";import{N as xe,O as he,P as ge,b as fe}from"./index.esm-3e702816.js";import{u as C,t as V,d as Ce,g as H,a as Y,b as je,c as Ne,e as be,f as ye,h as ve,i as we,j as Ie,k as ee,l as Se,m as De,n as te,s as B,o as O,p as ae,r as Te}from"./index-304676b7.js";import{t as _,N as G}from"./toast-3356881f.js";import{C as Fe}from"./ConfirmDialog-b19fcb2d.js";import{B as U}from"./Button-113f2dd5.js";import{D as Ae}from"./Drawer-1eb99a1f.js";import{a as y,F as Me}from"./FormItem-03780ce8.js";import{T as se}from"./index-9515aebe.js";import{u as ze,b as w,F as Ee,a as Le}from"./formik.esm-302d3744.js";import{c as ke,a as v,e as qe}from"./index.esm-b1ea5004.js";import{I as S}from"./Input-3db03e3e.js";/* empty css              */import{T as Re,e as Oe}from"./index.esm-2faaa5cf.js";import"./Alert-5079d0b3.js";import"./index-ab87cb73.js";import"./Badge-4bf3424a.js";import"./RangeCalendar-ef1c5cb5.js";import"./Card-9fc6ce8c.js";import"./index-385919dd.js";import"./index-573812b1.js";import"./Dialog-7536f1c9.js";import"./index-5e45e4e6.js";import"./toString-02d61bde.js";import"./index-0c57aa38.js";import"./index-ae85a04b.js";import"./index-4b57f9f6.js";import"./Pagination-ecd3ce06.js";import"./Progress-d02ad1c6.js";import"./index-53a76053.js";import"./ScrollBar-7545d350.js";import"./index-d1291c10.js";import{S as $}from"./Select-eb35ba81.js";import"./Skeleton-c238629d.js";import"./index-897c901b.js";import"./Switcher-168eb353.js";import"./index-117fd06f.js";import"./Tag-8be02ac4.js";import"./index-64df10c7.js";import"./index-c7f4c752.js";import{T as W}from"./Tooltip-63f372a9.js";import"./Upload-49e8a9f3.js";import{t as $e}from"./tagAndCategory-228f57e7.js";import{B as Ke}from"./index.esm-95ff1c22.js";import{F as Be}from"./index.esm-eb0515f3.js";import{F as J}from"./index.esm-9fda5354.js";import{G as Q}from"./index.esm-2303ace8.js";import{M as We}from"./index.esm-ea31618b.js";import{C as Ze}from"./react-select-creatable.esm-be5f6284.js";import{B as X}from"./index.esm-e9c8ac70.js";import{a as Pe}from"./index.esm-bb37fee7.js";import{d as He}from"./debounce-e0e0a602.js";import"./index-507e1985.js";import"./_MapCache-c46fdcc4.js";import"./Views-7340793d.js";import"./_getPrototype-c07d5b11.js";import"./CrmService-0926a59f.js";import"./useTimeout-d260b9bf.js";import"./CloseButton-a41fa522.js";import"./StatusIcon-6b354014.js";import"./chainedFunction-070f832c.js";import"./index-50dd8478.js";import"./index-e6ff5055.js";import"./useControllableState-875c1bdf.js";import"./isNil-470b0161.js";import"./get-20fb91ec.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-80cead7b.js";import"./useRootClose-e7f1cf8a.js";import"./usePopper-59b3c55c.js";import"./TimeInput-f85d1d9c.js";import"./useUniqueId-a5104d81.js";import"./useDidUpdate-53295be0.js";import"./useUncertainRef-50cdc3d0.js";import"./slicedToArray-84afaa5e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c1093647.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-4cf634a1.js";import"./index.esm-5384ff95.js";const Ve=()=>{const o=E(),n=C(d=>d.crmContact.data.deleteConfirmation),t=C(d=>d.crmContact.data.selectedContact),c=()=>{o(V(!1))},m=async()=>{var l,x,h;o(V(!1));const d=await o(Ce(t==null?void 0:t.id));(l=d==null?void 0:d.payload)!=null&&l.success?_.push(e.jsx(G,{title:"Successfuly Deleted",type:"success",duration:2500,children:(x=d==null?void 0:d.payload)==null?void 0:x.message}),{placement:"top-end"}):_.push(e.jsx(G,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(h=d==null?void 0:d.error)==null?void 0:h.message}),{placement:"top-end"}),await o(H()),await o(Y())};return e.jsx(Fe,{isOpen:n,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:m,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this contact will be deleted as well. This action cannot be undone."})})},_e=o=>{const{touched:n,errors:t,values:c,setFieldValue:m,customFieldData:d}=o,l=E(),[x,h]=f.useState([]),[D,L]=f.useState(null),T=C(a=>{var s;return(s=a.crmContact.data)==null?void 0:s.customField});console.log("customField",T),C(a=>a.crmContact.data.contactList);const p=C(a=>a.crmContact.data.companyList),N=C(a=>a.crmContact.data.sources),g=C(a=>a.crmContact.data.states);C(a=>a.crmContact.data.cities);const I=f.useMemo(()=>p==null?void 0:p.map(a=>({value:a.id,label:a.companyName})),[p]),F=f.useMemo(()=>g==null?void 0:g.map(a=>({value:a.id,label:a.stateName})),[g]),A=f.useMemo(()=>{var s;const a=g==null?void 0:g.find(j=>j.id===c.stateId);return((s=a==null?void 0:a.cities)==null?void 0:s.map(j=>({value:j.id,label:j.cityName})))||[]},[g,D]),k=f.useMemo(()=>N==null?void 0:N.map(s=>({label:s.sources,value:s.id})),[N]),q={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"};f.useEffect(()=>{(async()=>{var s,j;try{const{payload:b}=await l(ve()),M=(s=b==null?void 0:b.data)==null?void 0:s.find(z=>(z==null?void 0:z.moduleName)==="contacts");if(M){const{payload:z}=await l(we({id:(j=M==null?void 0:M.id)==null?void 0:j.toString()})),ie=$e(z==null?void 0:z.data);h(ie)}}catch(b){console.error("Error fetching module data:",b)}})(),l(je()),l(Ne()),l(be()),l(ye())},[l]);const u=ze(),r=a=>{u.setFieldValue("tagId",a)},i=async(a,s)=>{const j={sources:a==null?void 0:a.label};switch(s.action){case"create-option":await l(Ie(j)),await l(ee());break;case"select-option":m("sourceId",a);break;case"clear":m("sourceId",null);break}};return e.jsxs(e.Fragment,{children:[e.jsx(K,{title:"Contact Basic Information",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"First Name *",invalid:t.firstName&&n.firstName,errorMessage:t.firstName,children:e.jsx(w,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:S,prefix:e.jsx(J,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Last Name *",invalid:t.lastName&&n.lastName,errorMessage:t.lastName,children:e.jsx(w,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:S,prefix:e.jsx(J,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Email *",invalid:t.email&&n.email,errorMessage:t.email,children:e.jsx(w,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:S,prefix:e.jsx(xe,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Contact Number *",invalid:t.contactNumber&&n.contactNumber,errorMessage:t.contactNumber,children:e.jsx(w,{type:"tel",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:S,prefix:e.jsx(Ke,{className:"text-xl"})})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Title",invalid:t.title&&n.title,errorMessage:t.title,children:e.jsx(w,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:S,prefix:e.jsx(We,{className:"text-xl"})})})})}),e.jsx(y,{label:"Notes",invalid:t.description&&n.description,errorMessage:t.description,children:e.jsx(w,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:S,prefix:e.jsx(Re,{className:"text-xl"})})}),e.jsx(K,{title:"Address",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Address",invalid:t.address&&n.address,errorMessage:t.address,children:e.jsx(w,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:S,prefix:e.jsx(Be,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"State",invalid:t.stateId&&n.stateId,errorMessage:t.stateId,children:e.jsx($,{name:"stateId",placeholder:"Select State",options:F,id:"stateId",value:F==null?void 0:F.find(a=>(a==null?void 0:a.value)==(c==null?void 0:c.stateId)),onChange:a=>{const s=a.value;c.stateId!==s&&m("cityId",""),m("stateId",s||""),L(s)}})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"City",invalid:t.cityId&&n.cityId,errorMessage:t.cityId,children:e.jsx($,{name:"cityId",placeholder:"Select City",options:A,id:"cityId",value:(A==null?void 0:A.find(a=>(a==null?void 0:a.value)===(c==null?void 0:c.cityId)))||{value:"",label:"Select City"},onChange:a=>{const s=a.value;s!==c.cityId&&m("cityId",s||"")}})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{style:{position:"relative"},children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"ZipCode",invalid:t.zipcode&&n.zipcode,errorMessage:t.zipcode,children:e.jsx(w,{type:"text",autoComplete:"off",name:"zipcode",placeholder:"ZipCode",component:S,prefix:e.jsx(Oe,{className:"text-xl"})})})})})})]}),e.jsx(K,{title:"Contact Others Details",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Company Name",invalid:t.companiesId&&n.companiesId,errorMessage:t.companiesId,children:e.jsx($,{name:"companiesId",placeholder:"Company Name",options:I,id:"companiesId",value:I==null?void 0:I.find(a=>(a==null?void 0:a.value)==(c==null?void 0:c.companiesId)),onChange:a=>{const s=a.value;m("companiesId",s||"")}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Source",invalid:t.source&&n.source,errorMessage:t.source,children:e.jsx(w,{isClearable:!0,type:"text",autoComplete:"off",name:"sourceId",placeholder:"Source",component:$,componentAs:Ze,options:k,prefix:e.jsx(Q,{className:"text-xl"}),onChange:i})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(y,{label:"Tag",children:e.jsx(w,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:$,options:x,prefix:e.jsx(Q,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:r})})})}),e.jsx(K,{title:"Additional Details",desc:"",className:"mb-2"}),e.jsx("div",{style:q,children:T==null?void 0:T.map(a=>e.jsx("div",{children:e.jsx(y,{label:a==null?void 0:a.label,children:a.inputType==="textArea"?e.jsx(w,{textArea:!0,type:"text",autoComplete:"off",name:a.name,placeholder:a==null?void 0:a.label,defaultValue:a==null?void 0:a.defaultValue,component:S,prefix:e.jsx(X,{className:"text-xl"})}):e.jsx(w,{type:a.inputType,autoComplete:"off",name:a.name,placeholder:a==null?void 0:a.label,defaultValue:a==null?void 0:a.defaultValue,component:S,prefix:e.jsx(X,{className:"text-xl"})})})},a.id))})]})},Ge=ke().shape({firstName:v().required("First Name is required"),lastName:v().required("Last Name is required"),title:v(),contactNumber:v().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",o=>!isNaN(o)).test("is-ten-digits","Contact must be exactly 10 digits",o=>{if(o){const n=Number(o);return/^\d{10}$/.test(n.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",o=>o?!o.startsWith("0"):!0),email:v().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),address:v(),stateId:v(),cityId:v(),zipcode:v().test("is-number","ZipCode must be a number",o=>!(o&&isNaN(Number(o)))).test("is-six-digits","ZipCode must be exactly 6 digits",o=>!(o&&o.length!==6)),companiesId:v().nullable(),companyName:v(),source:v().nullable(),description:v(),tagId:qe()}),{TabNav:Ue,TabList:Je,TabContent:Qe}=se,oe=f.forwardRef((o,n)=>{var x,h,D,L,T;const t=C(p=>p.crmContact.data.selectedContact),c=C(p=>p.crmContact.data.sources),m=f.useMemo(()=>c.map(N=>({label:N.sources,value:N.id})),[c]),d=!!t.id,l=E();return e.jsx(Ee,{innerRef:n,initialValues:{firstName:(t==null?void 0:t.firstName)||"",lastName:(t==null?void 0:t.lastName)||"",title:(t==null?void 0:t.title)||"",email:(t==null?void 0:t.email)||"",contactNumber:(t==null?void 0:t.contactNumber)||"",description:(t==null?void 0:t.description)||"",companyName:((x=t==null?void 0:t.company)==null?void 0:x.companyName)||"",sourceId:t!=null&&t.sourceId?m.find(p=>p.value===(t==null?void 0:t.sourceId)):null,address:(t==null?void 0:t.address)||"",stateId:(t==null?void 0:t.stateId)||"",cityId:(t==null?void 0:t.cityId)||"",zipcode:(t==null?void 0:t.zipcode)||"",tagName:((D=(h=t==null?void 0:t.tags)==null?void 0:h[0])==null?void 0:D.tagName)||"",tagId:((L=t==null?void 0:t.tags)==null?void 0:L.map(p=>({label:p.tagName,value:p.id})))||[],companiesId:(t==null?void 0:t.companiesId)||"",...(T=t==null?void 0:t.contactFields)==null?void 0:T.reduce((p,N)=>(p[N.customKey.name]=N.value||"",p),{})},validationSchema:Ge,onSubmit:async(p,{setSubmitting:N})=>{var g,I,F,A,k,q,u;try{const{tagName:r,...i}=p;console.log({values:p});const a={...i,sourceId:(g=i==null?void 0:i.sourceId)==null?void 0:g.value,tagId:i==null?void 0:i.tagId.map(z=>z.value)};console.log({payload:a});const s=d?await l(Se({contactId:(t==null?void 0:t.id)||"",updatedData:a})):await l(De(a)),j=(I=s==null?void 0:s.payload)!=null&&I.success?"Successfully Added":"Something went wrong !!!",b=(F=s==null?void 0:s.payload)!=null&&F.success?"success":"danger",M=(A=s==null?void 0:s.payload)!=null&&A.success?(k=s==null?void 0:s.payload)==null?void 0:k.message:(q=s==null?void 0:s.error)==null?void 0:q.message;_.push(e.jsx(G,{title:j,type:b,duration:2500,children:M}),{placement:"top-end"}),(u=s==null?void 0:s.payload)!=null&&u.success&&l(te()),await l(H()),await l(Y())}catch(r){console.error(r)}finally{N(!1)}},children:({touched:p,errors:N,values:g,setFieldValue:I})=>e.jsx(Le,{children:e.jsx(Me,{children:e.jsxs(se,{defaultValue:"personalInfo",children:[e.jsx(Je,{children:e.jsx(Ue,{value:"personalInfo",children:"Contact Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(Qe,{value:"personalInfo",children:e.jsx(_e,{touched:p,errors:N,values:g,setFieldValue:I})})})]})})})})});oe.displayName="ContactForm";const re=f.forwardRef((o,n)=>{E();const t=C(m=>m.crmContact.data.selectedContact);C(m=>m.crmContact.data.contactList);const c=async m=>{};return e.jsx(oe,{ref:n,contact:t,onFormSubmit:c})});re.displayName="ContactEditContent";const Xe=({onSaveClick:o,onCancel:n})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(U,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),e.jsx(U,{size:"sm",variant:"solid",onClick:o,children:"Save"})]}),Ye=()=>{const o=E(),[n,t]=f.useState(window.innerWidth/2),c=C(h=>h.crmContact.data.drawerOpen),m=()=>{o(te()),o(B({}))},d=f.useRef(null),l=()=>{var h,D;console.log("formSubmit function called",(h=d.current)==null?void 0:h.values),(D=d.current)==null||D.submitForm()},x=()=>{t(window.innerWidth/2)};return f.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]),e.jsx(Ae,{isOpen:c,closable:!1,bodyClass:"p-0",width:n,footer:e.jsx(Xe,{onCancel:m,onSaveClick:l}),onClose:m,onRequestClose:m,children:e.jsx(re,{ref:d})})},et=()=>{const o=E(),n=C(u=>u.crmContact.data.displayedContactList),t=C(u=>u.crmContact.data.tableData),c=Z("contacts","canModify"),m=Z("contacts","canDelete"),d=Z("contacts","canView"),l=C(u=>u.crmContact.data.loading),x=ce(),{pageIndex:h,pageSize:D,sort:L,query:T,total:p}=C(u=>u.crmContact.data.tableData),N=f.useCallback(()=>{o(H()),o(ee())},[o]);f.useEffect(()=>(N(),()=>{window.location.pathname.includes("contact")||o(O({...t,query:""}))}),[N]);const g=f.useMemo(()=>({pageIndex:h,pageSize:D,sort:L,query:T,total:p}),[h,D,L,T,p]),I=({row:u})=>{const r=E();ue();const i=()=>{r(ae()),r(B(u))},a=async()=>{r(B(u)),r(V(!0))},s=()=>{r(B(u));const j=`/app/crm/contact-details/${u.id}`;x(j)};return e.jsxs("div",{className:"flex text-base items-center",children:[c&&e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 circle items-center",onClick:i,children:e.jsx(he,{})}),m&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle mx-1 items-center",onClick:a,children:e.jsx(ge,{})}),d&&e.jsx("span",{className:"cursor-pointer hover:text-green-500 circle items-center text-lg",onClick:s,children:e.jsx(Pe,{})})]})},F=f.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(I,{row:r.row.original})},{header:"Name",accessorKey:"firstName",cell:r=>{const{firstName:i,lastName:a}=r.row.original,s=`${i} ${a}`;return e.jsx(W,{title:s,children:e.jsx(R,{text:s,maxLength:15})},s)}},{header:"email",accessorKey:"email",cell:r=>r.row.original.email},{header:"Number",accessorKey:"contactNumber",cell:r=>r.row.original.contactNumber},{header:"source",accessorKey:"sourceId",cell:r=>{var a,s,j,b;const i=(s=(a=r.row.original)==null?void 0:a.source)!=null&&s.sources?(b=(j=r.row.original)==null?void 0:j.source)==null?void 0:b.sources:"-";return e.jsx(R,{text:i,maxLength:15})}},{header:"Tags",accessorKey:"tagName",cell:r=>{const i=r.row.original.tags;return i!=null&&i.length>0?e.jsx(pe,{tags:i}):"-"}},{header:"Title",accessorKey:"title",cell:r=>{const i=r.row.original.title?r.row.original.title:"-";return e.jsx(W,{title:i,children:e.jsx(R,{text:i,maxLength:15})},i)}},{header:"Company",accessorKey:"companyName",cell:r=>{const i=r.row.original.company?r.row.original.company.companyName:"-";return e.jsx(R,{text:i,maxLength:15})}},{header:"Address",accessorKey:"address",cell:r=>{const{address:i,cityData:a,stateData:s,zipcode:j}=r.row.original,b=[i,a==null?void 0:a.cityName,s==null?void 0:s.stateName,j].filter(M=>M!=null).join(" ");return e.jsx(W,{title:b||"-",children:e.jsx(R,{text:b||"-",maxLength:20})},b)}},{header:"Notes",accessorKey:"description",cell:r=>{const i=r.row.original.description?r.row.original.description:"-";return e.jsx(W,{title:i,children:e.jsx(R,{text:i,maxLength:20})},i)}}],[c,m]),A=u=>{const r=P(g);r.pageIndex=u,o(O(r))},k=u=>{const r=P(g);r.pageSize=Number(u),r.pageIndex=1,o(O(r))},q=u=>{const r=P(g);r.sort=u,o(O(r))};return e.jsxs("div",{children:[e.jsx(me,{columns:F,data:n,loading:l,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:A,onSelectChange:k,onSort:q}),e.jsx(Ye,{}),e.jsx(Ve,{})]})},ne=f.forwardRef((o,n)=>{const{onInputChange:t}=o,c=He(m,500);function m(l){t==null||t(l)}const d=l=>{c(l.target.value)};return e.jsx(S,{ref:n,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search by name or email",prefix:e.jsx(fe,{className:"text-lg"}),onChange:d})});ne.displayName="ContactTableSearch";const tt=()=>{const o=E(),n=f.useRef(null),t=C(x=>x.crmContact.data.tableData),c=Z("contacts","canCreate"),m=x=>{const h=P(t);h.query=x,h.pageIndex=1,typeof x=="string"&&x.length>1&&d(h),typeof x=="string"&&x.length===0&&d(h)},d=x=>{o(x?O(x):H())},l=()=>{o(ae()),o(B({}))};return f.useEffect(()=>{n.current&&(n.current.value=t.query||"",o(O(t)))},[t==null?void 0:t.query]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(ne,{ref:n,onInputChange:m})}),e.jsx("div",{className:"mb-4",children:c&&e.jsx(U,{size:"sm",onClick:l,children:"Add New"})})]})};le("crmContact",Te);const at=()=>{const o=C(n=>n.crmContact.data.tableData);return e.jsx(e.Fragment,{children:e.jsxs(de,{bodyClass:"h-full",children:[e.jsx(K,{title:`Contacts (${(o==null?void 0:o.total)||0})`,desc:"",className:"mb-2"}),e.jsx(tt,{}),e.jsx(et,{})]})})},Ra=at;export{Ra as default};
