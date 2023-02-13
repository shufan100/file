/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-26 19:34:57
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-01-31 13:52:23
 * @FilePath: \file\TS\TypeDemo\0测试.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let x = [0, 1, false]

interface Named {
  name: string
}
class Person {
  name: string
}
let p: Named
p = { name: 'sss' }

p = new Person()
// console.log(p)

interface Named {
  name: string
}

// y兼容x1------
let x1: Named
let y = { name: 'Alice', location: 'Seattle' }
x1 = y
// console.log(x1)

let x2 = (a: number) => 0
let y2 = (b: number, s: string) => 0

y2 = x2 // OK
// 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”
// x2 = y2 // Error
console.log(111)

// 
function fn<T>(param: T): T {
  // function fn<string>(param: string) {
  return param
}
console.log(fn(1))
