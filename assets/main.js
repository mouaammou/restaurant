let menu = document.getElementById("menu-bars");
let navbar = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle("active");
}

//on resize the window the navbar will be hidden
window.onresize = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    document.querySelector('#search-form').classList.remove("active")
}

document.getElementById("close").onclick = () => {
    document.querySelector('#search-form').classList.toggle("active")
}

document.getElementById("search-bar").onclick = () => {
    document.querySelector('#search-form').classList.toggle("active")
}

//swiper script 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
