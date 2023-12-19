import{j as e,c as u,p as h}from"./index-afeb99dd.js";import{I as t}from"./Input-fe5fc582.js";import{B as l}from"./Button-5e9321cd.js";import{T as j}from"./Tag-f3e28a4c.js";import{t as f,N}from"./toast-b57ee67d.js";import{F as y}from"./FormItem-2a151033.js";import{F as c}from"./FormDesription-e86e128e.js";import{F as i}from"./FormRow-a20540d9.js";import{F as b,a as P,b as d}from"./formik.esm-e70cf2ce.js";import{i as v}from"./isLastChild-83eb4c23.js";import{w as p,aV as g,aW as C}from"./index.esm-f4f10cf9.js";import{c as F,a as m,g as k}from"./index.esm-639db9d4.js";import"./Views-f7a9b898.js";import"./isNil-e2aeddd7.js";import"./get-a5b2ed65.js";import"./toString-79dd21b9.js";import"./_MapCache-d7aaf9c0.js";import"./useTimeout-682d9172.js";import"./CloseButton-217fbce9.js";import"./StatusIcon-47182631.js";import"./chainedFunction-070f832c.js";import"./index-07932842.js";const D=({type:a})=>{switch(a){case"Desktop":return e.jsx(p,{});case"Mobile":return e.jsx(C,{});case"Tablet":return e.jsx(g,{});default:return e.jsx(p,{})}},T=F().shape({password:m().required("Password Required"),newPassword:m().required("Enter your new password").min(8,"Too Short!").matches(/^[A-Za-z0-9_-]*$/,"Only Letters & Numbers Allowed"),confirmNewPassword:m().oneOf([k("newPassword"),""],"Password not match")}),Q=({data:a})=>{const w=(s,r)=>{f.push(e.jsx(N,{title:"Password updated",type:"success"}),{placement:"top-center"}),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(b,{initialValues:{password:"",newPassword:"",confirmNewPassword:""},validationSchema:T,onSubmit:(s,{setSubmitting:r})=>{r(!0),setTimeout(()=>{w(s,r)},1e3)},children:({touched:s,errors:r,isSubmitting:n,resetForm:x})=>{const o={touched:s,errors:r};return e.jsx(P,{children:e.jsxs(y,{children:[e.jsx(c,{title:"Password",desc:"Enter your current & new password to reset your password"}),e.jsx(i,{name:"password",label:"Current Password",...o,children:e.jsx(d,{type:"password",autoComplete:"off",name:"password",placeholder:"Current Password",component:t})}),e.jsx(i,{name:"newPassword",label:"New Password",...o,children:e.jsx(d,{type:"password",autoComplete:"off",name:"newPassword",placeholder:"New Password",component:t})}),e.jsx(i,{name:"confirmNewPassword",label:"Confirm Password",...o,children:e.jsx(d,{type:"password",autoComplete:"off",name:"confirmNewPassword",placeholder:"Confirm Password",component:t})}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(l,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>x(),children:"Reset"}),e.jsx(l,{variant:"solid",loading:n,type:"submit",children:n?"Updating":"Update Password"})]})]})})}}),e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{title:"Where you're signed in",desc:"You're signed in to your account on these devices."}),a&&e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600 mt-6",children:a.map((s,r)=>e.jsx("div",{className:u("flex items-center px-4 py-6",!v(a,r)&&"border-b border-gray-200 dark:border-gray-600"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-3xl",children:e.jsx(D,{type:s.type})}),e.jsxs("div",{className:"ml-3 rtl:mr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:s.deviceName}),r===0&&e.jsx(j,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Current"," "]})})]}),e.jsxs("span",{children:[s.location," •"," ",h.unix(s.time).format("DD-MMM-YYYY, hh:mm A")]})]})]})},s.deviceName))})]})]})};export{Q as default};
