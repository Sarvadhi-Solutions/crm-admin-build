import{r as j,a as b,j as e,ah as me,aq as ge}from"./index-349191dc.js";import{u as E}from"./useThemeClass-f9532959.js";import"./Card-28c96ca5.js";import"./Views-868e2d5a.js";import{B as ue}from"./Badge-225dc15b.js";import"./chart.constant-23ccb1ca.js";import"./GrowShrinkTag-9d65134b.js";import{aa as pe,ab as he,ac as xe}from"./index.esm-cb282f8a.js";import"./index-a4111542.js";import{B as R}from"./Button-3a7fe992.js";import{D as X}from"./Dialog-a838aabb.js";import{T as je}from"./DataTable-0bfcdf38.js";import{I as L}from"./Input-afbe9815.js";import"./Skeleton-f03c4bda.js";import"./react-tooltip.min-8a8ba578.js";import"./RichTextEditor-24216af1.js";import"./SegmentItemOption-80c4b266.js";import"./SvgIcon-33512ec4.js";import"./Tooltip-23ad192d.js";import{T as A}from"./index-47f4c906.js";import{u as Z,f as $,g as ee,e as Ce,d as fe}from"./index-6e08045b.js";import"./Alert-126231d9.js";import"./RangeCalendar-816f5a4f.js";import"./index-eacc5424.js";import"./index-637053ed.js";import"./Drawer-7ce7fbf1.js";import{a as ye}from"./index-6e1d0772.js";import{F as te,a as I}from"./FormItem-ada43054.js";import"./toString-35a63a87.js";import"./index-d55a343a.js";import"./index-af467029.js";import"./index-453239c5.js";import{t as D,N as S}from"./toast-22e26df2.js";import{P as Te}from"./Pagination-23f3c5b5.js";import"./Progress-1ed9a6b3.js";import"./index-917384b7.js";import"./ScrollBar-8904d44c.js";import"./index-3cbb8aa8.js";import{S as ae}from"./Select-458bca4a.js";import"./index-9c7facbb.js";import"./Switcher-22f53fed.js";import"./index-369a3f9a.js";import"./Tag-328b5d04.js";import"./index-7ba3168f.js";import"./index-e6396df9.js";import"./Upload-65222499.js";import{F as oe,a as se,b as H,c as be,g as U}from"./formik.esm-0a2a543c.js";import{c as P,a as F,e as Ne}from"./index.esm-7424d503.js";import{u as f,e as we,t as z,g as M,T as De,a as K,d as Se,m as v,c as Fe,b as V,f as ve,s as _,h as Y,i as W,j as Me,k as re,r as ke}from"./TagCategoryDetailsForm-48c73abf.js";import{C as ne}from"./ConfirmDialog-39fce23c.js";import{c as G}from"./cloneDeep-0ea42d87.js";import{u as Ie}from"./checkEditUpdate-e45bc255.js";const Re=P().shape({categoryName:F().required("Field is required")}),ie=j.forwardRef((s,l)=>{var r;const i=b(),d=f(a=>a.crmTagCategories.data.formToggle),h=()=>{i(z(!1))},t=f(a=>a.crmTagCategories.data.selectedTagCategory);return e.jsx(X,{isOpen:d,onClose:h,children:e.jsx(oe,{innerRef:l,initialValues:{categoryName:(t==null?void 0:t.categoryName)||"",master:((r=t==null?void 0:t.master)==null?void 0:r.id)||"",tags:(t==null?void 0:t.tags)||[]},validationSchema:Re,onSubmit:async(a,{setSubmitting:n})=>{var u,p,T,y;n(!1);const m={...a,masterId:a==null?void 0:a.master,tagId:((u=a==null?void 0:a.tags)==null?void 0:u.map(w=>w==null?void 0:w.id))||[]};delete m.master,delete m.tags;const c=await i(we({tagCategoryId:(t==null?void 0:t.id)||"",updatedData:m}));let x="",C="",N="";(p=c==null?void 0:c.payload)!=null&&p.success?(x="Successfully Update",C=(T=c==null?void 0:c.payload)==null?void 0:T.message,N="success"):(x="Something went wrong !!!",C=(y=c==null?void 0:c.error)==null?void 0:y.message,N="danger"),D.push(e.jsx(S,{title:x,type:N,duration:2500,children:C}),{placement:"top-end"}),i(z(!1)),await i(M())},children:({touched:a,errors:n,values:m,setFieldValue:c})=>e.jsx(se,{children:e.jsx(te,{children:e.jsx(De,{touched:a,errors:n,values:m,setFieldValue:c})})})})})});ie.displayName="TagCategoryForm";const Ee=()=>{const s=b(),l=f(t=>t.crmTagCategories.data.deleteConfirmation),i=f(t=>t.crmTagCategories.data.selectedTagCategory),d=()=>{s(K(!1))},h=async()=>{var r,a,n;s(K(!1));const t=await s(Se(i.id));(r=t==null?void 0:t.payload)!=null&&r.success?D.push(e.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(a=t==null?void 0:t.payload)==null?void 0:a.message}),{placement:"top-end"}):D.push(e.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(n=t==null?void 0:t.error)==null?void 0:n.message}),{placement:"top-end"}),await s(M())};return e.jsx(ne,{isOpen:l,type:"danger",title:"Delete Tag Category",confirmButtonColor:"red-600",onClose:d,onRequestClose:d,onCancel:d,onConfirm:h,children:e.jsx("p",{children:"Are you sure you want to delete this Tag Category? All record related to this tag category will be deleted as well. This action cannot be undone."})})},$e=({field:s})=>{const l=["#FF5733","#33FF57","#5733FF","#FFFF33","#33FFFF","#FF33FF","#FF3366","#FF6666","#6699FF"],[i,d]=j.useState(!1),h=()=>{d(!i)},t=r=>{const a={target:{name:s.name,value:r}};s.onChange(a),d(!1)};return e.jsxs("div",{style:{position:"relative",display:"inline-block",top:"15px"},children:[e.jsx("div",{style:{width:"30px",height:"30px",backgroundColor:s.value,border:"1px solid #000",borderRadius:"50%"},onClick:h}),i&&e.jsx("div",{className:"absolute",children:e.jsx(ye,{className:"grid grid-cols-3 gap-1 hover mt-1 custom-scrollbar",children:l.map((r,a)=>e.jsx("div",{style:{width:"30px",height:"30px",backgroundColor:r,margin:"5px",cursor:"pointer",borderRadius:"50%",transition:"background 0.3s ease",border:s.value===r?"1px solid #000":"none"},onClick:()=>t(r)},a))})})]})};const Ae=P({categoryName:F().required("Category Name is required"),masterId:F().required("This field is required").test("is-valid-module","Invalid module selected",s=>!!v.find(l=>l.value==s)),tags:Ne().of(P().shape({tagName:F().required("Name required"),colorName:F().required("Color required")}))}),J=(s,l)=>{const i=U(s.errors,l),d=U(s.touched,l);return{errorMessage:i||"",invalid:typeof d>"u"?!1:i&&d}},qe=()=>{const s=b(),[l,i]=j.useState([]);j.useEffect(()=>{(async()=>{var a;const r=await s(ve());i((a=r==null?void 0:r.payload)==null?void 0:a.data)})()},[s]),v.length=0,l==null||l.forEach(t=>{v.push({value:t.id,label:t.moduleName})});const d=f(t=>t.crmTagCategories.data.addForm),h=()=>{s(V(!1))};return e.jsx("div",{children:e.jsx(X,{isOpen:d,onClose:h,children:e.jsx(oe,{validationSchema:Ae,initialValues:{tags:[{tagName:"",colorName:""}],categoryName:"",masterId:""},onSubmit:async t=>{var c,x,C;let r="",a="",n="";const m=await s(Fe(t));(c=m==null?void 0:m.payload)!=null&&c.success?(r="Successfully Added",a=(x=m==null?void 0:m.payload)==null?void 0:x.message,n="success"):(r="Something went wrong !!!",a=(C=m==null?void 0:m.error)==null?void 0:C.message,n="danger"),D.push(e.jsx(S,{title:r,type:n,duration:2500,children:a}),{placement:"top-end"}),s(V(!1)),await s(M())},children:({touched:t,errors:r,values:a,setFieldValue:n})=>{const m=a.tags;return e.jsx(se,{children:e.jsx(te,{layout:"inline",children:e.jsxs("div",{className:"w-full custom-scrollbar",style:{maxHeight:"75vh",overflowY:"auto"},children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h5",{className:"mb-4",children:"Add Tag Category"}),e.jsx(I,{layout:"vertical",label:"Category Name",invalid:r.categoryName&&t.categoryName,errorMessage:r.categoryName,children:e.jsx(H,{placeholder:"Category Name",name:"categoryName",component:L})}),e.jsx(I,{layout:"vertical",label:"Module Name",invalid:r.masterId&&t.masterId,errorMessage:r.masterId,children:e.jsx(ae,{name:"masterId",placeholder:"Module Name",options:v,id:"masterId",value:v.find(c=>(c==null?void 0:c.value)==(a==null?void 0:a.masterId)),onChange:c=>{const x=c.value;n("masterId",x||"")}})})]}),e.jsx(be,{name:"tags",children:({form:c,remove:x,push:C})=>e.jsxs("div",{children:[m&&m.length>0?m.map((N,u)=>{const p=J(c,`tags[${u}].tagName`),T=J(c,`tags[${u}].colorName`);return e.jsxs("div",{children:[e.jsx(I,{label:"Name",invalid:p.invalid,errorMessage:p.errorMessage,children:e.jsx(H,{invalid:p.invalid,placeholder:"Tag Name",name:`tags[${u}].tagName`,type:"text",component:L})}),e.jsx(I,{invalid:T.invalid,errorMessage:T.errorMessage,children:e.jsx(H,{invalid:T.invalid,placeholder:"Color",name:`tags[${u}].colorName`,render:({field:y})=>e.jsx($e,{field:y})})}),e.jsx(R,{shape:"circle",size:"sm",icon:e.jsx(pe,{}),onClick:()=>x(u)})]},u)}):null,e.jsxs("div",{children:[e.jsx(R,{type:"button",className:"ltr:mr-2 rtl:ml-2",onClick:()=>{C({tagName:"",colorName:""})},children:"Add tags"}),e.jsx(R,{type:"submit",variant:"solid",children:"Submit"})]})]})})]})})})}})})})},{Tr:O,Th:Be,Td:He,THead:Oe,TBody:Pe}=A,ze=({renderRowSubComponent:s,getRowCanExpand:l})=>{const i=b(),d=({row:o})=>{const{textTheme:g}=E(),k=()=>{i(z(!0)),i(_(o))};return e.jsx("div",{className:`${g} cursor-pointer select-none font-semibold`,onClick:k,children:"Edit"})},h=({row:o})=>{const{textTheme:g}=E(),k=async()=>{await i(_(o)),i(K(!0))};return e.jsx("div",{className:`${g} cursor-pointer select-none font-semibold text-red-500`,onClick:k,children:"Delete"})},t=[10,25,50,100],r=f(o=>o.crmTagCategories.data.displayedTagCategoriesList),a=f(o=>o.crmTagCategories.data.loading),{pageIndex:n,pageSize:m,sort:c,query:x,total:C}=f(o=>o.crmTagCategories.data.tableData),N=j.useMemo(()=>({pageIndex:n,pageSize:m,sort:c,query:x,total:C}),[n,m,c,x,C]),u=j.useMemo(()=>[{header:()=>null,id:"expander",cell:({row:o})=>e.jsx(e.Fragment,{children:o.getCanExpand()?e.jsx("button",{className:"text-lg",onClick:o.getToggleExpandedHandler(),children:o.getIsExpanded()?e.jsx(he,{}):e.jsx(xe,{})}):null}),subCell:()=>null},{header:"Edit",id:"action",cell:o=>e.jsx(d,{row:o.row.original})},{header:"Delete",id:"action",cell:o=>e.jsx(h,{row:o.row.original})},{header:"Category Name",accessorKey:"categoryName"},{header:"Module Name",accessorKey:"master.moduleName"},{header:"Created By",accessorKey:"createdBy"}],[]),[p,T]=j.useState(r),y=j.useMemo(()=>t.map(o=>({value:o,label:`${o} / page`})),[t]);j.useEffect(()=>{const o=r==null?void 0:r.map(g=>({...g,subRows:g.tags}));T(o)},[r]);const w=Z({data:p,columns:u,getRowCanExpand:l,getCoreRowModel:ee(),getExpandedRowModel:Ce(),manualPagination:!0,manualSorting:!0}),q=o=>{const g=G(N);g.pageIndex=o,i(Y(g))},B=o=>{const g=G(N);g.pageSize=Number(o),g.pageIndex=1,i(Y(g))},le=o=>{a||B==null||B(Number(o))},ce=o=>{a||q==null||q(o)};Ie("tagcategory","canCreate");const de=()=>{i(V(!0))};return e.jsxs(e.Fragment,{children:[e.jsxs(me,{loading:a&&(p==null?void 0:p.length)!==0,type:"cover",children:[e.jsx("div",{className:"md:flex items-center justify-end",children:e.jsx("div",{className:"mb-4",children:e.jsx(R,{size:"sm",onClick:de,children:"Add New"})})}),e.jsxs(A,{children:[e.jsx(Oe,{children:w.getHeaderGroups().map(o=>e.jsx(O,{children:o.headers.map(g=>e.jsx(Be,{colSpan:g.colSpan,children:$(g.column.columnDef.header,g.getContext())},g.id))},o.id))}),a&&(p==null?void 0:p.length)===0?e.jsx(je,{columns:u==null?void 0:u.length,avatarInColumns:[0],avatarProps:{width:28,height:28}}):e.jsx(Pe,{children:w.getRowModel().rows.map(o=>e.jsxs(j.Fragment,{children:[e.jsx(O,{children:o.getVisibleCells().map(g=>e.jsx("td",{children:$(g.column.columnDef.cell,g.getContext())},g.id))}),o.getIsExpanded()&&e.jsx(O,{children:e.jsx(He,{colSpan:o.getVisibleCells().length,children:s({row:o})})})]},o.id))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(Te,{pageSize:m,currentPage:n,total:C,onChange:ce}),e.jsx("div",{style:{minWidth:130},children:e.jsx(ae,{size:"sm",menuPlacement:"top",isSearchable:!1,value:y==null?void 0:y.filter(o=>o.value===m),options:y,onChange:o=>le(o==null?void 0:o.value)})})]})]}),e.jsx(Ee,{}),e.jsx(ie,{}),e.jsx(qe,{})]})},Ke=()=>{const s=b(),l=f(t=>t.crmTagCategories.data.deleteSubTagConfirmation),i=f(t=>t.crmTagCategories.data.selectedTag),d=()=>{s(W(!1))},h=async()=>{var r,a,n;s(W(!1));const t=await s(Me(i.id));(r=t==null?void 0:t.payload)!=null&&r.success?D.push(e.jsx(S,{title:"Successfuly Deleted",type:"success",duration:2500,children:(a=t==null?void 0:t.payload)==null?void 0:a.message}),{placement:"top-end"}):D.push(e.jsx(S,{title:"Something Went Wrong !!!",type:"danger",duration:2500,children:(n=t==null?void 0:t.error)==null?void 0:n.message}),{placement:"top-end"}),await s(M())};return e.jsx(ne,{isOpen:l,type:"danger",title:"Delete Tag",confirmButtonColor:"red-600",onClose:d,onRequestClose:d,onCancel:d,onConfirm:h,children:e.jsx("p",{children:"Are you sure you want to delete this Tag? All record related to this tag will be deleted as well. This action cannot be undone."})})},{Tr:Q,Th:Ve,Td:We,THead:Le,TBody:Ue,Sorter:_e}=A,Ye=({row:s})=>{const l=b(),{textTheme:i}=E(),d=()=>{l(re(s))};return e.jsx("div",{className:`${i} cursor-pointer select-none font-semibold`,onClick:d,children:"Edit"})},Ge=({row:s})=>{const{textTheme:l}=E(),i=b(),d=async()=>{await i(re(s)),await i(W(!0))};return e.jsx("div",{className:`${l} cursor-pointer select-none font-semibold text-red-500`,onClick:d,children:"Delete"})},Je=s=>{const{tableData:l}=s,[i,d]=j.useState([]),[h]=j.useState(l),r=Z({data:h,columns:[{header:"Edit",id:"action",cell:a=>e.jsx(Ye,{row:a.row.original})},{header:"Delete",id:"action",cell:a=>e.jsx(Ge,{row:a.row.original})},{header:"Tag Name",accessorKey:"tagName"},{header:"Color",accessorKey:"colorName",cell:a=>{const n=a.row.original;return e.jsxs("div",{className:"flex items-center",children:[e.jsx(ue,{style:{backgroundColor:`${n.colorName}`}}),e.jsx("span",{className:"ml-2 rtl:mr-2 capitalize",children:n.colorName})]})}}],state:{sorting:i},onSortingChange:d,getCoreRowModel:ee(),getSortedRowModel:fe()});return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(Le,{children:r.getHeaderGroups().map(a=>e.jsx(Q,{children:a.headers.map(n=>e.jsx(Ve,{colSpan:n.colSpan,children:n.isPlaceholder?null:e.jsxs("div",{className:n.column.getCanSort()?"cursor-pointer select-none":"",onClick:n.column.getToggleSortingHandler(),children:[$(n.column.columnDef.header,n.getContext()),e.jsx(_e,{sort:n.column.getIsSorted()})]})},n.id))},a.id))}),e.jsx(Ue,{children:r.getRowModel().rows.slice(0,10).map(a=>e.jsx(Q,{children:a.getVisibleCells().map(n=>e.jsx(We,{children:$(n.column.columnDef.cell,n.getContext())},n.id))},a.id))})]}),e.jsx(Ke,{})]})},Qe=({row:s})=>e.jsx("pre",{style:{fontSize:"10px"},children:e.jsx(Je,{tableData:s.original.tags})});ge("crmTagCategories",ke);const Xe=()=>{const s=b(),l=async()=>{await s(M())};return j.useEffect(()=>{l()},[s]),e.jsxs(e.Fragment,{children:[e.jsx("h5",{className:"mb-2",children:"Manage Tags"}),e.jsx(ze,{renderRowSubComponent:Qe,getRowCanExpand:()=>!0})]})},Qt=Xe;export{Qt as T};
