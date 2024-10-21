const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const imgSlider = Array.from(document.querySelectorAll(".img-service"));
const textShoe = Array.from(document.querySelectorAll(".shoe-text"));

let currentSlide = 0;
const showSlide = (index) => {
  imgSlider.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.classList.toggle("hide", i !== index);
  });

  textShoe.forEach((text, i) => {
    text.classList.toggle("active", i === index);
    text.classList.toggle("hide", i !== index);
  });
};
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % imgSlider.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + imgSlider.length) % imgSlider.length;
  showSlide(currentSlide);
});

showSlide(0);
