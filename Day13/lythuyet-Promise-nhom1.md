# Nhóm 1 . Thuyết trình về Promise . 1-3
---
## 1, Over View (Tổng quát)
-  **Promise** : Là tác vụ được tạo ra ở phiên bản ES6 thay thế cho (callback) để xử lý các hành vi bất đồng bộ trong JavaScript . Ví dụ như : Call API, setTimeout() v.v.. 
-  **Cú Pháp** : new Promise((resolve,reject)=>{//logic}) , khi khởi tạo đối tượng Promise bên trong hàm sẽ nhận 1 Excuter Function gồm 2 tham số truyền vào là resolve, reject . Resolve()sẽ trả về kêt quả khi Promise thành công ,Reject() sẽ trả về lỗi khi Promise thất bại
- **ví dụ** 
```php
function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
            // thay đổi luôn trạng thái là pending
            resolve(result);//thành công
            reject(error);//thất bại
        });
}
```
- **Cú Pháp** gọi 1 Promise : 
```php
asyncFunc()
.then(result => { ··· })// khi kêt quả resolve
.catch(error => { ··· });// khi kêt quả reject
```
## 2, **Promise Chain** 
 - sẽ thực thi tuần tự từ trên xuống dưới, kết quả của .then() bên trên sẽ là tham số đầu vào của .then() bên dưới nó . .catch() sẽ nhận về kết quả lỗi.
 **ví dụ** :
```php
asyncFunc1()
.then(result1 => {
    // Use result1
    return asyncFunction2(); // (A)
})
.then(result2 => { // (B)
    // Use result2
})
.catch(error => {
    // Handle errors of asyncFunc1() and asyncFunc2()
});
```
- **Cú Pháp** : Promise.All() 
- **Thực thi song song các hàm không đồng bộ** : đầu vào nhận 1 mảng Promise đầu ra là 1 mảng value 
```php
Promise.all([
    asyncFunc1(),
    asyncFunc2(),
])
.then(([result1, result2]) => {
    ···
})
.catch(err => {
    // Receives first rejection among the Promises
    ···
});
```
- **Trạng thái của Promise** :Tại 1 thời điểm Promise Có 3 trạng thái của Promise
-         1. Pending: Trạng thái khi mà Promise đang chờ resolve hoặc reject xử lí logic.
-         2. Fullfiled: Trạng thái khi mà Promise resovle()//thành công
-         3. Rejected:  Trạng thái khi mà Promise reject()//lỗi
        
## 3, Example(Ví dụ): so sánh giữa callback Nodejs với Promises.
- 1: callback Nodejs:
```php
fs.readFile('config.json',
    function (error, text) {
        if (error) {
            console.error('Error while reading config file');
        } else {
            try {
                const obj = JSON.parse(text);
                console.log(JSON.stringify(obj, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
```
- 2: Promises: 
```php
readFilePromisified('config.json')
.then(function (text) { // (A)
    const obj = JSON.parse(text);
    console.log(JSON.stringify(obj, null, 4));
})
.catch(function (error) { // (B)
    // File read error or JSON SyntaxError
    console.error('An error occurred', error);
});
```