import{r as i,j as s}from"./index-dddc73b4.js";import{I as u}from"./Input-5850a060.js";import{a0 as c,a1 as l}from"./index.esm-d67f1fea.js";const d=o=>{const{onVisibleChange:t,...p}=o,[e,a]=i.useState("password"),n=x=>{x.preventDefault();const r=e==="password"?"text":"password";a(r),t==null||t(r==="text")};return s.jsx(u,{...p,type:e,suffix:s.jsx("span",{className:"cursor-pointer text-xl",onClick:n,children:e==="password"?s.jsx(c,{}):s.jsx(l,{})})})};export{d as P};
