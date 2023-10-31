import{a as M,j as e,r as j,ap as ne,aq as ie}from"./index-349191dc.js";import{A as ce}from"./AdaptableCard-1a4629af.js";import{F as O}from"./FormDesription-3b9c3d06.js";import{D as le}from"./DataTable-0bfcdf38.js";import{T as de}from"./TagsList-ae45dbbc.js";import{T as q}from"./TextTruncate-02b9540a.js";import{u as K}from"./checkEditUpdate-e45bc255.js";import{u as me}from"./useThemeClass-f9532959.js";import{c as B}from"./cloneDeep-0ea42d87.js";import{N as pe,O as ue,P as xe,b as he}from"./index.esm-cb282f8a.js";import{u as N,t as H,d as ge,g as _,a as fe,b as Ce,c as je,e as Ne,f as be,h as ye,i as ve,j as Ie,k as Y,l as we,s as $,m as L,n as ee,r as De}from"./index-6e055210.js";import{t as G,N as U}from"./toast-22e26df2.js";import{C as Se}from"./ConfirmDialog-39fce23c.js";import{B as V}from"./Button-3a7fe992.js";import{D as Te}from"./Drawer-7ce7fbf1.js";import{a as v,F as Fe}from"./FormItem-ada43054.js";import{T as te}from"./index-369a3f9a.js";import{u as Ae,b as S,F as Me,a as ze}from"./formik.esm-0a2a543c.js";import{c as Ee,a as w,e as ke}from"./index.esm-7424d503.js";import{I as T}from"./Input-afbe9815.js";/* empty css              */import{T as Le,e as qe}from"./index.esm-4a90aaeb.js";import"./Alert-126231d9.js";import"./index-a4111542.js";import"./Badge-225dc15b.js";import"./RangeCalendar-816f5a4f.js";import"./Card-28c96ca5.js";import"./index-eacc5424.js";import"./index-637053ed.js";import"./Dialog-a838aabb.js";import"./index-6e1d0772.js";import"./toString-35a63a87.js";import"./index-d55a343a.js";import"./index-af467029.js";import"./index-453239c5.js";import"./Pagination-23f3c5b5.js";import"./Progress-1ed9a6b3.js";import"./index-917384b7.js";import"./ScrollBar-8904d44c.js";import"./index-3cbb8aa8.js";import{S as R}from"./Select-458bca4a.js";import"./Skeleton-f03c4bda.js";import"./index-9c7facbb.js";import"./Switcher-22f53fed.js";import"./index-47f4c906.js";import"./Tag-328b5d04.js";import"./index-7ba3168f.js";import"./index-e6396df9.js";import{T as P}from"./Tooltip-23ad192d.js";import"./Upload-65222499.js";import{t as Re}from"./tagAndCategory-228f57e7.js";import{B as Oe}from"./index.esm-aca805d3.js";import{F as $e}from"./index.esm-a1ed04fe.js";import{F as J}from"./index.esm-1ad3ae39.js";import{G as Q}from"./index.esm-1db85578.js";import{M as Ke}from"./index.esm-944ea57c.js";import{C as Be}from"./react-select-creatable.esm-5ce3c0f7.js";import{B as X}from"./index.esm-31ed7983.js";import{a as We}from"./index.esm-42f4dc22.js";import{d as Ze}from"./debounce-87b5e1b4.js";import"./index-6e08045b.js";import"./moment-fbc5633a.js";import"./_MapCache-42d00265.js";import"./Views-868e2d5a.js";import"./_getPrototype-b4480593.js";import"./CrmService-b4c86536.js";import"./useTimeout-347d1b2d.js";import"./CloseButton-1ed6055a.js";import"./StatusIcon-e5b5845a.js";import"./chainedFunction-070f832c.js";import"./index-0d45b98c.js";import"./index-c4329762.js";import"./useControllableState-ee8d0ef8.js";import"./isNil-56876d1f.js";import"./get-22ee623a.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-ed7cd79a.js";import"./useRootClose-dd4766ca.js";import"./usePopper-d4c6aba4.js";import"./TimeInput-9e1c7587.js";import"./useUniqueId-f14775f3.js";import"./useDidUpdate-24428a30.js";import"./useUncertainRef-623d138e.js";import"./slicedToArray-5444e40d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-8479c0f8.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-4a1493ed.js";import"./index.esm-6c1eb267.js";const Pe=()=>{const s=M(),n=N(c=>c.crmContact.data.deleteConfirmation),t=N(c=>c.crmContact.data.selectedContact),l=()=>{s(H(!1))},m=async()=>{var d,u,f;s(H(!1));const c=await s(ge(t==null?void 0:t.id));(d=c==null?void 0:c.payload)!=null&&d.success?G.push(e.jsx(U,{title:"Successfuly Deleted",type:"success",duration:2500,children:(u=c==null?void 0:c.payload)==null?void 0:u.message}),{placement:"top-end"}):G.push(e.jsx(U,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(f=c==null?void 0:c.error)==null?void 0:f.message}),{placement:"top-end"}),await s(_()),await s(fe())};return e.jsx(Se,{isOpen:n,type:"danger",title:"Delete Contact",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:m,children:e.jsx("p",{children:"Are you sure you want to delete this Contact? All record related to this contact will be deleted as well. This action cannot be undone."})})},He=s=>{const{touched:n,errors:t,values:l,setFieldValue:m,customFieldData:c}=s,d=M(),[u,f]=j.useState([]),[I,p]=j.useState(null),i=N(a=>{var r;return(r=a.crmContact.data)==null?void 0:r.customField});console.log("customField",i),N(a=>a.crmContact.data.contactList);const h=N(a=>a.crmContact.data.companyList),y=N(a=>a.crmContact.data.sources),x=N(a=>a.crmContact.data.states);N(a=>a.crmContact.data.cities);const F=j.useMemo(()=>h==null?void 0:h.map(a=>({value:a.id,label:a.companyName})),[h]),A=j.useMemo(()=>x==null?void 0:x.map(a=>({value:a.id,label:a.stateName})),[x]),k=j.useMemo(()=>{var r;const a=x==null?void 0:x.find(b=>b.id===l.stateId);return((r=a==null?void 0:a.cities)==null?void 0:r.map(b=>({value:b.id,label:b.cityName})))||[]},[x,I]),W=j.useMemo(()=>y==null?void 0:y.map(r=>({label:r.sources,value:r.id})),[y]),Z={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"};j.useEffect(()=>{(async()=>{var r,b;try{const{payload:D}=await d(ye()),z=(r=D==null?void 0:D.data)==null?void 0:r.find(E=>(E==null?void 0:E.moduleName)==="contacts");if(z){const{payload:E}=await d(ve({id:(b=z==null?void 0:z.id)==null?void 0:b.toString()})),re=Re(E==null?void 0:E.data);f(re)}}catch(D){console.error("Error fetching module data:",D)}})(),d(Ce()),d(je()),d(Ne()),d(be())},[d]);const g=Ae(),o=a=>{g.setFieldValue("tagId",a)},C=async(a,r)=>{const b={sources:a==null?void 0:a.label};switch(r.action){case"create-option":await d(Ie(b)),await d(Y());break;case"select-option":m("sourceId",a);break;case"clear":m("sourceId",null);break}};return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Contact Basic Information",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"First Name *",invalid:t.firstName&&n.firstName,errorMessage:t.firstName,children:e.jsx(S,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:T,prefix:e.jsx(J,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Last Name *",invalid:t.lastName&&n.lastName,errorMessage:t.lastName,children:e.jsx(S,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:T,prefix:e.jsx(J,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Email *",invalid:t.email&&n.email,errorMessage:t.email,children:e.jsx(S,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:T,prefix:e.jsx(pe,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Contact Number *",invalid:t.contactNumber&&n.contactNumber,errorMessage:t.contactNumber,children:e.jsx(S,{type:"tel",autoComplete:"off",name:"contactNumber",placeholder:"Contact Number",component:T,prefix:e.jsx(Oe,{className:"text-xl"})})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Title",invalid:t.title&&n.title,errorMessage:t.title,children:e.jsx(S,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:T,prefix:e.jsx(Ke,{className:"text-xl"})})})})}),e.jsx(v,{label:"Notes",invalid:t.description&&n.description,errorMessage:t.description,children:e.jsx(S,{textArea:!0,type:"text",autoComplete:"off",name:"description",placeholder:"Notes",component:T,prefix:e.jsx(Le,{className:"text-xl"})})}),e.jsx(O,{title:"Address",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Address",invalid:t.address&&n.address,errorMessage:t.address,children:e.jsx(S,{type:"text",autoComplete:"off",name:"address",placeholder:"Address",component:T,prefix:e.jsx($e,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"State",invalid:t.stateId&&n.stateId,errorMessage:t.stateId,children:e.jsx(R,{name:"stateId",placeholder:"Select State",options:A,id:"stateId",value:A==null?void 0:A.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.stateId)),onChange:a=>{const r=a.value;l.stateId!==r&&m("cityId",""),m("stateId",r||""),p(r)}})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"City",invalid:t.cityId&&n.cityId,errorMessage:t.cityId,children:e.jsx(R,{name:"cityId",placeholder:"Select City",options:k,id:"cityId",value:(k==null?void 0:k.find(a=>(a==null?void 0:a.value)===(l==null?void 0:l.cityId)))||{value:"",label:"Select City"},onChange:a=>{const r=a.value;r!==l.cityId&&m("cityId",r||"")}})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx("div",{style:{position:"relative"},children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"ZipCode",invalid:t.zipcode&&n.zipcode,errorMessage:t.zipcode,children:e.jsx(S,{type:"text",autoComplete:"off",name:"zipcode",placeholder:"ZipCode",component:T,prefix:e.jsx(qe,{className:"text-xl"})})})})})})]}),e.jsx(O,{title:"Contact Others Details",desc:"",className:"mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Company Name",invalid:t.companiesId&&n.companiesId,errorMessage:t.companiesId,children:e.jsx(R,{name:"companiesId",placeholder:"Company Name",options:F,id:"companiesId",value:F==null?void 0:F.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.companiesId)),onChange:a=>{const r=a.value;m("companiesId",r||"")}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Source",invalid:t.source&&n.source,errorMessage:t.source,children:e.jsx(S,{isClearable:!0,type:"text",autoComplete:"off",name:"sourceId",placeholder:"Source",component:R,componentAs:Be,options:W,prefix:e.jsx(Q,{className:"text-xl"}),onChange:C})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsx(v,{label:"Tag",children:e.jsx(S,{isClearable:!0,isMulti:!0,type:"text",autoComplete:"off",name:"tagId",placeholder:"Select tags",component:R,options:u,prefix:e.jsx(Q,{className:"text-xl"}),closeMenuOnSelect:!1,onChange:o})})})}),(i==null?void 0:i.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Additional Details",desc:"",className:"mb-2"}),e.jsx("div",{style:Z,children:i==null?void 0:i.map(a=>e.jsx("div",{children:e.jsx(v,{label:a==null?void 0:a.label,children:a.inputType==="textArea"?e.jsx(S,{textArea:!0,type:"text",autoComplete:"off",name:a.name,placeholder:a==null?void 0:a.label,defaultValue:a==null?void 0:a.defaultValue,component:T,prefix:e.jsx(X,{className:"text-xl"})}):e.jsx(S,{type:a.inputType,autoComplete:"off",name:a.name,placeholder:a==null?void 0:a.label,defaultValue:a==null?void 0:a.defaultValue,component:T,prefix:e.jsx(X,{className:"text-xl"})})})},a.id))})]}):null]})},Ve=Ee().shape({firstName:w().required("First Name is required"),lastName:w().required("Last Name is required"),title:w(),contactNumber:w().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",s=>!isNaN(s)).test("is-ten-digits","Contact must be exactly 10 digits",s=>{if(s){const n=Number(s);return/^\d{10}$/.test(n.toString())}return!0}).test("is-ten-digits","Contact number cannot start with 0",s=>s?!s.startsWith("0"):!0),email:w().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),address:w(),stateId:w(),cityId:w(),zipcode:w().test("is-number","ZipCode must be a number",s=>!(s&&isNaN(Number(s)))).test("is-six-digits","ZipCode must be exactly 6 digits",s=>!(s&&s.length!==6)),companiesId:w().nullable(),companyName:w(),source:w().nullable(),description:w(),tagId:ke()}),{TabNav:_e,TabList:Ge,TabContent:Ue}=te,ae=j.forwardRef((s,n)=>{var c,d,u,f,I;const t=N(p=>{var i,h;return(h=(i=p.crmContact)==null?void 0:i.data)==null?void 0:h.selectedContact});console.log({contact:t});const l=N(p=>{var i,h;return(h=(i=p.crmContact)==null?void 0:i.data)==null?void 0:h.sources}),m=j.useMemo(()=>l.map(i=>({label:i.sources,value:i.id})),[l]);return t.id,M(),e.jsx(Me,{innerRef:n,initialValues:{firstName:(t==null?void 0:t.firstName)||"",lastName:(t==null?void 0:t.lastName)||"",title:(t==null?void 0:t.title)||"",email:(t==null?void 0:t.email)||"",contactNumber:(t==null?void 0:t.contactNumber)||"",description:(t==null?void 0:t.description)||"",companyName:((c=t==null?void 0:t.company)==null?void 0:c.companyName)||"",sourceId:t!=null&&t.sourceId?m.find(p=>p.value===(t==null?void 0:t.sourceId)):null,address:(t==null?void 0:t.address)||"",stateId:(t==null?void 0:t.stateId)||"",cityId:(t==null?void 0:t.cityId)||"",zipcode:(t==null?void 0:t.zipcode)||"",tagName:((u=(d=t==null?void 0:t.tags)==null?void 0:d[0])==null?void 0:u.tagName)||"",tagId:((f=t==null?void 0:t.tags)==null?void 0:f.map(p=>({label:p.tagName,value:p.id})))||[],companiesId:(t==null?void 0:t.companiesId)||"",...(I=t==null?void 0:t.contactFields)==null?void 0:I.reduce((p,i)=>{var h,y;return(h=i==null?void 0:i.customKey)!=null&&h.name&&i.value&&(p[(y=i==null?void 0:i.customKey)==null?void 0:y.name]=i.value||""),p},{})},validationSchema:Ve,onSubmit:async(p,{setSubmitting:i})=>{var h;try{const{tagName:y,...x}=p;console.log({values:p});const F={...x,sourceId:(h=x==null?void 0:x.sourceId)==null?void 0:h.value,tagId:x==null?void 0:x.tagId.map(A=>A.value)};console.log({payload:F})}catch(y){console.error(y)}finally{i(!1)}},children:({touched:p,errors:i,values:h,setFieldValue:y})=>e.jsx(ze,{children:e.jsx(Fe,{children:e.jsxs(te,{defaultValue:"personalInfo",children:[e.jsx(Ge,{children:e.jsx(_e,{value:"personalInfo",children:"Contact Details"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ue,{value:"personalInfo",children:e.jsx(He,{touched:p,errors:i,values:h,setFieldValue:y})})})]})})})})});ae.displayName="ContactForm";const se=j.forwardRef((s,n)=>{M();const t=N(m=>{var c,d;return(d=(c=m.crmContact)==null?void 0:c.data)==null?void 0:d.selectedContact});N(m=>m.crmContact.data.contactList);const l=async m=>{};return e.jsx(ae,{ref:n,contact:t,onFormSubmit:l})});se.displayName="ContactEditContent";const Je=({onSaveClick:s,onCancel:n})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(V,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),e.jsx(V,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Qe=()=>{const s=M(),[n,t]=j.useState(window.innerWidth/2),l=N(f=>{var I,p;return(p=(I=f.crmContact)==null?void 0:I.data)==null?void 0:p.drawerOpen}),m=()=>{s(we()),s($({}))},c=j.useRef(null),d=()=>{var f,I;console.log("formSubmit function called",(f=c.current)==null?void 0:f.values),(I=c.current)==null||I.submitForm()},u=()=>{t(window.innerWidth/2)};return j.useEffect(()=>(window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}),[]),e.jsx(Te,{isOpen:l,closable:!1,bodyClass:"p-0",width:n,footer:e.jsx(Je,{onCancel:m,onSaveClick:d}),onClose:m,onRequestClose:m,children:e.jsx(se,{ref:c})})},Xe=()=>{const s=M(),n=N(g=>g.crmContact.data.displayedContactList),t=N(g=>g.crmContact.data.tableData),l=K("contacts","canModify"),m=K("contacts","canDelete"),c=K("contacts","canView"),d=N(g=>g.crmContact.data.loading),u=ne(),{pageIndex:f,pageSize:I,sort:p,query:i,total:h}=N(g=>g.crmContact.data.tableData),y=j.useCallback(()=>{s(_()),s(Y())},[s]);j.useEffect(()=>(y(),()=>{window.location.pathname.includes("contact")||s(L({...t,query:""}))}),[y]);const x=j.useMemo(()=>({pageIndex:f,pageSize:I,sort:p,query:i,total:h}),[f,I,p,i,h]),F=({row:g})=>{const o=M();me();const C=()=>{o(ee()),o($(g))},a=async()=>{o($(g)),o(H(!0))},r=()=>{o($(g));const b=`/app/crm/contact-details/${g.id}`;u(b)};return e.jsxs("div",{className:"flex text-base items-center",children:[l&&e.jsx("span",{className:"cursor-pointer hover:text-indigo-500 circle items-center",onClick:C,children:e.jsx(ue,{})}),m&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 circle mx-1 items-center",onClick:a,children:e.jsx(xe,{})}),c&&e.jsx("span",{className:"cursor-pointer hover:text-green-500 circle items-center text-lg",onClick:r,children:e.jsx(We,{})})]})},A=j.useMemo(()=>[{header:"Action",id:"action",cell:o=>e.jsx(F,{row:o.row.original})},{header:"Name",accessorKey:"firstName",cell:o=>{const{firstName:C,lastName:a}=o.row.original,r=`${C} ${a}`;return e.jsx(P,{title:r,children:e.jsx(q,{text:r,maxLength:15})},r)}},{header:"email",accessorKey:"email",cell:o=>o.row.original.email},{header:"Number",accessorKey:"contactNumber",cell:o=>o.row.original.contactNumber},{header:"source",accessorKey:"sourceId",cell:o=>{var a,r,b,D;const C=(r=(a=o.row.original)==null?void 0:a.source)!=null&&r.sources?(D=(b=o.row.original)==null?void 0:b.source)==null?void 0:D.sources:"-";return e.jsx(q,{text:C,maxLength:15})}},{header:"Tags",accessorKey:"tagName",cell:o=>{const C=o.row.original.tags;return C!=null&&C.length>0?e.jsx(de,{tags:C}):"-"}},{header:"Title",accessorKey:"title",cell:o=>{const C=o.row.original.title?o.row.original.title:"-";return e.jsx(P,{title:C,children:e.jsx(q,{text:C,maxLength:15})},C)}},{header:"Company",accessorKey:"companyName",cell:o=>{const C=o.row.original.company?o.row.original.company.companyName:"-";return e.jsx(q,{text:C,maxLength:15})}},{header:"Address",accessorKey:"address",cell:o=>{const{address:C,cityData:a,stateData:r,zipcode:b}=o.row.original,D=[C,a==null?void 0:a.cityName,r==null?void 0:r.stateName,b].filter(z=>z!=null).join(" ");return e.jsx(P,{title:D||"-",children:e.jsx(q,{text:D||"-",maxLength:20})},D)}}],[l,m]),k=g=>{const o=B(x);o.pageIndex=g,s(L(o))},W=g=>{const o=B(x);o.pageSize=Number(g),o.pageIndex=1,s(L(o))},Z=g=>{const o=B(x);o.sort=g,s(L(o))};return e.jsxs("div",{children:[e.jsx(le,{columns:A,data:n,loading:d,pagingData:{total:x.total,pageIndex:x.pageIndex,pageSize:x.pageSize},onPaginationChange:k,onSelectChange:W,onSort:Z}),e.jsx(Qe,{}),e.jsx(Pe,{})]})},oe=j.forwardRef((s,n)=>{const{onInputChange:t}=s,l=Ze(m,500);function m(d){t==null||t(d)}const c=d=>{l(d.target.value)};return e.jsx(T,{ref:n,className:"max-w-md md:w-56 mb-4",size:"sm",placeholder:"Search by name or email",prefix:e.jsx(he,{className:"text-lg"}),onChange:c})});oe.displayName="ContactTableSearch";const Ye=()=>{const s=M(),n=j.useRef(null),t=N(u=>u.crmContact.data.tableData),l=K("contacts","canCreate"),m=u=>{const f=B(t);f.query=u,f.pageIndex=1,typeof u=="string"&&u.length>1&&c(f),typeof u=="string"&&u.length===0&&c(f)},c=u=>{s(u?L(u):_())},d=()=>{s(ee()),s($({}))};return j.useEffect(()=>{n.current&&(n.current.value=t.query||"",s(L(t)))},[t==null?void 0:t.query]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(oe,{ref:n,onInputChange:m})}),e.jsx("div",{className:"mb-4",children:l&&e.jsx(V,{size:"sm",onClick:d,children:"Add New"})})]})};ie("crmContact",De);const et=()=>{const s=N(n=>n.crmContact.data.tableData);return e.jsx(e.Fragment,{children:e.jsxs(ce,{bodyClass:"h-full",children:[e.jsx(O,{title:`Contacts (${(s==null?void 0:s.total)||0})`,desc:"",className:"mb-2"}),e.jsx(Ye,{}),e.jsx(Xe,{})]})})},qa=et;export{qa as default};
