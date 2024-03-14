
/**
* @author SHUF
* @date 2024-02-02 17:25:06
* @Description 实现lazy链式调用
*/

  class Person {
    eat() {
      console.log('eat')
      return this
    }
    sleep(...arg) {
      console.log('sleep', ...arg)
      return this
    }
  }

  let person = new Person()

  person.eat().sleep(1, '1').eat().sleep(3, '2').eat()
