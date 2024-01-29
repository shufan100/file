// 1、原型、原型链***********
//
// ***普遍来说，构造函数的首字母是大写，普通函数是小写***
// 1. 每个普通函数(或构造函数)都有一个prototype显式原型属性, 默认指向一个空的Object对象。
// 2. 每个普通对象 或 每个实例对象都有一个__proto__隐式原型属性,。

// 3. 什么是构造函数？  构造函数首字母大写，普通函数是小写，其实和普通函数一样。
// 4. 如何创建实例对象？  构造函数通过new关键字去调用返回一个实例对象，该实例对象有一个__proto__隐式原型属性，并自动继承构造函数的prototype原型对象。
// 5. 普通函数和构造函数的区别？ 构造函数可以通过new关键字去调用，构造函数和普通函数一样，自身也是有prototype显示原型属性。

// 4、显式原型与隐式原型关系：
// 4-1：普通函数的prototype:定义函数是就被自动赋值，值默认为{}，即为原型对象；
// 4-2：实例对象的_proto_：在创建实例对象是被自动添加，并在创建实例对象时被自动添加, 并赋值为构造函数的prototype值
// 4-3、原型对象即为当前实例对象的父对象

// <p>2020.7.20总结:1、原型 普通函数有自带的显式原型prototype；构造函数是赋值到_proto_；2、原型链 查找函数的属性的过程</p>
// <p>2020.7.20总结:1、作用域 是对于变量的，分为局部和函数内部作用域；作用域链是当某个变量查找定义的时的过程</p>

function Fun() {
  console.log(this) // 指向new构造函数的实例对象fun1
  this.name = '熊明'
  this.age = 100
}

const funObj = new Fun() //new Fun构造函数，返回实例对象

Fun.prototype.code = '33453' // 在构造函数自身的prototype显示原型对象添加code属性
Fun.prototype.age = '198' // 在构造函数自身的prototype显示原型对象添加code属性
funObj.__proto__.age = '199' // 在实例对象的__proto__隐式原型对象添加age属性

console.dir(Fun) // 构造函数
console.log(funObj) //实例对象
console.log(funObj.code, funObj.age, funObj.name) //这个查找的过程就叫原型链
console.log(funObj.__proto__ === Fun.prototype) // true 实例对象的隐性原型(__proto__)是继承的Fun构造函数的(prototype)显式原型

let obj = { name: '888' }
obj.__proto__.age = 20
console.log(obj)
console.log(obj.age)

/*1、原型链是针对构造函数的。++++++++++++++++++++++++++++++++++++++++
  5、**原型链：当我们new一个构造函数，会返回一个新的实例对象，这个实例对象继承构造函数得prototype原型属性；当我们访问实例对象上的属性时，如果没有这个属性，它就会往上（创建出它的函数中）查找，查找得过程就叫原型链。
	*/
function A() {}
A.prototype.name = '追梦子'

var b = new A() //构造函数赋给变量的是个对象
console.dir(A)
console.log(b, b.name) //追梦子
console.log(b.__proto__.name === A.prototype.name) //构造函数的隐式原型 === 普通函数的原型对象

function Person() {}
Person.prototype.name = 'Nicholas'
Person.prototype.age = 29
Person.prototype.job = 'Software Engineer'
Person.prototype.sayName = function () {
  alert(this.name)
}

function Person1() {}
Person1.prototype.name1 = '111'
console.dir(Person1)

var person1 = new Person()
var person2 = new Person()
person1.__proto__.code = '129'
person1.__proto__.name = '11sdd'

console.dir(Person)
console.log(person1, '构造函数', person2)
console.log(Person.prototype.code == person1.code)
console.log(Person.prototype.code == person2.code)
console.log(person1.code == person2.code)

let accs = function () {
  console.log(1123)
}
accs()

Number.prototype.plus = function (n) {
  return this + n
}
Number.prototype.minus = function (n) {
  return this - n
}
var a = (5).plus(3).minus(6)
console.log(a, '11')

// 2、作用域、作用域链****************************************************************************************************************************************
/* 1、作用域是针对变量的。2、作用域分为两种：全局作用域、函数作用域。
	3、作用域的特点：在自己的变量范围中查找，如果找不到就沿着作用域往上找。 
	4、作用域链：a最后打印出来的是3，因为执行函数c（）的时候它在自己的范围内找到了变量a所以就不会越上继续查找，
	如果在函数c()中没有找到则会继续向上找，一直会找到全局变量a，这个查找的过程就叫作用域链。作用域只会向上查找*/
// 函数被调用时，都会创建一个执行环境以及相应的作用域链。
var a = 1
var b = 11
console.log(a, b)
function fun1() {
  let val = 'ppp'
  a = 2
  var a
  console.log(a, val) //输出2
  function fun2() {
    val = 'kkk'
    console.log(a, val) //输出3  // 函数内部作用域
    a = 3
    b = 22
    console.log(a, b) // 输出22   // 全局作用域 ，b变量一层一层往上走的过程叫做作用域链
  }
  fun2()
}

fun1()
console.log(a, b)
