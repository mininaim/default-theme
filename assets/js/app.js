// Init Slick
// #todo: Get rid of jQuery dependency
$(document).ready(function(){
    $('.slick').slick({
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        rtl: true,
        centerMode: true,
        centerPadding: '60px',
      });
});
  
// Feather Icons
feather.replace()

// Progress Loader
let bar = new ProgressBar.Line('#progress', {
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFD14B',
    trailColor: '#8d5ea7',
    trailWidth: 0,
    svgStyle: { width: '100%', height: '3px' },
});
bar.animate(2.0);

// Enable tooltips 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




