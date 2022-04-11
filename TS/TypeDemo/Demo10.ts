// 类的概念和使用--------------
class Lady {
    counts = 'hello '
    sayHello() {
        return this.counts+'DDDD'
    }
}

// 继承Lady类 xjjs就是子类，Lady是父类   
// 1；子类继承父类，2：子类继承父类重写父类
class xjjs extends Lady {
    sayLove() {
        return 'love'
    }
    // 1、重写就是把父类的方法在子类重写一遍
    counts = 'Hi '
    // 2、重写利用super关键字调用父类
    says() {
        return super.sayHello()+'.你好！'
    }
}
1
//1、调用Lady父类
const adds = new Lady(); 
console.log(adds.sayHello()) //打印：helloDDDD

//2、调用父xjjs子类
const adds2 = new xjjs()
console.log(adds2.says()) //打印：Hi DDDD.你好！