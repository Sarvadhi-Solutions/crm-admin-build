import{j as t}from"./index-7c10d2a3.js";import{D as e}from"./DemoComponentApi-e4137b40.js";import{D as a}from"./DemoLayout-f1d14075.js";import{S as o}from"./SyntaxHighlighter-587b13c1.js";import"./index-db1f8ae2.js";import"./index.esm-8bc236a5.js";import"./index-895d41a5.js";import"./AdaptableCard-d528512e.js";import"./Card-4ce3f213.js";import"./Views-5cb69e9a.js";import"./Affix-9d9e2f03.js";import"./Button-208b5861.js";import"./context-0e2e9d1c.js";import"./Tooltip-6aa5489c.js";import"./usePopper-80f33697.js";import"./index.esm-db0614cf.js";import"./index-be56d80d.js";import"./index.esm-d9298b40.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-2133173c.js";import"./extends-98964cd2.js";const r=()=>t.jsx(o,{language:"js",children:`import paginate from '@/utils/paginate'
        
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data = paginate(arr, 3, 2)

// output: [4, 5, 6]
`}),p="PaginateDoc/",i={title:"paginate",desc:"This function paginate an array according to page number & size."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:t.jsx(r,{})}],n=[{component:"paginate",api:[{propName:"array",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"Array that need to paginate"},{propName:"pageSize",type:"<code>number</code>",default:"-",desc:"Maximun element of the output array"},{propName:"pageNumber",type:"<code>number</code>",default:"-",desc:"Index that start from the array"}]}],d=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"paginatedData",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"End result"}]}]}),H=()=>t.jsx(a,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:m,api:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:d,keyText:"param"});export{H as default};
