import{r as l,j as e,p as r}from"./index-50945288.js";import{D as i}from"./DemoLayout-0d52a187.js";import{C as c,R as p}from"./RangeCalendar-2f6aee1b.js";import{B as m}from"./Badge-87c37bf0.js";import"./AdaptableCard-37b0a974.js";import"./Card-17f3ebb7.js";import"./Views-e48a0a66.js";import"./Affix-30f504fd.js";import"./Button-a4fa8688.js";import"./Tooltip-99e477d6.js";import"./usePopper-8e8e78a4.js";import"./index.esm-1eb25fdc.js";import"./index-029bd1b0.js";import"./index.esm-35c8061b.js";import"./objectWithoutProperties-8809bfcf.js";import"./toConsumableArray-08fe5c41.js";import"./index-053d6302.js";import"./index-9b97383d.js";import"./index.esm-3cc4021a.js";import"./useControllableState-0304948a.js";const u=()=>{const[a,o]=l.useState(null);return e.jsx("div",{className:"md:w-[260px] max-w-[260px] mx-auto",children:e.jsx(c,{value:a,onChange:o})})},b=()=>{const[a,o]=l.useState([new Date,r(new Date).add(5,"days").toDate()]);return e.jsx("div",{className:"md:w-[260px] max-w-[260px] mx-auto",children:e.jsx(p,{value:a,onChange:o})})},f=()=>{const[a,o]=l.useState(null);return e.jsx("div",{className:"md:w-[260px] max-w-[260px] mx-auto",children:e.jsx(c,{value:a,dayClassName:(d,{selected:t})=>d.getDate()===12&&!t?"text-red-600":t?"text-white":"text-gray-700 dark:text-gray-200",dayStyle:(d,{selected:t,outOfMonth:s})=>d.getDate()===18&&!t?{color:"#15c39a"}:s?{opacity:0,pointerEvents:"none",cursor:"default"}:{},renderDay:d=>{const t=d.getDate();return t!==12?e.jsx("span",{children:t}):e.jsxs("span",{className:"relative flex justify-center items-center w-full h-full",children:[t,e.jsx(m,{className:"absolute bottom-1",innerClass:"h-1 w-1"})]})},onChange:o})})},y=()=>{const[a,o]=l.useState(null),d=t=>[7,15,21].includes(t.getDate());return e.jsx("div",{className:"md:w-[260px] max-w-[260px] mx-auto",children:e.jsx(c,{value:a,disableDate:d,onChange:o})})},g=()=>{const[a,o]=l.useState(null),d=7,t=r(new Date).subtract(d,"day").startOf("day").toDate(),s=r(new Date).add(d,"day").toDate();return e.jsx("div",{className:"md:w-[260px] max-w-[260px] mx-auto",children:e.jsx(c,{value:a,minDate:t,maxDate:s,onChange:o})})},h=()=>{const[a,o]=l.useState(null);return e.jsx("div",{className:"overflow-x-auto ",children:e.jsx("div",{className:"w-[520px] mx-auto",children:e.jsx(c,{value:a,dateViewCount:2,onChange:o})})})},D=()=>{const[a,o]=l.useState([]);return e.jsx("div",{className:"md:w-[260px] max-w-[260px] mx-auto",children:e.jsx(c,{multipleSelection:!0,value:a,onChange:o})})},n="Calendar",N={title:"Calendar",desc:"Calendar component is used for categorize content with a keyword."},w=[{mdName:"Basic",mdPath:n,title:"Basic",desc:"Basic usage of Calendar.",component:e.jsx(u,{})},{mdName:"Range",mdPath:n,title:"Range",desc:"RangeCalendar have similar behavior with Calendar, but it able to select start and end date.",component:e.jsx(b,{})},{mdName:"CustomRender",mdPath:n,title:"Custom render",desc:"You can render custom day elements or apply styles & className to days with these <code>dayStyle</code>, <code>dayClassName</code> & <code>renderDay</code> props.",component:e.jsx(f,{})},{mdName:"DisabledCertainDate",mdPath:n,title:"Disabled certain date",desc:"Disabled part of dates by using <code>disabledDate</code> prop callback.",component:e.jsx(y,{})},{mdName:"DisableOutOfPeriodDate",mdPath:n,title:"Disable out of period date",desc:"Setting <code>minDate</code> & <code>maxDate</code> props to limit available date within a period.",component:e.jsx(g,{})},{mdName:"MultipleDateView",mdPath:n,title:"Multiple date view",desc:"Calender or RangeCalendar can have mutiple date view by setting <code>dateViewCount</code> more than <code>1</code>.",component:e.jsx(h,{})},{mdName:"MultipleSelection",mdPath:n,title:"Multiple selection",desc:"Calendar component allow multiple dates selection by setting <code>multipleSelection</code> props",component:e.jsx(D,{})}],x=[{component:"Calendar",api:[{propName:"dateViewCount",type:"<code>number</code>",default:"<code>1</code>",desc:"Amount of date view display in picker"},{propName:"dayClassName",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => string</code>",default:"-",desc:"Apply className to days based on argument"},{propName:"dayStyle",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => CSSProperties</code>",default:"-",desc:"Apply style to days based on argument"},{propName:"defaultMonth",type:"<code>Date</code>",default:"-",desc:"Default month for uncontrolled DatePickerRange"},{propName:"defaultView",type:"<code>'date'</code> | <code>'month'</code> | <code>'year'</code> ",default:"<code>'date'</code>",desc:"Default DatePickerRange view"},{propName:"disabledDate",type:"<code>(date: Date) => boolean</code>",default:"-",desc:"Specify the date that cannot be selected"},{propName:"disableOutOfMonth",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to disable days that out of given month"},{propName:"enableHeaderLabel",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to disable header label to trigger view change"},{propName:"firstDayOfWeek",type:"<code>'sunday'</code> | <code>'monday'</code>",default:"<code>'monday'</code>",desc:"First day of week"},{propName:"hideOutOfMonthDates",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to hide days that out of given month"},{propName:"hideWeekdays",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to hide week days"},{propName:"isDateFirstInRange",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => boolean</code>",default:"-",desc:"Highlight date as first in a range"},{propName:"isDateInRange",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => boolean</code>",default:"-",desc:"Highlight date in a range"},{propName:"isDateLastInRange",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => boolean</code>",default:"-",desc:"Highlight date as last in a range"},{propName:"labelFormat",type:"<code>string</code>",default:"<code>'~'</code>",desc:"Seperator between date display on input"},{propName:"locale",type:'<a href="https://github.com/iamkun/dayjs/tree/dev/src/locale" target="_blank" rel="noopener noreferrer"><code>dayjs locale</code></a>',default:"<code>en</code>",desc:"DatePickerRange locale"},{propName:"maxDate",type:"<code>Date</code>",default:"-",desc:"Maximum date to select"},{propName:"minDate",type:"<code>Date</code>",default:"-",desc:"Minimum  date to select"},{propName:"monthLabelFormat",type:"<code>string</code>",default:"<code>'YYYY'</code>",desc:"Month label format"},{propName:"onChange",type:"<code>function(date: Date)</code> ",default:"-",desc:"Callback when date is selected"},{propName:"onDayMouseEnter",type:"<code>function(date: Date)</code> ",default:"-",desc:"Callback when date is hovered"},{propName:"paginateBy",type:"<code>number</code>",default:"<code>dateViewCount</code> | <code>1</code>",desc:"Paginate by count of view"},{propName:"preventFocus",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Prevent focusing upon click"},{propName:"range",type:"<code>[Date | null, Date | null]</code>",default:"-",desc:"Highlight given date range"},{propName:"renderDay",type:"<code>(date: Date) => ReactNode</code>",default:"<code>false</code>",desc:"Render custome day element based on the given params"},{propName:"value",type:"<code>Date</code>",default:"-",desc:"Value of calender (Controlled)"},{propName:"weekdayLabelFormat",type:"<code>string</code>",default:"<code>'dd'</code>",desc:"Format for weekday display"},{propName:"weekendDays",type:"<code>number[]</code>",default:"<code>[0, 6]</code>",desc:"Indicate the days of weekend"},{propName:"yearLabelFormat",type:"<code>string</code>",default:"<code>'YYYY'</code>",desc:"Year label format"}]},{component:"RangeCalendar",api:[{propName:"dateViewCount",type:"<code>number</code>",default:"<code>1</code>",desc:"Amount of date view display in picker"},{propName:"dayClassName",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => string</code>",default:"-",desc:"Apply className to days based on argument"},{propName:"dayStyle",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => CSSProperties</code>",default:"-",desc:"Apply style to days based on argument"},{propName:"defaultMonth",type:"<code>Date</code>",default:"-",desc:"Default month for uncontrolled DatePickerRange"},{propName:"defaultView",type:"<code>'date'</code> | <code>'month'</code> | <code>'year'</code> ",default:"<code>'date'</code>",desc:"Default DatePickerRange view"},{propName:"disabledDate",type:"<code>(date: Date) => boolean</code>",default:"-",desc:"Specify the date that cannot be selected"},{propName:"disableOutOfMonth",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to disable days that out of given month"},{propName:"enableHeaderLabel",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to disable header label to trigger view change"},{propName:"firstDayOfWeek",type:"<code>'sunday'</code> | <code>'monday'</code>",default:"<code>'monday'</code>",desc:"First day of week"},{propName:"hideOutOfMonthDates",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to hide days that out of given month"},{propName:"hideWeekdays",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to hide week days"},{propName:"isDateFirstInRange",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => boolean</code>",default:"-",desc:"Highlight date as first in a range"},{propName:"isDateInRange",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => boolean</code>",default:"-",desc:"Highlight date in a range"},{propName:"isDateLastInRange",type:"<code>(date: Date, modifiers: {disabled: boolean, weekend: boolean, selectedInRange: boolean, selected: boolean, inRange: boolean, firstInRange: boolean, lastInRange: boolean, outOfMonth: boolean}) => boolean</code>",default:"-",desc:"Highlight date as last in a range"},{propName:"labelFormat",type:"<code>string</code>",default:"<code>'~'</code>",desc:"Seperator between date display on input"},{propName:"locale",type:'<a href="https://github.com/iamkun/dayjs/tree/dev/src/locale" target="_blank" rel="noopener noreferrer"><code>dayjs locale</code></a>',default:"<code>en</code>",desc:"DatePickerRange locale"},{propName:"maxDate",type:"<code>Date</code>",default:"-",desc:"Maximum date to select"},{propName:"minDate",type:"<code>Date</code>",default:"-",desc:"Minimum  date to select"},{propName:"monthLabelFormat",type:"<code>string</code>",default:"<code>'YYYY'</code>",desc:"Month label format"},{propName:"onChange",type:"<code>function(date: Date)</code> ",default:"-",desc:"Callback when date is selected"},{propName:"onDayMouseEnter",type:"<code>function(date: Date)</code> ",default:"-",desc:"Callback when date is hovered"},{propName:"paginateBy",type:"<code>number</code>",default:"<code>dateViewCount</code> | <code>1</code>",desc:"Paginate by count of view"},{propName:"preventFocus",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Prevent focusing upon click"},{propName:"range",type:"<code>[Date | null, Date | null]</code>",default:"-",desc:"Highlight given date range"},{propName:"renderDay",type:"<code>(date: Date) => ReactNode</code>",default:"<code>false</code>",desc:"Render custome day element based on the given params"},{propName:"singleDate",type:"<code>boolean</code> ",default:"<code>false</code>",desc:"Only one date can be selected"},{propName:"value",type:"<code>[Date | null, Date | null]</code>",default:"-",desc:"Value of calender (Controlled)"},{propName:"weekdayLabelFormat",type:"<code>string</code>",default:"<code>'dd'</code>",desc:"Format for weekday display"},{propName:"weekendDays",type:"<code>number[]</code>",default:"<code>[0, 6]</code>",desc:"Indicate the days of weekend"},{propName:"yearLabelFormat",type:"<code>string</code>",default:"<code>'YYYY'</code>",desc:"Year label format"}]}],$=()=>e.jsx(i,{header:N,demos:w,api:x});export{$ as default};
