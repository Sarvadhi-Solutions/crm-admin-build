import{j as e}from"./index-21d7ce34.js";import{D as s}from"./DoubleSidedImage-ee1e3584.js";import{S as i}from"./SyntaxHighlighter-ef52ffff.js";import{D as r}from"./DemoComponentApi-f2c63353.js";import"./toConsumableArray-26f6508e.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./index-83ec9673.js";import"./index.esm-b042e3c5.js";import"./index-d93ff48a.js";const c=({children:o})=>e.jsx("div",{className:"border border-gray-200 dark:border-gray-600 rounded-lg my-4",children:o}),g=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Elstar provide 6 types of app layouts & 3 types of auth layouts, all layouts component can be found under directory"," ",e.jsx("code",{children:"src/components/layout/*"}),"and all the components used within layouts can be found under"," ",e.jsx("code",{children:"src/components/template/*"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Classic - ",e.jsx("code",{children:"'classic'"})]}),e.jsxs("li",{children:["Modern - ",e.jsx("code",{children:"'modern'"})]}),e.jsxs("li",{children:["StackedSide - ",e.jsx("code",{children:"'stackedSide'"})]}),e.jsxs("li",{children:["Simple - ",e.jsx("code",{children:"'simple'"})]}),e.jsxs("li",{children:["Decked - ",e.jsx("code",{children:"'decked'"})]}),e.jsxs("li",{children:["Blank - ",e.jsx("code",{children:"'blan'"})]})]}),e.jsx("div",{className:"mt-10",id:"configuringLayout",children:e.jsxs("div",{className:"mt-10",id:"classic",children:[e.jsx("h5",{children:"Configuring Layout"}),e.jsxs("p",{className:"mt-1",children:["You can config the initial layout in"," ",e.jsx("code",{children:"src/configs/theme.config.ts"})," with the string value above"]}),e.jsx(i,{language:"js",children:`export const themeConfig = {
    ...
    layout: {
        type: 'modern',
        ...
    },
}`}),e.jsxs("p",{children:["Here's available values & key for configuring the"," ",e.jsx("code",{children:"layout"})," field"]}),e.jsx(r,{hideApiTitle:!0,keyText:"properties",api:[{api:[{propName:"type",type:"<code>'blank'</code>  | <code>'classic'</code> | <code>'modern'</code> | <code>'simple'</code> | <code>'decked'</code> | <code>'stackedSide'</code>",default:"<code>'modern'</code>",desc:"Type of the application layout"},{propName:"sideNavCollapse",type:"<code>boolean</code>",default:"<code>false</code>",desc:"Whether to collapse the side navigation (only only applicable when <code>type</code> is <code>'classic'</code> or <code>'modern'</code>)"}]}]})]})}),e.jsxs("div",{className:"mt-10",id:"layoutTypes",children:[e.jsx("h5",{children:"Layout types"}),e.jsx("p",{className:"mt-1",children:"The following explained each of layouts in details."}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsxs("div",{id:"classic",children:[e.jsx("h6",{children:"Classic Layout"}),e.jsx(c,{children:e.jsx(s,{className:"my-0 rounded-lg",src:"/img/others/docs/classic.jpg",darkModeSrc:"/img/others/docs/classic-dark.jpg"})}),e.jsxs("p",{className:"mb-1",children:["config value: ",e.jsx("code",{children:"'classic'"})]}),e.jsx("p",{className:"my-1",children:"template components used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," -"," ",e.jsx("code",{children:"src/views/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Header"})," -"," ",e.jsx("code",{children:"src/components/template/Header.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SideNavToggle"})," -"," ",e.jsx("code",{children:"src/components/template/SideNavToggle.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Search.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LanguageSelector"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/LanguageSelector.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notification"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Notification.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SidePanel"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/SidePanel/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UserDropdown"})," -"," ",e.jsx("code",{children:"src/components/template/UserDropdown.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SideNav"})," -"," ",e.jsx("code",{children:"src/components/template/SideNav.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MobileNav"})," -"," ",e.jsx("code",{children:"src/components/template/MobileNav.tsx"})]})]})]})}),e.jsx("li",{children:e.jsxs("div",{id:"modern",children:[e.jsx("h6",{children:"Modern Layout"}),e.jsx(c,{children:e.jsx(s,{className:"my-0 rounded-lg",src:"/img/others/docs/modern.jpg",darkModeSrc:"/img/others/docs/modern-dark.jpg"})}),e.jsxs("p",{className:"mb-1",children:["config value: ",e.jsx("code",{children:"'modern'"})]}),e.jsx("p",{className:"my-1",children:"template components used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," -"," ",e.jsx("code",{children:"src/views/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Header"})," -"," ",e.jsx("code",{children:"src/components/template/Header.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SideNavToggle"})," -"," ",e.jsx("code",{children:"src/components/template/SideNavToggle.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Search.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LanguageSelector"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/LanguageSelector.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notification"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Notification.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SidePanel"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/SidePanel/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UserDropdown"})," -"," ",e.jsx("code",{children:"src/components/template/UserDropdown.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SideNav"})," -"," ",e.jsx("code",{children:"src/components/template/SideNav.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MobileNav"})," -"," ",e.jsx("code",{children:"src/components/template/MobileNav.tsx"})]})]})]})}),e.jsx("li",{children:e.jsxs("div",{id:"stackedSide",children:[e.jsx("h6",{children:"Stacked Side Layout"}),e.jsx(c,{children:e.jsx(s,{className:"my-0 rounded-lg",src:"/img/others/docs/stackedSide.jpg",darkModeSrc:"/img/others/docs/stackedSide-dark.jpg"})}),e.jsxs("p",{className:"mb-1",children:["config value:"," ",e.jsx("code",{children:"'stackedSide'"})]}),e.jsx("p",{className:"my-1",children:"template components used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," -"," ",e.jsx("code",{children:"src/views/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Header"})," -"," ",e.jsx("code",{children:"src/components/template/Header.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SideNavToggle"})," -"," ",e.jsx("code",{children:"src/components/template/SideNavToggle.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Search.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LanguageSelector"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/LanguageSelector.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notification"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Notification.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SidePanel"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/SidePanel/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UserDropdown"})," -"," ",e.jsx("code",{children:"src/components/template/UserDropdown.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SplittedSideNav"})," -"," ",e.jsx("code",{children:"src/components/template/SplittedSideNav.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MobileNav"})," -"," ",e.jsx("code",{children:"src/components/template/MobileNav.tsx"})]})]})]})}),e.jsx("li",{children:e.jsxs("div",{id:"Simple",children:[e.jsx("h6",{children:"Simple Layout"}),e.jsx(c,{children:e.jsx(s,{className:"my-0 rounded-lg",src:"/img/others/docs/simple.jpg",darkModeSrc:"/img/others/docs/simple-dark.jpg"})}),e.jsxs("p",{className:"mb-1",children:["config value: ",e.jsx("code",{children:"'simple'"})]}),e.jsx("p",{className:"my-1",children:"template components used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," -"," ",e.jsx("code",{children:"src/views/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Header"})," -"," ",e.jsx("code",{children:"src/components/template/Header.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HeaderLogo"})," -"," ",e.jsx("code",{children:"src/components/template/HeaderLogo.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HorizontalNav"})," -"," ",e.jsx("code",{children:"src/components/template/HorizontalNav.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Search.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LanguageSelector"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/LanguageSelector.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notification"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Notification.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SidePanel"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/SidePanel/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UserDropdown"})," -"," ",e.jsx("code",{children:"src/components/template/UserDropdown.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MobileNav"})," -"," ",e.jsx("code",{children:"src/components/template/MobileNav.tsx"})]})]})]})}),e.jsx("li",{children:e.jsxs("div",{id:"Decked",children:[e.jsx("h6",{children:"Decked Layout"}),e.jsx(c,{children:e.jsx(s,{className:"my-0 rounded-lg",src:"/img/others/docs/decked.jpg",darkModeSrc:"/img/others/docs/decked-dark.jpg"})}),e.jsxs("p",{className:"mb-1",children:["config value: ",e.jsx("code",{children:"'decked'"})]}),e.jsx("p",{className:"my-1",children:"template components used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," -"," ",e.jsx("code",{children:"src/views/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Header"})," -"," ",e.jsx("code",{children:"src/components/template/Header.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HeaderLogo"})," -"," ",e.jsx("code",{children:"src/components/template/HeaderLogo.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SecondaryHeader"})," -"," ",e.jsx("code",{children:"src/components/template/SecondaryHeader.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Search.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LanguageSelector"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/LanguageSelector.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notification"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/Notification.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SidePanel"})," (optional) -"," ",e.jsx("code",{children:"src/components/template/SidePanel/index.ts"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UserDropdown"})," -"," ",e.jsx("code",{children:"src/components/template/UserDropdown.tsx"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MobileNav"})," -"," ",e.jsx("code",{children:"src/components/template/MobileNav.tsx"})]})]})]})}),e.jsx("li",{children:e.jsxs("div",{id:"Blank",children:[e.jsx("h6",{children:"Blank Layout"}),e.jsx(c,{children:e.jsx(s,{className:"my-0 rounded-lg",src:"/img/others/docs/blank.jpg",darkModeSrc:"/img/others/docs/blank-dark.jpg"})}),e.jsxs("p",{className:"mb-1",children:["config value: ",e.jsx("code",{children:"'blank'"})]}),e.jsx("p",{className:"my-1",children:"template components used:"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," -"," ",e.jsx("code",{children:"src/views/index.ts"})]})})]})})]})]}),e.jsxs("div",{className:"mt-10",id:"overridingLayouts",children:[e.jsx("h5",{children:"Overriding layouts"}),e.jsxs("p",{className:"mt-1",children:["In general, all route views will follow the settings of the layout in ",e.jsx("code",{children:"theme.config.ts"}),". However, if there are some cases where you want to show a different layout in a certiain route view, you can the layout value you wish under the route ",e.jsx("code",{children:"meta"})," to overide the current layout as we mentioned in ",e.jsx("strong",{children:"Routing"})," guide."]}),e.jsx(i,{language:"js",children:`export const protectedRoutes = [
    {
        key: 'a-unique-id-for-this-view'
        path: 'path',
        component: React.lazy(() => import('views/Component')),
        authority: [],
        meta: {
            ...,
            layout: 'blank'
        }
    },			
]`})]}),e.jsxs("div",{className:"mt-10",id:"authLayouts",children:[e.jsx("h5",{children:"Auth layouts"}),e.jsxs("p",{children:["Configuring auth layout is slightly different from the above, just need to visit"," ",e.jsx("code",{children:"src/components/layout/AuthLayout/index.ts"})," and replace the wrapper component. For example, switching"," ",e.jsx("code",{children:"Side"})," to ",e.jsx("code",{children:"Cover"})]}),e.jsx(i,{language:"js",wrapLines:!0,showLineNumbers:!0,lineProps:o=>{const n={display:"block"};return[4,23,24,25].includes(o)?n.backgroundColor="#00ff002e":[3,20,21,22].includes(o)&&(n.backgroundColor="#ff00001f"),{style:n}},children:`import React from 'react'
import Side from './Side'
// import Cover from './Cover'
import Cover from './Cover'
// import Simple from './Simple'
import View from 'views'
import { useAppSelector } from '@/store';
import { LAYOUT_TYPE_BLANK } from '@/constants/theme.constant'

const AuthLayout = () => {

    const layoutType = useAppSelector((state) => state.theme.layout.type)

    return (
        <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
            {
                layoutType === LAYOUT_TYPE_BLANK ? 
                <View {...props}/> 
                : 
                <Side>
                    <View {...props}/>
                </Side>
                <Cover>
                    <View {...props}/>
                </Cover>
            }
        </div>
    )
}

export default AuthLayout`})]})]});export{g as default};
