import{r as e,ax as I,c as v,j as d}from"./index-01b42c77.js";const P=e.createContext({}),J=P.Provider,E=e.forwardRef((i,b)=>{const{name:u,disabled:C,value:o,onChange:a,color:p,vertical:R,radioGutter:r}=e.useContext(P),{children:f,className:k,checked:s,color:m,defaultChecked:c,disabled:t=C,field:y,labelRef:x,name:N=u,onChange:h,readOnly:G,value:l,vertical:D=R,...M}=i,{themeColor:S,primaryColorLevel:V}=I(),g=()=>typeof o<"u"?o===l:s,[j,$]=e.useState(g()),L=m||p||`${S}-${V}`,O=e.useMemo(()=>typeof o<"u"?{checked:j}:{checked:s,defaultChecked:c},[j,s,c,o]),q=e.useCallback(n=>{t||G||(a==null||a(l,n),h==null||h(l,n))},[t,$,h,l,a,o,G]);e.useEffect(()=>{const n=g();j!==n&&$(n)},[l,s,o]);const z=`radio text-${L}`,A=t&&"disabled",B=t&&"disabled",F=v(z,A),H=v("radio-label",B,k,"inline-flex",`${r?"m"+(D?"b-":"r-")+r:""}`);return d.jsxs("label",{ref:x,className:H,children:[d.jsx("input",{ref:b,type:"radio",className:F,disabled:t,value:l,name:N,readOnly:G,onChange:q,...O,...y,...M}),f?d.jsx("span",{className:v("ltr:ml-2 rtl:mr-2",t?"opacity-50":""),children:f}):null]})});E.displayName="Radio";const w=e.forwardRef((i,b)=>{const{color:u,disabled:C,name:o,onChange:a,radioGutter:p=3,value:R,vertical:r=!1,className:f,...k}=i,[s,m]=e.useState(R),c=e.useCallback((x,N)=>{m(x),a==null||a(x,N)},[a,m]),t=e.useMemo(()=>({vertical:r,name:o,value:typeof s>"u"?null:s,color:u,disabled:C,radioGutter:p,onChange:c}),[C,c,r,o,u,p,s]),y=v("radio-group",r&&"vertical",f);return d.jsx(J,{value:t,children:d.jsx("div",{ref:b,className:y,...k,children:i.children})})});w.displayName="RadioGroup";const K=E;K.Group=w;export{K as R};
