import{am as ee,an as ue,ao as fe,ap as he,r as h,a as v,j as e,c as D,aq as ae,ab as se,ai as le,at as ge,ar as je}from"./index-21d7ce34.js";import{A as be}from"./AdaptableCard-1403a507.js";import{M as L}from"./index-24a2595e.js";import{B as ve}from"./Badge-0547788a.js";import{S as $}from"./ScrollBar-83d9acc4.js";import{D as ye}from"./Drawer-08bde54d.js";import{B as j}from"./Button-6c3081fd.js";import{D as Ne}from"./Dialog-fcbd4cee.js";import{ac as Me,ad as Ce,n as te,W as we,ae as re,X as ie,T as ne,af as ke,ag as ce,ah as K,ai as W,aj as Se,Z as Re,ak as Be,H as De,al as Ie}from"./index.esm-3f5f076a.js";import{F as Le,a as Ee,b as Fe,c as C,d as w}from"./formik.esm-b31c216f.js";import{I as R}from"./Input-b18c5be2.js";import{t as He,N as Te}from"./toast-60e590e4.js";import{R as Oe}from"./RichTextEditor-87508b29.js";import{F as Ae,G as ze}from"./CrmService-ca976601.js";import{c as $e,a as k}from"./index.esm-078c9db1.js";import{u as q}from"./useResponsive-fe0fbc39.js";import{A as oe}from"./index-60ecab9e.js";import{D as qe}from"./DoubleSidedImage-ee1e3584.js";import{C as de}from"./Card-c016d7e4.js";import{D as V}from"./index-cbaf419c.js";import{I as Pe}from"./index-5f8b7824.js";import{c as E}from"./cloneDeep-c49c3d8a.js";import{I as Ge}from"./IconText-e7277b15.js";import{T as Ke}from"./Tag-49702b6e.js";import{H as We}from"./index-d93ff48a.js";import{d as Ve,e as Q,f as Qe,g as Xe,h as Ze}from"./index.esm-a8cf6609.js";import{i as X}from"./Views-aa9d3067.js";import"./index-a936af3e.js";import"./useUniqueId-18384f8e.js";import"./toString-839cbc0d.js";import"./index-e63aba64.js";import"./CloseButton-8f19e7bd.js";import"./context-ff20449e.js";import"./index-99dab15c.js";import"./isNil-e652d611.js";import"./get-db5a0269.js";import"./_MapCache-e6bfd31d.js";import"./useTimeout-c424fd3c.js";import"./StatusIcon-cb41def8.js";import"./chainedFunction-070f832c.js";import"./_baseIsEqual-06f63cf1.js";import"./_Uint8Array-00b9b100.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-1a8549c9.js";import"./usePopper-50e8ad5a.js";import"./useUncertainRef-1f87b20a.js";import"./useRootClose-aa5c19cb.js";import"./_getPrototype-2575ec81.js";const P="crmMail",F=ee(P+"/getMails",async s=>(await Ae(s)).data),H=ee(P+"/getMail",async s=>(await ze(s)).data),_e={mailListLoading:!1,mailLoading:!1,mailList:[],mail:{},selectedMailId:"",sideBarExpand:!0,mobileSideBarExpand:!1,selectedCategory:{},reply:!1,newMessageDialog:!1},me=ue({name:`${P}/state`,initialState:_e,reducers:{updateMailList:(s,a)=>{s.mailList=a.payload},updateMail:(s,a)=>{s.mail=a.payload},updateMailId:(s,a)=>{a.payload&&(s.mailLoading=!0),s.selectedMailId=a.payload},updateReply:(s,a)=>{s.reply=a.payload},toggleSidebar:(s,a)=>{s.sideBarExpand=a.payload},toggleMobileSidebar:(s,a)=>{s.mobileSideBarExpand=a.payload},toggleNewMessageDialog:(s,a)=>{s.newMessageDialog=a.payload},updateSelectedCategory:(s,a)=>{s.selectedCategory=a.payload}},extraReducers:s=>{s.addCase(F.fulfilled,(a,l)=>{a.mailListLoading=!1,a.mailList=l.payload}).addCase(F.pending,a=>{a.mailListLoading=!0}).addCase(H.fulfilled,(a,l)=>{a.mailLoading=!1,a.mail=l.payload}).addCase(H.pending,a=>{a.mailLoading=!0})}}),{updateMailList:Z,updateMail:T,updateMailId:I,updateReply:B,toggleSidebar:Je,toggleMobileSidebar:xe,toggleNewMessageDialog:O,updateSelectedCategory:_}=me.actions,Ue=me.reducer,Ye=fe({data:Ue}),u=he,ea=$e().shape({title:k().required("Title Required"),to:k().required("Receiver Required"),cc:k(),bcc:k(),message:k()}),G=h.forwardRef((s,a)=>{const{mode:l="new",mail:m={}}=s,c=h.useRef(null),n=h.useRef(null);h.useImperativeHandle(a,()=>({formikRef:c.current,editorRef:n.current}));const o=v(),[t,p]=h.useState(!1),[d,g]=h.useState(!1),b=()=>{p(!t)},N=()=>{g(!d)},r=()=>{He.push(e.jsx(Te,{type:"success",title:"Mail Sent"}),{placement:"top-center"}),l==="reply"&&o(B(!1)),l==="new"&&o(O(!1))};return e.jsx(Le,{innerRef:c,initialValues:{title:l==="reply"?`Re: ${m==null?void 0:m.title}`:"",to:l==="reply"&&(m==null?void 0:m.from)||"",cc:"",bcc:"",message:""},validationSchema:ea,onSubmit:()=>{r()},children:({touched:i,errors:x})=>e.jsx(Ee,{children:e.jsxs(Fe,{children:[e.jsx(C,{className:l==="reply"?"!hidden":"",label:"Title",labelClass:"!justify-start",invalid:x.title&&i.title,errorMessage:x.title,children:e.jsx(w,{autoComplete:"off",name:"title",component:R})}),e.jsx(C,{className:l==="reply"?"!hidden":"",label:"To",labelClass:"!justify-start",invalid:x.to&&i.to,errorMessage:x.to,children:e.jsx(w,{autoComplete:"off",name:"to",component:R,suffix:e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"cursor-pointer select-none hover:underline ltr:mr-2 rtl:ml-2",onClick:b,children:"Cc"}),e.jsx("span",{className:"cursor-pointer select-none hover:underline",onClick:N,children:"Bcc"})]})})}),e.jsx(C,{className:t?"":"!hidden",label:"Cc",labelClass:"!justify-start",invalid:x.cc&&i.cc,errorMessage:x.cc,children:e.jsx(w,{autoComplete:"off",name:"cc",component:R})}),e.jsx(C,{className:d?"":"!hidden",label:"Bcc",labelClass:"!justify-start",invalid:x.bcc&&i.bcc,errorMessage:x.bcc,children:e.jsx(w,{autoComplete:"off",name:"bcc",component:R})}),e.jsx(C,{label:l==="new"?"Message":"",className:"mb-0",labelClass:"!justify-start",invalid:x.message&&i.message,errorMessage:x.message,children:e.jsx(w,{name:"message",children:({field:y,form:f})=>e.jsx(Oe,{ref:n,value:y.value,onChange:M=>f.setFieldValue(y.name,M)})})})]})})})});G.displayName="MailEditor";const aa=()=>{const s=v(),a=h.useRef(null),l=u(o=>o.crmMail.data.newMessageDialog),m=()=>{s(O(!0))},c=()=>{s(O(!1))},n=()=>{var o,t;(t=(o=a.current)==null?void 0:o.formikRef)==null||t.submitForm()};return e.jsxs(e.Fragment,{children:[e.jsx(j,{block:!0,variant:"solid",icon:e.jsx(Me,{}),onClick:m,children:"New Message"}),e.jsxs(Ne,{isOpen:l,onClose:c,onRequestClose:c,children:[e.jsx("h5",{className:"mb-4",children:"New Message"}),e.jsx("div",{className:"max-h-[400px] overflow-y-auto px-1",children:e.jsx(G,{ref:a,mode:"new"})}),e.jsxs("div",{className:"text-right mt-4",children:[e.jsx(j,{className:"ltr:mr-2 rtl:ml-2",variant:"plain",onClick:c,children:"Discard"}),e.jsx(j,{variant:"solid",onClick:n,children:"Send"})]})]})]})},A=[{value:"inbox",label:"Inbox",icon:e.jsx(Ce,{})},{value:"sentItem",label:"Sent Item",icon:e.jsx(te,{})},{value:"draft",label:"Draft",icon:e.jsx(we,{})},{value:"starred",label:"Starred",icon:e.jsx(re,{})},{value:"deleted",label:"Deleted",icon:e.jsx(ie,{})}],z=[{value:"work",label:"Work",dotClass:"bg-blue-500"},{value:"private",label:"Private",dotClass:"bg-indigo-500"},{value:"important",label:"Important",dotClass:"bg-red-500"}],{MenuItem:J,MenuGroup:sa}=L,U=()=>{const s=ae(),a=se(),l=v(),m=u(t=>t.crmMail.data.selectedCategory),c=u(t=>t.theme.direction),n=t=>{l(I("")),l(_(o(t.value))),s(`/app/crm/mail/${t.value}`,{replace:!0})};h.useEffect(()=>{const t=a.pathname.substring(a.pathname.lastIndexOf("/")+1),p=o(t);l(_(p))},[]);const o=t=>{var g;const p=[...A,...z];let d=t;return d==="mail"&&(d="inbox"),{value:d,label:(g=p.find(b=>b.value===d))==null?void 0:g.label}};return e.jsx($,{direction:c,children:e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsx("div",{className:"my-8 mx-6",children:e.jsx("h3",{children:"Mailbox"})}),e.jsx(L,{variant:"transparent",className:"mx-2 mb-10",children:A.map(t=>e.jsxs(J,{eventKey:t.value,className:`mb-2 ${m.value===t.value?"bg-gray-100 dark:bg-gray-700":""}`,onSelect:()=>n(t),children:[e.jsx("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:t.icon}),e.jsx("span",{children:t.label})]},t.value))}),e.jsx(L,{variant:"transparent",className:"mx-2 mb-6",children:e.jsx(sa,{label:"Labels",children:z.map(t=>e.jsxs(J,{eventKey:t.value,className:`mb-2 ${m.value===t.value?"bg-gray-100 dark:bg-gray-700":""}`,onSelect:()=>n(t),children:[e.jsx(ve,{className:"ltr:mr-2 rtl:ml-2",innerClass:t.dotClass}),e.jsx("span",{children:t.label})]},t.value))})})]}),e.jsx("div",{className:"mx-4 mb-4",children:e.jsx(aa,{})})]})})},la=()=>{const s=u(n=>n.crmMail.data.sideBarExpand),a=u(n=>n.crmMail.data.mobileSideBarExpand),l=v(),{smaller:m}=q(),c=()=>{l(xe(!1))};return m.xl?e.jsx(ye,{bodyClass:"p-0",title:"Mail",isOpen:a,placement:"left",width:280,onClose:c,onRequestClose:c,children:e.jsx(U,{})}):e.jsx("div",{className:D("w-[280px] absolute top-0 bottom-0 ease-in-out duration-300 bg-white dark:bg-gray-800 ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600 z-10",s?"ltr:left-0 rtl:right-0":"ltr:left-[-280px] rtl:right-[-280px]"),children:e.jsx(U,{})})},ta=/(<([^>]+)>)/gi,ra=({sideBarExpand:s,mobileSidebarExpand:a})=>{const l=v(),{smaller:m}=q(),c=()=>{l(Je(!s))},n=()=>{l(xe(!a))};return e.jsx(j,{icon:m.xl?a?e.jsx(K,{}):e.jsx(W,{}):s?e.jsx(K,{}):e.jsx(W,{}),size:"sm",variant:"plain",shape:"circle",onClick:m.xl?n:c})},ia=()=>{const s=v(),a=u(r=>r.crmMail.data.mailList),l=u(r=>r.crmMail.data.selectedMailId),m=u(r=>r.crmMail.data.mailListLoading),c=u(r=>r.crmMail.data.sideBarExpand),n=u(r=>r.crmMail.data.mobileSideBarExpand),o=u(r=>r.crmMail.data.selectedCategory),t=u(r=>r.theme.direction),p=ae(),d=se(),g=r=>{s(F(r))};h.useEffect(()=>{const r=d.pathname.substring(d.pathname.lastIndexOf("/")+1),i={category:r};r==="mail"&&(i.category="inbox"),g(i)},[d.pathname]);const b=r=>{if(!r)return"";const i=r.replace(ta,"");return i.length>60?i.substring(0,57)+"...":i},N=(r,i)=>{r.stopPropagation(),s(I(i)),s(B(!1)),p(`${d.pathname}?mail=${i}`,{replace:!0})};return e.jsxs("div",{className:D("min-w-[360px] ease-in-out duration-300 relative flex flex-auto flex-col ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600",c&&"ltr:xl:ml-[280px] rtl:xl:mr-[280px]",l?"hidden xl:flex":"xs:flex"),children:[e.jsx("div",{className:"relative flex flex-0 items-center justify-between min-h-[55px] border-gray-200 dark:border-gray-600",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ra,{sideBarExpand:c,mobileSidebarExpand:n}),e.jsx("h6",{children:o.label})]})}),e.jsx($,{autoHide:!0,direction:t,children:e.jsx(le,{type:a.length>0?"cover":"default",spinnerClass:a.length>0?"hidden":"",loading:m,children:a.map(r=>e.jsx("div",{className:"relative flex border-b border-gray-200 dark:border-gray-600 last:border-0 hover:bg-hover",onClick:i=>N(i,r.id),children:e.jsxs("div",{className:`${l===r.id?"bg-gray-50 dark:bg-gray-700":""} w-full py-6 pr-4 pl-5 cursor-pointer select-none hover:bg-gray-50 hover:dark:bg-gray-700 flex`,children:[e.jsx("div",{className:"ltr:mr-2 rtl:ml-2",children:e.jsx(oe,{shape:"circle",size:25,src:r.avatar})}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold truncate text-gray-900 dark:text-gray-100",children:r.name}),r.flagged&&e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx(ne,{className:"text-red-500"})})]}),e.jsxs("div",{className:"flex items-center text-lg",children:[r.message[0].attachment.length>0&&e.jsx(ke,{}),r.starred&&e.jsx(ce,{className:"text-amber-500 ltr:ml-1 rtl:mr-1"})]})]}),e.jsxs("div",{className:"flex flex-auto w-full justify-between",children:[e.jsx("p",{children:b(r.message[0].content)}),e.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx("span",{className:"whitespace-nowrap",children:r.message[0].date})})]})]})]})},r.id))})})]})},Y=()=>{const s=v(),{smaller:a}=q(),l=()=>{s(T({})),s(I(""))};return a.xl?e.jsx(j,{icon:e.jsx(De,{}),variant:"plain",shape:"circle",size:"sm",onClick:l}):e.jsx(e.Fragment,{})},na=s=>{const{starred:a,flagged:l,isReply:m,mailId:c,onStarToggle:n,onFlagToggle:o,onMailSend:t,onMailReply:p}=s,d=v(),g=u(f=>f.crmMail.data.mailList),b=()=>{d(B(!0)),p==null||p()},N=()=>{d(B(!1))},r=()=>{t==null||t()},i=()=>{const f=y("starred");d(Z(f)),n==null||n()},x=()=>{const f=y("flagged");d(Z(f)),o==null||o()},y=f=>{let M=E(g);return M=M.map(S=>(S.id===c&&(S[f]=!S[f]),S)),M};return e.jsx("div",{className:D("relative flex items-center min-h-[55px] px-4 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"),children:m?e.jsxs("div",{className:"flex items-center xl:justify-end justify-between gap-2 w-full",children:[e.jsx(Y,{}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{size:"sm",icon:e.jsx(ie,{}),onClick:N,children:"Discard"}),e.jsx(j,{variant:"solid",size:"sm",icon:e.jsx(te,{}),onClick:r,children:"Send"})]})]}):e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{}),e.jsx(j,{size:"sm",icon:e.jsx(Se,{}),onClick:b,children:e.jsx("span",{className:"hidden sm:block",children:"Reply"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(Pe,{size:"sm",children:[e.jsx(j,{size:"sm",icon:e.jsx("span",{className:"text-amber-500",children:a?e.jsx(ce,{}):e.jsx(re,{})}),onClick:i,children:e.jsx("span",{className:"hidden sm:block",children:a?"Starred":"Star"})}),e.jsx(j,{size:"sm",icon:e.jsx("span",{className:"text-red-500",children:l?e.jsx(Re,{}):e.jsx(ne,{})}),onClick:x,children:e.jsx("span",{className:"hidden sm:block",children:l?"Flagged":"Flag"})})]}),e.jsx(V,{placement:"bottom-end",renderTitle:e.jsx(j,{size:"sm",icon:e.jsx(Be,{}),children:e.jsx("span",{className:"hidden sm:block",children:"Move to"})}),children:A.map(f=>e.jsxs(V.Item,{eventKey:f.value,children:[e.jsx("span",{className:"text-xl ltr:mr-2 rtl:ml-2",children:f.icon}),e.jsx("span",{children:f.label})]},f.value))})]})]})})},ca=s=>{switch(s){case"doc":return e.jsx(Ze,{className:"text-blue-500"});case"xls":return e.jsx(Xe,{className:"text-emerald-500"});case"pdf":return e.jsx(Qe,{className:"text-red-500"});case"jpg":return e.jsx(Q,{});case"png":return e.jsx(Q,{});default:return e.jsx(Ve,{})}},pe=h.forwardRef((s,a)=>{var n;const{mail:l={},children:m}=s,c=h.useMemo(()=>z.find(o=>o.value===l.label),[l.label]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 px-4 py-8 shadow-sm border-b border-gray-200 dark:border-gray-600 md:flex items-center justify-between",children:[e.jsx("h5",{children:l.title}),l.label&&e.jsx(Ke,{prefix:!0,prefixClass:c==null?void 0:c.dotClass,children:c==null?void 0:c.label})]}),e.jsx($,{ref:a,autoHide:!0,children:e.jsxs("div",{className:"m-6 h-full",children:[m,(n=l.message)==null?void 0:n.map(o=>{var t,p;return e.jsx("div",{className:"pb-6",children:e.jsxs(de,{children:[e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(oe,{shape:"circle",src:o.avatar}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold truncate text-gray-900 dark:text-gray-100",children:o.name}),e.jsxs("div",{children:["To:"," ",(t=l.mail)==null?void 0:t.map((d,g)=>e.jsx("span",{children:d},d+g))]})]})]}),e.jsx(Ge,{icon:e.jsx(Ie,{className:"text-lg"}),children:e.jsx("span",{className:"font-semibold",children:o.date})})]}),e.jsx("div",{className:"mt-8",children:We(o.content)}),((p=o.attachment)==null?void 0:p.length)>0&&e.jsx("div",{className:"mt-6 md:flex",children:o.attachment.map(d=>e.jsxs("div",{className:"min-w-full md:min-w-[200px] flex items-center md:mb-0 mb-2 ltr:md:mr-3 rtl:md:ml-3 cursor-pointer select-none border px-4 py-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("div",{className:"text-3xl",children:ca(d.type)}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-gray-100",children:d.file}),e.jsx("span",{className:"",children:d.size})]})]},d.file))})]})},o.id)})]})})]})});pe.displayName="MailDetailContent";const oa=()=>{const s=ge(),a=v(),l=s.get("mail"),m=h.useRef(null),c=h.useRef(null),n=u(i=>i.crmMail.data.mail),o=u(i=>i.crmMail.data.mailLoading),t=u(i=>i.crmMail.data.selectedMailId),p=u(i=>i.crmMail.data.reply),d=()=>{l&&a(H({id:l}))},g=()=>{const i=E(n);i.starred=!i.starred,a(T(i))},b=()=>{const i=E(n);i.flagged=!i.flagged,a(T(i))},N=()=>{var i,x;(x=(i=c.current)==null?void 0:i.formikRef)==null||x.submitForm()},r=()=>{const i=setTimeout(()=>{var x,y;return(y=(x=c.current)==null?void 0:x.editorRef)==null?void 0:y.focus()},100);return()=>{clearTimeout(i)}};return h.useEffect(()=>{t&&d()},[t]),h.useEffect(()=>{!t&&l&&a(I(l))},[]),e.jsx("div",{className:D(l&&!X(n)&&!o?"block xl:flex":"hidden xl:flex","flex-col w-full bg-gray-100 dark:bg-gray-900"),children:l&&!X(n)?o?e.jsx(le,{loading:!0}):e.jsxs(e.Fragment,{children:[e.jsx(na,{isReply:p,starred:n.starred,flagged:n.flagged,mailId:n.id,onStarToggle:g,onFlagToggle:b,onMailSend:N,onMailReply:r}),e.jsx(pe,{ref:m,mail:n,children:p&&e.jsx("div",{className:"pb-6",children:e.jsx(de,{children:e.jsx(G,{ref:c,mode:"reply",mail:n})})})})]}):e.jsxs("div",{className:"flex flex-col justify-center items-center h-full",children:[e.jsx(qe,{className:"max-w-[200px]",src:"/img/others/no-mail-selected.png",darkModeSrc:"/img/others/no-mail-selected-dark.png"}),e.jsx("div",{className:"mt-4 text-2xl font-semibold",children:"Select a mail to read"})]})})},da=()=>e.jsxs("div",{className:"flex flex-auto w-full",children:[e.jsx(ia,{}),e.jsx(oa,{})]});je("crmMail",Ye);const ma=()=>e.jsxs(be,{className:"h-full overflow-hidden",bodyClass:"p-0 h-full absolute inset-0 flex min-w-0 overflow-hidden",children:[e.jsx(la,{}),e.jsx(da,{})]}),is=ma;export{is as default};
