const menuBtn = document.querySelector(".menu__btn"),
      menuMibile = document.querySelector(".header__menu-list");

menuBtn.addEventListener('click', () => {
    menuMibile.classList.toggle('menu__open');
})


const swiperOne = new Swiper('.feedback__slider', {
    oop: true,
    pagination: {
      el: '.swiper-pagination',
    }
});

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        450: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        640: {
            spaceBetween: 10,
            slidesPerView: 3,
        }
    }
});


const accordeon = document.querySelector('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__titel');


accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitel) {
    accordeonTitel.addEventListener('click', function() {
        const currentText = accordeonTitel.parentElement.querySelector('.accordeon__text');
        accordeonTitel.classList.toggle('accordeon__titel-active');
        currentText.classList.toggle('accordeon__text--visible');

        if(currentText.classList.contains("accordeon__text--visible")) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        } else {
            currentText.style.maxHeight = null;
        }
    })
})