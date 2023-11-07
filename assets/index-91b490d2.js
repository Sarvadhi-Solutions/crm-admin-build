import{a as k,j as e,r as C,al as pe,aq as ue}from"./index-82a4cdcd.js";import{A as xe}from"./AdaptableCard-f3359e05.js";import{F as B}from"./FormDesription-b818f051.js";import{D as ge}from"./DataTable-a2b72651.js";import"./Alert-62262f10.js";import"./index-c281b544.js";import"./Badge-df87bdc2.js";import{B as G}from"./Button-0e96ba54.js";import"./RangeCalendar-823e8aaa.js";import"./Card-6707ff6e.js";import"./index-c91d029f.js";import"./index-320abfaa.js";import"./Dialog-992e1d56.js";import{D as he}from"./Drawer-4bb376d7.js";import"./index-0428064e.js";import{a as I,F as fe}from"./FormItem-f5087afb.js";import"./toString-b2e07e9a.js";import{I as M}from"./Input-8b535fd4.js";import"./index-c11d92d4.js";import"./index-d64ec43f.js";import"./index-971eae45.js";import{t as J,N as Q}from"./toast-4eea8663.js";import"./Pagination-7722c7db.js";import"./Progress-7d1211e0.js";import"./index-7a0e0b9f.js";import"./ScrollBar-b2904e17.js";import"./index-7b9d9e5f.js";import{S as K}from"./Select-eb8671ae.js";import"./Skeleton-d36fd097.js";import"./index-04da13bb.js";import"./Switcher-a7e522ef.js";import"./index-4baab89c.js";import{T as te}from"./index-b111a719.js";import"./Tag-d5568307.js";import"./index-c63c62bb.js";import"./index-30e041a1.js";import{T as U}from"./Tooltip-5f04ccef.js";import"./Upload-341a9a0e.js";import{T as Ce}from"./TagsList-4f2913f5.js";import{T as V}from"./TextTruncate-c40fceb4.js";import{u as Z}from"./checkEditUpdate-b8787a18.js";import{u as je}from"./useThemeClass-38f80a2c.js";import{c as P}from"./cloneDeep-914ca532.js";import{a as Ne}from"./index.esm-c1a3c0a2.js";import{N as be,O as ye,P as we,b as Ie}from"./index.esm-9eb3698a.js";import{u as y,t as X,d as ve,g as H,b as ae,c as Se,e as De,h as Te,i as Ae,f as se,a as re,j as Me,k as oe,l as Fe,m as Ee,n as ne,s as W,o as _,p as ie,r as ze}from"./index-180294c4.js";import{C as Le}from"./ConfirmDialog-4e779e5f.js";import{b as T,u as $e,F as ke,a as qe}from"./formik.esm-fbd7cbeb.js";import{c as Oe,a as v,e as Re}from"./index.esm-f6409e84.js";/* empty css              */import{T as _e,e as Ve}from"./index.esm-f3449157.js";import{G as ce}from"./index.esm-325e1aa4.js";import{B as Y}from"./index.esm-d9aff84b.js";import{B as Be}from"./index.esm-e60cf8ff.js";import{F as Ke}from"./index.esm-4533a1af.js";import{F as ee}from"./index.esm-93fa7e7e.js";import{M as We}from"./index.esm-ca8acdf3.js";import{C as Ze}from"./react-select-creatable.esm-d4b7ae22.js";import{d as Pe}from"./debounce-2ded1513.js";import"./index-6801b2e9.js";import"./useTimeout-da6ce9b0.js";import"./CloseButton-d6bfe260.js";import"./StatusIcon-5a72f149.js";import"./Views-5e6cd1d6.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-3caf27a6.js";import"./_baseIsEqual-2b2683ef.js";import"./_MapCache-54b9aafe.js";import"./get-71f6a308.js";import"./useRootClose-ca0d0d80.js";import"./usePopper-150e7e1f.js";import"./TimeInput-10fd264b.js";import"./useUniqueId-cc8af61f.js";import"./useDidUpdate-f06e2487.js";import"./index-5ca2f98c.js";import"./useUncertainRef-0553f5d8.js";import"./isNil-ad4b9ef6.js";import"./index-dff75ec8.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-d75d4238.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-26dffdfb.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-c79fb68e.js";import"./index.esm-bb858611.js";import"./moment-fbc5633a.js";import"./_getPrototype-b764c861.js";import"./CrmService-a7ee7c84.js";const He=()=>{const s=k(),c=y(d=>d.crmContact.data.deleteConfirmation),a=y(d=>d.crmContact.data.selectedContact),n=()=>{s(X(!1))},x=async()=>{var g,f,j;s(X(!1));const d=await s(ve(a==null?void 0:a.id));(g=d==null?void 0:d.payload)!=null&&g.success?J.push(e.jsx(Q,{title:"Successfuly Deleted",type:"success",duration:2500,children:(f=d==null?void 0:d.payload)==null?void 0:f.message}),{placement:"top-end"}):J.push(e.jsx(Q,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(j=d==null?void 0:d.error)==null?void 0:j.message}),{placement:"top-end"}),await s(H()),await s(ae())};return e.jsx(Le,{isOpen:c,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:n,onRequestClose:n,onCancel:n,onConfirm:x,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this contact will be deleted as well. This action cannot be undone."})})},Ue=({data:s,handleTagChange:c})=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.map(a=>e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:a.categoryName.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g,n=>n.toUpperCase()),children:e.jsx(T,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:`tagId_${a.id}`,placeholder:`Select ${a.categoryName} tags`,component:K,options:a.tags.map(n=>({label:n.tagName,value:n.id})),prefix:e.jsx(ce,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:n=>c(n,a.id)})})},a.id))}),Ge=s=>{const{touched:c,errors:a,values:n,setFieldValue:x,customFieldData:d}=s,g=k(),[f,j]=C.useState([]),[L,F]=C.useState(null),[$,q]=C.useState(!1),S=y(t=>{var i;return(i=t.crmContact.data)==null?void 0:i.customField});y(t=>t.crmContact.data.contactList);const E=y(t=>t.crmContact.data.companyList),u=y(t=>t.crmContact.data.sources),o=y(t=>t.crmContact.data.states);y(t=>t.crmContact.data.cities);const l=C.useMemo(()=>E==null?void 0:E.map(t=>({value:t.id,label:t.companyName})),[E]),b=C.useMemo(()=>o==null?void 0:o.map(t=>({value:t.id,label:t.stateName})),[o]),D=C.useMemo(()=>{var i;const t=o==null?void 0:o.find(h=>h.id===n.stateId);return((i=t==null?void 0:t.cities)==null?void 0:i.map(h=>({value:h.id,label:h.cityName})))||[]},[o,L]),z=C.useMemo(()=>u==null?void 0:u.map(i=>({label:i.sources,value:i.id})),[u]),O={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},R=async()=>{var t,i;try{const{payload:h}=await g(se()),w=(t=h==null?void 0:h.data)==null?void 0:t.find(A=>(A==null?void 0:A.moduleName)==="contacts");if(w){const{payload:A}=await g(re({id:(i=w==null?void 0:w.id)==null?void 0:i.toString()}));j(A==null?void 0:A.data)}}catch(h){console.error("Error fetching module data:",h)}};C.useEffect(()=>{R(),g(Se()),g(De()),g(Te()),g(Ae())},[g]);const p=$e(),r=async(t,i)=>{await p.setFieldValue(`tagId_${i}`,t),q(!$)},m=async(t,i)=>{const h={sources:t==null?void 0:t.label};switch(i.action){case"create-option":await g(Me(h)),await g(oe());break;case"select-option":x("sourceId",t);break;case"clear":x("sourceId",null);break}},N=async()=>{const t=new Set;f==null||f.forEach(h=>{n&&n[`tagId_${h.id}`]&&n[`tagId_${h.id}`].length&&n[`tagId_${h.id}`].map(A=>A.value).forEach(A=>{t.add(A)})});const i=[...t];await p.setFieldValue("tagId",i)};return C.useMemo(()=>{N()},[$,f]),e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Contact Basic Information",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"First Name *",invalid:a.firstName&&c.firstName,errorMessage:a.firstName,children:e.jsx(T,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:M,prefix:e.jsx(ee,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Last Name *",invalid:a.lastName&&c.lastName,errorMessage:a.lastName,children:e.jsx(T,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:M,prefix:e.jsx(ee,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Email *",invalid:a.email&&c.email,errorMessage:a.email,children:e.jsx(T,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:M,prefix:e.jsx(be,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Contact Number *",invalid:a.contactNumber&&c.contactNumber,errorMessage:a.contactNumber,children:e.jsx(T,{type:"tel",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:M,prefix:e.jsx(Be,{className:"text-xl"})})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Designation",invalid:a.title&&c.title,errorMessage:a.title,children:e.jsx(T,{type:"text",autoComplete:"off",name:"title",placeholder:"Designation",component:M,prefix:e.jsx(We,{className:"text-xl"})})})})}),e.jsx(I,{label:"Notes",invalid:a.description&&c.description,errorMessage:a.description,children:e.jsx(T,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:M,prefix:e.jsx(_e,{className:"text-xl"})})}),e.jsx(B,{title:"Address",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Address",invalid:a.address&&c.address,errorMessage:a.address,children:e.jsx(T,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:M,prefix:e.jsx(Ke,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"State",invalid:a.stateId&&c.stateId,errorMessage:a.stateId,children:e.jsx(K,{name:"stateId",placeholder:"Select State",options:b,id:"stateId",value:b==null?void 0:b.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.stateId)),onChange:t=>{const i=t.value;n.stateId!==i&&x("cityId",""),x("stateId",i||""),F(i)}})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"City",invalid:a.cityId&&c.cityId,errorMessage:a.cityId,children:e.jsx(K,{name:"cityId",placeholder:"Select City",options:D,id:"cityId",value:(D==null?void 0:D.find(t=>(t==null?void 0:t.value)===(n==null?void 0:n.cityId)))||{value:"",label:"Select City"},onChange:t=>{const i=t.value;i!==n.cityId&&x("cityId",i||"")}})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{style:{position:"relative"},children:e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"ZipCode",invalid:a.zipcode&&c.zipcode,errorMessage:a.zipcode,children:e.jsx(T,{type:"text",autoComplete:"off",name:"zipcode",placeholder:"ZipCode",component:M,prefix:e.jsx(Ve,{className:"text-xl"})})})})})})]}),e.jsx(B,{title:"Contact Others Details",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Company Name",invalid:a.companiesId&&c.companiesId,errorMessage:a.companiesId,children:e.jsx(K,{name:"companiesId",placeholder:"Company Name",options:l,id:"companiesId",value:l==null?void 0:l.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.companiesId)),onChange:t=>{const i=t.value;x("companiesId",i||"")}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(I,{label:"Source",invalid:a.source&&c.source,errorMessage:a.source,children:e.jsx(T,{isClearable:!0,type:"text",autoComplete:"off",name:"sourceId",placeholder:"Source",component:K,componentAs:Ze,options:z,prefix:e.jsx(ce,{className:"text-xl"}),onChange:m})})})]}),e.jsx(Ue,{data:f,handleTagChange:r}),(S==null?void 0:S.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Additional Details",desc:"",className:"mb-2"}),e.jsx("div",{style:O,children:S==null?void 0:S.map(t=>e.jsx("div",{children:e.jsx(I,{label:t==null?void 0:t.label,children:t.inputType==="textArea"?e.jsx(T,{textArea:!0,type:"text",autoComplete:"off",name:t.name,placeholder:t==null?void 0:t.label,defaultValue:t==null?void 0:t.defaultValue,component:M,prefix:e.jsx(Y,{className:"text-xl"})}):e.jsx(T,{type:t.inputType,autoComplete:"off",name:t.name,placeholder:t==null?void 0:t.label,defaultValue:t==null?void 0:t.defaultValue,component:M,prefix:e.jsx(Y,{className:"text-xl"})})})},t.id))})]}):null]})},Je=Oe().shape({firstName:v().required("First Name is required"),lastName:v().required("Last Name is required"),title:v(),contactNumber:v().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",s=>!isNaN(s)).test("is-ten-digits","Contact must be exactly 10 digits",s=>{if(s){const c=Number(s);return/^\d{10}$/.test(c.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",s=>s?!s.startsWith("0"):!0),email:v().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),address:v(),stateId:v(),cityId:v(),zipcode:v().test("is-number","ZipCode must be a number",s=>!(s&&isNaN(Number(s)))).test("is-six-digits","ZipCode must be exactly 6 digits",s=>!(s&&s.length!==6)),companiesId:v().nullable(),companyName:v(),source:v().nullable(),description:v(),tagId:Re()}),{TabNav:Qe,TabList:Xe,TabContent:Ye}=te,le=C.forwardRef((s,c)=>{var F,$,q,S,E;const a=y(u=>{var o,l;return(l=(o=u.crmContact)==null?void 0:o.data)==null?void 0:l.selectedContact});(F=a==null?void 0:a.tags)==null||F.reduce((u,o)=>(u[`tagId_${o.id}`]=[],u),{});const n=C.useMemo(()=>{var u;return(u=a==null?void 0:a.tags)==null?void 0:u.reduce((o,l)=>{const b=l.tagCategoryId;return o[`tagId_${b}`]||(o[`tagId_${b}`]=[]),o[`tagId_${b}`].push({label:l.tagName,value:l.id}),o},{})},[a.tags]),x=y(u=>{var o;return(o=u.crmContact.data)==null?void 0:o.customField}),d=y(u=>{var o,l;return(l=(o=u.crmContact)==null?void 0:o.data)==null?void 0:l.sources}),g=C.useMemo(()=>d.map(o=>({label:o.sources,value:o.id})),[d]),f=!!a.id,j=k(),L=C.useMemo(()=>x==null?void 0:x.reduce((o,l)=>{var D;const b=(D=a==null?void 0:a.contactFields)==null?void 0:D.find(z=>(z==null?void 0:z.name)===(l==null?void 0:l.name));return o[l==null?void 0:l.name]=b?b==null?void 0:b.value:l!=null&&l.defaultValue?l==null?void 0:l.defaultValue:"",o},{}),[x]);return e.jsx(ke,{innerRef:c,initialValues:{firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",title:(a==null?void 0:a.title)||"",email:(a==null?void 0:a.email)||"",contactNumber:(a==null?void 0:a.contactNumber)||"",description:(a==null?void 0:a.description)||"",companyName:(($=a==null?void 0:a.company)==null?void 0:$.companyName)||"",sourceId:a!=null&&a.sourceId?g.find(u=>u.value===(a==null?void 0:a.sourceId)):null,address:(a==null?void 0:a.address)||"",stateId:(a==null?void 0:a.stateId)||"",cityId:(a==null?void 0:a.cityId)||"",zipcode:(a==null?void 0:a.zipcode)||"",tagName:((S=(q=a==null?void 0:a.tags)==null?void 0:q[0])==null?void 0:S.tagName)||"",tagId:((E=a==null?void 0:a.tags)==null?void 0:E.map(u=>({label:u.tagName,value:u.id})))||[],companiesId:(a==null?void 0:a.companiesId)||"",...L,...n},validationSchema:Je,onSubmit:async(u,{setSubmitting:o})=>{var l,b,D,z,O,R,p;try{const{tagName:r,...m}=u,N={...m,sourceId:(l=m==null?void 0:m.sourceId)==null?void 0:l.value,tagId:m==null?void 0:m.tagId},t=f?await j(Fe({contactId:(a==null?void 0:a.id)||"",updatedData:N})):await j(Ee(N)),i=(b=t==null?void 0:t.payload)!=null&&b.success?"Successfully Added":"Something went wrong !!!",h=(D=t==null?void 0:t.payload)!=null&&D.success?"success":"danger",w=(z=t==null?void 0:t.payload)!=null&&z.success?(O=t==null?void 0:t.payload)==null?void 0:O.message:(R=t==null?void 0:t.error)==null?void 0:R.message;J.push(e.jsx(Q,{title:i,type:h,duration:2500,children:w}),{placement:"top-end"}),(p=t==null?void 0:t.payload)!=null&&p.success&&j(ne()),await j(H()),await j(ae())}catch(r){console.error(r)}finally{o(!1)}},children:({touched:u,errors:o,values:l,setFieldValue:b})=>e.jsx(qe,{children:e.jsx(fe,{children:e.jsxs(te,{defaultValue:"personalInfo",children:[e.jsx(Xe,{children:e.jsx(Qe,{value:"personalInfo",children:"Contact Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ye,{value:"personalInfo",children:e.jsx(Ge,{touched:u,errors:o,values:l,setFieldValue:b})})})]})})})})});le.displayName="ContactForm";const de=C.forwardRef((s,c)=>{k();const a=y(x=>{var d,g;return(g=(d=x.crmContact)==null?void 0:d.data)==null?void 0:g.selectedContact});y(x=>x.crmContact.data.contactList);const n=async x=>{};return e.jsx(le,{ref:c,contact:a,onFormSubmit:n})});de.displayName="ContactEditContent";const et=({onSaveClick:s,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(G,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(G,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),tt=()=>{const s=k(),[c,a]=C.useState(window.innerWidth/2),n=y(j=>{var L,F;return(F=(L=j.crmContact)==null?void 0:L.data)==null?void 0:F.drawerOpen}),x=()=>{s(ne()),s(W({}))},d=C.useRef(null),g=()=>{var j;(j=d.current)==null||j.submitForm()},f=()=>{a(window.innerWidth/2)};return C.useEffect(()=>(window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}),[]),e.jsx(he,{isOpen:n,closable:!1,bodyClass:"p-0",width:c,footer:e.jsx(et,{onCancel:x,onSaveClick:g}),onClose:x,onRequestClose:x,children:e.jsx(de,{ref:d})})},at=()=>{const s=k(),[c,a]=C.useState([]),n=y(p=>p.crmContact.data.displayedContactList),x=y(p=>p.crmContact.data.tableData),d=Z("contacts","canModify"),g=Z("contacts","canDelete"),f=Z("contacts","canView"),j=y(p=>p.crmContact.data.loading),L=pe(),{pageIndex:F,pageSize:$,sort:q,query:S,total:E}=y(p=>p.crmContact.data.tableData),u=C.useCallback(()=>{b(),s(H()),s(oe())},[s]);C.useEffect(()=>(u(),()=>{window.location.pathname.includes("contact")||s(_({...x,query:""}))}),[]);const o=C.useMemo(()=>({pageIndex:F,pageSize:$,sort:q,query:S,total:E}),[F,$,q,S,E]),l=({row:p})=>{const r=k();je();const m=()=>{r(ie()),r(W(p))},N=async()=>{r(W(p)),r(X(!0))},t=()=>{r(W(p));const i=`/app/crm/contact-details/${p.id}`;L(i)};return e.jsxs("div",{className:"flex text-base items-center",children:[d&&e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 circle items-center",onClick:m,children:e.jsx(ye,{})}),g&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle mx-1 items-center",onClick:N,children:e.jsx(we,{})}),f&&e.jsx("span",{className:"cursor-pointer hover:text-green-500 circle items-center text-lg",onClick:t,children:e.jsx(Ne,{})})]})},b=async()=>{var p,r;try{const{payload:m}=await s(se()),N=(p=m==null?void 0:m.data)==null?void 0:p.find(t=>(t==null?void 0:t.moduleName)==="contacts");if(N){const{payload:t}=await s(re({id:(r=N==null?void 0:N.id)==null?void 0:r.toString()}));a(t==null?void 0:t.data)}}catch(m){console.error("Error fetching module data:",m)}},D=C.useMemo(()=>{const p=[{header:"Action",id:"action",cell:r=>e.jsx(l,{row:r.row.original})},{header:"Name",accessorKey:"firstName",cell:r=>{const{firstName:m,lastName:N}=r.row.original,t=`${m} ${N}`;return e.jsx(U,{title:t,children:e.jsx(V,{text:t,maxLength:15})},t)}},{header:"email",accessorKey:"email",cell:r=>r.row.original.email},{header:"Number",accessorKey:"contactNumber",cell:r=>r.row.original.contactNumber},{header:"source",accessorKey:"sourceId",cell:r=>{var N,t,i,h;const m=(t=(N=r.row.original)==null?void 0:N.source)!=null&&t.sources?(h=(i=r.row.original)==null?void 0:i.source)==null?void 0:h.sources:"-";return e.jsx(V,{text:m,maxLength:15})}},{header:"designation",accessorKey:"title",cell:r=>{const m=r.row.original.title?r.row.original.title:"-";return e.jsx(U,{title:m,children:e.jsx(V,{text:m,maxLength:15})},m)}},{header:"Company",accessorKey:"companyName",cell:r=>{const m=r.row.original.company?r.row.original.company.companyName:"-";return e.jsx(V,{text:m,maxLength:15})}},{header:"Address",accessorKey:"address",cell:r=>{const{address:m,cityData:N,stateData:t,zipcode:i}=r.row.original,h=[m,N==null?void 0:N.cityName,t==null?void 0:t.stateName,i].filter(w=>w!=null).join(" ");return e.jsx(U,{title:h||"-",children:e.jsx(V,{text:h||"-",maxLength:20})},h)}}];return c.map((r,m)=>{const N={header:r.categoryName,id:r.id,accessorKey:"tagCategory.categoryName",cell:t=>{var h;const i=(h=t.row.original.tags)==null?void 0:h.filter(w=>(w==null?void 0:w.tagCategoryId)===r.id);return i&&i.length?e.jsx(Ce,{tags:i}):"-"}};p.splice(m+6,0,N)}),p},[d,g,c]),z=p=>{const r=P(o);r.pageIndex=p,s(_(r))},O=p=>{const r=P(o);r.pageSize=Number(p),r.pageIndex=1,s(_(r))},R=p=>{const r=P(o);r.sort=p,s(_(r))};return e.jsxs("div",{children:[e.jsx(ge,{columns:D,data:n,loading:j,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:z,onSelectChange:O,onSort:R}),e.jsx(tt,{}),e.jsx(He,{})]})},me=C.forwardRef((s,c)=>{const{onInputChange:a}=s,n=Pe(x,500);function x(g){a==null||a(g)}const d=g=>{n(g.target.value)};return e.jsx(M,{ref:c,className:"max-w-md md:w-56 mb-4",size:"sm",placeholder:"Search by name or email",prefix:e.jsx(Ie,{className:"text-lg"}),onChange:d})});me.displayName="ContactTableSearch";const st=()=>{const s=k(),c=C.useRef(null),a=y(f=>f.crmContact.data.tableData),n=Z("contacts","canCreate"),x=f=>{const j=P(a);j.query=f,j.pageIndex=1,typeof f=="string"&&f.length>1&&d(j),typeof f=="string"&&f.length===0&&d(j)},d=f=>{s(f?_(f):H())},g=()=>{s(ie()),s(W({}))};return C.useEffect(()=>{c.current&&(c.current.value=a.query||"",s(_(a)))},[a==null?void 0:a.query]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(me,{ref:c,onInputChange:x})}),e.jsx("div",{className:"mb-4",children:n&&e.jsx(G,{size:"sm",onClick:g,children:"Add New"})})]})};ue("crmContact",ze);const rt=()=>{const s=y(c=>c.crmContact.data.tableData);return e.jsx(e.Fragment,{children:e.jsxs(xe,{bodyClass:"h-full",children:[e.jsx(B,{title:`Contacts (${(s==null?void 0:s.total)||0})`,desc:"",className:"mb-2"}),e.jsx(st,{}),e.jsx(at,{})]})})},Ra=rt;export{Ra as default};
