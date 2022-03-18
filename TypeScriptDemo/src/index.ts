import { hi } from './m';

// 入口文件
function sum(a: number, b: number): number {
  return a * b;
}
console.log(sum(51, 11));
console.log(hi);

const obj: { name: string; age: number } = { name: '小明', age: 33 };
obj.age = 44;
console.log(obj);

// console.log(Promise);

class Person {
  name: string = 'tom';
  age: number = 18;
}
const per = new Person();
console.log(per.name, per.age);
