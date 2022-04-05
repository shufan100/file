console.log('Hello Nodejs');

var fs = require('fs');
let obj = require('./demo1.js');
// console.log(obj)
// console.log(obj.add(11,33),obj.title)

// console.log(fs,'==')

console.log(global.adds(19, 21));

// console.log(arguments.callee + '')
// 1、exports：该对象用来将变量或函数暴露给外部
// 2、require：函数，用来引入外部的模块
// 3、module：module代表的是当前的模块本身，exports就是module的属性
// 4、__filename：当前模块的完整路径
// 5、__dirname：当前模块所在的文件夹完整路径
// console.log(__filename,'---')  //当前模块的完整路径
// console.log(__dirname)  //当前模块所在的文件夹完整路径

// express框架
// 打开文件 r只读，w写入
// var fd = fs.openSync('text.txt', 'w'); //
// // 同步向文件中写入内容
// fs.writeFileSync(fd, '我是舒梵！');
// // 关闭文件
// fs.closeSync(fd);

// fs：读取文件内容——————————————————————————————————————————————
fs.readFile('./text.txt', 'utf8', function (err, dataStr) {
  if (err) return console.log(`读取文件失败${err}`); //失败结果--读取成功返回null

  console.log(`读取文件成功${dataStr}`); //成功结果--读取失败返回undefined
});

// fs：写入文件内容——————————————————————————————`————————————————
// fs.writeFile('f:./text11.txt', 'Hello Nodejs', function (err) {
fs.writeFile('/text11.txt', 'Hello Nodejs', function (err) {
  if (err) return console.log(`文件写入失败${err}`);
  console.log(err); //文件写入成功 null
});

// 整理成绩文本例子
fs.readFile('/成绩.txt', 'utf8', function (err, dataStr) {
  if (err) return console.log(`读取文件失败${err}`);
  console.log(dataStr);
});
