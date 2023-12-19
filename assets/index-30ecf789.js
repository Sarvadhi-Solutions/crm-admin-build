import{j as e}from"./index-212e59d9.js";import{D as d}from"./DemoLayout-dc060094.js";import{A as o}from"./Alert-5e3bd2c1.js";import{aB as i}from"./index.esm-479f1ca8.js";import"./AdaptableCard-7132adf3.js";import"./Card-19ccdde4.js";import"./Views-148dac6a.js";import"./Affix-210c7b0e.js";import"./Button-5108a1e9.js";import"./Tooltip-97f8dea2.js";import"./usePopper-35198492.js";import"./index.esm-179a66ff.js";import"./index-fa5e85bc.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-f891a5c4.js";import"./index-2fa3b54e.js";import"./index-d86c5414.js";import"./index.esm-c089df14.js";import"./useTimeout-25f63a1e.js";import"./CloseButton-13563c79.js";import"./StatusIcon-54b06855.js";const s=()=>e.jsx("div",{children:e.jsx(o,{children:"Additional description and information about copywriting."})}),n=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,children:"Additional description and information about copywriting."})}),r=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"success",customIcon:e.jsx(i,{}),children:"Additional description and information about copywriting."})}),a=()=>e.jsxs("div",{children:[e.jsx(o,{showIcon:!0,className:"mb-4",type:"info",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"success",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"danger",children:"Additional description and information about copywriting."})]}),l=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"danger",title:"Error!",children:"Additional description and information about copywriting."})}),p=()=>{const c=()=>{console.log("Alert closed!")};return e.jsx("div",{children:e.jsx(o,{closable:!0,type:"success",onClose:c,children:"Thanks for submitting your application. Our team will get back to you soon."})})},t="Alert",m={title:"Alert",desc:"Alerts are used to feedback to the user action or system activity."},u=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage of alert.",component:e.jsx(s,{})},{mdName:"Icon",mdPath:t,title:"Icon",desc:"Display icon within alert.",component:e.jsx(n,{})},{mdName:"CustomIcon",mdPath:t,title:"CustomIcon",desc:"Icon can be replaced by setting own icon to <code>customIcon</code> prop.",component:e.jsx(r,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Change the status of the alerts by passing the <code>type</code> prop. Alert supports <code>info</code>, <code>success</code>, <code>warning</code>, and <code>danger</code> types.",component:e.jsx(a,{})},{mdName:"Title",mdPath:t,title:"Title",desc:"Alert also can have a title by input a string to <code>title</code> prop.",component:e.jsx(l,{})},{mdName:"Closable",mdPath:t,title:"Closable",desc:"Turn <code>closable</code> prop to true to display close button which allow user dismiss alert.",component:e.jsx(p,{})}],y=[{component:"Alert",api:[{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Alert title"},{propName:"showIcon",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display icon based on type"},{propName:"customIcon",type:"<code>ReactNode</code>",default:"-",desc:"Replace default icon to custom icon"},{propName:"type",type:"<code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code>",default:"<code>'warning'</code>",desc:"The status of the alert"},{propName:"closable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display close button"},{propName:"customClose",type:"<code>ReactNode | <code>string</code>",default:"-",desc:"Replace default close"},{propName:"rounded",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether the Alert have round border radius"},{propName:"onClose",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Alert is closed"},{propName:"triggerByToast",type:"<code>boolean</code>",default:"<code>false</code>",desc:"identifier for toast trigger (for toast purpose)"},{propName:"duration",type:"<code>2000</code>",default:"<code>number</code>",desc:"Interval of dismiss (for toast purpose)"}]}],L=()=>e.jsx(d,{header:m,demos:u,api:y});export{L as default};
