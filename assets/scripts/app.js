const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.slide__navigation_next',
        prevEl: '.slide__navigation_prev',
    },
    pagination: {
        el: '.slide__navigation_current',
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return current
        }
    },
});

const burgerIcon = document.querySelector(".header__burger")
const burgerMenu = document.querySelector(".header__container")
burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active")
    burgerMenu.classList.toggle("active")
})
