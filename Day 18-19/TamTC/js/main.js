const scrollItem = (element, classEffect) => {
    let marginTop = parseInt(getComputedStyle(element).marginTop)
    let paddingTop = parseInt(getComputedStyle(element).paddingTop)
    if (window.pageYOffset === 0 && (window.innerHeight - marginTop - paddingTop > element.getBoundingClientRect().top)) {
        window.addEventListener('load', () => {
            element.classList.add(classEffect)
            console.log(element)
        })
    }
    else {
        window.addEventListener('scroll', () => {
            if (window.innerHeight - marginTop - paddingTop > element.getBoundingClientRect().top) {
                element.classList.add(classEffect)
            }
        })
    }
}
const itemSequence = (list, classEffect) => {
    let k = 0;
    let animaIcon = setInterval(() => {
        list[k].classList.add(classEffect)
        k++
        if (k === list.length)
            clearInterval(animaIcon)
    }, 1000)
}

const counters = (numbers) => {
    const speed = 500;
    numbers.forEach(number => {
        const animate = () => {
            const valueNumber = +number.getAttribute('data-number');
            const valueText = number.getAttribute('data-text');
            const data = +number.innerText;
            const time = valueNumber / speed;
            if (data < valueNumber) {
                number.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                number.innerText = valueText;
            }
        }
        animate();
    });
}
const animateCounter = (list) => {
    const counterElements = document.querySelectorAll('.counter__title')
    counterElements.forEach(e => {
        let margin = parseInt(getComputedStyle(e).margin)
        let padding = parseInt(getComputedStyle(e).padding)
        if (window.pageYOffset === 0 && (window.innerHeight - margin - padding > e.getBoundingClientRect().top)) {
            window.addEventListener('load', () => {
                e.style.opacity = 1
                counters(list)
            })
        }
        else {
            window.addEventListener('scroll', () => {
                if (window.innerHeight - margin - padding > e.getBoundingClientRect().top) {
                    e.style.opacity = 1
                    counters(list)
                }
            })
        }

    })
}
const activeLink = (list) => {

    list.forEach(item => {
        item.addEventListener('click', () => {
            list.forEach(item => {
                item.classList.remove('is-active')
            })
            item.classList.add('is-active')
            console.log(item)
        })
    })
}
const runAnimation = (() => {
    const jumbotron = document.querySelector('.jumbotron')
    const email = document.querySelector('.email')
    const banner = document.querySelector('.banner')
    const icons = document.querySelectorAll('.banner__icon')
    const numbers = document.querySelectorAll('.counter__title')
    const navLinks = document.querySelectorAll('.navbar__link')
    scrollItem(jumbotron, 'go-to-right')
    scrollItem(email, 'go-to-up')
    scrollItem(banner, 'go-to-left')
    itemSequence(icons, 'go-to-down')
    animateCounter(numbers)
    activeLink(navLinks)
}
)()