var listStudent = [
    {
      id: 1,
      name: "Nguyễn Văn Sơn",
      group : {
          groupid: 1,
          position: "member",
      }
    },
    {
      id: 2,
      name: "Nguyễn Hữu Ánh",
      group : {
          groupid: 1,
          position: "member",
      }
    },
    {
      id: 3,
      name: "Trần Mạnh Quân",
      group : {
        groupid: 4,
        position: "leader",
      }
    },
    {
      id: 4,
      name: "Hà Quốc Tuấn",
      group : {
        groupid: 3,
        position: "leader",
      }
    },
    {
      id: 5,
      name: "Hoàng Ngọc Thành",
      group : {
          groupid: 1,
          position: "member",
      }
    },
    {
      id: 6,
      name: "Vũ Thị Thu Hà",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 7,
      name: "Phan Văn Trung",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 8,
      name: "Nguyên Cao Hoàng",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 9,
      name: "Phùng Đắc Nhật Minh",
      group : {
        groupid: 5,
        position: "leader",
      }
    },
    {
      id: 10,
      name: "Lê Việt Dũng",
      group : {
        groupid: 1,
        position: "leader"
      }
    },
    {
      id: 11,
      name: "Đỗ Chí Công",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 12,
      name: "Trần Công Tâm",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 13,
      name: "Trương Thanh Tùng",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 14,
      name: "Tạ Đưc Chiến",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 15,
      name: "Nguyễn Trọng Vĩnh",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 16,
      name: "Ngô Chúng Á Âu",
      group : {
          groupid: 4,
          position: "member",
      }
    },
    {
      id: 17,
      name: "Trần Thị Khánh Linh",
      group : {
        groupid: 2,
        position: "leader",
      }
    },
    {
      id: 18,
      name: "Phan Tiến Thành",
      group : {
          groupid: 4,
          position: "member",
      }
    },
    {
      id: 19,
      name: "Đỗ Văn Huy",
      group : {
          groupid: 4,
          position: "member",
      }
    },
    {
      id: 20,
      name: "Nguyễn Trung Đức",
      group : {
          groupid: 5,
          position: "member",
      }
    },
    {
      id: 21,
      name: "Nguyễn Trung Nam",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 22,
      name: "Trần Quốc Toàn",
      group : {
          groupid: 5,
          position: "member",
      }
    },
  ];
  // Câu 31
const listNames = listStudent.map((l) => l.name.split(" ").pop());
console.log(listNames)

// Câu 32
const stringNames = listNames.join(" ");
console.log(stringNames)

// Câu 33
const list = stringNames.split(" ");
console.log(list)

// Câu 34
// function cau34(){
//     const dem = stringNames.toString();
//     console.log(dem.split("Công").length - 1);
// }
// bai34()

function cau34(name){
    const namse = name.trim().toUpperCase();
    return stringNames.split(" ").filter((item) => item.toUpperCase() === namse).length;
};
console.log("Có", cau34('Công'), " bạn tên đã nhập")


// Câu 35

function firstIdName(name){
    const i = stringNames.split(" ").findIndex((item) => {
      return item.toUpperCase() === name.trim().toUpperCase();
    });
    return listStudent[i].id;
  };
console.log("Vị trí đầu tiên xuất hiện: ", firstIdName('Công'))

// Câu 36
function idName(name){
    const x = stringNames.toUpperCase().split(" ").lastIndexOf(name.trim().toUpperCase());
    return listStudent[x].id;
  };
  console.log("Vị trí cuối cùng xuất hiện: ", idName('Công'))

// Câu 37
function charFirst(character){
    return stringNames.toUpperCase().split(" ").filter((item) => item.startsWith(character.toUpperCase().trim())).length;
};
console.log("Có ", charFirst('C'), " bạn bắt đầu bằng ký tự đã nhập")

// Câu 38
function nameChar(charFirst, charLast){
    return stringNames.toUpperCase().split(" ").filter((item) => 
    item.startsWith(charFirst.toUpperCase().trim()) && item.endsWith(charLast.toUpperCase().trim())).length;
};
console.log("Có ", nameChar('c','ô'), " bạn bắt đầu và kết thúc bằng ký tự đã nhập")

// Câu 39
function charInName(char){
    return stringNames.toUpperCase().split(" ").filter((item) => 
    item.toUpperCase().includes(char.toUpperCase().trim())).length;
};
console.log("Có ", charInName('d'), " bạn chứa ký tự đã nhập")

// Câu 40
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

// Câu 41
console.log(stringNames.toUpperCase().split('THÀNH'));

// Câu 42
const endThanh = stringNames.toUpperCase().split(/(?<=THÀNH)\s/);
console.log(endThanh)

// Câu 43
const startThanh = stringNames.toUpperCase().split(/\s(?=THÀNH)/);
console.log(startThanh)

// Câu 44
console.log(stringNames.repeat(2))

// Câu 45
console.log(stringNames.replace("Dũng", "Tuấn")); 