import{j as e}from"./index-6767ac81.js";import{D as t}from"./DemoComponentApi-5636f861.js";import{D as r}from"./DemoLayout-3595de25.js";import{S as o}from"./SyntaxHighlighter-7b64a68f.js";import"./index-d5eb49a4.js";import"./index.esm-ad20eb15.js";import"./index-0b80b8cd.js";import"./AdaptableCard-1cecc9da.js";import"./Card-da872ceb.js";import"./Views-e5205a91.js";import"./Affix-bd237bf0.js";import"./Button-edcd26d9.js";import"./context-cdfa92ed.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-52ddd804.js";import"./index-fb02f18d.js";import"./index.esm-107f547f.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";const a=()=>e.jsx(o,{language:"js",children:`import useQuery from '@/utils/hooks/useQuery'

const Component = () => {

    const query = useQuery()

    const id = query.get('queryKey')

	return (...)
}
`}),i="UseQueryDoc",s={title:"useQuery",desc:'useQuery created on top of <a class="text-indigo-600 underline" href="https://reactrouter.com/docs/en/v6/hooks/use-location" target="_blank"><code>useLocation</code></a> hook to parse the query string.'},m=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(a,{})}],n=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"query",type:'<a class="text-indigo-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams" target="_blank"><code>URLSearchParams</code></a>',default:"-",desc:"A URLSearchParams instance with useLocation().search initialized "}]}]}),R=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"utils",extra:n,keyText:"param"});export{R as default};
