// import data from "../day4/modules/data.json" assert { type: "json" };
// lỗi save file tự xuống dòng không save được 
import data from "../day4/modules/data.js";
// const data = require("./day4/modules/data.json");
console.log(data);
import importPointAllStudent from "../day4/modules/pointInDay.js";
import fullName from "../day4/modules/fullName.js";
const arrFullName = fullName();
console.log(arrFullName);
let $fm = document.getElementById("fm");
let $id = document.getElementById("STT");
let $name = document.getElementById("name");
let $group = document.getElementById("group");
let $position = document.getElementById("position");
let $sumPoint = document.getElementById("sumPoint");
let $pointByDay = document.getElementById("pointByDay");
let $rankInGroup = document.getElementById("rankInGroup");
let $rankInClass = document.getElementById("rankInClass");
let $findPoint = document.getElementById("findPoint");
let $emulatorPoint = document.getElementById("emulatorPoint");

$fm.addEventListener("submit", function(e) {
    e.preventDefault();
    if ($fm.dl.value.trim() === "") {
        return;
    }
});

let newSum = [];
$emulatorPoint.addEventListener("click", function() {
    const getTotalPointInRange = () => {
        const tempArr = importPointAllStudent.map((person) => {
            //calculate the total point in provided range
            const totalPoint = person.points.reduce((total, item) => {
                const { dayName, point } = item;
                const dayInNum = parseInt(dayName.split(" ").pop());
                if (dayInNum >= 1 && dayInNum <= 7) {
                    return total + point;
                }
                return total;
            }, 0);
            // add new property and return the item
            person.totalPoint = Math.ceil(totalPoint * 100) / 100;
            return person;
        });

        return tempArr;
    };
    newSum = getTotalPointInRange();
    console.log(newSum);
    return getTotalPointInRange;
});

//----------------------------------------------------------------

$findPoint.addEventListener("click", function(e) {
    let user = newSum.filter((e) => {
        let fullName = e.name.toLowerCase() == $fm.dl.value.toLowerCase();
        return fullName;
    });
    console.log(user);
    // rank in class
    console.log(newSum);
    const getGroup = () => {
        const groups = newSum.map((person) => person.group.groupId);
        return [...new Set(groups)];
    };

    let rankGroup = () => {
        const groups = getGroup(newSum);
        console.log(groups);
        return groups.map((group) => {
            const groupMember = newSum
                .filter((item) => item.group.groupId == group)
                .sort((a, b) => b.totalPoint - a.totalPoint);
            return groupMember;
        });
    };
    console.log(rankGroup());
    console.log(user);
    let num = user.map((x) => {
        const groupRank = newSum
            .filter((y) => y.group.groupId == x.group.groupId)
            .sort((a, b) => b.totalPoint - a.totalPoint);

        return groupRank;
    });

    console.log(num);
    console.log(user[0].name);
    let numNew =
        num[0].indexOf(
            num[0].find((y) => {
                return y.name == user[0].name;
            })
        ) + 1;

    console.log(numNew);

    user.forEach((u) => {
        // tạo rank group
        var rankClass = newSum
            .filter((o) => {
                return o.group.groupID == u.group.groupID;
            })
            .sort((a, b) => {
                return b.totalPoint - a.totalPoint;
            });
        console.log(rankClass);
        var classRank =
            rankClass.indexOf(
                newSum.find((y) => {
                    return y.name == u.name;
                })
            ) + 1;
        console.log(classRank);
        console.log(u);
        $id.innerHTML = `STT: ${u.id}`;
        $name.innerHTML = `Tên Đầy đủ: ${u.name}`;
        $group.innerText = `Nhóm: ${u.group.groupId}`;
        $position.innerText = `Nhóm: ${u.group.position}`;
        let sum = "";
        for (let i = 0; i < 7; i++) {
            let x = ` Day ${i + 1} : ${u.points[i].point} |`;
            sum += x;
            // console.log(x);
        }
        $sumPoint.innerText = `Tổng điểm :${u.totalPoint}`;
        $pointByDay.innerText = sum;
        $rankInGroup.innerText = `Xếp hạng nhóm: ${numNew}`;
        $rankInClass.innerText = `Xếp hạng lớp: ${classRank}`;
        $fm.dl.value = "";
    });
});