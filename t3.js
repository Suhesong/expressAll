//尝试写一个函数，输出string的反转

// var f=function(a){
//     let b=a.toString();
//     arr=b.split('');
    
//     console.log(arr.reverse().toString().remove(',')); 
// }

// f('I am xiaoming');






//进行一些js的练习
// console.log(undefined==null);//true
// console.log(undefined===null);//false

//==和===的区别  我的理解，前者指两者的值，后者指两者的类型     类似问题：指针与引用的区别

// console.log(1==[1],typeof(1));
// console.log(1===[1],typeof([1]));


//内存泄漏  根据root对象，                 
// let arr=[];
// while(true){
//     arr.push(new Buffer(1000));
//     console.log(arr);
// }



function out(){
    const bigData=new Buffer(100);
    inner =function(){
        void bigData;
    }
}