const Promise = require('appoint');
const promise = new Promise(function resolve(resolve,reject){
    setTimeout(() => {
        resolve('haha');
    }, 1000);
    reject('error');
});
promise.then(console.log)
promise.catch(console.error)