import{j as e}from"./index-6767ac81.js";import{D as o}from"./DemoComponentApi-5636f861.js";import{D as t}from"./DemoLayout-3595de25.js";import{S as r}from"./SyntaxHighlighter-7b64a68f.js";import"./index-d5eb49a4.js";import"./index.esm-ad20eb15.js";import"./index-0b80b8cd.js";import"./AdaptableCard-1cecc9da.js";import"./Card-da872ceb.js";import"./Views-e5205a91.js";import"./Affix-bd237bf0.js";import"./Button-edcd26d9.js";import"./context-cdfa92ed.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-52ddd804.js";import"./index-fb02f18d.js";import"./index.esm-107f547f.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>e.jsx(r,{language:"js",children:`import useResponsive from '@/utils/hooks/useResponsive'

const Component = () => {

    const { larger, smaller, windowWidth } = useResponsive()

	return (...)
}
`}),s="UseResponsiveDoc",n={title:"useResponsive",desc:"A hooks for getting responsive information"},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(i,{})}],m=e.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"larger",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that larger than current window width"},{propName:"smaller",type:"<code>{2xl: boolean, xl: boolean, lg: boolean, md: boolean, sm: boolean, xs: boolean}</code>",default:"-",desc:"Breakpoints with statement that smaller than current window width"},{propName:"windowWidth",type:"<code>number</code>",default:"-",desc:"Current window width"}]}]}),T=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:a,mdPrefixPath:"utils",extra:m,keyText:"param"});export{T as default};
