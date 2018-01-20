$(document).ready(function() {
	
	var toggle = $('#ss_toggle');
  var menu = $('#ss_menu');
  var rot;

  
  $('#ss_toggle').on('click', function(ev) {
    rot = parseInt($(this).data('rot')) - 180;
    menu.css('transform', 'rotate(' + rot + 'deg)');
    menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
    if ((rot / 180) % 2 == 0) {
      //Moving in
      toggle.parent().addClass('ss_active');
      toggle.addClass('close');
    } else {
      //Moving Out
      toggle.parent().removeClass('ss_active');
      toggle.removeClass('close');
    }
    $(this).data('rot', rot);
  });

  menu.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
    if ((rot / 180) % 2 == 0) {
      $('#ss_menu div i').addClass('ss_animate');
    } else {
      $('#ss_menu div i').removeClass('ss_animate');
    }
  });
	
	$(window).scroll(function() {
		parallax();
	});

	function parallax() {

		var wScroll = $(window).scrollTop();
		

		$('.parallax--bg').css('background-position', 'center '+(wScroll*0.08)+'%')
	}

  $(".item").brazzersCarousel();


});
