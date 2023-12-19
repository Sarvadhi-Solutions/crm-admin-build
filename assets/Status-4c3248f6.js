import{am as w,an as ae,ao as te,ap as se,r as y,j as a,a as S,aq as oe}from"./index-4675262e.js";import{T as le}from"./index-aa614f08.js";import{aF as ne,aG as ie,aH as de,n as re}from"./CrmService-ac08cdaf.js";import{B as k}from"./Button-0b68e0a2.js";import{I as H}from"./Input-b6f85393.js";import{b as ce,O as me,P as ue,Q as pe}from"./index.esm-ff144046.js";import{d as ge}from"./debounce-7228e5e1.js";import{c as b}from"./cloneDeep-477b9741.js";import{D as he}from"./DataTable-1574da48.js";import{u as v}from"./checkEditUpdate-13f2672a.js";import{u as fe}from"./useThemeClass-d82dec7a.js";import"./Alert-e71f6da7.js";import"./index-32f51c8f.js";import{B as xe}from"./Badge-8de88fc8.js";import"./RangeCalendar-7055646c.js";import"./Card-1a4ea392.js";import"./index-b0ec1b4c.js";import"./index-40ee1fcd.js";import{D as ye}from"./Dialog-2674822d.js";import"./Drawer-4463e2fa.js";import"./index-395f0e43.js";import{a as O}from"./FormItem-f0a568d5.js";import"./toString-5a26993f.js";import"./index-799960ed.js";import"./index-567c5b37.js";import"./index-29fb88aa.js";import{N as K,t as M}from"./toast-3dd25308.js";import"./Pagination-2e203a3f.js";import"./Progress-163e7627.js";import"./index-ac935edf.js";import"./ScrollBar-c918a49a.js";import"./index-befed326.js";import"./Select-ecee390b.js";import"./Skeleton-5516a2a7.js";import"./index-819658e8.js";import"./Switcher-abd8f95e.js";import"./index-dc5daab9.js";import"./Tag-613d51b1.js";import"./index-bcfe7745.js";import"./index-9a848025.js";import"./Tooltip-2d93a4c5.js";import"./Upload-e8a604f5.js";import"./Views-96bf4241.js";import"./chart.constant-bd4cec43.js";import"./GrowShrinkTag-0b10ae79.js";import"./react-tooltip.min-a9dd25b4.js";import"./RichTextEditor-d7434d18.js";import"./SegmentItemOption-3a25415c.js";import{S as Se}from"./StickyFooter-e5fda218.js";import"./SvgIcon-5be08616.js";import{F as Ce,a as je,b as P}from"./formik.esm-be6a51d3.js";import{A as be}from"./index.esm-02460da0.js";import{c as we,a as B}from"./index.esm-b46f51f2.js";import{L as De}from"./colorPicker-0cb8c8f6.js";import{C as Ne}from"./ConfirmDialog-4eaa7b26.js";import{u as Te}from"./useGetModule-516b94ce.js";const $e="crmLeadStatus",V=w("crm/custom-fields",async({id:t,payload:e})=>{var s,n;try{return(await ne(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),W=w("crmStatus/data/editStatus",async({StatusId:t,updatedData:e})=>{var s,n;try{return(await ie(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),Re=w("crmStatus/data/deleteStatus",async t=>{var e,s;try{return await de(t)}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),A=w("crmStatus/data/getStatus",async t=>(await re(t)).data),qe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ve={loading:!1,tableData:qe,displayedStatus:[],customFields:[],ModuleId:[],isDialogOpen:!1,dialogMode:"Add",selectedStatus:null,deleteConfirmation:!1},ke=ae({name:`${$e}/state`,initialState:ve,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const s=t.customFields.filter(n=>n.statusName.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedStatus=s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedStatus:(t,e)=>{t.selectedStatus=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload},setLoading:(t,e)=>{t.loading=e.payload},setModule:(t,e)=>{t.ModuleId=e.payload}},extraReducers:t=>{t.addCase(V.fulfilled,(e,s)=>{e.loading=!1}).addCase(V.pending,e=>{e.loading=!0}).addCase(W.fulfilled,(e,s)=>{e.loading=!1}).addCase(W.pending,e=>{e.loading=!0}).addCase(A.fulfilled,(e,s)=>{var n;e.customFields=s==null?void 0:s.payload.data,e.tableData.total=(n=s.payload.data)==null?void 0:n.length,e.displayedStatus=s==null?void 0:s.payload.data.slice(0,10),e.loading=!1}).addCase(A.pending,e=>{})}}),{setModule:Oe,setLoading:J,setTableData:R,setDialogToggle:z,setDialogMode:Me,setSelectedStatus:X,toggleDeleteConfirmation:_}=ke.actions,Pe=ke.reducer,Be=te({data:Pe}),N=se,Ae=y.forwardRef((t,e)=>{const{onInputChange:s}=t,n=ge(i,500);function i(l){s==null||s(l)}const m=l=>{n(l.target.value)};return a.jsx(H,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:a.jsx(ce,{className:"text-lg"}),onChange:m})});Ae.displayName="StatusLeadTableSearch";const He=()=>{const t=S(),e=y.useRef(null),{ModuleId:s,tableData:n}=N(l=>{var r;return(r=l==null?void 0:l.crmLeadStatus)==null?void 0:r.data}),i=l=>{const r=b(n);r.query=l,r.pageIndex=1,typeof l=="string"&&l.length>1&&m(r),typeof l=="string"&&l.length===0&&m(r)},m=l=>{t(l?R(l):A(s))};return a.jsxs("div",{className:"md:flex items-center justify-between",children:[a.jsx("div",{className:"md:flex items-center gap-4",children:a.jsx(Ae,{ref:e,onInputChange:i})}),a.jsx("div",{className:"mb-4",children:a.jsx(k,{size:"sm",onClick:()=>{t(z(!0)),t(Me("Add"))},children:"Add New"})})]})},Ke=()=>{const t=S(),e=N(c=>c.crmLeadStatus.data.loading),s=v("roles","canModify"),n=v("roles","canDelete"),{pageIndex:i,pageSize:m,sort:l,query:r,total:g}=N(c=>c.crmLeadStatus.data.tableData),C=N(c=>c.crmLeadStatus.data.displayedStatus),u=({row:c})=>{const d=S();fe();const p=()=>{d(X(c)),d(z(!0)),d(Me("Edit"))},j=async()=>{await d(X(c)),d(_(!0))};return a.jsxs("div",{className:"flex justify-start text-base",children:[a.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:p,children:a.jsx(me,{})}),a.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:j,children:a.jsx(ue,{})})]})},o=y.useMemo(()=>({pageIndex:i,pageSize:m,sort:l,query:r,total:g}),[i,m,l,r,g]),f=y.useMemo(()=>[{header:"Action",id:"action",cell:d=>a.jsx(u,{row:d.row.original})},{header:"Status Name",accessorKey:"statusName",cell:d=>d.row.original.statusName},{header:"isActive",accessorKey:"isActive",cell:d=>d.row.original.isActive?"Active":"Deactive"},{header:"Color",cell:d=>{const p=d.row.original;return a.jsxs("div",{className:"flex items-center",children:[a.jsx(xe,{style:{backgroundColor:`${p.colorCode}`}}),a.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:p.colorCode})]})}}],[s,n]),h=c=>{const d=b(o);d.pageIndex=c,t(R(d))},x=c=>{const d=b(o);d.pageSize=Number(c),d.pageIndex=1,t(R(d))},D=c=>{const d=b(o);d.sort=c,t(R(d))};return a.jsx("div",{children:a.jsx(he,{columns:f,data:C,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:h,onSelectChange:x,onSort:D})})},Ie=y.forwardRef((t,e)=>{const s=S(),{loading:n,selectedStatus:i,dialogMode:m,ModuleId:l}=N(u=>{var o;return(o=u==null?void 0:u.crmLeadStatus)==null?void 0:o.data}),r=()=>{s(z(!1))},g=async(u,o,f,h,x)=>{var L,F,E;const D={statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode},c=await h(u==="Add"?V({id:l,payload:D}):W({StatusId:f==null?void 0:f.id,updatedData:{statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode}}));let d="",p="",j="danger";(L=c==null?void 0:c.payload)!=null&&L.success?(d=u==="Add"?"Successfully Added":"Successfully Updated",p=(F=c==null?void 0:c.payload)==null?void 0:F.message,j="success",h(z(!1))):(d="Something went wrong !!!",p=(E=c==null?void 0:c.error)==null?void 0:E.message),x.push(a.jsx(K,{title:d,type:j,duration:2500,children:p}),{placement:"top-end"}),await h(A(l))},C=we().shape({statusName:B().required("Field Name is required"),colorCode:B().required("Please Select Color")});return a.jsx(Ce,{innerRef:e,initialValues:{statusName:m==="Edit"?i==null?void 0:i.statusName:"",colorCode:m==="Edit"?i==null?void 0:i.colorCode:""},validationSchema:C,onSubmit:async(u,{setSubmitting:o})=>{m==="Add"?await g("Add",u,null,s,M):await g("Edit",u,i,s,M),o(!1)},children:({touched:u,errors:o,values:f,setFieldValue:h})=>a.jsxs(je,{children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(O,{label:"Status Name",invalid:o.statusName&&u.statusName,errorMessage:o.statusName,children:a.jsx(P,{type:"text",autoComplete:"off",name:"statusName",placeholder:"Status Name",component:H,prefix:a.jsx(pe,{className:"text-xl"})})})}),a.jsx("div",{children:a.jsx(O,{label:"Color",invalid:o.colorCode&&u.colorCode,children:a.jsx(P,{invalid:o.colorCode&&u.colorCode,placeholder:"Color",name:"colorCode",render:({field:x})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:0},children:[a.jsx(De,{field:x}),o.colorCode&&a.jsx("div",{style:{marginTop:15,marginLeft:5,color:"red"},children:o.colorCode})]})})})})]}),a.jsx(Se,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:a.jsxs("div",{className:"md:flex items-center",children:[a.jsx(k,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:r,children:"Cancel"}),a.jsx(k,{size:"sm",type:"submit",variant:"solid",loading:n,icon:a.jsx(be,{}),children:"Save"})]})})]})})});Ie.displayName="StatusLeadForm";const Ve=()=>{const t=S(),{deleteConfirmation:e,selectedStatus:s,ModuleId:n}=N(r=>{var g;return(g=r==null?void 0:r.crmLeadStatus)==null?void 0:g.data}),i=()=>{t(_(!1))},m=(r,g,C,u)=>{var f,h,x;const o=(f=r==null?void 0:r.payload)==null?void 0:f.success;g.push(a.jsx(K,{title:o?C:u,type:o?"success":"danger",duration:2500,children:o?(h=r==null?void 0:r.payload)==null?void 0:h.message:(x=r==null?void 0:r.error)==null?void 0:x.message}),{placement:"top-end"})},l=async()=>{t(_(!1));const r=await t(Re(s==null?void 0:s.id));m(r,M,"Successfully Deleted","Something Went Wrong !!!"),await t(A(n))};return a.jsx(Ne,{isOpen:e,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:l,children:a.jsx("p",{children:"Are you sure you want to delete this Custom Field of Lead? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmLeadStatus",Be);const We=()=>{const t=S(),{dialogMode:e,isDialogOpen:s}=N(m=>{var l;return(l=m==null?void 0:m.crmLeadStatus)==null?void 0:l.data}),n=()=>{t(z(!1))},{getModule:i}=Te();return y.useEffect(()=>{(async()=>{try{await t(J(!0));const l=await i("leads");await t(A(l)),await t(Oe(l))}catch(l){await t(J(!1)),console.error("Error fetching module data:",l)}})()},[]),a.jsxs(a.Fragment,{children:[a.jsx(He,{}),a.jsx(Ke,{}),a.jsxs(ye,{isOpen:s,onClose:n,children:[a.jsxs("h5",{className:"mb-4",children:[e==="Edit"?"Edit":"Add New"," Status"]}),a.jsx(Ie,{})]}),a.jsx(Ve,{})]})},_e="crmTasksStatus",U=w("crm/status",async({id:t,payload:e})=>{var s,n;try{return(await ne(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),G=w("crmStatus/data/editStatus",async({StatusId:t,updatedData:e})=>{var s,n;try{return(await ie(t,e)).data}catch(i){throw new Error((n=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:n.message)}}),Ue=w("crmStatus/data/deleteStatus",async t=>{var e,s;try{return await de(t)}catch(n){throw new Error((s=(e=n==null?void 0:n.response)==null?void 0:e.data)==null?void 0:s.message)}}),I=w("crmStatus/data/getStatus",async t=>(await re(t)).data),Ge={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Qe={loading:!1,tableData:Ge,displayedStatus:[],status:[],ModuleId:[],isDialogOpen:!1,dialogMode:"Add",selectedStatus:null,deleteConfirmation:!1},Le=ae({name:`${_e}/state`,initialState:Qe,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const s=t.status.filter(n=>n.statusName.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedStatus=s.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedStatus:(t,e)=>{t.selectedStatus=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload},setLoading:(t,e)=>{t.loading=e.payload},setModule:(t,e)=>{t.ModuleId=e.payload}},extraReducers:t=>{t.addCase(U.fulfilled,(e,s)=>{e.loading=!1}).addCase(U.pending,e=>{e.loading=!0}).addCase(G.fulfilled,(e,s)=>{e.loading=!1}).addCase(G.pending,e=>{e.loading=!0}).addCase(I.fulfilled,(e,s)=>{var n;e.status=s==null?void 0:s.payload.data,e.tableData.total=(n=s.payload.data)==null?void 0:n.length,e.displayedStatus=s==null?void 0:s.payload.data.slice(0,10),e.loading=!1}).addCase(I.pending,e=>{e.loading=!0})}}),{setModule:Je,setLoading:Y,setTableData:q,setDialogToggle:$,setDialogMode:Fe,setSelectedStatus:Z,toggleDeleteConfirmation:Q}=Le.actions,Xe=Le.reducer,Ye=te({data:Xe}),T=se,Ee=y.forwardRef((t,e)=>{const{onInputChange:s}=t,n=ge(i,500);function i(l){s==null||s(l)}const m=l=>{n(l.target.value)};return a.jsx(H,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:a.jsx(ce,{className:"text-lg"}),onChange:m})});Ee.displayName="StatusTaskTableSearch";const Ze=()=>{const t=S(),e=y.useRef(null),{ModuleId:s,tableData:n}=T(l=>{var r;return(r=l==null?void 0:l.crmTasksStatus)==null?void 0:r.data}),i=l=>{const r=b(n);r.query=l,r.pageIndex=1,typeof l=="string"&&l.length>1&&m(r),typeof l=="string"&&l.length===0&&m(r)},m=l=>{t(l?q(l):I(s))};return a.jsxs("div",{className:"md:flex items-center justify-between",children:[a.jsx("div",{className:"md:flex items-center gap-4",children:a.jsx(Ee,{ref:e,onInputChange:i})}),a.jsx("div",{className:"mb-4",children:a.jsx(k,{size:"sm",onClick:()=>{t($(!0)),t(Fe("Add"))},children:"Add New"})})]})},ea=()=>{const t=S(),e=T(c=>c.crmTasksStatus.data.loading),s=v("roles","canModify"),n=v("roles","canDelete"),{pageIndex:i,pageSize:m,sort:l,query:r,total:g}=T(c=>{var d,p;return(p=(d=c.crmTasksStatus)==null?void 0:d.data)==null?void 0:p.tableData}),C=T(c=>{var d,p;return(p=(d=c.crmTasksStatus)==null?void 0:d.data)==null?void 0:p.displayedStatus}),u=({row:c})=>{const d=S();fe();const p=()=>{d(Z(c)),d($(!0)),d(Fe("Edit"))},j=async()=>{await d(Z(c)),d(Q(!0))};return a.jsxs("div",{className:"flex justify-start text-base",children:[a.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:p,children:a.jsx(me,{})}),a.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:j,children:a.jsx(ue,{})})]})},o=y.useMemo(()=>({pageIndex:i,pageSize:m,sort:l,query:r,total:g}),[i,m,l,r,g]),f=y.useMemo(()=>[{header:"Action",id:"action",cell:d=>a.jsx(u,{row:d.row.original})},{header:"Status Name",accessorKey:"statusName",cell:d=>d.row.original.statusName},{header:"isActive",accessorKey:"isActive",cell:d=>d.row.original.isActive?"Active":"Deactive"},{header:"Color",cell:d=>{const p=d.row.original;return a.jsxs("div",{className:"flex items-center",children:[a.jsx(xe,{style:{backgroundColor:`${p.colorCode}`}}),a.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:p.colorCode})]})}}],[s,n]),h=c=>{const d=b(o);d.pageIndex=c,t(q(d))},x=c=>{const d=b(o);d.pageSize=Number(c),d.pageIndex=1,t(q(d))},D=c=>{const d=b(o);d.sort=c,t(q(d))};return a.jsx("div",{children:a.jsx(he,{columns:f,data:C,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:o.total,pageIndex:o.pageIndex,pageSize:o.pageSize},onPaginationChange:h,onSelectChange:x,onSort:D})})},ze=y.forwardRef((t,e)=>{const s=S(),{loading:n,selectedStatus:i,dialogMode:m,ModuleId:l}=T(u=>{var o;return(o=u==null?void 0:u.crmTasksStatus)==null?void 0:o.data}),r=()=>{s($(!1))},g=async(u,o,f,h,x)=>{var L,F,E;const D={statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode},c=await h(u==="Add"?U({id:l,payload:D}):G({StatusId:f==null?void 0:f.id,updatedData:{statusName:o==null?void 0:o.statusName,colorCode:o==null?void 0:o.colorCode}}));let d="",p="",j="danger";(L=c==null?void 0:c.payload)!=null&&L.success?(p=(F=c==null?void 0:c.payload)==null?void 0:F.message,j="success",h($(!1))):(d="Something went wrong !!!",p=(E=c==null?void 0:c.error)==null?void 0:E.message),x.push(a.jsx(K,{title:d,type:j,duration:2500,children:p}),{placement:"top-end"}),await h(I(l))},C=we().shape({statusName:B().required("Field Name is required"),colorCode:B().required("Please Select Color")});return a.jsx(Ce,{innerRef:e,initialValues:{statusName:m==="Edit"?i==null?void 0:i.statusName:"",colorCode:m==="Edit"?i==null?void 0:i.colorCode:""},validationSchema:C,onSubmit:async(u,{setSubmitting:o})=>{m==="Add"?await g("Add",u,null,s,M):await g("Edit",u,i,s,M),o(!1)},children:({touched:u,errors:o,values:f,setFieldValue:h})=>a.jsxs(je,{children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(O,{label:"Status Name",invalid:o.statusName&&u.statusName,errorMessage:o.statusName,children:a.jsx(P,{type:"text",autoComplete:"off",name:"statusName",placeholder:"Status Name",component:H,prefix:a.jsx(pe,{className:"text-xl"})})})}),a.jsx("div",{className:"col-span-1",children:a.jsx(O,{invalid:o.colorCode&&u.colorCode,label:"Color",children:a.jsx(P,{invalid:o.colorCode&&u.colorCode,placeholder:"Color",name:"colorCode",render:({field:x})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:0},children:[a.jsx(De,{field:x}),o.colorCode&&a.jsx("div",{style:{marginTop:15,marginLeft:5,color:"red"},children:o.colorCode})]})})})})]}),a.jsx(Se,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:a.jsxs("div",{className:"md:flex items-center",children:[a.jsx(k,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:r,children:"Cancel"}),a.jsx(k,{size:"sm",type:"submit",variant:"solid",loading:n,icon:a.jsx(be,{}),children:"Save"})]})})]})})});ze.displayName="StatusTaskForm";const aa=()=>{const t=S(),{deleteConfirmation:e,selectedStatus:s,ModuleId:n}=T(r=>{var g;return(g=r==null?void 0:r.crmTasksStatus)==null?void 0:g.data}),i=()=>{t(Q(!1))},m=(r,g,C,u)=>{var f,h,x;const o=(f=r==null?void 0:r.payload)==null?void 0:f.success;g.push(a.jsx(K,{title:o?C:u,type:o?"success":"danger",duration:2500,children:o?(h=r==null?void 0:r.payload)==null?void 0:h.message:(x=r==null?void 0:r.error)==null?void 0:x.message}),{placement:"top-end"})},l=async()=>{t(Q(!1));const r=await t(Ue(s==null?void 0:s.id));m(r,M,"Successfully Deleted","Something Went Wrong !!!"),await t(I(n))};return a.jsx(Ne,{isOpen:e,type:"danger",title:"Delete Custom Field",confirmButtonColor:"red-600",onClose:i,onRequestClose:i,onCancel:i,onConfirm:l,children:a.jsx("p",{children:"Are you sure you want to delete this Custom Field of Task? All record related to this Custom Field will be deleted as well. This action cannot be undone."})})};oe("crmTasksStatus",Ye);const ta=()=>{const t=S(),{isDialogOpen:e,dialogMode:s}=T(m=>{var l;return(l=m.crmTasksStatus)==null?void 0:l.data}),n=()=>{t($(!1))},{getModule:i}=Te();return y.useEffect(()=>{(async()=>{try{await t(Y(!0));const l=await i("tasks");await t(I(l)),await t(Je(l))}catch(l){await t(Y(!1)),console.error("Error fetching module data:",l)}})()},[]),a.jsxs(a.Fragment,{children:[a.jsx(Ze,{}),a.jsx(ea,{}),a.jsxs(ye,{isOpen:e,onClose:n,children:[a.jsxs("h5",{className:"mb-4",children:[s==="Edit"?"Edit":"Add New"," Status"]}),a.jsx(ze,{})]}),a.jsx(aa,{})]})},{TabNav:sa,TabList:oa}=le,ee={StatusLead:{label:"Lead",path:"StatusLead"},StatusTask:{label:"Task",path:"StatusTask"}},la=()=>{const[t,e]=y.useState("StatusLead"),s=n=>{e(n)};return a.jsxs(a.Fragment,{children:[a.jsx(le,{value:t,variant:"pill",onChange:n=>s(n),children:a.jsx(oa,{children:Object.keys(ee).map(n=>a.jsx(sa,{value:n,children:ee[n].label},n))})}),a.jsx("div",{className:"py-4",children:a.jsxs(y.Suspense,{fallback:a.jsx(a.Fragment,{children:"loading..."}),children:[t==="StatusLead"&&a.jsx(We,{}),t==="StatusTask"&&a.jsx(ta,{})]})})]})},dt=la;export{dt as S};
