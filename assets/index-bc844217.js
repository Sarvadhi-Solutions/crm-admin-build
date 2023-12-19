import{j as e}from"./index-21d7ce34.js";import{D as t}from"./DemoComponentApi-f2c63353.js";import{D as r}from"./DemoLayout-5f0e61ea.js";import{S as o}from"./SyntaxHighlighter-ef52ffff.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./index-d93ff48a.js";import"./AdaptableCard-1403a507.js";import"./Card-c016d7e4.js";import"./Views-aa9d3067.js";import"./Affix-f43c1993.js";import"./Button-6c3081fd.js";import"./context-ff20449e.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index.esm-3f5f076a.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";const a=()=>e.jsx(o,{language:"js",children:`import useQuery from '@/utils/hooks/useQuery'

const Component = () => {

    const query = useQuery()

    const id = query.get('queryKey')

	return (...)
}
`}),i="UseQueryDoc",s={title:"useQuery",desc:'useQuery created on top of <a class="text-indigo-600 underline" href="https://reactrouter.com/docs/en/v6/hooks/use-location" target="_blank"><code>useLocation</code></a> hook to parse the query string.'},m=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(a,{})}],n=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"query",type:'<a class="text-indigo-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams" target="_blank"><code>URLSearchParams</code></a>',default:"-",desc:"A URLSearchParams instance with useLocation().search initialized "}]}]}),R=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"utils",extra:n,keyText:"param"});export{R as default};
