# SYNC/ASYNC
+ sync (synchronous) đồng bộ là quy trình xử lý các công việc theo trình tự đã được thiết
	lập sẵn.
+ async (asynchronous) bất đồng bộ là quy trình xử lý các công việc cùng 1 lúc việc nào
	thực hiện trước thì sẽ xuất ra trước

	+ sync: 
		- Ưu điểm: là chương trình sẽ chạy đúng theo thứ tự từ trên xuống, dừng lại ngay
		khi xuất hiện lỗi => dễ kiểm soát + dễ phát hiện lỗi
		- Nhước điểm: hiệu xuất chương trình sẽ chậm vì cần thực hiện tuần tự
	+ async:
		- Ưu điểm: Hiệu xuất chương trình cao tối ưu hóa được thời gian
		- Nhược điểm: cần kiểm soát kỹ code

# Javascript
+ Javascript là ngôn ngữ lập trình bất đồng bộ và chỉ chạy trên một luồng. Bởi vì khi sử dụng các	hàm dạng setTimeout(), setInterval(),... thì java sẽ không đợi cho hàm đó chạy xong mà chạy luôn các công việc phía dưới
# CALLBACK
+ callBack là gì?
	- là 1 hàm
	- được gọi như là 1 đối số
	- được gọi gọi lại
+ Ưu điểm
	- giải quyết bất đồng bộ
	- Là mô hình phổ biến nên sẽ dễ hiểu
+ Nhược điểm
	- callBack lồng nhau nhiều => callBack hell
	- chỉ có thể truyền một callBack cho 1 sợ kiện nhất định

+ Ví dụ về callBack
```sh
Array.prototype.map2 = function(callBack) {
    var out = [], arrayLength = this.length;
    for (let i = 0; i<arrayLength;i++) {
        var rf = callBack(this[i]);
        out.push(rf);
    }
    return out;
}

var courses = [
    'js',
    'PHP',
    'Ruby'
]

var htmls = courses.map2(function(courses) {
    return `<h1>${courses}</h1>`;
})

console.log(htmls.join(''))
```
# Promise
+ Sinh ra để xử lý thao tác bất đồng bộ mà không gặp vấn đề callBack hell
	(Khái niệm callBack Hell - https://viblo.asia/p/callback-hell-trong-javascript-la-gi-va-cach-phong-trach-NbmvbaYKkYO)
+ Khi nào sử dụng Promise: khi mà chúng ta cần tạo hàm đồng bộ nghĩa là chạy function 1 để lấy được data cho
	function 2 hoạt động
+ Để khởi tạo 1 đối tượng promise là làm như sau: 

		var promise = new Promise(function(resolve, reject) {
			//Logic
			//Thành công: resolve()
			//Thất bại: reject()
		});

+ Đối số truyền vào là 1 "Executor" - nó là 1 function. Trong Function này sẽ có tiếp 2 đối số
	là "resolve" và "reject" 2 đối số này cũng là function lần lượt tượng trưng cho thành công và
	thất bại
+ Promise sẽ có 3 phương thức chính là .then() .catch() .finally()
	+ then() sẽ được gọi khi resolve() được thực thi
	+ catch() sẽ gọi khi reject() được thực thi
	+ finally() được gọi khi 1 trong 2 cái resolve(), reject() được thực thi
+ Promise có 3 trạng thái là: 
		- Pendding: trạng thái chờ (bị dò dỉ bộ nhớ - Memory lake)
		- Fulilled: trạng thái thành công
        - Rejected: trạng thái thất bại 
+ Ví dụ về Promise
    ```sh
    var promise = new Promise(function(resolve, reject) {
        let x = Math.floor(Math.random() * 5);
        if (x > 3) {
            resolve(`${x} lớn hơn 3`)
        } else reject("Đã có lỗi")
    });
    
    promise
        .then(function(data) {
            console.log(data);
        }) 
        .catch(function(error) {
            console.log(error)
        })
        .finally(() => console.log("Done!!!"))
    ```
    
# PromiseAll
+ là 1 một Promise nhận các đối số là Promise dùng để quản lý 1 nhóm các Promise giúp chúng ta cải thiện về hiệu suất công việc
+ Ví dụ tình huống sử dụng PromiseAll là: gửi hàng loạt email và get API




