function spiltYear( year ){
    // 将year显式转为数字，避免传入字符串报错
    year = parseInt( year, 10 );    
    if( year < 1000 ){
        return;
    }                
    var baseArr = [1,2,3,4,6,7,8,9];
    baseArr.forEach(function( base, i ){
        var result = [];
        var val1 = base + 10 * base,                // 十位数
            val2 = base + 10 * base + 100 * base;   // 百位数
        var num2 = Math.floor( year / val2 ),
            num1 = Math.floor( ( year - num2 * val2 ) / val1 ),
            numBase = ( year - num2 * val2 - num1 * val1 ) / base,
            flag = numBase == Math.floor( numBase ) ? true : false;
        if( !flag ){
            console.error('当前年份不符合条件');
            return ;
        }
        while( num2 ){
            result.push(val2);
            num2--;
        }
        while( num1 ){
            result.push(val1);
            num1--;
        }
        while( numBase ){
            result.push(base);
            numBase--;
        }
        console.log(year+'=%s',result.join('+'));
    });
}
spiltYear(2016);