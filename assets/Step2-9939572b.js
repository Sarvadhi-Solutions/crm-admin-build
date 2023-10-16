import{j as a}from"./index-e30b2821.js";import{B as l}from"./Button-7f51b5aa.js";import{F as d,a as r}from"./FormItem-65da11c0.js";import{S as g}from"./Select-aa8bbc1c.js";import{I as x}from"./Input-2c261c20.js";import{F as b,a as h,b as s}from"./formik.esm-fe7846d2.js";import{a_ as j}from"./index.esm-8b3184d4.js";import{c as S,a as p}from"./index.esm-a7bb562e.js";import"./index-aa71065b.js";import"./Views-64b223ad.js";import"./slicedToArray-2d4e1c7e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-07c3bb38.js";import"./floating-ui.dom-bef9cea3.js";import"./get-53a32457.js";import"./toString-c9827e55.js";import"./_MapCache-e35f57ee.js";import"./isNil-4b53f2ef.js";const v=S().shape({organizationName:p().required("Organization name is required"),organizationSize:p().required("Please select your organization size")}),c=[{label:"Solo",value:"solo"},{label:"2 ~ 10 members",value:"2~10"},{label:"11 ~ 50 members",value:"11~50"},{label:"51 ~ 200 members",value:"51~200"},{label:"201 ~ 500 members",value:"201~500"}],P=({onNext:o,onBack:u})=>a.jsxs("div",{className:"text-center",children:[a.jsx("h3",{className:"mb-2",children:"Tell us about your organization"}),a.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:a.jsx(b,{initialValues:{organizationName:"",organizationSize:""},validationSchema:v,onSubmit:()=>{o==null||o()},children:({values:z,touched:n,errors:e})=>a.jsx(h,{children:a.jsxs(d,{children:[a.jsx(r,{label:"Name of your organization",invalid:e.organizationName&&n.organizationName,errorMessage:e.organizationName,children:a.jsx(s,{type:"text",autoComplete:"off",name:"organizationName",placeholder:"Organization Name...",component:x})}),a.jsx(r,{label:"Size of your organization",invalid:e.organizationSize&&n.organizationSize,errorMessage:e.organizationSize,children:a.jsx(s,{name:"organizationSize",children:({field:t,form:m})=>a.jsx(g,{placeholder:"Organization Size...",field:t,form:m,options:c,value:c.filter(i=>i.value===z.organizationSize),onChange:i=>m.setFieldValue(t.name,i==null?void 0:i.value)})})}),a.jsxs(r,{children:[a.jsx(l,{block:!0,variant:"solid",type:"submit",children:"Continue"}),a.jsx(l,{block:!0,className:"mt-4",variant:"plain",type:"button",icon:a.jsx(j,{}),onClick:u,children:"Back"})]})]})})})})]});export{P as default};
