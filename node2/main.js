const vm=require('vm');
const fs=require('fs');
const path=require('path');
var prt=path.resolve(__dirname,'.','a.js');
function stripBOM(content){
    if(content.charCodeAt(0) === 0xFEFF){
        content = content.slice(1);
    }
    return content;
}
//VM模块可以直接运行JavaScript文件。当使用require加载脚本的时候，Node的内部也是如此读取，编译，运行JavaScript文件
var wrapper=stripBOM(fs.readFileSync(prt,'utf-8'));
var compiledWrapper=vm.runInThisContext(wrapper,{
    filename:prt,
    lineOffset:0,
    displayErrors:true
});
compiledWrapper();//hello world~