import{j as e}from"./index-04de45f1.js";import{D as o}from"./DemoComponentApi-46ba6f54.js";import{D as t}from"./DemoLayout-89a84ba0.js";import{S as r}from"./SyntaxHighlighter-b6d1a340.js";import"./index-f4f40370.js";import"./index.esm-bec52084.js";import"./index-5ffe062f.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./index.esm-dece01db.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";const a=()=>e.jsx(r,{language:"js",children:`import useDarkMode from '@/utils/hooks/useDarkMode'

const Component = () => {

	const [isDark, setIsDark] = useDarkMode()

	const handleSetDarkMode = (bool) => {
		setIsDark(bool ? 'dark' : 'light')
	}
	return (...)
}
`}),i="UseDarkModeDoc",m={title:"useDarkMode",desc:"This hook helps to handles dark or light mode on the app."},s=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(a,{})}],p=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"isDark",type:"<code>boolean</code>",default:"-",desc:"Whether the current mode is dark mode"},{propName:"setIsDark",type:"<code>(mode: 'dark' | 'light') => void</code>",default:"-",desc:"Mode setter"}]}]}),P=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,mdPrefixPath:"utils",extra:p,keyText:"param"});export{P as default};
