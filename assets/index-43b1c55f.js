import{am as F,an as K,ao as V,ap as W,r as g,j as e,a as N,aq as B}from"./index-b5c96d6f.js";import{e as G,f as J,g as Q,h as X}from"./SuperAdminServices-213ff9d5.js";import{B as T}from"./Button-da51d2ac.js";import{c as A}from"./cloneDeep-7f6fd88e.js";import{I as S}from"./Input-caf25bb9.js";import{b as Y,N as ee,O as ae,P as se}from"./index.esm-940af124.js";import{d as re}from"./debounce-1246d026.js";import{D as te}from"./DataTable-81997107.js";import{u as ie}from"./useThemeClass-fc02f5de.js";import"./Alert-94514008.js";import"./index-bcfa2e40.js";import"./Badge-1a8ca56b.js";import"./RangeCalendar-9a53402d.js";import"./Card-c42b1469.js";import"./index-982187c3.js";import"./index-20a15026.js";import"./Dialog-fa8d09a4.js";import{D as oe}from"./Drawer-1133a348.js";import"./index-f6e3e571.js";import{F as le,a as C}from"./FormItem-37a1eee9.js";import"./toString-7113ae37.js";import"./index-491f8d75.js";import"./index-086985ce.js";import"./index-3e540662.js";import{t as ne,N as me}from"./toast-d18b180d.js";import"./Pagination-6b86cff6.js";import"./Progress-129ff5fc.js";import"./index-cc973a23.js";import"./ScrollBar-5b47d6b7.js";import"./index-5d71cd0c.js";import"./Select-3ec74fb5.js";import"./Skeleton-84c1526f.js";import"./index-89155a90.js";import"./Switcher-271d4057.js";import"./index-d386bcd8.js";import"./index-b228c068.js";import"./Tag-72aa2236.js";import"./index-c8d246ba.js";import"./index-f714a4bf.js";import"./Tooltip-997e0ead.js";import"./Upload-ed09c80a.js";import{F as pe,a as de,b as U}from"./formik.esm-c273ee2f.js";import{F as R}from"./index.esm-0d79c540.js";import{o as ce}from"./index.esm-13d2307f.js";import{c as E,a as h}from"./index.esm-57a69e71.js";import{A as ue}from"./AdaptableCard-7a44f03d.js";import"./Views-d078b8aa.js";import"./chart.constant-8521dba9.js";import"./GrowShrinkTag-683b27de.js";import"./react-tooltip.min-fb848c7c.js";import"./RichTextEditor-9614330b.js";import"./SegmentItemOption-512ae69d.js";import"./SvgIcon-d3a0c21b.js";import{F as ge}from"./FormDesription-5679cf79.js";import"./_MapCache-0312ac18.js";import"./_getPrototype-e2865bce.js";import"./isNil-c0353fb3.js";import"./get-c9359669.js";import"./index-711951cc.js";import"./useTimeout-b86b6b88.js";import"./CloseButton-b7f862f3.js";import"./StatusIcon-e35990f8.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-4f0ccac4.js";import"./_baseIsEqual-c7c4333f.js";import"./useRootClose-982e050e.js";import"./usePopper-f50095fa.js";import"./TimeInput-60271795.js";import"./useUniqueId-cbe73990.js";import"./useDidUpdate-c567335c.js";import"./index-2eae398d.js";import"./useUncertainRef-b93ee1d7.js";import"./index-7bdb92b7.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-45d68868.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-07900fbb.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-05afbc30.js";import"./index.esm-bb1b8dcb.js";import"./index.esm-bceff657.js";import"./index.esm-e9e1ad9d.js";const he="superSuperUsers",j=F("superSuperUsers/data/getSuperUsers",async()=>(await G()).data),xe=F("superSuperUsers/data/editSuperUser",async({id:s,updatedData:a})=>{var t,r;try{return(await J(s,a)).data}catch(i){throw new Error((r=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:r.message)}});F("superSuperUsers/data/deleteSuperUser",async s=>{var a,t;try{return await Q(s)}catch(r){throw new Error((t=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:t.message)}});const fe=F("superSuperUsers/data/createSuperUser",async s=>{var a,t;try{return(await X(s)).data}catch(r){throw new Error((t=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:t.message)}}),Se={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Ne={SuperUserData:[],loading:!1,isDialogOpen:!1,selectedSuperUser:{},deleteConfirmation:!1,dialogMode:"Add",tableData:Se,displayedSuperUsersList:[]},O=K({name:`${he}/state`,initialState:Ne,reducers:{setTableData:(s,a)=>{var r;s.tableData=a.payload;const t=(r=s.SuperUserData)==null?void 0:r.filter(i=>i.firstName.toLowerCase().includes(a.payload.query.toLowerCase()));s.displayedSuperUsersList=t.slice(a.payload.pageSize*(a.payload.pageIndex-1),a.payload.pageSize*a.payload.pageIndex)},setSelectedSuperUser:(s,a)=>{s.selectedSuperUser=a.payload},setDialogToggle:(s,a)=>{s.isDialogOpen=a.payload},toggleDeleteConfirmation:(s,a)=>{s.deleteConfirmation=a.payload},setDialogMode:(s,a)=>{s.dialogMode=a.payload}},extraReducers:s=>{s.addCase(j.fulfilled,(a,t)=>{var r,i,m,o,d,c,p,u;a.SuperUserData=t.payload.data,a.tableData.total=(i=(r=t.payload)==null?void 0:r.data)==null?void 0:i.length,a.displayedSuperUsersList=(u=(m=t.payload)==null?void 0:m.data)==null?void 0:u.slice(((o=a==null?void 0:a.tableData)==null?void 0:o.pageSize)*(((d=a==null?void 0:a.tableData)==null?void 0:d.pageIndex)-1),((c=a==null?void 0:a.tableData)==null?void 0:c.pageSize)*((p=a==null?void 0:a.tableData)==null?void 0:p.pageIndex)),a.loading=!1}).addCase(j.pending,a=>{a.loading=!0})}}),{setDialogToggle:z,setDialogMode:k,setSelectedSuperUser:q,toggleDeleteConfirmation:je,setTableData:v}=O.actions,be=O.reducer,ye=V({data:be}),x=W,L=g.forwardRef((s,a)=>{const{onInputChange:t}=s,r=re(i,500);function i(o){t==null||t(o)}const m=o=>{r(o.target.value)};return e.jsx(S,{ref:a,className:"max-w-lg md:w-52 mb-4",size:"md",placeholder:"Search by user name",prefix:e.jsx(Y,{className:"text-lg"}),onChange:m})});L.displayName="OrganizationTableSearch";const we=()=>{const s=N(),a=g.useRef(null),t=x(m=>m.superSuperUsers.data.tableData),r=m=>{const o=A(t);o.query=m,o.pageIndex=1,typeof m=="string"&&m.length>1&&i(o),typeof m=="string"&&m.length===0&&i(o)},i=m=>{s(m?v(m):j())};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(L,{ref:a,onInputChange:r})}),e.jsx("div",{className:"mb-4",children:e.jsx(T,{size:"sm",onClick:()=>{s(z(!0)),s(k("Add"))},children:"Add New"})})]})},De=E().shape({firstName:h().required("FirstName Is Required"),lastName:h().required("LastName Is Required"),email:h().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),password:h().min(6,"Password must be at least 6 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,"6+ characters, uppercase, number, & special character.").required("Password is required")}),Ce=E().shape({firstName:h().required("FirstName Is Required"),lastName:h().required("LastName Is Required"),email:h().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required")}),P=g.forwardRef((s,a)=>{const t=N(),r=x(o=>o.superSuperUsers.data.dialogMode),i=x(o=>o.superSuperUsers.data.selectedSuperUser),m=async(o,d,c)=>{var y,w,D;const p=await t(o==="Add"?fe(d):xe({id:c==null?void 0:c.id,updatedData:d}));let u="",f="",b="danger";(y=p==null?void 0:p.payload)!=null&&y.success?(u="Successfully Added",f=(w=p==null?void 0:p.payload)==null?void 0:w.message,b="success"):(u="Something went wrong !!!",f=(D=p==null?void 0:p.error)==null?void 0:D.message),ne.push(e.jsx(me,{title:u,type:b,duration:2500,children:f}),{placement:"top-end"}),t(z(!1)),t(j())};return e.jsx(pe,{innerRef:a,initialValues:{firstName:(i==null?void 0:i.firstName)||"",lastName:(i==null?void 0:i.lastName)||"",email:(i==null?void 0:i.email)||""},validationSchema:r==="Add"?De:Ce,onSubmit:async(o,{setSubmitting:d})=>{r==="Add"?await m("Add",o,null):await m("Edit",o,i),d(!1)},children:({touched:o,errors:d,values:c,setFieldValue:p})=>e.jsx(de,{children:e.jsx(le,{children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 ",children:e.jsxs("div",{className:"lg:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"FirstName Name*",invalid:d.firstName&&o.firstName,errorMessage:d.firstName,children:e.jsx(U,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:S,prefix:e.jsx(R,{className:"text-xl"})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Last Name*",invalid:d.lastName&&o.lastName,errorMessage:d.lastName,children:e.jsx(U,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:S,prefix:e.jsx(R,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Email*",invalid:d.email&&o.email,errorMessage:d.email,children:e.jsx(U,{type:"text",autoComplete:"off",name:"email",placeholder:"Email",component:S,prefix:e.jsx(ee,{className:"text-xl"})})})}),r==="Add"?e.jsx("div",{className:"col-span-1",children:e.jsx(C,{label:"Password*",invalid:d.password&&o.password,errorMessage:d.password,children:e.jsx(U,{type:"text",autoComplete:"off",name:"password",placeholder:"Password",component:S,prefix:e.jsx(ce,{className:"text-xl"})})})}):null]})]})})})})})});P.displayName="SuperUserForm";const Ue=({onSaveClick:s,onCancel:a})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(T,{size:"sm",className:"mr-2",onClick:a,children:"Cancel"}),e.jsx(T,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ae=()=>{const s=N(),a=x(l=>l.superSuperUsers.data.loading),{pageIndex:t,pageSize:r,sort:i,query:m,total:o}=x(l=>l.superSuperUsers.data.tableData),d=x(l=>l.superSuperUsers.data.displayedSuperUsersList);console.log({data:d});const c=({row:l})=>{const n=N(),{textTheme:Z}=ie(),_=()=>{n(q(l)),n(z(!0)),n(k("Edit"))};l!=null&&l.isActive;const H=async()=>{await n(q(l)),n(je(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx("span",{className:`cursor-pointer hover:${Z} circle items-center`,onClick:_,children:e.jsx(ae,{})}),e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:H,children:e.jsx(se,{})})]})},p=g.useMemo(()=>({pageIndex:t,pageSize:r,sort:i,query:m,total:o}),[t,r,i,m,o]),u=g.useMemo(()=>[{header:"Action",id:"action",cell:n=>e.jsx(c,{row:n.row.original})},{header:"First Name",accessorKey:"firstName",cell:n=>n.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:n=>n.row.original.lastName},{header:"email",accessorKey:"email",cell:n=>n.row.original.email}],[]),f=l=>{const n=A(p);n.pageIndex=l,s(v(n))},b=l=>{const n=A(p);n.pageSize=Number(l),n.pageIndex=1,s(v(n))},y=l=>{const n=A(p);n.sort=l,s(v(n))},w=x(l=>l.superSuperUsers.data.isDialogOpen),[D,ze]=g.useState(window.innerWidth/2),I=()=>{s(z(!1)),s(q({}))},M=g.useRef(null),$=()=>{var l;(l=M.current)==null||l.submitForm()};return e.jsxs("div",{children:[e.jsx(te,{columns:u,data:d,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:a,pagingData:{total:p.total,pageIndex:p.pageIndex,pageSize:p.pageSize},onPaginationChange:f,onSelectChange:b,onSort:y}),e.jsx(oe,{isOpen:w,closable:!1,bodyClass:"p-0",width:D,footer:e.jsx(Ue,{onCancel:I,onSaveClick:$}),onClose:I,onRequestClose:I,children:e.jsxs("div",{className:"m-4",children:[e.jsx("h5",{children:"SuperUsers"}),e.jsx("p",{className:"mb-6",children:"Section to config the organizations attribute"}),e.jsx(P,{ref:M})]})})]})};B("superSuperUsers",ye);const ve=()=>{const s=N();return g.useEffect(()=>{s(j())},[s]),e.jsx(e.Fragment,{children:e.jsxs(ue,{bodyClass:"h-full",children:[e.jsx(ge,{title:"SuperUsers",desc:"",className:"mb-2"}),e.jsx(we,{}),e.jsx(Ae,{})]})})},ts=ve;export{ts as default};
