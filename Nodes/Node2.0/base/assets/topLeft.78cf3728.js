import{A as p,h as B,P as u,ag as E,o as i,j as r,H as s,k as e,a8 as c,a7 as f,W as h,G as g,L as A}from"./index.f8dd1a1d.js";import{i as b}from"./index.5b57710f.js";let y={legend:{orient:"vertical",right:"30%",bottom:0,icon:"circle",itemWidth:10,itemHeight:10,data:["20-25\u5C81","26-35\u5C81","36-45\u5C81","46-60\u5C81","60\u5C81\u4EE5\u4E0A","\u672A\u77E5"]},calculable:!0,series:[{name:"\u5B66\u751F\u4EBA\u6570(\u9762\u79EF)",type:"pie",radius:["20%","90%"],center:["40%","50%"],roseType:"radius",width:"100%",label:{show:!0,formatter:function(o){return o.data.value+"\u4EBA"}},labelLine:{normal:{show:!0,length:2}},data:[{value:19,name:"20-25\u5C81",itemStyle:{color:"#4393F8"},label:{color:"#4393F8"}},{value:14,name:"26-35\u5C81",itemStyle:{color:"#65D0A9"},label:{color:"#65D0A9"}},{value:19,name:"36-45\u5C81",itemStyle:{color:"#A8A9EB"},label:{color:"#A8A9EB"}},{value:21,name:"46-60\u5C81",itemStyle:{color:"#F1BB4F"},label:{color:"#F1BB4F"}},{value:26,name:"60\u5C81\u4EE5\u4E0A",itemStyle:{color:"#EE7E79"},label:{color:"#EE7E79"}},{value:22,name:"\u672A\u77E5",itemStyle:{color:"#49B2BD"},label:{color:"#49B2BD"}}]}]};const F={class:"pieBox"},D={class:"todos"},C=["onClick"],k={class:"content-main-box content-main-right"},S=B({setup(o){const m=[{name:"\u7528\u5DE5\u60C5\u51B5",value:1},{name:"\u7EE9\u6548\u6392\u540D",value:2},{name:"\u884C\u4E1A\u5BF9\u6807",value:3},{name:"\u515A\u5458\u7ED3\u6784",value:4},{name:"\u515A\u5EFA\u5DE5\u4F5C\u53F0\u5386",value:5},{name:"\u5458\u5DE5\u751F\u65E5",value:6}];let l=u(3);const n=u(null);function v(){b(n.value).setOption(y)}function d(t){l.value=t}return E(()=>{v()}),(t,L)=>(i(),r(c,null,[s(" \u7BA1\u7406\u770B\u677F "),e("div",F,[e("div",D,[(i(),r(c,null,f(m,(_,a)=>e("div",{class:h(["todos-item",{active:g(l)==a}]),key:a,onClick:w=>d(a)},A(_.name),11,C)),64)),s(` <div>\r
        <div class="left">\r
          <div>8\u6708</div>\r
          <div>\u515A\u5458\u603B\u6570{{ 104 }}\u4EBA</div>\r
        </div>\r
        <div class="right"></div>\r
      </div> `)]),e("div",k,[e("div",{class:"gantt-chart",ref_key:"gantt",ref:n},null,512)])])],2112))}});var j=p(S,[["__scopeId","data-v-46cbb169"],["__file","E:/project/\u4E3B\u5DE5\u7A0B/fin-main-app/src/views/Home/components/topLeft.vue"]]);export{j as default};
