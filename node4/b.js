// process.nextTick = function(callback){
//     if(process._exiting) return;
//     if(tickDepth>=process.maxTickDepth)
//         maxTickWarn();
//     var tock = {callback:callback};
//     if(process.domain) tock.domain=process.domain;
//     nextTickQueue.push(tock);
//     if(nextTickQueue.length){
//         process._needTickCallback();
//     }
// };

process.nextTick(()=>{
    console.log('Tick内部');
});
console.log('Tick外部');
setImmediate(()=>{
    console.log('Set内部');
});
console.log('Set外部');
