import{r as v,j as e,c as i,aR as x,ax as y}from"./index-a20ba26a.js";import{m as G}from"./mapCloneElement-e3365f47.js";import{d as L,X as _}from"./index.esm-be6144e0.js";const{COMPLETE:k,PENDING:w,IN_PROGRESS:D,ERROR:M}=x,$=v.forwardRef((d,S)=>{const{className:u,children:n,vertical:o=!1,current:l=0,status:r=D,onChange:s,...E}=d,a=v.Children.count(n),p=G(n,(m,c)=>{const h={flexBasis:c<a-1?`${100/(a-1)}%`:void 0,maxWidth:c===a-1?`${100/a}%`:void 0},t={stepNumber:c+1,status:w,style:o?void 0:h,isLast:c===a-1,vertical:o,onStepChange:s?()=>s(c):void 0,...m.props};return r===M&&c===l-1&&(t.className=i("steps-item-error")),m.props.status||(c===l?(t.status=r,t.className=i(t.className,"steps-item-active")):c<l&&(t.status=k)),t});return e.jsx("div",{ref:S,className:i("steps",o&&"steps-vertical",u),...E,children:p})});$.displayName="Steps";const{COMPLETE:C,PENDING:A,IN_PROGRESS:f,ERROR:N}=x,H={[C]:e.jsx(L,{}),[A]:null,[f]:null,[N]:e.jsx(_,{})},j=v.forwardRef((d,S)=>{const{className:u,customIcon:n,description:o,isLast:l,onStepChange:r,status:s,stepNumber:E,title:a,vertical:p,...m}=d,{themeColor:c,primaryColorLevel:h}=y(),t=`${c}-${h}`;let R=e.jsx("span",{children:H[s]??E});n&&(R=e.jsx("span",{children:n}));const I=i(`step-item step-item-${s}`,p&&"step-item-vertical",u),P=i("step-item-wrapper",r&&"step-clickable"),O=i(`step-item-icon step-item-icon-${s}`,s===C&&`bg-${t} text-white`,s===N&&"step-item-icon-error",s===f&&`text-${t} dark:text-gray-100 border-${t} step-item-icon-current`),T=i("step-connect",a&&"ml-2.5 rtl:mr-2.5",p&&"step-connect-vertical",s===C?`bg-${t}`:"inactive"),b=i("step-item-title",s===N&&"step-item-title-error",r&&s!==N&&`hover:text-${t}`),g=()=>{r==null||r()};return e.jsxs("div",{className:I,...m,ref:S,role:"presentation",onClick:g,children:[e.jsxs("div",{className:P,children:[e.jsx("div",{className:O,children:R}),a&&e.jsxs("div",{className:"step-item-content",children:[a&&e.jsx("span",{className:b,children:a}),o&&p&&e.jsx("span",{className:"step-item-description",children:o})]})]}),!l&&e.jsx("div",{className:T})]})});j.displayName="StepItem";const U=$;U.Item=j;export{U as S};
