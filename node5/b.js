const Promise = require('appoint');
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('haha');
    }, 1000);
})
promise
    .then(() => {})
    .then(() => {})
    .then(() => {})
console.dir(promise,{depth:10});

// Promise {
//     state: 'pending',
//     value: undefined,
//     queue:
//      [ QueueItem {
//          promise:
//           Promise {
//             state: 'pending',
//             value: undefined,
//             queue:
//              [ QueueItem {
//                  promise:
//                   Promise {
//                     state: 'pending',
//                     value: undefined,
//                     queue:
//                      [ QueueItem {
//                          promise: Promise { state: 'pending', value: undefined, queue: [] },
//                          callFulfilled: [Function],
//                          callRejected: [Function] } ] },
//                  callFulfilled: [Function],
//                  callRejected: [Function] } ] },
//          callFulfilled: [Function],
//          callRejected: [Function] } ] }