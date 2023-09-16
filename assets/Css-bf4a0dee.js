import{j as e}from"./index-6767ac81.js";import{S as s}from"./SyntaxHighlighter-7b64a68f.js";import"./toConsumableArray-af8bf1ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";const o=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Although we have been using TailwindCss, we also have some underlying styling that is written in the css, which located at"," ",e.jsx("code",{children:"src/assets/styles/*"}),". Due to some dependencies of tailwind, we are using Postcss as our preprocessor."]}),e.jsx("p",{children:"This is our styles folder structure"}),e.jsx(s,{children:`├── styles                     
|   ├── components               # base ui components related styles
|   ├── docs                     # docs components related styles
|   ├── tailwind                 # tailwind entry & base style
|   ├── template                 # template components related styles
|   └── index.css                # entry css
`}),e.jsxs("p",{children:["Every folders inside ",e.jsx("code",{children:"styles"})," directory contain an"," ",e.jsx("code",{children:"index.css"})," that will carry all other css files under the same directory and all these ",e.jsx("code",{children:"index.css"}),"will eventually import into the entry css."]}),e.jsxs("div",{className:"mt-10",id:"writingCss",children:[e.jsx("h5",{children:"Custom Css"}),e.jsxs("p",{className:"mt-1",children:["If in some cases tailwind is unable to meet your needs, you can add your custom css under this folder. We suggest to utilize functions & directives provided by tailwind while adding a custom css, such as ",e.jsx("code",{children:"@apply"}),","," ",e.jsx("code",{children:"@layer"}),", ",e.jsx("code",{children:"theme()"})," & etc."]}),e.jsxs("p",{children:["You can refer to the"," ",e.jsx("a",{href:"https://tailwindcss.com/docs/functions-and-directives",target:"_blank",rel:"noreferrer",children:"official documentation"})," ","for further information & usage."]})]})]});export{o as default};
