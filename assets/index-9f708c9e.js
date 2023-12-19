import{j as e}from"./index-4bd6b7b3.js";import{D as t}from"./DemoComponentApi-dfdadeb6.js";import{D as r}from"./DemoLayout-abb47ea7.js";import{S as o}from"./SyntaxHighlighter-d5a055b8.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./index-96e19bc1.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Button-39d85f08.js";import"./context-a8cf3940.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./index.esm-0cdca32a.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";const i=()=>e.jsx(o,{language:"js",children:`import useQuery from '@/utils/hooks/useQuery'

const Component = () => {

    const query = useQuery()

    const id = query.get('queryKey')

	return (...)
}
`}),a="UseQueryDoc",s={title:"useQuery",desc:'useQuery created on top of <a class="text-indigo-600 underline" href="https://reactrouter.com/docs/en/v6/hooks/use-location" target="_blank"><code>useLocation</code></a> hook to parse the query string.'},m=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:e.jsx(i,{})}],p=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"query",type:'<a class="text-indigo-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams" target="_blank"><code>URLSearchParams</code></a>',default:"-",desc:"A URLSearchParams instance with useLocation().search initialized "}]}]}),T=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"utils",extra:p,keyText:"param"});export{T as default};
