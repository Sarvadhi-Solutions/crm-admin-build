import{a as v,r as R,j as e,u as me,p as Se,aq as Ie}from"./index-59d5b448.js";import{D as Me}from"./DataTable-75ddba9e.js";import{u as fe}from"./useThemeClass-95bae207.js";import{c as F}from"./cloneDeep-aed446a8.js";import{f as ke,u as N,p as he,s as q,a as Fe,b as L,c as Te,g as S,t as B,d as Ae,e as z,h as xe,i as ge,j as je,r as Ee}from"./index-3d1d8db1.js";import{B as $}from"./Button-5fdc8ae1.js";import{D as Pe}from"./Drawer-d20ab55b.js";import{i as Ve}from"./Views-64d17177.js";import{a as de,F as Oe}from"./FormItem-f6244853.js";import{T as ye}from"./index-1356c0b5.js";import{u as qe,b as pe,F as ze,a as $e}from"./formik.esm-b68e401a.js";import{c as be,a as Ce}from"./index.esm-d716c1df.js";import{I as we}from"./Input-231e09c8.js";/* empty css              */import{Q as Be,d as Ue,b as Le}from"./index.esm-000f222a.js";import{S as Ye}from"./Switcher-a1c19d2c.js";import{m as T,n as A}from"./index.esm-ae78bccf.js";import"./Alert-93591860.js";import"./index-a89362ce.js";import{B as Re}from"./Badge-e03d5da2.js";import"./RangeCalendar-2cc8a304.js";import"./Card-5d1a5a32.js";import"./index-eb5fd987.js";import"./index-1e02d165.js";import"./Dialog-a750e519.js";import"./index-61ff5eee.js";import"./toString-7b1fdeb1.js";import"./index-b2ad62b7.js";import"./index-eaede97f.js";import"./index-f7021d30.js";import{t as P,N as V}from"./toast-4fb7070f.js";import"./Pagination-5e980512.js";import"./Progress-a64810cd.js";import"./index-1d5c9077.js";import"./ScrollBar-cea6b53e.js";import"./index-7440612f.js";import{S as He,c as We}from"./Select-ee1aec02.js";import"./Skeleton-d921a7f4.js";import"./index-af92aa08.js";import"./index-c7139f0d.js";import"./Tag-edd7fd18.js";import"./index-8aead059.js";import"./index-5637e944.js";import"./Tooltip-408dc3d5.js";import"./Upload-4e96c616.js";import{C as Je}from"./ConfirmDialog-615c6369.js";import{u as U}from"./checkEditUpdate-547842ef.js";import{d as Ke}from"./debounce-973c358d.js";import"./index-ddf97715.js";import"./_MapCache-e54d9323.js";import"./_getPrototype-f444968c.js";import"./CrmService-a82a4f3a.js";import"./index-72795205.js";import"./CloseButton-d1491053.js";import"./index-0f07cea4.js";import"./useControllableState-51fc22de.js";import"./isNil-4ce6fc45.js";import"./get-7830c53c.js";import"./useTimeout-8dc1031d.js";import"./StatusIcon-9fe83ab5.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-ddd229ac.js";import"./useRootClose-c6fcb0f3.js";import"./usePopper-6c82c939.js";import"./TimeInput-5b439447.js";import"./useUniqueId-f1811c55.js";import"./useDidUpdate-1b514583.js";import"./useUncertainRef-c82b9981.js";import"./chainedFunction-070f832c.js";import"./slicedToArray-cd867625.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-1d5803e7.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-34a4b3d4.js";import"./index.esm-5522ae29.js";import"./index.esm-ee61d82c.js";const E=({value:t,onClick:n,greenIcon:o,grayIcon:r,canPermission:i})=>e.jsx("td",{className:"px-4 py-2 text-center",children:e.jsx("div",{className:`${i?" border-blue-600":" border-red-300"} rounded-full p-2 cursor-pointer flex justify-center items-center`,onClick:n,children:i?o:r})}),_e=t=>{const{roles:n,drawerMode:o,errors:r,touched:i}=t,l=v(),[p,m]=R.useState([]),[u,j]=R.useState([]),d=qe();R.useEffect(()=>{async function x(){var c;try{const f=await l(ke()),h=(c=f==null?void 0:f.payload)==null?void 0:c.data.map(s=>({masterId:s.id,canCreate:!1,canModify:!1,canView:!1,canDelete:!1,canManage:!1}));o==="Edit"&&n&&Array.isArray(n.rolePermissions)&&[...n.rolePermissions].sort((a,w)=>a.masterId-w.masterId).forEach(a=>{const w=h.findIndex(I=>I.masterId===a.masterId);w!==-1&&(h[w]=a)}),d.setFieldValue("modules",h),j(h),m(f.payload.data)}catch(f){console.error("Error fetching modules:",f)}}x()},[l]),be().shape({rolename:Ce().required("Role Name is required")});const g=(x,c,f,h)=>{const s=JSON.parse(JSON.stringify(d.values.modules));if(c!=="canManage")s[h][c]=f,s[h].canManage=s[h].canCreate&&s[h].canModify&&s[h].canView&&s[h].canDelete;else{const a={canManage:f,canCreate:f,canModify:f,canView:f,canDelete:f,masterId:x};s[h]=a}d.setFieldValue("modules",s)};return e.jsxs(e.Fragment,{children:[e.jsx(de,{label:"Role Name",invalid:r.roleName&&i.roleName,errorMessage:r.roleName,children:e.jsx(pe,{type:"text",autoComplete:"off",name:"roleName",placeholder:"Role Name",component:we,prefix:e.jsx(Be,{className:"text-xl"})})}),e.jsx(de,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"System Role"}),e.jsx(pe,{autoComplete:"off",name:"isSystem",component:Ye,checked:d.values.isSystem})]})}),e.jsxs("table",{className:"w-full border-collapse ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"px-4 py-2 text-center",children:"Module"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"All"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Read"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Write"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Update"}),e.jsx("th",{className:"px-4 py-2 w-1/6 text-center",children:"Delete"})]})}),e.jsx("tbody",{children:p==null?void 0:p.map((x,c)=>{var f,h,s,a,w,I,O,M,k,D,Y,H,W,J,K,_,Q,G,X,Z,ee,se,te,ae,oe,re,le,ne,ce,ie;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-center",children:x==null?void 0:x.moduleName.toUpperCase()}),e.jsx(E,{value:(s=(h=(f=d.values)==null?void 0:f.modules)==null?void 0:h[c])==null?void 0:s.canManage,greenIcon:e.jsx(T,{className:"text-blue-600"}),grayIcon:e.jsx(A,{className:"text-red-500"}),canPermission:(I=(w=(a=d.values)==null?void 0:a.modules)==null?void 0:w[c])==null?void 0:I.canManage,onClick:()=>{var y,b,C;return g(x.id,"canManage",!((C=(b=(y=d.values)==null?void 0:y.modules)==null?void 0:b[c])!=null&&C.canManage),c)}}),e.jsx(E,{value:(k=(M=(O=d.values)==null?void 0:O.modules)==null?void 0:M[c])==null?void 0:k.canView,greenIcon:e.jsx(T,{className:"text-blue-600"}),grayIcon:e.jsx(A,{className:"text-red-500"}),canPermission:(H=(Y=(D=d.values)==null?void 0:D.modules)==null?void 0:Y[c])==null?void 0:H.canView,onClick:()=>{var y,b,C;return g(x.id,"canView",!((C=(b=(y=d.values)==null?void 0:y.modules)==null?void 0:b[c])!=null&&C.canView),c)}}),e.jsx(E,{value:(K=(J=(W=d.values)==null?void 0:W.modules)==null?void 0:J[c])==null?void 0:K.canCreate,greenIcon:e.jsx(T,{className:"text-blue-600"}),grayIcon:e.jsx(A,{className:"text-red-500"}),canPermission:(G=(Q=(_=d.values)==null?void 0:_.modules)==null?void 0:Q[c])==null?void 0:G.canCreate,onClick:()=>{var y,b,C;return g(x.id,"canCreate",!((C=(b=(y=d.values)==null?void 0:y.modules)==null?void 0:b[c])!=null&&C.canCreate),c)}}),e.jsx(E,{value:(ee=(Z=(X=d.values)==null?void 0:X.modules)==null?void 0:Z[c])==null?void 0:ee.canModify,greenIcon:e.jsx(T,{className:"text-blue-600"}),grayIcon:e.jsx(A,{className:"text-red-500"}),canPermission:(ae=(te=(se=d.values)==null?void 0:se.modules)==null?void 0:te[c])==null?void 0:ae.canModify,onClick:()=>{var y,b,C;return g(x.id,"canModify",!((C=(b=(y=d.values)==null?void 0:y.modules)==null?void 0:b[c])!=null&&C.canModify),c)}}),e.jsx(E,{value:(le=(re=(oe=d.values)==null?void 0:oe.modules)==null?void 0:re[c])==null?void 0:le.canDelete,greenIcon:e.jsx(T,{className:"text-blue-600"}),grayIcon:e.jsx(A,{className:"text-red-500"}),canPermission:(ie=(ce=(ne=d.values)==null?void 0:ne.modules)==null?void 0:ce[c])==null?void 0:ie.canDelete,onClick:()=>{var y,b,C;return g(x.id,"canDelete",!((C=(b=(y=d.values)==null?void 0:y.modules)==null?void 0:b[c])!=null&&C.canDelete),c)}})]},c)})})]})]})},Qe=be().shape({roleName:Ce().required("Role Name is required")}),{TabNav:Ge,TabList:Xe,TabContent:Ze}=ye,Ne=R.forwardRef((t,n)=>{const[o,r]=R.useState([]);v();const i=me(p=>p.crmRoles.data.selectedRole),l=me(p=>p.crmRoles.data.drawerMode);return e.jsx(ze,{innerRef:n,initialValues:{roleName:l==="Edit"&&(i==null?void 0:i.roleName)||"",isSystem:l==="Edit"&&(i==null?void 0:i.isSystem)||!1,isDefault:(i==null?void 0:i.isDefault)||!1,modules:o},validationSchema:Qe,onSubmit:(p,{setSubmitting:m})=>{m(!1)},children:({touched:p,errors:m})=>e.jsx($e,{children:e.jsx(Oe,{children:e.jsxs(ye,{defaultValue:"roles",children:[e.jsx(Xe,{children:e.jsx(Ge,{value:"roles",children:"Role Form"})}),e.jsx("div",{className:"p-6",children:e.jsx(Ze,{value:"roles",children:e.jsx(_e,{touched:p,errors:m,roles:i,drawerMode:l})})})]})})})})});Ne.displayName="RolesForm";const De=R.forwardRef((t,n)=>{const o=v(),r=N(m=>m.crmRoles.data.selectedRole),i=N(m=>m.crmRoles.data.rolesList),{id:l}=r,p=m=>{const{name:u,birthday:j,email:d,img:g,location:x,title:c,phoneNumber:f,facebook:h,twitter:s,pinterest:a,linkedIn:w}=m,I={name:u,email:d,img:g},O={location:x,title:c,birthday:Se(j).format("DD/MM/YYYY"),phoneNumber:f,facebook:h,twitter:s,pinterest:a,linkedIn:w};let M=F(i),k={};M=M.map(D=>(D.id===l&&(D={...D,...I},D.personalInfo={...D.personalInfo,...O},k=D),D)),Ve(k)||o(he(k)),o(q()),o(Fe(M))};return e.jsx(Ne,{ref:n,roles:r,onFormSubmit:p})});De.displayName="RolesEditContent";const es=({onSaveClick:t,onCancel:n})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx($,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),e.jsx($,{size:"sm",variant:"solid",onClick:t,children:"Save"})]}),ss=()=>{const t=v(),n=N(m=>m.crmRoles.data.drawerOpen),o=N(m=>m.crmRoles.data.drawerMode),r=N(m=>m.crmRoles.data.selectedRole),i=()=>{t(q()),t(L({}))},l=R.useRef(null),p=async()=>{var u,j,d,g,x,c,f,h;const m=(u=l.current)==null?void 0:u.values;if((j=l.current)==null||j.submitForm(),Object.keys(l.current.errors).length===0)if(console.log(o),o==="ADD"){const s=await t(Te(m));console.log(s,"response");let a="",w="";((d=s==null?void 0:s.payload)==null?void 0:d.success)===!0?(a=(g=s==null?void 0:s.payload)==null?void 0:g.message,w="success"):(a=(x=s==null?void 0:s.error)==null?void 0:x.message,w="danger"),P.push(e.jsx(V,{title:"title",type:w,duration:2500,children:a}),{placement:"top-end"}),t(q()),await t(S())}else{const s=r.id,a=await t(he({id:s,data:m}));(c=a==null?void 0:a.payload)!=null&&c.success?P.push(e.jsx(V,{title:"Successfully Update",type:"success",duration:2500,children:(f=a==null?void 0:a.payload)==null?void 0:f.message}),{placement:"top-end"}):P.push(e.jsx(V,{title:"Something went wrong !!!",type:"danger",duration:2500,children:(h=a==null?void 0:a.error)==null?void 0:h.message}),{placement:"top-end"}),t(q()),await t(S())}};return e.jsx(Pe,{isOpen:n,closable:!1,bodyClass:"p-0",footer:e.jsx(es,{onCancel:i,onSaveClick:p}),width:600,onClose:i,onRequestClose:i,children:e.jsx(De,{ref:l})})},ts=()=>{const t=v(),n=N(l=>l.crmRoles.data.deleteConfirmation),o=N(l=>l.crmRoles.data.selectedRole),r=()=>{t(B(!1))},i=async()=>{var p,m,u;t(B(!1));const l=await t(Ae(o.id));await t(S()),(p=l==null?void 0:l.payload)!=null&&p.success?(P.push(e.jsx(V,{title:"Successfuly Deleted",type:"success",duration:2500,children:(m=l==null?void 0:l.payload)==null?void 0:m.message}),{placement:"top-end"}),await t(S())):(P.push(e.jsx(V,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(u=l==null?void 0:l.error)==null?void 0:u.message}),{placement:"top-end"}),await t(S()))};return e.jsx(Je,{isOpen:n,type:"danger",title:"Delete Role",confirmButtonColor:"red-600",onClose:r,onRequestClose:r,onCancel:r,onConfirm:i,children:e.jsx("p",{children:"Are you sure you want to delete this role? All record related to this role will be deleted as well. This action cannot be undone."})})},as=({row:t})=>{const{textTheme:n}=fe(),o=v(),r=()=>{o(xe()),o(L(t)),o(ge("Edit"))};return e.jsx("div",{className:`${n} cursor-pointer select-none font-semibold`,onClick:r,children:"Edit"})},os=({row:t})=>{const{textTheme:n}=fe(),o=v(),r=async()=>{await o(L(t)),o(B(!0))};return e.jsx("div",{className:`${n} cursor-pointer select-none font-semibold text-red-500`,onClick:r,children:"Delete"})},rs=()=>{const t=v(),n=N(s=>s.crmRoles.data.displayedRolesList),o=N(s=>s.crmRoles.data.loading);N(s=>s.crmRoles.data.filterData);const r=U("roles","canModify"),i=U("roles","canDelete"),{pageIndex:l,pageSize:p,sort:m,query:u,total:j}=N(s=>s.crmRoles.data.tableData),d=R.useCallback(()=>{t(S())},[t]);R.useEffect(()=>{d()},[d]);const g=R.useMemo(()=>({pageIndex:l,pageSize:p,sort:m,query:u,total:j}),[l,p,m,u,j]),x=R.useMemo(()=>{const s=[{header:"Role Name",accessorKey:"roleName",cell:a=>a.row.original.roleName},{header:"System",accessorKey:"isSystem",cell:a=>a.row.original.isSystem.toString()}];return i&&s.unshift({header:"Delete",id:"delete",cell:a=>e.jsx(os,{row:a.row.original})}),r&&s.unshift({header:"Edit",id:"action",cell:a=>e.jsx(as,{row:a.row.original})}),s},[r,i]),c=s=>{const a=F(g);a.pageIndex=s,t(z(a))},f=s=>{const a=F(g);a.pageSize=Number(s),a.pageIndex=1,t(z(a))},h=s=>{const a=F(g);a.sort=s,t(z(a))};return e.jsxs("div",{children:[e.jsx(Me,{columns:x,data:n,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:o,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:c,onSelectChange:f,onSort:h}),e.jsx(ss,{}),e.jsx(ts,{})]})},{Control:ls}=We,ue=[{value:"",label:"All",color:"bg-gray-500"},{value:"active",label:"Active",color:"bg-emerald-500"},{value:"blocked",label:"Blocked",color:"bg-red-500"}],ns=({innerProps:t,label:n,data:o,isSelected:r})=>e.jsxs("div",{className:`flex items-center justify-between p-2 cursor-pointer ${r?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...t,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Re,{innerClass:o.color}),e.jsx("span",{children:n})]}),r&&e.jsx(Ue,{className:"text-emerald-500 text-xl"})]}),cs=({children:t,...n})=>{const o=n.getValue()[0];return e.jsxs(ls,{...n,children:[o&&e.jsx(Re,{className:"ltr:ml-4 rtl:mr-4",innerClass:o.color}),t]})},is=()=>{const t=v(),{status:n}=N(r=>r.crmRoles.data.filterData),o=r=>{t(je({status:r==null?void 0:r.value}))};return e.jsx(He,{options:ue,size:"sm",className:"mb-4 min-w-[130px]",components:{Option:ns,Control:cs},value:ue.filter(r=>r.value===n),onChange:o})},ve=R.forwardRef((t,n)=>{const{onInputChange:o}=t,r=Ke(i,500);function i(p){o==null||o(p)}const l=p=>{r(p.target.value)};return e.jsx(we,{ref:n,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(Le,{className:"text-lg"}),onChange:l})});ve.displayName="RolesTableSearch";const ms=()=>{const t=v(),n=R.useRef(null),o=N(u=>u.crmRoles.data.tableData),r=U("roles","canCreate"),i=u=>{const j=F(o);j.query=u,j.pageIndex=1,typeof u=="string"&&u.length>1&&l(j),typeof u=="string"&&u.length===0&&l(j)},l=u=>{t(z(u)),t(S())},p=()=>{const u=F(o);u.query="",n.current&&(n.current.value=""),t(je({status:""})),l(u)},m=()=>{t(xe()),t(ge("ADD"))};return e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"md:flex items-center gap-4",children:[e.jsx(ve,{ref:n,onInputChange:i}),e.jsx(is,{})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx($,{size:"sm",className:"me-2",onClick:p,children:"Clear All"}),r&&e.jsx($,{size:"sm",onClick:m,children:"Add New"})]})]})};Ie("crmRoles",Ee);const At=()=>e.jsxs(e.Fragment,{children:[e.jsx(ms,{}),e.jsx(rs,{})]});export{At as default};
