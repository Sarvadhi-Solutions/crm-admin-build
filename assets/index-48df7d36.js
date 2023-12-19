import{j as e,r as a}from"./index-dd430329.js";import{D as h}from"./DemoLayout-25b97b47.js";import{S as t}from"./Switcher-46a64a8e.js";import{j as m,k as p}from"./index.esm-edf6f637.js";import"./AdaptableCard-aab5007a.js";import"./Card-7303f1d6.js";import"./Views-969b82ff.js";import"./Affix-3a2b9b13.js";import"./Button-477f78d2.js";import"./Tooltip-4f6c910c.js";import"./usePopper-ad874619.js";import"./index.esm-075cf0f7.js";import"./index-59261ffa.js";import"./index.esm-8a75a52d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-7a029c07.js";import"./index-dda234b7.js";import"./index-03531cf7.js";import"./index.esm-cdf5a269.js";const u=()=>{const o=(d,s)=>{console.log(d,s)};return e.jsx("div",{children:e.jsx(t,{defaultChecked:!0,onChange:o})})},r=o=>e.jsx("div",{className:"text-lg",children:o}),x=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{checkedContent:"a",unCheckedContent:"b"})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{unCheckedContent:r(e.jsx(m,{})),checkedContent:r(e.jsx(p,{}))})})]}),b=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{disabled:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{disabled:!0,defaultChecked:!0})})]}),C=()=>{const[o,d]=a.useState(!1),[s,n]=a.useState(!1),i=()=>{n(!0),setTimeout(()=>{d(l=>!l),n(!1)},1e3)};return e.jsx("div",{children:e.jsx(t,{checked:o,isLoading:s,onChange:i})})},f=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(t,{defaultChecked:!0,color:"green-500"})}),e.jsx("div",{className:"mb-4",children:e.jsx(t,{defaultChecked:!0,color:"blue-500"})})]}),j=()=>{const[o,d]=a.useState(!1),s=n=>{console.log("value",n),d(!n)};return e.jsx("div",{children:e.jsx(t,{checked:o,onChange:s})})},c="Switcher",g={title:"Switcher",desc:"Switcher component used as an alternative of the single Checkbox, it can be switch between enabled or disabled."},w=[{mdName:"Basic",mdPath:c,title:"Basic",desc:"Basic example for Switcher.",component:e.jsx(u,{})},{mdName:"Content",mdPath:c,title:"Content",desc:"Switcher can have different content on state enabled or disabled",component:e.jsx(x,{})},{mdName:"Disabled",mdPath:c,title:"Disabled",desc:"Set <code>disabled</code> to true to disable the Switcher.",component:e.jsx(b,{})},{mdName:"Loading",mdPath:c,title:"Loading",desc:"We can set <code>isLoading</code> prop to true and make Switcher status to pending.",component:e.jsx(C,{})},{mdName:"Colors",mdPath:c,title:"Colors",desc:"We can apply custom color to Switcher via <code>color</code> prop.",component:e.jsx(f,{})},{mdName:"Controlled",mdPath:c,title:"Controlled",desc:"Controlled example.",component:e.jsx(j,{})}],k=[{component:"Switcher",api:[{propName:"checked",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher is checked"},{propName:"checkedContent",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content to be shown when the state is checked"},{propName:"color",type:"<code>string</code>",default:"current theme color",desc:"Custom color for Switcher, available colors option based on tailwind <code>theme.colors</code>"},{propName:"defaultChecked",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher initial state is checked"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher is disabled"},{propName:"isLoading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether the checkbox is loading"},{propName:"labelRef",type:"<code>string</code>",default:"-",desc:"Ref of Checkbox label element"},{propName:"name",type:"<code>string</code>",default:"-",desc:"The name of the switcher input field"},{propName:"onChange",type:"<code>(checked: boolean, e: MouseEvent) => void</code>",default:"-",desc:"Callback when Switcher value is changed"},{propName:"readOnly",type:"<code>boolean</code>",default:"-",desc:"Whether the Switcher is read only"},{propName:"unCheckedContent",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content to be shown when the state is unchecked"}]}],z=()=>e.jsx(h,{header:g,demos:w,api:k});export{z as default};
