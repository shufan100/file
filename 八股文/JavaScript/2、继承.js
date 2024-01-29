/**一、原型链继承
 * ----特点：
 *     1.实例可继承的属性有：实例的构造函数的属性、父类构造函数的属性、弗雷原型的属性。（新实例不会继承父类实例的属性）
 * ----缺点：
 *     1.新实例无法向父类构造函数传参
 *     2.继承单一
 *     3.所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改）
 */

/**二、借用构造函数继承
 * ----重点：
 *     1.用.call()和.apply()将父类的构造函数引入子类函数（在子类函数中做了父类函数的自执行）
 * ----特点：
 *     1.只继承了父类构造函数的属性，没有继承父类原型的属性
 *     2.解决了原型链继承123缺点
 *     3.可以继承多个构造函数属性（call多个）
 *     4.在子实例中可向父实例传参
 * ----缺点：
 *     1.只能继承父类构造函数的属性
 *     2.无法实现构造函数的复用
 *     3.每个新实例都有父类构造函数的副本，臃肿
 */

/**三、组合继承（组合原型链继承和借用构造函数继承）（常用）
 * ----重点：
 *     1.结合了两种继承模式的优点，传参，复用
 * ----特点：
 *     1.可以继承父类原型上的属性、可以传参、可复用
 *     2.每个新实例引入的构造函数属性是私有的
 * ----缺点：
 *     1.调用了两次父类构造函数（耗内存），子类的构造函数会替代原型上的按个父类构造函数
 */

/**四、原型式继承
 * ----重点：
 *     1.用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了这个可以随意增添属性的实例或对象，object.create()就是这个原理。
 * ----特点：
 *     1.类似于复制一个对象，用函数包装
 * ----缺点：
 *     1.所有实例都会继承原型上的属性
 *     2.无法实现复用。（新实例属性都是后面添加的）
 */

/**五、原型式继承
 * ----重点：
 *     1.通过extend 和 super 实现继承
 */

/**六、寄生式继承
 * ----重点：
 *     1.给原型式继承外面套了个壳子。
 * ----特点：
 *     1.没有创建自定义累死，因为只是套了个壳子返回对象，这个函数顺理成章就成了创建的新对象
 * ----缺点：
 *     1.没有用到原型、无法复用
 */

//原型链继承

function person(name, age) {
  this.name = name
  this.age = age
}
function book(name) {
  this.name = '卡就发'
  this.lookat = function (a) {
    console.log('计算机计算机')
  }
}

person.prototype.read = function (a) {
  console.log('I can read')
} //对象创建时会占用内存，把把方法定义到公共的方法，节省了内存
person.prototype.book = new book()
console.dir(person) //打印函数
let p = new person() //实例化函数（构造函数）
p.read() //构造函数调用函数在原型上加的方法
console.log(p.book.name) //调用继承book函数的属性
p.book.lookat() //调用继承book函数的方法

console.log(p.book instanceof book)

function User1(username, password) {
  this.username = username
  this.password = password
  this.lgoin = function () {
    console.log('登陆1111')
  }
}

function Admin1() {
  this.deletePerson = function () {
    console.log('删除111')
  }
}

// Obejct原型是系统默认的，所有的引用类型都可以调用Object原型上的方法
Object.prototype.login = function () {
  console.log('Object原型上的login的方法') // 指向Obejct原型是系统默认的，所有的对象上面都是Object的prototype
}

Admin1.prototype = new User1('admin1', 111)
let admin1 = new Admin1()

console.log(admin1)
admin1.login()
// 'Object原型上的login的方法'
//  先在Admin方法上找，没有再去继承的User方法找，再没有就去Object的方法找，最终找不到就报错

// 不管是数组，日期对象，对象，它们的原型都指向Object的prototype
let arr = [1, 2, 3]
arr.login() //  'Object原型上的login的方法'

console.error('-------')

//class继承（通过extend super实现继承）
class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }
  name = 'shuf'
  login() {
    console.log('登陆')
  }
}
User.prototype.age = 19
class Admin extends User {
  work = 'IT'
  deletePerson() {
    console.log('deletePerson方法')
  }
}
User.prototype.address = '厦门'

let admin = new Admin('admin', 123456)

admin.deletePerson()
admin.login()
console.log(admin.username, admin.password, admin.name, admin.work)
console.log(admin.address, admin.age)
console.dir(Admin)
console.log(admin)
