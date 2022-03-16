//  数组定义

const numberArr = [1,2,3] //根据类型推断，推断出类型
const numberArr2 : number[] = [2,3,5]

const strArr = ['a','f','j']
const strArr2 : string[] = ['a','f','j']

const undefinedArr = [undefined, undefined];
const undefinedArr2: undefined[] = [undefined, undefined];

const nullArr = [null,null];
const nullArr2: null[] = [null,null];

// 多种数组类型
const arr = [1,'str',99,null,undefined,false]
const arr2:(number | string | null | undefined | boolean)[] = [1,'str',99,null,undefined,false]

// 对象
const objArr = [{name:'九九',age:19}]
// 第一种写法
const objArr2:{name:string, age:number}[] = [{name:'九九',age:19}]
// 第二种 
    // 类型别名：定义别名的时候要以type关键字开始。现在定义一个Lady的别名。
type lady = {name:string, age:number}
const objArr3:lady[] = [{name:'九九',age:19}]
// 第三钟
    // 类进行定义：定义一个Madam的类,然后用这个类来限制数组的类型。
class Madam {
    name: string | undefined;
    age: number | undefined;
}
const objArr4 :Madam[] = [{name:'九九',age:19}];




















