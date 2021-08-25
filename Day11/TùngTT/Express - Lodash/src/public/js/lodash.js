// Test lodash
// var _ = require('lodash');

let data = [1,4,3,9,2,1,5,7,4,2,1,5,6,3]
// lodash join
console.log("lodash join")
console.log(_.join(data,';'))
//my join
console.log("my join")
function myJoin(data,separator){
    return data.join(separator)
}
console.log(myJoin(data,';'))

//lodash last
console.log("lodash last")
console.log(_.last(data))
//my last
console.log("my last")
function myLast(list){
    return list.pop()
}
console.log(myLast(data))

//lodash lastindexof
console.log("lodash lastIndexOf")
console.log(_.lastIndexOf(data, 1))
console.log("my lastIndexOf")
function myLastIndexOf(list, value){
    return list.lastIndexOf(value)
}
console.log(myLastIndexOf(data,1))

//lodash nth
console.log("lodash nth")
console.log(_.nth(data,3))
console.log("my nth")
function getNth(list,index){
    return list[index]
}
console.log(getNth(data,3))

//lodash pull
console.log("lodash pull")
data_2 = data.map(e=>e)
console.log(_.pull(data_2,1,2))
console.log("my pull")
data_3 = data.map(e=>e)
value = [1,2]
function myPull(list,arr){
    arr.map((e)=>{
        let i = 0
        while(i<list.length){
            if(list[i]===e){
                list.splice(i,1)
            }else{
                i++
            }
        }
    })
    return list
}
console.log(myPull(data_3,value))

//lodash pullAll
console.log("lodash pullAll")
data_4 = data.map(e=>e)
console.log(_.pullAll(data_4,[1,2]))
//my pullAll giong voi myPull

//lodash pullAllBy
console.log("lodash pullAllBy")
let array = [{ 'x': 1}, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
//my pullAllBy
console.log("my pullAllBy")
let array_1 = array.map(e=>e)
let removeItem = [{'x':1},{'x':3}]
function myPullAllBy(list,rem,prop){
    removeItem.map((e) => {
        let i = 0
        while(i < list.length){
            if(list[i][prop] === e[prop]){
                list.splice(i,1)
            }else{
                i++
            }
        }
    })
    return list
}
console.log(myPullAllBy(array_1,removeItem,'x'))

//lodash pullAllWith
console.log("lodash pullAllWith")
let array2 = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array2, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array2);         
//my pullAllWith


//lodash pullAt
console.log("lodash pullAt")
array = ['a', 'b', 'c', 'd'];
let pulled = _.pullAt(array, [1, 3]);
console.log(array)
console.log(pulled)
// my pullAt
console.log("my pullAt")
array = ['a', 'b', 'c', 'd'];
pullIndex=[1,3]
pulled = []
function myPullAt(array, pullIndex){
    pullIndex.map((e)=>{
        pulled.push(array[e])
        delete array[e]
    })
    return array.filter(e=>e)
}
console.log(myPullAt(array,pullIndex))
console.log(pulled)

//lodash remove
console.log("lodash remove")
array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array);
console.log(evens);
//my remove
console.log("my remove")
array = [1, 2, 3, 4];
evens = array.filter((e) => e%2===0)
function myRemove(list, value){
    for (let i = 0; i< list.length;i++){
        for(let j = 0; j<value.length;j++){
            if(list[i] === value[j]) delete list[i]
        }
    }    
    return list.filter(e=>e)
}
console.log(myRemove(array,evens))
console.log(evens)

//lodash reverse
console.log("lodash reverse")
console.log(_.reverse(data))
//my reverse
console.log("my reverse")
function myReverse(list){
    return list.reverse()
}
console.log(myReverse(data)) 