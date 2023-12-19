import{j as e,n as p,r as l}from"./index-eaf52e42.js";import{D as m}from"./DemoLayout-9115e4a8.js";import{S as t}from"./index-316ee910.js";import{aQ as x,aR as u,f as j}from"./index.esm-decdb68b.js";import{B as d}from"./Button-fed4171f.js";import"./AdaptableCard-e9f1de59.js";import"./Card-c132ef99.js";import"./Views-58b94d35.js";import"./Affix-f7f5615f.js";import"./Tooltip-6b1d43dc.js";import"./usePopper-c621d6e7.js";import"./index.esm-601da8bc.js";import"./index-6c9c5c4e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-5085ff27.js";import"./index-3be64316.js";import"./index-e6ca51e2.js";import"./index.esm-819ab12a.js";import"./mapCloneElement-97722dc2.js";const h=()=>e.jsx("div",{children:e.jsxs(t,{current:1,children:[e.jsx(t.Item,{}),e.jsx(t.Item,{}),e.jsx(t.Item,{}),e.jsx(t.Item,{})]})}),I=()=>e.jsx("div",{children:e.jsxs(t,{current:1,children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})}),v=()=>e.jsx("div",{children:e.jsxs(t,{vertical:!0,current:1,children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})}),g=()=>e.jsx("div",{className:"mb-6",children:e.jsxs(t,{vertical:!0,current:2,children:[e.jsx(t.Item,{title:"Login",description:"Login to your account"}),e.jsx(t.Item,{title:"Place Order",description:"Start placing an order"}),e.jsx(t.Item,{title:"In Review",description:"We will review the order"}),e.jsx(t.Item,{title:"Approved",description:"Order approved"})]})}),S=()=>e.jsx("div",{children:e.jsxs(t,{current:1,children:[e.jsx(t.Item,{title:"Login",customIcon:e.jsx(x,{})}),e.jsx(t.Item,{title:"Order Placed",customIcon:e.jsx(p,{})}),e.jsx(t.Item,{title:"In Review",customIcon:e.jsx(u,{})}),e.jsx(t.Item,{title:"Approved",customIcon:e.jsx(j,{})})]})}),f=()=>e.jsx("div",{children:e.jsxs(t,{current:1,status:"error",children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})}),b=()=>{const[o,r]=l.useState(0),c=n=>{n<0?r(0):n>3?r(3):r(n)},i=()=>c(o+1),a=()=>c(o-1);return e.jsxs("div",{children:[e.jsxs(t,{current:o,children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]}),e.jsx("div",{className:"mt-6 h-40 bg-gray-50 dark:bg-gray-700 rounded flex items-center justify-center",children:e.jsxs("h6",{children:["Step ",`${o+1}`," content"]})}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(d,{className:"mx-2",disabled:o===0,onClick:a,children:"Previous"}),e.jsx(d,{disabled:o===3,variant:"solid",onClick:i,children:o===3?"Completed":"Next"})]})]})},N=()=>{const[o,r]=l.useState(1),c=i=>{r(i)};return e.jsx("div",{children:e.jsxs(t,{current:o,onChange:i=>c(i),children:[e.jsx(t.Item,{title:"Login"}),e.jsx(t.Item,{title:"Order Placed"}),e.jsx(t.Item,{title:"In Review"}),e.jsx(t.Item,{title:"Approved"})]})})},s="Steps",y={title:"Steps",desc:"Steps component display progress & tasks through a sequence order."},C=[{mdName:"Basic",mdPath:s,title:"Basic",desc:"The default usage of Steps component.",component:e.jsx(h,{})},{mdName:"Title",mdPath:s,title:"Title",desc:"Example Steps with title.",component:e.jsx(I,{})},{mdName:"Vertical",mdPath:s,title:"Vertical",desc:"Steps display in horizontal by default, but it be vertical using <code>vertical</code> props.",component:e.jsx(v,{})},{mdName:"Description",mdPath:s,title:"Description",desc:"Steps can have description, but it only available for vertical layout.",component:e.jsx(g,{})},{mdName:"CustomIcon",mdPath:s,title:"Custom Icon",desc:"Steps label can be replaced by icons.",component:e.jsx(S,{})},{mdName:"Error",mdPath:s,title:"Error",desc:"Set the 'error' to <code>status</code> prop to indicate that step is in error state.",component:e.jsx(f,{})},{mdName:"Controlled",mdPath:s,title:"Controlled steps",desc:"We can make Steps dynamic by controlling the <code>current</code> prop.",component:e.jsx(b,{})},{mdName:"Clickable",mdPath:s,title:"Clickable",desc:"Setting <code>onChange</code> to make Steps clickable.",component:e.jsx(N,{})}],k=[{component:"Steps",api:[{propName:"current",type:"<code>number</code>",default:"<code>0</code>",desc:"The current step, counting from 0"},{propName:"onChange",type:"<code>(index: number) => void</code>",default:"-",desc:"Callback when Steps is changed"},{propName:"status",type:"<code>'complete'</code> | <code>'pending'</code> | <code>'in-progress'</code> | <code>'error'</code>",default:"<code>'in-progress'</code>",desc:"Status of current step"},{propName:"vertical",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to display Steps in vertical"}]},{component:"Steps.Item",api:[{propName:"customIcon",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Custom element for Step label"},{propName:"description",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Step description, only available when Step is vertical"},{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Step title"}]}],J=()=>e.jsx(m,{header:y,demos:C,api:k});export{J as default};
