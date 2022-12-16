import{A as B,h as F,a3 as n,P as c,o as t,j as e,k as s,a8 as _,a7 as v,M as i,L as a,H as u,K as E,G as d,N as g,O as f}from"./index.5bf7a2f0.js";import{_ as h,a as y,b as D,c as k,d as A,e as C,f as b,g as w,h as R,i as S,j as $}from"./logo7.85888e4e.js";const I=r=>(g("data-v-4c9ed7c4"),r=r(),f(),r),L={class:"bottomRight"},N={class:"preview_footer_right"},j={class:"rank_bottom"},H=["title"],V={class:"type"},T={class:"rank_top"},z={key:0,src:h,alt:""},G={key:1,src:y,alt:""},K={key:2,src:D,alt:""},M={class:"list_box"},O={key:0,class:"list_logo",src:k,alt:""},P={key:1,class:"list_logo",src:A,alt:""},q={key:2,class:"list_logo",src:C,alt:""},J={key:3,class:"list_logo",src:b,alt:""},Q={key:4,class:"list_logo",src:w,alt:""},U={key:5,class:"list_logo",src:R,alt:""},W={key:6,class:"list_logo",src:S,alt:""},X={key:7,class:"list_logo",src:$,alt:""},Y=I(()=>s("br",null,null,-1)),Z=F({setup(r){let p=[{name:"\u6D59\u6C5F\u7701\u79D1\u5B66\u6280\u672F\u8FDB\u6B65\u4E00\u7B49\u5956",pro:45.12,type:"\u5206\u5E03\u5F0F\u4F9B\u80FD\u4E0E\u6C22\u7535\u8026\u5408",color:"#4393F8"},{name:"\u6D59\u6C5F\u7701\u79D1\u5B66\u6280\u672F\u8FDB\u6B65\u4E8C\u7B49\u5956",pro:29.87,type:"\u7535\u529B\u88C5\u5907\u667A\u80FD\u611F\u77E5\u4E0E\u6570\u636E\u5E94\u7528",color:"#65D0A9"},{name:"\u6D59\u6C5F\u7535\u529B\u6280\u672F\u53D1\u660E\u5956\u4E8C\u7B49\u5956",pro:50.32,type:"\u7535\u529B\u4FE1\u606F\u6280\u672F\u5B89\u5168",color:"#F1BB4F"},{name:"\u6D59\u6C5F\u7701\u79D1\u5B66\u6280\u672F\u8FDB\u6B65\u4E09\u7B49\u5956",pro:28.42,type:"\u67D4\u6027\u7535\u529B\u6280\u672F",color:"#EE7E79"},{name:"\u6D59\u6C5F\u7535\u529B\u4F18\u79C0\u671F\u520A\u8BBA\u6587\u5956\u4E00\u7B49\u5956",pro:21.07,type:"\u65B0\u578B\u6709\u6E90\u914D\u7535\u7F51\u6280\u672F",color:"#49B2BD"}],m=n([{name:"\u5728\u7EBF\u7528\u6237\u6570",val:"77493",left:30},{name:"\u5728\u7EBF\u670D\u52A1\u6570",val:"77493",left:70},{name:"\u5728\u7EBF\u6A21\u578B\u6570",val:"77493",left:80},{name:"\u6807\u51C6\u5F02\u5E38\u6570",val:"77493",left:60},{name:"\u6A21\u578B\u5F02\u5E38\u6570",val:"77493",left:40},{name:"\u6807\u51C6\u6570",val:"77493",left:90}]);return n([{name:"\u8FD112\u4E2A\u6708",val:"1"},{name:"\u8FD17\u65E5",val:"2"},{name:"\u8FD124\u5C0F\u65F6",val:"3"}]),c("1"),c(""),(x,uu)=>(t(),e("div",L,[s("div",N,[(t(!0),e(_,null,v(d(p),(l,o)=>(t(),e("div",{class:"rank",key:o},[s("div",j,[s("p",{style:i({width:`${l.pro}%`,backgroundColor:`${l.color}`}),title:l.pro,class:"process"},[s("span",{style:i({borderColor:l.color})},null,4)],12,H),s("p",V,a(l.type),1),s("p",{class:"dig",style:i({color:`${l.color}`})},a(l.pro)+"%",5)]),s("div",T,[s("div",null,[s("span",null,[o===0?(t(),e("img",z)):u("v-if",!0),o===1?(t(),e("img",G)):u("v-if",!0),o===2?(t(),e("img",K)):u("v-if",!0),E(" "+a(o+1),1)]),s("span",null,a(l.name),1)])])]))),128))]),s("div",M,[(t(!0),e(_,null,v(d(m),(l,o)=>(t(),e("div",{class:"list_item",key:o},[u(' <img class="list_logo" :src="getAssetsFile(`../../../assets/newHome/logo${index}.png`)" alt="" /> '),o==0?(t(),e("img",O)):u("v-if",!0),o==1?(t(),e("img",P)):u("v-if",!0),o==2?(t(),e("img",q)):u("v-if",!0),o==3?(t(),e("img",J)):u("v-if",!0),o==4?(t(),e("img",Q)):u("v-if",!0),o==5?(t(),e("img",U)):u("v-if",!0),o==6?(t(),e("img",W)):u("v-if",!0),o==7?(t(),e("img",X)):u("v-if",!0),s("div",null,[s("span",null,a(l.name),1),Y,s("div",null,a(l.val),1)]),s("p",null,[s("span",{style:i({left:`${l.left}px`})},null,4)])]))),128))]),u(` <div class="watchType">\r
      <div class="typeLeft">\r
        <span>\u76D1\u63A7\u7C7B\u578B</span>\r
        <el-select v-model="value" class="m-2" placeholder="\u5E94\u7528\u9009\u62E9">\r
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />\r
        </el-select>\r
      </div>\r
      <div class="typeRight">\r
        <div>\r
          <el-radio-group v-model="nav">\r
            <el-radio-button v-for="item in list2" :key="item.val" :label="item.val">{{ item.name }}</el-radio-button>\r
          </el-radio-group>\r
        </div>\r
        <button class="more">\u66F4\u591A</button>\r
      </div>\r
    </div> `),u(" \u5355\u4F4D "),u(` <div class="unit">\r
      <p>/\u767E\u4E07</p>\r
      <p>\u5355\u4F4D/ms</p>\r
    </div> `),u(" \u8FD0\u8425\u76D1\u63A7\u5E95\u90E8"),u(` <div class="yyBottom">\r
      <div class="leftBottom">\r
        <div class="ideas">\u6218\u7565\u51B3\u7B565\u4E2A</div>\r
        <div class="science">\u79D1\u7814\u521B\u65B05\u4E2A</div>\r
      </div>\r
      <div class="middleBottom">\r
        <div class="service">\u6280\u672F\u670D\u52A15\u4E2A</div>\r
        <div class="serviceBranch">\r
          <div class="monitor">\u6280\u672F\u76D1\u77635\u4E2A</div>\r
          <div class="source">\u8D44\u6E90\u4FDD\u969C5\u4E2A</div>\r
        </div>\r
      </div>\r
      <div class="rightBottom">\u6280\u672F\u667A\u5E935\u4E2A</div>\r
    </div> `)]))}});var eu=B(Z,[["__scopeId","data-v-4c9ed7c4"],["__file","E:/project/\u4E3B\u5DE5\u7A0B/fin-main-app/src/views/Home/components/bottomRight.vue"]]);export{eu as default};
