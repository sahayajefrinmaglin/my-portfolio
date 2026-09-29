const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.textContent =
        "Thank you! Your message has been sent successfully.";

    contactForm.reset();

});