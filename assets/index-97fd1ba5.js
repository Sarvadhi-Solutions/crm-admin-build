import{j as e}from"./index-f40e4d75.js";import{D as t}from"./DemoComponentApi-710da467.js";import{D as r}from"./DemoLayout-cfdcd7ef.js";import{S as o}from"./SyntaxHighlighter-3d3333b2.js";import"./index-a0876546.js";import"./index.esm-939b12b7.js";import"./index-c3422a4c.js";import"./AdaptableCard-37b8494e.js";import"./Card-902c739e.js";import"./Views-4f4cfc12.js";import"./Affix-93157901.js";import"./Button-50d583fa.js";import"./context-51e9908c.js";import"./Tooltip-b58b263b.js";import"./usePopper-65abd083.js";import"./index.esm-2a4fc148.js";import"./index-ae89c783.js";import"./index.esm-0d86f991.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-b6817789.js";import"./extends-98964cd2.js";const i=()=>e.jsx(o,{language:"js",children:`import useQuery from '@/utils/hooks/useQuery'

const Component = () => {

    const query = useQuery()

    const id = query.get('queryKey')

	return (...)
}
`}),a="UseQueryDoc",s={title:"useQuery",desc:'useQuery created on top of <a class="text-indigo-600 underline" href="https://reactrouter.com/docs/en/v6/hooks/use-location" target="_blank"><code>useLocation</code></a> hook to parse the query string.'},m=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:e.jsx(i,{})}],p=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"query",type:'<a class="text-indigo-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams" target="_blank"><code>URLSearchParams</code></a>',default:"-",desc:"A URLSearchParams instance with useLocation().search initialized "}]}]}),T=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"utils",extra:p,keyText:"param"});export{T as default};
