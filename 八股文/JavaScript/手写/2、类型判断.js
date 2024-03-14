/**
* @author SHUF
* @date 2024-02-02 17:23:23
* @Description 数据类型判断
*/
function getType(value) {
  if (value === null) {
    return value + '';
  }
  if(typeof value === 'object') {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  } else {
    return typeof value;
  }
}
console.log(getType(null))