// const screenResume= (name:string, age:number, bust:number)=>{
//     age<24 && bust >= 90 && console.log(name+'进入面试')
//     age>24 || (bust < 90 && console.log(name+'你被淘汰'))
// }
// // screenResume('小小',18,98)

// const getResume = (name:string, age:number, bust:number)=>{
//     console.log(name+'年龄是：'+age) 
//     console.log(name+'胸围是：'+bust) 
// }
// getResume('小小',18,98)



// 以上的传参类似相同，利用 常用的语法接口（Interface）
interface Girl {
    name:string;
    age:number;
    bust:number;
    [propname:string]:any; //属性的名字是字符串类型(随便传)，属性的值可以是任何类型
    say(): string; //·接口里不仅可以存属性，还可以存方法
}

const screenResume2= (girl: Girl)=>{
    girl.age<24 && girl.bust >= 90 && console.log(girl.name+'进入面试')
    if(girl.age > 24 || girl.bust < 90) console.log(girl.name + "你被淘汰")
}
const getResume2 = (girl: Girl)=>{
    console.log(girl.name+'年龄是：'+girl.age) 
    console.log(girl.name+'胸围是：'+girl.bust) 
    console.log(girl.name+'性别是：'+girl.sex1) 
    console.log(girl.say()) 
}

const girl = {
    name:'小小',
    age:23,
    bust:96,
    sex1:'女',
    say() {
        return '欢迎光临'
    },
    teach() {
        return "我是一个老师";
      },
}
// screenResume2(girl)
// getResume2(girl)

// 接口和类的约束---------------
class xjj implements Girl{
     name ='金凤凰';
     age = 19;
     bust=99;
     sex1='女';
     say(){
         return '阿黄'
     };
     teach() {
        return "我是一个老师";
      };
 }

// console.log(xjj)
// 接口间的继承----------------
interface Teachers extends Girl {
    teach():string;
}
const getResume3 = (girl: Teachers) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
    girl.sex1 && console.log(girl.name + "性别是：" + girl.sex1);
    console.log(girl.say())
    console.log(girl.teach()) 
  };
  getResume3(girl);


