/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-26 19:34:57
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-03-17 14:25:15
 * @FilePath: \file\webPack\src\js\module1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sum0 } from './common'
console.log(sum0([2, 4]))
// 暴露求和函数
export function sum(a, b) {
  return a + b + 1
}
export function sum1(a, b) {
  return a - b + 987654321
}
