const Promise = require('./index');


//测试6：   result：  
//在then或者catch返回一个错误并不会抛出错误，不会被捕获
{
    console.log('------------------测试六------------------');
    Promise.resolve()
    .then(()=>{
        return new Error('error!!!');
        //throw new Error('error!!!');
    })
    .then((res)=>{
        console.log('then: ',res);
    })
    .catch((err)=>{
        console.log('catch: ',err);
    })
}
