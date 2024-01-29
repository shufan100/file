//**闭包**：==是指有权访问另一个函数作用域中的变量的函数，并且再闭包内部形成一个外部无法访问的局部作用域。==
//**创建闭包**：==常见的方式是在一个函数内部创建另一个函数，通过另一个函数来访问这个函数内部的变量，利用闭包可以突破作用域链，将函数内容不的变量和方法传递到外部。==

//使用闭包
function f2() {
  var cc = '111'
  var nn = '函数内部变量值' //函数内部变量值外部读取不到局部变量nn
  var a,
    b = 2
  var fun = function (a, b) {
    console.log(this)
    return a + b
  }
  function f3() {
    return {
      nn,
      fun,
      num: fun(1, 2)
    } ///根据作用域链可读取到局部变量nn
  }
  return f3 //想要外部拿到局部变量直接return
}
let result2 = f2()
let { nn, fun, num } = result2()
console.log(nn, fun(11, 22), num)
// result2 = null //释放闭包的内存，防止内存泄露
