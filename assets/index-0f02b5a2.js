import{r as d,c,j as n,ay as j}from"./index-fbc41bca.js";import{b as w,c as E,d as R}from"./index.esm-158add56.js";const f=d.forwardRef((s,a)=>{const{asElement:e="table",borderlessRow:t,children:o,className:r,compact:l=!1,hoverable:u=!0,overflow:b=!0,...y}=s,C=c(e==="table"?"table-default":"table-flex",u&&"table-hover",l&&"table-compact",t&&"borderless-row",r);return n.jsx("div",{className:c(b&&"overflow-x-auto"),children:n.jsx(e,{className:C,...y,ref:a,children:o})})});f.displayName="Table";const i=d.forwardRef((s,a)=>{const{asElement:e="thead",children:t,className:o,...r}=s,l=c(e!=="thead"&&"thead",o);return n.jsx(e,{className:l,...r,ref:a,children:t})});i.displayName="THead";const N=d.forwardRef((s,a)=>{const{asElement:e="tbody",children:t,className:o,...r}=s,l=c(e!=="tbody"&&"tbody",o);return n.jsx(e,{className:l,...r,ref:a,children:t})});N.displayName="TBody";const p=d.forwardRef((s,a)=>{const{asElement:e="tfoot",children:t,className:o,...r}=s,l=c(e!=="tfoot"&&"tfoot",o);return n.jsx(e,{className:l,...r,ref:a,children:t})});p.displayName="TFoot";const h=d.forwardRef((s,a)=>{const{asElement:e="tr",children:t,className:o,...r}=s,l=c(e!=="tr"&&"tr",o);return n.jsx(e,{ref:a,className:l,...r,children:t})});h.displayName="Tr";const T=d.forwardRef((s,a)=>{const{asElement:e="th",children:t,className:o,...r}=s,l=c(e!=="th"&&"th",o);return n.jsx(e,{className:l,...r,ref:a,children:t})});T.displayName="Th";const x=d.forwardRef((s,a)=>{const{asElement:e="td",children:t,className:o,...r}=s,l=c(e!=="td"&&"td",o);return n.jsx(e,{ref:a,className:l,...r,children:t})});x.displayName="Td";const v=({sort:s})=>{const{themeColor:a,primaryColorLevel:e}=j(),t=`text-${a}-${e}`,o=()=>typeof s=="boolean"?n.jsx(w,{}):s==="asc"?n.jsx(E,{className:t}):s==="desc"?n.jsx(R,{className:t}):null;return n.jsx("div",{className:"inline-flex",children:o()})},m=f;m.THead=i;m.TBody=N;m.TFoot=p;m.Th=T;m.Tr=h;m.Td=x;m.Sorter=v;export{m as T};
