import{j as e,c as m}from"./index-b09faefa.js";import{C as o}from"./Card-33431fc8.js";import{A as a}from"./index-2f1f758f.js";import{U as n,aO as j}from"./index.esm-2c67faf2.js";const h=({actionType:t})=>{switch(t){case 0:return e.jsx(a,{className:"bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100",icon:e.jsx(j,{})});case 1:return e.jsx(a,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:e.jsx(n,{})});case 2:return e.jsx(a,{className:"bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100",icon:e.jsx(n,{})});default:return e.jsx(a,{})}},u=t=>{const{data:c=[],className:d,title:i="Recent Transaction",extra:l}=t;return e.jsxs(o,{className:d,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{children:i}),l]}),e.jsx("div",{className:"mt-6",children:c.map(r=>e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"mb-4",children:r.date}),r.data.map((s,x)=>e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{actionType:s.actionType}),e.jsx("h6",{className:"text-sm font-bold",children:s.action})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:m("font-semibold",s.actionType===2?"text-red-600":"text-gray-900 dark:text-gray-100"),children:[s.coinValue," ",s.symbol]}),e.jsxs("p",{className:"text-xs",children:[s.actionType===2?"-":"+"," ",s.fiatValue," ",s.curency]})]})]},x))]},r.date))})]})};export{u as R};
