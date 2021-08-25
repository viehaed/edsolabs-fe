# Lý thuyết

## Đồng bộ là gì? Bất đồng bộ là gì? Ưu và nhược điểm của chúng?

- Đồng bộ (sync) : chương trình chạy từng dòng từ trên xuống dưới\
Ưu điểm: dễ kiểm soát luồng chạy vì các câu lệnh được chạy lần lượt\
Nhược điểm: nếu 1 nhóm lệnh mất thời gian chạy quá lâu thì sẽ dẫn đến hiệu quả kém do việc chờ đợi
- Bất đồng bộ (async) : chạy tất cả các lệnh cùng lúc\
Ưu điểm: tối ưu thời gian chạy\
Nhược điểm: khó kiểm soát lỗi

## JS là ngôn ngữ đồng bộ hay bất đồng bộ? Tại sao?
- JS là ngôn ngữ đơn luồng và bất đồng bộ
- Tất cả lệnh sẽ chạy cùng lú, có các trường hợp sự bất đồng bộ thể hiện rõ như setTimeOut hay request lấy dữ liệu từ trang khác

## CallBack function là gì, ưu điểm, hạn chế của CallBack Function? Cho ví dụ về CallBack function.
- CallBack function là truyền một hàm(A) như một đối cho một hàm khác(B). Đến một lúc nào đó hàm callback(A) sẽ được hàm (B) gọi\
Ưu điểm: giải quyết được các trường hợp gây bất đồng bộ\
Nhược điểm: khi có quá nhiều đoạn code bất đồng bộ liền nhau sẽ gây ra tình trạng callback hell, khó debug, khó đọc
```sh
let numbers = [1, 2, 4, 7, 3, 5, 6];
function isOddNumber(number) {
    return number % 2;
}
const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]
```
- Ở ví dụ trên hàm isOddNumbres là callback
## Promise là gì, ví dụ tình huống về trường hợp nên sử dụng Promise. Các thành phần của của 1 Promise, ví dụ về Promise.
- Promise là 1 object giúp chúng ta thực hiện các hàm khác và lấy kết quả dần dần để thực hiện các thao tác lồng nhau
- Tình huống nên sử dùng promise: khi sử lí bất đồng bộ (request đến các API)
- Các thành phần của 1 promise: 1 object promise gồm có 1 hàm callback duy nhất và dối số của hàm callback là 2 callback khác (resolve và reject)
- Ví dụ:
```sh
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  console.log(value)
});
```

## Promise All là gì? Ví dụ tình huống về trường hợp sử dụng Promise All.
- Promise All là 1 hàm của object promise, nó sẽ lấy các promise làm đối truyền vào và trả ra đúng 1 promise và các kết quả của promise truyền vào tại đúng 1 thời điểm
- promise all sẽ xảy ra nếu tất cả các promise truyền vào được resolve, nếu chỉ có 1 promise reject thì promise all cũng sẽ reject
- Ví dụ sử dụng promiseall:\
Nhiều kết quả được xử lí đồng thời\
validate input

# Async - Await là gì? Cú pháp của Asyns-Await ra sao?
- async: khai báo 1 hàm bất đồng bộ\
tự động biến 1 hàm thành promise\
khi gọi tới hàm async sẽ xử lí mọi thứ và trả về kết quả trong hàm của nó
cho phép sử dụng await
- await
khi đặt trước promise, sẽ đợi đến khi promise kết thúc và trả về kết qu\ả
chỉ hoạt động với promise, not callback\
chỉ có thể được sử dụng trong các hàm async
-Cú pháp:
async: đặt trước function\
await: đặt trước promise

# Ưu và nhược điểm của Asyns - Await với Promise.
- Ưu điểm :\
dễ học, dễ đọc, dễ nhìn hơn\
có ích trong các trường hợp chạy các promise tuần tự
- Nhược điểm:\
với các trường hợp muốn chạy các promise cùng lúc thì nên dùng promise.all()
# Thực hành
![Screenshot (131).png](https://www.dropbox.com/s/rndl5clkw9oueh8/Screenshot%20%28131%29.png?dl=0&raw=1)



