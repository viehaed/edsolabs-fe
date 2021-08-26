//Async ,Sync
// Async : satTimeout, setInterval , fetch , XMLHttpRequest, file reading ,...
"use strick";
// setTimeout(function() {
//     console.log("1 trên");
// }, 1001);

// console.log(2);

//----------------------------------------------------------------

// CallBack , CallBack hell

// setTimeout(function() {
//     console.log("1 dưới");
//     setTimeout(function() {
//         console.log("2");
//         setTimeout(function() {
//             console.log("3");
//             setTimeout(function() {
//                 console.log("4");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// callback sẽ chạy lần lượt từng function

//fix callback hell with promise

let promise1 = new Promise(function(resolve, reject) {
    if (true) {
        resolve("resolve promise1");
    }
    reject("error");
});
// promise1
//     .then(function() {
//         console.log("Sync log 1");
//         setTimeout(function() {
//             console.log("Async log 1");
//         }, 1000);
//     })
//     .then(function() {
//         console.log("Sync log 2");
// setTimeout(function() {
//     console.log("Async log 2");
// }, 1000);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally((done) => {
//         console.log("done");
//     });

// promise sẽ dễ nhìn hơn callback :))
// Async sẽ chạy cùng 1 lúc sau 1s sẽ ra hết ==> nhanh hơn callback

//----------------------------------------------------------------

// promise cũng có thể giải quyết vấn đề của callback khi các HÀM SAU phụ thuộc vào HÀM TRƯỚC :

let promise2 = new Promise((resolve, reject) => {
    if (true) {
        resolve("data 1");
    } else reject("false");
});
let a = "global";
promise2
    .then((res) => {
        console.log(res);
        let a = "data 2";
        return a;
    })
    .then((res) => {
        console.log(res);
        return "data 3";
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally((done) => {
        console.log("done");
    });
console.log(a);
// log(a) ra trước promise.then() vì promise có trạng thái pending

// Promise.all()

const promise3 = Promise.resolve(3);
const promise4 = 42;
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello, promise"), 1000);
});

Promise.all([promise3, promise4, promise5])
    .then((values) => {
        console.log(values);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally((done) => {
        console.log("done");
    });

// Async-Await

async function hello() {
    return greeting = await Promise.resolve("Hello Async-Await");
};

hello().then((values) => {
    console.log(values);
});

// 1 ví dục khác cửa async await

async function getABC() {
    let A = await setTimeout(function() {
        console.log("A takes 2s");
    }, 2000); // getValueA takes 2 second to finish
    let B = await setTimeout(function() {
        console.log("B takes 3s");
    }, 3000); // getValueB takes 4 second to finish
    let C = await setTimeout(function() {
        console.log("B takes 4s");
    }, 4000); // getValueC takes 3 second to finish

    return A + B + C;
}
getABC().then(() => {
    console.log("resolve getABC");
}).catch(() => {
    console.log("reject");
}).finally(() => {
    console.log("done");
})