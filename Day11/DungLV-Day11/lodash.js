var _ = require('lodash');
function myChunk(arr, number) {
    let emtyArray = [];
    for (let i = 0; i < arr.length; i += number) {
        emtyArray.push(arr.slice(i, i + number))
    }
    return emtyArray
}
console.log(myChunk(['a', 'b', 'c', 'd', 'e', 'f'], 5));
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

function myCompact(arr) {
    return arr.filter(item => Boolean(item))
}

var other = _.concat(array, 2, [3], [[4]]);
function myConcat(arr) {
    var array = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            array = [...array, ...arr[i]]
        } else {
            array.push(arr[i])
        }
    }
    return array
}
//bài 2
function myConcat(...rest) {
    let newArr = [];
    return rest.map((item, index) => {
        if (Array.isArray(item)) {
            newArr = [...newArr, ...item]
        } else {
            newArr.push(rest[index]);
        }
        return newArr
    })
}
console.log(myConcat([2, [3], [[4]]]));
//bài 3
console.log(_.difference([2, 1], [2, 3]));
function myDifference(a, b) {
    let emty = [];
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < b.length; j++) {
            if (a[i] != b[j]) {
                emty.push(a[i])
            }
        }
    }
    return emty
}
console.log(myDifference([2, 1], [2, 3]));
//bài4
console.log(_.dropRight([1, 2, 3, 8, 56, 5, 4], 4));

const myDropRight = (arr, number) => {
  if (number == undefined) {
    let a = arr.pop();
    return arr;
  } else if (number === 0) {
    return arr;
  } else {
    arr.reverse().splice(0, number);
    return arr.reverse();
  }
};

console.log(myDropRight([1, 2, 3, 8, 56, 5, 4], 4));
//bai5
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
//bài6
console.log(myDifferences([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
function myDifference(arr1, arr2) {
  return arr1.filter((item, index) => {
    item !== arr2[index]
  })
}

console.log(myDifference([2, 1, 6], [2, 3, 3]));

//bai7
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
console.log(myDrop([1, 2, 3], 2));