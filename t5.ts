    //   ``  多行字符串
    //   `${xxx}`  字符串模板
    //自动拆分字符串


function test(template,name,age){
    console.log(template);
    console.log(name);
    console.log(age);
}

var myname='suhesong';


var getAge=function(){
    return 10;
}


test`Hellp mm  is ${myname},i'm ${getAge()}`;



//参数类型

var myname:string ="suhesong";


var alias="xixi";

var key:any='hhah';
key=13;

// number , boolean , string  any

//类型推断机制

function test1():void{

}
function test2(){

}

class Person{
    name:string;
    age:number;
}

var zhangsan:Person=new Person();
zhangsan.age=18;
zhangsan.name='zhangsan';


//默认参数   在可选和必选的后边
//可选参数   在必选参数的后边

//   ...args操作符，正向传入函数，反向传入函数
//rest and spread操作符

//generator函数  
//yield类似打断点   例子买股票 
function* doSome(){
    console.log('start');

    yield;

    console.log("finish");
}

var func1=doSome();

func1.next();
func1.next();

//析构表达式  
function getStock(){
    return {
        code:'IBM',
        price:100
    }
}

var {code,price}=getStock();

var arr=[1,2,3,4];
var [number1,number2]=arr;//将数组的第一个和第二个元素拿出来
var [,,number3,number4]=arr;//第三个和第四个
//可以和rest符共同使用
var [number1,number2,...other]=arr;

//箭头表达式，解决匿名函数
var sum=(a,b)=>a+b;

 var myArr=[1,2,3,4,5];

 console.log(myArr.filter(value=>value%2==0));

//解决this的问题

//循环 for--of(可以被打断)  for in  循环出属性  foreach
var myArray=[1,2,3,4];
myArray.desc='adsada';
myArray.forEach(value=>console.log(value));

for(var n in myArray){
    console.log(n);
}

for(var b of myArray){
    if(b>2) break;
    console.log(b);
}

//class   访问控制符private protected
//构造函数
//类的继承 extends 指明父类的构造函数super()  super.xxx 调父类的方法
//泛型

class Student{
    constructor(public name){
        console.log('Student被调用');
    }
    
    eat(){
        console.log('i am eating');
    }
}

var workers:Array<Student>=[];
var s1=new Student('ss');
s1.eat();


//接口
interface IPerson{
    name:string;
    age:number;
}
//接口作为参数
class Person1{
    constructor(public config:IPerson){

    }
}
//实现接口
class Person2 implements IPerson{
    name;
    age;
}

//模块   分割为重用单元  export  import

//注解

//类型定义文件  使用已有的js工具包 d.ts文件
//typings  找类型定义文件







