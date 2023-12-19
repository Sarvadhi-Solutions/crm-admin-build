import{a as b,r as h,j as e,ah as re,p as oe,aq as ie}from"./index-2cac4aa9.js";import{M as ne}from"./MediaSkeleton-426e63bc.js";import{A as le}from"./index-80c5bea9.js";import{C as ce}from"./Card-14ace6b4.js";import{o as de,N as me,C as K,Q as V,b as ue,d as pe}from"./index.esm-d6fc75e7.js";import{N as fe}from"./react-number-format.es-291b9cf8.js";import{u as m,a as P,p as Q,s as H,g as E,b as he,c as L,t as $,d as xe,e as F,f as ge,h as be,i as J,r as je}from"./index-7598fd55.js";import{D as ve}from"./DataTable-dfc188ac.js";import{u as Y}from"./useThemeClass-8c8604d4.js";import{c as w}from"./cloneDeep-97b45afa.js";import{B}from"./Button-a79b235e.js";import{D as Ce}from"./Drawer-f7854bbd.js";import{i as Ne}from"./Views-1a24de8c.js";import{T as X}from"./index-07d04080.js";import{a as C,F as we}from"./FormItem-555d466c.js";import{b as S,F as Ue,a as ye}from"./formik.esm-01aec2e0.js";import{c as De,a as N}from"./index.esm-6f5864ba.js";import{I as U}from"./Input-ae73ee68.js";/* empty css              */import{a as W,S as Se,c as Ie}from"./Select-24bfc41b.js";import{t as Fe}from"./index.esm-83c90177.js";import{m as Te}from"./index.esm-f5fa16c6.js";import{t as T,N as k}from"./toast-e4186a07.js";import"./Alert-cffbac96.js";import{B as ee}from"./Badge-c45023a6.js";import"./RangeCalendar-7948af9b.js";import"./index-9f314103.js";import"./index-e475e3b4.js";import"./Dialog-4c85b136.js";import"./index-73fb9666.js";import"./toString-89322a6a.js";import"./index-be4fbc0e.js";import"./index-f483664b.js";import"./index-9f9a04f2.js";import"./Pagination-3710ab5e.js";import"./Progress-d0562acc.js";import"./index-7e353d54.js";import"./ScrollBar-56c15bc1.js";import"./index-2613f2bd.js";import"./Skeleton-9a4a4bf6.js";import"./index-2bfd16f1.js";import"./Switcher-4644864d.js";import"./index-29bceb94.js";import{T as Z}from"./Tag-a7df5a82.js";import"./index-ad95cff8.js";import"./index-126d469d.js";import"./Tooltip-e7fa4b26.js";import"./Upload-afdc126d.js";import{g as ke}from"./index-35dce8ca.js";import{C as Ee}from"./ConfirmDialog-a5d7921d.js";import{u as _}from"./checkEditUpdate-0aad7ab2.js";import{d as Ae}from"./debounce-9c082111.js";import"./useMergeRef-788c4cb0.js";import"./CrmService-945fbe7f.js";import"./index-3c23a2c4.js";import"./_MapCache-a67a7a1a.js";import"./_getPrototype-8a2456f4.js";import"./index-08307f48.js";import"./CloseButton-67f02107.js";import"./useControllableState-ae30f439.js";import"./index-d77f1c48.js";import"./isNil-f3875b5f.js";import"./get-5eefac45.js";import"./slicedToArray-6d23f2c0.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9e32c936.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-a2d47578.js";import"./StatusIcon-82a0cccb.js";import"./chainedFunction-070f832c.js";import"./_baseIsEqual-0db4e98d.js";import"./useRootClose-706c9615.js";import"./usePopper-0cce1482.js";import"./TimeInput-60cdaad9.js";import"./useUniqueId-cd00c1da.js";import"./useDidUpdate-1c34c14c.js";import"./useUncertainRef-0e8ec224.js";import"./mapCloneElement-e9fc4e90.js";import"./index.esm-ab223ff7.js";import"./index.esm-299b76b5.js";const I=t=>{const{icon:r,avatarClass:s,label:a,value:c,growthRate:o,loading:n}=t,i=55;return e.jsx(ce,{bordered:!0,children:e.jsx(re,{loading:n,customLoader:e.jsx(ne,{avatarProps:{className:"rounded",width:i,height:i}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(le,{className:s,size:i,icon:r}),e.jsxs("div",{children:[e.jsx("span",{children:a}),e.jsx("h3",{children:e.jsx(fe,{thousandSeparator:!0,displayType:"text",value:c})})]})]})})})})},qe=()=>{const t=b(),r=m(a=>a.crmUsers.data.statisticData),s=m(a=>a.crmUsers.data.statisticLoading);return h.useEffect(()=>{t(P())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[e.jsx(I,{icon:e.jsx(de,{}),avatarClass:"!bg-indigo-600",label:"Total Users",value:r==null?void 0:r.totalUser,loading:s}),e.jsx(I,{icon:e.jsx(me,{}),avatarClass:"!bg-blue-500",label:"Active Users",value:r==null?void 0:r.activeUser,loading:s}),e.jsx(I,{icon:e.jsx(K,{}),avatarClass:"!bg-emerald-500",label:"Inactivate Users",value:r==null?void 0:r.deactiveUser,loading:s}),e.jsx(I,{icon:e.jsx(K,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Users",value:r==null?void 0:r.newUser,loading:s})]})},y=[],Re=t=>{const{touched:r,errors:s,setFieldValue:a,values:c}=t,o=m(i=>i.crmUsers.data.rolesList);y.length=0,o.forEach(i=>{y.push({label:i.roleName,value:i.id})});const n=[{label:"active",value:"active"},{label:"inactive",value:"inactive"}];return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"First Name",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"firstName",component:U,prefix:e.jsx(V,{className:"text-xl"})})}),e.jsx(C,{label:"Last Name",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"lastName",component:U,prefix:e.jsx(V,{className:"text-xl"})})}),e.jsx(C,{label:"Email",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"email",component:U,prefix:e.jsx(Te,{className:"text-xl"})})}),e.jsx(C,{label:"Phone",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"phone",component:U,prefix:e.jsx(Fe,{className:"text-xl"})})}),e.jsx(C,{label:"Role",invalid:s.roleId&&r.roleId,errorMessage:s.roleId,children:e.jsx(W,{name:"roleId",id:"roleId",value:y.find(i=>(i==null?void 0:i.value)===(c==null?void 0:c.roleId)),options:y,onChange:i=>{a("roleId",i.value||"")}})}),e.jsx(C,{label:"Status",invalid:s.status&&r.status,errorMessage:s.status,children:e.jsx(W,{name:"status",id:"status",value:n.find(i=>(i==null?void 0:i.value)===(c==null?void 0:c.status)),options:n,onChange:i=>{a("status",i.value||"")}})})]})},Me=De().shape({firstName:N().required("First name is required"),lastName:N().required("Last name is required"),email:N().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),phone:N().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),status:N().required("Status is required").oneOf(["active","inactive"]),roleId:N().required("Role is required").test("is-valid-role","Invalid role selected",t=>!!y.find(r=>r.value==t))}),{TabNav:Oe,TabList:ze,TabContent:Le}=X,se=h.forwardRef((t,r)=>{const s=m(o=>o.crmUsers.data.selectedUser),a=m(o=>o.crmUsers.data.drawerMode),c=b();return e.jsx(Ue,{innerRef:r,initialValues:{firstName:a==="Edit"&&(s==null?void 0:s.firstName)||"",lastName:a==="Edit"&&(s==null?void 0:s.lastName)||"",email:a==="Edit"&&(s==null?void 0:s.email)||"",phone:a==="Edit"&&(s==null?void 0:s.phone)||"",status:a==="Add"?"inactive":(s==null?void 0:s.status)||"",roleId:a==="Edit"&&(s==null?void 0:s.roleId)||""},validationSchema:Me,onSubmit:async(o,{setSubmitting:n})=>{var i,p,j;if(a==="Edit"){const u=await c(Q({id:s.id,data:o}));(i=u==null?void 0:u.payload)!=null&&i.success?T.push(e.jsx(k,{title:"Successfully Update",type:"success",duration:2500,children:(p=u==null?void 0:u.payload)==null?void 0:p.message}),{placement:"top-end"}):T.push(e.jsx(k,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(j=u==null?void 0:u.error)==null?void 0:j.message}),{placement:"top-end"}),c(H()),await c(E()),await c(P())}n(!1)},children:({touched:o,errors:n,setFieldValue:i,values:p})=>e.jsx(ye,{children:e.jsx(we,{children:e.jsxs(X,{defaultValue:"usersInfo",children:[e.jsx(ze,{children:e.jsx(Oe,{value:"usersInfo",children:"Users Info"})}),e.jsx("div",{className:"p-6",children:e.jsx(Le,{value:"usersInfo",children:e.jsx(Re,{touched:o,errors:n,setFieldValue:i,values:p})})})]})})})})});se.displayName="UsersForm";const te=h.forwardRef((t,r)=>{const s=b(),a=m(i=>i.crmUsers.data.selectedUser),c=m(i=>i.crmUsers.data.usersList),{id:o}=a,n=i=>{const{name:p,birthday:j,email:u,img:D,location:g,title:A,phoneNumber:q,facebook:R,twitter:M,pinterest:O,linkedIn:z}=i,d={name:p,email:u,img:D},l={location:g,title:A,birthday:oe(j).format("DD/MM/YYYY"),phoneNumber:q,facebook:R,twitter:M,pinterest:O,linkedIn:z};let x=w(c),v={};x=x.map(f=>(f.id===o&&(f={...f,...d},f.personalInfo={...f.personalInfo,...l},v=f),f)),Ne(v)||s(Q(v)),s(H()),s(he(x))};return e.jsx(se,{ref:r,users:a,onFormSubmit:n})});te.displayName="UsersEditContent";const $e=({onSaveClick:t,onCancel:r})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(B,{size:"sm",className:"mr-2",onClick:r,children:"Cancel"}),e.jsx(B,{size:"sm",variant:"solid",onClick:t,children:"Save"})]}),Be=()=>{const t=b(),r=m(o=>o.crmUsers.data.drawerOpen);m(o=>o.crmUsers.data.drawerMode),m(o=>o.crmUsers.data.selectedUser);const s=()=>{t(H()),t(L({}))},a=h.useRef(null),c=async()=>{var o,n;(o=a.current)==null||o.values,(n=a.current)==null||n.submitForm()};return e.jsx(Ce,{isOpen:r,closable:!1,bodyClass:"p-0",footer:e.jsx($e,{onCancel:s,onSaveClick:c}),onClose:s,onRequestClose:s,children:e.jsx(te,{ref:a})})},Pe=()=>{const t=b(),r=m(o=>o.crmUsers.data.deleteConfirmation),s=m(o=>o.crmUsers.data.selectedUser),a=()=>{t($(!1))},c=async()=>{var n,i,p;t($(!1));const o=await t(xe(s.id));(n=o==null?void 0:o.payload)!=null&&n.success?T.push(e.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(i=o==null?void 0:o.payload)==null?void 0:i.message}),{placement:"top-end"}):(T.push(e.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(p=o==null?void 0:o.error)==null?void 0:p.message}),{placement:"top-end"}),await t(E()),await t(P()))};return e.jsx(Ee,{isOpen:r,type:"danger",title:"Delete User",confirmButtonColor:"red-600",onClose:a,onRequestClose:a,onCancel:a,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this user? All record related to this user will be deleted as well. This action cannot be undone."})})},He=({status:t})=>{switch(t){case"active":return e.jsx(Z,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"inactive":return e.jsx(Z,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Inactive"});default:return e.jsx(e.Fragment,{})}},Ke=()=>{const t=b(),r=m(d=>d.crmUsers.data.displayedUsersList),s=m(d=>d.crmUsers.data.loading);m(d=>d.crmUsers.data.filterData);const a=m(d=>d.crmUsers.data.rolesList),c=_("users","canModify"),o=_("users","canDelete");h.useEffect(()=>{async function d(){await t(ke())}d()},[t]);const{pageIndex:n,pageSize:i,sort:p,query:j,total:u}=m(d=>d.crmUsers.data.tableData),D=h.useCallback(()=>{t(E())},[t]);h.useEffect(()=>{D()},[D]);const g=h.useMemo(()=>({pageIndex:n,pageSize:i,sort:p,query:j,total:u}),[n,i,p,j,u]),A=({row:d})=>{const{textTheme:l}=Y(),x=()=>{t(ge()),t(L(d)),t(be("Edit"))};return e.jsx("div",{className:`${l} cursor-pointer select-none font-semibold`,onClick:x,children:"Edit"})},q=({row:d})=>{const{textTheme:l}=Y(),x=async()=>{await t(L(d)),t($(!0))};return e.jsx("div",{className:`${l} cursor-pointer select-none font-semibold text-red-500`,onClick:x,children:"Delete"})},R=h.useMemo(()=>{const d=[{header:"First Name",accessorKey:"firstName",cell:l=>l.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:l=>l.row.original.lastName},{header:"Role",accessorKey:"role",cell:l=>{var v;return((v=a==null?void 0:a.find(f=>(f==null?void 0:f.id)===(l==null?void 0:l.row.original.roleId)))==null?void 0:v.roleName)||"-"}},{header:"Email",accessorKey:"email",cell:l=>l.row.original.email},{header:"Phone",accessorKey:"phone",cell:l=>l.row.original.phone},{header:"Status",accessorKey:"status",cell:l=>{const x=l.row.original;return e.jsx(He,{status:x.status})}}];return o&&d.unshift({header:"Delete",id:"delete",cell:l=>e.jsx(q,{row:l.row.original})}),c&&d.unshift({header:"Edit",id:"action",cell:l=>e.jsx(A,{row:l.row.original})}),d},[c,o,a]),M=d=>{const l=w(g);l.pageIndex=d,t(F(l))},O=d=>{const l=w(g);l.pageSize=Number(d),l.pageIndex=1,t(F(l))},z=d=>{const l=w(g);l.sort=d,t(F(l))};return e.jsxs("div",{children:[e.jsx(ve,{columns:R,data:r,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:M,onSelectChange:O,onSort:z}),e.jsx(Be,{}),e.jsx(Pe,{})]})},ae=h.forwardRef((t,r)=>{const{onInputChange:s}=t,a=Ae(c,500);function c(n){s==null||s(n)}const o=n=>{a(n.target.value)};return e.jsx(U,{ref:r,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ue,{className:"text-lg"}),onChange:o})});ae.displayName="UsersTableSearch";const{Control:Ve}=Ie,G=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],Ye=({innerProps:t,label:r,data:s,isSelected:a})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${a?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...t,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ee,{innerClass:s.color}),e.jsx("span",{children:r})]}),a&&e.jsx(pe,{className:"text-emerald-500 text-xl"})]}),We=({children:t,...r})=>{const s=r.getValue()[0];return e.jsxs(Ve,{...r,children:[s&&e.jsx(ee,{className:"ltr:ml-4 rtl:mr-4",innerClass:s.color}),t]})},Ze=()=>{const t=b(),{status:r}=m(a=>a.crmUsers.data.filterData),s=a=>{t(J({status:a==null?void 0:a.value}))};return e.jsx(Se,{options:G,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:Ye,Control:We},value:G.filter(a=>a.value===r),onChange:s})},_e=()=>{const t=b(),r=h.useRef(null),s=m(n=>n.crmUsers.data.tableData),a=n=>{const i=w(s);i.query=n,i.pageIndex=1,typeof n=="string"&&n.length>1&&c(i),typeof n=="string"&&n.length===0&&c(i)},c=n=>{t(F(n)),t(E())},o=()=>{const n=w(s);n.query="",r.current&&(r.current.value=""),t(J({status:""})),c(n)};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(ae,{ref:r,onInputChange:a}),e.jsx(Ze,{})]}),e.jsx("div",{className:"mb-4",children:e.jsx(B,{size:"sm",className:"me-2",onClick:o,children:"Clear All"})})]})};ie("crmUsers",je);const Nt=()=>e.jsxs(e.Fragment,{children:[e.jsx(qe,{}),e.jsx(_e,{}),e.jsx(Ke,{})]});export{Nt as default};
