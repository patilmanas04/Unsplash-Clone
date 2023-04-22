let menuButton = document.querySelector(".header-section .top-header-section .right .menu-icon");
let toggleMenuBlurBackground = document.querySelector(".toggle-menu-blur-background");
let toggleMenu = document.querySelector(".toggle-menu");
let toggleMenuCloseButton = document.querySelector(".toggle-menu .close-button");

menuButton.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    toggleMenuBlurBackground.style.opacity = "1";
    toggleMenuBlurBackground.style.zIndex = "50";
    toggleMenu.style.left = "0";
});

toggleMenuCloseButton.addEventListener("click", function () {
    document.body.style.overflow = "auto";
    toggleMenuBlurBackground.style.opacity = "0";
    toggleMenuBlurBackground.style.zIndex = "-50";
    toggleMenu.style.left = "-100%";
});


let toggleMenuItems = document.querySelectorAll(".toggle-menu-item");
// console.log(toggleMenuItems);
toggleMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        toggleMenuBlurBackground.style.opacity = "0";
        toggleMenuBlurBackground.style.zIndex = "-50";
        toggleMenu.style.left = "-100%";
    })
});

let aboutMenuItem = document.querySelector(".about-menu-item");
aboutMenuItem.addEventListener("click", () => {
    aboutSection.style.display = "flex";
    document.body.style.overflow = "hidden";
});