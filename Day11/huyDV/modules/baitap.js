import ex31 from './ex31.js'
import ex32 from './ex32.js'

// bài 33
const convertToArray = () => {
    return ex32().split(",");
}

// console.log(convertToArray());

// bài 34

const getNameBy = (a) => {
    const arr = ex32().split(",");
    return arr.filter(item => item == a).length;
}
// console.log(getNameBy("Thành"));

// bài 35 
const searchNameByFirst = (name) => {
    const arr = ex32().split(",");
    const index = arr.indexOf(name);
    return index + 1;
}
// console.log(searchNameByFirst("Thành"));

// bài 36
const searchNameByLast = (name) => {
    let arr = ex32().split(",");
    arr = arr.reverse()
    const index = arr.indexOf(name);
    return arr.length - (index);
}
// console.log(searchNameByLast("Thành"));

// bài 37
const getNameByKey = (key) => {
    const searchKey = key.toLowerCase();
    const arr = ex32().split(",");
    return arr.filter(item => item.charAt(0).toLowerCase() == searchKey).length;
}
// console.log(getNameByKey("A"));


// bài 38
const getNameByKeyAB = (keyA, KeyB) => {
    const searchKeyA = keyA.toLowerCase();
    const searchKeyB = KeyB.toLowerCase();
    const arr = ex32().split(",");
    return arr.filter(item => item.charAt(0).toLowerCase() == searchKeyA).filter(item => item.charAt(item.length - 1).toLowerCase() == searchKeyB).length;
}
// console.log(getNameByKeyAB("Á","H"));

// bài 39
const searchNameKey = (key) => {
    const searchKey = key.toLowerCase();
    const arr = ex32().split(",");
    return arr.filter(item => item.toLowerCase().includes(searchKey)).length;
}
// console.log(searchNameKey("H"));

// Bài 40

const connectString = () => {
    return  ex31().map(item => {
        return "Bạn ".concat(item)
    }).toString();
}

// console.log(connectString());

// bài 41
const createGroups = () => {
    return ex32().split(`Thành`);
};
// console.log(createGroups());

//Bai 42
const groupsEndWithThanh = () => {

    return ex32().split(/(?<=Thành),?/)
       
};
// console.log(groupsEndWithThanh());
//Bai 43
const groupsStartWithThanh = () => {
    return ex32().split(/,?(?=Thành)/)
};
// console.log(groupsStartWithThanh());

// bài 42
const concatString = () => {
    return ex32().concat(",", ex32());
}
// console.log(concatString());


// bài 45
const switchName = () => {
    return ex32().replaceAll("Dũng", "Tuấn");
}
// console.log(switchName());

export {
    convertToArray,
    getNameBy,
    searchNameByFirst,
    searchNameByLast,
    getNameByKey,
    getNameByKeyAB,
    searchNameKey,
    connectString,
    createGroups,
    groupsEndWithThanh,
    groupsStartWithThanh,
    concatString,
    switchName
 }


