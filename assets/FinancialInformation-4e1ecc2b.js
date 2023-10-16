import{j as e}from"./index-e30b2821.js";import{I as d}from"./Input-2c261c20.js";import{C as O}from"./index-813d88fe.js";import{B as I}from"./Button-7f51b5aa.js";import{S as u}from"./Select-aa8bbc1c.js";import{F as M,a as m}from"./FormItem-65da11c0.js";import{F as P,a as q,b as c,g as o}from"./formik.esm-fe7846d2.js";import{N as W}from"./react-number-format.es-6797ad2d.js";import{n as j,o as v,a as b,b as g}from"./constants-ca202644.js";import{c as f}from"./countries.constant-5369f7df.js";import{c as N,a as s,f as S}from"./index.esm-a7bb562e.js";import"./Views-64b223ad.js";import"./isNil-4b53f2ef.js";import"./get-53a32457.js";import"./toString-c9827e55.js";import"./_MapCache-e35f57ee.js";import"./cloneDeep-1d9827ea.js";import"./_getPrototype-18d03f40.js";import"./_baseIsEqual-435397ea.js";import"./slicedToArray-2d4e1c7e.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-07c3bb38.js";import"./floating-ui.dom-bef9cea3.js";import"./index.esm-8b3184d4.js";import"./index-aa71065b.js";const C=["unemployed","student","retired"],V=N().shape({taxResident:s().required("Please select your country of tax resident"),tin:s().when("noTin",{is:!1,then:i=>i.required("Please enter your Taxpayer Identification number (TIN)"),otherwise:i=>i}),noTinReason:s().when("noTin",{is:!0,then:i=>i.required("Please indicate your reason"),otherwise:i=>i}),noTin:S(),occupation:s().required("Please choose your occupation"),annualIncome:s().required("Please tell us your annual income range"),sourceOfWealth:s().required("Please tell us the source of funds use in this account"),companyInformation:N().when("occupation",{is:i=>i&&!C.includes(i),then:i=>i.shape({companyName:s().required("Please enter your company name"),contactNumber:s().required("Please enter your company contact number"),country:s().required("Please select country"),addressLine1:s().required("Please enter your address"),addressLine2:s(),city:s().required("Please enter your city"),state:s().required("Please enter your state"),zipCode:s().required("Please enter zip code")}),otherwise:i=>i})}),z=i=>e.jsx(d,{...i,value:i.field.value}),w=({onValueChange:i,...y})=>e.jsx(W,{customInput:d,type:"text",autoComplete:"off",onValueChange:i,...y}),ce=({data:i={taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},onNextChange:y,onBackChange:x,currentStepStatus:T})=>{const F=(p,r)=>{y==null||y(p,"financialInformation",r)},R=()=>{x==null||x()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Financial Information"}),e.jsx("p",{children:"Fill in your financial information to help us speed up the verication process."})]}),e.jsx(P,{enableReinitialize:!0,initialValues:i,validationSchema:V,onSubmit:(p,{setSubmitting:r})=>{r(!0),setTimeout(()=>{F(p,r)},1e3)},children:({values:p,touched:r,errors:a,isSubmitting:L})=>{var h;return e.jsx(q,{children:e.jsxs(M,{children:[e.jsxs("div",{children:[e.jsx("h5",{className:"mb-4",children:"Tax Information"}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(m,{label:"Tax resident of",invalid:a.taxResident&&r.taxResident,errorMessage:a.taxResident,children:e.jsx(c,{name:"taxResident",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Tax resident of",field:t,form:l,options:f,value:f.filter(n=>n.value===p.taxResident),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),p.noTin?e.jsx(m,{label:"Please provide an appropriate reason if no TIN",invalid:a.noTinReason&&r.noTinReason,errorMessage:a.noTinReason,children:e.jsx(c,{name:"noTinReason",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Select reason",field:t,form:l,options:j,value:j.filter(n=>n.value===p.noTinReason),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}):e.jsx(m,{label:"Taxpayer Identification number (TIN)",invalid:a.tin&&r.tin,errorMessage:a.tin,children:e.jsx(c,{type:"text",autoComplete:"off",name:"tin",placeholder:"TIN",component:d})})]})]}),e.jsx(m,{children:e.jsx(c,{name:"noTin",component:O,children:"Check this if no TIN number is available"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-4",children:"Employment Information"}),e.jsx(m,{label:"Occupation",invalid:a.occupation&&r.occupation,errorMessage:a.occupation,children:e.jsx(c,{name:"occupation",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Occupation",field:t,form:l,options:v,value:v.filter(n=>n.value===p.occupation),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),p.occupation&&!C.includes(p.occupation)&&e.jsxs("div",{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(m,{label:"Full company name",invalid:o(a,"companyInformation.companyName")&&o(r,"companyInformation.companyName"),errorMessage:o(a,"companyInformation.companyName"),children:e.jsx(c,{type:"text",autoComplete:"off",name:"companyInformation.companyName",placeholder:"Full company name",component:d})}),e.jsx(m,{label:"Employer Contact Number",invalid:a.companyInformation&&a.companyInformation.contactNumber&&((h=r.companyInformation)==null?void 0:h.contactNumber),errorMessage:a.companyInformation&&a.companyInformation.contactNumber,children:e.jsx(c,{name:"companyInformation.contactNumber",children:({field:t,form:l})=>e.jsx(w,{form:l,field:t,customInput:z,placeholder:"Employer Contact Number",onValueChange:n=>{l.setFieldValue(t.name,n.value)}})})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(m,{label:"Country",invalid:o(a,"companyInformation.country")&&o(r,"companyInformation.country"),errorMessage:o(a,"companyInformation.country"),children:e.jsx(c,{name:"companyInformation.country",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Country",field:t,form:l,options:f,value:f.filter(n=>n.value===o(p,"companyInformation.country")),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),e.jsx(m,{label:"Address Line 1",invalid:o(a,"companyInformation.addressLine1")&&o(r,"companyInformation.addressLine1"),errorMessage:o(a,"companyInformation.addressLine1"),children:e.jsx(c,{type:"text",autoComplete:"off",name:"companyInformation.addressLine1",placeholder:"Company address line 1",component:d})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(m,{label:"Address Line 2",invalid:o(a,"companyInformation.addressLine2")&&o(r,"companyInformation.addressLine2"),errorMessage:o(a,"companyInformation.addressLine2"),children:e.jsx(c,{type:"text",autoComplete:"off",name:"companyInformation.addressLine2",placeholder:"Company address line 2",component:d})}),e.jsx(m,{label:"City",invalid:o(a,"companyInformation.city")&&o(r,"companyInformation.city"),errorMessage:o(a,"companyInformation.city"),children:e.jsx(c,{type:"text",autoComplete:"off",name:"companyInformation.city",placeholder:"City",component:d})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(m,{label:"State",invalid:o(a,"companyInformation.state")&&o(r,"companyInformation.state"),errorMessage:o(a,"companyInformation.state"),children:e.jsx(c,{type:"text",autoComplete:"off",name:"companyInformation.state",placeholder:"State",component:d})}),e.jsx(m,{label:"Zip Code",invalid:o(a,"companyInformation.zipCode")&&o(r,"companyInformation.zipCode"),errorMessage:o(a,"companyInformation.zipCode"),children:e.jsx(c,{type:"text",autoComplete:"off",name:"companyInformation.zipCode",placeholder:"Zip Code",component:d})})]})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(m,{label:"Annual Income",invalid:a.annualIncome&&r.annualIncome,errorMessage:a.annualIncome,children:e.jsx(c,{name:"annualIncome",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Annual Income",field:t,form:l,options:b,value:b.filter(n=>n.value===p.annualIncome),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),e.jsx(m,{label:"Source of Wealth",invalid:a.sourceOfWealth&&r.sourceOfWealth,errorMessage:a.sourceOfWealth,children:e.jsx(c,{name:"sourceOfWealth",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Source of Wealth",field:t,form:l,options:g,value:g.filter(n=>n.value===p.sourceOfWealth),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(I,{type:"button",onClick:R,children:"Back"}),e.jsx(I,{loading:L,variant:"solid",type:"submit",children:T==="complete"?"Save":"Next"})]})]})})}})]})};export{ce as default};
