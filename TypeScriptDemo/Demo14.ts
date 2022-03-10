// 只读
class Person4{
    public readonly _name:string
    constructor(name:string){
        this._name = name
    }
}

const person4 = new Person4('shufan')
// person4._name = '大脚' ; //只读属性，不可修改
console.log(person4._name)


// 抽象类
abstract class Girls{
    abstract skill()
}

// 继承抽象类           
class waiter extends Girls{
 
}
class BeseTeacher extends Girls{

}
class SeniorTacher extends Girls{

}