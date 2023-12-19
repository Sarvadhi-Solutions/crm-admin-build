import{j as t}from"./index-c3e9fa7c.js";import{D as e}from"./DemoComponentApi-e808b075.js";import{D as a}from"./DemoLayout-64fb2366.js";import{S as o}from"./SyntaxHighlighter-dfe70d12.js";import"./index-b1456952.js";import"./index.esm-e2831cf6.js";import"./index-6f0be7c6.js";import"./AdaptableCard-8cba0fc7.js";import"./Card-f5c778fb.js";import"./Views-4498dec6.js";import"./Affix-de39c7a8.js";import"./Button-d0ef02c0.js";import"./context-c2e517f5.js";import"./Tooltip-0d302304.js";import"./usePopper-26945918.js";import"./index.esm-fe639564.js";import"./index-203bcdc0.js";import"./index.esm-291b3c8a.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";const r=()=>t.jsx(o,{language:"js",children:`import paginate from '@/utils/paginate'
        
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data = paginate(arr, 3, 2)

// output: [4, 5, 6]
`}),p="PaginateDoc/",i={title:"paginate",desc:"This function paginate an array according to page number & size."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:t.jsx(r,{})}],n=[{component:"paginate",api:[{propName:"array",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"Array that need to paginate"},{propName:"pageSize",type:"<code>number</code>",default:"-",desc:"Maximun element of the output array"},{propName:"pageNumber",type:"<code>number</code>",default:"-",desc:"Index that start from the array"}]}],d=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"paginatedData",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"End result"}]}]}),H=()=>t.jsx(a,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:m,api:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:d,keyText:"param"});export{H as default};
