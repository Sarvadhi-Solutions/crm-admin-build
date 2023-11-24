import{j as e,r as t}from"./index-4675262e.js";import{D as l}from"./DemoLayout-f0d55646.js";import{P as o}from"./Progress-163e7627.js";import{_ as p,L as m,aa as u,ad as x}from"./index.esm-ff144046.js";import{B as n}from"./Button-0b68e0a2.js";import{I as f}from"./index-799960ed.js";import"./AdaptableCard-b129293a.js";import"./Card-1a4ea392.js";import"./Views-96bf4241.js";import"./Affix-815e475f.js";import"./Tooltip-2d93a4c5.js";import"./usePopper-e9b5a625.js";import"./index.esm-2d8103e0.js";import"./index-99abface.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-92a33187.js";import"./index-cbd3e479.js";import"./index-dc5daab9.js";import"./index.esm-c132f852.js";const g=()=>e.jsx("div",{children:e.jsx(o,{percent:30})}),h=()=>e.jsxs("div",{children:[e.jsx(o,{color:"red-500",percent:20,className:"mb-4"}),e.jsx(o,{color:"green-500",percent:30,className:"mb-4"})]}),j=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"mx-6",size:"sm",percent:60}),e.jsx(o,{variant:"circle",percent:40,width:80})]}),v=()=>e.jsxs("div",{className:"md:inline-flex items-center",children:[e.jsx(o,{className:"md:mb-0 md:mr-4 mb-4",variant:"circle",percent:40}),e.jsx(o,{variant:"circle",percent:70,gapDegree:70,gapPosition:"bottom"})]}),y=({percent:r})=>e.jsxs("div",{className:"text-center",children:[e.jsxs("h3",{children:[r,"%"]}),e.jsx("span",{children:"completion"})]}),N=()=>e.jsxs("div",{className:"md:flex items-center",children:[e.jsxs("div",{style:{minWidth:"50%"},className:"md:mb-0 mb-4 mx-6",children:[e.jsx(o,{color:"red-500",percent:60,className:"mb-4",customInfo:e.jsx(p,{className:"text-red-500 text-xl"})}),e.jsx(o,{color:"green-500",percent:100,customInfo:e.jsx(m,{className:"text-emerald-500 text-xl"})})]}),e.jsx(o,{variant:"circle",percent:40,width:150,customInfo:e.jsx(y,{percent:40})})]}),b=()=>{const[r,a]=t.useState(20),i=t.useCallback(()=>{let c=r+10;c>100&&(c=100),a(c)},[r]),d=t.useCallback(()=>{let c=r-10;c<0&&(c=0),a(c)},[r]);return e.jsxs("div",{children:[e.jsxs(f,{size:"sm",children:[e.jsx(n,{icon:e.jsx(u,{}),onClick:d}),e.jsx(n,{icon:e.jsx(x,{}),onClick:i})]}),e.jsxs("div",{className:"mt-4 flex items-center",children:[e.jsx(o,{className:"mx-0 md:mx-4",percent:r}),e.jsx(o,{variant:"circle",percent:r})]})]})},s="Progress",C={title:"Progress",desc:"A Progress loader show the progression of an operation flow in visual way."},P=[{mdName:"ProgressBar",mdPath:s,title:"Progress Bar",desc:"Progress in progress bar was controlled by <code>percent</code> prop.",component:e.jsx(g,{})},{mdName:"Circle",mdPath:s,title:"Circle",desc:"Alternatively, we can display the Progress in circle by setting <code>variant</code> to 'circle'",component:e.jsx(v,{})},{mdName:"Colors",mdPath:s,title:"Colors",desc:"We can apply custom color to the progress bar, available colors option based on tailwind <code>theme.colors</code>.",component:e.jsx(h,{})},{mdName:"Size",mdPath:s,title:"Size",desc:"Adjusting progress size via <code>size</code> prop for line progress or <code>width</code> prop for circle progress.",component:e.jsx(j,{})},{mdName:"CustomInfo",mdPath:s,title:"CustomInfo",desc:"We can insert any custom content via <code>customInfo/code>.",component:e.jsx(N,{})},{mdName:"Dynamic",mdPath:s,title:"Dynamic",desc:"Example of dynamic progress.",component:e.jsx(b,{})}],w=[{component:"Progress",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Progress, available colors option based on tailwind <code>theme.colors</code>"},{propName:"customInfo",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Custom content"},{propName:"gapDegree",type:"<code>number</code>",default:"<code>0</code>",desc:'The gap degree of circle progress (only applicable when variant="circle")'},{propName:"gapPosition",type:"<code>'top'</code> | <code>'right'</code> | <code>'bottom'</code> | <code>'left'</code> ",default:"<code>'top'</code>",desc:'Gap postion of circle progress (only applicable when variant="circle")'},{propName:"percent",type:"<code>number</code>",default:"<code>0</code>",desc:"The current value of progress"},{propName:"showInfo",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to display progress info"},{propName:"size",type:"<code>'sm'</code> | <code>'md'</code>",default:"<code>'md'</code>",desc:'Size of progress bar (only applicable when variant="line")'},{propName:"strokeLinecap",type:"<code>'round'</code> | <code>'square'</code>",default:"<code>'round'</code>",desc:'Style of the progress linecap (only applicable when variant="circle")'},{propName:"strokeWidth",type:"<code>number</code>",default:"<code>6</code>",desc:'Width of the circular progress (only applicable when variant="circle")'},{propName:"variant",type:"<code>'line'</code> | <code>'circle'</code>",default:"<code>'line'</code>",desc:"Progress variants"},{propName:"width",type:"<code>number</code> | <code>string</code>",default:"<code>'line'</code>",desc:'Determine the size of circular progress (only applicable when variant="circle")'}]}],F=()=>e.jsx(l,{header:C,demos:P,api:w});export{F as default};
