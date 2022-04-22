// 1、引用
const express = require('express');
// 2、创建 web 服务器
const app = express();

// 3、注册中间件-------------------------------------------------------------------------
// 3-1、全局中间件-----------------------请求前---------------------------------------
// 全局中间件1
app.use(function (req, res, next) {
  req.startTime = Date.now(); // 请求到达服务器时间
  res.setHeader('Access-Control-Allow-Origin', '*') //设置请求头，允许所有域名请求
  console.log('中间件1');
  // 在业务流程完成后执行next(),流转到下个中间件或路由
  next();
});
// 全局中间件2
app.use(function (req, res, next) {
  req.nexts = 'nextsss';
  console.log('中间件2');
  next();
});

// 3-2、解析客户端发送的json数据中间件-----------------------------------------------
app.use(express.json());

// 3-3、解析客户端发送的x-www-form-urlencoded数据中间件------------------------------
app.use(express.urlencoded({ extended: false }));



// 4、路由模块：（监听客户端得 GET 和 POST 请求）---------------路由---------------------
// 使用路由模块 && 注册
const router = require('./routerModule/router.js');
app.use(router);
// app.use('/api', router); //注册路由模块，给模块内的路由添加/api前缀


// 5、全局错误中间件----------------------------错误响应----------------------------------
// (路由错误，全局错误中间件能捕获到错误信息并返回)
app.use(function (err, req, res, next) {
  res.send('error' + err.message);
});



// 1、托管静态资源----------------------------------------------------------------
// app.use(express.static('./public')); //不带文件夹
app.use('/public', express.static('./public')); //带文件夹名


// 启动服务器--------------------------------------------------------------------
app.listen(8080, err => {
  if (err) return console.log(`服务器启动失败 ${err}`);
  console.log('服务器启动成功! ！！');
  // 改成自己电脑ip
  console.log('running at http://192.168.1.163:8080');
});


