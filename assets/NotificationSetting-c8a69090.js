import{j as e}from"./index-de229e0f.js";import{S as l}from"./index-da4e4b17.js";import{B as p}from"./Button-b15cd132.js";import{F as u}from"./FormItem-babd9538.js";import{t as x,N as j}from"./toast-2a495ac5.js";import{F as c}from"./FormDesription-4c1c908a.js";import{F as h}from"./FormRow-d25c0467.js";import{F as f,a as b,b as N}from"./formik.esm-db3e081d.js";import{i as y}from"./isLastChild-83eb4c23.js";import{aX as w,aY as g,aW as F}from"./index.esm-aee8ac7d.js";import"./useControllableState-c13b1cb7.js";import"./index-95f7d6b8.js";import"./Views-e5666688.js";import"./useTimeout-73ec5f9b.js";import"./CloseButton-a4aa9973.js";import"./StatusIcon-6f48f0ae.js";import"./chainedFunction-070f832c.js";const v=[{label:"News",name:"news"},{label:"Account activity",name:"accountActivity"},{label:"New device used to sign in",name:"signIn"},{label:"Reminders",name:"reminders"}],S=[{label:"Somone mentions you",name:"mentioned"},{label:"Somone replies to your message",name:"replies"},{label:"Task status updated",name:"taskUpdate"},{label:"Task assigned to you",name:"assigned"}],k=[{label:"New product",name:"newProduct"},{label:"New order placed",name:"newOrder"}],R=({field:a,form:i,values:s,name:t})=>e.jsxs(l,{value:s[t],selectionType:"multiple",onChange:n=>i.setFieldValue(a.name,n),children:[e.jsxs(l.Item,{className:"flex items-center justify-center",type:"button",value:"email",children:[e.jsx(w,{className:"text-xl"}),e.jsx("span",{className:"hidden sm:block ltr:ml-2 rtl:mr-2",children:"Email"})]}),e.jsxs(l.Item,{className:"flex items-center justify-center",type:"button",value:"browser",children:[e.jsx(g,{className:"text-xl"}),e.jsx("span",{className:"hidden sm:block  ltr:ml-2 rtl:mr-2",children:"Browser"})]}),e.jsxs(l.Item,{className:"flex items-center justify-center",type:"button",value:"app",children:[e.jsx(F,{className:"text-xl"}),e.jsx("span",{className:"hidden sm:block  ltr:ml-2 rtl:mr-2",children:"App"})]})]}),d=({rows:a,validators:i,values:s})=>e.jsx(e.Fragment,{children:a.map((t,n)=>e.jsx(h,{name:t.name,label:t.label,...i,border:!y(a,n),children:e.jsx(N,{name:t.name,children:({field:o,form:r})=>e.jsx(R,{field:o,form:r,values:s,name:t.name})})},t.name))}),X=({data:a={news:[],accountActivity:[],signIn:[],reminders:[],mentioned:[],replies:[],taskUpdate:[],assigned:[],newProduct:[],newOrder:[]}})=>{const i=(s,t)=>{x.push(e.jsx(j,{title:"Notification setting updated",type:"success"}),{placement:"top-center"}),t(!1),console.log(s)};return e.jsx(f,{enableReinitialize:!0,initialValues:a,onSubmit:(s,{setSubmitting:t})=>{t(!0),setTimeout(()=>{i(s,t)},1e3)},children:({values:s,touched:t,errors:n,isSubmitting:o,resetForm:r})=>{const m={touched:t,errors:n};return e.jsx(b,{children:e.jsxs(u,{children:[e.jsx(c,{title:"General Notification",desc:"Select how you'll be notified when the following changes occur."}),e.jsx(d,{rows:v,validators:m,values:s}),e.jsx(c,{className:"mt-6",title:"Project Notification",desc:"Select how you'll be notified when the project related events happended."}),e.jsx(d,{rows:S,validators:m,values:s}),e.jsx(c,{className:"mt-6",title:"Sales Notification",desc:"Select how you'll be notified when any products & order updated."}),e.jsx(d,{rows:k,validators:m,values:s}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(p,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>r(),children:"Reset"}),e.jsx(p,{variant:"solid",loading:o,type:"submit",children:o?"Updating":"Update"})]})]})})}})};export{X as default};
