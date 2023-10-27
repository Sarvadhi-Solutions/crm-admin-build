import{al as _,am as S,an as j,ao as D,aZ as I,j as t,aq as N,r as c,J as d,a as F}from"./index-9ca3e01c.js";import{C as A}from"./Views-42612634.js";import{A as L}from"./AdaptableCard-058cf2b7.js";import{M as x}from"./index-774679c3.js";import{L as m,at as E}from"./index.esm-6b1f01ae.js";import{u as b}from"./useThemeClass-7969df0f.js";import{d as R}from"./AccountServices-79028d43.js";import"./Card-c0916875.js";import"./index-bc261936.js";import"./useUniqueId-6324d8a0.js";import"./toString-8635ec69.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],O=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(E,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const M=c.lazy(()=>d(()=>import("./PersonalInformation-ae3c96fd.js"),["assets/PersonalInformation-ae3c96fd.js","assets/index-9ca3e01c.js","assets/index-c3b16755.css","assets/Input-e68710e2.js","assets/Button-da045d3b.js","assets/Views-42612634.js","assets/isNil-86adf5c4.js","assets/get-a0df1ab5.js","assets/toString-8635ec69.js","assets/_MapCache-f937324f.js","assets/index-c083248d.js","assets/index-2a568809.js","assets/useControllableState-b48849fb.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-8cadcee6.js","assets/index.esm-6b1f01ae.js","assets/useRootClose-c82559b3.js","assets/usePopper-17a543ac.js","assets/CloseButton-6b9b0cd5.js","assets/TimeInput-16be473b.js","assets/useUniqueId-6324d8a0.js","assets/useDidUpdate-a2f69c3c.js","assets/Select-36a3bae0.js","assets/slicedToArray-c0178fc0.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-11b6685e.js","assets/floating-ui.dom-bef9cea3.js","assets/FormItem-1b070625.js","assets/index-cfbd213c.js","assets/formik.esm-fb6ffb80.js","assets/react-number-format.es-b89dcc55.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-b0403918.js"])),V=c.lazy(()=>d(()=>import("./Identification-ad4ab624.js"),["assets/Identification-ad4ab624.js","assets/index-9ca3e01c.js","assets/index-c3b16755.css","assets/index-6d5fd88b.js","assets/useControllableState-b48849fb.js","assets/Button-da045d3b.js","assets/Upload-527c5521.js","assets/cloneDeep-7fa59919.js","assets/_MapCache-f937324f.js","assets/Views-42612634.js","assets/_getPrototype-8ba892ec.js","assets/index.esm-cc380773.js","assets/CloseButton-6b9b0cd5.js","assets/index.esm-6b1f01ae.js","assets/toast-de05ed0a.js","assets/useTimeout-d0655f05.js","assets/StatusIcon-f3e19ac0.js","assets/chainedFunction-070f832c.js","assets/Badge-85dac0e9.js","assets/FormItem-1b070625.js","assets/index-cfbd213c.js","assets/SvgIcon-28360984.js","assets/DoubleSidedImage-d0ea17a3.js","assets/SegmentItemOption-5201e7ab.js","assets/useThemeClass-7969df0f.js","assets/formik.esm-fb6ffb80.js","assets/index.esm-b0403918.js"])),w=c.lazy(()=>d(()=>import("./AddressInfomation-36005164.js"),["assets/AddressInfomation-36005164.js","assets/index-9ca3e01c.js","assets/index-c3b16755.css","assets/Input-e68710e2.js","assets/Button-da045d3b.js","assets/Views-42612634.js","assets/isNil-86adf5c4.js","assets/get-a0df1ab5.js","assets/toString-8635ec69.js","assets/_MapCache-f937324f.js","assets/index-9410771e.js","assets/cloneDeep-7fa59919.js","assets/_getPrototype-8ba892ec.js","assets/_baseIsEqual-0e3d4282.js","assets/Select-36a3bae0.js","assets/slicedToArray-c0178fc0.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-11b6685e.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-6b1f01ae.js","assets/FormItem-1b070625.js","assets/index-cfbd213c.js","assets/formik.esm-fb6ffb80.js","assets/countries.constant-5369f7df.js","assets/index.esm-b0403918.js"])),H=c.lazy(()=>d(()=>import("./FinancialInformation-96a49743.js"),["assets/FinancialInformation-96a49743.js","assets/index-9ca3e01c.js","assets/index-c3b16755.css","assets/Input-e68710e2.js","assets/Button-da045d3b.js","assets/Views-42612634.js","assets/isNil-86adf5c4.js","assets/get-a0df1ab5.js","assets/toString-8635ec69.js","assets/_MapCache-f937324f.js","assets/index-9410771e.js","assets/cloneDeep-7fa59919.js","assets/_getPrototype-8ba892ec.js","assets/_baseIsEqual-0e3d4282.js","assets/Select-36a3bae0.js","assets/slicedToArray-c0178fc0.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-11b6685e.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-6b1f01ae.js","assets/FormItem-1b070625.js","assets/index-cfbd213c.js","assets/formik.esm-fb6ffb80.js","assets/react-number-format.es-b89dcc55.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-b0403918.js"])),K=c.lazy(()=>d(()=>import("./AccountReview-a545bc02.js"),["assets/AccountReview-a545bc02.js","assets/index-9ca3e01c.js","assets/index-c3b16755.css","assets/DoubleSidedImage-d0ea17a3.js"])),q=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(L,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(O,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(M,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(w,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(H,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(K,{})]})})]})})})},ta=q;export{ta as default};
