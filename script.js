// Smooth Scroll to Sections
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Contact Form Message
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.innerText = "Message sent successfully!";
    msg.style.color = "green";

    form.reset();
});
