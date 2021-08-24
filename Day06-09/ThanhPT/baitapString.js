const people = [
    {
      id: 1,
      name: "Nguyễn Văn Sơn",
      groupId: 1,
      position: "member",
    },
    {
      id: 2,
      name: "Nguyễn Hữu Ánh",
      groupId: 1,
      position: "member",
    },
    {
      id: 3,
      name: "Trần Mạnh Quân",
      groupId: 4,
      position: "monitor",
    },
    {
      id: 4,
      name: "Hà Quốc Tuấn",
      groupId: 3,
      position: "monitor",
    },
    {
      id: 5,
      name: "Hoàng Ngọc Thành",
      groupId: 1,
      position: "member",
    },
    {
      id: 6,
      name: "Vũ Thị Thu Hà",
      groupId: 2,
      position: "member",
    },
    {
      id: 7,
      name: "Phan Văn Trung",
      groupId: 2,
      position: "member",
    },
    {
      id: 8,
      name: "Nguyễn Cao Hoàng",
      groupId: 2,
      position: "member",
    },
    {
      id: 9,
      name: "Phùng Đắc Nhật Minh",
      groupId: 5,
      position: "monitor",
    },
    {
      id: 10,
      name: "Lê Việt Dũng",
      groupId: 1,
      position: "monitor",
    },
    {
      id: 11,
      name: "Đỗ Chí Công",
      groupId: 2,
      position: "member",
    },
    {
      id: 12,
      name: "Trần Công Tâm",
      groupId: 3,
      position: "member",
    },
    {
      id: 13,
      name: "Trương Thanh Tùng",
      groupId: 3,
      position: "member",
    },
    {
      id: 14,
      name: "Tạ Đức Chiến",
      groupId: 3,
      position: "member",
    },
    {
      id: 15,
      name: "Nguyễn Trọng Vĩnh",
      groupId: 3,
      position: "member",
    },
    {
      id: 16,
      name: "Ngô Chung Á Âu",
      groupId: 4,
      position: "member",
    },
    {
      id: 17,
      name: "Trần Thị Khánh Linh",
      groupId: 2,
      position: "monitor",
    },
    {
      id: 18,
      name: "Phan Tiến Thành",
      groupId: 4,
      position: "member",
    },
    {
      id: 19,
      name: "Đỗ Văn Huy",
      groupId: 4,
      position: "member",
    },
    {
      id: 20,
      name: "Nguyễn Trung Đức",
      groupId: 5,
      position: "member",
    },
    {
      id: 21,
      name: "Nguyễn Trung Nam",
      groupId: 5,
      position: "member",
    },
    {
      id: 22,
      name: "Trần Quốc Toàn",
      groupId: 5,
      position: "member",
    },
  ];

  /**bai 31 
   *  Viết hàm lấy ra danh sách tên các học viên trong lớp: [Sơn, Ánh...]
   */

  const nameAll = people.map((item)=> item.name.split(' ').pop());
//   console.log(nameAll);

  /**bai 32 Từ danh sách tên bài 31, viết hàm chuyển danh sách lớp về 1 chuỗi.
 */
  const arrString = nameAll.join(' ');
//   console.log(arrString);

/** bai 33
 *   Từ kết quả bài tập 32, thực hiện chuyển ngược về danh sách tên học viên như bài 31*/
const stringArr = arrString.split(' ')
// console.log(stringArr);

/** bai 34
 * Từ chuỗi gồm tên các học viên ( kết quả bài 32 ), viết hàm để đếm xem lớp có bao
 * nhiêu bạn tên A, với A là tham số truyền vào
 */

const countStudent = (arr) => {
    const countS= nameAll.filter((item)=> item===arr);
    return countS.length;
}
// console.log(countStudent("Thành"));

/** bài 35 
 * Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem bạn tên A
 * đầu tiên đứng thứ bao nhiêu trong danh sách lớp.
 */

const findStudent= (arr) => nameAll.indexOf(arr)+1;

// console.log(findStudent("Thành"));

