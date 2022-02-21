const search = document.querySelector('.search');
const searchInput = search.querySelector('input');
const badgeEl = document.querySelector('.badges');

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

new Swiper(".awards .swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
});