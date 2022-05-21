// **泛型**
// 泛型取代any
// T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后再次使用 T当做返回值类型.

// 我们把identity函数叫做泛型，因为它可以适用于多个类型。
// 不同于使用 any，它不会丢失信息，保持准确性，传入什么类型并返回什么类型
function identity<T>(arg: T): T {
  return arg
}
console.log(identity(111)) // T捕获传入的是number类型，返回值number类型
console.log(identity('name')) // T捕获传入的是string类型，返回值string类型
console.log(identity(false)) // ....
console.log(identity({ id: 11 })) // ...
console.log(identity([1, false])) // ...

// 普通函数---指定只接收数组的泛型
function myIdentity1<T>(arg: Array<T>): Array<T> {
  console.log(arg) // Array has a .length, so no more error
  return arg
}
myIdentity1([false, 'namse', 123])

// 箭头函数---任意类型的泛型
let myIdentity2: <T>(arg: T) => T = identity
console.log(myIdentity2([{ id: 1 }, 2, [1, 2], false, 'name']))

// class类---泛型-----------------------------------------------------------------------
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
console.log(myGenericNumber.add(1, 2))

// 普通函数---泛型继承接口-----------------------------------------------------------------------
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg) // Now we know it has a .length property, so no more error
  return arg
}
loggingIdentity({ length: 1, name: '222' })
