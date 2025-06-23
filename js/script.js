// If screen more than 60% from a section, mark that one as current.
document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".tab");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.tab[href="#${id}"]`);

    if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("current"));
        if (link) link.classList.add("current");
    }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
});

    sections.forEach(section => {
        if (section.id) {
        observer.observe(section);
        }
    });
});