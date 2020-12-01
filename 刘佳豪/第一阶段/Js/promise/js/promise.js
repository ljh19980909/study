/*
自定义Promise函数模块:IIFE
*/
(function (window) {
    /*
        Promise构造函数
        excutor:执行器函数(同步执行)
    */
    function Promise(excutor) {
        this.status = 'pending'; //给promise对象指定status属性,初始值为pending
        this.data = undefined; //给promise对象指定一个用于存储结果数据的属性
        this.callbacks = []; //每个元素的结构:{ onresolved(){} , onrejected(){} }

        function resolve(value) {
            //如果当前状态不是pending,直接结束
            if (this.status != 'pending') {
                return;
            }
            //将状态改变为resolved
            this.status = 'resolved';
            //保存value数据
            this.data = value;
            //如果有待执行的callbcak函数,立即异步执行回调函数onResolved
            if (this.callbacks.length > 0) {
                setTimeout(() => {
                    //放入队列中执行所有成功的回调
                    this.callbacks.forEach(callbacksObj => {
                        callbacksObj.onResolved(value);
                    });
                }, 1000);
            }
        }

        function reject(reason) {
            //如果当前状态不是pending,直接结束
            if (this.status != 'pending') {
                return;
            }
            //将状态改变为rejected
            this.status = 'rejected';
            //保存value数据
            this.data = reason;
            //如果有待执行的callbcak函数,立即异步执行回调函数
            if (this.callbacks.length > 0) {
                setTimeout(() => {
                    //放入队列中执行所有成功的回调
                    this.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason);
                    });
                }, 1000);
            }
        }
        // 立即同步执行excutor(执行器)
        try {
            excutor(resolve.reject);
        } catch (error) {
            //如果执行器抛出异常,promise对象状态变为rejected
            reject(error);
        }
    }
    /*
        Promise原型对象的then()
        指定成功和失败的回调函数
        返回一个新的promise对象
    */
    Promise.prototype.then = function (onResloved, onRejected) {
        //假设当前状态还是pending状态,我们将两个状态保存起来
        this.callbacks.push({
            onResloved,
            onRejected,
        });
    };
    /*
        Promise原型对象的catch()
        指定失败的回调函数
        返回一个新的promise对象
    */
    Promise.prototype.catch = function (onRejected) {};
    /*
        Promise函数对象reslove方法
        返回指定结果value的一个成功的promise
    */
    Promise.resolve = function (value) {};
    /*
        Promise函数对象reject方法
        返回指定结果reason的一个失败的promise
    */
    Promise.reject = function (reason) {};
    /*
            Promise函数对象all方法
        返回一个promise,只有当所有promise都成功时才成功,否则只要有一个失败就失败
    */
    Promise.all = function (promises) {};
    /*
            Promise函数对象race方法
        返回一个promise,只要当第一个完成的promise决定
    */
    Promise.race = function (promises) {};

    // 向外暴露Promise函数
    window.Promise = Promise;
})(window);
