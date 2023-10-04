import{j as e,r as A}from"./index-b09faefa.js";import{I as j}from"./Input-8c731b0c.js";import{B as L}from"./Button-3bdf4581.js";import{C as F}from"./index-c173cf47.js";import{S as z}from"./Select-71db8857.js";import{F as P,a as c}from"./FormItem-cdcc11d5.js";import{F as q,a as I,b as m}from"./formik.esm-93e44345.js";import{g as N}from"./get-263a9377.js";import{c as b}from"./countries.constant-5369f7df.js";import{c as v,a as d,d as M}from"./index.esm-333232d6.js";import"./context-80e77f1b.js";import"./Views-57e82c67.js";import"./isNil-f81aee01.js";import"./cloneDeep-de9ec659.js";import"./_Uint8Array-b1a93c95.js";import"./_MapCache-a97510fd.js";import"./_getPrototype-3540f1e6.js";import"./_baseIsEqual-77ddc906.js";import"./slicedToArray-00fbfd7c.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./toConsumableArray-f69b773e.js";import"./floating-ui.dom-bef9cea3.js";import"./index.esm-2c67faf2.js";import"./index-62df96f3.js";import"./toString-9cef9a7f.js";const S=v().shape({country:d().required("Please select country"),addressLine1:d().required("Please enter your address"),addressLine2:d(),city:d().required("Please enter your city"),state:d().required("Please enter your state"),zipCode:d().required("Please enter zip code"),sameCorrespondenceAddress:M(),correspondenceAddress:v().when("sameCorrespondenceAddress",{is:!1,then:i=>i.shape({country:d().required("Please select country"),addressLine1:d().required("Please enter your address"),addressLine2:d(),city:d().required("Please enter your city"),state:d().required("Please enter your state"),zipCode:d().required("Please enter zip code")}),otherwise:i=>i})}),g=i=>{const{values:h,touched:l,errors:f,countryName:n,addressLine1Name:p,addressLine2Name:s,cityName:o,stateName:u,zipCodeName:x}=i,r=A.useCallback(a=>N(f,a),[f]),t=A.useCallback(a=>N(l,a),[l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Country",invalid:r(n)&&t(n),errorMessage:r(n),children:e.jsx(m,{name:n,children:({field:a,form:C})=>e.jsx(z,{placeholder:"Country",field:a,form:C,options:b,value:b.filter(y=>y.value===N(h,n)),onChange:y=>C.setFieldValue(a.name,y==null?void 0:y.value)})})}),e.jsx(c,{label:"Address Line 1",invalid:r(p)&&t(p),errorMessage:r(p),children:e.jsx(m,{type:"text",autoComplete:"off",name:p,placeholder:"Address Line 1",component:j})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Address Line 2",invalid:r(s)&&t(s),errorMessage:r(s),children:e.jsx(m,{type:"text",autoComplete:"off",name:s,placeholder:"Address Line 2",component:j})}),e.jsx(c,{label:"City",invalid:r(o)&&t(o),errorMessage:r(o),children:e.jsx(m,{type:"text",autoComplete:"off",name:o,placeholder:"City",component:j})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"State",invalid:r(u)&&t(u),errorMessage:r(u),children:e.jsx(m,{type:"text",autoComplete:"off",name:u,placeholder:"State",component:j})}),e.jsx(c,{label:"Zip Code",invalid:r(x)&&t(x),errorMessage:r(x),children:e.jsx(m,{type:"text",autoComplete:"off",name:x,placeholder:"Zip Code",component:j})})]})]})},ae=({data:i={country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},onNextChange:h,onBackChange:l,currentStepStatus:f})=>{const n=(s,o)=>{h==null||h(s,"addressInformation",o)},p=()=>{l==null||l()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Address Information"}),e.jsx("p",{children:"Enter your address information help us to speed up the verication process."})]}),e.jsx(q,{enableReinitialize:!0,initialValues:i,validationSchema:S,onSubmit:(s,{setSubmitting:o})=>{o(!0),setTimeout(()=>{n(s,o)},1e3)},children:({values:s,touched:o,errors:u,isSubmitting:x})=>{const r={values:s,touched:o,errors:u};return e.jsx(I,{children:e.jsxs(P,{children:[e.jsx("h5",{className:"mb-4",children:"Permanent Address"}),e.jsx(g,{countryName:"country",addressLine1Name:"addressLine1",addressLine2Name:"addressLine2",cityName:"city",stateName:"state",zipCodeName:"zipCode",...r}),e.jsx(c,{children:e.jsx(m,{name:"sameCorrespondenceAddress",children:({field:t,form:a})=>e.jsx(F,{checked:s.sameCorrespondenceAddress,onChange:C=>a.setFieldValue(t.name,C),children:"Correspondence address is same as above"})})}),!s.sameCorrespondenceAddress&&e.jsxs(e.Fragment,{children:[e.jsx("h5",{className:"mb-4",children:"Correspondence Address"}),e.jsx(g,{countryName:"correspondenceAddress.country",addressLine1Name:"correspondenceAddress.addressLine1",addressLine2Name:"correspondenceAddress.addressLine2",cityName:"correspondenceAddress.city",stateName:"correspondenceAddress.state",zipCodeName:"correspondenceAddress.zipCode",...r})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(L,{type:"button",onClick:p,children:"Back"}),e.jsx(L,{loading:x,variant:"solid",type:"submit",children:f==="complete"?"Save":"Next"})]})]})})}})]})};export{ae as default};
