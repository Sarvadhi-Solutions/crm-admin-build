import{j as e}from"./index-3da8ab78.js";import{D as c}from"./DemoLayout-7682a94b.js";import{I as l}from"./index-a1237748.js";import{I as s}from"./Input-50869ece.js";import{B as o}from"./Button-8579f7ca.js";import{b as d,aI as r}from"./index.esm-4107b49d.js";import{S as n}from"./Select-5300a5e5.js";import{D as i}from"./index-36e58418.js";import"./AdaptableCard-3b27054d.js";import"./Card-7380f9b9.js";import"./Views-ac495012.js";import"./Affix-24223c97.js";import"./Tooltip-d01527b7.js";import"./usePopper-2e195c60.js";import"./index.esm-ddf990fb.js";import"./index-34bf7828.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-74a7d2b0.js";import"./index-ff65c1a3.js";import"./index-2f843102.js";import"./index.esm-e2737c3c.js";import"./isNil-90add0e7.js";import"./get-a9ebd7b5.js";import"./toString-9fd50606.js";import"./_MapCache-99cd0bb5.js";import"./slicedToArray-c2eadced.js";import"./floating-ui.dom-bef9cea3.js";import"./useControllableState-6098f537.js";import"./useMergeRef-788c4cb0.js";import"./RangeCalendar-ef5337d8.js";import"./useRootClose-288f7513.js";import"./CloseButton-180dbba2.js";import"./TimeInput-187ac456.js";import"./useUniqueId-89e6e85c.js";import"./useDidUpdate-30b7bde9.js";const{Addon:t}=l,m=()=>e.jsxs("div",{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(t,{children:"@"}),e.jsx(s,{})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{}),e.jsx(t,{children:".exmaple.com"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(t,{children:"http://"}),e.jsx(s,{}),e.jsx(t,{children:".com"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{}),e.jsx(t,{children:"to"}),e.jsx(s,{})]})]}),p=()=>e.jsxs("div",{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{placeholder:"Input text to search"}),e.jsx(o,{children:"Search"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{placeholder:"Input text to search"}),e.jsx(o,{icon:e.jsx(d,{className:"text-xl"})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(o,{variant:"solid",icon:e.jsx(r,{className:"text-xl"})}),e.jsx(s,{placeholder:"Input text to search"})]})]}),u=()=>e.jsxs("div",{children:[e.jsxs(l,{size:"sm",className:"mb-4",children:[e.jsx(l.Addon,{children:"@"}),e.jsx(s,{placeholder:"Small Input"}),e.jsx(o,{variant:"solid",children:"Submit"})]}),e.jsxs(l,{size:"lg",className:"mb-4",children:[e.jsx(l.Addon,{children:"@"}),e.jsx(s,{placeholder:"Small Input"}),e.jsx(o,{variant:"solid",children:"Submit"})]})]}),{Addon:x}=l,h=[{value:".com",label:".com"},{value:".net",label:".net"},{value:".io",label:".io"}],j=[{value:"12.00 AM",label:"12.00 AM"},{value:"1.00 AM ",label:"1.00 AM"},{value:"2.00 AM ",label:"2.00 AM"},{value:"3.00 AM ",label:"3.00 AM"},{value:"4.00 AM ",label:"4.00 AM"},{value:"5.00 AM ",label:"5.00 AM"},{value:"6.00 AM ",label:"6.00 AM"},{value:"7.00 AM ",label:"7.00 AM"},{value:"8.00 AM ",label:"8.00 AM"},{value:"9.00 AM ",label:"9.00 AM"},{value:"10.00 AM ",label:"10.00 AM"},{value:"11.00 AM ",label:"11.00 AM"},{value:"12.00 PM ",label:"12.00 PM"},{value:"1.00 PM ",label:"1.00 PM"},{value:"2.00 PM ",label:"2.00 PM"},{value:"3.00 PM ",label:"3.00 PM"},{value:"4.00 PM ",label:"4.00 PM"},{value:"5.00 PM ",label:"5.00 PM"},{value:"6.00 PM ",label:"6.00 PM"},{value:"7.00 PM ",label:"7.00 PM"},{value:"8.00 PM ",label:"8.00 PM"},{value:"9.00 PM ",label:"9.00 PM"},{value:"10.00 PM ",label:"10.00 PM"},{value:"11.00 PM ",label:"11.00 PM"}],b=()=>e.jsxs("div",{children:[e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{prefix:e.jsx(r,{className:"text-xl text-indigo-600 cursor-pointer"})}),e.jsx(o,{children:"Send"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{placeholder:"Start Date"}),e.jsx(x,{children:"To"}),e.jsx(i,{placeholder:"End Date"})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{}),e.jsx("div",{style:{minWidth:100},children:e.jsx(n,{isSearchable:!1,defaultValue:{label:".com",value:".com"},options:h})})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{placeholder:"Select Date"}),e.jsx("div",{style:{minWidth:120},children:e.jsx(n,{isSearchable:!1,placeholder:"Time",options:j})})]})]}),a="InputGroup",M={title:"InputGroup",desc:"Input groups allowed us to chain serveral input related components into a single row."},v=[{mdName:"Addons",mdPath:a,title:"Addons",desc:" Addon can be placed on either side of an input. It also can place in between of both Input.",component:e.jsx(m,{})},{mdName:"WithButtons",mdPath:a,title:"With Buttons",desc:"Button can also chain with Input.",component:e.jsx(p,{})},{mdName:"Sizes",mdPath:a,title:"Sizes",desc:"Add available sizes value to <code>InputGroup</code> <code>size</code> prop will automatically resize the content.",component:e.jsx(u,{})},{mdName:"OtherCombination",mdPath:a,title:"Other Combination",desc:"Example of different <code>InputGroup</code> combination.",component:e.jsx(b,{})}],A=[{component:"InputGroup",api:[{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"-",desc:"InputGroup size"}]},{component:"InputGroup.Addon",api:[{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"-",desc:"Addon size"}]}],se=()=>e.jsx(c,{header:M,demos:v,api:A});export{se as default};
