import{A as a,bS as n,o as r,j as u,H as t}from"./index.5bf7a2f0.js";const o={name:"Vue3",data(){return{url:`${n.vue3}/child/vue3/`,microAppData:{msg:"\u6765\u81EA\u57FA\u5EA7\u7684\u6570\u636E"}}},methods:{handleCreate(){},handleBeforeMount(){},handleMount(){setTimeout(()=>{this.microAppData={msg:"\u6765\u81EA\u57FA\u5EA7\u7684\u65B0\u6570\u636E"}},2e3)},handleUnmount(){},handleError(){},handleDataChange(e){}}};function p(e,d,m,c,l,i){return r(),u("div",null,[t(`  <micro-app\r
      name="appname-vue3"\r
      :url="url"\r
      baseroute="/main-vite/app-vue3"\r
      :data="microAppData"\r
      @created="handleCreate"\r
      @beforemount="handleBeforeMount"\r
      @mounted="handleMount"\r
      @unmount="handleUnmount"\r
      @error="handleError"\r
      @datachange="handleDataChange"\r
    ></micro-app> `)])}var h=a(o,[["render",p],["__file","E:/project/\u4E3B\u5DE5\u7A0B/fin-main-app/src/views/childApp/vue3App.vue"]]);export{h as default};
