import{a as b,r as h,j as e,ah as re,p as oe,aq as ie}from"./index-7b0349c6.js";import{M as ne}from"./MediaSkeleton-e45b822d.js";import{A as le}from"./index-2cc854d3.js";import{C as ce}from"./Card-a848a8eb.js";import{o as de,Q as me,C as K,R as V,b as ue,d as pe}from"./index.esm-70dc7df8.js";import{N as fe}from"./react-number-format.es-d0678920.js";import{u as m,a as P,p as Q,s as H,g as E,b as he,c as L,t as $,d as xe,e as F,f as ge,h as be,i as J,r as je}from"./index-2143c245.js";import{D as ve}from"./DataTable-e83a4ee2.js";import{u as Y}from"./useThemeClass-3c06ce00.js";import{c as N}from"./cloneDeep-43c01ed5.js";import{B}from"./Button-9fa3d2fc.js";import{D as Ce}from"./Drawer-464b2899.js";import{i as we}from"./Views-c6671a9d.js";import{T as X}from"./index-77e8bdc2.js";import{a as C,F as Ne}from"./FormItem-26ad5e8d.js";import{b as S,F as Ue,a as ye}from"./formik.esm-1e90a8e9.js";import{c as De,a as w}from"./index.esm-3fef8ee5.js";import{I as U}from"./Input-5106ef66.js";/* empty css              */import{a as W,S as Se,c as Ie}from"./Select-1f2320ab.js";import{t as Fe}from"./index.esm-8b94bd99.js";import{m as Te}from"./index.esm-b66fd867.js";import{t as T,N as k}from"./toast-184c7e0a.js";import"./Alert-ebb58074.js";import{B as ee}from"./Badge-50330686.js";import"./RangeCalendar-8f0006dc.js";import"./index-f606ec14.js";import"./index-e01b641f.js";import"./Dialog-9d79d85c.js";import"./index-d98edc99.js";import"./toString-a66e4ffc.js";import"./index-10cbcf37.js";import"./index-89cb79e5.js";import"./index-24734fba.js";import"./Pagination-2aca965e.js";import"./Progress-10ad9a7b.js";import"./index-9b4971f3.js";import"./ScrollBar-e6e4e948.js";import"./index-c97a424b.js";import"./Skeleton-8e99ae89.js";import"./index-2cd79135.js";import"./Switcher-e923ff00.js";import"./index-0df82d35.js";import{T as Z}from"./Tag-a0bc44e6.js";import"./index-aa85e3d4.js";import"./index-df8f9f26.js";import"./Tooltip-a61fe545.js";import"./Upload-4b7aa6b8.js";import{g as ke}from"./index-f2e6262f.js";import{C as Ee}from"./ConfirmDialog-916d697a.js";import{u as _}from"./checkEditUpdate-d3cb05ce.js";import{d as Ae}from"./debounce-11c7fdc6.js";import"./useMergeRef-788c4cb0.js";import"./CrmService-d23a3034.js";import"./index-cec25fe7.js";import"./_MapCache-a209650f.js";import"./_getPrototype-57ad14e0.js";import"./index-39084392.js";import"./CloseButton-68e6949e.js";import"./useControllableState-ca2883fa.js";import"./index-ba238736.js";import"./isNil-2a409f2e.js";import"./get-3f8daa47.js";import"./slicedToArray-a6cb1158.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-187593ce.js";import"./StatusIcon-11c7c844.js";import"./chainedFunction-070f832c.js";import"./_baseIsEqual-0ec018e0.js";import"./useRootClose-f96499f9.js";import"./usePopper-ea1a26c2.js";import"./TimeInput-0d554281.js";import"./useUniqueId-ab09df2f.js";import"./useDidUpdate-eb06a65d.js";import"./useUncertainRef-81a90e74.js";import"./mapCloneElement-0f96c84d.js";import"./index.esm-b503a71c.js";import"./index.esm-c96a5b5f.js";const I=t=>{const{icon:r,avatarClass:s,label:a,value:c,growthRate:o,loading:n}=t,i=55;return e.jsx(ce,{bordered:!0,children:e.jsx(re,{loading:n,customLoader:e.jsx(ne,{avatarProps:{className:"rounded",width:i,height:i}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(le,{className:s,size:i,icon:r}),e.jsxs("div",{children:[e.jsx("span",{children:a}),e.jsx("h3",{children:e.jsx(fe,{thousandSeparator:!0,displayType:"text",value:c})})]})]})})})})},Re=()=>{const t=b(),r=m(a=>a.crmUsers.data.statisticData),s=m(a=>a.crmUsers.data.statisticLoading);return h.useEffect(()=>{t(P())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[e.jsx(I,{icon:e.jsx(de,{}),avatarClass:"!bg-indigo-600",label:"Total Users",value:r==null?void 0:r.totalUser,loading:s}),e.jsx(I,{icon:e.jsx(me,{}),avatarClass:"!bg-blue-500",label:"Active Users",value:r==null?void 0:r.activeUser,loading:s}),e.jsx(I,{icon:e.jsx(K,{}),avatarClass:"!bg-emerald-500",label:"Inactivate Users",value:r==null?void 0:r.deactiveUser,loading:s}),e.jsx(I,{icon:e.jsx(K,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Users",value:r==null?void 0:r.newUser,loading:s})]})},y=[],qe=t=>{const{touched:r,errors:s,setFieldValue:a,values:c}=t,o=m(i=>i.crmUsers.data.rolesList);y.length=0,o.forEach(i=>{y.push({label:i.roleName,value:i.id})});const n=[{label:"active",value:"active"},{label:"inactive",value:"inactive"}];return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"First Name",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"firstName",component:U,prefix:e.jsx(V,{className:"text-xl"})})}),e.jsx(C,{label:"Last Name",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"lastName",component:U,prefix:e.jsx(V,{className:"text-xl"})})}),e.jsx(C,{label:"Email",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"email",component:U,prefix:e.jsx(Te,{className:"text-xl"})})}),e.jsx(C,{label:"Phone",children:e.jsx(S,{disabled:!0,type:"text",autoComplete:"off",name:"phone",component:U,prefix:e.jsx(Fe,{className:"text-xl"})})}),e.jsx(C,{label:"Role",invalid:s.roleId&&r.roleId,errorMessage:s.roleId,children:e.jsx(W,{name:"roleId",id:"roleId",value:y.find(i=>(i==null?void 0:i.value)===(c==null?void 0:c.roleId)),options:y,onChange:i=>{a("roleId",i.value||"")}})}),e.jsx(C,{label:"Status",invalid:s.status&&r.status,errorMessage:s.status,children:e.jsx(W,{name:"status",id:"status",value:n.find(i=>(i==null?void 0:i.value)===(c==null?void 0:c.status)),options:n,onChange:i=>{a("status",i.value||"")}})})]})},Me=De().shape({firstName:w().required("First name is required"),lastName:w().required("Last name is required"),email:w().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),phone:w().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),status:w().required("Status is required").oneOf(["active","inactive"]),roleId:w().required("Role is required").test("is-valid-role","Invalid role selected",t=>!!y.find(r=>r.value==t))}),{TabNav:Oe,TabList:ze,TabContent:Le}=X,se=h.forwardRef((t,r)=>{const s=m(o=>o.crmUsers.data.selectedUser),a=m(o=>o.crmUsers.data.drawerMode),c=b();return e.jsx(Ue,{innerRef:r,initialValues:{firstName:a==="Edit"&&(s==null?void 0:s.firstName)||"",lastName:a==="Edit"&&(s==null?void 0:s.lastName)||"",email:a==="Edit"&&(s==null?void 0:s.email)||"",phone:a==="Edit"&&(s==null?void 0:s.phone)||"",status:a==="Add"?"inactive":(s==null?void 0:s.status)||"",roleId:a==="Edit"&&(s==null?void 0:s.roleId)||""},validationSchema:Me,onSubmit:async(o,{setSubmitting:n})=>{var i,p,j;if(a==="Edit"){const u=await c(Q({id:s.id,data:o}));(i=u==null?void 0:u.payload)!=null&&i.success?T.push(e.jsx(k,{title:"Successfully Update",type:"success",duration:2500,children:(p=u==null?void 0:u.payload)==null?void 0:p.message}),{placement:"top-end"}):T.push(e.jsx(k,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(j=u==null?void 0:u.error)==null?void 0:j.message}),{placement:"top-end"}),c(H()),await c(E()),await c(P())}n(!1)},children:({touched:o,errors:n,setFieldValue:i,values:p})=>e.jsx(ye,{children:e.jsx(Ne,{children:e.jsxs(X,{defaultValue:"usersInfo",children:[e.jsx(ze,{children:e.jsx(Oe,{value:"usersInfo",children:"Users Info"})}),e.jsx("div",{className:"p-6",children:e.jsx(Le,{value:"usersInfo",children:e.jsx(qe,{touched:o,errors:n,setFieldValue:i,values:p})})})]})})})})});se.displayName="UsersForm";const te=h.forwardRef((t,r)=>{const s=b(),a=m(i=>i.crmUsers.data.selectedUser),c=m(i=>i.crmUsers.data.usersList),{id:o}=a,n=i=>{const{name:p,birthday:j,email:u,img:D,location:g,title:A,phoneNumber:R,facebook:q,twitter:M,pinterest:O,linkedIn:z}=i,d={name:p,email:u,img:D},l={location:g,title:A,birthday:oe(j).format("DD/MM/YYYY"),phoneNumber:R,facebook:q,twitter:M,pinterest:O,linkedIn:z};let x=N(c),v={};x=x.map(f=>(f.id===o&&(f={...f,...d},f.personalInfo={...f.personalInfo,...l},v=f),f)),we(v)||s(Q(v)),s(H()),s(he(x))};return e.jsx(se,{ref:r,users:a,onFormSubmit:n})});te.displayName="UsersEditContent";const $e=({onSaveClick:t,onCancel:r})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(B,{size:"sm",className:"mr-2",onClick:r,children:"Cancel"}),e.jsx(B,{size:"sm",variant:"solid",onClick:t,children:"Save"})]}),Be=()=>{const t=b(),r=m(o=>o.crmUsers.data.drawerOpen);m(o=>o.crmUsers.data.drawerMode),m(o=>o.crmUsers.data.selectedUser);const s=()=>{t(H()),t(L({}))},a=h.useRef(null),c=async()=>{var o,n;(o=a.current)==null||o.values,(n=a.current)==null||n.submitForm()};return e.jsx(Ce,{isOpen:r,closable:!1,bodyClass:"p-0",footer:e.jsx($e,{onCancel:s,onSaveClick:c}),onClose:s,onRequestClose:s,children:e.jsx(te,{ref:a})})},Pe=()=>{const t=b(),r=m(o=>o.crmUsers.data.deleteConfirmation),s=m(o=>o.crmUsers.data.selectedUser),a=()=>{t($(!1))},c=async()=>{var n,i,p;t($(!1));const o=await t(xe(s.id));(n=o==null?void 0:o.payload)!=null&&n.success?T.push(e.jsx(k,{title:"Successfuly Deleted",type:"success",duration:2500,children:(i=o==null?void 0:o.payload)==null?void 0:i.message}),{placement:"top-end"}):(T.push(e.jsx(k,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(p=o==null?void 0:o.error)==null?void 0:p.message}),{placement:"top-end"}),await t(E()),await t(P()))};return e.jsx(Ee,{isOpen:r,type:"danger",title:"Delete User",confirmButtonColor:"red-600",onClose:a,onRequestClose:a,onCancel:a,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this user? All record related to this user will be deleted as well. This action cannot be undone."})})},He=({status:t})=>{switch(t){case"active":return e.jsx(Z,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"inactive":return e.jsx(Z,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Inactive"});default:return e.jsx(e.Fragment,{})}},Ke=()=>{const t=b(),r=m(d=>d.crmUsers.data.displayedUsersList),s=m(d=>d.crmUsers.data.loading);m(d=>d.crmUsers.data.filterData);const a=m(d=>d.crmUsers.data.rolesList),c=_("users","canModify"),o=_("users","canDelete");h.useEffect(()=>{async function d(){await t(ke())}d()},[t]);const{pageIndex:n,pageSize:i,sort:p,query:j,total:u}=m(d=>d.crmUsers.data.tableData),D=h.useCallback(()=>{t(E())},[t]);h.useEffect(()=>{D()},[D]);const g=h.useMemo(()=>({pageIndex:n,pageSize:i,sort:p,query:j,total:u}),[n,i,p,j,u]),A=({row:d})=>{const{textTheme:l}=Y(),x=()=>{t(ge()),t(L(d)),t(be("Edit"))};return e.jsx("div",{className:`${l} cursor-pointer select-none font-semibold`,onClick:x,children:"Edit"})},R=({row:d})=>{const{textTheme:l}=Y(),x=async()=>{await t(L(d)),t($(!0))};return e.jsx("div",{className:`${l} cursor-pointer select-none font-semibold text-red-500`,onClick:x,children:"Delete"})},q=h.useMemo(()=>{const d=[{header:"First Name",accessorKey:"firstName",cell:l=>l.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:l=>l.row.original.lastName},{header:"Role",accessorKey:"role",cell:l=>{var v;return((v=a==null?void 0:a.find(f=>(f==null?void 0:f.id)===(l==null?void 0:l.row.original.roleId)))==null?void 0:v.roleName)||"-"}},{header:"Email",accessorKey:"email",cell:l=>l.row.original.email},{header:"Phone",accessorKey:"phone",cell:l=>l.row.original.phone},{header:"Status",accessorKey:"status",cell:l=>{const x=l.row.original;return e.jsx(He,{status:x.status})}}];return o&&d.unshift({header:"Delete",id:"delete",cell:l=>e.jsx(R,{row:l.row.original})}),c&&d.unshift({header:"Edit",id:"action",cell:l=>e.jsx(A,{row:l.row.original})}),d},[c,o,a]),M=d=>{const l=N(g);l.pageIndex=d,t(F(l))},O=d=>{const l=N(g);l.pageSize=Number(d),l.pageIndex=1,t(F(l))},z=d=>{const l=N(g);l.sort=d,t(F(l))};return e.jsxs("div",{children:[e.jsx(ve,{columns:q,data:r,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:M,onSelectChange:O,onSort:z}),e.jsx(Be,{}),e.jsx(Pe,{})]})},ae=h.forwardRef((t,r)=>{const{onInputChange:s}=t,a=Ae(c,500);function c(n){s==null||s(n)}const o=n=>{a(n.target.value)};return e.jsx(U,{ref:r,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ue,{className:"text-lg"}),onChange:o})});ae.displayName="UsersTableSearch";const{Control:Ve}=Ie,G=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],Ye=({innerProps:t,label:r,data:s,isSelected:a})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${a?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...t,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ee,{innerClass:s.color}),e.jsx("span",{children:r})]}),a&&e.jsx(pe,{className:"text-emerald-500 text-xl"})]}),We=({children:t,...r})=>{const s=r.getValue()[0];return e.jsxs(Ve,{...r,children:[s&&e.jsx(ee,{className:"ltr:ml-4 rtl:mr-4",innerClass:s.color}),t]})},Ze=()=>{const t=b(),{status:r}=m(a=>a.crmUsers.data.filterData),s=a=>{t(J({status:a==null?void 0:a.value}))};return e.jsx(Se,{options:G,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:Ye,Control:We},value:G.filter(a=>a.value===r),onChange:s})},_e=()=>{const t=b(),r=h.useRef(null),s=m(n=>n.crmUsers.data.tableData),a=n=>{const i=N(s);i.query=n,i.pageIndex=1,typeof n=="string"&&n.length>1&&c(i),typeof n=="string"&&n.length===0&&c(i)},c=n=>{t(F(n)),t(E())},o=()=>{const n=N(s);n.query="",r.current&&(r.current.value=""),t(J({status:""})),c(n)};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(ae,{ref:r,onInputChange:a}),e.jsx(Ze,{})]}),e.jsx("div",{className:"mb-4",children:e.jsx(B,{size:"sm",className:"me-2",onClick:o,children:"Clear All"})})]})};ie("crmUsers",je);const wt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Re,{}),e.jsx(_e,{}),e.jsx(Ke,{})]});export{wt as default};
