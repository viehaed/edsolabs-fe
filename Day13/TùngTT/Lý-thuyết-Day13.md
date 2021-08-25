## Bài tập Day 12
## Đồng bộ là gì? Bất đồng bộ là gì? Ưu và nhược điểm của chúng?
- Đồng bộ: dòng code được chạy tuần tự theo trình tự đã viết từ trên xuống dưới, code dưới chỉ chạy khi code ở dòng trên thực hiện xong
-- Ưu điểm: Code sẽ được thực thi tuần tự, đúng về tiến trình, dễ phát hiện lỗi
-- Nhược điểm: Sinh tra các trạng thái chờ không cần thiết, có thể gây tràn bộ nhớ
- Bất đồng bộ: dòng code trên có thể chưa chạy xong thì đoạn code bên dưới có thể chạy
-- Ưu điểm: Xử lí nhiều công việc cùng một lúc 
-- Nhược điểm: khó quản lý quy trình chạy

## JavaScript là ngôn ngữ bất đồng bộ hay đồng bộ?
- JS cơ bản có thể coi là đồng bộ đối với việc thưc hiện các các cấu trúc vòng lặp tại thời điểm đó chỉ có một hoạt động xảy ra. Nhưng thực chất là ngôn ngữ bất đồng bộ khi nó xử lý một số chức năng ví dụ như đọc ghi file, setTimeOut,.. gửi request


## Callback Funtion là gì? Ưu nhược điểm. Cho ví dụ
- Callback function là có một đoạn code A, ta truyền nó vào một đoạn code B nào đó. Việc gọi hàm A trong hàm B là callback function
--Ưu điểm: giải quyết trường hợp gây bất đồng bộ
-- Nhược điểm: có thể gây ra callback hell, đó là nhiều hàm callback lồng nhau

```sh
let text = 'Tùng'
function sayHello(name) {
    let hello = 'Xin chào ' + name
    return hello
}
const printSayHello = =sayHello(text)
console.log(printSayHello); //Xin chào Tùng
```
- Ở ví dụ trên hàm sayHello là callback
##  Promise là gì, ví dụ tình huống về trường hợp nên sử dụng Promise. Các thành phần của của 1 Promise, ví dụ về Promise.
- Promise là một object giúp thực thi, xử lý bất đồng bộ mà không rơi vào callback hell
-- Tình hướng sử dụng Promise: xử lí bất đồng bộ
- Thành phần của một Promise: 
-- Gồm một hàm callback nhận một đối số là resole và reject. Resole sẽ trả về kết quả nếu Promise được thực hiện thành công. Reject sẽ được thực hiện khi Promise không thành công
```sh
var checkNumber = function(x) {
    return new Promise((resolve,reject) => {
        if(x === 10)
           return resolve();
        else {
            return reject();
        }
    })
}
checkNumber(10).then(function() { 
  console.log("Số 10 nè") // Số 10 nè
}).catch(function() {
  console.log("Số gì đâu phải 10") // Hàm này không cho ra kết quả vì x = 10
})
```
## Promise All là gì? Ví dụ tình huống về trường hợp sử dụng Promise All.
- Promise All là 1 hàm của object promise, nó sẽ lấy các promise làm đối truyền vào và trả ra đúng 1 promise và các kết quả của promise truyền vào tại đúng 1 thời điểm
- promise all sẽ xảy ra nếu tất cả các promise truyền vào được resolve, nếu chỉ có 1 promise reject thì promise all cũng sẽ reject
- Ví dụ sử dụng promiseall:
-- Nhiều kết quả được xử lí đồng thời
-- validate input
## Async - Await là gì? Cú pháp của Asyns-Await ra sao?
Async - Await là một cơ chế giúp xử lý bất đồng bộ tuần tự hơn
- async: khai báo 1 hàm bất đồng bộ
--tự động biến 1 hàm thành promise
--khi gọi tới hàm async sẽ xử lí mọi thứ và trả về kết quả trong hàm của nó
--cho phép sử dụng await
- await
--khi đặt trước promise, sẽ đợi đến khi promise kết thúc và trả về kết quả
--chỉ hoạt động với promise, not callback
--chỉ có thể được sử dụng trong các hàm async
-Cú pháp:
-- async: đặt trước function
-- await: đặt trước promise