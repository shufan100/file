/**
   * @author SHUF
   * @date 2023-03-23 09:17:36
   * @Description 数组处理方法
   *

    1. push()  尾部插入一个元素，返回值是添加数据后数组的新长度。（改变原数组）
    2. pop()   从尾部删除一个元素， 返回被删除掉的元素。（改变原数组）
    3. shift()  头部弹出一个元素， 返回被删除掉的元素 （改变原数组）
    4. unshift()  头部插入一个元素，返回值是添加数据后数组的新长度（改变原数组）

    5.reverse()    原数组倒序  它的返回值是倒序之后的新数组（改变原数组）
    6.concat()：   数组合并。（不改变原数组）
    7.toString( )： 数组转字符串；（不改变原数组）
    8.toLocaleString( )：将数组转换为本地数组。（不改变原数组）

    9. sort()     对数组进行排序,func有2各参数。（改变原数组）
    10. splice()  数组: 删除、新增、修改。（改变原数组）
    11、slice( )：数组截取，返回新数组（不改变原数组）
    12、join()：讲数组进行分割成为字符串  这能分割一层在套一层就分隔不了了

    13. fill(value，start，end)：使用给定值，填充元素。
      value：填充的值；
      start：开始填充的位置；
      end：填充结束的位置。
       // es6 获取数组最大最小值————————————————————————————————————
  var arro = [0, 8, 3, 46]
  // var max = Math.max.apply(null,arro);//46
  var max = Math.max(...arro) //46
  var min = Math.min(...arro) //46
  console.log(max, min, 'max')

    */

/*********************************************** sort 排序 **********************************************/
let arr = [
  { id: 2, name: '地点' },
  { id: 4, name: '地点' },
  { id: 1, name: '地点' },
  { id: 3, name: '地点' }
]
arr.sort((s1, s2) => s1.id - s2.id) // 升序
console.log('升序:', arr)

arr.sort((s1, s2) => s2.id - s1.id) // 降序
console.log('降序:', arr)

/********************************************* splice 数组：增、删、改 **********************************************/
let arr1 = [
  { id: 1, name: '地点1' },
  { id: 2, name: '地点1' },
  { id: 3, name: '地点1' },
  { id: 4, name: '地点1' }
]
// 三个参数：数组索引，数组个数，数组新元素
let a1 = arr1.splice(0, 2) //  （删除）返回删除的元素
console.log('splice删除:', a1) // [ { id: 1, name: '地点1' }, { id: 2, name: '地点1' } ]

arr1.splice(0, 1, 'aaa') // （修改）不返回
console.log('splice修改:', arr1) //[ 'aaa', { id: 4, name: '地点1' } ]

arr1.splice(0, 0, 'AAA') //  （开头新增）不返回
console.log('splice开头新增新增:', arr1) //[ 'AAA', 'aaa', { id: 4, name: '地点1' } ]

arr1.splice(arr1.length, 0, 'BBB') //  （结尾新增）不返回
console.log('splice结尾新增:', arr1) //[ 'AAA', 'aaa', { id: 4, name: '地点1' }, 'BBB' ]

/*********************************************** slice 数组截取 **********************************************/
let arr2 = [
  { id: 1, name: '地点2' },
  { id: 2, name: '地点2' },
  { id: 3, name: '地点2' },
  { id: 4, name: '地点2' }
]
// 二个参数：数组索引开始，数组个数，返回新数组
let a2 = arr2.slice(0, 2) // 2个参数，返回数组索引之间的元素 [0,2)
console.log('slice数组截取:', a2) // [ { id: 1, name: '地点2' }, { id: 2, name: '地点2' } ]

let aa2 = arr2.slice(2) // 1个参数，返回数组索引后面所有元素 (2,arr.length]
console.log('slice数组截取:', aa2) // [ { id: 3, name: '地点2' }, { id: 4, name: '地点2' } ]

/*********************************************** fill 填充元素 **********************************************/
let arr3 = ['a', 'b', 'c', 'd']
console.log('fill填充元素:', arr3.fill(7, 1, 3)) //[ 'a', 7, 7, 'd' ]

/***********************************************  Math.max、 Math.min 数组最大最小值 **********************************************/
var arro = [0, 8, 3, 46]
// var max = Math.max.apply(null,arro);//46
var max = Math.max(...arro) //46
var min = Math.min(...arro) //46
console.log(max, min, 'max')
