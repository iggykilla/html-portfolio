const fadeElements = document.querySelectorAll(".fade-in-effect");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
});

fadeElements.forEach((el) => observer.observe(el));