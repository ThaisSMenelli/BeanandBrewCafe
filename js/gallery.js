const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {

    // CAROUSEL
    document.querySelectorAll(".carousel").forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        const nextBtn = carousel.querySelector(".carousel-btn.next");
        const prevBtn = carousel.querySelector(".carousel-btn.prev");

        let index = 0;
        let startX = 0;
        let endX = 0;

        function moveCarousel() {
            const width = track.children[0].getBoundingClientRect().width + 15; // image width + gap
            if (index < 0) index = track.children.length - 1;
            if (index >= track.children.length) index = 0;
            track.style.transform = `translateX(-${index * width}px)`;
        }

        // BUTTONS
        nextBtn.addEventListener("click", () => {
            index++;
            moveCarousel();
        });

        prevBtn.addEventListener("click", () => {
            index--;
            moveCarousel();
        });

        // TOUCH
        track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
        track.addEventListener("touchend", e => {
            endX = e.changedTouches[0].clientX;
            const threshold = 50;
            if (startX - endX > threshold) { index++; moveCarousel(); }
            else if (endX - startX > threshold) { index--; moveCarousel(); }
        });

    });

    // LIGHTBOX
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    document.querySelectorAll(".carousel-track img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => lightbox.style.display = "none");
    lightbox.addEventListener("click", e => {
        if (e.target !== lightboxImg) lightbox.style.display = "none";
    });

});