// object: {}用来指定对象中可以包含哪些属性
// 其实对象和接口的定义是一样的
let obj: {
  name: string
  age?: number
}
obj = { name: '字符串类型' }
console.log(obj)

// 对象可写任何值，对象里的key都是字符串，[xxx: string]: any表示对象里可以写任意属性,值为any
let obj2: { [xxx: string]: any }
obj2 = { age: 19, sex: '女', addres: 'ssss' }
