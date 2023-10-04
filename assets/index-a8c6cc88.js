import{j as e}from"./index-b09faefa.js";import{D as t}from"./DemoComponentApi-d5bf32a3.js";import{D as r}from"./DemoLayout-c746e798.js";import{S as o}from"./SyntaxHighlighter-e97b96e2.js";import"./index-a157bc37.js";import"./index.esm-dbc068f5.js";import"./index-abb4ede3.js";import"./AdaptableCard-9a87f3ff.js";import"./Card-33431fc8.js";import"./Views-57e82c67.js";import"./Affix-b10a496a.js";import"./Button-3bdf4581.js";import"./context-80e77f1b.js";import"./Tooltip-5b8c5fcd.js";import"./usePopper-29fe3cd5.js";import"./index.esm-7a963ea9.js";import"./index-62df96f3.js";import"./index.esm-2c67faf2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-f69b773e.js";import"./extends-98964cd2.js";const i=()=>e.jsx(o,{language:"js",children:`import useQuery from '@/utils/hooks/useQuery'

const Component = () => {

    const query = useQuery()

    const id = query.get('queryKey')

	return (...)
}
`}),a="UseQueryDoc",s={title:"useQuery",desc:'useQuery created on top of <a class="text-indigo-600 underline" href="https://reactrouter.com/docs/en/v6/hooks/use-location" target="_blank"><code>useLocation</code></a> hook to parse the query string.'},m=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:e.jsx(i,{})}],p=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"query",type:'<a class="text-indigo-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams" target="_blank"><code>URLSearchParams</code></a>',default:"-",desc:"A URLSearchParams instance with useLocation().search initialized "}]}]}),T=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"utils",extra:p,keyText:"param"});export{T as default};
