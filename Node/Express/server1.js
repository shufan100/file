const express = require('express')

const app = express() // 1、创建 web 服务器
console.log('@@@ ~ file: server1.js ~ line 4 ~ app', app)


// 2、启动服务器  app.listen(端口，成功回调函数)
app.listen(8083, () => {
  console.log('express running at http://192.168.1.163:8083')
})