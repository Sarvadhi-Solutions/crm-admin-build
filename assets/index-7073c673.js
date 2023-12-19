import{a as v,j as e,r as p,ap as pe,ah as ge,aq as xe}from"./index-7b0349c6.js";import{A as he}from"./AdaptableCard-d9b587b8.js";import{D as fe}from"./DataTable-e83a4ee2.js";import{S as ye}from"./StatusCapsule-daca9eb4.js";import{D as be,t as je,c as Ce,T as Le}from"./tagAndCategory-2992959b.js";import{T as $}from"./TextTruncate-3a55f54a.js";import{u as K}from"./checkEditUpdate-d3cb05ce.js";import{u as we}from"./useThemeClass-3c06ce00.js";import{c as W}from"./cloneDeep-43c01ed5.js";import{u as x,t as X,d as ve,g as H,a as se,b as Ie,c as oe,e as re,f as Ne,h as De,i as Se,j as Te,s as ne,k as Ae,l as Y,m as U,n as ce,r as Me}from"./index-db695170.js";import{t as Z,N as ee}from"./toast-184c7e0a.js";import{C as Fe}from"./ConfirmDialog-916d697a.js";import{B as te}from"./Button-9fa3d2fc.js";import{D as Oe}from"./Drawer-464b2899.js";import{a as w,F as Pe}from"./FormItem-26ad5e8d.js";import{T as ie}from"./index-77e8bdc2.js";import{u as ke,b as N,F as Re,a as qe}from"./formik.esm-1e90a8e9.js";import{c as B,a as G,d as Ee,e as $e}from"./index.esm-3fef8ee5.js";import{I as _}from"./Input-5106ef66.js";/* empty css              */import{N as Be,O as ze,P as Ve,b as He,o as Ke,Q as We,C as Ue}from"./index.esm-70dc7df8.js";import"./Alert-ebb58074.js";import{A as _e}from"./index-2cc854d3.js";import"./Badge-50330686.js";import"./RangeCalendar-8f0006dc.js";import{C as Ge}from"./Card-a848a8eb.js";import"./index-f606ec14.js";import"./index-e01b641f.js";import"./Dialog-9d79d85c.js";import"./index-d98edc99.js";import"./toString-a66e4ffc.js";import"./index-10cbcf37.js";import"./index-89cb79e5.js";import"./index-24734fba.js";import"./Pagination-2aca965e.js";import"./Progress-10ad9a7b.js";import"./index-9b4971f3.js";import"./ScrollBar-e6e4e948.js";import"./index-c97a424b.js";import{S as z}from"./Select-1f2320ab.js";import"./Skeleton-8e99ae89.js";import"./index-2cd79135.js";import"./Switcher-e923ff00.js";import"./index-0df82d35.js";import"./Tag-a0bc44e6.js";import"./index-aa85e3d4.js";import"./index-df8f9f26.js";import"./Tooltip-a61fe545.js";import"./Upload-4b7aa6b8.js";import{T as Q,a as Qe,b as Je}from"./index.esm-1ab6dd83.js";import{M as Xe}from"./index.esm-b66fd867.js";import{B as Ye}from"./index.esm-8b94bd99.js";import{A as Ze}from"./index.esm-14571ecb.js";import{d as et}from"./debounce-11c7fdc6.js";import{g as tt}from"./index-f2e6262f.js";import{s as at}from"./index-228f4535.js";import{F as st}from"./FormDesription-67fe72b2.js";import{M as ot}from"./MediaSkeleton-e45b822d.js";import{N as rt}from"./react-number-format.es-d0678920.js";import"./index-cec25fe7.js";import"./_MapCache-a209650f.js";import"./Views-c6671a9d.js";import"./_getPrototype-57ad14e0.js";import"./CrmService-d23a3034.js";import"./useTimeout-187593ce.js";import"./CloseButton-68e6949e.js";import"./StatusIcon-11c7c844.js";import"./chainedFunction-070f832c.js";import"./index-39084392.js";import"./index-ba238736.js";import"./useControllableState-ca2883fa.js";import"./isNil-2a409f2e.js";import"./get-3f8daa47.js";import"./useMergeRef-788c4cb0.js";import"./_baseIsEqual-0ec018e0.js";import"./useRootClose-f96499f9.js";import"./usePopper-ea1a26c2.js";import"./TimeInput-0d554281.js";import"./useUniqueId-ab09df2f.js";import"./useDidUpdate-eb06a65d.js";import"./useUncertainRef-81a90e74.js";import"./slicedToArray-a6cb1158.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./floating-ui.dom-bef9cea3.js";import"./mapCloneElement-0f96c84d.js";import"./index.esm-b503a71c.js";import"./index.esm-c96a5b5f.js";import"./index-e86caf15.js";import"./index-2143c245.js";const nt=()=>{const r=v(),n=x(i=>i.crmLeads.data.deleteConfirmation),t=x(i=>i.crmLeads.data.selectedLeads),l=()=>{r(X(!1))},m=async()=>{var g,d,f;r(X(!1));const i=await r(ve(t.id));await r(H()),(g=i==null?void 0:i.payload)!=null&&g.success?Z.push(e.jsx(ee,{title:"Successfuly Deleted",type:"success",duration:2500,children:(d=i==null?void 0:i.payload)==null?void 0:d.message}),{placement:"top-end"}):Z.push(e.jsx(ee,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(f=i==null?void 0:i.error)==null?void 0:f.message}),{placement:"top-end"}),await r(H()),await r(se())};return e.jsx(Fe,{isOpen:n,type:"danger",title:"Delete Lead",confirmButtonColor:"red-600",onClose:l,onRequestClose:l,onCancel:l,onConfirm:m,children:e.jsx("p",{children:"Are you sure you want to delete this Lead? All record related to this lead will be deleted as well. This action cannot be undone."})})},ae=[{label:"Open",value:"open"},{label:"Cancelled",value:"cancelled"},{label:"Converted",value:"converted"}],V=[],ct=r=>{const{touched:n,errors:t,setFieldValue:l,values:m}=r,i=v(),g=ke(),[d,f]=p.useState(!1),[L,D]=p.useState(!1),[T,O]=p.useState([]),P=()=>{f(!d),D(!1)},A=x(o=>o.crmLeads.data.contactList);V.length=0,A.forEach(o=>{V.push({value:o==null?void 0:o.id,label:`${o==null?void 0:o.firstName} ${o==null?void 0:o.lastName}`})});const[k,M]=p.useState("");p.useEffect(()=>{(async()=>{var h,R;try{const{payload:q}=await i(Ne()),E=(h=q==null?void 0:q.data)==null?void 0:h.find(F=>(F==null?void 0:F.moduleName)==="leads");if(M(E.id),E){const{payload:F}=await i(De({id:(R=E==null?void 0:E.id)==null?void 0:R.toString()})),ue=je(F.data),yt=Ce(F.data);O(ue)}}catch(q){console.error("Error fetching module data:",q)}})(),i(Ie())},[i]);const S=x(o=>o.crmLeads.data.selectedLeads),a=x(o=>o.crmLeads.data.categoryList),c=x(o=>o.crmLeads.data.subCategoryList),s=x(o=>o.crmLeads.data.productList),u=p.useMemo(()=>a.map(h=>({label:h.name,value:h.id})),[a]),j=p.useMemo(()=>c.map(h=>({label:h.name,value:h.id})),[c]),b=p.useMemo(()=>s.map(h=>({label:h.name,value:h.id})),[s]),[C,y]=p.useState(S?S.tags||[]:[]),I=o=>{y(o);const h=[o.value];g.setFieldValue("tagId",h)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(w,{label:"Contact Name",invalid:t.contactsDataId&&n.contactsDataId,errorMessage:t.contactsDataId,children:e.jsx(z,{name:"contactsDataId",placeholder:"Contact Name",options:V,id:"contactsDataId",value:V.find(o=>(o==null?void 0:o.value)===(m==null?void 0:m.contactsDataId)),onChange:o=>{const h=o.value;l("contactsDataId",h)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(w,{label:"Title",invalid:t.title&&n.title,errorMessage:t.title,children:e.jsx(N,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:_,prefix:e.jsx(Xe,{className:"text-xl"})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(w,{label:"Category",invalid:t.categoryId&&n.categoryId,errorMessage:t.categoryId,children:e.jsx(N,{type:"text",autoComplete:"off",name:"categoryId",placeholder:"Category",options:u,component:z,prefix:e.jsx(Q,{className:"text-xl"}),onChange:async o=>{await i(oe(o.value)),l("categoryId",o)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(w,{label:"Sub Category",invalid:t.subCategoryId&&n.subCategoryId,errorMessage:t.subCategoryId,children:e.jsx(N,{type:"text",autoComplete:"off",name:"subCategoryId",placeholder:"SubCategory",options:j,component:z,prefix:e.jsx(Q,{className:"text-xl"}),onChange:async o=>{await i(re(o.value)),l("subCategoryId",o)}})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(w,{label:"Product",invalid:t.productId&&n.productId,errorMessage:t.productId,children:e.jsx(N,{type:"text",autoComplete:"off",name:"productId",placeholder:"Product",options:b,component:z,prefix:e.jsx(Q,{className:"text-xl"}),onChange:async o=>{l("productId",o)}})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(w,{label:"Budget",invalid:t.budget&&n.budget,errorMessage:t.budget,children:e.jsx(N,{type:"number",autoComplete:"off",name:"budget",placeholder:"Budget",component:_,prefix:e.jsx(Ye,{className:"text-xl"})})})})]}),e.jsx(w,{label:"Status",invalid:t.status&&n.status,errorMessage:t.status,children:e.jsx(N,{type:"text",autoComplete:"off",name:"status",placeholder:"Status",component:z,options:ae,values:ae[0],prefix:e.jsx(Be,{className:"text-xl"}),onChange:async o=>{l("status",o)}})}),e.jsx("div",{style:{position:"relative"},children:e.jsx(w,{label:"Tag",children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(N,{name:"Tag",component:be,value:g.initialValues.tagName,options:T,placeholder:"Select a Tag",onChange:I}),e.jsx(Qe,{style:{position:"absolute",right:"10px",top:"10px",border:"none",background:"#FFF"},className:"text-xl",onClick:()=>{P(),D(!0)}})]})})}),e.jsx(w,{label:"Notes",invalid:t.notes&&n.notes,errorMessage:t.notes,children:e.jsx(N,{type:"text",autoComplete:"off",name:"notes",placeholder:"Notes",component:_,prefix:e.jsx(Je,{className:"text-xl"})})})]})},it=B().shape({title:G().required("Title is required"),categoryId:B().required("Category is required"),subCategoryId:B().notRequired(),productId:B().required("Product is required"),status:B().required("Status is required"),notes:G(),budget:Ee().test("greaterThanOne","Budget must be greater than 1",r=>r>0).required("Budget is required"),tagId:$e(),contactsDataId:G().required("Contact is required").test("is-valid-contact","Invalid contact selected",r=>!!V.find(n=>n.value===r))}),{TabNav:dt,TabList:lt,TabContent:mt}=ie,de=p.forwardRef((r,n)=>{var A,k,M,S;const t=x(a=>a.crmLeads.data.selectedLeads),l=x(a=>a.crmLeads.data.categoryList),m=x(a=>a.crmLeads.data.subCategoryList),i=x(a=>a.crmLeads.data.productList),g=!!t.id,d=v(),f=async(a,c,s)=>{var b,C,y,I;const u=(b=a==null?void 0:a.payload)!=null&&b.success?c:"Something went wrong !!!",j=(C=a==null?void 0:a.payload)!=null&&C.success?(y=a==null?void 0:a.payload)==null?void 0:y.message:s;Z.push(e.jsx(ee,{title:u,type:(I=a==null?void 0:a.payload)!=null&&I.success?"success":"danger",duration:2500,children:j}),{placement:"top-end"})},L=async(a,{setSubmitting:c})=>{try{const s={title:a.title,contactsDataId:a.contactsDataId,product:a.productId.value,status:a.status.value,budget:a.budget.toString(),description:a.notes,tagId:[]},{colorName:u,name:j,tagName:b,...C}=a,y=g?await d(Se({leadsId:(t==null?void 0:t.id)||"",updatedData:s})):await d(Te(s));await f(y,g?"Successfully Updated":"Successfully Added","An error occurred."),d(ne()),await Promise.all([d(H()),d(se())])}catch(s){console.error("An error occurred:",s)}finally{c(!1)}},D=p.useMemo(()=>l.map(c=>({label:c.name,value:c.id})),[l]),T=p.useMemo(()=>m.map(c=>({label:c.name,value:c.id})),[m]),O=p.useMemo(()=>i.map(c=>({label:c.name,value:c.id})),[i]),P=async()=>{var a,c,s,u;(a=t==null?void 0:t.leadProduct)!=null&&a.categoryId&&await d(oe((c=t==null?void 0:t.leadProduct)==null?void 0:c.categoryId)),(s=t==null?void 0:t.leadProduct)!=null&&s.subCategoryId&&await d(re((u=t==null?void 0:t.leadProduct)==null?void 0:u.subCategoryId))};return p.useEffect(()=>{P(),console.log("fetchData")},[t,l,m,d]),e.jsx(Re,{innerRef:n,initialValues:{contactsDataId:t.contactsDataId||null,title:(t==null?void 0:t.title)||"",categoryId:(A=t==null?void 0:t.leadProduct)!=null&&A.categoryId?D.find(a=>{var c;return a.value===((c=t==null?void 0:t.leadProduct)==null?void 0:c.categoryId)}):"",subCategoryId:(k=t==null?void 0:t.leadProduct)!=null&&k.subCategoryId?T.find(a=>{var c;return a.value===((c=t==null?void 0:t.leadProduct)==null?void 0:c.subCategoryId)}):"",productId:t!=null&&t.product?O.find(a=>a.value===(t==null?void 0:t.product)):"",status:t!=null&&t.status?ae.find(a=>a.value===(t==null?void 0:t.status)):"",notes:(t==null?void 0:t.description)||"",tagName:((S=(M=t==null?void 0:t.tags)==null?void 0:M[0])==null?void 0:S.tagName)||"",budget:(t==null?void 0:t.budget)||""},validationSchema:it,onSubmit:L,children:({touched:a,errors:c,values:s,setFieldValue:u})=>e.jsx(qe,{children:e.jsx(Pe,{children:e.jsxs(ie,{defaultValue:"leadsInfo",children:[e.jsx(lt,{children:e.jsx(dt,{value:"leadsInfo",children:"Leads Detail"})}),e.jsx("div",{className:"p-6",children:e.jsx(mt,{value:"leadsInfo",children:e.jsx(ct,{touched:a,errors:c,setFieldValue:u,values:s})})})]})})})})});de.displayName="LeadsForm";const le=p.forwardRef((r,n)=>{v();const t=x(m=>m.crmLeads.data.selectedLeads);x(m=>m.crmLeads.data.leadsList);const l=async m=>{};return e.jsx(de,{ref:n,leads:t,onFormSubmit:l})});le.displayName="LeadsEditContent";const ut=({onSaveClick:r,onCancel:n})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(te,{size:"sm",className:"mr-2",onClick:n,children:"Cancel"}),e.jsx(te,{size:"sm",variant:"solid",onClick:r,children:"Save"})]}),pt=()=>{const r=v(),n=x(d=>d.crmLeads.data.drawerOpen),[t,l]=p.useState(window.innerWidth/2),m=()=>{r(ne()),r(Y({}))},i=p.useRef(null),g=()=>{var d;(d=i.current)==null||d.submitForm()};return p.useEffect(()=>{r(Ae())},[]),e.jsx(Oe,{isOpen:n,closable:!1,bodyClass:"p-0",width:t,footer:e.jsx(ut,{onCancel:m,onSaveClick:g}),onClose:m,onRequestClose:m,children:e.jsx(le,{ref:i})})},gt=()=>{const r=v(),n=x(c=>c.crmLeads.data.displayedLeadsList),t=x(c=>c.crmLeads.data.loading),{pageIndex:l,pageSize:m,sort:i,query:g,total:d}=x(c=>c.crmLeads.data.tableData),f=p.useCallback(()=>{r(H())},[r]);p.useEffect(()=>{f()},[f]);const L=p.useMemo(()=>({pageIndex:l,pageSize:m,sort:i,query:g,total:d}),[l,m,i,g,d]),D=K("leads","canDelete"),T=K("leads","canModify"),O=K("leads","canView"),P=pe(),A=({row:c})=>{const s=v(),{textTheme:u}=we(),j=()=>{s(ce()),s(Y(c))},b=async()=>{await s(Y(c)),s(X(!0))},C=()=>{const y=`/app/crm/lead-details/${c.id}`;P(y)};return e.jsxs("div",{className:"flex justify-start text-lg",children:[T&&e.jsx("span",{className:`cursor-pointer hover:${u}`,onClick:j,children:e.jsx(ze,{})}),O&&e.jsx("span",{className:"cursor-pointer px-1 hover:text-green-500",onClick:C,children:e.jsx(Ze,{})}),D&&e.jsx("span",{className:"cursor-pointer hover:text-red-500",onClick:b,children:e.jsx(Ve,{})})]})},k=p.useMemo(()=>[{header:"Action",id:"action",cell:s=>e.jsx(A,{row:s.row.original})},{header:"Contact Name",accessorKey:"contactName",cell:s=>{var j,b,C,y;const u=((b=(j=s.row.original)==null?void 0:j.contactData)==null?void 0:b.firstName)+" "+((y=(C=s.row.original)==null?void 0:C.contactData)==null?void 0:y.lastName);return e.jsx($,{text:u,maxLength:20})}},{header:"Title",accessorKey:"title",cell:s=>{const u=s.row.original.title;return e.jsx($,{text:u,maxLength:20})}},{header:"Product",accessorKey:"leadProduct",cell:s=>{var y,I,o,h,R;const u=s.row.original,j=((I=(y=u.leadProduct)==null?void 0:y.category)==null?void 0:I.name)||"",b=((h=(o=u.leadProduct)==null?void 0:o.subCategory)==null?void 0:h.name)||"",C=`${(R=u.leadProduct)==null?void 0:R.name} => ${j} => ${b}`;return e.jsx($,{text:C,maxLength:20})}},{header:"Budget",accessorKey:"budget",cell:s=>{const u=s.row.original;return e.jsx($,{text:u.budget,maxLength:20})}},{header:"Status",accessorKey:"status",cell:s=>{const u=s.row.original;return e.jsx(ye,{status:u.status})}},{header:"Tag Name",accessorKey:"tagName",cell:s=>{const u=s.row.original.tags||[];return e.jsx(Le,{tags:u})}},{header:"Notes",accessorKey:"description",cell:s=>{const u=s.row.original.description;return e.jsx($,{text:u,maxLength:20})}}],[T,D]),M=c=>{const s=W(L);s.pageIndex=c,r(U(s))},S=c=>{const s=W(L);s.pageSize=Number(c),s.pageIndex=1,r(U(s))},a=c=>{const s=W(L);s.sort=c,r(U(s))};return e.jsxs("div",{children:[e.jsx(fe,{columns:k,data:n,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:t,pagingData:{total:L.total,pageIndex:L.pageIndex,pageSize:L.pageSize},onPaginationChange:M,onSelectChange:S,onSort:a}),e.jsx(pt,{}),e.jsx(nt,{})]})},me=p.forwardRef((r,n)=>{const{onInputChange:t}=r,l=et(m,500);function m(g){t==null||t(g)}const i=g=>{l(g.target.value)};return e.jsx(_,{ref:n,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:e.jsx(He,{className:"text-lg"}),onChange:i})});me.displayName="LeadsTableSearch";const xt=()=>{const r=v(),n=p.useRef(null),t=x(d=>d.crmLeads.data.tableData),l=K("leads","canCreate"),m=d=>{const f=W(t);f.query=d,f.pageIndex=1,typeof d=="string"&&d.length>1&&i(f),typeof d=="string"&&d.length===0&&i(f)},i=d=>{r(d?U(d):H())},g=()=>{r(ce()),r(at("Add"))};return p.useEffect(()=>{async function d(){await r(tt())}d()},[r]),e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsx("div",{className:"md:flex items-center gap-4",children:e.jsx(me,{ref:n,onInputChange:m})}),e.jsx("div",{className:"mb-4",children:l&&e.jsx(te,{size:"sm",onClick:g,children:"Add New"})})]})},J=r=>{const{icon:n,avatarClass:t,label:l,value:m,loading:i}=r,g=55;return e.jsx(Ge,{bordered:!0,children:e.jsx(ge,{loading:i,customLoader:e.jsx(ot,{avatarProps:{className:"rounded",width:g,height:g}}),children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(_e,{className:t,size:g,icon:n}),e.jsxs("div",{children:[e.jsx("span",{children:l}),e.jsx("h3",{children:e.jsx(rt,{thousandSeparator:!0,displayType:"text",value:m})})]})]})})})})},ht=()=>{const r=v(),n=x(l=>l.crmLeads.data.statisticData),t=x(l=>l.crmLeads.data.statisticLoading);return p.useEffect(()=>{r(se())},[]),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6",children:[e.jsx(J,{icon:e.jsx(Ke,{}),avatarClass:"!bg-indigo-600",label:"Total Leads",value:n.totalLeads,growthRate:n==null?void 0:n.totalLeads,loading:t}),e.jsx(J,{icon:e.jsx(We,{}),avatarClass:"!bg-blue-500",label:"Active Leads",value:n.activeLeads,growthRate:n.activeLeads,loading:t}),e.jsx(J,{icon:e.jsx(Ue,{}),avatarClass:"!bg-emerald-500",label:"This Week's New Leads",value:n==null?void 0:n.newLeads,growthRate:n==null?void 0:n.newLeads,loading:t})]})};xe("crmLeads",Me);const ft=()=>{const r=x(n=>n.crmLeads.data.tableData);return e.jsxs(e.Fragment,{children:[e.jsx(ht,{}),e.jsxs(he,{bodyClass:"h-full",children:[e.jsx(st,{title:`Leads (${r==null?void 0:r.total})`,desc:"",className:"mb-2"}),e.jsx(xt,{}),e.jsx(gt,{})]})]})},ts=ft;export{ts as default};
