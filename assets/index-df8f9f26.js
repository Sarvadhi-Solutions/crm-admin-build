import{r as l,j as e,c}from"./index-7b0349c6.js";import{m as p}from"./mapCloneElement-0f96c84d.js";const r=l.forwardRef((t,m)=>{const{children:s,className:a}=t,i=l.Children.count(s),n=p(s,(d,N)=>({isLast:N===i-1,...d.props}));return e.jsx("ul",{ref:m,className:c("timeline",a),children:n})});r.displayName="Timeline";const o=l.forwardRef((t,m)=>{const{children:s,className:a,isLast:i,media:n}=t;return e.jsx("li",{ref:m,className:c("timeline-item",i?"timeline-item-last":"",a),children:e.jsxs("div",{className:"timeline-item-wrapper",children:[e.jsxs("div",{className:"timeline-item-media",children:[e.jsx("div",{className:"timeline-item-media-content",children:n||e.jsx("div",{className:"timeline-item-media-default"})}),!i&&e.jsx("div",{className:"timeline-connect"})]}),e.jsx("div",{className:c("timeline-item-content",i&&"timeline-item-content-last"),children:s})]})})});o.displayName="TimeLineItem";const x=r;x.Item=o;export{x as T};
