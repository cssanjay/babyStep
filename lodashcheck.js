

var _ = require('lodash');


var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
// _.get(object, 'a[0].b.c');
// => 3
 
// _.get(object, ['a', '0', 'b', 'c']);
// => 3
 
console.log(_.get(object, 'a[0].b.c', 'default'));
// => 'default'
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
 
// console.log(_.difference([2, 1, 4, 3], [3]));

// console.log(_.differenceBy([2.1, 1.2], [1.3], Math.floor));

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]