const {
    add,
    mul
} = require('../index');

const assert = require('assert');

describe('Math',()=>{
    describe('Add',function(){
        it('2 + 3 should === 5',()=>{
            assert.equal(add(2,3),5);
        });
    });
    
    describe('Mul',()=>{
        it('2 * 3 should === 6',()=>{
            assert.equal(mul(2,3),6);
        });
    });

})
