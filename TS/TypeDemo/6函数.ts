// 函数：类型包含两部分：参数类型和返回值类型
// 可通过接口定义参数和返回值的类型

//函数---箭头函数
let fun0 = (a: number, b: number): number => a + b
let fun1 = (a: string, b: string): string => a + b
let fun2 = (a: string, b: string): object => ({ a, b })
let fun4 = (a: string, b: number): any => ({ a, b })
let fun3 = (a: string, b: string): void => {}

//函数---匿名函数
let nfun = function (x: number, y: number): object {
  return { x, y }
}

//函数---普通函数
function myAdd1(data: { id: number; tid?: string; [xxx: string]: any }): string {
  return data.id + data.age
}
// --------------------------------------接口-------------------------------------------------------

//函数---普通函数+接口
interface Typesinter {
  id: number
  tid?: string
  [xxx: string]: any
}
function funinter1(data: Typesinter): string {
  return data.id + data.age + data.tid
}

//函数---箭头函数+接口
let funinter2 = (data: Typesinter): string => {
  data.tid = '3333'
  return data.id + data.age + data.tid
}
let funinter3 = (data: Typesinter): { id: number; sex: string } => ({ id: data.id, sex: '男' })
let funinter4 = (data: Typesinter): { id: number; [xxx: string]: any } => ({ id: data.id, sex: '男' })

console.log(funinter2({ id: 1, age: '十八' }))

// -----------------------------------------剩余参数----------------------------------------------

// 普通函数---剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName: string = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
console.log(employeeName)

// -------------------------------------数组参数+泛型----------------------------------------------
// 普通函数---泛型接收数组
function dentity<T>(arg: Array<T>): Array<T> {
  console.log(arg)
  return arg
}
dentity([{ id: 1 }, 2, [1, 2], false, 'name'])
