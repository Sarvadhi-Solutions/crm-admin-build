import{r as e,c as y,j as t}from"./index-03c04ff8.js";import{u as R}from"./useMergeRef-788c4cb0.js";import{T as W}from"./Tooltip-d932d71c.js";const j=e.forwardRef((c,l)=>{const{alt:n,className:p,icon:r,shape:o="rounded",size:a="md",src:v,srcSet:x,...u}=c;let{children:s}=c;const[i,d]=e.useState(1),m=e.useRef(null),g=e.useRef(null),C=R(l,g),A=()=>{if(!m.current||!g.current)return;const h=m.current.offsetWidth,f=g.current.offsetWidth;h===0||f===0||d(f-8<h?(f-8)/h:1)};e.useEffect(()=>{A()},[i,s]);const S=typeof a=="number"?{width:a,height:a,minWidth:a,lineHeight:`${a}px`,fontSize:r?a/2:12}:{},z=y("avatar",`avatar-${o}`,typeof a=="string"?`avatar-${a}`:"",p);if(v)s=t.jsx("img",{className:`avatar-img avatar-${o}`,src:v,srcSet:x,alt:n,loading:"lazy"});else if(r)s=t.jsx("span",{className:y("avatar-icon",`avatar-icon-${a}`),children:r});else{const h=typeof a=="number"?{lineHeight:`${a}px`}:{},f={transform:`translateX(-50%) scale(${i})`};s=t.jsx("span",{ref:m,className:`avatar-string ${typeof a=="number"?"":`avatar-inner-${a}`}`,style:{...h,...f,...typeof a=="number"?{height:a}:{}},children:s})}return t.jsx("span",{ref:C,className:z,style:{...S,...u.style},...u,children:s})});j.displayName="Avatar";const N=({children:c,chained:l,className:n})=>t.jsx("div",{className:y("avatar-group",l&&"avatar-group-chained",n),children:c}),$=c=>{const{chained:l=!1,children:n,className:p,maxCount:r=4,onOmittedAvatarClick:o,omittedAvatarContent:a,omittedAvatarProps:v,omittedAvatarTooltip:x=!1}=c,u=e.Children.count(n),s=e.Children.toArray(n).map((i,d)=>e.cloneElement(i,{key:`grouped-avatar-${d}`}));if(r&&r<u){const i=s.slice(0,r),d=u-r,m=t.jsx(j,{className:o?"cursor-pointer":"",onClick:()=>o==null?void 0:o(),...v,children:a||`+${d}`});return i.push(x?t.jsx(W,{title:`${d} More`,children:t.jsx(t.Fragment,{children:m})},"avatar-more-tooltip"):t.jsx(e.Fragment,{children:m},"avatar-more-tooltip")),t.jsx(N,{className:p,chained:l,children:i})}return t.jsx(N,{className:p,chained:l,children:n})};$.displayName="AvatarGroup";const b=j;b.Group=$;export{b as A};
