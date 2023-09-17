import{am as _,an as S,ao as j,ap as D,as as I,j as t,ar as N,r as c,G as d,a as F}from"./index-5b083722.js";import{C as A}from"./Views-2896b481.js";import{A as E}from"./AdaptableCard-96bc8e59.js";import{M as x}from"./index-b09fd56f.js";import{K as m,aS as L}from"./index.esm-577c3d7b.js";import{u as b}from"./useThemeClass-a72d650b.js";import{d as R}from"./AccountServices-910d1d4e.js";import"./Card-90f8ec69.js";import"./index-0fd37ad7.js";import"./useUniqueId-7aeed284.js";import"./toString-981652f6.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],O=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(L,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const M=c.lazy(()=>d(()=>import("./PersonalInformation-f07100a7.js"),["assets/PersonalInformation-f07100a7.js","assets/index-5b083722.js","assets/index-69024d0e.css","assets/Input-48a3f72c.js","assets/context-6fe9373e.js","assets/Views-2896b481.js","assets/isNil-416a1774.js","assets/get-752f7dea.js","assets/toString-981652f6.js","assets/_MapCache-79b01de9.js","assets/index-dd3cb046.js","assets/Button-f1066bd7.js","assets/index-15ca79f1.js","assets/useControllableState-60589411.js","assets/useMergeRef-788c4cb0.js","assets/Calendar-ebf2d3b6.js","assets/index.esm-577c3d7b.js","assets/useRootClose-bfd7b4dd.js","assets/usePopper-a11bdbe9.js","assets/CloseButton-d9cd3bbc.js","assets/RangeCalendar-baaf2850.js","assets/TimeInput-069dac51.js","assets/useUniqueId-7aeed284.js","assets/useDidUpdate-f47f5e27.js","assets/Select-356b8b96.js","assets/toConsumableArray-d895a881.js","assets/objectWithoutPropertiesLoose-df62547b.js","assets/floating-ui.dom-bef9cea3.js","assets/formik.esm-ca71b2a3.js","assets/index-3898d2cc.js","assets/react-number-format.es-918493e5.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-7fc76d40.js"])),V=c.lazy(()=>d(()=>import("./Identification-4edab814.js"),["assets/Identification-4edab814.js","assets/index-5b083722.js","assets/index-69024d0e.css","assets/index-b665f1fe.js","assets/useControllableState-60589411.js","assets/context-6fe9373e.js","assets/Upload-3bc63f23.js","assets/cloneDeep-966052d2.js","assets/_Uint8Array-3568a2c8.js","assets/_MapCache-79b01de9.js","assets/Views-2896b481.js","assets/_getPrototype-6d07ecf6.js","assets/index.esm-28b84125.js","assets/Button-f1066bd7.js","assets/CloseButton-d9cd3bbc.js","assets/index.esm-577c3d7b.js","assets/toast-6a0b7cb5.js","assets/useTimeout-e6d0b381.js","assets/StatusIcon-e0b5cde3.js","assets/chainedFunction-070f832c.js","assets/Badge-3cabc902.js","assets/formik.esm-ca71b2a3.js","assets/index-3898d2cc.js","assets/SvgIcon-deac4660.js","assets/DoubleSidedImage-8890aa7e.js","assets/SegmentItemOption-7a99ef68.js","assets/useThemeClass-a72d650b.js","assets/index.esm-7fc76d40.js"])),K=c.lazy(()=>d(()=>import("./AddressInfomation-3313d310.js"),["assets/AddressInfomation-3313d310.js","assets/index-5b083722.js","assets/index-69024d0e.css","assets/Input-48a3f72c.js","assets/context-6fe9373e.js","assets/Views-2896b481.js","assets/isNil-416a1774.js","assets/get-752f7dea.js","assets/toString-981652f6.js","assets/_MapCache-79b01de9.js","assets/Button-f1066bd7.js","assets/index-f0eb9061.js","assets/cloneDeep-966052d2.js","assets/_Uint8Array-3568a2c8.js","assets/_getPrototype-6d07ecf6.js","assets/_baseIsEqual-ce991c11.js","assets/Select-356b8b96.js","assets/toConsumableArray-d895a881.js","assets/objectWithoutPropertiesLoose-df62547b.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-577c3d7b.js","assets/formik.esm-ca71b2a3.js","assets/index-3898d2cc.js","assets/countries.constant-5369f7df.js","assets/index.esm-7fc76d40.js"])),w=c.lazy(()=>d(()=>import("./FinancialInformation-a474ed44.js"),["assets/FinancialInformation-a474ed44.js","assets/index-5b083722.js","assets/index-69024d0e.css","assets/Input-48a3f72c.js","assets/context-6fe9373e.js","assets/Views-2896b481.js","assets/isNil-416a1774.js","assets/get-752f7dea.js","assets/toString-981652f6.js","assets/_MapCache-79b01de9.js","assets/index-f0eb9061.js","assets/cloneDeep-966052d2.js","assets/_Uint8Array-3568a2c8.js","assets/_getPrototype-6d07ecf6.js","assets/_baseIsEqual-ce991c11.js","assets/Button-f1066bd7.js","assets/Select-356b8b96.js","assets/toConsumableArray-d895a881.js","assets/objectWithoutPropertiesLoose-df62547b.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-577c3d7b.js","assets/formik.esm-ca71b2a3.js","assets/index-3898d2cc.js","assets/react-number-format.es-918493e5.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-7fc76d40.js"])),G=c.lazy(()=>d(()=>import("./AccountReview-5fa1726c.js"),["assets/AccountReview-5fa1726c.js","assets/index-5b083722.js","assets/index-69024d0e.css","assets/DoubleSidedImage-8890aa7e.js"])),H=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(E,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(O,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(M,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(K,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(w,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(G,{})]})})]})})})},ta=H;export{ta as default};
