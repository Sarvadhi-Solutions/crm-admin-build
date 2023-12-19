import{p as D,j as l,c as L,r as P,av as z}from"./index-4bd6b7b3.js";import{u as ke}from"./useControllableState-259714d7.js";import{B as de}from"./Button-39d85f08.js";import{ap as Ne,c as Re}from"./index.esm-0cdca32a.js";function ce({date:n,minDate:t,maxDate:a}){const e=t instanceof Date,s=a instanceof Date;if(!s&&!e)return!0;const o=D(n).endOf("month"),r=D(n).startOf("month"),c=s?r.isBefore(a):!0,i=e?o.isAfter(t):!0;return c&&i}const ie=n=>{const{hasNext:t,hasPrevious:a,onNext:e,onPrevious:s,onNextLevel:o,label:r,nextLevelDisabled:c,nextLabel:i,previousLabel:h,preventLevelFocus:b=!1,renderCenter:m=!1,preventFocus:g,children:u,className:N,...f}=n,d=u||l.jsx("button",{className:"picker-header-label",disabled:c,tabIndex:b?-1:0,type:"button",onClick:o,onMouseDown:w=>g&&w.preventDefault(),children:r});return l.jsxs("div",{className:L("picker-header flex items-center justify-between mb-2",N),...f,children:[!m&&d,l.jsxs("div",{className:L(m&&"justify-between w-full","flex items-center rtl:flex-row-reverse"),children:[l.jsx(de,{type:"button",variant:"plain",className:L(!a&&m&&"opacity-0 cursor-default"),size:"sm",icon:l.jsx(Ne,{}),disabled:!a,"aria-label":h,onClick:s,onMouseDown:w=>g&&w.preventDefault()}),m&&d,l.jsx(de,{type:"button",variant:"plain",className:L(!t&&m&&"opacity-0 cursor-default"),size:"sm",icon:l.jsx(Re,{}),disabled:!t,"aria-label":i,onClick:e,onMouseDown:w=>g&&w.preventDefault()})]})]})};function Ce({focusable:n,hasValue:t,selected:a,firstInMonth:e}){return n?t?a?0:-1:e?0:-1:-1}const ye=P.forwardRef((n,t)=>{const{className:a,value:e,selected:s,weekend:o,outOfMonth:r,onMouseEnter:c,hasValue:i,firstInRange:h,lastInRange:b,inRange:m,isToday:g,firstInMonth:u,focusable:N,hideOutOfMonthDates:f,renderDay:p,disabled:d,fullWidth:w,...j}=n,{themeColor:v,primaryColorLevel:M}=z();return l.jsx("button",{...j,ref:t,type:"button",disabled:d,tabIndex:Ce({focusable:N,hasValue:i,selected:s,firstInMonth:u}),className:L("date-picker-cell-content",d&&"date-picker-cell-disabled",g&&`border border-${v}-${M}`,o&&!d&&"date-picker-cell-weekend",r&&!d&&"date-picker-other-month",r&&f&&"d-none",!r&&!d&&!s&&"date-picker-cell-current-month",!d&&!s&&!m&&"date-picker-cell-hoverable",s&&!d&&`bg-${v}-${M} text-gray-100`,m&&!d&&!h&&!b&&!s&&`bg-${v}-${M} bg-opacity-10`,!m&&!h&&!b&&"rounded-lg",h&&!d&&"ltr:rounded-tl-lg ltr:rounded-bl-lg rtl:rounded-tr-lg rtl:rounded-br-lg",b&&!d&&"ltr:rounded-tr-lg ltr:rounded-br-lg rtl:rounded-tl-lg rtl:rounded-bl-lg",a),onMouseEnter:Y=>c(e,Y),children:typeof p=="function"?p(e):e==null?void 0:e.getDate()})});ye.displayName="Day";function ee(n,t){return D(new Date(n,1,1)).format(t)}function Le(n){const t=n-n%10-1,a=[];for(let e=0;e<12;e+=1){const s=t+e;a.push(s)}return a}function je(n,t="monday"){const a=new Date(n),e=a.getDay(),s=t==="sunday",o=7-(s?e+1:e);return(s&&e!==6||e!==0)&&a.setDate(a.getDate()+o),a}function me(n,t="monday"){const a=new Date(n),e=a.getDay()||7,s=t==="sunday",o=s?e:e-1;return(s&&e!==0||e!==1)&&a.setHours(-24*o),a}function Ye(n,t="monday"){const a=n.getMonth(),e=new Date(n.getFullYear(),a,1),s=new Date(n.getFullYear(),n.getMonth()+1,0),o=je(s,t),r=me(e,t),c=[];for(;r<=o;){const i=[];for(let h=0;h<7;h+=1)i.push(new Date(r)),r.setDate(r.getDate()+1);c.push(i)}return c}function Oe(n,t="MMM"){const a=[],e=new Date(2021,0,1);for(let s=0;s<12;s+=1)a.push(D(e).locale(n).format(t)),e.setMonth(e.getMonth()+1);return a}function Fe(n,t="monday",a="dd"){const e=[],s=me(new Date,t);for(let o=0;o<7;o+=1)e.push(D(s).locale(n).format(a)),s.setDate(s.getDate()+1);return e}function De(n,t){return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}function E(n,t){return De(n,t)&&n.getDate()===t.getDate()}function Ie(n,t=[0,6]){return t.includes(n.getDay())}function Ae(n,t){return!De(n,t)}function Se({minDate:n,maxDate:t,disableDate:a,disableOutOfMonth:e,date:s,outOfMonth:o}){const r=t instanceof Date&&D(t).isBefore(s,"day"),c=n instanceof Date&&D(n).isAfter(s,"day"),i=typeof a=="function"&&a(s);return r||c||i||!!e&&!!o}function Pe(n,t){const a=Array.isArray(t)&&t.every(c=>c instanceof Date),e=a&&[D(t[0]).subtract(1,"day"),D(t[1]).add(1,"day")],s=a&&E(n,t[0]),o=a&&E(n,t[1]),r=a&&D(n).isAfter(e[0],"day")&&D(n).isBefore(e[1],"day");return{firstInRange:s,lastInRange:o,inRange:r,selectedInRange:s||o}}function fe(n){const{date:t,month:a,hasValue:e,minDate:s,maxDate:o,value:r,disableDate:c,disableOutOfMonth:i,range:h,weekendDays:b}=n,m=Ae(t,a),g=e&&(Array.isArray(r)?r.some(d=>E(d,t)):E(t,r)),{inRange:u,lastInRange:N,firstInRange:f,selectedInRange:p}=Pe(t,h);return{disabled:Se({minDate:s,maxDate:o,disableDate:c,disableOutOfMonth:i,date:t,outOfMonth:m}),weekend:Ie(t,b),selectedInRange:p,selected:g,inRange:u,firstInRange:f,lastInRange:N,outOfMonth:m}}const _=()=>!1,be=P.forwardRef((n,t)=>{const{className:a,month:e,value:s,onChange:o,disableOutOfMonth:r=!1,locale:c,dayClassName:i,dayStyle:h,minDate:b,maxDate:m,disableDate:g,onDayMouseEnter:u,range:N,hideWeekdays:f=!1,fullWidth:p=!1,preventFocus:d=!1,focusable:w=!0,firstDayOfWeek:j="monday",onDayKeyDown:v,daysRefs:M,hideOutOfMonthDates:Y=!1,isDateInRange:$=_,isDateFirstInRange:H=_,isDateLastInRange:O=_,renderDay:K,weekdayLabelFormat:I,weekendDays:te=[0,6],...ne}=n,{locale:J}=z(),ae=c||J,Q=Ye(e,j),se=Fe(ae,j,I).map(F=>l.jsx("th",{className:"week-day-cell",children:l.jsx("span",{className:"week-day-cell-content",children:F})},F)),X=Array.isArray(s)?s.every(F=>F instanceof Date):s instanceof Date,oe=s instanceof Date&&D(s).isAfter(D(e).startOf("month"))&&D(s).isBefore(D(e).endOf("month")),Z={month:e,hasValue:X,minDate:b,maxDate:m,value:s,disableDate:g,disableOutOfMonth:r,range:N,weekendDays:te},U=P.useMemo(()=>Q.flatMap(F=>F).find(F=>{const x=fe({...Z,date:F});return!x.disabled&&!x.outOfMonth})||D(e).startOf("month").toDate(),[]),V=Q.map((F,x)=>{const A=F.map((R,T)=>{const k=fe({...Z,date:R}),re={rowIndex:x,cellIndex:T,date:R};return l.jsx("td",{className:L("date-picker-cell"),children:l.jsx(ye,{ref:W=>{M&&(Array.isArray(M[x])||(M[x]=[]),M[x][T]=W)},outOfMonth:k.outOfMonth,weekend:k.weekend,inRange:k.inRange||$(R,k),firstInRange:k.firstInRange||H(R,k),lastInRange:k.lastInRange||O(R,k),firstInMonth:E(R,U),selected:k.selected||k.selectedInRange,hasValue:oe,className:typeof i=="function"?i(R,k):"",style:typeof h=="function"?h(R,k):{},disabled:k.disabled,fullWidth:p,focusable:w,hideOutOfMonthDates:Y,renderDay:K,isToday:E(R,new Date),value:R,onClick:()=>typeof o=="function"&&o(R),onMouseDown:W=>d&&W.preventDefault(),onKeyDown:W=>typeof v=="function"&&v(re,W),onMouseEnter:typeof u=="function"?u:_})},T)});return l.jsx("tr",{className:L("date-picker-week-cell"),children:A},x)});return l.jsxs("table",{ref:t,className:L("picker-table",a),cellSpacing:"0",...ne,children:[!f&&l.jsx("thead",{children:l.jsx("tr",{children:se})}),l.jsx("tbody",{children:V})]})});be.displayName="Month";function $e(n){return typeof n!="string"?"":n.charAt(0).toUpperCase()+n.slice(1)}function he({month:n,locale:t,format:a}){return $e(D(n).locale(t).format(a))}const Be=n=>{const{dateViewCount:t,paginateBy:a,month:e,locale:s,minDate:o,maxDate:r,enableHeaderLabel:c,daysRefs:i,onMonthChange:h,onNextLevel:b,onDayKeyDown:m,className:g,labelFormat:u,weekdayLabelFormat:N,preventFocus:f,renderDay:p,...d}=n,w=D(e).add(t,"months").toDate(),j=D(e).subtract(1,"months").toDate(),{themeColor:v,primaryColorLevel:M}=z(),Y=`picker-header-label hover:text-${v}-${M}`,$=Array(t).fill(0).map((H,O)=>{const K=D(e).add(O,"months").toDate();return l.jsxs("div",{className:"day-picker",children:[l.jsx(ie,{hasNext:O+1===t&&ce({date:w,minDate:o,maxDate:r}),hasPrevious:O===0&&ce({date:j,minDate:o,maxDate:r}),className:g,renderCenter:t>1,onNext:()=>h(D(e).add(a,"months").toDate()),onPrevious:()=>h(D(e).subtract(a,"months").toDate()),children:l.jsxs("div",{children:[l.jsx("button",{className:L(Y),disabled:!c,tabIndex:O>0?-1:0,onClick:()=>b("month"),onMouseDown:I=>f&&I.preventDefault(),type:"button",children:he({month:K,locale:s,format:(u==null?void 0:u.month)||"MMM"})}),l.jsx("button",{className:L(Y),disabled:!c,tabIndex:O>0?-1:0,onClick:()=>b("year"),onMouseDown:I=>f&&I.preventDefault(),type:"button",children:he({month:K,locale:s,format:(u==null?void 0:u.year)||"YYYY"})})]})}),l.jsx(be,{month:e,daysRefs:i.current[O],minDate:o,maxDate:r,className:g,locale:s,focusable:O===0,preventFocus:f,renderDay:p,weekdayLabelFormat:N,onDayKeyDown:(...I)=>m(O,...I),...d})]},O)});return l.jsx(l.Fragment,{children:$})},Ee=n=>{const{className:t,value:a,onChange:e,locale:s,year:o,onYearChange:r,onNextLevel:c,minDate:i,maxDate:h,preventFocus:b,monthLabelFormat:m="MMM",yearLabelFormat:g="YYYY",...u}=n,{themeColor:N,primaryColorLevel:f}=z(),p=Oe(s,m),d=i instanceof Date?i.getFullYear():void 0,w=h instanceof Date?h.getFullYear():void 0,j=p.map((v,M)=>{const Y=!ce({date:new Date(o,M),minDate:i,maxDate:h}),$=M===a.month&&o===a.year;return l.jsx("button",{className:L("year-picker-cell",$&&!Y&&`bg-${N}-${f} text-white month-picker-cell-active`,!$&&!Y&&"hover:bg-gray-100",Y&&"month-picker-cell-disabled"),disabled:Y,onClick:()=>e(M),onMouseDown:H=>b&&H.preventDefault(),type:"button",children:v},v)});return l.jsxs("div",{className:L("month-picker",t),...u,children:[l.jsx(ie,{label:ee(o,g),hasNext:typeof w=="number"?o<w:!0,hasPrevious:typeof d=="number"?o>d:!0,className:t,nextLabel:"Next year",previousLabel:"Previous year",preventFocus:b,onNext:()=>r(o+1),onPrevious:()=>r(o-1),onNextLevel:c}),l.jsx("div",{className:"month-table",children:j})]})},Te=n=>{const{className:t,value:a,onChange:e,minYear:s,maxYear:o,preventFocus:r,yearLabelFormat:c="YYYY",...i}=n,{themeColor:h,primaryColorLevel:b}=z(),[m,g]=P.useState(a),u=Le(m),N=u.map(f=>{const p=f<s||f>o,d=f===a;return l.jsx("button",{disabled:p,className:L("year-picker-cell",d&&!p&&`bg-${h}-${b} text-white year-picker-cell-active`,!d&&!p&&"hover:bg-gray-100",p&&"year-picker-cell-disabled"),onClick:()=>e(f),onMouseDown:w=>r&&w.preventDefault(),type:"button",children:ee(f,c)},f)});return l.jsxs("div",{className:L("year-picker",t),...i,children:[l.jsx(ie,{nextLevelDisabled:!0,label:`${ee(u[0],c)} - ${ee(u[u.length-1],c)}`,hasPrevious:typeof s=="number"?s<u[0]:!0,hasNext:typeof o=="number"?o>u[u.length-1]:!0,nextLabel:"Next decade",previousLabel:"Previous decade",preventFocus:r,onNext:()=>g(f=>f+10),onPrevious:()=>g(f=>f-10)}),l.jsx("div",{className:"year-table",children:N})]})},ge=P.forwardRef((n,t)=>{const{className:a,dateViewCount:e=1,dayClassName:s,dayStyle:o,defaultMonth:r,defaultView:c="date",disableDate:i,disableOutOfMonth:h,enableHeaderLabel:b=!0,firstDayOfWeek:m="monday",hideOutOfMonthDates:g,hideWeekdays:u,isDateFirstInRange:N,isDateInRange:f,isDateLastInRange:p,labelFormat:d={month:"MMM",year:"YYYY"},locale:w,maxDate:j,minDate:v,month:M,monthLabelFormat:Y="MMM",onChange:$,onDayMouseEnter:H,onMonthChange:O,paginateBy:K=e,preventFocus:I,range:te,renderDay:ne,style:J,value:ae,weekdayLabelFormat:Q="dd",weekendDays:se,yearLabelFormat:X="YYYY",...oe}=n,{locale:Z}=z(),[U,V]=P.useState(c),F=w||Z,x=P.useRef(Array(e).fill(0).map(()=>[])),[A,R]=ke({prop:M,defaultProp:r!==void 0?r:new Date,onChange:O}),[T,k]=P.useState(A==null?void 0:A.getFullYear()),[re,W]=P.useState(A==null?void 0:A.getMonth()),pe=v instanceof Date?v.getFullYear():100,we=j instanceof Date?j.getFullYear():1e4,ue=6,q=(y,C,S,B=1)=>{const G=["down","up"].includes(y),Me=G?S.rowIndex+(y==="down"?B:-B):S.rowIndex,xe=G?S.cellIndex:S.cellIndex+(y==="right"?B:-B),le=x.current[C][Me][xe];le&&(le.disabled?q(y,C,S,B+1):le.focus())},ve=(y,C,S)=>{var B;switch(S.key){case"ArrowDown":{S.preventDefault(),C.rowIndex+1<x.current[y].length&&q("down",y,C);break}case"ArrowUp":{S.preventDefault(),C.rowIndex>0&&q("up",y,C);break}case"ArrowRight":{S.preventDefault(),C.cellIndex!==ue?q("right",y,C):y+1<e&&x.current[y+1][C.rowIndex]&&((B=x.current[y+1][C.rowIndex][0])==null||B.focus());break}case"ArrowLeft":{S.preventDefault(),C.cellIndex!==0?q("left",y,C):y>0&&x.current[y-1][C.rowIndex]&&x.current[y-1][C.rowIndex][ue].focus();break}}};return l.jsxs("div",{ref:t,className:L("picker-view",a),...oe,children:[U==="year"&&l.jsx(Te,{value:T,minYear:pe,maxYear:we,className:a,preventFocus:I,yearLabelFormat:X,onChange:y=>{R(new Date(y,re,1)),k(y),V("date")}}),U==="month"&&l.jsx(Ee,{value:{month:A.getMonth(),year:A.getFullYear()},year:T,locale:F,minDate:v,maxDate:j,className:a,style:J,preventFocus:I,yearLabelFormat:X,monthLabelFormat:Y,onYearChange:k,onNextLevel:()=>V("year"),onChange:y=>{R(new Date(T,y,1)),W(y),V("date")}}),U==="date"&&l.jsx(Be,{dateViewCount:e,paginateBy:K,month:A,locale:F,minDate:v,maxDate:j,enableHeaderLabel:b,daysRefs:x,style:J,dayClassName:s,dayStyle:o,disableOutOfMonth:h,disableDate:i,hideWeekdays:u,preventFocus:I,firstDayOfWeek:m,value:ae,range:te,labelFormat:d,weekdayLabelFormat:Q,renderDay:ne,hideOutOfMonthDates:g,isDateInRange:f,isDateFirstInRange:N,isDateLastInRange:p,weekendDays:se,onMonthChange:R,onNextLevel:y=>V(y),onDayKeyDown:ve,onChange:$,onDayMouseEnter:H})]})});ge.displayName="CalendarBase";const ze=n=>{const{multipleSelection:t,value:a,onChange:e,...s}=n,o=r=>{if(!t)return e==null?void 0:e(r);const c=a==null?void 0:a.some(i=>E(i,r));return e==null?void 0:e(c?a==null?void 0:a.filter(i=>!E(i,r)):[...a,r])};return l.jsx(ge,{value:a,onChange:o,...s})};export{ze as C,ge as a,$e as c,E as i};
