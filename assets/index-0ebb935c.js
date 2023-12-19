import{j as e}from"./index-a75c2214.js";import{D as i}from"./DemoLayout-2a08f2a3.js";import{A as m}from"./AuthorityCheck-163a72ff.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./SyntaxHighlighter-39525d8f.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";import"./index-129cb3d5.js";import"./DemoComponentApi-81a65b6e.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";const a=()=>{const s=["ADMIN","USER"],t=[{name:"User A",roles:["ADMIN"],color:"text-indigo-500"},{name:"User B",roles:["USER"],color:"text-emerald-500"},{name:"User C",roles:["GUEST"],color:"text-rose-500"},{name:"User D",roles:["ADMIN","USER"],color:"text-blue-500"}];return e.jsxs(e.Fragment,{children:[e.jsx("h6",{className:"mb-4",children:"Users with different role"}),e.jsx("div",{className:"flex flex-col gap-2",children:t.map((o,r)=>e.jsxs("div",{children:[e.jsx("span",{className:o.color,children:o.name}),": "," ",e.jsx("span",{className:"font-semibold",children:o.roles.toString()})]},r))}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("span",{children:["Roles who can access: "," "]}),e.jsx("span",{className:"font-semibold",children:s.toString()})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Result (Users who able to access): "}),t.map(o=>e.jsx(m,{authority:s,userAuthority:o.roles,children:e.jsxs("span",{className:`${o.color} font-semibold`,children:[o.name,","," "]})},o.name))]})]})},c="AuthorityCheckDoc",l={title:"AuthorityCheck",desc:"AuthorityCheck component help to check whether the current user has permmision to access, it can be use to display or hide some elements that require permmission by certain roles."},n=[{mdName:"Example",mdPath:c,title:"Example",desc:"example usage",component:e.jsx(a,{})}],p=[{component:"AuthorityCheck",api:[{propName:"authority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"List of roles that have rights to access the wrapped elements"},{propName:"userAuthority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"List of the user roles"}]}],P=()=>e.jsx(i,{innerFrame:!1,header:l,demos:n,api:p,mdPrefixPath:"shared"});export{P as default};
