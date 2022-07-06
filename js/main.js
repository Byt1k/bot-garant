$('.advantages-slider').owlCarousel({
    loop: true,
    margin:20,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1.5
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

const games = {
    loop: true,
    margin:20,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:2,
            margin:12
        },
        768:{
            items:2,
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
}

$('.mobile-games__slider').owlCarousel(games)
$('.computer-games__slider').owlCarousel(games)

const catalogItems = document.querySelectorAll('.catalog .item')

catalogItems.forEach(i => {
    const btnAdd = i.querySelector('.btn-add')

    const btnPlus = i.querySelector('.plus');
    const btnMinus = i.querySelector('.minus');
    
    let count = i.querySelector('.count')

    btnAdd.addEventListener('click', (e) => {
        e.target.parentNode.classList.add('active');
        count.innerHTML = 1;
    })

    btnPlus.addEventListener('click', () => {
        count.innerHTML = Number(count.innerHTML) + 1;
    })

    btnMinus.addEventListener('click', () => {
        if (+count.innerHTML > 0) {
            count.innerHTML = Number(count.innerHTML) - 1;
        }

        if (+count.innerHTML == 0) {
            i.querySelector('.bottom').classList.remove('active')
        }
    })
})


const basketItems = document.querySelectorAll('.basket .item');
const basketEmpty = document.querySelector('.basket-empty');

// if (!basketItems.length) {
//     basketEmpty.style.display = 'block';
// }

basketItems.forEach(i => {
    const btnPlus = i.querySelector('.plus');
    const btnMinus = i.querySelector('.minus');

    let count = i.querySelector('.count')

    btnPlus.addEventListener('click', () => {
        count.innerHTML = Number(count.innerHTML) + 1;
    })

    btnMinus.addEventListener('click', () => {
        if (+count.innerHTML > 0) {
            count.innerHTML = Number(count.innerHTML) - 1;
        }

        // if (+count.innerHTML == 0) {
        //     i.remove();
        // }
    })
})


const burger = document.querySelector('.burger img')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMobileMenu = document.querySelector('.mobile-menu .close')
const mobileMenuItems = document.querySelectorAll('.mobile-menu ul li a')
console.log(mobileMenuItems);

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})

mobileMenuItems.forEach(i => {
    i.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
    })
})


