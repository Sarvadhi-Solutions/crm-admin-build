import{j as e}from"./index-4bd6b7b3.js";import{D as t}from"./DemoComponentApi-dfdadeb6.js";import{D as s}from"./DemoLayout-abb47ea7.js";import{S as o}from"./SyntaxHighlighter-d5a055b8.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./index-96e19bc1.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Button-39d85f08.js";import"./context-a8cf3940.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./index.esm-0cdca32a.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";const m=()=>e.jsx(o,{language:"js",children:`import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'

const Component = () => {

    const [ message, setMessage ] = useTimeOutMessage(5000)

	return (...)
}
`}),i="UseTimeOutMessageDoc",r={title:"useTimeOutMessage",desc:"useTimeOutMessage allow us to display message that disappear after a period of time."},a=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(m,{})}],p=[{component:"useTimeOutMessage",api:[{propName:"interval",type:"<code>number</code>",default:"<code>3000</code>",desc:"Time of message display"}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"message",type:"<code>string</code>",default:"-",desc:"Message string"},{propName:"setMessage",type:"<code>string</code>",default:"-",desc:"Message setter"}]}]}),S=()=>e.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:r,demos:a,api:p,mdPrefixPath:"utils",extra:d,keyText:"param"});export{S as default};
