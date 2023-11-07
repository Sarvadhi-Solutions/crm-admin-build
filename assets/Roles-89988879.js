import{a as v,j as e,r as w,u as me,p as Ce,aq as Ne}from"./index-73cb1959.js";import{D as De}from"./DataTable-9018ed06.js";import{u as V}from"./checkEditUpdate-1bf03468.js";import{c as A}from"./cloneDeep-c6478499.js";import{Q as Se,O as ve,P as Ie,b as Me}from"./index.esm-34e42eb1.js";import{u as C,t as q,d as ke,g as P,f as Fe,p as ue,s as z,a as Te,b as U,c as Ae,e as O,h as fe,i as he,r as Pe}from"./index-7e24fe81.js";import{t as H,N as L}from"./toast-bab5eba8.js";import{C as Ee}from"./ConfirmDialog-6d3df380.js";import{B as Y}from"./Button-82c5fc13.js";import{D as Oe}from"./Drawer-6b3fb925.js";import{i as Ve}from"./Views-1a070c40.js";import{a as de,F as qe}from"./FormItem-683038f1.js";import{T as xe}from"./index-1a1c9381.js";import{u as ze,b as pe,F as Ue,a as He}from"./formik.esm-9daa4f0b.js";import{c as ge,a as je}from"./index.esm-6a9eb370.js";import{I as ye}from"./Input-94395b64.js";/* empty css              */import{S as Le}from"./Switcher-63080533.js";import{n as k,o as F}from"./index.esm-1744631e.js";import"./Alert-be53f522.js";import"./index-506e859c.js";import"./Badge-7e3a0ab9.js";import"./RangeCalendar-9ead86f1.js";import"./Card-5918977c.js";import"./index-bae763ad.js";import"./index-0db63fa9.js";import"./Dialog-7e00fbdb.js";import"./index-d091c6c9.js";import"./toString-efa3a161.js";import"./index-916791ae.js";import"./index-f5cac996.js";import"./index-d69fea9b.js";import"./Pagination-5f3f78f5.js";import"./Progress-c1343918.js";import"./index-861ad84f.js";import"./ScrollBar-8d164a85.js";import"./index-9de00c5a.js";import"./Select-1ca4d494.js";import"./Skeleton-4e8b7c45.js";import"./index-b4da4bb8.js";import"./index-166bab37.js";import"./Tag-b3c23aa5.js";import"./index-37a0566d.js";import"./index-87f17783.js";import"./Tooltip-e3398fbe.js";import"./Upload-7df87eab.js";import{d as Ye}from"./debounce-1026a6a8.js";import"./index-317e7a8f.js";import"./moment-fbc5633a.js";import"./_MapCache-a87f2f55.js";import"./_getPrototype-ea940500.js";import"./CrmService-1e373a7c.js";import"./useTimeout-fead5ad4.js";import"./CloseButton-74de3acc.js";import"./StatusIcon-ae85fea2.js";import"./chainedFunction-070f832c.js";import"./index-231256d3.js";import"./index-0e3f2f4d.js";import"./useControllableState-a06891a2.js";import"./isNil-ba009e51.js";import"./get-3f58d147.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-9b92f349.js";import"./useRootClose-f50c45ad.js";import"./usePopper-c57b254a.js";import"./TimeInput-d5af0efc.js";import"./useUniqueId-c8213503.js";import"./useDidUpdate-da253f73.js";import"./useUncertainRef-c42b7867.js";import"./slicedToArray-e9b2da21.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-59d37542.js";import"./floating-ui.dom-4bc0055b.js";import"./mapCloneElement-0d3d04c8.js";import"./index.esm-9c9dc579.js";import"./index.esm-a3d1253b.js";const $e=()=>{const s=v(),p=C(a=>a.crmRoles.data.deleteConfirmation),u=C(a=>a.crmRoles.data.selectedRole),f=()=>{s(q(!1))},l=async()=>{var m,t,j;s(q(!1));const a=await s(ke(u.id));await s(P()),(m=a==null?void 0:a.payload)!=null&&m.success?(H.push(e.jsx(L,{title:"Successfuly Deleted",type:"success",duration:2500,children:(t=a==null?void 0:a.payload)==null?void 0:t.message}),{placement:"top-end"}),await s(P())):(H.push(e.jsx(L,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(j=a==null?void 0:a.error)==null?void 0:j.message}),{placement:"top-end"}),await s(P()))};return e.jsx(Ee,{isOpen:p,type:"danger",title:"Delete Role",confirmButtonColor:"red-600",onClose:f,onRequestClose:f,onCancel:f,onConfirm:l,children:e.jsx("p",{children:"Are you sure you want to delete this role? All record related to this role will be deleted as well. This action cannot be undone."})})},T=({value:s,onClick:p,greenIcon:u,grayIcon:f,canPermission:l})=>e.jsx("td",{className:"px-4 py-2 text-center",children:e.jsx("div",{className:`${l?" border-blue-600":" border-red-300"} rounded-full p-2 cursor-pointer flex justify-center items-center`,onClick:p,children:l?u:f})}),Be=s=>{const{roles:p,drawerMode:u,errors:f,touched:l}=s,a=v(),[m,t]=w.useState([]),[j,D]=w.useState([]),i=ze();w.useEffect(()=>{async function x(){var o;try{const d=await a(Fe()),r=(o=d==null?void 0:d.payload)==null?void 0:o.data.map(h=>({masterId:h.id,canCreate:!1,canModify:!1,canView:!1,canDelete:!1,canManage:!1}));u==="Edit"&&p&&Array.isArray(p.rolePermissions)&&[...p.rolePermissions].sort((n,c)=>n.masterId-c.masterId).forEach(n=>{const c=r.findIndex(S=>S.masterId===n.masterId);c!==-1&&(r[c]=n)}),i.setFieldValue("modules",r),D(r),t(d.payload.data)}catch(d){console.error("Error fetching modules:",d)}}x()},[a]),ge().shape({rolename:je().required("Role Name is required")});const g=(x,o,d,r)=>{const h=JSON.parse(JSON.stringify(i.values.modules));if(o!=="canManage")h[r][o]=d,h[r].canManage=h[r].canCreate&&h[r].canModify&&h[r].canView&&h[r].canDelete;else{const n={canManage:d,canCreate:d,canModify:d,canView:d,canDelete:d,masterId:x};h[r]=n}i.setFieldValue("modules",h)};return e.jsxs(e.Fragment,{children:[e.jsx(de,{label:"Role Name",invalid:f.roleName&&l.roleName,errorMessage:f.roleName,children:e.jsx(pe,{type:"text",autoComplete:"off",name:"roleName",placeholder:"Role Name",component:ye,prefix:e.jsx(Se,{className:"text-xl"})})}),e.jsx(de,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"System Role"}),e.jsx(pe,{autoComplete:"off",name:"isSystem",component:Le,checked:i.values.isSystem})]})}),e.jsxs("table",{className:"w-full border-collapse ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"px-4 py-2 text-center",children:"Module"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"All"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Read"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Write"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Update"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Delete"})]})}),e.jsx("tbody",{children:m==null?void 0:m.map((x,o)=>{var d,r,h,n,c,S,E,I,M,N,$,B,W,J,K,_,Q,G,X,Z,ee,se,te,ae,oe,re,le,ne,ce,ie;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-center",children:x==null?void 0:x.moduleName.toUpperCase()}),e.jsx(T,{value:(h=(r=(d=i.values)==null?void 0:d.modules)==null?void 0:r[o])==null?void 0:h.canManage,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(S=(c=(n=i.values)==null?void 0:n.modules)==null?void 0:c[o])==null?void 0:S.canManage,onClick:()=>{var y,R,b;return g(x.id,"canManage",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canManage),o)}}),e.jsx(T,{value:(M=(I=(E=i.values)==null?void 0:E.modules)==null?void 0:I[o])==null?void 0:M.canView,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(B=($=(N=i.values)==null?void 0:N.modules)==null?void 0:$[o])==null?void 0:B.canView,onClick:()=>{var y,R,b;return g(x.id,"canView",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canView),o)}}),e.jsx(T,{value:(K=(J=(W=i.values)==null?void 0:W.modules)==null?void 0:J[o])==null?void 0:K.canCreate,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(G=(Q=(_=i.values)==null?void 0:_.modules)==null?void 0:Q[o])==null?void 0:G.canCreate,onClick:()=>{var y,R,b;return g(x.id,"canCreate",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canCreate),o)}}),e.jsx(T,{value:(ee=(Z=(X=i.values)==null?void 0:X.modules)==null?void 0:Z[o])==null?void 0:ee.canModify,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(ae=(te=(se=i.values)==null?void 0:se.modules)==null?void 0:te[o])==null?void 0:ae.canModify,onClick:()=>{var y,R,b;return g(x.id,"canModify",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canModify),o)}}),e.jsx(T,{value:(le=(re=(oe=i.values)==null?void 0:oe.modules)==null?void 0:re[o])==null?void 0:le.canDelete,greenIcon:e.jsx(k,{className:"text-blue-600"}),grayIcon:e.jsx(F,{className:"text-red-500"}),canPermission:(ie=(ce=(ne=i.values)==null?void 0:ne.modules)==null?void 0:ce[o])==null?void 0:ie.canDelete,onClick:()=>{var y,R,b;return g(x.id,"canDelete",!((b=(R=(y=i.values)==null?void 0:y.modules)==null?void 0:R[o])!=null&&b.canDelete),o)}})]},o)})})]})]})},We=ge().shape({roleName:je().required("Role Name is required")}),{TabNav:Je,TabList:Ke,TabContent:_e}=xe,Re=w.forwardRef((s,p)=>{const[u,f]=w.useState([]);v();const l=me(m=>m.crmRoles.data.selectedRole),a=me(m=>m.crmRoles.data.drawerMode);return e.jsx(Ue,{innerRef:p,initialValues:{roleName:a==="Edit"&&(l==null?void 0:l.roleName)||"",isSystem:a==="Edit"&&(l==null?void 0:l.isSystem)||!1,isDefault:(l==null?void 0:l.isDefault)||!1,modules:u},validationSchema:We,onSubmit:(m,{setSubmitting:t})=>{t(!1)},children:({touched:m,errors:t})=>e.jsx(He,{children:e.jsx(qe,{children:e.jsxs(xe,{defaultValue:"roles",children:[e.jsx(Ke,{children:e.jsx(Je,{value:"roles",children:"Role Form"})}),e.jsx("div",{className:"p-6",children:e.jsx(_e,{value:"roles",children:e.jsx(Be,{touched:m,errors:t,roles:l,drawerMode:a})})})]})})})})});Re.displayName="RolesForm";const be=w.forwardRef((s,p)=>{const u=v(),f=C(t=>t.crmRoles.data.selectedRole),l=C(t=>t.crmRoles.data.rolesList),{id:a}=f,m=t=>{const{name:j,birthday:D,email:i,img:g,location:x,title:o,phoneNumber:d,facebook:r,twitter:h,pinterest:n,linkedIn:c}=t,S={name:j,email:i,img:g},E={location:x,title:o,birthday:Ce(D).format("DD/MM/YYYY"),phoneNumber:d,facebook:r,twitter:h,pinterest:n,linkedIn:c};let I=A(l),M={};I=I.map(N=>(N.id===a&&(N={...N,...S},N.personalInfo={...N.personalInfo,...E},M=N),N)),Ve(M)||u(ue(M)),u(z()),u(Te(I))};return e.jsx(Re,{ref:p,roles:f,onFormSubmit:m})});be.displayName="RolesEditContent";const Qe=({onSaveClick:s,onCancel:p})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(Y,{size:"sm",className:"mr-2",onClick:p,children:"Cancel"}),e.jsx(Y,{size:"sm",variant:"solid",onClick:s,children:"Save"})]}),Ge=()=>{const s=v(),p=C(t=>t.crmRoles.data.drawerOpen),u=C(t=>t.crmRoles.data.drawerMode),f=C(t=>t.crmRoles.data.selectedRole),l=()=>{s(z()),s(U({}))},a=w.useRef(null),m=async()=>{var t,j,D,i,g,x;if((t=a.current)==null||t.submitForm(),Object.keys(a.current.errors).length===0){const o=(j=a.current)==null?void 0:j.values,d=u==="ADD",r=d?await s(Ae(o)):await s(ue({id:f.id,data:o})),h=(D=r==null?void 0:r.payload)!=null&&D.success?d?"Successfully Added":"Successfully Updated":"Something went wrong !!!",n=(i=r==null?void 0:r.payload)!=null&&i.success?"success":"danger",c=((g=r==null?void 0:r.payload)==null?void 0:g.message)||((x=r==null?void 0:r.error)==null?void 0:x.message);H.push(e.jsx(L,{title:h,type:n,duration:2500,children:c}),{placement:"top-end"}),s(z()),await s(P())}};return e.jsx(Oe,{isOpen:p,closable:!1,bodyClass:"p-0",footer:e.jsx(Qe,{onCancel:l,onSaveClick:m}),width:600,onClose:l,onRequestClose:l,children:e.jsx(be,{ref:a})})},Xe=()=>{const s=v(),p=C(n=>n.crmRoles.data.displayedRolesList),u=C(n=>n.crmRoles.data.loading),f=V("roles","canModify"),l=V("roles","canDelete"),{pageIndex:a,pageSize:m,sort:t,query:j,total:D}=C(n=>n.crmRoles.data.tableData),i=w.useCallback(()=>{s(P())},[s]);w.useEffect(()=>{i()},[i]);const g=w.useMemo(()=>({pageIndex:a,pageSize:m,sort:t,query:j,total:D}),[a,m,t,j,D]),x=({row:n})=>{const c=()=>{s(fe()),s(U(n)),s(he("Edit"))},S=async()=>{await s(U(n)),s(q(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[f&&e.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:c,children:e.jsx(ve,{})}),l&&e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:S,children:e.jsx(Ie,{})})]})},o=w.useMemo(()=>[{header:"Action",id:"action",cell:c=>e.jsx(x,{row:c.row.original})},{header:"Role Name",accessorKey:"roleName",cell:c=>c.row.original.roleName},{header:"System",accessorKey:"isSystem",cell:c=>c.row.original.isSystem.toString()}],[f,l]),d=n=>{const c=A(g);c.pageIndex=n,s(O(c))},r=n=>{const c=A(g);c.pageSize=Number(n),c.pageIndex=1,s(O(c))},h=n=>{const c=A(g);c.sort=n,s(O(c))};return e.jsxs("div",{children:[e.jsx(De,{columns:o,data:p,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:u,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:d,onSelectChange:r,onSort:h}),e.jsx(Ge,{}),e.jsx($e,{})]})},we=w.forwardRef((s,p)=>{const{onInputChange:u}=s,f=Ye(l,500);function l(m){u==null||u(m)}const a=m=>{f(m.target.value)};return e.jsx(ye,{ref:p,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Me,{className:"text-lg"}),onChange:a})});we.displayName="RolesTableSearch";const Ze=()=>{const s=v(),p=w.useRef(null),u=C(t=>t.crmRoles.data.tableData),f=V("roles","canCreate"),l=t=>{const j=A(u);j.query=t,j.pageIndex=1,typeof t=="string"&&t.length>1&&a(j),typeof t=="string"&&t.length===0&&a(j)},a=t=>{s(O(t))},m=()=>{s(fe()),s(he("ADD"))};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(we,{ref:p,onInputChange:l})}),e.jsx("div",{className:"mb-4",children:f&&e.jsx(Y,{size:"sm",onClick:m,children:"Add New"})})]})};Ne("crmRoles",Pe);const wt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(Xe,{})]});export{wt as default};
