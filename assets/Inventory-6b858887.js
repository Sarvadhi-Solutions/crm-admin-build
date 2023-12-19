import{am as S,an as ne,ao as le,ap as de,r as f,j as o,a as j,aq as ie}from"./index-8f180057.js";import{T as Me}from"./index-19730294.js";import{ai as He,s as ce,aj as Ve,ak as Qe,al as Ue,am as Ee,an as Je,ao as Xe,ap as Ye,aq as Ze,ar as ea,as as aa,r as ta}from"./CrmService-4ead0dba.js";import{B as A}from"./Button-9a124664.js";import{I as L}from"./Input-80948cc5.js";import{b as ge,O as me,P as ue}from"./index.esm-d559b7a8.js";import{d as pe}from"./debounce-82d29265.js";import{c as N}from"./cloneDeep-1f39f070.js";import{D as ye}from"./DataTable-3741aea2.js";import{u as $}from"./checkEditUpdate-a2ffee2c.js";import{u as Ce}from"./useThemeClass-fedd2393.js";import"./Alert-26b93c15.js";import"./index-50da1f05.js";import"./Badge-da9b4bac.js";import"./RangeCalendar-4f882c48.js";import"./Card-c08b3dc7.js";import"./index-467c57d1.js";import"./index-f90d0a46.js";import{D as he}from"./Dialog-00762d81.js";import"./Drawer-9e2f40a2.js";import"./index-57f971c2.js";import{F as fe,a as M}from"./FormItem-6da989b2.js";import"./toString-6546c1f5.js";import"./index-c14dd8b2.js";import"./index-7419ce87.js";import"./index-8db80fc8.js";import{N as q,t as v}from"./toast-d4a23693.js";import"./Pagination-02ddc899.js";import"./Progress-4aad2981.js";import"./index-f1c49e5c.js";import"./ScrollBar-cc732ada.js";import"./index-5c4aebcf.js";import{S as U}from"./Select-b8e32f8a.js";import"./Skeleton-a652bf9f.js";import"./index-3ad4fd06.js";import"./Switcher-b15fc15a.js";import"./index-68091566.js";import"./Tag-f078f978.js";import"./index-04594492.js";import"./index-f2e93cf2.js";import"./Tooltip-c46cdf61.js";import"./Upload-5d1aec4a.js";import"./Views-0f0dd1b0.js";import"./chart.constant-9b9fa33b.js";import"./GrowShrinkTag-a0071cd9.js";import"./react-tooltip.min-4facd0ed.js";import"./RichTextEditor-233df5d8.js";import"./SegmentItemOption-79a4fade.js";import{S as xe}from"./StickyFooter-134c0766.js";import"./SvgIcon-70b4e497.js";import{F as be,a as je,b as E}from"./formik.esm-23c950a3.js";import{A as Se}from"./index.esm-df09f035.js";import{a as F,g as oa}from"./index.esm-52385f0a.js";import{c as k,a as Q,d as sa}from"./index.esm-f2cf7456.js";import{C as we}from"./ConfirmDialog-aae1170e.js";import{a as ra}from"./index.esm-047fe164.js";import{c as na}from"./index.esm-bdf0e103.js";import{T as la}from"./TextTruncate-eb23fc19.js";const da="crmCategory",J=S("crmCategory/data/createCategory",async t=>{var e,a;try{return(await He(t)).data}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),z=S("crmCategory/data/getCategory",async()=>{var t,e;try{return(await ce()).data}catch(a){throw new Error((e=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:e.message)}}),ia=S("crmLeads/data/editCategory",async({id:t,updatedData:e})=>{var a,s;try{return(await Ve(t,e)).data}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}}),ca=S("crmLeads/data/deleteCategory",async t=>{var e,a;try{return await Qe(t)}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),ga={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ma={loading:!1,tableData:ga,displayedCategoryList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedCategory:null,deleteConfirmation:!1},Le=ne({name:`${da}/state`,initialState:ma,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const a=t.categoryList.filter(s=>s.name.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedCategoryList=a.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedCategory:(t,e)=>{t.selectedCategory=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload}},extraReducers:t=>{t.addCase(J.fulfilled,(e,a)=>{e.loading=!1}).addCase(J.pending,e=>{e.loading=!0}).addCase(z.fulfilled,(e,a)=>{var s;e.loading=!1,e.categoryList=a==null?void 0:a.payload.data,e.tableData.total=(s=a.payload.data)==null?void 0:s.length,e.displayedCategoryList=a==null?void 0:a.payload.data.slice(0,10)}).addCase(z.pending,e=>{e.loading=!0})}}),{setTableData:G,setDialogToggle:B,setDialogMode:ke,setSelectedCategory:Ie,toggleDeleteConfirmation:X}=Le.actions,ua=Le.reducer,pa=le({data:ua}),P=de,$e=f.forwardRef((t,e)=>{const{onInputChange:a}=t,s=pe(n,500);function n(r){a==null||a(r)}const d=r=>{s(r.target.value)};return o.jsx(L,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:o.jsx(ge,{className:"text-lg"}),onChange:d})});$e.displayName="CategoryTableSearch";const ya=()=>{const t=j(),e=f.useRef(null),a=P(d=>d.crmCategory.data.tableData),s=d=>{const r=N(a);r.query=d,r.pageIndex=1,typeof d=="string"&&d.length>1&&n(r),typeof d=="string"&&d.length===0&&n(r)},n=d=>{t(d?G(d):z())};return o.jsxs("div",{className:"md:flex items-center justify-between",children:[o.jsx("div",{className:"md:flex items-center gap-4",children:o.jsx($e,{ref:e,onInputChange:s})}),o.jsx("div",{className:"mb-4",children:o.jsx(A,{size:"sm",onClick:()=>{t(B(!0)),t(ke("Add"))},children:"Add New"})})]})},Ca=()=>{const t=j(),e=P(i=>i.crmCategory.data.loading),a=$("roles","canModify"),s=$("roles","canDelete"),{pageIndex:n,pageSize:d,sort:r,query:p,total:y}=P(i=>i.crmCategory.data.tableData),u=P(i=>i.crmCategory.data.displayedCategoryList),m=({row:i})=>{const l=j(),{textTheme:b}=Ce(),w=()=>{l(Ie(i)),l(B(!0)),l(ke("Edit"))},I=async()=>{await l(Ie(i)),l(X(!0))};return o.jsxs("div",{className:"flex justify-start text-lg",children:[o.jsx("span",{className:`cursor-pointer p-2 hover:${b}`,onClick:w,children:o.jsx(me,{})}),o.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:I,children:o.jsx(ue,{})})]})},g=f.useMemo(()=>({pageIndex:n,pageSize:d,sort:r,query:p,total:y}),[n,d,r,p,y]),c=f.useMemo(()=>[{header:"Action",id:"action",cell:l=>o.jsx(m,{row:l.row.original})},{header:"Category",accessorKey:"name",cell:l=>l.row.original.name}],[a,s]),C=i=>{const l=N(g);l.pageIndex=i,t(G(l))},x=i=>{const l=N(g);l.pageSize=Number(i),l.pageIndex=1,t(G(l))},h=i=>{const l=N(g);l.sort=i,t(G(l))};return o.jsx("div",{children:o.jsx(ye,{columns:c,data:u,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:g.total,pageIndex:g.pageIndex,pageSize:g.pageSize},onPaginationChange:C,onSelectChange:x,onSort:h})})},ha=k().shape({name:Q().required("Category name is required")}),ze=f.forwardRef((t,e)=>{const a=j(),s=P(p=>p.crmCategory.data.dialogMode),n=P(p=>p.crmCategory.data.selectedCategory),d=()=>{a(B(!1))},r=async(p,y,u,m,g)=>{var i,l,b;const c=await m(p==="Add"?J(y):ia({id:u==null?void 0:u.id,updatedData:{name:y.name}}));let C="",x="",h="danger";(i=c==null?void 0:c.payload)!=null&&i.success?(C="Successfully Added",x=(l=c==null?void 0:c.payload)==null?void 0:l.message,h="success"):(C="Something went wrong !!!",x=(b=c==null?void 0:c.error)==null?void 0:b.message),g.push(o.jsx(q,{title:C,type:h,duration:2500,children:x}),{placement:"top-end"}),m(B(!1)),await m(z())};return o.jsx(be,{innerRef:e,initialValues:{name:s==="Edit"?n==null?void 0:n.name:""},validationSchema:ha,onSubmit:async(p,{setSubmitting:y})=>{s==="Add"?await r("Add",p,null,a,v):await r("Edit",p,n,a,v),y(!1)},children:({touched:p,errors:y,values:u,setFieldValue:m})=>o.jsxs(je,{children:[o.jsx(fe,{children:o.jsx(M,{label:"Category Name",invalid:y.name&&p.name,errorMessage:y.name,children:o.jsx(E,{type:"text",autoComplete:"off",name:"name",placeholder:"Category Name",component:L,prefix:o.jsx(F,{className:"text-xl"})})})}),o.jsx(xe,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:o.jsxs("div",{className:"md:flex items-center",children:[o.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:d,children:"Cancel"}),o.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:o.jsx(Se,{}),children:"Save"})]})})]})})});ze.displayName="CategoryForm";const fa=()=>{const t=j(),e=P(r=>r.crmCategory.data.deleteConfirmation),a=P(r=>r.crmCategory.data.selectedCategory),s=()=>{t(X(!1))},n=(r,p,y,u)=>{var g,c,C;const m=(g=r==null?void 0:r.payload)==null?void 0:g.success;p.push(o.jsx(q,{title:m?y:u,type:m?"success":"danger",duration:2500,children:m?(c=r==null?void 0:r.payload)==null?void 0:c.message:(C=r==null?void 0:r.error)==null?void 0:C.message}),{placement:"top-end"})},d=async()=>{t(X(!1));const r=await t(ca(a==null?void 0:a.id));n(r,v,"Successfully Deleted","Something Went Wrong !!!"),await t(z())};return o.jsx(we,{isOpen:e,type:"danger",title:"Delete Category",confirmButtonColor:"red-600",onClose:s,onRequestClose:s,onCancel:s,onConfirm:d,children:o.jsx("p",{children:"Are you sure you want to delete this Category? All record related to this Category will be deleted as well. This action cannot be undone."})})};ie("crmCategory",pa);const xa=()=>{const t=j(),e=P(n=>n.crmCategory.data.isDialogOpen),a=P(n=>n.crmCategory.data.dialogMode),s=()=>{t(B(!1))};return f.useEffect(()=>{t(z())},[]),o.jsxs(o.Fragment,{children:[o.jsx(ya,{}),o.jsx(Ca,{}),o.jsxs(he,{isOpen:e,onClose:s,children:[o.jsxs("h5",{className:"mb-4",children:[a==="Edit"?"Edit":"Add New"," Category"]}),o.jsx(ze,{})]}),o.jsx(fa,{})]})},ba="crmSubCategory",ja={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},Sa={loading:!1,tableData:ja,displayedSubCategoryList:[],subCategoryList:[],categoryList:[],isDialogOpen:!1,dialogMode:"Add",selectedSubCategory:null,deleteConfirmation:!1},Y=S("crmSubCategory/data/createSubCategory",async t=>{var e,a;try{return(await Ue(t)).data}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),R=S("crmSubCategory/data/getSubCategory",async()=>{var t,e;try{return(await Ee()).data}catch(a){throw new Error((e=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:e.message)}}),Re=S("crmSubCategory/data/getCategory",async()=>{var t,e;try{return(await ce()).data}catch(a){throw new Error((e=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:e.message)}}),wa=S("crmSubCategory/data/editSubCategory",async({id:t,updatedData:e})=>{var a,s;try{return(await Je(t,e)).data}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}}),Da=S("crmSubCategory/data/deleteSubCategory",async t=>{var e,a;try{return await Xe(t)}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),qe=ne({name:`${ba}/state`,initialState:Sa,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const a=t.subCategoryList.filter(s=>s.name.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedSubCategoryList=a.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedSubCategory:(t,e)=>{t.selectedSubCategory=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload}},extraReducers:t=>{t.addCase(Y.fulfilled,(e,a)=>{e.loading=!1}).addCase(Y.pending,e=>{e.loading=!0}).addCase(R.fulfilled,(e,a)=>{var s;e.loading=!1,e.subCategoryList=a==null?void 0:a.payload.data,e.tableData.total=(s=a.payload.data)==null?void 0:s.length,e.displayedSubCategoryList=a==null?void 0:a.payload.data.slice(0,10)}).addCase(Re.fulfilled,(e,a)=>{e.categoryList=a==null?void 0:a.payload.data}).addCase(R.pending,e=>{e.loading=!0})}}),{setTableData:H,setSelectedSubCategory:Te,setDialogToggle:K,setDialogMode:Oe,toggleDeleteConfirmation:Z}=qe.actions,Na=qe.reducer,Ia=le({data:Na}),T=de,Ta=()=>{const t=j(),e=T(r=>r.crmSubCategory.data.deleteConfirmation),a=T(r=>r.crmSubCategory.data.selectedSubCategory),s=()=>{t(Z(!1))},n=(r,p,y,u)=>{var g,c,C;const m=(g=r==null?void 0:r.payload)==null?void 0:g.success;p.push(o.jsx(q,{title:m?y:u,type:m?"success":"danger",duration:2500,children:m?(c=r==null?void 0:r.payload)==null?void 0:c.message:(C=r==null?void 0:r.error)==null?void 0:C.message}),{placement:"top-end"})},d=async()=>{t(Z(!1));const r=await t(Da(a==null?void 0:a.id));n(r,v,"Successfully Deleted","Something Went Wrong !!!"),await t(R())};return o.jsx(we,{isOpen:e,type:"danger",title:"Delete Sub Category",confirmButtonColor:"red-600",onClose:s,onRequestClose:s,onCancel:s,onConfirm:d,children:o.jsx("p",{children:"Are you sure you want to delete this Sub Category? All record related to this Sub Category will be deleted as well. This action cannot be undone."})})},Pa=k().shape({categoryId:k().required("Category is required"),name:Q().required("Sub Category name is required")}),Fe=f.forwardRef((t,e)=>{const a=j(),s=T(u=>u.crmSubCategory.data.dialogMode),n=T(u=>u.crmSubCategory.data.selectedSubCategory),d=T(u=>u.crmSubCategory.data.categoryList),r=f.useMemo(()=>d.map(m=>({label:m.name,value:m.id})),[d]),p=()=>{a(K(!1))},y=async(u,m,g,c,C)=>{var w,I,O;const x={name:m.name,categoryId:m.categoryId.value},h=await c(u==="Add"?Y(x):wa({id:g==null?void 0:g.id,updatedData:x}));let i="",l="",b="danger";(w=h==null?void 0:h.payload)!=null&&w.success?(i="Successfully Added",l=(I=h==null?void 0:h.payload)==null?void 0:I.message,b="success"):(i="Something went wrong !!!",l=(O=h==null?void 0:h.error)==null?void 0:O.message),C.push(o.jsx(q,{title:i,type:b,duration:2500,children:l}),{placement:"top-end"}),c(K(!1)),await c(R())};return o.jsx(be,{innerRef:e,initialValues:{name:s==="Edit"?n==null?void 0:n.name:"",categoryId:s==="Edit"?r.find(u=>u.value===(n==null?void 0:n.category.id)):""},validationSchema:Pa,onSubmit:async(u,{setSubmitting:m})=>{s==="Add"?await y("Add",u,null,a,v):await y("Edit",u,n,a,v),m(!1)},children:({touched:u,errors:m,values:g,setFieldValue:c})=>o.jsxs(je,{children:[o.jsxs(fe,{children:[o.jsx(M,{label:"Category Name",invalid:m.categoryId&&u.categoryId,errorMessage:m.categoryId,children:o.jsx(E,{isClearable:!0,type:"text",autoComplete:"off",name:"categoryId",placeholder:"Category",options:r,component:U,prefix:o.jsx(F,{className:"text-xl"}),onChange:C=>{c("categoryId",C)}})}),o.jsx(M,{label:"Sub Category Name",invalid:m.name&&u.name,errorMessage:m.name,children:o.jsx(E,{type:"text",autoComplete:"off",name:"name",placeholder:"Sub Category Name",component:L,prefix:o.jsx(F,{className:"text-xl"})})})]}),o.jsx(xe,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:o.jsxs("div",{className:"md:flex items-center",children:[o.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:p,children:"Cancel"}),o.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:o.jsx(Se,{}),children:"Save"})]})})]})})});Fe.displayName="SubCategoryForm";const Aa=()=>{const t=j(),e=T(i=>i.crmSubCategory.data.loading),a=T(i=>i.crmSubCategory.data.displayedSubCategoryList),s=$("roles","canModify"),n=$("roles","canDelete"),{pageIndex:d,pageSize:r,sort:p,query:y,total:u}=T(i=>i.crmSubCategory.data.tableData),m=f.useMemo(()=>({pageIndex:d,pageSize:r,sort:p,query:y,total:u}),[d,r,p,y,u]),g=({row:i})=>{const l=j(),{textTheme:b}=Ce(),w=()=>{l(Te(i)),l(K(!0)),l(Oe("Edit"))},I=async()=>{await l(Te(i)),l(Z(!0))};return o.jsxs("div",{className:"flex justify-start text-lg",children:[o.jsx("span",{className:`cursor-pointer p-2 hover:${b}`,onClick:w,children:o.jsx(me,{})}),o.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:I,children:o.jsx(ue,{})})]})},c=f.useMemo(()=>[{header:"Action",id:"action",cell:l=>o.jsx(g,{row:l.row.original})},{header:"Sub Category",accessorKey:"name",cell:l=>l.row.original.name},{header:"Category",accessorKey:"name",cell:l=>l.row.original.category.name}],[s,n]),C=i=>{const l=N(m);l.pageIndex=i,t(H(l))},x=i=>{const l=N(m);l.pageSize=Number(i),l.pageIndex=1,t(H(l))},h=i=>{const l=N(m);l.sort=i,t(H(l))};return o.jsx("div",{children:o.jsx(ye,{columns:c,data:a,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:m.total,pageIndex:m.pageIndex,pageSize:m.pageSize},onPaginationChange:C,onSelectChange:x,onSort:h})})},Be=f.forwardRef((t,e)=>{const{onInputChange:a}=t,s=pe(n,500);function n(r){a==null||a(r)}const d=r=>{s(r.target.value)};return o.jsx(L,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:o.jsx(ge,{className:"text-lg"}),onChange:d})});Be.displayName="SubCategoryTableSearch";const va=()=>{const t=j(),e=f.useRef(null),a=T(d=>d.crmSubCategory.data.tableData),s=d=>{const r=N(a);r.query=d,r.pageIndex=1,typeof d=="string"&&d.length>1&&n(r),typeof d=="string"&&d.length===0&&n(r)},n=d=>{t(d?H(d):R())};return o.jsxs("div",{className:"md:flex items-center justify-between",children:[o.jsx("div",{className:"md:flex items-center gap-4",children:o.jsx(Be,{ref:e,onInputChange:s})}),o.jsx("div",{className:"mb-4",children:o.jsx(A,{size:"sm",onClick:()=>{t(K(!0)),t(Oe("Add"))},children:"Add New"})})]})};ie("crmSubCategory",Ia);const Ma=()=>{const t=j(),e=T(n=>n.crmSubCategory.data.isDialogOpen),a=T(n=>n.crmSubCategory.data.dialogMode),s=()=>{t(K(!1))};return f.useEffect(()=>{t(R()),t(Re())},[]),o.jsxs(o.Fragment,{children:[o.jsx(va,{}),o.jsx(Aa,{}),o.jsxs(he,{isOpen:e,onClose:s,children:[o.jsxs("h5",{className:"mb-4",children:[a==="Edit"?"Edit":"Add New"," Sub Category"]}),o.jsx(Fe,{})]}),o.jsx(Ta,{})]})},Ea="crmProduct",La={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},ka={loading:!1,tableData:La,displayedProductList:[],productList:[],categoryList:[],subCategoryList:[],selectedProduct:null,isDialogOpen:!1,dialogMode:"Add",deleteConfirmation:!1},ee=S("crmProduct/data/createProduct",async t=>{var e,a;try{return(await Ye(t)).data}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),_=S("crmProduct/data/getProduct",async()=>{var t,e;try{return(await Ze()).data}catch(a){throw new Error((e=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:e.message)}}),ae=S("crmProduct/data/editProduct",async({id:t,updatedData:e})=>{var a,s;try{return(await ea(t,e)).data}catch(n){throw new Error((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)}}),te=S("crmProduct/data/deleteProduct",async t=>{var e,a;try{return await aa(t)}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),oe=S("crmProduct/data/getSubByIdCategory",async t=>{var e,a;try{const s=await ta(t);return console.log(s.data),s.data}catch(s){throw new Error((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)}}),Pe=S("crmProduct/data/getSubCategory",async()=>{var t,e;try{const a=await Ee();return console.log(a.data),a.data}catch(a){throw new Error((e=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:e.message)}}),se=S("crmProduct/data/getCategory",async()=>{var t,e;try{return(await ce()).data}catch(a){throw new Error((e=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:e.message)}}),Ke=ne({name:`${Ea}/state`,initialState:ka,reducers:{setTableData:(t,e)=>{t.tableData=e.payload;const a=t.productList.filter(s=>s.name.toLowerCase().includes(e.payload.query.toLowerCase()));t.displayedProductList=a.slice(e.payload.pageSize*(e.payload.pageIndex-1),e.payload.pageSize*e.payload.pageIndex)},setSelectedProduct:(t,e)=>{t.selectedProduct=e.payload},setDialogToggle:(t,e)=>{t.isDialogOpen=e.payload},setDialogMode:(t,e)=>{t.dialogMode=e.payload},toggleDeleteConfirmation:(t,e)=>{t.deleteConfirmation=e.payload}},extraReducers:t=>{t.addCase(ee.fulfilled,(e,a)=>{e.loading=!1}).addCase(ee.pending,e=>{e.loading=!0}).addCase(_.fulfilled,(e,a)=>{var s;e.loading=!1,e.productList=a==null?void 0:a.payload.data,e.tableData.total=(s=a.payload.data)==null?void 0:s.length,e.displayedProductList=a==null?void 0:a.payload.data.slice(0,10)}).addCase(oe.fulfilled,(e,a)=>{e.loading=!1,e.subCategoryList=a==null?void 0:a.payload.data}).addCase(Pe.fulfilled,(e,a)=>{e.loading=!1,e.subCategoryList=a==null?void 0:a.payload.data}).addCase(se.fulfilled,(e,a)=>{e.categoryList=a==null?void 0:a.payload.data}).addCase(se.pending,e=>{e.loading=!0}).addCase(oe.pending,e=>{e.loading=!0}).addCase(Pe.pending,e=>{e.loading=!0}).addCase(te.pending,e=>{e.loading=!0}).addCase(te.fulfilled,e=>{e.loading=!1}).addCase(ae.pending,e=>{e.loading=!0}).addCase(ae.fulfilled,e=>{e.loading=!1})}}),{setTableData:V,setSelectedProduct:Ae,setDialogToggle:W,setDialogMode:We,toggleDeleteConfirmation:re}=Ke.actions,$a=Ke.reducer,za=le({data:$a}),D=de,Ra=()=>{const t=j(),e=D(r=>r.crmProduct.data.deleteConfirmation),a=D(r=>r.crmProduct.data.selectedProduct),s=()=>{t(re(!1))},n=(r,p,y,u)=>{var g,c,C;const m=(g=r==null?void 0:r.payload)==null?void 0:g.success;p.push(o.jsx(q,{title:m?y:u,type:m?"success":"danger",duration:2500,children:m?(c=r==null?void 0:r.payload)==null?void 0:c.message:(C=r==null?void 0:r.error)==null?void 0:C.message}),{placement:"top-end"})},d=async()=>{t(re(!1));const r=await t(te(a==null?void 0:a.id));n(r,v,"Successfully Deleted","Something Went Wrong !!!"),await t(_())};return o.jsx(we,{isOpen:e,type:"danger",title:"Delete Product",confirmButtonColor:"red-600",onClose:s,onRequestClose:s,onCancel:s,onConfirm:d,children:o.jsx("p",{children:"Are you sure you want to delete this Product? All record related to this Product will be deleted as well. This action cannot be undone."})})},qa=k().shape({categoryId:k().required("Category is required"),subCategoryId:k().notRequired(),name:Q().required("Product name is required"),price:sa().test("greaterThanOne","Price must be greater than 1",t=>t>1).required("Price is required"),description:Q().notRequired()}),_e=f.forwardRef((t,e)=>{const a=j(),s=D(g=>g.crmProduct.data.dialogMode),n=D(g=>g.crmProduct.data.selectedProduct),d=D(g=>g.crmProduct.data.categoryList),r=D(g=>g.crmProduct.data.subCategoryList),p=f.useMemo(()=>d.map(c=>({label:c.name,value:c.id})),[d]),y=f.useMemo(()=>r.map(c=>({label:c.name,value:c.id})),[r]),u=()=>{a(W(!1))},m=async(g,c,C,x,h)=>{var O,De,Ne;const i={name:c.name,categoryId:c.categoryId.value,subCategoryId:c.subCategoryId.value,price:c.price,description:c.description},l=await x(g==="Add"?ee(i):ae({id:C==null?void 0:C.id,updatedData:i}));let b="",w="",I="danger";(O=l==null?void 0:l.payload)!=null&&O.success?(b="Successfully Added",w=(De=l==null?void 0:l.payload)==null?void 0:De.message,I="success"):(b="Something went wrong !!!",w=(Ne=l==null?void 0:l.error)==null?void 0:Ne.message),h.push(o.jsx(q,{title:b,type:I,duration:2500,children:w}),{placement:"top-end"}),x(W(!1)),await x(_())};return console.log(n),o.jsx(be,{innerRef:e,initialValues:{name:s==="Edit"?n==null?void 0:n.name:"",categoryId:s==="Edit"?p.find(g=>g.value===(n==null?void 0:n.categoryId)):"",subCategoryId:s==="Edit"?y.find(g=>g.value===(n==null?void 0:n.subCategoryId)):"",price:s==="Edit"?n==null?void 0:n.price:0,description:s==="Edit"?n==null?void 0:n.description:""},validationSchema:qa,onSubmit:async(g,{setSubmitting:c})=>{s==="Add"?await m("Add",g,null,a,v):await m("Edit",g,n,a,v),c(!1)},children:({touched:g,errors:c,values:C,setFieldValue:x})=>o.jsxs(je,{children:[o.jsxs(fe,{children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsx("div",{className:"col-span-1",children:o.jsx(M,{label:"Category",invalid:c.categoryId&&g.categoryId,errorMessage:c.categoryId,children:o.jsx(E,{type:"text",autoComplete:"off",name:"categoryId",placeholder:"Category",options:p,component:U,prefix:o.jsx(F,{className:"text-xl"}),onChange:async h=>{await a(oe(h.value)),x("categoryId",h)}})})}),o.jsx("div",{className:"col-span-1",children:o.jsx(M,{label:"Sub Category",invalid:c.subCategoryId&&g.subCategoryId,errorMessage:c.subCategoryId,children:o.jsx(E,{type:"text",autoComplete:"off",name:"subCategoryId",placeholder:"Sub Category",options:y,component:U,prefix:o.jsx(F,{className:"text-xl"}),onChange:h=>{x("subCategoryId",h)}})})})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsx("div",{className:"col-span-1",children:o.jsx(M,{label:"Product Name",invalid:c.name&&g.name,errorMessage:c.name,children:o.jsx(E,{type:"text",autoComplete:"off",name:"name",placeholder:"Product Name",component:L,prefix:o.jsx(na,{className:"text-xl"})})})}),o.jsx("div",{className:"col-span-1",children:o.jsx(M,{label:"Price",invalid:c.price&&g.price,errorMessage:c.price,children:o.jsx(E,{type:"number",autoComplete:"off",name:"price",placeholder:"Price",component:L,prefix:o.jsx(ra,{className:"text-xl"})})})})]}),o.jsx(M,{label:"Description",invalid:c.description&&g.description,errorMessage:c.description,children:o.jsx(E,{type:"text",autoComplete:"off",name:"description",placeholder:"Description",component:L,prefix:o.jsx(oa,{className:"text-xl"})})})]}),o.jsx(xe,{className:"flex items-center justify-end py-2",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:o.jsxs("div",{className:"md:flex items-center",children:[o.jsx(A,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:u,children:"Cancel"}),o.jsx(A,{size:"sm",type:"submit",variant:"solid",icon:o.jsx(Se,{}),children:"Save"})]})})]})})});_e.displayName="ProductForm";const Oa=()=>{const t=j(),e=D(i=>i.crmProduct.data.loading),a=$("roles","canModify"),s=$("roles","canDelete"),{pageIndex:n,pageSize:d,sort:r,query:p,total:y}=D(i=>i.crmProduct.data.tableData),u=f.useMemo(()=>({pageIndex:n,pageSize:d,sort:r,query:p,total:y}),[n,d,r,p,y]),m=D(i=>i.crmProduct.data.displayedProductList),g=({row:i})=>{const l=j(),{textTheme:b}=Ce(),w=()=>{l(Ae(i)),l(W(!0)),l(We("Edit"))},I=async()=>{await l(Ae(i)),l(re(!0))};return o.jsxs("div",{className:"flex justify-start text-lg",children:[o.jsx("span",{className:`cursor-pointer p-2 hover:${b}`,onClick:w,children:o.jsx(me,{})}),o.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:I,children:o.jsx(ue,{})})]})},c=f.useMemo(()=>[{header:"Action",id:"action",cell:l=>o.jsx(g,{row:l.row.original})},{header:"Product",accessorKey:"name",cell:l=>l.row.original.name},{header:"Category",accessorKey:"category.name",cell:l=>l.row.original.category.name},{header:"Sub Category",accessorKey:"subCategory.name",cell:l=>{var b;return((b=l.row.original.subCategory)==null?void 0:b.name)||"-"}},{header:"Price",accessorKey:"price",cell:l=>l.row.original.price},{header:"Description",accessorKey:"description",cell:l=>{const b=l.row.original.description;return o.jsx(la,{text:b,maxLength:20})}}],[a,s]),C=i=>{const l=N(u);l.pageIndex=i,t(V(l))},x=i=>{const l=N(u);l.pageSize=Number(i),l.pageIndex=1,t(V(l))},h=i=>{const l=N(u);l.sort=i,t(V(l))};return o.jsx("div",{children:o.jsx(ye,{columns:c,data:m,skeletonAvatarColumns:[0],skeletonAvatarProps:{width:28,height:28},loading:e,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:C,onSelectChange:x,onSort:h})})},Ge=f.forwardRef((t,e)=>{const{onInputChange:a}=t,s=pe(n,500);function n(r){a==null||a(r)}const d=r=>{s(r.target.value)};return o.jsx(L,{ref:e,className:"max-w-md md:w-52 mb-4",size:"sm",placeholder:"Search",prefix:o.jsx(ge,{className:"text-lg"}),onChange:d})});Ge.displayName="ProductTableSearch";const Fa=()=>{const t=j(),e=f.useRef(null),a=D(d=>d.crmProduct.data.tableData),s=d=>{const r=N(a);r.query=d,r.pageIndex=1,typeof d=="string"&&d.length>1&&n(r),typeof d=="string"&&d.length===0&&n(r)},n=d=>{console.log(d),t(d?V(d):_())};return o.jsxs("div",{className:"md:flex items-center justify-between",children:[o.jsx("div",{className:"md:flex items-center gap-4",children:o.jsx(Ge,{ref:e,onInputChange:s})}),o.jsx("div",{className:"mb-4",children:o.jsx(A,{size:"sm",onClick:()=>{t(W(!0)),t(We("Add"))},children:"Add New"})})]})};ie("crmProduct",za);const Ba=()=>{const t=j(),e=D(n=>n.crmProduct.data.isDialogOpen),a=D(n=>n.crmProduct.data.dialogMode),s=()=>{t(W(!1))};return f.useEffect(()=>{t(_()),t(se())},[]),o.jsxs(o.Fragment,{children:[o.jsx(Fa,{}),o.jsx(Oa,{}),o.jsxs(he,{isOpen:e,onClose:s,children:[o.jsxs("h5",{className:"mb-4",children:[a==="Edit"?"Edit":"Add New"," Product"]}),o.jsx(_e,{})]}),o.jsx(Ra,{})]})},{TabNav:Ka,TabList:Wa}=Me,ve={category:{label:"Category",path:"category"},subCategory:{label:"SubCategory",path:"subCategory"},product:{label:"Product",path:"product"}},_a=()=>{const[t,e]=f.useState("category"),a=s=>{e(s)};return o.jsxs(o.Fragment,{children:[o.jsx(Me,{value:t,variant:"pill",onChange:s=>a(s),children:o.jsx(Wa,{children:Object.keys(ve).map(s=>o.jsx(Ka,{value:s,children:ve[s].label},s))})}),o.jsx("div",{className:"py-4",children:o.jsxs(f.Suspense,{fallback:o.jsx(o.Fragment,{children:"loading..."}),children:[t==="category"&&o.jsx(xa,{}),t==="subCategory"&&o.jsx(Ma,{}),t==="product"&&o.jsx(Ba,{})]})})]})},Ut=_a;export{Ut as I};
