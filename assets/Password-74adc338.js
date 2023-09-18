import{j as e,c as u,B as h}from"./index-21d7ce34.js";import{I as t}from"./Input-b18c5be2.js";import{B as l}from"./Button-6c3081fd.js";import{T as j}from"./Tag-49702b6e.js";import{t as f,N as b}from"./toast-60e590e4.js";import{F as N,a as y,b as P,d as i}from"./formik.esm-b31c216f.js";import{F as c,a as d}from"./FormRow-a3c32e44.js";import{i as v}from"./isLastChild-83eb4c23.js";import{l as p,bl as g,bm as C}from"./index.esm-3f5f076a.js";import{c as F,a as n,g as k}from"./index.esm-078c9db1.js";import"./context-ff20449e.js";import"./Views-aa9d3067.js";import"./isNil-e652d611.js";import"./get-db5a0269.js";import"./toString-839cbc0d.js";import"./_MapCache-e6bfd31d.js";import"./useTimeout-c424fd3c.js";import"./CloseButton-8f19e7bd.js";import"./StatusIcon-cb41def8.js";import"./chainedFunction-070f832c.js";import"./index-99dab15c.js";const D=({type:a})=>{switch(a){case"Desktop":return e.jsx(p,{});case"Mobile":return e.jsx(C,{});case"Tablet":return e.jsx(g,{});default:return e.jsx(p,{})}},T=F().shape({password:n().required("Password Required"),newPassword:n().required("Enter your new password").min(8,"Too Short!").matches(/^[A-Za-z0-9_-]*$/,"Only Letters & Numbers Allowed"),confirmNewPassword:n().oneOf([k("newPassword"),""],"Password not match")}),K=({data:a})=>{const w=(s,r)=>{f.push(e.jsx(b,{title:"Password updated",type:"success"}),{placement:"top-center"}),r(!1),console.log("values",s)};return e.jsxs(e.Fragment,{children:[e.jsx(N,{initialValues:{password:"",newPassword:"",confirmNewPassword:""},validationSchema:T,onSubmit:(s,{setSubmitting:r})=>{r(!0),setTimeout(()=>{w(s,r)},1e3)},children:({touched:s,errors:r,isSubmitting:m,resetForm:x})=>{const o={touched:s,errors:r};return e.jsx(y,{children:e.jsxs(P,{children:[e.jsx(c,{title:"Password",desc:"Enter your current & new password to reset your password"}),e.jsx(d,{name:"password",label:"Current Password",...o,children:e.jsx(i,{type:"password",autoComplete:"off",name:"password",placeholder:"Current Password",component:t})}),e.jsx(d,{name:"newPassword",label:"New Password",...o,children:e.jsx(i,{type:"password",autoComplete:"off",name:"newPassword",placeholder:"New Password",component:t})}),e.jsx(d,{name:"confirmNewPassword",label:"Confirm Password",...o,children:e.jsx(i,{type:"password",autoComplete:"off",name:"confirmNewPassword",placeholder:"Confirm Password",component:t})}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(l,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>x(),children:"Reset"}),e.jsx(l,{variant:"solid",loading:m,type:"submit",children:m?"Updating":"Update Password"})]})]})})}}),e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{title:"Where you're signed in",desc:"You're signed in to your account on these devices."}),a&&e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600 mt-6",children:a.map((s,r)=>e.jsx("div",{className:u("flex items-center px-4 py-6",!v(a,r)&&"border-b border-gray-200 dark:border-gray-600"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-3xl",children:e.jsx(D,{type:s.type})}),e.jsxs("div",{className:"ml-3 rtl:mr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:s.deviceName}),r===0&&e.jsx(j,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Current"," "]})})]}),e.jsxs("span",{children:[s.location," •"," ",h.unix(s.time).format("DD-MMM-YYYY, hh:mm A")]})]})]})},s.deviceName))})]})]})};export{K as default};
