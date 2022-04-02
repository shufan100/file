

// 声明Promise函数覆盖全局Promise
// 1、Promise接收一个形参
function Promise(executor){

	//添加属性(new了promise方法，this就执行该时刻对象)
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = []

    const self = this;

	// 声明resolve函数
    function resolve(data) { // resolve是直接调用的，这里面的this其实是执行window
    	// promiise状态只能改变一次：通过判断PromiseState有没有被改过
    	if(self.PromiseState !== 'pending') return;
        //1.修改对象的状态（promiseState）：pending改成resolved状态
        self.PromiseState = 'fulfilled';
        //2.设置对象结果值（promiseResult） 
        self.PromiseResult = data;
        // 多个then回调实现
        self.callbacks.forEach(item =>{
        	item.onResolved(data)
        })
    }

    // 声明reject函数
    function reject(data) {
    	// promiise状态只能改变一次：通过判断PromiseState有没有被改过
    	if(self.PromiseState !== 'pending') return;
    	//1.修改对象的状态（promiseState）：pending改成rejected状态
        self.PromiseState = 'rejected';
        //2.设置对象结果值（promiseResult） 
        self.PromiseResult = data;
        // promise调用多次then都要触发
        self.callbacks.forEach(item =>{
        	item.onRejected(data)
        })   
    }

    // 处理throw抛出的异常
    try{
        // resolve 和 reject 两个函数作为参数传递给executor(executor 函数在Promise构造函数返回所建 promise 实例对象前被调用)
    	// 同步调用（执行器函数）
		executor(resolve,reject)
    }catch(e){//e是catch捕获throw
    	reject(e)
    }
	
}
// 2、给promise原型添加then方法
	// 因为then方法是p调用的，this指向p实例对象
	// 回调成功或失败的状态：是在PromiseState上
	// 回调成功或失败的值：是在PromiseResult上
Promise.prototype.then = function(onResolved, onRejected){
	
	//then方法：同步任务回调 	
	if(this.PromiseState === 'fulfilled'){
		onResolved(this.PromiseResult)
	}
	if(this.PromiseState === 'rejected'){
		onRejected(this.PromiseResult)
	}

	// then方法：异步任务回调（因为是promise内部是异步，会先走then方法，再走resolve/reject）
	if(this.PromiseState === 'pending'){
		console.log(this)
		this.callbacks.push({
			onResolved,
			onRejected
		}) 
	}
}