var menuItem = document.getElementsByClassName("menu__item");

Array.from(menuItem).forEach(item => {
    item.addEventListener("click", () => {
        var active = document.getElementsByClassName("menu__item--active")[0];
        active.classList.remove("menu__item--active");
        item.classList.add("menu__item--active");
    })
});

