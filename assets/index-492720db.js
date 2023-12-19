import{j as e}from"./index-a9c93031.js";import{D as t}from"./DemoComponentApi-407323db.js";import{D as s}from"./DemoLayout-29dfdcad.js";import{S as o}from"./SyntaxHighlighter-2ddb351b.js";import"./index-10dbbba6.js";import"./index.esm-556fe943.js";import"./index-15ad1e57.js";import"./AdaptableCard-cf701c87.js";import"./Card-6b8166bd.js";import"./Views-0c5423a6.js";import"./Affix-44c84a49.js";import"./Button-47bf58f7.js";import"./context-6d5d8fe5.js";import"./Tooltip-4f11c588.js";import"./usePopper-0066ca78.js";import"./index.esm-2eb9a221.js";import"./index-0b68a97f.js";import"./index.esm-37c3564c.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ccb51e40.js";import"./extends-98964cd2.js";const m=()=>e.jsx(o,{language:"js",children:`import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'

const Component = () => {

    const [ message, setMessage ] = useTimeOutMessage(5000)

	return (...)
}
`}),i="UseTimeOutMessageDoc",r={title:"useTimeOutMessage",desc:"useTimeOutMessage allow us to display message that disappear after a period of time."},a=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(m,{})}],p=[{component:"useTimeOutMessage",api:[{propName:"interval",type:"<code>number</code>",default:"<code>3000</code>",desc:"Time of message display"}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"message",type:"<code>string</code>",default:"-",desc:"Message string"},{propName:"setMessage",type:"<code>string</code>",default:"-",desc:"Message setter"}]}]}),S=()=>e.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:r,demos:a,api:p,mdPrefixPath:"utils",extra:d,keyText:"param"});export{S as default};
