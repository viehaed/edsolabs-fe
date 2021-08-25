## 1.	var – let – const
-	var: là biến khai báo có phạm vi sử dụng là phạm vi toàn cục hoặc phạm vi cục bộ (trong hàm) tuỳ theo mục đích sử dụng. Nó có thể được khai báo lại và được gán lại
-	let: là biến khai báo sử dụng trong phạm vi khối. Nó có thể được gán lại nhưng không thể khai báo lại.
-	const: là biến khai báo sử dụng trong phạm vi khối. Nó không thể khai báo lại cũng như gán lại giá trị. Tuy nhiên, khi sử dụng với mảng và đối tượng thì nó vẫn bị thay đổi khi một hoặc nhiều phần tử của mảng hoặc một hoặc nhiều thuộc tính của đối tượng bị thay đổi

## 2.	Destructuring assignment
Là cú pháp đặc biệt trong ES6, cho phép tách dữ liệu trong mảng hoặc đối tượng rồi gán cho một biến khác
Ví dụ:
-	Tách dữ liệu từ đối tượng
```const me = { first: 'Âu', last: 'Ngô' };
const {first, last} = me;
console.log(first, last); // Âu Ngô```

-	Tách dữ liệu và gán cho biến khác từ đối tượng
'let me = {first: 'Âu', last: 'Ngô', from: 'VN'};
let {first: ten, last: ho, from: que } = me;
console.log(ten, ho, que); // Âu Ngô VN'
-	Tách dữ liệu và gán cho biến khác từ đối tượng lồng nhau
'const me = {
  Âu: { 
    age: 21,
    from: 'Thanh Hoá'
  }
};
const { Âu: { age, from }} = me;
console.log(age, from); // 21 "Thanh Hoá"'

-	Tách dữ liệu từ một mảng
'const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);// 1 2
const [c,d,,,e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e);'
-	Biến đối tượng thành một tham số của hàm
'const me = {
  name: "Âu",
  age: 21,
  year: 2021
};

const numb = ({ age, year }) => age + year;
console.log(numb(me));// 2042'

## 3.	Javascript là ngôn ngữ lập trình bất đồng bộ
Hàm sẽ không bao giờ được gọi xử lí trực tiếp, nó sẽ được giải quyết thông qua các message.
Bộ máy xử lí bên trong của Javascript gồm có: 
-	Hàng đợi tin nhắn (message queue)
Tiếp nhận các xử lí được gọi tới, mỗi hàm được gọi sẽ tương ứng là một message trong hàng đợi.
-	Vòng lặp event (event-loop)
Điều phối việc lấy các message đang có trong queue. Mỗi lần sẽ lấy 1 message ra khỏi queue để đem đi xử lí, trong quá trình xử lí thì event-loop sẽ đứng chờ cho tới khi message cũ được xử lí xong, sau đó sẽ tiếp tục lấy message mới trong queue để xử lí, và cứ lặp lại như thế.
-	Stack xử lí (call stack). 
Call stack là 1 ngăn xếp quản lí việc thực thi hàm và gọi lồng hàm (nested function). Với mỗi hàm vừa lấy ra khỏi queue để đem ra xử lí, thì nó sẽ tương ứng với một frame ở trong call stack, nếu bên trong hàm này có gọi tới nhiều hàm con nữa, thì những hàm con này sẽ được thêm tiếp vào call stack dưới dạng 1 frame mới của stack. Và Javascript sẽ lần lượt xử lí call-stack này theo dạng first-in last-out (xử lí dạng stack), cho đến khi stack rỗng thì coi như message đó đã được xử lí xong.

## 4.	Đồng bộ là gì? Bất đồng bộ là gì? Ưu nhược điểm
Đồng bộ là quá trình các sự kiện xảy ra lần lượt theo một trình tự định sẵn. Sự kiện nào xuất hiện trước thì thực hiện trước. Sự kiện tiếp theo được thực hiện khi sự kiện trước nó đã được hoàn thành.

-	Ưu điểm: các sự kiện được thực hiện theo ý muốn của người lập trình, dễ kiểm soát, dễ dàng để debug khi gặp lỗi

-	Nhược điểm: tốn nhiều thời gian hơn để cho ra kết quả cuối cùng, nếu một sự kiện có thời gian chờ xử lý lâu thì sẽ gây trì trệ.

Bất đồng bộ là quá trình các sự kiện xảy ra tại cùng một thời điện. Sự kiện nào thực hiện và hoàn thành trước thì đưa ra kết quả trước

-	Ưu điểm: giảm bớt thời gian chạy chương trình, thực hiện được nhiều tác vụ đồng thời

-	Nhược điểm: khó kiểm soát, khó debug khi gặp lỗi


## 5.	Callback

Callback là một hàm sẽ được gọi bởi một hàm khác. Hiểu phức tạp hơn thì callback một hàm A được truyền vào hàm B thông qua các tham số của hàm B. Bên trong hàm B sẽ gọi đến hàm A để thực hiện một chức năng nào đó.

-	Ưu điểm: có thể lập trình các sự kiện xảy ra một cách đồng bộ theo ý muốn.

-	Nhược điểm: nếu lồng nhiều hàm callback với nhau sẽ gây ra hell callback => treo máy, lỗi giao diện

-	Ví dụ:

'function doSomething(first, action){
  console.log(first);
  action();
};

doSomething("Nấu cơm", () => console.log("Ăn cơm"));'

## 6.	Promise
Promise là một cơ chế trong JavaScript giúp thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell (tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng). 

Promise có 3 trạng thái:
-	Pending: trạng thái chờ xem trả về resolve() hay reject()
-	Fulfilled: trạng thái thành công, gọi tới resolve(value), trả về một value.
-	Rejected: trạng thái thất bại, gọi tới reject(error), trả về một error.

Khi promise ở trả về resolve() nó sẽ gọi hàm callback của hàm then() với tham số truyền vào là value. Ngược lại nó gọi hàm callback của hàm catch() khi nó trả về reject() với tham số truyền vào là error. Sau tất cả, mặc kệ là thành công hay thất bại nó đều gọi tới callback của hàm finally().

Ví dụ:
'function checkEven(x){
  return new Promise((resolve, reject) => {
    if(x%2 === 0) resolve(x);
    else reject("Không phải số chẵn");
  })  
}

checkEven(3)
  .then(x => console.log(x+" chia hết cho 2"))
  .catch(error => console.log(error))
  .finally(() => console.log("Done!"))'

## 7.	Promise.all()
Xử lý nhiều promise cùng một lúc và trả về kết quả resolve(value) với value là một array chứa các kết quả của các quá trình bất đồng bộ đã gọi tương ứng. Promise.all sẽ reject khi một promise truyền vào trả về reject(error).

Ví dụ:

'const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
'

## 8. Học trên freecodecam
![ES6](./ES6.png)