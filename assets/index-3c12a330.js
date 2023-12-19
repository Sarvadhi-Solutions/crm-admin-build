import{j as e}from"./index-b09faefa.js";import{D as t}from"./DemoComponentApi-d5bf32a3.js";import{D as s}from"./DemoLayout-c746e798.js";import{S as o}from"./SyntaxHighlighter-e97b96e2.js";import"./index-a157bc37.js";import"./index.esm-dbc068f5.js";import"./index-abb4ede3.js";import"./AdaptableCard-9a87f3ff.js";import"./Card-33431fc8.js";import"./Views-57e82c67.js";import"./Affix-b10a496a.js";import"./Button-3bdf4581.js";import"./context-80e77f1b.js";import"./Tooltip-5b8c5fcd.js";import"./usePopper-29fe3cd5.js";import"./index.esm-7a963ea9.js";import"./index-62df96f3.js";import"./index.esm-2c67faf2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-f69b773e.js";import"./extends-98964cd2.js";const m=()=>e.jsx(o,{language:"js",children:`import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'

const Component = () => {

    const [ message, setMessage ] = useTimeOutMessage(5000)

	return (...)
}
`}),i="UseTimeOutMessageDoc",r={title:"useTimeOutMessage",desc:"useTimeOutMessage allow us to display message that disappear after a period of time."},a=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(m,{})}],p=[{component:"useTimeOutMessage",api:[{propName:"interval",type:"<code>number</code>",default:"<code>3000</code>",desc:"Time of message display"}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"message",type:"<code>string</code>",default:"-",desc:"Message string"},{propName:"setMessage",type:"<code>string</code>",default:"-",desc:"Message setter"}]}]}),S=()=>e.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:r,demos:a,api:p,mdPrefixPath:"utils",extra:d,keyText:"param"});export{S as default};
