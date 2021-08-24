//sortedIndex
const sortedIndex = (arr, value) => {
  return arr.findIndex((item) => item >= value);
};

//sortedIndexBy
const sortedIndexBy = (arr, value, func) => {
  const mapArr = arr.map(func).sort((a, b) => a - b);
  return sortedIndex(mapArr, func(value));
};

//sortedIndexOf
const sortedIndexOf = (arr, value) => {
  return arr.indexOf(value);
};

//sortedLastIndex
const sortedLastIndex = (arr, value) => {
  return arr.findIndex((item) => item > value);
};

//sortedLastIndexBy
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
