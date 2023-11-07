import{j as e}from"./index-c2c71b67.js";import{T as m}from"./index-e96a00fb.js";import{D as j}from"./DemoLayout-fc5b9bfb.js";import{t as n,N as a}from"./toast-1c7e88ac.js";import{B as s}from"./Button-9c5fa51c.js";import{A as f}from"./index-5345338d.js";import{aC as u}from"./index.esm-854b309f.js";import{A as N}from"./Alert-94df1fc7.js";import"./index.esm-ab028e22.js";import"./AdaptableCard-6d79530e.js";import"./Card-641c7c13.js";import"./Views-3e469d6a.js";import"./Affix-ce40fbf4.js";import"./Tooltip-008854ca.js";import"./usePopper-2b474c15.js";import"./index.esm-95d05b2b.js";import"./index-ccd45f27.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c30e1148.js";import"./index-dbeb5997.js";import"./useTimeout-a89b02a4.js";import"./CloseButton-3657ddf2.js";import"./StatusIcon-5eed5f69.js";import"./chainedFunction-070f832c.js";import"./useMergeRef-788c4cb0.js";const b=()=>{const t=e.jsx(a,{title:"Mesasge",children:"The fat cat sat on the mat bat away with paws annoy owner."});function i(){n.push(t)}return e.jsx("div",{children:e.jsx(s,{className:"mr-2 mb-2",onClick:i,children:"Show toast"})})},y=()=>{const t=i=>{n.push(e.jsx(a,{title:i.charAt(0).toUpperCase()+i.slice(1),type:i,children:"The fat cat sat on the mat bat away with paws annoy owner."}))};return e.jsxs("div",{children:[e.jsx(s,{className:"mr-2 mb-2",onClick:()=>t("success"),children:"Success"}),e.jsx(s,{className:"mr-2 mb-2",onClick:()=>t("info"),children:"Info"}),e.jsx(s,{className:"mr-2 mb-2",onClick:()=>t("danger"),children:"Danger"}),e.jsx(s,{className:"mr-2 mb-2",onClick:()=>t("warning"),children:"Warning"})]})},C=()=>{const t=e.jsx(a,{title:"You received a Gift!",customIcon:e.jsx(u,{className:"text-2xl text-indigo-600"}),children:"Something you may like."}),i=e.jsx(a,{title:"Emily Gale",customIcon:e.jsx(f,{shape:"circle",src:"/img/avatars/thumb-1.jpg"}),children:"Sent you a friend request."});function d(x){n.push(x==="icon"?t:i)}return e.jsxs("div",{children:[e.jsx(s,{className:"mr-2",onClick:()=>d("icon"),children:"Custom icon"}),e.jsx(s,{onClick:()=>d("avatar"),children:"Avatar"})]})},w=()=>{const t=i=>{n.push(e.jsx(a,{type:"success",title:"Message"}),{placement:i})};return e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 max-w-xl",children:[e.jsx(s,{className:"mb-2",onClick:()=>t("top-start"),children:"Top Start"}),e.jsx(s,{className:"mb-2",onClick:()=>t("top-center"),children:"Top Center"}),e.jsx(s,{className:"mb-2",onClick:()=>t("top-end"),children:"Top End"}),e.jsx(s,{className:"mb-2",onClick:()=>t("bottom-start"),children:"Bottom Start"}),e.jsx(s,{className:"mb-2",onClick:()=>t("bottom-center"),children:"Bottom Center"}),e.jsx(s,{className:"mb-2",onClick:()=>t("bottom-end"),children:"Bottom End"})]})},v=()=>{const t=e.jsx(a,{closable:!0,title:"Mesasge",children:"The fat cat sat on the mat bat away with paws annoy owner."});function i(){n.push(t)}return e.jsx("div",{children:e.jsx(s,{onClick:i,children:"Show toast"})})},g=()=>{function t(){n.push(e.jsx(N,{showIcon:!0,closable:!0,type:"success",rounded:!1,children:"Success"}),{offsetX:0,offsetY:0,transitionType:"fade",block:!0})}return e.jsx("div",{children:e.jsx(s,{className:"mr-2",onClick:t,children:"Show Alert"})})},T=()=>{function t(){n.push(e.jsx(a,{closable:!0,type:"success",duration:0,children:"Success"}))}function i(){n.push(e.jsx(a,{closable:!0,type:"success",duration:2e3,children:"Success"}))}return e.jsxs("div",{children:[e.jsx(s,{className:"mr-2",onClick:t,children:"Persist"}),e.jsx(s,{className:"mr-2",onClick:i,children:"Close after 2s"})]})},k=()=>{function t(d){n.remove(d)}function i(){const d=n.push(e.jsxs(a,{title:"Mesasge",duration:0,children:[e.jsx("div",{children:"The fat cat sat on the mat bat away with paws annoy owner."}),e.jsxs("div",{className:"text-right mt-3",children:[e.jsx(s,{size:"xs",variant:"solid",className:"mr-2",onClick:()=>t(d),children:"Confirm"}),e.jsx(s,{size:"xs",onClick:()=>t(d),children:"Close"})]})]}))}return e.jsx(s,{onClick:i,children:"Show toast"})},r="Toast",A={title:"Toast",desc:"Toast is used to show message on top of an overlay to update that users the status of system."},S=[{mdName:"Notification",mdPath:r,title:"Notification",desc:"Notification pop up with toast",component:e.jsx(b,{})},{mdName:"NotificationType",mdPath:r,title:"Notification Type",desc:"Indicate <code>type</code> of Notification will show corresponded icon & colors, type can be <code>'info'</code>, <code>'warning'</code>, <code>'error'</code>, or <code>'success'</code>.",component:e.jsx(y,{})},{mdName:"CustomIcon",mdPath:r,title:"Custom icon",desc:"Then icon in Notification can be replaced by any element.",component:e.jsx(C,{})},{mdName:"Placement",mdPath:r,title:"Placement",desc:"Toast placement can be assign around the trigger element in different positions, there are 6 placement options available.",component:e.jsx(w,{})},{mdName:"Closable",mdPath:r,title:"Closable",desc:"Enable <code>closable</code> prop to show close icon in Notification",component:e.jsx(v,{})},{mdName:"AlertToast",mdPath:r,title:"Alert",desc:'Toast can also use with <a href="/ui-components/alert" class="text-blue-500">Alert</a>.',component:e.jsx(g,{})},{mdName:"Duration",mdPath:r,title:"Duration",desc:"Setting <code>duration</code> prop on Notification to specify the duration of open, toast will never dismiss if duration value is <code>0</code>.",component:e.jsx(T,{})},{mdName:"CustomClose",mdPath:r,title:"CustomClose",desc:"<code>toast.push()</code> will return a uid of notification instance, we can pass this uid to <code>toast.remove(uid)</code> method to remove the corresponded notification.",component:e.jsx(k,{})}],I=[{component:"Notification",api:[{propName:"closable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to show close icon"},{propName:"customIcon",type:"<code>ReactNode</code> | <code>string</code>",default:"-",desc:"Custom element beside Notification content"},{propName:"duration",type:"<code>number</code>",default:"<code>3000</code>",desc:"Time in seconds before Notification dismiss, it will never dismiss if duration value is 0"},{propName:"onClose",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Notification is closed"},{propName:"title",type:"<code>string</code>",default:"-",desc:"Title of Notification"},{propName:"type",type:"<code>'info'</code> | <code>'warning'</code> | <code>'success'</code> | <code>'danger'</code>",default:"-",desc:"Type of Notification"},{propName:"width",type:"<code>number</code> | <code>string</code>",default:"<code>350</code>",desc:"Width of Notification"}]}],{Tr:c,Th:l,Td:o,THead:h,TBody:p}=m,D=e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"API"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{className:"mb-3",children:"toast"}),e.jsxs(m,{className:"demo-api-table mb-8",children:[e.jsx(h,{children:e.jsxs(c,{children:[e.jsx(l,{children:"Method"}),e.jsx(l,{children:"Description"})]})}),e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:e.jsx("code",{children:"toast.push(message: ReactNode, options?: ToastProps): string"})}),e.jsx(o,{children:"Method to pop a toast message, it will return a UID for the current toast"})]}),e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:e.jsx("code",{children:"toast.remove(key: string): void"})}),e.jsx(o,{children:"Method to remove a specify toast message by using the key from push method"})]}),e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:e.jsx("code",{children:"toast.removeAll(): void"})}),e.jsx(o,{children:"Method to remove all toast message"})]})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h6",{className:"mb-3",children:"ToastProps"}),e.jsxs(m,{className:"demo-api-table mb-8",children:[e.jsx(h,{children:e.jsxs(c,{children:[e.jsx(l,{children:"Prop"}),e.jsx(l,{children:"Description"}),e.jsx(l,{children:"Type"}),e.jsx(l,{children:"Default"})]})}),e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:"block"}),e.jsx(o,{children:"Whether to display toast in full width"}),e.jsx(o,{children:e.jsx("code",{children:"boolean"})}),e.jsx(o,{children:e.jsx("code",{children:"false"})})]}),e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:"offsetX"}),e.jsx(o,{children:"Offset X of toast"}),e.jsx(o,{children:e.jsx("code",{children:"number"})}),e.jsx(o,{children:e.jsx("code",{children:"30"})})]}),e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:"offsetY"}),e.jsx(o,{children:"Offset Y of toast"}),e.jsx(o,{children:e.jsx("code",{children:"number"})}),e.jsx(o,{children:e.jsx("code",{children:"30"})})]}),e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:"placement"}),e.jsx(o,{children:"Placement of toast"}),e.jsxs(o,{children:[e.jsx("code",{children:"'top-start'"})," | ",e.jsx("code",{children:"'top-center'"})," ","| ",e.jsx("code",{children:"'top-end'"})," |"," ",e.jsx("code",{children:"'bottom-start'"})," |"," ",e.jsx("code",{children:"'bottom-center'"})," |"," ",e.jsx("code",{children:"'bottom-end'"})]}),e.jsx(o,{children:e.jsx("code",{children:"'top-end'"})})]}),e.jsxs(c,{children:[e.jsx(o,{className:"font-semibold",children:"transitionType"}),e.jsx(o,{children:"Transition type of animation"}),e.jsxs(o,{children:[e.jsx("code",{children:"'scale'"})," | ",e.jsx("code",{children:"'fade'"})]}),e.jsx(o,{children:e.jsx("code",{children:"'scale'"})})]})]})]})]})]}),te=()=>e.jsx(j,{header:A,demos:S,api:I,note:D,hideApiTitle:!0});export{te as default};
