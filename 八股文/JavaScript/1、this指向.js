/**
 * @author SHUF
 * @date 2024-01-29 11:01:48
 * @Description this指向 (三种角色：1、普通函数 this指向window；2、构造函数 this指向方法；3、对象方法 this指向对象)
 */

// 1、普通函数`````````````````````````````````
function add() {
  let a1 = 1
  console.log(this, '全局下的函数指向window')
}
add()

// 2、构造函数``````````````````````````````````
// 用 new 关键字来调用的函数，称为构造函数。构造函数首字母一般大写
function Person(a, b) {
  this.a = a
  this.b = b
  console.log(this, '指向对象')
  // this指向person（new实例新创建的对象）
}
var p1 = new Person('num123', '213121')
// var p2 = new Person('num123', '213121');
// 任何函数，只要通过 new 操作符来调用，那它就可以作为构造函数
// 以new这种方式调用构造函数实际上会经历以下 4 个步骤：
// (1) 创建一个新对象；
// (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
// (3) 执行构造函数中的代码（为这个新对象添加属性）；
// (4) 返回新对象。
console.log(p1.__proto__ === Person.prototype)
console.log(p1, '212')

// 3、对象方法``````````````````````````````````````
var p2 = {
  firstName: 'first',
  lastName: 'last',
  bal: function () {
    console.log(this, '指向对象')
    return this.firstName + '' + this.lastName
  }
}
p2.bal()
