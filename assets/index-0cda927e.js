import{j as e}from"./index-2cac4aa9.js";import{D as c}from"./DemoLayout-f5b91af5.js";import{I as l}from"./index-be4fbc0e.js";import{I as s}from"./Input-ae73ee68.js";import{B as o}from"./Button-a79b235e.js";import{b as d,aI as r}from"./index.esm-d6fc75e7.js";import{S as n}from"./Select-24bfc41b.js";import{D as i}from"./index-e475e3b4.js";import"./AdaptableCard-e74be5a2.js";import"./Card-14ace6b4.js";import"./Views-1a24de8c.js";import"./Affix-0df2acf8.js";import"./Tooltip-e7fa4b26.js";import"./usePopper-0cce1482.js";import"./index.esm-83c90177.js";import"./index-d77f1c48.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9e32c936.js";import"./index-4b1c1c2f.js";import"./index-29bceb94.js";import"./index.esm-ab223ff7.js";import"./isNil-f3875b5f.js";import"./get-5eefac45.js";import"./toString-89322a6a.js";import"./_MapCache-a67a7a1a.js";import"./slicedToArray-6d23f2c0.js";import"./floating-ui.dom-bef9cea3.js";import"./useControllableState-ae30f439.js";import"./useMergeRef-788c4cb0.js";import"./RangeCalendar-7948af9b.js";import"./useRootClose-706c9615.js";import"./CloseButton-67f02107.js";import"./TimeInput-60cdaad9.js";import"./useUniqueId-cd00c1da.js";import"./useDidUpdate-1c34c14c.js";const{Addon:t}=l,m=()=>e.jsxs("div",{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(t,{children:"@"}),e.jsx(s,{})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{}),e.jsx(t,{children:".exmaple.com"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(t,{children:"http://"}),e.jsx(s,{}),e.jsx(t,{children:".com"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{}),e.jsx(t,{children:"to"}),e.jsx(s,{})]})]}),p=()=>e.jsxs("div",{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{placeholder:"Input text to search"}),e.jsx(o,{children:"Search"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{placeholder:"Input text to search"}),e.jsx(o,{icon:e.jsx(d,{className:"text-xl"})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(o,{variant:"solid",icon:e.jsx(r,{className:"text-xl"})}),e.jsx(s,{placeholder:"Input text to search"})]})]}),u=()=>e.jsxs("div",{children:[e.jsxs(l,{size:"sm",className:"mb-4",children:[e.jsx(l.Addon,{children:"@"}),e.jsx(s,{placeholder:"Small Input"}),e.jsx(o,{variant:"solid",children:"Submit"})]}),e.jsxs(l,{size:"lg",className:"mb-4",children:[e.jsx(l.Addon,{children:"@"}),e.jsx(s,{placeholder:"Small Input"}),e.jsx(o,{variant:"solid",children:"Submit"})]})]}),{Addon:x}=l,h=[{value:".com",label:".com"},{value:".net",label:".net"},{value:".io",label:".io"}],j=[{value:"12.00 AM",label:"12.00 AM"},{value:"1.00 AM ",label:"1.00 AM"},{value:"2.00 AM ",label:"2.00 AM"},{value:"3.00 AM ",label:"3.00 AM"},{value:"4.00 AM ",label:"4.00 AM"},{value:"5.00 AM ",label:"5.00 AM"},{value:"6.00 AM ",label:"6.00 AM"},{value:"7.00 AM ",label:"7.00 AM"},{value:"8.00 AM ",label:"8.00 AM"},{value:"9.00 AM ",label:"9.00 AM"},{value:"10.00 AM ",label:"10.00 AM"},{value:"11.00 AM ",label:"11.00 AM"},{value:"12.00 PM ",label:"12.00 PM"},{value:"1.00 PM ",label:"1.00 PM"},{value:"2.00 PM ",label:"2.00 PM"},{value:"3.00 PM ",label:"3.00 PM"},{value:"4.00 PM ",label:"4.00 PM"},{value:"5.00 PM ",label:"5.00 PM"},{value:"6.00 PM ",label:"6.00 PM"},{value:"7.00 PM ",label:"7.00 PM"},{value:"8.00 PM ",label:"8.00 PM"},{value:"9.00 PM ",label:"9.00 PM"},{value:"10.00 PM ",label:"10.00 PM"},{value:"11.00 PM ",label:"11.00 PM"}],b=()=>e.jsxs("div",{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{prefix:e.jsx(r,{className:"text-xl text-indigo-600 cursor-pointer"})}),e.jsx(o,{children:"Send"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{placeholder:"Start Date"}),e.jsx(x,{children:"To"}),e.jsx(i,{placeholder:"End Date"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{}),e.jsx("div",{style:{minWidth:100},children:e.jsx(n,{isSearchable:!1,defaultValue:{label:".com",value:".com"},options:h})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{placeholder:"Select Date"}),e.jsx("div",{style:{minWidth:120},children:e.jsx(n,{isSearchable:!1,placeholder:"Time",options:j})})]})]}),a="InputGroup",M={title:"InputGroup",desc:"Input groups allowed us to chain serveral input related components into a single row."},v=[{mdName:"Addons",mdPath:a,title:"Addons",desc:" Addon can be placed on either side of an input. It also can place in between of both Input.",component:e.jsx(m,{})},{mdName:"WithButtons",mdPath:a,title:"With Buttons",desc:"Button can also chain with Input.",component:e.jsx(p,{})},{mdName:"Sizes",mdPath:a,title:"Sizes",desc:"Add available sizes value to <code>InputGroup</code> <code>size</code> prop will automatically resize the content.",component:e.jsx(u,{})},{mdName:"OtherCombination",mdPath:a,title:"Other Combination",desc:"Example of different <code>InputGroup</code> combination.",component:e.jsx(b,{})}],A=[{component:"InputGroup",api:[{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"-",desc:"InputGroup size"}]},{component:"InputGroup.Addon",api:[{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"-",desc:"Addon size"}]}],se=()=>e.jsx(c,{header:M,demos:v,api:A});export{se as default};
