import{j as e,r as v}from"./index-2a02f09f.js";import{a as u,F as R}from"./FormItem-c05bb264.js";import{B as N}from"./Button-3d6c325f.js";import{h as V}from"./index-b6583a03.js";import{S as O}from"./StickyFooter-a41c27ee.js";import{C as L}from"./ConfirmDialog-5e3e2ca4.js";import{b as g,F as M,a as q}from"./formik.esm-dba0dfcc.js";import{A as C}from"./AdaptableCard-260ffff4.js";import{R as B}from"./RichTextEditor-c3d66539.js";import{I as h}from"./Input-4032ba6b.js";import{N as U}from"./react-number-format.es-b6150c61.js";import{S as y}from"./Select-e6a28a89.js";import{C as A}from"./react-select-creatable.esm-00e0f6bd.js";import{D as I}from"./DoubleSidedImage-19b756b2.js";import{D as T}from"./Dialog-fa942d86.js";import{U as k}from"./Upload-21ca1a8f.js";import{aG as z,aH as $,X as E}from"./index.esm-c61f0406.js";import{c as P}from"./cloneDeep-f2fd7982.js";import{a as H}from"./index.esm-1c4998f8.js";import{c as K,a as F,f as w}from"./index.esm-d97e517c.js";const G=n=>{const{touched:i,errors:r}=n;return e.jsxs(C,{divider:!0,className:"mb-4",children:[e.jsx("h5",{children:"Basic Information"}),e.jsx("p",{className:"mb-6",children:"Section to config basic product information"}),e.jsx(u,{label:"Product Name",invalid:r.name&&i.name,errorMessage:r.name,children:e.jsx(g,{type:"text",autoComplete:"off",name:"name",placeholder:"Name",component:h})}),e.jsx(u,{label:"Code",invalid:r.productCode&&i.productCode,errorMessage:r.productCode,children:e.jsx(g,{type:"text",autoComplete:"off",name:"productCode",placeholder:"Code",component:h})}),e.jsx(u,{label:"Description",labelClass:"!justify-start",invalid:r.description&&i.description,errorMessage:r.description,children:e.jsx(g,{name:"description",children:({field:s,form:t})=>e.jsx(B,{value:s.value,onChange:a=>t.setFieldValue(s.name,a)})})})]})},D=n=>e.jsx(h,{...n,value:n.field.value,prefix:"$"}),W=n=>e.jsx(h,{...n,value:n.field.value}),X=n=>e.jsx(h,{...n,value:n.field.value}),b=({onValueChange:n,...i})=>e.jsx(U,{customInput:h,type:"text",autoComplete:"off",onValueChange:n,...i}),J=n=>{const{touched:i,errors:r}=n;return e.jsxs(C,{divider:!0,className:"mb-4",children:[e.jsx("h5",{children:"Pricing"}),e.jsx("p",{className:"mb-6",children:"Section to config product sales information"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"SKU",invalid:r.stock&&i.stock,errorMessage:r.stock,children:e.jsx(g,{name:"stock",children:({field:s,form:t})=>e.jsx(b,{form:t,field:s,placeholder:"Stock",customInput:W,onValueChange:a=>{t.setFieldValue(s.name,a.value)}})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Price",invalid:r.price&&i.price,errorMessage:r.price,children:e.jsx(g,{name:"price",children:({field:s,form:t})=>e.jsx(b,{form:t,field:s,placeholder:"Price",customInput:D,onValueChange:a=>{t.setFieldValue(s.name,a.value)}})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Bulk Discount Price",invalid:r.bulkDiscountPrice&&i.bulkDiscountPrice,errorMessage:r.bulkDiscountPrice,children:e.jsx(g,{name:"bulkDiscountPrice",children:({field:s,form:t})=>e.jsx(b,{form:t,field:s,placeholder:"Bulk Discount Price",customInput:D,onValueChange:a=>{t.setFieldValue(s.name,a.value)}})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Tax Rate(%)",invalid:r.taxRate&&i.taxRate,errorMessage:r.taxRate,children:e.jsx(g,{name:"taxRate",children:({field:s,form:t})=>e.jsx(b,{form:t,field:s,placeholder:"Tax Rate",customInput:X,isAllowed:({floatValue:a})=>a<=100,onValueChange:a=>{t.setFieldValue(s.name,a.value)}})})})})]})]})},S=[{label:"Bags",value:"bags"},{label:"Cloths",value:"cloths"},{label:"Devices",value:"devices"},{label:"Shoes",value:"shoes"},{label:"Watches",value:"watches"}],Q=[{label:"trend",value:"trend"},{label:"unisex",value:"unisex"}],Y=n=>{const{values:i={category:"",tags:[]},touched:r,errors:s}=n;return e.jsxs(C,{divider:!0,isLastChild:!0,className:"mb-4",children:[e.jsx("h5",{children:"Organizations"}),e.jsx("p",{className:"mb-6",children:"Section to config the product attribute"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Category",invalid:s.category&&r.category,errorMessage:s.category,children:e.jsx(g,{name:"category",children:({field:t,form:a})=>e.jsx(y,{field:t,form:a,options:S,value:S.filter(l=>l.value===i.category),onChange:l=>a.setFieldValue(t.name,l==null?void 0:l.value)})})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Tags",invalid:s.tags&&r.tags,errorMessage:s.tags,children:e.jsx(g,{name:"tags",children:({field:t,form:a})=>e.jsx(y,{isMulti:!0,componentAs:A,field:t,form:a,options:Q,value:i.tags,onChange:l=>a.setFieldValue(t.name,l)})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Brand",invalid:s.brand&&r.brand,errorMessage:s.brand,children:e.jsx(g,{type:"text",autoComplete:"off",name:"brand",placeholder:"Brand",component:h})})}),e.jsx("div",{className:"col-span-1",children:e.jsx(u,{label:"Vendor",invalid:s.vendor&&r.vendor,errorMessage:s.vendor,children:e.jsx(g,{type:"text",autoComplete:"off",name:"vendor",placeholder:"Vendor",component:h})})})]})]})},Z=n=>{const{imgList:i,onImageDelete:r}=n,[s,t]=v.useState({}),[a,l]=v.useState(!1),[c,o]=v.useState(!1),m=p=>{t(p),l(!0)},d=()=>{l(!1),setTimeout(()=>{t({})},300)},x=p=>{t(p),o(!0)},f=()=>{t({}),o(!1)},j=()=>{r==null||r(s),o(!1)};return e.jsxs(e.Fragment,{children:[i.map(p=>e.jsxs("div",{className:"group relative rounded border p-2 flex",children:[e.jsx("img",{className:"rounded max-h-[140px] max-w-full",src:p.img,alt:p.name}),e.jsxs("div",{className:"absolute inset-2 bg-gray-900/[.7] group-hover:flex hidden text-xl items-center justify-center",children:[e.jsx("span",{className:"text-gray-100 hover:text-gray-300 cursor-pointer p-1.5",onClick:()=>m(p),children:e.jsx(z,{})}),e.jsx("span",{className:"text-gray-100 hover:text-gray-300 cursor-pointer p-1.5",onClick:()=>x(p),children:e.jsx($,{})})]})]},p.id)),e.jsxs(T,{isOpen:a,onClose:d,onRequestClose:d,children:[e.jsx("h5",{className:"mb-4",children:s.name}),e.jsx("img",{className:"w-full",src:s.img,alt:s.name})]}),e.jsx(L,{isOpen:c,type:"danger",title:"Remove image",confirmButtonColor:"red-600",onClose:f,onRequestClose:f,onCancel:f,onConfirm:j,children:e.jsx("p",{children:" Are you sure you want to remove this image? "})})]})},_=n=>{const{values:i}=n,r=a=>{let l=!0;const c=["image/jpeg","image/png"],o=5e5;if(a)for(const m of a)c.includes(m.type)||(l="Please upload a .jpeg or .png file!"),m.size>=o&&(l="Upload image cannot more then 500kb!");return l},s=(a,l,c)=>{let o="1-img-0";const m=c.length-1;if(i.imgList.length>0){const j=i.imgList[i.imgList.length-1].id.split("-"),p=parseInt(j[j.length-1])+1;j.pop(),o=[...j,p].join("-")}const d={id:o,name:c[m].name,img:URL.createObjectURL(c[m])},x=[...i.imgList,d];console.log("imageList",x),a.setFieldValue(l.name,x)},t=(a,l,c)=>{let o=P(i.imgList);o=o.filter(m=>m.id!==c.id),a.setFieldValue(l.name,o)};return e.jsxs(C,{className:"mb-4",children:[e.jsx("h5",{children:"Product Image"}),e.jsx("p",{className:"mb-6",children:"Add or change image for the product"}),e.jsx(u,{children:e.jsx(g,{name:"imgList",children:({field:a,form:l})=>i.imgList.length>0?e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4",children:[e.jsx(Z,{imgList:i.imgList,onImageDelete:c=>t(l,a,c)}),e.jsx(k,{draggable:!0,className:"min-h-fit",beforeUpload:r,showList:!1,onChange:c=>s(l,a,c),children:e.jsxs("div",{className:"max-w-full flex flex-col px-4 py-2 justify-center items-center",children:[e.jsx(I,{src:"/img/others/upload.png",darkModeSrc:"/img/others/upload-dark.png"}),e.jsx("p",{className:"font-semibold text-center text-gray-800 dark:text-white",children:"Upload"})]})})]}):e.jsx(k,{draggable:!0,beforeUpload:r,showList:!1,onChange:c=>s(l,a,c),children:e.jsxs("div",{className:"my-16 text-center",children:[e.jsx(I,{className:"mx-auto",src:"/img/others/upload.png",darkModeSrc:"/img/others/upload-dark.png"}),e.jsxs("p",{className:"font-semibold",children:[e.jsxs("span",{className:"text-gray-800 dark:text-white",children:["Drop your image here, or"," "]}),e.jsx("span",{className:"text-blue-500",children:"browse"})]}),e.jsx("p",{className:"mt-1 opacity-60 dark:text-white",children:"Support: jpeg, png"})]})})})})]})},{useUniqueId:ee}=V,se=K().shape({name:F().required("Product Name Required"),price:w().required("Price Required"),stock:w().required("SKU Required"),category:F().required("Category Required")}),ae=({onDelete:n})=>{const[i,r]=v.useState(!1),s=()=>{r(!0)},t=()=>{r(!1)},a=()=>{n==null||n(r)};return e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"text-red-600",variant:"plain",size:"sm",icon:e.jsx(E,{}),type:"button",onClick:s,children:"Delete"}),e.jsx(L,{isOpen:i,type:"danger",title:"Delete product",confirmButtonColor:"red-600",onClose:t,onRequestClose:t,onCancel:t,onConfirm:a,children:e.jsx("p",{children:"Are you sure you want to delete this product? All record related to this product will be deleted as well. This action cannot be undone."})})]})},re=v.forwardRef((n,i)=>{const{type:r,initialData:s={id:"",name:"",productCode:"",img:"",imgList:[],category:"",price:0,stock:0,status:0,costPerItem:0,bulkDiscountPrice:0,taxRate:6,tags:[],brand:"",vendor:"",description:""},onFormSubmit:t,onDiscard:a,onDelete:l}=n,c=ee("product-");return e.jsx(e.Fragment,{children:e.jsx(M,{innerRef:i,initialValues:{...s,tags:s!=null&&s.tags?s.tags.map(o=>({label:o,value:o})):[]},validationSchema:se,onSubmit:(o,{setSubmitting:m})=>{const d=P(o);d.tags=d.tags.map(x=>typeof x!="string"?x.value:x),r==="new"&&(d.id=c,d.imgList&&d.imgList.length>0&&(d.img=d.imgList[0].img)),t==null||t(d,m)},children:({values:o,touched:m,errors:d,isSubmitting:x})=>e.jsx(q,{children:e.jsxs(R,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx(G,{touched:m,errors:d}),e.jsx(J,{touched:m,errors:d}),e.jsx(Y,{touched:m,errors:d,values:o})]}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx(_,{values:o})})]}),e.jsxs(O,{className:"-mx-8 px-8 flex items-center justify-between py-4",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:[e.jsx("div",{children:r==="edit"&&e.jsx(ae,{onDelete:l})}),e.jsxs("div",{className:"md:flex items-center",children:[e.jsx(N,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:()=>a==null?void 0:a(),children:"Discard"}),e.jsx(N,{size:"sm",variant:"solid",loading:x,icon:e.jsx(H,{}),type:"submit",children:"Save"})]})]})]})})})})});re.displayName="ProductForm";export{re as P};
