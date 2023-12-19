import{am as _,an as S,ao as j,ap as D,aZ as I,j as t,aq as N,r as c,K as d,a as A}from"./index-c2c71b67.js";import{C as F}from"./Views-3e469d6a.js";import{A as L}from"./AdaptableCard-6d79530e.js";import{M as x}from"./index-947dfc66.js";import{L as m,at as E}from"./index.esm-854b309f.js";import{u as b}from"./useThemeClass-ae6a3c06.js";import{d as R}from"./AccountServices-237d2d5b.js";import"./Card-641c7c13.js";import"./index-a0374824.js";import"./useUniqueId-63f75720.js";import"./toString-ac4075ef.js";const g="crmAccountDetailForm",h=_(g+"/getForm",async()=>(await R()).data),k={formData:{personalInformation:{firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},identification:{documentType:"passport",passportCover:"",passportDataPage:"",nationalIdFront:"",nationalIdBack:"",driversLicenseFront:"",driversLicenseBack:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},v=S({name:`${g}/state`,initialState:k,reducers:{setFormData:(s,n)=>{s.formData={...s.formData,...n.payload}},setStepStatus:(s,n)=>{s.stepStatus={...s.stepStatus,...n.payload}},setCurrentStep:(s,n)=>{s.currentStep=n.payload}},extraReducers:s=>{s.addCase(h.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus})}}),{setFormData:T,setStepStatus:y,setCurrentStep:u}=v.actions,P=v.reducer,z=j({data:P}),p=D,B=[{label:"Personal information",value:0},{label:"Identification",value:1},{label:"Address Information",value:2},{label:"Financial Information",value:3}],O=({currentStep:s,currentStepStatus:n,stepStatus:e})=>{const{textTheme:i}=b(),r=I(),l=a=>{const o=e[a].status;if(o==="complete"||o==="current"){r(u(a));return}a!==s&&a<s&&(n==="pending"&&r(y("complete")),r(u(a)))};return t.jsx(x,{variant:"transparent",className:"px-2",children:B.map(a=>t.jsxs(x.MenuItem,{eventKey:a.value.toString(),className:"mb-2",isActive:s===a.value,onSelect:()=>l(a.value),children:[t.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[a.value].status==="complete"&&t.jsx(m,{className:i}),e[a.value].status==="current"&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s===a.value&&t.jsx(m,{className:"text-gray-400"}),e[a.value].status==="pending"&&s!==a.value&&t.jsx(E,{className:"text-gray-400"}),e[a.value].status==="invalid"&&t.jsx(m,{className:"text-gray-400"})]}),t.jsx("span",{children:a.label})]},a.value))})};N("crmAccountDetailForm",z);const M=c.lazy(()=>d(()=>import("./PersonalInformation-3dd0e59f.js"),["assets/PersonalInformation-3dd0e59f.js","assets/index-c2c71b67.js","assets/index-e466e11d.css","assets/Input-a6235faa.js","assets/Button-9c5fa51c.js","assets/Views-3e469d6a.js","assets/isNil-d22b3e6c.js","assets/get-bbcb2570.js","assets/toString-ac4075ef.js","assets/_MapCache-2e280b6f.js","assets/index-ca17498b.js","assets/index-bbb04099.js","assets/useControllableState-a30d7084.js","assets/useMergeRef-788c4cb0.js","assets/RangeCalendar-06da6a52.js","assets/index.esm-854b309f.js","assets/useRootClose-29c37326.js","assets/usePopper-2b474c15.js","assets/CloseButton-3657ddf2.js","assets/TimeInput-b943a20d.js","assets/useUniqueId-63f75720.js","assets/useDidUpdate-787bd063.js","assets/Select-dd041f61.js","assets/slicedToArray-3c0066d1.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-c30e1148.js","assets/floating-ui.dom-4bc0055b.js","assets/FormItem-78a020e3.js","assets/index-ccd45f27.js","assets/formik.esm-25f04447.js","assets/react-number-format.es-b278bec5.js","assets/countries.constant-5369f7df.js","assets/constants-ca202644.js","assets/index.esm-3f39c77b.js"])),V=c.lazy(()=>d(()=>import("./Identification-70793388.js"),["assets/Identification-70793388.js","assets/index-c2c71b67.js","assets/index-e466e11d.css","assets/index-d0a572c6.js","assets/useControllableState-a30d7084.js","assets/Button-9c5fa51c.js","assets/Upload-0425926a.js","assets/cloneDeep-a5d9ba9c.js","assets/_MapCache-2e280b6f.js","assets/Views-3e469d6a.js","assets/_getPrototype-6c543eab.js","assets/index.esm-c710ec86.js","assets/CloseButton-3657ddf2.js","assets/index.esm-854b309f.js","assets/toast-1c7e88ac.js","assets/useTimeout-a89b02a4.js","assets/StatusIcon-5eed5f69.js","assets/chainedFunction-070f832c.js","assets/Badge-71fe7402.js","assets/FormItem-78a020e3.js","assets/index-ccd45f27.js","assets/SvgIcon-426e05f5.js","assets/DoubleSidedImage-febab13f.js","assets/SegmentItemOption-841378e4.js","assets/useThemeClass-ae6a3c06.js","assets/formik.esm-25f04447.js","assets/index.esm-3f39c77b.js"])),K=c.lazy(()=>d(()=>import("./AddressInfomation-bd850bfd.js"),["assets/AddressInfomation-bd850bfd.js","assets/index-c2c71b67.js","assets/index-e466e11d.css","assets/Input-a6235faa.js","assets/Button-9c5fa51c.js","assets/Views-3e469d6a.js","assets/isNil-d22b3e6c.js","assets/get-bbcb2570.js","assets/toString-ac4075ef.js","assets/_MapCache-2e280b6f.js","assets/index-0f7a857e.js","assets/cloneDeep-a5d9ba9c.js","assets/_getPrototype-6c543eab.js","assets/_baseIsEqual-10de66da.js","assets/Select-dd041f61.js","assets/slicedToArray-3c0066d1.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-c30e1148.js","assets/floating-ui.dom-4bc0055b.js","assets/index.esm-854b309f.js","assets/FormItem-78a020e3.js","assets/index-ccd45f27.js","assets/formik.esm-25f04447.js","assets/countries.constant-5369f7df.js","assets/index.esm-3f39c77b.js"])),w=c.lazy(()=>d(()=>import("./FinancialInformation-275f6dc3.js"),["assets/FinancialInformation-275f6dc3.js","assets/index-c2c71b67.js","assets/index-e466e11d.css","assets/Input-a6235faa.js","assets/Button-9c5fa51c.js","assets/Views-3e469d6a.js","assets/isNil-d22b3e6c.js","assets/get-bbcb2570.js","assets/toString-ac4075ef.js","assets/_MapCache-2e280b6f.js","assets/index-0f7a857e.js","assets/cloneDeep-a5d9ba9c.js","assets/_getPrototype-6c543eab.js","assets/_baseIsEqual-10de66da.js","assets/Select-dd041f61.js","assets/slicedToArray-3c0066d1.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-c30e1148.js","assets/floating-ui.dom-4bc0055b.js","assets/index.esm-854b309f.js","assets/FormItem-78a020e3.js","assets/index-ccd45f27.js","assets/formik.esm-25f04447.js","assets/react-number-format.es-b278bec5.js","assets/constants-ca202644.js","assets/countries.constant-5369f7df.js","assets/index.esm-3f39c77b.js"])),H=c.lazy(()=>d(()=>import("./AccountReview-1b604fce.js"),["assets/AccountReview-1b604fce.js","assets/index-c2c71b67.js","assets/index-e466e11d.css","assets/DoubleSidedImage-febab13f.js"])),q=()=>{const s=A(),n=p(o=>o.crmAccountDetailForm.data.stepStatus),e=p(o=>o.crmAccountDetailForm.data.currentStep),i=p(o=>o.crmAccountDetailForm.data.formData);c.useEffect(()=>{s(h())},[]);const r=(o,C)=>{const f=e+1;s(T({[C]:o})),s(y({[e]:{status:"complete"},[f]:{status:"current"}})),s(u(f))},l=()=>{const o=e-1;s(u(o))},a=c.useMemo(()=>n[e].status,[n,e]);return t.jsx(F,{className:"h-full",children:t.jsx(L,{className:"h-full",bodyClass:"h-full",children:t.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&t.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:t.jsx(O,{currentStep:e,currentStepStatus:a,stepStatus:n})}),t.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:t.jsxs(c.Suspense,{fallback:t.jsx(t.Fragment,{}),children:[e===0&&t.jsx(M,{data:i.personalInformation,currentStepStatus:a,onNextChange:r}),e===1&&t.jsx(V,{data:i.identification,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===2&&t.jsx(K,{data:i.addressInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===3&&t.jsx(w,{data:i.financialInformation,currentStepStatus:a,onNextChange:r,onBackChange:l}),e===4&&t.jsx(H,{})]})})]})})})},ta=q;export{ta as default};
