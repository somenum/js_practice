let slides = document.querySelectorAll(".image-to-show");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].className = "image-to-show";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "image-to-show showing";
}
let playing = true;
let pauseBtn = document.getElementById("pause");
let resumeBtn = document.getElementById("resume");

pauseBtn.onclick = function () {
  if (playing) {
    clearInterval(slideInterval);
  }
};
resumeBtn.onclick = function () {
  slideInterval = setInterval(nextSlide, 3000);
};
