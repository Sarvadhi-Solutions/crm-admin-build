import{j as e}from"./index-5b083722.js";import{D as t}from"./DemoComponentApi-8e0ebe63.js";import{D as s}from"./DemoLayout-c496ff20.js";import{S as o}from"./SyntaxHighlighter-efa92768.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./index-c682b4c7.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";const m=()=>e.jsx(o,{language:"js",children:`import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'

const Component = () => {

    const [ message, setMessage ] = useTimeOutMessage(5000)

	return (...)
}
`}),i="UseTimeOutMessageDoc",r={title:"useTimeOutMessage",desc:"useTimeOutMessage allow us to display message that disappear after a period of time."},a=[{mdName:"Example",mdPath:i,title:"Example",desc:"",component:e.jsx(m,{})}],p=[{component:"useTimeOutMessage",api:[{propName:"interval",type:"<code>number</code>",default:"<code>3000</code>",desc:"Time of message display"}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"message",type:"<code>string</code>",default:"-",desc:"Message string"},{propName:"setMessage",type:"<code>string</code>",default:"-",desc:"Message setter"}]}]}),F=()=>e.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:r,demos:a,api:p,mdPrefixPath:"utils",extra:d,keyText:"param"});export{F as default};
