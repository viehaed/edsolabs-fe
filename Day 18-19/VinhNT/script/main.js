const counters = document.querySelectorAll(".counter")
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const text = counter.getAttribute('data-inner')
        const increment = Math.trunc(target / speed);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = text;
        }
    }
    updateCount()
});
//////////////////////////////////////fade in
var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 100);
}

function show() {
    var img = document.getElementById("big-img");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        img.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}
///////////////////////////////////////////////
let buttons = document.querySelectorAll("#nav-link")
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('header__nav__bar__center__item__link--active'))
        this.classList.add('header__nav__bar__center__item__link--active')
    })
})