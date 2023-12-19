import{j as e}from"./index-5b083722.js";import{D as n}from"./DemoLayout-c496ff20.js";import{_ as a,a as c,C as r,b as d}from"./chart.constant-f8825acf.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./SyntaxHighlighter-efa92768.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-c682b4c7.js";import"./DemoComponentApi-8e0ebe63.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";const p=()=>{const t=[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}];return e.jsx(a,{options:{chart:{type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},colors:[c],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},series:t,height:300})},l=()=>{const t=[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[87,57,74,99,75,38,62,47,82,56,45,47]}];return e.jsx(a,{options:{chart:{height:350,type:"line",zoom:{enabled:!1}},colors:[...r],dataLabels:{enabled:!1},stroke:{width:[3,5,3],curve:"straight",dashArray:[0,8,5]},legend:{tooltipHoverFormatter:function(s,i){return s+" - "+i.w.globals.series[i.seriesIndex][i.dataPointIndex]}},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},tooltip:{y:[{title:{formatter:function(s){return s+" (mins)"}}},{title:{formatter:function(s){return s+" per session"}}},{title:{formatter:function(s){return s}}}]},grid:{borderColor:"#f1f1f1"}},series:t,height:300})},m=()=>{const t=[{name:"STOCK ABC",data:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85]}];return e.jsx(a,{options:{chart:{zoom:{enabled:!1}},colors:[d],fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,80,100]}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},labels:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"],xaxis:{type:"datetime"},yaxis:{opposite:!0},legend:{horizontalAlign:"left"}},type:"area",series:t,height:300})},h=()=>{const t=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}];return e.jsx(a,{options:{dataLabels:{enabled:!1},colors:r,stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},series:t,type:"area",height:300})},u=()=>{const t=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}];return e.jsx(a,{options:{plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:4}},colors:r,dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},fill:{opacity:1},tooltip:{y:{formatter:s=>`$${s} thousands`}}},series:t,height:300,type:"bar"})},f=()=>{const t=[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]}];return e.jsx(a,{options:{chart:{stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},colors:r,responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1}},series:t,type:"bar",height:300})},x=()=>{const t=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];return e.jsx(a,{options:{plotOptions:{bar:{horizontal:!0}},colors:r,dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},series:t,type:"bar",height:300})},b=()=>{const t=[{data:[44,55,41,64]},{data:[53,32,33,52]}];return e.jsx(a,{options:{plotOptions:{bar:{horizontal:!0,dataLabels:{position:"top"}}},colors:r,dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[2001,2002,2003,2004]}},series:t,height:300,type:"bar"})},g=()=>e.jsx(a,{options:{colors:r,labels:["Team A","Team B","Team C","Team D","Team E"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[44,55,13,43,22],height:300,type:"pie"}),y=()=>e.jsx(a,{options:{colors:r,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[44,55,41,17,15],height:300,type:"donut"}),o="Charts",N={title:"Charts",desc:"React-ApexCharts is a wrapper component for ApexCharts ready to be integrated into your react.js application to create stunning React Charts."},j=[{mdName:"BasicLine",mdPath:o,title:"Basic Line",desc:"",component:e.jsx(p,{})},{mdName:"DashedLine",mdPath:o,title:"Dashed Line",desc:"",component:e.jsx(l,{})},{mdName:"BasicArea",mdPath:o,title:"Basic Area",desc:"",component:e.jsx(m,{})},{mdName:"SplineArea",mdPath:o,title:"Spline Area",desc:"",component:e.jsx(h,{})},{mdName:"BasicColumn",mdPath:o,title:"Basic Column",desc:"",component:e.jsx(u,{})},{mdName:"StackedColumn",mdPath:o,title:"Stacked Column",desc:"",component:e.jsx(f,{})},{mdName:"BasicBar",mdPath:o,title:"Basic Bar",desc:"",component:e.jsx(x,{})},{mdName:"GroupedBar",mdPath:o,title:"Grouped Bar",desc:"",component:e.jsx(b,{})},{mdName:"SimplePie",mdPath:o,title:"Simple Pie",desc:"",component:e.jsx(g,{})},{mdName:"SimpleDonut",mdPath:o,title:"Simple Donut",desc:"",component:e.jsx(y,{})}],C=[{component:"Charts",api:[{propName:"type",type:"<code>string</code>",default:"<code>'line'</code>",desc:"The chart type which is a mandatory prop to specify"},{propName:"series",type:"<code>Array</code>",default:"-",desc:"The data which you want to display in the chart"},{propName:"width",type:"<code>string</code> | <code>number</code>",default:"<code>'100%'</code>",desc:"Width of the chart"},{propName:"height",type:"<code>string</code> | <code>number</code>",default:"<code>'auto'</code>",desc:"Height of the chart"},{propName:"options",type:"<code>object</code>",default:"<code>{}</code>",desc:"All the optional configuration of the chart goes in this property"}]}],T=()=>e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"mb-4",children:"More Charts Examples?"}),e.jsxs("p",{children:["There are several other charts which can be created by changing a couple of options. The major configuration has to be done in the ",e.jsx("code",{children:"options"})," property of ApexCharts component and rest will fall into places. Refer to:",e.jsx("a",{className:"text-blue-500 hover:underline",href:"https://apexcharts.com/react-chart-demos/",target:"_blank",rel:"noreferrer",children:"https://apexcharts.com/react-chart-demos/"})]})]}),I=()=>e.jsx(n,{header:N,demos:j,api:C,extra:e.jsx(T,{})});export{I as default};
