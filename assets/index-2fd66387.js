import{j as e,c as S,am as ee,an as ue,ao as fe,ap as he,r as h,a as v,al as ae,w as se,ah as le,aX as ge,aq as je}from"./index-73cb1959.js";import{A as be}from"./AdaptableCard-62734005.js";import{M as L}from"./index-f5cac996.js";import{B as ve}from"./Badge-7e3a0ab9.js";import{S as $}from"./ScrollBar-8d164a85.js";import{D as ye}from"./Drawer-6b3fb925.js";import{B as j}from"./Button-82c5fc13.js";import{D as Ne}from"./Dialog-7e00fbdb.js";import{af as Me,ag as Ce,y as te,O as we,ah as re,P as ie,ai as ne,aj as ke,ak as ce,al as K,am as V,an as Se,ao as Re,ap as Be,H as De,a4 as Ie}from"./index.esm-34e42eb1.js";import{F as Le,a as C}from"./FormItem-683038f1.js";import{I as B}from"./Input-94395b64.js";import{t as Ee,N as Fe}from"./toast-bab5eba8.js";import{F as He,a as Oe,b as w}from"./formik.esm-9daa4f0b.js";import{R as Te}from"./RichTextEditor-330fb36d.js";import{aM as Ae,aN as ze}from"./CrmService-1e373a7c.js";import{c as $e,a as k}from"./index.esm-6a9eb370.js";import{u as P}from"./useResponsive-9c3b83a7.js";import{A as oe}from"./index-506e859c.js";import{D as Pe}from"./DoubleSidedImage-bddb28d9.js";import{C as de}from"./Card-5918977c.js";import{D as W}from"./index-d091c6c9.js";import{I as qe}from"./index-916791ae.js";import{c as E}from"./cloneDeep-c6478499.js";import{T as Ge}from"./Tag-b3c23aa5.js";import{H as Ke}from"./index-f7263671.js";import{f as Ve,g as Q,h as We,i as Qe,j as Xe}from"./index.esm-9c9dc579.js";import{i as X}from"./Views-1a070c40.js";import"./index-d69fea9b.js";import"./useUniqueId-c8213503.js";import"./toString-efa3a161.js";import"./index-231256d3.js";import"./CloseButton-74de3acc.js";import"./index-0e3f2f4d.js";import"./isNil-ba009e51.js";import"./get-3f58d147.js";import"./_MapCache-a87f2f55.js";import"./useTimeout-fead5ad4.js";import"./StatusIcon-ae85fea2.js";import"./chainedFunction-070f832c.js";import"./_baseIsEqual-9b92f349.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-e3398fbe.js";import"./usePopper-c57b254a.js";import"./useUncertainRef-c42b7867.js";import"./useRootClose-f50c45ad.js";import"./_getPrototype-ea940500.js";const _e=({className:s,asElement:a="span",icon:l,children:m})=>e.jsxs(a,{className:S("flex items-center gap-2",s),children:[l,m]}),q="crmMail",F=ee(q+"/getMails",async s=>(await Ae(s)).data),H=ee(q+"/getMail",async s=>(await ze(s)).data),Je={mailListLoading:!1,mailLoading:!1,mailList:[],mail:{},selectedMailId:"",sideBarExpand:!0,mobileSideBarExpand:!1,selectedCategory:{},reply:!1,newMessageDialog:!1},me=ue({name:`${q}/state`,initialState:Je,reducers:{updateMailList:(s,a)=>{s.mailList=a.payload},updateMail:(s,a)=>{s.mail=a.payload},updateMailId:(s,a)=>{a.payload&&(s.mailLoading=!0),s.selectedMailId=a.payload},updateReply:(s,a)=>{s.reply=a.payload},toggleSidebar:(s,a)=>{s.sideBarExpand=a.payload},toggleMobileSidebar:(s,a)=>{s.mobileSideBarExpand=a.payload},toggleNewMessageDialog:(s,a)=>{s.newMessageDialog=a.payload},updateSelectedCategory:(s,a)=>{s.selectedCategory=a.payload}},extraReducers:s=>{s.addCase(F.fulfilled,(a,l)=>{a.mailListLoading=!1,a.mailList=l.payload}).addCase(F.pending,a=>{a.mailListLoading=!0}).addCase(H.fulfilled,(a,l)=>{a.mailLoading=!1,a.mail=l.payload}).addCase(H.pending,a=>{a.mailLoading=!0})}}),{updateMailList:_,updateMail:O,updateMailId:I,updateReply:D,toggleSidebar:Ue,toggleMobileSidebar:xe,toggleNewMessageDialog:T,updateSelectedCategory:J}=me.actions,Ye=me.reducer,Ze=fe({data:Ye}),u=he,ea=$e().shape({title:k().required("Title Required"),to:k().required("Receiver Required"),cc:k(),bcc:k(),message:k()}),G=h.forwardRef((s,a)=>{const{mode:l="new",mail:m={}}=s,c=h.useRef(null),n=h.useRef(null);h.useImperativeHandle(a,()=>({formikRef:c.current,editorRef:n.current}));const o=v(),[t,p]=h.useState(!1),[d,g]=h.useState(!1),b=()=>{p(!t)},N=()=>{g(!d)},r=()=>{Ee.push(e.jsx(Fe,{type:"success",title:"Mail Sent"}),{placement:"top-center"}),l==="reply"&&o(D(!1)),l==="new"&&o(T(!1))};return e.jsx(He,{innerRef:c,initialValues:{title:l==="reply"?`Re: ${m==null?void 0:m.title}`:"",to:l==="reply"&&(m==null?void 0:m.from)||"",cc:"",bcc:"",message:""},validationSchema:ea,onSubmit:()=>{r()},children:({touched:i,errors:x})=>e.jsx(Oe,{children:e.jsxs(Le,{children:[e.jsx(C,{className:l==="reply"?"!hidden":"",label:"Title",labelClass:"!justify-start",invalid:x.title&&i.title,errorMessage:x.title,children:e.jsx(w,{autoComplete:"off",name:"title",component:B})}),e.jsx(C,{className:l==="reply"?"!hidden":"",label:"To",labelClass:"!justify-start",invalid:x.to&&i.to,errorMessage:x.to,children:e.jsx(w,{autoComplete:"off",name:"to",component:B,suffix:e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"cursor-pointer select-none hover:underline ltr:mr-2 rtl:ml-2",onClick:b,children:"Cc"}),e.jsx("span",{className:"cursor-pointer select-none hover:underline",onClick:N,children:"Bcc"})]})})}),e.jsx(C,{className:t?"":"!hidden",label:"Cc",labelClass:"!justify-start",invalid:x.cc&&i.cc,errorMessage:x.cc,children:e.jsx(w,{autoComplete:"off",name:"cc",component:B})}),e.jsx(C,{className:d?"":"!hidden",label:"Bcc",labelClass:"!justify-start",invalid:x.bcc&&i.bcc,errorMessage:x.bcc,children:e.jsx(w,{autoComplete:"off",name:"bcc",component:B})}),e.jsx(C,{label:l==="new"?"Message":"",className:"mb-0",labelClass:"!justify-start",invalid:x.message&&i.message,errorMessage:x.message,children:e.jsx(w,{name:"message",children:({field:y,form:f})=>e.jsx(Te,{ref:n,value:y.value,onChange:M=>f.setFieldValue(y.name,M)})})})]})})})});G.displayName="MailEditor";const aa=()=>{const s=v(),a=h.useRef(null),l=u(o=>o.crmMail.data.newMessageDialog),m=()=>{s(T(!0))},c=()=>{s(T(!1))},n=()=>{var o,t;(t=(o=a.current)==null?void 0:o.formikRef)==null||t.submitForm()};return e.jsxs(e.Fragment,{children:[e.jsx(j,{block:!0,variant:"solid",icon:e.jsx(Me,{}),onClick:m,children:"New Message"}),e.jsxs(Ne,{isOpen:l,onClose:c,onRequestClose:c,children:[e.jsx("h5",{className:"mb-4",children:"New Message"}),e.jsx("div",{className:"max-h-[400px] overflow-y-auto px-1",children:e.jsx(G,{ref:a,mode:"new"})}),e.jsxs("div",{className:"text-right mt-4",children:[e.jsx(j,{className:"ltr:mr-2 rtl:ml-2",variant:"plain",onClick:c,children:"Discard"}),e.jsx(j,{variant:"solid",onClick:n,children:"Send"})]})]})]})},A=[{value:"inbox",label:"Inbox",icon:e.jsx(Ce,{})},{value:"sentItem",label:"Sent Item",icon:e.jsx(te,{})},{value:"draft",label:"Draft",icon:e.jsx(we,{})},{value:"starred",label:"Starred",icon:e.jsx(re,{})},{value:"deleted",label:"Deleted",icon:e.jsx(ie,{})}],z=[{value:"work",label:"Work",dotClass:"bg-blue-500"},{value:"private",label:"Private",dotClass:"bg-indigo-500"},{value:"important",label:"Important",dotClass:"bg-red-500"}],{MenuItem:U,MenuGroup:sa}=L,Y=()=>{const s=ae(),a=se(),l=v(),m=u(t=>t.crmMail.data.selectedCategory),c=u(t=>t.theme.direction),n=t=>{l(I("")),l(J(o(t.value))),s(`/app/crm/mail/${t.value}`,{replace:!0})};h.useEffect(()=>{const t=a.pathname.substring(a.pathname.lastIndexOf("/")+1),p=o(t);l(J(p))},[]);const o=t=>{var g;const p=[...A,...z];let d=t;return d==="mail"&&(d="inbox"),{value:d,label:(g=p.find(b=>b.value===d))==null?void 0:g.label}};return e.jsx($,{direction:c,children:e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsx("div",{className:"my-8 mx-6",children:e.jsx("h3",{children:"Mailbox"})}),e.jsx(L,{variant:"transparent",className:"mx-2 mb-10",children:A.map(t=>e.jsxs(U,{eventKey:t.value,className:`mb-2 ${m.value===t.value?"bg-gray-100 dark:bg-gray-700":""}`,onSelect:()=>n(t),children:[e.jsx("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:t.icon}),e.jsx("span",{children:t.label})]},t.value))}),e.jsx(L,{variant:"transparent",className:"mx-2 mb-6",children:e.jsx(sa,{label:"Labels",children:z.map(t=>e.jsxs(U,{eventKey:t.value,className:`mb-2 ${m.value===t.value?"bg-gray-100 dark:bg-gray-700":""}`,onSelect:()=>n(t),children:[e.jsx(ve,{className:"ltr:mr-2 rtl:ml-2",innerClass:t.dotClass}),e.jsx("span",{children:t.label})]},t.value))})})]}),e.jsx("div",{className:"mx-4 mb-4",children:e.jsx(aa,{})})]})})},la=()=>{const s=u(n=>n.crmMail.data.sideBarExpand),a=u(n=>n.crmMail.data.mobileSideBarExpand),l=v(),{smaller:m}=P(),c=()=>{l(xe(!1))};return m.xl?e.jsx(ye,{bodyClass:"p-0",title:"Mail",isOpen:a,placement:"left",width:280,onClose:c,onRequestClose:c,children:e.jsx(Y,{})}):e.jsx("div",{className:S("w-[280px] absolute top-0 bottom-0 ease-in-out duration-300 bg-white dark:bg-gray-800 ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600 z-10",s?"ltr:left-0 rtl:right-0":"ltr:left-[-280px] rtl:right-[-280px]"),children:e.jsx(Y,{})})},ta=/(<([^>]+)>)/gi,ra=({sideBarExpand:s,mobileSidebarExpand:a})=>{const l=v(),{smaller:m}=P(),c=()=>{l(Ue(!s))},n=()=>{l(xe(!a))};return e.jsx(j,{icon:m.xl?a?e.jsx(K,{}):e.jsx(V,{}):s?e.jsx(K,{}):e.jsx(V,{}),size:"sm",variant:"plain",shape:"circle",onClick:m.xl?n:c})},ia=()=>{const s=v(),a=u(r=>r.crmMail.data.mailList),l=u(r=>r.crmMail.data.selectedMailId),m=u(r=>r.crmMail.data.mailListLoading),c=u(r=>r.crmMail.data.sideBarExpand),n=u(r=>r.crmMail.data.mobileSideBarExpand),o=u(r=>r.crmMail.data.selectedCategory),t=u(r=>r.theme.direction),p=ae(),d=se(),g=r=>{s(F(r))};h.useEffect(()=>{const r=d.pathname.substring(d.pathname.lastIndexOf("/")+1),i={category:r};r==="mail"&&(i.category="inbox"),g(i)},[d.pathname]);const b=r=>{if(!r)return"";const i=r.replace(ta,"");return i.length>60?i.substring(0,57)+"...":i},N=(r,i)=>{r.stopPropagation(),s(I(i)),s(D(!1)),p(`${d.pathname}?mail=${i}`,{replace:!0})};return e.jsxs("div",{className:S("min-w-[360px] ease-in-out duration-300 relative flex flex-auto flex-col ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600",c&&"ltr:xl:ml-[280px] rtl:xl:mr-[280px]",l?"hidden xl:flex":"xs:flex"),children:[e.jsx("div",{className:"relative flex flex-0 items-center justify-between min-h-[55px] border-gray-200 dark:border-gray-600",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ra,{sideBarExpand:c,mobileSidebarExpand:n}),e.jsx("h6",{children:o.label})]})}),e.jsx($,{autoHide:!0,direction:t,children:e.jsx(le,{type:a.length>0?"cover":"default",spinnerClass:a.length>0?"hidden":"",loading:m,children:a.map(r=>e.jsx("div",{className:"relative flex border-b border-gray-200 dark:border-gray-600 last:border-0 hover:bg-hover",onClick:i=>N(i,r.id),children:e.jsxs("div",{className:`${l===r.id?"bg-gray-50 dark:bg-gray-700":""} w-full py-6 pr-4 pl-5 cursor-pointer select-none hover:bg-gray-50 hover:dark:bg-gray-700 flex`,children:[e.jsx("div",{className:"ltr:mr-2 rtl:ml-2",children:e.jsx(oe,{shape:"circle",size:25,src:r.avatar})}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold truncate text-gray-900 dark:text-gray-100",children:r.name}),r.flagged&&e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx(ne,{className:"text-red-500"})})]}),e.jsxs("div",{className:"flex items-center text-lg",children:[r.message[0].attachment.length>0&&e.jsx(ke,{}),r.starred&&e.jsx(ce,{className:"text-amber-500 ltr:ml-1 rtl:mr-1"})]})]}),e.jsxs("div",{className:"flex flex-auto w-full justify-between",children:[e.jsx("p",{children:b(r.message[0].content)}),e.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx("span",{className:"whitespace-nowrap",children:r.message[0].date})})]})]})]})},r.id))})})]})},Z=()=>{const s=v(),{smaller:a}=P(),l=()=>{s(O({})),s(I(""))};return a.xl?e.jsx(j,{icon:e.jsx(De,{}),variant:"plain",shape:"circle",size:"sm",onClick:l}):e.jsx(e.Fragment,{})},na=s=>{const{starred:a,flagged:l,isReply:m,mailId:c,onStarToggle:n,onFlagToggle:o,onMailSend:t,onMailReply:p}=s,d=v(),g=u(f=>f.crmMail.data.mailList),b=()=>{d(D(!0)),p==null||p()},N=()=>{d(D(!1))},r=()=>{t==null||t()},i=()=>{const f=y("starred");d(_(f)),n==null||n()},x=()=>{const f=y("flagged");d(_(f)),o==null||o()},y=f=>{let M=E(g);return M=M.map(R=>(R.id===c&&(R[f]=!R[f]),R)),M};return e.jsx("div",{className:S("relative flex items-center min-h-[55px] px-4 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"),children:m?e.jsxs("div",{className:"flex items-center xl:justify-end justify-between gap-2 w-full",children:[e.jsx(Z,{}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{size:"sm",icon:e.jsx(ie,{}),onClick:N,children:"Discard"}),e.jsx(j,{variant:"solid",size:"sm",icon:e.jsx(te,{}),onClick:r,children:"Send"})]})]}):e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{}),e.jsx(j,{size:"sm",icon:e.jsx(Se,{}),onClick:b,children:e.jsx("span",{className:"hidden sm:block",children:"Reply"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(qe,{size:"sm",children:[e.jsx(j,{size:"sm",icon:e.jsx("span",{className:"text-amber-500",children:a?e.jsx(ce,{}):e.jsx(re,{})}),onClick:i,children:e.jsx("span",{className:"hidden sm:block",children:a?"Starred":"Star"})}),e.jsx(j,{size:"sm",icon:e.jsx("span",{className:"text-red-500",children:l?e.jsx(Re,{}):e.jsx(ne,{})}),onClick:x,children:e.jsx("span",{className:"hidden sm:block",children:l?"Flagged":"Flag"})})]}),e.jsx(W,{placement:"bottom-end",renderTitle:e.jsx(j,{size:"sm",icon:e.jsx(Be,{}),children:e.jsx("span",{className:"hidden sm:block",children:"Move to"})}),children:A.map(f=>e.jsxs(W.Item,{eventKey:f.value,children:[e.jsx("span",{className:"text-xl ltr:mr-2 rtl:ml-2",children:f.icon}),e.jsx("span",{children:f.label})]},f.value))})]})]})})},ca=s=>{switch(s){case"doc":return e.jsx(Xe,{className:"text-blue-500"});case"xls":return e.jsx(Qe,{className:"text-emerald-500"});case"pdf":return e.jsx(We,{className:"text-red-500"});case"jpg":return e.jsx(Q,{});case"png":return e.jsx(Q,{});default:return e.jsx(Ve,{})}},pe=h.forwardRef((s,a)=>{var n;const{mail:l={},children:m}=s,c=h.useMemo(()=>z.find(o=>o.value===l.label),[l.label]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 px-4 py-8 shadow-sm border-b border-gray-200 dark:border-gray-600 md:flex items-center justify-between",children:[e.jsx("h5",{children:l.title}),l.label&&e.jsx(Ge,{prefix:!0,prefixClass:c==null?void 0:c.dotClass,children:c==null?void 0:c.label})]}),e.jsx($,{ref:a,autoHide:!0,children:e.jsxs("div",{className:"m-6 h-full",children:[m,(n=l.message)==null?void 0:n.map(o=>{var t,p;return e.jsx("div",{className:"pb-6",children:e.jsxs(de,{children:[e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(oe,{shape:"circle",src:o.avatar}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold truncate text-gray-900 dark:text-gray-100",children:o.name}),e.jsxs("div",{children:["To:"," ",(t=l.mail)==null?void 0:t.map((d,g)=>e.jsx("span",{children:d},d+g))]})]})]}),e.jsx(_e,{icon:e.jsx(Ie,{className:"text-lg"}),children:e.jsx("span",{className:"font-semibold",children:o.date})})]}),e.jsx("div",{className:"mt-8",children:Ke(o.content)}),((p=o.attachment)==null?void 0:p.length)>0&&e.jsx("div",{className:"mt-6 md:flex",children:o.attachment.map(d=>e.jsxs("div",{className:"min-w-full md:min-w-[200px] flex items-center md:mb-0 mb-2 ltr:md:mr-3 rtl:md:ml-3 cursor-pointer select-none border px-4 py-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("div",{className:"text-3xl",children:ca(d.type)}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-gray-100",children:d.file}),e.jsx("span",{className:"",children:d.size})]})]},d.file))})]})},o.id)})]})})]})});pe.displayName="MailDetailContent";const oa=()=>{const s=ge(),a=v(),l=s.get("mail"),m=h.useRef(null),c=h.useRef(null),n=u(i=>i.crmMail.data.mail),o=u(i=>i.crmMail.data.mailLoading),t=u(i=>i.crmMail.data.selectedMailId),p=u(i=>i.crmMail.data.reply),d=()=>{l&&a(H({id:l}))},g=()=>{const i=E(n);i.starred=!i.starred,a(O(i))},b=()=>{const i=E(n);i.flagged=!i.flagged,a(O(i))},N=()=>{var i,x;(x=(i=c.current)==null?void 0:i.formikRef)==null||x.submitForm()},r=()=>{const i=setTimeout(()=>{var x,y;return(y=(x=c.current)==null?void 0:x.editorRef)==null?void 0:y.focus()},100);return()=>{clearTimeout(i)}};return h.useEffect(()=>{t&&d()},[t]),h.useEffect(()=>{!t&&l&&a(I(l))},[]),e.jsx("div",{className:S(l&&!X(n)&&!o?"block xl:flex":"hidden xl:flex","flex-col w-full bg-gray-100 dark:bg-gray-900"),children:l&&!X(n)?o?e.jsx(le,{loading:!0}):e.jsxs(e.Fragment,{children:[e.jsx(na,{isReply:p,starred:n.starred,flagged:n.flagged,mailId:n.id,onStarToggle:g,onFlagToggle:b,onMailSend:N,onMailReply:r}),e.jsx(pe,{ref:m,mail:n,children:p&&e.jsx("div",{className:"pb-6",children:e.jsx(de,{children:e.jsx(G,{ref:c,mode:"reply",mail:n})})})})]}):e.jsxs("div",{className:"flex flex-col justify-center items-center h-full",children:[e.jsx(Pe,{className:"max-w-[200px]",src:"/img/others/no-mail-selected.png",darkModeSrc:"/img/others/no-mail-selected-dark.png"}),e.jsx("div",{className:"mt-4 text-2xl font-semibold",children:"Select a mail to read"})]})})},da=()=>e.jsxs("div",{className:"flex flex-auto w-full",children:[e.jsx(ia,{}),e.jsx(oa,{})]});je("crmMail",Ze);const ma=()=>e.jsxs(be,{className:"h-full overflow-hidden",bodyClass:"p-0 h-full absolute inset-0 flex min-w-0 overflow-hidden",children:[e.jsx(la,{}),e.jsx(da,{})]}),ts=ma;export{ts as default};
