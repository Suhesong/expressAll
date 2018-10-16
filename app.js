const Promise = require('appoint');
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('haha');
    }, 1000)
})

promise.then(() => {})
    .then(() => {})
    .then(() => {})

console.dir(promise, {
    depth: 10
});