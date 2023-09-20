import{r as c,j as e}from"./index-4bd6b7b3.js";import{D as d}from"./DemoLayout-abb47ea7.js";import{F as m}from"./FormPatternInput-ed9fe7df.js";import{B as l}from"./Button-39d85f08.js";import{F as u,a as i}from"./FormItem-e2a22149.js";import{F as f,a as h,b as g}from"./formik.esm-a048d78e.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./Tooltip-0c11394e.js";import"./usePopper-ea474854.js";import"./index.esm-07747377.js";import"./index-06706b89.js";import"./index.esm-0cdca32a.js";import"./SyntaxHighlighter-d5a055b8.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";import"./index-96e19bc1.js";import"./DemoComponentApi-dfdadeb6.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./react-number-format.es-61c35378.js";import"./Input-1462fe73.js";import"./context-a8cf3940.js";import"./isNil-ae028dac.js";import"./get-2d6f452a.js";import"./toString-a7228545.js";import"./_MapCache-9c7f01dc.js";const b=()=>{const[o,t]=c.useState(0),r=a=>{console.log(a),t(a.floatValue)};return e.jsx(m,{value:o,format:"### ###",onValueChange:r})},x=()=>e.jsx(f,{initialValues:{cardNumber:0},onSubmit:(o,{resetForm:t,setSubmitting:r})=>{r(!0),setTimeout(()=>{alert(JSON.stringify(o,null,2)),r(!1),t()},400)},children:({touched:o,errors:t,isSubmitting:r})=>e.jsx(h,{children:e.jsxs(u,{layout:"inline",children:[e.jsx(i,{label:"Card Number",invalid:t.cardNumber&&o.cardNumber,errorMessage:t.cardNumber,children:e.jsx(g,{name:"cardNumber",children:({field:a,form:n})=>e.jsx(m,{form:n,field:a,format:"#### #### #### ####",mask:"_",placeholder:"Card Number",value:a.value,onValueChange:p=>{n.setFieldValue(a.name,p.floatValue)}})})}),e.jsx(i,{children:e.jsx(l,{variant:"solid",loading:r,type:"submit",children:"Submit"})})]})})}),s="FormPatternInputDoc",y={title:"FormPatternInput",desc:'FormPatternInput wrapped Input component with <a class="text-indigo-600 underline" href="https://github.com/s-yadav/react-number-format" target="_blank">react-number-format</a>, refer to the <a class="text-indigo-600 underline" href="https://s-yadav.github.io/react-number-format/docs/pattern_format" target="_blank">official doc</a> for more usage example .'},F=[{mdName:"Basic",mdPath:s,title:"Basic",desc:'Basic usage of FormPatternInputDoc, all <a class="text-indigo-600 underline" href="https://s-yadav.github.io/react-number-format/docs/customization" target="_blank">react-number-format props</a> can be apply to this component as well.',component:e.jsx(b,{})},{mdName:"WithForm",mdPath:s,title:"WithForm",desc:'Example usage with <a class="text-indigo-600 underline" href="https://formik.org/" target="_blank">Formik</a>',component:e.jsx(x,{})}],N=[{component:"FormPatternInputDoc",api:[{propName:"field",type:"<code>{string: any, value: any, onBlur:() => void, onChange:() => void}</code>",default:"-",desc:"Formik field props"},{propName:"form",type:'<a class="text-indigo-600 underline" href="https://formik.org/docs/api/formik#props-1" target="_blank"><code>FormikProp</code></a>',default:"-",desc:"Formik field props"},{propName:"inputPrefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside Input"},{propName:"inputSuffix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a suffix content inside Input"},{propName:"format",type:"<code>string</code>",default:"-",desc:"It defines the format pattern using the # (or a patternChar ) character. # is the placeholder character for numbers"},{propName:"allowEmptyFormatting",type:"<code>boolean</code>",default:"-",desc:"By default PatternFormat component does not apply formatting when value is empty (null, undefined or ''). If you want to apply formatting on empty values set allowEmptyFormatting to true."},{propName:"mask",type:"<code>string</code> | <code>Array<string></code>",default:"-",desc:"Used as mask character for numeric places, until any numeric character is provided for that position. You can provide different mask characters for every numeric positions by passing array of mask characters. Note: The length of mask characters should match the numbers of # patternChar"},{propName:"patternChar",type:"<code>string</code>",default:"-",desc:"This helps define the format pattern character"}]}],k=e.jsxs("div",{className:"demo-api-table mb-12",children:[e.jsx("h4",{className:"mb-5",children:"Dependencies"}),e.jsx("h6",{id:"react-number-format-api",className:"mb-3",children:"React number format"}),e.jsxs("p",{children:["All common React number format props can be applied on this component, refer"," ",e.jsx("a",{className:"underline text-indigo-600",href:"https://s-yadav.github.io/react-number-format/docs/props",target:"_blank",rel:"noreferrer",children:"official docs"})," ","for the complete this.props.first list."," "]})]}),ee=()=>e.jsx(d,{innerFrame:!1,header:y,demos:F,api:N,mdPrefixPath:"shared",extra:k});export{ee as default};
