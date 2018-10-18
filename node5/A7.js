const Promise = require('./index');


//测试7：   result：  TypeError: cannot resolve promise with itself
//.then或者.catch返回的值不能是promise本身,否则会造成死循环
{
    console.log('------------------测试七------------------');
    const promise = Promise.resolve()
    .then(()=>{
        return promise;
    })
    promise.catch(console.error);
}
