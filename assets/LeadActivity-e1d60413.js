import{j as r}from"./index-03c04ff8.js";import{A as d}from"./index-b28ee968.js";import{T as l}from"./index-e3eb4615.js";import{S as e}from"./StatusCapsule-a997a42a.js";import{g as c,t as x}from"./checkEditUpdate-e2f0b2aa.js";const h=({children:a,...s})=>r.jsx(d,{...s,size:25,shape:"circle",children:a}),f=({activity:a})=>r.jsx("div",{className:"max-w-[700px]",children:r.jsx(l,{children:a&&(a==null?void 0:a.length)&&(a==null?void 0:a.map((s,m)=>r.jsxs(l.Item,{media:r.jsx(h,{className:(s==null?void 0:s.status)==="open"?"bg-yellow-400":(s==null?void 0:s.status)==="closed_lost"?"bg-red-400":"bg-green-400",children:c(s==null?void 0:s.createdBy)}),children:[r.jsxs("div",{className:"my-1 items-center",children:[r.jsxs("p",{className:"font-semibold text-gray-900 dark:text-gray-100",children:[s==null?void 0:s.createdBy," "]}),r.jsxs("div",{children:[r.jsxs("span",{className:"",children:["has change the status to"," "]}),r.jsx(e,{status:s==null?void 0:s.status})]})]}),r.jsxs("p",{children:[r.jsx("p",{children:(s==null?void 0:s.status)==="closed_lost"?"Reason : "+(s==null?void 0:s.reason):""}),r.jsx("p",{children:x(s==null?void 0:s.createdDate)})]})]},m)))})});export{f as L};
