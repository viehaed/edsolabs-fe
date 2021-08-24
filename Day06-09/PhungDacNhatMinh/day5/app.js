// import data from "../day4/modules/data.json" assert { type: "json" };
// lỗi save file tự xuống dòng không save được
import data from "../day4/modules/data.js";

// const data = require("./day4/modules/data.json");
import importPointAllStudent from "../day4/modules/pointInDay.js";
let $fm = document.getElementById("fm");
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
        let findName = $fm.dl.value;
        if (e.name.toLowerCase().includes(findName.toLowerCase())) {
            return e;
        }
    });
    console.log(user);
    // rank in group
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

    let rankInGroup =
        num[0].indexOf(
            num[0].find((y) => {
                return y.name == user[0].name;
            })
        ) + 1;
    const result = document.querySelector("#result");
    let html;
    user.map((u) => {
        // tạo rank class
        var rankClass = newSum
            .filter((o) => {
                return o.group.groupID == u.group.groupID;
            })
            .sort((a, b) => {
                return b.totalPoint - a.totalPoint;
            });
        var classRank =
            rankClass.indexOf(
                newSum.find((y) => {
                    return y.name == u.name;
                })
            ) + 1;
        let sum = "";
        for (let i = 0; i < 7; i++) {
            let x = ` Day ${i + 1} : ${u.points[i].point} |`;
            sum += x;
            // console.log(x);
        }

        return (html = `<ul>

                            <li>STT: ${u.id}</li>
                            <li>Tên đầy đủ: ${u.name}</li>
                            <li>Nhóm: ${u.group.groupId}</li>
                            <li>Vị trí: ${u.group.position}</li>
                            <li>Tổng điểm: ${u.totalPoint}</li>
                            <li>${sum}</li>
                            <li>Xếp hạng nhóm: ${rankInGroup}</li>
                            <li>Xếp hạng lớp:  ${classRank}</li>
                        </ul>`);
    }).join("");
    if (html) {
        result.innerHTML = html;
    }
    $fm.dl.value = "";
});