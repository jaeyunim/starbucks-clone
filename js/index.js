const gradualEls = document.querySelectorAll('.news .gradual-img');

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