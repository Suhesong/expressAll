//全局变量global
function test(){
    this.xxx='xxx';
    yyy=200;
}
test();
var zzz='zzz';
console.log(global.yyy);