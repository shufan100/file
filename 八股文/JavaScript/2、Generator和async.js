// Generator（j呢瑞ter） 函数的语法
/**yield （you的）
 * - Generator 函数是一个普通函数，有两个特征：
 *    --function关键字与函数名之间有一个星号；
 *    --函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
 *
 * - 理解：
 *    --Generator 函数是一个状态机，封装了多个内部状态；
 *
 * - 运行：
 *    --该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象；（调用 Generator 函数，返回一个遍历器对象）
 *    --调用遍历器对象的next方法，使得指针移向下一个状态;
 *    --Generator 函数开始执行，直到遇到第一个yield表达式为止;
 *
 */
function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}
var hw = helloWorldGenerator()

console.log(hw, '--')
console.log(hw.next(), '--') //指针 遇到第一个yield表达式停止
console.log(hw.next(), '--')
console.log(hw.next(), '--')
console.log(hw.next(), '--')
console.log(hw.next(), '--')

// async 是Generator 函数的语法糖
/**
 *  -原理：
 *    --async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await；
 *  -async函数对 Generator 函数的改进，体现在以下四点：
 *    --Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器；
 *    --async和await，比起星号和yield，语义更清楚了；
 *    --co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值；
 *    --async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了；
 *
 */
