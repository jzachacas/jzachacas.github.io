import{u as dt,a as M,m as Fe,b as pe,M as Re,V as Oe,c as De,d as Le,R as ct,e as ft,f as vt,g as mt,L as gt,I as yt,h as ht,i as ee,j as W,k as pt}from"./VRow.21182b0c.js";import{p as U,i as be,c,r as F,a as oe,g as bt,o as Me,b as ie,d as Ve,f as Vt,e as z,T as xt,h as Ee,j as Te,k as Ct,m as de,l as ze,u as It,n as r,w as ne,q as Z,s as te,t as St,v as L,x as Ne,y as le,z as kt,A as $t,B as _t,C as _e,D as wt,I as K,E as se,F as ce,G as Ue,H as xe,J as Bt,K as Pt,L as At,M as Ce,N as fe,O as qe,P as j,S as we,Q as He,R as We,U as ue,V as Ft,W as Rt,X as Ot,Y as Dt,Z as A,_ as Lt,$ as je}from"./index.2777d0d4.js";class me{constructor(s){let{x:a,y:t,width:n,height:o}=s;this.x=a,this.y=t,this.width=n,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Mt(e){const s=e.getBoundingClientRect(),a=getComputedStyle(e),t=a.transform;if(t){let n,o,l,i,u;if(t.startsWith("matrix3d("))n=t.slice(9,-1).split(/, /),o=+n[0],l=+n[5],i=+n[12],u=+n[13];else if(t.startsWith("matrix("))n=t.slice(7,-1).split(/, /),o=+n[0],l=+n[3],i=+n[4],u=+n[5];else return new me(s);const f=a.transformOrigin,d=s.x-i-(1-o)*parseFloat(f),m=s.y-u-(1-l)*parseFloat(f.slice(f.indexOf(" ")+1)),v=o?s.width/o:e.offsetWidth+1,g=l?s.height/l:e.offsetHeight+1;return new me({x:d,y:m,width:v,height:g})}else return new me(s)}function Et(e,s,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};const t=e.animate(s,a);return typeof t.finished>"u"&&(t.finished=new Promise(n=>{t.onfinish=()=>{n(t)}})),t}const Tt="cubic-bezier(0.4, 0, 0.2, 1)",Be=Symbol.for("vuetify:layout"),zt=Symbol.for("vuetify:layout-item"),Pe=1e3,Nt=U({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ut=(e,s,a,t)=>{let n={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...n}}];for(const l of e){const i=s.get(l),u=a.get(l),f=t.get(l);if(!i||!u||!f)continue;const d={...n,[i.value]:parseInt(n[i.value],10)+(f.value?parseInt(u.value,10):0)};o.push({id:l,layer:d}),n=d}return o};function qt(e){const s=be(Be,null),a=c(()=>s?s.rootZIndex.value-100:Pe),t=F([]),n=oe(new Map),o=oe(new Map),l=oe(new Map),i=oe(new Map),u=oe(new Map),{resizeRef:f,contentRect:d}=dt(),m=c(()=>{var y;const h=new Map,C=(y=e.overlaps)!=null?y:[];for(const O of C.filter(b=>b.includes(":"))){const[b,S]=O.split(":");if(!t.value.includes(b)||!t.value.includes(S))continue;const k=n.get(b),B=n.get(S),R=o.get(b),T=o.get(S);!k||!B||!R||!T||(h.set(S,{position:k.value,amount:parseInt(R.value,10)}),h.set(b,{position:B.value,amount:-parseInt(T.value,10)}))}return h}),v=c(()=>{const h=[...new Set([...l.values()].map(y=>y.value))].sort((y,O)=>y-O),C=[];for(const y of h){const O=t.value.filter(b=>{var S;return((S=l.get(b))==null?void 0:S.value)===y});C.push(...O)}return Ut(C,n,o,i)}),g=c(()=>!Array.from(u.values()).some(h=>h.value)),V=c(()=>v.value[v.value.length-1].layer),x=c(()=>({"--v-layout-left":ie(V.value.left),"--v-layout-right":ie(V.value.right),"--v-layout-top":ie(V.value.top),"--v-layout-bottom":ie(V.value.bottom),...g.value?void 0:{transition:"none"}})),P=c(()=>v.value.slice(1).map((h,C)=>{let{id:y}=h;const{layer:O}=v.value[C],b=o.get(y),S=n.get(y);return{id:y,...O,size:Number(b.value),position:S.value}})),_=h=>P.value.find(C=>C.id===h),w=bt("createLayout"),I=F(!1);Me(()=>{I.value=!0}),Ve(Be,{register:(h,C)=>{let{id:y,order:O,position:b,layoutSize:S,elementSize:k,active:B,disableTransitions:R,absolute:T}=C;l.set(y,O),n.set(y,b),o.set(y,S),i.set(y,B),R&&u.set(y,R);const D=Vt(zt,w==null?void 0:w.vnode).indexOf(h);D>-1?t.value.splice(D,0,y):t.value.push(y);const q=c(()=>P.value.findIndex(H=>H.id===y)),G=c(()=>a.value+v.value.length*2-q.value*2),Y=c(()=>{const H=b.value==="left"||b.value==="right",ae=b.value==="right",ut=b.value==="bottom",$e={[b.value]:0,zIndex:G.value,transform:`translate${H?"X":"Y"}(${(B.value?0:-110)*(ae||ut?-1:1)}%)`,position:T.value||a.value!==Pe?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!I.value)return $e;const N=P.value[q.value];if(!N)throw new Error(`[Vuetify] Could not find layout item "${y}"`);const ve=m.value.get(y);return ve&&(N[ve.position]+=ve.amount),{...$e,height:H?`calc(100% - ${N.top}px - ${N.bottom}px)`:k.value?`${k.value}px`:void 0,left:ae?void 0:`${N.left}px`,right:ae?`${N.right}px`:void 0,top:b.value!=="bottom"?`${N.top}px`:void 0,bottom:b.value!=="top"?`${N.bottom}px`:void 0,width:H?k.value?`${k.value}px`:void 0:`calc(100% - ${N.left}px - ${N.right}px)`}}),Q=c(()=>({zIndex:G.value-1}));return{layoutItemStyles:Y,layoutItemScrimStyles:Q,zIndex:G}},unregister:h=>{l.delete(h),n.delete(h),o.delete(h),i.delete(h),u.delete(h),t.value=t.value.filter(C=>C!==h)},mainRect:V,mainStyles:x,getLayoutItem:_,items:P,layoutRect:d,rootZIndex:a});const $=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),p=c(()=>({zIndex:a.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:$,layoutStyles:p,getLayoutItem:_,items:P,layoutRect:d,layoutRef:f}}function E(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",a=arguments.length>2?arguments[2]:void 0;return z({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:a},origin:{type:String,default:s}},setup(t,n){let{slots:o}=n;return()=>{const l=t.group?xt:Ee;return Te(l,{name:e,mode:t.mode,onBeforeEnter(i){i.style.transformOrigin=t.origin},onLeave(i){if(t.leaveAbsolute){const{offsetTop:u,offsetLeft:f,offsetWidth:d,offsetHeight:m}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${u}px`,i.style.left=`${f}px`,i.style.width=`${d}px`,i.style.height=`${m}px`}t.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(t.leaveAbsolute&&i!=null&&i._transitionInitialStyles){const{position:u,top:f,left:d,width:m,height:v}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=u||"",i.style.top=f||"",i.style.left=d||"",i.style.width=m||"",i.style.height=v||""}}},o.default)}}})}function Ge(e,s){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return z({name:e,props:{mode:{type:String,default:a}},setup(t,n){let{slots:o}=n;return()=>Te(Ee,{name:e,...s},o.default)}})}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Ct(`offset-${a}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[a]:l.style[a]}},onEnter(l){const i=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const u=`${l[t]}px`;l.style[a]="0",l.offsetHeight,l.style.transition=i.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[a]=u})},onAfterEnter:o,onEnterCancelled:o,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[a]:l.style[a]},l.style.overflow="hidden",l.style[a]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[a]="0")},onAfterLeave:n,onLeaveCancelled:n};function n(l){e&&l._parent&&l._parent.classList.remove(e),o(l)}function o(l){const i=l._initialStyle[a];l.style.overflow=l._initialStyle.overflow,i!=null&&(l.style[a]=i),delete l._initialStyle}}E("fab-transition","center center","out-in");E("dialog-bottom-transition");E("dialog-top-transition");E("fade-transition");E("scale-transition");E("scroll-x-transition");E("scroll-x-reverse-transition");E("scroll-y-transition");E("scroll-y-reverse-transition");E("slide-x-transition");E("slide-x-reverse-transition");const Ze=E("slide-y-transition");E("slide-y-reverse-transition");Ge("expand-transition",Ke());const Ht=Ge("expand-x-transition",Ke("",!0));const Wt=z({name:"VApp",props:{...Nt({fullHeight:!0}),...de()},setup(e,s){let{slots:a}=s;const t=ze(e),{layoutClasses:n,layoutStyles:o,getLayoutItem:l,items:i,layoutRef:u}=qt(e),{rtlClasses:f}=It();return M(()=>{var d;return r("div",{ref:u,class:["v-application",t.themeClasses.value,n.value,f.value],style:o.value},[r("div",{class:"v-application__wrap"},[(d=a.default)==null?void 0:d.call(a)])])}),{getLayoutItem:l,items:i,theme:t}}});const jt=z({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Fe({transition:{component:Ze,leaveAbsolute:!0,group:!0}})},setup(e,s){let{slots:a}=s;const t=c(()=>ne(e.messages)),{textColorClasses:n,textColorStyles:o}=pe(c(()=>e.color));return M(()=>r(Re,{transition:e.transition,tag:"div",class:["v-messages",n.value],style:o.value,role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map((l,i)=>r("div",{class:"v-messages__message",key:`${i}-${t.value}`},[a.message?a.message({message:l}):l]))]})),{}}}),Xe=Symbol.for("vuetify:form"),Gt=U({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Kt(e){const s=Z(e,"modelValue"),a=c(()=>e.disabled),t=c(()=>e.readonly),n=F(!1),o=F([]),l=F([]);async function i(){const d=[];let m=!0;l.value=[],n.value=!0;for(const v of o.value){const g=await v.validate();if(g.length>0&&(m=!1,d.push({id:v.id,errorMessages:g})),!m&&e.fastFail)break}return l.value=d,n.value=!1,{valid:m,errors:l.value}}function u(){o.value.forEach(d=>d.reset()),s.value=null}function f(){o.value.forEach(d=>d.resetValidation()),l.value=[],s.value=null}return te(o,()=>{let d=0,m=0;const v=[];for(const g of o.value)g.isValid===!1?(m++,v.push({id:g.id,errorMessages:g.errorMessages})):g.isValid===!0&&d++;l.value=v,s.value=m>0?!1:d===o.value.length?!0:null},{deep:!0}),Ve(Xe,{register:d=>{let{id:m,validate:v,reset:g,resetValidation:V}=d;o.value.some(x=>x.id===m)&&St(`Duplicate input name "${m}"`),o.value.push({id:m,validate:v,reset:g,resetValidation:V,isValid:null,errorMessages:[]})},unregister:d=>{o.value=o.value.filter(m=>m.id!==d)},update:(d,m,v)=>{const g=o.value.find(V=>V.id===d);!g||(g.isValid=m,g.errorMessages=v)},isDisabled:a,isReadonly:t,isValidating:n,items:o,validateOn:L(e,"validateOn")}),{errors:l,isDisabled:a,isReadonly:t,isValidating:n,items:o,validate:i,reset:u,resetValidation:f}}function Zt(){return be(Xe,null)}const Je=U({focused:Boolean},"focus");function Ie(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ne();const a=Z(e,"focused"),t=c(()=>({[`${s}--focused`]:a.value}));function n(){a.value=!0}function o(){a.value=!1}return{focusClasses:t,isFocused:a,focus:n,blur:o}}const Xt=U({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Je()},"validation");function Jt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ne(),a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:le();const t=Z(e,"modelValue"),n=c(()=>e.validationValue===void 0?t.value:e.validationValue),o=Zt(),l=F([]),i=F(!0),u=c(()=>!!(ne(t.value===""?null:t.value).length||ne(n.value===""?null:n.value).length)),f=c(()=>!!(e.disabled||o!=null&&o.isDisabled.value)),d=c(()=>!!(e.readonly||o!=null&&o.isReadonly.value)),m=c(()=>e.errorMessages.length?ne(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):l.value),v=c(()=>e.error||m.value.length?!1:e.rules.length&&i.value?null:!0),g=F(!1),V=c(()=>({[`${s}--error`]:v.value===!1,[`${s}--dirty`]:u.value,[`${s}--disabled`]:f.value,[`${s}--readonly`]:d.value})),x=c(()=>{var $;return($=e.name)!=null?$:kt(a)});$t(()=>{o==null||o.register({id:x.value,validate:I,reset:_,resetValidation:w})}),_t(()=>{o==null||o.unregister(x.value)});const P=c(()=>e.validateOn||(o==null?void 0:o.validateOn.value)||"input");Me(()=>o==null?void 0:o.update(x.value,v.value,m.value)),_e(()=>P.value==="input",()=>{te(n,()=>{if(n.value!=null)I();else if(e.focused){const $=te(()=>e.focused,p=>{p||I(),$()})}})}),_e(()=>P.value==="blur",()=>{te(()=>e.focused,$=>{$||I()})}),te(v,()=>{o==null||o.update(x.value,v.value,m.value)});function _(){w(),t.value=null}function w(){i.value=!0,l.value=[]}async function I(){var p;const $=[];g.value=!0;for(const h of e.rules){if($.length>=((p=e.maxErrors)!=null?p:1))break;const y=await(typeof h=="function"?h:()=>h)(n.value);if(y!==!0){if(typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}$.push(y)}}return l.value=$,g.value=!1,i.value=!1,l.value}return{errorMessages:m,isDirty:u,isDisabled:f,isReadonly:d,isPristine:i,isValid:v,isValidating:g,reset:_,resetValidation:w,validate:I,validationClasses:V}}function Ye(e){const{t:s}=wt();function a(t){var u;let{name:n}=t;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[n],l=e[`onClick:${n}`],i=l&&o?s(`$vuetify.input.${o}`,(u=e.label)!=null?u:""):void 0;return r(Oe,{icon:e[`${n}Icon`],"aria-label":i,onClick:l},null)}return{InputIcon:a}}const Se=U({id:String,appendIcon:K,prependIcon:K,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":se,"onClick:append":se,...De(),...Xt()},"v-input"),ke=ce()({name:"VInput",props:{...Se()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:a,slots:t,emit:n}=s;const{densityClasses:o}=Le(e),{InputIcon:l}=Ye(e),i=le(),u=c(()=>e.id||`input-${i}`),f=c(()=>`${u.value}-messages`),{errorMessages:d,isDirty:m,isDisabled:v,isReadonly:g,isPristine:V,isValid:x,isValidating:P,reset:_,resetValidation:w,validate:I,validationClasses:$}=Jt(e,"v-input",u),p=c(()=>({id:u,messagesId:f,isDirty:m,isDisabled:v,isReadonly:g,isPristine:V,isValid:x,isValidating:P,reset:_,resetValidation:w,validate:I}));return M(()=>{var h,C,y,O,b;const S=!!(t.prepend||e.prependIcon),k=!!(t.append||e.appendIcon),B=!!((h=e.messages)!=null&&h.length||d.value.length),R=!e.hideDetails||e.hideDetails==="auto"&&(B||!!t.details);return r("div",{class:["v-input",`v-input--${e.direction}`,o.value,$.value]},[S&&r("div",{key:"prepend",class:"v-input__prepend"},[(C=t.prepend)==null?void 0:C.call(t,p.value),e.prependIcon&&r(l,{key:"prepend-icon",name:"prepend"},null)]),t.default&&r("div",{class:"v-input__control"},[(y=t.default)==null?void 0:y.call(t,p.value)]),k&&r("div",{key:"append",class:"v-input__append"},[e.appendIcon&&r(l,{key:"append-icon",name:"append"},null),(O=t.append)==null?void 0:O.call(t,p.value)]),R&&r("div",{class:"v-input__details"},[r(jt,{id:f.value,active:B,messages:d.value.length>0?d.value:e.messages},{message:t.message}),(b=t.details)==null?void 0:b.call(t,p.value)])])}),{reset:_,resetValidation:w,validate:I}}});function Qe(e){const s=Object.keys(ke.props).filter(a=>!Ue(a));return xe(e,s)}const et=z({name:"VLabel",props:{text:String,clickable:Boolean,...de()},setup(e,s){let{slots:a}=s;return M(()=>{var t;return r("label",{class:["v-label",{"v-label--clickable":e.clickable}]},[e.text,(t=a.default)==null?void 0:t.call(a)])}),{}}});const tt=Symbol.for("vuetify:selection-control-group"),nt=U({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:K,trueIcon:K,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Bt},...de(),...De()},"v-selection-control-group");z({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...nt()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const t=Z(e,"modelValue"),n=le(),o=c(()=>e.id||`v-selection-control-group-${n}`),l=c(()=>e.name||o.value),i=new Set;return Ve(tt,{modelValue:t,forceUpdate:()=>{i.forEach(u=>u())},onForceUpdate:u=>{i.add(u),Pt(()=>{i.delete(u)})}}),At({[e.defaultsTarget]:{color:L(e,"color"),disabled:L(e,"disabled"),density:L(e,"density"),error:L(e,"error"),inline:L(e,"inline"),modelValue:t,multiple:c(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:l,falseIcon:L(e,"falseIcon"),trueIcon:L(e,"trueIcon"),readonly:L(e,"readonly"),ripple:L(e,"ripple"),type:L(e,"type"),valueComparator:L(e,"valueComparator")}}),M(()=>{var u;return r("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],role:e.type==="radio"?"radiogroup":void 0},[(u=a.default)==null?void 0:u.call(a)])}),{}}});const lt=U({label:String,trueValue:null,falseValue:null,value:null,...nt()},"v-selection-control");function Yt(e){const s=be(tt,void 0),{densityClasses:a}=Le(e),t=Z(e,"modelValue"),n=c(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),o=c(()=>e.falseValue!==void 0?e.falseValue:!1),l=c(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),i=c({get(){const m=s?s.modelValue.value:t.value;return l.value?m.some(v=>e.valueComparator(v,n.value)):e.valueComparator(m,n.value)},set(m){if(e.readonly)return;const v=m?n.value:o.value;let g=v;l.value&&(g=m?[...ne(t.value),v]:ne(t.value).filter(V=>!e.valueComparator(V,n.value))),s?s.modelValue.value=g:t.value=g}}),{textColorClasses:u,textColorStyles:f}=pe(c(()=>i.value&&!e.error&&!e.disabled?e.color:void 0)),d=c(()=>i.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:a,trueValue:n,falseValue:o,model:i,textColorClasses:u,textColorStyles:f,icon:d}}const Qt=ce()({name:"VSelectionControl",directives:{Ripple:ct},inheritAttrs:!1,props:lt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:a,slots:t}=s;const{group:n,densityClasses:o,icon:l,model:i,textColorClasses:u,textColorStyles:f,trueValue:d}=Yt(e),m=le(),v=c(()=>e.id||`input-${m}`),g=F(!1),V=F(!1),x=F();n==null||n.onForceUpdate(()=>{x.value&&(x.value.checked=i.value)});function P(I){g.value=!0,(!we||we&&I.target.matches(":focus-visible"))&&(V.value=!0)}function _(){g.value=!1,V.value=!1}function w(I){e.readonly&&n&&He(()=>n.forceUpdate()),i.value=I.target.checked}return M(()=>{var I,$;const p=t.label?t.label({label:e.label,props:{for:v.value}}):e.label,[h,C]=Ce(a);return r("div",j({class:["v-selection-control",{"v-selection-control--dirty":i.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},o.value]},h),[r("div",{class:["v-selection-control__wrapper",u.value],style:f.value},[(I=t.default)==null?void 0:I.call(t),fe(r("div",{class:["v-selection-control__input"]},[l.value&&r(Oe,{key:"icon",icon:l.value},null),r("input",j({ref:x,checked:i.value,disabled:e.disabled,id:v.value,onBlur:_,onFocus:P,onInput:w,"aria-disabled":e.readonly,type:e.type,value:d.value,name:e.name,"aria-checked":e.type==="checkbox"?i.value:void 0},C),null),($=t.input)==null?void 0:$.call(t,{model:i,textColorClasses:u,textColorStyles:f,props:{onFocus:P,onBlur:_,id:v.value}})]),[[qe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),p&&r(et,{for:v.value,clickable:!0},{default:()=>[p]})])}),{isFocused:g,input:x}}}),at=U({indeterminate:Boolean,indeterminateIcon:{type:K,default:"$checkboxIndeterminate"},...lt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),ot=z({name:"VCheckboxBtn",props:at(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:a}=s;const t=Z(e,"indeterminate"),n=Z(e,"modelValue");function o(u){t.value&&(t.value=!1)}const l=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),i=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return M(()=>r(Qt,j(e,{modelValue:n.value,"onUpdate:modelValue":[u=>n.value=u,o],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:l.value,trueIcon:i.value,"aria-checked":e.indeterminate?"mixed":void 0}),a)),{}}});function en(e){return xe(e,Object.keys(ot.props))}const tn=z({name:"VCheckbox",inheritAttrs:!1,props:{...Se(),...at()},emits:{"update:focused":e=>!0},setup(e,s){let{attrs:a,slots:t}=s;const{isFocused:n,focus:o,blur:l}=Ie(e),i=le(),u=c(()=>e.id||`checkbox-${i}`);return M(()=>{const[f,d]=Ce(a),[m,v]=Qe(e),[g,V]=en(e);return r(ke,j({class:"v-checkbox"},f,m,{id:u.value,focused:n.value}),{...t,default:x=>{let{id:P,messagesId:_,isDisabled:w,isReadonly:I}=x;return r(ot,j(g,{id:P.value,"aria-describedby":_.value,disabled:w.value,readonly:I.value},d,{onFocus:o,onBlur:l}),t)}})}),{}}}),ge=Symbol("Forwarded refs");function it(e){for(var s=arguments.length,a=new Array(s>1?s-1:0),t=1;t<s;t++)a[t-1]=arguments[t];return e[ge]=a,new Proxy(e,{get(n,o){if(Reflect.has(n,o))return Reflect.get(n,o);for(const l of a)if(l.value&&Reflect.has(l.value,o)){const i=Reflect.get(l.value,o);return typeof i=="function"?i.bind(l.value):i}},getOwnPropertyDescriptor(n,o){const l=Reflect.getOwnPropertyDescriptor(n,o);if(l)return l;if(!(typeof o=="symbol"||o.startsWith("__"))){for(const i of a){if(!i.value)continue;const u=Reflect.getOwnPropertyDescriptor(i.value,o);if(u)return u;if("_"in i.value&&"setupState"in i.value._){const f=Reflect.getOwnPropertyDescriptor(i.value._.setupState,o);if(f)return f}}for(const i of a){let u=i.value&&Object.getPrototypeOf(i.value);for(;u;){const f=Reflect.getOwnPropertyDescriptor(u,o);if(f)return f;u=Object.getPrototypeOf(u)}}for(const i of a){const u=i.value&&i.value[ge];if(!u)continue;const f=u.slice();for(;f.length;){const d=f.shift(),m=Reflect.getOwnPropertyDescriptor(d.value,o);if(m)return m;const v=d.value&&d.value[ge];v&&f.push(...v)}}}}})}const nn=z({name:"VForm",props:{...Gt()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,s){let{slots:a,emit:t}=s;const n=Kt(e),o=F();function l(u){u.preventDefault(),n.reset()}function i(u){const f=u,d=n.validate();f.then=d.then.bind(d),f.catch=d.catch.bind(d),f.finally=d.finally.bind(d),t("submit",f),f.defaultPrevented||d.then(m=>{let{valid:v}=m;if(v){var g;(g=o.value)==null||g.submit()}}),f.preventDefault()}return M(()=>{var u;return r("form",{ref:o,class:"v-form",novalidate:!0,onReset:l,onSubmit:i},[(u=a.default)==null?void 0:u.call(a,n)])}),it(n,o)}});const re=z({name:"VFieldLabel",props:{floating:Boolean},setup(e,s){let{slots:a}=s;return M(()=>r(et,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},a)),{}}}),ln=["underlined","outlined","filled","solo","plain"],st=U({appendInnerIcon:K,bgColor:String,clearable:Boolean,clearIcon:{type:K,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:K,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ln.includes(e)},"onClick:clear":se,"onClick:appendInner":se,"onClick:prependInner":se,...de(),...ft()},"v-field"),rt=ce()({name:"VField",inheritAttrs:!1,props:{id:String,...Je(),...st()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:a,emit:t,slots:n}=s;const{themeClasses:o}=ze(e),{loaderClasses:l}=vt(e),{focusClasses:i,isFocused:u,focus:f,blur:d}=Ie(e),{InputIcon:m}=Ye(e),v=c(()=>e.dirty||e.active),g=c(()=>!e.singleLine&&!!(e.label||n.label)),V=le(),x=c(()=>e.id||`input-${V}`),P=c(()=>`${x.value}-messages`),_=F(),w=F(),I=F(),{backgroundColorClasses:$,backgroundColorStyles:p}=mt(L(e,"bgColor")),{textColorClasses:h,textColorStyles:C}=pe(c(()=>v.value&&u.value&&!e.error&&!e.disabled?e.color:void 0));te(v,b=>{if(g.value){const S=_.value.$el,k=w.value.$el;requestAnimationFrame(()=>{const B=Mt(S),R=k.getBoundingClientRect(),T=R.x-B.x,X=R.y-B.y-(B.height/2-R.height/2),D=R.width/.75,q=Math.abs(D-B.width)>1?{maxWidth:ie(D)}:void 0,G=getComputedStyle(S),Y=getComputedStyle(k),Q=parseFloat(G.transitionDuration)*1e3||150,H=parseFloat(Y.getPropertyValue("--v-field-label-scale")),ae=Y.getPropertyValue("color");S.style.visibility="visible",k.style.visibility="hidden",Et(S,{transform:`translate(${T}px, ${X}px) scale(${H})`,color:ae,...q},{duration:Q,easing:Tt,direction:b?"normal":"reverse"}).finished.then(()=>{S.style.removeProperty("visibility"),k.style.removeProperty("visibility")})})}},{flush:"post"});const y=c(()=>({isActive:v,isFocused:u,controlRef:I,blur:d,focus:f}));function O(b){b.target!==document.activeElement&&b.preventDefault(),t("click:control",b)}return M(()=>{var b,S,k;const B=e.variant==="outlined",R=n["prepend-inner"]||e.prependInnerIcon,T=!!(e.clearable||n.clear),X=!!(n["append-inner"]||e.appendInnerIcon||T),D=n.label?n.label({label:e.label,props:{for:x.value}}):e.label;return r("div",j({class:["v-field",{"v-field--active":v.value,"v-field--appended":X,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":R,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!D,[`v-field--variant-${e.variant}`]:!0},o.value,$.value,i.value,l.value],style:[p.value,C.value],onClick:O},a),[r("div",{class:"v-field__overlay"},null),r(gt,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:n.loader}),R&&r("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&r(m,{key:"prepend-icon",name:"prependInner"},null),(b=n["prepend-inner"])==null?void 0:b.call(n,y.value)]),r("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&g.value&&r(re,{key:"floating-label",ref:w,class:[h.value],floating:!0,for:x.value},{default:()=>[D]}),r(re,{ref:_,for:x.value},{default:()=>[D]}),(S=n.default)==null?void 0:S.call(n,{...y.value,props:{id:x.value,class:"v-field__input","aria-describedby":P.value},focus:f,blur:d})]),T&&r(Ht,{key:"clear"},{default:()=>[fe(r("div",{class:"v-field__clearable"},[n.clear?n.clear():r(m,{name:"clear"},null)]),[[We,e.dirty]])]}),X&&r("div",{key:"append",class:"v-field__append-inner"},[(k=n["append-inner"])==null?void 0:k.call(n,y.value),e.appendInnerIcon&&r(m,{key:"append-icon",name:"appendInner"},null)]),r("div",{class:["v-field__outline",h.value]},[B&&r(ue,null,[r("div",{class:"v-field__outline__start"},null),g.value&&r("div",{class:"v-field__outline__notch"},[r(re,{ref:w,floating:!0,for:x.value},{default:()=>[D]})]),r("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&g.value&&r(re,{ref:w,floating:!0,for:x.value},{default:()=>[D]})])])}),{controlRef:I}}});function an(e){const s=Object.keys(rt.props).filter(a=>!Ue(a));return xe(e,s)}const on=z({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Fe({transition:{component:Ze}})},setup(e,s){let{slots:a}=s;const t=c(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return M(()=>r(Re,{transition:e.transition},{default:()=>[fe(r("div",{class:"v-counter"},[a.default?a.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[We,e.active]])]})),{}}}),sn=["color","file","time","date","datetime-local","week","month"],rn=U({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Se(),...st()},"v-text-field"),J=ce()({name:"VTextField",directives:{Intersect:yt},inheritAttrs:!1,props:rn(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:a,emit:t,slots:n}=s;const o=Z(e,"modelValue"),{isFocused:l,focus:i,blur:u}=Ie(e),f=c(()=>{var p;return typeof e.counterValue=="function"?e.counterValue(o.value):((p=o.value)!=null?p:"").toString().length}),d=c(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function m(p,h){var C,y;!e.autofocus||!p||(C=h[0].target)==null||(y=C.focus)==null||y.call(C)}const v=F(),g=F(),V=F(),x=c(()=>sn.includes(e.type)||e.persistentPlaceholder||l.value),P=c(()=>e.messages.length?e.messages:l.value||e.persistentHint?e.hint:"");function _(){if(V.value!==document.activeElement){var p;(p=V.value)==null||p.focus()}l.value||i()}function w(p){_(),t("click:control",p)}function I(p){p.stopPropagation(),_(),He(()=>{o.value=null,Rt(e["onClick:clear"],p)})}function $(p){o.value=p.target.value}return M(()=>{const p=!!(n.counter||e.counter||e.counterValue),h=!!(p||n.details),[C,y]=Ce(a),[{modelValue:O,...b}]=Qe(e),[S]=an(e);return r(ke,j({ref:v,modelValue:o.value,"onUpdate:modelValue":k=>o.value=k,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},C,b,{focused:l.value,messages:P.value}),{...n,default:k=>{let{id:B,isDisabled:R,isDirty:T,isReadonly:X,isValid:D}=k;return r(rt,j({ref:g,onMousedown:q=>{q.target!==V.value&&q.preventDefault()},"onClick:control":w,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},S,{id:B.value,active:x.value||T.value,dirty:T.value||e.dirty,focused:l.value,error:D.value===!1}),{...n,default:q=>{let{props:{class:G,...Y}}=q;const Q=fe(r("input",j({ref:V,value:o.value,onInput:$,autofocus:e.autofocus,readonly:X.value,disabled:R.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:_,onBlur:u},Y,y),null),[[qe("intersect"),{handler:m},null,{once:!0}]]);return r(ue,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[e.prefix]),n.default?r("div",{class:G,onClick:H=>t("click:input",H),"data-no-activator":""},[n.default(),Q]):Ft(Q,{class:G}),e.suffix&&r("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:h?k=>{var B;return r(ue,null,[(B=n.details)==null?void 0:B.call(n,k),p&&r(ue,null,[r("span",null,null),r(on,{active:e.persistentCounter||l.value,value:f.value,max:d.value},n.counter)])])}:void 0})}),it({},v,g,V)}}),un=je("h1",null,"PoC zur Namenskonvention",-1),dn=je("h2",null,"Eine m\xF6gliche Login-Maske",-1);function ye(e){return e.trim().replace(/\W+/g,".")}function he(e){return e=e.replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss"),e.normalize("NFKD").replace(/[\u0300-\u036f]/g,"")}function Ae(e,s,a,t){let n=t==="extern"?".extern":"",o=ye(he(e)),l=ye(he(s)),i=ye(he(a)).toUpperCase();return`@${o}.${l}.${i}${n}`}const cn={data(){return{firstname:"",lastname:"",email:"",extern:"",authority:"",orgeinheit:"",rules:{required:e=>!!e||"Pflichtfeld",email:e=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}}},computed:{loginNameDotted(){return this==null?"?":this.firstname.length>0&&this.lastname.length>0&&this.authority.length>0?Ae(this.firstname,this.lastname,this.authority,this.extern):""},loginName(){return this==null?"?":this.firstname.length>0&&this.lastname.length>0&&this.authority.length>0?Ae(this.firstname,this.lastname,this.authority,this.extern).toLowerCase().replace(/\./g,""):""}},mounted(){this.$route.query.authority&&(this.authority=this.$route.query.authority),this.$route.query.orgeinheit&&(this.orgeinheit=this.$route.query.orgeinheit),this.$route.query.extern&&(this.extern=this.$route.query.extern)}},mn=Object.assign(cn,{__name:"Default",setup(e){return(s,a)=>(Ot(),Dt(Wt,null,{default:A(()=>[r(nn,null,{default:A(()=>[r(ht,null,{default:A(()=>[r(ee,null,{default:A(()=>[r(W,null,{default:A(()=>[un,dn]),_:1})]),_:1}),r(ee,null,{default:A(()=>[r(W,null,{default:A(()=>[r(J,{label:"Vorname(n)",modelValue:s.firstname,"onUpdate:modelValue":a[0]||(a[0]=t=>s.firstname=t),rules:[s.rules.required],"aria-label":"Vorname",title:"Ihr Vorname"},null,8,["modelValue","rules"])]),_:1}),r(W,null,{default:A(()=>[r(J,{label:"Nachname",modelValue:s.lastname,"onUpdate:modelValue":a[1]||(a[1]=t=>s.lastname=t),rules:[s.rules.required],"aria-label":"Nachname",title:"Ihr Nachname"},null,8,["modelValue","rules"])]),_:1})]),_:1}),r(ee,null,{default:A(()=>[r(W,null,{default:A(()=>[r(J,{label:"Beh\xF6rde (Abk\xFCrzung)",modelValue:s.authority,"onUpdate:modelValue":a[2]||(a[2]=t=>s.authority=t),maxlength:"6",rules:[s.rules.required],"aria-label":"Abk\xFCrzung der Beh\xF6rde",title:"Zum Beispiel BMI oder BMEL"},null,8,["modelValue","rules"])]),_:1}),r(W,null,{default:A(()=>[r(J,{label:"Org.-Einheit",modelValue:s.orgeinheit,"onUpdate:modelValue":a[3]||(a[3]=t=>s.orgeinheit=t),maxlength:"20",rules:[s.rules.required],"aria-label":"Organisationseinheit",title:"Zum Beispiel 'DH I 67' oder 'Justitiariat'"},null,8,["modelValue","rules"])]),_:1})]),_:1}),r(ee,null,{default:A(()=>[r(W,null,{default:A(()=>[r(J,{label:"E-Mail-Adresse",modelValue:s.email,"onUpdate:modelValue":a[4]||(a[4]=t=>s.email=t),rules:[s.rules.email],"aria-label":"E-Mail-Adresse",title:"Ihre dienstliche E-Mail-Adresse"},null,8,["modelValue","rules"])]),_:1}),r(W,null,{default:A(()=>[r(tn,{label:"Extern",modelValue:s.extern,"onUpdate:modelValue":a[5]||(a[5]=t=>s.extern=t),name:"checkbox-1",value:"extern","unchecked-value":"intern",title:"Externe Mitarbeit f\xFCr eine Beh\xF6rde"},null,8,["modelValue"])]),_:1})]),_:1}),r(ee,null,{default:A(()=>[r(W,null,{default:A(()=>[r(J,{readonly:"",label:"Profilname (Anzeigename)",modelValue:s.loginNameDotted,"onUpdate:modelValue":a[6]||(a[6]=t=>s.loginNameDotted=t)},null,8,["modelValue"])]),_:1})]),_:1}),r(ee,null,{default:A(()=>[r(W,null,{default:A(()=>[r(J,{readonly:"",label:"Benutzername (Login-Name)",modelValue:s.loginName,"onUpdate:modelValue":a[7]||(a[7]=t=>s.loginName=t)},null,8,["modelValue"])]),_:1})]),_:1}),r(pt,{color:"primary"},{default:A(()=>[Lt("Dummy-Knopf (noch ohne Funktion)")]),_:1})]),_:1})]),_:1})]),_:1}))}});export{mn as default};
