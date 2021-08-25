
const express = require('express')
const app = express()
var _ = require('lodash');
const port = 3001

app.use(express.static(__dirname + '/view'));


app.get('/', function(req, res){
    res.render('/view/index.html');
});
app.get('/user', (req, res) => {
    res.send('Hello new user!')
})
var data = [1, 2, 3, 4, 2, 4, 5]
var data2 = [1, [2, [3, [4]], 2, 5]]

console.log('fill')
// fill(value, start, end)
console.log(data.fill('6', 1, 3))
// _.fill(array, value, [start=0], [end=array.length])
console.log(
    _.fill(data, '6', 1, 3)
)

console.log('FindIndex')
// findIndex((element, index) => { ... } )
console.log(data.findIndex((e) => e == 4))
// _.findIndex(array, [predicate=_.identity], [fromIndex=0])
console.log(
    _.findIndex(data, (e) => {
        return e == 4;
    })
)

console.log('findLastIndex')
// lastIndexOf(searchElement, fromIndex)
console.log(data.lastIndexOf(4))
// _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
console.log(
    _.findLastIndex(data, (e) => {
        return e == 4;
    })
)

console.log('flatten')
// flat(depth)
console.log(data2.flat(3))
// _.flatten(array)
console.log(_.flatten(data2))
// _.flattenDeep(array)
console.log(_.flattenDeep(data2))
// _.flattenDepth(array, [depth=1])
console.log(_.flattenDepth(data2, 3))

console.log('fromParis')
console.log()
//_.fromPairs(pairs)
console.log(_.fromPairs([['hoang', 1], ['cao', 2]]))


console.log('head')
console.log(data[0])
// _.head(array)
console.log(_.head(data))

console.log('indexOf')
// indexOf(searchElement, fromIndex)
console.log(data.indexOf(2))
// _.indexOf(array, value, [fromIndex=0])
console.log(_.indexOf(data, 2))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})