import{j as i}from"./index-b09faefa.js";import{S as t}from"./SyntaxHighlighter-e97b96e2.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-f69b773e.js";import"./extends-98964cd2.js";const a=()=>i.jsxs(i.Fragment,{children:[i.jsxs("p",{children:["To initialize the app direction, simply set"," ",i.jsx("code",{children:"direction"})," field as",i.jsx("code",{children:"'ltr'"})," or ",i.jsx("code",{children:"'rtl'"})," in"," ",i.jsx("code",{children:"src/configs/theme.config.ts"}),". For example:"]}),i.jsx(t,{language:"ts",children:`export const themeConfig = {
	...
	direction: 'rtl'
}`}),i.jsxs("div",{className:"mt-10",id:"hook",children:[i.jsx("h5",{children:"Hook"}),i.jsx("p",{className:"mt-1",children:"You can access or update the direction in a component via our prepared hook."}),i.jsx(t,{language:"tsx",children:`import React from 'react'
import Button from '@/components/ui/Button'
import InputGroup from '@/components/ui/InputGroup'
import useDirection from '@/utils/hooks/useDirection'
import type { Direction } from '@/@types/theme';

const dirList = [
	{ value: 'ltr', label: 'LTR' },
	{ value: 'rtl', label: 'RTL' }
]

const DirectionSwitcher = () => {

	const [direction, updateDirection] = useDirection()

	const onDirChange = (val: Direction) => {
		updateDirection(val)
	}

	return (
		<InputGroup size="sm">
			{
				dirList.map(dir => (
					<Button 
						key={dir.value}
						active={direction === dir.value}
						onClick={() => onDirChange(dir.value)}
					>
						{dir.label}
					</Button>
				))
			}
		</InputGroup>
	)
}

export default DirectionSwitcher
`})]})]});export{a as default};
