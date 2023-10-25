import{r as g,ax as V,c as b,j as n,ay as s,az as v,n as z}from"./index-fbeb73e8.js";const f=g.createContext(null),ne=f.Provider,ae=f.Consumer;function W(){return g.useContext(f)}const y=g.createContext(null),se=y.Provider,ce=y.Consumer;function Y(){return g.useContext(y)}function ee(c){const l=["50","100","200","300","400","500","600","700","800","900"],t=l.indexOf(c==null?void 0:c.toString());function x(i){if(t===0||t===l.length-1)return c;if(i==="decrement")return l[t-1];if(i==="increment")return l[t+1]}const o=x("decrement");return[x("increment"),o]}const re=g.forwardRef((c,l)=>{var S,L;const{active:t=!1,block:x=!1,children:o,className:$,color:i="",disabled:h,icon:a,loading:u=!1,shape:N="round",size:I,variant:F="default",...G}=c,{themeColor:B,controlSize:T,primaryColorLevel:E}=V(),P=(S=W())==null?void 0:S.size,O=(L=Y())==null?void 0:L.size,R="button",C="inline-flex items-center justify-center",k=(i==null?void 0:i.split("-"))||[],Z=I||O||P||T,r=k[0]||B,p=k[1]||E,[j,D]=ee(p),M=()=>{let e="";switch(Z){case v.LG:e=b(`h-${s.lg}`,a&&!o?`w-${s.lg} ${C} text-2xl`:"px-8 py-2 text-base");break;case v.SM:e=b(`h-${s.sm}`,a&&!o?`w-${s.sm} ${C} text-lg`:"px-3 py-2 text-sm");break;case v.XS:e=b(`h-${s.xs}`,a&&!o?`w-${s.xs} ${C} text-base`:"px-3 py-1 text-xs");break;default:e=b(`h-${s.md}`,a&&!o?`w-${s.md} ${C} text-xl`:"px-8 py-2");break}return e},X="opacity-50 cursor-not-allowed",_=()=>{const e={bgColor:t?`bg-${r}-${j}`:`bg-${r}-${p}`,textColor:"text-white",hoverColor:t?"":`hover:bg-${r}-${D}`,activeColor:`active:bg-${r}-${j}`};return m(e)},q=()=>{const e={bgColor:t?`bg-${r}-200 dark:bg-${r}-50`:`bg-${r}-50 dark:bg-${r}-500 dark:bg-opacity-20`,textColor:`text-${r}-${p} dark:text-${r}-50`,hoverColor:t?"":`hover:bg-${r}-100 dark:hover:bg-${r}-500 dark:hover:bg-opacity-30`,activeColor:`active:bg-${r}-200 dark:active:bg-${r}-500 dark:active:bg-opacity-40`};return m(e)},w=()=>m({bgColor:t?"bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500":"bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),A=()=>m({bgColor:t?"bg-gray-100 dark:bg-gray-500":"bg-transparent border border-transparent",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),m=({bgColor:e,hoverColor:d,activeColor:Q,textColor:U})=>`${e} ${h||u?X:d+" "+Q} ${U}`,H=b(R,(()=>{switch(F){case"solid":return _();case"twoTone":return q();case"plain":return A();case"default":return w();default:return w()}})(),`radius-${N}`,M(),$,x?"w-full":""),J=e=>{const{onClick:d}=c;if(h||u){e.preventDefault();return}d==null||d(e)},K=()=>u&&o?n.jsxs("span",{className:"flex items-center justify-center",children:[n.jsx(z,{enableTheme:!1,className:"mr-1"}),o]}):a&&!o&&u?n.jsx(z,{enableTheme:!1}):a&&!o&&!u?n.jsx(n.Fragment,{children:a}):a&&o&&!u?n.jsxs("span",{className:"flex items-center justify-center",children:[n.jsx("span",{className:"text-lg",children:a}),n.jsx("span",{className:"ltr:ml-1 rtl:mr-1",children:o})]}):n.jsx(n.Fragment,{children:o});return n.jsx("button",{ref:l,className:H,...G,onClick:J,children:K()})});re.displayName="Button";export{re as B,ne as F,se as I,Y as a,ce as b,ae as c,ee as d,W as u};
