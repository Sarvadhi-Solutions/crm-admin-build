import{r as P,ax as Q,c as d,j as o,ay as n,az as y,n as w}from"./index-f40e4d75.js";import{u as U,a as V}from"./context-51e9908c.js";function W(c){const l=["50","100","200","300","400","500","600","700","800","900"],t=l.indexOf(c==null?void 0:c.toString());function u(i){if(t===0||t===l.length-1)return c;if(i==="decrement")return l[t-1];if(i==="increment")return l[t+1]}const a=u("decrement");return[u("increment"),a]}const Y=P.forwardRef((c,l)=>{var k,j;const{active:t=!1,block:u=!1,children:a,className:f,color:i="",disabled:$,icon:s,loading:g=!1,shape:S="round",size:L,variant:z="default",...N}=c,{themeColor:B,controlSize:T,primaryColorLevel:E}=Q(),I=(k=U())==null?void 0:k.size,F=(j=V())==null?void 0:j.size,G="button",x="inline-flex items-center justify-center",p=(i==null?void 0:i.split("-"))||[],O=L||F||I||T,r=p[0]||B,m=p[1]||E,[v,R]=W(m),Z=()=>{let e="";switch(O){case y.LG:e=d(`h-${n.lg}`,s&&!a?`w-${n.lg} ${x} text-2xl`:"px-8 py-2 text-base");break;case y.SM:e=d(`h-${n.sm}`,s&&!a?`w-${n.sm} ${x} text-lg`:"px-3 py-2 text-sm");break;case y.XS:e=d(`h-${n.xs}`,s&&!a?`w-${n.xs} ${x} text-base`:"px-3 py-1 text-xs");break;default:e=d(`h-${n.md}`,s&&!a?`w-${n.md} ${x} text-xl`:"px-8 py-2");break}return e},D="opacity-50 cursor-not-allowed",M=()=>{const e={bgColor:t?`bg-${r}-${v}`:`bg-${r}-${m}`,textColor:"text-white",hoverColor:t?"":`hover:bg-${r}-${R}`,activeColor:`active:bg-${r}-${v}`};return C(e)},X=()=>{const e={bgColor:t?`bg-${r}-200 dark:bg-${r}-50`:`bg-${r}-50 dark:bg-${r}-500 dark:bg-opacity-20`,textColor:`text-${r}-${m} dark:text-${r}-50`,hoverColor:t?"":`hover:bg-${r}-100 dark:hover:bg-${r}-500 dark:hover:bg-opacity-30`,activeColor:`active:bg-${r}-200 dark:active:bg-${r}-500 dark:active:bg-opacity-40`};return C(e)},h=()=>C({bgColor:t?"bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500":"bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),_=()=>C({bgColor:t?"bg-gray-100 dark:bg-gray-500":"bg-transparent border border-transparent",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),C=({bgColor:e,hoverColor:b,activeColor:J,textColor:K})=>`${e} ${$||g?D:b+" "+J} ${K}`,q=d(G,(()=>{switch(z){case"solid":return M();case"twoTone":return X();case"plain":return _();case"default":return h();default:return h()}})(),`radius-${S}`,Z(),f,u?"w-full":""),A=e=>{const{onClick:b}=c;if($||g){e.preventDefault();return}b==null||b(e)},H=()=>g&&a?o.jsxs("span",{className:"flex items-center justify-center",children:[o.jsx(w,{enableTheme:!1,className:"mr-1"}),a]}):s&&!a&&g?o.jsx(w,{enableTheme:!1}):s&&!a&&!g?o.jsx(o.Fragment,{children:s}):s&&a&&!g?o.jsxs("span",{className:"flex items-center justify-center",children:[o.jsx("span",{className:"text-lg",children:s}),o.jsx("span",{className:"ltr:ml-1 rtl:mr-1",children:a})]}):o.jsx(o.Fragment,{children:a});return o.jsx("button",{ref:l,className:q,...N,onClick:A,children:H()})});Y.displayName="Button";export{Y as B,W as u};
