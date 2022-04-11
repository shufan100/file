// type annotation 类型注解
// type inference 类型推断

let counts : number ; //类型注解
counts = 123;

let countInference = '123'; //类型推断

const one = 1;
const two = 2;
const three = one + two;
console.log(three)

function getTotal2(one :number , two : number){
    return one - two;
}
let total = getTotal2(7,6); //函数的返回类型注解