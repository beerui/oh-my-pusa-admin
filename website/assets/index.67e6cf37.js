import{_ as re,d as ie,j as ce,r as f,X as de,m as $,v as fe,b as s,o as m,e as C,f as e,w as t,g as h,h as b,B as k,D as V,F as E,A as q,c as U,M as S,S as _e}from"./index.94feab44.js";import{q as me,a as pe,b as ve,c as ge,d as be,e as he}from"./question.e39b18c7.js";const ye=[{title:"\u6807\u9898",align:"left",colKey:"title",fixed:"left"},{title:"\u7C7B\u522B",align:"left",colKey:"tag",fixed:"left",cell:{col:"tag"}},{align:"left",fixed:"right",width:200,colKey:"op",title:"\u64CD\u4F5C"}];const Be={class:"left-operation-container"},Ce=["onClick"],Fe=["onClick"],we={class:"form-basic-container"},xe={class:"form-basic-item"},ke={name:"ListQuestion"},Ve=ie({...ke,setup(Ee){const j=ce(),i=f([]),F=async()=>{if(i.value.length!==0)return Promise.resolve(i.value);const n=await me();return i.value=n.rows,Promise.resolve(i.value)},O=n=>{if(i.value.length===0)return"";const a=r=>i.value.findIndex(o=>o.id===r);return n?a(n)<0?"-":i.value[a(n)].name:"*"},u=de({title:"",section:[],answer:"",tag:""}),Q={title:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B",type:"error",trigger:"blur"}],section:[{required:!0,message:"\u6B64\u9879\u5FC5\u9009",type:"error",trigger:"blur"}],answer:[{required:!0,message:"\u6B64\u9879\u5FC5\u9009",type:"error",trigger:"blur"}],tag:[{required:!0,message:"\u6B64\u9879\u5FC5\u9009",type:"error",trigger:"blur"}]},X=()=>{},G=({validateResult:n})=>{if(n===!0&&(g.value==="add"&&pe(u).then(a=>{S.success("\u65B0\u5EFA\u6210\u529F"),v.value=!1,y()}).catch(a=>{console.log(a)}),g.value==="edit")){const a=u.section.map(o=>({name:o.name})),r={...u,section:a};ve(r).then(o=>{S.success("\u66F4\u65B0\u6210\u529F"),v.value=!1}).catch(o=>{console.log(o)})}},D=f([]),H=()=>{u.section.push({name:""})},J=n=>{u.section.splice(n,1)},p=f({defaultPageSize:20,pageSize:20,current:1,total:0,defaultCurrent:1}),w=f(!1),y=async()=>{w.value=!0;try{const{rows:n,total:a}=await ge({page:p.value.current,size:p.value.pageSize});D.value=n,p.value={...p.value,total:a}}catch(n){console.log(n)}finally{w.value=!1}},c=f(-1),W=$(()=>c.value>-1?"\u5220\u9664\u786E\u8BA4\uFF1F":"");fe(()=>{F(),y()});const B=f(!1),A=()=>{c.value=-1},T=async()=>{c.value!==-1&&(await be(c.value),y(),S.success("\u5220\u9664\u6210\u529F"),B.value=!1),A()},v=f(!1),g=f("add"),L=()=>{A()},Y="id",Z=n=>{p.value={...n}},ee=()=>{y()},te=async()=>{g.value="add",i.value.length===0&&await F(),v.value=!0},ae=n=>{c.value=n.row.id,B.value=!0},le=async n=>{g.value="edit",i.value.length===0&&await F(),c.value=n.row.id,u.id=Number(c.value),he(c.value).then(a=>{for(const r in a)u[r]=a[r];v.value=!0})},ne=$(()=>j.isUseTabsRouter?48:0),ue=()=>document.querySelector(`.${_e}-layout`);return(n,a)=>{const r=s("t-button"),o=s("t-form-item"),N=s("t-form"),x=s("t-row"),I=s("t-tag"),oe=s("t-table"),se=s("t-card"),K=s("t-dialog"),M=s("t-textarea"),d=s("t-col"),P=s("t-option"),z=s("t-select");return m(),C("div",null,[e(se,{class:"list-card-container"},{default:t(()=>[e(x,{justify:"space-between"},{default:t(()=>[h("div",Be,[e(N,null,{default:t(()=>[e(o,{"label-width":"0"},{default:t(()=>[e(r,{onClick:te},{default:t(()=>[b(" \u65B0\u589E ")]),_:1})]),_:1})]),_:1})])]),_:1}),e(oe,{data:D.value,columns:k(ye),"row-key":Y,"vertical-align":"top",hover:!0,pagination:p.value,loading:w.value,"header-affixed-top":{offsetTop:k(ne),container:ue},onPageChange:Z,onChange:ee},{tag:t(({row:l})=>[e(I,{class:"m-5",theme:"success",variant:"light"},{default:t(()=>[b(V(O(l.tag)),1)]),_:2},1024)]),op:t(l=>[h("a",{class:"t-button-link",onClick:_=>le(l)},"\u4FEE\u6539",8,Ce),h("a",{class:"t-button-link",onClick:_=>ae(l)},"\u5220\u9664",8,Fe)]),_:1},8,["data","columns","pagination","loading","header-affixed-top"])]),_:1}),e(K,{visible:B.value,"onUpdate:visible":a[0]||(a[0]=l=>B.value=l),header:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u6240\u9009\uFF1F",body:k(W),"on-cancel":L,onConfirm:T},null,8,["visible","body"]),e(K,{visible:v.value,"onUpdate:visible":a[4]||(a[4]=l=>v.value=l),header:g.value==="add"?"\u65B0\u589E":"\u7F16\u8F91",footer:!1,width:"60%","on-cancel":L,onConfirm:T},{default:t(()=>[e(N,{ref:"form",class:"base-form",data:u,rules:Q,"label-align":"left","label-width":60,onReset:X,onSubmit:G},{default:t(()=>[h("div",we,[h("div",xe,[e(x,{class:"row-gap",gutter:[0,6]},{default:t(()=>[e(d,{span:12},{default:t(()=>[e(o,{label:"\u9898\u76EE",name:"title"},{default:t(()=>[e(M,{modelValue:u.title,"onUpdate:modelValue":a[1]||(a[1]=l=>u.title=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(o,{label:"\u9009\u9879",name:"section"},{default:t(()=>[e(r,{onClick:H},{default:t(()=>[b("\u65B0\u589E\u9009\u9879")]),_:1})]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[(m(!0),C(E,null,q(u.section,(l,_)=>(m(),U(x,{style:{"margin-bottom":"3px"}},{default:t(()=>[e(d,{span:2},{default:t(()=>[e(I,null,{default:t(()=>[b("\u9009\u9879 "+V(_),1)]),_:2},1024)]),_:2},1024),e(d,{span:8},{default:t(()=>[e(M,{modelValue:l.name,"onUpdate:modelValue":R=>l.name=R,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{span:2},{default:t(()=>[e(r,{style:{"margin-left":"10px"},onClick:R=>J(_)},{default:t(()=>[b("\u5220\u9664")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(d,{span:12},{default:t(()=>[e(o,{label:"\u7B54\u6848",name:"answer"},{default:t(()=>[e(z,{modelValue:u.answer,"onUpdate:modelValue":a[2]||(a[2]=l=>u.answer=l),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(m(!0),C(E,null,q(u.section,(l,_)=>(m(),U(P,{key:_,value:_,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(o,{label:"\u6807\u7B7E",name:"tag"},{default:t(()=>[e(z,{modelValue:u.tag,"onUpdate:modelValue":a[3]||(a[3]=l=>u.tag=l),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(m(!0),C(E,null,q(i.value,l=>(m(),U(P,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})])]),e(r,{theme:"primary",class:"form-submit-confirm",type:"submit"},{default:t(()=>[b(V(g.value==="add"?"\u65B0\u589E":"\u66F4\u65B0"),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","header"])])}}});var Se=re(Ve,[["__scopeId","data-v-1e6a61b4"],["__file","/Users/motou/Desktop/project/oh-my-pusa-admin/src/pages/list/question/index.vue"]]);export{Se as default};
