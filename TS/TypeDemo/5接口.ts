// 定义Inter接口
interface Inter {
  readonly id: number // 只读属性，必传
  tid?: string //  必传
  size?: number // 可选属性
  [propName: string]: any // 接收对象任何值
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
Fun({ id: 12, start: '1dsds', sideLength: 2, penWidth: 11 })

// 箭头函数--返回值使用接口-------------------------
const Fun2 = (data: Square1): PenStroke => {
  data.tid = '200'
  console.log(data)
  return { penWidth: data.penWidth * 100 }
}
let Obj: Object = Fun2({ id: 12, start: '1dsds', sideLength: 2, penWidth: 11 })
console.log(Obj)
