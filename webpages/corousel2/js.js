var slide = document.querySelectorAll('.slideshow-container');
var btns = document.querySelectorAll('.slide-btn');
let currentSlide = 1;
//Manual selection

var manualNavi = function(manual) {
  slide.forEach((slider) =>{
    slider.classList.remove('active');
  });
  btns.forEach((btn) =>{
    btn.classList.remove('active');
  });
	slide[manual].classList.add('active');
	btns[manual].classList.add('active');
}
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
   manualNavi(i);
   currentSlide = i;
   console.log(i)
  });
}); 