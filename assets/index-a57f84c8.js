import{j as e,h as n}from"./index-5b083722.js";import{D as m}from"./DemoLayout-c496ff20.js";import{D as t}from"./index-0e58897c.js";import{B as a}from"./Button-f1066bd7.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./SyntaxHighlighter-efa92768.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-c682b4c7.js";import"./DemoComponentApi-8e0ebe63.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./useUncertainRef-a9591e46.js";import"./isNil-416a1774.js";import"./useUniqueId-7aeed284.js";import"./toString-981652f6.js";import"./chainedFunction-070f832c.js";import"./index-0fd37ad7.js";import"./useRootClose-bfd7b4dd.js";import"./context-6fe9373e.js";const p=()=>{const i=[{key:"a",name:"Item A"},{key:"b",name:"Item B"},{key:"c",name:"Item C"},{key:"d",name:"Item D"}],r=(c,s)=>{console.log("Dropdown Item Clicked",c,s)},l=c=>{console.log("Dropdown Clicked",c)};return e.jsx("div",{children:e.jsx(t,{title:"Click Me!",onClick:l,children:i.map(c=>e.jsx(t.Item,{eventKey:c.key,onSelect:r,children:c.name},c.key))})})},h=()=>{const i=e.jsx(a,{children:"Toggle as Button"});return e.jsx("div",{children:e.jsxs(t,{renderTitle:i,children:[e.jsx(t.Item,{eventKey:"a",children:"Item A"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]})})},x=()=>e.jsxs("div",{className:"flex",children:[e.jsxs(t,{title:"Click",className:"mr-2",children:[e.jsx(t.Item,{eventKey:"a",children:"Active Item"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]}),e.jsxs(t,{title:"Hover",trigger:"hover",className:"mr-2",children:[e.jsx(t.Item,{eventKey:"a",children:"Active Item"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]}),e.jsxs(t,{title:"Right Click",trigger:"context",className:"mr-2",children:[e.jsx(t.Item,{eventKey:"a",children:"Active Item"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]})]}),I=()=>e.jsxs(t,{title:"Click Me!",children:[e.jsx(t.Item,{children:"Item 1"}),e.jsxs(t.Menu,{title:"Right Item 2",children:[e.jsxs(t.Menu,{title:"Item 2-1",children:[e.jsx(t.Item,{active:!0,children:"Item 2-1-1"}),e.jsx(t.Item,{children:"Item 2-1-2"}),e.jsx(t.Item,{children:"Item 2-1-3"})]}),e.jsx(t.Item,{children:"Item 2-2"}),e.jsx(t.Item,{children:"Item 2-3"})]}),e.jsxs(t.Menu,{title:"Right Item 3",children:[e.jsxs(t.Menu,{title:"Item 3-1",children:[e.jsx(t.Item,{children:"Item 3-1-1"}),e.jsx(t.Item,{children:"Item 3-1-2"}),e.jsx(t.Item,{children:"Item 3-1-3"})]}),e.jsx(t.Item,{children:"Item 3-2"}),e.jsx(t.Item,{children:"Item 3-3"})]}),e.jsx(t.Item,{children:"Item 4"})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{eventKey:"a",children:"Item A"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]}),j=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-xl",children:[e.jsx("div",{children:e.jsx(t,{placement:"top-start",title:"Top left",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"top-center",title:"Top center",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"top-end",title:"Top right",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"bottom-start",title:"Bottom left",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"bottom-center",title:"Bottom center",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"bottom-end",title:"Bottom right",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"middle-start-top",title:"Middle start top",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"middle-start-bottom",title:"Middle start bottom",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"middle-end-top",title:"Middle end top",children:e.jsx(o,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"middle-end-bottom",title:"Middle end bottom",children:e.jsx(o,{})})})]}),u=()=>e.jsxs("div",{children:[e.jsxs(t,{title:"Click Me!",activeKey:"a",children:[e.jsx(t.Item,{eventKey:"a",children:"Item A"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]}),e.jsxs(t,{title:"Click Me!",activeKey:"item-2-1-2",children:[e.jsx(t.Item,{eventKey:"item-1",children:"Item 1"}),e.jsxs(t.Menu,{eventKey:"item-2",title:"Item 2",children:[e.jsxs(t.Menu,{eventKey:"item-2-1",title:"Item 2-1",children:[e.jsx(t.Item,{eventKey:"item-2-1-1",children:"Item 2-1-1"}),e.jsx(t.Item,{eventKey:"item-2-1-2",children:"Item 2-1-2"}),e.jsx(t.Item,{eventKey:"item-2-1-3",children:"Item 2-1-3"})]}),e.jsx(t.Item,{eventKey:"item-2-2",children:"Item 2-2"}),e.jsx(t.Item,{eventKey:"item-2-3",children:"Item 2-3"})]}),e.jsx(t.Item,{children:"Item 3"})]})]}),v=()=>e.jsxs("div",{children:[e.jsxs(t,{disabled:!0,title:"Click Me!",children:[e.jsx(t.Item,{children:"Item A"}),e.jsx(t.Item,{children:"Item B"}),e.jsx(t.Item,{children:"Item C"}),e.jsx(t.Item,{children:"Item D"})]}),e.jsxs(t,{title:"Click Me!",children:[e.jsx(t.Item,{children:"Item A"}),e.jsx(t.Item,{disabled:!0,children:"Item B"}),e.jsx(t.Item,{children:"Item C"}),e.jsx(t.Item,{children:"Item D"})]})]}),y=()=>e.jsx("div",{children:e.jsxs(t,{title:"Click Me!",children:[e.jsx(t.Item,{variant:"header",children:e.jsxs("div",{className:"pt-3 pb-1 px-3",children:[e.jsx("span",{children:"Signed in as"}),e.jsx("div",{className:"font-semibold mt-1 text-gray-800 dark:text-white",children:"alex_g@theme_nate.com"})]})}),e.jsx(t.Item,{variant:"divider"}),e.jsx(t.Item,{children:"Item A"}),e.jsx(t.Item,{children:"Item B"}),e.jsx(t.Item,{children:"Item C"}),e.jsx(t.Item,{children:"Item D"}),e.jsx(t.Item,{variant:"custom",children:e.jsx("div",{className:`\r
							cursor-pointer \r
							px-3 \r
							py-2 \r
							text-indigo-600 \r
							font-semibold \r
							hover:bg-gray-100 \r
							dark:hover:bg-black \r
							dark:hover:bg-opacity-20\r
						`,children:"Custom Dropdown Item"})})]})}),g=()=>e.jsx("div",{children:e.jsxs(t,{title:"Click Me!",children:[e.jsx(t.Item,{children:e.jsx(n,{className:"menu-item-link",to:"/ui-components/checkbox",children:"Checkbox"})}),e.jsx(t.Item,{children:e.jsx(n,{className:"menu-item-link",to:"/ui-components/button",children:"Button"})}),e.jsx(t.Item,{children:e.jsx(n,{className:"menu-item-link",to:"/ui-components/alert",children:"Alert"})}),e.jsx(t.Item,{children:e.jsx(n,{className:"menu-item-link",to:"/ui-components/dialog",children:"Dialog"})})]})}),d="Dropdown",D={title:"Dropdown",desc:"Dropdown allow users select a single item from a list of options."},w=[{mdName:"Default",mdPath:d,title:"Default",desc:"Default usage of Dropdown",component:e.jsx(p,{})},{mdName:"CustomToggle",mdPath:d,title:"Custom Toggle",desc:"We can set custom toggler for Dropdown via <code>renderTitle</code> prop.",component:e.jsx(h,{})},{mdName:"Trigger",mdPath:d,title:"Trigger",desc:"Dropdown allow us to set<code>trigger</code> mode to <code>click</code>, <code>hover</code> or <code>context</code>.",component:e.jsx(x,{})},{mdName:"Submenu",mdPath:d,title:"Submenu",desc:"Dropdown can also have multiple levels.",component:e.jsx(I,{})},{mdName:"Placement",mdPath:d,title:"Placement",desc:"Dropdown menu placement can be assign around the trigger element in different positions via <code>placement</code> prop.",component:e.jsx(j,{})},{mdName:"DefaultActive",mdPath:d,title:"Default Active",desc:"Set Dropdown.Item eventKey value to <code>activeKey</code> prop to highlight the Dropdown.Item active status.",component:e.jsx(u,{})},{mdName:"Disabled",mdPath:d,title:"Disabled",desc:"<code>disabled</code> prop can be use in both Dropdown or Dropdown.Item to disable user action.",component:e.jsx(v,{})},{mdName:"DropdownItemVariant",mdPath:d,title:"Dropdown Item Type",desc:"Dropdown.Item has several variant type can br apply, Pass the variant prop and use either <code>'default'</code>, <code>'header'</code>, <code>'divider'</code>, <code>'default'</code> ",component:e.jsx(y,{})},{mdName:"WithRouterLink",mdPath:d,title:"With RouterLink",desc:"Usage with RouterLink.",component:e.jsx(g,{})}],b=[{component:"Dropdown",api:[{propName:"title",type:"<code>string</code>",default:"-",desc:"Dropdown title"},{propName:"renderTitle",type:"<code>ReactNode</code>",default:"-",desc:"Custom Dropdown title"},{propName:"trigger",type:"<code>'click'</code> | <code>'hover'</code> | <code>'context'</code> ",default:"<code>'click'</code>",desc:"Trigger mode of Dropdown"},{propName:"placement",type:"<code>'top-start'</code> | <code>'top-center'</code> | <code>'top-end'</code> | <code>'bottom-start'</code> | <code>'bottom-center'</code> | <code>'bottom-end'</code> | <code>'middle-start-top'</code>| <code>'middle-start-bottom'</code> | <code>'middle-end-top'</code>| <code>'middle-end-bottom'</code>",default:"<code>'bottom-start'</code>",desc:"Placement where the Dropdown menu expand"},{propName:"menuClass",type:"<code>string</code>",default:"-",desc:"Additional class for dropdown menu (<code>!</code> modifier recommended for tailwind css overiding)"},{propName:"menuStyle",type:"<code>object</code>",default:"-",desc:"Additional styles for dropdown menu"},{propName:"toggleClassName",type:"<code>string</code>",default:"-",desc:"Additional class dropdown toggle (<code>!</code> modifier recommended for tailwind css overiding)"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disable Dropdown expand"},{propName:"activeKey",type:"<code>string</code>",default:"-",desc:"Mark corresponded <code>Dropdown.Item</code>to active by matching it <code>eventkey</code> prop"},{propName:"onClick",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown toggle is clicked"},{propName:"onMouseEnter",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown toggle is on mouse enter"},{propName:"onMouseLeave",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown toggle is on mouse leave"},{propName:"onContextMenu",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown toggle is right clicked"},{propName:"onSelect",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown item is clicked"},{propName:"onOpen",type:"<code>() => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown is open"},{propName:"onClose",type:"<code>() => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown is close"},{propName:"onToggle",type:"<code>(open: boolean) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown is open or close"}]},{component:"Dropdown.Item",api:[{propName:"active",type:"<code>boolean</code>",default:"-",desc:"Whether active current Dropdown Item"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether disabled current Dropdown Item"},{propName:"variant",type:"<code>'default'</code> | <code>'header'</code> | <code>'divider'</code> | <code>'custom'</code>",default:"-",desc:"Define the type of Dropdown Item "},{propName:"eventKey",type:"<code>string</code>",default:"-",desc:"The value of Dropdown Item"},{propName:"onClick",type:"<code>() => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown Item is clicked"},{propName:"onSelect",type:"<code>(eventKey: string, e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Dropdown Item is clicked"}]},{component:"Dropdown.Menu",api:[{propName:"title",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Title for submenu"},{propName:"eventKey",type:"<code>string</code>",default:"-",desc:"The value of Dropdown submenu"}]}],Y=()=>e.jsx(m,{header:D,demos:w,api:b});export{Y as default};
