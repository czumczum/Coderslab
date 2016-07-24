$(document).ready(function() {

	var element = $('#box1');


	element.on('mouseenter', function(e) {
		$(this).css('background-color', 'red')
	});
	element.on('mouseleave', function(e) { $(this).css('background-color', 'green')
	});
});

