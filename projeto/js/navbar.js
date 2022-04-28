(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery);
  
  
// MOBILE NAVBAR

var show = true;

function menuClick(){
	console.log('menu aberto');

	// MENU ICON
	const line1 = document.getElementById('line1');
	const line2 = document.getElementById('line2');
	const line3 = document.getElementById('line3');
	// MENU MOBILE
	const menu = document.getElementById('mobile-menu');
	
	show = !show;

	if(!show){
		// ICON TRANSFORM
		line1.style.transform = 'rotate(45deg)';
		line2.style.transform = 'rotate(-45deg)';
		line2.style.marginTop = '-10px';
		line3.style.opacity = '0';
		
		// SHOW MENU
		menu.style.transform = 'translateX(0%)';
		document.body.style.overflowY = 'hidden'
	}else{
		// ICON TRANSFORM
		line1.style.transform = 'rotate(0deg)';
		line2.style.transform = 'rotate(0deg)';
		line2.style.marginTop = '0px';
		line3.style.opacity = '1';

		// SHOW MENU
		menu.style.transform = 'translateX(100%)';
		document.body.style.overflowY = 'scroll'
	}
}
  