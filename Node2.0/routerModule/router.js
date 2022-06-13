// ----------------------路由模块（接口）------------------------------

const express = require('express')
const router = express.Router() // 创建路由对象
const { dateFormat } = require('../../node插件/sf-date')
//········ 接口1··············
router.get('/userInfo', (req, res) => {
  // req:响应对象  res:响应数据
  // res.send(): 向客户端响应数据（JSON对象）
  res.send({ username: 'sf1314' })
})

//········ 接口2··············
router.post('/user/add', (req, res) => {
  res.send({ username: '11111' })
})

//········ 接口3··············
router.get('/user', (req, res) => {
  console.log('@@@ ~ file: router.js ~ line 15 ~ req', req.ip)
  res.send({
    data: {
      id: '001',
      username: 'shufan',
      age: '28',
      sex: '男'
    },
    method: 'get',
    code: '200',
    msg: '请求成功！'
  })
})

//········ 接口4··············
router.post('/list', (req, res) => {
  // console.log(req, req, '/list')
  let data = req.body.id
    ? [
        { id: '001', text: '辛苦辛苦' },
        { id: '003', text: '查看端口' }
      ]
    : [
        { id: 1, text: '小红' },
        { id: 2, text: '小孩' },
        { id: 3, text: '卡卡' }
      ]
  res.send({
    data,
    code: '200',
    method: 'post',
    msg: '请求成功！',
    body: req.body
  })
})

//········ 接口5··············
router.post('/list/detail/:id/:title', (req, res) => {
  console.log(req.query)
  console.log(req.params)
  res.send({
    data: {
      msg: '返回给客户端的数据',
      detailID: req.params.id,
      text: '小红'
    },
    params: {
      msg: '接收客户端的参数！！！',
      ...req.params
    },
    date: `接口请求服务器时间：${req.startTime}`,
    date2: `服务器响应时间：${dateFormat(new Date())}`,
    method: 'get',
    code: '200',
    msg: '请求成功！'
  })
})

//········ 接口6··············
// 局部中间件--------------------------------------------------------
const mv = function (req, res, next) {
  console.log('局部中间件3')
  next()
}
const mv2 = function (req, res, next) {
  console.log('局部中间件4')
  next()
}
// router.post('/kk', mv, (req, res) => {
router.post('/kk', [mv, mv2], (req, res) => {
  console.log(req.startTime, req.nexts, '/kk')
  res.send('ffff')
})

//········ 接口7··············
router.get('/err', (req, res) => {
  throw new Error('服务器发生了错误!')
  res.send('数据！')
})

//········ 接口8··············
router.post('/success', (req, res) => {
  console.log(req.body, '客户端发送的json数据')
  res.send('json数据！')
})

//········ 接口9··············
router.post('/urlencoded', (req, res) => {
  console.log(req.body, '客户端发送的x-www-form-urlencoded数据')
  res.send('x-www-form-urlencoded数据！')
})

// 向外暴露路由模块
module.exports = router
