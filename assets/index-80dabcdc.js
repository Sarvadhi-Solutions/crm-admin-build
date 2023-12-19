import{j as t}from"./index-a75c2214.js";import{D as e}from"./DemoComponentApi-81a65b6e.js";import{D as s}from"./DemoLayout-2a08f2a3.js";import{S as o}from"./SyntaxHighlighter-39525d8f.js";import"./index-00cb4b16.js";import"./index.esm-6e5dfffa.js";import"./index-129cb3d5.js";import"./AdaptableCard-157123a1.js";import"./Card-f8be7cf5.js";import"./Views-10f1927c.js";import"./Affix-a6c03f55.js";import"./Button-13333fa1.js";import"./context-e419e330.js";import"./Tooltip-b12e8e28.js";import"./usePopper-c93af6af.js";import"./index.esm-d6edb43c.js";import"./index-6d61f856.js";import"./index.esm-ba9f59e9.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-d3906663.js";import"./extends-98964cd2.js";const r=()=>t.jsx(o,{language:"js",children:`import useAuth from '@/utils/hooks/useAuth'

const Component = () => {

	const { authenticated, signIn, signOut } = useAuth()

	const handleSignIn = async ({ userName, password }) => {
	
		const result = await signIn({ userName, password })

		if (result.status === 'failed') {
			setMessage(result.message)
		}
	}

	const handleSignout = () => {
		signOut()
	}

	return (...)
}
`}),a="UseAuthDoc/",i={title:"useAuth",desc:"A hook that enables any component to get the current auth state."},n=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:t.jsx(r,{})}],m=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"authenticated",type:"<code>boolean</code>",default:"-",desc:"State of current authencation"},{propName:"signIn",type:"<code>({userName: string, password: string}) => ({status: 'success' | 'failed', message: string})</code>",default:"-",desc:"Sign in handler, return status & message as result"},{propName:"signOut",type:"<code>() => void</code>",default:"-",desc:"Sign out handler"}]}]}),b=()=>t.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:n,mdPrefixPath:"utils",extra:m,keyText:"param"});export{b as default};
