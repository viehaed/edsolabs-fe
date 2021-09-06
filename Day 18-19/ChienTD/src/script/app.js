function spinner() {
    setTimeout(function() {
        var load = document.querySelector(".wrapper__loading")
        document.querySelector(".wrapper").removeChild(load);
    },1000)
}

spinner();

var links = document.querySelectorAll(".item-menu")
var navs = document.querySelector("#nav");
console.log(links)
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',function() {
        for (let j = 0; j < links.length; j++) {
           if (links[j].classList.contains('activeMenu')) {
            links[j].classList.remove('activeMenu');
            let point = links[j].querySelector('.point');
            point.classList.remove('display--block')
            point.classList.add('display--none');
           }
        }
        links[i].classList.add('activeMenu');
        links[i].querySelector('.point').classList.add('display--block')
    })
}