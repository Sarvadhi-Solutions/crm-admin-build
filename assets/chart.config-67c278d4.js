import{C as t}from"./chart.constant-f8825acf.js";const r={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...t],dataLabels:{enabled:!1},stroke:{width:2.5,curve:"smooth",lineCap:"round"},legend:{itemMargin:{vertical:10},tooltipHoverFormatter:function(a,e){return a+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]}},l={...r},n={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30px",borderRadius:2}},colors:[...t],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{itemMargin:{vertical:10},tooltipHoverFormatter:function(a,e){return a+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:a=>`${a}`}}},i={colors:[...t],plotOptions:{pie:{donut:{labels:{show:!0,total:{show:!0,showAlways:!0,label:"",formatter:function(a){return a.globals.seriesTotals.reduce((e,o)=>e+o,0)}}},size:"85%"}}},stroke:{colors:["transparent"]},labels:[],dataLabels:{enabled:!1},legend:{show:!1}};export{r as a,i as b,l as c,n as d};
