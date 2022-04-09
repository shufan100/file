console.log('Hello Nodejs');

// Node内置API（fs, path, http）

// **********fs 文件系统模块***********
const fs = require('fs');

// 1、读取text.txt
fs.readFile(__dirname + '/text.txt', 'utf8', function (err, dataStr) {
  if (err) return console.log(`文件读取失败! ${err}`);
  console.log(`文件读取成功! ${dataStr}`);

  let arr = dataStr.split(' ');
  let arr2 = [];
  arr.forEach(i => arr2.push(i.replace('=', '：')));
  const newStr = arr2.join('\r\n');
  // console.log('@@@ ~ file: nodes.js ~ line 39 ~ newStr', newStr)

  // 2、写入成绩txt
  fs.writeFile(__dirname + '/成绩.txt', newStr, function (err) {
    if (err) return console.log(`文件写入失败! ${err}`);
    console.log(`文件写入成功! `);
  });
});
// 3、动态路径
// 问题1、使用fs模块，操作路径以 ./ 或 ../ 开头的 相对路径 时，很容易出现路径动态拼接错误
// 解决2：提供完整路径
// __filename：当前文件的完整路径
console.log('@@@ ~ file: nodes.js ~ line 51 ~ __filename', __filename);
// __dirname：当前文件夹的完整路径
console.log('@@@ ~ file: nodes.js ~ line 53 ~ __dirname', __dirname);
// 动态全路径
fs.readFile(__dirname + '/text.txt', 'utf8', function (err, dataStr) {
  console.log(`文件读取成功11! ${dataStr}`);
});

// **********path 路径模块***********
const path = require('path');

// 1、path.join路径拼接：path.join(__dirname,'/text.txt')
fs.readFile(path.join(__dirname, '/text.txt'), 'utf8', function (err, dataStr) {
  console.log(`文件读取成功22! ${dataStr}`);
});
// 2、path.basename()：获取路径中的文件名
const fpath = '/a/b/c/index.vue';
var fullname = path.basename(fpath); //index.vue
var nameWithouExt = path.basename(fpath, '.html'); //index
// 3、path.extname()：获取路径中的文件扩展名
const fext = path.extname(fpath); // .vue
console.log('@@@ ~ file: nodes.js ~ line 69 ~ fext', fext); //.vue

// **********http 模块***********
const http = require('http');
// 创建wab服务器
const Server = http.createServer(); //1、创建服务器实例
Server.on('request', (req, res) => {
  // 2、给服务器实例绑定一个request 事件
  // 1、req 是请求对象，包含了与客户端相关的数据和属性
  // req.url 是客户端请求的 URL 地址(端口号后面的)
  // req.method 客户端请求的 method 类型
  // console.log(req.url,req.method);
  // 2、res 响应对象，它包括服务器像刚刚的数据和属性
  // const data = `数据ssss 请求方式${req.method}`
  // res.setHeader('Content-Type','text/html;charset=utf-8') // 设置响应头，解决中文乱码
  // res.end(data)  // 把响应的内容给客户端

  // 3、实例
  let content = '<h1>404 Not found!</h1>';
  if (req.url === '/' || req.url === '/index.html') {
    content = '<h1>首页</h1>';
  }
  if (req.url === '/about.html') {
    content = '<h1>关于作者</h1>';
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(content);
});
// 3、启动服务器 server.listen(端口，回调)
Server.listen(8081, () => {
  console.log('server running at http://192.168.1.163:8081');
});

// **********模块化***********
// 1、提高代码的 复用性
// 2、提高代码的 可维护性
// 3、可实现  按需加载

// let obj = require('./demo1.js')
// console.log(obj)
// // console.log(obj.add(11,33),obj.title)

// console.log(global.adds(19,21))
// console.log('-------------------------------')

// // console.log(arguments.callee + '')
// // 1、exports：该对象用来将变量或函数暴露给外部
// // 2、require：函数，用来引入外部的模块
// // 3、module：module代表的是当前的模块本身，exports就是module的属性
// // 4、__filename：当前模块的完整路径
// // 5、__dirname：当前模块所在的文件夹完整路径
// // console.log(__filename,'---')  //当前模块的完整路径
// // console.log(__dirname)  //当前模块所在的文件夹完整路径

console.log(global.adds(19, 21));

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
