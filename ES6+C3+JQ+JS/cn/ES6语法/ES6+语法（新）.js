/**
 * @author SHUF
 * @date 2023-03-23 11:00:10
 * @Description   ES6+新语法
 * 
  1. ??（非空运算符） // 和 || 差不多，但??会将0和''也作为值返回
  2. ??=（空赋值运算符）
  3. ?.（链判断）
  4. startsWith (判断字符是否在头部)
  5. endsWith (判断字符是否在尾部)
  6. repeat（重复字符串次数）
  7. padStart（字符串头部补全）
  8. padEnd（字符串尾部补全）
  9. trim：去除头尾空格
  10. trimStart：去除头部空格
  11. trimEnd：去除尾部空格
  12. Number.isInteger：判断数字是否是整数；不是数字直接false
  13. BigInt：整数无线大
  14. Symbol：表示独一无二的值
  15. new Set
  16. new Map
  17. new Proxy
  18. Reflect
  19. new WeakSet

 */
/*********************************************** ??（非空运算符） **********************************************/
// ?? 和 || 差不多，但??会将0和''也作为值返回
// let a = 0 ?? 'sf' //0
// let a2 = null ?? 'sf' // sf
// let a3 = '' ?? 'sf' //''
// let a4 = false ?? 'sf' //false
// console.log(a, a2, a3, a4)

/*********************************************** ??=（空赋值运算符） **********************************************/
// let aa = 0
// let b = '你好'
// let c = null
// let d = 123
// b ??= aa // b = “你好”
// c ??= d // c = '123'

/***********************************************  ?.（链判断） **********************************************/
// let obj1 = { c: 11 }
// console.log(obj1?.a) // undefined
// console.log(obj1?.c) // 11

/***********************************************  startsWith、endsWith **********************************************/
let s = 'hello world!'
// 判断字符是否在头部
s.startsWith('hello') //true
// 判断字符是否在尾部
s.endsWith('!') //true

/***********************************************  repeat、padStart、padEnd **********************************************/
// repeat: 重复字符串次数
'SHUF'.repeat(2) // 'SHUFSHUF'
// padStart：字符串头部补全
'x'.padStart('abc', 6) //'abcabx'
// padEnd：字符串尾部补全
'x'.padEnd(5, 'nm') //'xnmnmn'

/***********************************************  trim、trimStart、trimEnd **********************************************/
const s1 = '  abc  '
// trim：去除头尾空格
s1.trim() // 'abc'
// trimStart：去除头部空格
s1.trimStart() // 'abc  '
// trimEnd：去除尾部空格
s1.trimEnd() // '  abc'

/***********************************************  Number.isInteger **********************************************/
// Number.isInteger：判断数字是否是整数；不是数字直接false
Number.isInteger(25) // true
Number.isInteger(25.1) // false

/***********************************************  BigInt：整数无线大 **********************************************/
// BigInt：整数无线大
let bgi = BigInt(2122222221212199999)
console.log(bgi)

/***********************************************  Symbol：表示独一无二的值 **********************************************/
Number.prototype[Symbol.iterator] = function* () {
  let i = 0
  let num = this.valueOf()
  while (i < num) {
    yield i++
  }
}
console.log([...5]) // [0, 1, 2, 3, 4]

// Symbol：表示独一无二的值
let Sy1 = Symbol()
let Sy2 = Symbol()
// Sy1 === Sy2  false
let Sy3 = Symbol('1')
let Sy4 = Symbol('1')
// Sy3 === Sy4  false

/***********************************************  new Set **********************************************/
// Set：用来生成Set数据结构,对象结构
// 去重
const set = new Set([1, 2, 4, 4, 3]) //{1,2,3,4}
const set2 = [...new Set('ababbc')].join('') //abc

// 成员总数
const items = new Set([1, 2, 3, 4, 4, 6, '5', 5, 5]) //{1,2,3,4,6,'5',5} //向 Set 加入值的时候，不会发生类型转换
items.size //7
console.log('Set.size：', items.size)

let S1 = new Set([1, 2, 3, 3, '3'])
console.log('Set数据结构：', S1) //{ 1, 2, 3, '3' }   注意：数字3和字符串'3'是不同的元素

//add 通过add(key)方法可以添加元素到Set中；可以重复添加，但不会有效果：
S1.add(4)
console.log('Set的add', S1) //Set(5) { 1, 2, 3, '3', 4 }
S1.add(4)
console.log('Set的add重复添加', S1) //Set(5) { 1, 2, 3, '3', 4 }

//通过delete(key)方法可以删除元素：
let S2 = new Set([1, 2, 3])
S2.delete(3)
console.log('Set的delete', S2) // Set(2) { 1, 2 }

/***********************************************  new WeakSet **********************************************/
// WeakSet：值只能是对象、数组
const a1 = [
  [1, 2],
  [3, 4]
]
const ws = new WeakSet(a1) // WeakSet {[1, 2], [3, 4]}
console.log('WeakSet:', ws)

/***********************************************  new Map **********************************************/
// Map：Map数据结构；对象；键值可为任何类型；正常对象键值只能是字符串
const map = new Map([
  ['name', '张三'],
  ['age', 20],
  [false, 'Author']
]) //Map(3) {'name' => '张三', 'age' => 20, false => 'Author'}

map.get('name') //张三
map.has('age') //true
map.set('pp', 100) //Map(4) {'name' => '张三', 'age' => 20, false => 'Author', 'pp' => 100}
map.delete(false) //Map(3) {'name' => '张三', 'age' => 20, 'pp' => 100}

let m1 = { a: 1 }
map.set(m1, '999') //Map(4) {'name' => '张三', 'age' => 20, 'pp' => 100, {a:1} => '999'}
map.get(m1) //'999'

/***********************************************  new Proxy **********************************************/
// Proxy：在对象之前架设的一层'拦截'，外界访问对象都必须通过这层拦截。
var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`)
      return Reflect.get(target, propKey, receiver)
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`)
      return Reflect.set(target, propKey, value, receiver)
    }
  }
)
/** Proxy拦截对象的 13 种方法：
 *    get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
 *    set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v;或proxy['foo'] = v;返回一个布尔值。
 *    has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
 *
 *    deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
 *    defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
 *
 *    getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
 *    setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
 *
 *    ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
 *    getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
 *    preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
 *    isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
 *    apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
 *    construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 */

/*********************************************** Reflect **********************************************/
// Reflect：新一代的Object; es6操作对象的提供的新API;
var loggedObj = new Proxy(obj, {
  get(target, name) {
    return Reflect.get(target, name)
  },
  deleteProperty(target, name) {
    return Reflect.deleteProperty(target, name)
  },
  has(target, name) {
    return Reflect.has(target, name)
  }
})
/** Reflect操作对象的 13 个静态方法：
 *    Reflect.get(target, name, receiver)
 *    Reflect.set(target, name, value, receiver)
 *    Reflect.has(target, name)
 *
 *    Reflect.defineProperty(target, name, desc)
 *    Reflect.deleteProperty(target, name)
 *
 *    Reflect.getPrototypeOf(target)
 *    Reflect.setPrototypeOf(target, prototype)
 *
 *    Reflect.ownKeys(target)
 *    Reflect.getOwnPropertyDescriptor(target, name)
 *    Reflect.preventExtensions(target)
 *    Reflect.isExtensible(target)
 *    Reflect.apply(target, thisArg, args)
 *    Reflect.construct(target, args)
 */
