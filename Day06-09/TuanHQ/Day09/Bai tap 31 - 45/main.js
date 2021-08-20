const data = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    group: {
      groupID: 1,
      position: "member",
    },
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    group: {
      groupID: 1,
      position: "member",
    },
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    group: {
      groupID: 4,
      position: "leader",
    },
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    group: {
      groupID: 3,
      position: "leader",
    },
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    group: {
      groupID: 1,
      position: "member",
    },
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    group: {
      groupID: 5,
      position: "leader",
    },
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    group: {
      groupID: 1,
      position: "leader",
    },
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 16,
    name: "Ngô Chung A Âu",
    group: {
      groupID: 4,
      position: "member",
    },
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    group: {
      groupID: 2,
      position: "leader",
    },
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
    group: {
      groupID: 4,
      position: "member",
    },
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    group: {
      groupID: 4,
      position: "member",
    },
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    group: {
      groupID: 5,
      position: "member",
    },
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    group: {
      groupID: 5,
      position: "member",
    },
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    group: {
      groupID: 5,
      position: "member",
    },
  },
];
console.log(data);

// Bài tập về xử lý chuỗi

// Bài tập 31: Viết hàm lấy ra danh sách tên các học viên trong lớp: [Sơn, Ánh...]
console.log("==============Bai 31==============");

const getNameInClass = (arr) => {
  return arr
    .map((e) => e.name)
    .map((name) => {
      const arrName = name.split(" ");
      return arrName[arrName.length - 1];
    });
};

const data_31 = getNameInClass(data);
console.log(data_31);

// Bài tập 32: Từ danh sách tên bài 31, viết hàm chuyển danh sách lớp về 1 chuỗi.
console.log("==============Bai 32==============");

const mergeName = (arr) => {
  return arr.join(" ");
};

const data_32 = mergeName(data_31);
console.log(data_32);

// Bài tập 33: Từ kết quả bài tập 32, thực hiện chuyển ngược về danh sách tên học viên như bài 31.
console.log("==============Bai 33==============");

const data_33 = data_32.split(" ");
console.log(data_33);

// Bài tập 34: Từ chuỗi gồm tên các học viên ( kết quả bài 32 ), viết hàm để đếm xem lớp có bao nhiêu bạn tên A, với A là tham số truyền vào.
console.log("==============Bai 34==============");

const countName = (strName, name) => {
  return strName.split(name).length - 1;
};

console.log(countName(data_32, "Tuấn"));
console.log(countName(data_32, "Thành"));

// Bài tập 35: Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem bạn tên A đầu tiên đứng thứ bao nhiêu trong danh sách lớp.
console.log("==============Bai 35==============");

const findFirstIndexOfName = (strName, name) => {
  return strName.split(" ").indexOf(name) + 1;
};
const name_35 = "Thành";

console.log(
  `Bạn ${name_35} đầu tiên đứng ở vị trí ${findFirstIndexOfName(
    data_32,
    name_35
  )} trong danh sách lớp`
);

// Bài tập 36: Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem bạn tên A cuối cùng đứng thứ bao nhiêu trong danh sách lớp.
console.log("==============Bai 36==============");

const findLastIndexOfName = (strName, name) => {
  return strName.split(" ").lastIndexOf(name) + 1;
};

const name_36 = "Thành";

console.log(
  `Bạn ${name_36} cuối cùng đứng ở vị trí ${findLastIndexOfName(
    data_32,
    name_36
  )} trong danh sách lớp`
);

// Bài tập 37: Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem trong lớp có bao nhiêu bạn có tên bắt đầu bằng chữ cái A, với A là tham số truyền vào. ( chú ý cả chữ hoa lẫn chữ thường )
console.log("==============Bai 37==============");

const findIndexNameStart = (strName, charStart) => {
  return strName
    .split(" ")
    .filter((name) => name.toLowerCase().startsWith(charStart.toLowerCase()));
};

const rs_36 = findIndexNameStart(data_32, "t");
console.log("Bắt đầu bằng chữ t");
console.log(rs_36.length > 0 ? rs_36.length : "Không có ai");
// Bài tập 38: Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem trong lớp có bao nhiêu bạn có tên bắt đầu bằng chữ cái A, kết thúc bằng chữ cái B, với A,B là tham số truyền vào. ( chú ý cả chữ hoa lẫn chữ thường )
console.log("==============Bai 38==============");

