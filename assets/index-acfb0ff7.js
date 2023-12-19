import{j as e}from"./index-a9c93031.js";import{D as o}from"./DemoComponentApi-407323db.js";import{D as t}from"./DemoLayout-29dfdcad.js";import{S as r}from"./SyntaxHighlighter-2ddb351b.js";import"./index-10dbbba6.js";import"./index.esm-556fe943.js";import"./index-15ad1e57.js";import"./AdaptableCard-cf701c87.js";import"./Card-6b8166bd.js";import"./Views-0c5423a6.js";import"./Affix-44c84a49.js";import"./Button-47bf58f7.js";import"./context-6d5d8fe5.js";import"./Tooltip-4f11c588.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./index-0b68a97f.js";import"./index.esm-37c3564c.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ccb51e40.js";import"./extends-98964cd2.js";const i=()=>e.jsx(r,{language:"js",children:`import useDarkMode from '@/utils/hooks/useDarkMode'

const Component = () => {

	const [isDark, setIsDark] = useDarkMode()

	const handleSetDarkMode = (bool) => {
		setIsDark(bool ? 'dark' : 'light')
	}
	return (...)
}
`}),m="UseDarkModeDoc",a={title:"useDarkMode",desc:"This hook helps to handles dark or light mode on the app."},s=[{mdName:"Example",mdPath:m,title:"Example",desc:"",component:e.jsx(i,{})}],p=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"isDark",type:"<code>boolean</code>",default:"-",desc:"Whether the current mode is dark mode"},{propName:"setIsDark",type:"<code>(mode: 'dark' | 'light') => void</code>",default:"-",desc:"Mode setter"}]}]}),C=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:a,demos:s,mdPrefixPath:"utils",extra:p,keyText:"param"});export{C as default};
