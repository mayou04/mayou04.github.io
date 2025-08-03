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
    threshold: 0.3
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

// Slideshow for drawings
let drawingSlideIndex = 1;
let drawingSlideTimer = null;

// ...existing code...

function showDrawingSlide(n) {
    const slides = document.querySelectorAll('.drawing-slide');
    if (slides.length === 0) return;
    if (n > slides.length) drawingSlideIndex = 1;
    if (n < 1) drawingSlideIndex = slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });

    const currentSlide = slides[drawingSlideIndex - 1];
    currentSlide.style.display = 'block';
    // Force reflow for transition
    void currentSlide.offsetWidth;
    currentSlide.classList.add('active');
}

// ...existing code...

function plusSlides(n) {
    showDrawingSlide(drawingSlideIndex += n);
    resetDrawingSlideshowTimer();
}

function autoAdvanceDrawingSlide() {
    drawingSlideIndex++;
    showDrawingSlide(drawingSlideIndex);
    drawingSlideTimer = setTimeout(autoAdvanceDrawingSlide, 4000); // 3 seconds
}

function resetDrawingSlideshowTimer() {
    clearTimeout(drawingSlideTimer);
    drawingSlideTimer = setTimeout(autoAdvanceDrawingSlide, 4000);
}

document.addEventListener('DOMContentLoaded', function() {
    showDrawingSlide(drawingSlideIndex);
    drawingSlideTimer = setTimeout(autoAdvanceDrawingSlide, 4000);
});

// Work Table
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

// Image zoom modal
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.centered-img').forEach(function(img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      var modal = document.getElementById('imgModal');
      var modalImg = document.getElementById('imgModalImg');
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });
  document.querySelector('.img-modal-close').onclick = function() {
    document.getElementById('imgModal').style.display = 'none';
  };
  document.getElementById('imgModal').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };
});
