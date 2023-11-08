import{j as e,p as a,r as d}from"./index-afeb99dd.js";import{D as p}from"./DemoLayout-41454a20.js";import{T as o}from"./index-53e11fec.js";import{a4 as l,aJ as r}from"./index.esm-f4f10cf9.js";import"./AdaptableCard-01cd8827.js";import"./Card-a25bc86a.js";import"./Views-f7a9b898.js";import"./Affix-53b95996.js";import"./Button-5e9321cd.js";import"./Tooltip-46e989ae.js";import"./usePopper-996565a6.js";import"./index.esm-44e5e467.js";import"./index-07932842.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-b3b9a0e8.js";import"./index-106ba347.js";import"./index-45766b4b.js";import"./index.esm-a56f1c0a.js";import"./TimeInput-a38fa8f0.js";import"./useUniqueId-6aef0ec3.js";import"./toString-79dd21b9.js";import"./useMergeRef-788c4cb0.js";import"./useDidUpdate-f2162ffc.js";import"./CloseButton-217fbce9.js";import"./Input-fe5fc582.js";import"./isNil-e2aeddd7.js";import"./get-a5b2ed65.js";import"./_MapCache-d7aaf9c0.js";const m=()=>e.jsx(o,{}),u=()=>e.jsx(o.TimeInputRange,{clearable:!0,defaultValue:[new Date,a(new Date).add(60,"minutes").toDate()]}),{TimeInputRange:f}=o,x=()=>{const[c,s]=d.useState(new Date),[i,n]=d.useState([new Date,a(new Date).add(60,"minutes").toDate()]);return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{value:c,onChange:s}),e.jsx(f,{value:i,onChange:n})]})},g=()=>e.jsx(o,{showSeconds:!0,defaultValue:new Date}),N=()=>e.jsx(o,{format:"12",defaultValue:new Date}),h=()=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{size:"sm"}),e.jsx(o,{}),e.jsx(o,{size:"lg"})]}),y=()=>e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(o,{disabled:!0})}),T=()=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{prefix:e.jsx(l,{className:"text-lg"}),suffix:null}),e.jsx(o,{suffix:e.jsx(r,{className:"text-lg"})})]}),I=()=>e.jsx(o,{invalid:!0}),t="TimeInput",R={title:"TimeInput",desc:"An input field alllow user enter specify time."},b=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic example of TimeInput.",component:e.jsx(m,{})},{mdName:"TimeRangeInput",mdPath:t,title:"Time range input",desc:"Basic example for TimeInputRange.",component:e.jsx(u,{})},{mdName:"Controlled",mdPath:t,title:"Controlled",desc:"Controlled usage.",component:e.jsx(x,{})},{mdName:"Seconds",mdPath:t,title:"Display seconds",desc:"We can also enable seconds for input.",component:e.jsx(g,{})},{mdName:"AmPm",mdPath:t,title:"Display AM or PM",desc:"Setting <code>format</code> prop to <code>'12'</code> to change time to 12 hours format",component:e.jsx(N,{})},{mdName:"Sizes",mdPath:t,title:"Sizes",desc:"There's three sizes of option for TimeInput.",component:e.jsx(h,{})},{mdName:"Disabled",mdPath:t,title:"Disabled",desc:"Disabled TimeInput.",component:e.jsx(y,{})},{mdName:"Affix",mdPath:t,title:"Affix",desc:"TimeInput can have <code>suffix</code> or <code>prefix</code> content inside.",component:e.jsx(T,{})},{mdName:"Invalid",mdPath:t,title:"Invalid state",desc:"Display TimeInput as invalid status when <code>invalid</code> prop is set to true.",component:e.jsx(I,{})}],j=[{component:"TimeInput",api:[{propName:"amLabel",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Display string for AM"},{propName:"amPmPlaceholder",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Placeholder for AM/PM field"},{propName:"clearable",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether allow to clear value"},{propName:"defaultValue",type:"<code>Date</code>",default:"-",desc:"Default value of TimeInput (use value instead if it is controlled)"},{propName:"disabled",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether TimeInput is disabled"},{propName:"format",type:"<code>'12'</code> | <code>'24'</code>",default:"<code>'24'</code>",desc:"Determine time format"},{propName:"invalid",type:"<code>boolean</code>",default:"-",desc:"Whether the TimeInput is invalid status"},{propName:"nextRef",type:"<code>RefObject</code>",default:"-",desc:"Ref to focus after final TimeInput field, can be used by TimeInputRange"},{propName:"onChange",type:"<code>(value: Date) => void</code>",default:"-",desc:"Callback when TimeInput value changed"},{propName:"pmLabel",type:"<code>'string'</code>",default:"<code>'pm'</code>",desc:"Display string for PM"},{propName:"prefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside TimeInput"},{propName:"showSeconds",type:"<code>boolean</code>",default:"-",desc:"Whether display seconds input field"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"TimeInput size"},{propName:"suffix",type:"<code>string</code> | <code>ReactNode</code>",default:"<code>ReactNode</code>",desc:"Render a suffix content inside TimeInput"},{propName:"timeFieldPlaceholder",type:"<code>'string'</code>",default:"<code>'--'</code>",desc:"Time field placeholder"},{propName:"timeFieldClass",type:"<code>'string'</code>",default:"-",desc:"Extra class for time field"},{propName:"value",type:"<code>Date</code>",default:"-",desc:"Value of TimeInput (Controlled)"}]},{component:"TimeInput.TimeInputRange",api:[{propName:"amLabel",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Display string for AM"},{propName:"amPmPlaceholder",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Placeholder for AM/PM field"},{propName:"clearable",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether allow to clear value"},{propName:"defaultValue",type:"<code>Date</code>",default:"-",desc:"Default value of TimeInputRange (use value instead if it is controlled)"},{propName:"disabled",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether TimeInputRange is disabled"},{propName:"format",type:"<code>'12'</code> | <code>'24'</code>",default:"<code>'24'</code>",desc:"Determine time format"},{propName:"invalid",type:"<code>boolean</code>",default:"-",desc:"Whether the TimeInputRange is invalid status"},{propName:"nextRef",type:"<code>RefObject</code>",default:"-",desc:"Ref to focus after final TimeInputRange field, can be used by TimeInputRangeRange"},{propName:"onChange",type:"<code>(value: Date) => void</code>",default:"-",desc:"Callback when TimeInputRange value changed"},{propName:"pmLabel",type:"<code>'string'</code>",default:"<code>'pm'</code>",desc:"Display string for PM"},{propName:"prefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside TimeInputRange"},{propName:"separator",type:"<code>'string'</code> | <code>'24'</code>",default:"<code>'~'</code>",desc:"Seperator between time inputs "},{propName:"showSeconds",type:"<code>boolean</code>",default:"-",desc:"Whether display seconds input field"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"TimeInputRange size"},{propName:"suffix",type:"<code>string</code> | <code>ReactNode</code>",default:"<code>ReactNode</code>",desc:"Render a suffix content inside TimeInputRange"},{propName:"timeFieldPlaceholder",type:"<code>'string'</code>",default:"<code>'--'</code>",desc:"Time field placeholder"},{propName:"timeFieldClass",type:"<code>'string'</code>",default:"-",desc:"Extra class for time field"},{propName:"value",type:"<code>Date</code>",default:"-",desc:"Value of TimeInputRange (Controlled)"}]}],$=()=>e.jsx(p,{header:R,demos:b,api:j});export{$ as default};
