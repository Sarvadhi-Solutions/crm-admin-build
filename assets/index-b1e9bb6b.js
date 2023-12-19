import{j as t}from"./index-a75c2214.js";import{D as o}from"./DemoComponentApi-81a65b6e.js";import{D as e}from"./DemoLayout-2a08f2a3.js";import{S as r}from"./SyntaxHighlighter-39525d8f.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";import"./index-129cb3d5.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const i=()=>t.jsx(r,{language:"js",children:`import useAuthority from '@/utils/hooks/useAuthority'

const Component = () => {

	const { userAuthority = [], authority = [], children } = props

	const userAuthority = ['USER']

	const authority = ['ADMIN', 'USER']

	const roleMatched = useAuthority(userAuthority, authority)

	return (...)
}
`}),s="UseAuthorityDoc",p={title:"useAuthority",desc:"useAuthority hook help to check whether the current user has permmision to access."},m=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:t.jsx(i,{})}],a=[{component:"useAuthority",api:[{propName:"userAuthority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"List of the user roles"},{propName:"authority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"List of roles that allow to access"}]}],u=t.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"roleMatched",type:"<code>boolean</code>",default:"-",desc:"Result of authority match"}]}]}),w=()=>t.jsx(e,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:m,api:a,mdPrefixPath:"utils",extra:u,keyText:"param"});export{w as default};
