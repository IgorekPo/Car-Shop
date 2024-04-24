new Swiper('.swiper',{
    // стрілки
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Буліти
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        // динамічні буліти
        dynamicBullets: true,
    },
    // авто висота слайду-якщо тексту більше у якомусь блоці
    autoHeight: true,
    // кількість слайдів на сторінці
    slidesPerView: 2.4,
    // відстань від слайдерів
    spaceBetween: 30, 
    // безкінечний слайдер
    loop: true,
    
    // Швидкість прокрутки слайда
    speed: 700,
    
    
    //     // авто прокрутка слайдів
    // autoplay:{
    //     // пауза між прокруткою слайдів
    //     delay: 1000,
    //     // зупинити на останньому слайді
    //     stopOnLastSlide: true,
    //     // відключити після ручного перемикання
    //     disableOnInteraction: false,
    // },

            // Брейк поінти для слайдера (адаптив)
            // Ширина Екрану
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
