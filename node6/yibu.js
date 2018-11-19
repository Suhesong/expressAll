setImmediate(function(){
    console.log('13');
})
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
    setImmediate(function(){
        console.log('14');
    })
})
process.nextTick(function() {
    console.log('6');
    setImmediate(function(){
        console.log('15');
    })
})
new Promise(function(resolve) {
    console.log('7');
    setImmediate(function(){
        console.log('16');
    })
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})


