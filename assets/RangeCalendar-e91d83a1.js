import{r as D,j,p as o}from"./index-7c10d2a3.js";import{a as k,i as m}from"./Calendar-0d3223b7.js";const v=D.forwardRef((y,R)=>{const{value:u,onChange:c,dayStyle:p,singleDate:d=!1,dateViewCount:f=1,paginateBy:h,...T}=y,[r,g]=D.useState(null),[n,l]=D.useState(null),C=e=>{if(n instanceof Date){if(m(e,n)&&!d)return l(null),g(null),null;const a=[e,n];return a.sort((t,s)=>t.getTime()-s.getTime()),c(a),l(null),null}return u[0]&&m(e,u[0])&&!d?(l(null),g(null),c([null,null]),null):(c([e,null]),l(e),null)},x=(e,a)=>{if(n instanceof Date&&r instanceof Date){const t=[r,n];return t.sort((s,i)=>s.getTime()-i.getTime()),!a.selected&&o(e).subtract(1,"day").isBefore(t[1])&&o(e).add(1,"day").isAfter(t[0])}return!1},B=(e,a)=>{if(n instanceof Date&&r instanceof Date){const t=[r,n];return t.sort((s,i)=>s.getTime()-i.getTime()),a.selected&&o(e).isBefore(t[1])}return!1},I=(e,a)=>{if(n instanceof Date&&r instanceof Date){const t=[r,n];return t.sort((s,i)=>s.getTime()-i.getTime()),a.selected&&o(e).isAfter(t[0])}return!1};return j.jsx(k,{ref:R,dayStyle:p,value:n,range:u,dateViewCount:f,paginateBy:h||f,hideOutOfMonthDates:f>1,isDateInRange:x,isDateFirstInRange:B,isDateLastInRange:I,onDayMouseEnter:e=>g(e),onChange:e=>C(e),...T})});v.displayName="RangeCalendar";export{v as R};
