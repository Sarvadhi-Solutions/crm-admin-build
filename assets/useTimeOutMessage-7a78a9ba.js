import{r as s}from"./index-deb31e10.js";function a(r=3e3){const[e,t]=s.useState("");return s.useEffect(()=>{if(e){const u=setTimeout(()=>t(""),r);return()=>{clearTimeout(u)}}},[e]),[e,t]}export{a as u};
