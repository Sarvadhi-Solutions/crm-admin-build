import{j as o}from"./index-5b083722.js";import{D as e}from"./DemoComponentApi-8e0ebe63.js";import{D as t}from"./DemoLayout-c496ff20.js";import{S as r}from"./SyntaxHighlighter-efa92768.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./index-c682b4c7.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";const i=()=>o.jsx(r,{language:"js",children:`import useTwColorByName from '@/utils/hooks/useTwColorByName'

const Component = () => {

    const generateTwColor = useTwColorByName('bg')

	return (
        <div className={generateTwColor('John')}>...
    )
}
`}),a="UseTwColorByNameDoc",m={title:"useTwColorByName",desc:"useTwColorByName hook provide a random tailwind utilities color class generator according to the input string."},s=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:o.jsx(i,{})}],p=[{component:"useTwColorByName",api:[{propName:"prefix",type:"<code>string</code>",default:"<code>'bg'</code>",desc:"Prefix for tailwind color classes"}]}],n=o.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"generateTwColor",type:"<code>(name: string) => string</code>",default:"-",desc:"Generated a tailwind color class based on inputted param on hook & generateTwColor"}]}]}),b=()=>o.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:p,mdPrefixPath:"utils",extra:n,keyText:"param"});export{b as default};
