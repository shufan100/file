// 单个参
function getTotal(one :number , two : number) :number {
    return one + two ; //加了‘’totals类型有number变成string类型
}
let totals = getTotal(7,6);

// 对象参数
function add({ one, two }: { one: number, two: number }): number {
    return one + two;
  }
  
  const three2 = add({ one: 1, two: 2 });
  console.log(three2)

// void 函数没有返回值
function sayHello() : void {
    console.log('Hello World')
    // return ''; //加return就会报错
}

//函数一直执行不完得
function errorFunction() :never {
    throw new Error()// 抛出异常
    console.log('Hello World') //这一行就执行不到
}

function forNever() : never {
    while (true) {}
    console.log("Hello JSPang");
}


function getNumber({one} : {one : number}) {
    return one
}
getNumber({one:11})