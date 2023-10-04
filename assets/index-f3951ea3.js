import{j as o}from"./index-b09faefa.js";import{D as e}from"./DemoComponentApi-d5bf32a3.js";import{D as t}from"./DemoLayout-c746e798.js";import{S as r}from"./SyntaxHighlighter-e97b96e2.js";import"./index-a157bc37.js";import"./index.esm-dbc068f5.js";import"./index-abb4ede3.js";import"./AdaptableCard-9a87f3ff.js";import"./Card-33431fc8.js";import"./Views-57e82c67.js";import"./Affix-b10a496a.js";import"./Button-3bdf4581.js";import"./context-80e77f1b.js";import"./Tooltip-5b8c5fcd.js";import"./usePopper-29fe3cd5.js";import"./index.esm-7a963ea9.js";import"./index-62df96f3.js";import"./index.esm-2c67faf2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-f69b773e.js";import"./extends-98964cd2.js";const i=()=>o.jsx(r,{language:"js",children:`import useTwColorByName from '@/utils/hooks/useTwColorByName'

const Component = () => {

    const generateTwColor = useTwColorByName('bg')

	return (
        <div className={generateTwColor('John')}>...
    )
}
`}),a="UseTwColorByNameDoc",m={title:"useTwColorByName",desc:"useTwColorByName hook provide a random tailwind utilities color class generator according to the input string."},s=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:o.jsx(i,{})}],p=[{component:"useTwColorByName",api:[{propName:"prefix",type:"<code>string</code>",default:"<code>'bg'</code>",desc:"Prefix for tailwind color classes"}]}],n=o.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"generateTwColor",type:"<code>(name: string) => string</code>",default:"-",desc:"Generated a tailwind color class based on inputted param on hook & generateTwColor"}]}]}),F=()=>o.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:p,mdPrefixPath:"utils",extra:n,keyText:"param"});export{F as default};
