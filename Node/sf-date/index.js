function dateFormat (date) {

  const Date = date

  const y = Date.getFullYear();
  const m = padZero(Date.getMonth() + 1);
  const d = padZero(Date.getDate());

  const hh = padZero(Date.getHours());
  const mm = padZero(Date.getMinutes());
  const dd = padZero(Date.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${dd}`
}

// 
function padZero (n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}