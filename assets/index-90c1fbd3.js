import{j as o}from"./index-4bd6b7b3.js";import{D as e}from"./DemoComponentApi-dfdadeb6.js";import{D as t}from"./DemoLayout-abb47ea7.js";import{S as r}from"./SyntaxHighlighter-d5a055b8.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./index-96e19bc1.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Button-39d85f08.js";import"./context-a8cf3940.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./index.esm-0cdca32a.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";const i=()=>o.jsx(r,{language:"js",children:`import useTwColorByName from '@/utils/hooks/useTwColorByName'

const Component = () => {

    const generateTwColor = useTwColorByName('bg')

	return (
        <div className={generateTwColor('John')}>...
    )
}
`}),a="UseTwColorByNameDoc",m={title:"useTwColorByName",desc:"useTwColorByName hook provide a random tailwind utilities color class generator according to the input string."},s=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:o.jsx(i,{})}],p=[{component:"useTwColorByName",api:[{propName:"prefix",type:"<code>string</code>",default:"<code>'bg'</code>",desc:"Prefix for tailwind color classes"}]}],n=o.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"generateTwColor",type:"<code>(name: string) => string</code>",default:"-",desc:"Generated a tailwind color class based on inputted param on hook & generateTwColor"}]}]}),F=()=>o.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:p,mdPrefixPath:"utils",extra:n,keyText:"param"});export{F as default};
