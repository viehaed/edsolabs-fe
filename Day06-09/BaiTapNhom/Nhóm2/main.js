import listStudent from './Ds.js'
import {
    firstName,
    bai32,
    bai33
} from './Ds.js'

//Bai 34
function bai34(x) {
    var findName = firstName.filter(function (findName, index) {
        return findName == x;
    })
    console.log(findName.length)
}
bai34('Hoang')
// Bai 35
function bai35(x) {
    var findSTT = firstName.indexOf(x)
    console.log(findSTT + 1)
}

//Bai 36
function bai36(x) {
    var findSTT = firstName.lastIndexOf(x)
    console.log(findSTT + 1)
}

// Bai 37
function bai37(x) {
    return bai33.filter((o) => o.startsWith(x)).length;
};
console.log(bai37("H"))

// Bai 38
function bai38(x, y) {
    return bai33.filter((o) => o.startsWith(x) && o.endsWith(y)).length;
};
console.log(bai38("H", "g"))
// Bai 39
function bai39(x) {
    var patt = new RegExp(x)
    var count = 0;
    for (var i = 1; i < firstName.length; i++) {
        var res = patt.test(firstName[i])
        if (res == true) {
            count++;
        }
    }
    console.log(count)
}
bai39('a')
// Bai 40
function bai40() {
    var arrB = bai33.slice();
    var arrA = arrB.pop();
    return `Bạn ${arrB.join(" tiếp theo là bạn ")} cuối cùng là bạn ${arrA}`;
}
console.log(bai40());
// Bai 41
var bai41 = bai32.split('Thanh')
console.log(bai41)
// Bai 42 Tìm khoảng trống sau Thanh
const bai42 = bai32.split(/(?<=Thanh)\s/);
console.log(bai42)
// Bai 43  Tìm khoảng trống trước Thanh
const bai43 = bai32.split(/\s(?=Thanh)/);
console.log(bai43)
// Bai 44
var bai44 = bai32.concat(' ' + bai32)
console.log(bai44)
// Bai 45
var bai45 = bai32.replaceAll("Dung", "Tuan")
console.log(bai45)

