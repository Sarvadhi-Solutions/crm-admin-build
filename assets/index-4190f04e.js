import{r as n,j as e}from"./index-deb31e10.js";import{D as f}from"./DemoLayout-2baa642d.js";import{B as s}from"./Button-c9bc60b5.js";import{D as l}from"./Drawer-d475ebcd.js";import{R as h}from"./index-5baf7804.js";import"./AdaptableCard-007746c5.js";import"./Card-085ac9b2.js";import"./Views-5dd9e85c.js";import"./Affix-db349f1e.js";import"./Tooltip-97f81a61.js";import"./usePopper-0c8aa062.js";import"./index.esm-ca652311.js";import"./index-a5be5469.js";import"./index.esm-7e071777.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-16e47dbf.js";import"./index-cde2e121.js";import"./index-5994de1d.js";import"./index.esm-7afe35c3.js";import"./index-43dec7b5.js";import"./CloseButton-359f8e10.js";const w=()=>{const[a,t]=n.useState(!1),r=()=>{t(!0)},o=c=>{console.log("onDrawerClose",c),t(!1)};return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>r(),children:"Open Drawer"}),e.jsx(l,{title:"Drawer Title",isOpen:a,onClose:o,onRequestClose:o,children:"Drawer Content"})]})},u=[{name:"Top",value:"top"},{name:"Right",value:"right"},{name:"Bottom",value:"bottom"},{name:"Left",value:"left"}],D=()=>{const[a,t]=n.useState(!1),[r,o]=n.useState(u[1].value),c=()=>{t(!0)},i=d=>{console.log("onDrawerClose",d),t(!1)},p=d=>{o(d)};return e.jsxs("div",{className:"flex-wrap inline-flex xl:flex items-center gap-2",children:[e.jsx(h.Group,{value:r,onChange:p,children:u.map(d=>e.jsx(h,{value:d.value,id:d.value,children:d.name},d.value))}),e.jsx(s,{onClick:()=>c(),children:"Open Drawer"}),e.jsx(l,{title:"Drawer Title",isOpen:a,placement:r,onClose:i,onRequestClose:i,children:"Drawer Content"})]})},C=()=>{const[a,t]=n.useState(!1),[r,o]=n.useState(!1),c=()=>{t(!0)},i=()=>{o(!0)},p=()=>{t(!1),o(!1)};return e.jsxs("div",{children:[e.jsx(s,{variant:"twoTone",className:"mx-2",onClick:()=>c(),children:"Vertical Drawer"}),e.jsx(s,{variant:"twoTone",onClick:()=>i(),children:"Horizontal Drawer"}),e.jsx(l,{title:"Vertical Drawer",isOpen:a,placement:"right",width:600,onClose:p,onRequestClose:p,children:"Drawer Content"}),e.jsx(l,{title:"Horizontal Drawer",isOpen:r,placement:"bottom",height:300,onClose:p,onRequestClose:p,children:"Drawer Content"})]})},y=()=>{const[a,t]=n.useState(!1),r=()=>{t(!0)},o=()=>{t(!1)},c=e.jsxs("div",{className:"text-right w-full",children:[e.jsx(s,{size:"sm",className:"mr-2",onClick:()=>o(),children:"Cancel"}),e.jsx(s,{size:"sm",variant:"solid",onClick:()=>o(),children:"Confirm"})]});return e.jsxs("div",{children:[e.jsx(s,{variant:"solid",onClick:()=>r(),children:"Open Drawer"}),e.jsx(l,{title:"Drawer Title",isOpen:a,footer:c,onClose:o,onRequestClose:o,children:"Drawer Content"})]})},x=()=>{const[a,t]=n.useState(!1),r=()=>{t(!0)},o=()=>{t(!1)},c=e.jsxs("div",{className:"flex w-full items-start",children:[e.jsx(s,{block:!0,className:"mx-2",onClick:()=>o(),children:"Cancel"}),e.jsx(s,{block:!0,className:"mx-2",variant:"solid",onClick:()=>o(),children:"Confirm"})]}),i=e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2",children:"Drawer Title"}),e.jsx("p",{children:"To iterate is human, to recurse divine."})]});return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>r(),children:"Open Drawer"}),e.jsx(l,{title:i,isOpen:a,footer:c,headerClass:"!items-start !bg-gray-100 dark:!bg-gray-700",footerClass:"!border-t-0 !p-3",onClose:o,onRequestClose:o,children:"Drawer Content"})]})},v=()=>{const[a,t]=n.useState(!1),r=()=>{t(!0)},o=c=>{console.log("onDrawerClose",c),t(!1)};return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>r(),children:"Open Drawer"}),e.jsx(l,{title:"Drawer Title",isOpen:a,closable:!1,onClose:o,onRequestClose:o,children:"Drawer Content"})]})},m="Drawer",N={title:"Drawer",desc:"Drawer is a panel that slides out from the edge of the screen which containing supplementary content."},b=[{mdName:"Basic",mdPath:m,title:"Basic",desc:"Basic usage of Drawer",component:e.jsx(w,{})},{mdName:"Placement",mdPath:m,title:"Placement",desc:"Set the <code>placement</code> prop to <code>'top'</code>, <code>'right'</code>, <code>'bottom'</code>, or <code>'left'</code> to arrange where the Drawer slide out from.",component:e.jsx(D,{})},{mdName:"WidthHeight",mdPath:m,title:"Width & Height",desc:"We can adjust Drawer via with <code>height</code> & <code>width</code> prop.",component:e.jsx(C,{})},{mdName:"Footer",mdPath:m,title:"Footer",desc:"We can also have a footer under the Drawer.",component:e.jsx(y,{})},{mdName:"CustomStyle",mdPath:m,title:"Custom Style",desc:"Drawer allow us to set extra class via <code>headerClass</code>, <code>bodyClass</code> & <code>footerClass</code>",component:e.jsx(x,{})},{mdName:"Closable",mdPath:m,title:"Closable",desc:"Set <code>closeable</code> to false will hide Drawer close icon.",component:e.jsx(v,{})}],g=[{component:"Drawer",api:[{propName:"placement",type:"<code>'top'</code> | <code>'right'</code> | <code>'bottom'</code> | <code>'left'</code> ",default:"<code>'right'</code>",desc:"Drawer placement"},{propName:"width",type:"<code>string</code> | <code>number</code>",default:"<code>400</code>",desc:"Drawer width, (only available when placement is <code>'left'</code> or <code>'right'</code>"},{propName:"height",type:"<code>string</code> | <code>number</code>",default:"<code>400</code>",desc:"Drawer height, (only available when placement is <code>'top'</code> or <code>'bottom'</code>"},{propName:"title",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Title of Drawer"},{propName:"footer",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Footer of Drawer"},{propName:"headerClass",type:"<code>string</code>",default:"-",desc:"Extra class for Drawer header (<code>!</code> modifier recommended for tailwind css overiding)"},{propName:"bodyClass",type:"<code>string</code>",default:"-",desc:"Extra class for Drawer body (<code>!</code> modifier recommended for tailwind css overiding)"},{propName:"footerClass",type:"<code>string</code>",default:"-",desc:"Extra class for Drawer footer (<code>!</code> modifier recommended for tailwind css overiding)"},{propName:"showBackdrop",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether the display Drawer backdrop"},{propName:"lockScroll",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to disable window scrolling when Drawer is open"},{propName:"isOpen",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to display Drawer"},{propName:"style",type:"<code>object: { content: object, overlay: object }</code>",default:"-",desc:"Style for Drawer & backdrop"},{propName:"portalClassName",type:"<code>string</code>",default:"-",desc:"Class name that append to Drawer portal"},{propName:"bodyOpenClassName",type:"<code>string</code>",default:"-",desc:"Class name that append to body while Drawer is open"},{propName:"htmlOpenClassName",type:"<code>string</code>",default:"-",desc:"Class name that append to html while Drawer is open"},{propName:"overlayClassName",type:"<code>string</code>",default:"-",desc:"Class name for Drawer backdrop"},{propName:"appElement",type:"<code>SafeHTMLElement</code> | <code>SafeHTMLCollection</code> | <code>SafeNodeList</code> | <code>SafeHTMLElement[]</code>",default:"-",desc:"Setting external node to Drawer content"},{propName:"onAfterOpen",type:"<code>(overlayElement: HTMLElement, contentElement: HTMLElement) => void</code>",default:"-",desc:"Callback function after Drawer open"},{propName:"closable",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether show Drawer close icon"},{propName:"onClose",type:"<code>(event: Event) => void</code>",default:"-",desc:"Callback function after click on Drawer close icon"},{propName:"onRequestClose",type:"<code>(event: Event) => void</code>",default:"-",desc:"Callback function after Drawer close"},{propName:"closeTimeoutMS",type:"<code>(event: Event) => void</code>",default:"<code>300</code>",desc:"Timeout speed during Drawer close"},{propName:"shouldFocusAfterRender",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Boolean indicating if the Drawer should be focused after render"},{propName:"shouldReturnFocusAfterClose",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Boolean indicating if the Drawer should restore focus to the element that had focus prior to its display"},{propName:"preventScroll",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Boolean indicating if the Drawer should use the preventScroll flag when restoring focus to the element that had focus prior to its display"},{propName:"shouldCloseOnOverlayClick",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to close Drawer when the backdrop is clicked"},{propName:"shouldCloseOnEsc",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to close Drawer when esc key pressed"},{propName:"parentSelector",type:"<code>() => document.body</code>",default:"<code>() => document.body</code>",desc:"Function that will be called to get the parent element that the Drawer will be attached to"},{propName:"overlayRef",type:"<code>(node: Node) => void</code>",default:"-",desc:"Drawer backdrop ref"},{propName:"contentRef",type:"<code>(node: Node) => void</code>",default:"-",desc:"Drawer content ref"}]}],J=()=>e.jsx(f,{header:N,demos:b,api:g});export{J as default};
