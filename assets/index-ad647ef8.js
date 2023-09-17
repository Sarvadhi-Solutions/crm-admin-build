import{j as e}from"./index-5b083722.js";import{D as t}from"./DemoComponentApi-8e0ebe63.js";import{D as a}from"./DemoLayout-c496ff20.js";import{S as o}from"./SyntaxHighlighter-efa92768.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./index-c682b4c7.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";const r=()=>e.jsx(o,{language:"js",children:`import paginate from '@/utils/paginate'
        
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data = paginate(arr, 3, 2)

// output: [4, 5, 6]
`}),p="PaginateDoc/",i={title:"paginate",desc:"This function paginate an array according to page number & size."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:e.jsx(r,{})}],n=[{component:"paginate",api:[{propName:"array",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"Array that need to paginate"},{propName:"pageSize",type:"<code>number</code>",default:"-",desc:"Maximun element of the output array"},{propName:"pageNumber",type:"<code>number</code>",default:"-",desc:"Index that start from the array"}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"paginatedData",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"End result"}]}]}),C=()=>e.jsx(a,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:m,api:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:d,keyText:"param"});export{C as default};
