## Tìm hiểu ES6

## Tìm hiểu về var, let và const

__var__

* Phạm vi hàm hoặc biến toàn cục

var có phạm vi ảnh hưởng trong một function và khi nó ra khỏi function thì var 
sẽ không còn tồn tại

* Có thể gán lại và có thể khai báo lại

* Không thuộc vùng chết tạm thời

__let__

* Phạm vi khối

let nằm trong block scope (phạm vi khối). block scope được đánh dấu trong phạm 
vi cặp ngoặc nhọn {}. Và khi thoát khỏi block scope thì nó cũng bị mất đi.

* Có thể gán lại nhưng không thể khai báo lại

* Phụ thuộc vào vùng chết tạm thời

__const__

* Phạm vi khối

giống let

* Không thể gán lại cũng không thể khai báo lại

* Phụ thuộc vào vùng chết tạm thời

## Đồng bộ là gì? Bất đồng bộ là gì? Ưu và nhược điểm của chúng?

__Đồng bộ__

là quá trình thực hiện thứ tự lần lần lượt, câu lệnh thứ nhất phải hoàn thành 
thì mới có thể thực hiện câu lệnh thứ hai và tiếp theo,…

* Ưu điểm : vì chạy lần lượt nên dễ kiểm soát, gặp bất kỳ lỗi nào là chương trình 
dừng lại luôn.

* Nhược điểm : Cần lấy dữ liệu từ bên ngoài (đọc file, lấy dữ liệu từ DB, ...) 
nên sẽ cần một thời gian chờ nhất định.

__Bất đồng bộ__

là quá trình mà các câu lệnh có thể chạy cùng một lúc chứ không cần chờ câu lệnh 
trước.

* Ưu điểm : tối đa được thời gian chạy chương trình, thực hiện các tác vụ mất 
nhiều thời gian mà không làm ảnh hưởng đến luồng chính.

* Nhược điểm : Chính vì bất đồng bộ nên dễ bỏ sót lỗi và khó khiểm soát trong 
việc tìm và sửa lỗi.

## JS là ngôn ngữ đồng bộ hay bất đồng bộ? Tại sao?

Javascript là ngôn ngữ lập trình bất đồng bộ và chỉ chạy trên một luồng. 
Sự bất đồng bộ trong javascript xuất hiện khi nó thao tác với các WebAPI (ajax, setTimeout(), … ). 
Khi một câu lệnh thao tác với WebAPI, nó sẽ mất một khoảng thời gian để chờ các 
dữ liệu trả về từ WebAPI, do đó ở trong luồng chính của javascript, nó sẽ ở 
trong trạng thái chờ.

## CallBack function là gì, ưu điểm, hạn chế của CallBack Function? Cho ví dụ về CallBack function.

* Callback : là một hàm được truyền vào một hàm khác với tư cách như một tham 
số của hàm đó.

* Truyền function như là một biến và return nó trong một function khác. Khi ta 
truyền callback function như là một tham số tới một function khác, ta chỉ truyền
định nghĩa. Nó sẽ được thực thi khi truyền cả function dưới dạng tham số. Và 
chúng ta đã có định nghĩa của function callback dưới dang tham số, ta có thể 
thực thi bất kì lúc nào trong function chứa nó.

Ưu điểm : Dễ implement trong các function 

Khuyết điểm : Khi thực hiện callback lồng nhau dẫn đến khó kiểm soát code và 
dẫn đến có thể xảy ra tình trạng callback hell

Ví dụ : 

var keywords = ["Linh", "Inter", "frontend", "Edso Lab"];
​

keywords.forEach(function (eachName, index){
    
    console.log(index + 1 + ". " + eachName);
});

## Promise là gì, ví dụ tình huống về trường hợp nên sử dụng Promise. Các thành phần của của 1 Promise, ví dụ về Promise.

* Promise là một special JavaScript object cũng giống như các object khác mà 
thôi. Promise giúp chúng ta thực thi những function khác và trả về cho chúng ta 
để tiếp tục xử lý với nhiều công đoạn.

* Dùng để xử lý thao tác bất đồng bộ, trước khi có promise hay sử dụng callback 
nhưng callback dễ rơi vào trạng thái callback hel

Khi promise hoạt động sẽ xảy ra 3 trạng thái

* Pedding : đang chờ việc xảy ra ( khi chưa gọi tới resole(), hoặc reject()) 
=> rò rỉ bộ nhớ.

* Fulfilled : khi gọi tới resole()

* Reject : khi gọi tới reject()

Ví dụ : 

var promise = new Promise( 

        function(resole,reject){
            /*resole({
                id : 17,
                name : 'Linh',
            });*/
            reject('fail');
        }
);

promise

        .then(function(courses){
            console.log(courses);
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(){
            console.log('Done');
        })


## Promise All là gì? Ví dụ tình huống về trường hợp sử dụng Promise All.

Promise All là quá trình thực hiện đồng thời nhiều hàm, nhiều thao tác

Ví dụ : 

//Lấy thông tin chi tiết về page 

function getDetailPage(){

        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve('Lấy thông tin chi tiết của page')
            }, 300)
        })
}

//Lấy thông tin giới thiệu về page 

function getInfoPage(){

        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve('lấy thông tin giới thiệu của page')
            }, 400)
        })
}

//Lấy những bài viết mới nhất của page 

function getArticlesPage(){

        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve('Lấy những bài viết mới nhất của page ')
            }, 500)
        })
}

 //Thực hiện hàm Promise.all
 
function initLoad(){

        Promise.all([ getDetailPage(), getInfoPage(), getArticlesPage()]).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
}
initLoad()

## Bài tập thực hành 

![Ảnh thực hành](/ThuchanhES6.png)