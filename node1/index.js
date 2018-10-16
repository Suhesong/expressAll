var fs = require('fs');

var files = ['a.txt', 'b.txt', 'c.txt'];

// for(let i=0;i<files.length;i++){
//     fs.readFile(files[i],'utf-8',(err,contents)=>{
//         console.log(files);
//         console.log(i);
//         console.log(files[i]+':'+contents);
//     })
// }


//建一个闭包,,,不易于阅读

// for(var i=0;i<files.length;i++){
//     (function(i){
//         fs.readFile(files[i], 'utf-8', function(err, contents) {
//             console.log(files[i] + ': ' + contents);
//             });
//     })(i);
// }

// files.forEach(filename=>{
//     fs.readFile(filename, 'utf-8', function(err, contents) {
//         console.log(filename + ': ' + contents);
//         });
// })

// var os = require('os');
// // 获取CPU 的数量
// var numCPUs = os.cpus().length;
// console.log(numCPUs);


//作用域演示1：
console.log('----------------------------------');
console.log('------------作用域演示1------------'); 
//
{
    var scope = 'globle';
    var f = function () {
        console.log(scope); //undefined
        var scope = 'f';

    }
    f();
}


//作用域演示2：
console.log('----------------------------------');
console.log('------------作用域演示2------------');

var g = function () {
    var scope = 'g0';
    (function () {
        var scope = 'g1';
        (function () {
            console.log(scope); //g1
        })();
    })();
};
g();



//两次都是输出top，证明作用域的嵌套关系不是在调用时确定的，而是在定义时确定的
console.log('----------------------------------');
console.log('------------作用域演示3------------');
var key = 'top';
var f1 = function () {
    console.log(key); //top
}
f1();
var f2 = function () {
    var key = 'f2';
    f1(); //top
};
f2();
console.log('----------------------------------');
console.log('------------闭包的演示1------------');

//闭包的演示
//当一个函数返回它内部定义的一个函数时，就产生了一个闭包，闭包不但包括被返回的函数，还包括这个函数的定义环境
var generateClosure = function () {
    var count = 0;
    var get = function () {
        count++;
        return count;
    }
    return get;
}
var counter = generateClosure();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
console.log('----------------------------------');
console.log('------------call和apply-----------');

//闭包的作用  1.实现嵌套的回调函数  2.隐藏对象的细节
//this 上下文对象，哪调用即指哪


//call和apply
//以不同的对象作为上下文来调用某个函数，允许一个对象去调用另一个对象的成员函数
{
    var someuser = {
        name: 'byvoid',
        display: function (words) {
            console.log(this.name + ' says ' + words)
        }
    };

    var foo = {
        name: 'foobar'
    };

    someuser.display.call(foo, 'hello');
    someuser.display.apply(foo, ['hello']);
}
console.log('----------------------------------');
console.log('------------bind的演示------------');
//bind
{
    var username = {
        name: 'byvoid',
        func: function () {
            console.log(this.name);
        }
    };
    var foo = {
        name: 'foobar'
    };
    foo.func = username.func;
    foo.func(); //foobar

    foo.func1 = username.func.bind(username);
    foo.func1(); //byvoid

    func = username.func.bind(foo);
    func(); //foobar

    func2 = func;
    func2(); //foobar
}
console.log('----------------------------------');
console.log('------------bind绑定参数-----------');
//使用bind绑定参数表
{
    var person = {
        name: 'byvoid',
        says: function (act, obj) {
            console.log(this.name + ' ' + act + ' ' + obj);
        }
    };

    person.says('loves', 'diovyb'); //byvoid loves diovyb

    byvoidLoves = person.says.bind(person, 'loves');
    byvoidLoves('you'); //byvoid loves you
}
console.log('----------------------------------');
console.log('------------bind使用class---------');
//使用class     class来表达一个对象，ES6的用法
{
    class person {
        constructor() {
            this.name = 'byvoid';
        }
        says(act, obj) {
            console.log(this.name + ' ' + act + ' ' + obj);
        }
    }

    var p = new person();
    p.says('loves', 'diovyb');

    byvoidLoves = p.says.bind(p, 'loves'); //byvoid loves diovyb
    byvoidLoves('you'); //byvoid loves you

}
console.log('----------------------------------');
console.log('------------理解bind--------------');
//理解bind
{
    var someuser = {
        name: 'byvoid',
        func: function () {
            console.log(this.name);
        }
    };
    var foo = {
        name: 'foobar'
    }

    func = someuser.func.bind(foo);
    func();

    func2 = func.bind(someuser);
    func2();

    func3 = someuser.func.bind(someuser);
    func3();

    func4 = func3.bind(foo);
    func4();
}
console.log('----------------------------------');
console.log('------------理解对象---------------');
//理解对象
{
    function Foo() {

    }
    Object.prototype.name = 'my object';
    Foo.prototype.name = 'Bar';

    var obj = new Object();
    var foo = new Foo();
    console.log(obj.name); //my object
    console.log(foo.name); //Bar
    console.log(foo.__proto__.name); //Bar
    console.log(foo.__proto__.__proto__.name); //my object
    console.log(foo.__proto__.constructor.prototype.name); //Bar
}
console.log('----------------------------------');
console.log('------------手动复制(浅)------------');
//在object中创建clone函数
{
    Object.prototype.clone = function () {
        var newObj = {};
        for (var i in this) {
            newObj[i] = this[i];
        }
        return newObj;
    }
    var obj = {
        name: 'byvoid',
        likes: ['node']
    }

    var newObj = obj.clone();
    obj.likes.push('python');

    console.log(obj.likes); //['node','python']
    console.log(newObj.likes); //['node','python']
}
console.log('----------------------------------');
console.log('------------手动复制(深)-----------');
//实现深复制
{
    Object.prototype.clone = function () {
        var newObj = {};
        for (var i in this) {
            if (typeof (this[i]) == 'object' || typeof (this[i]) == 'function') {
                newObj[i] = this[i].clone();
            } else {
                newObj[i] = this[i];
            }
        }
        return newObj;
    }
    Array.prototype.clone = function () {
        var newArray = [];
        for (var i = 0; i < this.length; i++) {
            if (typeof (this[i]) == 'object' || typeof (this[i]) == 'function') {
                newArray[i] = this[i].clone();
            } else {
                newArray[i] = this[i];
            }
        }
        return newArray;
    }
    Function.prototype.clone = function () {
        var that = this;
        var newFunc = function () {
            return that.apply(this, arguments);
        };
        for (var i in this) {
            newFunc[i] = this[i];
        }
        return newFunc;
    }
    var obj = {
        name: 'byvoid',
        likes: ['node'],
        display: function () {
            console.log(this.name);
        }
    }
    var newObj = obj.clone();
    newObj.likes.push('python');
    console.log(obj.likes); //['node']
    console.log(newObj.likes); //['node','python']
    console.log(newObj.display == obj.display); //false
}