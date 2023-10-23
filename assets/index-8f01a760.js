import{al as _,am as S,an as j,ao as D,aY as I,j as t,aq as N,r as c,J as d,a as F}from"./index-4fc5ac15.js";import{C as A}from"./Views-63244708.js";import{A as E}from"./AdaptableCard-1a3c680d.js";import{M as x}from"./index-99b428ba.js";import{M as m,at as L}from"./index.esm-4a8db888.js";import{u as b}from"./useThemeClass-9af86e8e.js";import{d as R}from"./AccountServices-7f87e8d3.js";import"./Card-a6171fd9.js";import"./index-8ced4f1f.js";import"./useUniqueId-f42ae95b.js";import"./toString-73aeebea.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],M=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(L,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const O=c.lazy(()=>d(()=>import("./PersonalInformation-323b93c7.js"),["assets/PersonalInformation-323b93c7.js","assets/index-4fc5ac15.js","assets/index-33785ac7.css","assets/Input-3854a622.js","assets/Button-7cd7d853.js","assets/Views-63244708.js","assets/isNil-fa9ab935.js","assets/get-a17bfffb.js","assets/toString-73aeebea.js","assets/_MapCache-dfc091e9.js","assets/index-d3c2681a.js","assets/index-f81c3042.js","assets/useControllableState-74f1ae93.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-5dd6ce1b.js","assets/index.esm-4a8db888.js","assets/useRootClose-4eeaabec.js","assets/usePopper-eba58dea.js","assets/CloseButton-f8a68d34.js","assets/TimeInput-a955edd7.js","assets/useUniqueId-f42ae95b.js","assets/useDidUpdate-2beb4a11.js","assets/Select-9180a255.js","assets/slicedToArray-a75daa7f.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-b436f755.js","assets/floating-ui.dom-bef9cea3.js","assets/FormItem-e8ff9726.js","assets/index-e53d26a4.js","assets/formik.esm-7fc98ee2.js","assets/react-number-format.es-908be38c.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-4c38c838.js"])),V=c.lazy(()=>d(()=>import("./Identification-de7ec034.js"),["assets/Identification-de7ec034.js","assets/index-4fc5ac15.js","assets/index-33785ac7.css","assets/index-1ece77e8.js","assets/useControllableState-74f1ae93.js","assets/Button-7cd7d853.js","assets/Upload-fe7ae2cb.js","assets/cloneDeep-715f167a.js","assets/_MapCache-dfc091e9.js","assets/Views-63244708.js","assets/_getPrototype-20c9b4ef.js","assets/index.esm-6e8bde72.js","assets/CloseButton-f8a68d34.js","assets/index.esm-4a8db888.js","assets/toast-b752ab56.js","assets/useTimeout-a3a009a3.js","assets/StatusIcon-8eee481a.js","assets/chainedFunction-070f832c.js","assets/Badge-19df83fb.js","assets/FormItem-e8ff9726.js","assets/index-e53d26a4.js","assets/SvgIcon-cd84e0c4.js","assets/DoubleSidedImage-d2256429.js","assets/SegmentItemOption-32fcaaa1.js","assets/useThemeClass-9af86e8e.js","assets/formik.esm-7fc98ee2.js","assets/index.esm-4c38c838.js"])),w=c.lazy(()=>d(()=>import("./AddressInfomation-ee9bf864.js"),["assets/AddressInfomation-ee9bf864.js","assets/index-4fc5ac15.js","assets/index-33785ac7.css","assets/Input-3854a622.js","assets/Button-7cd7d853.js","assets/Views-63244708.js","assets/isNil-fa9ab935.js","assets/get-a17bfffb.js","assets/toString-73aeebea.js","assets/_MapCache-dfc091e9.js","assets/index-2e6c9811.js","assets/cloneDeep-715f167a.js","assets/_getPrototype-20c9b4ef.js","assets/_baseIsEqual-049acdee.js","assets/Select-9180a255.js","assets/slicedToArray-a75daa7f.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-b436f755.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-4a8db888.js","assets/FormItem-e8ff9726.js","assets/index-e53d26a4.js","assets/formik.esm-7fc98ee2.js","assets/countries.constant-5369f7df.js","assets/index.esm-4c38c838.js"])),H=c.lazy(()=>d(()=>import("./FinancialInformation-cf74d956.js"),["assets/FinancialInformation-cf74d956.js","assets/index-4fc5ac15.js","assets/index-33785ac7.css","assets/Input-3854a622.js","assets/Button-7cd7d853.js","assets/Views-63244708.js","assets/isNil-fa9ab935.js","assets/get-a17bfffb.js","assets/toString-73aeebea.js","assets/_MapCache-dfc091e9.js","assets/index-2e6c9811.js","assets/cloneDeep-715f167a.js","assets/_getPrototype-20c9b4ef.js","assets/_baseIsEqual-049acdee.js","assets/Select-9180a255.js","assets/slicedToArray-a75daa7f.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-b436f755.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-4a8db888.js","assets/FormItem-e8ff9726.js","assets/index-e53d26a4.js","assets/formik.esm-7fc98ee2.js","assets/react-number-format.es-908be38c.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-4c38c838.js"])),K=c.lazy(()=>d(()=>import("./AccountReview-f472f931.js"),["assets/AccountReview-f472f931.js","assets/index-4fc5ac15.js","assets/index-33785ac7.css","assets/DoubleSidedImage-d2256429.js"])),q=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(E,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(M,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(O,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(w,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(H,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(K,{})]})})]})})})},ta=q;export{ta as default};
