const $ = document.querySelector('.body');
const header = document.querySelector('.header');
const toggleMenu = document.querySelector('.navbar-toggler');

toggleMenu.addEventListener('click',()=>{
    header.classList.toggle('header--menu-mobile');
})

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('.header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) nav.classList.add('header--scroll'); else nav.classList.remove('header--scroll')
}
window.addEventListener('scroll', scrollHeader);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(element => {
    element.addEventListener('click',()=>{
        navLink.forEach(item => {
            item.classList.remove('active');
        })
        element.classList.add('active');
    })
});
const groupBtn = document.querySelector('.group-btn-login');
const listBtn = groupBtn.querySelectorAll('.btn');

listBtn.forEach(element => {
    element.addEventListener('click',()=>{
        listBtn.forEach(item => {
            item.classList.remove('btn--active');
        })
        element.classList.add('btn--active');
    })
});