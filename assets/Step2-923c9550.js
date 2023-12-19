import{j as a}from"./index-7b0349c6.js";import{B as l}from"./Button-9fa3d2fc.js";import{F as d,a as r}from"./FormItem-26ad5e8d.js";import{S as g}from"./Select-1f2320ab.js";import{I as x}from"./Input-5106ef66.js";import{F as b,a as h,b as s}from"./formik.esm-1e90a8e9.js";import{a_ as j}from"./index.esm-70dc7df8.js";import{c as S,a as p}from"./index.esm-3fef8ee5.js";import"./index-ba238736.js";import"./Views-c6671a9d.js";import"./slicedToArray-a6cb1158.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./floating-ui.dom-bef9cea3.js";import"./get-3f8daa47.js";import"./toString-a66e4ffc.js";import"./_MapCache-a209650f.js";import"./isNil-2a409f2e.js";const v=S().shape({organizationName:p().required("Organization name is required"),organizationSize:p().required("Please select your organization size")}),c=[{label:"Solo",value:"solo"},{label:"2 ~ 10 members",value:"2~10"},{label:"11 ~ 50 members",value:"11~50"},{label:"51 ~ 200 members",value:"51~200"},{label:"201 ~ 500 members",value:"201~500"}],P=({onNext:o,onBack:u})=>a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"mb-2",children:"Tell us about your organization"}),a.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:a.jsx(b,{initialValues:{organizationName:"",organizationSize:""},validationSchema:v,onSubmit:()=>{o==null||o()},children:({values:z,touched:n,errors:e})=>a.jsx(h,{children:a.jsxs(d,{children:[a.jsx(r,{label:"Name of your organization",invalid:e.organizationName&&n.organizationName,errorMessage:e.organizationName,children:a.jsx(s,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name...",component:x})}),a.jsx(r,{label:"Size of your organization",invalid:e.organizationSize&&n.organizationSize,errorMessage:e.organizationSize,children:a.jsx(s,{name:"organizationSize",children:({field:t,form:m})=>a.jsx(g,{placeholder:"Organization Size...",field:t,form:m,options:c,value:c.filter(i=>i.value===z.organizationSize),onChange:i=>m.setFieldValue(t.name,i==null?void 0:i.value)})})}),a.jsxs(r,{children:[a.jsx(l,{block:!0,variant:"solid",type:"submit",children:"Continue"}),a.jsx(l,{block:!0,className:"mt-4",variant:"plain",type:"button",icon:a.jsx(j,{}),onClick:u,children:"Back"})]})]})})})})]});export{P as default};
