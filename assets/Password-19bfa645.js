import{j as e,c as u,p as h}from"./index-4b23f9f2.js";import{I as t}from"./Input-6deb6f13.js";import{B as l}from"./Button-a87a2e46.js";import{T as j}from"./Tag-31cf62c8.js";import{t as f,N}from"./toast-01acb463.js";import{F as y}from"./FormItem-83b1322c.js";import{F as c}from"./FormDesription-b8f6f21d.js";import{F as i}from"./FormRow-7495de39.js";import{F as b,a as P,b as d}from"./formik.esm-25368bc5.js";import{i as v}from"./isLastChild-83eb4c23.js";import{w as p,aV as g,aW as C}from"./index.esm-e8a4d9e3.js";import{c as F,a as m,g as k}from"./index.esm-dc2ded9f.js";import"./Views-6ea63120.js";import"./isNil-6d05c28f.js";import"./get-5fd819d1.js";import"./toString-808a232b.js";import"./_MapCache-8ec314e0.js";import"./useTimeout-13bed03b.js";import"./CloseButton-53cc5777.js";import"./StatusIcon-e1b59b5e.js";import"./chainedFunction-070f832c.js";import"./index-4fdc30db.js";const D=({type:o})=>{switch(o){case"Desktop":return e.jsx(p,{});case"Mobile":return e.jsx(C,{});case"Tablet":return e.jsx(g,{});default:return e.jsx(p,{})}},T=F().shape({password:m().required("Password Required"),newPassword:m().required("Enter your new password").min(8,"Too Short!").matches(/^[A-Za-z0-9_-]*$/,"Only Letters & Numbers Allowed"),confirmNewPassword:m().oneOf([k("newPassword"),""],"Password not match")}),Q=({data:o})=>{const w=(s,r)=>{f.push(e.jsx(N,{title:"Password updated",type:"success"}),{placement:"top-center"}),r(!1),console.log("values",s)};return e.jsxs(e.Fragment,{children:[e.jsx(b,{initialValues:{password:"",newPassword:"",confirmNewPassword:""},validationSchema:T,onSubmit:(s,{setSubmitting:r})=>{r(!0),setTimeout(()=>{w(s,r)},1e3)},children:({touched:s,errors:r,isSubmitting:n,resetForm:x})=>{const a={touched:s,errors:r};return e.jsx(P,{children:e.jsxs(y,{children:[e.jsx(c,{title:"Password",desc:"Enter your current & new password to reset your password"}),e.jsx(i,{name:"password",label:"Current Password",...a,children:e.jsx(d,{type:"password",autoComplete:"off",name:"password",placeholder:"Current Password",component:t})}),e.jsx(i,{name:"newPassword",label:"New Password",...a,children:e.jsx(d,{type:"password",autoComplete:"off",name:"newPassword",placeholder:"New Password",component:t})}),e.jsx(i,{name:"confirmNewPassword",label:"Confirm Password",...a,children:e.jsx(d,{type:"password",autoComplete:"off",name:"confirmNewPassword",placeholder:"Confirm Password",component:t})}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(l,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>x(),children:"Reset"}),e.jsx(l,{variant:"solid",loading:n,type:"submit",children:n?"Updating":"Update Password"})]})]})})}}),e.jsxs("div",{className:"mt-6",children:[e.jsx(c,{title:"Where you're signed in",desc:"You're signed in to your account on these devices."}),o&&e.jsx("div",{className:"rounded-lg border border-gray-200 dark:border-gray-600 mt-6",children:o.map((s,r)=>e.jsx("div",{className:u("flex items-center px-4 py-6",!v(o,r)&&"border-b border-gray-200 dark:border-gray-600"),children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-3xl",children:e.jsx(D,{type:s.type})}),e.jsxs("div",{className:"ml-3 rtl:mr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-100 font-semibold",children:s.deviceName}),r===0&&e.jsx(j,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2",children:e.jsxs("span",{className:"capitalize",children:[" ","Current"," "]})})]}),e.jsxs("span",{children:[s.location," •"," ",h.unix(s.time).format("DD-MMM-YYYY, hh:mm A")]})]})]})},s.deviceName))})]})]})};export{Q as default};
