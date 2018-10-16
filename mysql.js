var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql',
    database:'test'
});

connection.connect();

var sql='SELECT * FROM student';

connection.query(sql,(err,result)=>{
    if(err){
        console.log('err:',err.message);
        return;
    }
    console.log('---------------------select--------------------');
    console.log(result);
    console.log('-----------------------------------------------');
});

connection.end();