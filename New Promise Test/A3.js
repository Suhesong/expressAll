const Promise = require('./index');


//测试3：   result： success1
//构造函数中的resolve或reject只有在第一次执行的时候有效，多次调用没有任何的作用，promise的状态一旦改变则不能改变
{
    console.log('------------------测试三------------------');
    const promise = new Promise((resolve, reject) => {
        resolve('success1');
        reject('error');
        resolve('success2');
    })

    promise.then((res) => {
        console.log('then: ',res);
    }).catch((err)=>{
        console.log('catch: ',err);
    })
}
