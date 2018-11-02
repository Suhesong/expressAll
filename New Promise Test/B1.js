//好像是要比较有无debugger的状况，看起来benchmark是一个画图的库


var benchmark = require('benchmark');
var suite = new benchmark.Suite();

suite.add('with debugger', function withDebugger() {
    var base = 0;
    var max = 65535;

    var total = 0;
    for (var i = base; o < max; i++) {
        debugger;
        total += 1;
    }
})

suite.add('without debugger',function withoutDebugger(){
    var base = 0;
    var max =65535;
    var total=0;
    for(var i=base; i<max;i++){
        total +=i;
    }
})
suite.on('complete',require('./print'));
suite.run();