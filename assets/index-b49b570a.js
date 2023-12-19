import{j as e,r as m}from"./index-4bd6b7b3.js";import{D as c}from"./DemoLayout-abb47ea7.js";import{M as t}from"./index-6ca15321.js";import{j as r,b8 as u,b9 as p,ba as h,bb as x}from"./index.esm-0cdca32a.js";import{R as l}from"./index-b212dc1a.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Button-39d85f08.js";import"./context-a8cf3940.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./SyntaxHighlighter-d5a055b8.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";import"./index-96e19bc1.js";import"./DemoComponentApi-dfdadeb6.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./index-5ed9ba61.js";import"./useUniqueId-a782b7b3.js";import"./toString-a7228545.js";const y=()=>{const n=(s,d)=>{console.log("key",s),console.log("event",d)};return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{onSelect:n,children:[e.jsx(t.MenuItem,{eventKey:"settings",children:"Settings"}),e.jsx(t.MenuItem,{eventKey:"message",children:"Message"}),e.jsx(t.MenuItem,{eventKey:"gallery",children:"Gallery"})]})})},v=()=>{const n=(s,d)=>{console.log("expanded",s),console.log("event",d)};return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsx(t.MenuItem,{eventKey:"item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-3",label:"Item 3",onToggle:n,children:[e.jsx(t.MenuItem,{eventKey:"item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"item-3-2",children:"Item 3.2"})]}),e.jsxs(t.MenuCollapse,{eventKey:"item-4",label:"Item 4",onToggle:n,children:[e.jsx(t.MenuItem,{eventKey:"item-4-1",children:"Item 4.1"}),e.jsx(t.MenuItem,{eventKey:"item-4-2",children:"Item 4.2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-4-3",label:"Item 4.3",onToggle:n,children:[e.jsx(t.MenuItem,{eventKey:"item-4-3-1",children:"Item 4.3.1"}),e.jsx(t.MenuItem,{eventKey:"item-4-2-1",children:"Item 4.3.2"})]})]})]})})},j=()=>e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsxs(t.MenuGroup,{label:"Group 1",children:[e.jsx(t.MenuItem,{eventKey:"group-1-item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"group-1-item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"group-1-item-3",label:"Item 3",children:[e.jsx(t.MenuItem,{eventKey:"group-1-item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"group-1-item-3-2",children:"Item 3.2"})]})]},"group-1"),e.jsxs(t.MenuGroup,{label:"Group 2",children:[e.jsx(t.MenuItem,{eventKey:"group-2-item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"group-2-item-2",children:"Item 2"})]},"group-2")]})}),i=({icon:n,label:s})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:n}),e.jsx("span",{children:s})]}),M=()=>e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsx(t.MenuItem,{eventKey:"settings",children:e.jsx(i,{icon:e.jsx(r,{}),label:"Settings"})}),e.jsx(t.MenuItem,{eventKey:"messages",children:e.jsx(i,{icon:e.jsx(u,{}),label:"Messages"})}),e.jsxs(t.MenuCollapse,{eventKey:"others",label:e.jsx(i,{icon:e.jsx(p,{}),label:"Network"}),children:[e.jsx(t.MenuItem,{eventKey:"wifi",children:e.jsx(i,{icon:e.jsx(h,{}),label:"Wifi"})}),e.jsx(t.MenuItem,{eventKey:"support",children:e.jsx(i,{icon:e.jsx(x,{}),label:"Support"})})]})]})}),g=()=>e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{children:[e.jsx(t.MenuItem,{eventKey:"settings",children:"Settings"}),e.jsx(t.MenuItem,{disabled:!0,eventKey:"message",children:"Message"}),e.jsx(t.MenuItem,{eventKey:"gallery",children:"Gallery"})]})}),I=()=>{const[n,s]=m.useState("light"),d=a=>{s(a)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(l.Group,{value:n,name:"menuVariants",onChange:d,children:[e.jsx(l,{value:"light",children:"Light"}),e.jsx(l,{value:"dark",children:"Dark"}),e.jsx(l,{value:"themed",children:"Themed"}),e.jsx(l,{value:"transparent",children:"Transparent"})]}),e.jsxs(t,{variant:n,className:"border rounded-md p-2",style:{maxWidth:250},children:[e.jsx(t.MenuItem,{eventKey:"settings",children:"Settings"}),e.jsx(t.MenuItem,{eventKey:"message",children:"Message"}),e.jsx(t.MenuItem,{eventKey:"gallery",children:"Gallery"})]})]})},b=()=>{const[n]=m.useState(["item-2","item-3-2"]);return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{defaultActiveKeys:n,children:[e.jsx(t.MenuItem,{eventKey:"item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-3",label:"Item 3",children:[e.jsx(t.MenuItem,{eventKey:"item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"item-3-2",children:"Item 3.2"})]})]})})},f=()=>{const[n]=m.useState(["item-3"]);return e.jsx("div",{className:"border rounded-md p-2",style:{maxWidth:250},children:e.jsxs(t,{defaultExpandedKeys:n,children:[e.jsx(t.MenuItem,{eventKey:"item-1",children:"Item 1"}),e.jsx(t.MenuItem,{eventKey:"item-2",children:"Item 2"}),e.jsxs(t.MenuCollapse,{eventKey:"item-3",label:"Item 3",children:[e.jsx(t.MenuItem,{eventKey:"item-3-1",children:"Item 3.1"}),e.jsx(t.MenuItem,{eventKey:"item-3-2",children:"Item 3.2"})]}),e.jsxs(t.MenuCollapse,{eventKey:"item-4",label:"Item 4",children:[e.jsx(t.MenuItem,{eventKey:"item-4-1",children:"Item 4.1"}),e.jsx(t.MenuItem,{eventKey:"item-4-2",children:"Item 4.2"})]})]})})},o="Menu",K={title:"Menu",desc:"Menus allow users to select a single item from a group of available options."},N=[{mdName:"Simple",mdPath:o,title:"Simple",desc:"A simple example of menu.",component:e.jsx(y,{})},{mdName:"CollapsableMenuItem",mdPath:o,title:"Collapsable menu item",desc:"Menus can contain nested levels as collapsable menu items.",component:e.jsx(v,{})},{mdName:"MenuGroup",mdPath:o,title:"Menu group",desc:"Menus can also categorization menu items into different groups.",component:e.jsx(j,{})},{mdName:"MenuWithIcon",mdPath:o,title:"With icon",desc:"Example with icons in menu items.",component:e.jsx(M,{})},{mdName:"DisabledMenuItem",mdPath:o,title:"Disabled menu item",desc:"Menu items can be disabled to prevent a user from interacting with them.",component:e.jsx(g,{})},{mdName:"Variants",mdPath:o,title:"Variants",desc:"There's several scheme option for menu.",component:e.jsx(I,{})},{mdName:"DefaultActive",mdPath:o,title:"Default active",desc:"We can set the menu items within to active by entering corresponded <code>eventKey</code> to <code>defaultActiveKeys</code>",component:e.jsx(b,{})},{mdName:"DefaultExpand",mdPath:o,title:"Default expand",desc:"We can expand the collapsable menu items within by entering corresponded <code>eventKey</code> to <code>defaultExpandedKeys</code>",component:e.jsx(f,{})}],C=[{component:"Menu",api:[{propName:"defaultActiveKeys",type:"<code>string[]</code>",default:"<code>[]</code>",desc:"Initial set menu item as active based on inserted keys which corresponding to <code>eventkey</code>"},{propName:"defaultExpandedKeys",type:"<code>string[]</code>",default:"<code>[]</code>",desc:"Initial expand collapsable menu item based on inserted keys which corresponding to <code>eventkey</code>"},{propName:"menuItemHeight",type:"<code>string</code> | <code>number</code>",default:"<code>40</code>",desc:"Height of all menu item"},{propName:"onSelect",type:"<code>(e: MouseEvent, eventKey: string) => void</code>",default:"-",desc:"Callback when menu item clicked"},{propName:"sideCollapsed",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to side collapse the menu"},{propName:"variant",type:"<code>'light'</code> | <code>'dark'</code> | <code>'themed'</code> | <code>'transparent'</code>",default:"<code>'light'</code>",desc:"The variants of the menu."}]},{component:"Menu.MenuCollapse",api:[{propName:"eventKey",type:"<code>string</code>",default:"-",desc:"An unique value for the collapsable menu item"},{propName:"expanded",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to expand current collpased menu item"},{propName:"label",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content of the collpased menu item"},{propName:"onToggle",type:"<code>(expanded: boolean, e: MouseEvent) => void</code>",default:"-",desc:"Callback when collpased menu item toggled"}]},{component:"Menu.MenuGroup",api:[{propName:"label",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Content of the collpased menu group title"}]},{component:"Menu.MenuItem",api:[{propName:"asElement",type:"<code>string</code>",default:"<code>'div'</code>",desc:"Render element"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disable menu item"},{propName:"eventKey",type:"<code>boolean</code>",default:"-",desc:"An unique value for the menu item"},{propName:"isActive",type:"<code>boolean</code>",default:"-",desc:"Whether to active menu item"},{propName:"menuItemHeight",type:"<code>string</code> | <code>number</code>",default:"<code>40</code>",desc:"Height of menu item"},{propName:"onSelect",type:"<code>(eventKey: string, e: MouseEvent) => void</code>",default:"<code>40</code>",desc:"Callback menu item clicked"}]}],ee=()=>e.jsx(c,{header:K,demos:N,api:C});export{ee as default};
