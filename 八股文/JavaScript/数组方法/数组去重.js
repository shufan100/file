var arr1 = ['a', 'a', 30, 'b', 'b', 'b', 'c', 'e', 'f', 1, 2, 2, 3, 3, 3, {}, {}, null, null]

// es6去重 只对单个元素————————————————————————————————————1
let newArr = [...new Set(arr1)]
console.log('es6去重:', newArr)

function uniqueFilter(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item, 0) === index)
}
console.log('Filter去重:', uniqueFilter(arr1))

function uniq5(arry) {
  return arry.reduce((prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]), [])
}
console.log(uniq5(arr1))

console.warn('------------------------------------------------------------------------------------------------------------')

// 针对数组对象元素内部的字段去重
var arr = [
  { id: 1, name: 'zhangs', age: 18, contact: 1 },
  { id: 2, name: 'zhangs', age: 18, contact: 2 },
  { id: 3, name: 'zhangs', age: 18, contact: 3 },
  { id: 4, name: 'zhangs', age: 4444, contact: 4 },
  { id: 5, name: 'zhangs', age: 18, contact: 3 },
  { id: 6, name: 'zhangs', age: 18, contact: 40 },
  { id: 7, name: 'zhangs', age: 18, contact: 40 }
]
// es3去重————————————————————————————————————
function unique(arr) {
  let newArr = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].contact]) {
      newArr.push(arr[i])
      obj[arr[i].contact] = true
    }
  }
  return newArr
}
console.log('es3数组对象去重1:', unique(arr))

// es6去重————————————————————————————————————
function unique22(arr) {
  let obj = {}
  return arr.filter(i => {
    if (!obj[i.contact]) {
      obj[i.contact] = true
      return true
    }
  })
}
function unique2(arr) {
  let arrs = [] // 临时数组,用来存放不包含重复元素的数组
  return arr.filter(i => {
    if (!arrs.includes(i.contact)) {
      arrs.push(i.contact)
      //如result中没有arry[i],则添加到数组中
      return true
    }
  })
}
console.log('es6-Filter数组对象去重2:', unique2(arr))

function unique3(arr) {
  const res = new Map()
  return arr.filter(i => !res.has(i.id) && res.set(i.id, 1))
}
