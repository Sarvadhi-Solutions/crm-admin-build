import{j as e}from"./index-7c10d2a3.js";import{D as t}from"./DemoComponentApi-e4137b40.js";import{D as i}from"./DemoLayout-f1d14075.js";import{S as o}from"./SyntaxHighlighter-587b13c1.js";import"./index-db1f8ae2.js";import"./index.esm-8bc236a5.js";import"./index-895d41a5.js";import"./AdaptableCard-d528512e.js";import"./Card-4ce3f213.js";import"./Views-5cb69e9a.js";import"./Affix-9d9e2f03.js";import"./Button-208b5861.js";import"./context-0e2e9d1c.js";import"./Tooltip-6aa5489c.js";import"./usePopper-80f33697.js";import"./index.esm-db0614cf.js";import"./index-be56d80d.js";import"./index.esm-d9298b40.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-2133173c.js";import"./extends-98964cd2.js";const a=()=>e.jsx(o,{language:"js",children:`import { useState } from 'react'       
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
