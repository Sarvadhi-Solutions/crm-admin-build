import{c as j,az as N,j as e,r as C,aS as D,ax as I}from"./index-3e880d58.js";const b=o=>{const{percent:t,size:a,children:g,strokeColor:r}=o,l=j("progress-bg",a===N.SM?"h-1.5":"h-2",`bg-${r}`);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"progress-wrapper",children:e.jsx("div",{className:"progress-inner",children:e.jsx("div",{className:l,style:{width:`${t}%`}})})}),g]})};b.displayName="ProgressLine";const v=o=>{const{strokeWidth:t,percent:a,strokeLinecap:g,gapDegree:r,gapPosition:l,strokeColor:k,width:d,children:P}=o,f=C.useCallback(()=>{const s=50-t/2;let x=0,h=-s,i=0,n=-2*s;switch(l){case"left":x=-s,h=0,i=2*s,n=0;break;case"right":x=s,h=0,i=-2*s,n=0;break;case"bottom":h=s,n=2*s;break}const S=`M 50,50 m ${x},${h} a ${s},${s} 0 1 1 ${i},${-n} a ${s},${s} 0 1 1 ${-i},${n}`,c=Math.PI*2*s,m={strokeDasharray:`${c-r}px ${c}px`,strokeDashoffset:`-${r/2}px`},w={strokeDasharray:`${a/100*(c-r)}px ${c}px`,strokeDashoffset:`-${r/2}px`};return{pathString:S,trailPathStyle:m,strokePathStyle:w}},[r,l,a,t]),{pathString:$,trailPathStyle:y,strokePathStyle:u}=f(),p=`progress-circle-stroke text-${k}`;return e.jsxs("div",{className:"progress-circle",style:{width:d},children:[e.jsx("span",{className:"progress-circle-info",children:P}),e.jsxs("svg",{viewBox:"0 0 100 100",children:[e.jsx("path",{d:$,strokeWidth:t,fillOpacity:"0",style:y,className:"progress-circle-trail"}),e.jsx("path",{d:$,strokeLinecap:g,strokeWidth:a===0?0:t,fillOpacity:"0",style:u,className:p})]})]})};v.displayName="ProgressCircle";const L=C.forwardRef((o,t)=>{const{className:a,customInfo:g,color:r,gapDegree:l=0,gapPosition:k=D.TOP,percent:d=0,showInfo:P=!0,size:f=N.MD,strokeLinecap:$="round",strokeWidth:y=6,width:u=120,variant:p="line"}=o,{themeColor:s,primaryColorLevel:x}=I(),h=()=>P?e.jsx("span",{className:`progress-info ${p}`,children:g||`${d}%`}):null,i=r||`${s}-${x}`,n=j("progress",a,p==="circle"?"circle":"line"),S=()=>{const c=h();let m;return p==="line"&&(m=e.jsx(b,{percent:d,size:f,strokeColor:i,...o,children:c})),p==="circle"&&(m=e.jsx(v,{gapDegree:l,gapPosition:k,percent:d,strokeColor:i,strokeLinecap:$,strokeWidth:y,width:u,...o,children:c})),m};return e.jsx("div",{ref:t,className:n,children:S()})});L.displayName="Progress";export{L as P};
