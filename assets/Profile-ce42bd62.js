import{j as e}from"./index-a20ba26a.js";import{I as x}from"./Input-6b27fa9a.js";import{A as j}from"./index-2148bb60.js";import{U as N}from"./Upload-3f7737c4.js";import{B as g}from"./Button-606f81c4.js";import{S as F,c as C}from"./Select-03ba356c.js";import{S as P}from"./Switcher-05ebbfd6.js";import{t as U,N as O}from"./toast-e3774575.js";import{F as R}from"./FormItem-6a0d9197.js";import{F as b}from"./FormDesription-08326a01.js";import{F as o}from"./FormRow-bd1ec8a2.js";import{F as S,a as k,b as n}from"./formik.esm-2806615a.js";import{s as w,N as T,ae as D,aU as H,aN as L,d as Z}from"./index.esm-be6144e0.js";import{c as z,a as c,f as E}from"./index.esm-7f24b5b1.js";import"./Views-bc53fe60.js";import"./isNil-b4ff99b9.js";import"./get-1094ccfe.js";import"./toString-a63c2859.js";import"./_MapCache-dc1c6594.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-b0886967.js";import"./usePopper-08e5e722.js";import"./index.esm-82d2638c.js";import"./index-1b414c07.js";import"./cloneDeep-3e847c7b.js";import"./_getPrototype-4a7cc1e2.js";import"./index.esm-c597078d.js";import"./CloseButton-4e026f10.js";import"./slicedToArray-24deda83.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-a381a404.js";import"./floating-ui.dom-bef9cea3.js";import"./useTimeout-7becf600.js";import"./StatusIcon-41b0d7b0.js";import"./chainedFunction-070f832c.js";const{Control:q}=C,A=z().shape({name:c().min(3,"Too Short!").max(12,"Too Long!").required("User Name Required"),email:c().email("Invalid email").required("Email Required"),title:c(),avatar:c(),lang:c(),timeZone:c(),syncData:E()}),v=[{value:"en",label:"English (US)",imgPath:"/img/countries/us.png"},{value:"ch",label:"中文",imgPath:"/img/countries/cn.png"},{value:"jp",label:"日本语",imgPath:"/img/countries/jp.png"},{value:"fr",label:"French",imgPath:"/img/countries/fr.png"}],B=({innerProps:p,label:r,data:m,isSelected:a})=>e.jsxs("div",{className:`flex items-center justify-between p-2 ${a?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...p,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(j,{shape:"circle",size:20,src:m.imgPath}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:r})]}),a&&e.jsx(Z,{className:"text-emerald-500 text-xl"})]}),V=({children:p,...r})=>{const m=r.getValue()[0];return e.jsxs(q,{...r,children:[m&&e.jsx(j,{className:"ltr:ml-4 rtl:mr-4",shape:"circle",size:18,src:m.imgPath}),p]})},Ce=({data:p={name:"",email:"",title:"",avatar:"",timeZone:"",lang:"",syncData:!1}})=>{const r=(a,t,u)=>{a.setFieldValue(t.name,URL.createObjectURL(u[0]))},m=(a,t)=>{console.log("values",a),U.push(e.jsx(O,{title:"Profile updated",type:"success"}),{placement:"top-center"}),t(!1)};return e.jsx(S,{enableReinitialize:!0,initialValues:p,validationSchema:A,onSubmit:(a,{setSubmitting:t})=>{t(!0),setTimeout(()=>{m(a,t)},1e3)},children:({values:a,touched:t,errors:u,isSubmitting:f,resetForm:y})=>{const i={touched:t,errors:u};return e.jsx(k,{children:e.jsxs(R,{children:[e.jsx(b,{title:"General",desc:"Basic info, like your name and address that will displayed in public"}),e.jsx(o,{name:"name",label:"Name",...i,children:e.jsx(n,{type:"text",autoComplete:"off",name:"name",placeholder:"Name",component:x,prefix:e.jsx(w,{className:"text-xl"})})}),e.jsx(o,{name:"email",label:"Email",...i,children:e.jsx(n,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:x,prefix:e.jsx(T,{className:"text-xl"})})}),e.jsx(o,{name:"avatar",label:"Avatar",...i,children:e.jsx(n,{name:"avatar",children:({field:s,form:d})=>{const l=s.value?{src:s.value}:{};return e.jsx(N,{className:"cursor-pointer",showList:!1,uploadLimit:1,onChange:h=>r(d,s,h),onFileRemove:h=>r(d,s,h),children:e.jsx(j,{className:"border-2 border-white dark:border-gray-800 shadow-lg",size:60,shape:"circle",icon:e.jsx(D,{}),...l})})}})}),e.jsx(o,{name:"title",label:"Title",...i,border:!1,children:e.jsx(n,{type:"text",autoComplete:"off",name:"title",placeholder:"Title",component:x,prefix:e.jsx(H,{className:"text-xl"})})}),e.jsx(b,{className:"mt-8",title:"Preferences",desc:"Your personalized preference displayed in your account"}),e.jsx(o,{name:"lang",label:"Language",...i,children:e.jsx(n,{name:"lang",children:({field:s,form:d})=>e.jsx(F,{field:s,form:d,options:v,components:{Option:B,Control:V},value:v.filter(l=>l.value===(a==null?void 0:a.lang)),onChange:l=>d.setFieldValue(s.name,l==null?void 0:l.value)})})}),e.jsx(o,{name:"timeZone",label:"Time Zone",...i,children:e.jsx(n,{readOnly:!0,type:"text",autoComplete:"off",name:"timeZone",placeholder:"Time Zone",component:x,prefix:e.jsx(L,{className:"text-xl"})})}),e.jsx(o,{name:"syncData",label:"Sync Data",...i,border:!1,children:e.jsx(n,{name:"syncData",component:P})}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(g,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>y(),children:"Reset"}),e.jsx(g,{variant:"solid",loading:f,type:"submit",children:f?"Updating":"Update"})]})]})})}})};export{Ce as default};
