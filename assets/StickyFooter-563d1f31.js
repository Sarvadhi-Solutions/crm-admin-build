import{r as s,j as m,c as b}from"./index-59d5b448.js";const v=c=>{const{children:o,className:n,stickyClass:a,...i}=c,[u,l]=s.useState(!1),e=s.useRef(null);return s.useEffect(()=>{const t=e.current,r=new IntersectionObserver(([f])=>l(f.intersectionRatio<1),{threshold:[1]});return r.observe(t),function(){r.unobserve(t)}},[]),m.jsx("div",{ref:e,className:b("sticky -bottom-1",n,u&&a),...i,children:o})};export{v as S};
