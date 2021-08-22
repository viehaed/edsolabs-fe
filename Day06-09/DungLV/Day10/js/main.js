import data from "./listStudent.json" assert { type: "json" };
import sumPoint from "./sumPoint.js"



function sortClass() {
    let newArr = sumPoint();
    return newArr.sort((a, b) => b.sums - a.sums)
}
console.log(sortClass())
let nameU = document.getElementById("value");

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
document.getElementById("fakePoint").addEventListener("click", () => {
    trangthai = true;
    alert("Bạn vừa Giả Lập điểm xog hãy Tra cứu điểm")
        })
document.getElementById("checkPoint").addEventListener("click", () => {
            if (trangthai == false) {
alert("Bạn phải Giả Lập Điểm trước")
            } else {
                if (nameU.value === "" && Number(nameU.value)) {
                    alert("Vui lòng thử lại")
                } else {
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
                    document.getElementById("root").innerHTML = a.map((el, index) => {
                                return (
                                        ` <ul class="fix-screen">
            <li>STT: ${el.id}</li>
            <li>Tên đầy đủ: <span class="bold">${el.name}</span></li>
            <li>Nhóm: ${el.teamNumber}</li>
            <li>Vị trí: ${el.position}</li>
            <li>Tổng điểm: <span class="red-point">${el.sums} Điểm</span></li>
            <li>${el.points.map(e => `Ngày ${e.dayName}: <span class="red-point">${e.point} Điểm</span>`).join(", ")}
           </li>
            <li>Vị trí nhóm : ${el.rankTeam} </li>
            <li>Vị trí lớp: ${el.rankClass}</li>
        </ul>`
                )
            }).join(" ")
        }
    }
})