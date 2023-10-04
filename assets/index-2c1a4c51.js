import{j as t}from"./index-b09faefa.js";import{D as e}from"./DemoComponentApi-d5bf32a3.js";import{D as o}from"./DemoLayout-c746e798.js";import{S as r}from"./SyntaxHighlighter-e97b96e2.js";import"./index-a157bc37.js";import"./index.esm-dbc068f5.js";import"./index-abb4ede3.js";import"./AdaptableCard-9a87f3ff.js";import"./Card-33431fc8.js";import"./Views-57e82c67.js";import"./Affix-b10a496a.js";import"./Button-3bdf4581.js";import"./context-80e77f1b.js";import"./Tooltip-5b8c5fcd.js";import"./usePopper-29fe3cd5.js";import"./index.esm-7a963ea9.js";import"./index-62df96f3.js";import"./index.esm-2c67faf2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-f69b773e.js";import"./extends-98964cd2.js";const i=()=>t.jsx(r,{language:"js",children:`import useDirection from '@/utils/hooks/useDirection'

const Component = () => {

	const [direction, updateDirection] = useDirection()

	const handleDirChange = () => {
		updateDirection('rtl')
	}

	return (...)
}
`}),p="UseDirectionDoc/",m={title:"useDirection",desc:"This hook helps to handles direction state of the app."},n=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:t.jsx(i,{})}],s=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"direction",type:"<code>'ltr'</code> | <code>'rtl'</code>",default:"-",desc:"Current direction state"},{propName:"updateDirection",type:"<code>(direction: 'ltr' | 'rtl') => void</code>",default:"-",desc:"Direction setter"}]}]}),U=()=>t.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:s,keyText:"param"});export{U as default};
