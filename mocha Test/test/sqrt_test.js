'use strict'
let assert = require('assert');
let sqrt=require('../sqrt');
describe('#sqrt',()=>{
    it('sqrt(4) shoule equal 2',()=>{
        assert.equal(sqrt(4),2);
    });
    it('#sqrt(-1) should throw an Error',()=>{
        assert.throws(()=>{
            sqrt(-1);
        });
    });
});