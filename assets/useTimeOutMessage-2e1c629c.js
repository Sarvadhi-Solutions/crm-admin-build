import{r as s}from"./index-7b0349c6.js";function a(r=3e3){const[e,t]=s.useState("");return s.useEffect(()=>{if(e){const u=setTimeout(()=>t(""),r);return()=>{clearTimeout(u)}}},[e]),[e,t]}export{a as u};
