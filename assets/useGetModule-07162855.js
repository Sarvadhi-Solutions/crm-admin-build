import{a as e}from"./index-01b42c77.js";import{f as d}from"./index-6cd17dbd.js";const h=()=>{const c=e();return{getModule:async n=>{var s;try{const o=await c(d()),r=(s=o==null?void 0:o.payload)==null?void 0:s.data,t=r==null?void 0:r.find(a=>(a==null?void 0:a.moduleName)===n);return t==null?void 0:t.id}catch(o){throw console.error("Error fetching module data:",o),o}}}};export{h as u};
