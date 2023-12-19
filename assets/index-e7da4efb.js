import{j as e}from"./index-21d7ce34.js";import{D as o}from"./DemoComponentApi-f2c63353.js";import{D as t}from"./DemoLayout-5f0e61ea.js";import{S as r}from"./SyntaxHighlighter-ef52ffff.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./index-d93ff48a.js";import"./AdaptableCard-1403a507.js";import"./Card-c016d7e4.js";import"./Views-aa9d3067.js";import"./Affix-f43c1993.js";import"./Button-6c3081fd.js";import"./context-ff20449e.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index.esm-3f5f076a.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useResponsive from '@/utils/hooks/useResponsive'

const Component = () => {

    const { larger, smaller, windowWidth } = useResponsive()

	return (...)
}
`}),s="UseResponsiveDoc",n={title:"useResponsive",desc:"A hooks for getting responsive information"},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(i,{})}],m=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"larger",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that larger than current window width"},{propName:"smaller",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that smaller than current window width"},{propName:"windowWidth",type:"<code>number</code>",default:"-",desc:"Current window width"}]}]}),T=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:a,mdPrefixPath:"utils",extra:m,keyText:"param"});export{T as default};
