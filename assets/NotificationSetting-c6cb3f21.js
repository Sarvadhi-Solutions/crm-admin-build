import{j as e}from"./index-e30b2821.js";import{S as l}from"./index-376e52ed.js";import{B as p}from"./Button-7f51b5aa.js";import{F as u}from"./FormItem-65da11c0.js";import{t as x,N as j}from"./toast-840a302f.js";import{F as c}from"./FormDesription-184ab78d.js";import{F as h}from"./FormRow-e500a2a1.js";import{F as f,a as b,b as N}from"./formik.esm-fe7846d2.js";import{i as y}from"./isLastChild-83eb4c23.js";import{aX as w,aY as g,aW as F}from"./index.esm-8b3184d4.js";import"./useControllableState-610fbaba.js";import"./index-aa71065b.js";import"./Views-64b223ad.js";import"./useTimeout-0dbf2c49.js";import"./CloseButton-eaa8212e.js";import"./StatusIcon-b75ecd57.js";import"./chainedFunction-070f832c.js";const v=[{label:"News",name:"news"},{label:"Account activity",name:"accountActivity"},{label:"New device used to sign in",name:"signIn"},{label:"Reminders",name:"reminders"}],S=[{label:"Somone mentions you",name:"mentioned"},{label:"Somone replies to your message",name:"replies"},{label:"Task status updated",name:"taskUpdate"},{label:"Task assigned to you",name:"assigned"}],k=[{label:"New product",name:"newProduct"},{label:"New order placed",name:"newOrder"}],R=({field:a,form:i,values:s,name:t})=>e.jsxs(l,{value:s[t],selectionType:"multiple",onChange:n=>i.setFieldValue(a.name,n),children:[e.jsxs(l.Item,{className:"flex items-center justify-center",type:"button",value:"email",children:[e.jsx(w,{className:"text-xl"}),e.jsx("span",{className:"hidden sm:block ltr:ml-2 rtl:mr-2",children:"Email"})]}),e.jsxs(l.Item,{className:"flex items-center justify-center",type:"button",value:"browser",children:[e.jsx(g,{className:"text-xl"}),e.jsx("span",{className:"hidden sm:block  ltr:ml-2 rtl:mr-2",children:"Browser"})]}),e.jsxs(l.Item,{className:"flex items-center justify-center",type:"button",value:"app",children:[e.jsx(F,{className:"text-xl"}),e.jsx("span",{className:"hidden sm:block  ltr:ml-2 rtl:mr-2",children:"App"})]})]}),d=({rows:a,validators:i,values:s})=>e.jsx(e.Fragment,{children:a.map((t,n)=>e.jsx(h,{name:t.name,label:t.label,...i,border:!y(a,n),children:e.jsx(N,{name:t.name,children:({field:o,form:r})=>e.jsx(R,{field:o,form:r,values:s,name:t.name})})},t.name))}),X=({data:a={news:[],accountActivity:[],signIn:[],reminders:[],mentioned:[],replies:[],taskUpdate:[],assigned:[],newProduct:[],newOrder:[]}})=>{const i=(s,t)=>{x.push(e.jsx(j,{title:"Notification setting updated",type:"success"}),{placement:"top-center"}),t(!1),console.log(s)};return e.jsx(f,{enableReinitialize:!0,initialValues:a,onSubmit:(s,{setSubmitting:t})=>{t(!0),setTimeout(()=>{i(s,t)},1e3)},children:({values:s,touched:t,errors:n,isSubmitting:o,resetForm:r})=>{const m={touched:t,errors:n};return e.jsx(b,{children:e.jsxs(u,{children:[e.jsx(c,{title:"General Notification",desc:"Select how you'll be notified when the following changes occur."}),e.jsx(d,{rows:v,validators:m,values:s}),e.jsx(c,{className:"mt-6",title:"Project Notification",desc:"Select how you'll be notified when the project related events happended."}),e.jsx(d,{rows:S,validators:m,values:s}),e.jsx(c,{className:"mt-6",title:"Sales Notification",desc:"Select how you'll be notified when any products & order updated."}),e.jsx(d,{rows:k,validators:m,values:s}),e.jsxs("div",{className:"mt-4 ltr:text-right",children:[e.jsx(p,{className:"ltr:mr-2 rtl:ml-2",type:"button",onClick:()=>r(),children:"Reset"}),e.jsx(p,{variant:"solid",loading:o,type:"submit",children:o?"Updating":"Update"})]})]})})}})};export{X as default};
