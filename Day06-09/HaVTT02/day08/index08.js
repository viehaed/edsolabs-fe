// Bài 21
var List =[
    {id: 1, name: "Nguyễn Văn Sơn", group : {groupId: 1, "position":""}}, 
    {id: 2, name: "Nguyễn Hữu Ánh", group : {groupId: 1, "position":""}},
    {id: 3, name: "Trần Mạnh Quân", group : {groupId: 4, "position":"Nhóm trưởng"}},
    {id: 4, name: " Hà Quốc Tuấn", group : {groupId: 3, "position":"Nhóm trưởng"}},
    {id: 5, name: "Hoàng Ngọc Thành", group : {groupId: 1, "position":""}},
    {id: 6, name: "Vũ Thị Thu Hà", group : {groupId: 2, "position":""}},
    {id: 7, name: "Phan Văn Trung", group : {groupId: 2, "position":""}},
    {id: 8, name: "Nguyễn Cao Hoàng", group : {groupId: 2, "position":""}},
    {id: 9, name: "Phùng Đắc Nhật Minh", group : {groupId: 5, "position":"Nhóm trưởng"}},
    {id: 10, name: "Lê Việt Dũng", group : {groupId: 1, "position":"Nhóm trưởng"}},
    {id: 11, name: "Đỗ Chí Công", group : {groupId: 2, "position":""}},
    {id: 12, name: "Trần Công Tâm", group : {groupId: 3, "position":""}},
    {id: 13, name: "Trương Thanh Tùng", group : {groupId: 3, "position":""}},
    {id: 14, name: "Tạ Đức Chiến", group : {groupId: 3, "position":""}},
    {id: 15, name: "Nguyễn Trọng Vĩnh", group : {groupId: 3, "position":""}},
    {id: 16, name: "Ngô Chung Á Âu", group : {groupId: 4, "position":""}},
    {id: 17, name: "Trần Thị Khánh Linh", group : {groupId: 2, "position":"Nhóm trưởng"}},
    {id: 18, name: "Phan Tiến Thành", group : {groupId: 4, "position":""}},
    {id: 19, name: "Đỗ Văn Huy", group : {groupId: 4, "position":""}},
    {id: 20, name: "Nguyễn Trung Đức", group : {groupId: 5, "position":""}},
    {id: 21, name: "Nguyễn Trung Nam", group : {groupId: 5, "position":""}},
    {id: 22, name: "Trần Quốc Toàn", group : {groupId: 5, "position":""}}
]
console.log(List)

// Bài 22
function inputName(x){
    var member = List.sort(() => 0.5 - Math.random());
    var select = member.slice(0, x);
    var listName = select.map(l => l.name);
    console.log(listName);
}
inputName(3)

// Bài 23
function nameMember(x){
    var member = List.filter(function(member, index){
        return member.group.groupId === x;
    });
    var listName = member.map(({ name }) => {
        var lastName = name.split(" ");
        return lastName[lastName.length - 1];
    });
    console.log(listName)
}
nameMember(2);

// Bài 24
var add = (id, dayID, point) =>{
    var member = List.find(l => l.id === id);
    if (!member.points){
        member.points = [];
    }
    member.points.push({
        dayID,
        //dayName: 'thứ ' + Math.floor((Math.random() * 7) + 1),
        dayName: 'ngày ' + Math.floor((Math.random() * 31) + 1),
        point,
    });
    console.log(member);
}
add(6, 01, 6)

// Bài 25

var addPoints = (id, dayName, point) =>{
    var memberInfo = List.find( o => o.id === id); //tìm trong list duyệt xem id nào trùng với mã học viên
    if (!memberInfo.points){
        memberInfo.points = []// kiểm tra đk và khởi tạo mảng trong points
    }
    memberInfo.points.push({
        dayID : d,
        dayName,
        point,
    })
}
function point(x){
    for(d = 2; d <= x; d++){
        for(var i = 2; i <= List.length; i++){
            addPoints(i, 'Thứ ' + d, Math.floor(Math.random()*4)+6)
        }
    }
    console.log(List);
}
point(4)


// Bài 26
var sumPoint = (x, y) => {
    var list = JSON.parse(JSON.stringify(List));
    var temp = list.map((member) => {
        var totalPoint = member.points.reduce((total, item) => {
            var {dayName, point} = item;
            var dayNumber = parseInt(dayName.split(" ").pop());
            if(dayNumber >= x && dayNumber <= y){
                return total + point;
            }
            return total;
        }, 0);
        member.totalPoint = Math.ceil(totalPoint * 100) / 100;
        return member;
    });
    return temp;
}
sumPoint(1, 6)

// Bài 27
function pointMax(x, y){
    var top = sumPoint(x, y);
    top.sort((a,b) => b.totalPoints - a.totalPoints)
    console.log(top.slice(0,5));
}
pointMax(1, 8)

// Bài 28
function listPoint(x, y, z){
    var newArr = sumPoint(x, y);
    console.log(newArr);
    var students = newArr.filter(item => {
        var flag = false;
        for(let i = x; i<= y; i++){
            if(item.points[i-2].point === z){
                flag = true;
            }
        }
        return flag;
    })
    return students.map(item => {
        return{
            id: item.id,
            name: item.name,
            totalPoint: item.sums
        }
    })
}
console.log(listPoint(1,8,7))


