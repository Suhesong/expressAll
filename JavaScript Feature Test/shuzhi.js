var x=0.5;
for(let i=0;i<25;i++){
    x=x*x;
}
console.log(x);//0
console.log(Number.MAX_VALUE);
console.log(-3.1E-12)
console.log(typeof NaN )  //number

class dog{

}

console.log(typeof dog)  //function
console.log(Math.pow(2,1024))   //Infinity

console.log(parseInt('10x',2));   //2
console.log(parseInt('1.23'));    //1 

console.log(isFinite(1));   //判断是否为数值

