const search = document.querySelector('.search');
const searchInput = search.querySelector('input');
const badgeEl =document.querySelector('.badges')

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

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
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
}, 300));