// 自定义promise
// 1、Promise接收一个形成函数,该函数又接收resolve, reject两个函数形参
function Promise(executor) {
  /** 添加属性：promise的返回值 */
  // 当前this指向实例化后的（p：实例化对象）：这3个都是p实例对象的值
  this.PromiseState = 'pending' // pormise: pending状态
  this.PromiseResult = null // 成功返回值
  this.callbacks = []

  const self = this
  // console.log(this, 'this指向new之后的实例对象')

  // 处理throw抛出的异常
  try {
    // resolve 和 reject 两个函数作为参数传递给executor(executor 函数在Promise构造函数返回所建 promise 实例对象前被调用)
    // 1、同步调用（执行器函数） === 第一步
    executor(resolve, reject)
  } catch (e) {
    //e是catch捕获throw
    reject(e)
  }

  /**
   *声明resolve函数
   * @param {*接收的值} data
   * @returns {
   *  1、修改Promise状态  promiseState：pending改成resolved状态
   *  2、设置实例化后对象的结果值
   * }
   */
  function resolve(data) {
    // 注意：直接执行，这里面的this指向window

    // promise状态只能改变一次：通过判断PromiseState有没有被改过
    if (self.PromiseState !== 'pending') return

    self.PromiseState = 'fulfilled' //1.修改Promise状态

    self.PromiseResult = data //2.设置对象结果值（promiseResult）
    // 多个then回调实现
    self.callbacks.forEach(item => {
      item.onResolved(data)
    })
  }
  /**
   *声明reject函数
   * @param {*接收的值} data
   * @returns {
   *  1、修改Promise状态  promiseState：pending改成rejected状态
   *  2、设置实例化后对象的结果值
   * }
   */
  function reject(data) {
    // 注意：直接执行，这里面的this指向window

    // promiise状态只能改变一次：通过判断PromiseState有没有被改过
    if (self.PromiseState !== 'pending') return

    self.PromiseState = 'rejected' //1.修改Promise状态

    self.PromiseResult = data //2.设置对象结果值（promiseResult）

    // promise调用多次then都要触发
    self.callbacks.forEach(item => {
      item.onRejected(data)
    })
  }
}

// 2、给promise原型添加then方法
// 因为then方法是p调用的，this指向p实例对象
// 回调成功或失败的状态：是在PromiseState上
// 回调成功或失败的值：是在PromiseResult上
// .then函数的返回值也是promise
Promise.prototype.then = function (onResolved, onRejected) {
  // console.log(this.PromiseState, 'p实例对象状态')
  // then方法：异步任务回调（因为是promise内部是异步，会先走then方法，再走resolve/reject）
  return new Promise((resolve, reject) => {
    if (this.PromiseState === 'pending') {
      this.callbacks.push({
        onResolved, // res函数
        onRejected // err函数
      })
    }
    //then方法：同步任务回调
    if (this.PromiseState === 'fulfilled') {
      // 获取回调函数的执行结果
      try {
        let result = onResolved(this.PromiseResult)
        if (result instanceof Promise) {
          result.then(
            v => {
              resolve(v)
            },
            r => {
              reject(r)
            }
          )
        } else {
          resolve(result)
        }
      } catch (err) {
        resolve(err)
      }
    }
    if (this.PromiseState === 'rejected') {
      onRejected(this.PromiseResult)
    }
  })
}

// 3、给promise原型添加catch方法
Promise.prototype.catch = function (onRejected) {
  if (this.PromiseState === 'pending') {
    this.callbacks.push({
      onRejected // err函数
    })
  }
  if (this.PromiseState === 'rejected') {
    onRejected(this.PromiseResult)
  }
}
