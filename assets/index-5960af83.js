import{j as e,r as i}from"./index-23438ae7.js";import{D as d}from"./DemoLayout-5cf9cdcf.js";import{B as o}from"./Button-6151e38d.js";import{O as l,j as r,au as m,R as s}from"./index.esm-abf109fc.js";import"./AdaptableCard-2ca25d0f.js";import"./Card-f69b93fe.js";import"./Views-9f1346e4.js";import"./Affix-86921244.js";import"./Tooltip-7ead0d1d.js";import"./usePopper-c0ab2d6a.js";import"./index.esm-755a26e3.js";import"./index-cf95bcca.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-89eeae84.js";import"./index-78f5d5c7.js";import"./index-bc82ff52.js";import"./index.esm-d8984845.js";const x=()=>e.jsxs("div",{className:"inline-flex flex-wrap xl:flex gap-2",children:[e.jsx(o,{children:"Default"}),e.jsx(o,{variant:"solid",children:"Solid"}),e.jsx(o,{variant:"twoTone",children:"Two Tone"}),e.jsx(o,{variant:"plain",children:"Plain"})]}),p=()=>e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(o,{size:"xs",children:"Extra Small (xs)"}),e.jsx(o,{size:"sm",children:"Small (sm)"}),e.jsx(o,{children:"Medium (md)"}),e.jsx(o,{size:"lg",children:"Large (lg)"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{className:"mr-2",variant:"twoTone",color:"rose-600",children:"Red"}),e.jsx(o,{className:"mr-2",variant:"solid",color:"rose-600",children:"Red"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{className:"mr-2",variant:"twoTone",color:"orange-600",children:"Orange"}),e.jsx(o,{className:"mr-2",variant:"solid",color:"orange-500",children:"Orange"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{className:"mr-2",variant:"twoTone",color:"emerald-600",children:"Emerald"}),e.jsx(o,{className:"mr-2",variant:"solid",color:"emerald-500",children:"Emerald"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{className:"mr-2",variant:"twoTone",color:"sky-800",children:"Sky"}),e.jsx(o,{className:"mr-2",variant:"solid",color:"sky-500",children:"Sky"})]})]}),u=()=>e.jsx("div",{children:e.jsx(o,{disabled:!0,children:"Default"})}),j=()=>e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(o,{children:"Rounded"}),e.jsx(o,{shape:"none",children:"None"}),e.jsx(o,{shape:"circle",children:"Circle"})]}),f=()=>{const[n,c]=i.useState(!1),a=()=>{c(!0),setTimeout(()=>{c(!1)},3e3)};return e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(o,{className:"mr-2",icon:e.jsx(l,{}),children:e.jsx("span",{children:"Edit"})}),e.jsx(o,{className:"mr-2",variant:"twoTone",icon:e.jsx(r,{}),children:e.jsx("span",{children:e.jsx("span",{children:"Settings"})})}),e.jsx(o,{className:"mr-2",variant:"solid",loading:n,icon:e.jsx(m,{}),onClick:a,children:e.jsx("span",{children:"With Loading (Click to trigger)"})})]})},b=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(o,{shape:"circle",variant:"plain",size:"xs",icon:e.jsx(s,{})}),e.jsx(o,{shape:"circle",size:"sm",variant:"twoTone",icon:e.jsx(s,{})}),e.jsx(o,{shape:"circle",icon:e.jsx(s,{})}),e.jsx(o,{shape:"circle",variant:"solid",size:"lg",icon:e.jsx(s,{})})]}),e.jsx("br",{}),e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(o,{variant:"plain",size:"xs",icon:e.jsx(s,{})}),e.jsx(o,{size:"sm",variant:"twoTone",icon:e.jsx(s,{})}),e.jsx(o,{icon:e.jsx(s,{})}),e.jsx(o,{variant:"solid",size:"lg",icon:e.jsx(s,{})})]})]}),v=()=>{const[n,c]=i.useState(!1),a=()=>{c(!0),setTimeout(()=>{c(!1)},3e3)};return e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(o,{loading:!0,children:"Loading"}),e.jsx(o,{loading:!0,shape:"circle",icon:e.jsx(s,{})}),e.jsx(o,{variant:"solid",loading:n,onClick:a,children:"Click Me!"})]})},g=()=>e.jsxs("div",{children:[e.jsx(o,{block:!0,className:"mb-5",children:"Block"}),e.jsx(o,{block:!0,variant:"solid",children:"Another Block"})]}),t="Button",N={title:"Button",desc:"Button is used to start an instant operation and is used when triggers an action or event"},w=[{mdName:"Variant",mdPath:t,title:"Variant",desc:`There's few variant of appearance of the button, you can set the <code>variant</code> prop
		value to <code>default</code>, <code>twoTone</code>, <code>solid</code>, or <code>plain</code>.`,component:e.jsx(x,{})},{mdName:"Size",mdPath:t,title:"Size",desc:"Buttons come with four type of size, <code>xs</code>, <code>sm</code>, <code>md</code> & <code>lg</code>, The default size is <code>md</code>.",component:e.jsx(p,{})},{mdName:"Color",mdPath:t,title:"Color",desc:"<code>twoTone</code> and <code>solid</code> button able to apply custom color, available colors option based on tailwind <code>theme.colors</code>",component:e.jsx(h,{})},{mdName:"Disabled",mdPath:t,title:"Disabled",desc:"Disabled Button prevents user interaction, set <code>disabled</code> prop to <code>true</code> to disabled a button.",component:e.jsx(u,{})},{mdName:"Shape",mdPath:t,title:"Shape",desc:"Button shape can be set to <code>none</code> or <code>circle</code>, the default shape is <code>round</code>",component:e.jsx(j,{})},{mdName:"Icon",mdPath:t,title:"Icon",desc:"Button can contain an icon by insert an icon to <code>icon</code> prop",component:e.jsx(b,{})},{mdName:"ButtonWithIcon",mdPath:t,title:"Button With Icon",desc:"Icons also can be added to buttons and combined with text as the examples below.",component:e.jsx(f,{})},{mdName:"Loading",mdPath:t,title:"Loading",desc:"Set <code>loading</code> prop to true to shows a loading indicator, it will disabled the button as well.",component:e.jsx(v,{})},{mdName:"Block",mdPath:t,title:"Block",desc:"Buttons can stretch to fill the width by adding <code>block</code> prop",component:e.jsx(g,{})}],B=[{component:"Button",api:[{propName:"variant",type:"<code>'solid'</code>  | <code>'twoTone'</code> | <code>'plain'</code> | <code>'default'</code>",default:"<code>'default'</code>",desc:"The variant of the button"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code> | <code>'xs'</code>",default:"<code>'md'</code>",desc:"Size of the button."},{propName:"color",type:"(available colors option based on tailwind <code>theme.colors</code>)",default:"current theme color",desc:"Custom color for button"},{propName:"shape",type:"<code>'round'</code>  | <code>'circle'</code> | <code>'none'</code>",default:"<code>'round'</code>",desc:"Border radius of the button"},{propName:"disabled",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Prevents user interact with the button"},{propName:"icon",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render icon"},{propName:"active",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Set button to active status"},{propName:"loading",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Show a loading spinner & disable the button"},{propName:"block",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Make button fill to its container width"}]}],A=()=>e.jsx(d,{header:N,demos:w,api:B});export{A as default};
