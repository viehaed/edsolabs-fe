# Homework Day 13
 
    Synchronous (đồng bộ) là một quy trình xử lý các công việc theo một thứ tự đã được lập sẵn. Công việc sau được bắt đầu thực hiện chỉ khi công việc thứ nhất hoàn thành. Quá trình đồng bộ là một quá trình rất phổ biến trong thực tế nó được xảy ra 1 cách tuần tự từ trên xuống dưới.
    
    Trong Javascript hay những ngôn ngữ lập trình như Java , C# ,..., một chương trình đồng bộ là một chương trình được thực hiện theo từng câu lệnh từ trên xuống dưới, từ trái qua phải, câu lệnh sau được thực hiện chỉ khi câu lệnh trước đã hoàn thành.Vì thế chỉ cần biên dịch một câu lệnh sai là cả chương trình sẽ dừng lại và báo lỗi.

    ------------------------------------------
    Asynchronous (bất đồng bộ), nhiều công việc có thể được thực hiện cùng lúc. Và nếu công việc thứ hai kết thúc trước, nó có thể sẽ cho ra kết quả trước cả câu lệnh thứ nhất. Vì thế, đôi khi kết quả của các câu lệnh sẽ không trả về đúng theo đúng thứ tự như trực quan của nó

[JsonML]: http://jsonml.org/ "JSON Markup Language"

## Ưu và nhược điểm giữa đồng bộ và bất đồng bộ



   * Lập trình đồng bộ có ưu điểm là chương trình sẽ chạy theo đúng thứ tự từ trên xuống, và sẽ phát dừng lại ngay khi gặp một câu lệnh lỗi. Điều này sẽ khiến chương trình dễ kiểm soát và dễ phát hiện ra lỗi hơn


   * Lập trình đồng bộ cũng có một nhược điểm là hiệu suất chương trình sẽ chậm. Có rất nhiều câu lệnh cần phải thao tác với các dữ liệu bên ngoài nên nó cần có một thời gian chờ để nhận được dữ liệu trước khi hoạt động bình thường.Do đó thời gian chờ để thực hiện sẽ kéo dài và mất thời gian hơn chưa kể đoạn code đó có bị lỗi hay không
   * Lập trình không đồng bộ có cách để giải quyết vấn đề trên. Chúng cho phép các hành động được thực hiện cùng lúc. Do đó, sẽ tối ưu được thời gian chờ của các câu lệnh vì các câu lệnh sẽ được “chờ cùng nhau”.
   * Tuy nhiên, lập trình không đồng bộ cũng có nhược điểm. Do các câu lệnh không đồng bộ có thể sẽ không được thực hiện theo đúng thứ tự từ trên xuống theo quy trình nên đòi hỏi chúng ta cần có các kỹ thuật để kiểm soát chúng

    

  ## JS là ngôn ngữ đồng bộ hay bất đồng ?Tạisao?
## ------------------------------------------------

    Theo em tìm hiểu thì Javascript là ngôn ngữ lập trình bất đồng bộ và chỉ chạy trên một luồng. Sự bất đồng bộ trong javascript xuất hiện khi nó thao tác với các WebAPI (ajax, setTimeout(),...). Khi một câu lệnh thao tác với WebAPI, nó sẽ mất một khoảng thời gian để chờ các dữ liệu trả về từ WebAPI, do đó ở trong luồng chính của javascript, nó sẽ ở trong trạng thái chờ

## Callback
## ------------------------------------------
```bash
# Định nghĩa
Callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong hay là một cách để đảm bảo code nhất định không thực thi cho đến khi code khác thực hiện xong.

# Ví dụ về Callback function
function first(){
    setTimeout( function(){
        console.log("Một");
    }, 5000 );
}
function second(){
    console.log("Hai");
}

# Kết quả
// Hai
// Một

Kết quả #second chạy trước #first vì hàm setTimeout đợi request sau 5s mới phản hồi cho nên second sẽ chạy trước và cho ra kết quả . Một ví dụ cho thấy sự bất đồng bộ trong JS (nghĩa là trong thời gian chờ vẫn sẽ tiếp tục chương trình :) )

```

