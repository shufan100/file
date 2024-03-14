
function getUrlParams(url) {
  const _url = url || window.location.href;
  const _urlParams = _url.match(/[?&](.+?=[^&]+)/igm);
console.log(_urlParams)

  return _urlParams ? _urlParams.reduce((a,b) => {
      const value = b.slice(1).split('=');
      a[value[0]] = value[1];
      return a;
  }, {}) : {} 
  
}
let url = 'https://www.baidu.com/s?ie=UTF-8&wd=1111'
console.log(getUrlParams(url))


