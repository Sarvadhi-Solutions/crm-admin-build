import{am as T,an as $,ao as H,ap as V,r as y,j as o,a as x,aq as W}from"./index-01b42c77.js";import{T as _,Q as G,aA as K,aB as Q}from"./CrmService-fb54ad5b.js";import{B as I}from"./Button-a5544b15.js";import{I as O}from"./Input-b0748b3e.js";import{b as U,O as J,P as X}from"./index.esm-587e89d5.js";import{d as Y}from"./debounce-9cff76d4.js";import{c as N}from"./cloneDeep-29f2aae8.js";import{D as Z}from"./DataTable-2544ad05.js";import{u as F}from"./checkEditUpdate-27f908f6.js";import{u as ee}from"./useThemeClass-42da9995.js";import"./Alert-ba84ad42.js";import"./index-b609fa7a.js";import"./Badge-6cc907e6.js";import"./RangeCalendar-7e850f6c.js";import"./Card-039a9ed6.js";import"./index-dab07eaf.js";import"./index-a9a60eee.js";import{D as ae}from"./Dialog-b7c1600d.js";import"./Drawer-a351bd90.js";import"./index-71de6292.js";import{F as te,a as oe}from"./FormItem-4a386e6f.js";import"./toString-228d794c.js";import"./index-2bfb9d4e.js";import"./index-ca28e0d9.js";import"./index-a6a0da8c.js";import{N as R,t as E}from"./toast-9d39500f.js";import"./Pagination-d57e7c83.js";import"./Progress-613f4d7f.js";import"./index-8ad179bb.js";import"./ScrollBar-349c0130.js";import"./index-92468997.js";import"./Select-2cf95561.js";import"./Skeleton-cf28f7d5.js";import"./index-b9cef8bb.js";import"./Switcher-cf39306f.js";import"./index-f7318691.js";import"./index-0fe1020b.js";import"./Tag-989e3abd.js";import"./index-8359d520.js";import"./index-3b362267.js";import"./Tooltip-06c83e8f.js";import"./Upload-b982e753.js";import"./Views-0a1f8861.js";import"./chart.constant-8991471a.js";import"./GrowShrinkTag-a3ea01ed.js";import"./react-tooltip.min-cd40762f.js";import"./RichTextEditor-d17e3214.js";import"./SegmentItemOption-b31b5145.js";import{S as re}from"./StickyFooter-db68b1b0.js";import"./SvgIcon-dc305fe7.js";import{F as se,a as ie,b as ce}from"./formik.esm-a8cc53a4.js";import{A as ne}from"./index.esm-44ca1025.js";import{a as le}from"./index.esm-1917add6.js";import{c as de,a as me}from"./index.esm-d51743a0.js";import{C as ue}from"./ConfirmDialog-a691c410.js";const pe="crmSource",M=T("crmSource/data/createSource",async a=>{var e,t;try{return(await _(a)).data}catch(s){throw new Error((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)}}),b=T("crmSource/data/getSource",async()=>{var a,e;try{return(await G()).data}catch(t){throw new Error((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)}}),ge=T("crmSource/data/editSource",async({id:a,updatedData:e})=>{var t,s;try{return(await K(a,e)).data}catch(i){throw new Error((s=(t=i==null?void 0:i.response)==null?void 0:t.data)==null?void 0:s.message)}}),Se=T("crmLeads/data/deleteSource",async a=>{var e,t;try{return await Q(a)}catch(s){throw new Error((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)}}),fe={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},he={loading:!1,tableData:fe,displayedSourceList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedSource:null,deleteConfirmation:!1},v=$({name:`${pe}/state`,initialState:he,reducers:{setTableData:(a,e)=>{a.tableData=e.payload;const t=a.categoryList.filter(s=>s.sources.toLowerCase().includes(e.payload.query.toLowerCase()));a.tableData.total=t.length,a.displayedSourceList=t.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedState:(a,e)=>{a.selectedSource=e.payload},setDialogToggle:(a,e)=>{a.isDialogOpen=e.payload},setDialogMode:(a,e)=>{a.dialogMode=e.payload},toggleDeleteConfirmation:(a,e)=>{a.deleteConfirmation=e.payload}},extraReducers:a=>{a.addCase(M.fulfilled,(e,t)=>{e.loading=!1}).addCase(M.pending,e=>{e.loading=!0}).addCase(b.fulfilled,(e,t)=>{var s,i,c,r,l;e.loading=!1,e.categoryList=t==null?void 0:t.payload.data,e.tableData.total=(s=t.payload.data)==null?void 0:s.length,e.displayedSourceList=t==null?void 0:t.payload.data.slice(((i=e==null?void 0:e.tableData)==null?void 0:i.pageSize)*(((c=e==null?void 0:e.tableData)==null?void 0:c.pageIndex)-1),((r=e==null?void 0:e.tableData)==null?void 0:r.pageSize)*((l=e==null?void 0:e.tableData)==null?void 0:l.pageIndex))}).addCase(b.pending,e=>{e.loading=!0})}}),{setTableData:A,setDialogToggle:C,setDialogMode:L,setSelectedState:z,toggleDeleteConfirmation:k}=v.actions,ye=v.reducer,xe=H({data:ye}),S=V,q=y.forwardRef((a,e)=>{const{onInputChange:t}=a,s=Y(i,500);function i(r){t==null||t(r)}const c=r=>{s(r.target.value)};return o.jsx(O,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:o.jsx(U,{className:"text-lg"}),onChange:c})});q.displayName="StateTableSearch";const be=()=>{const a=x(),e=y.useRef(null),t=S(c=>c.crmSource.data.tableData),s=c=>{const r=N(t);r.query=c,r.pageIndex=1,typeof c=="string"&&c.length>1&&i(r),typeof c=="string"&&c.length===0&&i(r)},i=c=>{a(c?A(c):b())};return o.jsxs("div",{className:"md:flex items-center justify-between",children:[o.jsx("div",{className:"md:flex items-center gap-4",children:o.jsx(q,{ref:e,onInputChange:s})}),o.jsx("div",{className:"mb-4",children:o.jsx(I,{size:"sm",onClick:()=>{a(C(!0)),a(L("Add"))},children:"Add New"})})]})},De=()=>{const a=x(),e=S(d=>d.crmSource.data.loading),t=F("roles","canModify"),s=F("roles","canDelete"),{pageIndex:i,pageSize:c,sort:r,query:l,total:u}=S(d=>d.crmSource.data.tableData),f=S(d=>d.crmSource.data.displayedSourceList),p=({row:d})=>{const n=x();ee();const w=()=>{n(z(d)),n(C(!0)),n(L("Edit"))},B=async()=>{await n(z(d)),n(k(!0))};return o.jsxs("div",{className:"flex justify-start text-base",children:[o.jsx("button",{className:"circle items-center  cursor-pointer hover:text-indigo-500",onClick:w,children:o.jsx(J,{})}),o.jsx("button",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:B,children:o.jsx(X,{})})]})},g=y.useMemo(()=>({pageIndex:i,pageSize:c,sort:r,query:l,total:u}),[i,c,r,l,u]),m=y.useMemo(()=>[{header:"Action",id:"action",cell:n=>o.jsx(p,{row:n.row.original})},{header:"Source",accessorKey:"sources",cell:n=>n.row.original.sources}],[t,s]),h=d=>{const n=N(g);n.pageIndex=d,a(A(n))},D=d=>{const n=N(g);n.pageSize=Number(d),n.pageIndex=1,a(A(n))},j=d=>{const n=N(g);n.sort=d,a(A(n))};return o.jsx("div",{children:o.jsx(Z,{columns:m,data:f,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:h,onSelectChange:D,onSort:j})})},Ce=de().shape({sources:me().required("Source name is required")}),P=y.forwardRef((a,e)=>{const t=x(),s=S(l=>l.crmSource.data.dialogMode),i=S(l=>l.crmSource.data.selectedSource),c=()=>{t(C(!1))},r=async(l,u,f,p,g)=>{var d,n,w;const m=await p(l==="Add"?M(u):ge({id:f==null?void 0:f.id,updatedData:u}));let h="",D="",j="danger";(d=m==null?void 0:m.payload)!=null&&d.success?(h="Successfully Added",D=(n=m==null?void 0:m.payload)==null?void 0:n.message,j="success"):(h="Something went wrong !!!",D=(w=m==null?void 0:m.error)==null?void 0:w.message),g.push(o.jsx(R,{title:h,type:j,duration:2500,children:D}),{placement:"top-end"}),p(C(!1)),await p(b())};return o.jsx(se,{innerRef:e,initialValues:{sources:s==="Edit"?i==null?void 0:i.sources:""},validationSchema:Ce,onSubmit:async(l,{setSubmitting:u})=>{s==="Add"?await r("Add",l,null,t,E):await r("Edit",l,i,t,E),u(!1)},children:({touched:l,errors:u,values:f,setFieldValue:p})=>o.jsxs(ie,{children:[o.jsx(te,{children:o.jsx(oe,{label:"Source",invalid:u.sources&&l.sources,errorMessage:u.sources,children:o.jsx(ce,{type:"text",autoComplete:"off",name:"sources",placeholder:"Source",component:O,prefix:o.jsx(le,{className:"text-xl"})})})}),o.jsx(re,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:o.jsxs("div",{className:"md:flex items-center",children:[o.jsx(I,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:c,children:"Cancel"}),o.jsx(I,{size:"sm",type:"submit",variant:"solid",icon:o.jsx(ne,{}),children:"Save"})]})})]})})});P.displayName="SourceForm";const je=()=>{const a=x(),e=S(r=>r.crmSource.data.deleteConfirmation),t=S(r=>r.crmSource.data.selectedSource),s=()=>{a(k(!1))},i=(r,l,u,f)=>{var g,m,h;const p=(g=r==null?void 0:r.payload)==null?void 0:g.success;l.push(o.jsx(R,{title:p?u:f,type:p?"success":"danger",duration:2500,children:p?(m=r==null?void 0:r.payload)==null?void 0:m.message:(h=r==null?void 0:r.error)==null?void 0:h.message}),{placement:"top-end"})},c=async()=>{a(k(!1));const r=await a(Se(t==null?void 0:t.id));i(r,E,"Successfully Deleted","Something Went Wrong !!!"),await a(b())};return o.jsx(ue,{isOpen:e,type:"danger",title:"Delete Source",confirmButtonColor:"red-600",onClose:s,onRequestClose:s,onCancel:s,onConfirm:c,children:o.jsx("p",{children:"Are you sure you want to delete this Source? All record related to this Source will be deleted as well. This action cannot be undone."})})};W("crmSource",xe);const we=()=>{const a=x(),e=S(i=>i.crmSource.data.isDialogOpen),t=S(i=>i.crmSource.data.dialogMode),s=()=>{a(C(!1))};return y.useEffect(()=>{a(b())},[]),o.jsxs(o.Fragment,{children:[o.jsx("h5",{className:"mb-2",children:"Source"}),o.jsx(be,{}),o.jsx(De,{}),o.jsxs(ae,{isOpen:e,onClose:s,children:[o.jsxs("h5",{className:"mb-4",children:[t==="Edit"?"Edit":"Add New"," Source"]}),o.jsx(P,{})]}),o.jsx(je,{})]})},Aa=we;export{Aa as S};
