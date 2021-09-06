setTimeout(() => document.getElementById("h6").style.display = "block", 3200)
setTimeout(() => document.getElementById("h1").style.display = "block", 4200)
setTimeout(() => document.getElementById("text").style.display = "block", 5200)
setTimeout(() => document.getElementById("content__left-send").style.display = "flex", 6200)
setTimeout(() => document.getElementById("content__left-sublike").style.display = "flex", 7200)

setInterval(() => {
  if (document.getElementById("content__right-iconDiamond").style.transform == "rotate(720deg) scale(0.8)") {
    return document.getElementById("content__right-iconDiamond").style.transform = "rotate(0deg) scale(1)"
  }
  else {
    return document.getElementById("content__right-iconDiamond").style.transform = "rotate(720deg) scale(0.8)"
  }
}, 4000);
setInterval(() => {
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(3px)"
    }, 100);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(0px)"
    }, 150);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(3px)"
    }, 200);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(0px)"
    }, 250);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(3px)"
    }, 300);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(0px)"
    }, 350);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(3px)"
    }, 400);
    setTimeout(() => {
      document.getElementById("content__right-iconLike").style.transform = "translateX(0px)"
    }, 450);
}, 5000);

setInterval(() => {
    setTimeout(() => {
    document.getElementById("content__right-icon612").style.opacity="0"
    }, 1000);
    setTimeout(() => {
    document.getElementById("content__right-icon612").style.opacity="1"
    }, 1500);
}, 4570);
setInterval(() => {
    setTimeout(() => {
    document.getElementById("content__right-icon599").style.filter="brightness(400%)"
    }, 1000);
    setTimeout(() => {
    document.getElementById("content__right-icon599").style.filter="brightness(100%)"
    }, 1500);
}, 3430);

