import{am as x,an as D,ao as E,ap as S,ar as j,a as y,ab as N,aq as b,r as F,j as s,ai as w}from"./index-6767ac81.js";import{D as A}from"./DoubleSidedImage-70d6c8aa.js";import{t as R,N as v}from"./toast-33e99923.js";import{d as C,e as I,c as L}from"./SalesService-3355fb76.js";import{P as $}from"./ProductForm-ffc7c506.js";import{i as d}from"./Views-e5205a91.js";import"./useTimeout-395cc71e.js";import"./CloseButton-5ef937e0.js";import"./index.esm-107f547f.js";import"./StatusIcon-33312305.js";import"./chainedFunction-070f832c.js";import"./formik.esm-35003a33.js";import"./context-cdfa92ed.js";import"./index-fb02f18d.js";import"./Button-edcd26d9.js";import"./index-27585c8f.js";import"./useControllableState-dba48cec.js";import"./useDidUpdate-c5cefb65.js";import"./useMergeRef-788c4cb0.js";import"./useRootClose-6563c421.js";import"./useUncertainRef-e1544d29.js";import"./useUniqueId-1387b982.js";import"./toString-5f976032.js";import"./Dialog-b04dbbb3.js";import"./index-1bb56c96.js";import"./StickyFooter-cbc7d1c5.js";import"./ConfirmDialog-4b62a23b.js";import"./index-688b9e70.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-52ddd804.js";import"./AdaptableCard-1cecc9da.js";import"./Card-da872ceb.js";import"./RichTextEditor-18f54a57.js";import"./_baseIsEqual-98c979d7.js";import"./_Uint8Array-81109713.js";import"./_MapCache-5db605d8.js";import"./Input-736c9e0d.js";import"./isNil-1a1387e3.js";import"./get-582c28e3.js";import"./react-number-format.es-3a1aae10.js";import"./Select-3d321c37.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./react-select-creatable.esm-be37d90e.js";import"./Upload-1c01a3b3.js";import"./cloneDeep-028f7085.js";import"./_getPrototype-48c0ebaa.js";import"./index.esm-3da06225.js";import"./index.esm-a61e2fe0.js";import"./index.esm-a1939a1a.js";const u="salesProductEdit",c=x(u+"/getProducts",async a=>(await C(a)).data),k=async a=>(await I(a)).data,q=async a=>(await L(a)).data,M={loading:!0,productData:{}},G=D({name:`${u}/state`,initialState:M,reducers:{},extraReducers:a=>{a.addCase(c.fulfilled,(o,e)=>{o.productData=e.payload,o.loading=!1}).addCase(c.pending,o=>{o.loading=!0})}}),O=G.reducer,T=E({data:O}),m=S;j("salesProductEdit",T);const _=()=>{const a=y(),o=N(),e=b(),i=m(t=>t.salesProductEdit.data.productData),p=m(t=>t.salesProductEdit.data.loading),l=t=>{a(c(t))},f=async(t,r)=>{r(!0);const P=await k(t);r(!1),P&&n("updated")},h=()=>{e("/app/sales/product-list")},g=async t=>{t(!1),await q({id:i.id})&&n("deleted")},n=t=>{R.push(s.jsxs(v,{title:`Successfuly ${t}`,type:"success",duration:2500,children:["Product successfuly ",t]}),{placement:"top-center"}),e("/app/sales/product-list")};return F.useEffect(()=>{const r={id:o.pathname.substring(o.pathname.lastIndexOf("/")+1)};l(r)},[o.pathname]),s.jsxs(s.Fragment,{children:[s.jsx(w,{loading:p,children:!d(i)&&s.jsx(s.Fragment,{children:s.jsx($,{type:"edit",initialData:i,onFormSubmit:f,onDiscard:h,onDelete:g})})}),!p&&d(i)&&s.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[s.jsx(A,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No product found!"}),s.jsx("h3",{className:"mt-8",children:"No product found!"})]})]})},Tt=_;export{Tt as default};
