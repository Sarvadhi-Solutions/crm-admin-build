import{j as e}from"./index-eaf52e42.js";import{F as d,a as x}from"./FormItem-29182244.js";import{S as i}from"./index-4d78851d.js";import{B as h}from"./Button-fed4171f.js";import{F as j,a as p,b}from"./formik.esm-d9e9eac5.js";import{S as v}from"./SegmentItemOption-4de5a997.js";import{a_ as f,r as g,a4 as k,b1 as w,aw as S}from"./index.esm-decdb68b.js";import"./index-6c9c5c4e.js";import"./Views-58b94d35.js";import"./useControllableState-4a07cc2b.js";import"./useThemeClass-62b227ea.js";const F=[{value:"0",label:"Start project from scratch",icon:e.jsx(g,{})},{value:"1",label:"Automate time consuming tasks",icon:e.jsx(k,{})},{value:"2",label:"Enhance current workflow",icon:e.jsx(w,{})},{value:"3",label:"Others",icon:e.jsx(S,{})}],M=({onNext:s,onBack:t})=>e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-2",children:"What is your main objective with Elstar?"}),e.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:e.jsx(j,{initialValues:{role:""},onSubmit:()=>{console.log()},children:({touched:o,errors:l})=>e.jsx(p,{children:e.jsxs(d,{children:[e.jsx(x,{invalid:l.role&&o.role,errorMessage:l.role,children:e.jsx(b,{name:"role",children:({field:r,form:n})=>e.jsx(i,{value:[r.value],onChange:a=>{n.setFieldValue(r.name,a[0]),s==null||s()},children:e.jsx("div",{className:"w-full",children:F.map(a=>e.jsx(i.Item,{value:a.value,disabled:a.disabled,children:({active:m,onSegmentItemClick:c,disabled:u})=>e.jsx(v,{hoverable:!0,active:m,disabled:u,className:"mb-4 bg-white dark:bg-gray-800",onSegmentItemClick:c,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:a.icon}),e.jsx("h6",{children:a.label})]})})},a.value))})})})}),e.jsx(h,{block:!0,variant:"plain",type:"button",icon:e.jsx(f,{}),onClick:t,children:"Back"})]})})})})]});export{M as default};
