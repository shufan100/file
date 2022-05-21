// 类-------------------------------------------------------------------------------------------------------------------------------------------------
// 默认为 public，内部、外部、继承可用 --可修改
// private，当前class私有属性； 外部、继承不可用 --可修改
// protected，内部、继承内可以，外部不可用 --可修改
// readonly，内部，继承内可以，外部不可用 -- 只读
// 可以将calss类当接口用
// 给calss类添加存取器（get,set）

class Tag {
  constructor(public bool: boolean) {}
  public name: string = '小明' //内部、外部、继承可用--可修改
  private age: number = 19 //Tag私有属性； 外部、继承不可用
  protected gender: string = '女' //内部、继承内可以，外部不可用
  readonly numberOfLegs: number = 8 //内部，继承内可以，外部不可用 -- 只读
  say() {
    // 1、类内部三种类型都可用
    return 'hello ' + this.name + this.age + this.gender
  }
  // 静态类 直接调用
  static sayBy() {
    return 'by'
  }

  // (**存取器**) 利用get 外部可获取age包装返回
  get ages() {
    return this.age - 2
  }
  set ages(age: number) {
    this.age = age + 10
  }
}

// new关键值调用Tag类型，返回实例对象tag
const tag = new Tag(false)
console.log(tag)
// console.log(tag.bool)
// console.log(Tag.sayBy())
// console.log(tag.ages)

// 2、外部
// console.log(tag.name) //name 外部可用
// console.log(tag.age) //age 外部不可用
// console.log(tag.gender)//gender 外部不可用

// 类的继承 3、继承
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
// console.log(pag.bool)
console.log(pag)
