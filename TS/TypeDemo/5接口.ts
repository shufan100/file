// Interface接口

/** 我们定义对象的方式要用关键字interface，使用interface来定义一种约束，让数据的结构满足约束的格式。
 * 2使用接口约束的时候不能多一个属性也不能少一个属性，必须与接口保持一致
 */
 interface InterDemo {
  readonly id: number // 只读属性readonly，必传
  tid: string //  必传
  size?: number // 可选属性
  [propName: string]: any // 任意属性接收对象任何值
  fun():void  //添加函数
}


// *********************************************写的例子**************************************************************************************
interface Inter {
  readonly id: number // 只读属性，必传
  tid?: string //  必传
  size?: number // 可选属性
  [propName: string]: any // 任意属性接收对象任何值
  isAcceptable(s: string): boolean;
}
// 定义PenStroke接口
interface PenStroke {
  penWidth: number
}
// -------------------------------
// 继承一个接口
interface Square extends Inter {
  sideLength: number
}
// 继承多个接口
interface Square1 extends Inter, PenStroke {
  sideLength: number
}

// 箭头函数参数使用接口-------------------------
const Fun = (data: Square1): string => {
  data.tid = '200'
  console.log(data)
  return data.id + data.tid
}
Fun({ 
  id: 12, 
  start: 
  '1dsds', 
  sideLength: 2, 
  penWidth: 11,
  isAcceptable:(a)=> true
})

// 箭头函数--返回值使用接口-------------------------
const Fun2 = (data: Square1): PenStroke => {
  data.tid = '200'
  console.log(data)
  return { penWidth: data.penWidth * 100 }
}
let Obj: Object = Fun2({ id: 12, start: '1dsds', sideLength: 2, penWidth: 11,isAcceptable:(a)=> true })
console.log(Obj)
