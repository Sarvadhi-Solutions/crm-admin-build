import{j as e,r}from"./index-4b23f9f2.js";import{D as l}from"./DemoLayout-312e6adc.js";import{I as t}from"./Input-6deb6f13.js";import{T as c}from"./Tooltip-7118406c.js";import{ae as p,a8 as m,$ as u,a0 as x,aH as f}from"./index.esm-e8a4d9e3.js";import{B as h}from"./Button-a87a2e46.js";import"./AdaptableCard-6d843750.js";import"./Card-74d89d1e.js";import"./Views-6ea63120.js";import"./Affix-250085f7.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-8b0e89b6.js";import"./index-5b52efbd.js";import"./index-1a8e49e3.js";import"./index.esm-1840726c.js";import"./isNil-6d05c28f.js";import"./get-5fd819d1.js";import"./toString-808a232b.js";import"./_MapCache-8ec314e0.js";import"./usePopper-6b55e4c5.js";import"./index.esm-b757f9d5.js";import"./index-4fdc30db.js";const j=()=>e.jsx("div",{children:e.jsx(t,{placeholder:"Basic usage"})}),v=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{size:"sm",placeholder:"Input sm"})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{placeholder:"Input md"})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{size:"lg",placeholder:"Input lg"})})]}),I=()=>e.jsx("div",{children:e.jsx(t,{disabled:!0,placeholder:"Disabled Input"})}),N=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{placeholder:"Enter your name",prefix:e.jsx(p,{className:"text-lg"})})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{placeholder:"Enter your rate",suffix:e.jsx(c,{title:"Field info",children:e.jsx(m,{className:"text-lg cursor-pointer ml-1"})})})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{prefix:"$",suffix:".00"})})]}),b=()=>{const[s,a]=r.useState("password"),d=i=>{i.preventDefault(),a(s==="password"?"text":"password")},n=e.jsx("span",{className:"cursor-pointer",onClick:i=>d(i),children:s==="password"?e.jsx(u,{}):e.jsx(x,{})});return e.jsx("div",{children:e.jsx(t,{type:s,suffix:n,placeholder:"Password"})})},y=()=>e.jsx("div",{children:e.jsx(t,{textArea:!0,placeholder:"Text area example"})}),g=()=>{const[s,a]=r.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{invalid:s,placeholder:"Invalid input",suffix:s?e.jsx(f,{className:"text-red-500 text-xl"}):null})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{textArea:!0,invalid:s,placeholder:"Invalid text area"})}),e.jsxs(h,{variant:"solid",onClick:()=>a(!s),children:["Set ",s?"Valid":"Invalid"]})]})},w=()=>{const[s,a]=r.useState(""),d=n=>a(n.target.value);return e.jsx("div",{children:e.jsx(t,{value:s,placeholder:"Sample placeholder",onChange:d})})},o="Input",C={title:"Input",desc:"Input component specifies an field where the user can enter data."},E=[{mdName:"Basic",mdPath:o,title:"Basic",desc:"The most basic usage of Input.",component:e.jsx(j,{})},{mdName:"Sizes",mdPath:o,title:"Sizes",desc:"There's three sizes of option for Input field.",component:e.jsx(v,{})},{mdName:"Disabled",mdPath:o,title:"Disabled",desc:"Disabled Input.",component:e.jsx(I,{})},{mdName:"Affix",mdPath:o,title:"Affix",desc:"Input can have <code>suffix</code> or <code>prefix</code> content inside.",component:e.jsx(N,{})},{mdName:"PasswordVisible",mdPath:o,title:"Password Visible",desc:"Example of controlling the Input type via prefix icon.",component:e.jsx(b,{})},{mdName:"Textarea",mdPath:o,title:"Textarea",desc:"Turn Input field to textarea by setting <code>textarea</code> prop to true.",component:e.jsx(y,{})},{mdName:"Invalid",mdPath:o,title:"Invalid",desc:"Display Input as invalid status when <code>invalid</code> prop is set to true.",component:e.jsx(g,{})},{mdName:"ControlledInput",mdPath:o,title:"Controlled Input",desc:"Controlled Input example.",component:e.jsx(w,{})}],T=[{component:"Input",api:[{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether the Input is disabled"},{propName:"invalid",type:"<code>boolean</code>",default:"-",desc:"Whether the Input is invalid status"},{propName:"onBlur",type:"<code>(e: MouseEvent) => void</code>",default:"-",desc:"Callback when Input remove focus"},{propName:"onChange",type:"<code>(e: MouseEvent) => void</code>",default:"-",desc:"Callback when Input value changed"},{propName:"onFocus",type:"<code>(e: MouseEvent) => void</code>",default:"-",desc:"Callback when Input is focused"},{propName:"prefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside Input"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"Input size"},{propName:"suffix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a suffix content inside Input"},{propName:"textArea",type:"<code>boolean</code>",default:"-",desc:"Whether to turn Input into textarea field"},{propName:"type",type:"<code>string</code>",default:"<code>'text'</code>",desc:'Input type, refer to <a class="text-blue-500 underline" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types" target="_blank">MDN</a> for available types'},{propName:"unstyle",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to remove input default style"}]}],Q=()=>e.jsx(l,{header:C,demos:E,api:T});export{Q as default};
