
const express = require('express')
const app = express()
var _ = require('lodash');
const port = 3000

// app.use(express.static(__dirname + '/view'));
const home = require('path')
app.use(express.static(home.join(__dirname, '/view')))




app.get('/', function(req, res){
    res.render('/view/index.html');
});

app.get('/tin-tuc', (req, res) => {
    res.send('Hello news !')
})
app.get('/tuoi-tre', (req, res) => {
  res.send('Hello covid !')
})



console.log('fill')
var array = [1, 2, 3];
_.fill(array, 'a');
console.log(_.fill(array, 'a'))
console.log(_.fill(array,  '10', 4, 5))
// _.fill(array, value, [start=0], [end=array.length])
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));


console.log('findIndex')
// _.findIndex(array, [predicate=_.identity], [fromIndex=0])
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true },
  { 'user': 'Trung', 'active': true }

];
_.findIndex(users, function(o) { return o.user == 'barney'; });
console.log(_.findIndex(users, function(o) { return o.user == 'Trung'; }))
console.log(_.findIndex(users, 'active'))

console.log('findLastIndex')
_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
  // console.log(users.lastIndexOf(2))
  console.log(_.findLastIndex(users, { 'user': 'barney', 'active': true }))

console.log('flatten')
var array1 = [1, [2, [3, [4]], 5]];
console.log( _.flattenDepth(array1, 1))
console.log( _.flattenDepth(array1, 2))



console.log('flattenDeep')
var array2 = [1, [2, [3, [4]], 5]];
console.log(array2)
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]))
console.log(_.flattenDepth(array2, 1))


console.log('fromPairs')
console.log(_.fromPairs([['a', 1], ['b', 2]]))


console.log('head')
console.log(_.head([1, 2, 3]))
console.log(_.head([]))
console.log(_.head([array1]))


console.log('indexOf')
// _.indexOf(array, value, [fromIndex=0])
console.log(_.indexOf([1, 2, 1, 2], 2))
// Search from the `fromIndex`.
console.log(_.indexOf([1, 2, 1, 2], 2, 2))


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })