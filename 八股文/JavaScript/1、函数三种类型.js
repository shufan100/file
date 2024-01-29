// 函数只有三种定义方法：1、函数声明；2、函数表达式（包括：匿名函数）；3、构造函数

//1、函数声明
function test() {}
//2-1、匿名函数
const fun = function () {}
//2-2、函数表达式  （等于后面是：匿名函数）
let p1 = function () {}

//3、构造函数 (构造函数的函数声明首字母一般大写)
//	Person：构造函数； p2：是new关键字调用构造函数返回的实例对象
function Person() {}
let p2 = new Person()
