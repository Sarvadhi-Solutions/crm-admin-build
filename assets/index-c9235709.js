import{j as e}from"./index-f40e4d75.js";import{D as i}from"./DemoLayout-cfdcd7ef.js";import{A as o}from"./Alert-40d5acad.js";import{aa as d}from"./index.esm-0d86f991.js";import"./AdaptableCard-37b8494e.js";import"./Card-902c739e.js";import"./Views-4f4cfc12.js";import"./Affix-93157901.js";import"./Button-50d583fa.js";import"./context-51e9908c.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./SyntaxHighlighter-3d3333b2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-b6817789.js";import"./extends-98964cd2.js";import"./index-c3422a4c.js";import"./DemoComponentApi-710da467.js";import"./index-a0876546.js";import"./index.esm-939b12b7.js";import"./useTimeout-e87eb97a.js";import"./CloseButton-579d2861.js";import"./StatusIcon-e5b0e9d4.js";const s=()=>e.jsx("div",{children:e.jsx(o,{children:"Additional description and information about copywriting."})}),r=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,children:"Additional description and information about copywriting."})}),n=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"success",customIcon:e.jsx(d,{}),children:"Additional description and information about copywriting."})}),a=()=>e.jsxs("div",{children:[e.jsx(o,{showIcon:!0,className:"mb-4",type:"info",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"success",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"danger",children:"Additional description and information about copywriting."})]}),p=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"danger",title:"Error!",children:"Additional description and information about copywriting."})}),l=()=>{const c=()=>{console.log("Alert closed!")};return e.jsx("div",{children:e.jsx(o,{closable:!0,type:"success",onClose:c,children:"Thanks for submitting your application. Our team will get back to you soon."})})},t="Alert",m={title:"Alert",desc:"Alerts are used to feedback to the user action or system activity."},u=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage of alert.",component:e.jsx(s,{})},{mdName:"Icon",mdPath:t,title:"Icon",desc:"Display icon within alert.",component:e.jsx(r,{})},{mdName:"CustomIcon",mdPath:t,title:"CustomIcon",desc:"Icon can be replaced by setting own icon to <code>customIcon</code> prop.",component:e.jsx(n,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Change the status of the alerts by passing the <code>type</code> prop. Alert supports <code>info</code>, <code>success</code>, <code>warning</code>, and <code>danger</code> types.",component:e.jsx(a,{})},{mdName:"Title",mdPath:t,title:"Title",desc:"Alert also can have a title by input a string to <code>title</code> prop.",component:e.jsx(p,{})},{mdName:"Closable",mdPath:t,title:"Closable",desc:"Turn <code>closable</code> prop to true to display close button which allow user dismiss alert.",component:e.jsx(l,{})}],y=[{component:"Alert",api:[{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Alert title"},{propName:"showIcon",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display icon based on type"},{propName:"customIcon",type:"<code>ReactNode</code>",default:"-",desc:"Replace default icon to custom icon"},{propName:"type",type:"<code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code>",default:"<code>'warning'</code>",desc:"The status of the alert"},{propName:"closable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display close button"},{propName:"customClose",type:"<code>ReactNode | <code>string</code>",default:"-",desc:"Replace default close"},{propName:"rounded",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether the Alert have round border radius"},{propName:"onClose",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Alert is closed"},{propName:"triggerByToast",type:"<code>boolean</code>",default:"<code>false</code>",desc:"identifier for toast trigger (for toast purpose)"},{propName:"duration",type:"<code>2000</code>",default:"<code>number</code>",desc:"Interval of dismiss (for toast purpose)"}]}],q=()=>e.jsx(i,{header:m,demos:u,api:y});export{q as default};
