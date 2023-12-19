import{a as D,j as e,r as f,p as X,aq as ee}from"./index-23438ae7.js";import{D as te}from"./DataTable-eaf5954b.js";import"./Alert-2ee7f6ed.js";import"./index-0f4eb207.js";import"./Badge-d8b21e8e.js";import{B as R}from"./Button-6151e38d.js";import"./RangeCalendar-241f4707.js";import"./Card-f69b93fe.js";import"./index-58319d48.js";import"./index-88435c39.js";import"./Dialog-dadf7059.js";import{D as se}from"./Drawer-91500bd4.js";import"./index-0225ab21.js";import{a as w,F as ae}from"./FormItem-81d96ba6.js";import"./toString-43f8d781.js";import{I as v}from"./Input-56c39592.js";import"./index-bd0ae7e4.js";import"./index-e115d598.js";import"./index-3e7750c4.js";import{t as A,N as O}from"./toast-dce6e6a9.js";import"./Pagination-d8250938.js";import"./Progress-8255b424.js";import"./index-9b7c753a.js";import"./ScrollBar-85bd4202.js";import"./index-b55caea5.js";import{f as B}from"./Select-95f0cb48.js";import"./Skeleton-a15387d3.js";import"./index-be5eba8a.js";import"./Switcher-4e23edc7.js";import"./index-bc82ff52.js";import{T as V}from"./index-05c2f418.js";import{T as H}from"./Tag-1f728080.js";import"./index-6e98d156.js";import"./index-c9a86e91.js";import"./Tooltip-7ead0d1d.js";import"./Upload-2033c099.js";import{u as z}from"./checkEditUpdate-244f1091.js";import{u as re}from"./useThemeClass-ff7f30ed.js";import{c as U}from"./cloneDeep-1b943ce1.js";import{Q as Y,O as oe,P as ie,b as ne}from"./index.esm-abf109fc.js";import{g as le}from"./index-ef86df72.js";import{u as p,t as L,d as ce,g as K,p as Z,a as me,s as $,b as de,e as P,f as F,h as _,i as W,r as pe}from"./index-16eed80f.js";import{C as ue}from"./ConfirmDialog-e5b27e51.js";import{i as fe}from"./Views-9f1346e4.js";import{b as I,F as he,a as xe}from"./formik.esm-88d9cb0a.js";import{c as ge,a as y}from"./index.esm-c939c475.js";/* empty css              */import{t as be}from"./index.esm-755a26e3.js";import{n as je}from"./index.esm-9959a72a.js";import{d as Ne}from"./debounce-16da10ff.js";import"./index-e62ff1a1.js";import"./useTimeout-6cd1f175.js";import"./CloseButton-f525b5b0.js";import"./StatusIcon-5855f3ff.js";import"./useMergeRef-788c4cb0.js";import"./useControllableState-b36b44b8.js";import"./_baseIsEqual-700638f4.js";import"./_MapCache-68b4b736.js";import"./get-f6970d5e.js";import"./useRootClose-46c6f66d.js";import"./usePopper-c0ab2d6a.js";import"./TimeInput-4ee6bd8b.js";import"./useUniqueId-26473376.js";import"./useDidUpdate-2e5d793b.js";import"./index-3ba2d1e2.js";import"./useUncertainRef-988c2c0d.js";import"./isNil-3b5b1f9c.js";import"./index-cf95bcca.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-24b37abb.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-89eeae84.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-9ad427af.js";import"./index.esm-d8984845.js";import"./index.esm-c3615cb9.js";import"./moment-fbc5633a.js";import"./_getPrototype-4ab4f81a.js";import"./CrmService-adaf9185.js";const Ce=()=>{const r=D(),c=p(a=>a.crmUsers.data.deleteConfirmation),s=p(a=>a.crmUsers.data.selectedUser),o=()=>{r(L(!1))},n=async()=>{var l,t,d;r(L(!1));const a=await r(ce(s.id));(l=a==null?void 0:a.payload)!=null&&l.success?A.push(e.jsx(O,{title:"Successfuly Deleted",type:"success",duration:2500,children:(t=a==null?void 0:a.payload)==null?void 0:t.message}),{placement:"top-end"}):A.push(e.jsx(O,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(d=a==null?void 0:a.error)==null?void 0:d.message}),{placement:"top-end"}),await r(K())};return e.jsx(ue,{isOpen:c,type:"danger",title:"Delete User",confirmButtonColor:"red-600",onClose:o,onRequestClose:o,onCancel:o,onConfirm:n,children:e.jsx("p",{children:"Are you sure you want to delete this user? All record related to this user will be deleted as well. This action cannot be undone."})})},S=[],we=r=>{const{touched:c,errors:s,setFieldValue:o,values:n}=r,a=p(t=>t.crmUsers.data.rolesList);S.length=0,a.forEach(t=>{S.push({label:t.roleName,value:t.id})});const l=[{label:"active",value:"active"},{label:"inactive",value:"inactive"}];return e.jsxs(e.Fragment,{children:[e.jsx(w,{label:"First Name",invalid:s.firstName&&c.firstName,errorMessage:s.firstName,children:e.jsx(I,{type:"text",autoComplete:"off",name:"firstName",component:v,prefix:e.jsx(Y,{className:"text-xl"})})}),e.jsx(w,{label:"Last Name",invalid:s.lastName&&c.lastName,errorMessage:s.lastName,children:e.jsx(I,{type:"text",autoComplete:"off",name:"lastName",component:v,prefix:e.jsx(Y,{className:"text-xl"})})}),e.jsx(w,{label:"Email",invalid:s.email&&c.email,errorMessage:s.email,children:e.jsx(I,{type:"text",autoComplete:"off",name:"email",component:v,prefix:e.jsx(je,{className:"text-xl"})})}),e.jsx(w,{label:"Phone",invalid:s.phone&&c.phone,errorMessage:s.phone,children:e.jsx(I,{type:"text",autoComplete:"off",name:"phone",component:v,prefix:e.jsx(be,{className:"text-xl"})})}),e.jsx(w,{label:"Role",invalid:s.roleId&&c.roleId,errorMessage:s.roleId,children:e.jsx(B,{name:"roleId",id:"roleId",value:S.find(t=>(t==null?void 0:t.value)===(n==null?void 0:n.roleId)),options:S,onChange:t=>{o("roleId",t.value||"")}})}),e.jsx(w,{label:"Status",invalid:s.status&&c.status,errorMessage:s.status,children:e.jsx(B,{name:"status",id:"status",value:l.find(t=>(t==null?void 0:t.value)===(n==null?void 0:n.status)),options:l,onChange:t=>{o("status",t.value||"")}})})]})},ye=ge().shape({firstName:y().required("First name is required"),lastName:y().required("Last name is required"),email:y().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),phone:y().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),status:y().required("Status is required").oneOf(["active","inactive"]),roleId:y().required("Role is required")}),{TabNav:De,TabList:ve,TabContent:Ue}=V,Q=f.forwardRef((r,c)=>{const s=p(a=>a.crmUsers.data.selectedUser),o=p(a=>a.crmUsers.data.drawerMode),n=D();return e.jsx(he,{innerRef:c,initialValues:{firstName:o==="Edit"&&(s==null?void 0:s.firstName)||"",lastName:o==="Edit"&&(s==null?void 0:s.lastName)||"",email:o==="Edit"&&(s==null?void 0:s.email)||"",phone:o==="Edit"&&(s==null?void 0:s.phone)||"",status:o==="Add"?"inactive":(s==null?void 0:s.status)||"",roleId:o==="Edit"&&(s==null?void 0:s.roleId)||""},validationSchema:ye,onSubmit:async(a,{setSubmitting:l})=>{var h,x,g,u;const t=o==="Edit"?await n(Z({id:s.id,data:a})):await n(me(a)),d=(h=t==null?void 0:t.payload)!=null&&h.success?"Successfully Updated":"Something went wrong !!!";A.push(e.jsx(O,{title:d,type:(x=t==null?void 0:t.payload)!=null&&x.success?"success":"danger",duration:2500,children:((g=t==null?void 0:t.payload)==null?void 0:g.message)||((u=t==null?void 0:t.error)==null?void 0:u.message)}),{placement:"top-end"}),n($()),await n(K()),l(!1)},children:({touched:a,errors:l,setFieldValue:t,values:d})=>e.jsx(xe,{children:e.jsx(ae,{children:e.jsxs(V,{defaultValue:"usersInfo",children:[e.jsx(ve,{children:e.jsx(De,{value:"usersInfo",children:"Users Info"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ue,{value:"usersInfo",children:e.jsx(we,{touched:a,errors:l,setFieldValue:t,values:d})})})]})})})})});Q.displayName="UsersForm";const G=f.forwardRef((r,c)=>{const s=D(),o=p(t=>t.crmUsers.data.selectedUser),n=p(t=>t.crmUsers.data.usersList),{id:a}=o,l=t=>{const{name:d,birthday:h,email:x,img:g,location:u,title:E,phoneNumber:T,facebook:k,twitter:M,pinterest:q,linkedIn:m}=t,i={name:d,email:x,img:g},N={location:u,title:E,birthday:X(h).format("DD/MM/YYYY"),phoneNumber:T,facebook:k,twitter:M,pinterest:q,linkedIn:m};let C=U(n),b={};C=C.map(j=>(j.id===a&&(j={...j,...i},j.personalInfo={...j.personalInfo,...N},b=j),j)),fe(b)||s(Z(b)),s($()),s(de(C))};return e.jsx(Q,{ref:c,users:o,onFormSubmit:l})});G.displayName="UsersEditContent";const Ie=({onSaveClick:r,onCancel:c})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(R,{size:"sm",className:"mr-2",onClick:c,children:"Cancel"}),e.jsx(R,{size:"sm",variant:"solid",onClick:r,children:"Save"})]}),Se=()=>{const r=D(),c=p(a=>a.crmUsers.data.drawerOpen),s=()=>{r($()),r(P({}))},o=f.useRef(null),n=async()=>{var a,l;(a=o.current)==null||a.values,(l=o.current)==null||l.submitForm()};return e.jsx(se,{isOpen:c,closable:!1,bodyClass:"p-0",footer:e.jsx(Ie,{onCancel:s,onSaveClick:n}),onClose:s,onRequestClose:s,children:e.jsx(G,{ref:o})})},Fe=({status:r})=>{switch(r){case"active":return e.jsx(H,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"inactive":return e.jsx(H,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Inactive"});default:return e.jsx(e.Fragment,{})}},Ee=()=>{const r=D(),c=p(m=>m.crmUsers.data.displayedUsersList),s=p(m=>m.crmUsers.data.loading),o=p(m=>m.crmUsers.data.rolesList),n=z("users","canModify"),a=z("users","canDelete");f.useEffect(()=>{async function m(){await r(le())}m()},[r]);const{pageIndex:l,pageSize:t,sort:d,query:h,total:x}=p(m=>m.crmUsers.data.tableData),g=f.useCallback(()=>{r(K())},[r]);f.useEffect(()=>{g()},[g]);const u=f.useMemo(()=>({pageIndex:l,pageSize:t,sort:d,query:h,total:x}),[l,t,d,h,x]),E=({row:m})=>{re();const i=()=>{r(_()),r(P(m)),r(W("Edit"))},N=async()=>{await r(P(m)),r(L(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[n&&e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:i,children:e.jsx(oe,{})}),a&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:N,children:e.jsx(ie,{})})]})},T=f.useMemo(()=>[{header:"Action",id:"action",cell:i=>e.jsx(E,{row:i.row.original})},{header:"First Name",accessorKey:"firstName",cell:i=>i.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:i=>i.row.original.lastName},{header:"Role",accessorKey:"role",cell:i=>{var C;return((C=o==null?void 0:o.find(b=>(b==null?void 0:b.id)===(i==null?void 0:i.row.original.roleId)))==null?void 0:C.roleName)||"-"}},{header:"Email",accessorKey:"email",cell:i=>i.row.original.email},{header:"Phone",accessorKey:"phone",cell:i=>i.row.original.phone},{header:"Status",accessorKey:"status",cell:i=>{const N=i.row.original;return e.jsx(Fe,{status:N.status})}}],[n,a,o]),k=m=>{const i=U(u);i.pageIndex=m,r(F(i))},M=m=>{const i=U(u);i.pageSize=Number(m),i.pageIndex=1,r(F(i))},q=m=>{const i=U(u);i.sort=m,r(F(i))};return e.jsxs("div",{children:[e.jsx(te,{columns:T,data:c,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:k,onSelectChange:M,onSort:q}),e.jsx(Se,{}),e.jsx(Ce,{})]})},J=f.forwardRef((r,c)=>{const{onInputChange:s}=r,o=Ne(n,500);function n(l){s==null||s(l)}const a=l=>{o(l.target.value)};return e.jsx(v,{ref:c,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ne,{className:"text-lg"}),onChange:a})});J.displayName="UsersTableSearch";const Te=()=>{const r=D(),c=f.useRef(null),s=p(t=>t.crmUsers.data.tableData),o=z("users","canCreate"),n=t=>{const d=U(s);d.query=t,d.pageIndex=1,typeof t=="string"&&t.length>1&&a(d),typeof t=="string"&&t.length===0&&a(d)},a=t=>{r(F(t))},l=()=>{r(_()),r(W("ADD"))};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(J,{ref:c,onInputChange:n})}),e.jsx("div",{className:"mb-4",children:o&&e.jsx(R,{size:"sm",onClick:l,children:"Add New"})})]})};ee("crmUsers",pe);const as=()=>e.jsxs(e.Fragment,{children:[e.jsx(Te,{}),e.jsx(Ee,{})]});export{as as default};
