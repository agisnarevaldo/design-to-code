let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.info("hello");
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500);
}
