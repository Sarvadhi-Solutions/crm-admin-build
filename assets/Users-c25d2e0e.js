import{j as e,r as x,a as y,p as X,aq as ee}from"./index-3e8ea6f8.js";import{D as te}from"./DataTable-5e8afa6a.js";import{u as d,p as _,s as L,g as $,a as H,b as se,c as z,t as O,d as ae,e as S,f as re,h as oe,r as ie}from"./index-b678071a.js";import{u as K}from"./useThemeClass-dcc2d2c0.js";import{c as U}from"./cloneDeep-682c094b.js";import{B as P}from"./Button-76f1570d.js";import{D as ne}from"./Drawer-0605b25d.js";import{i as le}from"./Views-cc709248.js";import{T as W}from"./index-6ac68218.js";import{a as w,F as ce}from"./FormItem-cd2f592d.js";import{b as I,F as me,a as de}from"./formik.esm-07b32d21.js";import{c as pe,a as C}from"./index.esm-f87d0251.js";import{I as N}from"./Input-fcdfcb5e.js";/* empty css              */import{Q as B,b as ue}from"./index.esm-9f04789b.js";import{f as Y}from"./Select-3f8173b3.js";import{t as fe}from"./index.esm-66cb0ca3.js";import{n as he}from"./index.esm-f17eb547.js";import{t as E,N as F}from"./toast-7ff9f8c4.js";import"./Alert-7c38cc47.js";import"./index-1d299906.js";import"./Badge-eeedee10.js";import"./RangeCalendar-39ffd35c.js";import"./Card-f647d961.js";import"./index-0e62fb49.js";import"./index-82e9f824.js";import"./Dialog-52f96620.js";import"./index-644264f8.js";import"./toString-11f799aa.js";import"./index-d5aa1b1d.js";import"./index-8027bcf5.js";import"./index-8a954033.js";import"./Pagination-96c1f0d2.js";import"./Progress-11481b60.js";import"./index-c8dfa8be.js";import"./ScrollBar-080eb132.js";import"./index-bf896e9f.js";import"./Skeleton-32fefde5.js";import"./index-132323ef.js";import"./Switcher-0d6c2ebf.js";import"./index-6e2d0c70.js";import{T as V}from"./Tag-d66306a5.js";import"./index-8dfb88a1.js";import"./index-195fe53b.js";import"./Tooltip-cd4efb66.js";import"./Upload-73ca2c13.js";import{g as xe}from"./index-fc497f9e.js";import{C as ge}from"./ConfirmDialog-f6dece80.js";import{u as Z}from"./checkEditUpdate-50871c95.js";import{d as be}from"./debounce-e8f49131.js";import"./index-67b94fe2.js";import"./CrmService-cfe882b2.js";import"./_MapCache-3ab7a0d7.js";import"./_getPrototype-2d790319.js";import"./index-d6f80d82.js";import"./CloseButton-64a34d57.js";import"./useControllableState-7991db37.js";import"./index-2bce6170.js";import"./isNil-9b846371.js";import"./get-cefdaee1.js";import"./slicedToArray-96762860.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-078cc0f3.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-b972535c.js";import"./StatusIcon-d01ba88d.js";import"./chainedFunction-070f832c.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-88c079cd.js";import"./useRootClose-c072e07a.js";import"./usePopper-43e347b2.js";import"./TimeInput-4555e543.js";import"./useUniqueId-28e40ab3.js";import"./useDidUpdate-85d8cc72.js";import"./useUncertainRef-41a44258.js";import"./mapCloneElement-ddf17a05.js";import"./index.esm-5a90f68a.js";import"./index.esm-7a0c39a8.js";import"./moment-fbc5633a.js";const D=[],je=a=>{const{touched:m,errors:s,setFieldValue:i,values:c}=a,t=d(r=>r.crmUsers.data.rolesList);D.length=0,t.forEach(r=>{D.push({label:r.roleName,value:r.id})});const l=[{label:"active",value:"active"},{label:"inactive",value:"inactive"}];return e.jsxs(e.Fragment,{children:[e.jsx(w,{label:"First Name",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"firstName",component:N,prefix:e.jsx(B,{className:"text-xl"})})}),e.jsx(w,{label:"Last Name",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"lastName",component:N,prefix:e.jsx(B,{className:"text-xl"})})}),e.jsx(w,{label:"Email",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"email",component:N,prefix:e.jsx(he,{className:"text-xl"})})}),e.jsx(w,{label:"Phone",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"phone",component:N,prefix:e.jsx(fe,{className:"text-xl"})})}),e.jsx(w,{label:"Role",invalid:s.roleId&&m.roleId,errorMessage:s.roleId,children:e.jsx(Y,{name:"roleId",id:"roleId",value:D.find(r=>(r==null?void 0:r.value)===(c==null?void 0:c.roleId)),options:D,onChange:r=>{i("roleId",r.value||"")}})}),e.jsx(w,{label:"Status",invalid:s.status&&m.status,errorMessage:s.status,children:e.jsx(Y,{name:"status",id:"status",value:l.find(r=>(r==null?void 0:r.value)===(c==null?void 0:c.status)),options:l,onChange:r=>{i("status",r.value||"")}})})]})},we=pe().shape({firstName:C().required("First name is required"),lastName:C().required("Last name is required"),email:C().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),phone:C().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),status:C().required("Status is required").oneOf(["active","inactive"]),roleId:C().required("Role is required").test("is-valid-role","Invalid role selected",a=>!!D.find(m=>m.value==a))}),{TabNav:Ce,TabList:ye,TabContent:Ne}=W,Q=x.forwardRef((a,m)=>{const s=d(t=>t.crmUsers.data.selectedUser),i=d(t=>t.crmUsers.data.drawerMode),c=y();return e.jsx(me,{innerRef:m,initialValues:{firstName:i==="Edit"&&(s==null?void 0:s.firstName)||"",lastName:i==="Edit"&&(s==null?void 0:s.lastName)||"",email:i==="Edit"&&(s==null?void 0:s.email)||"",phone:i==="Edit"&&(s==null?void 0:s.phone)||"",status:i==="Add"?"inactive":(s==null?void 0:s.status)||"",roleId:i==="Edit"&&(s==null?void 0:s.roleId)||""},validationSchema:we,onSubmit:async(t,{setSubmitting:l})=>{var r,u,b;if(i==="Edit"){const p=await c(_({id:s.id,data:t}));(r=p==null?void 0:p.payload)!=null&&r.success?E.push(e.jsx(F,{title:"Successfully Update",type:"success",duration:2500,children:(u=p==null?void 0:p.payload)==null?void 0:u.message}),{placement:"top-end"}):E.push(e.jsx(F,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(b=p==null?void 0:p.error)==null?void 0:b.message}),{placement:"top-end"}),c(L()),await c($()),await c(H())}l(!1)},children:({touched:t,errors:l,setFieldValue:r,values:u})=>e.jsx(de,{children:e.jsx(ce,{children:e.jsxs(W,{defaultValue:"usersInfo",children:[e.jsx(ye,{children:e.jsx(Ce,{value:"usersInfo",children:"Users Info"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ne,{value:"usersInfo",children:e.jsx(je,{touched:t,errors:l,setFieldValue:r,values:u})})})]})})})})});Q.displayName="UsersForm";const G=x.forwardRef((a,m)=>{const s=y(),i=d(r=>r.crmUsers.data.selectedUser),c=d(r=>r.crmUsers.data.usersList),{id:t}=i,l=r=>{const{name:u,birthday:b,email:p,img:v,location:g,title:T,phoneNumber:k,facebook:q,twitter:R,pinterest:M,linkedIn:A}=r,n={name:u,email:p,img:v},o={location:g,title:T,birthday:X(b).format("DD/MM/YYYY"),phoneNumber:k,facebook:q,twitter:R,pinterest:M,linkedIn:A};let h=U(c),j={};h=h.map(f=>(f.id===t&&(f={...f,...n},f.personalInfo={...f.personalInfo,...o},j=f),f)),le(j)||s(_(j)),s(L()),s(se(h))};return e.jsx(Q,{ref:m,users:i,onFormSubmit:l})});G.displayName="UsersEditContent";const De=({onSaveClick:a,onCancel:m})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(P,{size:"sm",className:"mr-2",onClick:m,children:"Cancel"}),e.jsx(P,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Ue=()=>{const a=y(),m=d(t=>t.crmUsers.data.drawerOpen);d(t=>t.crmUsers.data.drawerMode),d(t=>t.crmUsers.data.selectedUser);const s=()=>{a(L()),a(z({}))},i=x.useRef(null),c=async()=>{var t,l;(t=i.current)==null||t.values,(l=i.current)==null||l.submitForm()};return e.jsx(ne,{isOpen:m,closable:!1,bodyClass:"p-0",footer:e.jsx(De,{onCancel:s,onSaveClick:c}),onClose:s,onRequestClose:s,children:e.jsx(G,{ref:i})})},ve=()=>{const a=y(),m=d(t=>t.crmUsers.data.deleteConfirmation),s=d(t=>t.crmUsers.data.selectedUser),i=()=>{a(O(!1))},c=async()=>{var l,r,u;a(O(!1));const t=await a(ae(s.id));(l=t==null?void 0:t.payload)!=null&&l.success?E.push(e.jsx(F,{title:"Successfuly Deleted",type:"success",duration:2500,children:(r=t==null?void 0:t.payload)==null?void 0:r.message}),{placement:"top-end"}):(E.push(e.jsx(F,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=t==null?void 0:t.error)==null?void 0:u.message}),{placement:"top-end"}),await a($()),await a(H()))};return e.jsx(ge,{isOpen:m,type:"danger",title:"Delete User",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this user? All record related to this user will be deleted as well. This action cannot be undone."})})},Ie=({status:a})=>{switch(a){case"active":return e.jsx(V,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"inactive":return e.jsx(V,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Inactive"});default:return e.jsx(e.Fragment,{})}},Se=()=>{const a=y(),m=d(n=>n.crmUsers.data.displayedUsersList),s=d(n=>n.crmUsers.data.loading);d(n=>n.crmUsers.data.filterData);const i=d(n=>n.crmUsers.data.rolesList),c=Z("users","canModify"),t=Z("users","canDelete");x.useEffect(()=>{async function n(){await a(xe())}n()},[a]);const{pageIndex:l,pageSize:r,sort:u,query:b,total:p}=d(n=>n.crmUsers.data.tableData),v=x.useCallback(()=>{a($())},[a]);x.useEffect(()=>{v()},[v]);const g=x.useMemo(()=>({pageIndex:l,pageSize:r,sort:u,query:b,total:p}),[l,r,u,b,p]),T=({row:n})=>{const{textTheme:o}=K(),h=()=>{a(re()),a(z(n)),a(oe("Edit"))};return e.jsx("div",{className:`${o} cursor-pointer select-none font-semibold`,onClick:h,children:"Edit"})},k=({row:n})=>{const{textTheme:o}=K(),h=async()=>{await a(z(n)),a(O(!0))};return e.jsx("div",{className:`${o} cursor-pointer select-none font-semibold text-red-500`,onClick:h,children:"Delete"})},q=x.useMemo(()=>{const n=[{header:"First Name",accessorKey:"firstName",cell:o=>o.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:o=>o.row.original.lastName},{header:"Role",accessorKey:"role",cell:o=>{var j;return((j=i==null?void 0:i.find(f=>(f==null?void 0:f.id)===(o==null?void 0:o.row.original.roleId)))==null?void 0:j.roleName)||"-"}},{header:"Email",accessorKey:"email",cell:o=>o.row.original.email},{header:"Phone",accessorKey:"phone",cell:o=>o.row.original.phone},{header:"Status",accessorKey:"status",cell:o=>{const h=o.row.original;return e.jsx(Ie,{status:h.status})}}];return t&&n.unshift({header:"Delete",id:"delete",cell:o=>e.jsx(k,{row:o.row.original})}),c&&n.unshift({header:"Edit",id:"action",cell:o=>e.jsx(T,{row:o.row.original})}),n},[c,t,i]),R=n=>{const o=U(g);o.pageIndex=n,a(S(o))},M=n=>{const o=U(g);o.pageSize=Number(n),o.pageIndex=1,a(S(o))},A=n=>{const o=U(g);o.sort=n,a(S(o))};return e.jsxs("div",{children:[e.jsx(te,{columns:q,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:R,onSelectChange:M,onSort:A}),e.jsx(Ue,{}),e.jsx(ve,{})]})},J=x.forwardRef((a,m)=>{const{onInputChange:s}=a,i=be(c,500);function c(l){s==null||s(l)}const t=l=>{i(l.target.value)};return e.jsx(N,{ref:m,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ue,{className:"text-lg"}),onChange:t})});J.displayName="UsersTableSearch";const Ee=()=>{const a=y(),m=x.useRef(null),s=d(t=>t.crmUsers.data.tableData),i=t=>{const l=U(s);l.query=t,l.pageIndex=1,typeof t=="string"&&t.length>1&&c(l),typeof t=="string"&&t.length===0&&c(l)},c=t=>{a(S(t))};return e.jsx("div",{className:"md:flex items-center justify-between",children:e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(J,{ref:m,onInputChange:i})})})};ee("crmUsers",ie);const ts=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ee,{}),e.jsx(Se,{})]});export{ts as default};
