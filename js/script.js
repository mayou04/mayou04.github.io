// If screen more than 60% from a section, mark that one as current.
document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".view");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.view[href="#${id}"]`);

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

// Flip effect for contact box
window.addEventListener('DOMContentLoaded', () => {
    var flipBox = document.getElementById('contactFlipBox');
    if (flipBox) {
        flipBox.addEventListener('click', function() {
            flipBox.classList.toggle('flipped');
        });
    }
});


function openTab(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 