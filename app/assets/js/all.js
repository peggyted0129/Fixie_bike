
$(function() {
  console.log('Hello Bootstrap4');
});

// AOS 動畫
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
 
$(document).ready(function() {
  
    // RWD navbar 首頁
    $(".navbar-icon").on('click', function(){
      $(".toggler-bar-top").toggleClass("toggler-bar-top-rotate");
      $(".toggler-bar-middle").toggleClass("d-none");
      $(".toggler-bar-bottom").toggleClass("toggler-bar-bottom-rotate");
    })


    $(window).scroll(function(e) {
      
      const scrollPos = $(this).scrollTop();
      const windowHeight = $(window).height();
      const jsImg = $('.js-img').offset().top;
      const jsImgNext = $('.js-img-next').offset().top;

      if (scrollPos + windowHeight / 2 >= jsImg) {
        $('.js-img').css(
          'background-position', `-${parseInt(scrollPos / 6)}px center`
        );
      }
  
      if (scrollPos + windowHeight / 2 >= jsImgNext) {
        $('.js-img-next').css(
          'background-position', `-${parseInt(scrollPos / 6)}px center`
        );
      }
    })
})

