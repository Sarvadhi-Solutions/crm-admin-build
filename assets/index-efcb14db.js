import{j as e}from"./index-7a16719d.js";import{D as o}from"./DemoComponentApi-898a36fa.js";import{D as t}from"./DemoLayout-7c805240.js";import{S as r}from"./SyntaxHighlighter-746c9a4b.js";import"./index-0e21c6e2.js";import"./index.esm-5d9ef8bc.js";import"./index-7c73c178.js";import"./AdaptableCard-13b794a2.js";import"./Card-1701bbfb.js";import"./Views-6f74b325.js";import"./Affix-67c05f4f.js";import"./Button-796af526.js";import"./context-0b7be94f.js";import"./Tooltip-d9375ea6.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./index.esm-a0bff864.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useResponsive from '@/utils/hooks/useResponsive'

const Component = () => {

    const { larger, smaller, windowWidth } = useResponsive()

	return (...)
}
`}),s="UseResponsiveDoc",n={title:"useResponsive",desc:"A hooks for getting responsive information"},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(i,{})}],m=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"larger",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that larger than current window width"},{propName:"smaller",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that smaller than current window width"},{propName:"windowWidth",type:"<code>number</code>",default:"-",desc:"Current window width"}]}]}),T=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:a,mdPrefixPath:"utils",extra:m,keyText:"param"});export{T as default};
