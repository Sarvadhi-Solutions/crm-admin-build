import{am as _,an as S,ao as j,ap as D,aZ as I,j as t,aq as N,r as c,K as d,a as F}from"./index-03c04ff8.js";import{C as A}from"./Views-6cf30eea.js";import{A as L}from"./AdaptableCard-eef040d7.js";import{M as x}from"./index-f63d6955.js";import{L as m,at as E}from"./index.esm-0ab06d90.js";import{u as b}from"./useThemeClass-701da38c.js";import{d as R}from"./AccountServices-83e9d0b4.js";import"./Card-ac72e1c3.js";import"./index-b7b7180a.js";import"./useUniqueId-9d592829.js";import"./toString-6216203c.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],O=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(E,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const M=c.lazy(()=>d(()=>import("./PersonalInformation-035fc055.js"),["assets/PersonalInformation-035fc055.js","assets/index-03c04ff8.js","assets/index-5c5e0e0e.css","assets/Input-a694346c.js","assets/Button-43b0b556.js","assets/Views-6cf30eea.js","assets/isNil-b5e08138.js","assets/get-b8650fa5.js","assets/toString-6216203c.js","assets/_MapCache-a07a3963.js","assets/index-e73ce215.js","assets/index-564117fd.js","assets/useControllableState-a86a8835.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-fd86ac0e.js","assets/index.esm-0ab06d90.js","assets/useRootClose-70ca7828.js","assets/usePopper-63a1f788.js","assets/CloseButton-a5f0795d.js","assets/TimeInput-c79520af.js","assets/useUniqueId-9d592829.js","assets/useDidUpdate-4e1a0ded.js","assets/Select-f865911a.js","assets/slicedToArray-0d7757b0.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-381032b8.js","assets/floating-ui.dom-4bc0055b.js","assets/FormItem-e51bc525.js","assets/index-ca954fc1.js","assets/formik.esm-7069ec7e.js","assets/react-number-format.es-2fa40838.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-22b7b6b8.js"])),V=c.lazy(()=>d(()=>import("./Identification-60ee7d05.js"),["assets/Identification-60ee7d05.js","assets/index-03c04ff8.js","assets/index-5c5e0e0e.css","assets/index-4125dbd0.js","assets/useControllableState-a86a8835.js","assets/Button-43b0b556.js","assets/Upload-d3b407d2.js","assets/cloneDeep-057bcc25.js","assets/_MapCache-a07a3963.js","assets/Views-6cf30eea.js","assets/_getPrototype-65f62f79.js","assets/index.esm-f417d29a.js","assets/CloseButton-a5f0795d.js","assets/index.esm-0ab06d90.js","assets/toast-5fc5fe7c.js","assets/useTimeout-c02373c8.js","assets/StatusIcon-ded4acbe.js","assets/chainedFunction-070f832c.js","assets/Badge-9e03359a.js","assets/FormItem-e51bc525.js","assets/index-ca954fc1.js","assets/SvgIcon-44fe3b92.js","assets/DoubleSidedImage-17852b04.js","assets/SegmentItemOption-35337f78.js","assets/useThemeClass-701da38c.js","assets/formik.esm-7069ec7e.js","assets/index.esm-22b7b6b8.js"])),K=c.lazy(()=>d(()=>import("./AddressInfomation-3086d506.js"),["assets/AddressInfomation-3086d506.js","assets/index-03c04ff8.js","assets/index-5c5e0e0e.css","assets/Input-a694346c.js","assets/Button-43b0b556.js","assets/Views-6cf30eea.js","assets/isNil-b5e08138.js","assets/get-b8650fa5.js","assets/toString-6216203c.js","assets/_MapCache-a07a3963.js","assets/index-65a265b2.js","assets/cloneDeep-057bcc25.js","assets/_getPrototype-65f62f79.js","assets/_baseIsEqual-accf4f3c.js","assets/Select-f865911a.js","assets/slicedToArray-0d7757b0.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-381032b8.js","assets/floating-ui.dom-4bc0055b.js","assets/index.esm-0ab06d90.js","assets/FormItem-e51bc525.js","assets/index-ca954fc1.js","assets/formik.esm-7069ec7e.js","assets/countries.constant-5369f7df.js","assets/index.esm-22b7b6b8.js"])),w=c.lazy(()=>d(()=>import("./FinancialInformation-cbb7ce8b.js"),["assets/FinancialInformation-cbb7ce8b.js","assets/index-03c04ff8.js","assets/index-5c5e0e0e.css","assets/Input-a694346c.js","assets/Button-43b0b556.js","assets/Views-6cf30eea.js","assets/isNil-b5e08138.js","assets/get-b8650fa5.js","assets/toString-6216203c.js","assets/_MapCache-a07a3963.js","assets/index-65a265b2.js","assets/cloneDeep-057bcc25.js","assets/_getPrototype-65f62f79.js","assets/_baseIsEqual-accf4f3c.js","assets/Select-f865911a.js","assets/slicedToArray-0d7757b0.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-381032b8.js","assets/floating-ui.dom-4bc0055b.js","assets/index.esm-0ab06d90.js","assets/FormItem-e51bc525.js","assets/index-ca954fc1.js","assets/formik.esm-7069ec7e.js","assets/react-number-format.es-2fa40838.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-22b7b6b8.js"])),H=c.lazy(()=>d(()=>import("./AccountReview-c463bcf3.js"),["assets/AccountReview-c463bcf3.js","assets/index-03c04ff8.js","assets/index-5c5e0e0e.css","assets/DoubleSidedImage-17852b04.js"])),q=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(L,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(O,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(M,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(K,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(w,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(H,{})]})})]})})})},ta=q;export{ta as default};
