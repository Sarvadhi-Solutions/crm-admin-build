import{j as e}from"./index-5b083722.js";import{D as i}from"./DemoLayout-c496ff20.js";import{A as o}from"./ActionLink-18017114.js";import"./AdaptableCard-96bc8e59.js";import"./Card-90f8ec69.js";import"./Views-2896b481.js";import"./Affix-db2c60bb.js";import"./Button-f1066bd7.js";import"./context-6fe9373e.js";import"./Tooltip-25cec1e2.js";import"./usePopper-a11bdbe9.js";import"./index.esm-2966f74b.js";import"./index-3898d2cc.js";import"./index.esm-577c3d7b.js";import"./SyntaxHighlighter-efa92768.js";import"./toConsumableArray-d895a881.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-c682b4c7.js";import"./DemoComponentApi-8e0ebe63.js";import"./index-2563f7cd.js";import"./index.esm-10704a6d.js";import"./useThemeClass-a72d650b.js";const n=()=>e.jsx(o,{to:"/docs/documentation/introduction",children:"Navigate"}),r=()=>e.jsx(o,{to:"/docs/documentation/introduction",themeColor:!1,children:"Navigate"}),c=()=>e.jsx(o,{reloadDocument:!0,to:"https://www.google.com/",target:"_blank",children:"Navigate"}),t="ActionLinkDoc",a={title:"ActionLink",desc:"ActionLink lets the user navigate to another page by clicking or tapping on it."},s=[{mdName:"Basic",mdPath:t,title:"Basic",desc:"Basic usage.",component:e.jsx(n,{})},{mdName:"ThemeColor",mdPath:t,title:"Theme color",desc:"You can disable the default theme color applied to the ActionLink by setting <code>themeColor</code> to false.",component:e.jsx(r,{})},{mdName:"Hyperlink",mdPath:t,title:"Hyperlink",desc:"You can use ActionLink as hyperlink as well without using <code>to</code> props to define the destination.",component:e.jsx(c,{})}],d=[{component:"ActionLink",api:[{propName:"replace",type:"<code>boolean</code>",default:"-",desc:"When true, clicking the link will replace the current entry in the history stack instead of adding a new one"},{propName:"state",type:"<code>any</code>",default:"-",desc:"State to persist to the location as <code>Link</code> component in <code>react-router</code>"},{propName:"themeColor",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to apply theme color on this link"},{propName:"to",type:"<code>string</code> | <code>{pathName: string, search: string, hash: string}</code>",default:"-",desc:"Describes a location that is the destination of some navigation"}]}],T=()=>e.jsx(i,{innerFrame:!1,header:a,demos:s,api:d,mdPrefixPath:"shared"});export{T as default};
