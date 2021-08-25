## 1. Đồng bộ, bất đồng bộ

- Đồng bộ là chạy theo trình từ trên xuống dưới, câu lệnh trước chạy xong mới đến lượt câu dưới

* Ưu điểm: dễ kiểm soát, chương trình sẽ dừng nếu có lỗi
* Nhược điểm: chương trình cần thời gian để lấy dữ liệu từ DB, đọc file, nên nếu chờ nhau thì sẽ mất nhiều thời gian

- Bất đồng bộ là: các câu lệnh chạy cùng 1 lúc, câu lệnh sau không phải chờ câu trước, nên kết quả sẽ không theo trình tự

* Ưu điểm: tối ưu được thời gian, các tác vụ cần nhiều thời gian không ảnh hưởng đến phần chính của chương trình
* Nhược điểm: khó kiểm soát code (vì các câu lệnh chạy cùng và ra kết quả không theo thứ tự)

## 2. JS đồng bộ hay bất đồng bộ

- JS là ngôn ngữ đồng bộ. Vì nó thực thi các câu lệnh từ trên xuống dưới theo trình tự
- Tuy nhiên cũng những trường hợp bất đồng bộ khi thao tác với API như: setTimeout, setInterval,...

## 3. callback

- là hàm được truyền qua đối số
- được gọi trong hàm khác

- Ưu điểm:

* Dễ hiểu
* Dễ thực hiện
* Giải quyết được bất đồng bộ

- Nhược điểm:

* Khi giải quyết bất đồng bộ thì các callback phải chờ nhau mất thời gian
* Khó bảo trì
* Dễ gây ra tình trạng các callback lồng nhau (callback hell)

- Vd:
  const myFun = (callback) => callback('Hello')
  const myCallback = (a) => console.log(a)
  myFun(myCallback)

## 4. Promise

- xử lý callback hell
- Để khai báo đối tượng promise mới:

* Dùng từ khoá new Promise() với 2 tham số truyền vào là 1 hàm với 2 tham số là 2 hàm callback: resolve và reject
* resolve gọi khi thao tác xử lý thành công
* reject gọi khi thao tác xử lý thất bại
* then() nhận callback được thực thi khi resolve(có thể có nhiều then())
* catch() nhận callback được thực thi khi reject
* finally() nhận callback trả về cuối cùng chỉ cần có resolve hoặc reject
  VD:
  const promise = (value) => new Promise((resolve, reject) => {
  if (value !== "muộn")
  setTimeout(resolve, 1000)
  else
  reject("nghỉ")
  })
  promise()
  .then(() => {
  console.log("thức dậy")
  return promise()
  })
  .then(() => {
  console.log("đánh răng")
  return promise()
  })
  .then(() => {
  console.log("ăn sáng")
  return promise("muộn")
  })
  .then(() => {
  console.log("đi làm")
  })
  .catch((result) => {
  console.log(result)
  })
  .finally(() => console.log("nghèo"))

  ### PromiseAll

* Chạy song song các promise
* Các promise không ảnh hưởng đến nhau
  VD:
  const promise1 = new Promise(resolve => setTimeout(() => resolve(['a', 'b']), 1000))
  const promise2 = new Promise(resolve => setTimeout(() => resolve(['c', 'd']), 3000))
  Promise.all([promise1, promise2])
  .then(([result1, result2]) => console.log([...result1, ...result2]))

## 5. Async/Await

### 5.1 Async

- Khai báo 1 hàm bất đồng bộ
- Biến 1 hàm thường thành 1 promise

### 5.2 Await

- Được dùng bên trong các hàm async
- Tạm dừng việc thực hiện các hàm async
- Khi đặt trước promise, nó đợi cho đến khi kết thúc promise và trả ra kết quả
- Chỉ hoạt động với promise, không hoạt động với callbacks

### 5.3 Cú pháp

- Async đặt trước 1 hàm làm cho hàm trả về promise
- Await đặt trước 1 hàm làm cho hàm chờ 1 promise
- Await chỉ được dùng bên trong 1 hàm bất đồng bộ, không thể sử dụng bên trong các hàm thường

### 5.4 Ưu điểm, nhược điểm của Async/await so với promise

- Ưu điểm:

* thực hiện tuần tự
* Code ngắn gọn, dễ nhìn
* giúp xử lý cả lỗi đồng bộ và bất đồng bộ với cùng 1 cấu trúc try catch
* khắc phục các câu lệnh điều kiện lồng nhau
* debug đơn giản hơn

- Nhược điểm:

* Thực hiện song song
* Gây mất nhiều thời gian chờ
* Dùng Promise.All để giải quyết vấn đề đó

## 6. Kết quả thực hành Freecodecamp

![kết quả es6 freecodecamp](/freecodecamp.png)
