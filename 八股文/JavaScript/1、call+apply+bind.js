
//call和apply用来改变函数调用的this指向。 （call传单个参数，apply传数组，call是apply的语法糖
//bind返回对应函数, 便于稍后调用； apply, call则是立即调用。除此外, 在 ES6 的箭头函数下, call 和 apply 将失效

/**
* @author SHUF
* @date 2024-02-02 17:25:43
* @Description *****call*****
*/
//call 方法第一个参数是要绑定给this的值，后面传入的是一个参数列表。当第一个参数为null、undefined的时候，默认指向window。

var message = 'window：'
var obj = {
  message: 'My name is: '
}

function getName(firstName, lastName) {
  console.log(this.message , firstName , lastName)
}
getName(1, 2) // window： 1 2
getName.call(null, 'Dot', 'Dolby') //window： Dot Dolby  传入null,函数内部的this指向window
getName.call(obj, 'Dot', 'Dolby') //My name is: Dot Dolby   传入obj对象,函数内部的this指向obj对象

//2-2、apply**************
//apply接受两个参数，第一个参数是要绑定给this的值，第二个参数是一个参数数组。当第一个参数为null、undefined的时候，默认指向window。

var message2 = 'window：'
var obj2 = {
  message2: 'My name is2: '
}

function getName2(firstName, lastName) {
  console.log(this.message2 + firstName + ' ' + lastName)
}

getName2.apply(obj2, ['Dot2', 'Dolby2']) // 函数内this指向obj2对象
getName2.apply(null, ['Dot2', 'Dolby2']) //  函数内this指向window

// 2-3、bind******************
//bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。而原函数 printName 中的 this 并没有被改变，依旧指向全局对象 window。
//bind做的两件事: 1、生成新的函数 2、改变了函数内this指向

var msg = 'window:'
var obj = {
  msg: '我的名字叫:'
}
function getName(name, age) {
  console.log(this.msg + name + ' 年龄：' + age)
}
getName.bind(null)('笑笑', '20') // 函数内this指向window
getName.bind(obj)('笑笑', '20') // 函数内this指向对象
