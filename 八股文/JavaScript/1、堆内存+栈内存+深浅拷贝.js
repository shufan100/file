/**什么是浅拷贝？
 * ----1、如果属性是基本类型，拷贝的就是基本类型的值。
 * ----2、如果属性是引用类型，拷贝的就是内存的地址，所以当对象的值改变了，就会影响到使用的对象。
 */

/**什么是深拷贝？
 * ----1、深拷贝会拷贝所有的属性，并拷贝属性指向动态分配的内存。
 * ----2、深拷贝速度较慢，花销较大，拷贝前后的两个对象互不影响。
 */

// 存在栈内存中 ，修改不会全部修改 (number,string存放在栈里，赋值修改不会改到原来的)
var a = (b = c = d = 5)
c = 10

//存在堆内存中，修改会影响
var a1 = (b1 = c1 = d1 = [5])
// 深拷贝
let C1 = JSON.parse(JSON.stringify(c1)) //深拷贝c1
c1[0] = 10

//c2的堆内存的指针改变了，其他的不会变
var a2 = (b2 = c2 = d2 = [5])
c2 = [11]

console.log('栈内存', a, b, c, d) // 5 5 10 5
console.log('堆内存（改变）', a1, b1, c1, d1) // [10] [10] [10] [10]
console.log('堆内存（不改变）', a2, b2, c2, d2) // [5] [5] [11] [5]
console.log('堆内存（不改变）', C1) // [5]

console.time()
// for (let i = 0; i < 100000; i++) {
function fn() {
  // const element = array[i];
  console.log(1)
  fn()
}
fn()
// }
console.timeEnd()
