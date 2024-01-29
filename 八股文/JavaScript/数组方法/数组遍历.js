//******************数组循环***************************//

//for in 遍历对象**********************************
let arr = []
let obj = { name: '侠客', age: '12', sex: '男' }
for (const key in obj) {
  console.log(key)
  console.log(obj[key])
  let objs = {
    name: key,
    val: obj[key]
  }
  arr.push(objs)
}
console.log('修改对象', arr)

// for of 遍历数组****************************
let arr1 = ['a', 'b', 'c']
for (var i = 0; i < arr1.length; i++) {
  console.log(i, arr1[i], 111)
}
for (const item of arr1) {
  console.log('输出数组值:', item)
}
// 输出数组索引
for (const item1 of arr1.keys()) {
  console.log('输出数组索引:', item1)
}
// 输出数组索引和值
for (const [index, val] of arr1.entries()) {
  console.log('输出数组索引和值:', index + ' ' + val)
}

// forEach 遍历数组****************************************
let arr2 = ['a1', 'b2', 'c3']
arr2.forEach((val, index) => {
  console.log(val, index)
})

// filter(some写法一样)循环遍历数组
let Arr = arr1.filter((x, index) => {
  return x == 'a'
})
console.log(Arr, 333)

// map循环 (不会因条件中断)**************************************
let mapArr = arr1.map((x, index) => {
  return x == 'b'
})
console.log(mapArr)

// 新增数据类型symbol ************************************
let s = Symbol()
console.log(typeof s)
function poing() {
  return 30
}
console.log(poing(), '999')

// 对象转数组*******************************************
let json = {
  0: 'jspang',
  1: '技术胖',
  2: '大胖逼逼叨',
  length: 3 //必须加
}
let arr12 = Array.from(json)
console.log(arr12)

// 文本或变量转数组***************************************
let arr13 = Array.of(3, 4, 'sjasa')
console.log(arr13)

// fill( )实例方法：fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr15.fill('jspang', 2, 6)
console.log(arr15)

// 严禁模式(两个参数都必须要存在)********************************************
function adds(a, b) {
  'use strict'
  return a + b
}
console.log(adds(1, 5))

// 伪数组*******************************************
// 说明：伪数组不能修改长度的数组，可以修改元素
fn(1, 2, 3, 4, 5, 6)
fn(1, 2, 4, 5, 7, 9, 4)

function fn(a, b) {
  arguments[0] = 0
  console.log(arguments)
  console.log(arguments instanceof Array) //不是数组
  console.log(arguments.length) //实参个数 6 7
  console.log(fn.length) //形参个数  2 2
  // console.log(arguments.callee);//整个函数,包括注释
}
