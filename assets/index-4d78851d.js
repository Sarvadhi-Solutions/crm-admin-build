import{r as a,ax as $,j as h,c as u,ay as d,az as b}from"./index-eaf52e42.js";import{u as w}from"./useControllableState-4a07cc2b.js";import{u as E,a as R}from"./Button-fed4171f.js";const S=a.createContext({}),V=S.Provider;S.Consumer;function A(){return a.useContext(S)}const k=a.forwardRef((l,y)=>{const{children:f,className:m,defaultValue:C,onChange:c=()=>{},selectionType:e="single",size:x,value:g,...n}=l,i=E(),o=R(),{controlSize:p}=$(),[t,r]=w({prop:g,defaultProp:C,onChange:c}),s=a.useCallback(v=>{r(v)},[r]),N=a.useCallback(v=>{e==="single"&&r(""),e==="multiple"&&r((j=[])=>j.filter(P=>P!==v))},[r,e]),I=a.useMemo(()=>{if(e==="single")return t&&typeof t=="string"?[t]:t&&Array.isArray(t)?t:[];if(e==="multiple")return t||[]},[e,t]);return h.jsx(V,{value:{value:I,onActive:s,onDeactivate:N,size:x||(o==null?void 0:o.size)||(i==null?void 0:i.size)||p,selectionType:e},children:h.jsx("div",{ref:y,className:u("segment",m),...n,children:f})})});k.displayName="Segment";const T=l=>Array.isArray(l)?l[0]:l,z=a.forwardRef((l,y)=>{const{size:f}=a.useContext(S),{children:m,className:C,disabled:c=!1,value:e,...x}=l,{value:g,onActive:n,onDeactivate:i,selectionType:o}=A(),p=g.includes(e),t=a.useCallback(()=>{let s="";switch(f){case b.LG:s=u(`h-${d.lg} md:px-8 py-2 px-4 text-base`);break;case b.SM:s=u(`h-${d.sm} px-3 py-2 text-sm`);break;case b.XS:s=u(`h-${d.xs} px-3 py-1 text-xs`);break;default:s=u(`h-${d.md} md:px-8 py-2 px-4`);break}return s},[f]),r=()=>{if(!c){if(p)o==="multiple"&&(i==null||i(e));else if(o==="single"&&(n==null||n([e])),o==="multiple"){const s=[...g,e];n==null||n(s)}}};return typeof m=="function"?T(m)({active:p,onSegmentItemClick:r,disabled:c,value:e,...x}):h.jsx("button",{ref:y,className:u("segment-item segment-item-default",p&&"segment-item-active",c&&"segment-item-disabled",t(),C),onClick:r,...x,children:m})});z.displayName="SegmentItem";const L=k;L.Item=z;export{L as S};
