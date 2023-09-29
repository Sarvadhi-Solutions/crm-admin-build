import{j as e}from"./index-a75c2214.js";import{D as r}from"./DemoComponentApi-81a65b6e.js";import{D as o}from"./DemoLayout-2a08f2a3.js";import{S as t}from"./SyntaxHighlighter-39525d8f.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";import"./index-129cb3d5.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const m=()=>e.jsx(t,{language:"js",children:`import useThemeClass from '@/utils/hooks/useThemeClass'

const Component = () => {

    const { textTheme, bgTheme, borderTheme, ringTheme } = useThemeClass()

	return (
        <div className={bgTheme}>...
    )
}
`}),s="UseThemeClassDoc",l={title:"useThemeClass",desc:"useThemeClass helps to generate color related tailwind classes with current theme color."},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(m,{})}],i=e.jsx(r,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"textTheme",type:"<code>'text-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"text color class"},{propName:"bgTheme",type:"<code>'bg-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"background color class"},{propName:"borderTheme",type:"<code>'border-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"border color class"},{propName:"ringTheme",type:"<code>'ring-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"ring color class"}]}]}),w=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:l,demos:a,mdPrefixPath:"utils",extra:i,keyText:"param"});export{w as default};
