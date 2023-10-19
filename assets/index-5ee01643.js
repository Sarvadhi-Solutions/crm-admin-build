import{j as e,c as S,al as ee,am as ue,an as fe,ao as he,r as h,a as v,ap as ae,aa as se,ah as le,aW as ge,aq as je}from"./index-dddc73b4.js";import{A as be}from"./AdaptableCard-ce723550.js";import{M as L}from"./index-9e2f2544.js";import{B as ve}from"./Badge-dc5489f9.js";import{S as $}from"./ScrollBar-d0a61849.js";import{D as ye}from"./Drawer-b1e7a53d.js";import{B as j}from"./Button-fccc7ec9.js";import{D as Ne}from"./Dialog-ffb69b88.js";import{af as Me,ag as Ce,y as te,P as we,ah as re,Q as ie,ai as ne,aj as ke,ak as ce,al as K,am as W,an as Se,ao as Re,ap as Be,H as De,a5 as Ie}from"./index.esm-d67f1fea.js";import{F as Le,a as C}from"./FormItem-0b75ed5f.js";import{I as B}from"./Input-5850a060.js";import{t as Ee,N as Fe}from"./toast-01ef835c.js";import{F as He,a as Te,b as w}from"./formik.esm-f57476f4.js";import{R as Oe}from"./RichTextEditor-f5eb1640.js";import{ay as ze,az as Ae}from"./CrmService-3830a070.js";import{c as $e,a as k}from"./index.esm-fb83748d.js";import{u as P}from"./useResponsive-69492abe.js";import{A as oe}from"./index-1362588f.js";import{D as Pe}from"./DoubleSidedImage-5495de24.js";import{C as de}from"./Card-7410c075.js";import{D as Q}from"./index-e4a64f41.js";import{I as qe}from"./index-5e738818.js";import{c as E}from"./cloneDeep-85ce2294.js";import{T as Ge}from"./Tag-60ecae5b.js";import{H as Ke}from"./index-96832776.js";import{f as We,g as V,h as Qe,i as Ve,j as _e}from"./index.esm-604e49a5.js";import{i as _}from"./Views-ae1e9425.js";import"./index-b19ef1d4.js";import"./useUniqueId-1e16ac78.js";import"./toString-a6a23b36.js";import"./index-9e55e515.js";import"./CloseButton-9c4c449e.js";import"./index-81597033.js";import"./isNil-4bbd6f18.js";import"./get-4796796c.js";import"./_MapCache-b582f7ad.js";import"./useTimeout-4147c52c.js";import"./StatusIcon-49640060.js";import"./chainedFunction-070f832c.js";import"./_baseIsEqual-a806cac4.js";import"./useMergeRef-788c4cb0.js";import"./Tooltip-8ca67ef0.js";import"./usePopper-12f3dc15.js";import"./useUncertainRef-a033bd83.js";import"./useRootClose-cdfb724d.js";import"./_getPrototype-510fa938.js";const Je=({className:s,asElement:a="span",icon:l,children:m})=>e.jsxs(a,{className:S("flex items-center gap-2",s),children:[l,m]}),q="crmMail",F=ee(q+"/getMails",async s=>(await ze(s)).data),H=ee(q+"/getMail",async s=>(await Ae(s)).data),Ue={mailListLoading:!1,mailLoading:!1,mailList:[],mail:{},selectedMailId:"",sideBarExpand:!0,mobileSideBarExpand:!1,selectedCategory:{},reply:!1,newMessageDialog:!1},me=ue({name:`${q}/state`,initialState:Ue,reducers:{updateMailList:(s,a)=>{s.mailList=a.payload},updateMail:(s,a)=>{s.mail=a.payload},updateMailId:(s,a)=>{a.payload&&(s.mailLoading=!0),s.selectedMailId=a.payload},updateReply:(s,a)=>{s.reply=a.payload},toggleSidebar:(s,a)=>{s.sideBarExpand=a.payload},toggleMobileSidebar:(s,a)=>{s.mobileSideBarExpand=a.payload},toggleNewMessageDialog:(s,a)=>{s.newMessageDialog=a.payload},updateSelectedCategory:(s,a)=>{s.selectedCategory=a.payload}},extraReducers:s=>{s.addCase(F.fulfilled,(a,l)=>{a.mailListLoading=!1,a.mailList=l.payload}).addCase(F.pending,a=>{a.mailListLoading=!0}).addCase(H.fulfilled,(a,l)=>{a.mailLoading=!1,a.mail=l.payload}).addCase(H.pending,a=>{a.mailLoading=!0})}}),{updateMailList:J,updateMail:T,updateMailId:I,updateReply:D,toggleSidebar:Xe,toggleMobileSidebar:xe,toggleNewMessageDialog:O,updateSelectedCategory:U}=me.actions,Ye=me.reducer,Ze=fe({data:Ye}),u=he,ea=$e().shape({title:k().required("Title Required"),to:k().required("Receiver Required"),cc:k(),bcc:k(),message:k()}),G=h.forwardRef((s,a)=>{const{mode:l="new",mail:m={}}=s,c=h.useRef(null),n=h.useRef(null);h.useImperativeHandle(a,()=>({formikRef:c.current,editorRef:n.current}));const o=v(),[t,p]=h.useState(!1),[d,g]=h.useState(!1),b=()=>{p(!t)},N=()=>{g(!d)},r=()=>{Ee.push(e.jsx(Fe,{type:"success",title:"Mail Sent"}),{placement:"top-center"}),l==="reply"&&o(D(!1)),l==="new"&&o(O(!1))};return e.jsx(He,{innerRef:c,initialValues:{title:l==="reply"?`Re: ${m==null?void 0:m.title}`:"",to:l==="reply"&&(m==null?void 0:m.from)||"",cc:"",bcc:"",message:""},validationSchema:ea,onSubmit:()=>{r()},children:({touched:i,errors:x})=>e.jsx(Te,{children:e.jsxs(Le,{children:[e.jsx(C,{className:l==="reply"?"!hidden":"",label:"Title",labelClass:"!justify-start",invalid:x.title&&i.title,errorMessage:x.title,children:e.jsx(w,{autoComplete:"off",name:"title",component:B})}),e.jsx(C,{className:l==="reply"?"!hidden":"",label:"To",labelClass:"!justify-start",invalid:x.to&&i.to,errorMessage:x.to,children:e.jsx(w,{autoComplete:"off",name:"to",component:B,suffix:e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"cursor-pointer select-none hover:underline ltr:mr-2 rtl:ml-2",onClick:b,children:"Cc"}),e.jsx("span",{className:"cursor-pointer select-none hover:underline",onClick:N,children:"Bcc"})]})})}),e.jsx(C,{className:t?"":"!hidden",label:"Cc",labelClass:"!justify-start",invalid:x.cc&&i.cc,errorMessage:x.cc,children:e.jsx(w,{autoComplete:"off",name:"cc",component:B})}),e.jsx(C,{className:d?"":"!hidden",label:"Bcc",labelClass:"!justify-start",invalid:x.bcc&&i.bcc,errorMessage:x.bcc,children:e.jsx(w,{autoComplete:"off",name:"bcc",component:B})}),e.jsx(C,{label:l==="new"?"Message":"",className:"mb-0",labelClass:"!justify-start",invalid:x.message&&i.message,errorMessage:x.message,children:e.jsx(w,{name:"message",children:({field:y,form:f})=>e.jsx(Oe,{ref:n,value:y.value,onChange:M=>f.setFieldValue(y.name,M)})})})]})})})});G.displayName="MailEditor";const aa=()=>{const s=v(),a=h.useRef(null),l=u(o=>o.crmMail.data.newMessageDialog),m=()=>{s(O(!0))},c=()=>{s(O(!1))},n=()=>{var o,t;(t=(o=a.current)==null?void 0:o.formikRef)==null||t.submitForm()};return e.jsxs(e.Fragment,{children:[e.jsx(j,{block:!0,variant:"solid",icon:e.jsx(Me,{}),onClick:m,children:"New Message"}),e.jsxs(Ne,{isOpen:l,onClose:c,onRequestClose:c,children:[e.jsx("h5",{className:"mb-4",children:"New Message"}),e.jsx("div",{className:"max-h-[400px] overflow-y-auto px-1",children:e.jsx(G,{ref:a,mode:"new"})}),e.jsxs("div",{className:"text-right mt-4",children:[e.jsx(j,{className:"ltr:mr-2 rtl:ml-2",variant:"plain",onClick:c,children:"Discard"}),e.jsx(j,{variant:"solid",onClick:n,children:"Send"})]})]})]})},z=[{value:"inbox",label:"Inbox",icon:e.jsx(Ce,{})},{value:"sentItem",label:"Sent Item",icon:e.jsx(te,{})},{value:"draft",label:"Draft",icon:e.jsx(we,{})},{value:"starred",label:"Starred",icon:e.jsx(re,{})},{value:"deleted",label:"Deleted",icon:e.jsx(ie,{})}],A=[{value:"work",label:"Work",dotClass:"bg-blue-500"},{value:"private",label:"Private",dotClass:"bg-indigo-500"},{value:"important",label:"Important",dotClass:"bg-red-500"}],{MenuItem:X,MenuGroup:sa}=L,Y=()=>{const s=ae(),a=se(),l=v(),m=u(t=>t.crmMail.data.selectedCategory),c=u(t=>t.theme.direction),n=t=>{l(I("")),l(U(o(t.value))),s(`/app/crm/mail/${t.value}`,{replace:!0})};h.useEffect(()=>{const t=a.pathname.substring(a.pathname.lastIndexOf("/")+1),p=o(t);l(U(p))},[]);const o=t=>{var g;const p=[...z,...A];let d=t;return d==="mail"&&(d="inbox"),{value:d,label:(g=p.find(b=>b.value===d))==null?void 0:g.label}};return e.jsx($,{direction:c,children:e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsx("div",{className:"my-8 mx-6",children:e.jsx("h3",{children:"Mailbox"})}),e.jsx(L,{variant:"transparent",className:"mx-2 mb-10",children:z.map(t=>e.jsxs(X,{eventKey:t.value,className:`mb-2 ${m.value===t.value?"bg-gray-100 dark:bg-gray-700":""}`,onSelect:()=>n(t),children:[e.jsx("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:t.icon}),e.jsx("span",{children:t.label})]},t.value))}),e.jsx(L,{variant:"transparent",className:"mx-2 mb-6",children:e.jsx(sa,{label:"Labels",children:A.map(t=>e.jsxs(X,{eventKey:t.value,className:`mb-2 ${m.value===t.value?"bg-gray-100 dark:bg-gray-700":""}`,onSelect:()=>n(t),children:[e.jsx(ve,{className:"ltr:mr-2 rtl:ml-2",innerClass:t.dotClass}),e.jsx("span",{children:t.label})]},t.value))})})]}),e.jsx("div",{className:"mx-4 mb-4",children:e.jsx(aa,{})})]})})},la=()=>{const s=u(n=>n.crmMail.data.sideBarExpand),a=u(n=>n.crmMail.data.mobileSideBarExpand),l=v(),{smaller:m}=P(),c=()=>{l(xe(!1))};return m.xl?e.jsx(ye,{bodyClass:"p-0",title:"Mail",isOpen:a,placement:"left",width:280,onClose:c,onRequestClose:c,children:e.jsx(Y,{})}):e.jsx("div",{className:S("w-[280px] absolute top-0 bottom-0 ease-in-out duration-300 bg-white dark:bg-gray-800 ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600 z-10",s?"ltr:left-0 rtl:right-0":"ltr:left-[-280px] rtl:right-[-280px]"),children:e.jsx(Y,{})})},ta=/(<([^>]+)>)/gi,ra=({sideBarExpand:s,mobileSidebarExpand:a})=>{const l=v(),{smaller:m}=P(),c=()=>{l(Xe(!s))},n=()=>{l(xe(!a))};return e.jsx(j,{icon:m.xl?a?e.jsx(K,{}):e.jsx(W,{}):s?e.jsx(K,{}):e.jsx(W,{}),size:"sm",variant:"plain",shape:"circle",onClick:m.xl?n:c})},ia=()=>{const s=v(),a=u(r=>r.crmMail.data.mailList),l=u(r=>r.crmMail.data.selectedMailId),m=u(r=>r.crmMail.data.mailListLoading),c=u(r=>r.crmMail.data.sideBarExpand),n=u(r=>r.crmMail.data.mobileSideBarExpand),o=u(r=>r.crmMail.data.selectedCategory),t=u(r=>r.theme.direction),p=ae(),d=se(),g=r=>{s(F(r))};h.useEffect(()=>{const r=d.pathname.substring(d.pathname.lastIndexOf("/")+1),i={category:r};r==="mail"&&(i.category="inbox"),g(i)},[d.pathname]);const b=r=>{if(!r)return"";const i=r.replace(ta,"");return i.length>60?i.substring(0,57)+"...":i},N=(r,i)=>{r.stopPropagation(),s(I(i)),s(D(!1)),p(`${d.pathname}?mail=${i}`,{replace:!0})};return e.jsxs("div",{className:S("min-w-[360px] ease-in-out duration-300 relative flex flex-auto flex-col ltr:border-r rtl:border-l border-gray-200 dark:border-gray-600",c&&"ltr:xl:ml-[280px] rtl:xl:mr-[280px]",l?"hidden xl:flex":"xs:flex"),children:[e.jsx("div",{className:"relative flex flex-0 items-center justify-between min-h-[55px] border-gray-200 dark:border-gray-600",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ra,{sideBarExpand:c,mobileSidebarExpand:n}),e.jsx("h6",{children:o.label})]})}),e.jsx($,{autoHide:!0,direction:t,children:e.jsx(le,{type:a.length>0?"cover":"default",spinnerClass:a.length>0?"hidden":"",loading:m,children:a.map(r=>e.jsx("div",{className:"relative flex border-b border-gray-200 dark:border-gray-600 last:border-0 hover:bg-hover",onClick:i=>N(i,r.id),children:e.jsxs("div",{className:`${l===r.id?"bg-gray-50 dark:bg-gray-700":""} w-full py-6 pr-4 pl-5 cursor-pointer select-none hover:bg-gray-50 hover:dark:bg-gray-700 flex`,children:[e.jsx("div",{className:"ltr:mr-2 rtl:ml-2",children:e.jsx(oe,{shape:"circle",size:25,src:r.avatar})}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold truncate text-gray-900 dark:text-gray-100",children:r.name}),r.flagged&&e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx(ne,{className:"text-red-500"})})]}),e.jsxs("div",{className:"flex items-center text-lg",children:[r.message[0].attachment.length>0&&e.jsx(ke,{}),r.starred&&e.jsx(ce,{className:"text-amber-500 ltr:ml-1 rtl:mr-1"})]})]}),e.jsxs("div",{className:"flex flex-auto w-full justify-between",children:[e.jsx("p",{children:b(r.message[0].content)}),e.jsx("div",{className:"ltr:ml-2 rtl:mr-2",children:e.jsx("span",{className:"whitespace-nowrap",children:r.message[0].date})})]})]})]})},r.id))})})]})},Z=()=>{const s=v(),{smaller:a}=P(),l=()=>{s(T({})),s(I(""))};return a.xl?e.jsx(j,{icon:e.jsx(De,{}),variant:"plain",shape:"circle",size:"sm",onClick:l}):e.jsx(e.Fragment,{})},na=s=>{const{starred:a,flagged:l,isReply:m,mailId:c,onStarToggle:n,onFlagToggle:o,onMailSend:t,onMailReply:p}=s,d=v(),g=u(f=>f.crmMail.data.mailList),b=()=>{d(D(!0)),p==null||p()},N=()=>{d(D(!1))},r=()=>{t==null||t()},i=()=>{const f=y("starred");d(J(f)),n==null||n()},x=()=>{const f=y("flagged");d(J(f)),o==null||o()},y=f=>{let M=E(g);return M=M.map(R=>(R.id===c&&(R[f]=!R[f]),R)),M};return e.jsx("div",{className:S("relative flex items-center min-h-[55px] px-4 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"),children:m?e.jsxs("div",{className:"flex items-center xl:justify-end justify-between gap-2 w-full",children:[e.jsx(Z,{}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{size:"sm",icon:e.jsx(ie,{}),onClick:N,children:"Discard"}),e.jsx(j,{variant:"solid",size:"sm",icon:e.jsx(te,{}),onClick:r,children:"Send"})]})]}):e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{}),e.jsx(j,{size:"sm",icon:e.jsx(Se,{}),onClick:b,children:e.jsx("span",{className:"hidden sm:block",children:"Reply"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(qe,{size:"sm",children:[e.jsx(j,{size:"sm",icon:e.jsx("span",{className:"text-amber-500",children:a?e.jsx(ce,{}):e.jsx(re,{})}),onClick:i,children:e.jsx("span",{className:"hidden sm:block",children:a?"Starred":"Star"})}),e.jsx(j,{size:"sm",icon:e.jsx("span",{className:"text-red-500",children:l?e.jsx(Re,{}):e.jsx(ne,{})}),onClick:x,children:e.jsx("span",{className:"hidden sm:block",children:l?"Flagged":"Flag"})})]}),e.jsx(Q,{placement:"bottom-end",renderTitle:e.jsx(j,{size:"sm",icon:e.jsx(Be,{}),children:e.jsx("span",{className:"hidden sm:block",children:"Move to"})}),children:z.map(f=>e.jsxs(Q.Item,{eventKey:f.value,children:[e.jsx("span",{className:"text-xl ltr:mr-2 rtl:ml-2",children:f.icon}),e.jsx("span",{children:f.label})]},f.value))})]})]})})},ca=s=>{switch(s){case"doc":return e.jsx(_e,{className:"text-blue-500"});case"xls":return e.jsx(Ve,{className:"text-emerald-500"});case"pdf":return e.jsx(Qe,{className:"text-red-500"});case"jpg":return e.jsx(V,{});case"png":return e.jsx(V,{});default:return e.jsx(We,{})}},pe=h.forwardRef((s,a)=>{var n;const{mail:l={},children:m}=s,c=h.useMemo(()=>A.find(o=>o.value===l.label),[l.label]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 px-4 py-8 shadow-sm border-b border-gray-200 dark:border-gray-600 md:flex items-center justify-between",children:[e.jsx("h5",{children:l.title}),l.label&&e.jsx(Ge,{prefix:!0,prefixClass:c==null?void 0:c.dotClass,children:c==null?void 0:c.label})]}),e.jsx($,{ref:a,autoHide:!0,children:e.jsxs("div",{className:"m-6 h-full",children:[m,(n=l.message)==null?void 0:n.map(o=>{var t,p;return e.jsx("div",{className:"pb-6",children:e.jsxs(de,{children:[e.jsxs("div",{className:"md:flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(oe,{shape:"circle",src:o.avatar}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold truncate text-gray-900 dark:text-gray-100",children:o.name}),e.jsxs("div",{children:["To:"," ",(t=l.mail)==null?void 0:t.map((d,g)=>e.jsx("span",{children:d},d+g))]})]})]}),e.jsx(Je,{icon:e.jsx(Ie,{className:"text-lg"}),children:e.jsx("span",{className:"font-semibold",children:o.date})})]}),e.jsx("div",{className:"mt-8",children:Ke(o.content)}),((p=o.attachment)==null?void 0:p.length)>0&&e.jsx("div",{className:"mt-6 md:flex",children:o.attachment.map(d=>e.jsxs("div",{className:"min-w-full md:min-w-[200px] flex items-center md:mb-0 mb-2 ltr:md:mr-3 rtl:md:ml-3 cursor-pointer select-none border px-4 py-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("div",{className:"text-3xl",children:ca(d.type)}),e.jsxs("div",{className:"ltr:ml-2 rtl:mr-2",children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-gray-100",children:d.file}),e.jsx("span",{className:"",children:d.size})]})]},d.file))})]})},o.id)})]})})]})});pe.displayName="MailDetailContent";const oa=()=>{const s=ge(),a=v(),l=s.get("mail"),m=h.useRef(null),c=h.useRef(null),n=u(i=>i.crmMail.data.mail),o=u(i=>i.crmMail.data.mailLoading),t=u(i=>i.crmMail.data.selectedMailId),p=u(i=>i.crmMail.data.reply),d=()=>{l&&a(H({id:l}))},g=()=>{const i=E(n);i.starred=!i.starred,a(T(i))},b=()=>{const i=E(n);i.flagged=!i.flagged,a(T(i))},N=()=>{var i,x;(x=(i=c.current)==null?void 0:i.formikRef)==null||x.submitForm()},r=()=>{const i=setTimeout(()=>{var x,y;return(y=(x=c.current)==null?void 0:x.editorRef)==null?void 0:y.focus()},100);return()=>{clearTimeout(i)}};return h.useEffect(()=>{t&&d()},[t]),h.useEffect(()=>{!t&&l&&a(I(l))},[]),e.jsx("div",{className:S(l&&!_(n)&&!o?"block xl:flex":"hidden xl:flex","flex-col w-full bg-gray-100 dark:bg-gray-900"),children:l&&!_(n)?o?e.jsx(le,{loading:!0}):e.jsxs(e.Fragment,{children:[e.jsx(na,{isReply:p,starred:n.starred,flagged:n.flagged,mailId:n.id,onStarToggle:g,onFlagToggle:b,onMailSend:N,onMailReply:r}),e.jsx(pe,{ref:m,mail:n,children:p&&e.jsx("div",{className:"pb-6",children:e.jsx(de,{children:e.jsx(G,{ref:c,mode:"reply",mail:n})})})})]}):e.jsxs("div",{className:"flex flex-col justify-center items-center h-full",children:[e.jsx(Pe,{className:"max-w-[200px]",src:"/img/others/no-mail-selected.png",darkModeSrc:"/img/others/no-mail-selected-dark.png"}),e.jsx("div",{className:"mt-4 text-2xl font-semibold",children:"Select a mail to read"})]})})},da=()=>e.jsxs("div",{className:"flex flex-auto w-full",children:[e.jsx(ia,{}),e.jsx(oa,{})]});je("crmMail",Ze);const ma=()=>e.jsxs(be,{className:"h-full overflow-hidden",bodyClass:"p-0 h-full absolute inset-0 flex min-w-0 overflow-hidden",children:[e.jsx(la,{}),e.jsx(da,{})]}),ts=ma;export{ts as default};
