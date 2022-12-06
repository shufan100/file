var X=Object.defineProperty,Y=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var K=(e,a,o)=>a in e?X(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))_.call(a,o)&&K(e,o,a[o]);if(z)for(var o of z(a))ee.call(a,o)&&K(e,o,a[o]);return e},V=(e,a)=>Y(e,x(a));import{bm as h,bF as A,bx as C,bt as P,br as D,P as k,aj as ae,p,b0 as oe,bJ as se,h as R,b3 as w,b4 as S,a4 as T,o as E,j as B,k as m,W as b,a5 as M,bV as U,Z as G,K as F,L as j,au as c,bW as q,M as le,bI as ne,ag as de,ak as re,a3 as ie,av as te,E as ue,b2 as be,bk as $,b6 as pe,b7 as L}from"./index.f8dd1a1d.js";import{U as I}from"./event.7d53d36c.js";const O=Symbol("radioGroupKey"),W=h({size:A,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),me=h(V(y({},W),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),J={[I]:e=>C(e)||P(e)||D(e),change:e=>C(e)||P(e)||D(e)},Z=(e,a)=>{const o=k(),s=ae(O,void 0),r=p(()=>!!s),i=p({get(){return r.value?s.modelValue:e.modelValue},set(d){r.value?s.changeEvent(d):a(I,d),o.value.checked=e.modelValue===e.label}}),l=oe(p(()=>s==null?void 0:s.size)),n=se(p(()=>s==null?void 0:s.disabled)),t=k(!1),u=p(()=>n.value||r.value&&i.value!==e.label?-1:0);return{radioRef:o,isGroup:r,radioGroup:s,focus:t,size:l,disabled:n,tabIndex:u,modelValue:i}},fe=R({name:"ElRadio",props:me,emits:J,setup(e,{emit:a}){const o=w("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:n,tabIndex:t,modelValue:u}=Z(e,a);function d(){T(()=>a("change",u.value))}return{ns:o,focus:i,isGroup:r,modelValue:u,tabIndex:t,size:l,disabled:n,radioRef:s,handleChange:d}}}),ve=["aria-checked","aria-disabled","tabindex"],ge=["value","name","disabled"];function ye(e,a,o,s,r,i){return E(),B("label",{class:b([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[5]||(a[5]=q(c(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[m("span",{class:b([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[m("span",{class:b(e.ns.e("inner"))},null,2),M(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:b(e.ns.e("original")),value:e.label,type:"radio","aria-hidden":"true",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1),onChange:a[3]||(a[3]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,ge),[[U,e.modelValue]])],2),m("span",{class:b(e.ns.e("label")),onKeydown:a[4]||(a[4]=c(()=>{},["stop"]))},[G(e.$slots,"default",{},()=>[F(j(e.label),1)])],34)],42,ve)}var Ve=S(fe,[["render",ye],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const $e=h(V(y({},W),{name:{type:String,default:""}})),ce=R({name:"ElRadioButton",props:$e,setup(e,{emit:a}){const o=w("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:n,tabIndex:t,modelValue:u,radioGroup:d}=Z(e,a),v=p(()=>({backgroundColor:(d==null?void 0:d.fill)||"",borderColor:(d==null?void 0:d.fill)||"",boxShadow:d!=null&&d.fill?`-1px 0 0 0 ${d.fill}`:"",color:(d==null?void 0:d.textColor)||""}));return{ns:o,isGroup:r,size:l,disabled:n,tabIndex:t,modelValue:u,focus:i,activeStyle:v,radioRef:s}}}),he=["aria-checked","aria-disabled","tabindex"],ke=["value","name","disabled"];function Re(e,a,o,s,r,i){return E(),B("label",{class:b([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[4]||(a[4]=q(c(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[M(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:b(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1)},null,42,ke),[[U,e.modelValue]]),m("span",{class:b(e.ns.be("button","inner")),style:le(e.modelValue===e.label?e.activeStyle:{}),onKeydown:a[3]||(a[3]=c(()=>{},["stop"]))},[G(e.$slots,"default",{},()=>[F(j(e.label),1)])],38)],42,he)}var H=S(ce,[["render",Re],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const we=h({size:A,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},textColor:{type:String,default:""}}),Se=J,Ee=R({name:"ElRadioGroup",props:we,emits:Se,setup(e,a){const o=w("radio"),s=k(),{formItem:r}=ne(),i=n=>{a.emit(I,n),T(()=>a.emit("change",n))},l=n=>{if(!s.value)return;const t=n.target,u=t.nodeName==="INPUT"?"[type=radio]":"[role=radio]",d=s.value.querySelectorAll(u),v=d.length,g=Array.from(d).indexOf(t),N=s.value.querySelectorAll("[role=radio]");let f=null;switch(n.code){case $.left:case $.up:n.stopPropagation(),n.preventDefault(),f=g===0?v-1:g-1;break;case $.right:case $.down:n.stopPropagation(),n.preventDefault(),f=g===v-1?0:g+1;break}f!==null&&(N[f].click(),N[f].focus())};return de(()=>{const n=s.value.querySelectorAll("[type=radio]"),t=n[0];!Array.from(n).some(u=>u.checked)&&t&&(t.tabIndex=0)}),re(O,ie(V(y({},te(e)),{changeEvent:i}))),ue(()=>e.modelValue,()=>r==null?void 0:r.validate("change").catch(n=>be(n))),{ns:o,radioGroupRef:s,handleKeydown:l}}});function Be(e,a,o,s,r,i){return E(),B("div",{ref:"radioGroupRef",class:b(e.ns.b("group")),role:"radiogroup",onKeydown:a[0]||(a[0]=(...l)=>e.handleKeydown&&e.handleKeydown(...l))},[G(e.$slots,"default")],34)}var Q=S(Ee,[["render",Be],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);pe(Ve,{RadioButton:H,RadioGroup:Q});const ze=L(Q),Ke=L(H);export{Ke as E,ze as a};
