import{a as v,j as e,r as w,u as me,p as Ce,aq as Ne}from"./index-8f180057.js";import{D as De}from"./DataTable-3741aea2.js";import{u as V}from"./checkEditUpdate-a2ffee2c.js";import{c as A}from"./cloneDeep-1f39f070.js";import{Q as Se,O as ve,P as Ie,b as Me}from"./index.esm-d559b7a8.js";import{u as C,t as q,d as ke,g as P,f as Fe,p as ue,s as z,a as Te,b as U,c as Ae,e as O,h as fe,i as he,r as Pe}from"./index-3b8a1740.js";import{t as H,N as L}from"./toast-d4a23693.js";import{C as Ee}from"./ConfirmDialog-aae1170e.js";import{B as Y}from"./Button-9a124664.js";import{D as Oe}from"./Drawer-9e2f40a2.js";import{i as Ve}from"./Views-0f0dd1b0.js";import{a as de,F as qe}from"./FormItem-6da989b2.js";import{T as xe}from"./index-19730294.js";import{u as ze,b as pe,F as Ue,a as He}from"./formik.esm-23c950a3.js";import{c as ge,a as je}from"./index.esm-f2cf7456.js";import{I as ye}from"./Input-80948cc5.js";/* empty css              */import{S as Le}from"./Switcher-b15fc15a.js";import{n as k,o as F}from"./index.esm-7da1e9bd.js";import"./Alert-26b93c15.js";import"./index-50da1f05.js";import"./Badge-da9b4bac.js";import"./RangeCalendar-4f882c48.js";import"./Card-c08b3dc7.js";import"./index-467c57d1.js";import"./index-f90d0a46.js";import"./Dialog-00762d81.js";import"./index-57f971c2.js";import"./toString-6546c1f5.js";import"./index-c14dd8b2.js";import"./index-7419ce87.js";import"./index-8db80fc8.js";import"./Pagination-02ddc899.js";import"./Progress-4aad2981.js";import"./index-f1c49e5c.js";import"./ScrollBar-cc732ada.js";import"./index-5c4aebcf.js";import"./Select-b8e32f8a.js";import"./Skeleton-a652bf9f.js";import"./index-3ad4fd06.js";import"./index-68091566.js";import"./Tag-f078f978.js";import"./index-04594492.js";import"./index-f2e93cf2.js";import"./Tooltip-c46cdf61.js";import"./Upload-5d1aec4a.js";import{d as Ye}from"./debounce-82d29265.js";import"./index-9a956df5.js";import"./moment-fbc5633a.js";import"./_MapCache-c801105a.js";import"./_getPrototype-6ef2344b.js";import"./CrmService-4ead0dba.js";import"./useTimeout-6ce9cc18.js";import"./CloseButton-f457d2a5.js";import"./StatusIcon-af9b884d.js";import"./chainedFunction-070f832c.js";import"./index-21bd03ca.js";import"./index-56b40026.js";import"./useControllableState-a20a08a7.js";import"./isNil-7f5c5bc3.js";import"./get-49349d76.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-f757163a.js";import"./useRootClose-849d9b9c.js";import"./usePopper-4f231cdc.js";import"./TimeInput-a4c2e8c8.js";import"./useUniqueId-b6b18158.js";import"./useDidUpdate-6bcd31b9.js";import"./useUncertainRef-cd8eb299.js";import"./slicedToArray-4e770983.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-10fd47e9.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-4d24a9a7.js";import"./index.esm-047fe164.js";import"./index.esm-e628df3b.js";const $e=()=>{const s=v(),p=C(a=>a.crmRoles.data.deleteConfirmation),u=C(a=>a.crmRoles.data.selectedRole),f=()=>{s(q(!1))},l=async()=>{var m,t,j;s(q(!1));const a=await s(ke(u.id));await s(P()),(m=a==null?void 0:a.payload)!=null&&m.success?(H.push(e.jsx(L,{title:"Successfuly Deleted",type:"success",duration:2500,children:(t=a==null?void 0:a.payload)==null?void 0:t.message}),{placement:"top-end"}),await s(P())):(H.push(e.jsx(L,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(j=a==null?void 0:a.error)==null?void 0:j.message}),{placement:"top-end"}),await s(P()))};return e.jsx(Ee,{isOpen:p,type:"danger",title:"Delete Role",confirmButtonColor:"red-600",onClose:f,onRequestClose:f,onCancel:f,onConfirm:l,children:e.jsx("p",{children:"Are you sure you want to delete this role? All record related to this role will be deleted as well. This action cannot be undone."})})},T=({value:s,onClick:p,greenIcon:u,grayIcon:f,canPermission:l})=>e.jsx("td",{className:"px-4 py-2 text-center",children:e.jsx("div",{className:`${l?" border-blue-600":" border-red-300"} rounded-full p-2 cursor-pointer flex justify-center items-center`,onClick:p,children:l?u:f})}),Be=s=>{const{roles:p,drawerMode:u,errors:f,touched:l}=s,a=v(),[m,t]=w.useState([]),[j,D]=w.useState([]),i=ze();w.useEffect(()=>{async function x(){var o;try{const d=await a(Fe()),r=(o=d==null?void 0:d.payload)==null?void 0:o.data.map(h=>({masterId:h.id,canCreate:!1,canModify:!1,canView:!1,canDelete:!1,canManage:!1}));u==="Edit"&&p&&Array.isArray(p.rolePermissions)&&[...p.rolePermissions].sort((n,c)=>n.masterId-c.masterId).forEach(n=>{const c=r.findIndex(S=>S.masterId===n.masterId);c!==-1&&(r[c]=n)}),i.setFieldValue("modules",r),D(r),t(d.payload.data)}catch(d){console.error("Error fetching modules:",d)}}x()},[a]),ge().shape({rolename:je().required("Role Name is required")});const g=(x,o,d,r)=>{const h=JSON.parse(JSON.stringify(i.values.modules));if(o!=="canManage")h[r][o]=d,h[r].canManage=h[r].canCreate&&h[r].canModify&&h[r].canView&&h[r].canDelete;else{const n={canManage:d,canCreate:d,canModify:d,canView:d,canDelete:d,masterId:x};h[r]=n}i.setFieldValue("modules",h)};return e.jsxs(e.Fragment,{children:[e.jsx(de,{label:"Role Name",invalid:f.roleName&&l.roleName,errorMessage:f.roleName,children:e.jsx(pe,{type:"text",autoComplete:"off",name:"roleName",placeholder:"Role Name",component:ye,prefix:e.jsx(Se,{className:"text-xl"})})}),e.jsx(de,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"System Role"}),e.jsx(pe,{autoComplete:"off",name:"isSystem",component:Le,checked:i.values.isSystem})]})}),e.jsxs("table",{className:"w-full border-collapse ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"px-4 py-2 text-center",children:"Module"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"All"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Read"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Write"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Update"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Delete"})]})}),e.jsx("tbody",{children:m==null?void 0:m.map((x,o)=>{var d,r,h,n,c,S,E,I,M,N,$,B,W,J,K,_,Q,G,X,Z,ee,se,te,ae,oe,re,le,ne,ce,ie;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-center",children:x==null?void 0:x.moduleName.toUpperCase()}),e.jsx(T,{value:(h=(r=(d=i.values)==null?void 0:d.modules)==null?void 0:r[o])==null?void 0:h.canManage,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(S=(c=(n=i.values)==null?void 0:n.modules)==null?void 0:c[o])==null?void 0:S.canManage,onClick:()=>{var y,R,b;return g(x.id,"canManage",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canManage),o)}}),e.jsx(T,{value:(M=(I=(E=i.values)==null?void 0:E.modules)==null?void 0:I[o])==null?void 0:M.canView,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(B=($=(N=i.values)==null?void 0:N.modules)==null?void 0:$[o])==null?void 0:B.canView,onClick:()=>{var y,R,b;return g(x.id,"canView",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canView),o)}}),e.jsx(T,{value:(K=(J=(W=i.values)==null?void 0:W.modules)==null?void 0:J[o])==null?void 0:K.canCreate,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(G=(Q=(_=i.values)==null?void 0:_.modules)==null?void 0:Q[o])==null?void 0:G.canCreate,onClick:()=>{var y,R,b;return g(x.id,"canCreate",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canCreate),o)}}),e.jsx(T,{value:(ee=(Z=(X=i.values)==null?void 0:X.modules)==null?void 0:Z[o])==null?void 0:ee.canModify,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(ae=(te=(se=i.values)==null?void 0:se.modules)==null?void 0:te[o])==null?void 0:ae.canModify,onClick:()=>{var y,R,b;return g(x.id,"canModify",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canModify),o)}}),e.jsx(T,{value:(le=(re=(oe=i.values)==null?void 0:oe.modules)==null?void 0:re[o])==null?void 0:le.canDelete,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(ie=(ce=(ne=i.values)==null?void 0:ne.modules)==null?void 0:ce[o])==null?void 0:ie.canDelete,onClick:()=>{var y,R,b;return g(x.id,"canDelete",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canDelete),o)}})]},o)})})]})]})},We=ge().shape({roleName:je().required("Role Name is required")}),{TabNav:Je,TabList:Ke,TabContent:_e}=xe,Re=w.forwardRef((s,p)=>{const[u,f]=w.useState([]);v();const l=me(m=>m.crmRoles.data.selectedRole),a=me(m=>m.crmRoles.data.drawerMode);return e.jsx(Ue,{innerRef:p,initialValues:{roleName:a==="Edit"&&(l==null?void 0:l.roleName)||"",isSystem:a==="Edit"&&(l==null?void 0:l.isSystem)||!1,isDefault:(l==null?void 0:l.isDefault)||!1,modules:u},validationSchema:We,onSubmit:(m,{setSubmitting:t})=>{t(!1)},children:({touched:m,errors:t})=>e.jsx(He,{children:e.jsx(qe,{children:e.jsxs(xe,{defaultValue:"roles",children:[e.jsx(Ke,{children:e.jsx(Je,{value:"roles",children:"Role Form"})}),e.jsx("div",{className:"p-6",children:e.jsx(_e,{value:"roles",children:e.jsx(Be,{touched:m,errors:t,roles:l,drawerMode:a})})})]})})})})});Re.displayName="RolesForm";const be=w.forwardRef((s,p)=>{const u=v(),f=C(t=>t.crmRoles.data.selectedRole),l=C(t=>t.crmRoles.data.rolesList),{id:a}=f,m=t=>{const{name:j,birthday:D,email:i,img:g,location:x,title:o,phoneNumber:d,facebook:r,twitter:h,pinterest:n,linkedIn:c}=t,S={name:j,email:i,img:g},E={location:x,title:o,birthday:Ce(D).format("DD/MM/YYYY"),phoneNumber:d,facebook:r,twitter:h,pinterest:n,linkedIn:c};let I=A(l),M={};I=I.map(N=>(N.id===a&&(N={...N,...S},N.personalInfo={...N.personalInfo,...E},M=N),N)),Ve(M)||u(ue(M)),u(z()),u(Te(I))};return e.jsx(Re,{ref:p,roles:f,onFormSubmit:m})});be.displayName="RolesEditContent";const Qe=({onSaveClick:s,onCancel:p})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(Y,{size:"sm",className:"mr-2",onClick:p,children:"Cancel"}),e.jsx(Y,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ge=()=>{const s=v(),p=C(t=>t.crmRoles.data.drawerOpen),u=C(t=>t.crmRoles.data.drawerMode),f=C(t=>t.crmRoles.data.selectedRole),l=()=>{s(z()),s(U({}))},a=w.useRef(null),m=async()=>{var t,j,D,i,g,x;if((t=a.current)==null||t.submitForm(),Object.keys(a.current.errors).length===0){const o=(j=a.current)==null?void 0:j.values,d=u==="ADD",r=d?await s(Ae(o)):await s(ue({id:f.id,data:o})),h=(D=r==null?void 0:r.payload)!=null&&D.success?d?"Successfully Added":"Successfully Updated":"Something went wrong !!!",n=(i=r==null?void 0:r.payload)!=null&&i.success?"success":"danger",c=((g=r==null?void 0:r.payload)==null?void 0:g.message)||((x=r==null?void 0:r.error)==null?void 0:x.message);H.push(e.jsx(L,{title:h,type:n,duration:2500,children:c}),{placement:"top-end"}),s(z()),await s(P())}};return e.jsx(Oe,{isOpen:p,closable:!1,bodyClass:"p-0",footer:e.jsx(Qe,{onCancel:l,onSaveClick:m}),width:600,onClose:l,onRequestClose:l,children:e.jsx(be,{ref:a})})},Xe=()=>{const s=v(),p=C(n=>n.crmRoles.data.displayedRolesList),u=C(n=>n.crmRoles.data.loading),f=V("roles","canModify"),l=V("roles","canDelete"),{pageIndex:a,pageSize:m,sort:t,query:j,total:D}=C(n=>n.crmRoles.data.tableData),i=w.useCallback(()=>{s(P())},[s]);w.useEffect(()=>{i()},[i]);const g=w.useMemo(()=>({pageIndex:a,pageSize:m,sort:t,query:j,total:D}),[a,m,t,j,D]),x=({row:n})=>{const c=()=>{s(fe()),s(U(n)),s(he("Edit"))},S=async()=>{await s(U(n)),s(q(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[f&&e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:c,children:e.jsx(ve,{})}),l&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:S,children:e.jsx(Ie,{})})]})},o=w.useMemo(()=>[{header:"Action",id:"action",cell:c=>e.jsx(x,{row:c.row.original})},{header:"Role Name",accessorKey:"roleName",cell:c=>c.row.original.roleName},{header:"System",accessorKey:"isSystem",cell:c=>c.row.original.isSystem.toString()}],[f,l]),d=n=>{const c=A(g);c.pageIndex=n,s(O(c))},r=n=>{const c=A(g);c.pageSize=Number(n),c.pageIndex=1,s(O(c))},h=n=>{const c=A(g);c.sort=n,s(O(c))};return e.jsxs("div",{children:[e.jsx(De,{columns:o,data:p,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:u,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:d,onSelectChange:r,onSort:h}),e.jsx(Ge,{}),e.jsx($e,{})]})},we=w.forwardRef((s,p)=>{const{onInputChange:u}=s,f=Ye(l,500);function l(m){u==null||u(m)}const a=m=>{f(m.target.value)};return e.jsx(ye,{ref:p,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Me,{className:"text-lg"}),onChange:a})});we.displayName="RolesTableSearch";const Ze=()=>{const s=v(),p=w.useRef(null),u=C(t=>t.crmRoles.data.tableData),f=V("roles","canCreate"),l=t=>{const j=A(u);j.query=t,j.pageIndex=1,typeof t=="string"&&t.length>1&&a(j),typeof t=="string"&&t.length===0&&a(j)},a=t=>{s(O(t))},m=()=>{s(fe()),s(he("ADD"))};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(we,{ref:p,onInputChange:l})}),e.jsx("div",{className:"mb-4",children:f&&e.jsx(Y,{size:"sm",onClick:m,children:"Add New"})})]})};Ne("crmRoles",Pe);const wt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(Xe,{})]});export{wt as default};
