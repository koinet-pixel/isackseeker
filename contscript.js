document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    status.style.color = "#0b3c49";
    status.textContent = "Message sent successfully. We will contact you soon.";

    this.reset();
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
