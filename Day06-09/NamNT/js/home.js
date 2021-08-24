var HocVien;
var Nhom = new Map();
var g_soNgay = 0;

// đọc file json

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

function init() {
    readTextFile("data.json", function(text) {
        HocVien = JSON.parse(text).list;
    });
    themSuKien();
}

function themSuKien() {
    document
        .querySelector(".emulotorPoints")
        .addEventListener("click", emulatorPoints);
    document
        .querySelector(".searchPoins")
        .addEventListener("click", searchPoints);
}

// Chuc nang gia lap diem

function getDayName(current_day) {
    var day_name = "";
    switch (current_day) {
        case 0:
            day_name = "Chủ nhật";
            break;
        case 1:
            day_name = "Thứ hai";
            break;
        case 2:
            day_name = "Thứ ba";
            break;
        case 3:
            day_name = "Thứ tư";
            break;
        case 4:
            day_name = "Thứ năm";
            break;
        case 5:
            day_name = "Thứ sau";
            break;
        case 6:
            day_name = "Thứ bảy";
    }
    return day_name;
}

function inputPoints(day) {
    // debugger
    HocVien.forEach((hocVien, index) => {
        if (!hocVien.points && !hocVien.totalScore) {
            hocVien.points = [];
            hocVien.totalScore = 0;
        }
        hocVien.points.push({
            dayID: hocVien.points.length > 0 ? hocVien.points.length + 1 : 1,
            dayName: getDayName(day.getDay()),
            point: Math.floor(Math.random() * 11),
        });
        hocVien.totalScore += hocVien.points[hocVien.points.length - 1].point;

        if (Nhom.has(hocVien.group.groupID)) {
            let tongDiemHV = 0;
            let soThanhVienNhom = 0;
            hocVien.points.forEach((item, index) => {
                tongDiemHV += item.point;
            });
            soThanhVienNhom = Nhom.get(hocVien.group.groupID).length;
            for (let i = 0; i < soThanhVienNhom; i++) {
                if (hocVien.id == Nhom.get(hocVien.group.groupID)[i].maHV) {
                    Nhom.get(hocVien.group.groupID)[i].totalScore +=
                        hocVien.points[hocVien.points.length - 1].point;
                    break;
                } else if (i == soThanhVienNhom - 1) {
                    Nhom.get(hocVien.group.groupID).push({
                        maHV: hocVien.id,
                        totalScore: tongDiemHV,
                        viTriNhom: 0,
                    });
                }
            }
            Nhom.get(hocVien.group.groupID).sort(function(a, b) {
                return b.totalScore - a.totalScore;
            });
            Nhom.get(hocVien.group.groupID).forEach((item, index) => {
                if (index == 0) {
                    item.viTriNhom = index + 1;
                } else if (
                    item.totalScore !=
                    Nhom.get(hocVien.group.groupID)[index - 1].totalScore
                ) {
                    item.viTriNhom =
                        Nhom.get(hocVien.group.groupID)[index - 1].viTriNhom + 1;
                } else {
                    item.viTriNhom = Nhom.get(hocVien.group.groupID)[index - 1].viTriNhom;
                }
            });
        } else {
            Nhom.set(hocVien.group.groupID, [{
                maHV: hocVien.id,
                totalScore: hocVien.points[hocVien.points.length - 1].point,
                viTriNhom: 0,
            }, ]);
        }
    });
    console.log(Nhom);
}

// hàm nhập điểm
function emulatorPoints() {
    g_soNgay += 1;
    let dayStart = new Date();
    inputPoints(dayStart);
    let loopWeek = setInterval(() => {
        let dayPresent = new Date();
        let second = dayPresent.getTime() - dayStart.getTime();
        let dayNumber = second / (1000 * 3600 * 24);

        if (HocVien[0].points.length == g_soNgay * 7) {
            clearInterval(loopWeek);
        } else {
            inputPoints(dayPresent);
        }
    }, 0);
    alert("Giả lập điểm thành công");
}

// Chuc nang tra cuu diem

function searchPoints() {
    document.querySelector(".info_students--item").innerHTML = "";
    let infoStudents = document
        .querySelector(".input_hocVien")
        .value.trim()
        .toUpperCase();
    let tongD_viTri = [];
    const CONST_INFO_HV = "CONST_INFO_HV";
    const CONST_INFO_DETAIL = "CONST_INFO_DETAIL";

    if (infoStudents == "") {
        alert("Bạn phải nhập thông tin học viên!");
    } else {
        for (const nhom of Nhom) {
            tongD_viTri.push(...nhom[1]);
        }
        tongD_viTri.sort(function(a, b) {
            return b.totalScore - a.totalScore;
        });
        let HVFiltered = HocVien.filter((hocVien) => {
            return hocVien.name.toUpperCase().indexOf(infoStudents) > 0;
        });
        if (HVFiltered.length == 0) {
            alert("Không tồn tại học viên cần tìm kiếm");
            return;
        }
        HVFiltered.forEach((hocVien, index) => {
            let students_ContainHTML =
                '<div class="info-hv">' + CONST_INFO_HV + "</div>";
            let infoStudent_HTML = "<p>" + CONST_INFO_DETAIL + "</p>";
            let strInfoStudents = "";
            let groupRank = 0;
            let classRank = 0;
            let sum = 0;
            let strPoints = "";
            console.log("tongD_viTri");
            console.log(tongD_viTri);
            for (let i = 0; i < HocVien.length - 1; i++) {
                classRank =
                    i == 0 ?
                    i + 1 :
                    tongD_viTri[i].totalScore != tongD_viTri[i - 1].totalScore ?
                    classRank + 1 :
                    classRank;
                if (tongD_viTri[i].maHV == hocVien.id) {
                    groupRank = tongD_viTri[i].viTriNhom;
                    sum = tongD_viTri[i].totalScore;
                    break;
                }
            }
            hocVien.points.forEach((item, indexP) => {
                strPoints +=
                    "Day" +
                    " " +
                    item.dayID +
                    ":" +
                    " " +
                    item.point +
                    (indexP != hocVien.points.length - 1 ? " | " : "");
            });
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "STT : " + (index + 1)
            );
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "Tên đầy đủ : " + hocVien.name
            );
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "Nhóm : " + hocVien.group.groupID
            );
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "vị trí : " +
                (hocVien.group.position == 1 ? "Nhóm trưởng" : "Thành viên")
            );
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "Tổng điểm : " + sum
            );
            strInfoStudents += infoStudent_HTML.replace(CONST_INFO_DETAIL, strPoints);
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "Xếp hạng nhóm : " + groupRank
            );
            strInfoStudents += infoStudent_HTML.replace(
                CONST_INFO_DETAIL,
                "Xếp hạng lớp : " + classRank
            );
            students_ContainHTML = students_ContainHTML.replace(
                CONST_INFO_HV,
                strInfoStudents
            );
            document.querySelector(".info_students--item").innerHTML +=
                students_ContainHTML;
        });
    }
}
// Ket thuc chuc nang tra cuu diem
init();