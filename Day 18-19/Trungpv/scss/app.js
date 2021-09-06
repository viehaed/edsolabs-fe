const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btn = $('.pageBtn');
const listBtn = $$('.pageBtn');
const itemMenu = $$('.item-menu');

Array.from(itemMenu).forEach(item => {
    item.onclick = () => {
        const itemMenuActive = $('.item-menu.activeItemMenu');
        itemMenuActive.classList.remove('activeItemMenu');
        item.classList.add('activeItemMenu');
    }
})

Array.from(listBtn).forEach(item => {
    item.onclick = () => {
        const itemBtnActive = $('.pageBtn.activeBtn');
        itemBtnActive.classList.remove('activeBtn')
        item.classList.add('activeBtn');
    }
}) 