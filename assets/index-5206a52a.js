import{r as e}from"./index-04de45f1.js";import{u as I,f as $,g as U,P as b,L as A}from"./Views-9d427d6f.js";function P(){const n=e.useRef(!1);return I(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function K(){const n=P(),[s,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(s+1)},[s]);return[e.useCallback(()=>$.postRender(r),[r]),s]}class O extends e.Component{getSnapshotBeforeUpdate(s){const t=this.props.childRef.current;if(t&&s.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:n,isPresent:s}){const t=e.useId(),r=e.useRef(null),p=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:l,height:d,top:f,left:h}=p.current;if(s||!r.current||!l||!d)return;r.current.dataset.motionPopId=t;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[s]),e.createElement(O,{isPresent:s,childRef:r,sizeRef:p},e.cloneElement(n,{ref:r}))}const M=({children:n,initial:s,isPresent:t,onExitComplete:r,custom:p,presenceAffectsLayout:l,mode:d})=>{const f=U(S),h=e.useId(),a=e.useMemo(()=>({id:h,initial:s,isPresent:t,custom:p,onExitComplete:o=>{f.set(o,!0);for(const c of f.values())if(!c)return;r&&r()},register:o=>(f.set(o,!1),()=>f.delete(o))}),l?void 0:[t]);return e.useMemo(()=>{f.forEach((o,c)=>f.set(c,!1))},[t]),e.useEffect(()=>{!t&&!f.size&&r&&r()},[t]),d==="popLayout"&&(n=e.createElement(B,{isPresent:t},n)),e.createElement(b.Provider,{value:a},n)};function S(){return new Map}function T(n){return e.useEffect(()=>()=>n(),[])}const m=n=>n.key||"";function D(n,s){n.forEach(t=>{const r=m(t);s.set(r,t)})}function G(n){const s=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&s.push(t)}),s}const W=({children:n,custom:s,initial:t=!0,onExitComplete:r,exitBeforeEnter:p,presenceAffectsLayout:l=!0,mode:d="sync"})=>{const f=e.useContext(A).forceRender||K()[0],h=P(),a=G(n);let o=a;const c=e.useRef(new Map).current,C=e.useRef(o),E=e.useRef(new Map).current,x=e.useRef(!0);if(I(()=>{x.current=!1,D(a,E),C.current=o}),T(()=>{x.current=!0,E.clear(),c.clear()}),x.current)return e.createElement(e.Fragment,null,o.map(u=>e.createElement(M,{key:m(u),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:l,mode:d},u)));o=[...o];const g=C.current.map(m),w=a.map(m),z=g.length;for(let u=0;u<z;u++){const i=g[u];w.indexOf(i)===-1&&!c.has(i)&&c.set(i,void 0)}return d==="wait"&&c.size&&(o=[]),c.forEach((u,i)=>{if(w.indexOf(i)!==-1)return;const y=E.get(i);if(!y)return;const L=g.indexOf(i);let R=u;if(!R){const k=()=>{E.delete(i),c.delete(i);const F=C.current.findIndex(v=>v.key===i);if(C.current.splice(F,1),!c.size){if(C.current=a,h.current===!1)return;f(),r&&r()}};R=e.createElement(M,{key:m(y),isPresent:!1,onExitComplete:k,custom:s,presenceAffectsLayout:l,mode:d},y),c.set(i,R)}o.splice(L,0,R)}),o=o.map(u=>{const i=u.key;return c.has(i)?u:e.createElement(M,{key:m(u),isPresent:!0,presenceAffectsLayout:l,mode:d},u)}),e.createElement(e.Fragment,null,c.size?o:o.map(u=>e.cloneElement(u)))};export{W as A};
