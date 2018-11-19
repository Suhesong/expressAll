//值类型和引用类型

function myfunction(x)
{
      // x is equal to 4
      var x = 5;
      // x is now equal to 5
}
 
let x = 4;
console.log(x); // x is equal to 4
myfunction(x); 
console.log(x); // x is still equal to 4


function myobject()
{
	this.value = 5;
}
var o = new myobject();
console.log(o.value); // o.value = 5
function objectchanger(fnc)
{
	fnc.value = 6;
}
objectchanger(o);
console.log(o.value); // o.value is now equal to 6


function myobject()
{
	this.value = 5;
}
myobject.prototype.add = function()
{
	this.value++;
}
var o = new myobject();
console.log(o.value); // o.value = 5
o.add();
console.log(o.value); // o.value = 6
function objectchanger(fnc,obj)
{
	fnc.call(obj); // runs the function being passed in
}
objectchanger(o.add,o);
console.log(o.value); // sorry, still just 6

var a=[1];
var b=[2];
function change(a,b){
    var c=a;
    a=b;
    b=c;
    console.log(a,' ',b)
}
change(a,b);
console.log(a,' ',b)

