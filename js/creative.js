(function($) {
  "use strict"; // Start of use strict

  let scroll_delta = 40;
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - scroll_delta)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: scroll_delta
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 25) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  // //Carousel Section
  // $('#myCarousel').on('slide.bs.carousel', function (e) {
  //   var $e = $(e.relatedTarget);
  //   var idx = $e.index();
  //   var itemsPerSlide = 4;
  //   var totalItems = $('.carousel-item').length;
  //   if (idx >= totalItems-(itemsPerSlide-1)) {
  //     var it = itemsPerSlide - (totalItems - idx);
  //     for (var i=0; i<it; i++) {
  //       // append slides to end
  //       if (e.direction=="left") {
  //         $('.carousel-item').eq(i).appendTo('.carousel-inner');
  //       } else {
  //         $('.carousel-item').eq(0).appendTo('.carousel-inner');
  //       }
  //     }
  //   }
  // });

  // $('#myCarousel').carousel({ interval: 2000});

  // $(document).ready(function() {
  //   /* show lightbox when clicking a thumbnail */
  //   $('a.thumb').click(function(event){
  //     event.preventDefault();
  //     var content = $('.modal-body');
  //     content.empty();
  //       var title = $(this).attr("title");
  //       $('.modal-title').html(title);        
  //       content.html($(this).html());
  //       $(".modal-profile").modal({show:true});
  //   });
  // });

})(jQuery); // End of use strict




//normalize carousel height
// Normalize Carousel Heights - pass in Bootstrap Carousel items.
$.fn.carouselHeights = function() {

  var items = $(this), //grab all slides
      heights = [], //create empty array to store height values
      tallest; //create variable to make note of the tallest slide

  var normalizeHeights = function() {

      items.each(function() { //add heights to array
          heights.push($(this).height()); 
      });
      tallest = Math.max.apply(null, heights); //cache largest value
      items.each(function() {
          $(this).css('min-height',tallest + 'px');
      });
  };

  normalizeHeights();

  $(window).on('resize orientationchange', function () {
      //reset vars
      tallest = 0;
      heights.length = 0;

      items.each(function() {
          $(this).css('min-height','0'); //reset min-height
      }); 
      normalizeHeights(); //run it again 
  });

};

jQuery(function($){

  $(window).on('load', function(){
      $('#reviewsCarousel .carousel-item').carouselHeights();
  });

});