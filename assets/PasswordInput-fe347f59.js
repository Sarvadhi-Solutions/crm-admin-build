import{r as i,j as s}from"./index-ba91c0fd.js";import{I as u}from"./Input-529114bc.js";import{$ as c,a0 as l}from"./index.esm-55e99400.js";const d=o=>{const{onVisibleChange:t,...p}=o,[e,a]=i.useState("password"),n=x=>{x.preventDefault();const r=e==="password"?"text":"password";a(r),t==null||t(r==="text")};return s.jsx(u,{...p,type:e,suffix:s.jsx("span",{className:"cursor-pointer text-xl",onClick:n,children:e==="password"?s.jsx(c,{}):s.jsx(l,{})})})};export{d as P};
