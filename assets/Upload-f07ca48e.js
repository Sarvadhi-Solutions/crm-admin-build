import{j as e,r as n,ax as q,c as D}from"./index-f4ad2487.js";import{c as G}from"./cloneDeep-acd0e120.js";import{V as H,a as Q,b as W}from"./index.esm-f4c7bf8a.js";import{B as X}from"./Button-69f10cac.js";import{C as ee}from"./CloseButton-5025ec7a.js";import{t as se,N as ae}from"./toast-c73a41d3.js";const le=1e3,te=t=>Math.round(t/le),b=({children:t})=>e.jsx("span",{className:"text-4xl",children:t}),O=t=>{const{file:o,children:m}=t,{type:c,name:r,size:l}=o,d=()=>c.split("/")[0]==="image"?e.jsx("img",{className:"upload-file-image",src:URL.createObjectURL(o),alt:`file preview ${r}`}):c==="application/zip"?e.jsx(b,{children:e.jsx(H,{})}):c==="application/pdf"?e.jsx(b,{children:e.jsx(Q,{})}):e.jsx(b,{children:e.jsx(W,{})});return e.jsxs("div",{className:"upload-file",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"upload-file-thumbnail",children:d()}),e.jsxs("div",{className:"upload-file-info",children:[e.jsx("h6",{className:"upload-file-name",children:r}),e.jsxs("span",{className:"upload-file-size",children:[te(l)," kb"]})]})]}),m]})};O.displayName="UploadFileItem";const L=t=>Object.keys(t).map(o=>t[o]),re=n.forwardRef((t,o)=>{const{accept:m,beforeUpload:c,disabled:r=!1,draggable:l=!1,fileList:d=[],multiple:v,onChange:g,onFileRemove:h,showList:I=!0,tip:B,uploadLimit:f,children:x,className:E,field:w,...F}=t,C=n.useRef(null),[p,j]=n.useState(d),[R,N]=n.useState(!1),{themeColor:S,primaryColorLevel:V}=q();n.useEffect(()=>{JSON.stringify(p)!==JSON.stringify(d)&&j(d)},[d]);const y=(a="")=>{se.push(e.jsx(ae,{type:"danger",duration:2e3,children:a||"Upload Failed!"}),{placement:"top-center"})},k=(a,s)=>{if(a)for(const i of a)s.push(i);return s},$=a=>{let s=G(p);return typeof f=="number"&&f!==0&&Object.keys(s).length>=f?(f===1&&(s.shift(),s=k(a,s)),L({...s})):(s=k(a,s),L({...s}))},z=a=>{const{files:s}=a.target;let i=!0;if(c){if(i=c(s,p),i===!1){y();return}if(typeof i=="string"&&i.length>0){y(i);return}}if(i){const u=$(s);j(u),g==null||g(u,p)}},P=a=>{const s=p.filter((i,u)=>u!==a);j(s),h==null||h(s)},T=a=>{var s;r||(s=C.current)==null||s.click(),a.stopPropagation()},J=()=>!l&&!x?e.jsx(X,{disabled:r,onClick:a=>a.preventDefault(),children:"Upload"}):l&&!x?e.jsx("span",{children:"Choose a file or drag and drop here"}):x,M=n.useCallback(()=>{l&&N(!1)},[l]),A=n.useCallback(()=>{l&&!r&&N(!0)},[l,r]),K=n.useCallback(()=>{l&&N(!1)},[l]),Y={onDragLeave:M,onDragOver:A,onDrop:K},U=`border-${S}-${V}`,Z=D("upload",l&&"upload-draggable",l&&!r&&`hover:${U}`,l&&r&&"disabled",R&&U,E),_=D("upload-input",l&&"draggable");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:o,className:Z,...l?Y:{onClick:T},...F,children:[e.jsx("input",{ref:C,className:_,type:"file",disabled:r,multiple:v,accept:m,title:"",value:"",onChange:z,...w,...F}),J()]}),B,I&&e.jsx("div",{className:"upload-file-list",children:p.map((a,s)=>e.jsx(O,{file:a,children:e.jsx(ee,{className:"upload-file-remove",onClick:()=>P(s)})},a.name+s))})]})});re.displayName="Upload";export{re as U};
