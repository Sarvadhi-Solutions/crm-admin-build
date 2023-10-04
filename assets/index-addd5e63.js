import{r as b,c as C,j as i,ax as g}from"./index-b09faefa.js";import{u as w,a as L}from"./useControllableState-5d01e6b9.js";const N=b.createContext({}),P=N.Provider;N.Consumer;function p(){return b.useContext(N)}const $=b.forwardRef((s,n)=>{const{className:t,defaultValue:a,onChange:o,value:e,variant:r="underline",...l}=s,[d,v]=w({prop:e,onChange:o,defaultProp:a}),u=C("tabs",t);return i.jsx(P,{value:{value:d,onValueChange:v,variant:r},children:i.jsx("div",{className:u,...l,ref:n})})});$.displayName="Tabs";const h=b.forwardRef((s,n)=>{const{className:t,children:a,...o}=s,{variant:e}=p(),r=C("tab-list",`tab-list-${e}`,t);return i.jsx("div",{ref:n,role:"tablist",className:r,...o,children:a})});h.displayName="TabList";const j=b.forwardRef((s,n)=>{const{value:t,disabled:a,className:o,icon:e,children:r,...l}=s,{value:d,onValueChange:v,variant:u}=p(),c=t===d,{themeColor:x,primaryColorLevel:y}=g(),f=L(()=>{!c&&!a&&(v==null||v(t))}),m=`${x}-${y}`,R=C("tab-nav",`tab-nav-${u}`,c&&`tab-nav-active text-${m} dark:text-${x}-100`,c&&u==="underline"&&`border-${m}`,c&&u==="pill"&&`bg-${x}-50 dark:bg-${m} dark:text-gray-100`,a&&"tab-nav-disabled",!a&&!c&&`hover:text-${m} dark:hover:text-${x}-100`,o);return i.jsxs("div",{ref:n,className:R,role:"tab","aria-selected":c,tabIndex:0,onClick:f,onKeyDown:f,...l,children:[e&&i.jsx("div",{className:"tab-nav-icon",children:e}),r]})});j.displayName="TabNav";const k=b.forwardRef((s,n)=>{const{value:t,children:a,className:o,...e}=s,r=p(),l=t===r.value,d=C("tab-content",l&&"tab-content-active",o);return i.jsx("div",{ref:n,role:"tabpanel",tabIndex:0,className:d,...e,children:l&&a})});k.displayName="TabContent";const T=$;T.TabList=h;T.TabNav=j;T.TabContent=k;export{T};
