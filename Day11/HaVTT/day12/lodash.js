var _ = require('lodash')


const array = [5, [12, [8, [130]], 44]];
console.log(_.fill(array, 'a'));

const isLargeNumber = (element) => element > 13;
console.log(_.findIndex(array,isLargeNumber));

console.log(_.findLastIndex(array,isLargeNumber));

console.log(_.flatten(array));

console.log(_.flattenDeep(array));

console.log(_.flattenDepth(array, 1));

console.log(_.fromPairs([['a', 1], ['b', 2]]));

console.log(_.head(array));

var indices = [];
    var element = 'a';
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    console.log(indices);
console.log(_.indexOf(indices));