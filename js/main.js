const search = document.querySelector('.search');
const searchInput = search.querySelector('input');
const badgeEl = document.querySelector('.badges')
const gradualEls = document.querySelectorAll('.news .gradual-img');

function handleSearch() {
    searchInput.focus();
}

function handleFoucs() {
    searchInput.setAttribute("placeholder", "SEARCH");
}

function handleBlur() {
    searchInput.setAttribute("placeholder", "");
}

search.addEventListener("click", handleSearch);
searchInput.addEventListener("focus", handleFoucs);
searchInput.addEventListener("blur", handleBlur);

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none"
        })
    } else {
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: "block"
        })
    }
    // gsap.to(요소, 지속시간, 옵션);
}, 300));
//_.throttle(함수, 시간);

gradualEls.forEach((gradualEl, index) => {
    gsap.to(gradualEl, 1, {
        delay: (index + 1) * 0.5,
        opacity: 1
    })
})
// gsap.to(요소, 지속시간, 옵션);

new Swiper('.notice .inner__left .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper(".promotion .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
});

new Swiper(".awards .swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
})

//   TOGGLE
const promotionToggle = document.querySelector(".notice .inner__right .material-icons");
const promotionEl = document.querySelector(".promotion");

function handlePromotion() {
    if (promotionEl.classList.contains("show")) {
        promotionEl.classList.remove("show");
        promotionEl.classList.add("hidden");
    } else {
        promotionEl.classList.remove("hidden");
        promotionEl.classList.add("show");
    }
}

promotionToggle.addEventListener("click", handlePromotion);