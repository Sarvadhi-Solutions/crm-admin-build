import{j as e}from"./index-63e2e8ff.js";import{F as u,a as x}from"./FormItem-c438ca28.js";import{S as s}from"./index-112a1f58.js";import{B as h}from"./Button-a97ffbe7.js";import{F as p,a as j,b as g}from"./formik.esm-9c5c20f8.js";import{S as b}from"./SegmentItemOption-d01d574f.js";import{a_ as v,J as f,a$ as S,O as k,B as H,b0 as O,aw as w}from"./index.esm-efc46191.js";import"./index-cdfb36ad.js";import"./Views-003281bd.js";import"./useControllableState-92071fcc.js";import"./useThemeClass-efe3e673.js";const F=[{value:"softwareEngineer",label:"Software Engineer",icon:e.jsx(f,{})},{value:"productManager",label:"Product Manager",icon:e.jsx(S,{})},{value:"designer",label:"Designer",icon:e.jsx(k,{})},{value:"qaTester",label:"QA Tester",icon:e.jsx(H,{})},{value:"skateHolder",label:"Skate Holder",icon:e.jsx(O,{})},{value:"other",label:"Others",icon:e.jsx(w,{})}],q=({onNext:l,onBack:n})=>e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-2",children:"What is your role in the organization?"}),e.jsx("div",{className:"mt-8 max-w-[600px] lg:min-w-[600px] mx-auto",children:e.jsx(p,{initialValues:{role:""},onSubmit:()=>{console.log()},children:({touched:o,errors:r})=>e.jsx(j,{children:e.jsxs(u,{children:[e.jsx(x,{invalid:r.role&&o.role,errorMessage:r.role,children:e.jsx(g,{name:"role",children:({field:i,form:t})=>e.jsx(s,{value:[i.value],onChange:a=>{t.setFieldValue(i.name,a[0]),l==null||l()},children:e.jsx("div",{className:"grid grid-cols-2 gap-4 w-full",children:F.map(a=>e.jsx(s.Item,{value:a.value,disabled:a.disabled,children:({active:c,onSegmentItemClick:m,disabled:d})=>e.jsx(b,{hoverable:!0,active:c,disabled:d,className:"bg-white dark:bg-gray-800",onSegmentItemClick:m,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:a.icon}),e.jsx("h6",{children:a.label})]})})},a.value))})})})}),e.jsx(h,{block:!0,variant:"plain",type:"button",icon:e.jsx(v,{}),onClick:n,children:"Back"})]})})})})]});export{q as default};
