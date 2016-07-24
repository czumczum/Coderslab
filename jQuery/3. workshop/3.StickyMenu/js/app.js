$(document).ready(function() {

	var nav = $('nav');
	var menu = $('ul.menu');
	
	var check = function(e) {
		var navOff = nav.offset().top;
		var scroll = $(document).scrollTop();
		if (navOff <= scroll) {
			menu.addClass('sticky');
		} else {
			menu.removeClass('sticky');
		}
	}
	
	$(window).on("scroll", check);
	$(window).on('resize', check);

});