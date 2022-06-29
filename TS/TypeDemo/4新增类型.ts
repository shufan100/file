// type：类型的别名
type myType = number | boolean
let b: myType = 1
b = false


// Any:表示任何类型(不建议使用)
let notSure: any
notSure = 1
notSure = 'stringss'
notSure = true
let listAny: any[] = [1, true, 'free']
listAny[1] = '200'

// Void：表示没有任何类型 ( 当一个函数没有返回值时，通常会见到其返回值类型是 void)
function warnUser(): void {
  console.log('This is my warning message')
}
let unusable: void = undefined //只能为它赋予undefined和null

// never 没有值；用来返回报错的
function fn2(): never {
  throw new Error('报错了')
}

// 元组（Tuple） ：固定长度的数组
let listyz: [string, number, boolean] = ['str', 3, true]
const listyz2: [string, string, number][] = [
  ['dajiao', 'teacher', 28],
  ['liuying', 'teacher', 18],
  ['cuihua', 'teacher', 25]
]

// 枚举（enum）:枚举类型提供的一个便利是你可以由枚举的值得到它的名字
// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let colorName: string = Color[4] //可以由枚举的值得到它的名字
console.log(colorName) // 显示'Green'因为上面代码里它的值是2
