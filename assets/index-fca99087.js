import{am as y,an as j,ao as D,ap as N,aZ as _,j as s,aq as A,r as c,K as f,a as I}from"./index-82a4cdcd.js";import{A as b}from"./AdaptableCard-f3359e05.js";import{C as F}from"./Views-5e6cd1d6.js";import{M as h}from"./index-d64ec43f.js";import{L as d,at as L}from"./index.esm-9eb3698a.js";import{u as z}from"./useThemeClass-38f80a2c.js";import{d as E}from"./AccountServices-da8d5ad7.js";import{aO as O}from"./CrmService-a7ee7c84.js";const x="crmAccountDetailForm",R=y(x+"/getForm",async()=>(await E()).data),T=y(x+"/getIndustry",async()=>(await O()).data),u={formData:{personalInformation:{logo:"",organizationName:"",email:"",website:"",dialCode:"",contact:"",industry:"",organizationSize:""},branches:{branchName:"",addressInformation:"",isHeadQuarter:"",branchOwnerId:"",contact:"",dialCode:""},addressInformation:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",sameCorrespondenceAddress:!0,correspondenceAddress:{country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},financialInformation:{taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}}},industryList:[],stepStatus:{0:{status:"pending"},1:{status:"pending"},2:{status:"pending"},3:{status:"pending"},4:{status:"pending"}},currentStep:0},S=j({name:`${x}/state`,initialState:u,reducers:{resetState:a=>{a.formData={...u.formData},a.stepStatus={...u.stepStatus},a.currentStep=u.currentStep},setFormData:(a,n)=>{a.formData={...a.formData,...n.payload}},setStepStatus:(a,n)=>{a.stepStatus={...a.stepStatus,...n.payload}},setCurrentStep:(a,n)=>{a.currentStep=n.payload}},extraReducers:a=>{a.addCase(R.fulfilled,(n,e)=>{n.formData=e.payload.formData,n.stepStatus=e.payload.formStatus}).addCase(T.fulfilled,(n,e)=>{n.industryList=e.payload.data})}}),{setFormData:k,setStepStatus:C,setCurrentStep:m,resetState:M}=S.actions,P=S.reducer,w=D({data:P}),p=N,B=[{label:"Organization information",value:0},{label:"Braches",value:1}],H=({currentStep:a,currentStepStatus:n,stepStatus:e})=>{const{textTheme:l}=z(),o=_(),i=t=>{const r=e[t].status;if(r==="complete"||r==="current"){o(m(t));return}t!==a&&t<a&&(n==="pending"&&o(C("complete")),o(m(t)))};return s.jsx(h,{variant:"transparent",className:"px-2",children:B.map(t=>s.jsxs(h.MenuItem,{eventKey:t.value.toString(),className:"mb-2",isActive:a===t.value,onSelect:()=>i(t.value),children:[s.jsxs("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:[e[t.value].status==="complete"&&s.jsx(d,{className:l}),e[t.value].status==="current"&&s.jsx(d,{className:"text-gray-400"}),e[t.value].status==="pending"&&a===t.value&&s.jsx(d,{className:"text-gray-400"}),e[t.value].status==="pending"&&a!==t.value&&s.jsx(L,{className:"text-gray-400"}),e[t.value].status==="invalid"&&s.jsx(d,{className:"text-gray-400"})]}),s.jsx("span",{children:t.label})]},t.value))})};A("crmAccountDetailForm",w);const V=c.lazy(()=>f(()=>import("./PersonalInformation-644ff738.js"),["assets/PersonalInformation-644ff738.js","assets/index-82a4cdcd.js","assets/index-e466e11d.css","assets/Alert-62262f10.js","assets/useTimeout-da6ce9b0.js","assets/index.esm-9eb3698a.js","assets/CloseButton-d6bfe260.js","assets/StatusIcon-5a72f149.js","assets/Views-5e6cd1d6.js","assets/index-c281b544.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-5f04ccef.js","assets/usePopper-150e7e1f.js","assets/index.esm-e60cf8ff.js","assets/index-dff75ec8.js","assets/Badge-df87bdc2.js","assets/Button-0e96ba54.js","assets/RangeCalendar-823e8aaa.js","assets/useControllableState-3caf27a6.js","assets/Card-6707ff6e.js","assets/index-c91d029f.js","assets/cloneDeep-914ca532.js","assets/_MapCache-54b9aafe.js","assets/_getPrototype-b764c861.js","assets/_baseIsEqual-2b2683ef.js","assets/get-71f6a308.js","assets/toString-b2e07e9a.js","assets/index-320abfaa.js","assets/Input-8b535fd4.js","assets/isNil-ad4b9ef6.js","assets/useRootClose-ca0d0d80.js","assets/TimeInput-10fd264b.js","assets/useUniqueId-cc8af61f.js","assets/useDidUpdate-f06e2487.js","assets/Dialog-992e1d56.js","assets/index-5ca2f98c.js","assets/Drawer-4bb376d7.js","assets/index-0428064e.js","assets/useUncertainRef-0553f5d8.js","assets/chainedFunction-070f832c.js","assets/index-971eae45.js","assets/FormItem-f5087afb.js","assets/index-c11d92d4.js","assets/index-d64ec43f.js","assets/toast-4eea8663.js","assets/Pagination-7722c7db.js","assets/Progress-7d1211e0.js","assets/index-7a0e0b9f.js","assets/ScrollBar-b2904e17.js","assets/index-7b9d9e5f.js","assets/Select-eb8671ae.js","assets/slicedToArray-d75d4238.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-26dffdfb.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-d36fd097.js","assets/index-04da13bb.js","assets/mapCloneElement-c79fb68e.js","assets/Switcher-a7e522ef.js","assets/index-4baab89c.js","assets/index.esm-4533a1af.js","assets/index-b111a719.js","assets/Tag-d5568307.js","assets/index-c63c62bb.js","assets/index-30e041a1.js","assets/Upload-341a9a0e.js","assets/index.esm-bb858611.js","assets/countries.constant-5369f7df.js","assets/formik.esm-fbd7cbeb.js","assets/react-number-format.es-ff723f9b.js","assets/index.esm-f6409e84.js","assets/index-27de0572.js","assets/CrmService-a7ee7c84.js","assets/react-select-creatable.esm-d4b7ae22.js","assets/AdaptableCard-f3359e05.js","assets/useThemeClass-38f80a2c.js","assets/AccountServices-da8d5ad7.js"])),G=c.lazy(()=>f(()=>import("./Branches-2eeaf735.js"),["assets/Branches-2eeaf735.js","assets/index-82a4cdcd.js","assets/index-e466e11d.css","assets/Alert-62262f10.js","assets/useTimeout-da6ce9b0.js","assets/index.esm-9eb3698a.js","assets/CloseButton-d6bfe260.js","assets/StatusIcon-5a72f149.js","assets/Views-5e6cd1d6.js","assets/index-c281b544.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-5f04ccef.js","assets/usePopper-150e7e1f.js","assets/index.esm-e60cf8ff.js","assets/index-dff75ec8.js","assets/Badge-df87bdc2.js","assets/Button-0e96ba54.js","assets/RangeCalendar-823e8aaa.js","assets/useControllableState-3caf27a6.js","assets/Card-6707ff6e.js","assets/index-c91d029f.js","assets/cloneDeep-914ca532.js","assets/_MapCache-54b9aafe.js","assets/_getPrototype-b764c861.js","assets/_baseIsEqual-2b2683ef.js","assets/get-71f6a308.js","assets/toString-b2e07e9a.js","assets/index-320abfaa.js","assets/Input-8b535fd4.js","assets/isNil-ad4b9ef6.js","assets/useRootClose-ca0d0d80.js","assets/TimeInput-10fd264b.js","assets/useUniqueId-cc8af61f.js","assets/useDidUpdate-f06e2487.js","assets/Dialog-992e1d56.js","assets/index-5ca2f98c.js","assets/Drawer-4bb376d7.js","assets/index-0428064e.js","assets/useUncertainRef-0553f5d8.js","assets/chainedFunction-070f832c.js","assets/index-971eae45.js","assets/FormItem-f5087afb.js","assets/index-c11d92d4.js","assets/index-d64ec43f.js","assets/toast-4eea8663.js","assets/Pagination-7722c7db.js","assets/Progress-7d1211e0.js","assets/index-7a0e0b9f.js","assets/ScrollBar-b2904e17.js","assets/index-7b9d9e5f.js","assets/Select-eb8671ae.js","assets/slicedToArray-d75d4238.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-26dffdfb.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-d36fd097.js","assets/index-04da13bb.js","assets/mapCloneElement-c79fb68e.js","assets/Switcher-a7e522ef.js","assets/index-4baab89c.js","assets/index.esm-4533a1af.js","assets/index-b111a719.js","assets/Tag-d5568307.js","assets/index-c63c62bb.js","assets/index-30e041a1.js","assets/Upload-341a9a0e.js","assets/index.esm-bb858611.js","assets/countries.constant-5369f7df.js","assets/index-27de0572.js","assets/CrmService-a7ee7c84.js","assets/formik.esm-fbd7cbeb.js","assets/react-number-format.es-ff723f9b.js","assets/index.esm-f6409e84.js","assets/AdaptableCard-f3359e05.js","assets/useThemeClass-38f80a2c.js","assets/AccountServices-da8d5ad7.js"])),K=c.lazy(()=>f(()=>import("./AccountReview-00440c75.js"),["assets/AccountReview-00440c75.js","assets/index-82a4cdcd.js","assets/index-e466e11d.css","assets/DoubleSidedImage-2e9ac988.js","assets/Alert-62262f10.js","assets/useTimeout-da6ce9b0.js","assets/index.esm-9eb3698a.js","assets/CloseButton-d6bfe260.js","assets/StatusIcon-5a72f149.js","assets/Views-5e6cd1d6.js","assets/index-c281b544.js","assets/useMergeRef-788c4cb0.js","assets/Tooltip-5f04ccef.js","assets/usePopper-150e7e1f.js","assets/index.esm-e60cf8ff.js","assets/index-dff75ec8.js","assets/Badge-df87bdc2.js","assets/Button-0e96ba54.js","assets/RangeCalendar-823e8aaa.js","assets/useControllableState-3caf27a6.js","assets/Card-6707ff6e.js","assets/index-c91d029f.js","assets/cloneDeep-914ca532.js","assets/_MapCache-54b9aafe.js","assets/_getPrototype-b764c861.js","assets/_baseIsEqual-2b2683ef.js","assets/get-71f6a308.js","assets/toString-b2e07e9a.js","assets/index-320abfaa.js","assets/Input-8b535fd4.js","assets/isNil-ad4b9ef6.js","assets/useRootClose-ca0d0d80.js","assets/TimeInput-10fd264b.js","assets/useUniqueId-cc8af61f.js","assets/useDidUpdate-f06e2487.js","assets/Dialog-992e1d56.js","assets/index-5ca2f98c.js","assets/Drawer-4bb376d7.js","assets/index-0428064e.js","assets/useUncertainRef-0553f5d8.js","assets/chainedFunction-070f832c.js","assets/index-971eae45.js","assets/FormItem-f5087afb.js","assets/index-c11d92d4.js","assets/index-d64ec43f.js","assets/toast-4eea8663.js","assets/Pagination-7722c7db.js","assets/Progress-7d1211e0.js","assets/index-7a0e0b9f.js","assets/ScrollBar-b2904e17.js","assets/index-7b9d9e5f.js","assets/Select-eb8671ae.js","assets/slicedToArray-d75d4238.js","assets/objectWithoutProperties-8809bfcf.js","assets/toConsumableArray-26dffdfb.js","assets/floating-ui.dom-4bc0055b.js","assets/Skeleton-d36fd097.js","assets/index-04da13bb.js","assets/mapCloneElement-c79fb68e.js","assets/Switcher-a7e522ef.js","assets/index-4baab89c.js","assets/index.esm-4533a1af.js","assets/index-b111a719.js","assets/Tag-d5568307.js","assets/index-c63c62bb.js","assets/index-30e041a1.js","assets/Upload-341a9a0e.js","assets/index.esm-bb858611.js","assets/AdaptableCard-f3359e05.js","assets/useThemeClass-38f80a2c.js","assets/AccountServices-da8d5ad7.js","assets/CrmService-a7ee7c84.js"])),q=()=>{const a=I(),n=p(r=>r.crmAccountDetailForm.data.stepStatus),e=p(r=>r.crmAccountDetailForm.data.currentStep),l=p(r=>r.crmAccountDetailForm.data.formData),o=(r,v)=>{const g=e+1;a(k({[v]:r})),a(C({[e]:{status:"complete"},[g]:{status:"current"}})),a(m(g))},i=()=>{const r=e-1;a(m(r))},t=c.useMemo(()=>n[e].status,[n,e]);return c.useEffect(()=>()=>{a(M())},[]),s.jsx(F,{className:"h-full",children:s.jsx(b,{className:"h-full",bodyClass:"h-full",children:s.jsxs("div",{className:"grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full",children:[e!==4&&s.jsx("div",{className:"2xl:col-span-1 xl:col-span-1 lg:col-span-2",children:s.jsx(H,{currentStep:e,currentStepStatus:t,stepStatus:n})}),s.jsx("div",{className:e!==4?"2xl:col-span-4 lg:col-span-3 xl:col-span-2":"lg:col-span-5",children:s.jsxs(c.Suspense,{fallback:s.jsx(s.Fragment,{}),children:[e===0&&s.jsx(V,{data:l.personalInformation,currentStepStatus:t,onNextChange:o}),e===1&&s.jsx(G,{data:l.branches,currentStepStatus:t,onNextChange:o,onBackChange:i}),e===2&&s.jsx(K,{currentStepStatus:t,onNextChange:o,onBackChange:i})]})})]})})})},Q=q,ea=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{T as g,ea as i,M as r,p as u};
