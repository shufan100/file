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



// 数组泛型 (规则 Array<类型>)
let ListNumber: Array<number> = [1, 2, 3]
let ListSring: Array<string> = ['1', '2', '3']
let ListBool: Array<boolean> = [false, true, false]
let ListObject: Array<object> = [{ id: 1 }, { id: 2 }]
let ListUndefined: Array<undefined> = [undefined, undefined]
let ListNull: Array<null> = [null, null]
let ListAnys: Array<any> = [1, true, 'free']

// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let ArrNum: NumberArray = [1, 1, 2, 3, 5]; //表示：只要索引的类型是数字时，那么值的类型必须是数字。
interface ObjectArray {
  [index: number]: object;
}
let ArrObj: ObjectArray = [{id:'001',age:11},{id:'002',age:22},{id:'003',age:33}];

// 多维数组
let data:number[][] = [[1,2], [3,4]];

// any 在数组中的应用
let list: any[] = ['test', 1, [],{a:1}]