/**
* @author SHUF
* @date 2024-02-02 17:23:34
* @Description 请求并发控制
*/
function getUrlByFetch() {
  let idx = maxLoad;

  function getContention(index) {
    fetch(pics[index]).then(() => {
      idx++;
      if(idx < pics.length){
        getContention(idx);
      }
    });
  }
  function start() {
    for (let i = 0; i < maxLoad; i++) {
      getContention(i);
    }
  }
  start();
}


