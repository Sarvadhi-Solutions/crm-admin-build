import{j as u}from"./index-7a16719d.js";import{a as F}from"./react-number-format.es-51238e39.js";import{I}from"./Input-67ca38c6.js";function m(t){return!!(t||"").match(/\d/)}function i(t){const n=Array.from({length:t.length+1}).map(()=>!0);for(let r=0,o=n.length;r<o;r++)n[r]=!!(m(t[r])||m(t[r-1]));return n}function b(t){return t.replace(/[^0-9]/g,"")}const f=({inputSuffix:t,inputPrefix:n,...r})=>u.jsx(I,{...r,value:r.value,suffix:t,prefix:n}),g=({onValueChange:t,form:n,field:r,...o})=>u.jsx(F,{customInput:f,form:n,field:r,onBlur:r==null?void 0:r.onBlur,onValueChange:t,...o}),B=({form:t,field:n,inputSuffix:r,inputPrefix:o,onValueChange:a,format:e=x=>x,getCaretBoundary:s=i,removeFormatting:c=b,...p})=>u.jsx(g,{form:t,field:n,inputPrefix:o,inputSuffix:r,format:e,getCaretBoundary:s,removeFormatting:c,onValueChange:a,...p});export{B as F};
