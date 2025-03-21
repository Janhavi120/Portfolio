document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector("#menu");
    let navbar = document.querySelector(".navbar");

    menu.addEventListener("click", function () {
        menu.classList.toggle("bx-x"); // Toggle icon
        navbar.classList.toggle("active"); // Show/hide navbar
    });

    // Close navbar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !navbar.contains(event.target)) {
            menu.classList.remove("bx-x");
            navbar.classList.remove("active");
        }
    });

    // Close navbar when scrolling
    window.addEventListener("scroll", function () {
        menu.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});



const typed = new Typed('.multiple-text', {
    strings: ['Python Developer','Fronted Developer', 'Backend Developer','web Designer',''],
    typeSpeed: 90,
     backSpeed:90,
     backDelay:1200,
     loop:true,
});