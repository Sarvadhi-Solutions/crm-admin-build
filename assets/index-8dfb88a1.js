import{T as i}from"./TimeInput-4555e543.js";import{r as n,j as a}from"./index-3e8ea6f8.js";import{u as D}from"./useUniqueId-28e40ab3.js";import{u as H}from"./useMergeRef-788c4cb0.js";import{u as g}from"./useDidUpdate-85d8cc72.js";import{C as M}from"./CloseButton-64a34d57.js";import{a4 as O}from"./index.esm-9f04789b.js";import{I as _}from"./Input-fcdfcb5e.js";const T=n.forwardRef((h,R)=>{const{amPmPlaceholder:j="am",clearable:C=!1,className:I,defaultValue:v=[null,null],disabled:o=!1,format:y="24",id:N,invalid:b,name:w,onChange:u,prefix:P,seperator:k="~",showSeconds:E=!1,size:m,style:S,suffix:F=a.jsx(O,{className:"text-lg"}),timeFieldPlaceholder:U="--",value:t,...V}=h,q=D(N),r=n.useRef(),f=n.useRef(),[s,l]=n.useState(t??v);g(()=>{typeof u=="function"&&u(s)},[s]),g(()=>{var e,p,d,x;t&&(((e=t[0])==null?void 0:e.getTime())!==((p=s[0])==null?void 0:p.getTime())||((d=t[1])==null?void 0:d.getTime())!==((x=s[1])==null?void 0:x.getTime()))&&l(t)},[t]);const z=()=>{var e;l([null,null]),(e=r.current)==null||e.focus()},B=C&&s?a.jsx(M,{onClick:z}):a.jsx(a.Fragment,{children:F}),c={amPmPlaceholder:j,disabled:o,format:y,size:m,timeFieldPlaceholder:U,showSeconds:E};return a.jsx(_,{asElement:"div",invalid:b,size:m,className:I,style:S,disabled:o,suffix:B,prefix:P,onClick:()=>{var e;(e=r.current)==null||e.focus()},...V,children:a.jsxs("div",{className:"time-input-wrapper",children:[a.jsx(i,{ref:H(r,R),unstyle:!0,value:s[0],name:w,nextRef:f,id:q,clearable:!1,suffix:null,onChange:e=>l([e,s[1]]),...c}),a.jsx("span",{className:"time-input-separator",children:k}),a.jsx(i,{ref:f,unstyle:!0,value:s[1],clearable:!1,suffix:null,onChange:e=>l([s[0],e]),...c})]})})});T.displayName="TimeInputRange";const $=i;$.TimeInputRange=T;export{$ as T};
