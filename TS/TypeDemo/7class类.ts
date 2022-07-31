// 类-------------------------------------------------------------------------------------------------------------------------------------------------
// public(不写默认)，内部、外部、继承可用 --可修改
// private，当前class私有属性； 外部、继承不可用 --可修改
// protected，内部、继承内可以，外部不可用 --可修改
// readonly，内部，继承内可以，外部不可用 -- 只读
// 可以将calss类当接口用
// 给calss类添加存取器（get,set）
// static，定义静态属性和方法，类无需new，直接调用,内部、外部、继承可用 --可修改


// 1在TypeScript是不允许直接在constructor 定义变量的 需要在constructor上面先声明
// 2这样引发了第二个问题你如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
class Tag {
  bool:boolean
  public name: string = '小明' //内部、外部、继承可用--可修改
  private age: number = 19 //Tag私有属性； 外部、继承不可用
  protected gender: string = '女' //内部、继承内可以，外部不可用
  readonly numberOfLegs: number = 8 //内部，继承内可以，外部不可用 -- 只读
  static nb: number = 8888 //静态属性
  constructor(bool: boolean) {
    this.bool = bool
  }
  // 静态方法 直接调用
  static sayBy() {
    return 'by'
  }
  say() {
    // 1、类内部三种类型都可用
    return 'hello ' + this.name + this.age + this.gender
  }

  // (**存取器**) 利用get 外部可获取age包装返回
  get ages() {
    return this.age - 2
  }
  set ages(age: number) {
    this.age = age + 10
  }
}
// ******************************静态方法和静态属性不需要new Tag类返回新的实例对象********************************
console.log(Tag.sayBy())
console.log(Tag.nb) // 属性“nb”在类型“Tag”上不存在。你的意思是改为访问静态成员“Tag.nb”吗


// ******************************new实例Tag类，返回新的tag实例对象********************************
const tag = new Tag(false)
// 2、外部
console.log(tag.bool)
console.log(tag.name) // 内外部可用
console.log(tag.ages) // 内外部可用
// console.log(tag.age) //age 属性“age”为私有属性，只能在类“Tag”中访问
// console.log(tag.gender)//gender 属性“gender”受保护，只能在类“Tag”及其子类中访问


// ******************************类的继承********************************
class Pag extends Tag {
  constructor() {
    super(true)
  }
  _name: string = this.name //继承内 name可用
  // _ages:number = this.age //继承内 age不可用
  _gender: string = this.gender //继承内 gender可用
  says() {
    return this.gender
  }
}
const pag = new Pag()
pag.name = '雄安'
// console.log(pag.says())
console.log(Pag.nb)




// -------------------------------------interface 定义 类----------------------------------------------
 
interface PersonClass {
  get(type: boolean): boolean
}

interface PersonClass2{
  set():void,
  asd:string
}

class A {
  name: string
  constructor() {
      this.name = "123"
  }
}
// ts interface 定义类 使用关键字 implements   后面跟interface的名字多个用逗号隔开 继承还是用extends
class Person extends A implements PersonClass,PersonClass2 {
  asd: string
  constructor() {
      super()
      this.asd = '123'
  }
  get(type:boolean) {
      return type
  }
  set () {

  }
}