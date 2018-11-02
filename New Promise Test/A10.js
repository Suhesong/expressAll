const Promise = require('./index');


//测试10：   result：  end nextTick then setImmediate
//process.nextTick和promise.then都属于microtask     而setImmediate属于macrotask,在事件循环的check阶段执行.
//在事件循环的每个阶段（macrotask）之间都会执行microtask
{
    console.log('------------------测试十------------------');
    process.nextTick(()=>{
        console.log('nextTick');
    })
    Promise.resolve()
    .then(()=>{
        console.log('then');
    })
    setImmediate(()=>{
        console.log('setImmediate');
    })
    console.log('end');
}
