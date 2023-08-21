/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-26 19:34:57
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-08-15 09:38:41
 * @FilePath: \file\TS\TypeDemo\Demo3.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 静态基础类型 number string null undefinde boolean void(无：) symbol
const num: number = 918;
const str: string = 'abc';
const bol: boolean = false;


// 对象类型：
const xiaojiejie: {
  name: string,
  age: number
} = {
  name: "小姐姐",
  age: 19
}

// 数组类型
const xiaojiejies: string[] = ['小红', '小紫', '小花']

// 
class Person { }
const dajio: Person = new Person()

let num11 = 100

export { }