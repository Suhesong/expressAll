const Promise = require('./index');


//测试9：   result：  fail2:  Error: error
//then可以接受两个参数，第一个是处理成功的函数，第二个是处理错误的函数
{
    console.log('------------------测试九------------------');
    Promise.resolve()
    .then(function success (res){
        throw new Error('error');
    },function fail1(e){
        console.error('fail1: ',e);
    })
    .catch(function fail2(e){
        console.error('fail2: ',e)
    })
}
