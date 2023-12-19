import{r as p,j as e}from"./index-6767ac81.js";import{D as d}from"./DemoLayout-3595de25.js";import{F as m}from"./FormPatternInput-a50e206b.js";import{B as l}from"./Button-edcd26d9.js";import{F as u,a as f,b as h,c as i,d as g}from"./formik.esm-35003a33.js";import"./AdaptableCard-1cecc9da.js";import"./Card-da872ceb.js";import"./Views-e5205a91.js";import"./Affix-bd237bf0.js";import"./Tooltip-777f9f9c.js";import"./usePopper-ba5004dc.js";import"./index.esm-52ddd804.js";import"./index-fb02f18d.js";import"./index.esm-107f547f.js";import"./SyntaxHighlighter-7b64a68f.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-0b80b8cd.js";import"./DemoComponentApi-5636f861.js";import"./index-d5eb49a4.js";import"./index.esm-ad20eb15.js";import"./react-number-format.es-3a1aae10.js";import"./Input-736c9e0d.js";import"./context-cdfa92ed.js";import"./isNil-1a1387e3.js";import"./get-582c28e3.js";import"./toString-5f976032.js";import"./_MapCache-5db605d8.js";const b=()=>{const[o,t]=p.useState(0),r=a=>{console.log(a),t(a.floatValue)};return e.jsx(m,{value:o,format:"### ###",onValueChange:r})},x=()=>e.jsx(u,{initialValues:{cardNumber:0},onSubmit:(o,{resetForm:t,setSubmitting:r})=>{r(!0),setTimeout(()=>{alert(JSON.stringify(o,null,2)),r(!1),t()},400)},children:({touched:o,errors:t,isSubmitting:r})=>e.jsx(f,{children:e.jsxs(h,{layout:"inline",children:[e.jsx(i,{label:"Card Number",invalid:t.cardNumber&&o.cardNumber,errorMessage:t.cardNumber,children:e.jsx(g,{name:"cardNumber",children:({field:a,form:n})=>e.jsx(m,{form:n,field:a,format:"#### #### #### ####",mask:"_",placeholder:"Card Number",value:a.value,onValueChange:c=>{n.setFieldValue(a.name,c.floatValue)}})})}),e.jsx(i,{children:e.jsx(l,{variant:"solid",loading:r,type:"submit",children:"Submit"})})]})})}),s="FormPatternInputDoc",y={title:"FormPatternInput",desc:'FormPatternInput wrapped Input component with <a class="text-indigo-600 underline" href="https://github.com/s-yadav/react-number-format" target="_blank">react-number-format</a>, refer to the <a class="text-indigo-600 underline" href="https://s-yadav.github.io/react-number-format/docs/pattern_format" target="_blank">official doc</a> for more usage example .'},F=[{mdName:"Basic",mdPath:s,title:"Basic",desc:'Basic usage of FormPatternInputDoc, all <a class="text-indigo-600 underline" href="https://s-yadav.github.io/react-number-format/docs/customization" target="_blank">react-number-format props</a> can be apply to this component as well.',component:e.jsx(b,{})},{mdName:"WithForm",mdPath:s,title:"WithForm",desc:'Example usage with <a class="text-indigo-600 underline" href="https://formik.org/" target="_blank">Formik</a>',component:e.jsx(x,{})}],N=[{component:"FormPatternInputDoc",api:[{propName:"field",type:"<code>{string: any, value: any, onBlur:() => void, onChange:() => void}</code>",default:"-",desc:"Formik field props"},{propName:"form",type:'<a class="text-indigo-600 underline" href="https://formik.org/docs/api/formik#props-1" target="_blank"><code>FormikProp</code></a>',default:"-",desc:"Formik field props"},{propName:"inputPrefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside Input"},{propName:"inputSuffix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a suffix content inside Input"},{propName:"format",type:"<code>string</code>",default:"-",desc:"It defines the format pattern using the # (or a patternChar ) character. # is the placeholder character for numbers"},{propName:"allowEmptyFormatting",type:"<code>boolean</code>",default:"-",desc:"By default PatternFormat component does not apply formatting when value is empty (null, undefined or ''). If you want to apply formatting on empty values set allowEmptyFormatting to true."},{propName:"mask",type:"<code>string</code> | <code>Array<string></code>",default:"-",desc:"Used as mask character for numeric places, until any numeric character is provided for that position. You can provide different mask characters for every numeric positions by passing array of mask characters. Note: The length of mask characters should match the numbers of # patternChar"},{propName:"patternChar",type:"<code>string</code>",default:"-",desc:"This helps define the format pattern character"}]}],k=e.jsxs("div",{className:"demo-api-table mb-12",children:[e.jsx("h4",{className:"mb-5",children:"Dependencies"}),e.jsx("h6",{id:"react-number-format-api",className:"mb-3",children:"React number format"}),e.jsxs("p",{children:["All common React number format props can be applied on this component, refer"," ",e.jsx("a",{className:"underline text-indigo-600",href:"https://s-yadav.github.io/react-number-format/docs/props",target:"_blank",rel:"noreferrer",children:"official docs"})," ","for the complete this.props.first list."," "]})]}),X=()=>e.jsx(d,{innerFrame:!1,header:y,demos:F,api:N,mdPrefixPath:"shared",extra:k});export{X as default};
