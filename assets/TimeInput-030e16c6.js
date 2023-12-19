import{B as ne,r as N,j as g,c as G}from"./index-6767ac81.js";import{u as ae}from"./useUniqueId-1387b982.js";import{u as U}from"./useMergeRef-788c4cb0.js";import{u as z}from"./useDidUpdate-c5cefb65.js";import{C as re}from"./CloseButton-5ef937e0.js";import{I as oe}from"./Input-736c9e0d.js";import{al as ie}from"./index.esm-107f547f.js";function K(s,t,u){return Math.min(Math.max(s,t),u)}function ue({amLabel:s,pmLabel:t,onChange:u,nextRef:n}){return(c,l)=>{var e,o;const p=new RegExp(`(^(${s}|${t})?$)`),a=c.toLowerCase();if(a===s||a===t){u(a),l&&((e=n==null?void 0:n.current)==null||e.focus()),l&&((o=n==null?void 0:n.current)==null||o.select());return}p.test(a)&&u(a)}}function x(s){const t=parseInt(s,10);return t>=10?t.toString():`0${t}`}function H(s){return Math.floor(s/10)}function _({onChange:s,nextRef:t,min:u,max:n,nextMax:c}){return(l,p,a=!1)=>{var o,w;const e=parseInt(l,10);if(!Number.isNaN(e)){if(e>H(n)||a){const D=e%10;let C,y;e>n&&c&&D<=H(c)?(C=x(H(e).toString()),y=x(D.toString())):C=x(K(e,u,n).toString()),s(C,y),p&&((o=t==null?void 0:t.current)==null||o.focus()),p&&((w=t==null?void 0:t.current)==null||w.select());return}s(e.toString())}}}function ce(s,t,u,n,c,l){const p=ne();let a=parseInt(s,10);const e=parseInt(t,10),o=parseInt(u,10);return Number.isNaN(a)&&(a=0),n==="12"&&(a%=12,l===c&&(a+=12)),p.hour(a).minute(Number.isNaN(e)?0:e).second(Number.isNaN(o)?0:o).millisecond(0).toDate()}function W(s,t,u,n){if(!(s instanceof Date))return{hours:"",minutes:"",seconds:"",amPm:""};let c=s.getHours();const l=c>=12;return t==="12"&&(c%=12,c===0&&(c+=12)),{hours:x(c.toString()),minutes:x(s.getMinutes().toString()),seconds:x(s.getSeconds().toString()),amPm:l?n:u}}const v=N.forwardRef((s,t)=>{const{className:u,onFocus:n,onBlur:c,onChange:l,setValue:p,withSeparator:a=!1,max:e,min:o=0,value:w,...D}=s,[C,y]=N.useState(0),r=N.useRef(),d=m=>{var f;typeof n=="function"&&n(m),(f=r==null?void 0:r.current)==null||f.select(),y(0)},S=m=>{typeof c=="function"&&c(m),C===1&&typeof l=="function"&&l(m.currentTarget.value,!1)},V=m=>{var f;m.stopPropagation(),(f=r==null?void 0:r.current)==null||f.select()},T=m=>{if(m.key==="ArrowUp"){m.preventDefault();const f=x(K(parseInt(m.currentTarget.value,10)+1,o,e).toString());w!==f&&l(f,!1)}if(m.key==="ArrowDown"){m.preventDefault();const f=x(K(parseInt(m.currentTarget.value,10)-1,o,e).toString());w!==f&&l(f,!1)}},A=m=>{y(C+1);const f=parseInt(m.currentTarget.value,10).toString();if(f==="0"&&C===0){p("00");return}l(f,!0,C>0)};return g.jsxs(g.Fragment,{children:[g.jsx("input",{ref:U(r,t),type:"text",inputMode:"numeric",value:w,className:G("time-input-field",u),onChange:A,onClick:V,onFocus:d,onBlur:S,onKeyDown:T,...D}),a&&g.jsx("span",{children:" : "})]})});v.displayName="TimeInputField";const J=N.forwardRef((s,t)=>{const{className:u,onChange:n,onFocus:c,value:l,amLabel:p,pmLabel:a,...e}=s,o=N.useRef(),w=r=>{var d;r.stopPropagation(),(d=o==null?void 0:o.current)==null||d.select()},D=r=>{(r.key==="ArrowUp"||r.key==="ArrowDown")&&(r.preventDefault(),n(l===p?a:p,!0))},C=r=>{var d;typeof c=="function"&&c(r),(d=o==null?void 0:o.current)==null||d.select()},y=r=>{const d=r.target.value.slice(-1).toLowerCase();if(d==="p"){r.preventDefault(),n(a,!0);return}if(d==="a"){r.preventDefault(),n(p,!0);return}n(l.toString(),!0)};return g.jsx("input",{ref:U(o,t),type:"text",value:l,className:G("time-input-field","am-pm-input",u),onClick:w,onFocus:C,onKeyDown:D,onChange:y,...e})});J.displayName="AmPmInput";const le=N.forwardRef((s,t)=>{const{amLabel:u="am",amPmPlaceholder:n="am",className:c,clearable:l=!0,defaultValue:p,disabled:a=!1,format:e="24",field:o,form:w,id:D,invalid:C,name:y,nextRef:r,onChange:d,pmLabel:S="pm",prefix:V,showSeconds:T=!1,size:A="md",style:m,suffix:f=g.jsx(ie,{className:"text-lg"}),timeFieldPlaceholder:M="--",timeFieldClass:B,value:I,...Q}=s,X=ae(D),P=N.useRef(),$=N.useRef(),O=N.useRef(),E=N.useRef(),[j,k]=N.useState(W(I||p,e,u,S)),[b,L]=N.useState(I||p);z(()=>{k(W(b,e,u,S))},[b,e,u,S]),z(()=>{(I==null?void 0:I.getTime())!==(b==null?void 0:b.getTime())&&L(I)},[I]);const F=i=>{const h={...j,...i},q=ce(h.hours,h.minutes,h.seconds,e,S,h.amPm);L(q),typeof d=="function"&&d(q)},Y=_({onChange:(i,h)=>{F({hours:i,minutes:h??j.minutes})},min:e==="12"?1:0,max:e==="12"?12:23,nextRef:$,nextMax:59}),Z=_({onChange:(i,h)=>{F({minutes:i,seconds:h??j.seconds})},min:0,max:59,nextRef:T?O:e==="12"?E:r,nextMax:T?59:void 0}),R=_({onChange:i=>{F({seconds:i})},min:0,max:59,nextRef:e==="12"?E:r}),ee=ue({amLabel:u,pmLabel:S,onChange:i=>{F({amPm:i})},nextRef:r}),te=()=>{var i;k({hours:"",minutes:"",seconds:"",amPm:""}),L(null),d==null||d(null),(i=P==null?void 0:P.current)==null||i.focus()},se=l&&b?g.jsx(re,{onClick:te}):f;return g.jsx(oe,{asElement:"div",invalid:C,disabled:a,style:m,className:c,size:A,prefix:V,suffix:se,field:o,form:w,onClick:()=>{var i;return(i=P==null?void 0:P.current)==null?void 0:i.focus()},...Q,children:g.jsxs("div",{className:"time-input-wrapper",children:[g.jsx(v,{ref:U(P,t),withSeparator:!0,value:j.hours,setValue:i=>k(h=>({...h,hours:i})),id:X,className:B,max:e==="12"?12:23,placeholder:M,"aria-label":"hours",disabled:a,name:y,onChange:Y}),g.jsx(v,{ref:$,value:j.minutes,setValue:i=>k(h=>({...h,minutes:i})),className:B,withSeparator:T,max:59,placeholder:M,"aria-label":"minutes",disabled:a,onChange:Z}),T&&g.jsx(v,{ref:O,value:j.seconds,setValue:i=>k(h=>({...h,seconds:i})),className:B,max:59,placeholder:M,"aria-label":"seconds",disabled:a,onChange:R}),e==="12"&&g.jsx(J,{ref:E,value:j.amPm,placeholder:n,amLabel:u,pmLabel:S,"aria-label":"am pm",disabled:a,onChange:ee})]})})});le.displayName="TimeInput";export{le as T};
