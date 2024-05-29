window.onload = function() {
    showSlides(pagenum);
    showGameSlides(pagenum);
    showMovieSlides(pagenum);
}

let pagenum = 1;


showSlides(pagenum);

function plusSlides(n) {
  showSlides(pagenum += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("recent");
  if (n > slides.length) {pagenum = 1}    
  if (n < 1) {pagenum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[pagenum-1].style.display = "flex";  
}

showGameSlides(pagenum);

function plusGameSlides(n) {
  showGameSlides(pagenum += n);
}

function showGameSlides(n) {
  let i;
  let slides = document.getElementsByClassName("game");
  if (n > slides.length) {pagenum = 1}    
  if (n < 1) {pagenum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[pagenum-1].style.display = "flex";  
}

showMovieSlides(pagenum);

function plusMovieSlides(n) {
  showMovieSlides(pagenum += n);
}

function showMovieSlides(n) {
  let i;
  let slides = document.getElementsByClassName("movie");
  if (n > slides.length) {pagenum = 1}    
  if (n < 1) {pagenum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[pagenum-1].style.display = "flex";  
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}