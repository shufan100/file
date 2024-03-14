

// 方法一：（通过字符串构造一个函数）
const a = new Function('arg', 'console.log(arg)')
a(3)


// 方法二：（通过eval函数）
eval( 'console.log(11)')
