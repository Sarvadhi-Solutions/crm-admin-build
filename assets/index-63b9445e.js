import{j as e}from"./index-21d7ce34.js";import{D as t}from"./DemoComponentApi-f2c63353.js";import{D as i}from"./DemoLayout-5f0e61ea.js";import{S as o}from"./SyntaxHighlighter-ef52ffff.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./index-d93ff48a.js";import"./AdaptableCard-1403a507.js";import"./Card-c016d7e4.js";import"./Views-aa9d3067.js";import"./Affix-f43c1993.js";import"./Button-6c3081fd.js";import"./context-ff20449e.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index.esm-3f5f076a.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";const a=()=>e.jsx(o,{language:"js",children:`import { useState } from 'react'       
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
`}),r="RequiredFieldValidationDoc/",s={title:"requiredFieldValidation",desc:"This function can be use to displaying some message if the input value is falsy."},p=[{mdName:"Example",mdPath:r,title:"Example",desc:"",component:e.jsx(a,{})}],d=[{component:"requiredFieldValidation",api:[{propName:"value",type:"<code>string</code>",default:"-",desc:"Field value"},{propName:"message",type:"<code>string</code>",default:"-",desc:"Feedback message"}]}],m=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"validationMessage",type:"<code>string</code>",default:"<code>'Required'</code>",desc:"Feedback message"}]}]}),A=()=>e.jsx(i,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:p,api:d,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:m,keyText:"param"});export{A as default};
