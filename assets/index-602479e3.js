import{al as I,am as ae,an as te,ao as ie,r as f,j as e,a as N,aq as oe}from"./index-3da8ab78.js";import{b as se,c as ne,d as re,a as le}from"./SuperAdminServices-c54439a7.js";import{B as R}from"./Button-8579f7ca.js";import{c as S}from"./cloneDeep-df62328b.js";import{I as x}from"./Input-50869ece.js";import{b as ce,N as me,O as de}from"./index.esm-4107b49d.js";import{d as pe}from"./debounce-03148f41.js";import{D as ge}from"./DataTable-9f0fb930.js";import"./Alert-ceb6abb1.js";import"./index-74cf1be4.js";import"./Badge-f2e142b8.js";import"./RangeCalendar-ef5337d8.js";import"./Card-7380f9b9.js";import{C as ue}from"./index-58062901.js";import"./index-36e58418.js";import"./Dialog-f71c0e0d.js";import{D as xe}from"./Drawer-e8e52de5.js";import"./index-2a18aa2a.js";import{F as fe,a as h}from"./FormItem-7755f9c3.js";import"./toString-9fd50606.js";import"./index-a1237748.js";import"./index-2b7cf886.js";import"./index-01299703.js";import{t as P,N as he}from"./toast-3574e37c.js";import"./Pagination-423791d4.js";import"./Progress-547ea6f2.js";import"./index-4de279b6.js";import"./ScrollBar-72517c7e.js";import"./index-7b99a021.js";import"./Select-5300a5e5.js";import"./Skeleton-a9909653.js";import"./index-d17a46fb.js";import"./Switcher-a110a9cd.js";import"./index-2f843102.js";import"./index-d1a7ee08.js";import"./Tag-ef060f80.js";import"./index-52e3c01e.js";import"./index-2e6281ce.js";import{T as be}from"./Tooltip-d01527b7.js";import"./Upload-b8cdff70.js";import{u as ye}from"./useThemeClass-a75d86d3.js";import{F as je,a as ze,b}from"./formik.esm-534fe9e3.js";import{c as Ne}from"./index.esm-8ad44035.js";import{c as Ce,a as q,d as Oe}from"./index.esm-e5b5f2b0.js";import{b as we}from"./index.esm-7cf09153.js";import{T as De}from"./index.esm-7cf3c163.js";import{a as Se}from"./index.esm-b4d0cee8.js";import{a as ve}from"./index.esm-e2737c3c.js";import{A as Ae}from"./AdaptableCard-3b27054d.js";import"./Views-ac495012.js";import"./chart.constant-8b4828b9.js";import"./chart.config-97bb4020.js";import"./GrowShrinkTag-c55d1769.js";import"./react-tooltip.min-bd173d61.js";import"./RichTextEditor-2673e8da.js";import"./SegmentItemOption-5098e875.js";import"./SvgIcon-2300e574.js";import{F as Ie}from"./FormDesription-084527de.js";import"./_MapCache-99cd0bb5.js";import"./_getPrototype-cf8d7a10.js";import"./isNil-90add0e7.js";import"./get-a9ebd7b5.js";import"./index-cf1d0ab0.js";import"./useTimeout-318d80bf.js";import"./CloseButton-180dbba2.js";import"./StatusIcon-fc07f312.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-6098f537.js";import"./_baseIsEqual-21b96bbd.js";import"./useRootClose-288f7513.js";import"./usePopper-2e195c60.js";import"./TimeInput-187ac456.js";import"./useUniqueId-89e6e85c.js";import"./useDidUpdate-30b7bde9.js";import"./index-ebe83277.js";import"./useUncertainRef-737e18d2.js";import"./index-34bf7828.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-c2eadced.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-74a7d2b0.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-5b23fbb8.js";import"./index.esm-ddf990fb.js";import"./index.esm-de3ac0d2.js";const Ee="superOrganizations",j=I("superOrganizations/data/getOrganizations",async()=>(await se()).data),B=I("superOrganizations/data/editOrganization",async({organizationId:t,updatedData:a})=>{var s,n;try{return(await ne(t,a)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}});I("superOrganizations/data/deleteOrganization",async t=>{var a,s;try{return await re(t)}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}});const Te=I("superOrganizations/data/createOrganization",async t=>{var a,s;try{return(await le(t)).data}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}}),Me={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Fe={organizationData:[],loading:!1,isDialogOpen:!1,selectedOrganization:{},deleteConfirmation:!1,dialogMode:"Add",tableData:Me,displayedOrganizationsList:[]},H=ae({name:`${Ee}/state`,initialState:Fe,reducers:{setTableData:(t,a)=>{var n;t.tableData=a.payload;const s=(n=t.organizationData)==null?void 0:n.filter(i=>i.organizationName.toLowerCase().includes(a.payload.query.toLowerCase()));t.displayedOrganizationsList=s.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedOrganization:(t,a)=>{t.selectedOrganization=a.payload},setDialogToggle:(t,a)=>{t.isDialogOpen=a.payload},toggleDeleteConfirmation:(t,a)=>{t.deleteConfirmation=a.payload},setDialogMode:(t,a)=>{t.dialogMode=a.payload}},extraReducers:t=>{t.addCase(j.fulfilled,(a,s)=>{var n,i,m,o,l,p,d,u;a.organizationData=s.payload.data,a.tableData.total=(i=(n=s.payload)==null?void 0:n.data)==null?void 0:i.length,a.displayedOrganizationsList=(u=(m=s.payload)==null?void 0:m.data)==null?void 0:u.slice(((o=a==null?void 0:a.tableData)==null?void 0:o.pageSize)*(((l=a==null?void 0:a.tableData)==null?void 0:l.pageIndex)-1),((p=a==null?void 0:a.tableData)==null?void 0:p.pageSize)*((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)),a.loading=!1}).addCase(j.pending,a=>{a.loading=!0})}}),{setDialogToggle:A,setDialogMode:Z,setSelectedOrganization:W,toggleDeleteConfirmation:jt,setTableData:v}=H.actions,qe=H.reducer,Re=te({data:qe}),y=ie,_=f.forwardRef((t,a)=>{const{onInputChange:s}=t,n=pe(i,500);function i(o){s==null||s(o)}const m=o=>{n(o.target.value)};return e.jsx(x,{ref:a,className:"max-w-lg md:w-52 mb-4",size:"md",placeholder:"Search by organization name",prefix:e.jsx(ce,{className:"text-lg"}),onChange:m})});_.displayName="OrganizationTableSearch";const ke=()=>{const t=N(),a=f.useRef(null),s=y(m=>m.superOrganizations.data.tableData),n=m=>{const o=S(s);o.query=m,o.pageIndex=1,typeof m=="string"&&m.length>1&&i(o),typeof m=="string"&&m.length===0&&i(o)},i=m=>{t(m?v(m):j())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(_,{ref:a,onInputChange:n})}),e.jsx("div",{className:"mb-4",children:e.jsx(R,{size:"sm",onClick:()=>{t(A(!0)),t(Z("Add"))},children:"Add New"})})]})},$e=Ce().shape({organizationName:q().required("Organization Name Required"),industry:q().required("Industry Required"),contact:Oe().typeError("Contact must be a number").required("Contact is required").test("is-number","Contact must be a number",t=>!isNaN(t)).test("is-ten-digits"," Contact must be exactly 10 digits",t=>{if(t){const a=Number(t);return/^\d{10}$/.test(a.toString())}return!0}).test("is-not-more-than-ten-digits","Contact must not exceed 10 digits",t=>t?Number(t).toString().length<=10:!0),email:q().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required")}),G=f.forwardRef((t,a)=>{const s=N(),n=y(o=>o.superOrganizations.data.dialogMode),i=y(o=>o.superOrganizations.data.selectedOrganization),m=async(o,l,p)=>{var O,w,D;console.log({actionType:o,values:l,selectedOrganization:p});const d=await s(o==="Add"?Te(l):B({organizationId:p==null?void 0:p.id,updatedData:l}));let u="",z="",C="danger";(O=d==null?void 0:d.payload)!=null&&O.success?(u="Successfully Added",z=(w=d==null?void 0:d.payload)==null?void 0:w.message,C="success"):(u="Something went wrong !!!",z=(D=d==null?void 0:d.error)==null?void 0:D.message),P.push(e.jsx(he,{title:u,type:C,duration:2500,children:z}),{placement:"top-end"}),s(A(!1)),s(j())};return e.jsx(je,{innerRef:a,initialValues:{organizationName:(i==null?void 0:i.organizationName)||"",industry:(i==null?void 0:i.industry)||"",contact:(i==null?void 0:i.contact)||null,website:(i==null?void 0:i.website)||"",numberOfEmployees:(i==null?void 0:i.numberOfEmployees)||0,notes:(i==null?void 0:i.notes)||"",email:(i==null?void 0:i.email)||""},validationSchema:$e,onSubmit:async(o,{setSubmitting:l})=>{n==="Add"?await m("Add",o,null):await m("Edit",o,i),l(!1)},children:({touched:o,errors:l,values:p,setFieldValue:d})=>e.jsx(ze,{children:e.jsx(fe,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Organization Name*",invalid:l.organizationName&&o.organizationName,errorMessage:l.organizationName,children:e.jsx(b,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name",component:x,prefix:e.jsx(Se,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Industry*",invalid:l.industry&&o.industry,errorMessage:l.industry,children:e.jsx(b,{type:"text",autoComplete:"off",name:"industry",value:p.industry,placeholder:"Organization Industry",component:x,prefix:e.jsx(ve,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Contact*",invalid:l.contact&&o.contact,errorMessage:l.contact,children:e.jsx(b,{type:"number",autoComplete:"off",name:"contact",placeholder:"Contact",component:x,prefix:e.jsx(De,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Email*",invalid:l.email&&o.email,errorMessage:l.email,children:e.jsx(b,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:x,prefix:e.jsx(me,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Website",invalid:l.website&&o.website,errorMessage:l.website,children:e.jsx(b,{type:"text",autoComplete:"off",name:"website",placeholder:"Website",component:x,prefix:e.jsx(we,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(h,{label:"Number Of Employees",invalid:l.numberOfEmployees&&o.numberOfEmployees,errorMessage:l.numberOfEmployees,children:e.jsx(b,{type:"number",autoComplete:"off",name:"numberOfEmployees",placeholder:"Number Of Employees",component:x,prefix:e.jsx(Ne,{className:"text-xl"})})})})]}),e.jsx(h,{label:"Description",labelClass:"!justify-start",invalid:l.notes&&o.notes,errorMessage:l.notes,children:e.jsx(b,{textArea:!0,type:"text",autoComplete:"off",name:"notes",placeholder:"Description",component:x})})]})})})})})});G.displayName="OrganizationForm";const Le=({onSaveClick:t,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(R,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(R,{size:"sm",variant:"solid",onClick:t,children:"Save"})]}),Ke=()=>{const t=N(),a=y(c=>c.superOrganizations.data.loading),{pageIndex:s,pageSize:n,sort:i,query:m,total:o}=y(c=>c.superOrganizations.data.tableData),l=y(c=>c.superOrganizations.data.displayedOrganizationsList);console.log({data:l});const p=({row:c})=>{const r=N(),{textTheme:J}=ye();let T=(c==null?void 0:c.isActive)||!1;const Q=()=>{r(W(c)),r(A(!0)),r(Z("Edit"))},X=async Y=>{var L,K,V;T=!T;const ee={organizationId:c==null?void 0:c.id,updatedData:{isActive:Y}},g=await r(B(ee));let M="",F="",$="danger";(L=g==null?void 0:g.payload)!=null&&L.success?(M="Successfully Added",F=(K=g==null?void 0:g.payload)==null?void 0:K.message,$="success"):(M="Something went wrong !!!",F=(V=g==null?void 0:g.error)==null?void 0:V.message),P.push(e.jsx(Notification,{title:M,type:$,duration:2500,children:F}),{placement:"top-end"}),await r(j())};return e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx("span",{className:`cursor-pointer hover:${J} circle items-center`,onClick:Q,children:e.jsx(de,{})}),e.jsx("span",{className:"cursor-pointer mx-2 text-2xl",children:e.jsx(be,{title:"Active Or InActive Organization",children:e.jsx(ue,{checked:T,onChange:X})},c.email)})]})},d=f.useMemo(()=>({pageIndex:s,pageSize:n,sort:i,query:m,total:o}),[s,n,i,m,o]),u=f.useMemo(()=>[{header:"Action",id:"action",cell:r=>e.jsx(p,{row:r.row.original})},{header:"Organization Name",accessorKey:"organizationName",cell:r=>r.row.original.organizationName},{header:"email",accessorKey:"email",cell:r=>r.row.original.email},{header:"contact",accessorKey:"contact",cell:r=>r.row.original.contact},{header:"industry",accessorKey:"industry",cell:r=>r.row.original.industry},{header:"website",accessorKey:"website",cell:r=>r.row.original.website}],[]),z=c=>{const r=S(d);r.pageIndex=c,t(v(r))},C=c=>{const r=S(d);r.pageSize=Number(c),r.pageIndex=1,t(v(r))},O=c=>{const r=S(d);r.sort=c,t(v(r))},w=y(c=>c.superOrganizations.data.isDialogOpen),[D,We]=f.useState(window.innerWidth/2),E=()=>{t(A(!1)),t(W({}))},k=f.useRef(null),U=()=>{var c;(c=k.current)==null||c.submitForm()};return e.jsxs("div",{children:[e.jsx(ge,{columns:u,data:l,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:d.total,pageIndex:d.pageIndex,pageSize:d.pageSize},onPaginationChange:z,onSelectChange:C,onSort:O}),e.jsx(xe,{isOpen:w,closable:!1,bodyClass:"p-0",width:D,footer:e.jsx(Le,{onCancel:E,onSaveClick:U}),onClose:E,onRequestClose:E,children:e.jsxs("div",{className:"m-4",children:[e.jsx("h5",{children:"Organizations"}),e.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),e.jsx(G,{ref:k})]})})]})};oe("superOrganizations",Re);const Ve=()=>{const t=N();return f.useEffect(()=>{t(j())},[t]),e.jsx(e.Fragment,{children:e.jsxs(Ae,{bodyClass:"h-full",children:[e.jsx(Ie,{title:"Organizations",desc:"",className:"mb-2"}),e.jsx(ke,{}),e.jsx(Ke,{})]})})},zt=Ve;export{zt as default};
