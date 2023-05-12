/**
 * @author SHUF
 * @date 2023-03-23 10:24:08
 * @Description 对象遍历
 *
  Object.(控制台查看最新语法)
  1. for...in   // 遍历对象
  2. Object.keys() // 获取对象健名
  2. Object.values() // 获取对象健值
 */

// 遍历对象
let obj = { name: '小明', age: 18, is: true }
for (let key in obj) {
  console.log('遍历对象--健名：', key, ' 健值：', obj[key])
}

// 获取对象健名
let obj1 = Object.keys(obj)
console.log('对象健名：', obj1) // [ 'name', 'age', 'is' ]

// 获取对象健值
let obj2 = Object.values(obj)
console.log('对象健值：', obj2) // [ '小明', 18, true ]
