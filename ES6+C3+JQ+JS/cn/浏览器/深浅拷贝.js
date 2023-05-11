let obj = { a: 1, b: 2, c: new Date() }

/**  深拷贝1
 * -- 缺点：
 *    1、Date 会转化为字符串;
 *    2、Set 会转化为 {}；
 *    3、JSON.stringify甚至完全忽略某些内容，比如undefined或函数
 *    4、无法对包含循环引用的对象进行深克隆
 */
let objCopy1 = JSON.parse(JSON.stringify(obj))

/**  深拷贝2
 * -- 解：原生 API 自带的深拷贝函数、谷歌98版本才支持
 * -- 缺点：
 *    1、不能拷贝函数；
 *    2、不能拷贝dom节点
 */
let objCopy2 = structuredClone(obj)

console.log(objCopy1, objCopy2)
