import{r as w,j as e,n as R}from"./index-4bd6b7b3.js";import{D as L}from"./DemoLayout-abb47ea7.js";import{F as x,a as t}from"./FormItem-e2a22149.js";import{I as c}from"./Input-1462fe73.js";import{B as u}from"./Button-39d85f08.js";import{C as v}from"./index-e9ce1b4a.js";import{F as j,a as b,b as r,c as D,g as M}from"./formik.esm-a048d78e.js";import{av as U,aw as z,b4 as O,a_ as $,K as B}from"./index.esm-0cdca32a.js";import{c as g,a as p,d as C,g as _,b as S,e as P}from"./index.esm-3518a165.js";import{I as E}from"./index-f24b5e4f.js";import{D as A}from"./index-20aa5a1a.js";import{T as Y}from"./Tooltip-0c11394e.js";import{S as V}from"./Select-938bf375.js";import{T as J}from"./index-b945cf70.js";import{R as k}from"./index-b212dc1a.js";import{S as G}from"./Switcher-83573e00.js";import{S as q}from"./index-5de84849.js";import{U as H}from"./Upload-a4e0db34.js";import{S as W}from"./SegmentItemOption-42dbb18b.js";import{C as Z}from"./react-select-creatable.esm-47ca6206.js";import"./AdaptableCard-4c3d12d7.js";import"./Card-526fc8df.js";import"./Views-d9a5bf10.js";import"./Affix-ac80e3a0.js";import"./SyntaxHighlighter-d5a055b8.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-3723ed4f.js";import"./extends-98964cd2.js";import"./index-96e19bc1.js";import"./DemoComponentApi-dfdadeb6.js";import"./index-2d18d6c2.js";import"./index.esm-9d1f44b1.js";import"./context-a8cf3940.js";import"./index-06706b89.js";import"./isNil-ae028dac.js";import"./get-2d6f452a.js";import"./toString-a7228545.js";import"./_MapCache-9c7f01dc.js";import"./cloneDeep-9b3959e9.js";import"./_Uint8Array-04aa9e28.js";import"./_getPrototype-715b1198.js";import"./_baseIsEqual-a094f75a.js";import"./useControllableState-259714d7.js";import"./useMergeRef-788c4cb0.js";import"./Calendar-c92b9cfd.js";import"./useRootClose-5ed82cf8.js";import"./usePopper-ea474854.js";import"./CloseButton-6e2e0ec5.js";import"./RangeCalendar-0a16d493.js";import"./TimeInput-05c24087.js";import"./useUniqueId-a782b7b3.js";import"./useDidUpdate-f7d2ff2b.js";import"./index.esm-07747377.js";import"./slicedToArray-e2770cb7.js";import"./floating-ui.dom-bef9cea3.js";import"./index.esm-4ed14753.js";import"./toast-88ff7e3e.js";import"./useTimeout-f676b9da.js";import"./StatusIcon-8490d43a.js";import"./chainedFunction-070f832c.js";import"./useThemeClass-b8c9a717.js";const K=g().shape({email:p().email("Invalid email").required("Email Required"),userName:p().min(3,"Too Short!").max(12,"Too Long!").required("User Name Required"),password:p().required("Password Required").min(8,"Too Short!").matches(/^[A-Za-z0-9_-]*$/,"Only Letters & Numbers Allowed"),rememberMe:C()}),X=()=>{const[l,i]=w.useState("password"),n=m=>{m.preventDefault(),i(l==="password"?"text":"password")},a=e.jsx("span",{className:"cursor-pointer",onClick:m=>n(m),children:l==="password"?e.jsx(U,{}):e.jsx(z,{})});return e.jsx("div",{children:e.jsx(j,{initialValues:{email:"",userName:"",password:"",rememberMe:!1},validationSchema:K,onSubmit:(m,{resetForm:s,setSubmitting:o})=>{setTimeout(()=>{alert(JSON.stringify(m,null,2)),o(!1),s()},400)},children:({touched:m,errors:s,resetForm:o})=>e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{label:"Email",invalid:s.email&&m.email,errorMessage:s.email,children:e.jsx(r,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:c})}),e.jsx(t,{label:"User Name",invalid:s.userName&&m.userName,errorMessage:s.userName,children:e.jsx(r,{type:"text",autoComplete:"off",name:"userName",placeholder:"User Name",component:c})}),e.jsx(t,{label:"Password",invalid:s.password&&m.password,errorMessage:s.password,children:e.jsx(r,{type:l,suffix:a,autoComplete:"off",name:"password",placeholder:"Password",component:c})}),e.jsx(t,{children:e.jsx(r,{name:"rememberMe",component:v,children:"Remember Me"})}),e.jsxs(t,{children:[e.jsx(u,{type:"reset",className:"ltr:mr-2 rtl:ml-2",onClick:()=>o(),children:"Reset"}),e.jsx(u,{variant:"solid",type:"submit",children:"Submit"})]})]})})})})},Q=[{label:"Vertical",value:"vertical"},{label:"Horizontal",value:"horizontal"},{label:"Inline",value:"inline"}],ee=()=>{const[l,i]=w.useState("vertical"),n=a=>{i(a)};return e.jsxs("div",{children:[e.jsx(E,{className:"mb-6",children:Q.map(a=>e.jsx(u,{active:l===a.value,onClick:()=>n(a.value),children:a.label},a.value))}),e.jsx(j,{initialValues:{name:"",email:""},onSubmit:async a=>{await new Promise(m=>setTimeout(m,500)),alert(JSON.stringify(a,null,2))},children:e.jsx(b,{children:e.jsxs(x,{layout:l,children:[e.jsx(t,{label:"Name",children:e.jsx(r,{type:"text",name:"name",placeholder:"Please enter your name",component:c})}),e.jsx(t,{label:"Email",children:e.jsx(r,{type:"email",name:"email",placeholder:"Please enter your email",component:c})}),e.jsx(t,{children:e.jsx(u,{type:"submit",children:"Submit"})})]})})})]})},ae=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}],ie=()=>{const[l,i]=w.useState("md"),n=a=>{i(a)};return e.jsxs("div",{children:[e.jsx(E,{className:"mb-6",children:ae.map(a=>e.jsx(u,{active:l===a.value,onClick:()=>n(a.value),children:a.label},a.value))}),e.jsx(j,{initialValues:{name:"",email:"",date:""},onSubmit:async a=>{await new Promise(m=>setTimeout(m,500)),alert(JSON.stringify(a,null,2))},children:e.jsx(b,{children:e.jsxs(x,{size:l,children:[e.jsx(t,{label:"Name",children:e.jsx(r,{type:"text",name:"name",placeholder:"Please enter your name",component:c})}),e.jsx(t,{label:"Email",children:e.jsx(r,{type:"email",name:"email",placeholder:"Please enter your email",component:c})}),e.jsx(t,{label:"Date",children:e.jsx(r,{name:"date",children:({field:a,form:m})=>e.jsx(A,{field:a,form:m,value:a.value,placeholder:"Select Date",onChange:s=>{m.setFieldValue(a.name,s)}})})}),e.jsx(t,{children:e.jsx(u,{type:"submit",children:"Submit"})})]})})})]})},le=e.jsx(Y,{title:"Field info",children:e.jsx(O,{className:"text-lg cursor-pointer ml-1"})}),se=e.jsx("span",{className:"ml-1 opacity-60",children:"(optional)"}),te=()=>e.jsx("div",{children:e.jsx(j,{initialValues:{fieldA:"",fieldB:""},onSubmit:async l=>{await new Promise(i=>setTimeout(i,500)),alert(JSON.stringify(l,null,2))},children:e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{label:"Name",extra:le,children:e.jsx(r,{type:"text",name:"fieldA",placeholder:"Please Input",component:c})}),e.jsx(t,{label:"Email",extra:se,children:e.jsx(r,{type:"text",name:"fieldB",placeholder:"Please Input",component:c})}),e.jsx(t,{children:e.jsx(u,{type:"submit",children:"Submit"})})]})})})});function ne(l){let i;return l?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(l)||(i="Invalid email address"):i="Required",i}function oe(l){if(!l)return"Required";if(l==="admin")return"Nice try!"}const re=()=>e.jsx("div",{children:e.jsx(j,{initialValues:{username:"",email:""},onSubmit:l=>{console.log(l)},children:({errors:l,touched:i})=>e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{label:"Email",invalid:l.email&&i.email,errorMessage:l.email,children:e.jsx(r,{type:"email",name:"email",placeholder:"Email",component:c,validate:ne})}),e.jsx(t,{label:"User Name",invalid:l.username&&i.username,errorMessage:l.username,children:e.jsx(r,{type:"text",name:"username",placeholder:"User Name",component:c,validate:oe})}),e.jsx(t,{children:e.jsx(u,{type:"submit",variant:"solid",children:"Submit"})})]})})})}),me=g().shape({email:p().email("Invalid email").required("Required"),userName:p().min(3,"Too Short!").max(12,"Too Long!").required("Required")}),de=()=>e.jsx("div",{children:e.jsx(j,{initialValues:{email:"",userName:""},validationSchema:me,onSubmit:(l,{setSubmitting:i})=>{setTimeout(()=>{alert(JSON.stringify(l,null,2)),i(!1)},400)},children:({touched:l,errors:i})=>e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{label:"Email",invalid:i.email&&l.email,errorMessage:i.email,children:e.jsx(r,{type:"email",name:"email",placeholder:"Email",component:c})}),e.jsx(t,{label:"User Name",invalid:i.userName&&l.userName,errorMessage:i.userName,children:e.jsx(r,{type:"text",name:"userName",placeholder:"User Name",component:c})}),e.jsx(t,{children:e.jsx(u,{type:"submit",children:"Submit"})})]})})})}),ce=g().shape({password:p().required("Password Required"),confirmPassword:p().required("Confirm Password Required").oneOf([_("password")],"Password not match")}),ue=()=>e.jsx(j,{enableReinitialize:!0,initialValues:{password:"",confirmPassword:""},validationSchema:ce,onSubmit:(l,{resetForm:i,setSubmitting:n})=>{n(!0),setTimeout(()=>{alert(JSON.stringify(l,null,2)),n(!1),i()},400)},children:({resetForm:l,touched:i,errors:n,isSubmitting:a})=>e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{label:"Password",invalid:n.password&&i.password,errorMessage:n.password,children:e.jsx(r,{autoComplete:"off",name:"password",placeholder:"Password",component:c,type:"password"})}),e.jsx(t,{label:"Password",invalid:n.confirmPassword&&i.confirmPassword,errorMessage:n.confirmPassword,children:e.jsx(r,{autoComplete:"off",name:"confirmPassword",placeholder:"Confirm Password",component:c,type:"password"})}),e.jsx(t,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(u,{type:"reset",onClick:()=>l(),children:"Reset"}),e.jsx(u,{variant:"solid",type:"submit",loading:a,children:"Submit"})]})})]})})}),pe=l=>new Promise(i=>setTimeout(i,l)),he=()=>{const[l,i]=w.useState(!1),n=async(a,m)=>{const{touched:s,errors:o}=m;if(a){if(o.userName&&!s.userName)return o.userName;if(i(!0),await pe(2e3),a==="Adam"){i(!1);return}return i(!1),"This User name has been taken"}};return e.jsx("div",{children:e.jsx(j,{initialValues:{userName:""},onSubmit:(a,{resetForm:m,setSubmitting:s})=>{setTimeout(()=>{alert(JSON.stringify(a,null,2)),s(!1),m()},400)},children:({errors:a,...m})=>e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{label:"Check valid username",invalid:a.userName&&a.userName.length>0,errorMessage:a.userName,children:e.jsx(r,{type:"text",name:"userName",autoComplete:"off",placeholder:"User Name",suffix:e.jsx(R,{className:l?"":"hidden"}),validate:s=>n(s,{errors:a,...m}),component:c})}),e.jsx(t,{children:e.jsx(u,{variant:"solid",type:"submit",children:"Submit"})})]})})})})},xe=g({groupName:p().required("Group Name is required"),users:S().of(g().shape({name:p().required("Name required"),email:p().required("Email required").email("Enter valid email")}))}),T=(l,i)=>{const n=M(l.errors,i),a=M(l.touched,i);return{errorMessage:n||"",invalid:typeof a>"u"?!1:n&&a}},je=()=>e.jsx("div",{children:e.jsx(j,{validationSchema:xe,initialValues:{users:[{name:"Leslie James",email:"leslie.james@themenate.com"},{name:"Kelly Lambert",email:"kelly.lambert@themenate.com"}],groupName:""},onSubmit:l=>alert(JSON.stringify(l,null,2)),children:({touched:l,errors:i,values:n})=>{const a=n.users;return e.jsx(b,{children:e.jsx(x,{layout:"inline",children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h5",{className:"mb-4",children:"User List"}),e.jsx(t,{layout:"vertical",label:"Group",invalid:i.groupName&&l.groupName,errorMessage:i.groupName,children:e.jsx(r,{placeholder:"Group Name",name:"groupName",component:c})})]}),e.jsx(D,{name:"users",children:({form:m,remove:s,push:o})=>e.jsxs("div",{children:[a&&a.length>0?a.map((d,f)=>{const y=T(m,`users[${f}].name`),N=T(m,`users[${f}].email`);return e.jsxs("div",{children:[e.jsx(t,{label:"Name",invalid:y.invalid,errorMessage:y.errorMessage,children:e.jsx(r,{invalid:y.invalid,placeholder:"User Name",name:`users[${f}].name`,type:"text",component:c})}),e.jsx(t,{label:"Email",invalid:N.invalid,errorMessage:N.errorMessage,children:e.jsx(r,{invalid:N.invalid,placeholder:"User Name",name:`users[${f}].email`,type:"email",component:c})}),e.jsx(u,{shape:"circle",size:"sm",icon:e.jsx($,{}),onClick:()=>s(f)})]},f)}):null,e.jsxs("div",{children:[e.jsx(u,{type:"button",className:"ltr:mr-2 rtl:ml-2",onClick:()=>{o({name:"",email:""})},children:"Add a User"}),e.jsx(u,{type:"submit",variant:"solid",children:"Submit"})]})]})})]})})})}})}),F=[{value:"foo",label:"Foo"},{value:"bar",label:"Bar"}],be=[{value:"Personal",desc:"The plan for personal."},{value:"Team",desc:"The plan for team"},{value:"Business",desc:"Talk to us for business plan."}],fe=1,I=2,ve=g().shape({input:p().min(3,"Too Short!").max(20,"Too Long!").required("Please input user name!"),select:p().required("Please select one!"),multipleSelect:S().min(1,"At least one is selected!"),date:P().required("Date Required!").nullable(),time:P().required("Time Required!").nullable(),singleCheckbox:C().oneOf([!0],"You must tick this!"),multipleCheckbox:S().min(1,"Select at least one option!"),radio:p().required("Please select one!"),switcher:C().oneOf([!0],"You must turn this on!"),upload:S().min(fe,"At least one file uploaded!"),segment:S().min(1,"Select at least one option!")}),ge=()=>{const l=(i,n)=>{let a=!0;const m=["image/jpeg","image/png"],s=5e5;if(n.length>=I)return`You can only upload ${I} file(s)`;if(i)for(const o of i)m.includes(o.type)||(a="Please upload a .jpeg or .png file!"),o.size>=s&&(a="Upload image cannot more then 500kb!");return a};return e.jsx("div",{children:e.jsx(j,{enableReinitialize:!0,initialValues:{input:"",select:"",multipleSelect:[],date:null,time:null,singleCheckbox:!1,multipleCheckbox:[],radio:"",switcher:!1,segment:[],upload:[]},validationSchema:ve,onSubmit:(i,{setSubmitting:n})=>{console.log("values",i),setTimeout(()=>{alert(JSON.stringify(i,null,2)),n(!1)},400)},children:({values:i,touched:n,errors:a,resetForm:m})=>e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(t,{asterisk:!0,label:"Input",invalid:a.input&&n.input,errorMessage:a.input,children:e.jsx(r,{type:"text",name:"input",placeholder:"Input",component:c})}),e.jsx(t,{asterisk:!0,label:"Select",invalid:a.select&&n.select,errorMessage:a.select,children:e.jsx(r,{name:"select",children:({field:s,form:o})=>e.jsx(V,{field:s,form:o,options:F,value:F.filter(d=>d.value===i.select),onChange:d=>o.setFieldValue(s.name,d==null?void 0:d.value)})})}),e.jsx(t,{asterisk:!0,label:"Multiple Select",invalid:!!(a.multipleSelect&&n.multipleSelect),errorMessage:a.multipleSelect,children:e.jsx(r,{name:"multipleSelect",children:({field:s,form:o})=>e.jsx(V,{isMulti:!0,componentAs:Z,field:s,form:o,options:F,value:i.multipleSelect,onChange:d=>{o.setFieldValue(s.name,d)}})})}),e.jsx(t,{asterisk:!0,label:"Date",invalid:a.date&&n.date,errorMessage:a.date,children:e.jsx(r,{name:"date",placeholder:"Date",children:({field:s,form:o})=>e.jsx(A,{field:s,form:o,value:i.date,onChange:d=>{o.setFieldValue(s.name,d)}})})}),e.jsx(t,{asterisk:!0,label:"Time",invalid:a.time&&n.time,errorMessage:a.time,children:e.jsx(r,{name:"time",placeholder:"Date",children:({field:s,form:o})=>e.jsx(J,{field:s,form:o,value:i.time,onChange:d=>{o.setFieldValue(s.name,d)}})})}),e.jsx(t,{asterisk:!0,label:"Upload",invalid:!!(a.upload&&n.upload),errorMessage:a.upload,children:e.jsx(r,{name:"upload",children:({field:s,form:o})=>e.jsx(H,{beforeUpload:l,fileList:i.upload,onChange:d=>o.setFieldValue(s.name,d),onFileRemove:d=>o.setFieldValue(s.name,d)})})}),e.jsx(t,{asterisk:!0,label:"Multiple Checkbox",invalid:!!(a.multipleCheckbox&&n.multipleCheckbox),errorMessage:a.multipleCheckbox,children:e.jsx(r,{name:"multipleCheckbox",children:({field:s,form:o})=>e.jsx(e.Fragment,{children:e.jsxs(v.Group,{value:i.multipleCheckbox,onChange:d=>o.setFieldValue(s.name,d),children:[e.jsxs(v,{name:s.name,value:"Apple",children:["Apple"," "]}),e.jsxs(v,{name:s.name,value:"Banana",children:["Banana"," "]}),e.jsxs(v,{name:s.name,value:"Lemon",children:["Lemon"," "]})]})})})}),e.jsx(t,{asterisk:!0,label:"Radio",invalid:a.radio&&n.radio,errorMessage:a.radio,children:e.jsx(r,{name:"radio",children:({field:s,form:o})=>e.jsxs(k.Group,{value:i.radio,onChange:d=>o.setFieldValue(s.name,d),children:[e.jsx(k,{value:1,children:"Paypal"}),e.jsx(k,{value:2,children:"Stripe"})]})})}),e.jsx(t,{asterisk:!0,label:"Single Checkbox",invalid:a.singleCheckbox&&n.singleCheckbox,errorMessage:a.singleCheckbox,children:e.jsx(r,{name:"singleCheckbox",component:v,children:"I agree to the terms and conditions"})}),e.jsx(t,{asterisk:!0,label:"Switcher",invalid:a.switcher&&n.switcher,errorMessage:a.switcher,children:e.jsx("div",{children:e.jsx(r,{name:"switcher",component:G})})}),e.jsx(t,{asterisk:!0,label:"Segment",invalid:!!(a.segment&&n.segment),errorMessage:a.segment,children:e.jsx(r,{name:"segment",children:({field:s,form:o})=>e.jsx(q,{className:"w-full",selectionType:"multiple",value:i.segment,onChange:d=>o.setFieldValue(s.name,d),children:e.jsx("div",{className:"grid grid-cols-3 gap-4 w-full",children:be.map(d=>e.jsx(q.Item,{value:d.value,children:({active:f,onSegmentItemClick:y,disabled:N})=>e.jsx("div",{className:"text-center",children:e.jsx(W,{hoverable:!0,active:f,disabled:N,defaultGutter:!1,className:"relative min-h-[80px] w-full",customCheck:e.jsx(B,{className:"text-indigo-600 absolute top-2 right-2 text-lg"}),onSegmentItemClick:y,children:e.jsxs("div",{className:"flex flex-col items-start mx-4",children:[e.jsx("h6",{children:d.value}),e.jsx("p",{children:d.desc})]})})})},d.value))})})})}),e.jsxs(t,{children:[e.jsx(u,{type:"reset",className:"ltr:mr-2 rtl:ml-2",onClick:()=>m(),children:"Reset"}),e.jsx(u,{variant:"solid",type:"submit",children:"Submit"})]})]})})})})},h="FormControl",ye={title:"Form Control",desc:'Form is used to collect & verify user input data. We use <a class="underline text-blue-500" href="https://formik.org/" target="_blank">Formik</a> as our form control library, most of our form components were compatible with Formik binding.'},Ne=[{mdName:"Basic",mdPath:h,title:"Basic",desc:"Sample usage of a simple form with validation.",component:e.jsx(X,{})},{mdName:"Layout",mdPath:h,title:"Form Layout",desc:"<code>FormContainer</code> allow us to control all the <code>FormItem</code> <code>layout</code> via a single props.",component:e.jsx(ee,{})},{mdName:"Sizes",mdPath:h,title:"Form Size",desc:"<code>FormContainer</code> allow us to control <code>FormItem</code> <code>size</code> as well.",component:e.jsx(ie,{})},{mdName:"LabelExtra",mdPath:h,title:"Label Extra",desc:"We can add additional content to the form label with <code>FormItem</code> <code>extra</code> props.",component:e.jsx(te,{})},{mdName:"FieldValidation",mdPath:h,title:"Field-level Validation",desc:"Formik supports field-level validation via the date prop of <code>Field</code> or <code>FastField</code> components or useField hook. ",component:e.jsx(re,{})},{mdName:"SchemaValidation",mdPath:h,title:"Schema Validation",desc:'We can use <a class="underline target="_blank" href="https://github.com/jquense/yup">Yup</a> for object schema validation.',component:e.jsx(de,{})},{mdName:"DependentValidation",mdPath:h,title:"Dependent Validation",desc:'You can use <a class="underline target="_blank" href="https://github.com/jquense/yup#schemawhenkeys-string--string-builder-object--values-any-schema--schema-schema">Yup</a> condition to perform field validation based on other form values. ',component:e.jsx(ue,{})},{mdName:"AsyncValidation",mdPath:h,title:"Async Validation",desc:"You can also asynchronous validating a fields.",component:e.jsx(he,{})},{mdName:"DynamicForm",mdPath:h,title:"Dynamic Form",desc:"Example usage of dynamic form with <code>FieldArray</code>.",component:e.jsx(je,{})},{mdName:"MixedFormControl",mdPath:h,title:"Mixed Form Control",desc:"Demostrate different kind of form related component witin a form.",component:e.jsx(ge,{})}],Se=[{component:"FormContainer",api:[{propName:"layout",type:"<code>'horizontal'</code> | <code>'vertical'</code> | <code>'inline'</code>",default:"<code>'vertical'</code>",desc:"Form layout"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"<code>'md'</code>",desc:"Form item size"},{propName:"labelWidth",type:"<code>stirng</code>  | <code>number</code> ",default:"<code>100</code>",desc:"Form label width"}]},{component:"FormItem",api:[{propName:"layout",type:"<code>'horizontal'</code> | <code>'vertical'</code> | <code>'inline'</code>",default:"-",desc:"Form layout"},{propName:"size",type:"<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>",default:"-",desc:"Form item size"},{propName:"labelWidth",type:"<code>stirng</code>  | <code>number</code> ",default:"-",desc:"Form label width"},{propName:"errorMessage",type:"<code>stirng</code>",default:"-",desc:"Error Message that will display when <code>invalid</code> was triggered"},{propName:"invalid",type:"<code>boolean</code>",default:"-",desc:"Validate status of FormItem"},{propName:"asterisk",type:"<code>boolean</code>",default:"-",desc:"Whether to display asterisk beside label text"},{propName:"extra",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Extra custom content beside label text"},{propName:"htmlFor",type:"<code>string</code>",default:"-",desc:"Set sub label htmlFor"}]}],we=e.jsxs("div",{children:[e.jsx("h4",{children:"Formik"}),e.jsxs("p",{className:"mt-2",children:["Formik is a flexible form library for React, which allow us to do form state manipulation, validation & submission, you can visit the official",e.jsxs("a",{className:"underline text-blue-500",href:"https://formik.org/docs/overview",target:"_blank",rel:"noreferrer",children:[" ","documentation"," "]}),"for more detail formik usage & examples."]}),e.jsx("h4",{className:"mt-10",children:"Yup"}),e.jsxs("p",{className:"mt-2",children:["Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation. you can visit the official",e.jsxs("a",{className:"underline text-blue-500",href:"https://github.com/jquense/yup",target:"_blank",rel:"noreferrer",children:[" ","documentation"," "]}),"for more detail Yup usage & examples."]})]}),Ia=()=>e.jsx(L,{header:ye,demos:Ne,api:Se,note:we});export{Ia as default};
