import{r as i,j as s}from"./index-03c04ff8.js";import{I as u}from"./Input-a694346c.js";import{$ as c,a0 as l}from"./index.esm-0ab06d90.js";const d=o=>{const{onVisibleChange:t,...p}=o,[e,a]=i.useState("password"),n=x=>{x.preventDefault();const r=e==="password"?"text":"password";a(r),t==null||t(r==="text")};return s.jsx(u,{...p,type:e,suffix:s.jsx("span",{className:"cursor-pointer text-xl",onClick:n,children:e==="password"?s.jsx(c,{}):s.jsx(l,{})})})};export{d as P};
