const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all required fields.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

        form.reset();
    });
});