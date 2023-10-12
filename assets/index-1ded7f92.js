import{j as e,r as a}from"./index-94b34292.js";import{D as c}from"./DemoLayout-0cfc20fb.js";import{M as t}from"./index-798e70b5.js";import{j as r,aM as u,aN as p,aO as h,aP as x}from"./index.esm-782de75a.js";import{R as l}from"./index-5fcbc489.js";import"./AdaptableCard-c182e7e7.js";import"./Card-d6f50812.js";import"./Views-fb5a8bd1.js";import"./Affix-2cf76f51.js";import"./Button-f4db3022.js";import"./Tooltip-19d421b7.js";import"./usePopper-bc958b31.js";import"./index.esm-39aa8af5.js";import"./index-6d87b72d.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-9b4d83b8.js";import"./index-28603d8b.js";import"./index-fae7cee7.js";import"./index.esm-b797afb7.js";import"./index-3085a00b.js";import"./useUniqueId-ed6d8ed2.js";import"./toString-47802c78.js";const y=()=>{const n=(o,d)=>{console.log("key",o),console.log("event",d)};return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{onSelect:n,children:[e.jsx(t.MenuItem,{eventKey:"settings",children:"Settings"}),e.jsx(t.MenuItem,{eventKey:"message",children:"Message"}),e.jsx(t.MenuItem,{eventKey:"gallery",children:"Gallery"})]})})},v=()=>{const n=(o,d)=>{console.log("expanded",o),console.log("event",d)};return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsx(t.MenuItem,{eventKey:"item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-3",label:"Item 3",onToggle:n,children:[e.jsx(t.MenuItem,{eventKey:"item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"item-3-2",children:"Item 3.2"})]}),e.jsxs(t.MenuCollapse,{eventKey:"item-4",label:"Item 4",onToggle:n,children:[e.jsx(t.MenuItem,{eventKey:"item-4-1",children:"Item 4.1"}),e.jsx(t.MenuItem,{eventKey:"item-4-2",children:"Item 4.2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-4-3",label:"Item 4.3",onToggle:n,children:[e.jsx(t.MenuItem,{eventKey:"item-4-3-1",children:"Item 4.3.1"}),e.jsx(t.MenuItem,{eventKey:"item-4-2-1",children:"Item 4.3.2"})]})]})]})})},j=()=>e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsxs(t.MenuGroup,{label:"Group 1",children:[e.jsx(t.MenuItem,{eventKey:"group-1-item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"group-1-item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"group-1-item-3",label:"Item 3",children:[e.jsx(t.MenuItem,{eventKey:"group-1-item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"group-1-item-3-2",children:"Item 3.2"})]})]},"group-1"),e.jsxs(t.MenuGroup,{label:"Group 2",children:[e.jsx(t.MenuItem,{eventKey:"group-2-item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"group-2-item-2",children:"Item 2"})]},"group-2")]})}),i=({icon:n,label:o})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:n}),e.jsx("span",{children:o})]}),M=()=>e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsx(t.MenuItem,{eventKey:"settings",children:e.jsx(i,{icon:e.jsx(r,{}),label:"Settings"})}),e.jsx(t.MenuItem,{eventKey:"messages",children:e.jsx(i,{icon:e.jsx(u,{}),label:"Messages"})}),e.jsxs(t.MenuCollapse,{eventKey:"others",label:e.jsx(i,{icon:e.jsx(p,{}),label:"Network"}),children:[e.jsx(t.MenuItem,{eventKey:"wifi",children:e.jsx(i,{icon:e.jsx(h,{}),label:"Wifi"})}),e.jsx(t.MenuItem,{eventKey:"support",children:e.jsx(i,{icon:e.jsx(x,{}),label:"Support"})})]})]})}),g=()=>e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsx(t.MenuItem,{eventKey:"settings",children:"Settings"}),e.jsx(t.MenuItem,{disabled:!0,eventKey:"message",children:"Message"}),e.jsx(t.MenuItem,{eventKey:"gallery",children:"Gallery"})]})}),I=()=>{const[n,o]=a.useState("light"),d=m=>{o(m)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(l.Group,{value:n,name:"menuVariants",onChange:d,children:[e.jsx(l,{value:"light",children:"Light"}),e.jsx(l,{value:"dark",children:"Dark"}),e.jsx(l,{value:"themed",children:"Themed"}),e.jsx(l,{value:"transparent",children:"Transparent"})]}),e.jsxs(t,{variant:n,className:"border rounded-md p-2",style:{maxWidth:250},children:[e.jsx(t.MenuItem,{eventKey:"settings",children:"Settings"}),e.jsx(t.MenuItem,{eventKey:"message",children:"Message"}),e.jsx(t.MenuItem,{eventKey:"gallery",children:"Gallery"})]})]})},f=()=>{const[n]=a.useState(["item-2","item-3-2"]);return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{defaultActiveKeys:n,children:[e.jsx(t.MenuItem,{eventKey:"item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-3",label:"Item 3",children:[e.jsx(t.MenuItem,{eventKey:"item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"item-3-2",children:"Item 3.2"})]})]})})},K=()=>{const[n]=a.useState(["item-3"]);return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{defaultExpandedKeys:n,children:[e.jsx(t.MenuItem,{eventKey:"item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-3",label:"Item 3",children:[e.jsx(t.MenuItem,{eventKey:"item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"item-3-2",children:"Item 3.2"})]}),e.jsxs(t.MenuCollapse,{eventKey:"item-4",label:"Item 4",children:[e.jsx(t.MenuItem,{eventKey:"item-4-1",children:"Item 4.1"}),e.jsx(t.MenuItem,{eventKey:"item-4-2",children:"Item 4.2"})]})]})})},s="Menu",b={title:"Menu",desc:"Menus allow users to select a single item from a group of available options."},N=[{mdName:"Simple",mdPath:s,title:"Simple",desc:"A simple example of menu.",component:e.jsx(y,{})},{mdName:"CollapsableMenuItem",mdPath:s,title:"Collapsable menu item",desc:"Menus can contain nested levels as collapsable menu items.",component:e.jsx(v,{})},{mdName:"MenuGroup",mdPath:s,title:"Menu group",desc:"Menus can also categorization menu items into different groups.",component:e.jsx(j,{})},{mdName:"MenuWithIcon",mdPath:s,title:"With icon",desc:"Example with icons in menu items.",component:e.jsx(M,{})},{mdName:"DisabledMenuItem",mdPath:s,title:"Disabled menu item",desc:"Menu items can be disabled to prevent a user from interacting with them.",component:e.jsx(g,{})},{mdName:"Variants",mdPath:s,title:"Variants",desc:"There's several scheme option for menu.",component:e.jsx(I,{})},{mdName:"DefaultActive",mdPath:s,title:"Default active",desc:"We can set the menu items within to active by entering corresponded <code>eventKey</code> to <code>defaultActiveKeys</code>",component:e.jsx(f,{})},{mdName:"DefaultExpand",mdPath:s,title:"Default expand",desc:"We can expand the collapsable menu items within by entering corresponded <code>eventKey</code> to <code>defaultExpandedKeys</code>",component:e.jsx(K,{})}],C=[{component:"Menu",api:[{propName:"defaultActiveKeys",type:"<code>string[]</code>",default:"<code>[]</code>",desc:"Initial set menu item as active based on inserted keys which corresponding to <code>eventkey</code>"},{propName:"defaultExpandedKeys",type:"<code>string[]</code>",default:"<code>[]</code>",desc:"Initial expand collapsable menu item based on inserted keys which corresponding to <code>eventkey</code>"},{propName:"menuItemHeight",type:"<code>string</code> | <code>number</code>",default:"<code>40</code>",desc:"Height of all menu item"},{propName:"onSelect",type:"<code>(e: MouseEvent, eventKey: string) => void</code>",default:"-",desc:"Callback when menu item clicked"},{propName:"sideCollapsed",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to side collapse the menu"},{propName:"variant",type:"<code>'light'</code> | <code>'dark'</code> | <code>'themed'</code> | <code>'transparent'</code>",default:"<code>'light'</code>",desc:"The variants of the menu."}]},{component:"Menu.MenuCollapse",api:[{propName:"eventKey",type:"<code>string</code>",default:"-",desc:"An unique value for the collapsable menu item"},{propName:"expanded",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to expand current collpased menu item"},{propName:"label",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content of the collpased menu item"},{propName:"onToggle",type:"<code>(expanded: boolean, e: MouseEvent) => void</code>",default:"-",desc:"Callback when collpased menu item toggled"}]},{component:"Menu.MenuGroup",api:[{propName:"label",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content of the collpased menu group title"}]},{component:"Menu.MenuItem",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'div'</code>",desc:"Render element"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disable menu item"},{propName:"eventKey",type:"<code>boolean</code>",default:"-",desc:"An unique value for the menu item"},{propName:"isActive",type:"<code>boolean</code>",default:"-",desc:"Whether to active menu item"},{propName:"menuItemHeight",type:"<code>string</code> | <code>number</code>",default:"<code>40</code>",desc:"Height of menu item"},{propName:"onSelect",type:"<code>(eventKey: string, e: MouseEvent) => void</code>",default:"<code>40</code>",desc:"Callback menu item clicked"}]}],U=()=>e.jsx(c,{header:b,demos:N,api:C});export{U as default};
