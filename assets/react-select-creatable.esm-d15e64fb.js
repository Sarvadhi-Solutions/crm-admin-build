import{a as b,_ as T}from"./toConsumableArray-11b6685e.js";import{r as g,aw as A}from"./index-9ca3e01c.js";import{a as M,v as q,g as z,b as B,u as F,e as G}from"./Select-36a3bae0.js";import{_ as H}from"./objectWithoutProperties-8809bfcf.js";var I=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],j=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=String(t).toLowerCase(),r=String(o.getOptionValue(a)).toLowerCase(),c=String(o.getOptionLabel(a)).toLowerCase();return r===n||c===n},L={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,a,o,n){return!(!t||a.some(function(r){return j(t,r,n)})||o.some(function(r){return j(t,r,n)}))},getNewOptionData:function(t,a){return{label:a,value:t,__isNew__:!0}}};function J(e){var t=e.allowCreateWhileLoading,a=t===void 0?!1:t,o=e.createOptionPosition,n=o===void 0?"last":o,r=e.formatCreateLabel,c=r===void 0?L.formatCreateLabel:r,w=e.isValidNewOption,N=w===void 0?L.isValidNewOption:w,$=e.getNewOptionData,O=$===void 0?L.getNewOptionData:$,m=e.onCreateOption,h=e.options,l=h===void 0?[]:h,d=e.onChange,i=H(e,I),S=i.getOptionValue,V=S===void 0?z:S,_=i.getOptionLabel,P=_===void 0?B:_,s=i.inputValue,y=i.isLoading,D=i.isMulti,v=i.value,W=i.name,p=g.useMemo(function(){return N(s,M(v),l,{getOptionValue:V,getOptionLabel:P})?O(s,c(s)):void 0},[c,O,P,V,s,N,l,v]),E=g.useMemo(function(){return(a||!y)&&p?n==="first"?[p].concat(b(l)):[].concat(b(l),[p]):l},[a,n,y,p,l]),k=g.useCallback(function(u,f){if(f.action!=="select-option")return d(u,f);var x=Array.isArray(u)?u:[u];if(x[x.length-1]===p){if(m)m(s);else{var C=O(s,s),R={action:"create-option",name:W,option:C};d(q(D,[].concat(b(M(v)),[C]),C),R)}return}d(u,f)},[O,s,D,W,p,m,d,v]);return A(A({},i),{},{options:E,onChange:k})}var K=g.forwardRef(function(e,t){var a=F(e),o=J(a);return g.createElement(G,T({ref:t},o))}),Z=K;export{Z as C};
