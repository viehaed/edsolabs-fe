1.	Đồng bộ và bất đồng bộ là gì? Ưu nhược điểm của chúng?
-	Đồng bộ là quy trình xử lý các công việc theo thứ tự, công việc 2 chỉ được bắt đầu thực hiện khi công việc 1 hoàn tất. Lập trình đồng bộ có ưu điểm là chương trình sẽ chạy đúng thứ tự, dừng lại khi gặp 1 lệnh lỗi giúp chương trình dễ kiểm soát và phát hiện lỗi. Nhược điểm là hiệu suất thấp.
-	Bất đồng bộ thì các công việc có thể được thực hiện cùng 1 lúc, công việc nào kết thúc trước sẽ trả ra kết quả trước. Di đó ưu điểm là chương trình sẽ có hiệu suất cao. Tuy nhiên nhược điểm của nó là do chạy không theo thứ tự nên cần có các kĩ thuật để kiểm soát.

2.	JS là ngôn ngữ đồng bộ hay bất đồng bộ? Tại sao?
Javascript là ngôn ngữ lập trình bất đồng bộ và chỉ chạy trên một luồng. Sự bất đồng bộ trong javascript xuất hiện khi nó thao tác với các WebAPI (ajax, setTimeout(), … ). Khi một câu lệnh thao tác với WebAPI, nó sẽ mất một khoảng thời gian để chờ các dữ liệu trả về từ WebAPI, do đó ở trong luồng chính của javascript, nó sẽ ở trong trạng thái chờ. Tuy nhiên chương trình sẽ không bỏ trống khoảng thời gian chờ đó, chương trình sẽ tiếp tục thực hiện các câu lệnh tiếp theo. 
3.	Callback function là gì, ưu điểm, hạn chế của CallBack Function? Ví dụ
-	CallBack Function là 1 function được truyền vào trong 1 function khác, và được gọi trong function đó.
-	Ưu điểm: Sử dụng callback function để đồng hộ hóa những xử lí bất đồng bộ. Dễ đọc code hơn, tăng khả năng bảo trì
-	Nhược điểm: Khi lồng quá nhiều callback thì dẫn đến callback hell, gây khó khan cho việc bảo trì
-	VD: 
Function myFunction(x) {
}

Function myCallback(value) {
Console.log(value)}
myFunction(myCallback);

4.	Promise là gì, ví dụ tình huống về trường hợp nên sử dụng Promise. Các thành phần của 1 Promise, ví dụ về Promise
- Promise là một cơ chế trong JavaScript giúp thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell , là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng.
- Sử dụng promise khi chúng ta cần lập trình đồng bộ, để khi ta lấy được data1, thì ta dùng data 1 đó để lấy ra data2
- 
var promise = new Promise((resolve, reject) => {
	Thành công: Resolve()
	Thất bại: reject()
}
promise
	.then(function() {
resolve()	
})
	.catch(function() {
reject()
})
	finally(function() {
})
-	VD:
	let sach = new Promise(function (resolve, reject){
	  if(!true) {
	    resolve();
	  } else {
	    reject();
	  }
	});
	sach
	.then(function() {
	    console.log(1);
	})
	.catch(function() {
	    console.log('error')
	})



5.	Promise All là gì? Ví dụ tình huống về trường hợp sử dụng Promise All
-	Giúp chạy song song các promise, hợp nhất các promise trả về 1 mảng là kết quả của các promise đầu vào
-	VD: 
	var promise1 = new Promise(
	    function (resolve) {
	        setTimeout(function () {
	            resolve([1, 2]);
	        }, 2000);
	    })
	var promise2 = new Promise(
	    function (resolve) {
	        setTimeout(function () {
	            resolve([3]);
	        }, 5000);
	    })
	    Promise.all([promise1, promise2])
	    .then(function(result) {
	        console.log(result);
	    })

