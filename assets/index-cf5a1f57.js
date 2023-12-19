import{j as e}from"./index-4b23f9f2.js";import{D as d}from"./DemoLayout-312e6adc.js";import{C as s}from"./Card-74d89d1e.js";import{B as o}from"./Button-a87a2e46.js";import{L as n}from"./index.esm-e8a4d9e3.js";import{A as i}from"./index-e9d5fe85.js";import"./AdaptableCard-6d843750.js";import"./Views-6ea63120.js";import"./Affix-250085f7.js";import"./Tooltip-7118406c.js";import"./usePopper-6b55e4c5.js";import"./index.esm-b757f9d5.js";import"./index-4fdc30db.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-8b0e89b6.js";import"./index-5b52efbd.js";import"./index-1a8e49e3.js";import"./index.esm-1840726c.js";import"./useMergeRef-788c4cb0.js";const c=()=>e.jsx("div",{children:e.jsxs(s,{children:[e.jsx("h5",{children:"Card title"}),e.jsx("p",{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})}),l=()=>{const t=e.jsxs("span",{className:"flex items-center",children:[e.jsx("span",{className:"mr-1 font-semibold",children:"Status:"}),e.jsx("span",{className:"text-emerald-500 text-xl",children:e.jsx(n,{})})]}),a=e.jsxs("div",{className:"flex justify-end",children:[e.jsx(o,{size:"sm",className:"ltr:mr-2 rtl:ml-2",children:"Save"}),e.jsx(o,{size:"sm",variant:"solid",children:"New Post"})]});return e.jsx("div",{children:e.jsx(s,{header:"Card Header",headerExtra:t,footer:a,children:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})})})},m=()=>{const t=e.jsxs("div",{className:"flex",children:[e.jsx(o,{size:"sm",className:"ltr:mr-2 rtl:ml-2",children:"Save"}),e.jsx(o,{size:"sm",variant:"solid",children:"New Post"})]});return e.jsx("div",{children:e.jsx(s,{header:"Card Header",footer:t,footerBorder:!1,headerBorder:!1,children:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})})})},p=()=>e.jsx("div",{children:e.jsxs(s,{bordered:!0,children:[e.jsx("h5",{children:"Card title"}),e.jsx("p",{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})}),h=()=>{const t=e.jsxs("div",{className:"flex",children:[e.jsx(o,{size:"sm",className:"ltr:mr-2 rtl:ml-2",children:"Save"}),e.jsx(o,{size:"sm",variant:"solid",children:"New Post"})]});return e.jsx("div",{children:e.jsx(s,{header:e.jsx("span",{children:"Card Header"}),headerClass:"font-semibold text-lg text-indigo-600",bodyClass:"text-center",footerClass:"flex justify-end",footer:t,children:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"})})})},u=()=>e.jsx("div",{className:"max-w-xs",children:e.jsxs(s,{clickable:!0,className:"hover:shadow-lg transition duration-150 ease-in-out",onClick:t=>console.log("Card Clickable",t),children:[e.jsx("h5",{children:"Card title"}),e.jsx("p",{className:"mt-2",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})}),x=()=>{const t=e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{size:30,className:"mr-2",shape:"circle",src:"/img/avatars/thumb-1.jpg"}),e.jsxs("span",{children:[e.jsx("h6",{className:"text-sm",children:"Kristen Fisher"}),e.jsx("span",{className:"text-xs",children:"Sep 23, 2021"})]})]}),a=e.jsx("div",{className:"rounded-tl-lg rounded-tr-lg overflow-hidden",children:e.jsx("img",{src:"/img/others/img-1.jpg",alt:"card header"})});return e.jsx("div",{className:"max-w-xs",children:e.jsxs(s,{clickable:!0,className:"hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid",header:a,footer:t,headerClass:"p-0",footerBorder:!1,headerBorder:!1,children:[e.jsx("span",{className:"text-emerald-600 font-semibold",children:"Life Style"}),e.jsx("h4",{className:"font-bold my-3",children:"Use the modern rules"}),e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."})]})})},r="Cards",f={title:"Cards",desc:"Card can be used to container a groups of related content."},y=[{mdName:"Basic",mdPath:r,title:"Basic",desc:"Basic usage of Card",component:e.jsx(c,{})},{mdName:"HeaderFooter",mdPath:r,title:"Header & Footer",desc:"Card can set header & footer via <code>header</code> & <code>footer</code> props.",component:e.jsx(l,{})},{mdName:"HeaderFooterBorder",mdPath:r,title:"Header & Footer Border",desc:"Header & footer seperator can disabled by setting <code>headerBorder</code> & <code>footerBorder</code> to <code>false</code>.",component:e.jsx(m,{})},{mdName:"Border",mdPath:r,title:"Border",desc:"Display Card with border (without shadow).",component:e.jsx(p,{})},{mdName:"ExtraClass",mdPath:r,title:"Extra Class",desc:"Extra class can be apply via <code>bodyClass</code>, <code>headerClass</code> & <code>footerClass</code> to correspond section.",component:e.jsx(h,{})},{mdName:"Clickable",mdPath:r,title:"Clickable",desc:"Set <code>click</code> prop to <code>true</code> to make cursor become pointer.",component:e.jsx(u,{})},{mdName:"Media",mdPath:r,title:"Media",desc:"",component:e.jsx(x,{})}],j=[{component:"Card",api:[{propName:"header",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Card header"},{propName:"footer",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Card footer"},{propName:"headerExtra",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Extra content for header"},{propName:"bordered",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Display Card with border (without shadow)"},{propName:"clickable",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Make cursor become pointer upon hover"},{propName:"bodyClass",type:"<code>string</code>",default:"-",desc:"Apply class to card body"},{propName:"headerClass",type:"<code>string</code>",default:"-",desc:"Apply class to card header"},{propName:"footerClass",type:"<code>string</code>",default:"-",desc:"Apply class to card footer"},{propName:"headerBorder",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Show header seperator"},{propName:"footerBorder",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Show footer seperator"},{propName:"onClick",type:"<code>(e: MouseEvent) => void</code>",default:"<code>-</code>",desc:"Callback when Card is clicked"}]}],R=()=>e.jsx(d,{header:f,demos:y,api:j});export{R as default};
