document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".hero-video");

    if (video) {
        video.muted = true;
        video.play().catch(() => {
            console.log("Autoplay blocked");
        });
    }
});
