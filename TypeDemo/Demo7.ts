// 元组 
    // 数组得加强版

const yzArr = ['str1',99,'jj']
const yzArr2:(string | number)[] = ['str1',99,'jj']
const yzArr3:(string | number)[] = [99,'str1','jj'] //这种写法调换位置不会报错
// 元组 
    // 使数组内元素一一对应类型
const yzarr:[string,number,string] = ['str1',99,'jj']

type ladys = [string,string,number]
const yzarr2:ladys[] = [
    ["dajiao", "teacher", 28],
    ["liuying", "teacher", 18],
    ["cuihua", "dd", 25]
]