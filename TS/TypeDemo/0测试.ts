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
console.log(p)

interface Named {
  name: string
}

// y兼容x1------
let x1: Named
let y = { name: 'Alice', location: 'Seattle' }
x1 = y
console.log(x1)

let x2 = (a: number) => 0
let y2 = (b: number, s: string) => 0

y2 = x2 // OK
// 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”
// x2 = y2 // Error
