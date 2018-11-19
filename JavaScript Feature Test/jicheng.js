//class继承和原生继承

// function animal(){
//     this.eat = function(){
//         console.log('i am eat');
//     }
//     this.warking=function*(){
//         console.log('i am walking');
//     }
// }

// function dog(){
//     this.name=function(name){
//         console.log('i am a dog named',name)
//     }
// }

// dog.prototype=new animal();

// let hashiqi=new dog();
// hashiqi.name('hashiqi');
// hashiqi.eat();


//class 的继承
class animal{
    constructor(name){
        console.log('i am ',name);
    }
    eat(){
        console.log('i am eating');
    }
    walk(){
        console.log('i am walking');
    }
}

class dog extends animal{
    constructor(name){
        super(name);
    }
    drink(){
        console.log('i am drinking');
    }
}


const hashiqi=new dog('hashiqi');
hashiqi.drink();
hashiqi.eat();