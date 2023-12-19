import{j as t}from"./index-f40e4d75.js";import{D as e}from"./DemoComponentApi-710da467.js";import{D as a}from"./DemoLayout-cfdcd7ef.js";import{S as o}from"./SyntaxHighlighter-3d3333b2.js";import"./index-a0876546.js";import"./index.esm-939b12b7.js";import"./index-c3422a4c.js";import"./AdaptableCard-37b8494e.js";import"./Card-902c739e.js";import"./Views-4f4cfc12.js";import"./Affix-93157901.js";import"./Button-50d583fa.js";import"./context-51e9908c.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./index.esm-0d86f991.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-b6817789.js";import"./extends-98964cd2.js";const r=()=>t.jsx(o,{language:"js",children:`import paginate from '@/utils/paginate'
        
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data = paginate(arr, 3, 2)

// output: [4, 5, 6]
`}),p="PaginateDoc/",i={title:"paginate",desc:"This function paginate an array according to page number & size."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:t.jsx(r,{})}],n=[{component:"paginate",api:[{propName:"array",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"Array that need to paginate"},{propName:"pageSize",type:"<code>number</code>",default:"-",desc:"Maximun element of the output array"},{propName:"pageNumber",type:"<code>number</code>",default:"-",desc:"Index that start from the array"}]}],d=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"paginatedData",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"End result"}]}]}),H=()=>t.jsx(a,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:m,api:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:d,keyText:"param"});export{H as default};
