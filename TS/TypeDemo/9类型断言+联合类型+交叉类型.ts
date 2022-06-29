// -------------------------------------联合类型----------------------------------------------
let myPhone: number | string | boolean  = '5555'
// 函数使用联合类型
const fn = (something:number | boolean):boolean => {
  return !!something
}

// -------------------------------------交叉类型----------------------------------------------
// 多种类型的集合，联合对象将具有所联合类型的所有成员
interface People {
  age: number,
  height: number
}
interface Man{
  sex: string
}
const xiaoman = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
xiaoman({age: 18,height: 180,sex: 'male'});

// -------------------------------------类型断言----------------------------------------------
// 语法：　　
  // 1、值 as 类型 === value as string　　　
  // 2、<类型>值 === <string>value
// 注意，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：（编译过程中会删除类型断言）

// window.abc = 123
//这样写会报错因为window没有abc这个东西

(window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。