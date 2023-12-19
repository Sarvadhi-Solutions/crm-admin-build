import{j as t}from"./index-21d7ce34.js";import{D as i}from"./DemoLayout-5f0e61ea.js";import{C as s}from"./Chart-2e4afe01.js";import"./AdaptableCard-1403a507.js";import"./Card-c016d7e4.js";import"./Views-aa9d3067.js";import"./Affix-f43c1993.js";import"./Button-6c3081fd.js";import"./context-ff20449e.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index.esm-3f5f076a.js";import"./SyntaxHighlighter-ef52ffff.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-d93ff48a.js";import"./DemoComponentApi-f2c63353.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./chart.constant-06b1f9d0.js";import"./chart.config-213c7bdd.js";const n=()=>{const e={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]};return t.jsx(s,{series:e.series,xAxis:e.categories,height:400})},c=()=>{const e={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21]},{name:"Page Views",data:[35,41,62,42,13,18,29]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan"]};return t.jsx(s,{series:e.series,xAxis:e.categories,height:410,type:"bar",customOptions:{colors:["#ef4444","#10b981"]}})},p=()=>{const e={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]};return t.jsx(s,{type:"area",series:e.series,xAxis:e.categories,height:400})},d=()=>{const e={labels:["Item A","Item B","Item C"],values:[15032,11246,8273],coinSymbol:["A","B","C"]};return t.jsx(s,{donutTitle:`$${e.values.reduce((o,r)=>o+r,0)}`,donutText:"Assets",series:e.values,customOptions:{labels:e.labels},type:"donut",height:230})},a="ChartDoc",m={title:"Chart",desc:'This is higher level component of <a class="text-indigo-600 underline" href="https://apexcharts.com/docs/react-charts/" target="_blank">ApexChart</a>, it come with several preconfig chart setup that adapted to the theme.'},h=[{mdName:"Line",mdPath:a,title:"Line",desc:"",component:t.jsx(n,{})},{mdName:"Bar",mdPath:a,title:"Bar",desc:"",component:t.jsx(c,{})},{mdName:"Area",mdPath:a,title:"Area",desc:"",component:t.jsx(p,{})},{mdName:"Donut",mdPath:a,title:"Donut",desc:"",component:t.jsx(d,{})}],l=[{component:"Chart",api:[{propName:"customOptions",type:'<a class="text-indigo-600 underline" href="https://apexcharts.com/docs/options/annotations/" target="_blank">Apexcharts option</a>',default:"-",desc:"Custom options for chart"},{propName:"donutTitle",type:"<code>string</code>",default:"-",desc:"Title inside donut chart"},{propName:"height",type:"<code>string</code> | <code>number</code>",default:"-",desc:"Chart height"},{propName:"series",type:'<a class="text-indigo-600 underline" href="https://apexcharts.com/docs/series/" target="_blank">Apexcharts Series</a>',default:"-",desc:"Chart series"},{propName:"type",type:"<code>'line'</code> | <code>'bar'</code> | <code>'area'</code> | <code>'donut'</code>",default:"-",desc:"Chart type"},{propName:"width",type:"<code>string</code> | <code>number</code>",default:"-",desc:"Chart width"},{propName:"xAxis",type:'<a class="text-indigo-600 underline" href="https://apexcharts.com/docs/options/xaxis/" target="_blank">Apexcharts xAxis</a>',default:"-",desc:"Chart xAxis"}]}],O=()=>t.jsx(i,{innerFrame:!1,header:m,demos:h,api:l,mdPrefixPath:"shared"});export{O as default};
