import{j as e,c as u,p as h}from"./index-a9c93031.js";import{I as t}from"./Input-b2bc5b3e.js";import{B as l}from"./Button-47bf58f7.js";import{T as j}from"./Tag-624637b7.js";import{t as f,N as b}from"./toast-53c71514.js";import{F as N}from"./FormItem-493c2060.js";import{F as c}from"./FormDesription-4c37bb3b.js";import{F as i}from"./FormRow-053bc2ca.js";import{F as y,a as P,b as m}from"./formik.esm-4acf00de.js";import{i as v}from"./isLastChild-83eb4c23.js";import{u as p,bl as g,bm as C}from"./index.esm-37c3564c.js";import{c as F,a as d,g as k}from"./index.esm-e5cd3259.js";import"./context-6d5d8fe5.js";import"./Views-0c5423a6.js";import"./isNil-f7d4f3b6.js";import"./get-0157bd52.js";import"./toString-60f65c59.js";import"./_MapCache-83d2f18f.js";import"./useTimeout-3babeb43.js";import"./CloseButton-ef1c868b.js";import"./StatusIcon-b453f46b.js";import"./chainedFunction-070f832c.js";import"./index-0b68a97f.js";const D=({type:o})=>{switch(o){case"Desktop":return e.jsx(p,{});case"Mobile":return e.jsx(C,{});case"Tablet":return e.jsx(g,{});default:return e.jsx(p,{})}},T=F().shape({password:d().required("Password Required"),newPassword:d().required("Enter your new password").min(8,"Too Short!").matches(/^[A-Za-z0-9_-]*$/,"Only Letters & Numbers Allowed"),confirmNewPassword:d().oneOf([k("newPassword"),""],"Password not match")}),X=({data:o})=>{const w=(s,r)=>{f.push(e.jsx(b,{title:"Password updated",type:"success"}),{placement:"top-center"}),r(!1),console.log("values",s)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{initialValues:{password:"",newPassword:"",confirmNewPassword:""},validationSchema:T,onSubmit:(s,{setSubmitting:r})=>{r(!0),setTimeout(()=>{w(s,r)},1e3)},children:({touched:s,errors:r,isSubmitting:n,resetForm:x})=>{const a={touched:s,errors:r};return e.jsx(P,{children:e.jsxs(N,{children:[e.jsx(c,{title:"Password",desc:"Enter your current & new password to reset your password"}),e.jsx(i,{name:"password",label:"Current Password",...a,children:e.jsx(m,{type:"password",autoComplete:"off",name:"password",placeholder:"Current Password",component:t})}),e.jsx(i,{name:"newPassword",label:"New Password",...a,children:e.jsx(m,{type:"password",autoComplete:"off",name:"newPassword",placeholder:"New Password",component:t})}),e.jsx(i,{name:"confirmNewPassword",label:"Confirm Password",...a,children:e.jsx(m,{type:"password",autoComplete:"off",name:"confirmNewPassword",placeholder:"Confirm Password",component:t})}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(l,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>x(),children:"Reset"}),e.jsx(l,{variant:"solid",loading:n,type:"submit",children:n?"Updating":"Update Password"})]})]})})}}),e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{title:"Where you're signed in",desc:"You're signed in to your account on these devices."}),o&&e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600 mt-6",children:o.map((s,r)=>e.jsx("div",{className:u("flex items-center px-4 py-6",!v(o,r)&&"border-b border-gray-200 dark:border-gray-600"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-3xl",children:e.jsx(D,{type:s.type})}),e.jsxs("div",{className:"ml-3 rtl:mr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:s.deviceName}),r===0&&e.jsx(j,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Current"," "]})})]}),e.jsxs("span",{children:[s.location," •"," ",h.unix(s.time).format("DD-MMM-YYYY, hh:mm A")]})]})]})},s.deviceName))})]})]})};export{X as default};
