import{j as t}from"./index-5b083722.js";import{D as i}from"./DemoLayout-c496ff20.js";import{C as s}from"./CalendarView-fa538d8a.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./SyntaxHighlighter-efa92768.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-c682b4c7.js";import"./DemoComponentApi-8e0ebe63.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./Badge-3cabc902.js";const p=()=>{function e(o){const a=new Date,n=a.getFullYear().toString();let r=(a.getMonth()+1).toString();return r.length===1&&(r="0"+r),o.replace("YEAR",n).replace("MONTH",r)}const l=[{id:"0",title:"All Day Event",start:e("YEAR-MONTH-01"),eventColor:"orange"},{id:"1",title:"Long Event",start:e("YEAR-MONTH-07"),end:e("YEAR-MONTH-10"),eventColor:"red"},{id:"2",groupId:"999",title:"Repeating Event",start:e("YEAR-MONTH-09T16:00:00+00:00"),eventColor:"blue"},{id:"3",groupId:"999",title:"Repeating Event",start:e("YEAR-MONTH-16T16:00:00+00:00"),eventColor:"blue"},{id:"4",title:"Birthday Party",start:e("YEAR-MONTH-19T07:00:00+00:00"),eventColor:"purple"},{id:"5",title:"Meeting",start:e("YEAR-MONTH-18T14:30:00+00:00"),eventColor:"blue"},{id:"6",title:"Dinner",start:e("YEAR-MONTH-18T20:00:00+00:00"),eventColor:"emerald"}];return t.jsx(s,{editable:!0,selectable:!0,events:l,eventClick:o=>{console.log("onEventClick",o)},select:o=>{console.log("onCellSelect",o)},eventDrop:o=>{console.log("onEventChange",o)}})},d="CalendarViewDoc",c={title:"CalendarView",desc:'CalenderView component is a wrapper of <a class="text-indigo-600 underline" href="https://fullcalendar.io/docs/react" target="_blank">FullCalendar</a>.'},m=[{mdName:"Example",mdPath:d,title:"Example",desc:'Basically you can apply all the props that <a class="text-indigo-600 underline" href="https://fullcalendar.io/docs#toc" target="_blank">FullCalendar</a> provides. You can add <code>eventColor</code> property to <code>event</code> meta to define the event color.',component:t.jsx(p,{})}],h=[{component:"CalendarView",api:[{propName:"wrapperClass",type:"<code>string</code>",default:"-",desc:"Extra class add to the wrapper"}]},{component:"Extra properties for event prop",api:[{propName:"eventColors ",type:"<code>(colors:EventColors) => EventColors</code>",default:"-",desc:"A callback for redefine the event color list"}]}],u=t.jsxs("div",{className:"demo-api-table mb-12",children:[t.jsx("h4",{className:"mb-5",children:"Dependencies"}),t.jsx("h6",{id:"react-syntax-highlighter-api",className:"mb-3",children:"Fullcalendar"}),t.jsxs("p",{children:["All fullcalendar props can be applied on this component, refer"," ",t.jsx("a",{className:"underline text-indigo-600",href:"https://fullcalendar.io/docs/react#props",target:"_blank",rel:"noreferrer",children:"official docs"})," ","for the complete api list."," "]})]}),P=()=>t.jsx(i,{innerFrame:!1,header:c,demos:m,api:h,mdPrefixPath:"shared",extra:u});export{P as default};
