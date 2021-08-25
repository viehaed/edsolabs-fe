/** 
 - Đồng bộ (synchronous): chạy và thực hiện code tuần tự,Khi biên dịch, trình biên dịch sẽ thực hiện dịch lần lượt theo thứ tự từ trái qua phải,
từ trên xuống dưới, khi nào dịch xong dòng trên thì mới dịch xuống dòng dưới.
  + Ưu điểm: xủ lý tuần tự giúp code dễ sửa khi gặp lỗi
  + Nhược điểm: khi xử lý các thao tác với database, gọi req thì ứng dụng phải bỏ ra thời gian thực hiện lâu,hoặc úng dụng bị treo

- Bất đồng bộ (asynchronous) thực hiện  ko tuần tự
  + Ưu điểm: Tăng trải nhiệm người dùng, tốc độ tương tác với server nhanh
  + Nhược điểm: Khó sửa khó kiểm soát, khó tiếp cận, dễ xảy ra lỗi.

- Callback function: là khi truyền một hàm vào hàm khác, hàm này sẽ được hàm khác chứa nó gọi lại
  + hạn chế: xảy ra hiện tượng callback hell các hàm callback lồng nhau để thực hiện thao tác đồng bộ.
  + VD:
*/
function cooking(material, callback) {
  console.log(`bỏ ${material} vào cái nồi.`);
  setTimeout(function () {
    callback();
  }, 1000);
}

function alertFinished() {
  let temp = Math.floor(Math.random() * 2) == 1;
  if (temp) {
    console.log("đã chín");
  } else {
    console.log("chưa chín");
  }
}
cooking("khoai", alertFinished);

/** 
- Promise: là lời hứa mà hứa nhiều thì cũng hay thất hứa. Promise dùng để xử lý các thao tác bất đồng bộ, giúp code chạy đồng bộ.
  + hạn chế: giống với callback cũng bị hell nhưng tường minh hơn, dễ đọc hơn
  + VD:
*/
function cookingInstructions(material) {
  return new Promise((resolve, reject) => {
    if (material == "tép") {
      let mess = "bị dị ứng";
      reject(mess);
    }
    resolve(material);
  });
}

cookingInstructions("khoai")
  .then((res) => {
    console.log(`bỏ ${res} vào nồi`);
    return `vớt ${res} ra đĩa`;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/** 
- Promise All: là tập hợp nhiều Promise và giải quyết kết quả của chúng để trả ra một Promise. 
  + VD:
*/
const p1 = cookingInstructions("khoai");
const p2 = cookingInstructions("sắn");
const p3 = cookingInstructions("tép");

Promise.all([p1, p2]).then((o) => console.log(o));
Promise.all([p1, p2, p3]).then((o) => console.log(o));
