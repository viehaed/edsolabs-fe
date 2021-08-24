
let myString = "Hoang Ngoc Thanh"
let myString2 = " Nguyễn Ánh";

//-----------------1.charAt();---------------
//Trả ra ký tự ở vị trí index 
//vidu1: trả ra kí tự đầu
console.log(myString.charAt(0)); //return H
//vidu2: trả ra kí tự cuối
console.log(myString.charAt(myString.length - 1));
//vidu3: tìm vị trí 5 trong chuỗi
console.log(myString.charAt(6));
//vidu4: tìm vị trí của kí tự o trong chuỗi
for (let i = 0; i < myString.length; i++) {
    if (myString.charAt(i) === "o") {
        console.log(i);
    }
}
//vidu5: tìm vị trí đầu tiên của kí tự "o".
for (let i = 0; i < myString.length; i++) {
    if (myString.charAt(i) === "o") {
        console.log(i);
        break
    }
}
//--------------------2.concat()-------------------
//Dùng để nối chuỗi
let firstName = "Le";
let lastName = " Dung";
let fullName = "le viet dung"
//vidu1: nối firstName vs lastName để tao thành tên đầy đủ
console.log(firstName.concat(lastName));
//vidu2: nối nhiều chuỗi liên tiếp
console.log(firstName.concat(lastName, fullName));
//vidu3: hãy convert fullName thành mảng rồi trả về chuỗi tùy ý
console.log(fullName.split(" ").map(item => {
    return item.concat("1")
}).join(" "));
//vidu4: cắt chuỗi đầu trong fullName và nối với fistName
console.log(fullName.replace("le", firstName));
//vidu5: từ firstName có sẵn hãy nối thêm chuỗi có 3 kí tự.
console.log(firstName.concat("abc"));

//3.endWith();
//kiểm tra giá trị cuối của string có bằng đối số truyền vào k
//kết quả True or False
console.log(myString.endsWith("a"));


//4.includes();
//Kiểm tra 1 chuỗi có thể tìm thấy trong chuỗi khác hay không
//kết quả True or False
//vidu1: 
let string = "anhnguyen";
if (string.includes(" ")) {
    console.log("có khoảng trắng")
} else {
    console.log("không có khoảng trắng");
}
console.log(myString.includes("h"));

//5.indexOf();
//Kiểm tra 1 chuỗi có thể tìm thấy trong chuỗi khác hay không
//kêt quả trả về -1 or vị trí index trong chuỗi
console.log(myString.indexOf("x"));



//6.lastIndexOf();
//Kiểm tra 1 chuỗi có thể tìm thấy trong chuỗi khác hay không
//kêt quả trả về -1 or vị trí cuối cùng của kí tự đó có phân biêt chữ
//hoa chữ thường.
console.log(myString2.lastIndexOf('n'));


//7.length();
//Trả về độ dài của chuỗi.
//ví dụ 1
// let input = prompt("Nhập tên đăng nhập của bạn:");
// console.log(input);
// if (input[0] === " " && input[input.length -1] === " ") {
//     alert("ten đăng nhập k đc dùng khoảng trắng")
// }
//vidu2: tìm độ dài của chuỗi
console.log(myString.length);
//vidu3: in chiều dài của chuỗi lớn nhất trong 2 chuỗi
if (myString.length > myString2.length) {
    console.log(myString.length);
} else {
    console.log(myString2.length);
}
//vidu4: in ra chuỗi nhỏ nhất trong 2 chuỗi
if (myString.length > myString2.length) {
    console.log(myString);
} else {
    console.log(myString2);
}


//8.localeCompare();
//So sánh ký tự từ trái sang phải theo ASSCI
//trả về 3 giá trị : -1 , 0 , 1
console.log("abcd".localeCompare("abc")); // 1
console.log("abc".localeCompare("abc")); // 0
console.log("ABC".localeCompare("abc")); //1
console.log("bbcd".localeCompare("ade")); //1
console.log("abc".localeCompare("bbc")); //-1
console.log("123".localeCompare("234")); //-1
console.log("1".localeCompare("1")); //0

//9.replace();
//Tìm chuỗi muốn thay thế. 
//2 đối số . đối số thứ nhất là chuỗi nằm trong chuỗi muốn gốc
// đối số thứ 2 là chuỗi thay thế

console.log(myString.replace("x", "Ánh"));
console.log(myString2);
let str = "Visit Microsoft!";
console.log(str.replace("Microsoft"));

//10.slice();
//cắt chuỗi theo index
//đối số đầu tiên là index bắt đầu
//đối số thứ 2 là index kết thúc cần cắt +1
//nếu có 1 đối số thì cắt từ vị trí đó đến hết chuỗi
//nếu đối số 2 lớn hơn đối số 1 thì sẽ trả về chuỗi rỗng
console.log(myString.slice(2, 5));

//11.split();
//convert chuỗi thành mảng dựa theo đối số truyền vào

console.log("a.b.c.d".split("."));
console.log(myString.split(" "));

//12.startWith();
//kiểm tra giá trị đầu của string có bằng đối số truyền vào k
//kết quả True or False

console.log(myString.startsWith("Hoan"));

//13.substring();
//gần giống slice() nhưng khác khi đối số thứ nhất lớn hơn đối số
//thứ 2 thì tự động sẽ đổi ngươc lại vị trí cắt 
console.log(myString.substring(5, 2));

//14.trim()
//loại bỏ khoảng trắng đầu và cuối trong chuỗi.
console.log(" LE VIET DUNG ");
console.log(" LE VIET DUNG ".trim());





//-----------------15,Arrow Function (=>)
// cú pháp () => {}
//arrowfunction 
// Traditional Function
let myFunc = function (a, b) {
    return a + b + 100;
}
console.log(myFunc);
// Arrow Function
let myArrowFunc = (a, b) => a + b + 100;
console.log(myArrowFunc);

// ------------------------- Arrow function ------------------------

// Arrow Function sử dụng kí tự =>

hello = () => {
    console.log('hello')
    }
    // hello()
    // còn Function thông thường thì :
    function hello(){
    console.log('hello')
    }
    // hello()
    // Với TH có tham số :
    hello = name => {
    console.log('hello ', name)
    }
    // Ta có thể giản lược được dấu () với trường hợp có 1 tham số truyền vào.
    // Ngoài ra, với arrow function ta có thể bỏ qua từ khoá return
    double = x => x * 2
    // còn với function thì :
    function double(x){
    return x * 2
    }









// charAt();
// concat();
// endWith();
// includes();
// indexOf();
// lastIndexOf();
// length;
// localeCompare()
// replace();
// slice();
// split();
// startWith();
// substring();