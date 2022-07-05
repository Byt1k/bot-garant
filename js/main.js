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