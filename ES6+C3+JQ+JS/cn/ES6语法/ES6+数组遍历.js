/**
   * @author SHUF
   * @date 2023-03-23 09:17:36
   * @Description 数组遍历
   
    1.forEach  循环遍历 有3个参数 无法使用 break continue ， 参数一：每个元素 参数二：每个下标 参数三：每个一项包扩下标和元素
    2.map( )   没有return时，对数组的遍历。有return时，返回一个新数组，。（不改变原数组）
    3.filter( )  对数组中的每一运行给定的函数，会返回满足该函数的项组成的数组。
    4.find()     返回符合条件的第一个元素。(不是数组)
    5.findIndex() 返回符合条件的第一个元素的索引。(不是数组)
    6. for...of  
      1.keys( )：对键名的遍历。
      2.values( )：对键值的遍历。
      3.entries( )：对键值对的遍历。
    7.every( )： 数组所有元素都符合条件返回true，有一个不符合返回false
    8.some( )：  数组内有一个y元素符合条件，返回true；都不符合返回false
    9、reduce( )：回调函数中有4个参数。prev（之前计算过的值），next（之前计算过的下一个的值），index，arr。把数组列表计算成一个
    10. indexOf  找索如果找到了就会返回当前的一个下标，若果没找到就会反回-1
    11. lastIndexOf 它是从最后一个值向前查找的 找索如果找到了就会返回当前的一个下标，若果没找到就会反回-1
    12、copyWithin(target，start(可选)，end(可选))：数组内数据的复制替换
      target：从该位置开始替换数据；
      start：从该位置开始读取数据，默认为0；
      end：到该位置停止数据的读取，默认为数组的长度


    
    1. Array.isArray() 判断是否是数组
    2. Array.of()     将一组值转换为数组
    3. Array.from()   来源是类数组。将对象或字符串转成数组，注意得有length。
    4. includes( )：  数组原型的方法,查找一个数值是否在数组中，只能判断一些简单类型的数据，对于复杂类型的数据无法判断。该方法接受两个参数，分别是查询的数据和初始的查询索引值。
    5. delete [1]   delete 可以删除数组中的一向
    6. flat()       扁平化 将嵌套的数组 “拉平”，变成一维数组。该方法返回一个新数组，对原数据没有影响。// 参数写的就是代表要扁平到第几层
    7. flatMap( )：对原数组的每个成员执行一个函数。

    
  */
//1、every()  -- 数组所有属性都符合返回true，有一个不符合返回false
var arr = [1, 56, 80, 5]
var main = arr.every(n => n > 0)
console.log(main) //输出:true

//2、some()  -- 只要数组内有一个属性符合，返回true
var arr = [1, -56, 80, -5]
var main = arr.some(n => n > 0)
console.log(main) //输出:true

//3、reducer()
var arr = [10, 20, 30, 40]
let result = arr.reduce(function (prev, next, index, arr) {
  return prev + next
})
console.log(result) //输出:100

// 4、filter  返回满足要求的数组项组成的新数组
var arr3 = [3, 6, 7, 12, 20, 64, 35]
var result3 = arr3.filter((item, index, arr) => {
  return item > 3
})
console.log(result3) //[6,7,12,20,64,35]

// 5、map  返回每次函数调用的结果组成的数组
var arr4 = [1, 2]
var result4 = arr4.map((item, index, arr) => {
  return `<span>${item}</span>`
})
console.log(result4)

//6、copyWithin()
var arr = [1, 2, 3, 4, 5]
var main = arr.copyWithin(0, 3)
console.log(main) //输出:[4,5,3,4,5]

//7、find()
var arr = [1, -5, 2, 9, -6]
var main = arr.find(n => n < 0)
console.log(main) //输出:-5

//8、for...of (keys()  values()  entries())
var arr = ['a', 'b', 'c', 'd']
for (let index of arr.keys()) {
  console.log(index)
}
for (let elem of arr.values()) {
  console.log(elem)
}
for (let [index, elem] of arr.entries()) {
  console.log(index, elem)
}

// ********************************************************************
//1、Array.from()  --   Array.of()
var arrayLink = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
var arr = Array.from(arrayLink)
console.log(arr) // 输出: [a,b,c]

console.log(Array.from('abcdefg')) //输出:["a", "b", "c", "d", "e", "f", "g"]
console.log(Array.of(1, 2, 3, 4, 5)) //输出: [1, 2, 3, 4, 5]

//2、includes()
let arr = [12, 34, 223, 45, 67]
console
  .log(arr.includes(45)) //输出:true
  [(1, 2, NaN)].includes(NaN) // true
  [(1, 2, NaN)].indexOf(NaN) // -1
