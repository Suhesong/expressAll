const Promise = require('./index');


//测试8：   result：  1
//.then或者.catch的参数期望是函数，传入非函数会发生值穿透
{
    console.log('------------------测试八------------------');
    Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)
}
