const { findIndex } = require('lodash');
var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, 3, 4);
console.log(other); // => [1, 2, 3, [4]]

//fill
var array = [1, 2, 3];
_.fill(array, 'a');
console.log(array);// => ['a', 'a', 'a']

//findIndex
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];
console.log(_.findIndex(users, function(o) { return o.user == 'barney'; }));
//findLastIndex
console.log(_.findLastIndex(users, function(o) { return o.user == 'pebbles'; }));
//flatten
console.log(
    _.flatten([1, [2, [3, [4]], 5]])
);

//flatttenDeep
console.log(
    _.flattenDeep([1, [2, [3, [4]], 5]])
);

//flattenDepth
console.log(
    _.flattenDepth([1, [2, [3, [4]], 5]])
);
// fromPairs

console.log(
    _.fromPairs([['a', 1], ['b', 2]])
);

//head
console.log(
    _.head([1, 2, 3])
);

//indexOf
console.log(
    _.indexOf([1, 2, 1, 2], 2)
);
