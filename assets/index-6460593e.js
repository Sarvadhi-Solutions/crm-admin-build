import{al as I,am as K,an as V,ao as W,r as g,j as e,a as N,aq as B}from"./index-c4854441.js";import{e as G,f as Q,g as J,h as X}from"./SuperAdminServices-bbdca497.js";import{B as T}from"./Button-01aee70f.js";import{c as A}from"./cloneDeep-57418006.js";import{I as S}from"./Input-6e1fc018.js";import{b as Y,O as ee,P as ae,Q as se}from"./index.esm-600eab3e.js";import{d as re}from"./debounce-af9b1df5.js";import{D as te}from"./DataTable-c212c69f.js";import{u as ie}from"./useThemeClass-58ccaa98.js";import"./Alert-c43b1341.js";import"./index-7f0011a9.js";import"./Badge-ab812656.js";import"./RangeCalendar-60cea8df.js";import"./Card-694d2290.js";import"./index-199241b3.js";import"./index-4960ea6a.js";import"./Dialog-1a78eb06.js";import{D as oe}from"./Drawer-459fd2f8.js";import"./index-516e2d91.js";import{F as le,a as C}from"./FormItem-f088ddbb.js";import"./toString-9f124ebf.js";import"./index-b9e48651.js";import"./index-69125dab.js";import"./index-337c98e1.js";import{t as ne,N as me}from"./toast-f5971c5e.js";import"./Pagination-91f29835.js";import"./Progress-1eb48ff9.js";import"./index-6afc7114.js";import"./ScrollBar-7a627a75.js";import"./index-fee22201.js";import"./Select-a3dcfbd9.js";import"./Skeleton-7820a1d7.js";import"./index-1b4d8032.js";import"./Switcher-9b266edd.js";import"./index-2a967f86.js";import"./index-2020af5b.js";import"./Tag-ca3c125e.js";import"./index-954fdf33.js";import"./index-b126a36b.js";import"./Tooltip-ff9677e2.js";import"./Upload-1e5004d3.js";import{F as pe,a as de,b as U}from"./formik.esm-20e607de.js";import{a as R}from"./index.esm-39ca8e65.js";import{o as ce}from"./index.esm-0fb454c4.js";import{c as E,a as h}from"./index.esm-6307d99d.js";import{A as ue}from"./AdaptableCard-c03e443e.js";import"./Views-a7a22f5b.js";import"./chart.constant-33f94cf9.js";import"./chart.config-3e4495ec.js";import"./GrowShrinkTag-b6ec35ba.js";import"./react-tooltip.min-5a60ee3f.js";import"./RichTextEditor-a1431fa0.js";import"./SegmentItemOption-e39e8725.js";import"./SvgIcon-7439607c.js";import{F as ge}from"./FormDesription-6bc517f8.js";import"./_MapCache-cce6ed45.js";import"./_getPrototype-37ec97c4.js";import"./isNil-c3c7dc62.js";import"./get-1a41de3d.js";import"./index-706b8eda.js";import"./useTimeout-52e2a342.js";import"./CloseButton-481ca768.js";import"./StatusIcon-9c6ff3de.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-f590672a.js";import"./_baseIsEqual-7cb4339e.js";import"./useRootClose-7d26ea3b.js";import"./usePopper-36d997d0.js";import"./TimeInput-028532aa.js";import"./useUniqueId-ef880a97.js";import"./useDidUpdate-d042343d.js";import"./index-12fb9f3c.js";import"./useUncertainRef-3dcc2864.js";import"./index-611f00f8.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-5b2b8266.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-7f5ffe17.js";import"./index.esm-626783fa.js";import"./index.esm-40a48121.js";import"./index.esm-e743b778.js";const he="superSuperUsers",j=I("superSuperUsers/data/getSuperUsers",async()=>(await G()).data),xe=I("superSuperUsers/data/editSuperUser",async({id:s,updatedData:a})=>{var t,r;try{return(await Q(s,a)).data}catch(i){throw new Error((r=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:r.message)}});I("superSuperUsers/data/deleteSuperUser",async s=>{var a,t;try{return await J(s)}catch(r){throw new Error((t=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:t.message)}});const fe=I("superSuperUsers/data/createSuperUser",async s=>{var a,t;try{return(await X(s)).data}catch(r){throw new Error((t=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:t.message)}}),Se={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Ne={SuperUserData:[],loading:!1,isDialogOpen:!1,selectedSuperUser:{},deleteConfirmation:!1,dialogMode:"Add",tableData:Se,displayedSuperUsersList:[]},O=K({name:`${he}/state`,initialState:Ne,reducers:{setTableData:(s,a)=>{var r;s.tableData=a.payload;const t=(r=s.SuperUserData)==null?void 0:r.filter(i=>i.firstName.toLowerCase().includes(a.payload.query.toLowerCase()));s.displayedSuperUsersList=t.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedSuperUser:(s,a)=>{s.selectedSuperUser=a.payload},setDialogToggle:(s,a)=>{s.isDialogOpen=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload},setDialogMode:(s,a)=>{s.dialogMode=a.payload}},extraReducers:s=>{s.addCase(j.fulfilled,(a,t)=>{var r,i,m,o,d,c,p,u;a.SuperUserData=t.payload.data,a.tableData.total=(i=(r=t.payload)==null?void 0:r.data)==null?void 0:i.length,a.displayedSuperUsersList=(u=(m=t.payload)==null?void 0:m.data)==null?void 0:u.slice(((o=a==null?void 0:a.tableData)==null?void 0:o.pageSize)*(((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)-1),((c=a==null?void 0:a.tableData)==null?void 0:c.pageSize)*((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)),a.loading=!1}).addCase(j.pending,a=>{a.loading=!0})}}),{setDialogToggle:z,setDialogMode:k,setSelectedSuperUser:q,toggleDeleteConfirmation:je,setTableData:v}=O.actions,be=O.reducer,ye=V({data:be}),x=W,L=g.forwardRef((s,a)=>{const{onInputChange:t}=s,r=re(i,500);function i(o){t==null||t(o)}const m=o=>{r(o.target.value)};return e.jsx(S,{ref:a,className:"max-w-lg md:w-52 mb-4",size:"md",placeholder:"Search by user name",prefix:e.jsx(Y,{className:"text-lg"}),onChange:m})});L.displayName="OrganizationTableSearch";const we=()=>{const s=N(),a=g.useRef(null),t=x(m=>m.superSuperUsers.data.tableData),r=m=>{const o=A(t);o.query=m,o.pageIndex=1,typeof m=="string"&&m.length>1&&i(o),typeof m=="string"&&m.length===0&&i(o)},i=m=>{s(m?v(m):j())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(L,{ref:a,onInputChange:r})}),e.jsx("div",{className:"mb-4",children:e.jsx(T,{size:"sm",onClick:()=>{s(z(!0)),s(k("Add"))},children:"Add New"})})]})},De=E().shape({firstName:h().required("FirstName Is Required"),lastName:h().required("LastName Is Required"),email:h().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),password:h().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required")}),Ce=E().shape({firstName:h().required("FirstName Is Required"),lastName:h().required("LastName Is Required"),email:h().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required")}),$=g.forwardRef((s,a)=>{const t=N(),r=x(o=>o.superSuperUsers.data.dialogMode),i=x(o=>o.superSuperUsers.data.selectedSuperUser),m=async(o,d,c)=>{var y,w,D;const p=await t(o==="Add"?fe(d):xe({id:c==null?void 0:c.id,updatedData:d}));let u="",f="",b="danger";(y=p==null?void 0:p.payload)!=null&&y.success?(u="Successfully Added",f=(w=p==null?void 0:p.payload)==null?void 0:w.message,b="success"):(u="Something went wrong !!!",f=(D=p==null?void 0:p.error)==null?void 0:D.message),ne.push(e.jsx(me,{title:u,type:b,duration:2500,children:f}),{placement:"top-end"}),t(z(!1)),t(j())};return e.jsx(pe,{innerRef:a,initialValues:{firstName:(i==null?void 0:i.firstName)||"",lastName:(i==null?void 0:i.lastName)||"",email:(i==null?void 0:i.email)||""},validationSchema:r==="Add"?De:Ce,onSubmit:async(o,{setSubmitting:d})=>{r==="Add"?await m("Add",o,null):await m("Edit",o,i),d(!1)},children:({touched:o,errors:d,values:c,setFieldValue:p})=>e.jsx(de,{children:e.jsx(le,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"FirstName Name*",invalid:d.firstName&&o.firstName,errorMessage:d.firstName,children:e.jsx(U,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:S,prefix:e.jsx(R,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Last Name*",invalid:d.lastName&&o.lastName,errorMessage:d.lastName,children:e.jsx(U,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:S,prefix:e.jsx(R,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Email*",invalid:d.email&&o.email,errorMessage:d.email,children:e.jsx(U,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:S,prefix:e.jsx(ee,{className:"text-xl"})})})}),r==="Add"?e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Password*",invalid:d.password&&o.password,errorMessage:d.password,children:e.jsx(U,{type:"text",autoComplete:"off",name:"password",placeholder:"Password",component:S,prefix:e.jsx(ce,{className:"text-xl"})})})}):null]})]})})})})})});$.displayName="SuperUserForm";const Ue=({onSaveClick:s,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(T,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(T,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ae=()=>{const s=N(),a=x(l=>l.superSuperUsers.data.loading),{pageIndex:t,pageSize:r,sort:i,query:m,total:o}=x(l=>l.superSuperUsers.data.tableData),d=x(l=>l.superSuperUsers.data.displayedSuperUsersList);console.log({data:d});const c=({row:l})=>{const n=N(),{textTheme:Z}=ie(),_=()=>{n(q(l)),n(z(!0)),n(k("Edit"))};l!=null&&l.isActive;const H=async()=>{await n(q(l)),n(je(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx("span",{className:`cursor-pointer hover:${Z} circle items-center`,onClick:_,children:e.jsx(ae,{})}),e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:H,children:e.jsx(se,{})})]})},p=g.useMemo(()=>({pageIndex:t,pageSize:r,sort:i,query:m,total:o}),[t,r,i,m,o]),u=g.useMemo(()=>[{header:"Action",id:"action",cell:n=>e.jsx(c,{row:n.row.original})},{header:"First Name",accessorKey:"firstName",cell:n=>n.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:n=>n.row.original.lastName},{header:"email",accessorKey:"email",cell:n=>n.row.original.email}],[]),f=l=>{const n=A(p);n.pageIndex=l,s(v(n))},b=l=>{const n=A(p);n.pageSize=Number(l),n.pageIndex=1,s(v(n))},y=l=>{const n=A(p);n.sort=l,s(v(n))},w=x(l=>l.superSuperUsers.data.isDialogOpen),[D,ze]=g.useState(window.innerWidth/2),F=()=>{s(z(!1)),s(q({}))},M=g.useRef(null),P=()=>{var l;(l=M.current)==null||l.submitForm()};return e.jsxs("div",{children:[e.jsx(te,{columns:u,data:d,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:p.total,pageIndex:p.pageIndex,pageSize:p.pageSize},onPaginationChange:f,onSelectChange:b,onSort:y}),e.jsx(oe,{isOpen:w,closable:!1,bodyClass:"p-0",width:D,footer:e.jsx(Ue,{onCancel:F,onSaveClick:P}),onClose:F,onRequestClose:F,children:e.jsxs("div",{className:"m-4",children:[e.jsx("h5",{children:"SuperUsers"}),e.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),e.jsx($,{ref:M})]})})]})};B("superSuperUsers",ye);const ve=()=>{const s=N();return g.useEffect(()=>{s(j())},[s]),e.jsx(e.Fragment,{children:e.jsxs(ue,{bodyClass:"h-full",children:[e.jsx(ge,{title:"SuperUsers",desc:"",className:"mb-2"}),e.jsx(we,{}),e.jsx(Ae,{})]})})},is=ve;export{is as default};
