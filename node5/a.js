//实例一：
const Promise=require('appoint');
const promise=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('haha')
    },1000)
})
const a=promise.then(function onSuccess(){});
const b=promise.then(function onError(){});
console.dir(promise,{depth:10});
console.log(promise.queue[0].promise === a);
console.log(promise.queue[1].promise === b);
console.log(a);
// 输出结果：
// Promise {
//     state: 'pending',
//     value: undefined,
//     queue:
//      [ QueueItem {
//          promise: Promise { state: 'pending', value: undefined, queue: [] },
//          callFulfilled: [Function],
//          callRejected: [Function] },
//        QueueItem {
//          promise: Promise { state: 'pending', value: undefined, queue: [] },
//          callFulfilled: [Function],
//          callRejected: [Function] } ] }
//   true
//   true