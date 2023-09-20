import{am as B,an as H,ao as K,ap as $,a as b,j as e,r as x,aq as G,h as w,ar as V}from"./index-2a02f09f.js";import{b as Q,c as W}from"./SalesService-f5b3b642.js";import{A as _}from"./AdaptableCard-260ffff4.js";import{A as F}from"./index-5ca6dc5a.js";import{B as X}from"./Badge-ed31d9ee.js";import{D as J}from"./DataTable-76c04f2c.js";import{W as U,X as Y,z as k,am as Z,aE as ee,aF as te}from"./index.esm-c61f0406.js";import{a as se}from"./index.esm-9ed7ea46.js";import{u as ae}from"./useThemeClass-d3572517.js";import{t as oe,N as re}from"./toast-66eca971.js";import{C as ne}from"./ConfirmDialog-5e3e2ca4.js";import{c as P}from"./cloneDeep-f2fd7982.js";import{B as j}from"./Button-3d6c325f.js";import{I as L}from"./Input-4032ba6b.js";import{d as le}from"./debounce-58c5e337.js";import{F as ce,a as C}from"./FormItem-c05bb264.js";import{C as p}from"./index-33716023.js";import{R as D}from"./index-9590e8bb.js";import{D as ie}from"./Drawer-aa907a2f.js";import{F as de,a as me,b as y}from"./formik.esm-dba0dfcc.js";import"./Card-de52f0bd.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./Views-597fd265.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./Pagination-45470020.js";import"./Select-e6a28a89.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./get-c92f924e.js";import"./toString-8660963f.js";import"./_MapCache-dabc1c97.js";import"./context-ccc0a902.js";import"./TableRowSkeleton-f01debf2.js";import"./Skeleton-a1c6070d.js";import"./index-be1c4c56.js";import"./useTimeout-90c2003f.js";import"./CloseButton-1ba6d0ce.js";import"./StatusIcon-19ebbef4.js";import"./chainedFunction-070f832c.js";import"./Dialog-fa942d86.js";import"./index-02c6e7a7.js";import"./_Uint8Array-49dd6612.js";import"./_getPrototype-63f10215.js";import"./isNil-68e69365.js";import"./_baseIsEqual-d37b49c3.js";const T="salesProductList",f=B(T+"/getProducts",async t=>(await Q(t)).data),ue=async t=>(await W(t)).data,I={total:0,pageIndex:1,pageSize:10,query:"",sort:{order:"",key:""}},pe={loading:!1,deleteConfirmation:!1,selectedProduct:"",productList:[],tableData:I,filterData:{name:"",category:["bags","cloths","devices","shoes","watches"],status:[0,1,2],productStatus:0}},R=H({name:`${T}/state`,initialState:pe,reducers:{updateProductList:(t,s)=>{t.productList=s.payload},setTableData:(t,s)=>{t.tableData=s.payload},setFilterData:(t,s)=>{t.filterData=s.payload},toggleDeleteConfirmation:(t,s)=>{t.deleteConfirmation=s.payload},setSelectedProduct:(t,s)=>{t.selectedProduct=s.payload}},extraReducers:t=>{t.addCase(f.fulfilled,(s,l)=>{s.productList=l.payload.data,s.tableData.total=l.payload.total,s.loading=!1}).addCase(f.pending,s=>{s.loading=!0})}}),{updateProductList:Nt,setTableData:N,setFilterData:xe,toggleDeleteConfirmation:S,setSelectedProduct:he}=R.actions,ge=R.reducer,fe=K({data:ge}),h=$,je=()=>{const t=b(),s=h(i=>i.salesProductList.data.deleteConfirmation),l=h(i=>i.salesProductList.data.selectedProduct),m=h(i=>i.salesProductList.data.tableData),c=()=>{t(S(!1))},r=async()=>{t(S(!1)),await ue({id:l})&&(t(f(m)),oe.push(e.jsx(re,{title:"Successfuly Deleted",type:"success",duration:2500,children:"Product successfuly deleted"}),{placement:"top-center"}))};return e.jsx(ne,{isOpen:s,type:"danger",title:"Delete product",confirmButtonColor:"red-600",onClose:c,onRequestClose:c,onCancel:c,onConfirm:r,children:e.jsx("p",{children:"Are you sure you want to delete this product? All record related to this product will be deleted as well. This action cannot be undone."})})},v={0:{label:"In Stock",dotClass:"bg-emerald-500",textClass:"text-emerald-500"},1:{label:"Limited",dotClass:"bg-amber-500",textClass:"text-amber-500"},2:{label:"Out of Stock",dotClass:"bg-red-500",textClass:"text-red-500"}},be=({row:t})=>{const s=b(),{textTheme:l}=ae(),m=G(),c=()=>{m(`/app/sales/product-edit/${t.id}`)},r=()=>{s(S(!0)),s(he(t.id))};return e.jsxs("div",{className:"flex justify-end text-lg",children:[e.jsx("span",{className:`cursor-pointer p-2 hover:${l}`,onClick:c,children:e.jsx(U,{})}),e.jsx("span",{className:"cursor-pointer p-2 hover:text-red-500",onClick:r,children:e.jsx(Y,{})})]})},Ce=({row:t})=>{const s=t.img?e.jsx(F,{src:t.img}):e.jsx(F,{icon:e.jsx(se,{})});return e.jsxs("div",{className:"flex items-center",children:[s,e.jsx("span",{className:"ml-2 rtl:mr-2 font-semibold",children:t.name})]})},De=()=>{const t=x.useRef(null),s=b(),{pageIndex:l,pageSize:m,sort:c,query:r,total:i}=h(a=>a.salesProductList.data.tableData),o=h(a=>a.salesProductList.data.filterData),n=h(a=>a.salesProductList.data.loading),g=h(a=>a.salesProductList.data.productList);x.useEffect(()=>{A()},[l,m,c]),x.useEffect(()=>{var a;t&&((a=t.current)==null||a.resetSorting())},[o]);const u=x.useMemo(()=>({pageIndex:l,pageSize:m,sort:c,query:r,total:i}),[l,m,c,r,i]),A=()=>{s(f({pageIndex:l,pageSize:m,sort:c,query:r,filterData:o}))},O=x.useMemo(()=>[{header:"Name",accessorKey:"name",cell:a=>{const d=a.row.original;return e.jsx(Ce,{row:d})}},{header:"Category",accessorKey:"category",cell:a=>{const d=a.row.original;return e.jsx("span",{className:"capitalize",children:d.category})}},{header:"Quantity",accessorKey:"stock",sortable:!0},{header:"Status",accessorKey:"status",cell:a=>{const{status:d}=a.row.original;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{className:v[d].dotClass}),e.jsx("span",{className:`capitalize font-semibold ${v[d].textClass}`,children:v[d].label})]})}},{header:"Price",accessorKey:"price",cell:a=>{const{price:d}=a.row.original;return e.jsxs("span",{children:["$",d]})}},{header:"",id:"action",cell:a=>e.jsx(be,{row:a.row.original})}],[]),E=a=>{const d=P(u);d.pageIndex=a,s(N(d))},M=a=>{const d=P(u);d.pageSize=Number(a),d.pageIndex=1,s(N(d))},q=a=>{const d=P(u);d.sort=a,s(N(d))};return e.jsxs(e.Fragment,{children:[e.jsx(J,{ref:t,columns:O,data:g,skeletonAvatarColumns:[0],skeletonAvatarProps:{className:"rounded-md"},loading:n,pagingData:{total:u.total,pageIndex:u.pageIndex,pageSize:u.pageSize},onPaginationChange:E,onSelectChange:M,onSort:q}),e.jsx(je,{})]})},ye=()=>{const t=b(),s=x.useRef(null),l=h(o=>o.salesProductList.data.tableData),m=le(c,500);function c(o){const n=P(l);n.query=o,n.pageIndex=1,typeof o=="string"&&o.length>1&&r(n),typeof o=="string"&&o.length===0&&r(n)}const r=o=>{t(N(o)),t(f(o))},i=o=>{m(o.target.value)};return e.jsx(L,{ref:s,className:"max-w-md md:w-52 md:mb-0 mb-4",size:"sm",placeholder:"Search product",prefix:e.jsx(k,{className:"text-lg"}),onChange:i})},z=x.forwardRef(({onSubmitComplete:t},s)=>{const l=b(),m=h(r=>r.salesProductList.data.filterData),c=r=>{t==null||t(),l(xe(r)),l(f(I))};return e.jsx(de,{enableReinitialize:!0,innerRef:s,initialValues:m,onSubmit:r=>{c(r)},children:({values:r,touched:i,errors:o})=>e.jsx(me,{children:e.jsxs(ce,{children:[e.jsxs(C,{invalid:o.name&&i.name,errorMessage:o.name,children:[e.jsx("h6",{className:"mb-4",children:"Included text"}),e.jsx(y,{type:"text",autoComplete:"off",name:"name",placeholder:"Keyword",component:L,prefix:e.jsx(k,{className:"text-lg"})})]}),e.jsxs(C,{invalid:o.category&&i.category,errorMessage:o.category,children:[e.jsx("h6",{className:"mb-4",children:"Product Category"}),e.jsx(y,{name:"category",children:({field:n,form:g})=>e.jsx(e.Fragment,{children:e.jsxs(p.Group,{vertical:!0,value:r.category,onChange:u=>g.setFieldValue(n.name,u),children:[e.jsxs(p,{className:"mb-3",name:n.name,value:"bags",children:["Bags"," "]}),e.jsxs(p,{className:"mb-3",name:n.name,value:"cloths",children:["Cloths"," "]}),e.jsxs(p,{className:"mb-3",name:n.name,value:"devices",children:["Devices"," "]}),e.jsxs(p,{className:"mb-3",name:n.name,value:"shoes",children:["Shoes"," "]}),e.jsxs(p,{name:n.name,value:"watches",children:["Watches"," "]})]})})})]}),e.jsxs(C,{invalid:o.status&&i.status,errorMessage:o.status,children:[e.jsx("h6",{className:"mb-4",children:"Product Category"}),e.jsx(y,{name:"status",children:({field:n,form:g})=>e.jsx(e.Fragment,{children:e.jsxs(p.Group,{vertical:!0,value:r.status,onChange:u=>g.setFieldValue(n.name,u),children:[e.jsxs(p,{className:"mb-3",name:n.name,value:0,children:["In Stock"," "]}),e.jsxs(p,{className:"mb-3",name:n.name,value:1,children:["Limited"," "]}),e.jsxs(p,{className:"mb-3",name:n.name,value:2,children:["Out Of Stock"," "]})]})})})]}),e.jsxs(C,{invalid:o.productStatus&&i.productStatus,errorMessage:o.productStatus,children:[e.jsx("h6",{className:"mb-4",children:"Product Status"}),e.jsx(y,{name:"productStatus",children:({field:n,form:g})=>e.jsxs(D.Group,{vertical:!0,value:r.productStatus,onChange:u=>g.setFieldValue(n.name,u),children:[e.jsx(D,{value:0,children:"Published"}),e.jsx(D,{value:1,children:"Disabled"}),e.jsx(D,{value:2,children:"Archive"})]})})]})]})})})}),Pe=({onSaveClick:t,onCancel:s})=>e.jsxs("div",{className:"text-right w-full",children:[e.jsx(j,{size:"sm",className:"mr-2",onClick:s,children:"Cancel"}),e.jsx(j,{size:"sm",variant:"solid",onClick:t,children:"Query"})]}),Ne=()=>{const t=x.useRef(null),[s,l]=x.useState(!1),m=()=>{l(!0)},c=()=>{l(!1)},r=()=>{var i;(i=t.current)==null||i.submitForm()};return e.jsxs(e.Fragment,{children:[e.jsx(j,{size:"sm",className:"block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4",icon:e.jsx(Z,{}),onClick:()=>m(),children:"Filter"}),e.jsx(ie,{title:"Filter",isOpen:s,footer:e.jsx(Pe,{onCancel:c,onSaveClick:r}),onClose:c,onRequestClose:c,children:e.jsx(z,{ref:t,onSubmitComplete:c})})]})};z.displayName="FilterForm";const ve=()=>e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center",children:[e.jsx(ye,{}),e.jsx(Ne,{}),e.jsx(w,{download:!0,className:"block lg:inline-block md:mx-2 md:mb-0 mb-4",to:"/data/product-list.csv",target:"_blank",children:e.jsx(j,{block:!0,size:"sm",icon:e.jsx(ee,{}),children:"Export"})}),e.jsx(w,{className:"block lg:inline-block md:mb-0 mb-4",to:"/app/sales/product-new",children:e.jsx(j,{block:!0,variant:"solid",size:"sm",icon:e.jsx(te,{}),children:"Add Product"})})]});V("salesProductList",fe);const Se=()=>e.jsxs(_,{className:"h-full",bodyClass:"h-full",children:[e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"Products"}),e.jsx(ve,{})]}),e.jsx(De,{})]}),vt=Se;export{vt as default};