/** 
 * bài 36 
 * : Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem bạn tên A
cuối cùng đứng thứ bao nhiêu trong danh sách lớp.
 */
const lastName = (arr) => nameAll.lastIndexOf(arr)+1;
// console.log(lastName("Thành"));

/**bài 37 
 * : Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem trong lớp có
bao nhiêu bạn có tên bắt đầu bằng chữ cái A, với A là tham số truyền vào. ( chú ý cả chữ hoa
lẫn chữ thường )
 */

const countString1 = (arr) =>{
    const check = nameAll.filter((item)=> item.startsWith(arr));
    return check.length;
}
// console.log(countString1("T"));

/**bài 38 
 * Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem trong lớp có
bao nhiêu bạn có tên bắt đầu bằng chữ cái A, kết thúc bằng chữ cái B, với A,B là tham số
truyền vào. ( chú ý cả chữ hoa lẫn chữ thường )
 */

const countString2 = (arr,last) =>{
    const check = nameAll.filter((item)=> item.startsWith(arr) && item.endsWith(last))
    return check.length;
};
console.log(countString2("T","h"));

/**bài 39 
 * Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem trong lớp có
bao nhiêu bạn có tên chứa chữ cái A, với A là tham số truyền vào. ( chú ý cả chữ hoa lẫn chữ
thường ).

 */

const countString3 = (arr) =>{
    const check = nameAll.filter((item)=> item.includes(arr));
    return check.length;
}

// console.log(countString3("nh"));

/**bài 40 
 * Từ kết quả bài tập 31, viết hàm ghép chuỗi để trả ra kết quả “Bạn Hùng, tiếp theo là
bạn Ánh, tiếp theo là bạn …, cuối cùng là bạn Toàn”
 */

// const connectString = nameAll.map((item)=>("bạn ").concat(item))
// console.log(connectString);

const connectString = () => {
  return nameAll
    .map((name, index) => {
      if (index === 0) {
        return `Bạn ${name}`;
      }
      if (index === nameAll.length - 1) {
        return `, cuối cùng là bạn ${name}`;
      }
      return `, tiếp theo là bạn ${name}`;
    })
    .join("");
};

/** bài 41 
 * Từ kết quả bài tập 32, viết hàm để chia lớp ra thành các đội, đi từ trên xuống dưới,
cứ gặp ai tên là Thành thì tách tạo thành 1 đội mới. Các đội ko chứa bạn Thành.
*/

const newGroup = ()=> arrString.toUpperCase().split("THÀNH");
console.log(newGroup());
console.log('---bai41----');



/** bài 42 
 * Từ kết quả bài tập 32, viết hàm để chia lớp ra thành các đội, đi từ trên xuống dưới,
cứ gặp ai tên là Thành thì tách tạo thành 1 đội mới. Bạn Thành sẽ là thành viên cuối cùng của
đội đang tạo
*/

const bai42 = ()=> {
    return arrString.split("Thành").map((item, index) => {
        let team = item.trim().split(" ");
        team.push("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    })
}

/**bai 43 
 * Từ kết quả bài tập 32, viết hàm để chia lớp ra thành các đội, đi từ trên xuống dưới,
cứ gặp ai tên là Thành thì tách tạo thành 1 đội mới. Bạn Thành sẽ là thành viên đầu tiên của đội
mới sẽ đc tạo
 */

const bai43 = ()=> {
  return arrString.split("Thành").map((item, index) => {
      let team = item.trim().split(" ");
      team.unshift("Thành")
      return `Đội ${index +1} gồm :[${team.join(", ")}],`
  })
}
console.log(bai43());

/**bai 44
 * Từ kết quả bài tập 32, viết hàm để gấp đôi chiều dài danh sách lớp.
 */

const bai44 = ()=> arrString.repeat(2);
// console.log(bai44());

/**bai 45
 * Từ kết quả bài tập 32, viết hàm để thay thế tất cả những bạn tên Dũng thành Tuấn
 */

const bai45 = ()=> arrString.replace("Dũng", "Tuấn")
// console.log(bai45());

