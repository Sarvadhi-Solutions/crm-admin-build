import{j as e,r as c}from"./index-7b0349c6.js";import{D as i}from"./DemoLayout-69f1d324.js";import{R as o}from"./index-9b4971f3.js";import"./AdaptableCard-d9b587b8.js";import"./Card-a848a8eb.js";import"./Views-c6671a9d.js";import"./Affix-eda4a3b4.js";import"./Button-9fa3d2fc.js";import"./Tooltip-a61fe545.js";import"./usePopper-ea1a26c2.js";import"./index.esm-8b94bd99.js";import"./index-ba238736.js";import"./index.esm-70dc7df8.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./index-0a38317c.js";import"./index-0df82d35.js";import"./index.esm-b503a71c.js";const s=()=>e.jsxs("div",{children:[e.jsx(o,{className:"mr-4",name:"simpleRadioExample",children:"Radio"}),e.jsx(o,{defaultChecked:!0,name:"simpleRadioExample",children:"Checked Radio"})]}),n=()=>{const[d,l]=c.useState("Banana"),r=t=>{l(t)};return e.jsx("div",{children:e.jsxs(o.Group,{value:d,onChange:r,children:[e.jsx(o,{value:"Apple",children:"Apple"}),e.jsx(o,{value:"Banana",children:"Banana"}),e.jsx(o,{value:"Cherry",children:"Cherry"})]})})},p=()=>e.jsxs("div",{children:[e.jsx(o,{disabled:!0,className:"mr-4",children:"Disabled Radio"}),e.jsx(o,{disabled:!0,checked:!0,children:"Disabled Checked Radio"}),e.jsx("div",{className:"mt-4",children:e.jsxs(o.Group,{disabled:!0,value:"Apple",children:[e.jsx(o,{value:"Apple",children:"Apple"}),e.jsx(o,{value:"Banana",children:"Banana"}),e.jsx(o,{value:"Cherry",children:"Cherry"})]})})]}),m=()=>{const[d,l]=c.useState("Banana"),r=t=>{l(t)};return e.jsx("div",{children:e.jsx("div",{className:"mt-4",children:e.jsxs(o.Group,{vertical:!0,value:d,onChange:r,children:[e.jsx(o,{value:"Apple",children:"Apple"}),e.jsx(o,{value:"Banana",children:"Banana"}),e.jsx(o,{value:"Cherry",children:"Cherry"})]})})})},u=()=>e.jsxs("div",{children:[e.jsx(o,{defaultChecked:!0,color:"green-500",children:"Radio"}),e.jsx("div",{className:"mt-4",children:e.jsxs(o.Group,{color:"yellow-500",value:"Apple",name:"radioColorGroup",children:[e.jsx(o,{color:"blue-600",value:"Apple",children:"Apple"}),e.jsx(o,{value:"Banana",children:"Banana"}),e.jsx(o,{value:"Cherry",children:"Cherry"})]})})]}),a="Radio",h={title:"Radio",desc:"Radios let users choose a single option in a series of options."},v=[{mdName:"Simple",mdPath:a,title:"Simple",desc:" Simple Radio example.",component:e.jsx(s,{})},{mdName:"Group",mdPath:a,title:"Group",desc:"Controlled radio group example",component:e.jsx(n,{})},{mdName:"Disabled",mdPath:a,title:"Disabled",desc:"<code>Radio</code> & <code>Radio.Group</code> allow to <code>disabled</code> to prevent user execute click event.",component:e.jsx(p,{})},{mdName:"Vertical",mdPath:a,title:"Vertical",desc:"Radio list can display in vertical.",component:e.jsx(m,{})},{mdName:"Color",mdPath:a,title:"Color",desc:"Radio & group able to apply custom color via <code>color</code> prop.",component:e.jsx(u,{})}],x=[{component:"Radio",api:[{propName:"checked",type:"<code>boolean</code>",default:"-",desc:"Whether the Radio is checked"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Radio, available colors option based on tailwind <code>theme.colors</code>"},{propName:"defaultChecked",type:"<code>boolean</code>",default:"-",desc:"Whether the Radio initial state is checked"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether the Radio is disabled"},{propName:"labelRef",type:"<code>string</code>",default:"-",desc:"Ref of Radio label element"},{propName:"name",type:"<code>string</code>",default:"-",desc:"The name of the Radio input field"},{propName:"onChange",type:"<code>(value: any, e: MouseEvent) => void</code>",default:"-",desc:"Callback when Radio value is changed"},{propName:"value",type:"<code>any</code>",default:"-",desc:"Value of Radio"},{propName:"vertical",type:"<code>boolean</code>",default:"-",desc:"Display Radio in vertical"}]},{component:"Radio.Group",api:[{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for all radio in the group, available colors option based on tailwind <code>theme.colors</code>"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disable all radios"},{propName:"name",type:"<code>string</code>",default:"-",desc:"Name of radios under radio group"},{propName:"radioGutter",type:"<code>number</code>",default:"-",desc:"Gutter between radios"},{propName:"onChange",type:"<code>(values: any, e: MouseEvent) => void</code>",default:"-",desc:"Callback when value is changed"},{propName:"value",type:"<code>any</code>",default:"-",desc:"Specify selected value of radios"},{propName:"vertical",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display list of radios in vertical"}]}],M=()=>e.jsx(i,{header:h,demos:v,api:x});export{M as default};
