let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    currentSlide = (index + totalSlides) % totalSlides;
    const translateValue = -currentSlide * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Autoplay (opcional)
// setInterval(nextSlide, 3000);
