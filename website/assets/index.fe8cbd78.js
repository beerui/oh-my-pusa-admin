import{_ as O,d as Q,j as X,r as i,m as b,v as G,X as H,b as a,o as v,e as J,f as n,w as u,g,c as k,h as B,B as C,a3 as W,a4 as Y,M as _,a5 as Z,a6 as ee,S as te}from"./index.d4f6c0d1.js";const ae=[{title:"\u6807\u9898",align:"left",colKey:"title",fixed:"left"},{title:"\u7C7B\u522B",align:"left",colKey:"tag",fixed:"left",cell:{col:"tag"}},{align:"left",fixed:"right",width:200,colKey:"op",title:"\u64CD\u4F5C"}];const oe={class:"left-operation-container"},ne=["onClick"],ue=["onClick"],le={name:"ListQuestion"},se=Q({...le,setup(ce){const F=X(),y=i([]),l=i({defaultPageSize:20,pageSize:20,current:1,total:0,defaultCurrent:1}),f=i(!1),r=async()=>{f.value=!0;try{const{list:e,total:s}=await W({page:l.value.current,size:l.value.pageSize});y.value=e,l.value={...l.value,total:s}}catch(e){console.log(e)}finally{f.value=!1}},t=i(-1),x=b(()=>t.value>-1?"\u5220\u9664\u786E\u8BA4\uFF1F":"");G(()=>{r()});const d=i(!1),m=()=>{t.value=-1},w=async()=>{t.value!==-1&&(await Y(t.value),r(),_.success("\u5220\u9664\u6210\u529F"),d.value=!1),m()},p=i(!1),D=async()=>{t.value!==-1&&(await Z({id:t.value,name:o.name}),r(),_.success("\u4FEE\u6539\u6210\u529F"),p.value=!1,o.name=""),m()},E=()=>{m()},S="id",V=e=>{l.value={...e}},U=()=>{r()},o=H({name:""}),z=async()=>{if(!o.name){_.error("\u65E0\u5185\u5BB9");return}await ee(o),_.success("\u65B0\u589E\u6210\u529F"),o.name="",r()},A=e=>{t.value=e.row.id,d.value=!0},K=e=>{t.value=e.row.id,p.value=!0},L=b(()=>F.isUseTabsRouter?48:0),M=()=>document.querySelector(`.${te}-layout`);return(e,s)=>{const N=a("t-input"),h=a("t-button"),T=a("t-form-item"),j=a("t-form"),I=a("t-row"),P=a("t-table"),R=a("t-card"),$=a("t-dialog");return v(),J("div",null,[n(R,{class:"list-card-container"},{default:u(()=>[n(I,{justify:"space-between"},{default:u(()=>[g("div",oe,[n(j,null,{default:u(()=>[n(T,{"label-width":"0"},{default:u(()=>[n(N,{modelValue:o.name,"onUpdate:modelValue":s[0]||(s[0]=c=>o.name=c),placeholder:"\u8BF7\u8F93\u5165\u7C7B\u522B\u540D\u79F0"},null,8,["modelValue"]),p.value?(v(),k(h,{key:0,onClick:D},{default:u(()=>[B(" \u4FEE\u6539 ")]),_:1})):(v(),k(h,{key:1,onClick:z},{default:u(()=>[B(" \u65B0\u589E ")]),_:1}))]),_:1})]),_:1})])]),_:1}),n(P,{data:y.value,columns:C(ae),"row-key":S,"vertical-align":"top",hover:!0,pagination:l.value,loading:f.value,"header-affixed-top":{offsetTop:C(L),container:M},onPageChange:V,onChange:U},{op:u(c=>[g("a",{class:"t-button-link",onClick:q=>K(c)},"\u91CD\u547D\u540D",8,ne),g("a",{class:"t-button-link",onClick:q=>A(c)},"\u5220\u9664",8,ue)]),_:1},8,["data","columns","pagination","loading","header-affixed-top"])]),_:1}),n($,{visible:d.value,"onUpdate:visible":s[1]||(s[1]=c=>d.value=c),header:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u6240\u9009\u5408\u540C\uFF1F",body:C(x),"on-cancel":E,onConfirm:w},null,8,["visible","body"])])}}});var re=O(se,[["__scopeId","data-v-1e6a61b4"],["__file","/Users/motou/Desktop/project/oh-my-pusa-admin/src/pages/list/question/index.vue"]]);export{re as default};
