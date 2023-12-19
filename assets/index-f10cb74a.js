import{j as e,r as s}from"./index-e9e80fad.js";import{D as r}from"./DemoLayout-36fd0d4f.js";import{C as o}from"./index-7e05bd38.js";import"./AdaptableCard-4f414664.js";import"./Card-14c7d5e0.js";import"./Views-6a6f19fc.js";import"./Affix-7fde350c.js";import"./Button-227d4871.js";import"./Tooltip-0ed58b52.js";import"./usePopper-279cd1bc.js";import"./index.esm-a4c1c24f.js";import"./index-bfcd6c72.js";import"./index.esm-0e189e80.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-0e64d439.js";import"./index-8b9a462c.js";import"./index-a7d59cb4.js";import"./index.esm-778bb6ce.js";import"./cloneDeep-ccfbe55a.js";import"./_MapCache-49bf6e31.js";import"./_getPrototype-64e64018.js";import"./_baseIsEqual-934e8574.js";import"./get-e7c8697a.js";import"./toString-d452c1eb.js";const n=()=>{const c=(l,t)=>{console.log(l,t)};return e.jsx("div",{children:e.jsx(o,{defaultChecked:!0,onChange:c,children:"Checkbox"})})},p=()=>{const[c,l]=s.useState(["Selection A"]),t=(a,i)=>{console.log("Checkbox change",a,i),l(a)};return e.jsx("div",{children:e.jsxs(o.Group,{value:c,onChange:t,children:[e.jsx(o,{value:"Selection A",children:"Selection A "}),e.jsx(o,{value:"Selection B",children:"Selection B "}),e.jsx(o,{value:"Selection C",children:"Selection C "})]})})},h=()=>{const[c]=s.useState(["A"]),l=[{value:"A",label:"Selection A",disabled:!0},{value:"B",label:"Selection B",disabled:!0},{value:"C",label:"Selection C",disabled:!1}];return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{disabled:!0,children:"Disabled"}),e.jsx(o,{defaultChecked:!0,disabled:!0,children:"Checked Disabled"})]}),e.jsx(o.Group,{value:c,children:l.map(t=>e.jsx(o,{value:t.value,disabled:t.disabled,children:t.label},t.label))})]})},u=()=>{const[c]=s.useState(["Selection A"]);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col mb-5",children:[e.jsx(o,{className:"mb-2",children:"Checkbox 1"}),e.jsx(o,{children:"Checkbox 2"})]}),e.jsxs(o.Group,{vertical:!0,value:c,children:[e.jsx(o,{value:"Selection A",children:"Selection A "}),e.jsx(o,{value:"Selection B",children:"Selection B "}),e.jsx(o,{value:"Selection C",children:"Selection C "})]})]})},m=()=>{const[c]=s.useState(["A","B","C"]);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-5",children:e.jsx(o,{checked:!0,color:"green-500",children:"Checkbox 1"})}),e.jsxs(o.Group,{color:"yellow-500",value:c,children:[e.jsxs(o,{color:"blue-600",value:"A",children:["Selection A"," "]}),e.jsx(o,{value:"B",children:"Selection B "}),e.jsx(o,{value:"C",children:"Selection C "})]})]})},d="Checkbox",b={title:"Checkbox",desc:"Checkboxes let users select one or more options from a choice of list."},x=[{mdName:"Default",mdPath:d,title:"Default",desc:"A simple checkbox example.",component:e.jsx(n,{})},{mdName:"Group",mdPath:d,title:"Group",desc:"<code>Checkbox.Group</code> help to manage state of checkboxes in a list.",component:e.jsx(p,{})},{mdName:"Disabled",mdPath:d,title:"Disabled",desc:"Checkbox allow to <code>disabled</code> to prevent user execute click event.",component:e.jsx(h,{})},{mdName:"Vertical",mdPath:d,title:"Vertical",desc:"Checkbox list can display in vertical too.",component:e.jsx(u,{})},{mdName:"Color",mdPath:d,title:"Color",desc:"Checkbox & group able to apply custom color via <code>color</code> prop.",component:e.jsx(m,{})}],C=[{component:"Checkbox",api:[{propName:"checked",type:"<code>boolean</code>",default:"-",desc:"Whether the Checkbox is checked"},{propName:"defaultChecked",type:"<code>boolean</code>",default:"-",desc:"Whether the Checkbox initial state is checked"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether the Checkbox is disabled"},{propName:"value",type:"<code>string</code> | <code>number</code>",default:"-",desc:"The value of the selected state (only valid when Checkbox.Group or the binding object type is array)"},{propName:"labelRef",type:"<code>string</code>",default:"-",desc:"Ref of Checkbox label element"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Checkbox, available colors option based on tailwind <code>theme.colors</code>"},{propName:"onChange",type:"<code>(checked: boolean, e: MouseEvent) => void</code>",default:"-",desc:"Callback when Checkbox value is changed"},{propName:"name",type:"<code>string</code>",default:"-",desc:"The name of the Checkbox input field"}]},{component:"Checkbox.Group",api:[{propName:"vertical",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display list of checkbox in vertical"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for all checkboxes in the group, available colors option based on tailwind <code>theme.colors</code>"},{propName:"value",type:"<code>string[]</code> | <code>number[]</code>",default:"-",desc:"Specify selected value of checkboxes"},{propName:"onChange",type:"<code>(values: string[] | number[], e: MouseEvent) => void</code>",default:"-",desc:"Callback when value is changed"},{propName:"name",type:"<code>string</code>",default:"-",desc:"Name of all checkboxes input field under the group"}]}],z=()=>e.jsx(r,{header:b,demos:x,api:C});export{z as default};
