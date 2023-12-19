import{am as T,an as B,ao as H,ap as V,r as y,j as o,a as x,aq as W}from"./index-03c04ff8.js";import{M as _,J as G,az as J,aA as K}from"./CrmService-429b7a33.js";import{B as I}from"./Button-43b0b556.js";import{I as L}from"./Input-a694346c.js";import{b as U,O as Q,P as X}from"./index.esm-0ab06d90.js";import{d as Y}from"./debounce-0c7618c3.js";import{c as N}from"./cloneDeep-057bcc25.js";import{D as Z}from"./DataTable-9d817024.js";import{u as z}from"./checkEditUpdate-e2f0b2aa.js";import{u as ee}from"./useThemeClass-701da38c.js";import"./Alert-150a77d9.js";import"./index-b28ee968.js";import"./Badge-9e03359a.js";import"./RangeCalendar-fd86ac0e.js";import"./Card-ac72e1c3.js";import"./index-65a265b2.js";import"./index-564117fd.js";import{D as ae}from"./Dialog-bdcf65b5.js";import"./Drawer-4f1dc3e9.js";import"./index-b8f5d3a3.js";import{F as te,a as oe}from"./FormItem-e51bc525.js";import"./toString-6216203c.js";import"./index-e73ce215.js";import"./index-f63d6955.js";import"./index-b7b7180a.js";import{N as O,t as E}from"./toast-5fc5fe7c.js";import"./Pagination-2b3f9c70.js";import"./Progress-e8ec294d.js";import"./index-dafa1633.js";import"./ScrollBar-5778a435.js";import"./index-4125dbd0.js";import"./Select-f865911a.js";import"./Skeleton-6f5440b9.js";import"./index-2aace800.js";import"./Switcher-3f72cb43.js";import"./index-0c00bbc6.js";import"./index-de17390b.js";import"./Tag-5499707e.js";import"./index-81144042.js";import"./index-e3eb4615.js";import"./Tooltip-d932d71c.js";import"./Upload-d3b407d2.js";import"./Views-6cf30eea.js";import"./chart.constant-b84e8d83.js";import"./GrowShrinkTag-0021728a.js";import"./react-tooltip.min-8141b696.js";import"./RichTextEditor-95b64ad3.js";import"./SegmentItemOption-35337f78.js";import{S as se}from"./StickyFooter-cff7ba0d.js";import"./SvgIcon-44fe3b92.js";import{F as re,a as ce,b as ie}from"./formik.esm-7069ec7e.js";import{A as ne}from"./index.esm-563c8425.js";import{a as le}from"./index.esm-aa12ccee.js";import{c as de,a as me}from"./index.esm-22b7b6b8.js";import{C as ue}from"./ConfirmDialog-f0f4366f.js";const pe="crmSource",M=T("crmSource/data/createSource",async a=>{var e,t;try{return(await _(a)).data}catch(s){throw new Error((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)}}),b=T("crmSource/data/getSource",async()=>{var a,e;try{return(await G()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),ge=T("crmSource/data/editSource",async({id:a,updatedData:e})=>{var t,s;try{return(await J(a,e)).data}catch(c){throw new Error((s=(t=c==null?void 0:c.response)==null?void 0:t.data)==null?void 0:s.message)}}),Se=T("crmLeads/data/deleteSource",async a=>{var e,t;try{return await K(a)}catch(s){throw new Error((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)}}),fe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},he={loading:!1,tableData:fe,displayedSourceList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedSource:null,deleteConfirmation:!1},R=B({name:`${pe}/state`,initialState:he,reducers:{setTableData:(a,e)=>{a.tableData=e.payload,console.log(a.categoryList);const t=a.categoryList.filter(s=>s.sources.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=t.length,a.displayedSourceList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedSource=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(M.fulfilled,(e,t)=>{e.loading=!1}).addCase(M.pending,e=>{e.loading=!0}).addCase(b.fulfilled,(e,t)=>{var s,c,i,r,l;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(s=t.payload.data)==null?void 0:s.length,e.displayedSourceList=t==null?void 0:t.payload.data.slice(((c=e==null?void 0:e.tableData)==null?void 0:c.pageSize)*(((i=e==null?void 0:e.tableData)==null?void 0:i.pageIndex)-1),((r=e==null?void 0:e.tableData)==null?void 0:r.pageSize)*((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex))}).addCase(b.pending,e=>{e.loading=!0})}}),{setTableData:A,setDialogToggle:C,setDialogMode:v,setSelectedState:F,toggleDeleteConfirmation:k}=R.actions,ye=R.reducer,xe=H({data:ye}),S=V,q=y.forwardRef((a,e)=>{const{onInputChange:t}=a,s=Y(c,500);function c(r){t==null||t(r)}const i=r=>{s(r.target.value)};return o.jsx(L,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:o.jsx(U,{className:"text-lg"}),onChange:i})});q.displayName="StateTableSearch";const be=()=>{const a=x(),e=y.useRef(null),t=S(i=>i.crmSource.data.tableData),s=i=>{const r=N(t);r.query=i,r.pageIndex=1,typeof i=="string"&&i.length>1&&c(r),typeof i=="string"&&i.length===0&&c(r)},c=i=>{a(i?A(i):b())};return o.jsxs("div",{className:"md:flex items-center justify-between",children:[o.jsx("div",{className:"md:flex items-center gap-4",children:o.jsx(q,{ref:e,onInputChange:s})}),o.jsx("div",{className:"mb-4",children:o.jsx(I,{size:"sm",onClick:()=>{a(C(!0)),a(v("Add"))},children:"Add New"})})]})},De=()=>{const a=x(),e=S(d=>d.crmSource.data.loading),t=z("roles","canModify"),s=z("roles","canDelete"),{pageIndex:c,pageSize:i,sort:r,query:l,total:u}=S(d=>d.crmSource.data.tableData),f=S(d=>d.crmSource.data.displayedSourceList);console.log({data:f});const p=({row:d})=>{const n=x();ee();const w=()=>{n(F(d)),n(C(!0)),n(v("Edit"))},$=async()=>{await n(F(d)),n(k(!0))};return o.jsxs("div",{className:"flex justify-start text-base",children:[o.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:w,children:o.jsx(Q,{})}),o.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:$,children:o.jsx(X,{})})]})},g=y.useMemo(()=>({pageIndex:c,pageSize:i,sort:r,query:l,total:u}),[c,i,r,l,u]),m=y.useMemo(()=>[{header:"Action",id:"action",cell:n=>o.jsx(p,{row:n.row.original})},{header:"Source",accessorKey:"sources",cell:n=>n.row.original.sources}],[t,s]),h=d=>{const n=N(g);n.pageIndex=d,a(A(n))},D=d=>{const n=N(g);n.pageSize=Number(d),n.pageIndex=1,a(A(n))},j=d=>{const n=N(g);n.sort=d,a(A(n))};return o.jsx("div",{children:o.jsx(Z,{columns:m,data:f,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:h,onSelectChange:D,onSort:j})})},Ce=de().shape({sources:me().required("Source name is required")}),P=y.forwardRef((a,e)=>{const t=x(),s=S(l=>l.crmSource.data.dialogMode),c=S(l=>l.crmSource.data.selectedSource),i=()=>{t(C(!1))};console.log(s);const r=async(l,u,f,p,g)=>{var d,n,w;const m=await p(l==="Add"?M(u):ge({id:f==null?void 0:f.id,updatedData:u}));let h="",D="",j="danger";(d=m==null?void 0:m.payload)!=null&&d.success?(h="Successfully Added",D=(n=m==null?void 0:m.payload)==null?void 0:n.message,j="success"):(h="Something went wrong !!!",D=(w=m==null?void 0:m.error)==null?void 0:w.message),g.push(o.jsx(O,{title:h,type:j,duration:2500,children:D}),{placement:"top-end"}),p(C(!1)),await p(b())};return o.jsx(re,{innerRef:e,initialValues:{sources:s==="Edit"?c==null?void 0:c.sources:""},validationSchema:Ce,onSubmit:async(l,{setSubmitting:u})=>{s==="Add"?await r("Add",l,null,t,E):await r("Edit",l,c,t,E),u(!1)},children:({touched:l,errors:u,values:f,setFieldValue:p})=>o.jsxs(ce,{children:[o.jsx(te,{children:o.jsx(oe,{label:"Source",invalid:u.sources&&l.sources,errorMessage:u.sources,children:o.jsx(ie,{type:"text",autoComplete:"off",name:"sources",placeholder:"Source",component:L,prefix:o.jsx(le,{className:"text-xl"})})})}),o.jsx(se,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:o.jsxs("div",{className:"md:flex items-center",children:[o.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:i,children:"Cancel"}),o.jsx(I,{size:"sm",type:"submit",variant:"solid",icon:o.jsx(ne,{}),children:"Save"})]})})]})})});P.displayName="SourceForm";const je=()=>{const a=x(),e=S(r=>r.crmSource.data.deleteConfirmation),t=S(r=>r.crmSource.data.selectedSource),s=()=>{a(k(!1))},c=(r,l,u,f)=>{var g,m,h;const p=(g=r==null?void 0:r.payload)==null?void 0:g.success;l.push(o.jsx(O,{title:p?u:f,type:p?"success":"danger",duration:2500,children:p?(m=r==null?void 0:r.payload)==null?void 0:m.message:(h=r==null?void 0:r.error)==null?void 0:h.message}),{placement:"top-end"})},i=async()=>{a(k(!1));const r=await a(Se(t==null?void 0:t.id));c(r,E,"Successfully Deleted","Something Went Wrong !!!"),await a(b())};return o.jsx(ue,{isOpen:e,type:"danger",title:"Delete Source",confirmButtonColor:"red-600",onClose:s,onRequestClose:s,onCancel:s,onConfirm:i,children:o.jsx("p",{children:"Are you sure you want to delete this Source? All record related to this Source will be deleted as well. This action cannot be undone."})})};W("crmSource",xe);const we=()=>{const a=x(),e=S(c=>c.crmSource.data.isDialogOpen),t=S(c=>c.crmSource.data.dialogMode),s=()=>{a(C(!1))};return y.useEffect(()=>{a(b())},[]),o.jsxs(o.Fragment,{children:[o.jsx("h5",{className:"mb-2",children:"Source"}),o.jsx(be,{}),o.jsx(De,{}),o.jsxs(ae,{isOpen:e,onClose:s,children:[o.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," Source"]}),o.jsx(P,{})]}),o.jsx(je,{})]})},Aa=we;export{Aa as S};
