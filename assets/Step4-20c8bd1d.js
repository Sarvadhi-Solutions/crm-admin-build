import{j as e}from"./index-5b083722.js";import{F as d,a as x,b as h,c as j,d as p}from"./formik.esm-ca71b2a3.js";import{S as i}from"./index-b665f1fe.js";import{B as b}from"./Button-f1066bd7.js";import{S as v}from"./SegmentItemOption-7a99ef68.js";import{bp as g,g as f,al as k,bs as S,aV as w}from"./index.esm-577c3d7b.js";import"./context-6fe9373e.js";import"./index-3898d2cc.js";import"./Views-2896b481.js";import"./useControllableState-60589411.js";import"./useThemeClass-a72d650b.js";const F=[{value:"0",label:"Start project from scratch",icon:e.jsx(f,{})},{value:"1",label:"Automate time consuming tasks",icon:e.jsx(k,{})},{value:"2",label:"Enhance current workflow",icon:e.jsx(S,{})},{value:"3",label:"Others",icon:e.jsx(w,{})}],M=({onNext:s,onBack:t})=>e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-2",children:"What is your main objective with Elstar?"}),e.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:e.jsx(d,{initialValues:{role:""},onSubmit:()=>{console.log()},children:({touched:n,errors:l})=>e.jsx(x,{children:e.jsxs(h,{children:[e.jsx(j,{invalid:l.role&&n.role,errorMessage:l.role,children:e.jsx(p,{name:"role",children:({field:r,form:o})=>e.jsx(i,{value:[r.value],onChange:a=>{o.setFieldValue(r.name,a[0]),s==null||s()},children:e.jsx("div",{className:"w-full",children:F.map(a=>e.jsx(i.Item,{value:a.value,disabled:a.disabled,children:({active:m,onSegmentItemClick:c,disabled:u})=>e.jsx(v,{hoverable:!0,active:m,disabled:u,className:"mb-4 bg-white dark:bg-gray-800",onSegmentItemClick:c,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:a.icon}),e.jsx("h6",{children:a.label})]})})},a.value))})})})}),e.jsx(b,{block:!0,variant:"plain",type:"button",icon:e.jsx(g,{}),onClick:t,children:"Back"})]})})})})]});export{M as default};
