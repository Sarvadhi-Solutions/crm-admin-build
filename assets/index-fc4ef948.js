import{j as e}from"./index-04de45f1.js";import{D as r}from"./DemoComponentApi-46ba6f54.js";import{D as o}from"./DemoLayout-89a84ba0.js";import{S as t}from"./SyntaxHighlighter-b6d1a340.js";import"./index-f4f40370.js";import"./index.esm-bec52084.js";import"./index-5ffe062f.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./index.esm-dece01db.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";const m=()=>e.jsx(t,{language:"js",children:`import useThemeClass from '@/utils/hooks/useThemeClass'

const Component = () => {

    const { textTheme, bgTheme, borderTheme, ringTheme } = useThemeClass()

	return (
        <div className={bgTheme}>...
    )
}
`}),s="UseThemeClassDoc",l={title:"useThemeClass",desc:"useThemeClass helps to generate color related tailwind classes with current theme color."},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(m,{})}],i=e.jsx(r,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"textTheme",type:"<code>'text-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"text color class"},{propName:"bgTheme",type:"<code>'bg-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"background color class"},{propName:"borderTheme",type:"<code>'border-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"border color class"},{propName:"ringTheme",type:"<code>'ring-{currentThemeColor}-{currentColorLevel}'</code>",default:"-",desc:"ring color class"}]}]}),A=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:l,demos:a,mdPrefixPath:"utils",extra:i,keyText:"param"});export{A as default};
