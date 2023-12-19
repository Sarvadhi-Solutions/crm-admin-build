import{j as e,r as a}from"./index-7b0349c6.js";import{D as h}from"./DemoLayout-69f1d324.js";import{S as t}from"./Switcher-e923ff00.js";import{j as m,k as p}from"./index.esm-c0ebc65c.js";import"./AdaptableCard-d9b587b8.js";import"./Card-a848a8eb.js";import"./Views-c6671a9d.js";import"./Affix-eda4a3b4.js";import"./Button-9fa3d2fc.js";import"./Tooltip-a61fe545.js";import"./usePopper-ea1a26c2.js";import"./index.esm-8b94bd99.js";import"./index-ba238736.js";import"./index.esm-70dc7df8.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-6439c76e.js";import"./index-0a38317c.js";import"./index-0df82d35.js";import"./index.esm-b503a71c.js";const u=()=>{const o=(d,s)=>{console.log(d,s)};return e.jsx("div",{children:e.jsx(t,{defaultChecked:!0,onChange:o})})},r=o=>e.jsx("div",{className:"text-lg",children:o}),x=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{checkedContent:"a",unCheckedContent:"b"})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{unCheckedContent:r(e.jsx(m,{})),checkedContent:r(e.jsx(p,{}))})})]}),b=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{disabled:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{disabled:!0,defaultChecked:!0})})]}),C=()=>{const[o,d]=a.useState(!1),[s,n]=a.useState(!1),i=()=>{n(!0),setTimeout(()=>{d(l=>!l),n(!1)},1e3)};return e.jsx("div",{children:e.jsx(t,{checked:o,isLoading:s,onChange:i})})},f=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{defaultChecked:!0,color:"green-500"})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{defaultChecked:!0,color:"blue-500"})})]}),j=()=>{const[o,d]=a.useState(!1),s=n=>{console.log("value",n),d(!n)};return e.jsx("div",{children:e.jsx(t,{checked:o,onChange:s})})},c="Switcher",g={title:"Switcher",desc:"Switcher component used as an alternative of the single Checkbox, it can be switch between enabled or disabled."},w=[{mdName:"Basic",mdPath:c,title:"Basic",desc:"Basic example for Switcher.",component:e.jsx(u,{})},{mdName:"Content",mdPath:c,title:"Content",desc:"Switcher can have different content on state enabled or disabled",component:e.jsx(x,{})},{mdName:"Disabled",mdPath:c,title:"Disabled",desc:"Set <code>disabled</code> to true to disable the Switcher.",component:e.jsx(b,{})},{mdName:"Loading",mdPath:c,title:"Loading",desc:"We can set <code>isLoading</code> prop to true and make Switcher status to pending.",component:e.jsx(C,{})},{mdName:"Colors",mdPath:c,title:"Colors",desc:"We can apply custom color to Switcher via <code>color</code> prop.",component:e.jsx(f,{})},{mdName:"Controlled",mdPath:c,title:"Controlled",desc:"Controlled example.",component:e.jsx(j,{})}],k=[{component:"Switcher",api:[{propName:"checked",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher is checked"},{propName:"checkedContent",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content to be shown when the state is checked"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Switcher, available colors option based on tailwind <code>theme.colors</code>"},{propName:"defaultChecked",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher initial state is checked"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher is disabled"},{propName:"isLoading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether the checkbox is loading"},{propName:"labelRef",type:"<code>string</code>",default:"-",desc:"Ref of Checkbox label element"},{propName:"name",type:"<code>string</code>",default:"-",desc:"The name of the switcher input field"},{propName:"onChange",type:"<code>(checked: boolean, e: MouseEvent) => void</code>",default:"-",desc:"Callback when Switcher value is changed"},{propName:"readOnly",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher is read only"},{propName:"unCheckedContent",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content to be shown when the state is unchecked"}]}],z=()=>e.jsx(h,{header:g,demos:w,api:k});export{z as default};
