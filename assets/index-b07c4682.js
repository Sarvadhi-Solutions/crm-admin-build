import{am as x,an as D,ao as E,ap as S,ar as j,a as y,ab as N,aq as b,r as F,j as r,ai as w}from"./index-4bd6b7b3.js";import{D as A}from"./DoubleSidedImage-d3ba7318.js";import{t as R,N as v}from"./toast-88ff7e3e.js";import{d as C,e as I,c as L}from"./SalesService-a26680bb.js";import{P as $}from"./ProductForm-9f24bc8b.js";import{i as d}from"./Views-d9a5bf10.js";import"./useTimeout-f676b9da.js";import"./CloseButton-6e2e0ec5.js";import"./index.esm-0cdca32a.js";import"./StatusIcon-8490d43a.js";import"./chainedFunction-070f832c.js";import"./FormItem-e2a22149.js";import"./context-a8cf3940.js";import"./index-06706b89.js";import"./Button-39d85f08.js";import"./index-83ef7ec4.js";import"./useControllableState-259714d7.js";import"./useDidUpdate-f7d2ff2b.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-5ed82cf8.js";import"./useUncertainRef-4756ae3b.js";import"./useUniqueId-a782b7b3.js";import"./toString-a7228545.js";import"./Dialog-974a1028.js";import"./index-8b930c29.js";import"./StickyFooter-84659932.js";import"./ConfirmDialog-5a804371.js";import"./index-875ce0f2.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./formik.esm-a048d78e.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./RichTextEditor-70ef8215.js";import"./_baseIsEqual-a094f75a.js";import"./_Uint8Array-04aa9e28.js";import"./_MapCache-9c7f01dc.js";import"./Input-1462fe73.js";import"./isNil-ae028dac.js";import"./get-2d6f452a.js";import"./react-number-format.es-61c35378.js";import"./Select-938bf375.js";import"./slicedToArray-e2770cb7.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-3723ed4f.js";import"./floating-ui.dom-bef9cea3.js";import"./react-select-creatable.esm-47ca6206.js";import"./Upload-a4e0db34.js";import"./cloneDeep-9b3959e9.js";import"./_getPrototype-715b1198.js";import"./index.esm-4ed14753.js";import"./index.esm-24d8aaa0.js";import"./index.esm-3518a165.js";const u="salesProductEdit",c=x(u+"/getProducts",async s=>(await C(s)).data),k=async s=>(await I(s)).data,q=async s=>(await L(s)).data,M={loading:!0,productData:{}},G=D({name:`${u}/state`,initialState:M,reducers:{},extraReducers:s=>{s.addCase(c.fulfilled,(o,e)=>{o.productData=e.payload,o.loading=!1}).addCase(c.pending,o=>{o.loading=!0})}}),O=G.reducer,T=E({data:O}),m=S;j("salesProductEdit",T);const _=()=>{const s=y(),o=N(),e=b(),i=m(t=>t.salesProductEdit.data.productData),p=m(t=>t.salesProductEdit.data.loading),l=t=>{s(c(t))},f=async(t,a)=>{a(!0);const P=await k(t);a(!1),P&&n("updated")},h=()=>{e("/app/sales/product-list")},g=async t=>{t(!1),await q({id:i.id})&&n("deleted")},n=t=>{R.push(r.jsxs(v,{title:`Successfuly ${t}`,type:"success",duration:2500,children:["Product successfuly ",t]}),{placement:"top-center"}),e("/app/sales/product-list")};return F.useEffect(()=>{const a={id:o.pathname.substring(o.pathname.lastIndexOf("/")+1)};l(a)},[o.pathname]),r.jsxs(r.Fragment,{children:[r.jsx(w,{loading:p,children:!d(i)&&r.jsx(r.Fragment,{children:r.jsx($,{type:"edit",initialData:i,onFormSubmit:f,onDiscard:h,onDelete:g})})}),!p&&d(i)&&r.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[r.jsx(A,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No product found!"}),r.jsx("h3",{className:"mt-8",children:"No product found!"})]})]})},Ht=_;export{Ht as default};
