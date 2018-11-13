const express = require('express');
const app=express();

var asyncIO=function(cb){
    setTimeout(function(){
        cb();
    },0);
}

var mid=(req,res,next)=>{
    req.body='mark ';
    next();
    res.send(req.body+'done');
}

app.use(mid);

app.use((req,res,next)=>{
      asyncIO(function(){
          req.body+=' saved ';
          next();
      })   
})


app.listen(3000,()=>{
    console.info('端口3000开启');
});
