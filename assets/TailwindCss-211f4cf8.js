import{j as e}from"./index-a75c2214.js";import{A as t}from"./Alert-a3186a3f.js";import{S as i}from"./SyntaxHighlighter-39525d8f.js";import"./useTimeout-af422490.js";import"./index.esm-ba9f59e9.js";import"./CloseButton-aa3449ba.js";import"./StatusIcon-7df21d38.js";import"./Views-10f1927c.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const g=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Tailwind CSS is a utility-first CSS framework with predefined classes that you can use to build and design the UI directly in the JSX. We use Tailwind as our core CSS framework, most of the UI in Elstar is built entirely with it features, so you can easily update the theme & base by altering"," ",e.jsx("code",{children:"tailwind.config.cjs"})," under the root directory."]}),e.jsxs("div",{className:"mt-10",id:"tooling",children:[e.jsx("h5",{children:"Tooling"}),e.jsxs("p",{className:"mt-1",children:["If you are using VS Code as your IDE, we suggest to install"," ",e.jsx("a",{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",rel:"noreferrer",target:"_blank",children:"Tailwind CSS IntelliSense"})," ","plugin, it provides autocomplete, syntax highlighting, and linting based on your Tailwind config which can speed up your development."]})]}),e.jsx("div",{className:"mt-10",id:"note",children:e.jsxs(t,{showIcon:!0,type:"info",title:"Note",children:["Some of our UI component use sematic class with tailwind"," ",e.jsx("code",{children:"@apply"})," directive underlying, in some cases, applying tailwind classes on these component might not working, you might need to use ",e.jsx("code",{children:"!important"})," ","modifier to override the default high specificity selectors."]})}),e.jsx("p",{children:"You can make any utility important by adding a ! character to the beginning, E.g:"}),e.jsx(i,{language:"jsx",children:'<Dropdown className="!bg-red-500" />'}),e.jsxs("p",{children:["You can always visit the official doc to find out classes usage & Tailwind configuration:"," ",e.jsx("a",{href:"https://tailwindcss.com/",rel:"noreferrer",target:"_blank",children:"https://tailwindcss.com/"})]}),e.jsxs("div",{className:"mt-10",id:"tooling",children:[e.jsx("h5",{children:"Safelist"}),e.jsxs("p",{className:"mt-1",children:["By default, our tailwind configuration includes every color in CSS in order to accommodate dynamic theming. However, if your application only needs a single theme color, you can simply replace the value of ",e.jsx("code",{children:"SAFELIST_COLORS"})," in the tailwind.config.cjs file with your desired theme color, using the ",e.jsx("code",{children:"colors."})," prefix. This will ensure that only your chosen theme color is included in the safelist. E.g"]}),e.jsx(i,{language:"ts",children:"const SAFELIST_COLORS = 'colors.cyan'"})]})]});export{g as default};
