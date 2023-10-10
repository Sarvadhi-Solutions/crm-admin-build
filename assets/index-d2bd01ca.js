import{al as _,am as S,an as j,ao as D,aX as I,j as t,aq as N,r as c,G as d,a as F}from"./index-7b0349c6.js";import{C as A}from"./Views-c6671a9d.js";import{A as E}from"./AdaptableCard-d9b587b8.js";import{M as x}from"./index-89cb79e5.js";import{M as m,at as L}from"./index.esm-70dc7df8.js";import{u as b}from"./useThemeClass-3c06ce00.js";import{d as R}from"./AccountServices-3a97088d.js";import"./Card-a848a8eb.js";import"./index-24734fba.js";import"./useUniqueId-ab09df2f.js";import"./toString-a66e4ffc.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],M=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(L,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const O=c.lazy(()=>d(()=>import("./PersonalInformation-0a9aee30.js"),["assets/PersonalInformation-0a9aee30.js","assets/index-7b0349c6.js","assets/index-d41fd36d.css","assets/Input-5106ef66.js","assets/Button-9fa3d2fc.js","assets/Views-c6671a9d.js","assets/isNil-2a409f2e.js","assets/get-3f8daa47.js","assets/toString-a66e4ffc.js","assets/_MapCache-a209650f.js","assets/index-10cbcf37.js","assets/index-e01b641f.js","assets/useControllableState-ca2883fa.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-8f0006dc.js","assets/index.esm-70dc7df8.js","assets/useRootClose-f96499f9.js","assets/usePopper-ea1a26c2.js","assets/CloseButton-68e6949e.js","assets/TimeInput-0d554281.js","assets/useUniqueId-ab09df2f.js","assets/useDidUpdate-eb06a65d.js","assets/Select-1f2320ab.js","assets/slicedToArray-a6cb1158.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-6439c76e.js","assets/floating-ui.dom-bef9cea3.js","assets/FormItem-26ad5e8d.js","assets/index-ba238736.js","assets/formik.esm-1e90a8e9.js","assets/react-number-format.es-d0678920.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-3fef8ee5.js"])),V=c.lazy(()=>d(()=>import("./Identification-782ff60f.js"),["assets/Identification-782ff60f.js","assets/index-7b0349c6.js","assets/index-d41fd36d.css","assets/index-c97a424b.js","assets/useControllableState-ca2883fa.js","assets/Button-9fa3d2fc.js","assets/Upload-4b7aa6b8.js","assets/cloneDeep-43c01ed5.js","assets/_MapCache-a209650f.js","assets/Views-c6671a9d.js","assets/_getPrototype-57ad14e0.js","assets/index.esm-c96a5b5f.js","assets/CloseButton-68e6949e.js","assets/index.esm-70dc7df8.js","assets/toast-184c7e0a.js","assets/useTimeout-187593ce.js","assets/StatusIcon-11c7c844.js","assets/chainedFunction-070f832c.js","assets/Badge-50330686.js","assets/FormItem-26ad5e8d.js","assets/index-ba238736.js","assets/SvgIcon-3d1d8062.js","assets/DoubleSidedImage-3b87d6b1.js","assets/SegmentItemOption-fbddb88d.js","assets/useThemeClass-3c06ce00.js","assets/formik.esm-1e90a8e9.js","assets/index.esm-3fef8ee5.js"])),w=c.lazy(()=>d(()=>import("./AddressInfomation-cb5b81b7.js"),["assets/AddressInfomation-cb5b81b7.js","assets/index-7b0349c6.js","assets/index-d41fd36d.css","assets/Input-5106ef66.js","assets/Button-9fa3d2fc.js","assets/Views-c6671a9d.js","assets/isNil-2a409f2e.js","assets/get-3f8daa47.js","assets/toString-a66e4ffc.js","assets/_MapCache-a209650f.js","assets/index-f606ec14.js","assets/cloneDeep-43c01ed5.js","assets/_getPrototype-57ad14e0.js","assets/_baseIsEqual-0ec018e0.js","assets/Select-1f2320ab.js","assets/slicedToArray-a6cb1158.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-6439c76e.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-70dc7df8.js","assets/FormItem-26ad5e8d.js","assets/index-ba238736.js","assets/formik.esm-1e90a8e9.js","assets/countries.constant-5369f7df.js","assets/index.esm-3fef8ee5.js"])),G=c.lazy(()=>d(()=>import("./FinancialInformation-f82a4ec7.js"),["assets/FinancialInformation-f82a4ec7.js","assets/index-7b0349c6.js","assets/index-d41fd36d.css","assets/Input-5106ef66.js","assets/Button-9fa3d2fc.js","assets/Views-c6671a9d.js","assets/isNil-2a409f2e.js","assets/get-3f8daa47.js","assets/toString-a66e4ffc.js","assets/_MapCache-a209650f.js","assets/index-f606ec14.js","assets/cloneDeep-43c01ed5.js","assets/_getPrototype-57ad14e0.js","assets/_baseIsEqual-0ec018e0.js","assets/Select-1f2320ab.js","assets/slicedToArray-a6cb1158.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-6439c76e.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-70dc7df8.js","assets/FormItem-26ad5e8d.js","assets/index-ba238736.js","assets/formik.esm-1e90a8e9.js","assets/react-number-format.es-d0678920.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-3fef8ee5.js"])),H=c.lazy(()=>d(()=>import("./AccountReview-9b95ae49.js"),["assets/AccountReview-9b95ae49.js","assets/index-7b0349c6.js","assets/index-d41fd36d.css","assets/DoubleSidedImage-3b87d6b1.js"])),K=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(E,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(M,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(O,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(w,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(G,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(H,{})]})})]})})})},ta=K;export{ta as default};
