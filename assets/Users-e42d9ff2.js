import{j as e,r as x,a as y,p as X,aq as ee}from"./index-a20ba26a.js";import{D as te}from"./DataTable-011e9941.js";import{u as d,p as _,s as L,g as $,a as H,b as se,c as z,t as O,d as ae,e as S,f as re,h as oe,r as ie}from"./index-c3677863.js";import{u as K}from"./useThemeClass-6d8c2eb1.js";import{c as U}from"./cloneDeep-3e847c7b.js";import{B as P}from"./Button-606f81c4.js";import{D as ne}from"./Drawer-e77b2b89.js";import{i as le}from"./Views-bc53fe60.js";import{T as W}from"./index-7089ceba.js";import{a as w,F as ce}from"./FormItem-6a0d9197.js";import{b as I,F as me,a as de}from"./formik.esm-2806615a.js";import{c as pe,a as C}from"./index.esm-7f24b5b1.js";import{I as N}from"./Input-6b27fa9a.js";/* empty css              */import{Q as B,b as ue}from"./index.esm-be6144e0.js";import{f as Y}from"./Select-03ba356c.js";import{t as fe}from"./index.esm-82d2638c.js";import{n as he}from"./index.esm-f63efa5f.js";import{t as E,N as F}from"./toast-e3774575.js";import"./Alert-8553d33a.js";import"./index-2148bb60.js";import"./Badge-8049beb3.js";import"./RangeCalendar-25da90a3.js";import"./Card-bff24a36.js";import"./index-2174bc97.js";import"./index-4635ef66.js";import"./Dialog-26a2a0fd.js";import"./index-9864d878.js";import"./toString-a63c2859.js";import"./index-748ad56b.js";import"./index-85d605de.js";import"./index-35476e3e.js";import"./Pagination-d3f31d62.js";import"./Progress-6b096913.js";import"./index-d8391a2e.js";import"./ScrollBar-7e1d65c9.js";import"./index-dc1ca84e.js";import"./Skeleton-a7528028.js";import"./index-d92e699d.js";import"./Switcher-05ebbfd6.js";import"./index-8466741f.js";import{T as V}from"./Tag-678be9fd.js";import"./index-62aa565b.js";import"./index-7fbb0973.js";import"./Tooltip-b0886967.js";import"./Upload-3f7737c4.js";import{g as xe}from"./index-db1d98cb.js";import{C as ge}from"./ConfirmDialog-46de9549.js";import{u as Z}from"./checkEditUpdate-07081f80.js";import{d as be}from"./debounce-cdc9fd43.js";import"./index-a407f681.js";import"./CrmService-56f8463c.js";import"./_MapCache-dc1c6594.js";import"./_getPrototype-4a7cc1e2.js";import"./index-12a2e799.js";import"./CloseButton-4e026f10.js";import"./useControllableState-284b4d1f.js";import"./index-1b414c07.js";import"./isNil-b4ff99b9.js";import"./get-1094ccfe.js";import"./slicedToArray-24deda83.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-a381a404.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-7becf600.js";import"./StatusIcon-41b0d7b0.js";import"./chainedFunction-070f832c.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-756c5960.js";import"./useRootClose-d61eb5f9.js";import"./usePopper-08e5e722.js";import"./TimeInput-9d62f940.js";import"./useUniqueId-914c91c8.js";import"./useDidUpdate-e252aed9.js";import"./useUncertainRef-ccbee67f.js";import"./mapCloneElement-e3365f47.js";import"./index.esm-2bfb7347.js";import"./index.esm-c597078d.js";const D=[],je=a=>{const{touched:m,errors:s,setFieldValue:i,values:c}=a,t=d(r=>r.crmUsers.data.rolesList);D.length=0,t.forEach(r=>{D.push({label:r.roleName,value:r.id})});const l=[{label:"active",value:"active"},{label:"inactive",value:"inactive"}];return e.jsxs(e.Fragment,{children:[e.jsx(w,{label:"First Name",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"firstName",component:N,prefix:e.jsx(B,{className:"text-xl"})})}),e.jsx(w,{label:"Last Name",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"lastName",component:N,prefix:e.jsx(B,{className:"text-xl"})})}),e.jsx(w,{label:"Email",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"email",component:N,prefix:e.jsx(he,{className:"text-xl"})})}),e.jsx(w,{label:"Phone",children:e.jsx(I,{disabled:!0,type:"text",autoComplete:"off",name:"phone",component:N,prefix:e.jsx(fe,{className:"text-xl"})})}),e.jsx(w,{label:"Role",invalid:s.roleId&&m.roleId,errorMessage:s.roleId,children:e.jsx(Y,{name:"roleId",id:"roleId",value:D.find(r=>(r==null?void 0:r.value)===(c==null?void 0:c.roleId)),options:D,onChange:r=>{i("roleId",r.value||"")}})}),e.jsx(w,{label:"Status",invalid:s.status&&m.status,errorMessage:s.status,children:e.jsx(Y,{name:"status",id:"status",value:l.find(r=>(r==null?void 0:r.value)===(c==null?void 0:c.status)),options:l,onChange:r=>{i("status",r.value||"")}})})]})},we=pe().shape({firstName:C().required("First name is required"),lastName:C().required("Last name is required"),email:C().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,"Invalid email").required("Email is required"),phone:C().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Phone is required"),status:C().required("Status is required").oneOf(["active","inactive"]),roleId:C().required("Role is required").test("is-valid-role","Invalid role selected",a=>!!D.find(m=>m.value==a))}),{TabNav:Ce,TabList:ye,TabContent:Ne}=W,Q=x.forwardRef((a,m)=>{const s=d(t=>t.crmUsers.data.selectedUser),i=d(t=>t.crmUsers.data.drawerMode),c=y();return e.jsx(me,{innerRef:m,initialValues:{firstName:i==="Edit"&&(s==null?void 0:s.firstName)||"",lastName:i==="Edit"&&(s==null?void 0:s.lastName)||"",email:i==="Edit"&&(s==null?void 0:s.email)||"",phone:i==="Edit"&&(s==null?void 0:s.phone)||"",status:i==="Add"?"inactive":(s==null?void 0:s.status)||"",roleId:i==="Edit"&&(s==null?void 0:s.roleId)||""},validationSchema:we,onSubmit:async(t,{setSubmitting:l})=>{var r,u,b;if(i==="Edit"){const p=await c(_({id:s.id,data:t}));(r=p==null?void 0:p.payload)!=null&&r.success?E.push(e.jsx(F,{title:"Successfully Update",type:"success",duration:2500,children:(u=p==null?void 0:p.payload)==null?void 0:u.message}),{placement:"top-end"}):E.push(e.jsx(F,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(b=p==null?void 0:p.error)==null?void 0:b.message}),{placement:"top-end"}),c(L()),await c($()),await c(H())}l(!1)},children:({touched:t,errors:l,setFieldValue:r,values:u})=>e.jsx(de,{children:e.jsx(ce,{children:e.jsxs(W,{defaultValue:"usersInfo",children:[e.jsx(ye,{children:e.jsx(Ce,{value:"usersInfo",children:"Users Info"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ne,{value:"usersInfo",children:e.jsx(je,{touched:t,errors:l,setFieldValue:r,values:u})})})]})})})})});Q.displayName="UsersForm";const G=x.forwardRef((a,m)=>{const s=y(),i=d(r=>r.crmUsers.data.selectedUser),c=d(r=>r.crmUsers.data.usersList),{id:t}=i,l=r=>{const{name:u,birthday:b,email:p,img:v,location:g,title:T,phoneNumber:k,facebook:q,twitter:R,pinterest:M,linkedIn:A}=r,n={name:u,email:p,img:v},o={location:g,title:T,birthday:X(b).format("DD/MM/YYYY"),phoneNumber:k,facebook:q,twitter:R,pinterest:M,linkedIn:A};let h=U(c),j={};h=h.map(f=>(f.id===t&&(f={...f,...n},f.personalInfo={...f.personalInfo,...o},j=f),f)),le(j)||s(_(j)),s(L()),s(se(h))};return e.jsx(Q,{ref:m,users:i,onFormSubmit:l})});G.displayName="UsersEditContent";const De=({onSaveClick:a,onCancel:m})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(P,{size:"sm",className:"mr-2",onClick:m,children:"Cancel"}),e.jsx(P,{size:"sm",variant:"solid",onClick:a,children:"Save"})]}),Ue=()=>{const a=y(),m=d(t=>t.crmUsers.data.drawerOpen);d(t=>t.crmUsers.data.drawerMode),d(t=>t.crmUsers.data.selectedUser);const s=()=>{a(L()),a(z({}))},i=x.useRef(null),c=async()=>{var t,l;(t=i.current)==null||t.values,(l=i.current)==null||l.submitForm()};return e.jsx(ne,{isOpen:m,closable:!1,bodyClass:"p-0",footer:e.jsx(De,{onCancel:s,onSaveClick:c}),onClose:s,onRequestClose:s,children:e.jsx(G,{ref:i})})},ve=()=>{const a=y(),m=d(t=>t.crmUsers.data.deleteConfirmation),s=d(t=>t.crmUsers.data.selectedUser),i=()=>{a(O(!1))},c=async()=>{var l,r,u;a(O(!1));const t=await a(ae(s.id));(l=t==null?void 0:t.payload)!=null&&l.success?E.push(e.jsx(F,{title:"Successfuly Deleted",type:"success",duration:2500,children:(r=t==null?void 0:t.payload)==null?void 0:r.message}),{placement:"top-end"}):(E.push(e.jsx(F,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=t==null?void 0:t.error)==null?void 0:u.message}),{placement:"top-end"}),await a($()),await a(H()))};return e.jsx(ge,{isOpen:m,type:"danger",title:"Delete User",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:c,children:e.jsx("p",{children:"Are you sure you want to delete this user? All record related to this user will be deleted as well. This action cannot be undone."})})},Ie=({status:a})=>{switch(a){case"active":return e.jsx(V,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded",children:"Active"});case"inactive":return e.jsx(V,{className:"text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded",children:"Inactive"});default:return e.jsx(e.Fragment,{})}},Se=()=>{const a=y(),m=d(n=>n.crmUsers.data.displayedUsersList),s=d(n=>n.crmUsers.data.loading);d(n=>n.crmUsers.data.filterData);const i=d(n=>n.crmUsers.data.rolesList),c=Z("users","canModify"),t=Z("users","canDelete");x.useEffect(()=>{async function n(){await a(xe())}n()},[a]);const{pageIndex:l,pageSize:r,sort:u,query:b,total:p}=d(n=>n.crmUsers.data.tableData),v=x.useCallback(()=>{a($())},[a]);x.useEffect(()=>{v()},[v]);const g=x.useMemo(()=>({pageIndex:l,pageSize:r,sort:u,query:b,total:p}),[l,r,u,b,p]),T=({row:n})=>{const{textTheme:o}=K(),h=()=>{a(re()),a(z(n)),a(oe("Edit"))};return e.jsx("div",{className:`${o} cursor-pointer select-none font-semibold`,onClick:h,children:"Edit"})},k=({row:n})=>{const{textTheme:o}=K(),h=async()=>{await a(z(n)),a(O(!0))};return e.jsx("div",{className:`${o} cursor-pointer select-none font-semibold text-red-500`,onClick:h,children:"Delete"})},q=x.useMemo(()=>{const n=[{header:"First Name",accessorKey:"firstName",cell:o=>o.row.original.firstName},{header:"Last Name",accessorKey:"lastName",cell:o=>o.row.original.lastName},{header:"Role",accessorKey:"role",cell:o=>{var j;return((j=i==null?void 0:i.find(f=>(f==null?void 0:f.id)===(o==null?void 0:o.row.original.roleId)))==null?void 0:j.roleName)||"-"}},{header:"Email",accessorKey:"email",cell:o=>o.row.original.email},{header:"Phone",accessorKey:"phone",cell:o=>o.row.original.phone},{header:"Status",accessorKey:"status",cell:o=>{const h=o.row.original;return e.jsx(Ie,{status:h.status})}}];return t&&n.unshift({header:"Delete",id:"delete",cell:o=>e.jsx(k,{row:o.row.original})}),c&&n.unshift({header:"Edit",id:"action",cell:o=>e.jsx(T,{row:o.row.original})}),n},[c,t,i]),R=n=>{const o=U(g);o.pageIndex=n,a(S(o))},M=n=>{const o=U(g);o.pageSize=Number(n),o.pageIndex=1,a(S(o))},A=n=>{const o=U(g);o.sort=n,a(S(o))};return e.jsxs("div",{children:[e.jsx(te,{columns:q,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:s,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:R,onSelectChange:M,onSort:A}),e.jsx(Ue,{}),e.jsx(ve,{})]})},J=x.forwardRef((a,m)=>{const{onInputChange:s}=a,i=be(c,500);function c(l){s==null||s(l)}const t=l=>{i(l.target.value)};return e.jsx(N,{ref:m,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(ue,{className:"text-lg"}),onChange:t})});J.displayName="UsersTableSearch";const Ee=()=>{const a=y(),m=x.useRef(null),s=d(t=>t.crmUsers.data.tableData),i=t=>{const l=U(s);l.query=t,l.pageIndex=1,typeof t=="string"&&t.length>1&&c(l),typeof t=="string"&&t.length===0&&c(l)},c=t=>{a(S(t))};return e.jsx("div",{className:"md:flex items-center justify-between",children:e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(J,{ref:m,onInputChange:i})})})};ee("crmUsers",ie);const es=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ee,{}),e.jsx(Se,{})]});export{es as default};
