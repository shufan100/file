console.log('-----------demo自定义模块------------------')

exports.title = 'demo自定义模块'
module.exports.add = (a,b)=> a+b
// module.exports === exports = true

// 定义全局变量和方法，不声明就是会在global全局变量中
aa = 100
adds = (a,b)=>a*b
nums = (a,b)=> a-b
global.bb = '雄安命'