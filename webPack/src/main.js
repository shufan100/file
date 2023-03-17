/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-26 19:34:57
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-03-17 15:01:23
 * @FilePath: \file\webPack\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sum, sum1 } from './js/module1'
import { sub } from './js/module2'
import module3 from './js/module3'
// 在入口文件引入json文件
import a from './json/test.json'
// 在入口文件引入样式
import './css/index.less'
import './css/index2.less'
// 其它资源
// import './font/iconfont.less'

console.log(sum(1, 2))
console.log(sum1(1, 2))
console.log(sub(3, 2))
console.log(module3.mul(5, 6))
console.log(module3.divs(20, 5))
console.log(a, typeof a)

// 判断是否开启热更新，js默认是不开启的
if (module.hot) {
  // 给module1.js文件开启热更新
  module.hot.accept('./js/module1')
  // vue-loader、react-hot-loader //会给js开始热更新
}

setTimeout(() => {
  console.log('计时1111器')
}, 1000)

// let p = new Promise((resolve) => {
//   resolve('100')
// })
// p.then(res => {
//   console.log(res)
// })
