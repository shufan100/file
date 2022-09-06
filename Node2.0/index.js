// 启动node服务 nodemon index.js
// 1、引用
const express = require('express')
const history = require('connect-history-api-fallback')
// 2、创建 web 服务器
const app = express()

// 引入其它模块 (返回的是对象，处理时间)
const { dateFormat } = require('../node插件/sf-date')
console.log('@@@ ~ file: index.js ~ line 8 ~ obj', dateFormat(new Date()))

// 3、******************************************注册中间件(请求前给每个请求都加中间件)************************************************************
// 3-1、全局中间件--------------------------------------------------------------
// 中间件1
app.use(function (req, res, next) {
  // req.startTime = Date.now(); // 请求到达服务器时间
  req.startTime = dateFormat(new Date()) // 请求到达服务器时间
  res.setHeader('Access-Control-Allow-Origin', '*') //设置请求头，允许所有域名请求
  console.log('中间件1')
  // 在业务流程完成后执行next(),流转到下个中间件或路由
  next()
})
// 中间件2
app.use(function (req, res, next) {
  req.nexts = 'nextsss'
  console.log('中间件2')
  next()
})

// 3-2、解析客户端发送的json数据中间件-----------------------------------------------
app.use(express.json())

// 3-3、解析客户端发送的x-www-form-urlencoded数据中间件------------------------------
app.use(express.urlencoded({ extended: false }))

// 4、路由模块：（监听客户端得 GET 和 POST 请求）---------------路由---------------------
// 使用路由模块 && 注册
const router = require('./routerModule/router.js')
app.use(router)
// app.use('/api', router); //注册路由模块，给模块内的路由添加/api前缀

// 5、全局错误中间件----------------------------错误响应----------------------------------
// (路由错误，全局错误中间件能捕获到错误信息并返回)
app.use(function (err, req, res, next) {
  res.send('error' + err.message)
})

// 1、托管静态资源------------------打包----------------------------------------------
// 用于解决history部署会把路由当资源发送给服务器得处理办法
app.use(history())
app.use(express.static(`${__dirname}/vuestatic`)); //不带文件夹(vue3.0项目)
// app.use(express.static(`${__dirname}/reactStatic`)) //不带文件夹(react项目)

// app.use('/static', express.static('./static')); //带文件夹名
// app.use('/static', express.static('./reactStatic')); //带文件夹名

// 启动服务器--------------------------------------------------------------------
app.listen(3011, err => {
  if (err) return console.log(`服务器启动失败 ${err}`)
  console.log('服务器启动成功! ！！')
  // 改成自己电脑ip
  console.log('running at http://192.168.1.163:3011')
})
