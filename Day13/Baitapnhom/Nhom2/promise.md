## 25.6 Example
### 25.6.1 promisifying fs.readFile() 
* Đoạn code sau là phiên bản dựa trên Promise của hàm Node.js tích hợp sẵn fs.readFile()

```javascript
import {readFile} from 'fs';

function readFilePromisified(filename) {
    return new Promise(
        function (resolve, reject) {
            readFile(filename, { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
}
readFilePromisified(process.argv[2])
.then(text => {
    console.log(text);
})
.catch(error => {
    console.log(error);
});
```
### 25.6.2 Example: promisifying XMLHttpRequest 
* Dựa trên Promise thực hiện HTTP GET thông qua API XMLHttpRequest dựa trên sự kiện

```javascript
function httpGet(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();// Khởi tạo đối tượng
            request.onload = function () {
                if (this.status === 200) {
                    // Success
                    resolve(this.response);
                } else {
                    // Something went wrong (404 etc.)
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function () {
                reject(new Error(
                    'XMLHttpRequest Error: '+this.statusText));
            };
            request.open('GET', url);
            request.send();
        });
}

httpGet('http://example.com/file.txt')
.then(
    function (value) {
        console.log('Contents: ' + value);
    },
    function (reason) {
        console.error('Something went wrong', reason); //Ghi một thông báo lỗi
    }
);
```
### 25.6.3 Example: delaying an activity
* Triển khai setTimeout () dưới dạng delay hàm dựa trên Promise ()

```javascript
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms); 
    });
}

// Using delay():
delay(5000).then(function () { 
    console.log('5 seconds have passed!')
});
```
### 25.6.4 Example: timing out a Promise

```javascript
function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        promise.then(resolve);
        setTimeout(function () {
            reject(new Error('Timeout after '+ms+' ms')); // (A)
        }, ms);
    });
}
timeout(5000, httpGet('http://example.com/file.txt'))
.then(function (value) {
    console.log('Contents: ' + value);
})
.catch(function (reason) {
    console.error('Error or timeout', reason);
});
```
## 25.7 Other ways of creating Promises
* Tìm hiểu về 2 cách tạo Promises

### 25.7.1 Promise.resolve()
* Hầu hết các giá trị x, nó trả về Promise được thực hiện với x:

```javascript
  Promise.resolve('abc')
  .then(x => console.log(x)); // abc
```
* Nếu x là một Promise có hàm tạo là người nhận (Promise nếu bạn gọi Promise.resolve ()) thì x được trả về không thay đổi:

```javascript
const p = new Promise(() => null);
console.log(Promise.resolve(p) === p); // true
```
* Có thể sử dụng Promise.resolve () để chuyển đổi bất kỳ giá trị nào (Promise, thenable hoặc khác) thành Promise. Trên thực tế, nó được Promise.all () và Promise.race () sử dụng để chuyển đổi Arrays of arbitrary values thành Arrays of Promises.

```javascript
 const fulfilledThenable = {
      then(reaction) {
          reaction('hello');
      }
  };
  const promise = Promise.resolve(fulfilledThenable);
  console.log(promise instanceof Promise); // true
  promise.then(x => console.log(x)); // hello
```
### 25.7.2 Promise.reject()
* Promise.reject (err) trả về một Promise bị từ chối với err:

const myError = new Error('Problem!');
Promise.reject(myError)
.catch(err => console.log(err === myError)); // true

## 25.8 Chaining Promises
### 25.8.1 Resolving Q with a normal value

* Nếu bạn giải quyết Promise Q được trả về bằng then()một giá trị bình thường, bạn có thể nhận giá trị đó thông qua một giá trị tiếp theo then():

```javascript
asyncFunc()
.then(function (value1) {
    return 123;
})
.then(function (value2) {
    console.log(value2); // 123
});
```
### 25.8.2 Resolving Q with a thenable
cơ chế này là làm phẳng các lệnh gọi then () lồng nhau, như trong ví dụ sau

```javascript
asyncFunc1()
.then(function (value1) {
    asyncFunc2()
    .then(function (value2) {
        ···
    });
})

asyncFunc1()
.then(function (value1) {
    return asyncFunc2();
})
.then(function (value2) {
    ···
})
```
### Resolving Q from onRejected 
* Bất cứ điều gì bạn về trong trình xử lý lỗi sẽ trở thành giá trị thực hiện (không phải giá trị từ chối!). Điều đó cho phép chỉ định các giá trị mặc định được sử dụng trong trường hợp không thành công

```javascript
retrieveFileName()
.catch(function () {
    // Something went wrong, use a default value
    return 'Untitled.txt';
})
.then(function (fileName) {
    ···
});
```
### 25.8.4 Rejecting Q by throwing an exception
* Các ngoại lệ được đưa ra trong các lệnh callbacks của then() và catch() được chuyển cho trình xử lý lỗi tiếp theo, dưới dạng từ chối.

```javascript
asyncFunc()
.then(function (value) {
    throw new Error();
})
.catch(function (reason) {
    // Handle error here
});
```
### 25.8.5 Chaining and errors
* Có thể có một hoặc nhiều lệnh gọi phương thức then (). Sau đó, lỗi được chuyển cho đến khi có một trình xử lý lỗi.

```javascript
asyncFunc1()
.then(asyncFunc2)
.then(asyncFunc3)
.catch(function (reason) {
    // Something went wrong above
});
```