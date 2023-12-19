import{j as e}from"./index-a75c2214.js";import{D as t}from"./DemoComponentApi-81a65b6e.js";import{D as i}from"./DemoLayout-2a08f2a3.js";import{S as o}from"./SyntaxHighlighter-39525d8f.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";import"./index-129cb3d5.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const a=()=>e.jsx(o,{language:"js",children:`import { useState } from 'react'       
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
