
import 'normalize.css';
import './swiper-bundle.min.css'
import './swiper-bundle.min';
import './style.scss';



// =================SIDEBAR & MENU=====================
const show_menu = document.querySelector(".menu-icon");
const sidebar_menu = document.querySelector(".sidebar");
const sidebar_close = document.querySelector(".sidebar-close");

show_menu.addEventListener("click", () => {
    sidebar_menu.classList.toggle("active");
});
sidebar_close.addEventListener("click", () => {
    sidebar_menu.classList.toggle("active");
})


// =================HERO SECTION=====================
// -----------ROW 1-------------
const row1 = new Swiper(".row-1", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    loop: true,

    slidesOffsetBefore: 0,
    breakpoints: {
        500: {
            direction: 'vertical',
            slidesPerView: 3,
            slidesOffsetBefore: 0,
        },
        600: {
            direction: 'vertical',
            slidesPerView: 3,
            slidesOffsetBefore: 0,
        },
        769: {
            direction: 'horizontal',
            slidesPerView: 4,
            slidesOffsetBefore: -360,
        },
        1024: {
            direction: 'horizontal',
            slidesPerView: 5,
            slidesOffsetBefore: -360,
        }

    }
});

// ----------ROW 2--------------
const row2 = new Swiper(".row-2", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    breakpoints: {
        500: {
            direction: 'vertical',
            slidesPerView: 3,
        },
        600: {
            direction: 'vertical',
            slidesPerView: 3,
        },
        769: {
            direction: 'horizontal',
            slidesPerView: 4,
        },
        1024: {
            direction: 'horizontal',
            slidesPerView: 5,
        }
    }
});



// ==================QUOTES===============
const prev_quote = document.querySelector(".button-prev");
const next_quote = document.querySelector(".button-next");
const checkBoundaryLeft = (index) => {
    if (index === 0) {
        prev_quote.style.display = "none";
    } else {
        prev_quote.style.display = "flex";
    }
}

const checkBoundaryRight = (index, length) => {
    if (index === length - 1) {
        next_quote.style.display = "none";
    } else {
        next_quote.style.display = "flex";
    }
}
const quotes = new Swiper(".text", {
    realIndex: 3,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    on: {
        slideChange: function () {
            checkBoundaryLeft(quotes[1].activeIndex);
            checkBoundaryRight(quotes[1].activeIndex, quotes[1].slides.length);
        }
    }

});
checkBoundaryLeft(quotes[1].activeIndex);

