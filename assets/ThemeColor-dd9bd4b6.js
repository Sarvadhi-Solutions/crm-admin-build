import{j as e}from"./index-a75c2214.js";import{S as r}from"./SyntaxHighlighter-39525d8f.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const a=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["To config the app theme color, you can visit"," ",e.jsx("code",{children:"src/configs/theme.config.ts"})," changing the"," ",e.jsx("code",{children:"themeColor"})," & ",e.jsx("code",{children:"primaryColorLevel"})," field based on"," ",e.jsx("a",{href:"https://tailwindcss.com/docs/customizing-colors",rel:"noreferrer",target:"_blank",children:"tailwind preset color palette"}),"."]}),e.jsx(r,{language:"ts",children:`export const themeConfig = {
    themeColor: 'rose',
    primaryColorLevel: 500,
    ...
}
`}),e.jsxs("p",{children:["In general, all all"," ",e.jsx("a",{href:"https://tailwindcss.com/docs/customizing-colors",rel:"noreferrer",target:"_blank",children:"tailwind preset color palette"})," ","can be applied to the themeConfig, but since not all colors are suitable for the template, we recommend keeping the"," ",e.jsx("code",{children:"primaryColorLevel"})," within the range of 400 to 900 and avoiding gray like colors."]})]});export{a as default};
