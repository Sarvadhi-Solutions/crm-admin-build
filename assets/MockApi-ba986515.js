import{j as e}from"./index-c3e9fa7c.js";import{S as s}from"./SyntaxHighlighter-dfe70d12.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./toConsumableArray-ab33ca8c.js";import"./extends-98964cd2.js";const c=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"A mock API is an API that responds data just like a real API to do, however it is just imitating the data & response. This is extremely useful in many cases, like when the API you rely on isn't fully developed yet, or simulate API calls on unit testing."}),e.jsxs("p",{children:["Elstar uses"," ",e.jsx("a",{href:"https://miragejs.com/",target:"_blank",rel:"noreferrer",children:"miragejs"})," ","for mocking API calls, all the api interaction in our demo are work under miragejs."]}),e.jsxs("div",{className:"mt-10",id:"disableMockApi",children:[e.jsx("h5",{children:"Disabled mock api"}),e.jsxs("p",{className:"mt-1",children:["Mock api was enabled by default in our"," ",e.jsx("strong",{children:"starter-kit"}),", you can turn in on via setting"," ",e.jsx("code",{children:"enableMock"})," field to false in"," ",e.jsx("code",{children:"src/configs/app.config.ts"})," to turn off the mock api."]}),e.jsx(s,{language:"ts",children:`const appConfig = {
    ...,
    enableMock: false
}`})]}),e.jsxs("div",{className:"mt-10",id:"usingMockApi",children:[e.jsx("h5",{children:"Using mock api"}),e.jsx("p",{className:"mt-1",children:"If you have intent to use mock api, you can follow the steps below to create a fake db data & api"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Setup"}),e.jsxs("p",{className:"mt-1",children:["Visit ",e.jsx("code",{children:"src/mock/index.ts"}),", and here is the overall configuration of mirage"]}),e.jsx(s,{language:"ts",children:`export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                ...
            })
        },
        routes() {
            ...
        },
    })
}`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Add static data"}),e.jsx("p",{className:"mt-1",children:"Now we can add some data to the fake db"}),e.jsx(s,{language:"ts",children:`return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                usersData: [
                    {
                        id: '1',
                        name: 'Carolyn Perkins',
                    },
                    {
                        id: '2',
                        name: 'Terrance Moreno',
                    },
                    {
                        id: '3',
                        name: 'Ron Vargas',
                    },
                ]
            })
        },
        ...
    })
}`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Create mock api"}),e.jsx("p",{className:"mt-1",children:"Created a mock api under route"}),e.jsx(s,{language:"ts",children:`return createServer({
        ...
        routes() {
            this.get('api/getUsers', schema => schema.db.usersData)
        },
})`})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"And now you can make request to this api & get the static data just setted above as response"}),e.jsx(s,{language:"ts",children:`// service
import ApiService from "./ApiService"

type GetUserResponse = {
    id: string
    name: string
    email: string
}[]

export async function apiGetUsers () {
    return ApiService.fetchData<GetUserResponse>({
        url: '/api/getUsers',
        method: 'get'
    })
}`}),e.jsx(s,{language:"ts",children:`// component
import { useEffect } from 'react'
import { apiGetUsers } from './YourService.ts'

const YourComponent = () => {

    const fetchData = async () => {
        try {
            const resp = await apiGetUsers()
            console.log(resp.data)
        } catch (errors) {
            ...handle errors
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        ...
    )
}`})]})]});export{c as default};
