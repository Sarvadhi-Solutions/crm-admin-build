import{r as p}from"./index-4b23f9f2.js";const e={xs:"576",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},t=(r="")=>parseInt(r.replace("px","")),x={"2xl":t(e["2xl"]),xl:t(e.xl),lg:t(e.lg),md:t(e.md),sm:t(e.sm),xs:t(e.xs)},m=()=>{const r=(n="smaller")=>{const d=window.innerWidth;return Object.fromEntries(Object.entries(x).map(([c,l])=>[c,n==="larger"?d>l:d<l]))},s=()=>({windowWidth:window.innerWidth,larger:r("larger"),smaller:r("smaller")}),[i,a]=p.useState(s()),o=()=>{const n=s();a(n)};return p.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[i.windowWidth]),i};export{m as u};
