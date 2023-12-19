import{a4 as T,r as Te,m as qe}from"./index-0504f3e5.js";var Y={},Z={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(Z);var f={},x=T&&T.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),_=T&&T.__assign||function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});f.cloneNode=f.hasChildren=f.isDocument=f.isDirective=f.isComment=f.isText=f.isCDATA=f.isTag=f.Element=f.Document=f.CDATA=f.NodeWithChildren=f.ProcessingInstruction=f.Comment=f.Text=f.DataNode=f.Node=void 0;var g=Z,J=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),K(this,t)},e}();f.Node=J;var D=function(e){x(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(J);f.DataNode=D;var be=function(e){x(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(D);f.Text=be;var xe=function(e){x(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(D);f.Comment=xe;var Ce=function(e){x(t,e);function t(r,n){var a=e.call(this,n)||this;return a.name=r,a.type=g.ElementType.Directive,a}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(D);f.ProcessingInstruction=Ce;var M=function(e){x(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(J);f.NodeWithChildren=M;var Se=function(e){x(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(M);f.CDATA=Se;var Oe=function(e){x(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(M);f.Document=Oe;var we=function(e){x(t,e);function t(r,n,a,l){a===void 0&&(a=[]),l===void 0&&(l=r==="script"?g.ElementType.Script:r==="style"?g.ElementType.Style:g.ElementType.Tag);var c=e.call(this,a)||this;return c.name=r,c.attribs=n,c.type=l,c}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var a,l;return{name:n,value:r.attribs[n],namespace:(a=r["x-attribsNamespace"])===null||a===void 0?void 0:a[n],prefix:(l=r["x-attribsPrefix"])===null||l===void 0?void 0:l[n]}})},enumerable:!1,configurable:!0}),t}(M);f.Element=we;function ke(e){return(0,g.isTag)(e)}f.isTag=ke;function Ae(e){return e.type===g.ElementType.CDATA}f.isCDATA=Ae;function _e(e){return e.type===g.ElementType.Text}f.isText=_e;function Pe(e){return e.type===g.ElementType.Comment}f.isComment=Pe;function Ne(e){return e.type===g.ElementType.Directive}f.isDirective=Ne;function Re(e){return e.type===g.ElementType.Root}f.isDocument=Re;function Ye(e){return Object.prototype.hasOwnProperty.call(e,"children")}f.hasChildren=Ye;function K(e,t){t===void 0&&(t=!1);var r;if(_e(e))r=new be(e.data);else if(Pe(e))r=new xe(e.data);else if(ke(e)){var n=t?U(e.children):[],a=new we(e.name,_({},e.attribs),n);n.forEach(function(i){return i.parent=a}),e.namespace!=null&&(a.namespace=e.namespace),e["x-attribsNamespace"]&&(a["x-attribsNamespace"]=_({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(a["x-attribsPrefix"]=_({},e["x-attribsPrefix"])),r=a}else if(Ae(e)){var n=t?U(e.children):[],l=new Se(n);n.forEach(function(s){return s.parent=l}),r=l}else if(Re(e)){var n=t?U(e.children):[],c=new Oe(n);n.forEach(function(s){return s.parent=c}),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),r=c}else if(Ne(e)){var o=new Ce(e.name,e.data);e["x-name"]!=null&&(o["x-name"]=e["x-name"],o["x-publicId"]=e["x-publicId"],o["x-systemId"]=e["x-systemId"]),r=o}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}f.cloneNode=K;function U(e){for(var t=e.map(function(n){return K(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=T&&T.__createBinding||(Object.create?function(o,i,s,p){p===void 0&&(p=s);var h=Object.getOwnPropertyDescriptor(i,s);(!h||("get"in h?!i.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(o,p,h)}:function(o,i,s,p){p===void 0&&(p=s),o[p]=i[s]}),r=T&&T.__exportStar||function(o,i){for(var s in o)s!=="default"&&!Object.prototype.hasOwnProperty.call(i,s)&&t(i,o,s)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=Z,a=f;r(f,e);var l={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},c=function(){function o(i,s,p){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof s=="function"&&(p=s,s=l),typeof i=="object"&&(s=i,i=void 0),this.callback=i??null,this.options=s??l,this.elementCB=p??null}return o.prototype.onparserinit=function(i){this.parser=i},o.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},o.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},o.prototype.onerror=function(i){this.handleCallback(i)},o.prototype.onclosetag=function(){this.lastNode=null;var i=this.tagStack.pop();this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(i)},o.prototype.onopentag=function(i,s){var p=this.options.xmlMode?n.ElementType.Tag:void 0,h=new a.Element(i,s,void 0,p);this.addNode(h),this.tagStack.push(h)},o.prototype.ontext=function(i){var s=this.lastNode;if(s&&s.type===n.ElementType.Text)s.data+=i,this.options.withEndIndices&&(s.endIndex=this.parser.endIndex);else{var p=new a.Text(i);this.addNode(p),this.lastNode=p}},o.prototype.oncomment=function(i){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=i;return}var s=new a.Comment(i);this.addNode(s),this.lastNode=s},o.prototype.oncommentend=function(){this.lastNode=null},o.prototype.oncdatastart=function(){var i=new a.Text(""),s=new a.CDATA([i]);this.addNode(s),i.parent=s,this.lastNode=i},o.prototype.oncdataend=function(){this.lastNode=null},o.prototype.onprocessinginstruction=function(i,s){var p=new a.ProcessingInstruction(i,s);this.addNode(p)},o.prototype.handleCallback=function(i){if(typeof this.callback=="function")this.callback(i,this.dom);else if(i)throw i},o.prototype.addNode=function(i){var s=this.tagStack[this.tagStack.length-1],p=s.children[s.children.length-1];this.options.withStartIndices&&(i.startIndex=this.parser.startIndex),this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),s.children.push(i),p&&(i.prev=p,p.next=i),i.parent=s,this.lastNode=null},o}();e.DomHandler=c,e.default=c})(Y);var ae="html",oe="head",P="body",Ze=/<([a-zA-Z]+[0-9]?)/,le=/<head[^]*>/i,se=/<body[^]*>/i,R=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},W=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},ce=typeof window=="object"&&window.DOMParser;if(typeof ce=="function"){var Je=new ce,Ke="text/html";W=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),Je.parseFromString(e,Ke)},R=W}if(typeof document=="object"&&document.implementation){var N=document.implementation.createHTMLDocument();R=function(e,t){if(t){var r=N.documentElement.querySelector(t);return r.innerHTML=e,N}return N.documentElement.innerHTML=e,N}}var G=typeof document=="object"?document.createElement("template"):{},q;G.content&&(q=function(e){return G.innerHTML=e,G.content.childNodes});function Qe(e){var t,r=e.match(Ze);r&&r[1]&&(t=r[1].toLowerCase());var n,a,l;switch(t){case ae:return n=W(e),le.test(e)||(a=n.querySelector(oe),a&&a.parentNode.removeChild(a)),se.test(e)||(a=n.querySelector(P),a&&a.parentNode.removeChild(a)),n.querySelectorAll(ae);case oe:case P:return n=R(e),l=n.querySelectorAll(t),se.test(e)&&le.test(e)?l[0].parentNode.childNodes:l;default:return q?q(e):(a=R(e,P).querySelector(P),a.childNodes)}}var et=Qe,Q={},Ie={};Ie.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"];var L=Y,tt=Ie,ue=tt.CASE_SENSITIVE_TAG_NAMES,rt=L.Comment,nt=L.Element,it=L.ProcessingInstruction,at=L.Text,De={},X;for(var $=0,ot=ue.length;$<ot;$++)X=ue[$],De[X.toLowerCase()]=X;function lt(e){return De[e]}function Me(e){for(var t={},r,n=0,a=e.length;n<a;n++)r=e[n],t[r.name]=r.value;return t}function st(e){e=e.toLowerCase();var t=lt(e);return t||e}function Le(e,t,r){t=t||null;for(var n=[],a,l=0,c=e.length;l<c;l++){var o=e[l],i;switch(o.nodeType){case 1:a=st(o.nodeName),i=new nt(a,Me(o.attributes)),i.children=Le(a==="template"?o.content.childNodes:o.childNodes,i);break;case 3:i=new at(o.nodeValue);break;case 8:i=new rt(o.nodeValue);break;default:continue}var s=n[l-1]||null;s&&(s.next=i),i.parent=t,i.prev=s,i.next=null,n.push(i)}return r&&(i=new it(r.substring(0,r.indexOf(" ")).toLowerCase(),r),i.next=n[0]||null,i.parent=t,n.unshift(i),n[1]&&(n[1].prev=n[0])),n}Q.formatAttributes=Me;Q.formatDOM=Le;var ct=et,ut=Q,ft=ut.formatDOM,pt=/<(![a-zA-Z\s]+)>/;function dt(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(e==="")return[];var t=e.match(pt),r;return t&&t[1]&&(r=t[1]),ft(ct(e),null,r)}var ht=dt,y={},j={},mt=0;j.SAME=mt;var vt=1;j.CAMELCASE=vt;j.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};Object.defineProperty(y,"__esModule",{value:!0});function gt(e,t){return yt(e)||Et(e,t)||Tt(e,t)||bt()}function yt(e){if(Array.isArray(e))return e}function Et(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,l=!1,c,o;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(i){l=!0,o=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(l)throw o}}return n}}function Tt(e,t){if(e){if(typeof e=="string")return fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fe(e,t)}}function fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function bt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var je=0,C=1,F=2,H=3,ee=4,Fe=5,He=6;function xt(e){return m.hasOwnProperty(e)?m[e]:null}function v(e,t,r,n,a,l,c){this.acceptsBooleans=t===F||t===H||t===ee,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var m={},Ct=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];Ct.forEach(function(e){m[e]=new v(e,je,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=gt(e,2),r=t[0],n=t[1];m[r]=new v(r,C,!1,n,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new v(e,F,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new v(e,F,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){m[e]=new v(e,H,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){m[e]=new v(e,H,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){m[e]=new v(e,ee,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){m[e]=new v(e,He,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){m[e]=new v(e,Fe,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-\:]([a-z])/g,re=function(t){return t[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(te,re);m[t]=new v(t,C,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(te,re);m[t]=new v(t,C,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,re);m[t]=new v(t,C,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){m[e]=new v(e,C,!1,e.toLowerCase(),null,!1,!1)});var St="xlinkHref";m[St]=new v("xlinkHref",C,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){m[e]=new v(e,C,!1,e.toLowerCase(),null,!0,!0)});var ne=j,Ot=ne.CAMELCASE,wt=ne.SAME,pe=ne.possibleStandardNames,kt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",At=kt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",_t=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+At+"]*$")),Pt=Object.keys(pe).reduce(function(e,t){var r=pe[t];return r===wt?e[t]=t:r===Ot?e[t.toLowerCase()]=t:e[t]=r,e},{});y.BOOLEAN=H;y.BOOLEANISH_STRING=F;y.NUMERIC=Fe;y.OVERLOADED_BOOLEAN=ee;y.POSITIVE_NUMERIC=He;y.RESERVED=je;y.STRING=C;y.getPropertyInfo=xt;y.isCustomAttribute=_t;y.possibleStandardNames=Pt;var ze={},ie={exports:{}},de=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Nt=/\n/g,Rt=/^\s*/,It=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Dt=/^:\s*/,Mt=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Lt=/^[;\s]*/,jt=/^\s+|\s+$/g,Ft=`
`,he="/",me="*",S="",Ht="comment",zt="declaration",Bt=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function a(d){var u=d.match(Nt);u&&(r+=u.length);var E=d.lastIndexOf(Ft);n=~E?d.length-E:n+d.length}function l(){var d={line:r,column:n};return function(u){return u.position=new c(d),s(),u}}function c(d){this.start=d,this.end={line:r,column:n},this.source=t.source}c.prototype.content=e;function o(d){var u=new Error(t.source+":"+r+":"+n+": "+d);if(u.reason=d,u.filename=t.source,u.line=r,u.column=n,u.source=e,!t.silent)throw u}function i(d){var u=d.exec(e);if(u){var E=u[0];return a(E),e=e.slice(E.length),u}}function s(){i(Rt)}function p(d){var u;for(d=d||[];u=h();)u!==!1&&d.push(u);return d}function h(){var d=l();if(!(he!=e.charAt(0)||me!=e.charAt(1))){for(var u=2;S!=e.charAt(u)&&(me!=e.charAt(u)||he!=e.charAt(u+1));)++u;if(u+=2,S===e.charAt(u-1))return o("End of comment missing");var E=e.slice(2,u-2);return n+=2,a(E),e=e.slice(u),n+=2,d({type:Ht,comment:E})}}function k(){var d=l(),u=i(It);if(u){if(h(),!i(Dt))return o("property missing ':'");var E=i(Mt),We=d({type:zt,property:ve(u[0].replace(de,S)),value:E?ve(E[0].replace(de,S)):S});return i(Lt),We}}function V(){var d=[];p(d);for(var u;u=k();)u!==!1&&(d.push(u),p(d));return d}return s(),V()};function ve(e){return e?e.replace(jt,S):S}var Vt=Bt;function Be(e,t){var r=null;if(!e||typeof e!="string")return r;for(var n,a=Vt(e),l=typeof t=="function",c,o,i=0,s=a.length;i<s;i++)n=a[i],c=n.property,o=n.value,l?t(c,o,n):o&&(r||(r={}),r[c]=o);return r}ie.exports=Be;ie.exports.default=Be;var Ut=ie.exports,z={};z.__esModule=!0;z.camelCase=void 0;var Gt=/^--[a-zA-Z0-9-]+$/,Xt=/-([a-z])/g,$t=/^[^-]+$/,Wt=/^-(webkit|moz|ms|o|khtml)-/,qt=/^-(ms)-/,Yt=function(e){return!e||$t.test(e)||Gt.test(e)},Zt=function(e,t){return t.toUpperCase()},ge=function(e,t){return"".concat(t,"-")},Jt=function(e,t){return t===void 0&&(t={}),Yt(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(qt,ge):e=e.replace(Wt,ge),e.replace(Xt,Zt))};z.camelCase=Jt;(function(e){var t=T&&T.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};e.__esModule=!0;var r=t(Ut),n=z;function a(l,c){var o={};return!l||typeof l!="string"||(0,r.default)(l,function(i,s){i&&s&&(o[(0,n.camelCase)(i,c)]=s)}),o}e.default=a})(ze);var Kt=Te,Qt=ze.default;function er(e,t){if(!e||typeof e!="object")throw new TypeError("First argument must be an object");var r,n,a=typeof t=="function",l={},c={};for(r in e){if(n=e[r],a&&(l=t(r,n),l&&l.length===2)){c[l[0]]=l[1];continue}typeof n=="string"&&(c[n]=r)}return c}function tr(e,t){if(e.indexOf("-")===-1)return t&&typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rr={reactCompat:!0};function nr(e,t){if(e!=null)try{t.style=Qt(e,rr)}catch{t.style={}}}var ir=Kt.version.split(".")[0]>=16,Ve=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function ar(e){return!Ve.has(e.name)}var Ue={PRESERVE_CUSTOM_ATTRIBUTES:ir,invertObject:er,isCustomComponent:tr,setStyleProp:nr,canTextBeChildOfNode:ar,elementsWithNoTextChildren:Ve},A=y,ye=Ue,or=["checked","value"],lr=["input","select","textarea"],sr={reset:!0,submit:!0},Ge=function(t,r){t=t||{};var n,a,l,c,o,i={},s=t.type&&sr[t.type];for(n in t){if(l=t[n],A.isCustomAttribute(n)){i[n]=l;continue}if(a=n.toLowerCase(),c=Ee(a),c){switch(o=A.getPropertyInfo(c),or.indexOf(c)!==-1&&lr.indexOf(r)!==-1&&!s&&(c=Ee("default"+a)),i[c]=l,o&&o.type){case A.BOOLEAN:i[c]=!0;break;case A.OVERLOADED_BOOLEAN:l===""&&(i[c]=!0);break}continue}ye.PRESERVE_CUSTOM_ATTRIBUTES&&(i[n]=l)}return ye.setStyleProp(t.style,i),i};function Ee(e){return A.possibleStandardNames[e]}var cr=Te,ur=Ge,I=Ue,fr=I.setStyleProp,pr=I.canTextBeChildOfNode;function Xe(e,t){t=t||{};for(var r=t.library||cr,n=r.cloneElement,a=r.createElement,l=r.isValidElement,c=[],o,i,s=typeof t.replace=="function",p,h,k,V=t.trim,d=0,u=e.length;d<u;d++){if(o=e[d],s&&(p=t.replace(o),l(p))){u>1&&(p=n(p,{key:p.key||d})),c.push(p);continue}if(o.type==="text"){if(i=!o.data.trim().length,i&&o.parent&&!pr(o.parent)||V&&i)continue;c.push(o.data);continue}switch(h=o.attribs,dr(o)?fr(h.style,h):h&&(h=ur(h,o.name)),k=null,o.type){case"script":case"style":o.children[0]&&(h.dangerouslySetInnerHTML={__html:o.children[0].data});break;case"tag":o.name==="textarea"&&o.children[0]?h.defaultValue=o.children[0].data:o.children&&o.children.length&&(k=Xe(o.children,t));break;default:continue}u>1&&(h.key=d),c.push(a(o.name,h,k))}return c.length===1?c[0]:c}function dr(e){return I.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&I.isCustomComponent(e.name,e.attribs)}var hr=Xe,B=Y,w=ht,mr=Ge,$e=hr;w=typeof w.default=="function"?w.default:w;var vr={lowerCaseAttributeNames:!1};function b(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");return e===""?[]:(t=t||{},$e(w(e,t.htmlparser2||vr),t))}b.domToReact=$e;b.htmlToDOM=w;b.attributesToProps=mr;b.Comment=B.Comment;b.Element=B.Element;b.ProcessingInstruction=B.ProcessingInstruction;b.Text=B.Text;var gr=b;b.default=b;const O=qe(gr);O.domToReact;O.htmlToDOM;O.attributesToProps;O.Comment;O.Element;O.ProcessingInstruction;O.Text;export{O as H,Bt as i};
