### I. Hiểu về Promise

```
function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}
asyncFunc()
.then(x => console.log('Result: '+x));
```

- Output:
- Result: DONE

#### 1. Về mặt nguyên lý: Gọi một hàm Promise-based tương đương với việc gọi một khối lệnh hay một hàm thông thường

#### 2. Promise là một container cho việc gửi một giá trị theo cách bất đồng bộ

#### 3. Promise là một đối tượng tạo(kích hoạt ?) event

### II. Tạo và sử dụng Promise

#### 1. Khởi tạo

```
const p = new Promise(
    function (resolve, reject) { // (A)
        ···
        if (···) {
            resolve(value); // success
        } else {
            reject(reason); // failure
        }
    });

```

#### 2. Trạng thái của Promise

- Pending: Chưa hoàn thành
- Fullfilled: Đã hoàn thành
- Rejected: Bị từ chối
  _Note: Promise chỉ được coi là đã xử lí khi nó đã được fullfilled hoặc rejected. Mỗi Promise chỉ được xử lí đúng 1 lần_
- Resolving: Khi Promise được hoàn thành
- Rejected: Khi Promise bị từ chối hoặc có lỗi

#### 3. “Tiêu thụ” một Promise

```
promise
.then(value => { /* fulfillment */ })
.catch(error => { /* rejection */ });
```

#### 4. Promise luôn luôn là bất đồng bộ

_Note: Chaining Promise không bỏ qua các tác vụ khác trong quá trình xử lí (Dựa trên nguyên tắc run-to-complete)_
