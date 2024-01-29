// 柯里化编程函数 （可分开传，也可以一次性传参）
// 柯里化解释：是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
//概念：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。 你可以一次性地调用 curry 函数，也可以每次只传一个参数分多次调用
//作用：参数复用、提前返回和 延迟执行
//

const add0 = x => {
  return y => {
    return z => {
      return x + y + z
    }
  }
}
// 柯里化箭头函数简写
const add2 = x => y => z => x + y + z
const increment = add0(2)
const fun = increment(3)
const val0 = fun(1)

const val = add0(22)(11)(33)
const val2 = add2(22)(11)(331)

console.log(val0, val, val2)

// 柯里化 -- 参数复用------------------
// // 函数封装后
function check(reg, txt) {
  return reg.test(txt)
}

const checkVal1 = check(/\d+/g, 'test') //false
const checkVal2 = check(/[a-z]+/g, 'test') //true
console.log(checkVal1, checkVal2)

// Currying后
function curryingCheck(reg) {
  return function (txt) {
    return reg.test(txt)
  }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

const test1 = hasNumber('test1') // true
const test2 = hasNumber('testtest') // false
const num = hasLetter('21212') // false

console.log(test1, test2, num)

// 柯里化 -- 提前返回------------------
//把isSupport这个参数给先确定下来了
//自执行然后返回一个新的函数，这样其实就是提前确定了会走哪一个方法，避免每次都进行判断

var on = function (isSupport, element, event, handler) {
  isSupport = isSupport || document.addEventListener
  if (isSupport) {
    return element.addEventListener(event, handler, false)
  } else {
    return element.attachEvent('on' + event, handler)
  }
}

// 柯里化 -- 延迟运行------------------
//我们js中经常使用的bind，实现的机制就是Currying.
Function.prototype.bind = function (context) {
  var _this = this
  var args = Array.prototype.slice.call(arguments, 1)

  return function () {
    return _this.apply(context, args)
  }
}

// 柯里化 -- 封装方法------------------
// 初步封装
// 只能多扩展一个参数，currying(a)(b)(c)这样的话，貌似就不支持了（不支持多参数调用）
var currying = function (fn) {
  // args 获取第一个方法内的全部参数
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    // 将后面方法里的全部参数和args进行合并
    var newArgs = args.concat(Array.prototype.slice.call(arguments))
    // 把合并后的参数通过apply作为fn的参数并执行
    return fn.apply(this, newArgs)
  }
}

// 柯里化 -- 支持多参数传递------------------
// 这边其实是在初步的基础上，加上了递归的调用，只要参数个数小于最初的fn.length，就会继续执行递归
function progressCurrying(fn, args) {
  var _this = this
  var len = fn.length
  var args = args || []

  return function () {
    var _args = Array.prototype.slice.call(arguments)
    Array.prototype.push.apply(args, _args)

    // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
    if (_args.length < len) {
      return progressCurrying.call(_this, fn, _args)
    }

    // 参数收集完毕，则执行fn
    return fn.apply(this, _args)
  }
}

function curry(fn, args) {
  var length = fn.length
  var args = args || []
  return function () {
    newArgs = args.concat(Array.prototype.slice.call(arguments))
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}
function multiFn(a, b, c) {
  return a + b + c
}
var multi = curry(multiFn)
const multiVal = multi(2)(3)(4)
const multiVal2 = multi(2, 3, 4)
const multiVal3 = multi(2)(3, 4)
const multiVal4 = multi(2, 3)(4)
console.log(multiVal, multiVal2, multiVal3, multiVal4)

const funs = progressCurrying(multiFn)
console.log(funs(1)(9)(2))
