const Promise = require('./index');


//测试4：   result：  1 2
//链式调用，catch和then都返回的是promise
{
    console.log('------------------测试四------------------');
    Promise.resolve(1)
    .then((res)=>{
        console.log(res);
        return 2;
    })
    .catch((err)=>{
        return 3;
    })
    .then((res)=>{
        console.log(res);
    })
}
