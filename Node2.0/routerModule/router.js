// 路由模块----------------------------------------------------

const express = require('express');
const router = express.Router(); // 创建路由对象

router.get('/userInfo', (req, res) => {
  // req:响应对象  res:响应数据
  // res.send(): 向客户端响应数据（JSON对象）
  res.send({ username: 'sf1314' });
});
router.post('/user/add', (req, res) => {
  res.send({ username: '11111' });
});
router.get('/user', (req, res) => {
  console.log('@@@ ~ file: router.js ~ line 15 ~ req', req.ip)

  res.send({
    data: {
      id: '001',
      username: 'shufan',
      age: '28',
      sex: '男',
    },
    method: 'get',
    code: '200',
    msg: '请求成功！',
  });
});

router.post('/list', (req, res) => {
  console.log(req.startTime, req.nexts, '/list');
  res.send({
    data: [
      { id: 1, text: '小红' },
      { id: 2, text: '小孩' },
      { id: 3, text: '卡卡' },
    ],
    code: '200',
    method: 'post',
    msg: '请求成功！',
  });
});

router.get('/list/detail/:ids', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send({
    data: {
      id: 1,
      text: '小红',
    },
    method: 'get',
    code: '200',
    msg: '请求成功！',
  });
});

// 局部中间件--------------------------------------------------------
const mv = function (req, res, next) {
  console.log('局部中间件3');
  next();
};
const mv2 = function (req, res, next) {
  console.log('局部中间件4');
  next();
};
// router.post('/kk', mv, (req, res) => {
router.post('/kk', [mv, mv2], (req, res) => {
  console.log(req.startTime, req.nexts, '/kk');
  res.send('ffff');
});

router.get('/err', (req, res) => {
  throw new Error('服务器发生了错误!');
  res.send('数据！');
});

router.post('/success', (req, res) => {
  console.log(req.body, '客户端发送的json数据');
  res.send('json数据！');
});

router.post('/urlencoded', (req, res) => {
  console.log(req.body, '客户端发送的x-www-form-urlencoded数据');
  res.send('x-www-form-urlencoded数据！');
});

// 向外暴露路由模块
module.exports = router;
