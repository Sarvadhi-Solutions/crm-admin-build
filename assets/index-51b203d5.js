import{j as e,p as a,r as d}from"./index-fbeb73e8.js";import{D as p}from"./DemoLayout-3346d29a.js";import{T as o}from"./index-f04e83aa.js";import{a4 as l,aJ as r}from"./index.esm-966eae5b.js";import"./AdaptableCard-61c677ae.js";import"./Card-2611bbf0.js";import"./Views-e8d5fb02.js";import"./Affix-983d200c.js";import"./Button-fa703339.js";import"./Tooltip-56eb9eeb.js";import"./usePopper-fdc6d8d1.js";import"./index.esm-00218edb.js";import"./index-18a42b76.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-93a37066.js";import"./index-a95fba30.js";import"./index-af747e82.js";import"./index.esm-033a5667.js";import"./TimeInput-409b41c6.js";import"./useUniqueId-2e15deca.js";import"./toString-e7e32846.js";import"./useMergeRef-788c4cb0.js";import"./useDidUpdate-6e166d72.js";import"./CloseButton-b1b46c4f.js";import"./Input-ea43c704.js";import"./isNil-3e369377.js";import"./get-b03197f1.js";import"./_MapCache-1a6e7e5d.js";const m=()=>e.jsx(o,{}),u=()=>e.jsx(o.TimeInputRange,{clearable:!0,defaultValue:[new Date,a(new Date).add(60,"minutes").toDate()]}),{TimeInputRange:f}=o,x=()=>{const[c,s]=d.useState(new Date),[i,n]=d.useState([new Date,a(new Date).add(60,"minutes").toDate()]);return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{value:c,onChange:s}),e.jsx(f,{value:i,onChange:n})]})},g=()=>e.jsx(o,{showSeconds:!0,defaultValue:new Date}),N=()=>e.jsx(o,{format:"12",defaultValue:new Date}),h=()=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{size:"sm"}),e.jsx(o,{}),e.jsx(o,{size:"lg"})]}),y=()=>e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(o,{disabled:!0})}),T=()=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(o,{prefix:e.jsx(l,{className:"text-lg"}),suffix:null}),e.jsx(o,{suffix:e.jsx(r,{className:"text-lg"})})]}),I=()=>e.jsx(o,{invalid:!0}),t="TimeInput",R={title:"TimeInput",desc:"An input field alllow user enter specify time."},b=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic example of TimeInput.",component:e.jsx(m,{})},{mdName:"TimeRangeInput",mdPath:t,title:"Time range input",desc:"Basic example for TimeInputRange.",component:e.jsx(u,{})},{mdName:"Controlled",mdPath:t,title:"Controlled",desc:"Controlled usage.",component:e.jsx(x,{})},{mdName:"Seconds",mdPath:t,title:"Display seconds",desc:"We can also enable seconds for input.",component:e.jsx(g,{})},{mdName:"AmPm",mdPath:t,title:"Display AM or PM",desc:"Setting <code>format</code> prop to <code>'12'</code> to change time to 12 hours format",component:e.jsx(N,{})},{mdName:"Sizes",mdPath:t,title:"Sizes",desc:"There's three sizes of option for TimeInput.",component:e.jsx(h,{})},{mdName:"Disabled",mdPath:t,title:"Disabled",desc:"Disabled TimeInput.",component:e.jsx(y,{})},{mdName:"Affix",mdPath:t,title:"Affix",desc:"TimeInput can have <code>suffix</code> or <code>prefix</code> content inside.",component:e.jsx(T,{})},{mdName:"Invalid",mdPath:t,title:"Invalid state",desc:"Display TimeInput as invalid status when <code>invalid</code> prop is set to true.",component:e.jsx(I,{})}],j=[{component:"TimeInput",api:[{propName:"amLabel",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Display string for AM"},{propName:"amPmPlaceholder",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Placeholder for AM/PM field"},{propName:"clearable",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether allow to clear value"},{propName:"defaultValue",type:"<code>Date</code>",default:"-",desc:"Default value of TimeInput (use value instead if it is controlled)"},{propName:"disabled",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether TimeInput is disabled"},{propName:"format",type:"<code>'12'</code> | <code>'24'</code>",default:"<code>'24'</code>",desc:"Determine time format"},{propName:"invalid",type:"<code>boolean</code>",default:"-",desc:"Whether the TimeInput is invalid status"},{propName:"nextRef",type:"<code>RefObject</code>",default:"-",desc:"Ref to focus after final TimeInput field, can be used by TimeInputRange"},{propName:"onChange",type:"<code>(value: Date) => void</code>",default:"-",desc:"Callback when TimeInput value changed"},{propName:"pmLabel",type:"<code>'string'</code>",default:"<code>'pm'</code>",desc:"Display string for PM"},{propName:"prefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside TimeInput"},{propName:"showSeconds",type:"<code>boolean</code>",default:"-",desc:"Whether display seconds input field"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"TimeInput size"},{propName:"suffix",type:"<code>string</code> | <code>ReactNode</code>",default:"<code>ReactNode</code>",desc:"Render a suffix content inside TimeInput"},{propName:"timeFieldPlaceholder",type:"<code>'string'</code>",default:"<code>'--'</code>",desc:"Time field placeholder"},{propName:"timeFieldClass",type:"<code>'string'</code>",default:"-",desc:"Extra class for time field"},{propName:"value",type:"<code>Date</code>",default:"-",desc:"Value of TimeInput (Controlled)"}]},{component:"TimeInput.TimeInputRange",api:[{propName:"amLabel",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Display string for AM"},{propName:"amPmPlaceholder",type:"<code>'string'</code>",default:"<code>'am'</code>",desc:"Placeholder for AM/PM field"},{propName:"clearable",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether allow to clear value"},{propName:"defaultValue",type:"<code>Date</code>",default:"-",desc:"Default value of TimeInputRange (use value instead if it is controlled)"},{propName:"disabled",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether TimeInputRange is disabled"},{propName:"format",type:"<code>'12'</code> | <code>'24'</code>",default:"<code>'24'</code>",desc:"Determine time format"},{propName:"invalid",type:"<code>boolean</code>",default:"-",desc:"Whether the TimeInputRange is invalid status"},{propName:"nextRef",type:"<code>RefObject</code>",default:"-",desc:"Ref to focus after final TimeInputRange field, can be used by TimeInputRangeRange"},{propName:"onChange",type:"<code>(value: Date) => void</code>",default:"-",desc:"Callback when TimeInputRange value changed"},{propName:"pmLabel",type:"<code>'string'</code>",default:"<code>'pm'</code>",desc:"Display string for PM"},{propName:"prefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside TimeInputRange"},{propName:"separator",type:"<code>'string'</code> | <code>'24'</code>",default:"<code>'~'</code>",desc:"Seperator between time inputs "},{propName:"showSeconds",type:"<code>boolean</code>",default:"-",desc:"Whether display seconds input field"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"TimeInputRange size"},{propName:"suffix",type:"<code>string</code> | <code>ReactNode</code>",default:"<code>ReactNode</code>",desc:"Render a suffix content inside TimeInputRange"},{propName:"timeFieldPlaceholder",type:"<code>'string'</code>",default:"<code>'--'</code>",desc:"Time field placeholder"},{propName:"timeFieldClass",type:"<code>'string'</code>",default:"-",desc:"Extra class for time field"},{propName:"value",type:"<code>Date</code>",default:"-",desc:"Value of TimeInputRange (Controlled)"}]}],$=()=>e.jsx(p,{header:R,demos:b,api:j});export{$ as default};
