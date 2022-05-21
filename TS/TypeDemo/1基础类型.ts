// 基础类型--------------------------------------------------------
// 不定义类型，计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型

//字面量
let a: boolean | string
a = false
a = 'kk'

// 布尔
let isDone: boolean = false

// 数字
let decLiteral: number = 6
let hexLiteral: number = 0xf00d

// 字符串
let nameStr: string = 'bob'
nameStr = 'Gene'
let sentece: string = `Hello, my name is ${nameStr}`

// Null和Undefined :默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量
let u: undefined = undefined
let n: null = null
