const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

// app.post("/", function(req, res) {
//     res.send("Got a POST request");
// });
// app.put("/user", function(req, res) {
//     res.send("Got a PUT request at /user");
// });
// app.delete("/user", function(req, res) {
//     res.send("Got a DELETE request at /user");
// });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const _ = require("lodash");
// const array = require('lodash/array');
// .unionWith

let objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
];
let others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
];
let a = _.unionWith(objects, others, _.isEqual);
console.log(a);

// Js thuần

let obj = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
];
let oth = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
];
let remove = function(a, i) {
    let newArr = [...a];
    return newArr.splice(i, 1);
};
obj.push(oth);
let b = [...new Set(obj.flat())];
b.filter((x, index, arr) => {
    console.log("length:" + arr.length);
    console.log("index:" + index);
    let a = 1;
    for (let i = index + 1; i < arr.length; i++) {
        console.log(`i:${i}`);
        if (arr[index].x === arr[i].x && arr[index].y === arr[i].y) {
            // arr.pop()
            console.log(a);
            console.log(remove(arr, 2));
        }
    }
    return a;
});
console.log(b);

//---------------------------------
// .isEqual

let object = { a: 1 };
let other = { a: 1 };
console.log(_.isEqual(object, other)); // values are equivalent
// => true
console.log(object == other); // khác địa chỉ ô nhớ
// => false