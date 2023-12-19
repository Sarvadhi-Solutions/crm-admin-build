import{j as e,r as A}from"./index-c2c71b67.js";import{I as j}from"./Input-a6235faa.js";import{B as L}from"./Button-9c5fa51c.js";import{C as F}from"./index-0f7a857e.js";import{S as z}from"./Select-dd041f61.js";import{F as P,a as c}from"./FormItem-78a020e3.js";import{F as q,a as I,b as m}from"./formik.esm-25f04447.js";import{g as N}from"./get-bbcb2570.js";import{c as b}from"./countries.constant-5369f7df.js";import{c as v,a as d,f as M}from"./index.esm-3f39c77b.js";import"./Views-3e469d6a.js";import"./isNil-d22b3e6c.js";import"./cloneDeep-a5d9ba9c.js";import"./_MapCache-2e280b6f.js";import"./_getPrototype-6c543eab.js";import"./_baseIsEqual-10de66da.js";import"./slicedToArray-3c0066d1.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-c30e1148.js";import"./floating-ui.dom-4bc0055b.js";import"./index.esm-854b309f.js";import"./index-ccd45f27.js";import"./toString-ac4075ef.js";const S=v().shape({country:d().required("Please select country"),addressLine1:d().required("Please enter your address"),addressLine2:d(),city:d().required("Please enter your city"),state:d().required("Please enter your state"),zipCode:d().required("Please enter zip code"),sameCorrespondenceAddress:M(),correspondenceAddress:v().when("sameCorrespondenceAddress",{is:!1,then:i=>i.shape({country:d().required("Please select country"),addressLine1:d().required("Please enter your address"),addressLine2:d(),city:d().required("Please enter your city"),state:d().required("Please enter your state"),zipCode:d().required("Please enter zip code")}),otherwise:i=>i})}),g=i=>{const{values:h,touched:l,errors:f,countryName:n,addressLine1Name:p,addressLine2Name:s,cityName:o,stateName:u,zipCodeName:x}=i,r=A.useCallback(t=>N(f,t),[f]),a=A.useCallback(t=>N(l,t),[l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Country",invalid:r(n)&&a(n),errorMessage:r(n),children:e.jsx(m,{name:n,children:({field:t,form:C})=>e.jsx(z,{placeholder:"Country",field:t,form:C,options:b,value:b.filter(y=>y.value===N(h,n)),onChange:y=>C.setFieldValue(t.name,y==null?void 0:y.value)})})}),e.jsx(c,{label:"Address Line 1",invalid:r(p)&&a(p),errorMessage:r(p),children:e.jsx(m,{type:"text",autoComplete:"off",name:p,placeholder:"Address Line 1",component:j})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Address Line 2",invalid:r(s)&&a(s),errorMessage:r(s),children:e.jsx(m,{type:"text",autoComplete:"off",name:s,placeholder:"Address Line 2",component:j})}),e.jsx(c,{label:"City",invalid:r(o)&&a(o),errorMessage:r(o),children:e.jsx(m,{type:"text",autoComplete:"off",name:o,placeholder:"City",component:j})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"State",invalid:r(u)&&a(u),errorMessage:r(u),children:e.jsx(m,{type:"text",autoComplete:"off",name:u,placeholder:"State",component:j})}),e.jsx(c,{label:"Zip Code",invalid:r(x)&&a(x),errorMessage:r(x),children:e.jsx(m,{type:"text",autoComplete:"off",name:x,placeholder:"Zip Code",component:j})})]})]})},se=({data:i={country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},onNextChange:h,onBackChange:l,currentStepStatus:f})=>{const n=(s,o)=>{h==null||h(s,"addressInformation",o)},p=()=>{l==null||l()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Address Information"}),e.jsx("p",{children:"Enter your address information help us to speed up the verication process."})]}),e.jsx(q,{enableReinitialize:!0,initialValues:i,validationSchema:S,onSubmit:(s,{setSubmitting:o})=>{o(!0),setTimeout(()=>{n(s,o)},1e3)},children:({values:s,touched:o,errors:u,isSubmitting:x})=>{const r={values:s,touched:o,errors:u};return e.jsx(I,{children:e.jsxs(P,{children:[e.jsx("h5",{className:"mb-4",children:"Permanent Address"}),e.jsx(g,{countryName:"country",addressLine1Name:"addressLine1",addressLine2Name:"addressLine2",cityName:"city",stateName:"state",zipCodeName:"zipCode",...r}),e.jsx(c,{children:e.jsx(m,{name:"sameCorrespondenceAddress",children:({field:a,form:t})=>e.jsx(F,{checked:s.sameCorrespondenceAddress,onChange:C=>t.setFieldValue(a.name,C),children:"Correspondence address is same as above"})})}),!s.sameCorrespondenceAddress&&e.jsxs(e.Fragment,{children:[e.jsx("h5",{className:"mb-4",children:"Correspondence Address"}),e.jsx(g,{countryName:"correspondenceAddress.country",addressLine1Name:"correspondenceAddress.addressLine1",addressLine2Name:"correspondenceAddress.addressLine2",cityName:"correspondenceAddress.city",stateName:"correspondenceAddress.state",zipCodeName:"correspondenceAddress.zipCode",...r})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(L,{type:"button",onClick:p,children:"Back"}),e.jsx(L,{loading:x,variant:"solid",type:"submit",children:f==="complete"?"Save":"Next"})]})]})})}})]})};export{se as default};
