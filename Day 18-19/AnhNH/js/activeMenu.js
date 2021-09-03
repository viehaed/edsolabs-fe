var a = document.querySelectorAll(".nav-link")
function menuActive(el) {
  a.forEach(item => {
    item.classList.remove("active");
  })
  el.classList.add("active")
}
a.forEach(item => {
  item.addEventListener("click", e => {
    menuActive(e.target)
  })
})