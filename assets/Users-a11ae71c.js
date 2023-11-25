import{a as D,j as e,r as f,p as X,aq as ee}from"./index-f0c7b593.js";import{D as te}from"./DataTable-b0d71643.js";import"./Alert-6365923a.js";import"./index-e46ae74f.js";import"./Badge-eb9394bd.js";import{B as A}from"./Button-7f5aeb19.js";import"./RangeCalendar-4446a681.js";import"./Card-d2bb7bb1.js";import"./index-3454c4af.js";import"./index-7fb568e6.js";import"./Dialog-863f25dc.js";import{D as se}from"./Drawer-3213f845.js";import"./index-096ca5d8.js";import{a as w,F as ae}from"./FormItem-39c4f499.js";import"./toString-15315b0c.js";import{I as v}from"./Input-b0936f40.js";import"./index-cae4e5da.js";import"./index-cd4a639d.js";import"./index-e9f2e738.js";import{t as R,N as O}from"./toast-98ab077b.js";import"./Pagination-4451079e.js";import"./Progress-c215b6a7.js";import"./index-aa5943b4.js";import"./ScrollBar-af66e651.js";import"./index-2d35600c.js";import{f as B}from"./Select-20b819a9.js";import"./Skeleton-3fb87948.js";import"./index-681acbb6.js";import"./Switcher-52adaf57.js";import"./index-b0e56b87.js";import{T as V}from"./index-0fbd5995.js";import{T as H}from"./Tag-c0e1c031.js";import"./index-11547d1a.js";import"./index-ff0fc04f.js";import"./Tooltip-c002e367.js";import"./Upload-652ef9c2.js";import{u as z}from"./checkEditUpdate-a8d8ed64.js";import{u as re}from"./useThemeClass-a90261c9.js";import{c as U}from"./cloneDeep-a7f8bdaf.js";import{Q as Y,O as oe,P as ie,b as ne}from"./index.esm-e5bc54ff.js";import{u as p,t as L,d as le,g as K,p as Z,a as ce,s as $,b as me,e as P,f as F,h as _,i as W,r as de}from"./index-ce046e2b.js";import{C as pe}from"./ConfirmDialog-a2f5c181.js";import{i as ue}from"./Views-f075be69.js";import{b as I,F as fe,a as he}from"./formik.esm-251b655f.js";import{c as xe,a as y}from"./index.esm-36ab1692.js";/* empty css              */import{t as ge}from"./index.esm-6eb7bfab.js";import{n as be}from"./index.esm-6d11550f.js";import{d as je}from"./debounce-cfdc19d0.js";import"./index-d3141ad9.js";import"./useTimeout-dc84f5ca.js";import"./CloseButton-0049a26a.js";import"./StatusIcon-ee78f8c3.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-2e915fdc.js";import"./_baseIsEqual-cd068756.js";import"./_MapCache-0e9047d5.js";import"./get-f1462f52.js";import"./useRootClose-30d78bea.js";import"./usePopper-a15905d1.js";import"./TimeInput-3420c0cd.js";import"./useUniqueId-b4c9cc1b.js";import"./useDidUpdate-99adc2ba.js";import"./index-3b8a3b80.js";import"./useUncertainRef-d24e847b.js";import"./isNil-f2b7492f.js";import"./index-18282a3b.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-4d193841.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-4b0cd007.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-4930eeca.js";import"./index.esm-7aedf532.js";import"./index.esm-cdcdcd5a.js";import"./moment-fbc5633a.js";import"./_getPrototype-0af54c7c.js";import"./CrmService-dbe6e33f.js";const Ne=()=>{const r=D(),c=p(a=>a.crmUsers.data.deleteConfirmation),s=p(a=>a.crmUsers.data.selectedUser),o=()=>{r(L(!1))},n=async()=>{var l,t,d;r(L(!1));const a=await r(le(s.id));(l=a==null?void 0:a.payload)!=null&&l.success?R.push(e.jsx(O,{title:"Successfuly Deleted",type:"success",duration:2500,children:(t=a==null?void 0:a.payload)==null?void 0:t.message}),{placement:"top-end"}):R.push(e.jsx(O,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(d=a==null?void 0:a.error)==null?void 0:d.message}),{placement:"top-end"}),await r(K())};return e.jsx(pe,{isOpen:c,type:"danger",title:"Delete User",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:n,children:e.jsx("p",{children:"Are you sure you want to delete this user? All record related to this user will be deleted as well. This action cannot be undone."})})},S=[],Ce=r=>{const{touched:c,errors:s,setFieldValue:o,values:n}=r,a=p(t=>t.crmUsers.data.rolesList);S.length=0,a.forEach(t=>{S.push({label:t.roleName,value:t.id})});const l=[{label:"active",value:"active"},{label:"inactive",value:"inactive"}];return e.jsxs(e.Fragment,{children:[e.jsx(w,{label:"First Name",invalid:s.firstName&&c.firstName,errorMessage:s.firstName,children:e.jsx(I,{type:"text",autoComplete:"off",name:"firstName",component:v,prefix:e.jsx(Y,{className:"text-xl"})})}),e.jsx(w,{label:"Last Name",invalid:s.lastName&&c.lastName,errorMessage:s.lastName,children:e.jsx(I,{type:"text",autoComplete:"off",name:"lastName",component:v,prefix:e.jsx(Y,{className:"text-xl"})})}),e.jsx(w,{label:"Email",invalid:s.email&&c.email,errorMessage:s.email,children:e.jsx(I,{type:"text",autoComplete:"off",name:"email",component:v,prefix:e.jsx(be,{className:"text-xl"})})}),e.jsx(w,{label:"Phone",invalid:s.phone&&c.phone,errorMessage:s.phone,children:e.jsx(I,{type:"text",autoComplete:"off",name:"phone",component:v,prefix:e.jsx(ge,{className:"text-xl"})})}),e.jsx(w,{label:"Role",invalid:s.roleId&&c.roleId,errorMessage:s.roleId,children:e.jsx(B,{name:"roleId",id:"roleId",value:S.find(t=>(t==null?void 0:t.value)===(n==null?void 0:n.roleId)),options:S,onChange:t=>{o("roleId",t.value||"")}})}),e.jsx(w,{label:"Status",invalid:s.status&&c.status,errorMessage:s.status,children:e.jsx(B,{name:"status",id:"status",value:l.find(t=>(t==null?void 0:t.value)===(n==null?void 0:n.status)),options:l,onChange:t=>{o("status",t.value||"")}})})]})},we=xe().shape({firstName:y().required("First name is required"),lastName:y().required("Last name is required"),email:y().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),phone:y().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),status:y().required("Status is required").oneOf(["active","inactive"]),roleId:y().required("Role is required")}),{TabNav:ye,TabList:De,TabContent:ve}=V,Q=f.forwardRef((r,c)=>{const s=p(a=>a.crmUsers.data.selectedUser),o=p(a=>a.crmUsers.data.drawerMode),n=D();return e.jsx(fe,{innerRef:c,initialValues:{firstName:o==="Edit"&&(s==null?void 0:s.firstName)||"",lastName:o==="Edit"&&(s==null?void 0:s.lastName)||"",email:o==="Edit"&&(s==null?void 0:s.email)||"",phone:o==="Edit"&&(s==null?void 0:s.phone)||"",status:o==="Add"?"inactive":(s==null?void 0:s.status)||"",roleId:o==="Edit"&&(s==null?void 0:s.roleId)||""},validationSchema:we,onSubmit:async(a,{setSubmitting:l})=>{var h,x,g,u;const t=o==="Edit"?await n(Z({id:s.id,data:a})):await n(ce(a)),d=(h=t==null?void 0:t.payload)!=null&&h.success?"Successfully Updated":"Something went wrong !!!";R.push(e.jsx(O,{title:d,type:(x=t==null?void 0:t.payload)!=null&&x.success?"success":"danger",duration:2500,children:((g=t==null?void 0:t.payload)==null?void 0:g.message)||((u=t==null?void 0:t.error)==null?void 0:u.message)}),{placement:"top-end"}),n($()),await n(K()),l(!1)},children:({touched:a,errors:l,setFieldValue:t,values:d})=>e.jsx(he,{children:e.jsx(ae,{children:e.jsxs(V,{defaultValue:"usersInfo",children:[e.jsx(De,{children:e.jsx(ye,{value:"usersInfo",children:"Users Info"})}),e.jsx("div",{className:"p-6",children:e.jsx(ve,{value:"usersInfo",children:e.jsx(Ce,{touched:a,errors:l,setFieldValue:t,values:d})})})]})})})})});Q.displayName="UsersForm";const G=f.forwardRef((r,c)=>{const s=D(),o=p(t=>t.crmUsers.data.selectedUser),n=p(t=>t.crmUsers.data.usersList),{id:a}=o,l=t=>{const{name:d,birthday:h,email:x,img:g,location:u,title:T,phoneNumber:E,facebook:k,twitter:M,pinterest:q,linkedIn:m}=t,i={name:d,email:x,img:g},N={location:u,title:T,birthday:X(h).format("DD/MM/YYYY"),phoneNumber:E,facebook:k,twitter:M,pinterest:q,linkedIn:m};let C=U(n),b={};C=C.map(j=>(j.id===a&&(j={...j,...i},j.personalInfo={...j.personalInfo,...N},b=j),j)),ue(b)||s(Z(b)),s($()),s(me(C))};return e.jsx(Q,{ref:c,users:o,onFormSubmit:l})});G.displayName="UsersEditContent";const Ue=({onSaveClick:r,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(A,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(A,{size:"sm",variant:"solid",onClick:r,children:"Save"})]}),Ie=()=>{const r=D(),c=p(a=>a.crmUsers.data.drawerOpen),s=()=>{r($()),r(P({}))},o=f.useRef(null),n=async()=>{var a,l;(a=o.current)==null||a.values,(l=o.current)==null||l.submitForm()};return e.jsx(se,{isOpen:c,closable:!1,bodyClass:"p-0",footer:e.jsx(Ue,{onCancel:s,onSaveClick:n}),onClose:s,onRequestClose:s,children:e.jsx(G,{ref:o})})},Se=({status:r})=>{switch(r){case"active":return e.jsx(H,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"inactive":return e.jsx(H,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Inactive"});default:return e.jsx(e.Fragment,{})}},Fe=()=>{const r=D(),c=p(m=>m.crmUsers.data.displayedUsersList),s=p(m=>m.crmUsers.data.loading),o=p(m=>m.crmUsers.data.rolesList),n=z("users","canModify"),a=z("users","canDelete"),{pageIndex:l,pageSize:t,sort:d,query:h,total:x}=p(m=>m.crmUsers.data.tableData),g=f.useCallback(()=>{r(K())},[r]);f.useEffect(()=>{g()},[g]);const u=f.useMemo(()=>({pageIndex:l,pageSize:t,sort:d,query:h,total:x}),[l,t,d,h,x]),T=({row:m})=>{re();const i=()=>{r(_()),r(P(m)),r(W("Edit"))},N=async()=>{await r(P(m)),r(L(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[n&&e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:i,children:e.jsx(oe,{})}),a&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:N,children:e.jsx(ie,{})})]})},E=f.useMemo(()=>[{header:"Action",id:"action",cell:i=>e.jsx(T,{row:i.row.original})},{header:"First Name",accessorKey:"firstName",cell:i=>i.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:i=>i.row.original.lastName},{header:"Role",accessorKey:"role",cell:i=>{var C;return((C=o==null?void 0:o.find(b=>(b==null?void 0:b.id)===(i==null?void 0:i.row.original.roleId)))==null?void 0:C.roleName)||"-"}},{header:"Email",accessorKey:"email",cell:i=>i.row.original.email},{header:"Phone",accessorKey:"phone",cell:i=>i.row.original.phone},{header:"Status",accessorKey:"status",cell:i=>{const N=i.row.original;return e.jsx(Se,{status:N.status})}}],[n,a,o]),k=m=>{const i=U(u);i.pageIndex=m,r(F(i))},M=m=>{const i=U(u);i.pageSize=Number(m),i.pageIndex=1,r(F(i))},q=m=>{const i=U(u);i.sort=m,r(F(i))};return e.jsxs("div",{children:[e.jsx(te,{columns:E,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:k,onSelectChange:M,onSort:q}),e.jsx(Ie,{}),e.jsx(Ne,{})]})},J=f.forwardRef((r,c)=>{const{onInputChange:s}=r,o=je(n,500);function n(l){s==null||s(l)}const a=l=>{o(l.target.value)};return e.jsx(v,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ne,{className:"text-lg"}),onChange:a})});J.displayName="UsersTableSearch";const Te=()=>{const r=D(),c=f.useRef(null),s=p(t=>t.crmUsers.data.tableData),o=z("users","canCreate"),n=t=>{const d=U(s);d.query=t,d.pageIndex=1,typeof t=="string"&&t.length>1&&a(d),typeof t=="string"&&t.length===0&&a(d)},a=t=>{r(F(t))},l=()=>{r(_()),r(W("ADD"))};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(J,{ref:c,onInputChange:n})}),e.jsx("div",{className:"mb-4",children:o&&e.jsx(A,{size:"sm",onClick:l,children:"Add New"})})]})};ee("crmUsers",de);const ts=()=>e.jsxs(e.Fragment,{children:[e.jsx(Te,{}),e.jsx(Fe,{})]});export{ts as default};
