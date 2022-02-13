const search = document.querySelector('.search');
const searchInput = search.querySelector('input');

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