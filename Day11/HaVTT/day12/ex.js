
const array = [5, [12, [8, [130]], 44]];

//fill
console.log(array.fill(0, 2, 4));
console.log(array.fill('a'));

//findIndex
const isLargeNumber = (element) => element > 13;
console.log(array.findIndex(isLargeNumber));

//findLastIndex

//first -> head

//flatten
function flatten(input) {
  const stack = [...input];
  const res = [];
  while(stack.length) {
    const next = stack.pop();
    if(Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}
console.log(flatten(array));

//flattenDeep
function flatDeep(arr, d = 1) {
   return d > 0 ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : array.slice();
};

console.log(flatDeep(array, Infinity));

//flattenDepth

//fromPairs

//head

//indexOf

var indices = [];
    var element = 'a';
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    console.log(indices);