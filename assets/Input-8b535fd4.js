import{r as i,ay as tt,c as et,j as a,az as st}from"./index-82a4cdcd.js";import{u as nt,a as rt}from"./Button-0e96ba54.js";import{i as it}from"./Views-5e6cd1d6.js";import{i as E}from"./isNil-ad4b9ef6.js";import{g as b}from"./get-71f6a308.js";const ot=i.forwardRef((p,W)=>{var j,R;const{asElement:w="input",className:g,disabled:S,invalid:m,prefix:s,size:A,suffix:n,textArea:x,type:F="text",style:$,unstyle:L=!1,field:f,form:h,...C}=p,[P,T]=i.useState(0),[O,V]=i.useState(0),{themeColor:l,controlSize:D,primaryColorLevel:c,direction:y}=tt(),M=(j=nt())==null?void 0:j.size,Z=(R=rt())==null?void 0:R.size,z=A||Z||M||D,_=t=>typeof t>"u"||t===null?"":t;"value"in p&&(C.value=_(p.value),delete C.defaultValue);const v=i.useMemo(()=>{let t=!1;if(!it(h)){const{touched:r,errors:e}=h,d=b(r,f.name),Y=b(e,f.name);t=d&&Y}return typeof m=="boolean"&&(t=m),t},[h,m,f]),k="input",q=`input-${z} h-${st[z]}`,B=`focus:ring-${l}-${c} focus-within:ring-${l}-${c} focus-within:border-${l}-${c} focus:border-${l}-${c}`,H=`input-wrapper ${s||n?g:""}`,J=et(k,!x&&q,!v&&B,!s&&!n?g:"",S&&"input-disabled",v&&"input-invalid",x&&"input-textarea"),o=i.useRef(null),u=i.useRef(null),K=()=>{var e,d;if(!o.current&&!u.current)return;const t=(e=o==null?void 0:o.current)==null?void 0:e.offsetWidth,r=(d=u==null?void 0:u.current)==null?void 0:d.offsetWidth;E(t)&&E(r)||(t&&T(t),r&&V(r))};i.useEffect(()=>{K()},[s,n]);const G=t=>.0625*t,Q=()=>{const t=`${G(P)+1}rem`,r=`${G(O)+1}rem`,e={};return y==="ltr"&&(s&&(e.paddingLeft=t),n&&(e.paddingRight=r)),y==="rtl"&&(s&&(e.paddingRight=t),n&&(e.paddingLeft=r)),e},N={className:L?"":J,disabled:S,type:F,ref:W,...f,...C},U=a.jsx("textarea",{style:$,...N}),I=a.jsx(w,{style:{...Q(),...$},...N}),X=a.jsxs("span",{className:H,children:[s?a.jsxs("div",{ref:o,className:"input-suffix-start",children:[" ",s," "]}):null,I,n?a.jsx("div",{ref:u,className:"input-suffix-end",children:n}):null]});return(()=>x?U:s||n?X:I)()});ot.displayName="Input";export{ot as I};
