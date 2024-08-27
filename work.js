document.addEventListener('DOMContentLoaded', function () {
    // Check if the element exists before manipulating it
    const slides = document.querySelectorAll('.slides img');
    if (slides.length > 0) {
        let slideIndex = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[index].style.display = 'block';
        }

        function autoSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }

        showSlide(slideIndex);
        setInterval(autoSlide, 5000);
    }

    // Additional code for hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('open');
        });

        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                nav.classList.remove('open');
            }
        });
    }
});