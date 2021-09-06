const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btn = $('.pageBtn');
const listBtn = $$('a.pageBtn');
const itemMenu = $$('a.item-menu');
Array.from(itemMenu).forEach(item => {
    item.onclick = () => {
        const itemMenuActive = $('.item-menu.active');
        itemMenuActive.classList.remove('active');
        item.classList.add('active');
    }
})
Array.from(listBtn).forEach(item => {
    item.onclick = () => {
        const itemBtnActive = $('.pageBtn.activeBtn');
        itemBtnActive.classList.remove('activeBtn')
        item.classList.add('activeBtn');
    }
})
