import{j as e,bc as m,r as d}from"./index-21d7ce34.js";import{D as x}from"./Drawer-08bde54d.js";import{B as p}from"./Button-6c3081fd.js";import{N as h}from"./NavToggle-23daec28.js";import{u as b}from"./useThemeClass-103b190c.js";const i=({onLinkClick:r,routes:t})=>{const{textTheme:s,borderTheme:l}=b(),a=`${s} hover:${s} ${l}`;return e.jsx(e.Fragment,{children:t.map(o=>e.jsxs("div",{className:"mb-6",children:[e.jsx("h6",{className:"mb-4",children:o.groupName}),e.jsx("div",{className:"ltr:border-l rtl:border-r border-gray-200 dark:border-gray-600",children:o.nav.map(n=>e.jsx(m,{className:({isActive:c})=>`cursor-pointer font-semibold ltr:border-l rtl:border-r px-4 h-6 mb-4 flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 ltr:-ml-px rtl:-mr-px ${c?a:"border-transparent"}`,to:n.path,onClick:r,children:e.jsx("span",{children:n.label})},n.label))})]},o.groupName))})},j=({routes:r})=>{const[t,s]=d.useState(!1),l=()=>{s(!0)},a=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{className:"lg:hidden",shape:"circle",variant:"plain",icon:e.jsx(h,{className:"text-2xl",toggled:t}),onClick:l}),e.jsx(x,{title:"Navigation",isOpen:t,width:300,placement:"left",onClose:a,onRequestClose:a,children:e.jsx(i,{routes:r,onLinkClick:a})})]})},C=({routes:r})=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"hidden lg:block",children:e.jsx(i,{routes:r})}),e.jsx(j,{routes:r})]});export{C as D};
