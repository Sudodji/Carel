$(function() {
  const prevIcon = '<img src="/assets/slider-arrow-left.svg">';
  const nextIcon = '<img src="/assets/slider-arrow-right.svg">';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      margin: 15,
      dots: false,
      nav: true,
      loop: true,
      responsive:{
        0:{
          items:3
        },
        561:{
          items:6
        }
      },
      navText:[
      prevIcon,
      nextIcon,
      ]
    }
    );
  });
});
