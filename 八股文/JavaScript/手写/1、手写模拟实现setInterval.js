function mySetInterval(fn, time) {
  let timer = null,
    isClear = false
  function interval() {
    if (isClear) {
      isClear = false
      clearTimeout(timer)
      return
    }
    fn()
    timer = setTimeout(interval, time)
    return () => {
      isClear = true
    }
  }

  timer = setTimeout(interval, time)
}

// 调用
let a = mySetInterval(() => {
  console.log(2222)
}, 1000)
