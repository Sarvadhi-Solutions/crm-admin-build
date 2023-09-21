import{j as e}from"./index-7c10d2a3.js";import{D as t}from"./DemoComponentApi-e4137b40.js";import{D as s}from"./DemoLayout-f1d14075.js";import{S as o}from"./SyntaxHighlighter-587b13c1.js";import"./index-db1f8ae2.js";import"./index.esm-8bc236a5.js";import"./index-895d41a5.js";import"./AdaptableCard-d528512e.js";import"./Card-4ce3f213.js";import"./Views-5cb69e9a.js";import"./Affix-9d9e2f03.js";import"./Button-208b5861.js";import"./context-0e2e9d1c.js";import"./Tooltip-6aa5489c.js";import"./usePopper-80f33697.js";import"./index.esm-db0614cf.js";import"./index-be56d80d.js";import"./index.esm-d9298b40.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-2133173c.js";import"./extends-98964cd2.js";const m=()=>e.jsx(o,{language:"js",children:`import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'

const Component = () => {

    const [ message, setMessage ] = useTimeOutMessage(5000)

	return (...)
}
`}),i="UseTimeOutMessageDoc",r={title:"useTimeOutMessage",desc:"useTimeOutMessage allow us to display message that disappear after a period of time."},a=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(m,{})}],p=[{component:"useTimeOutMessage",api:[{propName:"interval",type:"<code>number</code>",default:"<code>3000</code>",desc:"Time of message display"}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"message",type:"<code>string</code>",default:"-",desc:"Message string"},{propName:"setMessage",type:"<code>string</code>",default:"-",desc:"Message setter"}]}]}),S=()=>e.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:r,demos:a,api:p,mdPrefixPath:"utils",extra:d,keyText:"param"});export{S as default};
