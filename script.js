var slideIndex = 1;
showImages();

function moveImage(n) {
  showImage((slideIndex += n));
}

function currentImage(n) {
  showImage((slideIndex = n));
}

function showImage(n) {
  var i;
  var slides = document.getElementsByClassName("map-img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showImages() {
  var i;
  var slides = document.getElementsByClassName("map-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showImages, 3000);
}
