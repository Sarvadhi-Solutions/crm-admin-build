import{j as e}from"./index-2a02f09f.js";import{D as o}from"./DemoComponentApi-c288533a.js";import{D as t}from"./DemoLayout-62d26969.js";import{S as r}from"./SyntaxHighlighter-3e4bb9d6.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./index-6bbe4810.js";import"./AdaptableCard-260ffff4.js";import"./Card-de52f0bd.js";import"./Views-597fd265.js";import"./Affix-f01dbede.js";import"./Button-3d6c325f.js";import"./context-ccc0a902.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./index.esm-c61f0406.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";const a=()=>e.jsx(r,{language:"js",children:`import useDarkMode from '@/utils/hooks/useDarkMode'

const Component = () => {

	const [isDark, setIsDark] = useDarkMode()

	const handleSetDarkMode = (bool) => {
		setIsDark(bool ? 'dark' : 'light')
	}
	return (...)
}
`}),i="UseDarkModeDoc",m={title:"useDarkMode",desc:"This hook helps to handles dark or light mode on the app."},s=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(a,{})}],p=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"isDark",type:"<code>boolean</code>",default:"-",desc:"Whether the current mode is dark mode"},{propName:"setIsDark",type:"<code>(mode: 'dark' | 'light') => void</code>",default:"-",desc:"Mode setter"}]}]}),P=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,mdPrefixPath:"utils",extra:p,keyText:"param"});export{P as default};
