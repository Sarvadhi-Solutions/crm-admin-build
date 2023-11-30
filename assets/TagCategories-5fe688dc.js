import{r as N,a as S,j as e,ah as je,aq as fe}from"./index-01b42c77.js";import{u as te}from"./useThemeClass-42da9995.js";import"./Card-039a9ed6.js";import"./Views-0a1f8861.js";import{B as ye}from"./Badge-6cc907e6.js";import"./chart.constant-8991471a.js";import"./GrowShrinkTag-a3ea01ed.js";import{aa as Ce,ab as Ne,ac as Te,O as se,P as oe}from"./index.esm-587e89d5.js";import"./index-b609fa7a.js";import{B as A}from"./Button-a5544b15.js";import{D as U}from"./Dialog-b7c1600d.js";import{T as be}from"./DataTable-2544ad05.js";import{I as z}from"./Input-b0748b3e.js";import"./Skeleton-cf28f7d5.js";import"./react-tooltip.min-cd40762f.js";import"./RichTextEditor-d17e3214.js";import"./SegmentItemOption-b31b5145.js";import"./SvgIcon-dc305fe7.js";import{T as Se}from"./Tooltip-06c83e8f.js";import{T as B}from"./index-f7318691.js";import{u as re,f as k,g as ie,e as we,d as De}from"./index-ffd8f14d.js";import"./Alert-ba84ad42.js";import"./RangeCalendar-7e850f6c.js";import"./index-dab07eaf.js";import"./index-a9a60eee.js";import"./Drawer-a351bd90.js";import"./index-71de6292.js";import{F as _,a as M}from"./FormItem-4a386e6f.js";import"./toString-228d794c.js";import"./index-2bfb9d4e.js";import"./index-ca28e0d9.js";import"./index-a6a0da8c.js";import{t as v,N as I}from"./toast-9d39500f.js";import{P as ve}from"./Pagination-d57e7c83.js";import"./Progress-613f4d7f.js";import"./index-8ad179bb.js";import"./ScrollBar-349c0130.js";import"./index-92468997.js";import{S as ne}from"./Select-2cf95561.js";import"./index-b9cef8bb.js";import"./Switcher-cf39306f.js";import"./index-0fe1020b.js";import"./Tag-989e3abd.js";import"./index-8359d520.js";import"./index-3b362267.js";import"./Upload-b982e753.js";import{F as G,a as J,b as R,c as Ie,g as Q}from"./formik.esm-a8cc53a4.js";import{c as q,a as w,e as Me}from"./index.esm-d51743a0.js";import{u as f,e as Fe,t as V,g as F,T as Ee,a as L,d as Ae,m as D,c as Re,b as K,f as ke,s as qe,h as $e,i as Be,j as $,k as H,l as le,n as X,o as W,p as Oe,q as Y,r as He}from"./TagCategoryDetailsForm-5a458dca.js";import{C as ce}from"./ConfirmDialog-a691c410.js";import{c as Z}from"./cloneDeep-29f2aae8.js";import{u as Pe}from"./checkEditUpdate-27f908f6.js";import{L as de}from"./colorPicker-fef07fcc.js";import{d as ze}from"./index.esm-44ca1025.js";const Ve=q().shape({categoryName:w().required("Field is required")}),me=N.forwardRef((i,g)=>{var c;const n=S(),u=f(t=>t.crmTagCategories.data.formToggle),l=()=>{n(V(!1))},a=f(t=>t.crmTagCategories.data.selectedTagCategory);return e.jsx(U,{isOpen:u,onClose:l,children:e.jsx(G,{innerRef:g,initialValues:{categoryName:(a==null?void 0:a.categoryName)||"",master:((c=a==null?void 0:a.master)==null?void 0:c.id)||"",tags:(a==null?void 0:a.tags)||[]},validationSchema:Ve,onSubmit:async(t,{setSubmitting:s})=>{var x,y,C,b;s(!1);const o={...t,masterId:t==null?void 0:t.master,tagId:((x=t==null?void 0:t.tags)==null?void 0:x.map(m=>m==null?void 0:m.id))||[]};delete o.master,delete o.tags;const d=await n(Fe({tagCategoryId:(a==null?void 0:a.id)||"",updatedData:o}));let j="",T="",p="";(y=d==null?void 0:d.payload)!=null&&y.success?(j="Successfully Update",T=(C=d==null?void 0:d.payload)==null?void 0:C.message,p="success"):(j="Something went wrong !!!",T=(b=d==null?void 0:d.error)==null?void 0:b.message,p="danger"),v.push(e.jsx(I,{title:j,type:p,duration:2500,children:T}),{placement:"top-end"}),n(V(!1)),await n(F())},children:({touched:t,errors:s,values:o,setFieldValue:d})=>e.jsx(J,{children:e.jsx(_,{children:e.jsx(Ee,{touched:t,errors:s,values:o,setFieldValue:d})})})})})});me.displayName="TagCategoryForm";const Le=()=>{const i=S(),g=f(a=>a.crmTagCategories.data.deleteConfirmation),n=f(a=>a.crmTagCategories.data.selectedTagCategory),u=()=>{i(L(!1))},l=async()=>{var c,t,s;i(L(!1));const a=await i(Ae(n.id));(c=a==null?void 0:a.payload)!=null&&c.success?v.push(e.jsx(I,{title:"Successfuly Deleted",type:"success",duration:2500,children:(t=a==null?void 0:a.payload)==null?void 0:t.message}),{placement:"top-end"}):v.push(e.jsx(I,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(s=a==null?void 0:a.error)==null?void 0:s.message}),{placement:"top-end"}),await i(F())};return e.jsx(ce,{isOpen:g,type:"danger",title:"Delete Tag Category",confirmButtonColor:"red-600",onClose:u,onRequestClose:u,onCancel:u,onConfirm:l,children:e.jsx("p",{children:"Are you sure you want to delete this Tag Category? All record related to this tag category will be deleted as well. This action cannot be undone."})})};const Ke=q({categoryName:w().required("Category Name is required"),masterId:w().required("This field is required").test("is-valid-module","Invalid module selected",i=>!!D.find(g=>g.value==i)),tags:Me().of(q().shape({tagName:w().required("Name required"),colorName:w().required("Color required")}))}),ee=(i,g)=>{const n=Q(i.errors,g),u=Q(i.touched,g);return{errorMessage:n||"",invalid:typeof u>"u"?!1:n&&u}},We=()=>{const i=S(),{addForm:g,modulesList:n}=f(l=>l.crmTagCategories.data);N.useEffect(()=>{(async()=>{var c;const a=await i(ke());i(qe((c=a==null?void 0:a.payload)==null?void 0:c.data))})()},[]),D.length=0,n==null||n.forEach(l=>{D.push({value:l.id,label:l.moduleName})});const u=()=>{i(K(!1))};return e.jsx(U,{isOpen:g,onClose:u,children:e.jsx(G,{validationSchema:Ke,initialValues:{tags:[{tagName:"",colorName:""}],categoryName:"",masterId:""},onSubmit:async l=>{var o,d,j;let a="",c="",t="";const s=await i(Re(l));(o=s==null?void 0:s.payload)!=null&&o.success?(a="Successfully Added",c=(d=s==null?void 0:s.payload)==null?void 0:d.message,t="success"):(a="Something went wrong !!!",c=(j=s==null?void 0:s.error)==null?void 0:j.message,t="danger"),v.push(e.jsx(I,{title:a,type:t,duration:2500,children:c}),{placement:"top-end"}),i(K(!1)),await i(F())},children:({touched:l,errors:a,values:c,setFieldValue:t})=>{const s=c.tags;return e.jsx(J,{children:e.jsx(_,{layout:"inline",children:e.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh"},children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h5",{className:"mb-4",children:"Add Tag Category"}),e.jsx(M,{layout:"vertical",label:"Category Name",invalid:a.categoryName&&l.categoryName,errorMessage:a.categoryName,children:e.jsx(R,{placeholder:"Category Name",name:"categoryName",component:z})}),e.jsx(M,{layout:"vertical",label:"Module Name",invalid:a.masterId&&l.masterId,errorMessage:a.masterId,children:e.jsx(ne,{name:"masterId",placeholder:"Module Name",options:D,id:"masterId",value:D.find(o=>(o==null?void 0:o.value)==(c==null?void 0:c.masterId)),onChange:o=>{const d=o.value;t("masterId",d||"")}})})]}),e.jsx(Ie,{name:"tags",children:({form:o,remove:d,push:j})=>e.jsxs("div",{children:[s&&s.length>0?s.map((T,p)=>{const x=ee(o,`tags[${p}].tagName`),y=ee(o,`tags[${p}].colorName`);return e.jsxs("div",{children:[e.jsx(M,{label:"Name",invalid:x.invalid,errorMessage:x.errorMessage,children:e.jsx(R,{invalid:x.invalid,placeholder:"Tag Name",name:`tags[${p}].tagName`,type:"text",component:z})}),e.jsx(M,{invalid:y.invalid,children:e.jsx(R,{invalid:y.invalid,placeholder:"Color",name:`tags[${p}].colorName`,render:({field:C})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:0,position:"relative"},children:[e.jsx(de,{field:C}),y.invalid&&e.jsx("div",{style:{marginTop:15,marginLeft:5,color:"red"},children:y.errorMessage})]})})}),e.jsx(A,{shape:"circle",size:"sm",icon:e.jsx(Ce,{}),onClick:()=>d(p)})]},p)}):null,e.jsxs("div",{children:[e.jsx(A,{type:"button",className:"ltr:mr-2 rtl:ml-2",onClick:()=>{j({tagName:"",colorName:""})},children:"Add tags"}),e.jsx(A,{type:"submit",variant:"solid",children:"Submit"})]})]})})]})})})}})})},Ue=q({tagName:w().required("Tag Name is required"),colorName:w().required("Color required")}),ge=()=>{const i=S(),g=f(t=>{var s,o;return(o=(s=t==null?void 0:t.crmTagCategories)==null?void 0:s.data)==null?void 0:o.modulesList});D.length=0,g==null||g.forEach(t=>{D.push({value:t.id,label:t.moduleName})});const n=f(t=>t.crmTagCategories.data.editForm),u=f(t=>{var s,o;return(o=(s=t==null?void 0:t.crmTagCategories)==null?void 0:s.data)==null?void 0:o.dialogMode}),l=f(t=>t.crmTagCategories.data.selectedTag),a=()=>{i($(!1))},c=f(t=>t.crmTagCategories.data.selectedTagCategory);return e.jsx("div",{children:e.jsx(U,{isOpen:n,onClose:a,children:e.jsx(G,{validationSchema:Ue,initialValues:{tagName:u==="Edit"?l==null?void 0:l.tagName:"",colorName:u==="Edit"?l==null?void 0:l.colorName:"",masterId:u==="Edit"?l==null?void 0:l.masterId:""},onSubmit:async t=>{var T,p,x,y,C,b;let s="",o="",d="";const j={...t};if(u==="Add"){const m=await i($e({masterId:c==null?void 0:c.masterId,tagName:t==null?void 0:t.tagName,colorName:t==null?void 0:t.colorName,tagCategoryId:c==null?void 0:c.id}));(T=m==null?void 0:m.payload)!=null&&T.success?(s="Successfully Added",o=(p=m==null?void 0:m.payload)==null?void 0:p.message,d="success"):(s="Something went wrong !!!",o=(x=m==null?void 0:m.error)==null?void 0:x.message,d="danger")}else{const m=await i(Be({tagId:(l==null?void 0:l.id)||"",data:j}));(y=m==null?void 0:m.payload)!=null&&y.success?(s="Successfully Added",o=(C=m==null?void 0:m.payload)==null?void 0:C.message,d="success"):(s="Something went wrong !!!",o=(b=m==null?void 0:m.error)==null?void 0:b.message,d="danger")}v.push(e.jsx(I,{title:s,type:d,duration:2500,children:o}),{placement:"top-end"}),i($(!1)),await i(F())},children:({touched:t,errors:s,values:o,setFieldValue:d})=>e.jsx(J,{children:e.jsx(_,{layout:"inline",children:e.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh"},children:[e.jsx("div",{className:"mb-10",children:e.jsx("h5",{className:"mb-4",children:u==="Edit"?"Edit Tag Category":"Add Tag Category"})}),e.jsx(M,{label:"Name",invalid:s.tagName&&t.tagName,errorMessage:s.tagName,children:e.jsx(R,{placeholder:"Tag Name",name:"tagName",type:"text",component:z})}),e.jsx(M,{invalid:s.colorName&&t.colorName,children:e.jsx(R,{invalid:s.colorName&&t.colorName,placeholder:"Color",name:"colorName",render:({field:j})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:0},children:[e.jsx(de,{field:j}),s.colorName&&e.jsx("div",{style:{marginTop:15,marginLeft:5,color:"red"},children:s.colorName})]})})}),e.jsx("div",{children:e.jsx(A,{type:"submit",variant:"solid",children:"Submit"})})]})})})})})})},{Tr:P,Th:_e,Td:Ge,THead:Je,TBody:Qe}=B,Xe=({renderRowSubComponent:i,getRowCanExpand:g})=>{const n=S(),u=({row:r})=>{te();const h=()=>{n(V(!0)),n(H(r))},E=async()=>{await n(H(r)),n(L(!0))},xe=async()=>{n(le("Add")),n($(!0)),n(H(r))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx(Se,{title:"Add Tag",children:e.jsx("button",{className:" cursor-pointer circle items-center hover:text-green-500 mr-1",onClick:xe,children:e.jsx(ze,{})})}),e.jsx("button",{className:" cursor-pointer circle items-center hover:text-blue-500 ",onClick:h,children:e.jsx(se,{})}),e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:E,children:e.jsx(oe,{})})]})})},l=[10,25,50,100],a=f(r=>r.crmTagCategories.data.displayedTagCategoriesList),c=f(r=>r.crmTagCategories.data.loading),{pageIndex:t,pageSize:s,sort:o,query:d,total:j}=f(r=>r.crmTagCategories.data.tableData),T=N.useMemo(()=>({pageIndex:t,pageSize:s,sort:o,query:d,total:j}),[t,s,o,d,j]),p=N.useMemo(()=>[{header:()=>null,id:"expander",cell:({row:r})=>e.jsx(e.Fragment,{children:r.getCanExpand()?e.jsx("button",{className:"text-lg",onClick:r.getToggleExpandedHandler(),children:r.getIsExpanded()?e.jsx(Ne,{}):e.jsx(Te,{})}):null}),subCell:()=>null},{header:"Actions",id:"action",cell:r=>e.jsx(u,{row:r.row.original})},{header:"Category Name",accessorKey:"categoryName"},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Created By",accessorKey:"createdBy",cell:r=>{var h,E;return`${(h=r.row.original.createdData)==null?void 0:h.firstName} ${(E=r.row.original.createdData)==null?void 0:E.lastName}`}}],[]),[x,y]=N.useState(a),C=N.useMemo(()=>l.map(r=>({value:r,label:`${r} / page`})),[l]);N.useEffect(()=>{const r=a==null?void 0:a.map(h=>({...h,subRows:h.tags}));y(r)},[a]);const b=re({data:x,columns:p,getRowCanExpand:g,getCoreRowModel:ie(),getExpandedRowModel:we(),manualPagination:!0,manualSorting:!0}),m=r=>{const h=Z(T);h.pageIndex=r,n(X(h))},O=r=>{const h=Z(T);h.pageSize=Number(r),h.pageIndex=1,n(X(h))},ue=r=>{c||O==null||O(Number(r))},he=r=>{c||m==null||m(r)};Pe("tagcategory","canCreate");const pe=()=>{n(K(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs(je,{loading:c&&(x==null?void 0:x.length)!==0,type:"cover",children:[e.jsx("div",{className:"md:flex items-center justify-end",children:e.jsx("div",{className:"mb-4",children:e.jsx(A,{size:"sm",onClick:pe,children:"Add New"})})}),e.jsxs(B,{children:[e.jsx(Je,{children:b.getHeaderGroups().map(r=>e.jsx(P,{children:r.headers.map(h=>e.jsx(_e,{colSpan:h.colSpan,children:k(h.column.columnDef.header,h.getContext())},h.id))},r.id))}),c&&(x==null?void 0:x.length)===0?e.jsx(be,{columns:p==null?void 0:p.length,avatarInColumns:[0],avatarProps:{width:28,height:28}}):e.jsx(Qe,{children:b.getRowModel().rows.map(r=>e.jsxs(N.Fragment,{children:[e.jsx(P,{children:r.getVisibleCells().map(h=>e.jsx("td",{children:k(h.column.columnDef.cell,h.getContext())},h.id))}),r.getIsExpanded()&&e.jsx(P,{children:e.jsx(Ge,{colSpan:r.getVisibleCells().length,children:i({row:r})})})]},r.id))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(ve,{pageSize:s,currentPage:t,total:j,onChange:he}),e.jsx("div",{style:{minWidth:130},children:e.jsx(ne,{size:"sm",menuPlacement:"top",isSearchable:!1,value:C==null?void 0:C.filter(r=>r.value===s),options:C,onChange:r=>ue(r==null?void 0:r.value)})})]})]}),e.jsx(Le,{}),e.jsx(me,{}),e.jsx(We,{}),e.jsx(ge,{})]})},Ye=()=>{const i=S(),g=f(a=>a.crmTagCategories.data.deleteSubTagConfirmation),n=f(a=>a.crmTagCategories.data.selectedTag),u=()=>{i(W(!1))},l=async()=>{var c,t,s;i(W(!1));const a=await i(Oe(n.id));(c=a==null?void 0:a.payload)!=null&&c.success?v.push(e.jsx(I,{title:"Successfuly Deleted",type:"success",duration:2500,children:(t=a==null?void 0:a.payload)==null?void 0:t.message}),{placement:"top-end"}):v.push(e.jsx(I,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(s=a==null?void 0:a.error)==null?void 0:s.message}),{placement:"top-end"}),await i(F())};return e.jsx(ce,{isOpen:g,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:u,onRequestClose:u,onCancel:u,onConfirm:l,children:e.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})},{Tr:ae,Th:Ze,Td:ea,THead:aa,TBody:ta,Sorter:sa}=B,oa=({row:i})=>{te();const g=()=>{n(le("Edit")),n($(!0)),n(Y(i))},n=S(),u=async()=>{await n(Y(i)),await n(W(!0))};return e.jsxs("div",{className:"flex text-base items-center",children:[e.jsx("button",{className:"circle items-center hover:text-blue-500",onClick:g,children:e.jsx(se,{})}),e.jsx("span",{className:"cursor-pointer hover:text-red-500 mx-1 circle items-center",onClick:u,children:e.jsx(oe,{})})]})},ra=i=>{const{tableData:g}=i,[n,u]=N.useState([]),[l,a]=N.useState(g),c=[{header:"Actions",id:"action",cell:s=>e.jsx(oa,{row:s.row.original})},{header:"Tag Name",accessorKey:"tagName"},{header:"Color",accessorKey:"colorName",cell:s=>{const o=s.row.original;return e.jsxs("div",{className:"flex items-center",children:[e.jsx(ye,{style:{backgroundColor:`${o.colorName}`}}),e.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:o.colorName})]})}}];N.useEffect(()=>{a(g)},[g]);const t=re({data:l,columns:c,state:{sorting:n},onSortingChange:u,getCoreRowModel:ie(),getSortedRowModel:De()});return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(aa,{children:t.getHeaderGroups().map(s=>e.jsx(ae,{children:s.headers.map(o=>e.jsx(Ze,{colSpan:o.colSpan,children:o.isPlaceholder?null:e.jsxs("div",{className:o.column.getCanSort()?"cursor-pointer select-none":"",onClick:o.column.getToggleSortingHandler(),children:[k(o.column.columnDef.header,o.getContext()),e.jsx(sa,{sort:o.column.getIsSorted()})]})},o.id))},s.id))}),e.jsx(ta,{children:t.getRowModel().rows.slice(0,10).map(s=>e.jsx(ae,{children:s.getVisibleCells().map(o=>e.jsx(ea,{children:k(o.column.columnDef.cell,o.getContext())},o.id))},s.id))})]}),e.jsx(Ye,{}),e.jsx(ge,{})]})},ia=({row:i})=>e.jsx("pre",{style:{fontSize:"10px"},children:e.jsx(ra,{tableData:i.original.tags})});fe("crmTagCategories",He);const na=()=>{const i=S(),g=async()=>{await i(F())};return N.useEffect(()=>{g()},[i]),e.jsxs(e.Fragment,{children:[e.jsx("h5",{className:"mb-2",children:"Manage Tags"}),e.jsx(Xe,{renderRowSubComponent:ia,getRowCanExpand:()=>!0})]})},lt=na;export{lt as T};
