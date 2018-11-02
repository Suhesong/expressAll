const Promise = require('./index');


//测试1：   result：  1 2 4 3
//Promise构造函数是同步执行的，而Promise.then 中的函数时异步执行的
{
    console.log('------------------测试一------------------');
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        resolve()
        console.log(2);
    })

    promise.then(() => {
        console.log(3)
    })
    console.log(4);
}
