import{j as e}from"./index-6767ac81.js";import{Y as p,aA as u,K as b,aB as g}from"./index.esm-107f547f.js";import{A as s}from"./index-688b9e70.js";import{B as t}from"./Button-edcd26d9.js";import{D as f}from"./Dialog-b04dbbb3.js";const N=({status:r})=>{switch(r){case"info":return e.jsx(s,{className:"bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100",shape:"circle",children:e.jsx("span",{className:"text-2xl",children:e.jsx(g,{})})});case"success":return e.jsx(s,{className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",shape:"circle",children:e.jsx("span",{className:"text-2xl",children:e.jsx(b,{})})});case"warning":return e.jsx(s,{className:"text-amber-600 bg-amber-100 dark:text-amber-100",shape:"circle",children:e.jsx("span",{className:"text-2xl",children:e.jsx(u,{})})});case"danger":return e.jsx(s,{className:"text-red-600 bg-red-100 dark:text-red-100",shape:"circle",children:e.jsx("span",{className:"text-2xl",children:e.jsx(p,{})})});default:return null}},H=r=>{const{type:c="info",title:i,children:n,onCancel:a,onConfirm:l,cancelText:x="Cancel",confirmText:m="Confirm",confirmButtonColor:d,...o}=r,h=()=>{a==null||a()},j=()=>{l==null||l()};return e.jsxs(f,{contentClassName:"pb-0 px-0",...o,children:[e.jsxs("div",{className:"px-6 pb-6 pt-2 flex",children:[e.jsx("div",{children:e.jsx(N,{status:c})}),e.jsxs("div",{className:"ml-4 rtl:mr-4",children:[e.jsx("h5",{className:"mb-2",children:i}),n]})]}),e.jsxs("div",{className:"text-right px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-bl-lg rounded-br-lg",children:[e.jsx(t,{size:"sm",className:"ltr:mr-2 rtl:ml-2",onClick:h,children:x}),e.jsx(t,{size:"sm",variant:"solid",color:d,onClick:j,children:m})]})]})};export{H as C};
