// Person构造函数  （被new的函数叫做构造函数）
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log(this.age)
}
// js封装的new
let p1 = new Person('shu', 16)
console.log(p1, '实例对象p1')
console.log(p1.name, p1.age)
p1.say()

/** 手写new操作符
 * fn:函数
 * args：接收所有参数
 */
function myNew(fn, ...args) {
  // 1、创建一个对象，
  let obj = Object.create({})
  // 2、obj隐式原型 指向 构造函数的显式原型（obj.__proto__ = fn.prototype ）
  obj.__proto__ = fn.prototype
  // 3、执行构造函数，this指向空对象
  fn.apply(obj, args) // apply:传数组
  // fn.call(obj, ...args) // call:传多个字段
  console.log(obj)
  // 4.返回对象
  return obj
}

// 自定义new函数
let p = myNew(Person, 'fan', 1899)
console.log(p, '实例对象p')
console.log(p.name, p.age)
p.say()
console.warn('----------------')
