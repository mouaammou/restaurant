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
}
