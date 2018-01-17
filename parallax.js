$(document).ready(function() {
	
	$(window).scroll(function() {
		parallax();
	});

	function parallax() {

		var wScroll = $(window).scrollTop();
		

		$('.parallax--bg').css('background-position', 'center '+(wScroll*0.08)+'%')
	}

});
