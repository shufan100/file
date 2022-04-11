import { hi } from './m'

// 入口文件
function sum(a: number, b: number): number {
  return a * b
}
console.log(sum(51, 11))
console.log(hi)

const obj: { name: string; age: number } = { name: '小明', age: 33 }
obj.age = 44
console.log(obj)

// console.log(Promise);

class Person {
  // this：类new完后this指向Person实例对象

  // 0、创建class属性
  // 0-1、内部、外部、继承：可读可改
  attribute = '实例属性'
  static attribute = 'static定义的静态属性'
  public publicStr: string = 'public公共属性'

  // 0-2、内部、继承：可读可改;   外部：不可读、不可改
  protected protectedStr: string = 'protected当前类或子类内部私有属性'
  // 0-2、内部：可读可改;   外部和继承：不可读、不可改
  private privateStr: string = 'private当前类内部私有属性'

  // 0-3、内部、外部、继承：只读
  readonly readonlyStr: string = 'readonly只读属性'
  // 1、定义实例属性+实例方法：需要通过对象的实例去调用（需要创建对象==new一个实例对象）
  name: string = 'Tom'
  age: number = 18
  sayHello(): void {
    console.log('实例方法：hello', this.privateStr, this.protectedStr, this)
  }
  // 2、定义静态属性+静态方法：前加static可以定义静态属性（类属性）（不需要创建对象，直接class类去点）
  static sex: string = '女'
  static sayBay(): void {
    console.log('静态方法：bay', this)
  }
}

// 1、实例方法+属性调用
const per: Person = new Person()
// console.log(per);
console.log('实例属性：', per.name, per.age, per.publicStr, per.readonlyStr) // Tom  18
per.sayHello() // hello
per.attribute = '112'
console.log(per.attribute)

// 2、静态方法+属性调用
// console.log(Person);
console.log('静态属性（类属性）：', Person.sex) // 女
Person.sayBay() // bay
Person.sex = '男'
console.log(Person.sex)

// 3、继承
class Tag extends Person {
  constructor() {
    super() //调用父类的构造函数
  }
}
const tag: Tag = new Tag()
console.log(tag, tag.readonlyStr)

// class类复用
class Dog {
  name: string
  age: number
  // constructor：在class被new创建对象后调用（调用new Dog()等于调用构造函数）
  constructor(name: string, age: number) {
    console.log('constructor', this) // this指向当前的实例对象
    this.name = name
    this.age = age
  }
  sex: string = '女'

  bark(): void {
    console.log('汪汪汪！', this.name)
  }
}
const dog: Dog = new Dog('小白', 3)
const dog2: Dog = new Dog('小黑', 2)
console.log(dog, dog2)

// 泛型
// (在定义函数或者类时，如果遇到类型不明确就可以使用泛型)，不指定类型，TS可以自动对类型进行推断
// T, K都是泛型,可以同时指定多个
function fn<T, K>(a: T, b: K): T {
  console.log(a, b)
  return a
}
// fn<number>(1) 指定泛型，传入的类型为数值
console.log(
  fn<number, string>(1, '辛苦'),
  fn(false, undefined),
  fn('小狗', null)
)

// 泛型继承接口
interface MyInters {
  length: number
}
// 泛型继承的接口的类型限制，参数只能是数值
function fn2<T extends MyInters>(a: T): T {
  return a
}
console.log(fn2('dd'))
