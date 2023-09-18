import{j as e}from"./index-21d7ce34.js";import{D as t}from"./DemoComponentApi-f2c63353.js";import{D as o}from"./DemoLayout-5f0e61ea.js";import{S as r}from"./SyntaxHighlighter-ef52ffff.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./index-d93ff48a.js";import"./AdaptableCard-1403a507.js";import"./Card-c016d7e4.js";import"./Views-aa9d3067.js";import"./Affix-f43c1993.js";import"./Button-6c3081fd.js";import"./context-ff20449e.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./index.esm-a8cf6609.js";import"./index-99dab15c.js";import"./index.esm-3f5f076a.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";const p=()=>e.jsx(r,{language:"js",children:`import deepParseJson from '@/utils/deepParseJson'

const parsed = deepParseJson('{"a":"{b:b, c:c},"d":"{e:{f:f}",'
)

// output: {
    a: {
        b: 'b',
        c: 'c'
    },
    d: {
        e: {
            f: 'f'
        }
    }
}
`}),s="DeepParseJsonDoc/",i={title:"deepParseJson",desc:"deepParseJson able to parse JSON string into javascript object, even nested or escaped."},a=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:e.jsx(p,{})}],m=[{component:"deepParseJson",api:[{propName:"jsonString",type:"<code>string</code>",default:"-",desc:"JSON string"}]}],n=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"parsedJsonString",type:"<code>object</code>",default:"-",desc:"Parsed JSON string"}]}]}),k=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:a,api:m,mdPrefixPath:"utils",extra:n,keyText:"param"});export{k as default};
