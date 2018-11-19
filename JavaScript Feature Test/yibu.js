//异步代码继续实例分析

// console.log(100);

// setTimeout(()=>{
//     console.log('Yibu')
// },2000);
// let k=0;
// for(let i=0;i<1000000000000;i++){
//     k++;
// }
// console.log(200);



setTimeout(function(){
    console.log(1)
},100);
setTimeout(()=>{
    console.log(2)
});
console.log(3);