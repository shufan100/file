var arr = [1, [10], 22, [2, [4, [5, [6]]]]]

// reduce函数处理
function flatArr(arr) {
  return arr.reduce((res, next) => {
    // console.log(res,next)
    return res.concat(Array.isArray(next) ? flatArr(next) : next)
  }, [])
}
console.log(flatArr(arr))

// es6-float函数处理
const arr2 = arr.flat(Infinity)

// es6-toString+split处理
const arr3 = arr.toString().split(',')

console.log(arr, arr3)
