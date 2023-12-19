import{j as e}from"./index-2a02f09f.js";import{I as x}from"./Input-4032ba6b.js";import{A as j}from"./index-5ca6dc5a.js";import{U as N}from"./Upload-21ca1a8f.js";import{B as f}from"./Button-3d6c325f.js";import{S as F,c as C}from"./Select-e6a28a89.js";import{S as P}from"./Switcher-b6d1bfff.js";import{t as O,N as U}from"./toast-66eca971.js";import{F as R}from"./FormItem-c05bb264.js";import{F as b,a as o}from"./FormRow-52cf6c0f.js";import{F as S,a as k,b as n}from"./formik.esm-dba0dfcc.js";import{h as w,bj as T,I as D,bk as H,b9 as L,B as Z}from"./index.esm-c61f0406.js";import{c as z,a as c,d as B}from"./index.esm-d97e517c.js";import"./context-ccc0a902.js";import"./Views-597fd265.js";import"./isNil-68e69365.js";import"./get-c92f924e.js";import"./toString-8660963f.js";import"./_MapCache-dabc1c97.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./cloneDeep-f2fd7982.js";import"./_Uint8Array-49dd6612.js";import"./_getPrototype-63f10215.js";import"./index.esm-62b86c40.js";import"./CloseButton-1ba6d0ce.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-90c2003f.js";import"./StatusIcon-19ebbef4.js";import"./chainedFunction-070f832c.js";const{Control:E}=C,q=z().shape({name:c().min(3,"Too Short!").max(12,"Too Long!").required("User Name Required"),email:c().email("Invalid email").required("Email Required"),title:c(),avatar:c(),lang:c(),timeZone:c(),syncData:B()}),v=[{value:"en",label:"English (US)",imgPath:"/img/countries/us.png"},{value:"ch",label:"中文",imgPath:"/img/countries/cn.png"},{value:"jp",label:"日本语",imgPath:"/img/countries/jp.png"},{value:"fr",label:"French",imgPath:"/img/countries/fr.png"}],A=({innerProps:p,label:r,data:m,isSelected:a})=>e.jsxs("div",{className:`flex items-center justify-between p-2 ${a?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...p,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(j,{shape:"circle",size:20,src:m.imgPath}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:r})]}),a&&e.jsx(Z,{className:"text-emerald-500 text-xl"})]}),I=({children:p,...r})=>{const m=r.getValue()[0];return e.jsxs(E,{...r,children:[m&&e.jsx(j,{className:"ltr:ml-4 rtl:mr-4",shape:"circle",size:18,src:m.imgPath}),p]})},Ce=({data:p={name:"",email:"",title:"",avatar:"",timeZone:"",lang:"",syncData:!1}})=>{const r=(a,t,u)=>{a.setFieldValue(t.name,URL.createObjectURL(u[0]))},m=(a,t)=>{console.log("values",a),O.push(e.jsx(U,{title:"Profile updated",type:"success"}),{placement:"top-center"}),t(!1)};return e.jsx(S,{enableReinitialize:!0,initialValues:p,validationSchema:q,onSubmit:(a,{setSubmitting:t})=>{t(!0),setTimeout(()=>{m(a,t)},1e3)},children:({values:a,touched:t,errors:u,isSubmitting:g,resetForm:y})=>{const i={touched:t,errors:u};return e.jsx(k,{children:e.jsxs(R,{children:[e.jsx(b,{title:"General",desc:"Basic info, like your name and address that will displayed in public"}),e.jsx(o,{name:"name",label:"Name",...i,children:e.jsx(n,{type:"text",autoComplete:"off",name:"name",placeholder:"Name",component:x,prefix:e.jsx(w,{className:"text-xl"})})}),e.jsx(o,{name:"email",label:"Email",...i,children:e.jsx(n,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:x,prefix:e.jsx(T,{className:"text-xl"})})}),e.jsx(o,{name:"avatar",label:"Avatar",...i,children:e.jsx(n,{name:"avatar",children:({field:l,form:d})=>{const s=l.value?{src:l.value}:{};return e.jsx(N,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:h=>r(d,l,h),onFileRemove:h=>r(d,l,h),children:e.jsx(j,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:60,shape:"circle",icon:e.jsx(D,{}),...s})})}})}),e.jsx(o,{name:"title",label:"Title",...i,border:!1,children:e.jsx(n,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:x,prefix:e.jsx(H,{className:"text-xl"})})}),e.jsx(b,{className:"mt-8",title:"Preferences",desc:"Your personalized preference displayed in your account"}),e.jsx(o,{name:"lang",label:"Language",...i,children:e.jsx(n,{name:"lang",children:({field:l,form:d})=>e.jsx(F,{field:l,form:d,options:v,components:{Option:A,Control:I},value:v.filter(s=>s.value===(a==null?void 0:a.lang)),onChange:s=>d.setFieldValue(l.name,s==null?void 0:s.value)})})}),e.jsx(o,{name:"timeZone",label:"Time Zone",...i,children:e.jsx(n,{readOnly:!0,type:"text",autoComplete:"off",name:"timeZone",placeholder:"Time Zone",component:x,prefix:e.jsx(L,{className:"text-xl"})})}),e.jsx(o,{name:"syncData",label:"Sync Data",...i,border:!1,children:e.jsx(n,{name:"syncData",component:P})}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(f,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>y(),children:"Reset"}),e.jsx(f,{variant:"solid",loading:g,type:"submit",children:g?"Updating":"Update"})]})]})})}})};export{Ce as default};
