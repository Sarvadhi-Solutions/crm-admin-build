import{al as T,am as B,an as H,ao as V,r as y,j as o,a as x,aq as W}from"./index-0504f3e5.js";import{M as _,J as G,az as J,aA as K}from"./CrmService-bf5ebfbc.js";import{B as I}from"./Button-895a686e.js";import{I as L}from"./Input-b101ae80.js";import{b as U,O as Q,P as X}from"./index.esm-25dc1721.js";import{d as Y}from"./debounce-79ef0415.js";import{c as N}from"./cloneDeep-9088825f.js";import{D as Z}from"./DataTable-9e0c0540.js";import{u as z}from"./checkEditUpdate-b21811ea.js";import{u as ee}from"./useThemeClass-971b53a9.js";import"./Alert-7d2f3d15.js";import"./index-48126d05.js";import"./Badge-f7a2a6cd.js";import"./RangeCalendar-24e6362b.js";import"./Card-74cd14d0.js";import"./index-1ec4e0d7.js";import"./index-ebf37477.js";import{D as ae}from"./Dialog-7d21bbc0.js";import"./Drawer-f1a47725.js";import"./index-97244f45.js";import{F as te,a as oe}from"./FormItem-f81129d8.js";import"./toString-d84b2ed4.js";import"./index-e5a431cb.js";import"./index-391881a7.js";import"./index-ce935429.js";import{N as O,t as E}from"./toast-fca74249.js";import"./Pagination-029cde77.js";import"./Progress-4044e341.js";import"./index-4f4f10ff.js";import"./ScrollBar-50f49651.js";import"./index-2378ff43.js";import"./Select-20a44aea.js";import"./Skeleton-d9265fba.js";import"./index-cefe9214.js";import"./Switcher-28efe701.js";import"./index-58094b57.js";import"./index-80febe26.js";import"./Tag-d2997001.js";import"./index-fba9cebf.js";import"./index-b6bc4a2a.js";import"./Tooltip-8ef6fa0f.js";import"./Upload-873f41fa.js";import"./Views-3281299b.js";import"./chart.constant-fdaa2e35.js";import"./GrowShrinkTag-761749d9.js";import"./react-tooltip.min-65370a0a.js";import"./RichTextEditor-1e7bc001.js";import"./SegmentItemOption-f1881317.js";import{S as se}from"./StickyFooter-cd6fbd09.js";import"./SvgIcon-b0904d60.js";import{F as re,a as ce,b as ie}from"./formik.esm-0c1c749e.js";import{A as ne}from"./index.esm-328a03b9.js";import{a as le}from"./index.esm-cda4505c.js";import{c as de,a as me}from"./index.esm-2c9047c6.js";import{C as ue}from"./ConfirmDialog-a2fd1c5f.js";const pe="crmSource",M=T("crmSource/data/createSource",async a=>{var e,t;try{return(await _(a)).data}catch(s){throw new Error((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)}}),b=T("crmSource/data/getSource",async()=>{var a,e;try{return(await G()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),ge=T("crmSource/data/editSource",async({id:a,updatedData:e})=>{var t,s;try{return(await J(a,e)).data}catch(c){throw new Error((s=(t=c==null?void 0:c.response)==null?void 0:t.data)==null?void 0:s.message)}}),Se=T("crmLeads/data/deleteSource",async a=>{var e,t;try{return await K(a)}catch(s){throw new Error((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)}}),fe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},he={loading:!1,tableData:fe,displayedSourceList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedSource:null,deleteConfirmation:!1},R=B({name:`${pe}/state`,initialState:he,reducers:{setTableData:(a,e)=>{a.tableData=e.payload,console.log(a.categoryList);const t=a.categoryList.filter(s=>s.sources.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=t.length,a.displayedSourceList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedSource=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(M.fulfilled,(e,t)=>{e.loading=!1}).addCase(M.pending,e=>{e.loading=!0}).addCase(b.fulfilled,(e,t)=>{var s,c,i,r,l;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(s=t.payload.data)==null?void 0:s.length,e.displayedSourceList=t==null?void 0:t.payload.data.slice(((c=e==null?void 0:e.tableData)==null?void 0:c.pageSize)*(((i=e==null?void 0:e.tableData)==null?void 0:i.pageIndex)-1),((r=e==null?void 0:e.tableData)==null?void 0:r.pageSize)*((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex))}).addCase(b.pending,e=>{e.loading=!0})}}),{setTableData:A,setDialogToggle:C,setDialogMode:v,setSelectedState:F,toggleDeleteConfirmation:k}=R.actions,ye=R.reducer,xe=H({data:ye}),S=V,q=y.forwardRef((a,e)=>{const{onInputChange:t}=a,s=Y(c,500);function c(r){t==null||t(r)}const i=r=>{s(r.target.value)};return o.jsx(L,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:o.jsx(U,{className:"text-lg"}),onChange:i})});q.displayName="StateTableSearch";const be=()=>{const a=x(),e=y.useRef(null),t=S(i=>i.crmSource.data.tableData),s=i=>{const r=N(t);r.query=i,r.pageIndex=1,typeof i=="string"&&i.length>1&&c(r),typeof i=="string"&&i.length===0&&c(r)},c=i=>{a(i?A(i):b())};return o.jsxs("div",{className:"md:flex items-center justify-between",children:[o.jsx("div",{className:"md:flex items-center gap-4",children:o.jsx(q,{ref:e,onInputChange:s})}),o.jsx("div",{className:"mb-4",children:o.jsx(I,{size:"sm",onClick:()=>{a(C(!0)),a(v("Add"))},children:"Add New"})})]})},De=()=>{const a=x(),e=S(d=>d.crmSource.data.loading),t=z("roles","canModify"),s=z("roles","canDelete"),{pageIndex:c,pageSize:i,sort:r,query:l,total:u}=S(d=>d.crmSource.data.tableData),f=S(d=>d.crmSource.data.displayedSourceList);console.log({data:f});const p=({row:d})=>{const n=x();ee();const w=()=>{n(F(d)),n(C(!0)),n(v("Edit"))},$=async()=>{await n(F(d)),n(k(!0))};return o.jsxs("div",{className:"flex justify-start text-base",children:[o.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:w,children:o.jsx(Q,{})}),o.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:$,children:o.jsx(X,{})})]})},g=y.useMemo(()=>({pageIndex:c,pageSize:i,sort:r,query:l,total:u}),[c,i,r,l,u]),m=y.useMemo(()=>[{header:"Action",id:"action",cell:n=>o.jsx(p,{row:n.row.original})},{header:"Source",accessorKey:"sources",cell:n=>n.row.original.sources}],[t,s]),h=d=>{const n=N(g);n.pageIndex=d,a(A(n))},D=d=>{const n=N(g);n.pageSize=Number(d),n.pageIndex=1,a(A(n))},j=d=>{const n=N(g);n.sort=d,a(A(n))};return o.jsx("div",{children:o.jsx(Z,{columns:m,data:f,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:h,onSelectChange:D,onSort:j})})},Ce=de().shape({sources:me().required("Source name is required")}),P=y.forwardRef((a,e)=>{const t=x(),s=S(l=>l.crmSource.data.dialogMode),c=S(l=>l.crmSource.data.selectedSource),i=()=>{t(C(!1))};console.log(s);const r=async(l,u,f,p,g)=>{var d,n,w;const m=await p(l==="Add"?M(u):ge({id:f==null?void 0:f.id,updatedData:u}));let h="",D="",j="danger";(d=m==null?void 0:m.payload)!=null&&d.success?(h="Successfully Added",D=(n=m==null?void 0:m.payload)==null?void 0:n.message,j="success"):(h="Something went wrong !!!",D=(w=m==null?void 0:m.error)==null?void 0:w.message),g.push(o.jsx(O,{title:h,type:j,duration:2500,children:D}),{placement:"top-end"}),p(C(!1)),await p(b())};return o.jsx(re,{innerRef:e,initialValues:{sources:s==="Edit"?c==null?void 0:c.sources:""},validationSchema:Ce,onSubmit:async(l,{setSubmitting:u})=>{s==="Add"?await r("Add",l,null,t,E):await r("Edit",l,c,t,E),u(!1)},children:({touched:l,errors:u,values:f,setFieldValue:p})=>o.jsxs(ce,{children:[o.jsx(te,{children:o.jsx(oe,{label:"Source",invalid:u.sources&&l.sources,errorMessage:u.sources,children:o.jsx(ie,{type:"text",autoComplete:"off",name:"sources",placeholder:"Source",component:L,prefix:o.jsx(le,{className:"text-xl"})})})}),o.jsx(se,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:o.jsxs("div",{className:"md:flex items-center",children:[o.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:i,children:"Cancel"}),o.jsx(I,{size:"sm",type:"submit",variant:"solid",icon:o.jsx(ne,{}),children:"Save"})]})})]})})});P.displayName="SourceForm";const je=()=>{const a=x(),e=S(r=>r.crmSource.data.deleteConfirmation),t=S(r=>r.crmSource.data.selectedSource),s=()=>{a(k(!1))},c=(r,l,u,f)=>{var g,m,h;const p=(g=r==null?void 0:r.payload)==null?void 0:g.success;l.push(o.jsx(O,{title:p?u:f,type:p?"success":"danger",duration:2500,children:p?(m=r==null?void 0:r.payload)==null?void 0:m.message:(h=r==null?void 0:r.error)==null?void 0:h.message}),{placement:"top-end"})},i=async()=>{a(k(!1));const r=await a(Se(t==null?void 0:t.id));c(r,E,"Successfully Deleted","Something Went Wrong !!!"),await a(b())};return o.jsx(ue,{isOpen:e,type:"danger",title:"Delete Source",confirmButtonColor:"red-600",onClose:s,onRequestClose:s,onCancel:s,onConfirm:i,children:o.jsx("p",{children:"Are you sure you want to delete this Source? All record related to this Source will be deleted as well. This action cannot be undone."})})};W("crmSource",xe);const we=()=>{const a=x(),e=S(c=>c.crmSource.data.isDialogOpen),t=S(c=>c.crmSource.data.dialogMode),s=()=>{a(C(!1))};return y.useEffect(()=>{a(b())},[]),o.jsxs(o.Fragment,{children:[o.jsx("h5",{className:"mb-2",children:"Source"}),o.jsx(be,{}),o.jsx(De,{}),o.jsxs(ae,{isOpen:e,onClose:s,children:[o.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," Source"]}),o.jsx(P,{})]}),o.jsx(je,{})]})},Aa=we;export{Aa as S};
