// 类的访问类型------------------------------
    // 1内部访问，2外部访问，3继承访问
    // 三个属性，public，private，protected

class Persons{//1、内部
    // public name: string = '111'; //内外部继承可使用 1，2，3
    // private name: string = ''; //只能内部使用 1
    protected name:string = '';//内部和继承内使用 1，3

    public sayHello() {
        console.log(this.name + 'sayHello')
    }
}

// protected:只能内部,和继承可以使用
class lay extends Persons{ //3、继承
    public sayBye() {
        console.log(this.name + 'sayBye')
    }
}

// 2、外部
let person = new Persons();
person.name = 'shufan!!!'
person.sayHello() //打印：shufan!!!sayHello
console.log(person.name) // 打印：shufan!!!

let  lays = new lay()
lays.sayBye() // 打印：111sayBye