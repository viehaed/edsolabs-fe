const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const path = require("path");
const user = require("../routers/router");

app.use(express.static(path.join(__dirname, "public")));
//Template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});

app.use("/hello", user);

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
console.log("lodash:");
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
    return a.splice(i, 1);
};
obj.push(oth);
let b = [...new Set(obj.flat())];
b.filter((x, index, arr) => {
    // console.log("length:" + arr.length);
    // console.log("index:" + index);
    for (let i = index + 1; i < arr.length; i++) {
        // console.log(`i:${i}`);
        if (arr[index].x === arr[i].x && arr[index].y === arr[i].y) {
            remove(arr, i);
        }
    }
});
console.log("JS thuần :");
console.log(b);

//---------------------------------

// .isEqual

let object = { a: 1 };
let other = { a: 1 };
console.log(_.isEqual(object, other)); // values are equivalent
// => true
console.log(object == other); // khác địa chỉ ô nhớ
// => false