import{j as e}from"./index-a75c2214.js";import{D as t}from"./DemoComponentApi-81a65b6e.js";import{D as r}from"./DemoLayout-2a08f2a3.js";import{S as o}from"./SyntaxHighlighter-39525d8f.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";import"./index-129cb3d5.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const i=()=>e.jsx(o,{language:"js",children:`import useQuery from '@/utils/hooks/useQuery'

const Component = () => {

    const query = useQuery()

    const id = query.get('queryKey')

	return (...)
}
`}),a="UseQueryDoc",s={title:"useQuery",desc:'useQuery created on top of <a class="text-indigo-600 underline" href="https://reactrouter.com/docs/en/v6/hooks/use-location" target="_blank"><code>useLocation</code></a> hook to parse the query string.'},m=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:e.jsx(i,{})}],p=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"query",type:'<a class="text-indigo-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams" target="_blank"><code>URLSearchParams</code></a>',default:"-",desc:"A URLSearchParams instance with useLocation().search initialized "}]}]}),T=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"utils",extra:p,keyText:"param"});export{T as default};
