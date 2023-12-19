import{j as e}from"./index-2a02f09f.js";import{D as t}from"./DemoComponentApi-c288533a.js";import{D as o}from"./DemoLayout-62d26969.js";import{S as r}from"./SyntaxHighlighter-3e4bb9d6.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./index-6bbe4810.js";import"./AdaptableCard-260ffff4.js";import"./Card-de52f0bd.js";import"./Views-597fd265.js";import"./Affix-f01dbede.js";import"./Button-3d6c325f.js";import"./context-ccc0a902.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./index.esm-c61f0406.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useDirection from '@/utils/hooks/useDirection'

const Component = () => {

	const [direction, updateDirection] = useDirection()

	const handleDirChange = () => {
		updateDirection('rtl')
	}

	return (...)
}
`}),p="UseDirectionDoc/",n={title:"useDirection",desc:"This hook helps to handles direction state of the app."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:e.jsx(i,{})}],s=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"direction",type:"<code>'ltr'</code> | <code>'rtl'</code>",default:"-",desc:"Current direction state"},{propName:"updateDirection",type:"<code>(direction: 'ltr' | 'rtl') => void</code>",default:"-",desc:"Direction setter"}]}]}),F=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:m,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:s,keyText:"param"});export{F as default};
