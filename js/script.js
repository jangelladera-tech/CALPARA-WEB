const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent =
        "¡Gracias! Tu consulta ha sido registrada. Esta es una demostración del formulario.";

    form.reset();
});

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const whatsapp = document.querySelector(".wa");
const contacto = document.querySelector("#contacto");

window.addEventListener("scroll", function () {

    const posicionContacto = contacto.getBoundingClientRect();

    if (posicionContacto.top <= window.innerHeight * 0.7) {
        whatsapp.classList.add("show");
    } else {
        whatsapp.classList.remove("show");
    }

});
