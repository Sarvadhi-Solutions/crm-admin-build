import{j as e}from"./index-c4854441.js";import{D as d}from"./DemoLayout-7e3d1e94.js";import{A as o}from"./Alert-c43b1341.js";import{aB as i}from"./index.esm-600eab3e.js";import"./AdaptableCard-c03e443e.js";import"./Card-694d2290.js";import"./Views-a7a22f5b.js";import"./Affix-41e1ab93.js";import"./Button-01aee70f.js";import"./Tooltip-ff9677e2.js";import"./usePopper-36d997d0.js";import"./index.esm-40a48121.js";import"./index-611f00f8.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-117346ff.js";import"./index-c102084f.js";import"./index-2a967f86.js";import"./index.esm-626783fa.js";import"./useTimeout-52e2a342.js";import"./CloseButton-481ca768.js";import"./StatusIcon-9c6ff3de.js";const s=()=>e.jsx("div",{children:e.jsx(o,{children:"Additional description and information about copywriting."})}),n=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,children:"Additional description and information about copywriting."})}),r=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"success",customIcon:e.jsx(i,{}),children:"Additional description and information about copywriting."})}),a=()=>e.jsxs("div",{children:[e.jsx(o,{showIcon:!0,className:"mb-4",type:"info",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"success",children:"Additional description and information about copywriting."}),e.jsx(o,{showIcon:!0,className:"mb-4",type:"danger",children:"Additional description and information about copywriting."})]}),l=()=>e.jsx("div",{children:e.jsx(o,{showIcon:!0,type:"danger",title:"Error!",children:"Additional description and information about copywriting."})}),p=()=>{const c=()=>{console.log("Alert closed!")};return e.jsx("div",{children:e.jsx(o,{closable:!0,type:"success",onClose:c,children:"Thanks for submitting your application. Our team will get back to you soon."})})},t="Alert",m={title:"Alert",desc:"Alerts are used to feedback to the user action or system activity."},u=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage of alert.",component:e.jsx(s,{})},{mdName:"Icon",mdPath:t,title:"Icon",desc:"Display icon within alert.",component:e.jsx(n,{})},{mdName:"CustomIcon",mdPath:t,title:"CustomIcon",desc:"Icon can be replaced by setting own icon to <code>customIcon</code> prop.",component:e.jsx(r,{})},{mdName:"Type",mdPath:t,title:"Type",desc:"Change the status of the alerts by passing the <code>type</code> prop. Alert supports <code>info</code>, <code>success</code>, <code>warning</code>, and <code>danger</code> types.",component:e.jsx(a,{})},{mdName:"Title",mdPath:t,title:"Title",desc:"Alert also can have a title by input a string to <code>title</code> prop.",component:e.jsx(l,{})},{mdName:"Closable",mdPath:t,title:"Closable",desc:"Turn <code>closable</code> prop to true to display close button which allow user dismiss alert.",component:e.jsx(p,{})}],y=[{component:"Alert",api:[{propName:"title",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Alert title"},{propName:"showIcon",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display icon based on type"},{propName:"customIcon",type:"<code>ReactNode</code>",default:"-",desc:"Replace default icon to custom icon"},{propName:"type",type:"<code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code>",default:"<code>'warning'</code>",desc:"The status of the alert"},{propName:"closable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display close button"},{propName:"customClose",type:"<code>ReactNode | <code>string</code>",default:"-",desc:"Replace default close"},{propName:"rounded",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether the Alert have round border radius"},{propName:"onClose",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Alert is closed"},{propName:"triggerByToast",type:"<code>boolean</code>",default:"<code>false</code>",desc:"identifier for toast trigger (for toast purpose)"},{propName:"duration",type:"<code>2000</code>",default:"<code>number</code>",desc:"Interval of dismiss (for toast purpose)"}]}],L=()=>e.jsx(d,{header:m,demos:u,api:y});export{L as default};
