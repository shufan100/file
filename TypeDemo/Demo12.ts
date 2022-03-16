// 类的构造函数
// class Person2{
//     public name:string='';
//     constructor(data:any){
//         this.name = data.name;
//     }
// }

// let obj:{name:string;age:number} = {name:'小米',age:18}
// const person2 = new Person2(obj)

// 这个构造函数和上面的类似
class Person2{
    // 父类不行也默认也有一个构造函数
    constructor(public name:any){}
}

class Teacher extends Person2{
    // 子类写构造函数就一定要写super()
    constructor(public age:number){
        super('shuf') //super关键字调用父类
    }
}

const person2 = new Person2('xiaomi')
console.log(person2.name)

const teacher = new Teacher(18)
console.log(teacher.age)
console.log(teacher.name)