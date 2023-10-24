import{p as m,j as c,c as j,r as F,ax as z}from"./index-c91233c4.js";import{u as ke}from"./useControllableState-875c1bdf.js";import{B as fe}from"./Button-113f2dd5.js";import{U as Re,c as Ne}from"./index.esm-3e702816.js";function ce({date:a,minDate:t,maxDate:n}){const e=t instanceof Date,s=n instanceof Date;if(!s&&!e)return!0;const o=m(a).endOf("month"),r=m(a).startOf("month"),d=s?r.isBefore(n):!0,f=e?o.isAfter(t):!0;return d&&f}const ie=a=>{const{hasNext:t,hasPrevious:n,onNext:e,onPrevious:s,onNextLevel:o,label:r,nextLevelDisabled:d,nextLabel:f,previousLabel:u,preventLevelFocus:v=!1,renderCenter:i=!1,preventFocus:b,children:h,className:k,...y}=a,l=h||c.jsx("button",{className:"picker-header-label",disabled:d,tabIndex:v?-1:0,type:"button",onClick:o,onMouseDown:D=>b&&D.preventDefault(),children:r});return c.jsxs("div",{className:j("picker-header flex items-center justify-between mb-2",k),...y,children:[!i&&l,c.jsxs("div",{className:j(i&&"justify-between w-full","flex items-center rtl:flex-row-reverse"),children:[c.jsx(fe,{type:"button",variant:"plain",className:j(!n&&i&&"opacity-0 cursor-default"),size:"sm",icon:c.jsx(Re,{}),disabled:!n,"aria-label":u,onClick:s,onMouseDown:D=>b&&D.preventDefault()}),i&&l,c.jsx(fe,{type:"button",variant:"plain",className:j(!t&&i&&"opacity-0 cursor-default"),size:"sm",icon:c.jsx(Ne,{}),disabled:!t,"aria-label":f,onClick:e,onMouseDown:D=>b&&D.preventDefault()})]})]})};function Ce({focusable:a,hasValue:t,selected:n,firstInMonth:e}){return a?t?n?0:-1:e?0:-1:-1}const De=F.forwardRef((a,t)=>{const{className:n,value:e,selected:s,weekend:o,outOfMonth:r,onMouseEnter:d,hasValue:f,firstInRange:u,lastInRange:v,inRange:i,isToday:b,firstInMonth:h,focusable:k,hideOutOfMonthDates:y,renderDay:x,disabled:l,fullWidth:D,...g}=a,{themeColor:p,primaryColorLevel:M}=z();return c.jsx("button",{...g,ref:t,type:"button",disabled:l,tabIndex:Ce({focusable:k,hasValue:f,selected:s,firstInMonth:h}),className:j("date-picker-cell-content",l&&"date-picker-cell-disabled",b&&`border border-${p}-${M}`,o&&!l&&"date-picker-cell-weekend",r&&!l&&"date-picker-other-month",r&&y&&"d-none",!r&&!l&&!s&&"date-picker-cell-current-month",!l&&!s&&!i&&"date-picker-cell-hoverable",s&&!l&&`bg-${p}-${M} text-gray-100`,i&&!l&&!u&&!v&&!s&&`bg-${p}-${M} bg-opacity-10`,!i&&!u&&!v&&"rounded-lg",u&&!l&&"ltr:rounded-tl-lg ltr:rounded-bl-lg rtl:rounded-tr-lg rtl:rounded-br-lg",v&&!l&&"ltr:rounded-tr-lg ltr:rounded-br-lg rtl:rounded-tl-lg rtl:rounded-bl-lg",n),onMouseEnter:Y=>d(e,Y),children:typeof x=="function"?x(e):e==null?void 0:e.getDate()})});De.displayName="Day";function ee(a,t){return m(new Date(a,1,1)).format(t)}function Le(a){const t=a-a%10-1,n=[];for(let e=0;e<12;e+=1){const s=t+e;n.push(s)}return n}function je(a,t="monday"){const n=new Date(a),e=n.getDay(),s=t==="sunday",o=7-(s?e+1:e);return(s&&e!==6||e!==0)&&n.setDate(n.getDate()+o),n}function me(a,t="monday"){const n=new Date(a),e=n.getDay()||7,s=t==="sunday",o=s?e:e-1;return(s&&e!==0||e!==1)&&n.setHours(-24*o),n}function Ye(a,t="monday"){const n=a.getMonth(),e=new Date(a.getFullYear(),n,1),s=new Date(a.getFullYear(),a.getMonth()+1,0),o=je(s,t),r=me(e,t),d=[];for(;r<=o;){const f=[];for(let u=0;u<7;u+=1)f.push(new Date(r)),r.setDate(r.getDate()+1);d.push(f)}return d}function Oe(a,t="MMM"){const n=[],e=new Date(2021,0,1);for(let s=0;s<12;s+=1)n.push(m(e).locale(a).format(t)),e.setMonth(e.getMonth()+1);return n}function Ie(a,t="monday",n="dd"){const e=[],s=me(new Date,t);for(let o=0;o<7;o+=1)e.push(m(s).locale(a).format(n)),s.setDate(s.getDate()+1);return e}function ge(a,t){return a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()}function B(a,t){return ge(a,t)&&a.getDate()===t.getDate()}function Fe(a,t=[0,6]){return t.includes(a.getDay())}function Se(a,t){return!ge(a,t)}function Ae({minDate:a,maxDate:t,disableDate:n,disableOutOfMonth:e,date:s,outOfMonth:o}){const r=t instanceof Date&&m(t).isBefore(s,"day"),d=a instanceof Date&&m(a).isAfter(s,"day"),f=typeof n=="function"&&n(s);return r||d||f||!!e&&!!o}function Pe(a,t){const n=Array.isArray(t)&&t.every(d=>d instanceof Date),e=n&&[m(t[0]).subtract(1,"day"),m(t[1]).add(1,"day")],s=n&&B(a,t[0]),o=n&&B(a,t[1]),r=n&&m(a).isAfter(e[0],"day")&&m(a).isBefore(e[1],"day");return{firstInRange:s,lastInRange:o,inRange:r,selectedInRange:s||o}}function he(a){const{date:t,month:n,hasValue:e,minDate:s,maxDate:o,value:r,disableDate:d,disableOutOfMonth:f,range:u,weekendDays:v}=a,i=Se(t,n),b=e&&(Array.isArray(r)?r.some(l=>B(l,t)):B(t,r)),{inRange:h,lastInRange:k,firstInRange:y,selectedInRange:x}=Pe(t,u);return{disabled:Ae({minDate:s,maxDate:o,disableDate:d,disableOutOfMonth:f,date:t,outOfMonth:i}),weekend:Fe(t,v),selectedInRange:x,selected:b,inRange:h,firstInRange:y,lastInRange:k,outOfMonth:i}}const _=()=>!1,be=F.forwardRef((a,t)=>{const{className:n,month:e,value:s,onChange:o,disableOutOfMonth:r=!1,locale:d,dayClassName:f,dayStyle:u,minDate:v,maxDate:i,disableDate:b,onDayMouseEnter:h,range:k,hideWeekdays:y=!1,fullWidth:x=!1,preventFocus:l=!1,focusable:D=!0,firstDayOfWeek:g="monday",onDayKeyDown:p,daysRefs:M,hideOutOfMonthDates:Y=!1,isDateInRange:T=_,isDateFirstInRange:W=_,isDateLastInRange:O=_,renderDay:V,weekdayLabelFormat:S,weekendDays:te=[0,6],...ne}=a,{locale:J}=z(),ae=d||J,Q=Ye(e,g),se=Ie(ae,g,S).map(I=>c.jsx("th",{className:"week-day-cell",children:c.jsx("span",{className:"week-day-cell-content",children:I})},I)),X=Array.isArray(s)?s.every(I=>I instanceof Date):s instanceof Date,oe=s instanceof Date&&m(s).isAfter(m(e).startOf("month"))&&m(s).isBefore(m(e).endOf("month")),Z={month:e,hasValue:X,minDate:v,maxDate:i,value:s,disableDate:b,disableOutOfMonth:r,range:k,weekendDays:te},U=F.useMemo(()=>Q.flatMap(I=>I).find(I=>{const R=he({...Z,date:I});return!R.disabled&&!R.outOfMonth})||m(e).startOf("month").toDate(),[]),K=Q.map((I,R)=>{const A=I.map((C,E)=>{const N=he({...Z,date:C}),re={rowIndex:R,cellIndex:E,date:C};return c.jsx("td",{className:j("date-picker-cell"),children:c.jsx(De,{ref:H=>{M&&(Array.isArray(M[R])||(M[R]=[]),M[R][E]=H)},outOfMonth:N.outOfMonth,weekend:N.weekend,inRange:N.inRange||T(C,N),firstInRange:N.firstInRange||W(C,N),lastInRange:N.lastInRange||O(C,N),firstInMonth:B(C,U),selected:N.selected||N.selectedInRange,hasValue:oe,className:typeof f=="function"?f(C,N):"",style:typeof u=="function"?u(C,N):{},disabled:N.disabled,fullWidth:x,focusable:D,hideOutOfMonthDates:Y,renderDay:V,isToday:B(C,new Date),value:C,onClick:()=>typeof o=="function"&&o(C),onMouseDown:H=>l&&H.preventDefault(),onKeyDown:H=>typeof p=="function"&&p(re,H),onMouseEnter:typeof h=="function"?h:_})},E)});return c.jsx("tr",{className:j("date-picker-week-cell"),children:A},R)});return c.jsxs("table",{ref:t,className:j("picker-table",n),cellSpacing:"0",...ne,children:[!y&&c.jsx("thead",{children:c.jsx("tr",{children:se})}),c.jsx("tbody",{children:K})]})});be.displayName="Month";function Be(a){return typeof a!="string"?"":a.charAt(0).toUpperCase()+a.slice(1)}function ye({month:a,locale:t,format:n}){return Be(m(a).locale(t).format(n))}const Te=a=>{const{dateViewCount:t,paginateBy:n,month:e,locale:s,minDate:o,maxDate:r,enableHeaderLabel:d,daysRefs:f,onMonthChange:u,onNextLevel:v,onDayKeyDown:i,className:b,labelFormat:h,weekdayLabelFormat:k,preventFocus:y,renderDay:x,...l}=a,D=m(e).add(t,"months").toDate(),g=m(e).subtract(1,"months").toDate(),{themeColor:p,primaryColorLevel:M}=z(),Y=`picker-header-label hover:text-${p}-${M}`,T=Array(t).fill(0).map((W,O)=>{const V=m(e).add(O,"months").toDate();return c.jsxs("div",{className:"day-picker",children:[c.jsx(ie,{hasNext:O+1===t&&ce({date:D,minDate:o,maxDate:r}),hasPrevious:O===0&&ce({date:g,minDate:o,maxDate:r}),className:b,renderCenter:t>1,onNext:()=>u(m(e).add(n,"months").toDate()),onPrevious:()=>u(m(e).subtract(n,"months").toDate()),children:c.jsxs("div",{children:[c.jsx("button",{className:j(Y),disabled:!d,tabIndex:O>0?-1:0,type:"button",onClick:()=>v("month"),onMouseDown:S=>y&&S.preventDefault(),children:ye({month:V,locale:s,format:(h==null?void 0:h.month)||"MMM"})}),c.jsx("button",{className:j(Y),disabled:!d,tabIndex:O>0?-1:0,type:"button",onClick:()=>v("year"),onMouseDown:S=>y&&S.preventDefault(),children:ye({month:V,locale:s,format:(h==null?void 0:h.year)||"YYYY"})})]})}),c.jsx(be,{month:e,daysRefs:f.current[O],minDate:o,maxDate:r,className:b,locale:s,focusable:O===0,preventFocus:y,renderDay:x,weekdayLabelFormat:k,onDayKeyDown:(...S)=>i(O,...S),...l})]},O)});return c.jsx(c.Fragment,{children:T})},$e=a=>{const{className:t,value:n,onChange:e,locale:s,year:o,onYearChange:r,onNextLevel:d,minDate:f,maxDate:u,preventFocus:v,monthLabelFormat:i="MMM",yearLabelFormat:b="YYYY",...h}=a,{themeColor:k,primaryColorLevel:y}=z(),x=Oe(s,i),l=f instanceof Date?f.getFullYear():void 0,D=u instanceof Date?u.getFullYear():void 0,g=x.map((p,M)=>{const Y=!ce({date:new Date(o,M),minDate:f,maxDate:u}),T=M===n.month&&o===n.year;return c.jsx("button",{className:j("year-picker-cell",T&&!Y&&`bg-${k}-${y} text-white month-picker-cell-active`,!T&&!Y&&"hover:bg-gray-100",Y&&"month-picker-cell-disabled"),disabled:Y,type:"button",onClick:()=>e(M),onMouseDown:W=>v&&W.preventDefault(),children:p},p)});return c.jsxs("div",{className:j("month-picker",t),...h,children:[c.jsx(ie,{label:ee(o,b),hasNext:typeof D=="number"?o<D:!0,hasPrevious:typeof l=="number"?o>l:!0,className:t,nextLabel:"Next year",previousLabel:"Previous year",preventFocus:v,onNext:()=>r(o+1),onPrevious:()=>r(o-1),onNextLevel:d}),c.jsx("div",{className:"month-table",children:g})]})},Ee=a=>{const{className:t,value:n,onChange:e,minYear:s,maxYear:o,preventFocus:r,yearLabelFormat:d="YYYY",...f}=a,{themeColor:u,primaryColorLevel:v}=z(),[i,b]=F.useState(n),h=Le(i),k=h.map(y=>{const x=y<s||y>o,l=y===n;return c.jsx("button",{disabled:x,className:j("year-picker-cell",l&&!x&&`bg-${u}-${v} text-white year-picker-cell-active`,!l&&!x&&"hover:bg-gray-100",x&&"year-picker-cell-disabled"),type:"button",onClick:()=>e(y),onMouseDown:D=>r&&D.preventDefault(),children:ee(y,d)},y)});return c.jsxs("div",{className:j("year-picker",t),...f,children:[c.jsx(ie,{nextLevelDisabled:!0,label:`${ee(h[0],d)} - ${ee(h[h.length-1],d)}`,hasPrevious:typeof s=="number"?s<h[0]:!0,hasNext:typeof o=="number"?o>h[h.length-1]:!0,nextLabel:"Next decade",previousLabel:"Previous decade",preventFocus:r,onNext:()=>b(y=>y+10),onPrevious:()=>b(y=>y-10)}),c.jsx("div",{className:"year-table",children:k})]})},ue=F.forwardRef((a,t)=>{const{className:n,dateViewCount:e=1,dayClassName:s,dayStyle:o,defaultMonth:r,defaultView:d="date",disableDate:f,disableOutOfMonth:u,enableHeaderLabel:v=!0,firstDayOfWeek:i="monday",hideOutOfMonthDates:b,hideWeekdays:h,isDateFirstInRange:k,isDateInRange:y,isDateLastInRange:x,labelFormat:l={month:"MMM",year:"YYYY"},locale:D,maxDate:g,minDate:p,month:M,monthLabelFormat:Y="MMM",onChange:T,onDayMouseEnter:W,onMonthChange:O,paginateBy:V=e,preventFocus:S,range:te,renderDay:ne,style:J,value:ae,weekdayLabelFormat:Q="dd",weekendDays:se,yearLabelFormat:X="YYYY",...oe}=a,{locale:Z}=z(),[U,K]=F.useState(d),I=D||Z,R=F.useRef(Array(e).fill(0).map(()=>[])),[A,C]=ke({prop:M,defaultProp:r!==void 0?r:new Date,onChange:O}),[E,N]=F.useState(A==null?void 0:A.getFullYear()),[re,H]=F.useState(A==null?void 0:A.getMonth()),pe=p instanceof Date?p.getFullYear():100,we=g instanceof Date?g.getFullYear():1e4,de=6,q=(w,L,P,$=1)=>{const G=["down","up"].includes(w),Me=G?P.rowIndex+(w==="down"?$:-$):P.rowIndex,xe=G?P.cellIndex:P.cellIndex+(w==="right"?$:-$),le=R.current[L][Me][xe];le&&(le.disabled?q(w,L,P,$+1):le.focus())},ve=(w,L,P)=>{var $;switch(P.key){case"ArrowDown":{P.preventDefault(),L.rowIndex+1<R.current[w].length&&q("down",w,L);break}case"ArrowUp":{P.preventDefault(),L.rowIndex>0&&q("up",w,L);break}case"ArrowRight":{P.preventDefault(),L.cellIndex!==de?q("right",w,L):w+1<e&&R.current[w+1][L.rowIndex]&&(($=R.current[w+1][L.rowIndex][0])==null||$.focus());break}case"ArrowLeft":{P.preventDefault(),L.cellIndex!==0?q("left",w,L):w>0&&R.current[w-1][L.rowIndex]&&R.current[w-1][L.rowIndex][de].focus();break}}};return c.jsxs("div",{ref:t,className:j("picker-view",n),...oe,children:[U==="year"&&c.jsx(Ee,{value:E,minYear:pe,maxYear:we,className:n,preventFocus:S,yearLabelFormat:X,onChange:w=>{C(new Date(w,re,1)),N(w),K("date")}}),U==="month"&&c.jsx($e,{value:{month:A.getMonth(),year:A.getFullYear()},year:E,locale:I,minDate:p,maxDate:g,className:n,style:J,preventFocus:S,yearLabelFormat:X,monthLabelFormat:Y,onYearChange:N,onNextLevel:()=>K("year"),onChange:w=>{C(new Date(E,w,1)),H(w),K("date")}}),U==="date"&&c.jsx(Te,{dateViewCount:e,paginateBy:V,month:A,locale:I,minDate:p,maxDate:g,enableHeaderLabel:v,daysRefs:R,style:J,dayClassName:s,dayStyle:o,disableOutOfMonth:u,disableDate:f,hideWeekdays:h,preventFocus:S,firstDayOfWeek:i,value:ae,range:te,labelFormat:l,weekdayLabelFormat:Q,renderDay:ne,hideOutOfMonthDates:b,isDateInRange:y,isDateFirstInRange:k,isDateLastInRange:x,weekendDays:se,onMonthChange:C,onNextLevel:w=>K(w),onDayKeyDown:ve,onChange:T,onDayMouseEnter:W})]})});ue.displayName="CalendarBase";const Ue=a=>{const{multipleSelection:t,value:n,onChange:e,...s}=a,o=r=>{if(!t)return e==null?void 0:e(r);const d=n==null?void 0:n.some(f=>B(f,r));return e==null?void 0:e(d?n==null?void 0:n.filter(f=>!B(f,r)):[...n,r])};return c.jsx(ue,{value:n,onChange:o,...s})},He=F.forwardRef((a,t)=>{const{value:n,onChange:e,dayStyle:s,singleDate:o=!1,dateViewCount:r=1,paginateBy:d,...f}=a,[u,v]=F.useState(null),[i,b]=F.useState(null),h=l=>{if(i instanceof Date){if(B(l,i)&&!o)return b(null),v(null),null;const D=[l,i];return D.sort((g,p)=>g.getTime()-p.getTime()),e(D),b(null),null}return n[0]&&B(l,n[0])&&!o?(b(null),v(null),e([null,null]),null):(e([l,null]),b(l),null)},k=(l,D)=>{if(i instanceof Date&&u instanceof Date){const g=[u,i];return g.sort((p,M)=>p.getTime()-M.getTime()),!D.selected&&m(l).subtract(1,"day").isBefore(g[1])&&m(l).add(1,"day").isAfter(g[0])}return!1},y=(l,D)=>{if(i instanceof Date&&u instanceof Date){const g=[u,i];return g.sort((p,M)=>p.getTime()-M.getTime()),D.selected&&m(l).isBefore(g[1])}return!1},x=(l,D)=>{if(i instanceof Date&&u instanceof Date){const g=[u,i];return g.sort((p,M)=>p.getTime()-M.getTime()),D.selected&&m(l).isAfter(g[0])}return!1};return c.jsx(ue,{ref:t,dayStyle:s,value:i,range:n,dateViewCount:r,paginateBy:d||r,hideOutOfMonthDates:r>1,isDateInRange:k,isDateFirstInRange:y,isDateLastInRange:x,onDayMouseEnter:l=>v(l),onChange:l=>h(l),...f})});He.displayName="RangeCalendar";export{Ue as C,He as R,Be as c};
