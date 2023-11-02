import{a as L,j as e,r as C,al as ce,aq as le}from"./index-814886c9.js";import{A as de}from"./AdaptableCard-0deeb77e.js";import{F as B}from"./FormDesription-20959162.js";import{D as me}from"./DataTable-3c3dbcc0.js";import{T as pe}from"./TagsList-4a7f7a99.js";import{T as R}from"./TextTruncate-22baaaa6.js";import{u as W}from"./checkEditUpdate-21c1ebd9.js";import{u as ue}from"./useThemeClass-4e25280b.js";import{c as Z}from"./cloneDeep-3031fb0b.js";import{N as xe,O as he,P as ge,b as fe}from"./index.esm-d47a8d30.js";import{u as j,t as _,d as Ce,g as V,a as ee,b as je,c as Ne,e as be,f as ye,h as ve,i as Ie,j as we,k as te,l as Se,m as De,n as ae,s as K,o as O,p as se,r as Te}from"./index-0f86756f.js";import{t as G,N as U}from"./toast-208340c6.js";import{C as Ae}from"./ConfirmDialog-dbb97547.js";import{B as J}from"./Button-3b704f3e.js";import{D as Me}from"./Drawer-11d68f58.js";import{a as v,F as Fe}from"./FormItem-718faadb.js";import{T as re}from"./index-f1114e94.js";import{u as ze,b as T,F as Ee,a as ke}from"./formik.esm-fe25dc70.js";import{c as Le,a as S,e as qe}from"./index.esm-48ebf711.js";import{I as A}from"./Input-2049b051.js";/* empty css              */import{T as Oe,e as Re}from"./index.esm-5571c016.js";import"./Alert-b0f262ad.js";import"./index-44a5db3e.js";import"./Badge-6740e82e.js";import"./RangeCalendar-dfea7372.js";import"./Card-dd06927c.js";import"./index-b7e31a2e.js";import"./index-48f4e996.js";import"./Dialog-7b46051f.js";import"./index-247a4da4.js";import"./toString-dfebe446.js";import"./index-ef1708cf.js";import"./index-b0a87e1b.js";import"./index-d04fa1a2.js";import"./Pagination-9fd494c1.js";import"./Progress-e2f778d5.js";import"./index-0b2c26a4.js";import"./ScrollBar-86fa4e32.js";import"./index-1a150266.js";import{S as $}from"./Select-b3f832ed.js";import"./Skeleton-f103a7cb.js";import"./index-40caa853.js";import"./Switcher-e40ff6b0.js";import"./index-d9751af2.js";import"./Tag-d328000b.js";import"./index-fd153dc3.js";import"./index-45d98e78.js";import{T as H}from"./Tooltip-07e1f3da.js";import"./Upload-befa0358.js";import{t as $e}from"./tagAndCategory-228f57e7.js";import{B as Be}from"./index.esm-cc12ad2c.js";import{F as Ke}from"./index.esm-6517337b.js";import{F as Q}from"./index.esm-9573039c.js";import{G as X}from"./index.esm-927cde1f.js";import{M as We}from"./index.esm-4ad154d0.js";import{C as Ze}from"./react-select-creatable.esm-d1bd14ca.js";import{B as Y}from"./index.esm-86c55a2c.js";import{a as Ve}from"./index.esm-6ecb1cd0.js";import{d as Pe}from"./debounce-23d9eebb.js";import"./index-e8e6816d.js";import"./moment-fbc5633a.js";import"./_MapCache-89d7c2b4.js";import"./Views-fed2ee34.js";import"./_getPrototype-4fad6a22.js";import"./CrmService-9aed65a4.js";import"./useTimeout-519d5bf5.js";import"./CloseButton-2b27a694.js";import"./StatusIcon-9abc8a45.js";import"./chainedFunction-070f832c.js";import"./index-3d4ae666.js";import"./index-d9b10e52.js";import"./useControllableState-b8736341.js";import"./isNil-ff170caf.js";import"./get-f86e464d.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-74b76620.js";import"./useRootClose-a805a36e.js";import"./usePopper-6c0a6ae3.js";import"./TimeInput-327d74d8.js";import"./useUniqueId-1ba47d20.js";import"./useDidUpdate-45c585a8.js";import"./useUncertainRef-f508bcbc.js";import"./slicedToArray-cb35d4e4.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c5dbfc98.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-b325cf62.js";import"./index.esm-423bf4e4.js";const He=()=>{const s=L(),i=j(d=>d.crmContact.data.deleteConfirmation),t=j(d=>d.crmContact.data.selectedContact),l=()=>{s(_(!1))},p=async()=>{var u,x,N;s(_(!1));const d=await s(Ce(t==null?void 0:t.id));(u=d==null?void 0:d.payload)!=null&&u.success?G.push(e.jsx(U,{title:"Successfuly Deleted",type:"success",duration:2500,children:(x=d==null?void 0:d.payload)==null?void 0:x.message}),{placement:"top-end"}):G.push(e.jsx(U,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(N=d==null?void 0:d.error)==null?void 0:N.message}),{placement:"top-end"}),await s(V()),await s(ee())};return e.jsx(Ae,{isOpen:i,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:p,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this contact will be deleted as well. This action cannot be undone."})})},_e=s=>{const{touched:i,errors:t,values:l,setFieldValue:p,customFieldData:d}=s,u=L(),[x,N]=C.useState([]),[I,M]=C.useState(null),w=j(a=>{var o;return(o=a.crmContact.data)==null?void 0:o.customField});console.log("customField",w),j(a=>a.crmContact.data.contactList);const F=j(a=>a.crmContact.data.companyList),h=j(a=>a.crmContact.data.sources),c=j(a=>a.crmContact.data.states);j(a=>a.crmContact.data.cities);const m=C.useMemo(()=>F==null?void 0:F.map(a=>({value:a.id,label:a.companyName})),[F]),b=C.useMemo(()=>c==null?void 0:c.map(a=>({value:a.id,label:a.stateName})),[c]),D=C.useMemo(()=>{var o;const a=c==null?void 0:c.find(n=>n.id===l.stateId);return((o=a==null?void 0:a.cities)==null?void 0:o.map(n=>({value:n.id,label:n.cityName})))||[]},[c,I]),z=C.useMemo(()=>h==null?void 0:h.map(o=>({label:o.sources,value:o.id})),[h]),q={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"};C.useEffect(()=>{(async()=>{var o,n;try{const{payload:y}=await u(ve()),E=(o=y==null?void 0:y.data)==null?void 0:o.find(k=>(k==null?void 0:k.moduleName)==="contacts");if(E){const{payload:k}=await u(Ie({id:(n=E==null?void 0:E.id)==null?void 0:n.toString()})),P=$e(k==null?void 0:k.data);N(P)}}catch(y){console.error("Error fetching module data:",y)}})(),u(je()),u(Ne()),u(be()),u(ye())},[u]);const g=ze(),r=a=>{g.setFieldValue("tagId",a)},f=async(a,o)=>{const n={sources:a==null?void 0:a.label};switch(o.action){case"create-option":await u(we(n)),await u(te());break;case"select-option":p("sourceId",a);break;case"clear":p("sourceId",null);break}};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Contact Basic Information",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"First Name *",invalid:t.firstName&&i.firstName,errorMessage:t.firstName,children:e.jsx(T,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:A,prefix:e.jsx(Q,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Last Name *",invalid:t.lastName&&i.lastName,errorMessage:t.lastName,children:e.jsx(T,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:A,prefix:e.jsx(Q,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Email *",invalid:t.email&&i.email,errorMessage:t.email,children:e.jsx(T,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:A,prefix:e.jsx(xe,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Contact Number *",invalid:t.contactNumber&&i.contactNumber,errorMessage:t.contactNumber,children:e.jsx(T,{type:"tel",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:A,prefix:e.jsx(Be,{className:"text-xl"})})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Title",invalid:t.title&&i.title,errorMessage:t.title,children:e.jsx(T,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:A,prefix:e.jsx(We,{className:"text-xl"})})})})}),e.jsx(v,{label:"Notes",invalid:t.description&&i.description,errorMessage:t.description,children:e.jsx(T,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:A,prefix:e.jsx(Oe,{className:"text-xl"})})}),e.jsx(B,{title:"Address",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Address",invalid:t.address&&i.address,errorMessage:t.address,children:e.jsx(T,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:A,prefix:e.jsx(Ke,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"State",invalid:t.stateId&&i.stateId,errorMessage:t.stateId,children:e.jsx($,{name:"stateId",placeholder:"Select State",options:b,id:"stateId",value:b==null?void 0:b.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.stateId)),onChange:a=>{const o=a.value;l.stateId!==o&&p("cityId",""),p("stateId",o||""),M(o)}})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"City",invalid:t.cityId&&i.cityId,errorMessage:t.cityId,children:e.jsx($,{name:"cityId",placeholder:"Select City",options:D,id:"cityId",value:(D==null?void 0:D.find(a=>(a==null?void 0:a.value)===(l==null?void 0:l.cityId)))||{value:"",label:"Select City"},onChange:a=>{const o=a.value;o!==l.cityId&&p("cityId",o||"")}})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{style:{position:"relative"},children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"ZipCode",invalid:t.zipcode&&i.zipcode,errorMessage:t.zipcode,children:e.jsx(T,{type:"text",autoComplete:"off",name:"zipcode",placeholder:"ZipCode",component:A,prefix:e.jsx(Re,{className:"text-xl"})})})})})})]}),e.jsx(B,{title:"Contact Others Details",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Company Name",invalid:t.companiesId&&i.companiesId,errorMessage:t.companiesId,children:e.jsx($,{name:"companiesId",placeholder:"Company Name",options:m,id:"companiesId",value:m==null?void 0:m.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.companiesId)),onChange:a=>{const o=a.value;p("companiesId",o||"")}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Source",invalid:t.source&&i.source,errorMessage:t.source,children:e.jsx(T,{isClearable:!0,type:"text",autoComplete:"off",name:"sourceId",placeholder:"Source",component:$,componentAs:Ze,options:z,prefix:e.jsx(X,{className:"text-xl"}),onChange:f})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Tag",children:e.jsx(T,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:$,options:x,prefix:e.jsx(X,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:r})})})}),(w==null?void 0:w.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Additional Details",desc:"",className:"mb-2"}),e.jsx("div",{style:q,children:w==null?void 0:w.map(a=>e.jsx("div",{children:e.jsx(v,{label:a==null?void 0:a.label,children:a.inputType==="textArea"?e.jsx(T,{textArea:!0,type:"text",autoComplete:"off",name:a.name,placeholder:a==null?void 0:a.label,defaultValue:a==null?void 0:a.defaultValue,component:A,prefix:e.jsx(Y,{className:"text-xl"})}):e.jsx(T,{type:a.inputType,autoComplete:"off",name:a.name,placeholder:a==null?void 0:a.label,defaultValue:a==null?void 0:a.defaultValue,component:A,prefix:e.jsx(Y,{className:"text-xl"})})})},a.id))})]}):null]})},Ge=Le().shape({firstName:S().required("First Name is required"),lastName:S().required("Last Name is required"),title:S(),contactNumber:S().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",s=>!isNaN(s)).test("is-ten-digits","Contact must be exactly 10 digits",s=>{if(s){const i=Number(s);return/^\d{10}$/.test(i.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",s=>s?!s.startsWith("0"):!0),email:S().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),address:S(),stateId:S(),cityId:S(),zipcode:S().test("is-number","ZipCode must be a number",s=>!(s&&isNaN(Number(s)))).test("is-six-digits","ZipCode must be exactly 6 digits",s=>!(s&&s.length!==6)),companiesId:S().nullable(),companyName:S(),source:S().nullable(),description:S(),tagId:qe()}),{TabNav:Ue,TabList:Je,TabContent:Qe}=re,oe=C.forwardRef((s,i)=>{var I,M,w,F;const t=j(h=>{var c,m;return(m=(c=h.crmContact)==null?void 0:c.data)==null?void 0:m.selectedContact}),l=j(h=>{var c;return(c=h.crmContact.data)==null?void 0:c.customField}),p=j(h=>{var c,m;return(m=(c=h.crmContact)==null?void 0:c.data)==null?void 0:m.sources}),d=C.useMemo(()=>p.map(c=>({label:c.sources,value:c.id})),[p]),u=!!t.id,x=L(),N=C.useMemo(()=>l==null?void 0:l.reduce((c,m)=>{var D;const b=(D=t==null?void 0:t.contactFields)==null?void 0:D.find(z=>(z==null?void 0:z.name)===(m==null?void 0:m.name));return c[m==null?void 0:m.name]=b?b==null?void 0:b.value:m!=null&&m.defaultValue?m==null?void 0:m.defaultValue:"",c},{}),[l]);return e.jsx(Ee,{innerRef:i,initialValues:{firstName:(t==null?void 0:t.firstName)||"",lastName:(t==null?void 0:t.lastName)||"",title:(t==null?void 0:t.title)||"",email:(t==null?void 0:t.email)||"",contactNumber:(t==null?void 0:t.contactNumber)||"",description:(t==null?void 0:t.description)||"",companyName:((I=t==null?void 0:t.company)==null?void 0:I.companyName)||"",sourceId:t!=null&&t.sourceId?d.find(h=>h.value===(t==null?void 0:t.sourceId)):null,address:(t==null?void 0:t.address)||"",stateId:(t==null?void 0:t.stateId)||"",cityId:(t==null?void 0:t.cityId)||"",zipcode:(t==null?void 0:t.zipcode)||"",tagName:((w=(M=t==null?void 0:t.tags)==null?void 0:M[0])==null?void 0:w.tagName)||"",tagId:((F=t==null?void 0:t.tags)==null?void 0:F.map(h=>({label:h.tagName,value:h.id})))||[],companiesId:(t==null?void 0:t.companiesId)||"",...N},validationSchema:Ge,onSubmit:async(h,{setSubmitting:c})=>{var m,b,D,z,q,g,r;try{const{tagName:f,...a}=h,o={...a,sourceId:(m=a==null?void 0:a.sourceId)==null?void 0:m.value,tagId:a==null?void 0:a.tagId.map(P=>P.value)},n=u?await x(Se({contactId:(t==null?void 0:t.id)||"",updatedData:o})):await x(De(o)),y=(b=n==null?void 0:n.payload)!=null&&b.success?"Successfully Added":"Something went wrong !!!",E=(D=n==null?void 0:n.payload)!=null&&D.success?"success":"danger",k=(z=n==null?void 0:n.payload)!=null&&z.success?(q=n==null?void 0:n.payload)==null?void 0:q.message:(g=n==null?void 0:n.error)==null?void 0:g.message;G.push(e.jsx(U,{title:y,type:E,duration:2500,children:k}),{placement:"top-end"}),(r=n==null?void 0:n.payload)!=null&&r.success&&x(ae()),await x(V()),await x(ee())}catch(f){console.error(f)}finally{c(!1)}},children:({touched:h,errors:c,values:m,setFieldValue:b})=>e.jsx(ke,{children:e.jsx(Fe,{children:e.jsxs(re,{defaultValue:"personalInfo",children:[e.jsx(Je,{children:e.jsx(Ue,{value:"personalInfo",children:"Contact Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(Qe,{value:"personalInfo",children:e.jsx(_e,{touched:h,errors:c,values:m,setFieldValue:b})})})]})})})})});oe.displayName="ContactForm";const ne=C.forwardRef((s,i)=>{L();const t=j(p=>{var d,u;return(u=(d=p.crmContact)==null?void 0:d.data)==null?void 0:u.selectedContact});j(p=>p.crmContact.data.contactList);const l=async p=>{};return e.jsx(oe,{ref:i,contact:t,onFormSubmit:l})});ne.displayName="ContactEditContent";const Xe=({onSaveClick:s,onCancel:i})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(J,{size:"sm",className:"mr-2",onClick:i,children:"Cancel"}),e.jsx(J,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ye=()=>{const s=L(),[i,t]=C.useState(window.innerWidth/2),l=j(N=>{var I,M;return(M=(I=N.crmContact)==null?void 0:I.data)==null?void 0:M.drawerOpen}),p=()=>{s(ae()),s(K({}))},d=C.useRef(null),u=()=>{var N,I;console.log("formSubmit function called",(N=d.current)==null?void 0:N.values),(I=d.current)==null||I.submitForm()},x=()=>{t(window.innerWidth/2)};return C.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[]),e.jsx(Me,{isOpen:l,closable:!1,bodyClass:"p-0",width:i,footer:e.jsx(Xe,{onCancel:p,onSaveClick:u}),onClose:p,onRequestClose:p,children:e.jsx(ne,{ref:d})})},et=()=>{const s=L(),i=j(g=>g.crmContact.data.displayedContactList),t=j(g=>g.crmContact.data.tableData),l=W("contacts","canModify"),p=W("contacts","canDelete"),d=W("contacts","canView"),u=j(g=>g.crmContact.data.loading),x=ce(),{pageIndex:N,pageSize:I,sort:M,query:w,total:F}=j(g=>g.crmContact.data.tableData),h=C.useCallback(()=>{s(V()),s(te())},[s]);C.useEffect(()=>(h(),()=>{window.location.pathname.includes("contact")||s(O({...t,query:""}))}),[h]);const c=C.useMemo(()=>({pageIndex:N,pageSize:I,sort:M,query:w,total:F}),[N,I,M,w,F]),m=({row:g})=>{const r=L();ue();const f=()=>{r(se()),r(K(g))},a=async()=>{r(K(g)),r(_(!0))},o=()=>{r(K(g));const n=`/app/crm/contact-details/${g.id}`;x(n)};return e.jsxs("div",{className:"flex text-base items-center",children:[l&&e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 circle items-center",onClick:f,children:e.jsx(he,{})}),p&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle mx-1 items-center",onClick:a,children:e.jsx(ge,{})}),d&&e.jsx("span",{className:"cursor-pointer hover:text-green-500 circle items-center text-lg",onClick:o,children:e.jsx(Ve,{})})]})},b=C.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(m,{row:r.row.original})},{header:"Name",accessorKey:"firstName",cell:r=>{const{firstName:f,lastName:a}=r.row.original,o=`${f} ${a}`;return e.jsx(H,{title:o,children:e.jsx(R,{text:o,maxLength:15})},o)}},{header:"email",accessorKey:"email",cell:r=>r.row.original.email},{header:"Number",accessorKey:"contactNumber",cell:r=>r.row.original.contactNumber},{header:"source",accessorKey:"sourceId",cell:r=>{var a,o,n,y;const f=(o=(a=r.row.original)==null?void 0:a.source)!=null&&o.sources?(y=(n=r.row.original)==null?void 0:n.source)==null?void 0:y.sources:"-";return e.jsx(R,{text:f,maxLength:15})}},{header:"Tags",accessorKey:"tagName",cell:r=>{const f=r.row.original.tags;return f!=null&&f.length>0?e.jsx(pe,{tags:f}):"-"}},{header:"Title",accessorKey:"title",cell:r=>{const f=r.row.original.title?r.row.original.title:"-";return e.jsx(H,{title:f,children:e.jsx(R,{text:f,maxLength:15})},f)}},{header:"Company",accessorKey:"companyName",cell:r=>{const f=r.row.original.company?r.row.original.company.companyName:"-";return e.jsx(R,{text:f,maxLength:15})}},{header:"Address",accessorKey:"address",cell:r=>{const{address:f,cityData:a,stateData:o,zipcode:n}=r.row.original,y=[f,a==null?void 0:a.cityName,o==null?void 0:o.stateName,n].filter(E=>E!=null).join(" ");return e.jsx(H,{title:y||"-",children:e.jsx(R,{text:y||"-",maxLength:20})},y)}}],[l,p]),D=g=>{const r=Z(c);r.pageIndex=g,s(O(r))},z=g=>{const r=Z(c);r.pageSize=Number(g),r.pageIndex=1,s(O(r))},q=g=>{const r=Z(c);r.sort=g,s(O(r))};return e.jsxs("div",{children:[e.jsx(me,{columns:b,data:i,loading:u,pagingData:{total:c.total,pageIndex:c.pageIndex,pageSize:c.pageSize},onPaginationChange:D,onSelectChange:z,onSort:q}),e.jsx(Ye,{}),e.jsx(He,{})]})},ie=C.forwardRef((s,i)=>{const{onInputChange:t}=s,l=Pe(p,500);function p(u){t==null||t(u)}const d=u=>{l(u.target.value)};return e.jsx(A,{ref:i,className:"max-w-md md:w-56 mb-4",size:"sm",placeholder:"Search by name or email",prefix:e.jsx(fe,{className:"text-lg"}),onChange:d})});ie.displayName="ContactTableSearch";const tt=()=>{const s=L(),i=C.useRef(null),t=j(x=>x.crmContact.data.tableData),l=W("contacts","canCreate"),p=x=>{const N=Z(t);N.query=x,N.pageIndex=1,typeof x=="string"&&x.length>1&&d(N),typeof x=="string"&&x.length===0&&d(N)},d=x=>{s(x?O(x):V())},u=()=>{s(se()),s(K({}))};return C.useEffect(()=>{i.current&&(i.current.value=t.query||"",s(O(t)))},[t==null?void 0:t.query]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(ie,{ref:i,onInputChange:p})}),e.jsx("div",{className:"mb-4",children:l&&e.jsx(J,{size:"sm",onClick:u,children:"Add New"})})]})};le("crmContact",Te);const at=()=>{const s=j(i=>i.crmContact.data.tableData);return e.jsx(e.Fragment,{children:e.jsxs(de,{bodyClass:"h-full",children:[e.jsx(B,{title:`Contacts (${(s==null?void 0:s.total)||0})`,desc:"",className:"mb-2"}),e.jsx(tt,{}),e.jsx(et,{})]})})},Ra=at;export{Ra as default};
