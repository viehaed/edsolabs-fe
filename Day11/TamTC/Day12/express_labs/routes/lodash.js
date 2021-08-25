var _ = require('lodash');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('LODASH');
});

module.exports = router;
// join
let a = [1, 9, 6, 7, 2, 3, 7, 9]
let b = [...a]
console.log(a.join('~'))
console.log('lodash join: ', _.join(a, '~'))
// last 
console.log(a.pop())
console.log('lodash last', _.last(b))
//lastIndexOf
console.log('js: ', a.lastIndexOf(6, -3))
console.log('lodash lastIndexOf', _.lastIndexOf(a, 6, -3))
//nth
console.log('js : ', a[3])
console.log('lodash nth: ', _.nth(a, -4))
//pull
const filterArr = () => a.filter(item => item === 7)
console.log(filterArr())
console.log('lodash pull: ', _.pull(a, 1, 9, 6, 2, 3))
// pullAll
console.log(filterArr())
console.log('lodash pullAll: ', _.pullAll(a, [1, 9, 6, 2, 3]))
let array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
const pullAllByLodash = () => array.filter(item => item.x === 3)
console.log(pullAllByLodash())
console.log('pullAllBy', _.pullAllBy(array, [{ 'x': 1 }, { 'x': 2 }], 'x'))
// pullAllWith
var arr = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
const pullAllWith = (a, b) => arr.filter(item => item.x !== a && item.y !== b)
console.log(pullAllWith(3, 4))
_.pullAllWith(arr, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log("pullAllWith: ", arr);
// pullAt 
let arrayAt = ['a', 'b', 'c', 'd'];
const pullAt = (a, b) => arrayAt.filter((item, i) => i === a || i === b)
console.log(pullAt(1, 3))
console.log("pullAt: ", _.pullAt(arrayAt, [1, 3]))
//remove
let arrayRemove = [1, 2, 3, 4]
const reverseArr = [...arrayRemove]
const newRerver = [...arrayRemove]

const removeArr = arrayRemove.filter((item) => item % 2 == 0)
console.log(removeArr)

let evens = _.remove(arrayRemove, function (n) {
    return n % 2 == 0;
});
console.log('remove lodash: ', _.remove(evens))
//reverse
console.log(reverseArr.reverse())
console.log('reverse lodash: ', _.reverse(newRerver))
