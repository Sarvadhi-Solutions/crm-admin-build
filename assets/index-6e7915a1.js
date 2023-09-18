import{j as e}from"./index-7a16719d.js";import{D as t}from"./DemoComponentApi-898a36fa.js";import{D as o}from"./DemoLayout-7c805240.js";import{S as r}from"./SyntaxHighlighter-746c9a4b.js";import"./index-0e21c6e2.js";import"./index.esm-5d9ef8bc.js";import"./index-7c73c178.js";import"./AdaptableCard-13b794a2.js";import"./Card-1701bbfb.js";import"./Views-6f74b325.js";import"./Affix-67c05f4f.js";import"./Button-796af526.js";import"./context-0b7be94f.js";import"./Tooltip-d9375ea6.js";import"./usePopper-f1e01f1f.js";import"./index.esm-1010dceb.js";import"./index-7ccc27ab.js";import"./index.esm-a0bff864.js";import"./toConsumableArray-f36ee3dc.js";import"./objectWithoutPropertiesLoose-df62547b.js";const p=()=>e.jsx(r,{language:"js",children:`import deepParseJson from '@/utils/deepParseJson'

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
