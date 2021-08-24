import data from "../js/data.json" assert { type: "json" };
import doAllStudentPoints from './fakePoint.js'
import search from './searchStudent.js'
import renderList from './renderList.js'


let btnCreatePoints = document.getElementById("btnCreatePoints"),
    btnCheck = document.getElementById("btnCheck"),
    content = document.getElementsByTagName("footer")[0];
var done = false;
console.log(data);


btnCreatePoints.addEventListener("click", () => {
    doAllStudentPoints(data);
    done = true;
    alert("Giả lập điểm thành công");
    console.log(data);
});

btnCheck.addEventListener("click", () => {
    const keyValue = document.getElementById("search").value;
    console.log(keyValue)
    if (!keyValue) {
        alert("Tên không được bỏ trống");
        return;
    }
    else if (!done) {
        alert("Điểm chưa được giả lập");
        return;
    }
    else{
        const result = search(keyValue, data);
        if (result.length == 0) {
            alert("Không tìm thấy bản ghi phù hợp");
        }
        else
        {
            content.innerHTML = renderList(result);
        }
    }
});




    


