import{_ as V,d as x,r as A,b as n,o as w,c as I,w as u,g as i,f as e,h as _,B as h,M as c,a9 as E,p as S,k as g}from"./index.4c830688.js";const y={appId:[{required:!0}],miniAppId:[{required:!0}],miniAppSecret:[{required:!0}],name:[{required:!0}],descr:[{required:!0}],email:[{required:!0}],version:[{required:!0}],officialSite:[{required:!0}]},C={appId:"",miniAppId:"",miniAppSecret:"",name:"",descr:"",email:"",version:"",officialSite:""};const D=r=>(S("data-v-60ee24b0"),r=r(),g(),r),U={class:"form-basic-container"},q={class:"form-basic-item"},k=D(()=>i("div",{class:"form-basic-container-title"},"\u7CFB\u7EDF\u914D\u7F6E",-1)),N={class:"form-submit-container"},M={class:"form-submit-sub"},R={class:"form-submit-left"},T={name:"SettingConfig"},L=x({...T,setup(r){const t=A({...C}),f=()=>{c.warning("\u53D6\u6D88\u65B0\u5EFA")},v=({validateResult:p})=>{p===!0&&(c.success("\u65B0\u5EFA\u6210\u529F"),E(t))};return(p,a)=>{const s=n("t-input"),o=n("t-form-item"),d=n("t-col"),B=n("t-textarea"),F=n("t-row"),m=n("t-button"),b=n("t-form");return w(),I(b,{ref:"form",class:"base-form",data:t.value,rules:h(y),"label-align":"top","label-width":100,onReset:f,onSubmit:v},{default:u(()=>[i("div",U,[i("div",q,[k,e(F,{class:"row-gap",gutter:[16,24]},{default:u(()=>[e(d,{span:6},{default:u(()=>[e(o,{label:"\u5C0F\u7A0B\u5E8F\u540D\u79F0\uFF08\u5168\u5C40\uFF09",name:"name"},{default:u(()=>[e(s,{modelValue:t.value.name,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value.name=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:u(()=>[e(o,{label:"\u90AE\u7BB1",name:"email"},{default:u(()=>[e(s,{modelValue:t.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>t.value.email=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:u(()=>[e(o,{label:"\u7248\u672C\u4FE1\u606F",name:"version"},{default:u(()=>[e(s,{modelValue:t.value.version,"onUpdate:modelValue":a[2]||(a[2]=l=>t.value.version=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:u(()=>[e(o,{label:"\u5B98\u65B9\u7F51\u7AD9",name:"officialSite"},{default:u(()=>[e(s,{modelValue:t.value.officialSite,"onUpdate:modelValue":a[3]||(a[3]=l=>t.value.officialSite=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:u(()=>[e(o,{label:"appid(\u6807\u6CE8)",name:"miniAppId"},{default:u(()=>[e(s,{modelValue:t.value.miniAppId,"onUpdate:modelValue":a[4]||(a[4]=l=>t.value.miniAppId=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:u(()=>[e(o,{label:"secret(\u6807\u6CE8)",name:"miniAppSecret"},{default:u(()=>[e(s,{modelValue:t.value.miniAppSecret,"onUpdate:modelValue":a[5]||(a[5]=l=>t.value.miniAppSecret=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:6},{default:u(()=>[e(o,{label:"appid(\u672C\u5E73\u53F0)",name:"appId"},{default:u(()=>[e(s,{modelValue:t.value.appId,"onUpdate:modelValue":a[6]||(a[6]=l=>t.value.appId=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:u(()=>[e(o,{label:"\u5173\u4E8E\u6211\u4EEC",name:"descr"},{default:u(()=>[e(B,{modelValue:t.value.descr,"onUpdate:modelValue":a[7]||(a[7]=l=>t.value.descr=l),style:{width:"322px"},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])]),i("div",N,[i("div",M,[i("div",R,[e(m,{theme:"primary",class:"form-submit-confirm",type:"submit"},{default:u(()=>[_(" \u63D0\u4EA4 ")]),_:1}),e(m,{type:"reset",class:"form-submit-cancel",theme:"default",variant:"base"},{default:u(()=>[_(" \u53D6\u6D88 ")]),_:1})])])])]),_:1},8,["data","rules"])}}});var O=V(L,[["__scopeId","data-v-60ee24b0"],["__file","/Users/motou/Desktop/project/oh-my-pusa-admin/src/pages/setting/config/index.vue"]]);export{O as default};