const findIndexNameEnd = (strName, charStart) => {
  return strName
    .split(" ")
    .filter((name) => name.toLowerCase().endsWith(charStart.toLowerCase()));
};
const rs_37 = findIndexNameEnd(data_32, "nG");
console.log("Bắt đầu bằng chữ nG");
console.log(rs_37.length > 0 ? rs_37.length : "Không có ai");
// Bài tập 39: Từ chuỗi gồm tên các bạn học viên ( kết quả bài 32 ), viết hàm tìm xem trong lớp có bao nhiêu bạn có tên chứa chữ cái A, với A là tham số truyền vào. ( chú ý cả chữ hoa lẫn chữ thường ).
console.log("==============Bai 39==============");

const countNameIncludesChar = (strName, char) => {
  return strName
    .split(" ")
    .filter((name) => name.toLowerCase().includes(char.toLowerCase()));
};

console.log("Số bạn học viên tên có chữ o");
console.log(countNameIncludesChar(data_32, "O").length);

// Bài tập 40: Từ kết quả bài tập 31, viết hàm ghép chuỗi để trả ra kết quả “Bạn Hùng, tiếp theo là bạn Ánh, tiếp theo là bạn …, cuối cùng là bạn Toàn”
console.log("==============Bai 40==============");

const mergeNameWithStringConnect = (
  arr,
  strConnectStart,
  strConnectBetween,
  strConnectEnd = null
) => {
  // giữa
  let str = arr.slice(0, arr.length - 1).join(strConnectBetween);

  // Thêm vào đầu
  str = strConnectStart + str;
  // cuối
  str = str.concat(strConnectEnd, arr[arr.length - 1]);
  console.log(str);
};

mergeNameWithStringConnect(
  data_31,
  "Bạn ",
  ", tiếp theo là bạn ",
  ", cuối cùng là bạn "
);
// Bài tập 41: Từ kết quả bài tập 32, viết hàm để chia lớp ra thành các đội, đi từ trên xuống dưới,cứ gặp ai tên là Thành thì tách tạo thành 1 đội mới. Các đội ko chứa bạn Thành.
console.log("==============Bai 41==============");

const khongChoiVoiThanh = (strName) => {
  return strName.split("Thành");
};

console.log(khongChoiVoiThanh(data_32));
// Bài tập 42: Từ kết quả bài tập 32, viết hàm để chia lớp ra thành các đội, đi từ trên xuống dưới, cứ gặp ai tên là Thành thì tách tạo thành 1 đội mới. Bạn Thành sẽ là thành viên cuối cùng của đội đang tạo.
console.log("==============Bai 42==============");

const themThanhVaoCuoi = (strName) => {
  return khongChoiVoiThanh(strName).map((team) => team.trim() + " Thành");
};

console.log(themThanhVaoCuoi(data_32));

// Bài tập 43: Từ kết quả bài tập 32, viết hàm để chia lớp ra thành các đội, đi từ trên xuống dưới, cứ gặp ai tên là Thành thì tách tạo thành 1 đội mới. Bạn Thành sẽ là thành viên đầu tiên của đội mới sẽ đc tạo.
console.log("==============Bai 43==============");
const themThanhVaoDau = (strName) => {
  return khongChoiVoiThanh(strName).map((team) => " Thành " + team.trim());
};

console.log(themThanhVaoDau(data_32));

// Bài tập 44: Từ kết quả bài tập 32, viết hàm để gấp đôi chiều dài danh sách lớp.
console.log("==============Bai 44==============");

console.log(data_32 + data_32);

// Bài tập 45: Từ kết quả bài tập 32, viết hàm để thay thế tất cả những bạn tên Dũng thành Tuấn
console.log("==============Bai 45==============");

const replaceAllName = (strName, prevName, name) => {
  return strName.replaceAll(prevName, name);
};

console.log(data_32);
console.log(replaceAllName(data_32, "Dũng", "Tuấn"));
