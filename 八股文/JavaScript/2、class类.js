/**
 *  -介绍：
 *    --ES6 的class可以看作是es5的语法糖
 *    --私有属性提案:在私有属性和方法前加#
 *
 *  -es5 和 es6 例子：(相同,不同写法)
 *    --两者是一样的，es6可以看作是es5的语法糖;
 *    --hasOwnProperty判断是否为对象的自身属性；speak是对象的原型属性；
 *  -es5 和 es6 例子：(区别)
 *    --类不存在变量提示; function存在变量提升;
 */
console.warn('-----------es5----------')
// es5写法
function Persones5(name, age) {
  this.name = name
  this.age = age
  this.add = function () {
    console.log(`岁数翻10倍${age * 10}`)
  }
}
Persones5.prototype.sex = '男'
Persones5.prototype.speak = function () {
  console.log(`ES5：我叫‘${this.name}’，我的年龄是‘${this.age}’，我的性别是‘${this.sex}’`)
}

const pro1 = new Persones5('SHUF', 18)
console.log('实例对象pro1:', pro1)
pro1.speak()
pro1.add()

console.log(pro1.hasOwnProperty('name')) //true
console.log(pro1.hasOwnProperty('sex')) //false
console.log(pro1.hasOwnProperty('add')) //true
console.log(pro1.hasOwnProperty('speak')) //false

//

console.warn('----------es6-----------')
// es6 class类名写法
class Person {
  sex1 = this.sex //新写法
  constructor(name, age) {
    // this 是指向实例对象
    this.name = name
    this.age = age
    this.add = () => {
      console.log(`岁数翻10倍${age * 10}`)
    }
  }

  // 该方法放在类的原型对象上
  speak() {
    console.log(`ES6：我叫‘${this.name}’，我的年龄是‘${this.age}’，我的性别是‘${this.sex}’`)
  }
}
Person.prototype.sex = '女'

// 创建一个class实例
const p1 = new Person('tom', 28)
console.log('实例对象p1:', p1)
p1.speak()
p1.add()

console.log(p1.hasOwnProperty('name')) //true
console.log(p1.hasOwnProperty('sex')) //false
console.log(p1.hasOwnProperty('add')) //true
console.log(p1.hasOwnProperty('speak')) //false

console.warn('----------es6（修改this指向）-----------')
// 修改this指向
pro1.speak.call({ name: 'bob', age: 21, sex: '男' })
p1.speak.apply({ name: 'bob11', age: 21, sex: '女' })

console.warn('----------es6（get set关键字）-----------')
// 类的get set关键字
class MyClass {
  get prop() {
    console.log('getter')
  }
  set prop(value) {
    console.log('setter: ' + value)
  }
}
let m1 = new MyClass()
m1.prop = 123
m1.prop

console.warn('----------es6（静态方法 属性 私有属性）-----------')
// 类的静态方法
class Foo {
  static name = 'SHUF'
  static #age = 100
  static staticSpeak() {
    console.log('ES6:静态方法staticSpeak')
    console.log('ES6:静态属性#age', this.#age)
  }
}
Foo.staticSpeak() // 'hello'
console.log('ES6:静态属性name', Foo.name) // SHUF
// console.log('ES6:静态私有属性#age', Foo.#age) // undefined
let foo = new Foo()
// foo.staticSpeak() // TypeError: foo.classMethod is not a function

console.warn('----------es6（继承）-----------')
// 继承类
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age) //super接收继承父类的属性
    this.grade = grade
  }
  // 从父类继承过来的方法
  speak() {
    // speak的this,不改变this指向是指向Person实例，改变就指向传进来的对象
    console.log(`我叫${this.name}，我的年龄是${this.age},我的地址${this.grade}`)
  }
}
const s1 = new Student('工商局', 29, '地址111')
console.log('继承后的实例对象', s1)
s1.speak()
