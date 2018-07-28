const assert = require('assert');
const obj1 = {
    a: {
        b: 1
    }
};

const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a:{
        b: 1    
    }
};

const obj4 = Object.create(obj1);

// assert.deepEqual({ a: 1 }, { a: '1' },"done");
// assert.ok(false, "i wrote false");
assert.ok(true, 'it\'s false');
// console.log('Done');
