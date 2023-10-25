import{al as _,am as S,an as j,ao as D,aY as I,j as t,aq as N,r as c,J as d,a as F}from"./index-d1f55000.js";import{C as A}from"./Views-27dec28c.js";import{A as L}from"./AdaptableCard-ab6c1eb8.js";import{M as x}from"./index-7c8f45e7.js";import{L as m,at as E}from"./index.esm-a7f57555.js";import{u as b}from"./useThemeClass-29fe42de.js";import{d as R}from"./AccountServices-ebd8a15b.js";import"./Card-b6647cdf.js";import"./index-a10acbe3.js";import"./useUniqueId-68699ef9.js";import"./toString-7b4f9ac7.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],O=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(E,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const M=c.lazy(()=>d(()=>import("./PersonalInformation-3c04cf7c.js"),["assets/PersonalInformation-3c04cf7c.js","assets/index-d1f55000.js","assets/index-1a124896.css","assets/Input-40502faa.js","assets/Button-d10f25dd.js","assets/Views-27dec28c.js","assets/isNil-a1b43ef7.js","assets/get-3fbe7aa4.js","assets/toString-7b4f9ac7.js","assets/_MapCache-cbdf92c8.js","assets/index-6b0c2b51.js","assets/index-2f8e95cb.js","assets/useControllableState-2d8f7630.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-d43d05d7.js","assets/index.esm-a7f57555.js","assets/useRootClose-0334f01a.js","assets/usePopper-e4ac4eb1.js","assets/CloseButton-865c8503.js","assets/TimeInput-75c92f6e.js","assets/useUniqueId-68699ef9.js","assets/useDidUpdate-f8015a0a.js","assets/Select-9e04c31f.js","assets/slicedToArray-db6cc43d.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-9938cdfc.js","assets/floating-ui.dom-bef9cea3.js","assets/FormItem-4075ccd4.js","assets/index-5744fde1.js","assets/formik.esm-70843db0.js","assets/react-number-format.es-5e3a79f9.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-fc3e89e2.js"])),V=c.lazy(()=>d(()=>import("./Identification-9074f8f8.js"),["assets/Identification-9074f8f8.js","assets/index-d1f55000.js","assets/index-1a124896.css","assets/index-ce20e2d5.js","assets/useControllableState-2d8f7630.js","assets/Button-d10f25dd.js","assets/Upload-6df85b8e.js","assets/cloneDeep-94f873f1.js","assets/_MapCache-cbdf92c8.js","assets/Views-27dec28c.js","assets/_getPrototype-30a92b72.js","assets/index.esm-7beb0e22.js","assets/CloseButton-865c8503.js","assets/index.esm-a7f57555.js","assets/toast-4a408eff.js","assets/useTimeout-8ae64f40.js","assets/StatusIcon-e78efbe0.js","assets/chainedFunction-070f832c.js","assets/Badge-2e560773.js","assets/FormItem-4075ccd4.js","assets/index-5744fde1.js","assets/SvgIcon-24a96fd6.js","assets/DoubleSidedImage-3ef93e14.js","assets/SegmentItemOption-a45281b6.js","assets/useThemeClass-29fe42de.js","assets/formik.esm-70843db0.js","assets/index.esm-fc3e89e2.js"])),w=c.lazy(()=>d(()=>import("./AddressInfomation-81097418.js"),["assets/AddressInfomation-81097418.js","assets/index-d1f55000.js","assets/index-1a124896.css","assets/Input-40502faa.js","assets/Button-d10f25dd.js","assets/Views-27dec28c.js","assets/isNil-a1b43ef7.js","assets/get-3fbe7aa4.js","assets/toString-7b4f9ac7.js","assets/_MapCache-cbdf92c8.js","assets/index-b157f735.js","assets/cloneDeep-94f873f1.js","assets/_getPrototype-30a92b72.js","assets/_baseIsEqual-cd9e2cb0.js","assets/Select-9e04c31f.js","assets/slicedToArray-db6cc43d.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-9938cdfc.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-a7f57555.js","assets/FormItem-4075ccd4.js","assets/index-5744fde1.js","assets/formik.esm-70843db0.js","assets/countries.constant-5369f7df.js","assets/index.esm-fc3e89e2.js"])),H=c.lazy(()=>d(()=>import("./FinancialInformation-1029b629.js"),["assets/FinancialInformation-1029b629.js","assets/index-d1f55000.js","assets/index-1a124896.css","assets/Input-40502faa.js","assets/Button-d10f25dd.js","assets/Views-27dec28c.js","assets/isNil-a1b43ef7.js","assets/get-3fbe7aa4.js","assets/toString-7b4f9ac7.js","assets/_MapCache-cbdf92c8.js","assets/index-b157f735.js","assets/cloneDeep-94f873f1.js","assets/_getPrototype-30a92b72.js","assets/_baseIsEqual-cd9e2cb0.js","assets/Select-9e04c31f.js","assets/slicedToArray-db6cc43d.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-9938cdfc.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-a7f57555.js","assets/FormItem-4075ccd4.js","assets/index-5744fde1.js","assets/formik.esm-70843db0.js","assets/react-number-format.es-5e3a79f9.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-fc3e89e2.js"])),K=c.lazy(()=>d(()=>import("./AccountReview-943d64f7.js"),["assets/AccountReview-943d64f7.js","assets/index-d1f55000.js","assets/index-1a124896.css","assets/DoubleSidedImage-3ef93e14.js"])),q=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(L,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(O,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(M,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(w,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(H,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(K,{})]})})]})})})},ta=q;export{ta as default};
