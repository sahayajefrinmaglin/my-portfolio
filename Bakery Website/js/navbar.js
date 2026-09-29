const menuBtn = document.getElementById("menubtn");
const navbar = document.getElementById("navbar");

// Hamburger menu
if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}


// Active navbar link
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});