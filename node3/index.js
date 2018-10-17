//非阻塞I/O演示
// 开始读取C文件！
// A文件读取完成！
// B文件读取完成!
// C文件都区成功！
// 或者
// 开始读取C文件！
// B文件读取完成!
// A文件读取完成！
// C文件都区成功！
var fs = require('fs');

fs.readFile('./A.txt', () => {
    console.log('A文件读取完成！');
});

fs.readFile('./B.txt', () => {
    console.log('B文件读取完成!');
});

fs.readFile('./C.txt',()=>{
    console.log('C文件读取成功！');
});
console.log('开始读取C文件！');