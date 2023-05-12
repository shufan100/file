var Method=(function () {
  return {
    EVENT_ID:"event_id",
    loadImage:function (arr) {
      var img=new Image();
      img.arr=arr;
      img.list=[];
      img.num=0;
//      如果DOM对象下的事件侦听没有被删除掉，将会常驻堆中
//      一旦触发了这个事件需要的条件，就会继续执行事件函数
      img.addEventListener("load",this.loadHandler);
      img.self=this;
      img.src=arr[img.num];
    },
    loadHandler:function (e) {
      this.list.push(this.cloneNode(false));
      this.num++;
      if(this.num>this.arr.length-1){
        this.removeEventListener("load",this.self.loadHandler);
        var evt=new Event(Method.EVENT_ID);
        evt.list=this.list;
        document.dispatchEvent(evt);
        return;
      }
      this.src=this.arr[this.num];
    },
    $c:function (type,parent,style) {
      var elem=document.createElement(type);
      if(parent) parent.appendChild(elem);
      for(var key in style){
        elem.style[key]=style[key];
      }
      return elem;
    },
    divColor: function () {
      var col="#";//这个字符串第一位为# 颜色的格式
      for(var i=0;i<6;i++){
        col+=parseInt(Math.random()*16).toString(16);//rondom*16后的随机值即为0-1*16==0-16;  toString(16)为转化为16进制
      }
      return col;//最后返回一个七位的值 格式即为#nnnnnn 颜色的格式
    },
    random:function (min,max) {
      max=Math.max(min,max);
      min=Math.min(min,max);
      return Math.floor(Math.random()*(max-min)+min);
    },
    dragElem:function (elem) {
      elem.addEventListener("mousedown",this.mouseDragHandler);
      elem.self=this;
    },
    removeDrag:function (elem) {
      elem.removeEventListener("mousedown",this.mouseDragHandler);
    },
    mouseDragHandler:function (e) {
      if(e.type==="mousedown"){
        e.stopPropagation();
        e.preventDefault();
        document.point={x:e.offsetX,y:e.offsetY};
        document.elem=this;
        this.addEventListener("mouseup",this.self.mouseDragHandler);
        document.addEventListener("mousemove",this.self.mouseDragHandler);
      }else if(e.type==="mousemove"){
        this.elem.style.left=e.x-this.point.x+"px";
        this.elem.style.top=e.y-this.point.y+"px";
      }else if(e.type==="mouseup"){
        this.removeEventListener("mouseup",this.self.mouseDragHandler);
        document.removeEventListener("mousemove",this.self.mouseDragHandler);
      }
    }
  }
})();