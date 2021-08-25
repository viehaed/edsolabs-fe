># Day13: Tìm hiểu Callback, Promise, Async-Await #

Các nhóm tìm hiểu lý thuyết về :
Đồng bộ là gì? Bất đồng bộ là gì? Ưu và nhược điểm của chúng?
JS là ngôn ngữ đồng bộ hay bất đồng bộ? Tại sao?
CallBack function là gì, ưu điểm, hạn chế của CallBack Function? Cho ví dụ về CallBack function.
Promise là gì, ví dụ tình huống về trường hợp nên sử dụng Promise. Các thành phần của của 1 Promise, ví dụ về Promise.
Promise All là gì? Ví dụ tình huống về trường hợp sử dụng Promise All.
Phần nâng cao
Async - Await là gì? Cú pháp của Asyns-Await ra sao?
Ưu và nhược điểm của Asyns - Await với Promise.


> ## Trả Lời
///////////////////////////
> ### Đồng bộ và bất đồng bộ
*  đồng bộ là gì 
    -là code được chạy tuần tự theo trình tự đã viết sãn từ trên xuống dưới, code bên dưới là chỉ chạy khi code ở trên đã chạy xong và trả ra kết quả
*  bất đồng bộ
    -là code phía dưới có thể chạy dù code bên trên chưa thực thi hoặc trả về kết quả
*  ưu điểm và nhược điểm của đông bộ
    -là code chạy tuần tự từ trên xuống dưới và dễ debug nhưng lại mất thời gian vì phải chở code ở trên thực thi xong thì mới chạy code ở dưới
* ưu điểm và nhược điểm của bất đồng bộ
    là code chạy không tuần tự có thể đẩy nhanh tốc độ trả về kết quả vì không phải chờ code trên, 
*  JS là ngôn ngữ đồng bộ hay bất đồng bộ? Tại sao?
     javascritp là ngôn ngữ lập trình bất đồng bộ bất đồng bộ và là ngôn ngữ xử lý đơn luồng.
     tại vì khi chạy code của javascript sẽ không chờ code phía trên chạy xong nếu chưa chạy xong thì nó sẽ đẩy code chờ lên browser chờ rồi chạy code sau
    

>  ### callback ###
* callback là gì
    - callback là một func sẽ được thực thi trong một func khác đã được thì xong
    - vì trong javascript func cũng là một object nên nó có thể nhận dưới tham số dưới dạng func và cũng có thể trả ra dưới dạng func 

* tại sao lại cần callback 
  - vì javascript là một ngôn ngữ lập trình bất đồng bộ và chạy đơn luồng, vì vậy khi thực thi thay vì chờ đợi phản hồi thì nó sẽ đẩy những việc chưa xong lên browser ,và thực hiện công việc tiếp theo sau khi công việc phía sau đã thực hiện xong mới gọi về luồng
  - mục đích của callback là đảm bảo code sẽ không hoạt động trước khi các code khác hoàn thành việc thực thi
* ưu điểm của callback
   - giúp code có thể chạy đồng bộ trong javascript
*  hạn chế của callback
   - khi thực thi quá nhiều tác vụ lồng nhau thì sẽ sinh ra callbackhell dẫn đễn, khó debug và kiểm tra
    
*  ví dụ về callback
 ``` php
function callback (subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
    }
    callback('math', ()=> {
    alert('Finished my homework');
    });
```

> ### promise ###
* promise là gì
    - promise là một cơ chế trong javascript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell(là hàm callback lồng nhau quá nhiều tầng)
* Những trường hợp nên sử dụng promise
    - sử dụng khi gửi và nhận Ajax request, gọi hàm bên bên trong setTimeout, setInterval 
* các thành phần trong promise gồm
    - resovle và reject là 2 hàm callback của promise khi đúng thì trả dữ thông tin cho resovle còn ngược lại là cho reject
    - then, catch, finaly kết quả đúng thì then ở đằng sau được chạy tiếp còn nếu có lỗi sai ở promise hoặc then thì sẽ reject sẽ trả vào catch,finaly bắt được cả 2 trường hợp

* ví dụ về promise
``` php
    const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('foo');
        }, 300);
    });
```
    myPromise
    .then(value => { return value + ' and bar'; })
    .then(value => { return value + ' and bar again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { console.log(value) })
    .catch(err => { console.log(err) });

> ### promise all ###

* Promise All là gì
    - Promise All Phương thức nhận vào một mảng các promises và chỉ resolve khi tất cả các promises này hoàn thành, hoặc reject khi một trong số chúng xảy ra lỗi.
      Trong trường hợp có lỗi xảy ra, tất cả các promise khác dù đã kết thúc hay chưa thì đều không được quan tâm nữa.
* ví dụ về promise all

``` php
    Promise.all([Promise1, Promise2, Promise3])
          .then(result) => {
                console.log(result)
          })
          .catch(error => console.log(`Error in promises ${error}`))
```
> ### Phần nâng cao ###
* Async/ awit là gì
    - Async / awit là một tính năng Javascript giúp làm việc với các chắc năng không đồng bộ, Nó được xây dựng dự trên Promise và tương thích với các API dựa trên Promise hiện có
    - Async  - khai báo và tự động chuyển đổi một function thành Một Promise()
        - các chức năng Async cho phép sử dụng await.
    - Await  - tạm dừng thực thi các chức năng không đồng bộ
        - Await chỉ được dùng và hoạt động trong khi khai báo Async.
        - Await chỉ hoạt động với promise chư không dùng trong callback
* cú pháp
``` php
    async function func(){
        await function childFunc (){
            something code // hoặc cái viết cái gì đó
        }
    }
```
* ưu điểm và nhược điểm của Async / await so với promise
    - Ưu điểm - Code ngắn và sạch hơn: đơn giản chỉ là code ngắn gọn hơn 
          - sử lý lỗi/error đồng bộ và bất đồng bộ theo cùng 1 cấu trúc(sử dụng try catch)
          - debug đơn giản promise
    -nhược điểm -vì thằng Async/ await ra đời sau nên nó khác phục được nhiều yếu điểm của thằng promise

> ## ảnh 31 es6 ##
![Screenshot](31es6.png)

