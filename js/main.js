
(function($) {
	"use strict";

		
		/*====================================
					Android stock browser
		======================================*/
		
		$(function () {
		  var nua = navigator.userAgent
		  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
		  if (isAndroid) {
			$('select.form-control').removeClass('form-control').css('width', '100%')
		  }
		})	



		/*====================================
					Preloader
		======================================*/

		$(window).load(function() {
				var loadingAnimation = $('.loading')
				loadingAnimation.fadeOut();
		});

		/*====================================
					Clock Countdown
		======================================*/

		$('#clock-countdown').countdown('2017/08/14 12:00:00').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>'
				+ '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'
				+ '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'
				+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
			));
		});
		
		
		
		/*====================================
					Flexslider
		======================================*/

		$('.flexslider').flexslider({
			animation: "fade",
			animationLoop: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,			
			controlNav: false,
			directionNav: false,			
			keyboard: false,			
			start: function(slider){
			$('body').removeClass('loading');
			}
		});


		
		/*====================================
					Flexslider
		======================================*/

		$(document).ready(function() {
		 
		  $("#owl-demo").owlCarousel({
		 
			  autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
			  items : 4,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,3]
		 
		  });
		 
		});

		/*====================================
					Nice Scroll
		======================================*/
			
		$("html").niceScroll({
			cursorcolor: '#ccc',
			cursoropacitymin: '0',
			cursoropacitymax: '1',
			cursorwidth: '3px',
			zindex: 10000,
			horizrailenabled: false,
		});

				
			
		/*====================================
					Animated.css
		======================================*/

		$('.animated').appear(function() {
			var element = $(this),
				animation = element.data('animation'),
				animationDelay = element.data('animation-delay');
				if ( animationDelay ) {
	
					setTimeout(function(){
						element.addClass( animation + " visible");
					}, animationDelay);
	
				} else {
					element.addClass( animation + " visible");
				}
		});


})(jQuery);