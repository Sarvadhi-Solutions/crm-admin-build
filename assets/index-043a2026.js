import{j as e}from"./index-5b083722.js";import{D as o}from"./DemoComponentApi-8e0ebe63.js";import{D as t}from"./DemoLayout-c496ff20.js";import{S as r}from"./SyntaxHighlighter-efa92768.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./index-c682b4c7.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useResponsive from '@/utils/hooks/useResponsive'

const Component = () => {

    const { larger, smaller, windowWidth } = useResponsive()

	return (...)
}
`}),s="UseResponsiveDoc",n={title:"useResponsive",desc:"A hooks for getting responsive information"},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(i,{})}],m=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"larger",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that larger than current window width"},{propName:"smaller",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that smaller than current window width"},{propName:"windowWidth",type:"<code>number</code>",default:"-",desc:"Current window width"}]}]}),T=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:a,mdPrefixPath:"utils",extra:m,keyText:"param"});export{T as default};
