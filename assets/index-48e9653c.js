import{j as e}from"./index-c3e9fa7c.js";import{D as t}from"./DemoComponentApi-e808b075.js";import{D as i}from"./DemoLayout-64fb2366.js";import{S as o}from"./SyntaxHighlighter-dfe70d12.js";import"./index-b1456952.js";import"./index.esm-e2831cf6.js";import"./index-6f0be7c6.js";import"./AdaptableCard-8cba0fc7.js";import"./Card-f5c778fb.js";import"./Views-4498dec6.js";import"./Affix-de39c7a8.js";import"./Button-d0ef02c0.js";import"./context-c2e517f5.js";import"./Tooltip-0d302304.js";import"./usePopper-26945918.js";import"./index.esm-fe639564.js";import"./index-203bcdc0.js";import"./index.esm-291b3c8a.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";const a=()=>e.jsx(o,{language:"js",children:`import { useState } from 'react'       
import requiredFieldValidation from '@/utils/requiredFieldValidation'

const Component = () => {

    const [ inputValue, setInputValue ] = useState('')
    const [ displayMessage, setDisplayMessage ] = useState(false)

    return (
        <>
            <input value={inputValue} onChange={e => {
                setInputValue(e.target.value)
                setDisplayMessage(true)
            }} />
            {displayMessage && requiredFieldValidation(inputValue, 'Required field!')}
        </>
    )
}
`}),r="RequiredFieldValidationDoc/",s={title:"requiredFieldValidation",desc:"This function can be use to displaying some message if the input value is falsy."},p=[{mdName:"Example",mdPath:r,title:"Example",desc:"",component:e.jsx(a,{})}],d=[{component:"requiredFieldValidation",api:[{propName:"value",type:"<code>string</code>",default:"-",desc:"Field value"},{propName:"message",type:"<code>string</code>",default:"-",desc:"Feedback message"}]}],m=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"validationMessage",type:"<code>string</code>",default:"<code>'Required'</code>",desc:"Feedback message"}]}]}),E=()=>e.jsx(i,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:p,api:d,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:m,keyText:"param"});export{E as default};
