import{j as e}from"./index-5b083722.js";import{I as d}from"./Input-48a3f72c.js";import{C as O}from"./index-f0eb9061.js";import{B as I}from"./Button-f1066bd7.js";import{S as u}from"./Select-356b8b96.js";import{F as M,a as P,b as q,c,d as m,g as o}from"./formik.esm-ca71b2a3.js";import{N as W}from"./react-number-format.es-918493e5.js";import{n as j,o as v,a as b,b as g}from"./constants-ca202644.js";import{c as f}from"./countries.constant-5369f7df.js";import{c as N,a as s,d as S}from"./index.esm-7fc76d40.js";import"./context-6fe9373e.js";import"./Views-2896b481.js";import"./isNil-416a1774.js";import"./get-752f7dea.js";import"./toString-981652f6.js";import"./_MapCache-79b01de9.js";import"./cloneDeep-966052d2.js";import"./_Uint8Array-3568a2c8.js";import"./_getPrototype-6d07ecf6.js";import"./_baseIsEqual-ce991c11.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./floating-ui.dom-bef9cea3.js";import"./index.esm-577c3d7b.js";import"./index-3898d2cc.js";const C=["unemployed","student","retired"],V=N().shape({taxResident:s().required("Please select your country of tax resident"),tin:s().when("noTin",{is:!1,then:i=>i.required("Please enter your Taxpayer Identification number (TIN)"),otherwise:i=>i}),noTinReason:s().when("noTin",{is:!0,then:i=>i.required("Please indicate your reason"),otherwise:i=>i}),noTin:S(),occupation:s().required("Please choose your occupation"),annualIncome:s().required("Please tell us your annual income range"),sourceOfWealth:s().required("Please tell us the source of funds use in this account"),companyInformation:N().when("occupation",{is:i=>i&&!C.includes(i),then:i=>i.shape({companyName:s().required("Please enter your company name"),contactNumber:s().required("Please enter your company contact number"),country:s().required("Please select country"),addressLine1:s().required("Please enter your address"),addressLine2:s(),city:s().required("Please enter your city"),state:s().required("Please enter your state"),zipCode:s().required("Please enter zip code")}),otherwise:i=>i})}),z=i=>e.jsx(d,{...i,value:i.field.value}),w=({onValueChange:i,...y})=>e.jsx(W,{customInput:d,type:"text",autoComplete:"off",onValueChange:i,...y}),me=({data:i={taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},onNextChange:y,onBackChange:x,currentStepStatus:T})=>{const F=(p,r)=>{y==null||y(p,"financialInformation",r)},R=()=>{x==null||x()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Financial Information"}),e.jsx("p",{children:"Fill in your financial information to help us speed up the verication process."})]}),e.jsx(M,{enableReinitialize:!0,initialValues:i,validationSchema:V,onSubmit:(p,{setSubmitting:r})=>{r(!0),setTimeout(()=>{F(p,r)},1e3)},children:({values:p,touched:r,errors:a,isSubmitting:L})=>{var h;return e.jsx(P,{children:e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsx("h5",{className:"mb-4",children:"Tax Information"}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Tax resident of",invalid:a.taxResident&&r.taxResident,errorMessage:a.taxResident,children:e.jsx(m,{name:"taxResident",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Tax resident of",field:t,form:l,options:f,value:f.filter(n=>n.value===p.taxResident),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),p.noTin?e.jsx(c,{label:"Please provide an appropriate reason if no TIN",invalid:a.noTinReason&&r.noTinReason,errorMessage:a.noTinReason,children:e.jsx(m,{name:"noTinReason",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Select reason",field:t,form:l,options:j,value:j.filter(n=>n.value===p.noTinReason),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}):e.jsx(c,{label:"Taxpayer Identification number (TIN)",invalid:a.tin&&r.tin,errorMessage:a.tin,children:e.jsx(m,{type:"text",autoComplete:"off",name:"tin",placeholder:"TIN",component:d})})]})]}),e.jsx(c,{children:e.jsx(m,{name:"noTin",component:O,children:"Check this if no TIN number is available"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-4",children:"Employment Information"}),e.jsx(c,{label:"Occupation",invalid:a.occupation&&r.occupation,errorMessage:a.occupation,children:e.jsx(m,{name:"occupation",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Occupation",field:t,form:l,options:v,value:v.filter(n=>n.value===p.occupation),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),p.occupation&&!C.includes(p.occupation)&&e.jsxs("div",{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Full company name",invalid:o(a,"companyInformation.companyName")&&o(r,"companyInformation.companyName"),errorMessage:o(a,"companyInformation.companyName"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.companyName",placeholder:"Full company name",component:d})}),e.jsx(c,{label:"Employer Contact Number",invalid:a.companyInformation&&a.companyInformation.contactNumber&&((h=r.companyInformation)==null?void 0:h.contactNumber),errorMessage:a.companyInformation&&a.companyInformation.contactNumber,children:e.jsx(m,{name:"companyInformation.contactNumber",children:({field:t,form:l})=>e.jsx(w,{form:l,field:t,customInput:z,placeholder:"Employer Contact Number",onValueChange:n=>{l.setFieldValue(t.name,n.value)}})})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Country",invalid:o(a,"companyInformation.country")&&o(r,"companyInformation.country"),errorMessage:o(a,"companyInformation.country"),children:e.jsx(m,{name:"companyInformation.country",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Country",field:t,form:l,options:f,value:f.filter(n=>n.value===o(p,"companyInformation.country")),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),e.jsx(c,{label:"Address Line 1",invalid:o(a,"companyInformation.addressLine1")&&o(r,"companyInformation.addressLine1"),errorMessage:o(a,"companyInformation.addressLine1"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.addressLine1",placeholder:"Company address line 1",component:d})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Address Line 2",invalid:o(a,"companyInformation.addressLine2")&&o(r,"companyInformation.addressLine2"),errorMessage:o(a,"companyInformation.addressLine2"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.addressLine2",placeholder:"Company address line 2",component:d})}),e.jsx(c,{label:"City",invalid:o(a,"companyInformation.city")&&o(r,"companyInformation.city"),errorMessage:o(a,"companyInformation.city"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.city",placeholder:"City",component:d})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"State",invalid:o(a,"companyInformation.state")&&o(r,"companyInformation.state"),errorMessage:o(a,"companyInformation.state"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.state",placeholder:"State",component:d})}),e.jsx(c,{label:"Zip Code",invalid:o(a,"companyInformation.zipCode")&&o(r,"companyInformation.zipCode"),errorMessage:o(a,"companyInformation.zipCode"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.zipCode",placeholder:"Zip Code",component:d})})]})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(c,{label:"Annual Income",invalid:a.annualIncome&&r.annualIncome,errorMessage:a.annualIncome,children:e.jsx(m,{name:"annualIncome",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Annual Income",field:t,form:l,options:b,value:b.filter(n=>n.value===p.annualIncome),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),e.jsx(c,{label:"Source of Wealth",invalid:a.sourceOfWealth&&r.sourceOfWealth,errorMessage:a.sourceOfWealth,children:e.jsx(m,{name:"sourceOfWealth",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Source of Wealth",field:t,form:l,options:g,value:g.filter(n=>n.value===p.sourceOfWealth),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(I,{type:"button",onClick:R,children:"Back"}),e.jsx(I,{loading:L,variant:"solid",type:"submit",children:T==="complete"?"Save":"Next"})]})]})})}})]})};export{me as default};
