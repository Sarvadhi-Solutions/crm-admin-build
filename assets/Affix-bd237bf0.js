import{r as i,j as a,c as p}from"./index-6767ac81.js";function y(l){const{offset:c=0,className:f,children:u}=l,e=i.createRef(),r={position:"",top:"",width:""},d=(s,n)=>{const o=window.scrollY;if(e.current)if(s-o<c){if(e.current.style.position!=="fixed"){for(const t in r)r[t]=e.current.style[t];e.current.style.position="fixed",e.current.style.width=n+"px",e.current.style.top=c+"px"}}else for(const t in r)e.current.style[t]=r[t]};return i.useEffect(()=>{if(!(typeof window.scrollY>"u")&&e.current){const s=window.scrollY+e.current.getBoundingClientRect().top,n=()=>{e.current&&requestAnimationFrame(()=>{var o;d(s,(o=e.current)==null?void 0:o.clientWidth)})};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}}}),a.jsx("div",{ref:e,className:p("z-10",f),children:u})}export{y as A};