## Promise
## ------------------------------------------
```bash
# Định nghĩa
Promise là một cơ chế trong JavaScript giúp  thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell , là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng. Các tác vụ bất đồng bộ có thể là gửi AJAX request, gọi hàm bên trong setTimeout, setInterval hoặc requestAnimationFrame,...

* Khi một Promise được khởi tạo thì nó có một trong ba trạng thái sau:

# Các trạng thái của Promise

Unresolved or Pending - Promise đang chờ xử lý nếu kết quả chưa sẵn sàng. Khi đó, nó đang chờ một thứ gì đó kết thúc (Ví dụ hoạt động bất đồng bộ).
Resolved or Fulfilled - Promise được giải quyết nếu có kết quả. Đó là một cái gì đó đã hoàn thành (ví dụ: hoạt động không đồng bộ) và tất cả đều diễn ra tốt đẹp.
Rejected - Promise bị từ chối nếu xảy ra lỗi. Bây giờ chúng ta đã biết Promise là gì và thuật ngữ Promise, hãy quay trở lại khía cạnh thực tế của Promise
*  (Theo như em hiểu thì pending sẽ là request gửi lên và trả về reject hoặc fulfilled )

# Các hàm xử lý của Promise
.then() : Khi kết quả trả về là đúng theo yêu cầu (Resolved or Fulfilled)
.catch() : Khi kết quả trả về là sai (reject hoặc pending chờ 1 yêu cầu khác ) theo yêu cầu
.finally() :Phương thức finally() sẽ trả về một Promise. Khi kết quả trả về của promise là fulfilled (hoàn thành) hay rejected (từ chối) thì đoạn code trong hàm callback của finally cũng sẽ được thực thi.
# Ví dụ về Promise function
 function soChan(soTruyenVao) {
  return new Promise(function (resolve, reject){
   if(soTruyenVao%2 == 0) {
     resolve(soTruyenVao + " là số chẵn.");
   } else {
      reject(soTruyenVao + " là số lẻ.");
   }
 });
 }
 let kiemTra = soChan(12);
kiemTra.finally(() => console.log("Kết quả sẽ có sau 3s"));
 kiemTra.then(
	 result => console.log(result)
	 );
kiemTra.catch(
	 error => console.log(error)
);

# Kết quả
// 12 la so chan

```

## Promise all
## ------------------------------------------
```bash
# Định nghĩa
Phương thức này nhận vào một mảng các promises và chỉ resolve khi tất cả các promises này hoàn thành, hoặc reject khi một trong số chúng xảy ra lỗi. Trong trường hợp có lỗi xảy ra, tất cả các promise khác dù đã kết thúc hay chưa thì đều không được quan tâm nữa.

# Ví dụ về Promise all function
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

# Kết quả
// Array [3, 42, "foo"]

```

## Async/Await
## ------------------------------------------
```bash
# Định nghĩa
Async / Await là một tính năng của JavaScript giúp làm việc với các hàm bất đồng bộ theo cách dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API.

Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ()😉.

Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
Await chỉ có thể được sử dụng bên trong các function async.

# Ví dụ về cú pháp Async/Await
async function hello() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Hello World!');
}
hello();

# Ưu và nhược điểm của async/await với promise
# Ưu điểm
Code ngắn và sạch hơn
Async/Await là một cơ chế giúp thực hiện các thao tác bất đồng bộ một cách tuần tự hơn. Async/await vẫn sử dụng Promise ở bên dưới nhưng mã nguồn  (theo một cách nào đó) sẽ hiểu hơn
# Nhược điểm
Ngoài ra, có những trường hợp mà Async / Await không sử dụng được và chúng ta phải sử dụng Promises. Ví dụ như khi cần gọi nhiều thao tác bất đồng bộ và chờ cho tất cả chúng kết thúc thì sẽ mất nhiều thời gian đó là 1 nhược điểm của async/await.
```