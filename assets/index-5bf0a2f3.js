import{j as e}from"./index-2a02f09f.js";import{D as t}from"./DemoComponentApi-c288533a.js";import{D as i}from"./DemoLayout-62d26969.js";import{S as o}from"./SyntaxHighlighter-3e4bb9d6.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./index-6bbe4810.js";import"./AdaptableCard-260ffff4.js";import"./Card-de52f0bd.js";import"./Views-597fd265.js";import"./Affix-f01dbede.js";import"./Button-3d6c325f.js";import"./context-ccc0a902.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./index.esm-c61f0406.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";const a=()=>e.jsx(o,{language:"js",children:`import { useState } from 'react'       
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
