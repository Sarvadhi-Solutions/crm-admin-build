import{al as I,am as ae,an as te,ao as ie,r as f,j as e,a as C,aq as oe}from"./index-c4854441.js";import{b as se,c as ne,d as re,a as le}from"./SuperAdminServices-bbdca497.js";import{B as R}from"./Button-01aee70f.js";import{c as S}from"./cloneDeep-57418006.js";import{I as x}from"./Input-6e1fc018.js";import{b as ce,O as me,P as de}from"./index.esm-600eab3e.js";import{d as pe}from"./debounce-af9b1df5.js";import{D as ge}from"./DataTable-c212c69f.js";import"./Alert-c43b1341.js";import"./index-7f0011a9.js";import"./Badge-ab812656.js";import"./RangeCalendar-60cea8df.js";import"./Card-694d2290.js";import{C as ue}from"./index-199241b3.js";import"./index-4960ea6a.js";import"./Dialog-1a78eb06.js";import{D as xe}from"./Drawer-459fd2f8.js";import"./index-516e2d91.js";import{F as fe,a as h}from"./FormItem-f088ddbb.js";import"./toString-9f124ebf.js";import"./index-b9e48651.js";import"./index-69125dab.js";import"./index-337c98e1.js";import{t as W,N as he}from"./toast-f5971c5e.js";import"./Pagination-91f29835.js";import"./Progress-1eb48ff9.js";import"./index-6afc7114.js";import"./ScrollBar-7a627a75.js";import"./index-fee22201.js";import"./Select-a3dcfbd9.js";import"./Skeleton-7820a1d7.js";import"./index-1b4d8032.js";import"./Switcher-9b266edd.js";import"./index-2a967f86.js";import"./index-2020af5b.js";import"./Tag-ca3c125e.js";import"./index-954fdf33.js";import"./index-b126a36b.js";import{T as be}from"./Tooltip-ff9677e2.js";import"./Upload-1e5004d3.js";import{u as ye}from"./useThemeClass-58ccaa98.js";import{F as je,a as ze,b}from"./formik.esm-20e607de.js";import{c as Ce}from"./index.esm-f9d2499d.js";import{c as Ne,a as q,d as Oe}from"./index.esm-6307d99d.js";import{b as we}from"./index.esm-0fb454c4.js";import{T as De}from"./index.esm-2b0e6c07.js";import{a as Se}from"./index.esm-f80fcb5d.js";import{a as ve}from"./index.esm-626783fa.js";import{A as Ae}from"./AdaptableCard-c03e443e.js";import"./Views-a7a22f5b.js";import"./chart.constant-33f94cf9.js";import"./chart.config-3e4495ec.js";import"./GrowShrinkTag-b6ec35ba.js";import"./react-tooltip.min-5a60ee3f.js";import"./RichTextEditor-a1431fa0.js";import"./SegmentItemOption-e39e8725.js";import"./SvgIcon-7439607c.js";import{F as Ie}from"./FormDesription-6bc517f8.js";import"./_MapCache-cce6ed45.js";import"./_getPrototype-37ec97c4.js";import"./isNil-c3c7dc62.js";import"./get-1a41de3d.js";import"./index-706b8eda.js";import"./useTimeout-52e2a342.js";import"./CloseButton-481ca768.js";import"./StatusIcon-9c6ff3de.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-f590672a.js";import"./_baseIsEqual-7cb4339e.js";import"./useRootClose-7d26ea3b.js";import"./usePopper-36d997d0.js";import"./TimeInput-028532aa.js";import"./useUniqueId-ef880a97.js";import"./useDidUpdate-d042343d.js";import"./index-12fb9f3c.js";import"./useUncertainRef-3dcc2864.js";import"./index-611f00f8.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-5b2b8266.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-7f5ffe17.js";import"./index.esm-40a48121.js";import"./index.esm-e743b778.js";const Ee="superOrganizations",j=I("superOrganizations/data/getOrganizations",async()=>(await se()).data),B=I("superOrganizations/data/editOrganization",async({organizationId:t,updatedData:a})=>{var s,n;try{return(await ne(t,a)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}});I("superOrganizations/data/deleteOrganization",async t=>{var a,s;try{return await re(t)}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}});const Te=I("superOrganizations/data/createOrganization",async t=>{var a,s;try{return(await le(t)).data}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}}),Me={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Fe={organizationData:[],loading:!1,isDialogOpen:!1,selectedOrganization:{},deleteConfirmation:!1,dialogMode:"Add",tableData:Me,displayedOrganizationsList:[]},H=ae({name:`${Ee}/state`,initialState:Fe,reducers:{setTableData:(t,a)=>{var n;t.tableData=a.payload;const s=(n=t.organizationData)==null?void 0:n.filter(i=>i.organizationName.toLowerCase().includes(a.payload.query.toLowerCase()));t.displayedOrganizationsList=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedOrganization:(t,a)=>{t.selectedOrganization=a.payload},setDialogToggle:(t,a)=>{t.isDialogOpen=a.payload},toggleDeleteConfirmation:(t,a)=>{t.deleteConfirmation=a.payload},setDialogMode:(t,a)=>{t.dialogMode=a.payload}},extraReducers:t=>{t.addCase(j.fulfilled,(a,s)=>{var n,i,m,o,l,p,d,u;a.organizationData=s.payload.data,a.tableData.total=(i=(n=s.payload)==null?void 0:n.data)==null?void 0:i.length,a.displayedOrganizationsList=(u=(m=s.payload)==null?void 0:m.data)==null?void 0:u.slice(((o=a==null?void 0:a.tableData)==null?void 0:o.pageSize)*(((l=a==null?void 0:a.tableData)==null?void 0:l.pageIndex)-1),((p=a==null?void 0:a.tableData)==null?void 0:p.pageSize)*((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)),a.loading=!1}).addCase(j.pending,a=>{a.loading=!0})}}),{setDialogToggle:A,setDialogMode:Z,setSelectedOrganization:V,toggleDeleteConfirmation:jt,setTableData:v}=H.actions,qe=H.reducer,Re=te({data:qe}),y=ie,_=f.forwardRef((t,a)=>{const{onInputChange:s}=t,n=pe(i,500);function i(o){s==null||s(o)}const m=o=>{n(o.target.value)};return e.jsx(x,{ref:a,className:"max-w-lg md:w-52 mb-4",size:"md",placeholder:"Search by organization name",prefix:e.jsx(ce,{className:"text-lg"}),onChange:m})});_.displayName="OrganizationTableSearch";const ke=()=>{const t=C(),a=f.useRef(null),s=y(m=>m.superOrganizations.data.tableData),n=m=>{const o=S(s);o.query=m,o.pageIndex=1,typeof m=="string"&&m.length>1&&i(o),typeof m=="string"&&m.length===0&&i(o)},i=m=>{t(m?v(m):j())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(_,{ref:a,onInputChange:n})}),e.jsx("div",{className:"mb-4",children:e.jsx(R,{size:"sm",onClick:()=>{t(A(!0)),t(Z("Add"))},children:"Add New"})})]})},$e=Ne().shape({organizationName:q().required("Organization Name Required"),industry:q().required("Industry Required"),contact:Oe().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",t=>!isNaN(t)).test("is-ten-digits"," Contact must be exactly 10 digits",t=>{if(t){const a=Number(t);return/^\d{10}$/.test(a.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",t=>t?Number(t).toString().length<=10:!0),email:q().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required")}),G=f.forwardRef((t,a)=>{const s=C(),n=y(o=>o.superOrganizations.data.dialogMode),i=y(o=>o.superOrganizations.data.selectedOrganization),m=async(o,l,p)=>{var O,w,D;console.log({actionType:o,values:l,selectedOrganization:p});const d=await s(o==="Add"?Te(l):B({organizationId:p==null?void 0:p.id,updatedData:l}));let u="",z="",N="danger";(O=d==null?void 0:d.payload)!=null&&O.success?(u="Successfully Added",z=(w=d==null?void 0:d.payload)==null?void 0:w.message,N="success"):(u="Something went wrong !!!",z=(D=d==null?void 0:d.error)==null?void 0:D.message),W.push(e.jsx(he,{title:u,type:N,duration:2500,children:z}),{placement:"top-end"}),s(A(!1)),s(j())};return e.jsx(je,{innerRef:a,initialValues:{organizationName:(i==null?void 0:i.organizationName)||"",industry:(i==null?void 0:i.industry)||"",contact:(i==null?void 0:i.contact)||null,website:(i==null?void 0:i.website)||"",numberOfEmployees:(i==null?void 0:i.numberOfEmployees)||0,notes:(i==null?void 0:i.notes)||"",email:(i==null?void 0:i.email)||""},validationSchema:$e,onSubmit:async(o,{setSubmitting:l})=>{n==="Add"?await m("Add",o,null):await m("Edit",o,i),l(!1)},children:({touched:o,errors:l,values:p,setFieldValue:d})=>e.jsx(ze,{children:e.jsx(fe,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Organization Name*",invalid:l.organizationName&&o.organizationName,errorMessage:l.organizationName,children:e.jsx(b,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:x,prefix:e.jsx(Se,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Industry*",invalid:l.industry&&o.industry,errorMessage:l.industry,children:e.jsx(b,{type:"text",autoComplete:"off",name:"industry",value:p.industry,placeholder:"Organization Industry",component:x,prefix:e.jsx(ve,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Contact*",invalid:l.contact&&o.contact,errorMessage:l.contact,children:e.jsx(b,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:x,prefix:e.jsx(De,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Email*",invalid:l.email&&o.email,errorMessage:l.email,children:e.jsx(b,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:x,prefix:e.jsx(me,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Website",invalid:l.website&&o.website,errorMessage:l.website,children:e.jsx(b,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:x,prefix:e.jsx(we,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Number Of Employees",invalid:l.numberOfEmployees&&o.numberOfEmployees,errorMessage:l.numberOfEmployees,children:e.jsx(b,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:x,prefix:e.jsx(Ce,{className:"text-xl"})})})})]}),e.jsx(h,{label:"Description",labelClass:"!justify-start",invalid:l.notes&&o.notes,errorMessage:l.notes,children:e.jsx(b,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Description",component:x})})]})})})})})});G.displayName="OrganizationForm";const Le=({onSaveClick:t,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(R,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(R,{size:"sm",variant:"solid",onClick:t,children:"Save"})]}),Ke=()=>{const t=C(),a=y(c=>c.superOrganizations.data.loading),{pageIndex:s,pageSize:n,sort:i,query:m,total:o}=y(c=>c.superOrganizations.data.tableData),l=y(c=>c.superOrganizations.data.displayedOrganizationsList);console.log({data:l});const p=({row:c})=>{const r=C(),{textTheme:J}=ye();let T=(c==null?void 0:c.isActive)||!1;const Q=()=>{r(V(c)),r(A(!0)),r(Z("Edit"))},X=async Y=>{var L,K,P;T=!T;const ee={organizationId:c==null?void 0:c.id,updatedData:{isActive:Y}},g=await r(B(ee));let M="",F="",$="danger";(L=g==null?void 0:g.payload)!=null&&L.success?(M="Successfully Added",F=(K=g==null?void 0:g.payload)==null?void 0:K.message,$="success"):(M="Something went wrong !!!",F=(P=g==null?void 0:g.error)==null?void 0:P.message),W.push(e.jsx(Notification,{title:M,type:$,duration:2500,children:F}),{placement:"top-end"}),await r(j())};return e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx("span",{className:`cursor-pointer hover:${J} circle items-center`,onClick:Q,children:e.jsx(de,{})}),e.jsx("span",{className:"cursor-pointer mx-2 text-2xl",children:e.jsx(be,{title:"Active Or InActive Organization",children:e.jsx(ue,{checked:T,onChange:X})},c.email)})]})},d=f.useMemo(()=>({pageIndex:s,pageSize:n,sort:i,query:m,total:o}),[s,n,i,m,o]),u=f.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(p,{row:r.row.original})},{header:"Organization Name",accessorKey:"organizationName",cell:r=>r.row.original.organizationName},{header:"email",accessorKey:"email",cell:r=>r.row.original.email},{header:"contact",accessorKey:"contact",cell:r=>r.row.original.contact},{header:"industry",accessorKey:"industry",cell:r=>r.row.original.industry},{header:"website",accessorKey:"website",cell:r=>r.row.original.website}],[]),z=c=>{const r=S(d);r.pageIndex=c,t(v(r))},N=c=>{const r=S(d);r.pageSize=Number(c),r.pageIndex=1,t(v(r))},O=c=>{const r=S(d);r.sort=c,t(v(r))},w=y(c=>c.superOrganizations.data.isDialogOpen),[D,Ve]=f.useState(window.innerWidth/2),E=()=>{t(A(!1)),t(V({}))},k=f.useRef(null),U=()=>{var c;(c=k.current)==null||c.submitForm()};return e.jsxs("div",{children:[e.jsx(ge,{columns:u,data:l,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:z,onSelectChange:N,onSort:O}),e.jsx(xe,{isOpen:w,closable:!1,bodyClass:"p-0",width:D,footer:e.jsx(Le,{onCancel:E,onSaveClick:U}),onClose:E,onRequestClose:E,children:e.jsxs("div",{className:"m-4",children:[e.jsx("h5",{children:"Organizations"}),e.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),e.jsx(G,{ref:k})]})})]})};oe("superOrganizations",Re);const Pe=()=>{const t=C();return f.useEffect(()=>{t(j())},[t]),e.jsx(e.Fragment,{children:e.jsxs(Ae,{bodyClass:"h-full",children:[e.jsx(Ie,{title:"Organizations",desc:"",className:"mb-2"}),e.jsx(ke,{}),e.jsx(Ke,{})]})})},zt=Pe;export{zt as default};
