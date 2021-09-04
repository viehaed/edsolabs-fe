var $header = document.getElementById("myDIV");
var $btns = $header.getElementsByClassName("button");
for (var i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        console.log(current[0].className);
        current[0].className = current[0].className.replaceAll(" active", "");
        this.className += " active";
    });
}