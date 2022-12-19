const slider = document.querySelector('.swiper-container');
var mySlider;

const enableSwiper = function() {
 mySlider = new Swiper(slider, {
   slidesPerView: 1.2,
   spaceBetween: 16,
   slidesPerGroup:1,
   slidesOffsetBefore:40,
   loop: true,
   centeredSlides: false,
   breakpoints: {
    0:{
          slidesPerView: 1.2,
          slidesPerGroup: 1,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
           }
   },
  540:{
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
     }
   },
  }
 });
}

const getWW = function() {
  if(window.innerWidth>=768){ 
    if ( mySlider !== undefined ) mySlider.destroy( true, true );
  }
  else{
    if ( mySlider === undefined ) enableSwiper(); 
  } 
  
}
getWW();

window.addEventListener("resize", event => {
  getWW();
}, false);