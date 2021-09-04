
// ====== active button menu ========
var header = document.getElementById("navBar");
var btns = header.getElementsByClassName("item-menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" activeItemMenu");
  current[0].className = current[0].className.replace(" activeItemMenu", "");
  this.className += " activeItemMenu";
  });
}

