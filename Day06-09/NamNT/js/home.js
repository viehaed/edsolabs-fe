var HocVien;
var Nhom = new Map();

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function init() {
    readTextFile("data.json", function(text) {
        HocVien = JSON.parse(text).list;
    });
    themSuKien();
}

function themSuKien() {
    document.querySelector('.fc__giaLapDiem').addEventListener('click', giaLapDiem);
    document.querySelector('.fc__traCuuDiem').addEventListener('click', traCuuDiem);
}


// Chuc nang gia lap diem

function layThu(current_day) {
    var day_name = '';
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

function hamNhapDiem(ngay) {
    // debugger
    HocVien.forEach((hocVien, index) => {
        if (!hocVien.points && !hocVien.totalScore) {
            hocVien.points = [];
            hocVien.totalScore = 0;
        }
        hocVien.points.push({
            dayID: ngay.getDate(),
            dayName: layThu(ngay.getDay()),
            point: Math.floor(Math.random() * 11)
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
                    Nhom.get(hocVien.group.groupID)[i].totalScore += hocVien.points[hocVien.points.length - 1].point;
                    break;
                } else if (i == soThanhVienNhom - 1) {
                    Nhom.get(hocVien.group.groupID).push({
                        maHV: hocVien.id,
                        totalScore: tongDiemHV,
                        viTriNhom: 0
                    })
                }
            }
            Nhom.get(hocVien.group.groupID).sort(function(a, b) { return b.totalScore - a.totalScore });
            Nhom.get(hocVien.group.groupID).forEach((item, index) => {
                if (index == 0) {
                    item.viTriNhom = index + 1;
                } else if (item.totalScore != Nhom.get(hocVien.group.groupID)[index - 1].totalScore) {
                    item.viTriNhom = Nhom.get(hocVien.group.groupID)[index - 1].viTriNhom + 1;
                } else {
                    item.viTriNhom = Nhom.get(hocVien.group.groupID)[index - 1].viTriNhom;
                }
            });

        } else {
            Nhom.set(hocVien.group.groupID, [{
                maHV: hocVien.id,
                totalScore: hocVien.points[hocVien.points.length - 1].point,
                viTriNhom: 0
            }]);
        }
    });
    console.log(Nhom);
}

function giaLapDiem() {
    let ngayBatDau = new Date();
    hamNhapDiem(ngayBatDau);
    let lapLaiMotTuan = setInterval(() => {
        let ngayHienTai = new Date();
        let soMS = ngayHienTai.getTime() - ngayBatDau.getTime();
        let soNgay = soMS / (1000 * 3600 * 24);

        if (HocVien[0].points.length == 2) {
            clearInterval(lapLaiMotTuan);
        } else {
            hamNhapDiem(ngayHienTai);
        }
    }, 2000);
    alert("Giả lập điểm thành công")
}

// Ket thuc chuc nang gia lap diem

// Chuc nang tra cuu diem

function traCuuDiem() {
    document.querySelector('.info_students--item').innerHTML = '';
    let infoHV = document.querySelector('.input_hocVien').value.trim().toUpperCase();
    let tongD_viTri = [];
    const CONST_INFO_HV = 'CONST_INFO_HV';
    const CONST_INFO_DETAIL = 'CONST_INFO_DETAIL';

    if (infoHV == "") {
        alert("Bạn phải nhập thông tin học viên!")
    } else {
        for (const nhom of Nhom) {
            tongD_viTri.push(...nhom[1]);
        }
        tongD_viTri.sort(function(a, b) { return b.totalScore - a.totalScore });
        let HVFiltered = HocVien.filter((hocVien) => {
            return hocVien.name.toUpperCase().indexOf(infoHV) > 0;
        });

        HVFiltered.forEach((hocVien, index) => {
            let hvContainHTML = '<div class="info-hv">' + CONST_INFO_HV + '</div>';
            let infoHVHTML = '<p>' + CONST_INFO_DETAIL + '</p>';
            let strInfoHV = '';
            let xepHangNhom = 0;
            let xepHangLop = 0;
            let tongDiem = 0;
            let strDiem = '';
            console.log("tongD_viTri")
            console.log(tongD_viTri)
            for (let i = 0; i < HocVien.length - 1; i++) {
                xepHangLop = (i == 0) ? i + 1 : ((tongD_viTri[i].totalScore != tongD_viTri[i - 1].totalScore) ? xepHangLop + 1 : xepHangLop);
                if (tongD_viTri[i].maHV == hocVien.id) {
                    xepHangNhom = tongD_viTri[i].viTriNhom;
                    tongDiem = tongD_viTri[i].totalScore;
                    break;
                }
            }
            hocVien.points.forEach((item, indexP) => {
                strDiem += 'Day' + " " + item.dayID + ':' + " " + item.point + (indexP != hocVien.points.length - 1 ? ' | ' : '');
            })
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'STT : ' + (index + 1))
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'Tên đầy đủ : ' + hocVien.name);
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'Nhóm : ' + hocVien.group.groupID);
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'vị trí : ' + (hocVien.group.position == 1 ? 'Nhóm trưởng' : 'Thành viên'));
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'Tổng điểm : ' + tongDiem);
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, strDiem);
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'Xếp hạng nhóm : ' + xepHangNhom);
            strInfoHV += infoHVHTML.replace(CONST_INFO_DETAIL, 'Xếp hạng lớp : ' + xepHangLop);
            hvContainHTML = hvContainHTML.replace(CONST_INFO_HV, strInfoHV);
            document.querySelector('.info_students--item').innerHTML += hvContainHTML;

        });
    }
}
// Ket thuc chuc nang tra cuu diem
init();