import{r as i,ax as P,c as p,j as a,n as R}from"./index-9ca3e01c.js";const L=i.forwardRef((w,C)=>{const{checked:r,checkedContent:m,className:g,color:x,defaultChecked:o,disabled:n,isLoading:d=!1,labelRef:b,name:j,onChange:s,readOnly:h,unCheckedContent:y,field:l,...N}=w,{themeColor:v,primaryColorLevel:S}=P(),[c,f]=i.useState(o||r);i.useEffect(()=>{typeof r<"u"&&f(r)},[r]);const u=(()=>{let e=c,t={value:e};return l&&(e=typeof l.value=="boolean"?l.value:o,t={value:e,checked:e}),o&&(t.defaultChecked=o),t})(),$=e=>{const t=!c;n||h||d||(typeof r>"u"?(f(t),s==null||s(t,e)):s==null||s(c,e))},k=x||`${v}-${S}`,E=p("switcher",(c||u.checked)&&`switcher-checked bg-${k} dark:bg-${k}`,n&&"switcher-disabled",g);return a.jsxs("label",{ref:b,className:E,children:[a.jsx("input",{ref:C,type:"checkbox",disabled:n,readOnly:h,name:j,onChange:$,...u,...l,...N}),d?a.jsx(R,{className:p("switcher-toggle-loading",c?"switcher-checked-loading":"switcher-uncheck-loading")}):a.jsx("div",{className:"switcher-toggle"}),a.jsx("span",{className:"switcher-content",children:c?m:y})]})});L.displayName="Switcher";export{L as S};
