import{j as e}from"./index-04de45f1.js";import{D as i}from"./DemoLayout-89a84ba0.js";import{A as o}from"./Alert-b77365f1.js";import{a9 as d}from"./index.esm-dece01db.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./SyntaxHighlighter-b6d1a340.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-5ffe062f.js";import"./DemoComponentApi-46ba6f54.js";import"./index-f4f40370.js";import"./index.esm-bec52084.js";import"./useTimeout-352435f8.js";import"./CloseButton-c81f3a7a.js";import"./StatusIcon-43cda077.js";const s=()=>e.jsx("div",{children:e.jsx(o,{children:"Additional description and information about copywriting."})}),n=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,children:"Additional description and information about copywriting."})}),r=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"success",customIcon:e.jsx(d,{}),children:"Additional description and information about copywriting."})}),a=()=>e.jsxs("div",{children:[e.jsx(o,{showIcon:!0,className:"mb-4",type:"info",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"success",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"danger",children:"Additional description and information about copywriting."})]}),p=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"danger",title:"Error!",children:"Additional description and information about copywriting."})}),l=()=>{const c=()=>{console.log("Alert closed!")};return e.jsx("div",{children:e.jsx(o,{closable:!0,type:"success",onClose:c,children:"Thanks for submitting your application. Our team will get back to you soon."})})},t="Alert",m={title:"Alert",desc:"Alerts are used to feedback to the user action or system activity."},u=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage of alert.",component:e.jsx(s,{})},{mdName:"Icon",mdPath:t,title:"Icon",desc:"Display icon within alert.",component:e.jsx(n,{})},{mdName:"CustomIcon",mdPath:t,title:"CustomIcon",desc:"Icon can be replaced by setting own icon to <code>customIcon</code> prop.",component:e.jsx(r,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Change the status of the alerts by passing the <code>type</code> prop. Alert supports <code>info</code>, <code>success</code>, <code>warning</code>, and <code>danger</code> types.",component:e.jsx(a,{})},{mdName:"Title",mdPath:t,title:"Title",desc:"Alert also can have a title by input a string to <code>title</code> prop.",component:e.jsx(p,{})},{mdName:"Closable",mdPath:t,title:"Closable",desc:"Turn <code>closable</code> prop to true to display close button which allow user dismiss alert.",component:e.jsx(l,{})}],y=[{component:"Alert",api:[{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Alert title"},{propName:"showIcon",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display icon based on type"},{propName:"customIcon",type:"<code>ReactNode</code>",default:"-",desc:"Replace default icon to custom icon"},{propName:"type",type:"<code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code>",default:"<code>'warning'</code>",desc:"The status of the alert"},{propName:"closable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display close button"},{propName:"customClose",type:"<code>ReactNode | <code>string</code>",default:"-",desc:"Replace default close"},{propName:"rounded",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether the Alert have round border radius"},{propName:"onClose",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Alert is closed"},{propName:"triggerByToast",type:"<code>boolean</code>",default:"<code>false</code>",desc:"identifier for toast trigger (for toast purpose)"},{propName:"duration",type:"<code>2000</code>",default:"<code>number</code>",desc:"Interval of dismiss (for toast purpose)"}]}],P=()=>e.jsx(i,{header:m,demos:u,api:y});export{P as default};
