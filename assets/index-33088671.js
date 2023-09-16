import{j as e}from"./index-04de45f1.js";import{D as t}from"./DemoComponentApi-46ba6f54.js";import{D as o}from"./DemoLayout-89a84ba0.js";import{S as r}from"./SyntaxHighlighter-b6d1a340.js";import"./index-f4f40370.js";import"./index.esm-bec52084.js";import"./index-5ffe062f.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./index.esm-dece01db.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useDirection from '@/utils/hooks/useDirection'

const Component = () => {

	const [direction, updateDirection] = useDirection()

	const handleDirChange = () => {
		updateDirection('rtl')
	}

	return (...)
}
`}),p="UseDirectionDoc/",n={title:"useDirection",desc:"This hook helps to handles direction state of the app."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:e.jsx(i,{})}],s=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"direction",type:"<code>'ltr'</code> | <code>'rtl'</code>",default:"-",desc:"Current direction state"},{propName:"updateDirection",type:"<code>(direction: 'ltr' | 'rtl') => void</code>",default:"-",desc:"Direction setter"}]}]}),F=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:m,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:s,keyText:"param"});export{F as default};
