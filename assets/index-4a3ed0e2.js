import{j as e,r as s}from"./index-847ef4f8.js";import{D as r}from"./DemoLayout-4664cde9.js";import{C as o}from"./index-9702d4b4.js";import"./AdaptableCard-f7b8f466.js";import"./Card-7a58c886.js";import"./Views-5cd95793.js";import"./Affix-af3b46dd.js";import"./Button-b74cc268.js";import"./Tooltip-a237a4da.js";import"./usePopper-efd79584.js";import"./index.esm-9468e820.js";import"./index-5449d842.js";import"./index.esm-487b51fd.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-621896fa.js";import"./index-b8480af3.js";import"./index-c1eb621b.js";import"./index.esm-f7cc78ab.js";import"./cloneDeep-f66e195c.js";import"./_MapCache-9e036a1f.js";import"./_getPrototype-c37a8692.js";import"./_baseIsEqual-24c667bd.js";import"./get-263abd7f.js";import"./toString-271e4441.js";const n=()=>{const c=(l,t)=>{console.log(l,t)};return e.jsx("div",{children:e.jsx(o,{defaultChecked:!0,onChange:c,children:"Checkbox"})})},p=()=>{const[c,l]=s.useState(["Selection A"]),t=(a,i)=>{console.log("Checkbox change",a,i),l(a)};return e.jsx("div",{children:e.jsxs(o.Group,{value:c,onChange:t,children:[e.jsx(o,{value:"Selection A",children:"Selection A "}),e.jsx(o,{value:"Selection B",children:"Selection B "}),e.jsx(o,{value:"Selection C",children:"Selection C "})]})})},h=()=>{const[c]=s.useState(["A"]),l=[{value:"A",label:"Selection A",disabled:!0},{value:"B",label:"Selection B",disabled:!0},{value:"C",label:"Selection C",disabled:!1}];return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{disabled:!0,children:"Disabled"}),e.jsx(o,{defaultChecked:!0,disabled:!0,children:"Checked Disabled"})]}),e.jsx(o.Group,{value:c,children:l.map(t=>e.jsx(o,{value:t.value,disabled:t.disabled,children:t.label},t.label))})]})},u=()=>{const[c]=s.useState(["Selection A"]);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col mb-5",children:[e.jsx(o,{className:"mb-2",children:"Checkbox 1"}),e.jsx(o,{children:"Checkbox 2"})]}),e.jsxs(o.Group,{vertical:!0,value:c,children:[e.jsx(o,{value:"Selection A",children:"Selection A "}),e.jsx(o,{value:"Selection B",children:"Selection B "}),e.jsx(o,{value:"Selection C",children:"Selection C "})]})]})},m=()=>{const[c]=s.useState(["A","B","C"]);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-5",children:e.jsx(o,{checked:!0,color:"green-500",children:"Checkbox 1"})}),e.jsxs(o.Group,{color:"yellow-500",value:c,children:[e.jsxs(o,{color:"blue-600",value:"A",children:["Selection A"," "]}),e.jsx(o,{value:"B",children:"Selection B "}),e.jsx(o,{value:"C",children:"Selection C "})]})]})},d="Checkbox",b={title:"Checkbox",desc:"Checkboxes let users select one or more options from a choice of list."},x=[{mdName:"Default",mdPath:d,title:"Default",desc:"A simple checkbox example.",component:e.jsx(n,{})},{mdName:"Group",mdPath:d,title:"Group",desc:"<code>Checkbox.Group</code> help to manage state of checkboxes in a list.",component:e.jsx(p,{})},{mdName:"Disabled",mdPath:d,title:"Disabled",desc:"Checkbox allow to <code>disabled</code> to prevent user execute click event.",component:e.jsx(h,{})},{mdName:"Vertical",mdPath:d,title:"Vertical",desc:"Checkbox list can display in vertical too.",component:e.jsx(u,{})},{mdName:"Color",mdPath:d,title:"Color",desc:"Checkbox & group able to apply custom color via <code>color</code> prop.",component:e.jsx(m,{})}],C=[{component:"Checkbox",api:[{propName:"checked",type:"<code>boolean</code>",default:"-",desc:"Whether the Checkbox is checked"},{propName:"defaultChecked",type:"<code>boolean</code>",default:"-",desc:"Whether the Checkbox initial state is checked"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether the Checkbox is disabled"},{propName:"value",type:"<code>string</code> | <code>number</code>",default:"-",desc:"The value of the selected state (only valid when Checkbox.Group or the binding object type is array)"},{propName:"labelRef",type:"<code>string</code>",default:"-",desc:"Ref of Checkbox label element"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Checkbox, available colors option based on tailwind <code>theme.colors</code>"},{propName:"onChange",type:"<code>(checked: boolean, e: MouseEvent) => void</code>",default:"-",desc:"Callback when Checkbox value is changed"},{propName:"name",type:"<code>string</code>",default:"-",desc:"The name of the Checkbox input field"}]},{component:"Checkbox.Group",api:[{propName:"vertical",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display list of checkbox in vertical"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for all checkboxes in the group, available colors option based on tailwind <code>theme.colors</code>"},{propName:"value",type:"<code>string[]</code> | <code>number[]</code>",default:"-",desc:"Specify selected value of checkboxes"},{propName:"onChange",type:"<code>(values: string[] | number[], e: MouseEvent) => void</code>",default:"-",desc:"Callback when value is changed"},{propName:"name",type:"<code>string</code>",default:"-",desc:"Name of all checkboxes input field under the group"}]}],z=()=>e.jsx(r,{header:b,demos:x,api:C});export{z as default};
