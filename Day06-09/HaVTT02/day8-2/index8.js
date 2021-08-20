var listStudent =[
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
// Bài 31
console.log('Bài 31')

const listNames = listStudent.map((l) => l.name.split(" ").pop());
console.log(listNames)

// Bài 32
console.log('Bài 32')

const stringNames = listNames.join(" ");
console.log(stringNames)

// Bài 33
console.log('Bài 33')

const list = stringNames.split(" ");
console.log(list)

// Bài 34
console.log('Bài 34')

// function bai34(){
//     const dem = stringNames.toString();
//     console.log(dem.split("Hà").length - 1);
// }
// bai34()

function bai34(name){
    const namse = name.trim().toUpperCase();
    return stringNames.split(" ").filter((item) => item.toUpperCase() === namse).length;
};
console.log("Có", bai34('Hà'), " bạn tên đã nhập")


// Bài 35
console.log('Bài 35')

function firstIdName(name){
    const i = stringNames.split(" ").findIndex((item) => {
      return item.toUpperCase() === name.trim().toUpperCase();
    });
    return listStudent[i].id;
  };
console.log("Vị trí đầu tiên xuất hiện: ", firstIdName('Hà'))

// Bài 36
console.log('Bài 36')

function idName(name){
    const x = stringNames.toUpperCase().split(" ").lastIndexOf(name.trim().toUpperCase());
    return listStudent[x].id;
  };
  console.log("Vị trí cuối cùng xuất hiện: ", idName('Hà'))

// Bài 37
console.log('Bài 37')

function charFirst(character){
    return stringNames.toUpperCase().split(" ").filter((item) => item.startsWith(character.toUpperCase().trim())).length;
};
console.log("Có ", charFirst('H'), " bạn bắt đầu bằng ký tự đã nhập")

// Bài 38
console.log('Bài 38')

function nameChar(charFirst, charLast){
    return stringNames.toUpperCase().split(" ").filter((item) => 
    item.startsWith(charFirst.toUpperCase().trim()) && item.endsWith(charLast.toUpperCase().trim())).length;
};
console.log("Có ", nameChar('h','à'), " bạn bắt đầu và kết thúc bằng ký tự đã nhập")

// Bài 39
console.log('Bài 39')

function charInName(char){
    return stringNames.toUpperCase().split(" ").filter((item) => 
    item.toUpperCase().includes(char.toUpperCase().trim())).length;
};
console.log("Có ", charInName('h'), " bạn chứa ký tự đã nhập")

// Bài 40
console.log('Bài 40');

function str(){
    return listNames.map((name, index) => {
        if (index === 0) {
          return `Bạn ${name}`;
        }
        if (index === listNames.length - 1) {
          return `, cuối cùng là bạn ${name}`;
        }
        return `, tiếp theo là bạn ${name}`;
    }).join("");
  };
console.log(str());

// Bài 41
console.log('Bài 41');

console.log(stringNames.toUpperCase().split('THÀNH'));

// Bài 42
console.log('Bài 42');

const endThanh = stringNames.toUpperCase().split(/(?<=THÀNH)\s/);
console.log(endThanh)

// Bài 43
console.log('Bài 43')

const startThanh = stringNames.toUpperCase().split(/\s(?=THÀNH)/);
console.log(startThanh)

// Bài 44
console.log('Bài 44');

console.log(stringNames.repeat(2))

// Bài 45
console.log('Bài 45');

console.log(stringNames.replace("Dũng", "Tuấn"));