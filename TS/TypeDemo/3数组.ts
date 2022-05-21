// 数组--第一种写法
//固定数组内部元素类型一致
let ArrNumber: number[] = [1, 2, 3]
let ArrSring: string[] = ['a', 'b', 'c']
let ArrBool: boolean[] = [false, true, false]
let ArrObject: object[] = [{ id: 1 }, { id: 2 }]
let ArrUndefined: undefined[] = [undefined, undefined]
let ArrNull: null[] = [null, null]
let ArrAnys: any[] = [1, true, 'free']

//指定数组内部各个元素的类型
let Arr1: (number | boolean | string)[] = [1, true, 'free']
let Arr2: { name: string; age: number }[] = [
  { name: '1', age: 18 },
  { name: '3', age: 26 }
]
let Arr3: (string | number)[] = [99, 'gg', 'jj', 77]
let Arr4 = [12, 'fsfs', { name: '2121', age: false }]

// 数组--泛型写法
let ListNumber: Array<number> = [1, 2, 3]
let ListSring: Array<string> = ['1', '2', '3']
let ListBool: Array<boolean> = [false, true, false]
let ListObject: Array<object> = [{ id: 1 }, { id: 2 }]
let ListUndefined: Array<undefined> = [undefined, undefined]
let ListNull: Array<null> = [null, null]
let ListAnys: Array<any> = [1, true, 'free']
