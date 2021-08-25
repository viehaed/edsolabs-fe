

//sortedIndex
console.log(_.sortedIndex([1, 3], 2));
// 
const sortedIndex = (arr, value) => {
    return arr.findIndex((item) => item >= value);
};

//sortedIndexBy

var objects = [{ 'x': 4 }, { 'x': 5 }];

console.log(_.sortedIndexBy(objects, { 'x': 4 }, 'x'));
// 
const sortedIndexBy = (arr, value, func) => {
    const mapArr = arr.map(func).sort((a, b) => a - b);
    return sortedIndex(mapArr, func(value));
};

//sortedIndexOf

console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5));
// 
const sortedIndexOf = (arr, value) => {
    return arr.indexOf(value);
};

//sortedLastIndex
console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5));
//
const sortedLastIndex = (arr, value) => {
    return arr.findIndex((item) => item > value);
};

//sortedLastIndexBy
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'));
// 
const sortedLastIndexBy = (arr, value, func) => {
    const mapArr = arr.map(func).sort((a, b) => a - b);
    return sortedIndex(mapArr, func(value));
};

//sortedLastIndexOf
const sortedLastIndexOf = (arr, value) => {
    return arr.lastIndexOf(value);
};

//sortedUniq
const sortedUniq = (arr) => {
    return [...new Set(arr)];
};

//sortedUniqBy
const sortedUniqBy = (arr, func) => {
    const mapArr = arr.map(func);
    return [...new Set(mapArr)];
};