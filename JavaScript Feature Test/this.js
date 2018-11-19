//this的指向
// const user={
//     name:'xiaosu',
//     greet(){
//         console.log(`hello everyone I a'm ${this.name}`)
//     },
//     mother:{
//         name:'xiaoyang',
//         greet(){
//             console.log(`${this.name}`);
//         }
//     }
// }

// user.mother.greet();

function greet(xx,yy){
    console.log(`nihao ${this.name} and ${xx} and${yy}`);
}

const user= {
    name:'xiaosu'
}

const xx='春天';
const yy='夏天';

var arr=[xx,yy];
var kk=greet.bind(user,arr);
kk();

