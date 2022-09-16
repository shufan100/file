import { sum } from './js/module1'
import { sub } from './js/module2'
import module3 from './js/module3'
// 在入口文件引入json文件
import a from './json/test.json'
// 在入口文件引入样式
import './css/index.less'
// 其它资源
import './font/iconfont.less'

console.log(sum(1, 2))
console.log(sub(3, 2))
console.log(module3.mul(5, 6))
console.log(module3.divs(20, 5))
console.log(a, typeof a)

setTimeout(() => {
  console.log('计时器')
}, 1000)

let x = 22
console.log(x)
console.log(11)

// let p = new Promise((resolve) => {
//   resolve('100')
// })
// p.then(res => {
//   console.log(res)
// })