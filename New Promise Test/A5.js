const Promise = require('./index');


//测试5：   result：  once success 1001  success 1001
//promise构造函数只执行一次，res即是success这个值
{
    console.log('------------------测试五------------------');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('once');
            resolve('success');
        }, 1000)
    })


    const start = Date.now();
    promise.then((res) => {
        console.log(res, Date.now() - start);
    })
    promise.then((res) => {
        console.log(res, Date.now() - start)
    })
}