const orderForm = document.getElementById("orderForm");

const orderMessage = document.getElementById("orderMessage");


orderForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const product = document.getElementById("product").value;

    const quantity = document.getElementById("quantity").value;


    orderMessage.textContent =
        `Thank you ${name}! Your order for ${quantity} ${product}(s) has been received. We will contact you at ${phone}.`;


    orderForm.reset();

});