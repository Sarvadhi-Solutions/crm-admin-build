import{j as e,r as m}from"./index-0ab2c514.js";import{D as u}from"./DemoLayout-77f5ebfa.js";import{U as o}from"./Upload-5e95a87c.js";import{B as f}from"./Button-968324b3.js";import{aK as x,aL as h}from"./index.esm-42b7b20a.js";import{i as g}from"./index.esm-615579fd.js";import{A as j}from"./index-713c1ac9.js";import"./AdaptableCard-afe020d2.js";import"./Card-36fb08c8.js";import"./Views-ba63249c.js";import"./Affix-7d1e4d66.js";import"./Tooltip-f95f0645.js";import"./usePopper-0441deed.js";import"./index.esm-d6cc7dce.js";import"./index-1a5cdab8.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-003b7048.js";import"./index-0835b627.js";import"./index-a4f8223f.js";import"./index.esm-785e2bc5.js";import"./cloneDeep-1f1702a9.js";import"./_MapCache-438327fc.js";import"./_getPrototype-6bd7c339.js";import"./index.esm-e1d89ef7.js";import"./CloseButton-84582cc2.js";import"./toast-f47eb111.js";import"./useTimeout-c2c175af.js";import"./StatusIcon-83ac331c.js";import"./chainedFunction-070f832c.js";import"./useMergeRef-788c4cb0.js";const b=()=>e.jsx("div",{children:e.jsx(o,{})}),U=()=>e.jsx("div",{children:e.jsx(o,{draggable:!0})}),v=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-6",children:e.jsx(o,{disabled:!0})}),e.jsx("div",{children:e.jsx(o,{draggable:!0,disabled:!0})})]}),N=()=>{const l=(d,t)=>{let a=!0;const s=["image/jpeg","image/png"],c=5e5;if(t.length>=2)return"You can only upload 2 file(s)";if(d)for(const n of d)s.includes(n.type)||(a="Please upload a .jpeg or .png file!"),n.size>=c&&(a="Upload image cannot more then 500kb!");return a},r=e.jsx("p",{className:"mt-2",children:"jpeg or png only (max 500kb)"});return e.jsx("div",{children:e.jsx(o,{beforeUpload:l,uploadLimit:2,tip:r})})},y=()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(o,{children:e.jsx(f,{variant:"solid",icon:e.jsx(x,{}),children:"Upload your file"})})}),e.jsx("div",{children:e.jsx(o,{draggable:!0,children:e.jsxs("div",{className:"my-16 text-center",children:[e.jsx("div",{className:"text-6xl mb-4 flex justify-center",children:e.jsx(g,{})}),e.jsxs("p",{className:"font-semibold",children:[e.jsxs("span",{className:"text-gray-800 dark:text-white",children:["Drop your image here, or"," "]}),e.jsx("span",{className:"text-blue-500",children:"browse"})]}),e.jsx("p",{className:"mt-1 opacity-60 dark:text-white",children:"Support: jpeg, png, gif"})]})})})]}),w=()=>{const[p,l]=m.useState(null),r=t=>{t.length>0&&l(URL.createObjectURL(t[0]))},d=t=>{let a=!0;const s=["image/jpeg","image/png"];if(t)for(const c of t)s.includes(c.type)||(a="Please upload a .jpeg or .png file!");return a};return e.jsx("div",{children:e.jsx(o,{className:"cursor-pointer",showList:!1,uploadLimit:1,beforeUpload:d,onChange:r,children:e.jsx(j,{size:80,src:p,icon:e.jsx(h,{})})})})},i="Upload",F={title:"Upload",desc:"Upload is a component that allow user to attach files & images, it can be used with form and upload the data to some where else."},D=[{mdName:"Basic",mdPath:i,title:"Basic",desc:"A basic Upload example.",component:e.jsx(b,{})},{mdName:"DragAndDrop",mdPath:i,title:"Drag and Drop",desc:"With <code>draggable</code> prop, we can drag files to a specific area to proceed upload.",component:e.jsx(U,{})},{mdName:"Disabled",mdPath:i,title:"Disabled",desc:"Disabled the Upload component by setting <code>disabled</code> to true.",component:e.jsx(v,{})},{mdName:"Customize",mdPath:i,title:"Customize",desc:"We can replace the default upload look.",component:e.jsx(y,{})},{mdName:"BeforeUpload",mdPath:i,title:"Upload Control",desc:"Use <code>beforeUpload</code> prop to make a callback function to validate file before upload.",component:e.jsx(N,{})},{mdName:"AvatarImage",mdPath:i,title:"Avatar",desc:"An example for avatar upload",component:e.jsx(w,{})}],L=[{component:"Upload",api:[{propName:"accept",type:"<code>string</code>",default:"-",desc:"File types that can be accepted as input accept attribute"},{propName:"beforeUpload",type:"<code>(file: FileList | null, fileList: File[]) => boolean | string</code>",default:"-",desc:"The callback function that before file upload, return false or string with value to intercept the upload"},{propName:"disabled",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to disable Upload"},{propName:"draggable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether enable draggable upload"},{propName:"fileList",type:"<code>File[]</code>",default:"<code>[]</code>",desc:"Initial file list"},{propName:"onChange",type:"<code>(file: File[], fileList: File[]) => void</code>",default:"-",desc:"Callback function after file uploaded"},{propName:"onFileRemove",type:"<code>(file: File[]) => void</code>",default:"-",desc:"Callback function when a file was deleted"},{propName:"showList",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to show uploaded file list"},{propName:"tip",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Hint message under Upload"}]}],ie=()=>e.jsx(u,{header:F,demos:D,api:L});export{ie as default};
