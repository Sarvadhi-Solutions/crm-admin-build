import{j as t}from"./index-2a02f09f.js";import{D as e}from"./DemoComponentApi-c288533a.js";import{D as s}from"./DemoLayout-62d26969.js";import{S as o}from"./SyntaxHighlighter-3e4bb9d6.js";import"./index-ff9062dc.js";import"./index.esm-4f607dea.js";import"./index-6bbe4810.js";import"./AdaptableCard-260ffff4.js";import"./Card-de52f0bd.js";import"./Views-597fd265.js";import"./Affix-f01dbede.js";import"./Button-3d6c325f.js";import"./context-ccc0a902.js";import"./Tooltip-7716d794.js";import"./usePopper-1bbb94fb.js";import"./index.esm-c0bac851.js";import"./index-30fffd86.js";import"./index.esm-c61f0406.js";import"./toConsumableArray-648e2274.js";import"./objectWithoutPropertiesLoose-df62547b.js";const r=()=>t.jsx(o,{language:"js",children:`import useAuth from '@/utils/hooks/useAuth'

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
`}),a="UseAuthDoc/",i={title:"useAuth",desc:"A hook that enables any component to get the current auth state."},n=[{mdName:"Example",mdPath:a,title:"Example",desc:"",component:t.jsx(r,{})}],m=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"authenticated",type:"<code>boolean</code>",default:"-",desc:"State of current authencation"},{propName:"signIn",type:"<code>({userName: string, password: string}) => ({status: 'success' | 'failed', message: string})</code>",default:"-",desc:"Sign in handler, return status & message as result"},{propName:"signOut",type:"<code>() => void</code>",default:"-",desc:"Sign out handler"}]}]}),O=()=>t.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:n,mdPrefixPath:"utils",extra:m,keyText:"param"});export{O as default};
