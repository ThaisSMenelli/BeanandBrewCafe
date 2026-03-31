document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".hero-video");

    if (video) {
        video.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
});