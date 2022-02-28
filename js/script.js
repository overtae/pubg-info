// 맵 이미지 슬라이드

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

// 소셜 링크 배경 전환

window.onload = function() {

  VanillaTilt.init(document.querySelectorAll(".social-icons li a"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 1
  });

  let list = document.querySelectorAll(".social-icons li")
  let bg = document.querySelector(".social")

  list.forEach(elements => {
    elements.addEventListener('mouseenter', function
    (event) {
      let color = event.target.getAttribute('data-color');
      bg.style.background = color;
    })
    elements.addEventListener('mouseleave', function
    (event) {
      bg.style.background = 'rgb(50, 50, 50)';
    })
  })
}

// 로딩 페이지

function loading() {
  var loader = document.querySelector(".loading-screen");
  var page = document.querySelector(".page");
  loader.style.display = "none";
  page.style.display = "block";
}

setTimeout(loading, 2000);
