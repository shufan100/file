import{A as c,u as d,bO as l,bP as u,bQ as m,bR as h,j as p,o as g}from"./index.f8dd1a1d.js";const i=d(),_={name:"redirectLogin",data(){return{finPageName:"\u767B\u5F55\u9875\u9762"}},mounted(){this.openLoading(),this.login()},methods:{_addMenuRouter(e){return addMenuRouter.getISCMenuRouter(e).then(t=>t)},async getTransmissionMode(){const{encryptFlag:e,whiteList:t}=await this.$hi_http(l)(),s=u.exports.sm.decrypt({encryptValue:t.V,encryptKey:t.C}).data;i.$patch({iscUrlWhiteList:s,transmissionMode:e})},async login(){await this.getTransmissionMode();const e=await this.getUrlParams(),{result:t}=await this.$hi_http(m)(e),s=t.additionalInfo.menu_list?t.additionalInfo.menu_list.children:[],a=await this._addMenuRouter(s);this.$store.state.roleName=t.additionalInfo.roleName,this.$store.state.appId=t.additionalInfo.appId,this.$store.state.tenantId=t.additionalInfo.tenantId,delete t.additionalInfo.menu_list,this.setSystems({accessTokenResultVO:t}),this.setAppid(t.additionalInfo.appId),setStorage("hyit:menuRouterData",a),this.$router.addRoutes(a),this.$router.push({name:"home"})},async getUrlParams(){const e=window.location.hash.slice(1),t={};e&&e.split("&").forEach(n=>{const[o,r]=n.split("=");t[o]=r});const s=Object.keys(t).length===0,{accessToken:a}=i.system;if(a)return this.$router.push("/home"),Promise.reject();if(s)return Promise.reject();if(!s)return this.setIscToken(t.access_token),Promise.resolve(t)},openLoading(){h.service({background:"rgba(0, 0, 0, 0.3)"})}}},f={class:"redlrectLogin"};function y(e,t,s,a,n,o){return g(),p("div",f)}var $=c(_,[["render",y],["__file","E:/project/\u4E3B\u5DE5\u7A0B/fin-main-app/src/views/redirectLogin.vue"]]);export{$ as default};
