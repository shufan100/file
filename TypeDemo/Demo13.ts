// 类的 getter setter

class Person3{
    // _age只能在构造函数使用，但加了get的方法，外部就可调用
    constructor(private _age:number){}
    // get可封装输出
    get age() {
        return this._age*10
    }
    set age(age:number) {
        this._age = age / 2
    }
}

const person3 = new Person3(18)
person3.age = 17
console.log(person3.age) // 先get 再set


// 静态类： sattic 的用法，是不用实例class类，直接用
class Girl{
    // sayLove() {
    //     return 'I love you!'
    // }
    static sayHello(){
        return 'I not'
    }
}
const girls = new Girl()
// console.log(girls.sayLove())
console.log(Girl.sayHello())
