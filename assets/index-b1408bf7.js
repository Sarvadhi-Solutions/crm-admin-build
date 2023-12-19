import{al as _,am as S,an as j,ao as D,aZ as I,j as t,aq as N,r as c,K as d,a as F}from"./index-4b23f9f2.js";import{C as A}from"./Views-6ea63120.js";import{A as L}from"./AdaptableCard-6d843750.js";import{M as x}from"./index-16ecbf84.js";import{L as m,at as E}from"./index.esm-e8a4d9e3.js";import{u as b}from"./useThemeClass-2218883f.js";import{d as R}from"./AccountServices-4cff9c78.js";import"./Card-74d89d1e.js";import"./index-c20d3f97.js";import"./useUniqueId-05e6e2ef.js";import"./toString-808a232b.js";const g="accountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],O=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(E,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("accountDetailForm",z);const M=c.lazy(()=>d(()=>import("./PersonalInformation-57006992.js"),["assets/PersonalInformation-57006992.js","assets/index-4b23f9f2.js","assets/index-c3b16755.css","assets/Input-6deb6f13.js","assets/Button-a87a2e46.js","assets/Views-6ea63120.js","assets/isNil-6d05c28f.js","assets/get-5fd819d1.js","assets/toString-808a232b.js","assets/_MapCache-8ec314e0.js","assets/index-f452e3c1.js","assets/index-8d3acbcc.js","assets/useControllableState-7c2b4a82.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-208190e3.js","assets/index.esm-e8a4d9e3.js","assets/useRootClose-274cbb20.js","assets/usePopper-6b55e4c5.js","assets/CloseButton-53cc5777.js","assets/TimeInput-3b99d073.js","assets/useUniqueId-05e6e2ef.js","assets/useDidUpdate-88eea7c0.js","assets/Select-4aee735d.js","assets/slicedToArray-41477189.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-8b0e89b6.js","assets/floating-ui.dom-bef9cea3.js","assets/FormItem-83b1322c.js","assets/index-4fdc30db.js","assets/formik.esm-25368bc5.js","assets/react-number-format.es-79d6a7db.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-dc2ded9f.js"])),V=c.lazy(()=>d(()=>import("./Identification-eba8cb5a.js"),["assets/Identification-eba8cb5a.js","assets/index-4b23f9f2.js","assets/index-c3b16755.css","assets/index-b2764899.js","assets/useControllableState-7c2b4a82.js","assets/Button-a87a2e46.js","assets/Upload-75447e1c.js","assets/cloneDeep-7f7711f3.js","assets/_MapCache-8ec314e0.js","assets/Views-6ea63120.js","assets/_getPrototype-67c3ae2d.js","assets/index.esm-43ba8e56.js","assets/CloseButton-53cc5777.js","assets/index.esm-e8a4d9e3.js","assets/toast-01acb463.js","assets/useTimeout-13bed03b.js","assets/StatusIcon-e1b59b5e.js","assets/chainedFunction-070f832c.js","assets/Badge-84757ba5.js","assets/FormItem-83b1322c.js","assets/index-4fdc30db.js","assets/SvgIcon-9da97fd4.js","assets/DoubleSidedImage-54f7ce9f.js","assets/SegmentItemOption-7aac1a34.js","assets/useThemeClass-2218883f.js","assets/formik.esm-25368bc5.js","assets/index.esm-dc2ded9f.js"])),K=c.lazy(()=>d(()=>import("./AddressInfomation-c96d2b32.js"),["assets/AddressInfomation-c96d2b32.js","assets/index-4b23f9f2.js","assets/index-c3b16755.css","assets/Input-6deb6f13.js","assets/Button-a87a2e46.js","assets/Views-6ea63120.js","assets/isNil-6d05c28f.js","assets/get-5fd819d1.js","assets/toString-808a232b.js","assets/_MapCache-8ec314e0.js","assets/index-5f058379.js","assets/cloneDeep-7f7711f3.js","assets/_getPrototype-67c3ae2d.js","assets/_baseIsEqual-7357c66b.js","assets/Select-4aee735d.js","assets/slicedToArray-41477189.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-8b0e89b6.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-e8a4d9e3.js","assets/FormItem-83b1322c.js","assets/index-4fdc30db.js","assets/formik.esm-25368bc5.js","assets/countries.constant-5369f7df.js","assets/index.esm-dc2ded9f.js"])),w=c.lazy(()=>d(()=>import("./FinancialInformation-ed7653f8.js"),["assets/FinancialInformation-ed7653f8.js","assets/index-4b23f9f2.js","assets/index-c3b16755.css","assets/Input-6deb6f13.js","assets/Button-a87a2e46.js","assets/Views-6ea63120.js","assets/isNil-6d05c28f.js","assets/get-5fd819d1.js","assets/toString-808a232b.js","assets/_MapCache-8ec314e0.js","assets/index-5f058379.js","assets/cloneDeep-7f7711f3.js","assets/_getPrototype-67c3ae2d.js","assets/_baseIsEqual-7357c66b.js","assets/Select-4aee735d.js","assets/slicedToArray-41477189.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-8b0e89b6.js","assets/floating-ui.dom-bef9cea3.js","assets/index.esm-e8a4d9e3.js","assets/FormItem-83b1322c.js","assets/index-4fdc30db.js","assets/formik.esm-25368bc5.js","assets/react-number-format.es-79d6a7db.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-dc2ded9f.js"])),H=c.lazy(()=>d(()=>import("./AccountReview-1e70073f.js"),["assets/AccountReview-1e70073f.js","assets/index-4b23f9f2.js","assets/index-c3b16755.css","assets/DoubleSidedImage-54f7ce9f.js"])),q=()=>{const s=F(),n=p(o=>o.accountDetailForm.data.stepStatus),e=p(o=>o.accountDetailForm.data.currentStep),i=p(o=>o.accountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(A,{className:"h-full",children:t.jsx(L,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(O,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(M,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(K,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(w,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(H,{})]})})]})})})},ta=q;export{ta as default};
