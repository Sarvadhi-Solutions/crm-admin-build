import{r as a,i as f,j as p}from"./index-7c10d2a3.js";import{_ as R}from"./chart.constant-57a13969.js";import{a as d,b as j,c as w,d as N}from"./chart.config-0ddaad92.js";const h=["line","bar","area"],L=x=>{const{series:m=[],width:y="100%",height:O=300,xAxis:b,customOptions:n,type:t="line",direction:r,donutTitle:o,donutText:l,className:g,...C}=x,i=a.useRef(null),D=a.useMemo(()=>{switch(t){case"line":return d;case"bar":return N;case"area":return w;case"donut":return j;default:return d}},[t]);let e=JSON.parse(JSON.stringify(D));const u=window.innerWidth<768,c=a.useCallback(()=>{if(i.current){const s=i.current.querySelectorAll("div.apexcharts-legend")[0];r===f&&(s.style.right="auto",s.style.left="0"),u&&(s.style.position="relative",s.style.top="0",s.style.justifyContent="start",s.style.padding="0")}},[r,u]);return a.useEffect(()=>{h.includes(t)&&c()},[t,c]),h.includes(t)&&(e.xaxis.categories=b),n&&(e={...e,...n}),t==="donut"&&(o&&(e.plotOptions.pie.donut.labels.total.label=o),l&&(e.plotOptions.pie.donut.labels.total.formatter=()=>l)),p.jsx("div",{ref:i,style:r===f?{direction:"ltr"}:{},className:"chartRef",children:p.jsx(R,{options:e,type:t,series:m,width:y,height:O,className:g,...C})})};export{L as C};
