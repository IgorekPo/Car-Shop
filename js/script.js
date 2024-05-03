

let headerBody = document.querySelector('.header__body');
let headerNav = document.querySelector('.header__nav');
document.querySelector('.burger__menu').addEventListener('click', function(burger){
    this.classList.toggle('active');
    headerBody.classList.toggle('active');
    headerNav.classList.toggle('active');
})



new Swiper('.swiper',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoHeight: true,

    slidesPerView: 2.4,
    spaceBetween: 30, 
    loop: true,
    speed: 700,
    breakpoints:{
        957: {
            slidesPerView: 2.6,
        },
        808: {
            slidesPerView: 2.2,
            spaceBetween: 15,
        },
        501: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },
        370: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
    },
});

