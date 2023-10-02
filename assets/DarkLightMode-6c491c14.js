import{j as e}from"./index-c3e9fa7c.js";import{S as o}from"./SyntaxHighlighter-dfe70d12.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";const d=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["To initialize dark or light mode to the app, simply set"," ",e.jsx("code",{children:"mode"})," field as",e.jsx("code",{children:"'light'"})," or ",e.jsx("code",{children:"'dark'"})," ","in ",e.jsx("code",{children:"src/configs/theme.config.ts"}),". For example:"]}),e.jsx(o,{language:"ts",children:`export const themeConfig = {
    ...
    mode: 'dark'
}`}),e.jsxs("div",{className:"mt-10",id:"hook",children:[e.jsx("h5",{children:"Hook"}),e.jsx("p",{className:"mt-1",children:"You can access or update the mode in a component via our prepared hook."}),e.jsx(o,{language:"tsx",children:`import React from 'react'
import Switcher from '@/components/ui/Switcher'
import useDarkMode from '@/utils/hooks/useDarkMode'

const ModeSwitcher = () => {

    const [isDark, setIsDark] = useDarkMode()

    const onSwitchChange = (checked: boolean) => {
        setIsDark(checked ? 'dark' : 'light')
    }

    return (
        <div>
            <Switcher 
                value={isDark}
                onChange={checked => onSwitchChange(checked)}
            />
        </div>
    )
}

export default ModeSwitcher`})]})]});export{d as default};
