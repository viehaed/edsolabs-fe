import {listStudent} from "./list.js";
import {
    names,
    bai32,
    bai33
} from './ds.js'
console.log(bai32)
//Bài tập 34
bai34();
function bai34(){
    console.log(bai33.split("Linh").length-1);
}
bai34();

//Bài tập 35
    function bai35(){
        const indexName = bai33.indexOf('Linh');
        console.log(indexName + 1);
    }
    bai35();
//Bài tập 36
    function bai36(){
        const indexName = bai33.lastIndexOf('Linh');
        console.log(indexName + 1);
    }
    bai36();
    //Bài tập 37
    function bai37(){
        var key = /^L/
        var count = 0;
        for (var i = 0; i < names.length; i++){
            var word = key.test(names[i])
            if(word == true){
                count++;
            }
        }
        console.log(count);
    }
    bai37();
    //Bài tập 38
    function bai38() {
        var key1 =/^L/
        var keyWord = /h$/
        var count = 0;
        for (var i = 1; i < names.length; i++){
            var word1 = key1.test(names[i])
            var newWord = keyWord.test(names[i])
            if(word1 == true && newWord == true)
                count++;
        }
        console.log(count);
    }
    bai38();
    //Bài tập 39 
    function bai39(x){
        console.log(bai32.split(x).length-1);
    }
    bai39('L');
    //Bài tập 40
    function bai40(){
        console.log("Bạn " + names[0])
        for (var i = 1; i < names.length-1; i++){
            console.log(",tiếp theo là " + names[i])
        }
        //console.log()
    }
    bai40()
    //Bài tập 41
    function bai41(){
        var bai41 = bai32.split('Thanh,')
        console.log(bai41);
    }
    bai41();
    
    //Bài tập 42
    function bai42() {
        const listNames = listStudent.map((l) => l.name.split(" ").pop());
        console.log("Chia đội")
        const endThanh = bai32.toUpperCase().split(/(THÀNH)\s/);
        console.log(endThanh)
    }
    bai42()
    //Bài tập 43
    function bai43() {
        const listNames = listStudent.map((l) => l.name.split(" ").pop());
        //const stringNames = listNames.join(" ");
        console.log("Chia đội")
        const startThanh = bai32.toUpperCase().split(/\s(?=THÀNH)/);
        console.log(startThanh)
    }
    bai43()
    
    //Bài tập 44
    function bai44(){
        console.log(bai32.repeat(2));//lặp chuỗi với số lần xác định
    }
    bai44();
    //Bài tập 45
    function bai45(){
        const change = bai32.replaceAll('Dung', 'Tuan');
        console.log(change);
    }
    bai45();