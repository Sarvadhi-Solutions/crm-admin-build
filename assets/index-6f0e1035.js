import{j as e}from"./index-c3e9fa7c.js";import{D as r}from"./DemoComponentApi-e808b075.js";import{D as o}from"./DemoLayout-64fb2366.js";import{S as t}from"./SyntaxHighlighter-dfe70d12.js";import"./index-b1456952.js";import"./index.esm-e2831cf6.js";import"./index-6f0be7c6.js";import"./AdaptableCard-8cba0fc7.js";import"./Card-f5c778fb.js";import"./Views-4498dec6.js";import"./Affix-de39c7a8.js";import"./Button-d0ef02c0.js";import"./context-c2e517f5.js";import"./Tooltip-0d302304.js";import"./usePopper-26945918.js";import"./index.esm-fe639564.js";import"./index-203bcdc0.js";import"./index.esm-291b3c8a.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";const m=()=>e.jsx(t,{language:"js",children:`import useThemeClass from '@/utils/hooks/useThemeClass'

const Component = () => {

    const { textTheme, bgTheme, borderTheme, ringTheme } = useThemeClass()

	return (
        <div className={bgTheme}>...
    )
}
`}),s="UseThemeClassDoc",l={title:"useThemeClass",desc:"useThemeClass helps to generate color related tailwind classes with current theme color."},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(m,{})}],i=e.jsx(r,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"textTheme",type:"<code>'text-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"text color class"},{propName:"bgTheme",type:"<code>'bg-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"background color class"},{propName:"borderTheme",type:"<code>'border-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"border color class"},{propName:"ringTheme",type:"<code>'ring-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"ring color class"}]}]}),w=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:l,demos:a,mdPrefixPath:"utils",extra:i,keyText:"param"});export{w as default};
