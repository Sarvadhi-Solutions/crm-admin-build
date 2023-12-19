import{j as e,y as p,r as l}from"./index-2a02f09f.js";import{D as m}from"./DemoLayout-62d26969.js";import{S as t}from"./index-94a50ac5.js";import{bc as x,bd as u,D as j}from"./index.esm-c61f0406.js";import{B as d}from"./Button-3d6c325f.js";import"./AdaptableCard-260ffff4.js";import"./Card-de52f0bd.js";import"./Views-597fd265.js";import"./Affix-f01dbede.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./SyntaxHighlighter-3e4bb9d6.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-6bbe4810.js";import"./DemoComponentApi-c288533a.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./mapCloneElement-80af996d.js";import"./context-ccc0a902.js";const h=()=>e.jsx("div",{children:e.jsxs(t,{current:1,children:[e.jsx(t.Item,{}),e.jsx(t.Item,{}),e.jsx(t.Item,{}),e.jsx(t.Item,{})]})}),I=()=>e.jsx("div",{children:e.jsxs(t,{current:1,children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})}),v=()=>e.jsx("div",{children:e.jsxs(t,{vertical:!0,current:1,children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})}),g=()=>e.jsx("div",{className:"mb-6",children:e.jsxs(t,{vertical:!0,current:2,children:[e.jsx(t.Item,{title:"Login",description:"Login to your account"}),e.jsx(t.Item,{title:"Place Order",description:"Start placing an order"}),e.jsx(t.Item,{title:"In Review",description:"We will review the order"}),e.jsx(t.Item,{title:"Approved",description:"Order approved"})]})}),S=()=>e.jsx("div",{children:e.jsxs(t,{current:1,children:[e.jsx(t.Item,{title:"Login",customIcon:e.jsx(x,{})}),e.jsx(t.Item,{title:"Order Placed",customIcon:e.jsx(p,{})}),e.jsx(t.Item,{title:"In Review",customIcon:e.jsx(u,{})}),e.jsx(t.Item,{title:"Approved",customIcon:e.jsx(j,{})})]})}),b=()=>e.jsx("div",{children:e.jsxs(t,{current:1,status:"error",children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})}),f=()=>{const[o,r]=l.useState(0),c=n=>{n<0?r(0):n>3?r(3):r(n)},i=()=>c(o+1),a=()=>c(o-1);return e.jsxs("div",{children:[e.jsxs(t,{current:o,children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]}),e.jsx("div",{className:"mt-6 h-40 bg-gray-50 dark:bg-gray-700 rounded flex items-center justify-center",children:e.jsxs("h6",{children:["Step ",`${o+1}`," content"]})}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(d,{className:"mx-2",disabled:o===0,onClick:a,children:"Previous"}),e.jsx(d,{disabled:o===3,variant:"solid",onClick:i,children:o===3?"Completed":"Next"})]})]})},N=()=>{const[o,r]=l.useState(1),c=i=>{r(i)};return e.jsx("div",{children:e.jsxs(t,{current:o,onChange:i=>c(i),children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})})},s="Steps",y={title:"Steps",desc:"Steps component display progress & tasks through a sequence order."},C=[{mdName:"Basic",mdPath:s,title:"Basic",desc:"The default usage of Steps component.",component:e.jsx(h,{})},{mdName:"Title",mdPath:s,title:"Title",desc:"Example Steps with title.",component:e.jsx(I,{})},{mdName:"Vertical",mdPath:s,title:"Vertical",desc:"Steps display in horizontal by default, but it be vertical using <code>vertical</code> props.",component:e.jsx(v,{})},{mdName:"Description",mdPath:s,title:"Description",desc:"Steps can have description, but it only available for vertical layout.",component:e.jsx(g,{})},{mdName:"CustomIcon",mdPath:s,title:"Custom Icon",desc:"Steps label can be replaced by icons.",component:e.jsx(S,{})},{mdName:"Error",mdPath:s,title:"Error",desc:"Set the 'error' to <code>status</code> prop to indicate that step is in error state.",component:e.jsx(b,{})},{mdName:"Controlled",mdPath:s,title:"Controlled steps",desc:"We can make Steps dynamic by controlling the <code>current</code> prop.",component:e.jsx(f,{})},{mdName:"Clickable",mdPath:s,title:"Clickable",desc:"Setting <code>onChange</code> to make Steps clickable.",component:e.jsx(N,{})}],k=[{component:"Steps",api:[{propName:"current",type:"<code>number</code>",default:"<code>0</code>",desc:"The current step, counting from 0"},{propName:"onChange",type:"<code>(index: number) => void</code>",default:"-",desc:"Callback when Steps is changed"},{propName:"status",type:"<code>'complete'</code> | <code>'pending'</code> | <code>'in-progress'</code> | <code>'error'</code>",default:"<code>'in-progress'</code>",desc:"Status of current step"},{propName:"vertical",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to display Steps in vertical"}]},{component:"Steps.Item",api:[{propName:"customIcon",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Custom element for Step label"},{propName:"description",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Step description, only available when Step is vertical"},{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Step title"}]}],U=()=>e.jsx(m,{header:y,demos:C,api:k});export{U as default};
