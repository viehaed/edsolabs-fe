// đặt lại tên biến lodash
const lodash = _;

 //version lodash
console.log('VERSION: '+lodash.VERSION)



//sortedIndex
var arr = [10, 20, 30, 50], x = 40;
console.log('sortedIndex: '+lodash.sortedIndex(arr, x));

function sortedIndex_Lodash(arr, x) {
    var index = 0;
    for(var a of arr){
        if(x <= a){
            index = arr.indexOf(a);
            break;
        }
    }
    console.log(index);
    arr.splice(index, 0, x)
    return arr
}
console.log("sortedIndex_Lodash: "+sortedIndex_Lodash(arr, x))

//sortedIndexBy
var objects = [{ 'x': 4 }, { 'x': 5 }];
console.log("sortedIndexBy: "+lodash.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }))


//sortedIndexOf
var arr = [10, 20, 40, 50], x = 40;
console.log('sortedIndexOf: '+lodash.sortedIndexOf(arr, x));

function sortedIndexOf_Lodash(arr, x) {
    var index = 0;
    for(var a of arr){
        if(x == a){
            index = arr.indexOf(a);
        }
    }
    console.log(index);
    arr.splice(index, 0, x)
    return arr
}

console.log("sortedIndexOf_Lodash: "+sortedIndexOf_Lodash(arr, x))

//sortedLastIndex
var arr = [4, 5, 5, 5, 6], x = 5;
console.log('sortedLastIndex: '+lodash.sortedLastIndex(arr, x));

function sortedLastIndex_Lodash(arr, x) {
    var index = 0;
    for(var a of arr){
        if(x < a){
            index = arr.indexOf(a);
        }
    }
    console.log(index);
    arr.splice(index, 0, x)
    return arr
}

console.log("sortedLastIndex_Lodash: "+sortedLastIndex_Lodash(arr, x))

//sortedLastIndexBy
var objects = [{ 'x': 4 }, { 'x': 5 }];
let d = lodash.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
console.log(d)

//sortedLastIndexOf
var arr = [4, 5, 5, 5, 6], x = 5;
console.log('sortedLastIndexOf: '+lodash.sortedLastIndexOf(arr, x));
function sortedLastIndexOf_Lodash(arr, x) {
    var index = 0;
    for(var a of arr){
        if(x < a){
            index = arr.indexOf(a);
        }
    }
    console.log(index-1)
    arr.splice(index-1, 0, x)
    return arr
}

console.log("sortedLastIndexOf_Lodash: "+sortedLastIndexOf_Lodash(arr, x))

//sortedUniq
var arr = [4, 5, 5, 5, 6];
console.log("sortedUniq: "+lodash.sortedUniq(arr));
console.log([...new Set(arr)])