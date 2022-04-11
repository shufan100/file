// 基础类型--------------------------------------------------------
//字面量
let a: boolean | string;
a = false;
a = 'kk';

// 布尔
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// 字符串
let nameStr: string = 'bob';
nameStr = 'Gene';
let sentece: string = `Hello, my name is ${nameStr}`;

// Null和Undefined :默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量
let u: undefined = undefined;
let n: null = null;

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Any:表示任何类型(不建议使用)
let notSure: any;
notSure = 'stringss';
notSure = true;
let listAny: any[] = [1, true, 'free'];
listAny[1] = 200;

// Void：表示空值
function warnUser(): void {
  console.log('This is my warning message');
  // return '返回值' //函数没返回值，返回的类型为void
}
let unusable: void = undefined; //只能为它赋予undefined和null

// never 没有值；用来返回报错的
function fn2(): never {
  throw new Error('报错了');
}

// 类型的别名
type myType = number | boolean;
let b: myType;
b = 1;
// ----------------------------------------------------------------------------------------------------------------------------------------------------

// object: {}用来指定对象中可以包含哪些属性
// 对象赋值必须和定义的一模一样,属性后面加问号就代表是可选的，可写可不写
let obj: { name: string; age?: number };
obj = { name: '11' };

// 对象可写任何值，对象里的key都是字符串，[xxx: string]: any表示对象里可以写任意属性,值为any
let obj2: { [xxx: string]: any };
obj2 = { age: 19, sex: '女', addres: 'ssss' };

// 数组
let listNumber: number[] = [1, 2, 3];
let listSring: string[] = ['a', 'b', 'c'];
let listUndefined: undefined[] = [undefined, undefined];
let listNull: null[] = [null, null];
let listObj: { name: string; age: number }[] = [
  { name: '1', age: 18 },
  { name: '3', age: 26 },
];
let list: (string | number)[] = [99, 'gg', 'jj', 77];
let list2 = [12, 'fsfs', { name: '2121', age: 19 }];

// 元组 ：固定长度的数组
let listyz: [string, number, boolean] = ['str', 3, true];
const listyz2: [string, string, number][] = [
  ['dajiao', 'teacher', 28],
  ['liuying', 'teacher', 18],
  ['cuihua', 'teacher', 25],
];
// 函数：类型包含两部分：参数类型和返回值类型
let fn: (a: string, b: string) => object;
let myAdd = function (x: number, y: number): object {
  return { x, y };
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// 枚举（enum）:枚举类型提供的一个便利是你可以由枚举的值得到它的名字
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let colorName: string = Color[4];
// console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

// interface接口----------------------------------------------------------------------------------------------------------------------------------
//接收对象里面的参数校验的写法
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person, num: number) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName + num;
}
let user = { firstName: 'Jane', lastName: 'User' };

console.log(greeter(user, 18));

// 类-------------------------------------------------------------------------------------------------------------------------------------------------
class Tag {
  constructor(public bool: boolean) {}
  public name: string = '小明'; //内部，外部，继承可用
  private age: number = 19; //内部可用， 外部，继承不可用
  protected gender: string = '女'; //内部，继承内可以，外部不可用
  readonly numberOfLegs: number = 8; //内部，继承内可以，外部不可用 -- 只读
  say() {
    // 1、类内部三种类型都可用
    return 'hello ' + this.name + this.age + this.gender;
  }
  // 静态类 直接调用
  static sayBy() {
    return 'by';
  }

  // 利用get 外部可获取age包装返回
  get ages() {
    return this.age - 2;
  }
  set ages(age: number) {
    this.age = age + 10;
  }
}
const tag = new Tag(false);
console.log(tag.bool);
console.log(tag.say());
console.log(Tag.sayBy());
console.log(tag.ages);

// 2、外部
console.log(tag.name); //name 外部可用
// console.log(tag.age) //age 外部不可用
// console.log(tag.gender)//gender 外部不可用

// 类的继承 3、继承
class Pag extends Tag {
  constructor() {
    super(true);
  }
  _name: string = this.name; //继承内 name可用
  // _ages:number = this.age //继承内 age不可用
  _gender: string = this.gender; //继承内 gender可用
  says() {
    return this.gender;
  }
}
const pag = new Pag();
pag.name = '雄安';
console.log(pag.says());
console.log(pag.bool);
// ----------------------------------------------------------------------------------------------------------------------------------------------------
