var backtop = document.getElementById("back-to-top")
var menu = document.getElementById("navbar")
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    backtop.style.display = "block";
    menu.classList.add('fiexed-menu')
  } else {
    backtop.style.display = "none";
    menu.classList.remove("fiexed-menu");
  }
}
window.onscroll = function () { scrollFunction() };
function backTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}


