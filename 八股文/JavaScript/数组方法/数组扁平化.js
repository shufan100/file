var arr = [1, [10], 22, [2, [4, [5, [6]]]]]


// 方法一：reduce函数处理
function flatArr(arr) {
  return arr.reduce((res, next) => {
    // console.log(res,next)
    return res.concat(Array.isArray(next) ? flatArr(next) : next)
  }, [])
}
console.log(flatArr(arr))

// 方法二：es6-float函数处理
const arr2 = arr.flat(Infinity)
console.log(arr2)

// 方法三：es6-toString+split处理
const arr3 = arr.toString().split(',')
console.log(arr.toString(),arr3)


