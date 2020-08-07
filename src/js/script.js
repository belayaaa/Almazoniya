$(function() {
  "use strict";

// ========================================================================= //
//  Menu nav toggle 
// ========================================================================= //
  	var navToggle = $("#nav_toggle");
        navToggle.on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

        navToggle.toggleClass("#nav_toggle.active");
    });


	  

// ========================================================================= //
//  Init AOS
// ========================================================================= //
		function aos_init() {
		AOS.init({
		  duration: 800,
		  easing: "ease-in-out",
		  once: true
		});
		}
		$(window).on('load', function() {
		aos_init();
		});


// ========================================================================= //
//  Owl Carousel
// ========================================================================= //

		 $(".about-carousel").owlCarousel({
		 	
		    autoplay: true,
		    dots: false,
		    loop: true,
		    nav: true,
		    navText : ["",""],

		    responsive: {
		      0: {
		        items: 1
		      },
		      768: {
		        items: 2
		      },
		      900: {
		        items: 2
		      }
		    }
		  });


		 $(".gallery-carousel").owlCarousel({
		 	
		    autoplay: true,
		    dots: false,
		    loop: true,

		    responsive: {
		      0: {
		        items: 2
		      },
		      768: {
		        items: 4
		      },
		      900: {
		        items: 6
		      }
		    }
		  });

// ========================================================================= //
//  Initiate venobox (lightbox feature used in portofilo)
// ========================================================================= //

	    $('.venobox').venobox({
	      'share': false,
	       spinner : 'cube-grid',         
	    });

// ========================================================================= //
//  Collapse
// ========================================================================= //

	    $("[data-collapse]").on("click", function(event) {
	        event.preventDefault();

	        var $this = $(this),
	            blockId = $this.data('collapse');

	        $this.toggleClass("active");
	    });


// ========================================================================= //
//  Smooth scroll
// ========================================================================= //
		    $("[data-scroll]").on("click", function(event) {
		        event.preventDefault();

		        var $this = $(this),
		            blockId = $this.data('scroll'),
		            blockOffset = $(blockId).offset().top;

		        $("#nav a").removeClass("active");
		        $this.addClass("active");

		        $("html, body").animate({
		            scrollTop:  blockOffset
		        }, 500);
		    });


// ========================================================================= //
//  Back to top button
// ========================================================================= //
			$('.back-to-top','').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
			});

		
// ========================================================================= //
//  Typed Js
// ========================================================================= //
	    var typed = $(".typed");
	    typed.typed({
	      strings: ["лечить зубы!", "находиться!"],
	      typeSpeed: 100,
	      loop: true,
	    });



});