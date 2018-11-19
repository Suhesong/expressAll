// function outer(a) {
//     var b= 20; 
//     function inner(c) {
//      var d = 40;
//      return a * b / (d -c);
//    }
//    return inner;
//   }

//   var x = outer(10);
//   var y = x(30);

// function outer(a, (c)=>{

// });

function inner(c){
    var d=40;
    return this.a*this.b/(d-c);
}

console.log(outer(10,inner(30)));