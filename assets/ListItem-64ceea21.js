import{j as s,r as i,h as d}from"./index-f40e4d75.js";import{C as p}from"./Card-902c739e.js";import{D as l}from"./index-89133a2f.js";import{T as x,U as j,j as u,f as h}from"./index.esm-0d86f991.js";import{E as f}from"./EllipsisButton-7c6b26a6.js";import{U as g}from"./UsersAvatarGroup-2d6d26cc.js";import{P as v}from"./Progress-93b8f813.js";const b=[{label:"Add Flag",value:"addFlag",icon:s.jsx(x,{})},{label:"Move",value:"move",icon:s.jsx(j,{})},{label:"Setting",value:"projectSetting",icon:s.jsx(u,{})}],y=()=>s.jsx(l,{placement:"bottom-end",renderTitle:s.jsx(f,{}),children:b.map(e=>s.jsxs(l.Item,{eventKey:e.value,children:[s.jsx("span",{className:"text-lg",children:e.icon}),s.jsx("span",{className:"ml-2 rtl:mr-2",children:e.label})]},e.value))}),N=({members:e})=>s.jsx(g,{users:e}),w=({progression:e})=>{const r=i.useMemo(()=>e>70?{color:"green-500"}:e<40?{color:"red-500"}:{},[e]);return s.jsx(v,{size:"sm",percent:e,...r})},M=({data:e,cardBorder:r})=>{const{name:a,totalTask:n,completedTask:m,progression:o,member:c,category:t}=e;return s.jsx("div",{className:"mb-4",children:s.jsx(p,{bordered:r,children:s.jsxs("div",{className:"grid gap-x-4 grid-cols-12",children:[s.jsx("div",{className:"my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center",children:s.jsxs("div",{className:"flex flex-col",children:[s.jsx("h6",{className:"font-bold",children:s.jsx(d,{to:"/app/project/scrum-board",children:a})}),s.jsx("span",{children:t})]})}),s.jsx("div",{className:"my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center md:justify-end",children:s.jsxs("div",{className:"inline-flex items-center px-2 py-1 border border-gray-300 rounded-full",children:[s.jsx(h,{className:"text-base"}),s.jsxs("span",{className:"ml-1 rtl:mr-1 whitespace-nowrap",children:[m," / ",n]})]})}),s.jsx("div",{className:"my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-3 md:flex md:items-center",children:s.jsx(w,{progression:o})}),s.jsx("div",{className:"my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center",children:s.jsx(N,{members:c})}),s.jsx("div",{className:"my-1 sm:my-0 col-span-12 sm:col-span-1 flex md:items-center justify-end",children:s.jsx(y,{})})]})})})};export{y as I,M as L,N as M,w as P};
