let arr = [
  { id: 1, name: '小红' },
  { id: 2, name: '家具' },
  { id: 3, name: '路由' },
  { id: 4, name: '细节' },
  { id: 5, name: '对接' }
]
let arr2 = [
  { id: 1, name: '蒋介石' },
  { id: 2, name: '库萨克' },
  { id: 3, name: '路由' },
  { id: 4, name: '看看书' },
  { id: 5, name: '细节' }
]

// 两数组差集-------------------------------------------------------------------------
function getDifferentArr(allArr, partArr, param) {
  let newAllArr = JSON.parse(JSON.stringify(allArr))
  let newPartArr = JSON.parse(JSON.stringify(partArr))
  for (let i = allArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < partArr.length; j++) {
      if (allArr[i].name === partArr[j].name) {
        newAllArr.splice(i, 1)
        newPartArr.splice(i, 1)
        break
      }
    }
  }
  return [...newAllArr, ...newPartArr]
}
console.log(getDifferentArr(arr, arr2))

// 两数组交集-------------------------------------------------------------------------
function getIntersection(allArr, partArr) {
  let arr = []
  for (let i = allArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < partArr.length; j++) {
      if (allArr[i].name === partArr[j].name) {
        arr.push(allArr[i])
      }
    }
  }
  return arr
}
console.log(getIntersection(arr, arr2))

// 多数组取交集-------------------------------------------------------------------------
const intersection = (a, ...arr) => [...new Set(a)].filter(v => arr.every(b => b.includes(v)))
intersection([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9])
