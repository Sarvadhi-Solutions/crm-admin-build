import{j as e}from"./index-a20ba26a.js";import{D as d}from"./DemoLayout-5772f1ed.js";import{A as o}from"./Alert-8553d33a.js";import{aB as i}from"./index.esm-be6144e0.js";import"./AdaptableCard-ebe12b6a.js";import"./Card-bff24a36.js";import"./Views-bc53fe60.js";import"./Affix-037a7403.js";import"./Button-606f81c4.js";import"./Tooltip-b0886967.js";import"./usePopper-08e5e722.js";import"./index.esm-82d2638c.js";import"./index-1b414c07.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-a381a404.js";import"./index-62e0d317.js";import"./index-8466741f.js";import"./index.esm-2bfb7347.js";import"./useTimeout-7becf600.js";import"./CloseButton-4e026f10.js";import"./StatusIcon-41b0d7b0.js";const s=()=>e.jsx("div",{children:e.jsx(o,{children:"Additional description and information about copywriting."})}),n=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,children:"Additional description and information about copywriting."})}),r=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"success",customIcon:e.jsx(i,{}),children:"Additional description and information about copywriting."})}),a=()=>e.jsxs("div",{children:[e.jsx(o,{showIcon:!0,className:"mb-4",type:"info",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"success",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"danger",children:"Additional description and information about copywriting."})]}),l=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"danger",title:"Error!",children:"Additional description and information about copywriting."})}),p=()=>{const c=()=>{console.log("Alert closed!")};return e.jsx("div",{children:e.jsx(o,{closable:!0,type:"success",onClose:c,children:"Thanks for submitting your application. Our team will get back to you soon."})})},t="Alert",m={title:"Alert",desc:"Alerts are used to feedback to the user action or system activity."},u=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage of alert.",component:e.jsx(s,{})},{mdName:"Icon",mdPath:t,title:"Icon",desc:"Display icon within alert.",component:e.jsx(n,{})},{mdName:"CustomIcon",mdPath:t,title:"CustomIcon",desc:"Icon can be replaced by setting own icon to <code>customIcon</code> prop.",component:e.jsx(r,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Change the status of the alerts by passing the <code>type</code> prop. Alert supports <code>info</code>, <code>success</code>, <code>warning</code>, and <code>danger</code> types.",component:e.jsx(a,{})},{mdName:"Title",mdPath:t,title:"Title",desc:"Alert also can have a title by input a string to <code>title</code> prop.",component:e.jsx(l,{})},{mdName:"Closable",mdPath:t,title:"Closable",desc:"Turn <code>closable</code> prop to true to display close button which allow user dismiss alert.",component:e.jsx(p,{})}],y=[{component:"Alert",api:[{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Alert title"},{propName:"showIcon",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display icon based on type"},{propName:"customIcon",type:"<code>ReactNode</code>",default:"-",desc:"Replace default icon to custom icon"},{propName:"type",type:"<code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code>",default:"<code>'warning'</code>",desc:"The status of the alert"},{propName:"closable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display close button"},{propName:"customClose",type:"<code>ReactNode | <code>string</code>",default:"-",desc:"Replace default close"},{propName:"rounded",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether the Alert have round border radius"},{propName:"onClose",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Alert is closed"},{propName:"triggerByToast",type:"<code>boolean</code>",default:"<code>false</code>",desc:"identifier for toast trigger (for toast purpose)"},{propName:"duration",type:"<code>2000</code>",default:"<code>number</code>",desc:"Interval of dismiss (for toast purpose)"}]}],L=()=>e.jsx(d,{header:m,demos:u,api:y});export{L as default};
