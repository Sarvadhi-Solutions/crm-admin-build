import{r as b,c as f,j as y}from"./index-7c10d2a3.js";const N=b.forwardRef((t,n)=>{const{asElement:m="div",children:a,className:i,disabled:e,eventKey:l,isActive:c,menuItemHeight:o=35,onSelect:s,style:r,variant:u="light",...d}=t,v="menu-item-active",h="menu-item-hoverable",p="menu-item-disabled",C=f("menu-item",`menu-item-${u}`,c&&v,e&&p,!e&&h,i),x=I=>{s&&s(l,I)};return y.jsx(m,{ref:n,className:C,style:{height:`${o}px`,...r},onClick:x,...d,children:a})});N.displayName="BaseMenuItem";export{N as M};
