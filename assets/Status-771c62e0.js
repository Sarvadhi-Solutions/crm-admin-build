import{am as w,an as ae,ao as te,ap as se,r as y,j as a,a as S,aq as oe}from"./index-deb31e10.js";import{T as le}from"./index-9d4e7a55.js";import{aF as ne,aG as ie,aH as de,n as re}from"./CrmService-d5fba30c.js";import{B as k}from"./Button-c9bc60b5.js";import{I as H}from"./Input-b4f9603d.js";import{b as ce,O as me,P as ue,Q as pe}from"./index.esm-7e071777.js";import{d as ge}from"./debounce-9e364d4c.js";import{c as b}from"./cloneDeep-67d59bdf.js";import{D as he}from"./DataTable-1874c51c.js";import{u as v}from"./checkEditUpdate-163351c4.js";import{u as fe}from"./useThemeClass-be6073dc.js";import"./Alert-5f36c2a0.js";import"./index-c67702c1.js";import{B as xe}from"./Badge-d9ae855b.js";import"./RangeCalendar-8afb665c.js";import"./Card-085ac9b2.js";import"./index-3a77fb06.js";import"./index-3c726209.js";import{D as ye}from"./Dialog-f52addba.js";import"./Drawer-d475ebcd.js";import"./index-23d0fcae.js";import{a as O}from"./FormItem-b6ea2884.js";import"./toString-e34703ad.js";import"./index-f2daafea.js";import"./index-39c1c8e6.js";import"./index-700f33d8.js";import{N as K,t as M}from"./toast-241185e8.js";import"./Pagination-a5e381f1.js";import"./Progress-a11c2f12.js";import"./index-5baf7804.js";import"./ScrollBar-a7c63350.js";import"./index-e541606c.js";import"./Select-dc99a09b.js";import"./Skeleton-503ea522.js";import"./index-208bb167.js";import"./Switcher-d01b1c88.js";import"./index-5994de1d.js";import"./Tag-ea07611a.js";import"./index-d4f33a77.js";import"./index-70acf077.js";import"./Tooltip-97f81a61.js";import"./Upload-762c02a1.js";import"./Views-5dd9e85c.js";import"./chart.constant-f9507da5.js";import"./GrowShrinkTag-fa336753.js";import"./react-tooltip.min-7de9806e.js";import"./RichTextEditor-6a57c324.js";import"./SegmentItemOption-a6fce820.js";import{S as Se}from"./StickyFooter-d0667857.js";import"./SvgIcon-fab1c8c3.js";import{F as Ce,a as je,b as P}from"./formik.esm-2d8f8c6a.js";import{A as be}from"./index.esm-61700a93.js";import{c as we,a as B}from"./index.esm-a41489ce.js";import{L as De}from"./colorPicker-fa98a3bb.js";import{C as Ne}from"./ConfirmDialog-0f01438c.js";import{u as Te}from"./useGetModule-72ab103a.js";const $e="crmLeadStatus",V=w("crm/custom-fields",async({id:t,payload:e})=>{var s,n;try{return(await ne(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),W=w("crmStatus/data/editStatus",async({StatusId:t,updatedData:e})=>{var s,n;try{return(await ie(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),Re=w("crmStatus/data/deleteStatus",async t=>{var e,s;try{return await de(t)}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),A=w("crmStatus/data/getStatus",async t=>(await re(t)).data),qe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ve={loading:!1,tableData:qe,displayedStatus:[],customFields:[],ModuleId:[],isDialogOpen:!1,dialogMode:"Add",selectedStatus:null,deleteConfirmation:!1},ke=ae({name:`${$e}/state`,initialState:ve,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const s=t.customFields.filter(n=>n.statusName.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedStatus=s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedStatus:(t,e)=>{t.selectedStatus=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload},setLoading:(t,e)=>{t.loading=e.payload},setModule:(t,e)=>{t.ModuleId=e.payload}},extraReducers:t=>{t.addCase(V.fulfilled,(e,s)=>{e.loading=!1}).addCase(V.pending,e=>{e.loading=!0}).addCase(W.fulfilled,(e,s)=>{e.loading=!1}).addCase(W.pending,e=>{e.loading=!0}).addCase(A.fulfilled,(e,s)=>{var n;e.customFields=s==null?void 0:s.payload.data,e.tableData.total=(n=s.payload.data)==null?void 0:n.length,e.displayedStatus=s==null?void 0:s.payload.data.slice(0,10),e.loading=!1}).addCase(A.pending,e=>{})}}),{setModule:Oe,setLoading:J,setTableData:R,setDialogToggle:z,setDialogMode:Me,setSelectedStatus:X,toggleDeleteConfirmation:_}=ke.actions,Pe=ke.reducer,Be=te({data:Pe}),N=se,Ae=y.forwardRef((t,e)=>{const{onInputChange:s}=t,n=ge(i,500);function i(l){s==null||s(l)}const m=l=>{n(l.target.value)};return a.jsx(H,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:a.jsx(ce,{className:"text-lg"}),onChange:m})});Ae.displayName="StatusLeadTableSearch";const He=()=>{const t=S(),e=y.useRef(null),{ModuleId:s,tableData:n}=N(l=>{var r;return(r=l==null?void 0:l.crmLeadStatus)==null?void 0:r.data}),i=l=>{const r=b(n);r.query=l,r.pageIndex=1,typeof l=="string"&&l.length>1&&m(r),typeof l=="string"&&l.length===0&&m(r)},m=l=>{t(l?R(l):A(s))};return a.jsxs("div",{className:"md:flex items-center justify-between",children:[a.jsx("div",{className:"md:flex items-center gap-4",children:a.jsx(Ae,{ref:e,onInputChange:i})}),a.jsx("div",{className:"mb-4",children:a.jsx(k,{size:"sm",onClick:()=>{t(z(!0)),t(Me("Add"))},children:"Add New"})})]})},Ke=()=>{const t=S(),e=N(c=>c.crmLeadStatus.data.loading),s=v("roles","canModify"),n=v("roles","canDelete"),{pageIndex:i,pageSize:m,sort:l,query:r,total:g}=N(c=>c.crmLeadStatus.data.tableData),C=N(c=>c.crmLeadStatus.data.displayedStatus),u=({row:c})=>{const d=S();fe();const p=()=>{d(X(c)),d(z(!0)),d(Me("Edit"))},j=async()=>{await d(X(c)),d(_(!0))};return a.jsxs("div",{className:"flex justify-start text-base",children:[a.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:p,children:a.jsx(me,{})}),a.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:j,children:a.jsx(ue,{})})]})},o=y.useMemo(()=>({pageIndex:i,pageSize:m,sort:l,query:r,total:g}),[i,m,l,r,g]),f=y.useMemo(()=>[{header:"Action",id:"action",cell:d=>a.jsx(u,{row:d.row.original})},{header:"Status Name",accessorKey:"statusName",cell:d=>d.row.original.statusName},{header:"isActive",accessorKey:"isActive",cell:d=>d.row.original.isActive?"Active":"Deactive"},{header:"Color",cell:d=>{const p=d.row.original;return a.jsxs("div",{className:"flex items-center",children:[a.jsx(xe,{style:{backgroundColor:`${p.colorCode}`}}),a.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:p.colorCode})]})}}],[s,n]),h=c=>{const d=b(o);d.pageIndex=c,t(R(d))},x=c=>{const d=b(o);d.pageSize=Number(c),d.pageIndex=1,t(R(d))},D=c=>{const d=b(o);d.sort=c,t(R(d))};return a.jsx("div",{children:a.jsx(he,{columns:f,data:C,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:h,onSelectChange:x,onSort:D})})},Ie=y.forwardRef((t,e)=>{const s=S(),{loading:n,selectedStatus:i,dialogMode:m,ModuleId:l}=N(u=>{var o;return(o=u==null?void 0:u.crmLeadStatus)==null?void 0:o.data}),r=()=>{s(z(!1))},g=async(u,o,f,h,x)=>{var L,F,E;const D={statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode},c=await h(u==="Add"?V({id:l,payload:D}):W({StatusId:f==null?void 0:f.id,updatedData:{statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode}}));let d="",p="",j="danger";(L=c==null?void 0:c.payload)!=null&&L.success?(d=u==="Add"?"Successfully Added":"Successfully Updated",p=(F=c==null?void 0:c.payload)==null?void 0:F.message,j="success",h(z(!1))):(d="Something went wrong !!!",p=(E=c==null?void 0:c.error)==null?void 0:E.message),x.push(a.jsx(K,{title:d,type:j,duration:2500,children:p}),{placement:"top-end"}),await h(A(l))},C=we().shape({statusName:B().required("Field Name is required"),colorCode:B().required("Please Select Color")});return a.jsx(Ce,{innerRef:e,initialValues:{statusName:m==="Edit"?i==null?void 0:i.statusName:"",colorCode:m==="Edit"?i==null?void 0:i.colorCode:""},validationSchema:C,onSubmit:async(u,{setSubmitting:o})=>{m==="Add"?await g("Add",u,null,s,M):await g("Edit",u,i,s,M),o(!1)},children:({touched:u,errors:o,values:f,setFieldValue:h})=>a.jsxs(je,{children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(O,{label:"Status Name",invalid:o.statusName&&u.statusName,errorMessage:o.statusName,children:a.jsx(P,{type:"text",autoComplete:"off",name:"statusName",placeholder:"Status Name",component:H,prefix:a.jsx(pe,{className:"text-xl"})})})}),a.jsx("div",{children:a.jsx(O,{label:"Color",invalid:o.colorCode&&u.colorCode,children:a.jsx(P,{invalid:o.colorCode&&u.colorCode,placeholder:"Color",name:"colorCode",render:({field:x})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:0},children:[a.jsx(De,{field:x}),o.colorCode&&a.jsx("div",{style:{marginTop:15,marginLeft:5,color:"red"},children:o.colorCode})]})})})})]}),a.jsx(Se,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:a.jsxs("div",{className:"md:flex items-center",children:[a.jsx(k,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:r,children:"Cancel"}),a.jsx(k,{size:"sm",type:"submit",variant:"solid",loading:n,icon:a.jsx(be,{}),children:"Save"})]})})]})})});Ie.displayName="StatusLeadForm";const Ve=()=>{const t=S(),{deleteConfirmation:e,selectedStatus:s,ModuleId:n}=N(r=>{var g;return(g=r==null?void 0:r.crmLeadStatus)==null?void 0:g.data}),i=()=>{t(_(!1))},m=(r,g,C,u)=>{var f,h,x;const o=(f=r==null?void 0:r.payload)==null?void 0:f.success;g.push(a.jsx(K,{title:o?C:u,type:o?"success":"danger",duration:2500,children:o?(h=r==null?void 0:r.payload)==null?void 0:h.message:(x=r==null?void 0:r.error)==null?void 0:x.message}),{placement:"top-end"})},l=async()=>{t(_(!1));const r=await t(Re(s==null?void 0:s.id));m(r,M,"Successfully Deleted","Something Went Wrong !!!"),await t(A(n))};return a.jsx(Ne,{isOpen:e,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:l,children:a.jsx("p",{children:"Are you sure you want to delete this Custom Field of Lead? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmLeadStatus",Be);const We=()=>{const t=S(),{dialogMode:e,isDialogOpen:s}=N(m=>{var l;return(l=m==null?void 0:m.crmLeadStatus)==null?void 0:l.data}),n=()=>{t(z(!1))},{getModule:i}=Te();return y.useEffect(()=>{(async()=>{try{await t(J(!0));const l=await i("leads");await t(A(l)),await t(Oe(l))}catch(l){await t(J(!1)),console.error("Error fetching module data:",l)}})()},[]),a.jsxs(a.Fragment,{children:[a.jsx(He,{}),a.jsx(Ke,{}),a.jsxs(ye,{isOpen:s,onClose:n,children:[a.jsxs("h5",{className:"mb-4",children:[e==="Edit"?"Edit":"Add New"," Status"]}),a.jsx(Ie,{})]}),a.jsx(Ve,{})]})},_e="crmTasksStatus",U=w("crm/status",async({id:t,payload:e})=>{var s,n;try{return(await ne(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),G=w("crmStatus/data/editStatus",async({StatusId:t,updatedData:e})=>{var s,n;try{return(await ie(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),Ue=w("crmStatus/data/deleteStatus",async t=>{var e,s;try{return await de(t)}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),I=w("crmStatus/data/getStatus",async t=>(await re(t)).data),Ge={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Qe={loading:!1,tableData:Ge,displayedStatus:[],status:[],ModuleId:[],isDialogOpen:!1,dialogMode:"Add",selectedStatus:null,deleteConfirmation:!1},Le=ae({name:`${_e}/state`,initialState:Qe,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const s=t.status.filter(n=>n.statusName.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedStatus=s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedStatus:(t,e)=>{t.selectedStatus=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload},setLoading:(t,e)=>{t.loading=e.payload},setModule:(t,e)=>{t.ModuleId=e.payload}},extraReducers:t=>{t.addCase(U.fulfilled,(e,s)=>{e.loading=!1}).addCase(U.pending,e=>{e.loading=!0}).addCase(G.fulfilled,(e,s)=>{e.loading=!1}).addCase(G.pending,e=>{e.loading=!0}).addCase(I.fulfilled,(e,s)=>{var n;e.status=s==null?void 0:s.payload.data,e.tableData.total=(n=s.payload.data)==null?void 0:n.length,e.displayedStatus=s==null?void 0:s.payload.data.slice(0,10),e.loading=!1}).addCase(I.pending,e=>{e.loading=!0})}}),{setModule:Je,setLoading:Y,setTableData:q,setDialogToggle:$,setDialogMode:Fe,setSelectedStatus:Z,toggleDeleteConfirmation:Q}=Le.actions,Xe=Le.reducer,Ye=te({data:Xe}),T=se,Ee=y.forwardRef((t,e)=>{const{onInputChange:s}=t,n=ge(i,500);function i(l){s==null||s(l)}const m=l=>{n(l.target.value)};return a.jsx(H,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:a.jsx(ce,{className:"text-lg"}),onChange:m})});Ee.displayName="StatusTaskTableSearch";const Ze=()=>{const t=S(),e=y.useRef(null),{ModuleId:s,tableData:n}=T(l=>{var r;return(r=l==null?void 0:l.crmTasksStatus)==null?void 0:r.data}),i=l=>{const r=b(n);r.query=l,r.pageIndex=1,typeof l=="string"&&l.length>1&&m(r),typeof l=="string"&&l.length===0&&m(r)},m=l=>{t(l?q(l):I(s))};return a.jsxs("div",{className:"md:flex items-center justify-between",children:[a.jsx("div",{className:"md:flex items-center gap-4",children:a.jsx(Ee,{ref:e,onInputChange:i})}),a.jsx("div",{className:"mb-4",children:a.jsx(k,{size:"sm",onClick:()=>{t($(!0)),t(Fe("Add"))},children:"Add New"})})]})},ea=()=>{const t=S(),e=T(c=>c.crmTasksStatus.data.loading),s=v("roles","canModify"),n=v("roles","canDelete"),{pageIndex:i,pageSize:m,sort:l,query:r,total:g}=T(c=>{var d,p;return(p=(d=c.crmTasksStatus)==null?void 0:d.data)==null?void 0:p.tableData}),C=T(c=>{var d,p;return(p=(d=c.crmTasksStatus)==null?void 0:d.data)==null?void 0:p.displayedStatus}),u=({row:c})=>{const d=S();fe();const p=()=>{d(Z(c)),d($(!0)),d(Fe("Edit"))},j=async()=>{await d(Z(c)),d(Q(!0))};return a.jsxs("div",{className:"flex justify-start text-base",children:[a.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:p,children:a.jsx(me,{})}),a.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:j,children:a.jsx(ue,{})})]})},o=y.useMemo(()=>({pageIndex:i,pageSize:m,sort:l,query:r,total:g}),[i,m,l,r,g]),f=y.useMemo(()=>[{header:"Action",id:"action",cell:d=>a.jsx(u,{row:d.row.original})},{header:"Status Name",accessorKey:"statusName",cell:d=>d.row.original.statusName},{header:"isActive",accessorKey:"isActive",cell:d=>d.row.original.isActive?"Active":"Deactive"},{header:"Color",cell:d=>{const p=d.row.original;return a.jsxs("div",{className:"flex items-center",children:[a.jsx(xe,{style:{backgroundColor:`${p.colorCode}`}}),a.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:p.colorCode})]})}}],[s,n]),h=c=>{const d=b(o);d.pageIndex=c,t(q(d))},x=c=>{const d=b(o);d.pageSize=Number(c),d.pageIndex=1,t(q(d))},D=c=>{const d=b(o);d.sort=c,t(q(d))};return a.jsx("div",{children:a.jsx(he,{columns:f,data:C,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:h,onSelectChange:x,onSort:D})})},ze=y.forwardRef((t,e)=>{const s=S(),{loading:n,selectedStatus:i,dialogMode:m,ModuleId:l}=T(u=>{var o;return(o=u==null?void 0:u.crmTasksStatus)==null?void 0:o.data}),r=()=>{s($(!1))},g=async(u,o,f,h,x)=>{var L,F,E;const D={statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode},c=await h(u==="Add"?U({id:l,payload:D}):G({StatusId:f==null?void 0:f.id,updatedData:{statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode}}));let d="",p="",j="danger";(L=c==null?void 0:c.payload)!=null&&L.success?(p=(F=c==null?void 0:c.payload)==null?void 0:F.message,j="success",h($(!1))):(d="Something went wrong !!!",p=(E=c==null?void 0:c.error)==null?void 0:E.message),x.push(a.jsx(K,{title:d,type:j,duration:2500,children:p}),{placement:"top-end"}),await h(I(l))},C=we().shape({statusName:B().required("Field Name is required"),colorCode:B().required("Please Select Color")});return a.jsx(Ce,{innerRef:e,initialValues:{statusName:m==="Edit"?i==null?void 0:i.statusName:"",colorCode:m==="Edit"?i==null?void 0:i.colorCode:""},validationSchema:C,onSubmit:async(u,{setSubmitting:o})=>{m==="Add"?await g("Add",u,null,s,M):await g("Edit",u,i,s,M),o(!1)},children:({touched:u,errors:o,values:f,setFieldValue:h})=>a.jsxs(je,{children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(O,{label:"Status Name",invalid:o.statusName&&u.statusName,errorMessage:o.statusName,children:a.jsx(P,{type:"text",autoComplete:"off",name:"statusName",placeholder:"Status Name",component:H,prefix:a.jsx(pe,{className:"text-xl"})})})}),a.jsx("div",{className:"col-span-1",children:a.jsx(O,{invalid:o.colorCode&&u.colorCode,label:"Color",children:a.jsx(P,{invalid:o.colorCode&&u.colorCode,placeholder:"Color",name:"colorCode",render:({field:x})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:0},children:[a.jsx(De,{field:x}),o.colorCode&&a.jsx("div",{style:{marginTop:15,marginLeft:5,color:"red"},children:o.colorCode})]})})})})]}),a.jsx(Se,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:a.jsxs("div",{className:"md:flex items-center",children:[a.jsx(k,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:r,children:"Cancel"}),a.jsx(k,{size:"sm",type:"submit",variant:"solid",loading:n,icon:a.jsx(be,{}),children:"Save"})]})})]})})});ze.displayName="StatusTaskForm";const aa=()=>{const t=S(),{deleteConfirmation:e,selectedStatus:s,ModuleId:n}=T(r=>{var g;return(g=r==null?void 0:r.crmTasksStatus)==null?void 0:g.data}),i=()=>{t(Q(!1))},m=(r,g,C,u)=>{var f,h,x;const o=(f=r==null?void 0:r.payload)==null?void 0:f.success;g.push(a.jsx(K,{title:o?C:u,type:o?"success":"danger",duration:2500,children:o?(h=r==null?void 0:r.payload)==null?void 0:h.message:(x=r==null?void 0:r.error)==null?void 0:x.message}),{placement:"top-end"})},l=async()=>{t(Q(!1));const r=await t(Ue(s==null?void 0:s.id));m(r,M,"Successfully Deleted","Something Went Wrong !!!"),await t(I(n))};return a.jsx(Ne,{isOpen:e,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:l,children:a.jsx("p",{children:"Are you sure you want to delete this Custom Field of Task? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmTasksStatus",Ye);const ta=()=>{const t=S(),{isDialogOpen:e,dialogMode:s}=T(m=>{var l;return(l=m.crmTasksStatus)==null?void 0:l.data}),n=()=>{t($(!1))},{getModule:i}=Te();return y.useEffect(()=>{(async()=>{try{await t(Y(!0));const l=await i("tasks");await t(I(l)),await t(Je(l))}catch(l){await t(Y(!1)),console.error("Error fetching module data:",l)}})()},[]),a.jsxs(a.Fragment,{children:[a.jsx(Ze,{}),a.jsx(ea,{}),a.jsxs(ye,{isOpen:e,onClose:n,children:[a.jsxs("h5",{className:"mb-4",children:[s==="Edit"?"Edit":"Add New"," Status"]}),a.jsx(ze,{})]}),a.jsx(aa,{})]})},{TabNav:sa,TabList:oa}=le,ee={StatusLead:{label:"Lead",path:"StatusLead"},StatusTask:{label:"Task",path:"StatusTask"}},la=()=>{const[t,e]=y.useState("StatusLead"),s=n=>{e(n)};return a.jsxs(a.Fragment,{children:[a.jsx(le,{value:t,variant:"pill",onChange:n=>s(n),children:a.jsx(oa,{children:Object.keys(ee).map(n=>a.jsx(sa,{value:n,children:ee[n].label},n))})}),a.jsx("div",{className:"py-4",children:a.jsxs(y.Suspense,{fallback:a.jsx(a.Fragment,{children:"loading..."}),children:[t==="StatusLead"&&a.jsx(We,{}),t==="StatusTask"&&a.jsx(ta,{})]})})]})},dt=la;export{dt as S};
