import{j as e}from"./index-04de45f1.js";import{D as o}from"./DemoComponentApi-46ba6f54.js";import{D as t}from"./DemoLayout-89a84ba0.js";import{S as r}from"./SyntaxHighlighter-b6d1a340.js";import"./index-f4f40370.js";import"./index.esm-bec52084.js";import"./index-5ffe062f.js";import"./AdaptableCard-b66d711f.js";import"./Card-5dadf163.js";import"./Views-9d427d6f.js";import"./Affix-efc50e98.js";import"./Button-c014eb4a.js";import"./context-3f43d22b.js";import"./Tooltip-8263a1ca.js";import"./usePopper-301f1b7b.js";import"./index.esm-86efb1ff.js";import"./index-5206a52a.js";import"./index.esm-dece01db.js";import"./toConsumableArray-c4879a90.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useResponsive from '@/utils/hooks/useResponsive'

const Component = () => {

    const { larger, smaller, windowWidth } = useResponsive()

	return (...)
}
`}),s="UseResponsiveDoc",n={title:"useResponsive",desc:"A hooks for getting responsive information"},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(i,{})}],m=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"larger",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that larger than current window width"},{propName:"smaller",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that smaller than current window width"},{propName:"windowWidth",type:"<code>number</code>",default:"-",desc:"Current window width"}]}]}),T=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:a,mdPrefixPath:"utils",extra:m,keyText:"param"});export{T as default};
