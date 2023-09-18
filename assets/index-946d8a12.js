import{j as o}from"./index-7a16719d.js";import{D as e}from"./DemoComponentApi-898a36fa.js";import{D as t}from"./DemoLayout-7c805240.js";import{S as r}from"./SyntaxHighlighter-746c9a4b.js";import"./index-0e21c6e2.js";import"./index.esm-5d9ef8bc.js";import"./index-7c73c178.js";import"./AdaptableCard-13b794a2.js";import"./Card-1701bbfb.js";import"./Views-6f74b325.js";import"./Affix-67c05f4f.js";import"./Button-796af526.js";import"./context-0b7be94f.js";import"./Tooltip-d9375ea6.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./index.esm-a0bff864.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>o.jsx(r,{language:"js",children:`import useTwColorByName from '@/utils/hooks/useTwColorByName'

const Component = () => {

    const generateTwColor = useTwColorByName('bg')

	return (
        <div className={generateTwColor('John')}>...
    )
}
`}),a="UseTwColorByNameDoc",m={title:"useTwColorByName",desc:"useTwColorByName hook provide a random tailwind utilities color class generator according to the input string."},s=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:o.jsx(i,{})}],p=[{component:"useTwColorByName",api:[{propName:"prefix",type:"<code>string</code>",default:"<code>'bg'</code>",desc:"Prefix for tailwind color classes"}]}],n=o.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"generateTwColor",type:"<code>(name: string) => string</code>",default:"-",desc:"Generated a tailwind color class based on inputted param on hook & generateTwColor"}]}]}),b=()=>o.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:p,mdPrefixPath:"utils",extra:n,keyText:"param"});export{b as default};
