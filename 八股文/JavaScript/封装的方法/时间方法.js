// 时间格式转化 (返回当前时间) '-------------------------------------
function dateFormat(fmt, date) {
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
    }
  }
  return fmt
}
let newDate = dateFormat('YYYY-mm-dd HH时MM分SS秒', new Date())
console.log('时间格式转化：', newDate)

// 时间格式转化 (返回当前时间) '-------------------------------------
const formatYmd = date => date.toISOString().slice(0, 10)
console.log('时间格式转化2：', formatYmd(new Date()))

// 判断日期是否为今天) '-------------------------------------
// const isToday = date => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
// console.log(isToday('判断日期是否为今天>>', new Date('2023-05-7')))

// 获取某年某月的第一天) '-------------------------------------
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1)
console.log(getFirstDate(new Date('2022-04')))
