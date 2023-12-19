import{j as e,r as t}from"./index-dddc73b4.js";import{D as l}from"./DemoLayout-47813f87.js";import{P as o}from"./Progress-460bd8d4.js";import{$ as p,M as m,ab as u,ae as x}from"./index.esm-d67f1fea.js";import{B as n}from"./Button-fccc7ec9.js";import{I as f}from"./index-5e738818.js";import"./AdaptableCard-ce723550.js";import"./Card-7410c075.js";import"./Views-ae1e9425.js";import"./Affix-c3e8ab4e.js";import"./Tooltip-8ca67ef0.js";import"./usePopper-12f3dc15.js";import"./index.esm-604e49a5.js";import"./index-81597033.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-e88cb349.js";import"./index-96832776.js";import"./index-d1777bcb.js";import"./index.esm-9430486c.js";const g=()=>e.jsx("div",{children:e.jsx(o,{percent:30})}),h=()=>e.jsxs("div",{children:[e.jsx(o,{color:"red-500",percent:20,className:"mb-4"}),e.jsx(o,{color:"green-500",percent:30,className:"mb-4"})]}),j=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mx-6",size:"sm",percent:60}),e.jsx(o,{variant:"circle",percent:40,width:80})]}),b=()=>e.jsxs("div",{className:"md:inline-flex items-center",children:[e.jsx(o,{className:"md:mb-0 md:mr-4 mb-4",variant:"circle",percent:40}),e.jsx(o,{variant:"circle",percent:70,gapDegree:70,gapPosition:"bottom"})]}),v=({percent:r})=>e.jsxs("div",{className:"text-center",children:[e.jsxs("h3",{children:[r,"%"]}),e.jsx("span",{children:"completion"})]}),y=()=>e.jsxs("div",{className:"md:flex items-center",children:[e.jsxs("div",{style:{minWidth:"50%"},className:"md:mb-0 mb-4 mx-6",children:[e.jsx(o,{color:"red-500",percent:60,className:"mb-4",customInfo:e.jsx(p,{className:"text-red-500 text-xl"})}),e.jsx(o,{color:"green-500",percent:100,customInfo:e.jsx(m,{className:"text-emerald-500 text-xl"})})]}),e.jsx(o,{variant:"circle",percent:40,width:150,customInfo:e.jsx(v,{percent:40})})]}),N=()=>{const[r,a]=t.useState(20),i=t.useCallback(()=>{let c=r+10;c>100&&(c=100),a(c)},[r]),d=t.useCallback(()=>{let c=r-10;c<0&&(c=0),a(c)},[r]);return e.jsxs("div",{children:[e.jsxs(f,{size:"sm",children:[e.jsx(n,{icon:e.jsx(u,{}),onClick:d}),e.jsx(n,{icon:e.jsx(x,{}),onClick:i})]}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx(o,{className:"mx-0 md:mx-4",percent:r}),e.jsx(o,{variant:"circle",percent:r})]})]})},s="Progress",C={title:"Progress",desc:"A Progress loader show the progression of an operation flow in visual way."},P=[{mdName:"ProgressBar",mdPath:s,title:"Progress Bar",desc:"Progress in progress bar was controlled by <code>percent</code> prop.",component:e.jsx(g,{})},{mdName:"Circle",mdPath:s,title:"Circle",desc:"Alternatively, we can display the Progress in circle by setting <code>variant</code> to 'circle'",component:e.jsx(b,{})},{mdName:"Colors",mdPath:s,title:"Colors",desc:"We can apply custom color to the progress bar, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(h,{})},{mdName:"Size",mdPath:s,title:"Size",desc:"Adjusting progress size via <code>size</code> prop for line progress or <code>width</code> prop for circle progress.",component:e.jsx(j,{})},{mdName:"CustomInfo",mdPath:s,title:"CustomInfo",desc:"We can insert any custom content via <code>customInfo/code>.",component:e.jsx(y,{})},{mdName:"Dynamic",mdPath:s,title:"Dynamic",desc:"Example of dynamic progress.",component:e.jsx(N,{})}],w=[{component:"Progress",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Progress, available colors option based on tailwind <code>theme.colors</code>"},{propName:"customInfo",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Custom content"},{propName:"gapDegree",type:"<code>number</code>",default:"<code>0</code>",desc:'The gap degree of circle progress (only applicable when variant="circle")'},{propName:"gapPosition",type:"<code>'top'</code> | <code>'right'</code> | <code>'bottom'</code> | <code>'left'</code> ",default:"<code>'top'</code>",desc:'Gap postion of circle progress (only applicable when variant="circle")'},{propName:"percent",type:"<code>number</code>",default:"<code>0</code>",desc:"The current value of progress"},{propName:"showInfo",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to display progress info"},{propName:"size",type:"<code>'sm'</code> | <code>'md'</code>",default:"<code>'md'</code>",desc:'Size of progress bar (only applicable when variant="line")'},{propName:"strokeLinecap",type:"<code>'round'</code> | <code>'square'</code>",default:"<code>'round'</code>",desc:'Style of the progress linecap (only applicable when variant="circle")'},{propName:"strokeWidth",type:"<code>number</code>",default:"<code>6</code>",desc:'Width of the circular progress (only applicable when variant="circle")'},{propName:"variant",type:"<code>'line'</code> | <code>'circle'</code>",default:"<code>'line'</code>",desc:"Progress variants"},{propName:"width",type:"<code>number</code> | <code>string</code>",default:"<code>'line'</code>",desc:'Determine the size of circular progress (only applicable when variant="circle")'}]}],J=()=>e.jsx(l,{header:C,demos:P,api:w});export{J as default};
