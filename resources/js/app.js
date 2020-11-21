const mobileMenu = document.querySelector("#mobile-menu-icon");
const mainNav = document.querySelector(".main-nav")

const toggleNav = () => {
    mainNav.classList.toggle('displayElement');
}

mobileMenu.addEventListener("click", toggleNav);


