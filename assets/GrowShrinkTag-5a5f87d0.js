import{C as o}from"./chart.constant-84220a07.js";import{r as f,j as t,c}from"./index-54ca42fc.js";import{T as u}from"./Tag-d6f79b22.js";import{a5 as p,a6 as m}from"./index.esm-7dd42512.js";const x={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...o],dataLabels:{enabled:!1},stroke:{width:2.5,curve:"smooth",lineCap:"round"},legend:{itemMargin:{vertical:10},tooltipHoverFormatter:function(e,a){return e+" - "+a.w.globals.series[a.seriesIndex][a.dataPointIndex]}},xaxis:{categories:[]}},v={...x},O={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30px",borderRadius:2}},colors:[...o],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{itemMargin:{vertical:10},tooltipHoverFormatter:function(e,a){return e+" - "+a.w.globals.series[a.seriesIndex][a.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}}},C={colors:[...o],plotOptions:{pie:{donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",formatter:function(e){return e.globals.seriesTotals.reduce((a,r)=>a+r,0)}}},size:"85%"}}},stroke:{colors:["transparent"]},labels:[],dataLabels:{enabled:!1},legend:{show:!1}},j={chart:{type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{show:!0,fontSize:"12px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-5},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(e){return e+""}},total:{show:!0,label:"Total",formatter:function(e){return e.globals.seriesTotals.reduce((a,r)=>a+r,0)}}}}}};function s(e,a){return e>0?a==="bg"?"bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100":"text-emerald-600 dark:text-emerald-400":e<0?a==="bg"?"bg-red-100 dark:bg-red-500/20 dark:text-red-100":"text-red-600 dark:text-red-500":""}const h=f.forwardRef((e,a)=>{const{value:r=0,className:l,prefix:n,suffix:i,showIcon:d=!0}=e;return t.jsxs(u,{ref:a,className:c("gap-1 font-bold border-0",s(r,"text"),s(r,"bg"),l),children:[r!==0&&t.jsx("span",{children:d&&(r>0?t.jsx(p,{}):t.jsx(m,{}))}),t.jsxs("span",{children:[n,r,i]})]})});h.displayName="GrowShrinkTag";export{x as a,j as b,C as c,v as d,O as e};
