$(document).ready(function(){
    $(".count").each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

var opacity = 0;
var intervalId = 0;
window.onload = fadeIn;
function fadeIn() {
    setInterval(show,50)
}
function show() {
    var img = document.getElementById("img-animation");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity < 1) {
        opacity = opacity + 0.01;
        img.style.opacity = opacity;
    } else {
        clearInterval(intervalId)
    }
}

let handle = document.querySelectorAll("#nav-link")
handle.forEach(action => {
    action.addEventListener('click', function() {
        handle.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')
    })
}) 