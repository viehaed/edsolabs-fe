import data from "./listStudent.json" assert{ type: "json" };

console.log(data)

function fakePonit() {
    let newClass = data
    newClass.forEach(item => {
        item.points = [{
            dayID: 2,
            dayName: "thứ 2",
            point: Math.floor(Math.random() * 10)
        },
        {
            dayID: 3,
            dayName: "thứ 3",
            point: Math.floor(Math.random() * 10)
        },
        {
            dayID: 4,
            dayName: "thứ 4",
            point: Math.floor(Math.random() * 10)
        },
        {
            dayID: 5,
            dayName: "thứ 5",
            point: Math.floor(Math.random() * 10)
        },
        {
            dayID: 6,
            dayName: "thứ 6",
            point: Math.floor(Math.random() * 10)
        },
        {
            dayID: 7,
            dayName: "thứ 7",
            point: Math.floor(Math.random() * 10)
        }
        ]
    })
    return newClass;
}
console.log(fakePonit());

function sumPoint() {
    let listStudent = fakePonit();
    listStudent.map((item) => {
        let sum = 0;
        item.points.map((item) => {
            sum += item.point;
        });
        item.sums = sum;
    });
    return listStudent;
}
console.log(sumPoint());
function sortClass() {
    let newArr = sumPoint();
    return newArr.sort((a, b) => b.sums - a.sums)
}
console.log(sortClass())
let nameU = document.getElementById("value__input");
function exportData() {
    let newArr = sortClass();
    return newArr.filter(el => el.name.includes(nameU.value))
}
function rankTeam() {
    let local = sumPoint();
    let newArr = [];
    for (let i = 1; i <= 5; i++) {
        let subArr = [];
        local.forEach((item) => {
            if (item.teamNumber === i) {
                subArr.push(item);
            }
        });
        newArr.push(subArr);
    }
    let valueArr = newArr.map((item) => item.sort((a, b) => b.sums - a.sums));
    return valueArr;
}
let trangthai = false;
document.getElementById("fakePonit").addEventListener("click", () => {
    trangthai = true;
    alert("bạn vừa bật giả lập điểm")
})
document.getElementById("checkPonit").addEventListener("click", () => {
    if (trangthai == false) {

        alert("chưa giả lập điểm")
    }
    else {
        if (nameU.value === "") {
            alert("chưa nhạp tên")
        }
        else {
            let a = exportData()
            let b = sortClass();
            let c = rankTeam();
            b.forEach((item, index) => {
                if (item.name.includes(nameU.value)) {
                    a.map(el => {
                        if (el.id === item.id) {
                            el.rankClass = index + 1
                        }
                    })
                }
            });
            c.forEach(item => {
                item.forEach((e, index) => {
                    if (e.name.includes(nameU.value)) {
                        a.map(el => {
                            if (el.id === e.id) {
                                el.rankTeam = index + 1;
                            }
                        })
                    }
                })
            })
            console.log(c)
            console.log(a);
            document.getElementById("getData").innerHTML = a.map((el, index) => {
                return (
                    `<tr>   
                   <td>${index + 1}</td>
                   <td>${el.id}</td>
                   <td>${el.name}</td>
                   <td>${el.teamNumber}</td>
                   <td>${el.position}</td>
                   <td>${el.sums}</td>
                   <td>${el.points.map(e => `<br/>${e.dayName}: ${e.point}`)}</td>
                   <td>${el.rankClass}</td>
                   <td>${el.rankTeam}</td>
                   </tr>`
                )
            }).join(" ")
        }
    }
})

