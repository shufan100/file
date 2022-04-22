// **************************************基于nodejs内置API的http模块创建的web服务器***************************************************
const fs = require('fs') //读写文件模块
const path = require('path') // 路径处理模块
const http = require('http') // 创建服务器

// 创建web服务器
const server = http.createServer()
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')

  fs.readFile(path.join(__dirname, './text.txt'), (err, dataStr) => {
    if (err) res.end('404 Not found!')

    const fpath = path.join(__dirname, req.url)
    const data = `数据111 文件路径${fpath}  请求方式${req.method} <br/>
      读取text.txt文件的数据：${dataStr}`
    res.end(data)

  })

})
server.listen(8082, () => {
  console.log('server listen at http://192.168.1.163:8082')
})