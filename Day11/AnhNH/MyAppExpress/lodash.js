var _ = require('lodash');

// ------------- chunk -------------------

function myChunk(arr,number) {
    let valueArr = [];
    for(let i = 0; i < arr.length; i+= number) {
        valueArr.push(arr.slice(i,i+number));
    }
    return valueArr
}

console.log(myChunk(['a', 'b', 'c', 'd','e'], 3));

// trunk of lodash
console.log(_.chunk(['a', 'b', 'c', 'd','e','f'], 3));


// -------------- compact ---------------

function myCompact(arr) {
    return arr.filter(item => Boolean(item))
}

console.log(myCompact([0, 1, false, 2, '', 3]));

// -------------compact of lodash-------------
console.log(_.compact([0, 1, false, 2, '', 3]));

// ----------------- concat --------------------

function myConcat(...rest) {
    let newArr = [];
    return rest.map((item, index) => {
        if (Array.isArray(item)) {
            newArr = [...newArr, ...item]
        } else {
            newArr.push(rest[index]);
        }
        return newArr[index];
    })
}
console.log(myConcat([1], 2, [3], [[4]]));

// --------------- concat of lodash -----------------

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);


// ------------------ difference --------------------

function myDifference(arr1, arr2) {
    return arr1.filter((item, index) => item !== arr2[index])
}

console.log(myDifference([2, 1, 6], [2, 3, 3]));

// -------------------- difference of lodash ------------------------
console.log(_.difference([2, 1, 6], [2, 3, 3]));


// -------------------- differenceBy ----------------------

function myDifferences(arr1, arr2, callback) {
    return arr1.filter((item, index) => {
       if (typeof item === 'number' && typeof callback === 'function') {
            return callback(item) !== callback(arr2[index]);
       }
       if (typeof item === 'object' && typeof callback === 'string') {
            return item[callback] !== arr2[0][callback];
       }
    });
}

console.log(myDifferences([2.1, 1.2], [2.5, 3.4], Math.round));

console.log(myDifferences([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));

console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

//  ------------------- drop ---------------------
const myDrop = (arr , number) => {
    if( number == null) {
        arr.shift()
        return arr;
    } else if (number === 0) {
        return arr;
    } else {
        arr.splice(0,number);
        return arr;
    }
              
}

myDrop([1, 2, 3], 2);

// --------------- drop of lodash ----------------
console.log(_.drop([1, 2, 3], 2));

// ---------------- drop right ------------------

function myDropRight (arr, number) {
    if( number == undefined) {
        arr.pop();
        return arr;
    } else if (number === 0) {
        return arr;
    } else {
        arr.splice(arr.length,-number);
        return arr;
    }
}

console.log([1, 2, 3, 6, 8, 9].splice([1, 2, 3, 6, 8, 9].length - 1, ));

console.log(_.dropRight([1, 2, 3, 8, 56, 5, 4],4));

const myDropRight = (arr, number) => {
  if (number == undefined) {
    arr.pop();
    return arr;
  } else if (number === 0) {
    return arr;
  } else {
    arr.reverse().splice(0, number);
    return arr.reverse();
  }
};

console.log(myDropRight([1, 2, 3, 8, 56, 5, 4],4));