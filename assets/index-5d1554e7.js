import{j as e}from"./index-6767ac81.js";import{D as t}from"./DemoComponentApi-5636f861.js";import{D as o}from"./DemoLayout-3595de25.js";import{S as r}from"./SyntaxHighlighter-7b64a68f.js";import"./index-d5eb49a4.js";import"./index.esm-ad20eb15.js";import"./index-0b80b8cd.js";import"./AdaptableCard-1cecc9da.js";import"./Card-da872ceb.js";import"./Views-e5205a91.js";import"./Affix-bd237bf0.js";import"./Button-edcd26d9.js";import"./context-cdfa92ed.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-52ddd804.js";import"./index-fb02f18d.js";import"./index.esm-107f547f.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useDirection from '@/utils/hooks/useDirection'

const Component = () => {

	const [direction, updateDirection] = useDirection()

	const handleDirChange = () => {
		updateDirection('rtl')
	}

	return (...)
}
`}),p="UseDirectionDoc/",n={title:"useDirection",desc:"This hook helps to handles direction state of the app."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:e.jsx(i,{})}],s=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"direction",type:"<code>'ltr'</code> | <code>'rtl'</code>",default:"-",desc:"Current direction state"},{propName:"updateDirection",type:"<code>(direction: 'ltr' | 'rtl') => void</code>",default:"-",desc:"Direction setter"}]}]}),F=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:m,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:s,keyText:"param"});export{F as default};
