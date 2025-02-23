let slides = document.querySelectorAll(".slide");
let currentIndex = 0;


// Show first slide
slides[currentIndex].classList.add("active");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.pause(); // Pause video when hidden
        if (i === index) {
            slide.classList.add("active");
            slide.play(); // Play only the active video
        }
    });
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});
