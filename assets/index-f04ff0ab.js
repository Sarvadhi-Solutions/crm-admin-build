import{am as F,an as K,ao as V,ap as W,r as g,j as e,a as N,aq as B}from"./index-c2c71b67.js";import{e as G,f as J,g as Q,h as X}from"./SuperAdminServices-73637a4b.js";import{B as T}from"./Button-9c5fa51c.js";import{c as A}from"./cloneDeep-a5d9ba9c.js";import{I as S}from"./Input-a6235faa.js";import{b as Y,N as ee,O as ae,P as se}from"./index.esm-854b309f.js";import{d as re}from"./debounce-637992e6.js";import{D as te}from"./DataTable-4690dba1.js";import{u as ie}from"./useThemeClass-ae6a3c06.js";import"./Alert-94df1fc7.js";import"./index-5345338d.js";import"./Badge-71fe7402.js";import"./RangeCalendar-06da6a52.js";import"./Card-641c7c13.js";import"./index-0f7a857e.js";import"./index-bbb04099.js";import"./Dialog-8f81a119.js";import{D as oe}from"./Drawer-0edf5e5c.js";import"./index-fda7dfb7.js";import{F as le,a as C}from"./FormItem-78a020e3.js";import"./toString-ac4075ef.js";import"./index-ca17498b.js";import"./index-947dfc66.js";import"./index-a0374824.js";import{t as ne,N as me}from"./toast-1c7e88ac.js";import"./Pagination-6dddef69.js";import"./Progress-81b53781.js";import"./index-72a612d1.js";import"./ScrollBar-d6546e5a.js";import"./index-d0a572c6.js";import"./Select-dd041f61.js";import"./Skeleton-39c0e07a.js";import"./index-e001e4a3.js";import"./Switcher-9ef30d94.js";import"./index-e96a00fb.js";import"./index-fc3c3276.js";import"./Tag-869b174a.js";import"./index-5c6007d6.js";import"./index-7308ebe4.js";import"./Tooltip-008854ca.js";import"./Upload-0425926a.js";import{F as pe,a as de,b as U}from"./formik.esm-25f04447.js";import{F as R}from"./index.esm-065580bf.js";import{o as ce}from"./index.esm-c995c007.js";import{c as E,a as h}from"./index.esm-3f39c77b.js";import{A as ue}from"./AdaptableCard-6d79530e.js";import"./Views-3e469d6a.js";import"./chart.constant-d85b92fc.js";import"./GrowShrinkTag-45e3cf24.js";import"./react-tooltip.min-90a97092.js";import"./RichTextEditor-7aef3904.js";import"./SegmentItemOption-841378e4.js";import"./SvgIcon-426e05f5.js";import{F as ge}from"./FormDesription-9c8d40da.js";import"./_MapCache-2e280b6f.js";import"./_getPrototype-6c543eab.js";import"./isNil-d22b3e6c.js";import"./get-bbcb2570.js";import"./index-9c27e09f.js";import"./useTimeout-a89b02a4.js";import"./CloseButton-3657ddf2.js";import"./StatusIcon-5eed5f69.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-a30d7084.js";import"./_baseIsEqual-10de66da.js";import"./useRootClose-29c37326.js";import"./usePopper-2b474c15.js";import"./TimeInput-b943a20d.js";import"./useUniqueId-63f75720.js";import"./useDidUpdate-787bd063.js";import"./index-6f0a636b.js";import"./useUncertainRef-be3b54b9.js";import"./index-ccd45f27.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-3c0066d1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c30e1148.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-a58d49ea.js";import"./index.esm-ab028e22.js";import"./index.esm-95d05b2b.js";import"./index.esm-c710ec86.js";const he="superSuperUsers",j=F("superSuperUsers/data/getSuperUsers",async()=>(await G()).data),xe=F("superSuperUsers/data/editSuperUser",async({id:s,updatedData:a})=>{var t,r;try{return(await J(s,a)).data}catch(i){throw new Error((r=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:r.message)}});F("superSuperUsers/data/deleteSuperUser",async s=>{var a,t;try{return await Q(s)}catch(r){throw new Error((t=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:t.message)}});const fe=F("superSuperUsers/data/createSuperUser",async s=>{var a,t;try{return(await X(s)).data}catch(r){throw new Error((t=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:t.message)}}),Se={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Ne={SuperUserData:[],loading:!1,isDialogOpen:!1,selectedSuperUser:{},deleteConfirmation:!1,dialogMode:"Add",tableData:Se,displayedSuperUsersList:[]},O=K({name:`${he}/state`,initialState:Ne,reducers:{setTableData:(s,a)=>{var r;s.tableData=a.payload;const t=(r=s.SuperUserData)==null?void 0:r.filter(i=>i.firstName.toLowerCase().includes(a.payload.query.toLowerCase()));s.displayedSuperUsersList=t.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedSuperUser:(s,a)=>{s.selectedSuperUser=a.payload},setDialogToggle:(s,a)=>{s.isDialogOpen=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload},setDialogMode:(s,a)=>{s.dialogMode=a.payload}},extraReducers:s=>{s.addCase(j.fulfilled,(a,t)=>{var r,i,m,o,d,c,p,u;a.SuperUserData=t.payload.data,a.tableData.total=(i=(r=t.payload)==null?void 0:r.data)==null?void 0:i.length,a.displayedSuperUsersList=(u=(m=t.payload)==null?void 0:m.data)==null?void 0:u.slice(((o=a==null?void 0:a.tableData)==null?void 0:o.pageSize)*(((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)-1),((c=a==null?void 0:a.tableData)==null?void 0:c.pageSize)*((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)),a.loading=!1}).addCase(j.pending,a=>{a.loading=!0})}}),{setDialogToggle:z,setDialogMode:k,setSelectedSuperUser:q,toggleDeleteConfirmation:je,setTableData:v}=O.actions,be=O.reducer,ye=V({data:be}),x=W,L=g.forwardRef((s,a)=>{const{onInputChange:t}=s,r=re(i,500);function i(o){t==null||t(o)}const m=o=>{r(o.target.value)};return e.jsx(S,{ref:a,className:"max-w-lg md:w-52 mb-4",size:"md",placeholder:"Search by user name",prefix:e.jsx(Y,{className:"text-lg"}),onChange:m})});L.displayName="OrganizationTableSearch";const we=()=>{const s=N(),a=g.useRef(null),t=x(m=>m.superSuperUsers.data.tableData),r=m=>{const o=A(t);o.query=m,o.pageIndex=1,typeof m=="string"&&m.length>1&&i(o),typeof m=="string"&&m.length===0&&i(o)},i=m=>{s(m?v(m):j())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(L,{ref:a,onInputChange:r})}),e.jsx("div",{className:"mb-4",children:e.jsx(T,{size:"sm",onClick:()=>{s(z(!0)),s(k("Add"))},children:"Add New"})})]})},De=E().shape({firstName:h().required("FirstName Is Required"),lastName:h().required("LastName Is Required"),email:h().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),password:h().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required")}),Ce=E().shape({firstName:h().required("FirstName Is Required"),lastName:h().required("LastName Is Required"),email:h().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required")}),P=g.forwardRef((s,a)=>{const t=N(),r=x(o=>o.superSuperUsers.data.dialogMode),i=x(o=>o.superSuperUsers.data.selectedSuperUser),m=async(o,d,c)=>{var y,w,D;const p=await t(o==="Add"?fe(d):xe({id:c==null?void 0:c.id,updatedData:d}));let u="",f="",b="danger";(y=p==null?void 0:p.payload)!=null&&y.success?(u="Successfully Added",f=(w=p==null?void 0:p.payload)==null?void 0:w.message,b="success"):(u="Something went wrong !!!",f=(D=p==null?void 0:p.error)==null?void 0:D.message),ne.push(e.jsx(me,{title:u,type:b,duration:2500,children:f}),{placement:"top-end"}),t(z(!1)),t(j())};return e.jsx(pe,{innerRef:a,initialValues:{firstName:(i==null?void 0:i.firstName)||"",lastName:(i==null?void 0:i.lastName)||"",email:(i==null?void 0:i.email)||""},validationSchema:r==="Add"?De:Ce,onSubmit:async(o,{setSubmitting:d})=>{r==="Add"?await m("Add",o,null):await m("Edit",o,i),d(!1)},children:({touched:o,errors:d,values:c,setFieldValue:p})=>e.jsx(de,{children:e.jsx(le,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"FirstName Name*",invalid:d.firstName&&o.firstName,errorMessage:d.firstName,children:e.jsx(U,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:S,prefix:e.jsx(R,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Last Name*",invalid:d.lastName&&o.lastName,errorMessage:d.lastName,children:e.jsx(U,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:S,prefix:e.jsx(R,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Email*",invalid:d.email&&o.email,errorMessage:d.email,children:e.jsx(U,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:S,prefix:e.jsx(ee,{className:"text-xl"})})})}),r==="Add"?e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Password*",invalid:d.password&&o.password,errorMessage:d.password,children:e.jsx(U,{type:"text",autoComplete:"off",name:"password",placeholder:"Password",component:S,prefix:e.jsx(ce,{className:"text-xl"})})})}):null]})]})})})})})});P.displayName="SuperUserForm";const Ue=({onSaveClick:s,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(T,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(T,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ae=()=>{const s=N(),a=x(l=>l.superSuperUsers.data.loading),{pageIndex:t,pageSize:r,sort:i,query:m,total:o}=x(l=>l.superSuperUsers.data.tableData),d=x(l=>l.superSuperUsers.data.displayedSuperUsersList);console.log({data:d});const c=({row:l})=>{const n=N(),{textTheme:Z}=ie(),_=()=>{n(q(l)),n(z(!0)),n(k("Edit"))};l!=null&&l.isActive;const H=async()=>{await n(q(l)),n(je(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx("span",{className:`cursor-pointer hover:${Z} circle items-center`,onClick:_,children:e.jsx(ae,{})}),e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:H,children:e.jsx(se,{})})]})},p=g.useMemo(()=>({pageIndex:t,pageSize:r,sort:i,query:m,total:o}),[t,r,i,m,o]),u=g.useMemo(()=>[{header:"Action",id:"action",cell:n=>e.jsx(c,{row:n.row.original})},{header:"First Name",accessorKey:"firstName",cell:n=>n.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:n=>n.row.original.lastName},{header:"email",accessorKey:"email",cell:n=>n.row.original.email}],[]),f=l=>{const n=A(p);n.pageIndex=l,s(v(n))},b=l=>{const n=A(p);n.pageSize=Number(l),n.pageIndex=1,s(v(n))},y=l=>{const n=A(p);n.sort=l,s(v(n))},w=x(l=>l.superSuperUsers.data.isDialogOpen),[D,ze]=g.useState(window.innerWidth/2),I=()=>{s(z(!1)),s(q({}))},M=g.useRef(null),$=()=>{var l;(l=M.current)==null||l.submitForm()};return e.jsxs("div",{children:[e.jsx(te,{columns:u,data:d,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:p.total,pageIndex:p.pageIndex,pageSize:p.pageSize},onPaginationChange:f,onSelectChange:b,onSort:y}),e.jsx(oe,{isOpen:w,closable:!1,bodyClass:"p-0",width:D,footer:e.jsx(Ue,{onCancel:I,onSaveClick:$}),onClose:I,onRequestClose:I,children:e.jsxs("div",{className:"m-4",children:[e.jsx("h5",{children:"SuperUsers"}),e.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),e.jsx(P,{ref:M})]})})]})};B("superSuperUsers",ye);const ve=()=>{const s=N();return g.useEffect(()=>{s(j())},[s]),e.jsx(e.Fragment,{children:e.jsxs(ue,{bodyClass:"h-full",children:[e.jsx(ge,{title:"SuperUsers",desc:"",className:"mb-2"}),e.jsx(we,{}),e.jsx(Ae,{})]})})},ts=ve;export{ts as default};
